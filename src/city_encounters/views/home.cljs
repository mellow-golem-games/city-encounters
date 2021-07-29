(ns city-encounters.views.home
  (:require [cljs.core.async :refer [take!]]
            [re-frame.core :as re-frame]
            [city-encounters.services.api :as api]
            [city-encounters.components.Button :refer [Button]]
            [city-encounters.components.Loader :refer [Loader]]))


(def SIZES ["Hamlet" "Village" "CITY" "TOWN" "METROPOLIS"])
(def OUTCOME_TYPE ["Good" "Neutral" "Bad"])
(def OUTCOMES ["Combat" "Roleplay" "Hook"])

(defn on-success [res]
  (re-frame/dispatch [:set-is-loading false])
  (re-frame/dispatch [:set-encounter (:body res)]))

(defn on-error []
  (re-frame/dispatch [:set-is-loading false])
  (js/alert "There was an error"))

(defn get-encounter [size outcome extra]
  (re-frame/dispatch [:set-is-loading true])
  (let [outcomes-string (subs (reduce #(str %1 "," %2) "" (concat [outcome] extra)) 1)
        c (api/get-random-encouner size outcomes-string)]
    (take! c
      (fn [res]
        (if (= (:status res) 200)
          (on-success res)
          (on-error))))))

(defn set-current-size [size-string]
  (re-frame/dispatch [:set-current-size size-string]))

(defn set-current-outcome [outcome-string]
  (re-frame/dispatch [:set-current-outcome outcome-string]))

(defn set-extra-outcomes [outcome-string add?]
  (if add?
    (re-frame/dispatch [:add-extra-outcome outcome-string])
    (re-frame/dispatch [:remove-extra-outcome outcome-string])))

(defn Home-page []
  (let [encounter @(re-frame/subscribe [:encounter])
        current-size @(re-frame/subscribe [:current-size])
        current-outcome @(re-frame/subscribe [:current-outcome])
        extra-outcomes @(re-frame/subscribe [:extra-outcomes])
        is-loading? @(re-frame/subscribe [:is-loading])]
    [:div.Home.page.text-center.container.mx-auto.pt-4.px-2
     [:h2.text-4xl.pb-2 "Choose Your Encounter Settings"]
     [:div.Home__buttonWrapper.flex.flex-wrap.py-4.justify-center
      [:h3.min-w-full.text-3xl.pb-2 "Location Size"]
      (for [size SIZES]
        ^{:key size} [Button size (= current-size size) #(set-current-size size)])]
     [:div.Home__buttonWrapper.flex.flex-wrap.py-4.justify-center
      [:h3.min-w-full.text-3xl.pb-2 "Outcome"]
      (for [outcome OUTCOME_TYPE]
        ^{:key outcome} [Button outcome (= current-outcome outcome) #(set-current-outcome outcome)])]
     [:div.Home__buttonWrapper.flex.flex-wrap.py-4.justify-center
      [:h3.min-w-full.text-3xl.pb-2 "Extras"]
      (for [outcome OUTCOMES]
        (let [is-in-list? (some #(= outcome %) extra-outcomes)]
          ^{:key outcome} [Button outcome is-in-list? #(set-extra-outcomes outcome (not is-in-list?))]))]

     [:button.text-xl.rounded.py-2.px-4.uppercase {:on-click #(get-encounter current-size current-outcome extra-outcomes)} "Generate"]
     (if is-loading?
       [Loader]
       (if encounter
         [:div
          [:p (:name encounter)]
          [:p (:description encounter)]]
         nil))]))
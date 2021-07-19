(ns city-encounters.views.home
  (:require [cljs.core.async :refer [take!]]
            [re-frame.core :as re-frame]
            [city-encounters.services.api :as api]
            [city-encounters.components.Button :refer [Button]]))

(def SIZES ["Hamlet" "Village" "CITY" "TOWN" "METROPOLIS"])
(def OUTCOME_TYPE ["Good" "Neutral" "Bad"])
(def OUTCOMES ["Combat" "Roleplay" "Hook"])


(defn get-encounter [size outcome extra]
  (let [outcomes-string (subs (reduce #(str %1 "," %2) "" (concat [outcome] extra)) 1)
        c (api/get-random-encouner size outcomes-string)]
    (take! c
      (fn [res]
        (if (= (:status res) 200)
          (re-frame/dispatch [:set-encounter (:body res)])
          (js/alert "There was an erorr"))))))

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
        extra-outcomes @(re-frame/subscribe [:extra-outcomes])]
    [:div.Home.page
     [:h1 "Home"]
     [:p current-size]
     [:div.Home__buttonWrapper
      (for [size SIZES]
        ^{:key size} [Button size (= current-size size) #(set-current-size size)])]
     [:div.Home__buttonWrapper
      (for [outcome OUTCOME_TYPE]
        ^{:key outcome} [Button outcome (= current-outcome outcome) #(set-current-outcome outcome)])]
     [:div.Home__buttonWrapper
      (for [outcome OUTCOMES]
        (let [is-in-list? (some #(= outcome %) extra-outcomes)]
          ^{:key outcome} [Button outcome is-in-list? #(set-extra-outcomes outcome (not is-in-list?))]))]

     [:button {:on-click #(get-encounter current-size current-outcome extra-outcomes)} "Generate"]
     (if encounter
       [:div
        [:p (:name encounter)]
        [:p (:description encounter)]]
       nil)]))

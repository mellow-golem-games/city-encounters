(ns city-encounters.views.home
  (:require [cljs.core.async :refer [take!]]
            [re-frame.core :as re-frame]
            [city-encounters.services.api :as api]
            [city-encounters.components.Results :refer [Results]]
            [city-encounters.components.Button :refer [Button]]
            [city-encounters.components.Loader :refer [Loader]]
            [city-encounters.components.Nav :refer [Nav]]
            [city-encounters.views.saved :as Saved]
            [city-encounters.views.settings :as Settings]
            [city-encounters.components.toast :refer [Toast]]
            ["@capacitor-community/admob" :refer (AdMob)]
            ["capacitor-plugin-app-tracking-transparency" :refer (AppTrackingTransparency)]))

; these functions should probaby live in their own ns, but it breaks for some reason
; TODO investigate this - probably not too big of a deal since this won't grow much more

(.requestPermission AppTrackingTransparency) ; fire our base tracking

(defn get-tracking-status []
  (.then (.getStatus AppTrackingTransparency)
    (fn [status]
      (if (= (:status (js->clj status :keywordize-keys true)) "authorized")
        true
        false))))

(defn show-ad []
  (.then (get-tracking-status)
    (fn [status]
      (let [AdOptions {:adId "PLACEHOLDER" :isTesting false :npa status}]
        (.then (.prepareInterstitial AdMob (clj->js AdOptions))
          (fn [_]
            (.showInterstitial AdMob)))))))

(def SIZES ["Hamlet" "Village" "Town" "City" "Metropolis"])
(def OUTCOME_TYPE ["Good" "Neutral" "Bad"])
(def OUTCOMES ["Combat" "Roleplay" "Hook"])

(def amount-loaded (atom 0))

(defn on-success [res]
  (re-frame/dispatch [:set-is-loading false])
  (re-frame/dispatch [:set-encounter (:body res)]))

(defn on-error []
  (re-frame/dispatch [:set-is-loading false])
  (re-frame/dispatch [:set-encounter nil])
  (Toast
    {:text "There was an error - Please try again" :hideAfterN true
     :styles {:background "#fb6a71;" :border "1px solid #fb6a71;" :z-index "999;" :color "white;"}}))

(defn get-encounter [size outcome extra]
  (if (and size outcome)
    (let [outcomes-string (subs (reduce #(str %1 "," %2) "" (concat [outcome] extra)) 1)
          c (api/get-random-encouner size outcomes-string)]
      (re-frame/dispatch [:set-encounter "LOADING"]) ; we set this so we can trigger the slide up
      (re-frame/dispatch [:set-is-loading true])
      (take! c
        (fn [res]
          (if (= (:status res) 200)
            (on-success res)
            (on-error)))))
    (Toast
      {:text "Size and Outcome Required" :hideAfterN true
       :styles {:background "#fb6a71;" :border "1px solid #fb6a71;" :z-index "999;" :color "white;"}})))

(defn set-current-size [size-string]
  (re-frame/dispatch [:set-current-size size-string]))

(defn set-current-outcome [outcome-string]
  (re-frame/dispatch [:set-current-outcome outcome-string]))

(defn set-extra-outcomes [outcome-string add?]
  (if add?
    (re-frame/dispatch [:add-extra-outcome outcome-string])
    (re-frame/dispatch [:remove-extra-outcome outcome-string])))

(defn on-encounter-reset []
  (re-frame/dispatch [:set-encounter nil])
  (if (or (= @amount-loaded 0) (= (mod @amount-loaded 5) 0))
    (show-ad)
    nil)
  (swap! amount-loaded inc))

(defn Home-page []
  (let [encounter @(re-frame/subscribe [:encounter])
        current-size @(re-frame/subscribe [:current-size])
        current-outcome @(re-frame/subscribe [:current-outcome])
        extra-outcomes @(re-frame/subscribe [:extra-outcomes])
        is-loading? @(re-frame/subscribe [:is-loading])
        active-page @(re-frame/subscribe [:active-page])
        saved-outcomes @(re-frame/subscribe [:saved-outcomes])]
    [:div.Home.page.text-center.mx-auto.pt-4 {:class (if encounter "Home__encounter" "")}
     [Saved/Saved-page active-page]
     [Settings/Settings-page active-page]
     [:div.Home__options.px-2
      [:h2.text-2xl.md:text-4xl.pb-2.pt-2 "Choose Your Settings"]
      [:div.Home__buttonWrapper.flex.flex-wrap.py-2.md:py-4.justify-center
       [:h3.min-w-full.text-xl.md:text-3xl.pb-2 "Location Size"]
       (for [size SIZES]
         ^{:key size} [Button size (= current-size size) #(set-current-size size)])]
      [:div.Home__buttonWrapper.flex.flex-wrap.py-2.md:py-4.justify-center
       [:h3.min-w-full.text-xl.md:text-3xl.pb-2 "Outcome"]
       (for [outcome OUTCOME_TYPE]
         ^{:key outcome} [Button outcome (= current-outcome outcome) #(set-current-outcome outcome)])]
      [:div.Home__buttonWrapper.flex.flex-wrap.py-2.md:py-4.justify-center
       [:h3.min-w-full.text-xl.md:text-3xl.pb-2 "Extras (Optional)"]
       (for [outcome OUTCOMES]
         (let [is-in-list? (some #(= outcome %) extra-outcomes)]
           ^{:key outcome} [Button outcome is-in-list? #(set-extra-outcomes outcome (not is-in-list?))]))]
      [:button.Button__generate.text-xl.text-white.rounded.uppercase.mt-4 {:on-click #(get-encounter current-size current-outcome extra-outcomes)} "Generate"]
      [:div.Home__options__bottom.text-center.flex.items-center.flex-col.justify-center {:on-click #(on-encounter-reset)}
       [:h3.text-white.text-xl.flex-grow-0  "New Encounter?"]
       [:svg {:aria-hidden "true" :focusable "false" :role "img" :style {:width "15px"} :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 320 512"}
         [:path {:fill "white" :d "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"}]]
       [:div.Home__options__bottom__border]]]
     (if is-loading?
       [Loader]
       (if encounter
         [Results encounter saved-outcomes]
         nil))
     [Nav]]))

(ns city-encounters.views.saved
  (:require [cljs.core.async :refer [take!]]
            [re-frame.core :as re-frame]
            [city-encounters.services.local :as localstorage]))

(defn get-saved-outcomes [])
(.then (localstorage/get-current-state)
  (fn [value]
    (re-frame/dispatch [:set-saved-outcomes (js->clj  value :keywordize-keys true)])))


(defn Saved-page [active]
  (let [saved-outcomes @(re-frame/subscribe [:saved-outcomes])]
    (fn [active]
     (if saved-outcomes
       [:div.Saved.sub-page.mx-auto.pt-4 {:class (if (= active "saved") "active" nil)}
        (if (= (count saved-outcomes) 0)
          [:h3.text-3xl  "No Saved Encounters"]
          (for [outcome saved-outcomes]
           [:div.max-w-xl.mx-auto.px-6 {:key (:_id outcome)}
            [:div.flex.justify-between
              [:h3.text-3xl (:name outcome)]
              [:svg {:style {:width "24px" :height "24px" :viewBox "0 0 24 24"} :on-click #(localstorage/handle-delete (:_id outcome))}
                 [:path {:fill "#62574a" :d "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"}]]]
            [:p (:description outcome)]]))]
       (get-saved-outcomes)))))

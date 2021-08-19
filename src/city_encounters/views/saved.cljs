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
       [:div.Saved.sub-page.text-center.mx-auto.pt-4 {:class (if (= active "saved") "active" nil)}
        (for [outcome saved-outcomes]
         [:div {:key (:_id outcome)}
            [:h3 (:name outcome)]
            [:p (:description outcome)]])]
       (get-saved-outcomes)))))

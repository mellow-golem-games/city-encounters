(ns city-encounters.views.saved
  (:require [cljs.core.async :refer [take!]]
            [re-frame.core :as re-frame]
            [city-encounters.services.local :as localstorage]))

(defn get-saved-outcomes [])
(.then (localstorage/get-current-state)
  (fn [value]
    (let [val-to-save (if-not value [] (js->clj value :keywordize-keys true))]
      (re-frame/dispatch [:set-saved-outcomes val-to-save]))))


(defn Saved-page [active]
  (let [saved-outcomes @(re-frame/subscribe [:saved-outcomes])]
     (if saved-outcomes
       [:div.Saved.sub-page.mx-auto.pt-4 {:class (str (if (= active "saved") " active " nil) (if (> (count saved-outcomes) 3) " pb-20 " nil)) :style {:overflow "scroll"}}
        (if (= (count saved-outcomes) 0)
          [:h3.text-3xl "No Saved Encounters"]
          (for [outcome saved-outcomes]
           [:div.max-w-xl.mx-auto.px-6.py-4 {:key (:_id outcome)}
            [:div.flex.justify-between
              [:h3.text-3xl (:name outcome)]
              [:svg {:style {:width "22px" :height "22px"} :viewBox "0 0 576 512" :on-click #(localstorage/handle-delete (:_id outcome))}
                [:path {:fill "#62574a" :d "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}]]]
            [:p (:description outcome)]]))]
       (get-saved-outcomes))))

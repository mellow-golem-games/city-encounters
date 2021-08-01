(ns city-encounters.components.Nav
  (:require [re-frame.core :as re-frame]
            [city-encounters.services.local :as localstorage]))

(defn Nav []
  (let [encounter @(re-frame/subscribe [:encounter])]
    [:div.Nav.fixed
     [:div.Nav__inner.flex.text-white.justify-center
      [:div.Nav__inner__item.px-2 {:on-click #(localstorage/handle-save (:_id encounter))}
       [:p "I"]]
      [:div.Nav__inner__item.px-2
       [:p "I"]]
      [:div.Nav__inner__item.px-2
       [:p "I"]]]]))

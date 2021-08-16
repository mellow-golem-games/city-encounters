(ns city-encounters.components.Nav
  (:require [re-frame.core :as re-frame]))

(defn Nav []
  (let [encounter @(re-frame/subscribe [:encounter])]
    [:div.Nav.fixed
     [:div.Nav__inner.flex.text-white.justify-center
      [:div.Nav__inner__item.px-4.py-4 {:on-click #(re-frame/dispatch [:set-active-page "home"])}
       [:svg {:style {:width "24px" :height "24px"} :viewBox "0 0 24 24"}
        [:path {:fill "currentcolor" :d "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"}]]]
      [:div.Nav__inner__item.px-4.py-4 {:on-click #(re-frame/dispatch [:set-active-page "saved"])}
       [:svg {:style {:width "24px" :height "24px" :viewBox "0 0 24 24"}}
          [:path {:fill "currentColor" :d "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"}]]]
      [:div.Nav__inner__item.px-4.py-4
       [:svg {:style {:width "24px" :height "24px"} :viewBox "0 0 24 24"}
        [:path {:fill "currentcolor" :d "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}]]]]]))

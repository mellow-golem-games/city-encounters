(ns city-encounters.components.Nav
  (:require [re-frame.core :as re-frame]))
; 903918
(defn get-fill [active-page val]
  (if (or (= active-page val)
          (and (not active-page) (= val "home")))
    "#903918"
    "#62574a"))

(defn Nav []
  (let [encounter @(re-frame/subscribe [:encounter])
        active-page @(re-frame/subscribe [:active-page])]
    [:div.Nav.fixed
     [:div.Nav__inner.flex.text-white.justify-center
      [:div.Nav__inner__item.px-4.py-4 {:on-click #(re-frame/dispatch [:set-active-page "home"])}
       [:svg {:style {:width "24px" :height "24px"} :viewBox "0 0 24 24"}
        [:path {:fill (get-fill active-page "home") :d "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"}]]]
      [:div.Nav__inner__item.px-4.py-4 {:on-click #(re-frame/dispatch [:set-active-page "saved"])}
       [:svg {:style {:width "22px" :height "22px"} :viewBox "0 0 576 512"}
         [:path {:fill (get-fill active-page "saved") :d "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}]]]
      [:div.Nav__inner__item.px-4.py-4 {:on-click #(re-frame/dispatch [:set-active-page "settings"])}
       [:svg {:style {:width "24px" :height "24px"} :viewBox "0 0 24 24"}
        [:path {:fill (get-fill active-page "settings") :d "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}]]]]]))

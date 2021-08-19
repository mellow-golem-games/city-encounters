(ns city-encounters.components.Results
  (:require [city-encounters.services.local :as localstorage]))


(defn Results [encounter]
  [:div.Results.max-w-xl.mx-auto.px-6
   [:div.Results__header.flex.justify-between
    [:h2.text-3xl (:name encounter)]
    [:svg {:style {:width "24px" :height "24px" :viewBox "0 0 24 24" :on-click #(localstorage/handle-save encounter)}}
       [:path {:fill "#62574a" :d "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"}]]]
   [:div.Results__details.pt-2
    [:p (:description encounter)]]])

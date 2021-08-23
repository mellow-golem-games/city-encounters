(ns city-encounters.views
  (:require
   [re-frame.core :as re-frame]
   [city-encounters.subs :as subs]))


(defn main-page
  []
  (print "Main Page")
  (let [current-route @(re-frame/subscribe [:current-route])]
    (print current-route)
    [:div
     (when current-route
       [(-> current-route :data :view)])]))

(defn root []
  [:div#root
   {:style {:width "100vw"}}
   [main-page]])

(ns city-encounters.views.home
  (:require [cljs.core.async :refer [take!]]
            [re-frame.core :as re-frame]
            [city-encounters.services.api :as api]))


(defn get-encounter []
  (let [c (api/get-random-encouner)]
    (take! c
      (fn [res]
        (if (= (:status res) 200)
          (re-frame/dispatch [:set-encounter (:body res)])
          (js/alert "There was an erorr"))))))

(defn Home-page []
  (let [encounter @(re-frame/subscribe [:encounter])]
    [:div.Home.page
     [:h1 "Home"]
     [:button {:on-click #(get-encounter)} "Generate"]
     (if encounter
       [:div
        [:p (:name encounter)]
        [:p (:description encounter)]]
       nil)]))

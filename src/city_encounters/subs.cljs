(ns city-encounters.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
  :current-route
  (fn [db]
    (:current-route db)))

(re-frame/reg-sub
  :encounter
  (fn [db]
    (:encounter db)))
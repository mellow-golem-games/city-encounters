(ns city-encounters.services.local
  (:require ["localforage" :as localforage]
            [re-frame.core :as re-frame]
            [city-encounters.components.toast :refer [Toast]]))

(def STORAGE_KEY "mgg-city-encoutners-ids")

(defn get-current-state []
  (.getItem localforage STORAGE_KEY))

(defn handle-save [encounter]
  (if encounter
    (.then (get-current-state)
      (fn [value]
        (let [currentValue (js->clj value :keywordize-keys true)]
          (.then (.setItem localforage STORAGE_KEY (clj->js (conj currentValue encounter)))
            (fn [_]
             (re-frame/dispatch [:set-new-outcome encounter])
             (Toast
               {:text "Encounter Saved!" :hideAfterN true
                :styles {:background "#4fc17a;" :border "1px solid #4fc17a;" :z-index "999;" :color "white;"}}))))))
    (Toast
      {:text "No Encounter To Save!" :hideAfterN true
       :styles {:background "#fb6a71;" :border "1px solid #fb6a71;" :z-index "999;" :color "white;"}})))

(defn handle-delete [id]
  (.then (get-current-state)
    (fn [value]
      (let [currentValue (js->clj value :keywordize-keys true)
            newVal (remove #(= (:_id %) id) currentValue)]
        (.then (.setItem localforage STORAGE_KEY (clj->js newVal))
          (fn [_]
           (re-frame/dispatch [:set-saved-outcomes newVal])
           (Toast
             {:text "Encounter Deleted!" :hideAfterN true
              :styles {:background "#4fc17a;" :border "1px solid #4fc17a;" :z-index "999;" :color "white;"}})))))))

(ns city-encounters.services.local
  (:require ["localforage" :as localforage]
            [re-frame.core :as re-frame]))

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
             (js/alert "Saved!"))))))
    (js/alert "No Encounter To Save!")))

(defn handle-delete [id]
  (.then (get-current-state)
    (fn [value]
      (let [currentValue (js->clj value :keywordize-keys true)
            newVal (remove #(= (:_id %) id) currentValue)]
        (.then (.setItem localforage STORAGE_KEY (clj->js newVal))
          (fn [_]
           (re-frame/dispatch [:set-saved-outcomes newVal])
           (js/alert "Deleted!")))))))

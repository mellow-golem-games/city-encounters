(ns city-encounters.services.local
  (:require ["localforage" :as localforage]))

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
             (js/alert "Saved!"))))))
    (js/alert "No Encounter To Save!")))

(defn handle-delete [id]
  (.then (get-current-state)
    (fn [value]
      (let [currentValue (js->clj value :keywordize-keys true)]
        (.then (.setItem localforage STORAGE_KEY (clj->js (remove #(= (:_id %) id) currentValue)))
          (fn [_]
           (js/alert "Deleted!")))))))

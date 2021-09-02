(ns city-encounters.components.Results
  (:require [city-encounters.services.local :as localstorage]))

(defn get-fill [is-saved?]
  (if is-saved?
    "#903918"
    "#62574a"))

(defn is-encounter-saved? [encounter saved-outcomes]
  (-> (filter #(= (:_id %) (:_id encounter)) saved-outcomes)
      count
      (= 0)
      not))

(defn handle-localstorage [encounter is-saved?]
  (if is-saved?
    (localstorage/handle-delete (:_id encounter))
    (localstorage/handle-save encounter)))

(defn Results [encounter saved-outcomes]
  (let [is-saved? (is-encounter-saved? encounter saved-outcomes)]
    [:div.Results.max-w-xl.mx-auto.px-6
     [:div.Results__header.flex.justify-between
      [:h2.text-3xl (:name encounter)]
      [:svg {:style {:width "22px" :height "22px"} :viewBox "0 0 576 512" :on-click #(handle-localstorage encounter is-saved?)}
        [:path {:fill (get-fill is-saved?) :d "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}]]]
     [:div.Results__details.pt-2
      [:p (:description encounter)]]]))

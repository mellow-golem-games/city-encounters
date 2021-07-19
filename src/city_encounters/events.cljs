(ns city-encounters.events
  (:require
   [re-frame.core :as re-frame]
   [reitit.coercion.malli]
   [reitit.frontend]
   [reitit.frontend.easy :as rfe]
   [reitit.frontend.controllers :as rfc]
   [city-encounters.db :as db]))


(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-fx
  :navigate
  (fn [_cofx [_ & route]]
    {:navigate! route}))

;; Triggering navigation from events.
(re-frame/reg-fx
  :navigate!
  (fn [route]
    (apply rfe/push-state route)))


(re-frame/reg-event-db
  :navigated
  (fn [db [_ new-match]]
    (let [old-match   (:current-route db)
          controllers (rfc/apply-controllers (:controllers old-match) new-match)]
      (assoc db :current-route (assoc new-match :controllers controllers)))))

(re-frame/reg-event-db
  :set-current-size
  (fn [db [_ current-size]]
    (conj db {:current-size current-size})))

(re-frame/reg-event-db
  :set-current-outcome
  (fn [db [_ current-outcome]]
    (conj db {:current-outcome current-outcome})))

(re-frame/reg-event-db
  :add-extra-outcome
  (fn [db [_ outcome]]
    (update db :extra-outcomes conj outcome)))

(re-frame/reg-event-db
  :remove-extra-outcome
  (fn [db [_ outcome]]
    (update db :extra-outcomes (partial remove #(= % outcome)))))

(re-frame/reg-event-db
  :set-encounter
  (fn [db [_ encounter]]
    (conj db {:encounter encounter})))


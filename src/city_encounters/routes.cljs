(ns city-encounters.routes
  (:require
   [re-frame.core :as rf]
   [reitit.coercion.malli]
   [reitit.frontend]
   [reitit.frontend.easy :as rfe]
   [reitit.frontend.controllers :as rfc]
   [city-encounters.views.home :as Home]
   [city-encounters.events :as events]))


;;; Routes
(def routes
  ["/"
   [""
    {:name      :routes/home
     :view      Home/Home-page
     :link-text "Home"}]])

(def router
  (reitit.frontend/router
    routes
    {:data {:coercion reitit.coercion.malli/coercion}}))

(defn on-navigate [new-match]
  (when new-match
    (rf/dispatch [:navigated new-match])))

(defn init-routes! []
  (js/console.log "initializing routes")
  (rfe/start!
    router
    on-navigate
    {:use-fragment false}))
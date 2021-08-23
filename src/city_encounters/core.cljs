(ns city-encounters.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [city-encounters.events :as events]
   [city-encounters.views :as views]
   [city-encounters.config :as config]
   [city-encounters.views.home :as Home]
   [city-encounters.routes :as routes]))



(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (rdom/render [Home/Home-page]
               (.getElementById js/document "app")))

(defn ^:export init
  "Called on page-load in public/index.html.
  Only called once - does not get called on 'live-reloads' during development.
  "
  []
  (dev-setup)
  (mount-root)
  (re-frame/dispatch-sync [::events/init]))

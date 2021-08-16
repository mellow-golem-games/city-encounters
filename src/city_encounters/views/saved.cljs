(ns city-encounters.views.saved
  (:require [cljs.core.async :refer [take!]]
            [re-frame.core :as re-frame]))

(defn Saved-page [active]
  [:div.Saved.sub-page.text-center.mx-auto.pt-4 {:class (if (= active "saved") "active" nil)}
   [:h2 "hello from saved page!"]])

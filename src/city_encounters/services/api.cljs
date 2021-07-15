(ns city-encounters.services.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [city-encounters.config :as config]))

(defn get-random-encouner []
  (go (let [response (<! (http/get (str config/API_URL "city-encounter?size=Hamlet&outcomes=Good")
                                   {:with-credentials? false}))]
        response)))

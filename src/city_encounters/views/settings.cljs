(ns city-encounters.views.settings
  (:require [cljs.core.async :refer [take!]]
            [re-frame.core :as re-frame]))

(defn Settings-page [active]
  [:div.Settings.sub-page.text-center.mx-auto.pt-4 {:class (if (= active "settings") "active" nil)}
   [:div.max-w-sm.mx-auto
    [:h2.text-2xl.pt-2 "Thanks For Using Our App!"]
    [:p.pt-4 "City encounters is proudly built and maintained by the team at "
     [:a {:href "https://www.mellowgolemgames.com" :target "_blank"} "Mellow Golem Games."] " We
     are game developers and RPG lovers building apps and games that fuel our passions. Check out our
     site for more RPG inspired apps!"]

    [:h2.text-2xl.pt-6 "Have a Suggestion?"]
    [:p.pt-4 "If you have a suggestion or comment we'd love to hear it. We also want to improve, and do so
     by listening to our users. You can contact us at "
     [:a {:href "mailto: info@mellowgolem.com"} "info@mellowgolem.com."]]]])

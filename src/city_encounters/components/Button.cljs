(ns city-encounters.components.Button)

; This is a fake button we made just for this app to make some styling stuff easier.

(defn Button [text active? on-click]
  [:div.Button.text-white {:class (if active? "active" nil) :on-click #(on-click)}
   [:p text]])

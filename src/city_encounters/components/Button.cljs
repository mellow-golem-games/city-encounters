(ns city-encounters.components.Button)

; This is a fake button we made just for this app to make some styling stuff easier.

(defn Button [text active? on-click]
  [:div.Button.text-white {:class (if active? "active" nil) :on-click #(on-click)
                           :style {:backgroundImage (if-not active? "url('/images/button.png')" "url('/images/button_active.png')")}}

   ; [:img {:src "/images/button.png"}]
   [:p text]])

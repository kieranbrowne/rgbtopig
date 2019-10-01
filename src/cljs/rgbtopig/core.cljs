(ns rgbtopig.core
  (:require
   [reagent.core :as reagent]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Vars

(defonce app-state
  (reagent/atom
   {:rgb {:r 200 :g 200 :b 200}
    :pigs [{:pig "(PW6, PW4) Winsor & Newton Titanium White"
            :grams 0
            :id (gensym)}]}))

(defn css-colour [vals]
  (str "rgb(" (:r vals) "," (:g vals) "," (:b vals)")"))
(defn text-colour [vals]
  (if (< (+ (:r vals) (:g vals) (:b vals)) (* 255 1))
    "black"
    "white"
    ))

(defn update-val [atom event]
  (reset! atom (.. event -target -value)))

(defn rename-pig [atom id event]
  (swap! atom
         (partial mapv #(if (= id (:id %))
                         (assoc % :pig (.. event -target -value)) %))))

(defn change-weight-pig [atom id event]
  (swap! atom
         (partial mapv #(if (= id (:id %))
                          (assoc % :grams (.. event -target -value)) %))))

(defn form [ratom]
  [:form
   [:h1 {:style {:text-align "center"}} "RGBtoPIG"]
   [:div.rgb {:style {:text-align "center"}}
    [:input {:type "number" :placeholder "Red" :value (-> @ratom :rgb :r)
             :on-change (partial update-val (reagent/cursor ratom [:rgb :r]))
             :style {:color (text-colour (-> @ratom :rgb))}
             }]
    [:input {:type "number" :placeholder "Green" :value (-> @ratom :rgb :g)
             :style {:color (text-colour (-> @ratom :rgb))}
             :on-change (partial update-val (reagent/cursor ratom [:rgb :g]))}]
    [:input {:type "number" :placeholder "Blue" :value (-> @ratom :rgb :b)
             :style {:color (text-colour (-> @ratom :rgb))}
             :on-change (partial update-val (reagent/cursor ratom [:rgb :b]))}]]
   ;; [:p (-> @ratom :rgb str)]
   ;; [:p (-> @ratom :pigs str)]
   [:h2 "Pigments"]
   (for [p (-> @ratom :pigs)]
     ^{:key (:id p)}
     [:div
      [:input {:type "weight" :placeholder "Pigment" :value (:pig p)
               :on-change (partial rename-pig (reagent/cursor ratom [:pigs]) (:id p))}]
      [:input {:type "number" :placeholder "grams" :value (:grams p)
               :on-change (partial change-weight-pig (reagent/cursor ratom [:pigs]) (:id p))}]
      [:span {:on-click #(swap! (reagent/cursor ratom [:pigs]) (partial filter (fn [x] (not= (:id p) (:id x)))))} "×"]])
   [:div
    {:on-click #(swap! (reagent/cursor ratom [:pigs]) (fn [v] (conj v {:pig "" :grams 0 :id (gensym)})))} "add pig"]
   [:p "Paint names and weights in grams"]
   ])


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Page

(defn page [ratom]
  [:div#app {:style {:background (css-colour (-> @ratom :rgb))
                     :color (text-colour (-> @ratom :rgb))}}
   [form ratom]])



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Initialize App

(defn dev-setup []
  (when ^boolean js/goog.DEBUG
    (enable-console-print!)
    (println "dev mode")))
    

(defn reload []
  (reagent/render [page app-state]
                  (.getElementById js/document "app")))

(defn ^:export main []
  (dev-setup)
  (reload))

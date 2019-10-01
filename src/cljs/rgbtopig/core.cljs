(ns rgbtopig.core
  (:require
   [reagent.core :as reagent]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Vars

(def app-state
  (reagent/atom
   {:rgb {:r 255 :g 255 :b 255}
    :whitebalance {:r 255 :g 255 :b 255}
    :pigs [{:pig "(PW6, PW4) Winsor & Newton Titanium White"
            :grams 0
            :id (gensym)}]}))

(defn css-colour [state]
  (let [{whitebalance :whitebalance
         rgb :rgb} @state]
    (str "rgb(" (clojure.string/join "," ((juxt :r :g :b) rgb)) ")")))
(defn text-colour [state]
  (let [{rgb :rgb} @state]
    (if (> (reduce + (map int ((juxt :r :g :b) rgb))) (* 255 2))
      "black"
      "white"
      )))

(defn update-val [atom event]
  (reset! atom (.. event -target -value)))

(defn parse-int [x]
  (.parseInt js/window x))

(defn update-rgb-val [atom event]
  (reset! atom (min 255 (max 0 (-> event .-target .-value )))))

(defn rename-pig [atom id event]
  (swap! atom
         (partial mapv #(if (= id (:id %))
                         (assoc % :pig (.. event -target -value)) %))))

(defn change-weight-pig [atom id event]
  (swap! atom
         (partial mapv #(if (= id (:id %))
                          (assoc % :grams (.. event -target -value)) %))))

(defn rgb-form [curs]
  [:div
   [:input {:type "range" :min 0 :max 255 :value (-> @curs :r)
            :style {:background "linear-gradient( 90deg, #000, #f00)"}
            :on-change (partial update-rgb-val (reagent/cursor curs [:r]))}]
   [:input {:type "number" :placeholder "Red" :value (-> @curs :r)
            :style {:color (text-colour app-state)
                    :border-color (text-colour app-state)}
            :on-change (partial update-rgb-val (reagent/cursor curs [:r]))}][:br]
   [:input {:type "range" :min 0 :max 255 :value (-> @curs :g)
            :style {:background "linear-gradient( 90deg, #000, #0f0)"}
            :on-change (partial update-rgb-val (reagent/cursor curs [:g]))}]
   [:input {:type "number" :placeholder "Green" :value (-> @curs :g)
            :style {:color (text-colour app-state)
                    :border-color (text-colour app-state)}
            :on-change (partial update-rgb-val (reagent/cursor curs [:g]))}][:br]
   [:input {:type "range" :min 0 :max 255 :value (-> @curs :b)
            :style {:background "linear-gradient( 90deg, #000, #00f)"}
            :on-change (partial update-rgb-val (reagent/cursor curs [:b]))}]
   [:input {:type "number" :placeholder "Blue" :value (-> @curs :b)
            :style {:color (text-colour app-state)
                    :border-color (text-colour app-state)}
            :on-change (partial update-rgb-val (reagent/cursor curs [:b]))}]]
  )

(defn form [ratom]
  [:form
   [:h1 {:style {:text-align "center"}} "RGBtoPIG"]

   ;; [:div.whitebalance {:style {:text-align "center"}}
   ;;  [rgb-form (reagent/cursor ratom [:whitebalance])]]

   [:div.rgb {:style {:text-align "center"}}
    [rgb-form (reagent/cursor ratom [:rgb])]]
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
  [:div#app {:style {:background (css-colour app-state)
                     :color (text-colour app-state)}}
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

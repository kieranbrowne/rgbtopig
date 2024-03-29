(ns rgbtopig.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [reagent.core :as reagent]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))




;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Vars

(defonce app-state
  (reagent/atom
   {:rgb {:r 255 :g 255 :b 255}
    :whitebalance {:r 255 :g 255 :b 255}
    :show-whitebalance false
    :pigs [{:pig "(PW6, PW4) Winsor & Newton Titanium White"
            :grams 0
            :id (gensym)}]}))

(defn try-upload []
  (swap! app-state #(assoc % :remote :uploading))
  (go
    (let [response
          (<! (http/post "https://dev.kieranbrowne.com/rgbtopig-api/add"
                        {:json-params
                         (select-keys @app-state [:rgb :whitebalance :pigs])
                         :with-credentials? false
                         }))]
      (if (:success response)
        (do
          (swap! app-state #(assoc % :remote :success))
          (swap! app-state #(assoc % :rgb {:r 255 :g 255 :b 255})))
        (swap! app-state #(assoc % :remote :error))
        )
      (prn response)
      ))
  )

(def pigs
  ["(PW6, PW4) Winsor & Newton Titanium White"
   "(PB29) Art Spectrum Ultramarine Blue"
   "(PBr7) Gamblin Raw Sienna"
   "(PBr7) Gamblin Burnt Sienna"
   "(PBr7) Gamblin Burnt Umber"
   "(PV19) Flinders Blue Violet"
   "(PR108) Cadmium Maroon"
   "(PBk28) Gamblin Black Spinel"
   "(PG18) Art Spectrum Viridian"
   "(PY37, PY35, PG7) Art Spectrum Cadmium Green"
   "(PO20) Art Spectum Cadmium Orange"
   "(PR101) Gamblin Indian Red"
   "(PB27) Art Spectrum Prussian Blue"
   "(PB15:3, PW4) Art Spectrum Phthalo Blue"
   "(PR108) Art Spectrum Cadmium Red"
   "(PW6, PR101) Art Spectrum Flesh Tint Deep"
   "(PG18) Art Spectrum Viridian"
   ])

(defn whitebalance-colour [state]
  (let [{whitebalance :whitebalance} @state]
    (str "rgb(" (clojure.string/join "," ((juxt :r :g :b) whitebalance)) ")")))
(defn css-colour [state]
  (let [{whitebalance :whitebalance
         rgb :rgb} @state]
    (str "rgb(" (clojure.string/join ","
                                     (mapv (fn [v wb] (* v (/ wb 255)))
                                          ((juxt :r :g :b) rgb)
                                          ((juxt :r :g :b) whitebalance)
                                          ))
         ")")))
(defn text-colour [state]
  (let [{rgb :rgb} @state]
    (if (> (reduce + (mapv int ((juxt :r :g :b) rgb))) (* 255 2))
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

(defn suggestions [pig]
  (if (or (contains? (set pigs) (:pig pig)) (> 2 (.-length (:pig pig))))
    [:span ""]
    [:div {:style {:position "absolute"
                   :background (css-colour app-state)
                   :width "inherit"}}
     [:ul
      (for [s (take 3 (filter (fn [x] (not= -1 (.indexOf x (:pig pig)))) pigs))]
        [:li
         {:style {:cursor "pointer"}
          :on-click #(swap!
                      (reagent/cursor app-state [:pigs])
                      (partial mapv (fn [x] (if (= (:id x) (:id pig))
                                              (assoc x :pig s) x))))}
         s]
        )]])
  )

(defn form [ratom]
  [:div.form
   [:h1 {:style {:text-align "center"}} "RGBtoPIG"]

   (when (:show-whitebalance @ratom)
     [:div.whitebalance
      {:style {:text-align "center"
               :position :fixed
               :top 0 :left 0 :bottom 0 :right 0
               :padding-top "122px"
               :background (whitebalance-colour ratom)}}
      [rgb-form (reagent/cursor ratom [:whitebalance])]
      [:div
       {:style {:margin-top "20px" :cursor "pointer"}
        :on-click (fn [] (swap! ratom #(assoc % :show-whitebalance false)))}
       "Done ✔"]])

   [:div.rgb {:style {:text-align "center"}}
    [rgb-form (reagent/cursor ratom [:rgb])]]
   [:div {:style {:text-align "center" :margin-top "20px" :cursor "pointer"}
          :on-click (fn [] (swap! ratom #(assoc % :show-whitebalance true)))}
    "adjust whitebalance"]
   ;; [:p (-> @ratom :rgb str)]
   ;; [:p (-> @ratom :pigs str)]
   [:h2 "Pigments"]
   [:div.pig
    (for [p (-> @ratom :pigs)]
      ^{:key (:id p)}
      [:div
       [:input {:type "text" :placeholder "Pigment Code" :value (:pig p)
                :style {:color (if (contains? (set pigs) (:pig p)) (text-colour app-state) "red")
                        :border-color (text-colour app-state)}
                :on-change (partial rename-pig (reagent/cursor ratom [:pigs]) (:id p))}]
       [suggestions p]
       [:input {:type "number" :placeholder "grams" :value (:grams p)
                :step 0.1
                :style {:color (text-colour app-state)
                        :border-color (text-colour app-state)}
                :on-change (partial change-weight-pig (reagent/cursor ratom [:pigs]) (:id p))}]
       [:span {:style {:font-size "40px" :line-height "32px" :margin-left "10px" :vertical-align "top"}
               :on-click
               #(swap! (reagent/cursor ratom [:pigs])
                       (partial filter (fn [x] (not= (:id p) (:id x)))))} "×"]])
    [:div#addpig
     {:on-click #(swap! (reagent/cursor ratom [:pigs]) (fn [v] (conj v {:pig "" :grams 0 :id (gensym)})))
      :style {:font-size "40px" :border-color (text-colour app-state)}} "+"]
    ]
   [:div.submit
    [:button
     {:style (if (= :uploading (:remote @app-state))
               {:opacity "0.4" :pointer-events "none"} {})
      :on-click
      try-upload}
     "Submit"]
    (case (:remote @app-state)
      :uploading [:div.spinner]
      :success [:div.success "✓"]
      :error [:div.error "×"]
      [:div])
    ]
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

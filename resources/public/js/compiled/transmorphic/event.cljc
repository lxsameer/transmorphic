(ns transmorphic.event
  (:require [transmorphic.utils :refer [eucl-distance add-points delta]]))

(defn arrow? [e])

(defn meta-click? [e]
  (.-altKey e))

(defn shift? [e]
  (.-shiftKey e))

(defn get-cursor-pos [e]
  {:x (.-pageX e) :y (.-pageY e)})

(defn get-client-pos [e]
  {:x (.-clientX e) :y (.-clientY e)})

(def meta-focus (atom {:morph-id nil}))
(def hand-focus (atom {:morph-id nil
                       :start-pos nil}))

(defn get-current-time
  "current time as a map"
  []
  (let [d  #?(:clj (java.util.Date.)
                   :cljs (js/Date.))]
    {:hours (.getHours d)
     :minutes (.getMinutes d)
     :seconds (.getSeconds d)}))

(def step-cbs (atom {}))
(def current-time (atom (get-current-time)))

(def stepping? (atom true))

(defn update-time []
  (reset! current-time {:value (get-current-time)
                        :global? true})
  (when @stepping?
    (doseq [[ident cb] @step-cbs]
         (try
           (cb ident)
           (catch js/Error e
             e)))))

#?(:cljs (js/setInterval
        update-time
        100))

(defn wants-hand-focus? [props]
  "By looking at the props of a morph,
  we can tell, wether or not it is asking
  for the hand focus."
  (or (contains? props :grabbable?)
      (contains? props :draggable?)))

(defn drop-hand-focus! []
  (reset! hand-focus {:morph-id nil
                      :start-pos nil}))

(defn drop-meta-focus! []
  (reset! meta-focus {:morph-id nil}))

(defn clean-handlers! []
  (reset! step-cbs {}))

(defn extract-event-handlers [ident props refresh]
  (when-let [stepper (:step props)]
    (swap! step-cbs assoc ident stepper))
  {
  ; :onKeyDown
  ; (fn [e]
  ;   (prn "key down!")
  ;   (.preventDefault e)
  ;   (when-let [cb! (props :on-key-down)]
  ;     (cb! e)))
  ; :onKeyUp
  ; (fn [e]
  ;   (prn "key up!")
  ;   (.preventDefault e)
  ;   (when-let [cb! (props :on-key-up)]
  ;     (cb! e)))
   :onMouseMove
   (fn [e]
     (.preventDefault e)
     (when (= ident (:morph-id @hand-focus))
       (swap! hand-focus assoc :curr-pos (get-cursor-pos e)))
     (when-let [cb! (props :on-mouse-move)]
       (cb! e)
       (refresh)))
   :onMouseUp
   (fn [e]
     (.preventDefault e)
     (drop-hand-focus!)
     (when-let [cb! (props :on-mouse-up)]
       (cb! e)
       (refresh)))
   :onMouseDown
   (fn [e]
     (.preventDefault e)
     (when (and (meta-click? e)
                (-> @meta-focus :morph-id not)
                (-> @meta-focus :component-id not))
       (swap! meta-focus assoc :morph-id ident))
     (when (and (= 0 (.-button e))
                (-> @hand-focus :morph-id not)
                (wants-hand-focus? props))
       (reset! hand-focus {:morph-id ident
                           :start-pos (get-cursor-pos e)}))
     (when-let [cb! (props :on-mouse-down)]
       (cb! e)
       (refresh)))})

(ns transmorphic.tools.function-editor
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]] 
   [transmorphic.core :refer [defcomponent]])
  (:require [transmorphic.morph :refer [$morph orphaned? $parent $component $source]]
            [transmorphic.core :refer [rectangle text rerender! IRender
                                       universe checkbox ace refresh-scene!
                                       toggle-reconciler! update-abstraction! create-abstraction!]]
            [transmorphic.symbolic :refer [format-code get-external-reconciliation
                                           get-component-def]]
            [transmorphic.tools.window :refer [window]]
            [transmorphic.tools.ace :refer [setup-ace! set-value! 
                                             set-save-handler! set-change-handler!]]
            [transmorphic.repl :refer [get-ns-source]]
            [cljs.reader :refer [read-string]]
            [clojure.string :refer [join split-lines]]
            [cljs.pprint :refer [pprint code-dispatch *print-right-margin*]]))

(defn get-slice-for-defn [source defn-name]
  (let [ast (.. js/paredit (parse source))
        def-nodes 
        (into {}
              (js->clj 
                (.. ast -children 
                    (map (fn [node]
                           (when-let [ch (.. node -children)]
                             [(symbol
                               (.. js/paredit 
                                   -walk 
                                   (stringify (aget ch 1)))) 
                              node]))))))
        ns-def-node (get def-nodes defn-name)]
    (when ns-def-node
      {:start (get ns-def-node "start")
       :end (get ns-def-node "end")})))

; should be implemented on the component by default
(defn get-description-for [component root-morph]
  (if (and component (:root? root-morph))
    (format-code (apply list 'defcomponent (-> component :abstraction :name) 
                     (get-component-def @universe root-morph (:reconciler component))))
    (format-code (list 
                  'defcomponent 
                  (symbol (str (-> root-morph :props :id) "-component"))
                  'IRender
                  `(~'render [~'self ~'props ~'submorphs]
                     ~(get-external-reconciliation 
                       @universe root-morph))))))

(defn get-defn-in-source [component source]
  (let [{:keys [start end]} (get-slice-for-defn 
                             source 
                             (-> component :abstraction :name))]
    (subs source start end)))

; if non root-morph inspected, the component
; needs to be constructed ad hoc
(defn refresh-editor! [{:keys [local-state] :as self} 
                       ace-editor root-morph ns-source component]
  (when (and ns-source
             (-> local-state :locked? not))
      (cond
        (-> component :reconciler :active?)
        (set-value! 
          self 
          ace-editor 
          (get-description-for 
           component root-morph))
        (not component)
        (set-value! 
          self 
          ace-editor
          (get-description-for 
           component root-morph))
        :default
        (set-value! 
          self 
          ace-editor 
          (get-defn-in-source
           component
           ns-source)))))

(defn save-handler 
  [{:keys [local-state] :as self} 
   component root-morph ns-source
   {:keys [description
           ns name
           create?]}]
  (if create?
    (let [name (-> description read-string second)
          {:keys [start end]} (get-slice-for-defn
                               ns-source
                               ns)
          new-ns-source (str (subs ns-source start end) "\n\n"
                             `(declare ~name) "\n"
                             (subs ns-source end) "\n\n"
                             description)]
      (create-abstraction!
       self root-morph
       {:name name
        :ns ns
        :new-source new-ns-source}))
    (let [{:keys [start end]} 
          (get-slice-for-defn
           ns-source
           name)
          new-ns-source (str (subs ns-source 0 start)
                             description
                             (subs ns-source end))]
      (update-abstraction!
       self
       component
       {:ns ns :name name
        :new-source new-ns-source})))
  (rerender! self {:compiling? true}))

(defcomponent component-editor
  IRender
  (render [{:keys [local-state] :as self} 
           {:keys [position extent target-ref id on-close] :as props} _]
          (let [root-morph ($morph target-ref)
                component (and (:root? root-morph)
                               (:owner root-morph)
                               (get-in @universe (:owner root-morph))) 
                abstraction-info (or (:abstraction component)
                                     {:ns 'examples.playground
                                      :create? true
                                      :name (symbol (str (-> root-morph :props :id) "-component"))})
                title (str (-> abstraction-info :ns) "/" (-> abstraction-info :name))
                ns-source ($source (or (-> component :abstraction :ns)
                                       'examples.playground))
                editor (and (.getElementById js/document (props :id)) (.edit js/ace (props :id)))]
            (when editor
              (set-save-handler! 
                editor
                #(save-handler self component 
                               root-morph
                               ns-source
                               (assoc abstraction-info 
                                      :description %)))) 
            (window
             {:position position
              :extent extent
              :spinner? (:compiling? local-state)
              :on-close (fn [_] 
                          (on-close)
                          (rerender! self {:locked? false}))
              :title title}
             (ace {:ace-id id
                   :border-color 
                   (if (:locked? local-state)
                     "orange"
                     "transparent")
                   :step (fn [_]
                           (when editor
                             (refresh-editor! 
                              self editor 
                              root-morph ns-source component))) 
                   :did-mount (fn [_] 
                                (setup-ace! self props))})
             [(text {:position ($parent :extent #(hash-map :x 210 :y (- (:y %) 20)))
                       :text-string "Locked? "
                       :font-family "Chrono Medium Italic"
                       :text-color "black"
                       :font-size 12})
                (checkbox {:on-change (fn [_] 
                                        (rerender! self #(update-in % [:locked?] not)))
                           :checked? (-> local-state :locked?)
                           :position 
                           ($parent :extent 
                            #(hash-map :x 290 :y (- (:y %) 20)))})]
             (when component
               [(text {:position ($parent :extent #(hash-map :x 10 :y (- (:y %) 20)))
                       :text-string "Reconcile Changes "
                       :font-family "Chrono Medium Italic"
                       :text-color "black"
                       :font-size 12})
                (checkbox {:on-change (fn [_] 
                                        (toggle-reconciler! component))
                           :checked? (-> component :reconciler :active?)
                           :position 
                           ($parent :extent 
                            #(hash-map :x 180 :y (- (:y %) 20)))})])))))
(defproject transmorphic "0.1"
  :description "A Morphic centered around immutable views, but still allowing to evolve applications through direct manipulation."
  :license {:name "Eclipse Public License",
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.1.1"]]
  :source-paths ["src/clj" "src/cljs" "src/cljc" "test"]
  :cljsbuild {:builds {:main {:source-paths ["src/clj" "src/cljs" "src/cljc" "test"]
                        						:compiler {:optimizations :none
                                         :cache-analysis true 
                                   					 :output-dir "target/out"
                                  						 :output-to "target/cloxp-cljs.js"}}}
         			  :test-commands {"unit-tests" ["phantomjs" :runner "target/cloxp-cljs.js"]}}
  :dependencies
  [[cljsjs/react-dom "0.14.3-1"]
   [cljsjs/react-dom-server "0.14.3-0"]
   [org.clojure/clojure "1.7.0"]
   [org.clojure/clojurescript "1.7.170"]
   [org.rksm/cloxp-com "0.1.9-SNAPSHOT"]
   [org.omcljs/om "1.0.0-alpha22"]
   [reagent "0.5.1"]
   [org.clojure/core.async "0.1.346.0-17112a-alpha"]
   [cljs-tooling "0.1.7"]
   [org.clojure/tools.reader "1.0.0-alpha1"]
   [org.clojure/core.match "0.3.0-alpha4"]
   [pjstadig/humane-test-output "0.7.0"]]
   :main cljs-morphic.server/start-server
  :injections 
  [(require 'pjstadig.humane-test-output)
   (pjstadig.humane-test-output/activate!)])
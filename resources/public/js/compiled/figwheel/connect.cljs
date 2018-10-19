(ns figwheel.connect (:require [examples.playground] [figwheel.client] [transmorphic.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/transmorphic.core.reload-hook (apply js/transmorphic.core.reload-hook x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'transmorphic.core/reload-hook' is missing"))), :build-id "main", :websocket-url "ws://localhost:3449/figwheel-ws"})


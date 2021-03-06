// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('examples.playground');
goog.require('figwheel.client');
goog.require('transmorphic.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__36761__delegate = function (x){
if(cljs.core.truth_(transmorphic.core.reload_hook)){
return cljs.core.apply.call(null,transmorphic.core.reload_hook,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'transmorphic.core/reload-hook' is missing");
}
};
var G__36761 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__36762__i = 0, G__36762__a = new Array(arguments.length -  0);
while (G__36762__i < G__36762__a.length) {G__36762__a[G__36762__i] = arguments[G__36762__i + 0]; ++G__36762__i;}
  x = new cljs.core.IndexedSeq(G__36762__a,0);
} 
return G__36761__delegate.call(this,x);};
G__36761.cljs$lang$maxFixedArity = 0;
G__36761.cljs$lang$applyTo = (function (arglist__36763){
var x = cljs.core.seq(arglist__36763);
return G__36761__delegate(x);
});
G__36761.cljs$core$IFn$_invoke$arity$variadic = G__36761__delegate;
return G__36761;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"main",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map
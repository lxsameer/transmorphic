// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.utils');
goog.require('cljs.core');
transmorphic.utils.add_points = (function transmorphic$utils$add_points(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27244 = arguments.length;
var i__17884__auto___27245 = (0);
while(true){
if((i__17884__auto___27245 < len__17883__auto___27244)){
args__17890__auto__.push((arguments[i__17884__auto___27245]));

var G__27246 = (i__17884__auto___27245 + (1));
i__17884__auto___27245 = G__27246;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.utils.add_points.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.utils.add_points.cljs$core$IFn$_invoke$arity$variadic = (function (point,points){
return cljs.core.reduce.call(null,(function (p1,p2){
var map__27240 = p1;
var map__27240__$1 = ((((!((map__27240 == null)))?((((map__27240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27240):map__27240);
var x1 = cljs.core.get.call(null,map__27240__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__27240__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__27241 = p2;
var map__27241__$1 = ((((!((map__27241 == null)))?((((map__27241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27241):map__27241);
var x2 = cljs.core.get.call(null,map__27241__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__27241__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x1 + x2),new cljs.core.Keyword(null,"y","y",-1757859776),(y1 + y2)], null);
}),point,points);
});

transmorphic.utils.add_points.cljs$lang$maxFixedArity = (1);

transmorphic.utils.add_points.cljs$lang$applyTo = (function (seq27238){
var G__27239 = cljs.core.first.call(null,seq27238);
var seq27238__$1 = cljs.core.next.call(null,seq27238);
return transmorphic.utils.add_points.cljs$core$IFn$_invoke$arity$variadic(G__27239,seq27238__$1);
});
transmorphic.utils.eucl_distance = (function transmorphic$utils$eucl_distance(a,p__27247){
var map__27252 = p__27247;
var map__27252__$1 = ((((!((map__27252 == null)))?((((map__27252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27252):map__27252);
var bx = cljs.core.get.call(null,map__27252__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__27252__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__27254 = transmorphic.utils.add_points.call(null,a,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(- bx),new cljs.core.Keyword(null,"y","y",-1757859776),(- by)], null));
var map__27254__$1 = ((((!((map__27254 == null)))?((((map__27254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27254):map__27254);
var x = cljs.core.get.call(null,map__27254__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27254__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((x * x) + (y * y));
});
transmorphic.utils.delta = (function transmorphic$utils$delta(p__27256,p__27257){
var map__27262 = p__27256;
var map__27262__$1 = ((((!((map__27262 == null)))?((((map__27262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27262):map__27262);
var x1 = cljs.core.get.call(null,map__27262__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__27262__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__27263 = p__27257;
var map__27263__$1 = ((((!((map__27263 == null)))?((((map__27263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27263):map__27263);
var x2 = cljs.core.get.call(null,map__27263__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__27263__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return transmorphic.utils.add_points.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x1,new cljs.core.Keyword(null,"y","y",-1757859776),y1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(- x2),new cljs.core.Keyword(null,"y","y",-1757859776),(- y2)], null));
});
transmorphic.utils.contains_rect_QMARK_ = (function transmorphic$utils$contains_rect_QMARK_(p__27266,p__27267){
var vec__27270 = p__27266;
var origin_a = cljs.core.nth.call(null,vec__27270,(0),null);
var extent_a = cljs.core.nth.call(null,vec__27270,(1),null);
var vec__27271 = p__27267;
var origin_b = cljs.core.nth.call(null,vec__27271,(0),null);
var extent_b = cljs.core.nth.call(null,vec__27271,(1),null);
var and__16813__auto__ = (origin_a.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) < origin_b.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
if(and__16813__auto__){
var and__16813__auto____$1 = (origin_a.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) < origin_b.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)));
if(and__16813__auto____$1){
var expand_a = transmorphic.utils.add_points.call(null,origin_a,extent_a);
var expand_b = transmorphic.utils.add_points.call(null,origin_b,extent_b);
return ((expand_a.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) > expand_b.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))) && ((expand_a.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) > expand_b.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))));
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
});
transmorphic.utils.bounds = (function transmorphic$utils$bounds(morph){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph)),new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph))], null);
});
transmorphic.utils.bottom_right = (function transmorphic$utils$bottom_right(morph){
return new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph));
});
transmorphic.utils.top_right = (function transmorphic$utils$top_right(morph){
var extent = new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph));
return transmorphic.utils.add_points.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),extent.call(null,new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),extent);
});
transmorphic.utils.bottom_left = (function transmorphic$utils$bottom_left(morph){
var extent = new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph));
return transmorphic.utils.add_points.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),extent.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))], null),extent);
});

//# sourceMappingURL=utils.js.map
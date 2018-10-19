// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.morph');
goog.require('cljs.core');
goog.require('om.next');
goog.require('goog.dom');
goog.require('transmorphic.core');
goog.require('transmorphic.utils');
goog.require('transmorphic.repl');
goog.require('transmorphic.manipulation');
goog.require('transmorphic.symbolic');
cljs.core.enable_console_print_BANG_.call(null);
transmorphic.morph.orphaned_QMARK_;

transmorphic.morph.Root;

transmorphic.morph.Orphan;

transmorphic.morph.Part;

transmorphic.morph.Coll;

transmorphic.morph.RootView;

transmorphic.morph.MorphView;

transmorphic.morph.CollView;

transmorphic.morph.$owner;
transmorphic.morph.orphaned_QMARK_ = (function transmorphic$morph$orphaned_QMARK_(morph){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(morph));
});
transmorphic.morph.is_submorph_QMARK_ = (function transmorphic$morph$is_submorph_QMARK_(parent,morph){
return cljs.core.some.call(null,(function (p1__32419_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__32419_SHARP_),new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(morph));
}),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(parent));
});
transmorphic.morph.$source = (function transmorphic$morph$$source(ns_name){
var temp__4423__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("namespace","by-name","namespace/by-name",-896052663),ns_name], null));
if(cljs.core.truth_(temp__4423__auto__)){
var ns_source = temp__4423__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fetching","fetching",-1664990285),ns_source)){
return null;
} else {
return ns_source;
}
} else {
cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("namespace","by-name","namespace/by-name",-896052663),ns_name], null),new cljs.core.Keyword(null,"fetching","fetching",-1664990285));

transmorphic.repl.get_ns_source.call(null,ns_name,((function (temp__4423__auto__){
return (function (p1__32420_SHARP_){
return cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("namespace","by-name","namespace/by-name",-896052663),ns_name], null),p1__32420_SHARP_);
});})(temp__4423__auto__))
);

return false;
}
});
transmorphic.morph.$props = (function transmorphic$morph$$props(var_args){
var args32421 = [];
var len__17883__auto___32424 = arguments.length;
var i__17884__auto___32425 = (0);
while(true){
if((i__17884__auto___32425 < len__17883__auto___32424)){
args32421.push((arguments[i__17884__auto___32425]));

var G__32426 = (i__17884__auto___32425 + (1));
i__17884__auto___32425 = G__32426;
continue;
} else {
}
break;
}

var G__32423 = args32421.length;
switch (G__32423) {
case 1:
return transmorphic.morph.$props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.morph.$props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32421.length)].join('')));

}
});

transmorphic.morph.$props.cljs$core$IFn$_invoke$arity$1 = (function (morph){
return new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),transmorphic.core.get_ref.call(null,morph)));
});

transmorphic.morph.$props.cljs$core$IFn$_invoke$arity$2 = (function (morph,prop){
var v = cljs.core.get.call(null,transmorphic.morph.$props.call(null,morph),prop);
var or__16825__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var or__16825__auto____$1 = v;
if(cljs.core.truth_(or__16825__auto____$1)){
return or__16825__auto____$1;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(morph))){
return transmorphic.morph.$props.call(null,transmorphic.morph.$owner.call(null,morph),prop);
} else {
return null;
}
}
}
});

transmorphic.morph.$props.cljs$lang$maxFixedArity = 2;
/**
 * Get a vector of all current submorphs of
 * a component or morph.
 */
transmorphic.morph.$submorphs = (function transmorphic$morph$$submorphs(var_args){
var args32429 = [];
var len__17883__auto___32432 = arguments.length;
var i__17884__auto___32433 = (0);
while(true){
if((i__17884__auto___32433 < len__17883__auto___32432)){
args32429.push((arguments[i__17884__auto___32433]));

var G__32434 = (i__17884__auto___32433 + (1));
i__17884__auto___32433 = G__32434;
continue;
} else {
}
break;
}

var G__32431 = args32429.length;
switch (G__32431) {
case 1:
return transmorphic.morph.$submorphs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.morph.$submorphs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32429.length)].join('')));

}
});

transmorphic.morph.$submorphs.cljs$core$IFn$_invoke$arity$1 = (function (x){
return transmorphic.morph.$submorphs.call(null,cljs.core.deref.call(null,transmorphic.core.universe),x);
});

transmorphic.morph.$submorphs.cljs$core$IFn$_invoke$arity$2 = (function (state,x){
return cljs.core.mapv.call(null,(function (p1__32428_SHARP_){
return cljs.core.get_in.call(null,state,p1__32428_SHARP_);
}),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(x));
});

transmorphic.morph.$submorphs.cljs$lang$maxFixedArity = 2;
/**
 * Get the morph that corresponding to the id.
 * We first assume id, is a global identifier.
 * If this fails, fall back to searching for
 * the next morph that carries a matching
 * :id property.
 */
transmorphic.morph.$morph = (function transmorphic$morph$$morph(var_args){
var args32436 = [];
var len__17883__auto___32443 = arguments.length;
var i__17884__auto___32444 = (0);
while(true){
if((i__17884__auto___32444 < len__17883__auto___32443)){
args32436.push((arguments[i__17884__auto___32444]));

var G__32445 = (i__17884__auto___32444 + (1));
i__17884__auto___32444 = G__32445;
continue;
} else {
}
break;
}

var G__32438 = args32436.length;
switch (G__32438) {
case 1:
return transmorphic.morph.$morph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.morph.$morph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32436.length)].join('')));

}
});

transmorphic.morph.$morph.cljs$core$IFn$_invoke$arity$1 = (function (id){
return transmorphic.morph.$morph.call(null,id,false);
});

transmorphic.morph.$morph.cljs$core$IFn$_invoke$arity$2 = (function (id,query_QMARK_){
if(cljs.core.truth_(query_QMARK_)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__32439){
var vec__32440 = p__32439;
var morph_id = cljs.core.nth.call(null,vec__32440,(0),null);
var morph = cljs.core.nth.call(null,vec__32440,(1),null);
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str(".*"),cljs.core.str(id)].join('')),morph_id))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [morph_id,morph], null);
} else {
return null;
}
})),cljs.core.get.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293)));
} else {
if(cljs.core.truth_(id)){
var temp__4423__auto__ = transmorphic.core.ensure.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),id], null));
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),ref);
} else {
return cljs.core.some.call(null,((function (temp__4423__auto__){
return (function (p__32441){
var vec__32442 = p__32441;
var _ = cljs.core.nth.call(null,vec__32442,(0),null);
var morph = cljs.core.nth.call(null,vec__32442,(1),null);
if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph)))){
return morph;
} else {
return null;
}
});})(temp__4423__auto__))
,cljs.core.get.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293)));
}
} else {
return null;
}
}
});

transmorphic.morph.$morph.cljs$lang$maxFixedArity = 2;
/**
 * Get the component that corresponding to the id.
 * We first assume id, is a global identifier.
 * If this fails, fall back to searching for
 * the next component that carries a matching
 * :id property.
 */
transmorphic.morph.$component = (function transmorphic$morph$$component(var_args){
var args32447 = [];
var len__17883__auto___32454 = arguments.length;
var i__17884__auto___32455 = (0);
while(true){
if((i__17884__auto___32455 < len__17883__auto___32454)){
args32447.push((arguments[i__17884__auto___32455]));

var G__32456 = (i__17884__auto___32455 + (1));
i__17884__auto___32455 = G__32456;
continue;
} else {
}
break;
}

var G__32449 = args32447.length;
switch (G__32449) {
case 1:
return transmorphic.morph.$component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.morph.$component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32447.length)].join('')));

}
});

transmorphic.morph.$component.cljs$core$IFn$_invoke$arity$1 = (function (id){
return transmorphic.morph.$component.call(null,id,false);
});

transmorphic.morph.$component.cljs$core$IFn$_invoke$arity$2 = (function (id,query_QMARK_){
if(cljs.core.truth_(id)){
var temp__4423__auto__ = transmorphic.core.ensure.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),id], null));
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),ref);
} else {
return cljs.core.some.call(null,((function (temp__4423__auto__){
return (function (p__32450){
var vec__32451 = p__32450;
var _ = cljs.core.nth.call(null,vec__32451,(0),null);
var map__32452 = cljs.core.nth.call(null,vec__32451,(1),null);
var map__32452__$1 = ((((!((map__32452 == null)))?((((map__32452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32452):map__32452);
var c = map__32452__$1;
var props = cljs.core.get.call(null,map__32452__$1,new cljs.core.Keyword(null,"props","props",453281727));
if(cljs.core._EQ_.call(null,id,props.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)))){
return c;
} else {
return null;
}
});})(temp__4423__auto__))
,cljs.core.get.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.Keyword("component","by-id","component/by-id",746697032)));
}
} else {
return null;
}
});

transmorphic.morph.$component.cljs$lang$maxFixedArity = 2;
/**
 * Retrieve the current local state of
 * the component.
 */
transmorphic.morph.$local_state = (function transmorphic$morph$$local_state(component){
return new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),transmorphic.core.get_ref.call(null,component)));
});
if(typeof transmorphic.morph.$parent !== 'undefined'){
} else {
/**
 * Get the parent morph of a component or morph or 
 * evaluate to the property of a parent morph.
 */
transmorphic.morph.$parent = (function (){var method_table__17738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"transmorphic.morph","$parent"),((function (method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__,hierarchy__17742__auto__){
return (function() { 
var G__32458__delegate = function (x,args){
if((x instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"property","property",-1114278232);
} else {
if(cljs.core.truth_((function (){var or__16825__auto__ = transmorphic.core.component_QMARK_.call(null,x);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return transmorphic.core.morph_QMARK_.call(null,x);
}
})())){
return new cljs.core.Keyword(null,"morph","morph",-595175877);
} else {
throw [cljs.core.str("Can not determine parent of: "),cljs.core.str(x)].join('');

}
}
};
var G__32458 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__32459__i = 0, G__32459__a = new Array(arguments.length -  1);
while (G__32459__i < G__32459__a.length) {G__32459__a[G__32459__i] = arguments[G__32459__i + 1]; ++G__32459__i;}
  args = new cljs.core.IndexedSeq(G__32459__a,0);
} 
return G__32458__delegate.call(this,x,args);};
G__32458.cljs$lang$maxFixedArity = 1;
G__32458.cljs$lang$applyTo = (function (arglist__32460){
var x = cljs.core.first(arglist__32460);
var args = cljs.core.rest(arglist__32460);
return G__32458__delegate(x,args);
});
G__32458.cljs$core$IFn$_invoke$arity$variadic = G__32458__delegate;
return G__32458;
})()
;})(method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__,hierarchy__17742__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17742__auto__,method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__));
})();
}
cljs.core._add_method.call(null,transmorphic.morph.$parent,new cljs.core.Keyword(null,"morph","morph",-595175877),(function (x){
var ref = transmorphic.core.get_ref.call(null,x);
var parent_ref = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),ref));
var and__16813__auto__ = parent_ref;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),parent_ref);
} else {
return and__16813__auto__;
}
}));
/**
 * Get the component, that passed the props to the
 * given owner or morph
 */
transmorphic.morph.$owner = (function transmorphic$morph$$owner(x){
var ref = transmorphic.core.get_ref.call(null,x);
var owner_ref = new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),ref));
var and__16813__auto__ = owner_ref;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),owner_ref);
} else {
return and__16813__auto__;
}
});
transmorphic.morph.centered_in = (function transmorphic$morph$centered_in(reference_morph,extent){
var map__32463 = new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(transmorphic.morph.$morph.call(null,reference_morph));
var map__32463__$1 = ((((!((map__32463 == null)))?((((map__32463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32463):map__32463);
var ref_x = cljs.core.get.call(null,map__32463__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ref_y = cljs.core.get.call(null,map__32463__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var centered_x = ((ref_x / (2)) - (extent.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) / (2)));
var centered_y = ((ref_y / (2)) - (extent.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) / (2)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),centered_x,new cljs.core.Keyword(null,"y","y",-1757859776),centered_y], null);
});
/**
 * Returns the path to the structure that represents
 *   the root of the abstraction. Unlike owner-path, this can
 *   either be a morph or a collection of morphs, since
 *   abstractions can yield either of the two.
 */
transmorphic.morph.abstraction_root = (function transmorphic$morph$abstraction_root(var_args){
var args32465 = [];
var len__17883__auto___32468 = arguments.length;
var i__17884__auto___32469 = (0);
while(true){
if((i__17884__auto___32469 < len__17883__auto___32468)){
args32465.push((arguments[i__17884__auto___32469]));

var G__32470 = (i__17884__auto___32469 + (1));
i__17884__auto___32469 = G__32470;
continue;
} else {
}
break;
}

var G__32467 = args32465.length;
switch (G__32467) {
case 1:
return transmorphic.morph.abstraction_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.morph.abstraction_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32465.length)].join('')));

}
});

transmorphic.morph.abstraction_root.cljs$core$IFn$_invoke$arity$1 = (function (morph){
return transmorphic.morph.abstraction_root.call(null,morph,morph.call(null,new cljs.core.Keyword(null,"abstraction-name","abstraction-name",518072573)));
});

transmorphic.morph.abstraction_root.cljs$core$IFn$_invoke$arity$2 = (function (morph,abstraction_name){
if(((transmorphic.morph.Root instanceof morph)) && (cljs.core._EQ_.call(null,abstraction_name,morph.call(null,new cljs.core.Keyword(null,"abstraction-name","abstraction-name",518072573))))){
return morph;
} else {
if(cljs.core._EQ_.call(null,abstraction_name,morph.call(null,new cljs.core.Keyword(null,"abstraction-name","abstraction-name",518072573)))){
return transmorphic.morph.abstraction_root.call(null,transmorphic.morph.$parent.call(null,morph),abstraction_name);
} else {
return null;
}
}
});

transmorphic.morph.abstraction_root.cljs$lang$maxFixedArity = 2;
cljs.core._add_method.call(null,transmorphic.morph.$parent,new cljs.core.Keyword(null,"property","property",-1114278232),(function() {
var G__32472 = null;
var G__32472__1 = (function (property){
return transmorphic.morph.$parent.call(null,property,cljs.core.identity);
});
var G__32472__2 = (function (property,transform){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relative?","relative?",-967368007),true,new cljs.core.Keyword(null,"eval","eval",-1103567905),(function (state,morph){
var morph__$1 = cljs.core.get_in.call(null,state,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(morph));
var parent_prop = property.call(null,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph__$1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"relative?","relative?",-967368007).cljs$core$IFn$_invoke$arity$1(parent_prop))){
return transform.call(null,new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(parent_prop).call(null,state,morph__$1));
} else {
return transform.call(null,parent_prop);
}
})], null);
});
G__32472 = function(property,transform){
switch(arguments.length){
case 1:
return G__32472__1.call(this,property);
case 2:
return G__32472__2.call(this,property,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32472.cljs$core$IFn$_invoke$arity$1 = G__32472__1;
G__32472.cljs$core$IFn$_invoke$arity$2 = G__32472__2;
return G__32472;
})()
);
/**
 * Vary a value of a propery over time, given a transformation
 * of the value with respect to the current signals value.
 *   
 *   ex: (vary 42 #(* %1 (sin %2)) (current-time))
 */
transmorphic.morph.vary = (function transmorphic$morph$vary(value,transform,signal){
return null;
});
transmorphic.morph.behavior = (function transmorphic$morph$behavior(p__32473){
var map__32476 = p__32473;
var map__32476__$1 = ((((!((map__32476 == null)))?((((map__32476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32476):map__32476);
var init_value = cljs.core.get.call(null,map__32476__$1,new cljs.core.Keyword(null,"init-value","init-value",-374892331));
var signals = cljs.core.get.call(null,map__32476__$1,new cljs.core.Keyword(null,"signals","signals",1732137021));
var on_change = cljs.core.get.call(null,map__32476__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var global_QMARK_ = cljs.core.get.call(null,map__32476__$1,new cljs.core.Keyword(null,"global?","global?",-2022837689));
return cljs.core.with_meta.call(null,((function (map__32476,map__32476__$1,init_value,signals,on_change,global_QMARK_){
return (function (world,path){
var values = cljs.core.map.call(null,((function (map__32476,map__32476__$1,init_value,signals,on_change,global_QMARK_){
return (function (beh){
var v = cljs.core.deref.call(null,beh);
if(cljs.core.truth_((function (){var or__16825__auto__ = global_QMARK_;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"global?","global?",-2022837689).cljs$core$IFn$_invoke$arity$1(v);
}
})())){
return v.call(null,new cljs.core.Keyword(null,"value","value",305978217));
} else {
if(cljs.core._EQ_.call(null,path,new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(v))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v);
} else {
return null;
}
}
});})(map__32476,map__32476__$1,init_value,signals,on_change,global_QMARK_))
,signals);
if(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,values)){
return init_value;
} else {
return cljs.core.apply.call(null,on_change,values);
}
});})(map__32476,map__32476__$1,init_value,signals,on_change,global_QMARK_))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reactive","reactive",717758366),true,new cljs.core.Keyword(null,"tangible","tangible",1450746508),false], null));
});
transmorphic.morph.animate = (function transmorphic$morph$animate(value,easing){
return "Set property to value, but animate the change stylized\n  by the provided easing function. Note that like all\n  reactive property defs, also animated props are retriggered\n  when =>, or set-prop defines a new value for that prop.\n  Only explicit redefinitions can get 'rid' of \n  the animation behavior.";
});
transmorphic.morph.local_offset = (function transmorphic$morph$local_offset(morph){
if(cljs.core.truth_(transmorphic.symbolic.ellipse_QMARK_.call(null,morph))){
var map__32480 = transmorphic.morph.$props.call(null,morph,new cljs.core.Keyword(null,"extent","extent",-186399820));
var map__32480__$1 = ((((!((map__32480 == null)))?((((map__32480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32480):map__32480);
var x = cljs.core.get.call(null,map__32480__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__32480__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y / (2))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
}
});
transmorphic.morph.position_in_world = (function transmorphic$morph$position_in_world(morph){
if(cljs.core.truth_(morph)){
return transmorphic.utils.add_points.call(null,(function (){var owner_morph = transmorphic.morph.$parent.call(null,morph);
return transmorphic.utils.add_points.call(null,transmorphic.morph.local_offset.call(null,owner_morph),transmorphic$morph$position_in_world.call(null,owner_morph));
})(),(function (){var or__16825__auto__ = transmorphic.morph.$props.call(null,morph,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
}
})());
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
}
});
transmorphic.morph.global_bounds = (function transmorphic$morph$global_bounds(morph){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [transmorphic.morph.position_in_world.call(null,morph),transmorphic.morph.$props.call(null,morph,new cljs.core.Keyword(null,"extent","extent",-186399820))], null);
});
transmorphic.morph.contains_morph_QMARK_ = (function transmorphic$morph$contains_morph_QMARK_(morph_a,morph_b){
var bounds_a = transmorphic.morph.global_bounds.call(null,morph_a);
var bounds_b = transmorphic.morph.global_bounds.call(null,morph_b);
var contains = transmorphic.utils.contains_rect_QMARK_.call(null,bounds_a,bounds_b);
return contains;
});
transmorphic.morph.morph_under_me = (function transmorphic$morph$morph_under_me(var_args){
var args32482 = [];
var len__17883__auto___32491 = arguments.length;
var i__17884__auto___32492 = (0);
while(true){
if((i__17884__auto___32492 < len__17883__auto___32491)){
args32482.push((arguments[i__17884__auto___32492]));

var G__32493 = (i__17884__auto___32492 + (1));
i__17884__auto___32492 = G__32493;
continue;
} else {
}
break;
}

var G__32484 = args32482.length;
switch (G__32484) {
case 1:
return transmorphic.morph.morph_under_me.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return transmorphic.morph.morph_under_me.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32482.length)].join('')));

}
});

transmorphic.morph.morph_under_me.cljs$core$IFn$_invoke$arity$1 = (function (self){
return transmorphic.morph.morph_under_me.call(null,self,transmorphic.morph.$parent.call(null,self),cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(self)], true),true);
});

transmorphic.morph.morph_under_me.cljs$core$IFn$_invoke$arity$4 = (function (self,p__32485,ignoring,ask_owner_QMARK_){
var map__32486 = p__32485;
var map__32486__$1 = ((((!((map__32486 == null)))?((((map__32486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32486):map__32486);
var current = map__32486__$1;
var morph_id = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var component_id = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
if(cljs.core.truth_((function (){var and__16813__auto__ = current;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"halo","halo",-1672990094,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(transmorphic.morph.$owner.call(null,current))));
} else {
return and__16813__auto__;
}
})())){
var match = cljs.core.some.call(null,((function (map__32486,map__32486__$1,current,morph_id,component_id){
return (function (p__32488){
var map__32489 = p__32488;
var map__32489__$1 = ((((!((map__32489 == null)))?((((map__32489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32489):map__32489);
var submorph = map__32489__$1;
var morph_id__$1 = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var component_id__$1 = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
if(cljs.core.truth_(morph_id__$1)){
if(!(cljs.core.contains_QMARK_.call(null,ignoring,morph_id__$1))){
return transmorphic.morph.morph_under_me.call(null,self,submorph,cljs.core.conj.call(null,ignoring,morph_id__$1),false);
} else {
return null;
}
} else {
if(!(cljs.core.contains_QMARK_.call(null,ignoring,component_id__$1))){
return transmorphic.morph.morph_under_me.call(null,self,cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),transmorphic.core.get_root.call(null,cljs.core.deref.call(null,transmorphic.core.universe),submorph)),cljs.core.conj.call(null,ignoring,component_id__$1),false);
} else {
return null;
}
}
});})(map__32486,map__32486__$1,current,morph_id,component_id))
,cljs.core.reverse.call(null,transmorphic.morph.$submorphs.call(null,current)));
var or__16825__auto__ = match;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var or__16825__auto____$1 = (cljs.core.truth_(transmorphic.morph.contains_morph_QMARK_.call(null,current,self))?current:null);
if(cljs.core.truth_(or__16825__auto____$1)){
return or__16825__auto____$1;
} else {
var and__16813__auto__ = ask_owner_QMARK_;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = current;
if(cljs.core.truth_(and__16813__auto____$1)){
return transmorphic.morph.morph_under_me.call(null,self,transmorphic.morph.$parent.call(null,current),cljs.core.conj.call(null,ignoring,morph_id),true);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
}
}
} else {
return null;
}
});

transmorphic.morph.morph_under_me.cljs$lang$maxFixedArity = 4;
transmorphic.morph.get_description_STAR_ = (function transmorphic$morph$get_description_STAR_(var_args){
var args32496 = [];
var len__17883__auto___32499 = arguments.length;
var i__17884__auto___32500 = (0);
while(true){
if((i__17884__auto___32500 < len__17883__auto___32499)){
args32496.push((arguments[i__17884__auto___32500]));

var G__32501 = (i__17884__auto___32500 + (1));
i__17884__auto___32500 = G__32501;
continue;
} else {
}
break;
}

var G__32498 = args32496.length;
switch (G__32498) {
case 1:
return transmorphic.morph.get_description_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.morph.get_description_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32496.length)].join('')));

}
});

transmorphic.morph.get_description_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (integrator){
return transmorphic.morph.get_description_STAR_.call(null,integrator,(0));
});

transmorphic.morph.get_description_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (integrator,i){
var temp__4425__auto__ = cljs.core.get.call(null,integrator,i);
if(cljs.core.truth_(temp__4425__auto__)){
var entry = temp__4425__auto__;
var r = new cljs.core.Keyword(null,"reification","reification",1115803776).cljs$core$IFn$_invoke$arity$1(entry);
var subs = cljs.core.deref.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(entry));
return cljs.core.apply.call(null,r,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (r,subs,entry,temp__4425__auto__){
return (function (p1__32495_SHARP_){
return transmorphic.morph.get_description_STAR_.call(null,integrator,p1__32495_SHARP_);
});})(r,subs,entry,temp__4425__auto__))
,subs)));
} else {
return null;
}
});

transmorphic.morph.get_description_STAR_.cljs$lang$maxFixedArity = 2;
transmorphic.morph.set_prop;

transmorphic.morph.add_morph;

transmorphic.morph.remove_morph;

transmorphic.morph.get_query;

transmorphic.morph.get_props;
transmorphic.morph.eval_reactive_prop = (function transmorphic$morph$eval_reactive_prop(v,world,lens){
if(cljs.core.truth_(new cljs.core.Keyword(null,"reactive","reactive",717758366).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
return transmorphic$morph$eval_reactive_prop.call(null,v.call(null,world,lens),world,lens);
} else {
return v;
}
});
transmorphic.morph.eval_reactive_props = (function transmorphic$morph$eval_reactive_props(p__32503,lens,world){
var map__32506 = p__32503;
var map__32506__$1 = ((((!((map__32506 == null)))?((((map__32506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32506):map__32506);
var compiled_props = map__32506__$1;
var id = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"id","id",-1388402092));

return cljs.core.reduce.call(null,cljs.core.merge,cljs.core.map.call(null,((function (map__32506,map__32506__$1,compiled_props,id){
return (function (prop){
var v = prop.call(null,compiled_props);
return cljs.core.PersistentArrayMap.fromArray([prop,transmorphic.morph.eval_reactive_prop.call(null,v,world,lens)], true, false);
});})(map__32506,map__32506__$1,compiled_props,id))
,cljs.core.keys.call(null,compiled_props)));
});

//# sourceMappingURL=morph.js.map
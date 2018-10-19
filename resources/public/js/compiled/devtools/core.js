// Compiled by ClojureScript 1.7.170 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.sanity_hints');
goog.require('devtools.dirac');
goog.require('devtools.custom_formatters');
goog.require('devtools.util');
goog.require('goog.userAgent');
devtools.core.known_features = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327),new cljs.core.Keyword(null,"dirac","dirac",1785994033),new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649),new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)], null);
devtools.core.missing_feature_warning = (function devtools$core$missing_feature_warning(feature,known_features){
return [cljs.core.str("No such feature '"),cljs.core.str(feature),cljs.core.str("' is currently available in cljs-devtools. "),cljs.core.str("List of supported features:"),cljs.core.str(cljs.core.keys.call(null,known_features))].join('');
});
devtools.core.warn_feature_not_available = (function devtools$core$warn_feature_not_available(feature){
return console.warn([cljs.core.str("Feature '"),cljs.core.str(cljs.core.name.call(null,feature)),cljs.core.str("' cannot be installed. Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join(''));
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(){
devtools.util.display_banner.call(null,"Installing cljs-devtools:",devtools.core.known_features);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327)))){
if(cljs.core.truth_(devtools.custom_formatters.available_QMARK_.call(null))){
devtools.custom_formatters.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)))){
if(cljs.core.truth_(devtools.sanity_hints.available_QMARK_.call(null))){
devtools.sanity_hints.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649)))){
if(cljs.core.truth_(devtools.dirac.available_QMARK_.call(null))){
return devtools.dirac.install_BANG_.call(null);
} else {
return devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"dirac","dirac",1785994033));
}
} else {
return null;
}
});
devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.custom_formatters.uninstall_BANG_.call(null);

devtools.sanity_hints.uninstall_BANG_.call(null);

return devtools.dirac.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(feature,val){
var temp__4423__auto__ = feature.call(null,devtools.core.known_features);
if(cljs.core.truth_(temp__4423__auto__)){
var feature_installation_key = temp__4423__auto__;
return devtools.core.set_pref_BANG_.call(null,feature_installation_key,val);
} else {
return console.warn(devtools.core.missing_feature_warning.call(null,feature,devtools.core.known_features));
}
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,true);
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,false);
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30080 = arguments.length;
var i__17884__auto___30081 = (0);
while(true){
if((i__17884__auto___30081 < len__17883__auto___30080)){
args__17890__auto__.push((arguments[i__17884__auto___30081]));

var G__30082 = (i__17884__auto___30081 + (1));
i__17884__auto___30081 = G__30082;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((0) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((0)),(0))):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__17891__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__30076 = cljs.core.seq.call(null,features);
var chunk__30077 = null;
var count__30078 = (0);
var i__30079 = (0);
while(true){
if((i__30079 < count__30078)){
var feature = cljs.core._nth.call(null,chunk__30077,i__30079);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__30083 = seq__30076;
var G__30084 = chunk__30077;
var G__30085 = count__30078;
var G__30086 = (i__30079 + (1));
seq__30076 = G__30083;
chunk__30077 = G__30084;
count__30078 = G__30085;
i__30079 = G__30086;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30076);
if(temp__4425__auto__){
var seq__30076__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30076__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__30076__$1);
var G__30087 = cljs.core.chunk_rest.call(null,seq__30076__$1);
var G__30088 = c__17628__auto__;
var G__30089 = cljs.core.count.call(null,c__17628__auto__);
var G__30090 = (0);
seq__30076 = G__30087;
chunk__30077 = G__30088;
count__30078 = G__30089;
i__30079 = G__30090;
continue;
} else {
var feature = cljs.core.first.call(null,seq__30076__$1);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__30091 = cljs.core.next.call(null,seq__30076__$1);
var G__30092 = null;
var G__30093 = (0);
var G__30094 = (0);
seq__30076 = G__30091;
chunk__30077 = G__30092;
count__30078 = G__30093;
i__30079 = G__30094;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq30075){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30075));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30100 = arguments.length;
var i__17884__auto___30101 = (0);
while(true){
if((i__17884__auto___30101 < len__17883__auto___30100)){
args__17890__auto__.push((arguments[i__17884__auto___30101]));

var G__30102 = (i__17884__auto___30101 + (1));
i__17884__auto___30101 = G__30102;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((0) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((0)),(0))):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__17891__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__30096 = cljs.core.seq.call(null,features);
var chunk__30097 = null;
var count__30098 = (0);
var i__30099 = (0);
while(true){
if((i__30099 < count__30098)){
var feature = cljs.core._nth.call(null,chunk__30097,i__30099);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__30103 = seq__30096;
var G__30104 = chunk__30097;
var G__30105 = count__30098;
var G__30106 = (i__30099 + (1));
seq__30096 = G__30103;
chunk__30097 = G__30104;
count__30098 = G__30105;
i__30099 = G__30106;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30096);
if(temp__4425__auto__){
var seq__30096__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30096__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__30096__$1);
var G__30107 = cljs.core.chunk_rest.call(null,seq__30096__$1);
var G__30108 = c__17628__auto__;
var G__30109 = cljs.core.count.call(null,c__17628__auto__);
var G__30110 = (0);
seq__30096 = G__30107;
chunk__30097 = G__30108;
count__30098 = G__30109;
i__30099 = G__30110;
continue;
} else {
var feature = cljs.core.first.call(null,seq__30096__$1);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__30111 = cljs.core.next.call(null,seq__30096__$1);
var G__30112 = null;
var G__30113 = (0);
var G__30114 = (0);
seq__30096 = G__30111;
chunk__30097 = G__30112;
count__30098 = G__30113;
i__30099 = G__30114;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq30095){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30095));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__30116 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__30116) {
case "custom-formatters":
return devtools.custom_formatters.available_QMARK_.call(null);

break;
case "dirac":
return devtools.dirac.available_QMARK_.call(null);

break;
case "sanity-hints":
return devtools.sanity_hints.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30119 = arguments.length;
var i__17884__auto___30120 = (0);
while(true){
if((i__17884__auto___30120 < len__17883__auto___30119)){
args__17890__auto__.push((arguments[i__17884__auto___30120]));

var G__30121 = (i__17884__auto___30120 + (1));
i__17884__auto___30120 = G__30121;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((0) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((0)),(0))):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17891__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
return cljs.core.every_QMARK_.call(null,devtools.core.single_feature_available_QMARK_,features);
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq30118){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30118));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});

//# sourceMappingURL=core.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('devtools.dirac');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.browser.repl');
goog.require('devtools.prefs');
goog.require('clojure.string');
goog.require('goog.labs.userAgent.browser');
devtools.dirac.available_QMARK_ = (function devtools$dirac$available_QMARK_(){
var and__16813__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__16813__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__16813__auto__;
}
});
if(typeof devtools.dirac._STAR_installed_QMARK__STAR_ !== 'undefined'){
} else {
devtools.dirac._STAR_installed_QMARK__STAR_ = false;
}
if(typeof devtools.dirac.api_version !== 'undefined'){
} else {
devtools.dirac.api_version = (2);
}
devtools.dirac.default_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"weasel-auto-reconnect","weasel-auto-reconnect",-1029132223),new cljs.core.Keyword(null,"eval-time-limit","eval-time-limit",1470179717),new cljs.core.Keyword(null,"agent-verbose","agent-verbose",714204005),new cljs.core.Keyword(null,"agent-response-timeout","agent-response-timeout",-104323929),new cljs.core.Keyword(null,"agent-host","agent-host",-544377515),new cljs.core.Keyword(null,"weasel-verbose","weasel-verbose",613531446),new cljs.core.Keyword(null,"weasel-pre-eval-delay","weasel-pre-eval-delay",1053650811),new cljs.core.Keyword(null,"install-check-next-trial-waiting-time","install-check-next-trial-waiting-time",1679580093),new cljs.core.Keyword(null,"install-check-eval-time-limit","install-check-eval-time-limit",-1484307459),new cljs.core.Keyword(null,"agent-port","agent-port",1866425630),new cljs.core.Keyword(null,"agent-auto-reconnect","agent-auto-reconnect",-416343458),new cljs.core.Keyword(null,"install-check-total-time-limit","install-check-total-time-limit",-912454882)],[false,(10000),false,(5000),"localhost",false,(100),(500),(300),"8231",true,(5000)]);
if(typeof devtools.dirac.static_config !== 'undefined'){
} else {
devtools.dirac.static_config = cljs.core.PersistentArrayMap.EMPTY;
}
devtools.dirac.console_tunnel = (function devtools$dirac$console_tunnel(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27627 = arguments.length;
var i__17884__auto___27628 = (0);
while(true){
if((i__17884__auto___27628 < len__17883__auto___27627)){
args__17890__auto__.push((arguments[i__17884__auto___27628]));

var G__27629 = (i__17884__auto___27628 + (1));
i__17884__auto___27628 = G__27629;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return devtools.dirac.console_tunnel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

devtools.dirac.console_tunnel.cljs$core$IFn$_invoke$arity$variadic = (function (method,args){
return goog.object.get(console,method).apply(console,cljs.core.into_array.call(null,args));
});

devtools.dirac.console_tunnel.cljs$lang$maxFixedArity = (1);

devtools.dirac.console_tunnel.cljs$lang$applyTo = (function (seq27625){
var G__27626 = cljs.core.first.call(null,seq27625);
var seq27625__$1 = cljs.core.next.call(null,seq27625);
return devtools.dirac.console_tunnel.cljs$core$IFn$_invoke$arity$variadic(G__27626,seq27625__$1);
});
devtools.dirac.dirac_msg_args = (function devtools$dirac$dirac_msg_args(name,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
devtools.dirac.dirac_log_args = (function devtools$dirac$dirac_log_args(request_id,kind,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
devtools.dirac.call_dirac = (function devtools$dirac$call_dirac(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27632 = arguments.length;
var i__17884__auto___27633 = (0);
while(true){
if((i__17884__auto___27633 < len__17883__auto___27632)){
args__17890__auto__.push((arguments[i__17884__auto___27633]));

var G__27634 = (i__17884__auto___27633 + (1));
i__17884__auto___27633 = G__27634;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return devtools.dirac.call_dirac.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

devtools.dirac.call_dirac.cljs$core$IFn$_invoke$arity$variadic = (function (name,args){
return cljs.core.apply.call(null,devtools.dirac.console_tunnel,"log",devtools.dirac.dirac_msg_args.call(null,name,args));
});

devtools.dirac.call_dirac.cljs$lang$maxFixedArity = (1);

devtools.dirac.call_dirac.cljs$lang$applyTo = (function (seq27630){
var G__27631 = cljs.core.first.call(null,seq27630);
var seq27630__$1 = cljs.core.next.call(null,seq27630);
return devtools.dirac.call_dirac.cljs$core$IFn$_invoke$arity$variadic(G__27631,seq27630__$1);
});
devtools.dirac.log = (function devtools$dirac$log(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27638 = arguments.length;
var i__17884__auto___27639 = (0);
while(true){
if((i__17884__auto___27639 < len__17883__auto___27638)){
args__17890__auto__.push((arguments[i__17884__auto___27639]));

var G__27640 = (i__17884__auto___27639 + (1));
i__17884__auto___27639 = G__27640;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((2) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((2)),(0))):null);
return devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17891__auto__);
});

devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,devtools.dirac.console_tunnel,"log",devtools.dirac.dirac_log_args.call(null,request_id,kind,args));
});

devtools.dirac.log.cljs$lang$maxFixedArity = (2);

devtools.dirac.log.cljs$lang$applyTo = (function (seq27635){
var G__27636 = cljs.core.first.call(null,seq27635);
var seq27635__$1 = cljs.core.next.call(null,seq27635);
var G__27637 = cljs.core.first.call(null,seq27635__$1);
var seq27635__$2 = cljs.core.next.call(null,seq27635__$1);
return devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic(G__27636,G__27637,seq27635__$2);
});
devtools.dirac.warn = (function devtools$dirac$warn(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27644 = arguments.length;
var i__17884__auto___27645 = (0);
while(true){
if((i__17884__auto___27645 < len__17883__auto___27644)){
args__17890__auto__.push((arguments[i__17884__auto___27645]));

var G__27646 = (i__17884__auto___27645 + (1));
i__17884__auto___27645 = G__27646;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((2) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((2)),(0))):null);
return devtools.dirac.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17891__auto__);
});

devtools.dirac.warn.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,devtools.dirac.console_tunnel,"warn",devtools.dirac.dirac_log_args.call(null,request_id,kind,args));
});

devtools.dirac.warn.cljs$lang$maxFixedArity = (2);

devtools.dirac.warn.cljs$lang$applyTo = (function (seq27641){
var G__27642 = cljs.core.first.call(null,seq27641);
var seq27641__$1 = cljs.core.next.call(null,seq27641);
var G__27643 = cljs.core.first.call(null,seq27641__$1);
var seq27641__$2 = cljs.core.next.call(null,seq27641__$1);
return devtools.dirac.warn.cljs$core$IFn$_invoke$arity$variadic(G__27642,G__27643,seq27641__$2);
});
devtools.dirac.error = (function devtools$dirac$error(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27650 = arguments.length;
var i__17884__auto___27651 = (0);
while(true){
if((i__17884__auto___27651 < len__17883__auto___27650)){
args__17890__auto__.push((arguments[i__17884__auto___27651]));

var G__27652 = (i__17884__auto___27651 + (1));
i__17884__auto___27651 = G__27652;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((2) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((2)),(0))):null);
return devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17891__auto__);
});

devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,devtools.dirac.console_tunnel,"error",devtools.dirac.dirac_log_args.call(null,request_id,kind,args));
});

devtools.dirac.error.cljs$lang$maxFixedArity = (2);

devtools.dirac.error.cljs$lang$applyTo = (function (seq27647){
var G__27648 = cljs.core.first.call(null,seq27647);
var seq27647__$1 = cljs.core.next.call(null,seq27647);
var G__27649 = cljs.core.first.call(null,seq27647__$1);
var seq27647__$2 = cljs.core.next.call(null,seq27647__$1);
return devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic(G__27648,G__27649,seq27647__$2);
});
devtools.dirac.group_STAR_ = (function devtools$dirac$group_STAR_(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27657 = arguments.length;
var i__17884__auto___27658 = (0);
while(true){
if((i__17884__auto___27658 < len__17883__auto___27657)){
args__17890__auto__.push((arguments[i__17884__auto___27658]));

var G__27659 = (i__17884__auto___27658 + (1));
i__17884__auto___27658 = G__27659;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((3) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((3)),(0))):null);
return devtools.dirac.group_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17891__auto__);
});

devtools.dirac.group_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (collapsed_QMARK_,request_id,kind,args){
return cljs.core.apply.call(null,devtools.dirac.console_tunnel,(cljs.core.truth_(collapsed_QMARK_)?"groupCollapsed":"group"),devtools.dirac.dirac_log_args.call(null,request_id,kind,args));
});

devtools.dirac.group_STAR_.cljs$lang$maxFixedArity = (3);

devtools.dirac.group_STAR_.cljs$lang$applyTo = (function (seq27653){
var G__27654 = cljs.core.first.call(null,seq27653);
var seq27653__$1 = cljs.core.next.call(null,seq27653);
var G__27655 = cljs.core.first.call(null,seq27653__$1);
var seq27653__$2 = cljs.core.next.call(null,seq27653__$1);
var G__27656 = cljs.core.first.call(null,seq27653__$2);
var seq27653__$3 = cljs.core.next.call(null,seq27653__$2);
return devtools.dirac.group_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27654,G__27655,G__27656,seq27653__$3);
});
devtools.dirac.group_collapsed = (function devtools$dirac$group_collapsed(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27661 = arguments.length;
var i__17884__auto___27662 = (0);
while(true){
if((i__17884__auto___27662 < len__17883__auto___27661)){
args__17890__auto__.push((arguments[i__17884__auto___27662]));

var G__27663 = (i__17884__auto___27662 + (1));
i__17884__auto___27662 = G__27663;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((0) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((0)),(0))):null);
return devtools.dirac.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(argseq__17891__auto__);
});

devtools.dirac.group_collapsed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,devtools.dirac.group_STAR_,true,args);
});

devtools.dirac.group_collapsed.cljs$lang$maxFixedArity = (0);

devtools.dirac.group_collapsed.cljs$lang$applyTo = (function (seq27660){
return devtools.dirac.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27660));
});
devtools.dirac.group = (function devtools$dirac$group(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27665 = arguments.length;
var i__17884__auto___27666 = (0);
while(true){
if((i__17884__auto___27666 < len__17883__auto___27665)){
args__17890__auto__.push((arguments[i__17884__auto___27666]));

var G__27667 = (i__17884__auto___27666 + (1));
i__17884__auto___27666 = G__27667;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((0) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((0)),(0))):null);
return devtools.dirac.group.cljs$core$IFn$_invoke$arity$variadic(argseq__17891__auto__);
});

devtools.dirac.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,devtools.dirac.group_STAR_,false,args);
});

devtools.dirac.group.cljs$lang$maxFixedArity = (0);

devtools.dirac.group.cljs$lang$applyTo = (function (seq27664){
return devtools.dirac.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27664));
});
devtools.dirac.group_end = (function devtools$dirac$group_end(){
return console.groupEnd();
});
devtools.dirac.detect_and_strip = (function devtools$dirac$detect_and_strip(prefix,text){
var prefix_len = cljs.core.count.call(null,prefix);
var s = cljs.core.subs.call(null,text,(0),prefix_len);
if(cljs.core._EQ_.call(null,s,prefix)){
return clojure.string.triml.call(null,cljs.core.subs.call(null,text,prefix_len));
} else {
return null;
}
});
devtools.dirac.present_java_trace = (function devtools$dirac$present_java_trace(request_id,text){
var lines = clojure.string.split.call(null,text,/\n/);
var first_line = cljs.core.first.call(null,lines);
var rest_content = clojure.string.join.call(null,"\n",cljs.core.rest.call(null,lines));
if(cljs.core.empty_QMARK_.call(null,rest_content)){
return devtools.dirac.error.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),first_line);
} else {
devtools.dirac.group_collapsed.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),"%c%s",devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"java-trace-header-style","java-trace-header-style",-1425214239)),first_line);

devtools.dirac.log.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),rest_content);

return devtools.dirac.group_end.call(null);
}
});
devtools.dirac.build_effective_config = (function devtools$dirac$build_effective_config(default_config,static_config){
var static_keys = cljs.core.keys.call(null,default_config);
var _STAR_ = ((function (static_keys){
return (function (key){
var temp__4423__auto__ = devtools.prefs.pref.call(null,key);
if(cljs.core.truth_(temp__4423__auto__)){
var val = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val], null);
} else {
return null;
}
});})(static_keys))
;
var dynamic_config = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,_STAR_,static_keys));
return cljs.core.merge.call(null,default_config,static_config,dynamic_config);
});
devtools.dirac.get_effective_config = (function devtools$dirac$get_effective_config(){
return cljs.core.clj__GT_js.call(null,devtools.dirac.build_effective_config.call(null,devtools.dirac.default_config,devtools.dirac.static_config));
});
goog.exportSymbol('devtools.dirac.get_effective_config', devtools.dirac.get_effective_config);
devtools.dirac.get_api_version = (function devtools$dirac$get_api_version(){
return devtools.dirac.api_version;
});
goog.exportSymbol('devtools.dirac.get_api_version', devtools.dirac.get_api_version);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation result.
 */
devtools.dirac.present_repl_result = (function devtools$dirac$present_repl_result(request_id,value){
devtools.dirac.log.call(null,request_id,"result",value);

return value;
});
goog.exportSymbol('devtools.dirac.present_repl_result', devtools.dirac.present_repl_result);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation exception.
 */
devtools.dirac.present_repl_exception = (function devtools$dirac$present_repl_exception(request_id,exception){
return devtools.dirac.error.call(null,request_id,"exception",exception);
});
goog.exportSymbol('devtools.dirac.present_repl_exception', devtools.dirac.present_repl_exception);
devtools.dirac.present_in_dirac_repl = (function devtools$dirac$present_in_dirac_repl(request_id,value){
try{return devtools.dirac.present_repl_result(request_id,value);
}catch (e27669){var e = e27669;
devtools.dirac.present_repl_exception(request_id,e);

throw e;
}});
goog.exportSymbol('devtools.dirac.present_in_dirac_repl', devtools.dirac.present_in_dirac_repl);
devtools.dirac.present_output = (function devtools$dirac$present_output(request_id,kind,text){
var G__27671 = kind;
switch (G__27671) {
case "java-trace":
return devtools.dirac.present_java_trace.call(null,request_id,text);

break;
default:
var temp__4423__auto__ = devtools.dirac.detect_and_strip.call(null,"WARNING:",text);
if(cljs.core.truth_(temp__4423__auto__)){
var warning_msg = temp__4423__auto__;
return devtools.dirac.warn.call(null,request_id,"warning",warning_msg);
} else {
var temp__4423__auto____$1 = devtools.dirac.detect_and_strip.call(null,"ERROR:",text);
if(cljs.core.truth_(temp__4423__auto____$1)){
var error_msg = temp__4423__auto____$1;
return devtools.dirac.error.call(null,request_id,"error",error_msg);
} else {
return devtools.dirac.log.call(null,request_id,kind,text);
}
}

}
});
goog.exportSymbol('devtools.dirac.present_output', devtools.dirac.present_output);
/**
 * This is a postprocessing function wrapping weasel javascript evaluation attempt.
 *   This structure is needed for building response to nREPL server (see dirac.implant.weasel in Dirac project)
 *   In our case weasel is running in the context of Dirac DevTools and could potentially have different version of cljs runtime.
 *   To be correct we have to do this post-processing in app's context to use the same cljs runtime as app evaluating the code.
 * 
 *   Also we have to be careful to not enter into infinite printing with cyclic data structures.
 *   We limit printing level and length.
 */
devtools.dirac.postprocess_successful_eval = (function devtools$dirac$postprocess_successful_eval(value){
var _STAR_print_level_STAR_27675 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_27676 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dirac-print-level","dirac-print-level",1233865961));

cljs.core._STAR_print_length_STAR_ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dirac-print-length","dirac-print-length",1240393954));

try{return {"status": "success", "value": [cljs.core.str(value)].join('')};
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_27676;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_27675;
}});
goog.exportSymbol('devtools.dirac.postprocess_successful_eval', devtools.dirac.postprocess_successful_eval);
devtools.dirac.postprocess_unsuccessful_eval = (function devtools$dirac$postprocess_unsuccessful_eval(ex){

return {"status": "exception", "value": cljs.core.pr_str.call(null,ex), "stacktrace": (cljs.core.truth_(ex.hasOwnProperty("stack"))?ex.stack:"No stacktrace available.")};
});
goog.exportSymbol('devtools.dirac.postprocess_unsuccessful_eval', devtools.dirac.postprocess_unsuccessful_eval);
devtools.dirac.installed_QMARK_ = (function devtools$dirac$installed_QMARK_(){
return devtools.dirac._STAR_installed_QMARK__STAR_;
});
goog.exportSymbol('devtools.dirac.installed_QMARK_', devtools.dirac.installed_QMARK_);
devtools.dirac.install_BANG_ = (function devtools$dirac$install_BANG_(){
if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.core.not.call(null,devtools.dirac.installed_QMARK_.call(null));
if(and__16813__auto__){
return devtools.dirac.available_QMARK_.call(null);
} else {
return and__16813__auto__;
}
})())){
clojure.browser.repl.bootstrap.call(null);

devtools.dirac._STAR_installed_QMARK__STAR_ = true;

return true;
} else {
return null;
}
});
goog.exportSymbol('devtools.dirac.install_BANG_', devtools.dirac.install_BANG_);
devtools.dirac.uninstall_BANG_ = (function devtools$dirac$uninstall_BANG_(){
if(cljs.core.truth_(devtools.dirac.installed_QMARK_.call(null))){
return devtools.dirac._STAR_installed_QMARK__STAR_ = false;
} else {
return null;
}
});
goog.exportSymbol('devtools.dirac.uninstall_BANG_', devtools.dirac.uninstall_BANG_);

//# sourceMappingURL=dirac.js.map
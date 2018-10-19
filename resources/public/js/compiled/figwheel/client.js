// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36032 = cljs.core._EQ_;
var expr__36033 = (function (){var or__16825__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e36036){if((e36036 instanceof Error)){
var e = e36036;
return false;
} else {
throw e36036;

}
}})();
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36032.call(null,"true",expr__36033))){
return true;
} else {
if(cljs.core.truth_(pred__36032.call(null,"false",expr__36033))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36033)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36038){if((e36038 instanceof Error)){
var e = e36038;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36038;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17890__auto__ = [];
var len__17883__auto___36040 = arguments.length;
var i__17884__auto___36041 = (0);
while(true){
if((i__17884__auto___36041 < len__17883__auto___36040)){
args__17890__auto__.push((arguments[i__17884__auto___36041]));

var G__36042 = (i__17884__auto___36041 + (1));
i__17884__auto___36041 = G__36042;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((0) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17891__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq36039){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36039));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36043){
var map__36046 = p__36043;
var map__36046__$1 = ((((!((map__36046 == null)))?((((map__36046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36046):map__36046);
var message = cljs.core.get.call(null,map__36046__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36046__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16825__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16813__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16813__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16813__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22304__auto___36208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___36208,ch){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___36208,ch){
return (function (state_36177){
var state_val_36178 = (state_36177[(1)]);
if((state_val_36178 === (7))){
var inst_36173 = (state_36177[(2)]);
var state_36177__$1 = state_36177;
var statearr_36179_36209 = state_36177__$1;
(statearr_36179_36209[(2)] = inst_36173);

(statearr_36179_36209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (1))){
var state_36177__$1 = state_36177;
var statearr_36180_36210 = state_36177__$1;
(statearr_36180_36210[(2)] = null);

(statearr_36180_36210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (4))){
var inst_36130 = (state_36177[(7)]);
var inst_36130__$1 = (state_36177[(2)]);
var state_36177__$1 = (function (){var statearr_36181 = state_36177;
(statearr_36181[(7)] = inst_36130__$1);

return statearr_36181;
})();
if(cljs.core.truth_(inst_36130__$1)){
var statearr_36182_36211 = state_36177__$1;
(statearr_36182_36211[(1)] = (5));

} else {
var statearr_36183_36212 = state_36177__$1;
(statearr_36183_36212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (15))){
var inst_36137 = (state_36177[(8)]);
var inst_36152 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36137);
var inst_36153 = cljs.core.first.call(null,inst_36152);
var inst_36154 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36153);
var inst_36155 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36154)].join('');
var inst_36156 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36155);
var state_36177__$1 = state_36177;
var statearr_36184_36213 = state_36177__$1;
(statearr_36184_36213[(2)] = inst_36156);

(statearr_36184_36213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (13))){
var inst_36161 = (state_36177[(2)]);
var state_36177__$1 = state_36177;
var statearr_36185_36214 = state_36177__$1;
(statearr_36185_36214[(2)] = inst_36161);

(statearr_36185_36214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (6))){
var state_36177__$1 = state_36177;
var statearr_36186_36215 = state_36177__$1;
(statearr_36186_36215[(2)] = null);

(statearr_36186_36215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (17))){
var inst_36159 = (state_36177[(2)]);
var state_36177__$1 = state_36177;
var statearr_36187_36216 = state_36177__$1;
(statearr_36187_36216[(2)] = inst_36159);

(statearr_36187_36216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (3))){
var inst_36175 = (state_36177[(2)]);
var state_36177__$1 = state_36177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36177__$1,inst_36175);
} else {
if((state_val_36178 === (12))){
var inst_36136 = (state_36177[(9)]);
var inst_36150 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36136,opts);
var state_36177__$1 = state_36177;
if(cljs.core.truth_(inst_36150)){
var statearr_36188_36217 = state_36177__$1;
(statearr_36188_36217[(1)] = (15));

} else {
var statearr_36189_36218 = state_36177__$1;
(statearr_36189_36218[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (2))){
var state_36177__$1 = state_36177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36177__$1,(4),ch);
} else {
if((state_val_36178 === (11))){
var inst_36137 = (state_36177[(8)]);
var inst_36142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36143 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36137);
var inst_36144 = cljs.core.async.timeout.call(null,(1000));
var inst_36145 = [inst_36143,inst_36144];
var inst_36146 = (new cljs.core.PersistentVector(null,2,(5),inst_36142,inst_36145,null));
var state_36177__$1 = state_36177;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36177__$1,(14),inst_36146);
} else {
if((state_val_36178 === (9))){
var inst_36137 = (state_36177[(8)]);
var inst_36163 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36164 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36137);
var inst_36165 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36164);
var inst_36166 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36165)].join('');
var inst_36167 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36166);
var state_36177__$1 = (function (){var statearr_36190 = state_36177;
(statearr_36190[(10)] = inst_36163);

return statearr_36190;
})();
var statearr_36191_36219 = state_36177__$1;
(statearr_36191_36219[(2)] = inst_36167);

(statearr_36191_36219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (5))){
var inst_36130 = (state_36177[(7)]);
var inst_36132 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36133 = (new cljs.core.PersistentArrayMap(null,2,inst_36132,null));
var inst_36134 = (new cljs.core.PersistentHashSet(null,inst_36133,null));
var inst_36135 = figwheel.client.focus_msgs.call(null,inst_36134,inst_36130);
var inst_36136 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36135);
var inst_36137 = cljs.core.first.call(null,inst_36135);
var inst_36138 = figwheel.client.autoload_QMARK_.call(null);
var state_36177__$1 = (function (){var statearr_36192 = state_36177;
(statearr_36192[(8)] = inst_36137);

(statearr_36192[(9)] = inst_36136);

return statearr_36192;
})();
if(cljs.core.truth_(inst_36138)){
var statearr_36193_36220 = state_36177__$1;
(statearr_36193_36220[(1)] = (8));

} else {
var statearr_36194_36221 = state_36177__$1;
(statearr_36194_36221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (14))){
var inst_36148 = (state_36177[(2)]);
var state_36177__$1 = state_36177;
var statearr_36195_36222 = state_36177__$1;
(statearr_36195_36222[(2)] = inst_36148);

(statearr_36195_36222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (16))){
var state_36177__$1 = state_36177;
var statearr_36196_36223 = state_36177__$1;
(statearr_36196_36223[(2)] = null);

(statearr_36196_36223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (10))){
var inst_36169 = (state_36177[(2)]);
var state_36177__$1 = (function (){var statearr_36197 = state_36177;
(statearr_36197[(11)] = inst_36169);

return statearr_36197;
})();
var statearr_36198_36224 = state_36177__$1;
(statearr_36198_36224[(2)] = null);

(statearr_36198_36224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (8))){
var inst_36136 = (state_36177[(9)]);
var inst_36140 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36136,opts);
var state_36177__$1 = state_36177;
if(cljs.core.truth_(inst_36140)){
var statearr_36199_36225 = state_36177__$1;
(statearr_36199_36225[(1)] = (11));

} else {
var statearr_36200_36226 = state_36177__$1;
(statearr_36200_36226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22304__auto___36208,ch))
;
return ((function (switch__22192__auto__,c__22304__auto___36208,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22193__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22193__auto____0 = (function (){
var statearr_36204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36204[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22193__auto__);

(statearr_36204[(1)] = (1));

return statearr_36204;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22193__auto____1 = (function (state_36177){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_36177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e36205){if((e36205 instanceof Object)){
var ex__22196__auto__ = e36205;
var statearr_36206_36227 = state_36177;
(statearr_36206_36227[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36228 = state_36177;
state_36177 = G__36228;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22193__auto__ = function(state_36177){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22193__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22193__auto____1.call(this,state_36177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22193__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22193__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___36208,ch))
})();
var state__22306__auto__ = (function (){var statearr_36207 = f__22305__auto__.call(null);
(statearr_36207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___36208);

return statearr_36207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___36208,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36229_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36229_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36236 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36236){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_36234 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_36235 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36235;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36234;
}}catch (e36233){if((e36233 instanceof Error)){
var e = e36233;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36236], null));
} else {
var e = e36233;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36236))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36237){
var map__36244 = p__36237;
var map__36244__$1 = ((((!((map__36244 == null)))?((((map__36244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36244):map__36244);
var opts = map__36244__$1;
var build_id = cljs.core.get.call(null,map__36244__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36244,map__36244__$1,opts,build_id){
return (function (p__36246){
var vec__36247 = p__36246;
var map__36248 = cljs.core.nth.call(null,vec__36247,(0),null);
var map__36248__$1 = ((((!((map__36248 == null)))?((((map__36248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36248):map__36248);
var msg = map__36248__$1;
var msg_name = cljs.core.get.call(null,map__36248__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36247,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36247,map__36248,map__36248__$1,msg,msg_name,_,map__36244,map__36244__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36247,map__36248,map__36248__$1,msg,msg_name,_,map__36244,map__36244__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36244,map__36244__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36254){
var vec__36255 = p__36254;
var map__36256 = cljs.core.nth.call(null,vec__36255,(0),null);
var map__36256__$1 = ((((!((map__36256 == null)))?((((map__36256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36256):map__36256);
var msg = map__36256__$1;
var msg_name = cljs.core.get.call(null,map__36256__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36255,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36258){
var map__36268 = p__36258;
var map__36268__$1 = ((((!((map__36268 == null)))?((((map__36268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36268):map__36268);
var on_compile_warning = cljs.core.get.call(null,map__36268__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36268__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36268,map__36268__$1,on_compile_warning,on_compile_fail){
return (function (p__36270){
var vec__36271 = p__36270;
var map__36272 = cljs.core.nth.call(null,vec__36271,(0),null);
var map__36272__$1 = ((((!((map__36272 == null)))?((((map__36272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36272):map__36272);
var msg = map__36272__$1;
var msg_name = cljs.core.get.call(null,map__36272__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36271,(1));
var pred__36274 = cljs.core._EQ_;
var expr__36275 = msg_name;
if(cljs.core.truth_(pred__36274.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36275))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36274.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36275))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36268,map__36268__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__,msg_hist,msg_names,msg){
return (function (state_36491){
var state_val_36492 = (state_36491[(1)]);
if((state_val_36492 === (7))){
var inst_36415 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
if(cljs.core.truth_(inst_36415)){
var statearr_36493_36539 = state_36491__$1;
(statearr_36493_36539[(1)] = (8));

} else {
var statearr_36494_36540 = state_36491__$1;
(statearr_36494_36540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (20))){
var inst_36485 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36495_36541 = state_36491__$1;
(statearr_36495_36541[(2)] = inst_36485);

(statearr_36495_36541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (27))){
var inst_36481 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36496_36542 = state_36491__$1;
(statearr_36496_36542[(2)] = inst_36481);

(statearr_36496_36542[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (1))){
var inst_36408 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36491__$1 = state_36491;
if(cljs.core.truth_(inst_36408)){
var statearr_36497_36543 = state_36491__$1;
(statearr_36497_36543[(1)] = (2));

} else {
var statearr_36498_36544 = state_36491__$1;
(statearr_36498_36544[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (24))){
var inst_36483 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36499_36545 = state_36491__$1;
(statearr_36499_36545[(2)] = inst_36483);

(statearr_36499_36545[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (4))){
var inst_36489 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36491__$1,inst_36489);
} else {
if((state_val_36492 === (15))){
var inst_36487 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36500_36546 = state_36491__$1;
(statearr_36500_36546[(2)] = inst_36487);

(statearr_36500_36546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (21))){
var inst_36446 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36501_36547 = state_36491__$1;
(statearr_36501_36547[(2)] = inst_36446);

(statearr_36501_36547[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (31))){
var inst_36470 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36491__$1 = state_36491;
if(cljs.core.truth_(inst_36470)){
var statearr_36502_36548 = state_36491__$1;
(statearr_36502_36548[(1)] = (34));

} else {
var statearr_36503_36549 = state_36491__$1;
(statearr_36503_36549[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (32))){
var inst_36479 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36504_36550 = state_36491__$1;
(statearr_36504_36550[(2)] = inst_36479);

(statearr_36504_36550[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (33))){
var inst_36468 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36505_36551 = state_36491__$1;
(statearr_36505_36551[(2)] = inst_36468);

(statearr_36505_36551[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (13))){
var inst_36429 = figwheel.client.heads_up.clear.call(null);
var state_36491__$1 = state_36491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,(16),inst_36429);
} else {
if((state_val_36492 === (22))){
var inst_36450 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36451 = figwheel.client.heads_up.append_message.call(null,inst_36450);
var state_36491__$1 = state_36491;
var statearr_36506_36552 = state_36491__$1;
(statearr_36506_36552[(2)] = inst_36451);

(statearr_36506_36552[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (36))){
var inst_36477 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36507_36553 = state_36491__$1;
(statearr_36507_36553[(2)] = inst_36477);

(statearr_36507_36553[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (29))){
var inst_36461 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36508_36554 = state_36491__$1;
(statearr_36508_36554[(2)] = inst_36461);

(statearr_36508_36554[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (6))){
var inst_36410 = (state_36491[(7)]);
var state_36491__$1 = state_36491;
var statearr_36509_36555 = state_36491__$1;
(statearr_36509_36555[(2)] = inst_36410);

(statearr_36509_36555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (28))){
var inst_36457 = (state_36491[(2)]);
var inst_36458 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36459 = figwheel.client.heads_up.display_warning.call(null,inst_36458);
var state_36491__$1 = (function (){var statearr_36510 = state_36491;
(statearr_36510[(8)] = inst_36457);

return statearr_36510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,(29),inst_36459);
} else {
if((state_val_36492 === (25))){
var inst_36455 = figwheel.client.heads_up.clear.call(null);
var state_36491__$1 = state_36491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,(28),inst_36455);
} else {
if((state_val_36492 === (34))){
var inst_36472 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36491__$1 = state_36491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,(37),inst_36472);
} else {
if((state_val_36492 === (17))){
var inst_36437 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36511_36556 = state_36491__$1;
(statearr_36511_36556[(2)] = inst_36437);

(statearr_36511_36556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (3))){
var inst_36427 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36491__$1 = state_36491;
if(cljs.core.truth_(inst_36427)){
var statearr_36512_36557 = state_36491__$1;
(statearr_36512_36557[(1)] = (13));

} else {
var statearr_36513_36558 = state_36491__$1;
(statearr_36513_36558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (12))){
var inst_36423 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36514_36559 = state_36491__$1;
(statearr_36514_36559[(2)] = inst_36423);

(statearr_36514_36559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (2))){
var inst_36410 = (state_36491[(7)]);
var inst_36410__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36491__$1 = (function (){var statearr_36515 = state_36491;
(statearr_36515[(7)] = inst_36410__$1);

return statearr_36515;
})();
if(cljs.core.truth_(inst_36410__$1)){
var statearr_36516_36560 = state_36491__$1;
(statearr_36516_36560[(1)] = (5));

} else {
var statearr_36517_36561 = state_36491__$1;
(statearr_36517_36561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (23))){
var inst_36453 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36491__$1 = state_36491;
if(cljs.core.truth_(inst_36453)){
var statearr_36518_36562 = state_36491__$1;
(statearr_36518_36562[(1)] = (25));

} else {
var statearr_36519_36563 = state_36491__$1;
(statearr_36519_36563[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (35))){
var state_36491__$1 = state_36491;
var statearr_36520_36564 = state_36491__$1;
(statearr_36520_36564[(2)] = null);

(statearr_36520_36564[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (19))){
var inst_36448 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36491__$1 = state_36491;
if(cljs.core.truth_(inst_36448)){
var statearr_36521_36565 = state_36491__$1;
(statearr_36521_36565[(1)] = (22));

} else {
var statearr_36522_36566 = state_36491__$1;
(statearr_36522_36566[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (11))){
var inst_36419 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36523_36567 = state_36491__$1;
(statearr_36523_36567[(2)] = inst_36419);

(statearr_36523_36567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (9))){
var inst_36421 = figwheel.client.heads_up.clear.call(null);
var state_36491__$1 = state_36491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,(12),inst_36421);
} else {
if((state_val_36492 === (5))){
var inst_36412 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36491__$1 = state_36491;
var statearr_36524_36568 = state_36491__$1;
(statearr_36524_36568[(2)] = inst_36412);

(statearr_36524_36568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (14))){
var inst_36439 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36491__$1 = state_36491;
if(cljs.core.truth_(inst_36439)){
var statearr_36525_36569 = state_36491__$1;
(statearr_36525_36569[(1)] = (18));

} else {
var statearr_36526_36570 = state_36491__$1;
(statearr_36526_36570[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (26))){
var inst_36463 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36491__$1 = state_36491;
if(cljs.core.truth_(inst_36463)){
var statearr_36527_36571 = state_36491__$1;
(statearr_36527_36571[(1)] = (30));

} else {
var statearr_36528_36572 = state_36491__$1;
(statearr_36528_36572[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (16))){
var inst_36431 = (state_36491[(2)]);
var inst_36432 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36433 = figwheel.client.format_messages.call(null,inst_36432);
var inst_36434 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36435 = figwheel.client.heads_up.display_error.call(null,inst_36433,inst_36434);
var state_36491__$1 = (function (){var statearr_36529 = state_36491;
(statearr_36529[(9)] = inst_36431);

return statearr_36529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,(17),inst_36435);
} else {
if((state_val_36492 === (30))){
var inst_36465 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36466 = figwheel.client.heads_up.display_warning.call(null,inst_36465);
var state_36491__$1 = state_36491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,(33),inst_36466);
} else {
if((state_val_36492 === (10))){
var inst_36425 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36530_36573 = state_36491__$1;
(statearr_36530_36573[(2)] = inst_36425);

(statearr_36530_36573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (18))){
var inst_36441 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36442 = figwheel.client.format_messages.call(null,inst_36441);
var inst_36443 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36444 = figwheel.client.heads_up.display_error.call(null,inst_36442,inst_36443);
var state_36491__$1 = state_36491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,(21),inst_36444);
} else {
if((state_val_36492 === (37))){
var inst_36474 = (state_36491[(2)]);
var state_36491__$1 = state_36491;
var statearr_36531_36574 = state_36491__$1;
(statearr_36531_36574[(2)] = inst_36474);

(statearr_36531_36574[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36492 === (8))){
var inst_36417 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36491__$1 = state_36491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,(11),inst_36417);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22304__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22192__auto__,c__22304__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto____0 = (function (){
var statearr_36535 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36535[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto__);

(statearr_36535[(1)] = (1));

return statearr_36535;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto____1 = (function (state_36491){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_36491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e36536){if((e36536 instanceof Object)){
var ex__22196__auto__ = e36536;
var statearr_36537_36575 = state_36491;
(statearr_36537_36575[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36576 = state_36491;
state_36491 = G__36576;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto__ = function(state_36491){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto____1.call(this,state_36491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__,msg_hist,msg_names,msg))
})();
var state__22306__auto__ = (function (){var statearr_36538 = f__22305__auto__.call(null);
(statearr_36538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_36538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__,msg_hist,msg_names,msg))
);

return c__22304__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22304__auto___36639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___36639,ch){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___36639,ch){
return (function (state_36622){
var state_val_36623 = (state_36622[(1)]);
if((state_val_36623 === (1))){
var state_36622__$1 = state_36622;
var statearr_36624_36640 = state_36622__$1;
(statearr_36624_36640[(2)] = null);

(statearr_36624_36640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36623 === (2))){
var state_36622__$1 = state_36622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36622__$1,(4),ch);
} else {
if((state_val_36623 === (3))){
var inst_36620 = (state_36622[(2)]);
var state_36622__$1 = state_36622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36622__$1,inst_36620);
} else {
if((state_val_36623 === (4))){
var inst_36610 = (state_36622[(7)]);
var inst_36610__$1 = (state_36622[(2)]);
var state_36622__$1 = (function (){var statearr_36625 = state_36622;
(statearr_36625[(7)] = inst_36610__$1);

return statearr_36625;
})();
if(cljs.core.truth_(inst_36610__$1)){
var statearr_36626_36641 = state_36622__$1;
(statearr_36626_36641[(1)] = (5));

} else {
var statearr_36627_36642 = state_36622__$1;
(statearr_36627_36642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36623 === (5))){
var inst_36610 = (state_36622[(7)]);
var inst_36612 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36610);
var state_36622__$1 = state_36622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36622__$1,(8),inst_36612);
} else {
if((state_val_36623 === (6))){
var state_36622__$1 = state_36622;
var statearr_36628_36643 = state_36622__$1;
(statearr_36628_36643[(2)] = null);

(statearr_36628_36643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36623 === (7))){
var inst_36618 = (state_36622[(2)]);
var state_36622__$1 = state_36622;
var statearr_36629_36644 = state_36622__$1;
(statearr_36629_36644[(2)] = inst_36618);

(statearr_36629_36644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36623 === (8))){
var inst_36614 = (state_36622[(2)]);
var state_36622__$1 = (function (){var statearr_36630 = state_36622;
(statearr_36630[(8)] = inst_36614);

return statearr_36630;
})();
var statearr_36631_36645 = state_36622__$1;
(statearr_36631_36645[(2)] = null);

(statearr_36631_36645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22304__auto___36639,ch))
;
return ((function (switch__22192__auto__,c__22304__auto___36639,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22193__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22193__auto____0 = (function (){
var statearr_36635 = [null,null,null,null,null,null,null,null,null];
(statearr_36635[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22193__auto__);

(statearr_36635[(1)] = (1));

return statearr_36635;
});
var figwheel$client$heads_up_plugin_$_state_machine__22193__auto____1 = (function (state_36622){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_36622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e36636){if((e36636 instanceof Object)){
var ex__22196__auto__ = e36636;
var statearr_36637_36646 = state_36622;
(statearr_36637_36646[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36647 = state_36622;
state_36622 = G__36647;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22193__auto__ = function(state_36622){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22193__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22193__auto____1.call(this,state_36622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22193__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22193__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___36639,ch))
})();
var state__22306__auto__ = (function (){var statearr_36638 = f__22305__auto__.call(null);
(statearr_36638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___36639);

return statearr_36638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___36639,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_36668){
var state_val_36669 = (state_36668[(1)]);
if((state_val_36669 === (1))){
var inst_36663 = cljs.core.async.timeout.call(null,(3000));
var state_36668__$1 = state_36668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36668__$1,(2),inst_36663);
} else {
if((state_val_36669 === (2))){
var inst_36665 = (state_36668[(2)]);
var inst_36666 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36668__$1 = (function (){var statearr_36670 = state_36668;
(statearr_36670[(7)] = inst_36665);

return statearr_36670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36668__$1,inst_36666);
} else {
return null;
}
}
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22193__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22193__auto____0 = (function (){
var statearr_36674 = [null,null,null,null,null,null,null,null];
(statearr_36674[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22193__auto__);

(statearr_36674[(1)] = (1));

return statearr_36674;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22193__auto____1 = (function (state_36668){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_36668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e36675){if((e36675 instanceof Object)){
var ex__22196__auto__ = e36675;
var statearr_36676_36678 = state_36668;
(statearr_36676_36678[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36679 = state_36668;
state_36668 = G__36679;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22193__auto__ = function(state_36668){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22193__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22193__auto____1.call(this,state_36668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22193__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22193__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_36677 = f__22305__auto__.call(null);
(statearr_36677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_36677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36680){
var map__36687 = p__36680;
var map__36687__$1 = ((((!((map__36687 == null)))?((((map__36687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36687):map__36687);
var ed = map__36687__$1;
var formatted_exception = cljs.core.get.call(null,map__36687__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36687__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36687__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36689_36693 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36690_36694 = null;
var count__36691_36695 = (0);
var i__36692_36696 = (0);
while(true){
if((i__36692_36696 < count__36691_36695)){
var msg_36697 = cljs.core._nth.call(null,chunk__36690_36694,i__36692_36696);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36697);

var G__36698 = seq__36689_36693;
var G__36699 = chunk__36690_36694;
var G__36700 = count__36691_36695;
var G__36701 = (i__36692_36696 + (1));
seq__36689_36693 = G__36698;
chunk__36690_36694 = G__36699;
count__36691_36695 = G__36700;
i__36692_36696 = G__36701;
continue;
} else {
var temp__4425__auto___36702 = cljs.core.seq.call(null,seq__36689_36693);
if(temp__4425__auto___36702){
var seq__36689_36703__$1 = temp__4425__auto___36702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36689_36703__$1)){
var c__17628__auto___36704 = cljs.core.chunk_first.call(null,seq__36689_36703__$1);
var G__36705 = cljs.core.chunk_rest.call(null,seq__36689_36703__$1);
var G__36706 = c__17628__auto___36704;
var G__36707 = cljs.core.count.call(null,c__17628__auto___36704);
var G__36708 = (0);
seq__36689_36693 = G__36705;
chunk__36690_36694 = G__36706;
count__36691_36695 = G__36707;
i__36692_36696 = G__36708;
continue;
} else {
var msg_36709 = cljs.core.first.call(null,seq__36689_36703__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36709);

var G__36710 = cljs.core.next.call(null,seq__36689_36703__$1);
var G__36711 = null;
var G__36712 = (0);
var G__36713 = (0);
seq__36689_36693 = G__36710;
chunk__36690_36694 = G__36711;
count__36691_36695 = G__36712;
i__36692_36696 = G__36713;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36714){
var map__36717 = p__36714;
var map__36717__$1 = ((((!((map__36717 == null)))?((((map__36717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36717):map__36717);
var w = map__36717__$1;
var message = cljs.core.get.call(null,map__36717__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16813__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16813__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16813__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36725 = cljs.core.seq.call(null,plugins);
var chunk__36726 = null;
var count__36727 = (0);
var i__36728 = (0);
while(true){
if((i__36728 < count__36727)){
var vec__36729 = cljs.core._nth.call(null,chunk__36726,i__36728);
var k = cljs.core.nth.call(null,vec__36729,(0),null);
var plugin = cljs.core.nth.call(null,vec__36729,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36731 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36725,chunk__36726,count__36727,i__36728,pl_36731,vec__36729,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36731.call(null,msg_hist);
});})(seq__36725,chunk__36726,count__36727,i__36728,pl_36731,vec__36729,k,plugin))
);
} else {
}

var G__36732 = seq__36725;
var G__36733 = chunk__36726;
var G__36734 = count__36727;
var G__36735 = (i__36728 + (1));
seq__36725 = G__36732;
chunk__36726 = G__36733;
count__36727 = G__36734;
i__36728 = G__36735;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36725);
if(temp__4425__auto__){
var seq__36725__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36725__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__36725__$1);
var G__36736 = cljs.core.chunk_rest.call(null,seq__36725__$1);
var G__36737 = c__17628__auto__;
var G__36738 = cljs.core.count.call(null,c__17628__auto__);
var G__36739 = (0);
seq__36725 = G__36736;
chunk__36726 = G__36737;
count__36727 = G__36738;
i__36728 = G__36739;
continue;
} else {
var vec__36730 = cljs.core.first.call(null,seq__36725__$1);
var k = cljs.core.nth.call(null,vec__36730,(0),null);
var plugin = cljs.core.nth.call(null,vec__36730,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36740 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36725,chunk__36726,count__36727,i__36728,pl_36740,vec__36730,k,plugin,seq__36725__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36740.call(null,msg_hist);
});})(seq__36725,chunk__36726,count__36727,i__36728,pl_36740,vec__36730,k,plugin,seq__36725__$1,temp__4425__auto__))
);
} else {
}

var G__36741 = cljs.core.next.call(null,seq__36725__$1);
var G__36742 = null;
var G__36743 = (0);
var G__36744 = (0);
seq__36725 = G__36741;
chunk__36726 = G__36742;
count__36727 = G__36743;
i__36728 = G__36744;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36745 = [];
var len__17883__auto___36748 = arguments.length;
var i__17884__auto___36749 = (0);
while(true){
if((i__17884__auto___36749 < len__17883__auto___36748)){
args36745.push((arguments[i__17884__auto___36749]));

var G__36750 = (i__17884__auto___36749 + (1));
i__17884__auto___36749 = G__36750;
continue;
} else {
}
break;
}

var G__36747 = args36745.length;
switch (G__36747) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36745.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17890__auto__ = [];
var len__17883__auto___36756 = arguments.length;
var i__17884__auto___36757 = (0);
while(true){
if((i__17884__auto___36757 < len__17883__auto___36756)){
args__17890__auto__.push((arguments[i__17884__auto___36757]));

var G__36758 = (i__17884__auto___36757 + (1));
i__17884__auto___36757 = G__36758;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((0) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17891__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36753){
var map__36754 = p__36753;
var map__36754__$1 = ((((!((map__36754 == null)))?((((map__36754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36754):map__36754);
var opts = map__36754__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36752){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36752));
});

//# sourceMappingURL=client.js.map
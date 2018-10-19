// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.repl');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader');
goog.require('goog.events.EventType');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('cljs.reader');
transmorphic.repl.current_namespace = cljs.core.atom.call(null,null);
transmorphic.repl._STAR_closure_index_mem_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
transmorphic.repl.morph_libs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"cljs-morphic.macros","cljs-morphic.macros",1197678057,null),new cljs.core.Symbol(null,"cljs-morphic.morph","cljs-morphic.morph",-1164736643,null),new cljs.core.Symbol(null,"goog.net.XhrIo","goog.net.XhrIo",1530607397,null),new cljs.core.Symbol(null,"cljs-morphic.test","cljs-morphic.test",943471852,null),new cljs.core.Symbol(null,"cljs-morphic.helper","cljs-morphic.helper",-1677692435,null),new cljs.core.Symbol(null,"cljs-morphic.init-macro","cljs-morphic.init-macro",1747893993,null),new cljs.core.Symbol(null,"goog.events","goog.events",-1138228452,null),new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null),new cljs.core.Symbol(null,"cljs-morphic.morph.window","cljs-morphic.morph.window",-428582845,null),new cljs.core.Symbol(null,"cljs-morphic.morph.editor","cljs-morphic.morph.editor",-1770298018,null)],[new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"cljc","cljc",-1728400583),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cljc","cljc",-1728400583),new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"cljs","cljs",1492417629)]);
transmorphic.repl.get_file = (function transmorphic$repl$get_file(url){
var ch = cljs.core.async.chan.call(null,(1));
goog.net.XhrIo.send(url,((function (ch){
return (function (event){
if(cljs.core.truth_(event.target.isSuccess())){
var res = event.target.getResponseText();
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__,res,ch){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__,res,ch){
return (function (state_26216){
var state_val_26217 = (state_26216[(1)]);
if((state_val_26217 === (1))){
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26216__$1,(2),ch,res);
} else {
if((state_val_26217 === (2))){
var inst_26213 = (state_26216[(2)]);
var inst_26214 = cljs.core.async.close_BANG_.call(null,ch);
var state_26216__$1 = (function (){var statearr_26218 = state_26216;
(statearr_26218[(7)] = inst_26213);

return statearr_26218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26216__$1,inst_26214);
} else {
return null;
}
}
});})(c__22304__auto__,res,ch))
;
return ((function (switch__22192__auto__,c__22304__auto__,res,ch){
return (function() {
var transmorphic$repl$get_file_$_state_machine__22193__auto__ = null;
var transmorphic$repl$get_file_$_state_machine__22193__auto____0 = (function (){
var statearr_26222 = [null,null,null,null,null,null,null,null];
(statearr_26222[(0)] = transmorphic$repl$get_file_$_state_machine__22193__auto__);

(statearr_26222[(1)] = (1));

return statearr_26222;
});
var transmorphic$repl$get_file_$_state_machine__22193__auto____1 = (function (state_26216){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26223){if((e26223 instanceof Object)){
var ex__22196__auto__ = e26223;
var statearr_26224_26240 = state_26216;
(statearr_26224_26240[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26241 = state_26216;
state_26216 = G__26241;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$get_file_$_state_machine__22193__auto__ = function(state_26216){
switch(arguments.length){
case 0:
return transmorphic$repl$get_file_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$get_file_$_state_machine__22193__auto____1.call(this,state_26216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$get_file_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$get_file_$_state_machine__22193__auto____0;
transmorphic$repl$get_file_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$get_file_$_state_machine__22193__auto____1;
return transmorphic$repl$get_file_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__,res,ch))
})();
var state__22306__auto__ = (function (){var statearr_26225 = f__22305__auto__.call(null);
(statearr_26225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__,res,ch))
);

return c__22304__auto__;
} else {
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__,ch){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__,ch){
return (function (state_26230){
var state_val_26231 = (state_26230[(1)]);
if((state_val_26231 === (1))){
var state_26230__$1 = state_26230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26230__$1,(2),ch,new cljs.core.Keyword(null,"error","error",-978969032));
} else {
if((state_val_26231 === (2))){
var inst_26227 = (state_26230[(2)]);
var inst_26228 = cljs.core.async.close_BANG_.call(null,ch);
var state_26230__$1 = (function (){var statearr_26232 = state_26230;
(statearr_26232[(7)] = inst_26227);

return statearr_26232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26230__$1,inst_26228);
} else {
return null;
}
}
});})(c__22304__auto__,ch))
;
return ((function (switch__22192__auto__,c__22304__auto__,ch){
return (function() {
var transmorphic$repl$get_file_$_state_machine__22193__auto__ = null;
var transmorphic$repl$get_file_$_state_machine__22193__auto____0 = (function (){
var statearr_26236 = [null,null,null,null,null,null,null,null];
(statearr_26236[(0)] = transmorphic$repl$get_file_$_state_machine__22193__auto__);

(statearr_26236[(1)] = (1));

return statearr_26236;
});
var transmorphic$repl$get_file_$_state_machine__22193__auto____1 = (function (state_26230){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26237){if((e26237 instanceof Object)){
var ex__22196__auto__ = e26237;
var statearr_26238_26242 = state_26230;
(statearr_26238_26242[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26243 = state_26230;
state_26230 = G__26243;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$get_file_$_state_machine__22193__auto__ = function(state_26230){
switch(arguments.length){
case 0:
return transmorphic$repl$get_file_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$get_file_$_state_machine__22193__auto____1.call(this,state_26230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$get_file_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$get_file_$_state_machine__22193__auto____0;
transmorphic$repl$get_file_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$get_file_$_state_machine__22193__auto____1;
return transmorphic$repl$get_file_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__,ch))
})();
var state__22306__auto__ = (function (){var statearr_26239 = f__22305__auto__.call(null);
(statearr_26239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__,ch))
);

return c__22304__auto__;
}
});})(ch))
);

return ch;
});
transmorphic.repl.write_file = (function transmorphic$repl$write_file(url,new_source){
var ch = cljs.core.async.chan.call(null,(1));
goog.net.XhrIo.send(url,((function (ch){
return (function (event){
if(cljs.core.truth_(event.target.isSuccess())){
var res = event.target.getResponseText();
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__,res,ch){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__,res,ch){
return (function (state_26276){
var state_val_26277 = (state_26276[(1)]);
if((state_val_26277 === (1))){
var state_26276__$1 = state_26276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26276__$1,(2),ch,res);
} else {
if((state_val_26277 === (2))){
var inst_26273 = (state_26276[(2)]);
var inst_26274 = cljs.core.async.close_BANG_.call(null,ch);
var state_26276__$1 = (function (){var statearr_26278 = state_26276;
(statearr_26278[(7)] = inst_26273);

return statearr_26278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26276__$1,inst_26274);
} else {
return null;
}
}
});})(c__22304__auto__,res,ch))
;
return ((function (switch__22192__auto__,c__22304__auto__,res,ch){
return (function() {
var transmorphic$repl$write_file_$_state_machine__22193__auto__ = null;
var transmorphic$repl$write_file_$_state_machine__22193__auto____0 = (function (){
var statearr_26282 = [null,null,null,null,null,null,null,null];
(statearr_26282[(0)] = transmorphic$repl$write_file_$_state_machine__22193__auto__);

(statearr_26282[(1)] = (1));

return statearr_26282;
});
var transmorphic$repl$write_file_$_state_machine__22193__auto____1 = (function (state_26276){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26283){if((e26283 instanceof Object)){
var ex__22196__auto__ = e26283;
var statearr_26284_26300 = state_26276;
(statearr_26284_26300[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26301 = state_26276;
state_26276 = G__26301;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$write_file_$_state_machine__22193__auto__ = function(state_26276){
switch(arguments.length){
case 0:
return transmorphic$repl$write_file_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$write_file_$_state_machine__22193__auto____1.call(this,state_26276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$write_file_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$write_file_$_state_machine__22193__auto____0;
transmorphic$repl$write_file_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$write_file_$_state_machine__22193__auto____1;
return transmorphic$repl$write_file_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__,res,ch))
})();
var state__22306__auto__ = (function (){var statearr_26285 = f__22305__auto__.call(null);
(statearr_26285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__,res,ch))
);

return c__22304__auto__;
} else {
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__,ch){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__,ch){
return (function (state_26290){
var state_val_26291 = (state_26290[(1)]);
if((state_val_26291 === (1))){
var state_26290__$1 = state_26290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26290__$1,(2),ch,new cljs.core.Keyword(null,"error","error",-978969032));
} else {
if((state_val_26291 === (2))){
var inst_26287 = (state_26290[(2)]);
var inst_26288 = cljs.core.async.close_BANG_.call(null,ch);
var state_26290__$1 = (function (){var statearr_26292 = state_26290;
(statearr_26292[(7)] = inst_26287);

return statearr_26292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26290__$1,inst_26288);
} else {
return null;
}
}
});})(c__22304__auto__,ch))
;
return ((function (switch__22192__auto__,c__22304__auto__,ch){
return (function() {
var transmorphic$repl$write_file_$_state_machine__22193__auto__ = null;
var transmorphic$repl$write_file_$_state_machine__22193__auto____0 = (function (){
var statearr_26296 = [null,null,null,null,null,null,null,null];
(statearr_26296[(0)] = transmorphic$repl$write_file_$_state_machine__22193__auto__);

(statearr_26296[(1)] = (1));

return statearr_26296;
});
var transmorphic$repl$write_file_$_state_machine__22193__auto____1 = (function (state_26290){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26297){if((e26297 instanceof Object)){
var ex__22196__auto__ = e26297;
var statearr_26298_26302 = state_26290;
(statearr_26298_26302[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26303 = state_26290;
state_26290 = G__26303;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$write_file_$_state_machine__22193__auto__ = function(state_26290){
switch(arguments.length){
case 0:
return transmorphic$repl$write_file_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$write_file_$_state_machine__22193__auto____1.call(this,state_26290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$write_file_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$write_file_$_state_machine__22193__auto____0;
transmorphic$repl$write_file_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$write_file_$_state_machine__22193__auto____1;
return transmorphic$repl$write_file_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__,ch))
})();
var state__22306__auto__ = (function (){var statearr_26299 = f__22305__auto__.call(null);
(statearr_26299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__,ch))
);

return c__22304__auto__;
}
});})(ch))
,"POST",new_source);

return ch;
});
transmorphic.repl.get_ns_source = (function transmorphic$repl$get_ns_source(ns_name,cb){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_26327){
var state_val_26328 = (state_26327[(1)]);
if((state_val_26328 === (1))){
var inst_26320 = cljs.js.ns__GT_relpath.call(null,ns_name);
var inst_26321 = [cljs.core.str(inst_26320),cljs.core.str(".cljs")].join('');
var inst_26322 = transmorphic.repl.get_file.call(null,inst_26321);
var state_26327__$1 = state_26327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26327__$1,(2),inst_26322);
} else {
if((state_val_26328 === (2))){
var inst_26324 = (state_26327[(2)]);
var inst_26325 = cb.call(null,inst_26324);
var state_26327__$1 = state_26327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26327__$1,inst_26325);
} else {
return null;
}
}
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var transmorphic$repl$get_ns_source_$_state_machine__22193__auto__ = null;
var transmorphic$repl$get_ns_source_$_state_machine__22193__auto____0 = (function (){
var statearr_26332 = [null,null,null,null,null,null,null];
(statearr_26332[(0)] = transmorphic$repl$get_ns_source_$_state_machine__22193__auto__);

(statearr_26332[(1)] = (1));

return statearr_26332;
});
var transmorphic$repl$get_ns_source_$_state_machine__22193__auto____1 = (function (state_26327){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26333){if((e26333 instanceof Object)){
var ex__22196__auto__ = e26333;
var statearr_26334_26336 = state_26327;
(statearr_26334_26336[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26337 = state_26327;
state_26327 = G__26337;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$get_ns_source_$_state_machine__22193__auto__ = function(state_26327){
switch(arguments.length){
case 0:
return transmorphic$repl$get_ns_source_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$get_ns_source_$_state_machine__22193__auto____1.call(this,state_26327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$get_ns_source_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$get_ns_source_$_state_machine__22193__auto____0;
transmorphic$repl$get_ns_source_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$get_ns_source_$_state_machine__22193__auto____1;
return transmorphic$repl$get_ns_source_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_26335 = f__22305__auto__.call(null);
(statearr_26335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
transmorphic.repl.update_ns_source_BANG_ = (function transmorphic$repl$update_ns_source_BANG_(ns_name,new_source,cb){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_26361){
var state_val_26362 = (state_26361[(1)]);
if((state_val_26362 === (1))){
var inst_26354 = cljs.js.ns__GT_relpath.call(null,ns_name);
var inst_26355 = [cljs.core.str(inst_26354),cljs.core.str(".cljs")].join('');
var inst_26356 = transmorphic.repl.write_file.call(null,inst_26355,new_source);
var state_26361__$1 = state_26361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26361__$1,(2),inst_26356);
} else {
if((state_val_26362 === (2))){
var inst_26358 = (state_26361[(2)]);
var inst_26359 = cb.call(null,inst_26358);
var state_26361__$1 = state_26361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26361__$1,inst_26359);
} else {
return null;
}
}
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto__ = null;
var transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto____0 = (function (){
var statearr_26366 = [null,null,null,null,null,null,null];
(statearr_26366[(0)] = transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto__);

(statearr_26366[(1)] = (1));

return statearr_26366;
});
var transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto____1 = (function (state_26361){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26367){if((e26367 instanceof Object)){
var ex__22196__auto__ = e26367;
var statearr_26368_26370 = state_26361;
(statearr_26368_26370[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26371 = state_26361;
state_26361 = G__26371;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto__ = function(state_26361){
switch(arguments.length){
case 0:
return transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto____1.call(this,state_26361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto____0;
transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto____1;
return transmorphic$repl$update_ns_source_BANG__$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_26369 = f__22305__auto__.call(null);
(statearr_26369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
transmorphic.repl.file_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
transmorphic.repl.extension__GT_lang = (function transmorphic$repl$extension__GT_lang(extension){
if(cljs.core._EQ_.call(null,".js",extension)){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
return new cljs.core.Keyword(null,"clj","clj",-660495428);
}
});
transmorphic.repl.load_and_callback_BANG_ = (function transmorphic$repl$load_and_callback_BANG_(name,lang,cb){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_26520){
var state_val_26521 = (state_26520[(1)]);
if((state_val_26521 === (7))){
var inst_26477 = (state_26520[(7)]);
var inst_26479 = [cljs.core.str("bootstrap-safe/"),cljs.core.str(inst_26477)].join('');
var state_26520__$1 = state_26520;
var statearr_26522_26562 = state_26520__$1;
(statearr_26522_26562[(2)] = inst_26479);

(statearr_26522_26562[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (20))){
var state_26520__$1 = state_26520;
var statearr_26523_26563 = state_26520__$1;
(statearr_26523_26563[(2)] = new cljs.core.Keyword(null,"error","error",-978969032));

(statearr_26523_26563[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (1))){
var inst_26467 = new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null);
var inst_26468 = [inst_26467,null];
var inst_26469 = (new cljs.core.PersistentArrayMap(null,1,inst_26468,null));
var inst_26470 = (new cljs.core.PersistentHashSet(null,inst_26469,null));
var inst_26471 = cljs.core.contains_QMARK_.call(null,inst_26470,name);
var state_26520__$1 = state_26520;
if(inst_26471){
var statearr_26524_26564 = state_26520__$1;
(statearr_26524_26564[(1)] = (2));

} else {
var statearr_26525_26565 = state_26520__$1;
(statearr_26525_26565[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (4))){
var inst_26475 = (state_26520[(8)]);
var inst_26475__$1 = (state_26520[(2)]);
var inst_26476 = cljs.js.ns__GT_relpath.call(null,name);
var inst_26477 = [cljs.core.str(inst_26476),cljs.core.str(inst_26475__$1)].join('');
var state_26520__$1 = (function (){var statearr_26526 = state_26520;
(statearr_26526[(7)] = inst_26477);

(statearr_26526[(8)] = inst_26475__$1);

return statearr_26526;
})();
var G__26527_26566 = inst_26475__$1;
switch (G__26527_26566) {
case ".cljs":
var statearr_26528_26568 = state_26520__$1;
(statearr_26528_26568[(1)] = (6));


break;
case ".cljc":
var statearr_26529_26569 = state_26520__$1;
(statearr_26529_26569[(1)] = (7));


break;
case ".js":
var statearr_26530_26570 = state_26520__$1;
(statearr_26530_26570[(1)] = (8));


break;
case ".clj":
var statearr_26531_26571 = state_26520__$1;
(statearr_26531_26571[(1)] = (9));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_26475__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (15))){
var inst_26491 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
var statearr_26532_26572 = state_26520__$1;
(statearr_26532_26572[(2)] = inst_26491);

(statearr_26532_26572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (21))){
var inst_26475 = (state_26520[(8)]);
var inst_26508 = (state_26520[(9)]);
var inst_26512 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_26513 = transmorphic.repl.extension__GT_lang.call(null,inst_26475);
var inst_26514 = [inst_26513,inst_26508];
var inst_26515 = cljs.core.PersistentHashMap.fromArrays(inst_26512,inst_26514);
var inst_26516 = cb.call(null,inst_26515);
var state_26520__$1 = state_26520;
var statearr_26533_26573 = state_26520__$1;
(statearr_26533_26573[(2)] = inst_26516);

(statearr_26533_26573[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (13))){
var inst_26477 = (state_26520[(7)]);
var inst_26488 = [cljs.core.str("clojurescript/src/main/clojure/"),cljs.core.str(inst_26477)].join('');
var state_26520__$1 = state_26520;
var statearr_26534_26574 = state_26520__$1;
(statearr_26534_26574[(2)] = inst_26488);

(statearr_26534_26574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (22))){
var inst_26518 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26520__$1,inst_26518);
} else {
if((state_val_26521 === (6))){
var inst_26477 = (state_26520[(7)]);
var state_26520__$1 = state_26520;
var statearr_26535_26575 = state_26520__$1;
(statearr_26535_26575[(2)] = inst_26477);

(statearr_26535_26575[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (17))){
var inst_26496 = (state_26520[(10)]);
var inst_26501 = transmorphic.repl.get_file.call(null,inst_26496);
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26520__$1,(19),inst_26501);
} else {
if((state_val_26521 === (3))){
var state_26520__$1 = state_26520;
var statearr_26536_26576 = state_26520__$1;
(statearr_26536_26576[(2)] = lang);

(statearr_26536_26576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (12))){
var inst_26493 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
var statearr_26537_26577 = state_26520__$1;
(statearr_26537_26577[(2)] = inst_26493);

(statearr_26537_26577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (2))){
var state_26520__$1 = state_26520;
var statearr_26538_26578 = state_26520__$1;
(statearr_26538_26578[(2)] = ".js");

(statearr_26538_26578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (19))){
var inst_26496 = (state_26520[(10)]);
var inst_26503 = (state_26520[(2)]);
var inst_26504 = cljs.core.swap_BANG_.call(null,transmorphic.repl.file_cache,cljs.core.assoc,inst_26496,inst_26503);
var inst_26505 = cljs.core.deref.call(null,transmorphic.repl.file_cache);
var inst_26506 = cljs.core.get.call(null,inst_26505,inst_26496);
var state_26520__$1 = (function (){var statearr_26539 = state_26520;
(statearr_26539[(11)] = inst_26504);

return statearr_26539;
})();
var statearr_26540_26579 = state_26520__$1;
(statearr_26540_26579[(2)] = inst_26506);

(statearr_26540_26579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (11))){
var state_26520__$1 = state_26520;
var statearr_26541_26580 = state_26520__$1;
(statearr_26541_26580[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (9))){
var inst_26477 = (state_26520[(7)]);
var inst_26483 = cljs.core.re_matches.call(null,/^cljs_morphic\/.*/,inst_26477);
var state_26520__$1 = state_26520;
if(cljs.core.truth_(inst_26483)){
var statearr_26543_26581 = state_26520__$1;
(statearr_26543_26581[(1)] = (10));

} else {
var statearr_26544_26582 = state_26520__$1;
(statearr_26544_26582[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (5))){
var inst_26496 = (state_26520[(10)]);
var inst_26498 = (state_26520[(12)]);
var inst_26496__$1 = (state_26520[(2)]);
var inst_26497 = cljs.core.deref.call(null,transmorphic.repl.file_cache);
var inst_26498__$1 = cljs.core.get.call(null,inst_26497,inst_26496__$1);
var state_26520__$1 = (function (){var statearr_26545 = state_26520;
(statearr_26545[(10)] = inst_26496__$1);

(statearr_26545[(12)] = inst_26498__$1);

return statearr_26545;
})();
if(cljs.core.truth_(inst_26498__$1)){
var statearr_26546_26583 = state_26520__$1;
(statearr_26546_26583[(1)] = (16));

} else {
var statearr_26547_26584 = state_26520__$1;
(statearr_26547_26584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (14))){
var state_26520__$1 = state_26520;
var statearr_26548_26585 = state_26520__$1;
(statearr_26548_26585[(2)] = null);

(statearr_26548_26585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (16))){
var inst_26498 = (state_26520[(12)]);
var state_26520__$1 = state_26520;
var statearr_26549_26586 = state_26520__$1;
(statearr_26549_26586[(2)] = inst_26498);

(statearr_26549_26586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (10))){
var inst_26477 = (state_26520[(7)]);
var inst_26485 = [cljs.core.str("src/clj/"),cljs.core.str(inst_26477)].join('');
var state_26520__$1 = state_26520;
var statearr_26550_26587 = state_26520__$1;
(statearr_26550_26587[(2)] = inst_26485);

(statearr_26550_26587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (18))){
var inst_26508 = (state_26520[(9)]);
var inst_26508__$1 = (state_26520[(2)]);
var inst_26509 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_26508__$1);
var state_26520__$1 = (function (){var statearr_26551 = state_26520;
(statearr_26551[(9)] = inst_26508__$1);

return statearr_26551;
})();
if(inst_26509){
var statearr_26552_26588 = state_26520__$1;
(statearr_26552_26588[(1)] = (20));

} else {
var statearr_26553_26589 = state_26520__$1;
(statearr_26553_26589[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (8))){
var inst_26477 = (state_26520[(7)]);
var inst_26481 = [cljs.core.str("cloxp-cljs-build/out/"),cljs.core.str(inst_26477)].join('');
var state_26520__$1 = state_26520;
var statearr_26554_26590 = state_26520__$1;
(statearr_26554_26590[(2)] = inst_26481);

(statearr_26554_26590[(1)] = (5));


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
}
}
}
}
}
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto__ = null;
var transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto____0 = (function (){
var statearr_26558 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26558[(0)] = transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto__);

(statearr_26558[(1)] = (1));

return statearr_26558;
});
var transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto____1 = (function (state_26520){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26559){if((e26559 instanceof Object)){
var ex__22196__auto__ = e26559;
var statearr_26560_26591 = state_26520;
(statearr_26560_26591[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26592 = state_26520;
state_26520 = G__26592;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto__ = function(state_26520){
switch(arguments.length){
case 0:
return transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto____1.call(this,state_26520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto____0;
transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto____1;
return transmorphic$repl$load_and_callback_BANG__$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_26561 = f__22305__auto__.call(null);
(statearr_26561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
transmorphic.repl.skip_load_QMARK_ = (function transmorphic$repl$skip_load_QMARK_(p__26593){
var map__26596 = p__26593;
var map__26596__$1 = ((((!((map__26596 == null)))?((((map__26596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26596):map__26596);
var name = cljs.core.get.call(null,map__26596__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__26596__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
return true;
} else {
if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null));
if(and__16813__auto__){
return macros;
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;

}
}
});
transmorphic.repl.load_existing = (function transmorphic$repl$load_existing(cb,p__26598){
var map__26619 = p__26598;
var map__26619__$1 = ((((!((map__26619 == null)))?((((map__26619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26619):map__26619);
var name = cljs.core.get.call(null,map__26619__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__26619__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__,map__26619,map__26619__$1,name,macros){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__,map__26619,map__26619__$1,name,macros){
return (function (state_26629){
var state_val_26630 = (state_26629[(1)]);
if((state_val_26630 === (1))){
var inst_26621 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_26622 = transmorphic.repl.get_file.call(null,"cloxp-cljs-build/out/cljs/core.js");
var state_26629__$1 = (function (){var statearr_26631 = state_26629;
(statearr_26631[(7)] = inst_26621);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26629__$1,(2),inst_26622);
} else {
if((state_val_26630 === (2))){
var inst_26621 = (state_26629[(7)]);
var inst_26624 = (state_26629[(2)]);
var inst_26625 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_26624];
var inst_26626 = cljs.core.PersistentHashMap.fromArrays(inst_26621,inst_26625);
var inst_26627 = cb.call(null,inst_26626);
var state_26629__$1 = state_26629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26629__$1,inst_26627);
} else {
return null;
}
}
});})(c__22304__auto__,map__26619,map__26619__$1,name,macros))
;
return ((function (switch__22192__auto__,c__22304__auto__,map__26619,map__26619__$1,name,macros){
return (function() {
var transmorphic$repl$load_existing_$_state_machine__22193__auto__ = null;
var transmorphic$repl$load_existing_$_state_machine__22193__auto____0 = (function (){
var statearr_26635 = [null,null,null,null,null,null,null,null];
(statearr_26635[(0)] = transmorphic$repl$load_existing_$_state_machine__22193__auto__);

(statearr_26635[(1)] = (1));

return statearr_26635;
});
var transmorphic$repl$load_existing_$_state_machine__22193__auto____1 = (function (state_26629){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26636){if((e26636 instanceof Object)){
var ex__22196__auto__ = e26636;
var statearr_26637_26639 = state_26629;
(statearr_26637_26639[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26640 = state_26629;
state_26629 = G__26640;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$load_existing_$_state_machine__22193__auto__ = function(state_26629){
switch(arguments.length){
case 0:
return transmorphic$repl$load_existing_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$load_existing_$_state_machine__22193__auto____1.call(this,state_26629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$load_existing_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$load_existing_$_state_machine__22193__auto____0;
transmorphic$repl$load_existing_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$load_existing_$_state_machine__22193__auto____1;
return transmorphic$repl$load_existing_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__,map__26619,map__26619__$1,name,macros))
})();
var state__22306__auto__ = (function (){var statearr_26638 = f__22305__auto__.call(null);
(statearr_26638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__,map__26619,map__26619__$1,name,macros))
);

return c__22304__auto__;
} else {
if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null));
if(and__16813__auto__){
return macros;
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;

}
}
});
transmorphic.repl.do_load_file = (function transmorphic$repl$do_load_file(file,cb){
if(cljs.core.truth_(transmorphic.repl.load_and_callback_BANG_.call(null,file,new cljs.core.Keyword(null,"clj","clj",-660495428),cb))){
return null;
} else {
return cb.call(null,null);
}
});
transmorphic.repl.closure_index = (function transmorphic$repl$closure_index(){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_26690){
var state_val_26691 = (state_26690[(1)]);
if((state_val_26691 === (1))){
var inst_26673 = (function (){return ((function (state_val_26691,c__22304__auto__){
return (function (p__26672){
var vec__26692 = p__26672;
var _ = cljs.core.nth.call(null,vec__26692,(0),null);
var path = cljs.core.nth.call(null,vec__26692,(1),null);
var provides = cljs.core.nth.call(null,vec__26692,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/'(.*?)'/,provides))], null);
});
;})(state_val_26691,c__22304__auto__))
})();
var inst_26674 = transmorphic.repl.get_file.call(null,"cloxp-cljs-build/out/goog/deps.js");
var state_26690__$1 = (function (){var statearr_26693 = state_26690;
(statearr_26693[(7)] = inst_26673);

return statearr_26693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26690__$1,(2),inst_26674);
} else {
if((state_val_26691 === (2))){
var inst_26673 = (state_26690[(7)]);
var inst_26676 = (state_26690[(2)]);
var inst_26677 = cljs.core.re_seq.call(null,/\ngoog\.addDependency\('(.*)', \[(.*?)\].*/,inst_26676);
var inst_26678 = cljs.core.map.call(null,inst_26673,inst_26677);
var inst_26679 = cljs.core.PersistentHashMap.EMPTY;
var inst_26686 = (function (){var paths_to_provides = inst_26678;
return ((function (paths_to_provides,inst_26673,inst_26676,inst_26677,inst_26678,inst_26679,state_val_26691,c__22304__auto__){
return (function transmorphic$repl$closure_index_$_iter__26680(s__26681){
return (new cljs.core.LazySeq(null,((function (paths_to_provides,inst_26673,inst_26676,inst_26677,inst_26678,inst_26679,state_val_26691,c__22304__auto__){
return (function (){
var s__26681__$1 = s__26681;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26681__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__26695 = cljs.core.first.call(null,xs__4977__auto__);
var path = cljs.core.nth.call(null,vec__26695,(0),null);
var provides = cljs.core.nth.call(null,vec__26695,(1),null);
var iterys__17593__auto__ = ((function (s__26681__$1,vec__26695,path,provides,xs__4977__auto__,temp__4425__auto__,paths_to_provides,inst_26673,inst_26676,inst_26677,inst_26678,inst_26679,state_val_26691,c__22304__auto__){
return (function transmorphic$repl$closure_index_$_iter__26680_$_iter__26682(s__26683){
return (new cljs.core.LazySeq(null,((function (s__26681__$1,vec__26695,path,provides,xs__4977__auto__,temp__4425__auto__,paths_to_provides,inst_26673,inst_26676,inst_26677,inst_26678,inst_26679,state_val_26691,c__22304__auto__){
return (function (){
var s__26683__$1 = s__26683;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26683__$1);
if(temp__4425__auto____$1){
var s__26683__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26683__$2)){
var c__17595__auto__ = cljs.core.chunk_first.call(null,s__26683__$2);
var size__17596__auto__ = cljs.core.count.call(null,c__17595__auto__);
var b__26685 = cljs.core.chunk_buffer.call(null,size__17596__auto__);
if((function (){var i__26684 = (0);
while(true){
if((i__26684 < size__17596__auto__)){
var provide = cljs.core._nth.call(null,c__17595__auto__,i__26684);
cljs.core.chunk_append.call(null,b__26685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),[cljs.core.str("goog/"),cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null));

var G__26703 = (i__26684 + (1));
i__26684 = G__26703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26685),transmorphic$repl$closure_index_$_iter__26680_$_iter__26682.call(null,cljs.core.chunk_rest.call(null,s__26683__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26685),null);
}
} else {
var provide = cljs.core.first.call(null,s__26683__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),[cljs.core.str("goog/"),cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null),transmorphic$repl$closure_index_$_iter__26680_$_iter__26682.call(null,cljs.core.rest.call(null,s__26683__$2)));
}
} else {
return null;
}
break;
}
});})(s__26681__$1,vec__26695,path,provides,xs__4977__auto__,temp__4425__auto__,paths_to_provides,inst_26673,inst_26676,inst_26677,inst_26678,inst_26679,state_val_26691,c__22304__auto__))
,null,null));
});})(s__26681__$1,vec__26695,path,provides,xs__4977__auto__,temp__4425__auto__,paths_to_provides,inst_26673,inst_26676,inst_26677,inst_26678,inst_26679,state_val_26691,c__22304__auto__))
;
var fs__17594__auto__ = cljs.core.seq.call(null,iterys__17593__auto__.call(null,provides));
if(fs__17594__auto__){
return cljs.core.concat.call(null,fs__17594__auto__,transmorphic$repl$closure_index_$_iter__26680.call(null,cljs.core.rest.call(null,s__26681__$1)));
} else {
var G__26704 = cljs.core.rest.call(null,s__26681__$1);
s__26681__$1 = G__26704;
continue;
}
} else {
return null;
}
break;
}
});})(paths_to_provides,inst_26673,inst_26676,inst_26677,inst_26678,inst_26679,state_val_26691,c__22304__auto__))
,null,null));
});
;})(paths_to_provides,inst_26673,inst_26676,inst_26677,inst_26678,inst_26679,state_val_26691,c__22304__auto__))
})();
var inst_26687 = inst_26686.call(null,inst_26678);
var inst_26688 = cljs.core.into.call(null,inst_26679,inst_26687);
var state_26690__$1 = state_26690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26690__$1,inst_26688);
} else {
return null;
}
}
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var transmorphic$repl$closure_index_$_state_machine__22193__auto__ = null;
var transmorphic$repl$closure_index_$_state_machine__22193__auto____0 = (function (){
var statearr_26699 = [null,null,null,null,null,null,null,null];
(statearr_26699[(0)] = transmorphic$repl$closure_index_$_state_machine__22193__auto__);

(statearr_26699[(1)] = (1));

return statearr_26699;
});
var transmorphic$repl$closure_index_$_state_machine__22193__auto____1 = (function (state_26690){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26700){if((e26700 instanceof Object)){
var ex__22196__auto__ = e26700;
var statearr_26701_26705 = state_26690;
(statearr_26701_26705[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26706 = state_26690;
state_26690 = G__26706;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$closure_index_$_state_machine__22193__auto__ = function(state_26690){
switch(arguments.length){
case 0:
return transmorphic$repl$closure_index_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$closure_index_$_state_machine__22193__auto____1.call(this,state_26690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$closure_index_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$closure_index_$_state_machine__22193__auto____0;
transmorphic$repl$closure_index_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$closure_index_$_state_machine__22193__auto____1;
return transmorphic$repl$closure_index_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_26702 = f__22305__auto__.call(null);
(statearr_26702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
transmorphic.repl.do_load_goog = (function transmorphic$repl$do_load_goog(name,cb){
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,transmorphic.repl._STAR_closure_index_mem_STAR_),name);
if(cljs.core.truth_(temp__4423__auto__)){
var goog_path = temp__4423__auto__;
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__,goog_path,temp__4423__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__,goog_path,temp__4423__auto__){
return (function (state_26751){
var state_val_26752 = (state_26751[(1)]);
if((state_val_26752 === (1))){
var inst_26736 = [cljs.core.str("cloxp-cljs-build/out/"),cljs.core.str(goog_path),cljs.core.str(".js")].join('');
var inst_26737 = transmorphic.repl.get_file.call(null,inst_26736);
var state_26751__$1 = state_26751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26751__$1,(2),inst_26737);
} else {
if((state_val_26752 === (2))){
var inst_26739 = (state_26751[(7)]);
var inst_26739__$1 = (state_26751[(2)]);
var inst_26740 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_26739__$1);
var state_26751__$1 = (function (){var statearr_26753 = state_26751;
(statearr_26753[(7)] = inst_26739__$1);

return statearr_26753;
})();
if(inst_26740){
var statearr_26754_26765 = state_26751__$1;
(statearr_26754_26765[(1)] = (3));

} else {
var statearr_26755_26766 = state_26751__$1;
(statearr_26755_26766[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26752 === (3))){
var inst_26742 = cb.call(null,null);
var state_26751__$1 = state_26751;
var statearr_26756_26767 = state_26751__$1;
(statearr_26756_26767[(2)] = inst_26742);

(statearr_26756_26767[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26752 === (4))){
var inst_26739 = (state_26751[(7)]);
var inst_26744 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_26745 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_26739];
var inst_26746 = cljs.core.PersistentHashMap.fromArrays(inst_26744,inst_26745);
var inst_26747 = cb.call(null,inst_26746);
var state_26751__$1 = state_26751;
var statearr_26757_26768 = state_26751__$1;
(statearr_26757_26768[(2)] = inst_26747);

(statearr_26757_26768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26752 === (5))){
var inst_26749 = (state_26751[(2)]);
var state_26751__$1 = state_26751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26751__$1,inst_26749);
} else {
return null;
}
}
}
}
}
});})(c__22304__auto__,goog_path,temp__4423__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__,goog_path,temp__4423__auto__){
return (function() {
var transmorphic$repl$do_load_goog_$_state_machine__22193__auto__ = null;
var transmorphic$repl$do_load_goog_$_state_machine__22193__auto____0 = (function (){
var statearr_26761 = [null,null,null,null,null,null,null,null];
(statearr_26761[(0)] = transmorphic$repl$do_load_goog_$_state_machine__22193__auto__);

(statearr_26761[(1)] = (1));

return statearr_26761;
});
var transmorphic$repl$do_load_goog_$_state_machine__22193__auto____1 = (function (state_26751){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26762){if((e26762 instanceof Object)){
var ex__22196__auto__ = e26762;
var statearr_26763_26769 = state_26751;
(statearr_26763_26769[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26770 = state_26751;
state_26751 = G__26770;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$do_load_goog_$_state_machine__22193__auto__ = function(state_26751){
switch(arguments.length){
case 0:
return transmorphic$repl$do_load_goog_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$do_load_goog_$_state_machine__22193__auto____1.call(this,state_26751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$do_load_goog_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$do_load_goog_$_state_machine__22193__auto____0;
transmorphic$repl$do_load_goog_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$do_load_goog_$_state_machine__22193__auto____1;
return transmorphic$repl$do_load_goog_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__,goog_path,temp__4423__auto__))
})();
var state__22306__auto__ = (function (){var statearr_26764 = f__22305__auto__.call(null);
(statearr_26764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__,goog_path,temp__4423__auto__))
);

return c__22304__auto__;
} else {
return cb.call(null,null);
}
});
transmorphic.repl.do_load_other = (function transmorphic$repl$do_load_other(name,macros,cb){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_26864){
var state_val_26865 = (state_26864[(1)]);
if((state_val_26865 === (7))){
var inst_26840 = (state_26864[(7)]);
var inst_26843 = cljs.core.first.call(null,inst_26840);
var inst_26844 = transmorphic.repl.load_and_callback_BANG_.call(null,name,inst_26843,cb);
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26864__$1,(10),inst_26844);
} else {
if((state_val_26865 === (1))){
var state_26864__$1 = state_26864;
if(cljs.core.truth_(macros)){
var statearr_26866_26889 = state_26864__$1;
(statearr_26866_26889[(1)] = (2));

} else {
var statearr_26867_26890 = state_26864__$1;
(statearr_26867_26890[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (4))){
var inst_26839 = (state_26864[(2)]);
var inst_26840 = inst_26839;
var state_26864__$1 = (function (){var statearr_26868 = state_26864;
(statearr_26868[(7)] = inst_26840);

return statearr_26868;
})();
var statearr_26869_26891 = state_26864__$1;
(statearr_26869_26891[(2)] = null);

(statearr_26869_26891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (13))){
var inst_26856 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
var statearr_26870_26892 = state_26864__$1;
(statearr_26870_26892[(2)] = inst_26856);

(statearr_26870_26892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (6))){
var inst_26862 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26864__$1,inst_26862);
} else {
if((state_val_26865 === (3))){
var inst_26835 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26836 = [".cljs",".cljc",".js"];
var inst_26837 = (new cljs.core.PersistentVector(null,3,(5),inst_26835,inst_26836,null));
var state_26864__$1 = state_26864;
var statearr_26871_26893 = state_26864__$1;
(statearr_26871_26893[(2)] = inst_26837);

(statearr_26871_26893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (12))){
var state_26864__$1 = state_26864;
var statearr_26872_26894 = state_26864__$1;
(statearr_26872_26894[(2)] = null);

(statearr_26872_26894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (2))){
var inst_26831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26832 = [".clj",".cljc"];
var inst_26833 = (new cljs.core.PersistentVector(null,2,(5),inst_26831,inst_26832,null));
var state_26864__$1 = state_26864;
var statearr_26873_26895 = state_26864__$1;
(statearr_26873_26895[(2)] = inst_26833);

(statearr_26873_26895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (11))){
var inst_26840 = (state_26864[(7)]);
var inst_26849 = cljs.core.next.call(null,inst_26840);
var inst_26850 = cljs.core.first.call(null,inst_26849);
var inst_26851 = cljs.core.prn.call(null,"failed loading",name,"retrying with",inst_26850);
var inst_26852 = cljs.core.next.call(null,inst_26840);
var inst_26840__$1 = inst_26852;
var state_26864__$1 = (function (){var statearr_26874 = state_26864;
(statearr_26874[(8)] = inst_26851);

(statearr_26874[(7)] = inst_26840__$1);

return statearr_26874;
})();
var statearr_26875_26896 = state_26864__$1;
(statearr_26875_26896[(2)] = null);

(statearr_26875_26896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (9))){
var inst_26860 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
var statearr_26876_26897 = state_26864__$1;
(statearr_26876_26897[(2)] = inst_26860);

(statearr_26876_26897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (5))){
var inst_26840 = (state_26864[(7)]);
var state_26864__$1 = state_26864;
if(cljs.core.truth_(inst_26840)){
var statearr_26877_26898 = state_26864__$1;
(statearr_26877_26898[(1)] = (7));

} else {
var statearr_26878_26899 = state_26864__$1;
(statearr_26878_26899[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (10))){
var inst_26846 = (state_26864[(2)]);
var inst_26847 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_26846);
var state_26864__$1 = state_26864;
if(inst_26847){
var statearr_26879_26900 = state_26864__$1;
(statearr_26879_26900[(1)] = (11));

} else {
var statearr_26880_26901 = state_26864__$1;
(statearr_26880_26901[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (8))){
var inst_26858 = cb.call(null,null);
var state_26864__$1 = state_26864;
var statearr_26881_26902 = state_26864__$1;
(statearr_26881_26902[(2)] = inst_26858);

(statearr_26881_26902[(1)] = (9));


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
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var transmorphic$repl$do_load_other_$_state_machine__22193__auto__ = null;
var transmorphic$repl$do_load_other_$_state_machine__22193__auto____0 = (function (){
var statearr_26885 = [null,null,null,null,null,null,null,null,null];
(statearr_26885[(0)] = transmorphic$repl$do_load_other_$_state_machine__22193__auto__);

(statearr_26885[(1)] = (1));

return statearr_26885;
});
var transmorphic$repl$do_load_other_$_state_machine__22193__auto____1 = (function (state_26864){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26886){if((e26886 instanceof Object)){
var ex__22196__auto__ = e26886;
var statearr_26887_26903 = state_26864;
(statearr_26887_26903[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26904 = state_26864;
state_26864 = G__26904;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$do_load_other_$_state_machine__22193__auto__ = function(state_26864){
switch(arguments.length){
case 0:
return transmorphic$repl$do_load_other_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$do_load_other_$_state_machine__22193__auto____1.call(this,state_26864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$do_load_other_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$do_load_other_$_state_machine__22193__auto____0;
transmorphic$repl$do_load_other_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$do_load_other_$_state_machine__22193__auto____1;
return transmorphic$repl$do_load_other_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_26888 = f__22305__auto__.call(null);
(statearr_26888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
transmorphic.repl.foreign_libs = new cljs.core.PersistentArrayMap(null, 3, ["cljsjs/react","react.inc.js","cljsjs/react/dom","react-dom.inc.js","cljsjs/react/dom/server","react-dom-server.inc.js"], null);
transmorphic.repl.load_foreign_lib = (function transmorphic$repl$load_foreign_lib(path,cb){
if(cljs.core.contains_QMARK_.call(null,transmorphic.repl.foreign_libs,path)){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_26935){
var state_val_26936 = (state_26935[(1)]);
if((state_val_26936 === (1))){
var inst_26925 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_26926 = cljs.core.get.call(null,transmorphic.repl.foreign_libs,path);
var inst_26927 = [cljs.core.str("cloxp-cljs-build/out/"),cljs.core.str(inst_26926)].join('');
var inst_26928 = transmorphic.repl.get_file.call(null,inst_26927);
var state_26935__$1 = (function (){var statearr_26937 = state_26935;
(statearr_26937[(7)] = inst_26925);

return statearr_26937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26935__$1,(2),inst_26928);
} else {
if((state_val_26936 === (2))){
var inst_26925 = (state_26935[(7)]);
var inst_26930 = (state_26935[(2)]);
var inst_26931 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_26930];
var inst_26932 = cljs.core.PersistentHashMap.fromArrays(inst_26925,inst_26931);
var inst_26933 = cb.call(null,inst_26932);
var state_26935__$1 = state_26935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26935__$1,inst_26933);
} else {
return null;
}
}
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto__ = null;
var transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto____0 = (function (){
var statearr_26941 = [null,null,null,null,null,null,null,null];
(statearr_26941[(0)] = transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto__);

(statearr_26941[(1)] = (1));

return statearr_26941;
});
var transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto____1 = (function (state_26935){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_26935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e26942){if((e26942 instanceof Object)){
var ex__22196__auto__ = e26942;
var statearr_26943_26945 = state_26935;
(statearr_26943_26945[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26946 = state_26935;
state_26935 = G__26946;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto__ = function(state_26935){
switch(arguments.length){
case 0:
return transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto____1.call(this,state_26935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto____0;
transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto____1;
return transmorphic$repl$load_foreign_lib_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_26944 = f__22305__auto__.call(null);
(statearr_26944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_26944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
} else {
return cb.call(null,null);
}
});
transmorphic.repl.load_for_macro = (function transmorphic$repl$load_for_macro(path,cb){
cljs.core.prn.call(null,"loading for macro: ",path);

var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_27012){
var state_val_27013 = (state_27012[(1)]);
if((state_val_27013 === (1))){
var inst_26989 = [cljs.core.str("bootstrap-safe/"),cljs.core.str(path),cljs.core.str(".clj")].join('');
var inst_26990 = transmorphic.repl.get_file.call(null,inst_26989);
var state_27012__$1 = state_27012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27012__$1,(2),inst_26990);
} else {
if((state_val_27013 === (2))){
var inst_26992 = (state_27012[(7)]);
var inst_26992__$1 = (state_27012[(2)]);
var inst_26993 = cljs.core._EQ_.call(null,inst_26992__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_27012__$1 = (function (){var statearr_27014 = state_27012;
(statearr_27014[(7)] = inst_26992__$1);

return statearr_27014;
})();
if(inst_26993){
var statearr_27015_27031 = state_27012__$1;
(statearr_27015_27031[(1)] = (3));

} else {
var statearr_27016_27032 = state_27012__$1;
(statearr_27016_27032[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (3))){
var inst_26995 = [cljs.core.str("bootstrap-safe/"),cljs.core.str(path),cljs.core.str(".cljc")].join('');
var inst_26996 = transmorphic.repl.get_file.call(null,inst_26995);
var state_27012__$1 = state_27012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27012__$1,(6),inst_26996);
} else {
if((state_val_27013 === (4))){
var inst_26992 = (state_27012[(7)]);
var state_27012__$1 = state_27012;
var statearr_27017_27033 = state_27012__$1;
(statearr_27017_27033[(2)] = inst_26992);

(statearr_27017_27033[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (5))){
var inst_27001 = (state_27012[(8)]);
var inst_27001__$1 = (state_27012[(2)]);
var state_27012__$1 = (function (){var statearr_27018 = state_27012;
(statearr_27018[(8)] = inst_27001__$1);

return statearr_27018;
})();
if(cljs.core.truth_(inst_27001__$1)){
var statearr_27019_27034 = state_27012__$1;
(statearr_27019_27034[(1)] = (7));

} else {
var statearr_27020_27035 = state_27012__$1;
(statearr_27020_27035[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (6))){
var inst_26998 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
var statearr_27021_27036 = state_27012__$1;
(statearr_27021_27036[(2)] = inst_26998);

(statearr_27021_27036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (7))){
var inst_27001 = (state_27012[(8)]);
var inst_27003 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_27004 = [new cljs.core.Keyword(null,"clj","clj",-660495428),inst_27001];
var inst_27005 = cljs.core.PersistentHashMap.fromArrays(inst_27003,inst_27004);
var inst_27006 = cb.call(null,inst_27005);
var state_27012__$1 = state_27012;
var statearr_27022_27037 = state_27012__$1;
(statearr_27022_27037[(2)] = inst_27006);

(statearr_27022_27037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (8))){
var inst_27008 = cb.call(null,null);
var state_27012__$1 = state_27012;
var statearr_27023_27038 = state_27012__$1;
(statearr_27023_27038[(2)] = inst_27008);

(statearr_27023_27038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (9))){
var inst_27010 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27012__$1,inst_27010);
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
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var transmorphic$repl$load_for_macro_$_state_machine__22193__auto__ = null;
var transmorphic$repl$load_for_macro_$_state_machine__22193__auto____0 = (function (){
var statearr_27027 = [null,null,null,null,null,null,null,null,null];
(statearr_27027[(0)] = transmorphic$repl$load_for_macro_$_state_machine__22193__auto__);

(statearr_27027[(1)] = (1));

return statearr_27027;
});
var transmorphic$repl$load_for_macro_$_state_machine__22193__auto____1 = (function (state_27012){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_27012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e27028){if((e27028 instanceof Object)){
var ex__22196__auto__ = e27028;
var statearr_27029_27039 = state_27012;
(statearr_27029_27039[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27040 = state_27012;
state_27012 = G__27040;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$load_for_macro_$_state_machine__22193__auto__ = function(state_27012){
switch(arguments.length){
case 0:
return transmorphic$repl$load_for_macro_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$load_for_macro_$_state_machine__22193__auto____1.call(this,state_27012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$load_for_macro_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$load_for_macro_$_state_machine__22193__auto____0;
transmorphic$repl$load_for_macro_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$load_for_macro_$_state_machine__22193__auto____1;
return transmorphic$repl$load_for_macro_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_27030 = f__22305__auto__.call(null);
(statearr_27030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_27030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
transmorphic.repl.is_foreign_QMARK_ = (function transmorphic$repl$is_foreign_QMARK_(path){
return cljs.core.re_matches.call(null,/^cljsjs\/.*/,path);
});
transmorphic.repl.load = (function transmorphic$repl$load(p__27041,cb){
var map__27044 = p__27041;
var map__27044__$1 = ((((!((map__27044 == null)))?((((map__27044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27044):map__27044);
var full = map__27044__$1;
var name = cljs.core.get.call(null,map__27044__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__27044__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__27044__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var file = cljs.core.get.call(null,map__27044__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
cljs.core.prn.call(null,"LOADING ",path," macros? ",macros);

if(cljs.core.truth_(macros)){
return transmorphic.repl.load_for_macro.call(null,path,cb);
} else {
if(cljs.core.truth_(transmorphic.repl.is_foreign_QMARK_.call(null,path))){
return transmorphic.repl.load_foreign_lib.call(null,path,cb);
} else {
if(cljs.core.truth_(transmorphic.repl.skip_load_QMARK_.call(null,full))){
return transmorphic.repl.load_existing.call(null,cb,full);
} else {
if(cljs.core.truth_(file)){
return transmorphic.repl.do_load_file.call(null,file,cb);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,path))){
return transmorphic.repl.do_load_goog.call(null,name,cb);
} else {
return transmorphic.repl.do_load_other.call(null,name,macros,cb);

}
}
}
}
}
});
transmorphic.repl.load_cache = (function transmorphic$repl$load_cache(var_args){
var args27046 = [];
var len__17883__auto___27068 = arguments.length;
var i__17884__auto___27069 = (0);
while(true){
if((i__17884__auto___27069 < len__17883__auto___27068)){
args27046.push((arguments[i__17884__auto___27069]));

var G__27070 = (i__17884__auto___27069 + (1));
i__17884__auto___27069 = G__27070;
continue;
} else {
}
break;
}

var G__27048 = args27046.length;
switch (G__27048) {
case 2:
return transmorphic.repl.load_cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return transmorphic.repl.load_cache.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27046.length)].join('')));

}
});

transmorphic.repl.load_cache.cljs$core$IFn$_invoke$arity$2 = (function (cstate,s){
return transmorphic.repl.load_cache.call(null,cstate,s,cljs.core.PersistentArrayMap.EMPTY);
});

transmorphic.repl.load_cache.cljs$core$IFn$_invoke$arity$3 = (function (cstate,s,opts){
var ext = (function (){var or__16825__auto__ = new cljs.core.Keyword(null,"ext","ext",-996964541).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"cljs","cljs",1492417629);
}
})();
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__,ext){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__,ext){
return (function (state_27058){
var state_val_27059 = (state_27058[(1)]);
if((state_val_27059 === (1))){
var inst_27049 = cljs.js.ns__GT_relpath.call(null,s);
var inst_27050 = cljs.core.name.call(null,ext);
var inst_27051 = [cljs.core.str("cloxp-cljs-build/out/"),cljs.core.str(inst_27049),cljs.core.str("."),cljs.core.str(inst_27050),cljs.core.str(".cache.edn")].join('');
var inst_27052 = transmorphic.repl.get_file.call(null,inst_27051);
var state_27058__$1 = state_27058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27058__$1,(2),inst_27052);
} else {
if((state_val_27059 === (2))){
var inst_27054 = (state_27058[(2)]);
var inst_27055 = cljs.reader.read_string.call(null,inst_27054);
var inst_27056 = cljs.js.load_analysis_cache_BANG_.call(null,cstate,s,inst_27055);
var state_27058__$1 = (function (){var statearr_27060 = state_27058;
(statearr_27060[(7)] = inst_27056);

return statearr_27060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27058__$1,inst_27055);
} else {
return null;
}
}
});})(c__22304__auto__,ext))
;
return ((function (switch__22192__auto__,c__22304__auto__,ext){
return (function() {
var transmorphic$repl$state_machine__22193__auto__ = null;
var transmorphic$repl$state_machine__22193__auto____0 = (function (){
var statearr_27064 = [null,null,null,null,null,null,null,null];
(statearr_27064[(0)] = transmorphic$repl$state_machine__22193__auto__);

(statearr_27064[(1)] = (1));

return statearr_27064;
});
var transmorphic$repl$state_machine__22193__auto____1 = (function (state_27058){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_27058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e27065){if((e27065 instanceof Object)){
var ex__22196__auto__ = e27065;
var statearr_27066_27072 = state_27058;
(statearr_27066_27072[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27073 = state_27058;
state_27058 = G__27073;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$state_machine__22193__auto__ = function(state_27058){
switch(arguments.length){
case 0:
return transmorphic$repl$state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$state_machine__22193__auto____1.call(this,state_27058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$state_machine__22193__auto____0;
transmorphic$repl$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$state_machine__22193__auto____1;
return transmorphic$repl$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__,ext))
})();
var state__22306__auto__ = (function (){var statearr_27067 = f__22305__auto__.call(null);
(statearr_27067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_27067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__,ext))
);

return c__22304__auto__;
});

transmorphic.repl.load_cache.cljs$lang$maxFixedArity = 3;
transmorphic.repl.line_column_access = (function transmorphic$repl$line_column_access(string){
var lines = clojure.string.split_lines.call(null,string);
return ((function (lines){
return (function transmorphic$repl$line_column_access_$_line_column_access_for_string(p__27084,p__27085){
var map__27090 = p__27084;
var map__27090__$1 = ((((!((map__27090 == null)))?((((map__27090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27090):map__27090);
var s = map__27090__$1;
var start_line = cljs.core.get.call(null,map__27090__$1,new cljs.core.Keyword(null,"line","line",212345235));
var start_column = cljs.core.get.call(null,map__27090__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var map__27091 = p__27085;
var map__27091__$1 = ((((!((map__27091 == null)))?((((map__27091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27091):map__27091);
var e = map__27091__$1;
var end_line = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_column = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((start_line > end_line)) || ((cljs.core._EQ_.call(null,start_line,end_line)) && ((start_column > end_column)))){
return transmorphic$repl$line_column_access_$_line_column_access_for_string.call(null,e,s);
} else {
var start = cljs.core.nth.call(null,lines,(start_line - (1)));
var start__$1 = start.substring((start_column - (1)));
var end = ((cljs.core._EQ_.call(null,start_line,end_line))?start__$1:cljs.core.nth.call(null,lines,(function (){var x__17163__auto__ = (cljs.core.count.call(null,lines) - (1));
var y__17164__auto__ = (end_line - (1));
return ((x__17163__auto__ < y__17164__auto__) ? x__17163__auto__ : y__17164__auto__);
})()));
var end__$1 = end.substring((0),((cljs.core._EQ_.call(null,start_line,end_line))?((end_column - (1)) - (start_column - (1))):(end_column - (1))));
var inbetween = cljs.core.take.call(null,((end_line - start_line) - (1)),cljs.core.drop.call(null,start_line,lines));
return clojure.string.join.call(null,"\n",((cljs.core._EQ_.call(null,start_line,end_line))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end__$1], null):cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1], null),inbetween,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end__$1], null))));
}
});
;})(lines))
});
/**
 * Currently using direct instantiation of reader b/c there seems to be a bug
 *   in tools reader regarding line number access, see comment
 */
transmorphic.repl.make_reader = (function transmorphic$repl$make_reader(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27098 = arguments.length;
var i__17884__auto___27099 = (0);
while(true){
if((i__17884__auto___27099 < len__17883__auto___27098)){
args__17890__auto__.push((arguments[i__17884__auto___27099]));

var G__27100 = (i__17884__auto___27099 + (1));
i__17884__auto___27099 = G__27100;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.repl.make_reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.repl.make_reader.cljs$core$IFn$_invoke$arity$variadic = (function (source,p__27096){
var vec__27097 = p__27096;
var file_name = cljs.core.nth.call(null,vec__27097,(0),null);
return cljs.tools.reader.reader_types.source_logging_push_back_reader.call(null,source,(1));
});

transmorphic.repl.make_reader.cljs$lang$maxFixedArity = (1);

transmorphic.repl.make_reader.cljs$lang$applyTo = (function (seq27094){
var G__27095 = cljs.core.first.call(null,seq27094);
var seq27094__$1 = cljs.core.next.call(null,seq27094);
return transmorphic.repl.make_reader.cljs$core$IFn$_invoke$arity$variadic(G__27095,seq27094__$1);
});
transmorphic.repl.name_of_def = (function transmorphic$repl$name_of_def(form){
return cljs.core.first.call(null,cljs.core.drop.call(null,(1),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,form)));
});
transmorphic.repl.defmethod_QMARK_ = (function transmorphic$repl$defmethod_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),cljs.core.first.call(null,form)));
});
transmorphic.repl.defmulti_QMARK_ = (function transmorphic$repl$defmulti_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),cljs.core.first.call(null,form)));
});
transmorphic.repl.defmorph_QMARK_ = (function transmorphic$repl$defmorph_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"defmorph","defmorph",169157021,null),cljs.core.first.call(null,form)));
});
transmorphic.repl.purge_string_BANG_ = (function transmorphic$repl$purge_string_BANG_(rdr){
var buf = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rdr.frames));
var str = buf.toString();
buf.clear();

return str;
});
/**
 * reads a single next obj from *current-code* :source
 */
transmorphic.repl.read_with_source_logger = (function transmorphic$repl$read_with_source_logger(src){
var rdr = transmorphic.repl.make_reader.call(null,src);
return cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null),rdr);
});
/**
 * Reads sexps from source and returns them as a {:form :source :line
 *   :column} map. Note: this is more that the typical reader gives us.
 */
transmorphic.repl.read_objs = (function transmorphic$repl$read_objs(var_args){
var args__17890__auto__ = [];
var len__17883__auto___27109 = arguments.length;
var i__17884__auto___27110 = (0);
while(true){
if((i__17884__auto___27110 < len__17883__auto___27109)){
args__17890__auto__.push((arguments[i__17884__auto___27110]));

var G__27111 = (i__17884__auto___27110 + (1));
i__17884__auto___27110 = G__27111;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.repl.read_objs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.repl.read_objs.cljs$core$IFn$_invoke$arity$variadic = (function (source,p__27104){
var vec__27105 = p__27104;
var map__27106 = cljs.core.nth.call(null,vec__27105,(0),null);
var map__27106__$1 = ((((!((map__27106 == null)))?((((map__27106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27106):map__27106);
var opts = map__27106__$1;
var features = cljs.core.get.call(null,map__27106__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var line_offset = cljs.core.get.call(null,map__27106__$1,new cljs.core.Keyword(null,"line-offset","line-offset",-2135357833));
var column_offset = cljs.core.get.call(null,map__27106__$1,new cljs.core.Keyword(null,"column-offset","column-offset",175737153));
var source__$1 = ((cljs.core.not.call(null,source.endsWith("\n")))?[cljs.core.str(source),cljs.core.str("\n")].join(''):source);
var get_src_fn = transmorphic.repl.line_column_access.call(null,source__$1);
var rdr = transmorphic.repl.make_reader.call(null,source__$1);
var line_offset__$1 = (function (){var or__16825__auto__ = line_offset;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (0);
}
})();
var column_offset__$1 = (function (){var or__16825__auto__ = column_offset;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (0);
}
})();
var reader_opts = (cljs.core.truth_(features)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),null,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.set.call(null,features)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eof","eof",-489063237),null,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"preserve","preserve",1276846509)], null));
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var start_line = cljs.tools.reader.reader_types.get_line_number.call(null,rdr);
var start_column = cljs.tools.reader.reader_types.get_column_number.call(null,rdr);
var temp__4423__auto__ = cljs.tools.reader.read.call(null,reader_opts,rdr);
if(cljs.core.truth_(temp__4423__auto__)){
var o = temp__4423__auto__;
var raw_str = transmorphic.repl.purge_string_BANG_.call(null,rdr);
var lines = clojure.string.split_lines.call(null,raw_str);
var ws_lines = cljs.core.take_while.call(null,((function (result,raw_str,lines,o,temp__4423__auto__,start_line,start_column,source__$1,get_src_fn,rdr,line_offset__$1,column_offset__$1,reader_opts,vec__27105,map__27106,map__27106__$1,opts,features,line_offset,column_offset){
return (function (p1__27101_SHARP_){
return cljs.core.re_find.call(null,/^\s*(;.*)?$/,p1__27101_SHARP_);
});})(result,raw_str,lines,o,temp__4423__auto__,start_line,start_column,source__$1,get_src_fn,rdr,line_offset__$1,column_offset__$1,reader_opts,vec__27105,map__27106,map__27106__$1,opts,features,line_offset,column_offset))
,lines);
var src_lines = cljs.core.drop.call(null,cljs.core.count.call(null,ws_lines),lines);
var vec__27108 = cljs.core.re_matches.call(null,/^(\s*)(.*)/,cljs.core.first.call(null,src_lines));
var _ = cljs.core.nth.call(null,vec__27108,(0),null);
var leading_ws = cljs.core.nth.call(null,vec__27108,(1),null);
var first_line_content = cljs.core.nth.call(null,vec__27108,(2),null);
var src_lines__$1 = cljs.core.assoc.call(null,cljs.core.vec.call(null,src_lines),(0),first_line_content);
var src = clojure.string.join.call(null,"\n",src_lines__$1);
var line = (start_line + cljs.core.count.call(null,ws_lines));
var column = ((((cljs.core.count.call(null,ws_lines) > (0)))?(1):start_column) + cljs.core.count.call(null,leading_ws));
var meta = cljs.core.meta.call(null,o);
var defmorph_QMARK_ = transmorphic.repl.defmorph_QMARK_.call(null,o);
var name = (cljs.core.truth_(defmorph_QMARK_)?transmorphic.repl.name_of_def.call(null,o):null);
if(cljs.core._EQ_.call(null,"\n",cljs.tools.reader.reader_types.peek_char.call(null,rdr))){
cljs.tools.reader.reader_types.read_char.call(null,rdr);

transmorphic.repl.purge_string_BANG_.call(null,rdr);
} else {
}

var start = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
var start_for_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(line + line_offset__$1),new cljs.core.Keyword(null,"column","column",2078222095),((cljs.core._EQ_.call(null,(1),start_line))?(column + column_offset__$1):column)], null);
var end_line = cljs.tools.reader.reader_types.get_line_number.call(null,rdr);
var end_column = cljs.tools.reader.reader_types.get_column_number.call(null,rdr);
var end = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),end_line,new cljs.core.Keyword(null,"column","column",2078222095),end_column], null);
var end_for_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-line","end-line",1837326455),(end_line + line_offset__$1),new cljs.core.Keyword(null,"end-column","end-column",1425389514),((cljs.core._EQ_.call(null,(1),start_line))?(end_column + column_offset__$1):end_column)], null);
var source__$2 = get_src_fn.call(null,start,end);
var G__27112 = cljs.core.conj.call(null,result,cljs.core.merge.call(null,start_for_meta,end_for_meta,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),o,new cljs.core.Keyword(null,"source","source",-433931539),source__$2], null),(cljs.core.truth_(defmorph_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.with_meta.call(null,o,cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"source","source",-433931539),src)),new cljs.core.Keyword(null,"name","name",1843675177),name], null):null)));
result = G__27112;
continue;
} else {
return result;
}
break;
}
});

transmorphic.repl.read_objs.cljs$lang$maxFixedArity = (1);

transmorphic.repl.read_objs.cljs$lang$applyTo = (function (seq27102){
var G__27103 = cljs.core.first.call(null,seq27102);
var seq27102__$1 = cljs.core.next.call(null,seq27102);
return transmorphic.repl.read_objs.cljs$core$IFn$_invoke$arity$variadic(G__27103,seq27102__$1);
});
transmorphic.repl.get_morph_essay_info = (function transmorphic$repl$get_morph_essay_info(name,cb){
return transmorphic.repl.load_and_callback_BANG_.call(null,name,".cljs",(function (p1__27113_SHARP_){
return cb.call(null,transmorphic.repl.read_objs.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p1__27113_SHARP_)));
}));
});
transmorphic.repl.st = cljs.js.empty_state.call(null);
transmorphic.repl.morph_eval = (function transmorphic$repl$morph_eval(m){
return cljs.js.eval.call(null,transmorphic.repl.st,m,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-morphic.playground","cljs-morphic.playground",-1437220776,null),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"verbose","verbose",1694226060),true], null),(function (c){
return c;
}));
});
transmorphic.repl.morph_eval_str = (function transmorphic$repl$morph_eval_str(var_args){
var args27114 = [];
var len__17883__auto___27117 = arguments.length;
var i__17884__auto___27118 = (0);
while(true){
if((i__17884__auto___27118 < len__17883__auto___27117)){
args27114.push((arguments[i__17884__auto___27118]));

var G__27119 = (i__17884__auto___27118 + (1));
i__17884__auto___27118 = G__27119;
continue;
} else {
}
break;
}

var G__27116 = args27114.length;
switch (G__27116) {
case 1:
return transmorphic.repl.morph_eval_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.repl.morph_eval_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27114.length)].join('')));

}
});

transmorphic.repl.morph_eval_str.cljs$core$IFn$_invoke$arity$1 = (function (code){
return transmorphic.repl.morph_eval_str.call(null,code,new cljs.core.Symbol(null,"cljs-morphic.playground","cljs-morphic.playground",-1437220776,null));
});

transmorphic.repl.morph_eval_str.cljs$core$IFn$_invoke$arity$2 = (function (code,ns){
cljs.core.reset_BANG_.call(null,transmorphic.repl.current_namespace,ns);

return cljs.js.eval_str.call(null,transmorphic.repl.st,code,ns,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"load","load",-1318641184),transmorphic.repl.load], null),(function (c){
var temp__4423__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__4423__auto__)){
var err = temp__4423__auto__;
return c;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(c);
}
}));
});

transmorphic.repl.morph_eval_str.cljs$lang$maxFixedArity = 2;
transmorphic.repl.morph_defn = (function transmorphic$repl$morph_defn(form,ns){
cljs.core.reset_BANG_.call(null,transmorphic.repl.current_namespace,ns);

return cljs.js.eval.call(null,transmorphic.repl.st,form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"verbose","verbose",1694226060),true,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),(function (c){
return c;
}));
});
transmorphic.repl.init_compiler = (function transmorphic$repl$init_compiler(cb){
goog.isProvided_ = (function (name){
return false;
});

var finished = cljs.core.atom.call(null,false);
var c__22304__auto___27231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___27231,finished){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___27231,finished){
return (function (state_27188){
var state_val_27189 = (state_27188[(1)]);
if((state_val_27189 === (1))){
var inst_27176 = transmorphic.repl.closure_index.call(null);
var state_27188__$1 = state_27188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27188__$1,(2),inst_27176);
} else {
if((state_val_27189 === (2))){
var inst_27178 = (state_27188[(2)]);
var inst_27179 = cljs.core.reset_BANG_.call(null,transmorphic.repl._STAR_closure_index_mem_STAR_,inst_27178);
var inst_27180 = cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),cljs.core.list(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cljs-morphic.core","cljs-morphic.core",1989384764,null)], null)));
var inst_27181 = [new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"context","context",-830191113)];
var inst_27182 = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
var inst_27183 = [cljs.js.js_eval,transmorphic.repl.load,inst_27182,new cljs.core.Keyword(null,"expr","expr",745722291)];
var inst_27184 = cljs.core.PersistentHashMap.fromArrays(inst_27181,inst_27183);
var inst_27185 = (function (){return ((function (inst_27178,inst_27179,inst_27180,inst_27181,inst_27182,inst_27183,inst_27184,state_val_27189,c__22304__auto___27231,finished){
return (function (c){
var c__22304__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto____$1,inst_27178,inst_27179,inst_27180,inst_27181,inst_27182,inst_27183,inst_27184,state_val_27189,c__22304__auto___27231,finished){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto____$1,inst_27178,inst_27179,inst_27180,inst_27181,inst_27182,inst_27183,inst_27184,state_val_27189,c__22304__auto___27231,finished){
return (function (state_27211){
var state_val_27212 = (state_27211[(1)]);
if((state_val_27212 === (1))){
var inst_27190 = new cljs.core.Symbol(null,"transmorphic.playground","transmorphic.playground",702883935,null);
var inst_27191 = transmorphic.repl.load_cache.call(null,transmorphic.repl.st,inst_27190);
var state_27211__$1 = state_27211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27211__$1,(2),inst_27191);
} else {
if((state_val_27212 === (2))){
var inst_27193 = (state_27211[(2)]);
var inst_27194 = new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null);
var inst_27195 = [new cljs.core.Keyword(null,"ext","ext",-996964541)];
var inst_27196 = [new cljs.core.Keyword(null,"cljc","cljc",-1728400583)];
var inst_27197 = cljs.core.PersistentHashMap.fromArrays(inst_27195,inst_27196);
var inst_27198 = transmorphic.repl.load_cache.call(null,transmorphic.repl.st,inst_27194,inst_27197);
var state_27211__$1 = (function (){var statearr_27213 = state_27211;
(statearr_27213[(7)] = inst_27193);

return statearr_27213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27211__$1,(3),inst_27198);
} else {
if((state_val_27212 === (3))){
var inst_27200 = (state_27211[(2)]);
var inst_27201 = new cljs.core.Symbol(null,"transmorphic.core","transmorphic.core",-265989641,null);
var inst_27202 = [new cljs.core.Keyword(null,"ext","ext",-996964541)];
var inst_27203 = [new cljs.core.Keyword(null,"cljc","cljc",-1728400583)];
var inst_27204 = cljs.core.PersistentHashMap.fromArrays(inst_27202,inst_27203);
var inst_27205 = transmorphic.repl.load_cache.call(null,transmorphic.repl.st,inst_27201,inst_27204);
var state_27211__$1 = (function (){var statearr_27214 = state_27211;
(statearr_27214[(8)] = inst_27200);

return statearr_27214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27211__$1,(4),inst_27205);
} else {
if((state_val_27212 === (4))){
var inst_27207 = (state_27211[(2)]);
var inst_27208 = cljs.core.reset_BANG_.call(null,finished,true);
var inst_27209 = cb.call(null,c);
var state_27211__$1 = (function (){var statearr_27215 = state_27211;
(statearr_27215[(9)] = inst_27207);

(statearr_27215[(10)] = inst_27208);

return statearr_27215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27211__$1,inst_27209);
} else {
return null;
}
}
}
}
});})(c__22304__auto____$1,inst_27178,inst_27179,inst_27180,inst_27181,inst_27182,inst_27183,inst_27184,state_val_27189,c__22304__auto___27231,finished))
;
return ((function (switch__22192__auto__,c__22304__auto____$1,inst_27178,inst_27179,inst_27180,inst_27181,inst_27182,inst_27183,inst_27184,state_val_27189,c__22304__auto___27231,finished){
return (function() {
var transmorphic$repl$init_compiler_$_state_machine__22193__auto__ = null;
var transmorphic$repl$init_compiler_$_state_machine__22193__auto____0 = (function (){
var statearr_27219 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27219[(0)] = transmorphic$repl$init_compiler_$_state_machine__22193__auto__);

(statearr_27219[(1)] = (1));

return statearr_27219;
});
var transmorphic$repl$init_compiler_$_state_machine__22193__auto____1 = (function (state_27211){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_27211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e27220){if((e27220 instanceof Object)){
var ex__22196__auto__ = e27220;
var statearr_27221_27232 = state_27211;
(statearr_27221_27232[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27233 = state_27211;
state_27211 = G__27233;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$init_compiler_$_state_machine__22193__auto__ = function(state_27211){
switch(arguments.length){
case 0:
return transmorphic$repl$init_compiler_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$init_compiler_$_state_machine__22193__auto____1.call(this,state_27211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$init_compiler_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$init_compiler_$_state_machine__22193__auto____0;
transmorphic$repl$init_compiler_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$init_compiler_$_state_machine__22193__auto____1;
return transmorphic$repl$init_compiler_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto____$1,inst_27178,inst_27179,inst_27180,inst_27181,inst_27182,inst_27183,inst_27184,state_val_27189,c__22304__auto___27231,finished))
})();
var state__22306__auto__ = (function (){var statearr_27222 = f__22305__auto__.call(null);
(statearr_27222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto____$1);

return statearr_27222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto____$1,inst_27178,inst_27179,inst_27180,inst_27181,inst_27182,inst_27183,inst_27184,state_val_27189,c__22304__auto___27231,finished))
);

return c__22304__auto____$1;
});
;})(inst_27178,inst_27179,inst_27180,inst_27181,inst_27182,inst_27183,inst_27184,state_val_27189,c__22304__auto___27231,finished))
})();
var inst_27186 = cljs.js.eval.call(null,transmorphic.repl.st,inst_27180,inst_27184,inst_27185);
var state_27188__$1 = (function (){var statearr_27223 = state_27188;
(statearr_27223[(7)] = inst_27179);

return statearr_27223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27188__$1,inst_27186);
} else {
return null;
}
}
});})(c__22304__auto___27231,finished))
;
return ((function (switch__22192__auto__,c__22304__auto___27231,finished){
return (function() {
var transmorphic$repl$init_compiler_$_state_machine__22193__auto__ = null;
var transmorphic$repl$init_compiler_$_state_machine__22193__auto____0 = (function (){
var statearr_27227 = [null,null,null,null,null,null,null,null];
(statearr_27227[(0)] = transmorphic$repl$init_compiler_$_state_machine__22193__auto__);

(statearr_27227[(1)] = (1));

return statearr_27227;
});
var transmorphic$repl$init_compiler_$_state_machine__22193__auto____1 = (function (state_27188){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_27188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e27228){if((e27228 instanceof Object)){
var ex__22196__auto__ = e27228;
var statearr_27229_27234 = state_27188;
(statearr_27229_27234[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27235 = state_27188;
state_27188 = G__27235;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
transmorphic$repl$init_compiler_$_state_machine__22193__auto__ = function(state_27188){
switch(arguments.length){
case 0:
return transmorphic$repl$init_compiler_$_state_machine__22193__auto____0.call(this);
case 1:
return transmorphic$repl$init_compiler_$_state_machine__22193__auto____1.call(this,state_27188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transmorphic$repl$init_compiler_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = transmorphic$repl$init_compiler_$_state_machine__22193__auto____0;
transmorphic$repl$init_compiler_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = transmorphic$repl$init_compiler_$_state_machine__22193__auto____1;
return transmorphic$repl$init_compiler_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___27231,finished))
})();
var state__22306__auto__ = (function (){var statearr_27230 = f__22305__auto__.call(null);
(statearr_27230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___27231);

return statearr_27230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___27231,finished))
);


return finished;
});

//# sourceMappingURL=repl.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.tools.ace');
goog.require('cljs.core');
goog.require('transmorphic.tools.window');
goog.require('transmorphic.utils');
goog.require('transmorphic.morph');
goog.require('transmorphic.core');
goog.require('transmorphic.symbolic');
goog.require('transmorphic.repl');
goog.require('om.dom');
goog.require('cljs.reader');
transmorphic.tools.ace.set_value_BANG_ = (function transmorphic$tools$ace$set_value_BANG_(p__32662,ace_instance,value){
var map__32665 = p__32662;
var map__32665__$1 = ((((!((map__32665 == null)))?((((map__32665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32665):map__32665);
var owner = map__32665__$1;
var local_state = cljs.core.get.call(null,map__32665__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var session = ace_instance.session;
var pos = ace_instance.selection.getCursor();
var scroll = ace_instance.session.getScrollTop();
var storedValue = session.doc.getValue(value);
if(cljs.core.not_EQ_.call(null,storedValue,value)){
session.doc.setValue(value,(0));

ace_instance.selection.moveToPosition(pos);

ace_instance.session.setScrollTop(scroll);

return ace_instance.resize(true);
} else {
return null;
}
});
transmorphic.tools.ace.save_handler = (function transmorphic$tools$ace$save_handler(p__32667,ace_state){
var map__32672 = p__32667;
var map__32672__$1 = ((((!((map__32672 == null)))?((((map__32672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32672):map__32672);
var owner = map__32672__$1;
var local_state = cljs.core.get.call(null,map__32672__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__32674 = cljs.core.deref.call(null,ace_state);
var map__32674__$1 = ((((!((map__32674 == null)))?((((map__32674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32674):map__32674);
var on_save = cljs.core.get.call(null,map__32674__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var ace_instance = cljs.core.get.call(null,map__32674__$1,new cljs.core.Keyword(null,"ace-instance","ace-instance",-1494404368));
var v = ace_instance.getValue();
cljs.core.swap_BANG_.call(null,ace_state,cljs.core.assoc,new cljs.core.Keyword(null,"edited?","edited?",1327972333),false,new cljs.core.Keyword(null,"focused?","focused?",-1922723333),false,new cljs.core.Keyword(null,"value","value",305978217),v);

on_save.call(null,v);

return transmorphic.core.rerender_BANG_.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dirty-nodes","dirty-nodes",-2108554834),null], null));
});
transmorphic.tools.ace.token_at = (function transmorphic$tools$ace$token_at(ace_instance,pos){
return ace_instance.session.getTokenAt(pos.row,pos.column);
});
transmorphic.tools.ace.highlight_interval_BANG_ = (function transmorphic$tools$ace$highlight_interval_BANG_(ace_instance,interval){

return ace_instance.getSession().addMarker(interval,"ace-code-highlight","text");
});
transmorphic.tools.ace.clear_marker_BANG_ = (function transmorphic$tools$ace$clear_marker_BANG_(ace_instance,marker_ref){
return ace_instance.getSession().removeMarker(marker_ref);
});
transmorphic.tools.ace.get_token_bounds = (function transmorphic$tools$ace$get_token_bounds(ace_instance,token){
var map__32678 = cljs.core.js__GT_clj.call(null,ace_instance.renderer.textToScreenCoordinates(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(token)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__32678__$1 = ((((!((map__32678 == null)))?((((map__32678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32678):map__32678);
var page_x = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"pageX","pageX",-1348071513));
var page_y = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"pageY","pageY",1363577629));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),page_x,new cljs.core.Keyword(null,"y","y",-1757859776),page_y], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(12),new cljs.core.Keyword(null,"x","x",2099068185),((7) * cljs.core.count.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token)))], null)], null);
});
transmorphic.tools.ace.set_token_selection_BANG_ = (function transmorphic$tools$ace$set_token_selection_BANG_(ace_instance,token){
var sel = ace_instance.getSelection();
var r = sel.getRange();
r.setStart(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(token));

r.setEnd(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(token),(cljs.core.count.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token)) + new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(token)));

return sel.setSelectionRange(r);
});
transmorphic.tools.ace.set_token_value_BANG_ = (function transmorphic$tools$ace$set_token_value_BANG_(ace_instance,token,value){
var session = ace_instance.getSession();
var r = ace_instance.getSelectionRange();
session.remove(r);

return session.insert(r.start,[cljs.core.str(value)].join(''));
});
transmorphic.tools.ace.get_numeric_token_at = (function transmorphic$tools$ace$get_numeric_token_at(ace_instance,global_pos){
var ace_pos1 = ace_instance.renderer.pixelToScreenCoordinates(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(global_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(global_pos));
var ace_pos2 = {"column": (ace_pos1.column - (1)), "row": ace_pos1.row};
var ace_pos3 = {"column": (ace_pos1.column + (1)), "row": ace_pos1.row};
var tokens = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,(function (){var G__32684 = ace_instance;
var G__32684__$1 = (((G__32684 == null))?null:transmorphic.tools.ace.token_at.call(null,G__32684,ace_pos1));
var G__32684__$2 = (((G__32684__$1 == null))?null:cljs.core.js__GT_clj.call(null,G__32684__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
return G__32684__$2;
})(),cljs.core.js__GT_clj.call(null,ace_pos1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)),cljs.core.merge.call(null,(function (){var G__32685 = ace_instance;
var G__32685__$1 = (((G__32685 == null))?null:transmorphic.tools.ace.token_at.call(null,G__32685,ace_pos2));
var G__32685__$2 = (((G__32685__$1 == null))?null:cljs.core.js__GT_clj.call(null,G__32685__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
return G__32685__$2;
})(),cljs.core.js__GT_clj.call(null,ace_pos2,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)),cljs.core.merge.call(null,(function (){var G__32686 = ace_instance;
var G__32686__$1 = (((G__32686 == null))?null:transmorphic.tools.ace.token_at.call(null,G__32686,ace_pos3));
var G__32686__$2 = (((G__32686__$1 == null))?null:cljs.core.js__GT_clj.call(null,G__32686__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
return G__32686__$2;
})(),cljs.core.js__GT_clj.call(null,ace_pos3,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))], null);
return cljs.core.some.call(null,((function (ace_pos1,ace_pos2,ace_pos3,tokens){
return (function (p1__32680_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,p1__32680_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348)),"constant.numeric")){
return p1__32680_SHARP_;
} else {
return null;
}
});})(ace_pos1,ace_pos2,ace_pos3,tokens))
,tokens);
});
transmorphic.tools.ace.get_morph_node_at;
transmorphic.tools.ace.restore_ace_BANG_ = (function transmorphic$tools$ace$restore_ace_BANG_(model){
cljs.core.prn.call(null,"Restoring!");

var ace_instance = ace.edit(model.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
return ace_instance.setValue(cljs.core.deref.call(null,model.call(null,new cljs.core.Keyword(null,"ace-state","ace-state",1689087944))).call(null,new cljs.core.Keyword(null,"value","value",305978217)));
});
transmorphic.tools.ace.set_save_handler_BANG_ = (function transmorphic$tools$ace$set_save_handler_BANG_(ace_instance,on_save){
return ace_instance.commands.addCommand(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"save",new cljs.core.Keyword(null,"bindKey","bindKey",1245980773),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"win","win",-1624642689),"Ctrl-S",new cljs.core.Keyword(null,"mac","mac",-1879391650),"Ctrl-S",new cljs.core.Keyword(null,"sender","sender",1557303285),"editor|cli"], null),new cljs.core.Keyword(null,"exec","exec",1625568743),(function (){
return on_save.call(null,ace_instance.getValue());
})], null)));
});
transmorphic.tools.ace.set_change_handler_BANG_ = (function transmorphic$tools$ace$set_change_handler_BANG_(ace_instance,on_change){
return ace_instance.on("change",on_change);
});
transmorphic.tools.ace.setup_ace_BANG_ = (function transmorphic$tools$ace$setup_ace_BANG_(self,model){
var ace_instance = ace.edit(model.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
var clojure_mode = ace.require("ace/mode/clojure").Mode;
var model__$1 = cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"ace-state","ace-state",1689087944),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),model.call(null,new cljs.core.Keyword(null,"value","value",305978217)),new cljs.core.Keyword(null,"ace-instance","ace-instance",-1494404368),ace_instance], null)));
ace_instance.getSession().setMode((new clojure_mode()));

ace_instance.setTheme((function (){var or__16825__auto__ = model__$1.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return "ace/theme/github";
}
})());

ace_instance.commands.addCommand(ace.require("ace/commands/occur_commands").occurStartCommand);

ace_instance.commands.addCommands(ace.ext.lang.astCommands);

ace_instance.renderer.setShowGutter(((cljs.core.contains_QMARK_.call(null,model__$1,new cljs.core.Keyword(null,"line-numbers?","line-numbers?",1919907771)))?model__$1.call(null,new cljs.core.Keyword(null,"line-numbers?","line-numbers?",1919907771)):true));

ace_instance.commands.addCommand(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"save",new cljs.core.Keyword(null,"bindKey","bindKey",1245980773),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"win","win",-1624642689),"Ctrl-S",new cljs.core.Keyword(null,"mac","mac",-1879391650),"Ctrl-S",new cljs.core.Keyword(null,"sender","sender",1557303285),"editor|cli"], null),new cljs.core.Keyword(null,"exec","exec",1625568743),((function (ace_instance,clojure_mode,model__$1){
return (function (){
return transmorphic.tools.ace.save_handler.call(null,self,ace_instance);
});})(ace_instance,clojure_mode,model__$1))
], null)));

if(cljs.core.truth_(model__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217)))){
transmorphic.tools.ace.set_value_BANG_.call(null,self,ace_instance,model__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217)));
} else {
}

ace_instance.gotoLine(model__$1.call(null,new cljs.core.Keyword(null,"line","line",212345235)),(1),true);

return transmorphic.core.rerender_BANG_.call(null,self,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edited-value","edited-value",607144183),model__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217))], null));
});

//# sourceMappingURL=ace.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.event');
goog.require('cljs.core');
goog.require('transmorphic.utils');
transmorphic.event.arrow_QMARK_ = (function transmorphic$event$arrow_QMARK_(e){
return null;
});
transmorphic.event.meta_click_QMARK_ = (function transmorphic$event$meta_click_QMARK_(e){
return e.altKey;
});
transmorphic.event.shift_QMARK_ = (function transmorphic$event$shift_QMARK_(e){
return e.shiftKey;
});
transmorphic.event.get_cursor_pos = (function transmorphic$event$get_cursor_pos(e){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.pageX,new cljs.core.Keyword(null,"y","y",-1757859776),e.pageY], null);
});
transmorphic.event.get_client_pos = (function transmorphic$event$get_client_pos(e){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null);
});
transmorphic.event.meta_focus = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null], null));
transmorphic.event.hand_focus = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null));
/**
 * current time as a map
 */
transmorphic.event.get_current_time = (function transmorphic$event$get_current_time(){
var d = (new Date());
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hours","hours",58380855),d.getHours(),new cljs.core.Keyword(null,"minutes","minutes",1319166394),d.getMinutes(),new cljs.core.Keyword(null,"seconds","seconds",-445266194),d.getSeconds()], null);
});
transmorphic.event.step_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
transmorphic.event.current_time = cljs.core.atom.call(null,transmorphic.event.get_current_time.call(null));
transmorphic.event.stepping_QMARK_ = cljs.core.atom.call(null,true);
transmorphic.event.update_time = (function transmorphic$event$update_time(){
cljs.core.reset_BANG_.call(null,transmorphic.event.current_time,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),transmorphic.event.get_current_time.call(null),new cljs.core.Keyword(null,"global?","global?",-2022837689),true], null));

if(cljs.core.truth_(cljs.core.deref.call(null,transmorphic.event.stepping_QMARK_))){
var seq__27282 = cljs.core.seq.call(null,cljs.core.deref.call(null,transmorphic.event.step_cbs));
var chunk__27283 = null;
var count__27284 = (0);
var i__27285 = (0);
while(true){
if((i__27285 < count__27284)){
var vec__27286 = cljs.core._nth.call(null,chunk__27283,i__27285);
var ident = cljs.core.nth.call(null,vec__27286,(0),null);
var cb = cljs.core.nth.call(null,vec__27286,(1),null);
try{cb.call(null,ident);
}catch (e27287){if((e27287 instanceof Error)){
var e_27290 = e27287;
} else {
throw e27287;

}
}
var G__27291 = seq__27282;
var G__27292 = chunk__27283;
var G__27293 = count__27284;
var G__27294 = (i__27285 + (1));
seq__27282 = G__27291;
chunk__27283 = G__27292;
count__27284 = G__27293;
i__27285 = G__27294;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27282);
if(temp__4425__auto__){
var seq__27282__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27282__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__27282__$1);
var G__27295 = cljs.core.chunk_rest.call(null,seq__27282__$1);
var G__27296 = c__17628__auto__;
var G__27297 = cljs.core.count.call(null,c__17628__auto__);
var G__27298 = (0);
seq__27282 = G__27295;
chunk__27283 = G__27296;
count__27284 = G__27297;
i__27285 = G__27298;
continue;
} else {
var vec__27288 = cljs.core.first.call(null,seq__27282__$1);
var ident = cljs.core.nth.call(null,vec__27288,(0),null);
var cb = cljs.core.nth.call(null,vec__27288,(1),null);
try{cb.call(null,ident);
}catch (e27289){if((e27289 instanceof Error)){
var e_27299 = e27289;
} else {
throw e27289;

}
}
var G__27300 = cljs.core.next.call(null,seq__27282__$1);
var G__27301 = null;
var G__27302 = (0);
var G__27303 = (0);
seq__27282 = G__27300;
chunk__27283 = G__27301;
count__27284 = G__27302;
i__27285 = G__27303;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
setInterval(transmorphic.event.update_time,(100));
transmorphic.event.wants_hand_focus_QMARK_ = (function transmorphic$event$wants_hand_focus_QMARK_(props){

return (cljs.core.contains_QMARK_.call(null,props,new cljs.core.Keyword(null,"grabbable?","grabbable?",-309545200))) || (cljs.core.contains_QMARK_.call(null,props,new cljs.core.Keyword(null,"draggable?","draggable?",-236042740)));
});
transmorphic.event.drop_hand_focus_BANG_ = (function transmorphic$event$drop_hand_focus_BANG_(){
return cljs.core.reset_BANG_.call(null,transmorphic.event.hand_focus,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null));
});
transmorphic.event.drop_meta_focus_BANG_ = (function transmorphic$event$drop_meta_focus_BANG_(){
return cljs.core.reset_BANG_.call(null,transmorphic.event.meta_focus,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null], null));
});
transmorphic.event.clean_handlers_BANG_ = (function transmorphic$event$clean_handlers_BANG_(){
return cljs.core.reset_BANG_.call(null,transmorphic.event.step_cbs,cljs.core.PersistentArrayMap.EMPTY);
});
transmorphic.event.extract_event_handlers = (function transmorphic$event$extract_event_handlers(ident,props,refresh){
var temp__4425__auto___27304 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4425__auto___27304)){
var stepper_27305 = temp__4425__auto___27304;
cljs.core.swap_BANG_.call(null,transmorphic.event.step_cbs,cljs.core.assoc,ident,stepper_27305);
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onMouseMove","onMouseMove",2083193327),(function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,ident,new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,transmorphic.event.hand_focus)))){
cljs.core.swap_BANG_.call(null,transmorphic.event.hand_focus,cljs.core.assoc,new cljs.core.Keyword(null,"curr-pos","curr-pos",943311469),transmorphic.event.get_cursor_pos.call(null,e));
} else {
}

var temp__4425__auto__ = props.call(null,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874));
if(cljs.core.truth_(temp__4425__auto__)){
var cb_BANG_ = temp__4425__auto__;
cb_BANG_.call(null,e);

return refresh.call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),(function (e){
e.preventDefault();

transmorphic.event.drop_hand_focus_BANG_.call(null);

var temp__4425__auto__ = props.call(null,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320));
if(cljs.core.truth_(temp__4425__auto__)){
var cb_BANG_ = temp__4425__auto__;
cb_BANG_.call(null,e);

return refresh.call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),(function (e){
e.preventDefault();

if(cljs.core.truth_((function (){var and__16813__auto__ = transmorphic.event.meta_click_QMARK_.call(null,e);
if(cljs.core.truth_(and__16813__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,transmorphic.event.meta_focus)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,transmorphic.event.meta_focus))));
} else {
return and__16813__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,transmorphic.event.meta_focus,cljs.core.assoc,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),ident);
} else {
}

if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.core._EQ_.call(null,(0),e.button);
if(and__16813__auto__){
var and__16813__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,transmorphic.event.hand_focus)));
if(and__16813__auto____$1){
return transmorphic.event.wants_hand_focus_QMARK_.call(null,props);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,transmorphic.event.hand_focus,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),ident,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),transmorphic.event.get_cursor_pos.call(null,e)], null));
} else {
}

var temp__4425__auto__ = props.call(null,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
if(cljs.core.truth_(temp__4425__auto__)){
var cb_BANG_ = temp__4425__auto__;
cb_BANG_.call(null,e);

return refresh.call(null);
} else {
return null;
}
})], null);
});

//# sourceMappingURL=event.js.map
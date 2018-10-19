// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.tools.hand');
goog.require('cljs.core');
goog.require('om.next');
goog.require('transmorphic.event');
goog.require('transmorphic.symbolic');
goog.require('transmorphic.morph');
goog.require('transmorphic.core');
goog.require('transmorphic.utils');
transmorphic.tools.hand.local_hand_name = (function transmorphic$tools$hand$local_hand_name(){
return "localtoast-hand";
});
transmorphic.tools.hand.grab_component_BANG_ = (function transmorphic$tools$hand$grab_component_BANG_(component){
var hand = transmorphic.morph.$morph.call(null,transmorphic.tools.hand.local_hand_name.call(null));
var relative_pos = transmorphic.utils.delta.call(null,transmorphic.morph.position_in_world.call(null,component),transmorphic.morph.position_in_world.call(null,hand));
transmorphic.core.set_prop_BANG_.call(null,component,new cljs.core.Keyword(null,"position","position",-2011731912),relative_pos);

transmorphic.core.set_prop_BANG_.call(null,component,new cljs.core.Keyword(null,"drop-shadow?","drop-shadow?",-760899900),true);

transmorphic.core.move_component_BANG_.call(null,component,hand);

return transmorphic.core.get_root.call(null,cljs.core.deref.call(null,transmorphic.core.universe),component);
});
transmorphic.tools.hand.drop_component_BANG_ = (function transmorphic$tools$hand$drop_component_BANG_(component){
var new_parent = transmorphic.morph.morph_under_me.call(null,transmorphic.morph.$morph.call(null,transmorphic.tools.hand.local_hand_name.call(null)));
var relative_pos = transmorphic.utils.add_points.call(null,transmorphic.utils.delta.call(null,transmorphic.morph.position_in_world.call(null,component),transmorphic.morph.position_in_world.call(null,new_parent)),transmorphic.utils.delta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),transmorphic.morph.local_offset.call(null,new_parent)));
transmorphic.core.set_prop_BANG_.call(null,component,new cljs.core.Keyword(null,"drop-shadow?","drop-shadow?",-760899900),false);

transmorphic.core.set_prop_BANG_.call(null,component,new cljs.core.Keyword(null,"position","position",-2011731912),relative_pos);

transmorphic.core.move_component_BANG_.call(null,component,new_parent);

return transmorphic.core.get_root.call(null,cljs.core.deref.call(null,transmorphic.core.universe),component);
});
/**
 * Moves the morph (if not moved already) referenced 
 * by morph-id to the hand of the
 * system. This bypasses the usual grabbing mechanism!
 */
transmorphic.tools.hand.grab_morph_BANG_ = (function transmorphic$tools$hand$grab_morph_BANG_(morph){
var relative_pos = transmorphic.utils.delta.call(null,transmorphic.morph.position_in_world.call(null,morph),transmorphic.morph.position_in_world.call(null,transmorphic.morph.$morph.call(null,transmorphic.tools.hand.local_hand_name.call(null))));
transmorphic.core.move_morph_BANG_.call(null,morph,transmorphic.morph.$morph.call(null,transmorphic.tools.hand.local_hand_name.call(null)));

transmorphic.core.set_prop_BANG_.call(null,morph,new cljs.core.Keyword(null,"position","position",-2011731912),relative_pos);

return transmorphic.core.set_prop_BANG_.call(null,morph,new cljs.core.Keyword(null,"drop-shadow?","drop-shadow?",-760899900),true);
});
/**
 * Moves the morph currently residing in the hand morph
 * onto the one directly beneath it.
 */
transmorphic.tools.hand.drop_morph_BANG_ = (function transmorphic$tools$hand$drop_morph_BANG_(morph){
var new_parent = transmorphic.morph.morph_under_me.call(null,transmorphic.morph.$morph.call(null,transmorphic.tools.hand.local_hand_name.call(null)));
var relative_pos = transmorphic.utils.add_points.call(null,transmorphic.utils.delta.call(null,transmorphic.morph.position_in_world.call(null,morph),transmorphic.morph.position_in_world.call(null,new_parent)),transmorphic.utils.delta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),transmorphic.morph.local_offset.call(null,new_parent)));
transmorphic.core.move_morph_BANG_.call(null,morph,new_parent);

transmorphic.core.set_prop_BANG_.call(null,morph,new cljs.core.Keyword(null,"drop-shadow?","drop-shadow?",-760899900),false);

return transmorphic.core.set_prop_BANG_.call(null,morph,new cljs.core.Keyword(null,"position","position",-2011731912),relative_pos);
});
transmorphic.tools.hand.handle_grab_or_drag = (function transmorphic$tools$hand$handle_grab_or_drag(hand,hand_position){
var map__32520 = cljs.core.deref.call(null,transmorphic.event.hand_focus);
var map__32520__$1 = ((((!((map__32520 == null)))?((((map__32520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32520):map__32520);
var morph_id = cljs.core.get.call(null,map__32520__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var start_pos = cljs.core.get.call(null,map__32520__$1,new cljs.core.Keyword(null,"start-pos","start-pos",668789086));
var prev_pos = cljs.core.get.call(null,map__32520__$1,new cljs.core.Keyword(null,"prev-pos","prev-pos",556177604));
var focused_morph = transmorphic.morph.$morph.call(null,morph_id);
var map__32521 = new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(hand);
var map__32521__$1 = ((((!((map__32521 == null)))?((((map__32521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32521):map__32521);
var dragged_morph = cljs.core.get.call(null,map__32521__$1,new cljs.core.Keyword(null,"dragged-morph","dragged-morph",314017203));
var grabbed_morph = cljs.core.get.call(null,map__32521__$1,new cljs.core.Keyword(null,"grabbed-morph","grabbed-morph",289873809));
var map__32524_32530 = (function (){var or__16825__auto__ = new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(transmorphic.morph.$morph.call(null,dragged_morph));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(focused_morph);
}
})();
var map__32524_32531__$1 = ((((!((map__32524_32530 == null)))?((((map__32524_32530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32524_32530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32524_32530):map__32524_32530);
var draggable_QMARK__32532 = cljs.core.get.call(null,map__32524_32531__$1,new cljs.core.Keyword(null,"draggable?","draggable?",-236042740));
var on_drag_start_32533 = cljs.core.get.call(null,map__32524_32531__$1,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205));
var on_drag_32534 = cljs.core.get.call(null,map__32524_32531__$1,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091));
var on_drag_stop_32535 = cljs.core.get.call(null,map__32524_32531__$1,new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517));
var position_32536 = cljs.core.get.call(null,map__32524_32531__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_((function (){var and__16813__auto__ = (function (){var and__16813__auto__ = focused_morph;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.not.call(null,dragged_morph);
} else {
return and__16813__auto__;
}
})();
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = draggable_QMARK__32532;
if(cljs.core.truth_(and__16813__auto____$1)){
return ((10) < transmorphic.utils.eucl_distance.call(null,hand_position,start_pos));
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
transmorphic.core.rerender_BANG_.call(null,hand,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dragged-morph","dragged-morph",314017203),morph_id], null));

cljs.core.swap_BANG_.call(null,transmorphic.event.hand_focus,cljs.core.assoc,new cljs.core.Keyword(null,"prev-pos","prev-pos",556177604),hand_position);

if(cljs.core.truth_(on_drag_start_32533)){
on_drag_start_32533.call(null,position_32536);
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__16813__auto__ = focused_morph;
if(cljs.core.truth_(and__16813__auto__)){
return dragged_morph;
} else {
return and__16813__auto__;
}
})())){
var map__32526_32537 = transmorphic.utils.delta.call(null,prev_pos,hand_position);
var map__32526_32538__$1 = ((((!((map__32526_32537 == null)))?((((map__32526_32537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32526_32537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32526_32537):map__32526_32537);
var dx_32539 = cljs.core.get.call(null,map__32526_32538__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy_32540 = cljs.core.get.call(null,map__32526_32538__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.not_EQ_.call(null,(0),(dx_32539 + dy_32540))){
cljs.core.swap_BANG_.call(null,transmorphic.event.hand_focus,cljs.core.assoc,new cljs.core.Keyword(null,"prev-pos","prev-pos",556177604),hand_position);

if(cljs.core.truth_(on_drag_32534)){
on_drag_32534.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(- dx_32539),new cljs.core.Keyword(null,"y","y",-1757859776),(- dy_32540)], null));
} else {
}
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.core.not.call(null,focused_morph);
if(and__16813__auto__){
return dragged_morph;
} else {
return and__16813__auto__;
}
})())){
cljs.core.prn.call(null,"Stop");

if(cljs.core.truth_(on_drag_stop_32535)){
on_drag_stop_32535.call(null,position_32536);
} else {
}

transmorphic.core.rerender_BANG_.call(null,hand,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dragged-morph","dragged-morph",314017203),null], null));

cljs.core.swap_BANG_.call(null,transmorphic.event.hand_focus,cljs.core.dissoc,new cljs.core.Keyword(null,"prev-pos","prev-pos",556177604));
} else {
}

var map__32528 = (function (){var or__16825__auto__ = new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(transmorphic.morph.$morph.call(null,grabbed_morph));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(focused_morph);
}
})();
var map__32528__$1 = ((((!((map__32528 == null)))?((((map__32528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32528):map__32528);
var grabbable_QMARK_ = cljs.core.get.call(null,map__32528__$1,new cljs.core.Keyword(null,"grabbable?","grabbable?",-309545200));
var on_grab = cljs.core.get.call(null,map__32528__$1,new cljs.core.Keyword(null,"on-grab","on-grab",-476363202));
var on_drop = cljs.core.get.call(null,map__32528__$1,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491));
if(cljs.core.truth_((function (){var and__16813__auto__ = focused_morph;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = cljs.core.not.call(null,grabbed_morph);
if(and__16813__auto____$1){
var and__16813__auto____$2 = grabbable_QMARK_;
if(cljs.core.truth_(and__16813__auto____$2)){
return ((10) < transmorphic.utils.eucl_distance.call(null,start_pos,hand_position));
} else {
return and__16813__auto____$2;
}
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
transmorphic.tools.hand.grab_morph_BANG_.call(null,focused_morph);

transmorphic.core.rerender_BANG_.call(null,hand,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grabbed-morph","grabbed-morph",289873809),focused_morph], null));
} else {
}

if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.core.not.call(null,focused_morph);
if(and__16813__auto__){
return grabbed_morph;
} else {
return and__16813__auto__;
}
})())){
return transmorphic.tools.hand.drop_morph_BANG_.call(null,grabbed_morph);
} else {
return null;
}
});
transmorphic.tools.hand.grabbable;
transmorphic.tools.hand.in_hand_QMARK_ = (function transmorphic$tools$hand$in_hand_QMARK_(morph){
return transmorphic.morph.is_submorph_QMARK_.call(null,transmorphic.morph.$morph.call(null,transmorphic.tools.hand.local_hand_name.call(null)),morph);
});
transmorphic.tools.hand.hand_morph;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
transmorphic.tools.hand.hand_morph_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.hand.hand_morph_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.hand.hand_morph_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32542,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32544 = (((k32542 instanceof cljs.core.Keyword))?k32542.fqn:null);
switch (G__32544) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32542,else__17442__auto__);

}
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.hand.hand-morph*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32541){
var self__ = this;
var G__32541__$1 = this;
return (new cljs.core.RecordIter((0),G__32541__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.hand.hand_morph_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.hand.hand_morph_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,submorphs__$1,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),transmorphic.tools.hand.local_hand_name.call(null),new cljs.core.Keyword(null,"fill","fill",883462889),"red",new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.utils.add_points.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(props__$1)),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)], null),submorphs__$1),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32541){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32545 = cljs.core.keyword_identical_QMARK_;
var expr__32546 = k__17447__auto__;
if(cljs.core.truth_(pred__32545.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32546))){
return (new transmorphic.tools.hand.hand_morph_STAR_(G__32541,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32545.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32546))){
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,G__32541,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32545.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32546))){
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,G__32541,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32545.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32546))){
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,self__.parent,G__32541,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32545.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32546))){
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32541,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32545.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32546))){
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32541,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32545.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32546))){
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32541,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32545.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32546))){
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32541,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32545.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32546))){
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32541,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32541),null));
}
}
}
}
}
}
}
}
}
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32541){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.hand.hand_morph_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32541,self__.__extmap,self__.__hash));
});

transmorphic.tools.hand.hand_morph_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.hand.hand_morph_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.hand.hand_morph_STAR_.cljs$lang$type = true;

transmorphic.tools.hand.hand_morph_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.hand/hand-morph*");
});

transmorphic.tools.hand.hand_morph_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.hand/hand-morph*");
});

transmorphic.tools.hand.__GT_hand_morph_STAR_ = (function transmorphic$tools$hand$__GT_hand_morph_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.hand.hand_morph_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.hand.map__GT_hand_morph_STAR_ = (function transmorphic$tools$hand$map__GT_hand_morph_STAR_(G__32543){
return (new transmorphic.tools.hand.hand_morph_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32543),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32543),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32543),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32543),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32543),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32543),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32543),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32543),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32543),null,cljs.core.dissoc.call(null,G__32543,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.hand.hand_morph = (function transmorphic$tools$hand$hand_morph(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32557 = arguments.length;
var i__17884__auto___32558 = (0);
while(true){
if((i__17884__auto___32558 < len__17883__auto___32557)){
args__17890__auto__.push((arguments[i__17884__auto___32558]));

var G__32559 = (i__17884__auto___32558 + (1));
i__17884__auto___32558 = G__32559;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.hand.hand_morph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.hand.hand_morph.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.hand.map__GT_hand_morph_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32550){
var map__32551 = p__32550;
var map__32551__$1 = ((((!((map__32551 == null)))?((((map__32551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32551):map__32551);
return new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"local-hand-name","local-hand-name",-1860282796,null)),new cljs.core.Keyword(null,"fill","fill",883462889),"red",new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null),cljs.core.list(new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"props","props",2093813254,null))),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32553){
var map__32554 = p__32553;
var map__32554__$1 = ((((!((map__32554 == null)))?((((map__32554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32554):map__32554);
var m_1 = cljs.core.get.call(null,map__32554__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.hand","transmorphic.tools.hand",-774501074,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"hand-morph","hand-morph",-971409275,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.hand.hand_morph.cljs$lang$maxFixedArity = (1);

transmorphic.tools.hand.hand_morph.cljs$lang$applyTo = (function (seq32548){
var G__32549 = cljs.core.first.call(null,seq32548);
var seq32548__$1 = cljs.core.next.call(null,seq32548);
return transmorphic.tools.hand.hand_morph.cljs$core$IFn$_invoke$arity$variadic(G__32549,seq32548__$1);
});

//# sourceMappingURL=hand.js.map
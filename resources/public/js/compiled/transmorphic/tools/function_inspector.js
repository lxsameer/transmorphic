// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.tools.function_inspector');
goog.require('cljs.core');
goog.require('transmorphic.event');
goog.require('transmorphic.manipulation');
goog.require('cljs.core.async');
goog.require('transmorphic.utils');
goog.require('transmorphic.tools.window');
goog.require('cljs.pprint');
goog.require('transmorphic.core');
goog.require('clojure.string');
goog.require('transmorphic.repl');
goog.require('transmorphic.tools.ace');
goog.require('transmorphic.morph');
goog.require('transmorphic.symbolic');
transmorphic.tools.function_inspector.inspected_morphs = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
transmorphic.tools.function_inspector.scrubber_pane_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"scrub-pos","scrub-pos",1823400181),null,new cljs.core.Keyword(null,"callback","callback",-705136228),null,new cljs.core.Keyword(null,"scrub-value","scrub-value",-379600394),null], null));
transmorphic.tools.function_inspector.activate_scrubber_pane = (function transmorphic$tools$function_inspector$activate_scrubber_pane(scrub_pos,scrub_value,callback){
return cljs.core.reset_BANG_.call(null,transmorphic.tools.function_inspector.scrubber_pane_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active?","active?",459499776),true,new cljs.core.Keyword(null,"scrub-pos","scrub-pos",1823400181),scrub_pos,new cljs.core.Keyword(null,"scrub-value","scrub-value",-379600394),scrub_value,new cljs.core.Keyword(null,"callback","callback",-705136228),callback], null));
});
transmorphic.tools.function_inspector.scrubber_pane;


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
transmorphic.tools.function_inspector.scrubber_pane_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32690,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32692 = (((k32690 instanceof cljs.core.Keyword))?k32690.fqn:null);
switch (G__32692) {
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
return cljs.core.get.call(null,self__.__extmap,k32690,else__17442__auto__);

}
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.function-inspector.scrubber-pane*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32689){
var self__ = this;
var G__32689__$1 = this;
return (new cljs.core.RecordIter((0),G__32689__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,submorphs__$1,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
var map__32693 = props__$1;
var map__32693__$1 = ((((!((map__32693 == null)))?((((map__32693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32693):map__32693);
var scrub_pos = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"scrub-pos","scrub-pos",1823400181));
var scrub_value = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"scrub-value","scrub-value",-379600394));
var active_QMARK_ = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var callback = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"visible","visible",-1024216805),active_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),"blue",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.1,new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(transmorphic.morph.$morph.call(null,"world"))),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (map__32693,map__32693__$1,scrub_pos,scrub_value,active_QMARK_,callback,self__$1){
return (function (e){
return cljs.core.reset_BANG_.call(null,transmorphic.tools.function_inspector.scrubber_pane_state,cljs.core.PersistentArrayMap.fromArray([active_QMARK_,false], true, false));
});})(map__32693,map__32693__$1,scrub_pos,scrub_value,active_QMARK_,callback,self__$1))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (map__32693,map__32693__$1,scrub_pos,scrub_value,active_QMARK_,callback,self__$1){
return (function (e){
var cursor_pos = transmorphic.event.get_cursor_pos.call(null,e);
var client_pos = transmorphic.event.get_client_pos.call(null,e);
var scrubbed_value = ((scrub_value | (0)) + ((function (){var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(scrub_pos) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(scrub_pos));
if(((-100) > dy)){
return .1;
} else {
if((dy > (100))){
return (10);
} else {
return (1);

}
}
})() * (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cursor_pos) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(scrub_pos))));
return callback.call(null,scrubbed_value);
});})(map__32693,map__32693__$1,scrub_pos,scrub_value,active_QMARK_,callback,self__$1))
], null)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32689){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32695 = cljs.core.keyword_identical_QMARK_;
var expr__32696 = k__17447__auto__;
if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32696))){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(G__32689,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32696))){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,G__32689,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32696))){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,G__32689,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32696))){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,self__.parent,G__32689,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32696))){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32689,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32696))){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32689,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32696))){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32689,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32696))){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32689,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32695.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32696))){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32689,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32689),null));
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

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32689){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32689,self__.__extmap,self__.__hash));
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.cljs$lang$type = true;

transmorphic.tools.function_inspector.scrubber_pane_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.function-inspector/scrubber-pane*");
});

transmorphic.tools.function_inspector.scrubber_pane_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.function-inspector/scrubber-pane*");
});

transmorphic.tools.function_inspector.__GT_scrubber_pane_STAR_ = (function transmorphic$tools$function_inspector$__GT_scrubber_pane_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.function_inspector.map__GT_scrubber_pane_STAR_ = (function transmorphic$tools$function_inspector$map__GT_scrubber_pane_STAR_(G__32691){
return (new transmorphic.tools.function_inspector.scrubber_pane_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32691),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32691),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32691),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32691),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32691),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32691),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32691),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32691),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32691),null,cljs.core.dissoc.call(null,G__32691,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.function_inspector.scrubber_pane = (function transmorphic$tools$function_inspector$scrubber_pane(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32704 = arguments.length;
var i__17884__auto___32705 = (0);
while(true){
if((i__17884__auto___32705 < len__17883__auto___32704)){
args__17890__auto__.push((arguments[i__17884__auto___32705]));

var G__32706 = (i__17884__auto___32705 + (1));
i__17884__auto___32705 = G__32706;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.function_inspector.scrubber_pane.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.function_inspector.scrubber_pane.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.function_inspector.map__GT_scrubber_pane_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Symbol(null,"active?","active?",2100031303,null),new cljs.core.Keyword(null,"fill","fill",883462889),"blue",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.1,new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),"world",new cljs.core.Symbol(null,"$morph","$morph",1827866470,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"extent","extent",-186399820)),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"scrubber-pane-state","scrubber-pane-state",1838770191,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"active?","active?",2100031303,null),false], null))),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor-pos","cursor-pos",176301087,null),cljs.core.list(new cljs.core.Symbol(null,"get-cursor-pos","get-cursor-pos",-614612315,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Symbol(null,"client-pos","client-pos",1902480954,null),cljs.core.list(new cljs.core.Symbol(null,"get-client-pos","get-client-pos",-935920953,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Symbol(null,"scrubbed-value","scrubbed-value",1723794127,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"scrub-value","scrub-value",1260931133,null)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dy","dy",-934888526,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"scrub-pos","scrub-pos",-831035588,null)),cljs.core.list(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"scrub-pos","scrub-pos",-831035588,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),(-100),new cljs.core.Symbol(null,"dy","dy",-934888526,null)),new cljs.core.Symbol(null,".1",".1",731056055,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"dy","dy",-934888526,null),(100)),(10),new cljs.core.Keyword(null,"default","default",-1987822328),(1))),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"cursor-pos","cursor-pos",176301087,null)),cljs.core.list(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"scrub-pos","scrub-pos",-831035588,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.Symbol(null,"scrubbed-value","scrubbed-value",1723794127,null))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32700){
var map__32701 = p__32700;
var map__32701__$1 = ((((!((map__32701 == null)))?((((map__32701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32701):map__32701);
var m_1 = cljs.core.get.call(null,map__32701__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scrub-pos","scrub-pos",-831035588,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scrub-value","scrub-value",1260931133,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"active?","active?",2100031303,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"callback","callback",935395299,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.function-inspector","transmorphic.tools.function-inspector",-1826059813,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"scrubber-pane","scrubber-pane",181571184,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.function_inspector.scrubber_pane.cljs$lang$maxFixedArity = (1);

transmorphic.tools.function_inspector.scrubber_pane.cljs$lang$applyTo = (function (seq32698){
var G__32699 = cljs.core.first.call(null,seq32698);
var seq32698__$1 = cljs.core.next.call(null,seq32698);
return transmorphic.tools.function_inspector.scrubber_pane.cljs$core$IFn$_invoke$arity$variadic(G__32699,seq32698__$1);
});
transmorphic.tools.function_inspector.prepare_scrubbing = (function transmorphic$tools$function_inspector$prepare_scrubbing(model,ace_instance,client_pos){
var token = transmorphic.tools.ace.get_numeric_token_at.call(null,ace_instance,client_pos);
transmorphic.tools.ace.set_token_selection_BANG_.call(null,ace_instance,token);

transmorphic.tools.function_inspector.activate_scrubber_pane.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scrubbing","scrubbing",-1949821670).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(model)),((function (token){
return (function (p1__32707_SHARP_){
transmorphic.tools.ace.set_token_selection_BANG_.call(null,ace_instance,token);

return transmorphic.tools.ace.set_token_value_BANG_.call(null,ace_instance,token,p1__32707_SHARP_);
});})(token))
);

return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"scrubbing","scrubbing",-1949821670),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),client_pos], null));
});
transmorphic.tools.function_inspector.inspecting;

transmorphic.tools.function_inspector.inspection_active;
transmorphic.tools.function_inspector.loop_mapping_button;


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
transmorphic.tools.function_inspector.loop_mapping_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32709,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32711 = (((k32709 instanceof cljs.core.Keyword))?k32709.fqn:null);
switch (G__32711) {
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
return cljs.core.get.call(null,self__.__extmap,k32709,else__17442__auto__);

}
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.function-inspector.loop-mapping-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32708){
var self__ = this;
var G__32708__$1 = this;
return (new cljs.core.RecordIter((0),G__32708__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,model,position,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
var coloring = (cljs.core.truth_(new cljs.core.Keyword(null,"deep-changes","deep-changes",1447637887).cljs$core$IFn$_invoke$arity$1(model))?"lightgreen":"grey");
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374),true,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),coloring,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(3),new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (coloring,self__$1){
return (function (e){
e.stopPropagation();

return transmorphic.core.rerender_BANG_.call(null,self__$1,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deep-changes","deep-changes",1447637887)], null),cljs.core.not));
});})(coloring,self__$1))
], null),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"map-button-label",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null),new cljs.core.Keyword(null,"text-color","text-color",1728708298),coloring,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"text-string","text-string",1520601822),"Loop Mapping"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32708){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32712 = cljs.core.keyword_identical_QMARK_;
var expr__32713 = k__17447__auto__;
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32713))){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(G__32708,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32713))){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,G__32708,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32713))){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,G__32708,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32713))){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__32708,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32713))){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32708,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32713))){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32708,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32713))){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32708,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32713))){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32708,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32713))){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32708,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32708),null));
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

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32708){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32708,self__.__extmap,self__.__hash));
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.cljs$lang$type = true;

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.function-inspector/loop-mapping-button*");
});

transmorphic.tools.function_inspector.loop_mapping_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.function-inspector/loop-mapping-button*");
});

transmorphic.tools.function_inspector.__GT_loop_mapping_button_STAR_ = (function transmorphic$tools$function_inspector$__GT_loop_mapping_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.function_inspector.map__GT_loop_mapping_button_STAR_ = (function transmorphic$tools$function_inspector$map__GT_loop_mapping_button_STAR_(G__32710){
return (new transmorphic.tools.function_inspector.loop_mapping_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32710),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32710),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32710),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32710),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32710),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32710),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32710),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32710),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32710),null,cljs.core.dissoc.call(null,G__32710,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.function_inspector.loop_mapping_button = (function transmorphic$tools$function_inspector$loop_mapping_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32721 = arguments.length;
var i__17884__auto___32722 = (0);
while(true){
if((i__17884__auto___32722 < len__17883__auto___32721)){
args__17890__auto__.push((arguments[i__17884__auto___32722]));

var G__32723 = (i__17884__auto___32722 + (1));
i__17884__auto___32722 = G__32723;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.function_inspector.loop_mapping_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.function_inspector.loop_mapping_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.function_inspector.map__GT_loop_mapping_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"map-button-label",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Symbol(null,"coloring","coloring",-336949604,null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"text-string","text-string",1520601822),"Loop Mapping"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374),true,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Symbol(null,"coloring","coloring",-336949604,null),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(3),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"position","position",-371200385,null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deep-changes","deep-changes",1447637887)], null),new cljs.core.Symbol(null,"not","not",1044554643,null))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32717){
var map__32718 = p__32717;
var map__32718__$1 = ((((!((map__32718 == null)))?((((map__32718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32718):map__32718);
var m_1 = cljs.core.get.call(null,map__32718__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"position","position",-371200385,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coloring","coloring",-336949604,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",1181717262,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deep-changes","deep-changes",1447637887)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lightgreen"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grey"], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.function-inspector","transmorphic.tools.function-inspector",-1826059813,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"loop-mapping-button","loop-mapping-button",-609397449,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.function_inspector.loop_mapping_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.function_inspector.loop_mapping_button.cljs$lang$applyTo = (function (seq32715){
var G__32716 = cljs.core.first.call(null,seq32715);
var seq32715__$1 = cljs.core.next.call(null,seq32715);
return transmorphic.tools.function_inspector.loop_mapping_button.cljs$core$IFn$_invoke$arity$variadic(G__32716,seq32715__$1);
});
transmorphic.tools.function_inspector.morph_mapping_button;


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
transmorphic.tools.function_inspector.morph_mapping_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32725,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32727 = (((k32725 instanceof cljs.core.Keyword))?k32725.fqn:null);
switch (G__32727) {
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
return cljs.core.get.call(null,self__.__extmap,k32725,else__17442__auto__);

}
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.function-inspector.morph-mapping-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32724){
var self__ = this;
var G__32724__$1 = this;
return (new cljs.core.RecordIter((0),G__32724__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,model,position,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
var coloring = (cljs.core.truth_(new cljs.core.Keyword(null,"source-mapping","source-mapping",1088103442).cljs$core$IFn$_invoke$arity$1(model))?"orange":"grey");
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374),true,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),coloring,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(3),new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (coloring,self__$1){
return (function (e){
e.stopPropagation();

return transmorphic.core.rerender_BANG_.call(null,self__$1,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-mapping","source-mapping",1088103442)], null),cljs.core.not));
});})(coloring,self__$1))
], null),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"morph-button-label",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null),new cljs.core.Keyword(null,"text-color","text-color",1728708298),coloring,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"text-string","text-string",1520601822),"Morph Mapping"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32724){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32728 = cljs.core.keyword_identical_QMARK_;
var expr__32729 = k__17447__auto__;
if(cljs.core.truth_(pred__32728.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32729))){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(G__32724,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32728.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32729))){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,G__32724,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32728.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32729))){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,G__32724,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32728.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32729))){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__32724,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32728.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32729))){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32724,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32728.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32729))){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32724,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32728.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32729))){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32724,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32728.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32729))){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32724,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32728.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32729))){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32724,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32724),null));
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

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32724){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32724,self__.__extmap,self__.__hash));
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.cljs$lang$type = true;

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.function-inspector/morph-mapping-button*");
});

transmorphic.tools.function_inspector.morph_mapping_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.function-inspector/morph-mapping-button*");
});

transmorphic.tools.function_inspector.__GT_morph_mapping_button_STAR_ = (function transmorphic$tools$function_inspector$__GT_morph_mapping_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.function_inspector.map__GT_morph_mapping_button_STAR_ = (function transmorphic$tools$function_inspector$map__GT_morph_mapping_button_STAR_(G__32726){
return (new transmorphic.tools.function_inspector.morph_mapping_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32726),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32726),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32726),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32726),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32726),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32726),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32726),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32726),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32726),null,cljs.core.dissoc.call(null,G__32726,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.function_inspector.morph_mapping_button = (function transmorphic$tools$function_inspector$morph_mapping_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32737 = arguments.length;
var i__17884__auto___32738 = (0);
while(true){
if((i__17884__auto___32738 < len__17883__auto___32737)){
args__17890__auto__.push((arguments[i__17884__auto___32738]));

var G__32739 = (i__17884__auto___32738 + (1));
i__17884__auto___32738 = G__32739;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.function_inspector.morph_mapping_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.function_inspector.morph_mapping_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.function_inspector.map__GT_morph_mapping_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"morph-button-label",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Symbol(null,"coloring","coloring",-336949604,null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"text-string","text-string",1520601822),"Morph Mapping"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374),true,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Symbol(null,"coloring","coloring",-336949604,null),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(3),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"position","position",-371200385,null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-mapping","source-mapping",1088103442)], null),new cljs.core.Symbol(null,"not","not",1044554643,null))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32733){
var map__32734 = p__32733;
var map__32734__$1 = ((((!((map__32734 == null)))?((((map__32734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32734):map__32734);
var m_1 = cljs.core.get.call(null,map__32734__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"position","position",-371200385,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coloring","coloring",-336949604,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",1181717262,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-mapping","source-mapping",1088103442)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grey"], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.function-inspector","transmorphic.tools.function-inspector",-1826059813,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"morph-mapping-button","morph-mapping-button",1510612832,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.function_inspector.morph_mapping_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.function_inspector.morph_mapping_button.cljs$lang$applyTo = (function (seq32731){
var G__32732 = cljs.core.first.call(null,seq32731);
var seq32731__$1 = cljs.core.next.call(null,seq32731);
return transmorphic.tools.function_inspector.morph_mapping_button.cljs$core$IFn$_invoke$arity$variadic(G__32732,seq32731__$1);
});
transmorphic.tools.function_inspector.function_inspector;


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
transmorphic.tools.function_inspector.function_inspector_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32741,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32743 = (((k32741 instanceof cljs.core.Keyword))?k32741.fqn:null);
switch (G__32743) {
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
return cljs.core.get.call(null,self__.__extmap,k32741,else__17442__auto__);

}
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.function-inspector.function-inspector*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32740){
var self__ = this;
var G__32740__$1 = this;
return (new cljs.core.RecordIter((0),G__32740__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,model,submorphs__$1,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_component.call(null,transmorphic.tools.window.window.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scrollable?","scrollable?",1366456374),true,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (self__$1){
return (function (){
return cljs.core.swap_BANG_.call(null,transmorphic.tools.function_inspector.inspected_morphs,cljs.core.disj,model.call(null,new cljs.core.Keyword(null,"target-ref","target-ref",-164384803)));
});})(self__$1))
,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),((function (self__$1){
return (function (new_extent){
return null;
});})(self__$1))
,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),(function (){var txs__$1 = transmorphic.manipulation.changes_on_morph.call(null,model.call(null,new cljs.core.Keyword(null,"target-ref","target-ref",-164384803)));
var model_atom = new cljs.core.Keyword(null,"model-atom","model-atom",-1052493220).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(transmorphic.morph.$morph.call(null,new cljs.core.Keyword(null,"target-ref","target-ref",-164384803).cljs$core$IFn$_invoke$arity$1(model)))));
var hl = ((function (txs__$1,model_atom,self__$1){
return (function (v){
return transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-string","text-string",1520601822),v,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null));
});})(txs__$1,model_atom,self__$1))
;
var entry = ((function (txs__$1,model_atom,hl,self__$1){
return (function (tx,tx_ref){
return transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"grey",new cljs.core.Keyword(null,"text-string","text-string",1520601822),tx,new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (txs__$1,model_atom,hl,self__$1){
return (function (e){
var tx_path = cljs.core.concat.call(null,model.call(null,new cljs.core.Keyword(null,"target-ref","target-ref",-164384803)),tx_ref);
return transmorphic.manipulation.revert_tx_BANG_.call(null,tx_ref);
});})(txs__$1,model_atom,hl,self__$1))
], null));
});})(txs__$1,model_atom,hl,self__$1))
;
return null;
})()], null)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32740){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32744 = cljs.core.keyword_identical_QMARK_;
var expr__32745 = k__17447__auto__;
if(cljs.core.truth_(pred__32744.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32745))){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(G__32740,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32744.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32745))){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,G__32740,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32744.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32745))){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,G__32740,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32744.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32745))){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,self__.parent,G__32740,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32744.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32745))){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32740,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32744.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32745))){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32740,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32744.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32745))){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32740,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32744.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32745))){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32740,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32744.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32745))){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32740,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32740),null));
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

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32740){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32740,self__.__extmap,self__.__hash));
});

transmorphic.tools.function_inspector.function_inspector_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.function_inspector.function_inspector_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.function_inspector.function_inspector_STAR_.cljs$lang$type = true;

transmorphic.tools.function_inspector.function_inspector_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.function-inspector/function-inspector*");
});

transmorphic.tools.function_inspector.function_inspector_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.function-inspector/function-inspector*");
});

transmorphic.tools.function_inspector.__GT_function_inspector_STAR_ = (function transmorphic$tools$function_inspector$__GT_function_inspector_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.function_inspector.map__GT_function_inspector_STAR_ = (function transmorphic$tools$function_inspector$map__GT_function_inspector_STAR_(G__32742){
return (new transmorphic.tools.function_inspector.function_inspector_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32742),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32742),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32742),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32742),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32742),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32742),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32742),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32742),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32742),null,cljs.core.dissoc.call(null,G__32742,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.function_inspector.function_inspector = (function transmorphic$tools$function_inspector$function_inspector(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32753 = arguments.length;
var i__17884__auto___32754 = (0);
while(true){
if((i__17884__auto___32754 < len__17883__auto___32753)){
args__17890__auto__.push((arguments[i__17884__auto___32754]));

var G__32755 = (i__17884__auto___32754 + (1));
i__17884__auto___32754 = G__32755;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.function_inspector.function_inspector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.function_inspector.function_inspector.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.function_inspector.map__GT_function_inspector_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"window","window",-1929916235,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scrollable?","scrollable?",1366456374),true,new cljs.core.Keyword(null,"on-close","on-close",-761178394),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"inspected-morphs","inspected-morphs",1905953633,null),new cljs.core.Symbol(null,"disj","disj",-1076545178,null),cljs.core.list(new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"target-ref","target-ref",-164384803)))),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-extent","new-extent",288815376,null)], null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"txs","txs",-598397391,null),cljs.core.list(new cljs.core.Symbol(null,"changes-on-morph","changes-on-morph",-1689685504,null),cljs.core.list(new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"target-ref","target-ref",-164384803))),new cljs.core.Symbol(null,"model-atom","model-atom",588038307,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"target-ref","target-ref",-164384803),new cljs.core.Symbol(null,"$morph","$morph",1827866470,null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Keyword(null,"model-atom","model-atom",-1052493220)),new cljs.core.Symbol(null,"hl","hl",523727930,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-string","text-string",1520601822),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null))),new cljs.core.Symbol(null,"entry","entry",2145700350,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Symbol(null,"tx-ref","tx-ref",1424426578,null)], null),cljs.core.list(new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"grey",new cljs.core.Keyword(null,"text-string","text-string",1520601822),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tx-path","tx-path",471747502,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),cljs.core.list(new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"target-ref","target-ref",-164384803)),new cljs.core.Symbol(null,"tx-ref","tx-ref",1424426578,null))], null),cljs.core.list(new cljs.core.Symbol(null,"revert-tx!","revert-tx!",147582514,null),new cljs.core.Symbol(null,"tx-ref","tx-ref",1424426578,null))))], null)))], null))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32749){
var map__32750 = p__32749;
var map__32750__$1 = ((((!((map__32750 == null)))?((((map__32750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32750):map__32750);
var m_1 = cljs.core.get.call(null,map__32750__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.function-inspector","transmorphic.tools.function-inspector",-1826059813,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"function-inspector","function-inspector",-1909952381,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.function_inspector.function_inspector.cljs$lang$maxFixedArity = (1);

transmorphic.tools.function_inspector.function_inspector.cljs$lang$applyTo = (function (seq32747){
var G__32748 = cljs.core.first.call(null,seq32747);
var seq32747__$1 = cljs.core.next.call(null,seq32747);
return transmorphic.tools.function_inspector.function_inspector.cljs$core$IFn$_invoke$arity$variadic(G__32748,seq32747__$1);
});
transmorphic.tools.function_inspector.inspect_function_BANG_ = (function transmorphic$tools$function_inspector$inspect_function_BANG_(lens_ref){
return transmorphic.tools.function_inspector.function_inspector.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"Function Inspector",new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.centered_in.call(null,transmorphic.morph.$morph.call(null,"world"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(600),new cljs.core.Keyword(null,"y","y",-1757859776),(600)], null)),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(400)], null),new cljs.core.Keyword(null,"target-ref","target-ref",-164384803),lens_ref,new cljs.core.Keyword(null,"target-id","target-id",-1438159155),new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(transmorphic.morph.$morph.call(null,lens_ref)),new cljs.core.Keyword(null,"ace","ace",1638744810),cljs.core.PersistentArrayMap.EMPTY], null),[cljs.core.str("inspector-on-"),cljs.core.str(lens_ref)].join(''));
});

//# sourceMappingURL=function_inspector.js.map
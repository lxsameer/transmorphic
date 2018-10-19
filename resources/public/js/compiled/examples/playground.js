// Compiled by ClojureScript 1.7.170 {}
goog.provide('examples.playground');
goog.require('cljs.core');
goog.require('transmorphic.event');
goog.require('transmorphic.manipulation');
goog.require('goog.dom');
goog.require('transmorphic.utils');
goog.require('transmorphic.tools.window');
goog.require('transmorphic.tools.hand');
goog.require('transmorphic.tools.world');
goog.require('transmorphic.core');
goog.require('om.next');
goog.require('transmorphic.repl');
goog.require('transmorphic.tools.ace');
goog.require('transmorphic.morph');
goog.require('transmorphic.tools.function_editor');
goog.require('transmorphic.symbolic');
examples.playground.digital_clock;
examples.playground.tree;


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
examples.playground.tree_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.tree_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.tree_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.tree_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.tree_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33294,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33296 = (((k33294 instanceof cljs.core.Keyword))?k33294.fqn:null);
switch (G__33296) {
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
return cljs.core.get.call(null,self__.__extmap,k33294,else__17442__auto__);

}
});

examples.playground.tree_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.tree*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.tree_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.tree_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33293){
var self__ = this;
var G__33293__$1 = this;
return (new cljs.core.RecordIter((0),G__33293__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.tree_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.tree_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.tree_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.tree_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.tree_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.tree_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.tree_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.tree_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.tree_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,p__33297,_,render_ctx__30602__auto__){
var self__ = this;
var map__33298 = p__33297;
var map__33298__$1 = ((((!((map__33298 == null)))?((((map__33298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33298):map__33298);
var stem_pos = cljs.core.get.call(null,map__33298__$1,new cljs.core.Keyword(null,"stem-pos","stem-pos",675111013));
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),"brown",new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374),true,new cljs.core.Keyword(null,"grabbable?","grabbable?",-309545200),true,new cljs.core.Keyword(null,"id","id",-1388402092),"stub",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(62),new cljs.core.Keyword(null,"x","x",2099068185),(18)], null),new cljs.core.Keyword(null,"position","position",-2011731912),stem_pos], null),cljs.core.assoc.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),"green",new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374),true,new cljs.core.Keyword(null,"grabbable?","grabbable?",-309545200),true,new cljs.core.Keyword(null,"id","id",-1388402092),"cone",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"x","x",2099068185),(100)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(-80),new cljs.core.Keyword(null,"x","x",2099068185),(-40)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.tree_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.tree_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33293){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33300 = cljs.core.keyword_identical_QMARK_;
var expr__33301 = k__17447__auto__;
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33301))){
return (new examples.playground.tree_STAR_(G__33293,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33301))){
return (new examples.playground.tree_STAR_(self__.component_id,G__33293,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33301))){
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,G__33293,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33301))){
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,self__.parent,G__33293,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33301))){
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33293,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33301))){
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33293,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33301))){
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33293,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33301))){
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33293,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33301))){
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33293,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33293),null));
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

examples.playground.tree_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.tree_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33293){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.tree_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33293,self__.__extmap,self__.__hash));
});

examples.playground.tree_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.tree_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.tree_STAR_.cljs$lang$type = true;

examples.playground.tree_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/tree*");
});

examples.playground.tree_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/tree*");
});

examples.playground.__GT_tree_STAR_ = (function examples$playground$__GT_tree_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.tree_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_tree_STAR_ = (function examples$playground$map__GT_tree_STAR_(G__33295){
return (new examples.playground.tree_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33295),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33295),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33295),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33295),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33295),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33295),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33295),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33295),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33295),null,cljs.core.dissoc.call(null,G__33295,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.tree = (function examples$playground$tree(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33309 = arguments.length;
var i__17884__auto___33310 = (0);
while(true){
if((i__17884__auto___33310 < len__17883__auto___33309)){
args__17890__auto__.push((arguments[i__17884__auto___33310]));

var G__33311 = (i__17884__auto___33310 + (1));
i__17884__auto___33310 = G__33311;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.tree.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.tree.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_tree_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),"green",new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374),true,new cljs.core.Keyword(null,"grabbable?","grabbable?",-309545200),true,new cljs.core.Keyword(null,"id","id",-1388402092),"cone",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"x","x",2099068185),(100)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(-80),new cljs.core.Keyword(null,"x","x",2099068185),(-40)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),"brown",new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374),true,new cljs.core.Keyword(null,"grabbable?","grabbable?",-309545200),true,new cljs.core.Keyword(null,"id","id",-1388402092),"stub",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(62),new cljs.core.Keyword(null,"x","x",2099068185),(18)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"stem-pos","stem-pos",-1979324756,null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33305){
var map__33306 = p__33305;
var map__33306__$1 = ((((!((map__33306 == null)))?((((map__33306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33306):map__33306);
var m_1 = cljs.core.get.call(null,map__33306__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stem-pos","stem-pos",-1979324756,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tree","tree",1444219499,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.tree.cljs$lang$maxFixedArity = (1);

examples.playground.tree.cljs$lang$applyTo = (function (seq33303){
var G__33304 = cljs.core.first.call(null,seq33303);
var seq33303__$1 = cljs.core.next.call(null,seq33303);
return examples.playground.tree.cljs$core$IFn$_invoke$arity$variadic(G__33304,seq33303__$1);
});
examples.playground.scenery;


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
examples.playground.scenery_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.scenery_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.scenery_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.scenery_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.scenery_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33313,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33315 = (((k33313 instanceof cljs.core.Keyword))?k33313.fqn:null);
switch (G__33315) {
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
return cljs.core.get.call(null,self__.__extmap,k33313,else__17442__auto__);

}
});

examples.playground.scenery_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.scenery*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.scenery_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.scenery_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33312){
var self__ = this;
var G__33312__$1 = this;
return (new cljs.core.RecordIter((0),G__33312__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.scenery_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.scenery_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.scenery_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.scenery_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.scenery_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.scenery_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.scenery_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.scenery_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.scenery_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"blue",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(179),new cljs.core.Keyword(null,"x","x",2099068185),(274)], null),new cljs.core.Keyword(null,"position","position",-2011731912),props__$1.call(null,new cljs.core.Keyword(null,"position","position",-2011731912))], null),cljs.core.assoc.call(null,examples.playground.tree.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stem-pos","stem-pos",675111013),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(95),new cljs.core.Keyword(null,"x","x",2099068185),(64)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2)),cljs.core.assoc.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"green",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(36),new cljs.core.Keyword(null,"x","x",2099068185),(274)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(143),new cljs.core.Keyword(null,"x","x",2099068185),(0)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(3)),cljs.core.assoc.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"yellow",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(34),new cljs.core.Keyword(null,"x","x",2099068185),(37)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"x","x",2099068185),(205)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(4)),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(101),new cljs.core.Keyword(null,"x","x",2099068185),(128)], null),new cljs.core.Keyword(null,"url","url",276297046),"http://pngimg.com/upload/cloud_PNG16.png",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(120),new cljs.core.Keyword(null,"y","y",-1757859776),(9)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(5))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.scenery_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.scenery_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33312){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33316 = cljs.core.keyword_identical_QMARK_;
var expr__33317 = k__17447__auto__;
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33317))){
return (new examples.playground.scenery_STAR_(G__33312,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33317))){
return (new examples.playground.scenery_STAR_(self__.component_id,G__33312,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33317))){
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,G__33312,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33317))){
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,self__.parent,G__33312,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33317))){
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33312,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33317))){
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33312,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33317))){
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33312,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33317))){
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33312,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33316.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33317))){
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33312,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33312),null));
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

examples.playground.scenery_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.scenery_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33312){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.scenery_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33312,self__.__extmap,self__.__hash));
});

examples.playground.scenery_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.scenery_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.scenery_STAR_.cljs$lang$type = true;

examples.playground.scenery_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/scenery*");
});

examples.playground.scenery_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/scenery*");
});

examples.playground.__GT_scenery_STAR_ = (function examples$playground$__GT_scenery_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.scenery_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_scenery_STAR_ = (function examples$playground$map__GT_scenery_STAR_(G__33314){
return (new examples.playground.scenery_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33314),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33314),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33314),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33314),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33314),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33314),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33314),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33314),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33314),null,cljs.core.dissoc.call(null,G__33314,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.scenery = (function examples$playground$scenery(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33325 = arguments.length;
var i__17884__auto___33326 = (0);
while(true){
if((i__17884__auto___33326 < len__17883__auto___33325)){
args__17890__auto__.push((arguments[i__17884__auto___33326]));

var G__33327 = (i__17884__auto___33326 + (1));
i__17884__auto___33326 = G__33327;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.scenery.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.scenery.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_scenery_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 7, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"tree","tree",1444219499,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stem-pos","stem-pos",675111013),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(95),new cljs.core.Keyword(null,"x","x",2099068185),(64)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(3),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"green",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(36),new cljs.core.Keyword(null,"x","x",2099068185),(274)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(143),new cljs.core.Keyword(null,"x","x",2099068185),(0)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"yellow",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(34),new cljs.core.Keyword(null,"x","x",2099068185),(37)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"x","x",2099068185),(205)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(5),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(101),new cljs.core.Keyword(null,"x","x",2099068185),(128)], null),new cljs.core.Keyword(null,"url","url",276297046),"http://pngimg.com/upload/cloud_PNG16.png",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(120),new cljs.core.Keyword(null,"y","y",-1757859776),(9)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"blue",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(179),new cljs.core.Keyword(null,"x","x",2099068185),(274)], null),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"position","position",-2011731912))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33321){
var map__33322 = p__33321;
var map__33322__$1 = ((((!((map__33322 == null)))?((((map__33322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33322):map__33322);
var m_1 = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"scenery","scenery",1500839503,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.scenery.cljs$lang$maxFixedArity = (1);

examples.playground.scenery.cljs$lang$applyTo = (function (seq33319){
var G__33320 = cljs.core.first.call(null,seq33319);
var seq33319__$1 = cljs.core.next.call(null,seq33319);
return examples.playground.scenery.cljs$core$IFn$_invoke$arity$variadic(G__33320,seq33319__$1);
});
examples.playground.namespace_viewer;


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
examples.playground.namespace_viewer_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.namespace_viewer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.namespace_viewer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33329,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33331 = (((k33329 instanceof cljs.core.Keyword))?k33329.fqn:null);
switch (G__33331) {
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
return cljs.core.get.call(null,self__.__extmap,k33329,else__17442__auto__);

}
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.namespace-viewer*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33328){
var self__ = this;
var G__33328__$1 = this;
return (new cljs.core.RecordIter((0),G__33328__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.namespace_viewer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.namespace_viewer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.namespace_viewer_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.namespace_viewer_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,submorphs__$1,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_component.call(null,transmorphic.tools.window.window.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(props__$1),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(props__$1),new cljs.core.Keyword(null,"title","title",636505583),"demo.clocks"], null)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33328){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33332 = cljs.core.keyword_identical_QMARK_;
var expr__33333 = k__17447__auto__;
if(cljs.core.truth_(pred__33332.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33333))){
return (new examples.playground.namespace_viewer_STAR_(G__33328,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33332.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33333))){
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,G__33328,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33332.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33333))){
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,G__33328,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33332.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33333))){
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,self__.parent,G__33328,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33332.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33333))){
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33328,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33332.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33333))){
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33328,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33332.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33333))){
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33328,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33332.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33333))){
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33328,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33332.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33333))){
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33328,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33328),null));
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

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33328){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.namespace_viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33328,self__.__extmap,self__.__hash));
});

examples.playground.namespace_viewer_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.namespace_viewer_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.namespace_viewer_STAR_.cljs$lang$type = true;

examples.playground.namespace_viewer_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/namespace-viewer*");
});

examples.playground.namespace_viewer_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/namespace-viewer*");
});

examples.playground.__GT_namespace_viewer_STAR_ = (function examples$playground$__GT_namespace_viewer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.namespace_viewer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_namespace_viewer_STAR_ = (function examples$playground$map__GT_namespace_viewer_STAR_(G__33330){
return (new examples.playground.namespace_viewer_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33330),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33330),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33330),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33330),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33330),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33330),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33330),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33330),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33330),null,cljs.core.dissoc.call(null,G__33330,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.namespace_viewer = (function examples$playground$namespace_viewer(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33341 = arguments.length;
var i__17884__auto___33342 = (0);
while(true){
if((i__17884__auto___33342 < len__17883__auto___33341)){
args__17890__auto__.push((arguments[i__17884__auto___33342]));

var G__33343 = (i__17884__auto___33342 + (1));
i__17884__auto___33342 = G__33343;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.namespace_viewer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.namespace_viewer.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_namespace_viewer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"window","window",-1929916235,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"props","props",2093813254,null)),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Symbol(null,"props","props",2093813254,null)),new cljs.core.Keyword(null,"title","title",636505583),"demo.clocks"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33337){
var map__33338 = p__33337;
var map__33338__$1 = ((((!((map__33338 == null)))?((((map__33338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33338):map__33338);
var m_1 = cljs.core.get.call(null,map__33338__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"namespace-viewer","namespace-viewer",460692369,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.namespace_viewer.cljs$lang$maxFixedArity = (1);

examples.playground.namespace_viewer.cljs$lang$applyTo = (function (seq33335){
var G__33336 = cljs.core.first.call(null,seq33335);
var seq33335__$1 = cljs.core.next.call(null,seq33335);
return examples.playground.namespace_viewer.cljs$core$IFn$_invoke$arity$variadic(G__33336,seq33335__$1);
});
examples.playground.PI = Math.PI;
examples.playground.angle_for_hour = (function examples$playground$angle_for_hour(hour){
return (((-0.25 + (hour / (12))) * examples.playground.PI) * (2));
});
examples.playground.second_pointer;


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
examples.playground.second_pointer_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.second_pointer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.second_pointer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33345,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33347 = (((k33345 instanceof cljs.core.Keyword))?k33345.fqn:null);
switch (G__33347) {
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
return cljs.core.get.call(null,self__.__extmap,k33345,else__17442__auto__);

}
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.second-pointer*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.second_pointer_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33344){
var self__ = this;
var G__33344__$1 = this;
return (new cljs.core.RecordIter((0),G__33344__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.second_pointer_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.second_pointer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.second_pointer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.second_pointer_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.second_pointer_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"SecondPointer",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),-1.5], null),new cljs.core.Keyword(null,"fill","fill",883462889),"red",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(((-0.25 + (props__$1.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194)) / (60))) * (2)) * examples.playground.PI),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0.85 * props__$1.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258))),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)], null)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33344){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33348 = cljs.core.keyword_identical_QMARK_;
var expr__33349 = k__17447__auto__;
if(cljs.core.truth_(pred__33348.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33349))){
return (new examples.playground.second_pointer_STAR_(G__33344,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33348.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33349))){
return (new examples.playground.second_pointer_STAR_(self__.component_id,G__33344,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33348.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33349))){
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,G__33344,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33348.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33349))){
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,G__33344,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33348.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33349))){
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33344,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33348.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33349))){
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33344,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33348.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33349))){
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33344,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33348.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33349))){
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33344,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33348.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33349))){
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33344,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33344),null));
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

examples.playground.second_pointer_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33344){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.second_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33344,self__.__extmap,self__.__hash));
});

examples.playground.second_pointer_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.second_pointer_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.second_pointer_STAR_.cljs$lang$type = true;

examples.playground.second_pointer_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/second-pointer*");
});

examples.playground.second_pointer_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/second-pointer*");
});

examples.playground.__GT_second_pointer_STAR_ = (function examples$playground$__GT_second_pointer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.second_pointer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_second_pointer_STAR_ = (function examples$playground$map__GT_second_pointer_STAR_(G__33346){
return (new examples.playground.second_pointer_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33346),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33346),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33346),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33346),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33346),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33346),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33346),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33346),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33346),null,cljs.core.dissoc.call(null,G__33346,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.second_pointer = (function examples$playground$second_pointer(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33357 = arguments.length;
var i__17884__auto___33358 = (0);
while(true){
if((i__17884__auto___33358 < len__17883__auto___33357)){
args__17890__auto__.push((arguments[i__17884__auto___33358]));

var G__33359 = (i__17884__auto___33358 + (1));
i__17884__auto___33358 = G__33359;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.second_pointer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.second_pointer.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_second_pointer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"SecondPointer",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),-1.5], null),new cljs.core.Keyword(null,"fill","fill",883462889),"red",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),-0.25,cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"seconds","seconds",-445266194)),(60))),(2),new cljs.core.Symbol(null,"PI","PI",-9477137,null)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),0.85,cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"radius","radius",-2073122258))),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33353){
var map__33354 = p__33353;
var map__33354__$1 = ((((!((map__33354 == null)))?((((map__33354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33354):map__33354);
var m_1 = cljs.core.get.call(null,map__33354__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"second-pointer","second-pointer",319326014,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.second_pointer.cljs$lang$maxFixedArity = (1);

examples.playground.second_pointer.cljs$lang$applyTo = (function (seq33351){
var G__33352 = cljs.core.first.call(null,seq33351);
var seq33351__$1 = cljs.core.next.call(null,seq33351);
return examples.playground.second_pointer.cljs$core$IFn$_invoke$arity$variadic(G__33352,seq33351__$1);
});
examples.playground.minute_pointer;


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
examples.playground.minute_pointer_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.minute_pointer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.minute_pointer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33361,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33363 = (((k33361 instanceof cljs.core.Keyword))?k33361.fqn:null);
switch (G__33363) {
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
return cljs.core.get.call(null,self__.__extmap,k33361,else__17442__auto__);

}
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.minute-pointer*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.minute_pointer_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33360){
var self__ = this;
var G__33360__$1 = this;
return (new cljs.core.RecordIter((0),G__33360__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.minute_pointer_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.minute_pointer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.minute_pointer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.minute_pointer_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.minute_pointer_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"MinutePointer",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-2)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"darkblue",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(((-0.25 + (props__$1.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394)) / (60))) * (2)) * examples.playground.PI),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(.7 * props__$1.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258))),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)], null)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33360){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33364 = cljs.core.keyword_identical_QMARK_;
var expr__33365 = k__17447__auto__;
if(cljs.core.truth_(pred__33364.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33365))){
return (new examples.playground.minute_pointer_STAR_(G__33360,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33364.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33365))){
return (new examples.playground.minute_pointer_STAR_(self__.component_id,G__33360,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33364.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33365))){
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,G__33360,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33364.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33365))){
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,G__33360,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33364.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33365))){
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33360,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33364.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33365))){
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33360,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33364.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33365))){
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33360,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33364.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33365))){
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33360,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33364.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33365))){
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33360,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33360),null));
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

examples.playground.minute_pointer_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33360){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.minute_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33360,self__.__extmap,self__.__hash));
});

examples.playground.minute_pointer_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.minute_pointer_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.minute_pointer_STAR_.cljs$lang$type = true;

examples.playground.minute_pointer_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/minute-pointer*");
});

examples.playground.minute_pointer_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/minute-pointer*");
});

examples.playground.__GT_minute_pointer_STAR_ = (function examples$playground$__GT_minute_pointer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.minute_pointer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_minute_pointer_STAR_ = (function examples$playground$map__GT_minute_pointer_STAR_(G__33362){
return (new examples.playground.minute_pointer_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33362),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33362),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33362),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33362),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33362),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33362),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33362),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33362),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33362),null,cljs.core.dissoc.call(null,G__33362,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.minute_pointer = (function examples$playground$minute_pointer(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33373 = arguments.length;
var i__17884__auto___33374 = (0);
while(true){
if((i__17884__auto___33374 < len__17883__auto___33373)){
args__17890__auto__.push((arguments[i__17884__auto___33374]));

var G__33375 = (i__17884__auto___33374 + (1));
i__17884__auto___33374 = G__33375;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.minute_pointer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.minute_pointer.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_minute_pointer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"MinutePointer",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-2)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"darkblue",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),-0.25,cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"minutes","minutes",1319166394)),(60))),(2),new cljs.core.Symbol(null,"PI","PI",-9477137,null)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,".7",".7",-542096371,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"radius","radius",-2073122258))),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33369){
var map__33370 = p__33369;
var map__33370__$1 = ((((!((map__33370 == null)))?((((map__33370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33370):map__33370);
var m_1 = cljs.core.get.call(null,map__33370__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"minute-pointer","minute-pointer",-163688499,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.minute_pointer.cljs$lang$maxFixedArity = (1);

examples.playground.minute_pointer.cljs$lang$applyTo = (function (seq33367){
var G__33368 = cljs.core.first.call(null,seq33367);
var seq33367__$1 = cljs.core.next.call(null,seq33367);
return examples.playground.minute_pointer.cljs$core$IFn$_invoke$arity$variadic(G__33368,seq33367__$1);
});
examples.playground.hour_pointer;


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
examples.playground.hour_pointer_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.hour_pointer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.hour_pointer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33377,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33379 = (((k33377 instanceof cljs.core.Keyword))?k33377.fqn:null);
switch (G__33379) {
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
return cljs.core.get.call(null,self__.__extmap,k33377,else__17442__auto__);

}
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.hour-pointer*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.hour_pointer_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33376){
var self__ = this;
var G__33376__$1 = this;
return (new cljs.core.RecordIter((0),G__33376__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.hour_pointer_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.hour_pointer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.hour_pointer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.hour_pointer_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.hour_pointer_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"HourPointer",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),-2.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(((-0.25 + (props__$1.call(null,new cljs.core.Keyword(null,"hours","hours",58380855)) / (12))) * examples.playground.PI) * (2)),new cljs.core.Keyword(null,"fill","fill",883462889),"darkblue",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(.5 * props__$1.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258))),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)], null)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33376){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33380 = cljs.core.keyword_identical_QMARK_;
var expr__33381 = k__17447__auto__;
if(cljs.core.truth_(pred__33380.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33381))){
return (new examples.playground.hour_pointer_STAR_(G__33376,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33380.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33381))){
return (new examples.playground.hour_pointer_STAR_(self__.component_id,G__33376,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33380.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33381))){
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,G__33376,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33380.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33381))){
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,G__33376,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33380.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33381))){
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33376,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33380.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33381))){
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33376,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33380.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33381))){
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33376,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33380.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33381))){
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33376,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33380.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33381))){
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33376,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33376),null));
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

examples.playground.hour_pointer_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33376){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.hour_pointer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33376,self__.__extmap,self__.__hash));
});

examples.playground.hour_pointer_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.hour_pointer_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.hour_pointer_STAR_.cljs$lang$type = true;

examples.playground.hour_pointer_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/hour-pointer*");
});

examples.playground.hour_pointer_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/hour-pointer*");
});

examples.playground.__GT_hour_pointer_STAR_ = (function examples$playground$__GT_hour_pointer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.hour_pointer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_hour_pointer_STAR_ = (function examples$playground$map__GT_hour_pointer_STAR_(G__33378){
return (new examples.playground.hour_pointer_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33378),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33378),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33378),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33378),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33378),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33378),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33378),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33378),null,cljs.core.dissoc.call(null,G__33378,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.hour_pointer = (function examples$playground$hour_pointer(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33389 = arguments.length;
var i__17884__auto___33390 = (0);
while(true){
if((i__17884__auto___33390 < len__17883__auto___33389)){
args__17890__auto__.push((arguments[i__17884__auto___33390]));

var G__33391 = (i__17884__auto___33390 + (1));
i__17884__auto___33390 = G__33391;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.hour_pointer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.hour_pointer.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_hour_pointer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"HourPointer",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),-2.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),-0.25,cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"hours","hours",58380855)),(12))),new cljs.core.Symbol(null,"PI","PI",-9477137,null),(2)),new cljs.core.Keyword(null,"fill","fill",883462889),"darkblue",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,".5",".5",-472390606,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"radius","radius",-2073122258))),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33385){
var map__33386 = p__33385;
var map__33386__$1 = ((((!((map__33386 == null)))?((((map__33386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33386):map__33386);
var m_1 = cljs.core.get.call(null,map__33386__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"hour-pointer","hour-pointer",165490669,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.hour_pointer.cljs$lang$maxFixedArity = (1);

examples.playground.hour_pointer.cljs$lang$applyTo = (function (seq33383){
var G__33384 = cljs.core.first.call(null,seq33383);
var seq33383__$1 = cljs.core.next.call(null,seq33383);
return examples.playground.hour_pointer.cljs$core$IFn$_invoke$arity$variadic(G__33384,seq33383__$1);
});
examples.playground.point_from_polar = (function examples$playground$point_from_polar(radius,angle){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(radius * Math.cos(angle)),new cljs.core.Keyword(null,"y","y",-1757859776),(radius * Math.sin(angle))], null);
});
examples.playground.hour_label;


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
examples.playground.hour_label_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.hour_label_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.hour_label_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.hour_label_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.hour_label_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33393,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33395 = (((k33393 instanceof cljs.core.Keyword))?k33393.fqn:null);
switch (G__33395) {
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
return cljs.core.get.call(null,self__.__extmap,k33393,else__17442__auto__);

}
});

examples.playground.hour_label_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.hour-label*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.hour_label_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.hour_label_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33392){
var self__ = this;
var G__33392__$1 = this;
return (new cljs.core.RecordIter((0),G__33392__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.hour_label_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.hour_label_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.hour_label_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.hour_label_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.hour_label_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.hour_label_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.hour_label_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.hour_label_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.hour_label_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(props__$1.call(null,new cljs.core.Keyword(null,"label","label",1718410804))),cljs.core.str("h")].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.utils.add_points.call(null,props__$1.call(null,new cljs.core.Keyword(null,"position","position",-2011731912)),examples.playground.point_from_polar.call(null,(props__$1.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258)) * .8),examples.playground.angle_for_hour.call(null,props__$1.call(null,new cljs.core.Keyword(null,"hour","hour",-555989214))))),new cljs.core.Keyword(null,"text-string","text-string",1520601822),props__$1.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Arial",new cljs.core.Keyword(null,"allow-input","allow-input",-865500976),false], null)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.hour_label_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.hour_label_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33392){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33396 = cljs.core.keyword_identical_QMARK_;
var expr__33397 = k__17447__auto__;
if(cljs.core.truth_(pred__33396.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33397))){
return (new examples.playground.hour_label_STAR_(G__33392,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33396.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33397))){
return (new examples.playground.hour_label_STAR_(self__.component_id,G__33392,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33396.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33397))){
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,G__33392,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33396.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33397))){
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,self__.parent,G__33392,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33396.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33397))){
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33392,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33396.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33397))){
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33392,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33396.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33397))){
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33392,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33396.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33397))){
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33392,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33396.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33397))){
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33392,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33392),null));
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

examples.playground.hour_label_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.hour_label_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33392){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.hour_label_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33392,self__.__extmap,self__.__hash));
});

examples.playground.hour_label_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.hour_label_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.hour_label_STAR_.cljs$lang$type = true;

examples.playground.hour_label_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/hour-label*");
});

examples.playground.hour_label_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/hour-label*");
});

examples.playground.__GT_hour_label_STAR_ = (function examples$playground$__GT_hour_label_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.hour_label_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_hour_label_STAR_ = (function examples$playground$map__GT_hour_label_STAR_(G__33394){
return (new examples.playground.hour_label_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33394),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33394),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33394),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33394),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33394),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33394),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33394),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33394),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33394),null,cljs.core.dissoc.call(null,G__33394,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.hour_label = (function examples$playground$hour_label(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33405 = arguments.length;
var i__17884__auto___33406 = (0);
while(true){
if((i__17884__auto___33406 < len__17883__auto___33405)){
args__17890__auto__.push((arguments[i__17884__auto___33406]));

var G__33407 = (i__17884__auto___33406 + (1));
i__17884__auto___33406 = G__33407;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.hour_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.hour_label.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_hour_label_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"label","label",1718410804)),"h"),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.list(new cljs.core.Symbol(null,"point-from-polar","point-from-polar",-1959579954,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"radius","radius",-2073122258)),new cljs.core.Symbol(null,".8",".8",499852180,null)),cljs.core.list(new cljs.core.Symbol(null,"angle-for-hour","angle-for-hour",537291422,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"hour","hour",-555989214))))),new cljs.core.Keyword(null,"text-string","text-string",1520601822),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"label","label",1718410804)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Arial",new cljs.core.Keyword(null,"allow-input","allow-input",-865500976),false], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33401){
var map__33402 = p__33401;
var map__33402__$1 = ((((!((map__33402 == null)))?((((map__33402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33402):map__33402);
var m_1 = cljs.core.get.call(null,map__33402__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"hour-label","hour-label",-1689600086,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.hour_label.cljs$lang$maxFixedArity = (1);

examples.playground.hour_label.cljs$lang$applyTo = (function (seq33399){
var G__33400 = cljs.core.first.call(null,seq33399);
var seq33399__$1 = cljs.core.next.call(null,seq33399);
return examples.playground.hour_label.cljs$core$IFn$_invoke$arity$variadic(G__33400,seq33399__$1);
});
examples.playground.clock;


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
examples.playground.clock_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.clock_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.clock_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.clock_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.clock_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33409,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33411 = (((k33409 instanceof cljs.core.Keyword))?k33409.fqn:null);
switch (G__33411) {
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
return cljs.core.get.call(null,self__.__extmap,k33409,else__17442__auto__);

}
});

examples.playground.clock_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.clock*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.clock_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.clock_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33408){
var self__ = this;
var G__33408__$1 = this;
return (new cljs.core.RecordIter((0),G__33408__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.clock_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.clock_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.clock_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.clock_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.clock_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.clock_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.clock_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.clock_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.clock_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (p__33412,p__33413,_,render_ctx__30602__auto__){
var self__ = this;
var map__33414 = p__33412;
var map__33414__$1 = ((((!((map__33414 == null)))?((((map__33414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33414):map__33414);
var self = map__33414__$1;
var local_state__$1 = cljs.core.get.call(null,map__33414__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__33415 = p__33413;
var map__33415__$1 = ((((!((map__33415 == null)))?((((map__33415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33415):map__33415);
var id = cljs.core.get.call(null,map__33415__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var extent = cljs.core.get.call(null,map__33415__$1,new cljs.core.Keyword(null,"extent","extent",-186399820));
var position = cljs.core.get.call(null,map__33415__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var map__33418 = this;
var map__33418__$1 = ((((!((map__33418 == null)))?((((map__33418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33418):map__33418);
var self__$1 = map__33418__$1;
var local_state__$2 = cljs.core.get.call(null,map__33418__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__33420 = local_state__$2;
var map__33420__$1 = ((((!((map__33420 == null)))?((((map__33420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33420):map__33420);
var time = cljs.core.get.call(null,map__33420__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var radius = (extent.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) / (2));
var map__33421 = extent;
var map__33421__$1 = ((((!((map__33421 == null)))?((((map__33421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33421):map__33421);
var x = cljs.core.get.call(null,map__33421__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__33421__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
var ext = (((x > y))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),x,new cljs.core.Keyword(null,"x","x",2099068185),x], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"x","x",2099068185),y], null));
var direction = (cljs.core.truth_(new cljs.core.Keyword(null,"clockwise?","clockwise?",282638765).cljs$core$IFn$_invoke$arity$1(local_state__$2))?(-1):(1));
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"extent","extent",-186399820),extent,new cljs.core.Keyword(null,"fill","fill",883462889),"lightgrey"], null),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0.1 * x),new cljs.core.Keyword(null,"y","y",-1757859776),(0.1 * y)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"backwards?",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2)),cljs.core.assoc.call(null,transmorphic.core.checkbox.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__33420,map__33420__$1,time,radius,map__33421,map__33421__$1,x,y,offset,ext,direction,map__33418,map__33418__$1,self__$1,local_state__$2,map__33414,map__33414__$1,self,local_state__$1,map__33415,map__33415__$1,id,extent,position){
return (function (___$1){
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clockwise?","clockwise?",282638765),cljs.core.not.call(null,new cljs.core.Keyword(null,"clockwise?","clockwise?",282638765).cljs$core$IFn$_invoke$arity$1(local_state__$2))], null));
});})(map__33420,map__33420__$1,time,radius,map__33421,map__33421__$1,x,y,offset,ext,direction,map__33418,map__33418__$1,self__$1,local_state__$2,map__33414,map__33414__$1,self,local_state__$1,map__33415,map__33415__$1,id,extent,position))
,new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Keyword(null,"clockwise?","clockwise?",282638765).cljs$core$IFn$_invoke$arity$1(local_state__$2),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((0.0 * (5)) * x),new cljs.core.Keyword(null,"y","y",-1757859776),(0.1 * y)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(3)),cljs.core.map.call(null,((function (map__33420,map__33420__$1,time,radius,map__33421,map__33421__$1,x,y,offset,ext,direction,map__33418,map__33418__$1,self__$1,local_state__$2,map__33414,map__33414__$1,self,local_state__$1,map__33415,map__33415__$1,id,extent,position){
return (function (hour){
return cljs.core.assoc.call(null,examples.playground.hour_label.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(hour),cljs.core.str("h")].join(''),new cljs.core.Keyword(null,"label","label",1718410804),hour,new cljs.core.Keyword(null,"hour","hour",-555989214),hour,new cljs.core.Keyword(null,"position","position",-2011731912),offset,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(5));
});})(map__33420,map__33420__$1,time,radius,map__33421,map__33421__$1,x,y,offset,ext,direction,map__33418,map__33418__$1,self__$1,local_state__$2,map__33414,map__33414__$1,self,local_state__$1,map__33415,map__33415__$1,id,extent,position))
,cljs.core.range.call(null,(1),(13))),cljs.core.assoc.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"HourPointer",new cljs.core.Keyword(null,"position","position",-2011731912),offset,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(((direction * (-0.25 + (new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(time) / (12)))) * examples.playground.PI) * (2)),new cljs.core.Keyword(null,"fill","fill",883462889),"darkblue",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(.5 * radius),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(6)),cljs.core.assoc.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"MinutePointer",new cljs.core.Keyword(null,"position","position",-2011731912),offset,new cljs.core.Keyword(null,"fill","fill",883462889),"darkblue",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(((direction * (-0.25 + (new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(time) / (60)))) * (2)) * examples.playground.PI),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(.7 * radius),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(7)),cljs.core.assoc.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"SecondPointer",new cljs.core.Keyword(null,"position","position",-2011731912),offset,new cljs.core.Keyword(null,"fill","fill",883462889),"red",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(((direction * (-0.25 + (new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(time) / (60)))) * (2)) * examples.playground.PI),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0.85 * radius),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(8))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.clock_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.clock_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33408){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33424 = cljs.core.keyword_identical_QMARK_;
var expr__33425 = k__17447__auto__;
if(cljs.core.truth_(pred__33424.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33425))){
return (new examples.playground.clock_STAR_(G__33408,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33424.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33425))){
return (new examples.playground.clock_STAR_(self__.component_id,G__33408,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33424.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33425))){
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,G__33408,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33424.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33425))){
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,self__.parent,G__33408,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33424.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33425))){
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33408,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33424.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33425))){
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33408,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33424.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33425))){
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33408,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33424.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33425))){
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33408,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33424.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33425))){
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33408,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33408),null));
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

examples.playground.clock_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.clock_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33408){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33408,self__.__extmap,self__.__hash));
});

examples.playground.clock_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.clock_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.clock_STAR_.cljs$lang$type = true;

examples.playground.clock_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/clock*");
});

examples.playground.clock_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/clock*");
});

examples.playground.__GT_clock_STAR_ = (function examples$playground$__GT_clock_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.clock_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_clock_STAR_ = (function examples$playground$map__GT_clock_STAR_(G__33410){
return (new examples.playground.clock_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33410),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33410),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33410),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33410),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33410),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33410),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33410),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33410),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33410),null,cljs.core.dissoc.call(null,G__33410,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.clock = (function examples$playground$clock(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33436 = arguments.length;
var i__17884__auto___33437 = (0);
while(true){
if((i__17884__auto___33437 < len__17883__auto___33436)){
args__17890__auto__.push((arguments[i__17884__auto___33437]));

var G__33438 = (i__17884__auto___33437 + (1));
i__17884__auto___33437 = G__33438;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.clock.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.clock.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_clock_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.PersistentHashMap.fromArrays([(0),new cljs.core.Keyword(null,"active?","active?",459499776),(7),(1),(4),(6),(3),(2),(5),(8)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33429){
var map__33430 = p__33429;
var map__33430__$1 = ((((!((map__33430 == null)))?((((map__33430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33430):map__33430);
var m_1 = cljs.core.get.call(null,map__33430__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extent","extent",1454131707,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"position","position",-371200385,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"time","time",-1268547887,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"radius","radius",-432590731,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extent","extent",1454131707,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extent","extent",1454131707,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ext","ext",643566986,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",1181717262,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,">",">",1085014381,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"direction","direction",1007172132,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",1181717262,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clockwise?","clockwise?",282638765)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),false,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"MinutePointer",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Keyword(null,"fill","fill",883462889),"darkblue",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),-0.25,cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Keyword(null,"minutes","minutes",1319166394)),(60))),(2),new cljs.core.Symbol(null,"PI","PI",-9477137,null)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,".7",".7",-542096371,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null)),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"position","position",-371200385,null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Symbol(null,"extent","extent",1454131707,null),new cljs.core.Keyword(null,"fill","fill",883462889),"lightgrey"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(6),(7),(8)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33432){
var map__33433 = p__33432;
var map__33433__$1 = ((((!((map__33433 == null)))?((((map__33433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33433):map__33433);
var m_5 = cljs.core.get.call(null,map__33433__$1,new cljs.core.Keyword(null,"m_5","m_5",-1278638212));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map","map",-1282745308,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hour","hour",1084542313,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_5], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"range","range",-1014743483,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"HourPointer",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),-0.25,cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Keyword(null,"hours","hours",58380855)),(12))),new cljs.core.Symbol(null,"PI","PI",-9477137,null),(2)),new cljs.core.Keyword(null,"fill","fill",883462889),"darkblue",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,".5",".5",-472390606,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null)),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"checkbox","checkbox",-1041820114,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clockwise?","clockwise?",282638765),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Keyword(null,"clockwise?","clockwise?",282638765),new cljs.core.Symbol(null,"not","not",1044554643,null))], null))),new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Keyword(null,"clockwise?","clockwise?",282638765)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),0.0,(5),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),0.1,new cljs.core.Symbol(null,"y","y",-117328249,null))], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),0.1,new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),0.1,new cljs.core.Symbol(null,"y","y",-117328249,null))], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"backwards?",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"hour-label","hour-label",-1689600086,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"hour","hour",1084542313,null),"h"),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Symbol(null,"hour","hour",1084542313,null),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Symbol(null,"hour","hour",1084542313,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"SecondPointer",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Keyword(null,"fill","fill",883462889),"red",new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),-0.25,cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Keyword(null,"seconds","seconds",-445266194)),(60))),(2),new cljs.core.Symbol(null,"PI","PI",-9477137,null)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),0.85,new cljs.core.Symbol(null,"radius","radius",-432590731,null)),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null)]),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"clock","clock",746230400,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.clock.cljs$lang$maxFixedArity = (1);

examples.playground.clock.cljs$lang$applyTo = (function (seq33427){
var G__33428 = cljs.core.first.call(null,seq33427);
var seq33427__$1 = cljs.core.next.call(null,seq33427);
return examples.playground.clock.cljs$core$IFn$_invoke$arity$variadic(G__33428,seq33427__$1);
});
examples.playground.interaction_watcher;


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
examples.playground.interaction_watcher_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.interaction_watcher_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.interaction_watcher_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33440,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33442 = (((k33440 instanceof cljs.core.Keyword))?k33440.fqn:null);
switch (G__33442) {
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
return cljs.core.get.call(null,self__.__extmap,k33440,else__17442__auto__);

}
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.interaction-watcher*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33439){
var self__ = this;
var G__33439__$1 = this;
return (new cljs.core.RecordIter((0),G__33439__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.interaction_watcher_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.interaction_watcher_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.interaction_watcher_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.interaction_watcher_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,model,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_component.call(null,transmorphic.tools.window.window.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"extent","extent",-186399820),model.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820)),new cljs.core.Keyword(null,"position","position",-2011731912),model.call(null,new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.Keyword(null,"title","title",636505583),"User Interactions",new cljs.core.Keyword(null,"scrollable?","scrollable?",1366456374),true,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),((function (self__$1){
return (function (new_extent){
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extent","extent",-186399820),new_extent], null));
});})(self__$1))
,new cljs.core.Keyword(null,"on-move","on-move",-1779179710),((function (self__$1){
return (function (new_pos){
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new_pos], null));
});})(self__$1))
,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),(function (){var temp__4425__auto__ = (function (){var and__16813__auto__ = cljs.core.deref.call(null,transmorphic.event.meta_focus);
if(cljs.core.truth_(and__16813__auto__)){
return transmorphic.manipulation.changes_on_morph.call(null,cljs.core.deref.call(null,transmorphic.event.meta_focus));
} else {
return and__16813__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var txs__$1 = temp__4425__auto__;
var hl = ((function (txs__$1,temp__4425__auto__,self__$1){
return (function (v){
return transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-string","text-string",1520601822),v,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null));
});})(txs__$1,temp__4425__auto__,self__$1))
;
var entry = ((function (hl,txs__$1,temp__4425__auto__,self__$1){
return (function (v){
return transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"grey",new cljs.core.Keyword(null,"text-string","text-string",1520601822),v,new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null));
});})(hl,txs__$1,temp__4425__auto__,self__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [transmorphic.core.ace.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"id","id",-1388402092),"model-viewer",new cljs.core.Keyword(null,"value","value",305978217),transmorphic.symbolic.format_code.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(transmorphic.morph.$morph.call(null,new cljs.core.Keyword(null,"meta-focus","meta-focus",1050560127))))),new cljs.core.Keyword(null,"line-numbers?","line-numbers?",1919907771),false,new cljs.core.Keyword(null,"edited?","edited?",1327972333),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null),new cljs.core.Keyword(null,"model-viewer","model-viewer",1032790307)),transmorphic.core.listmorph.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"structure",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(210)], null)], null),hl.call(null,"Property Changes:"),cljs.core.map.call(null,((function (hl,entry,txs__$1,temp__4425__auto__,self__$1){
return (function (p__33443){
var vec__33444 = p__33443;
var prop = cljs.core.nth.call(null,vec__33444,(0),null);
var value = cljs.core.nth.call(null,vec__33444,(1),null);
return entry.call(null,[cljs.core.str(prop),cljs.core.str(" "),cljs.core.str(value)].join(''));
});})(hl,entry,txs__$1,temp__4425__auto__,self__$1))
,new cljs.core.Keyword(null,"prop-changes","prop-changes",1146560598).cljs$core$IFn$_invoke$arity$1(txs__$1)),hl.call(null,"Structural Changes:"),cljs.core.map.call(null,((function (hl,entry,txs__$1,temp__4425__auto__,self__$1){
return (function (tx){
return entry.call(null,[cljs.core.str(tx.call(null,new cljs.core.Keyword(null,"op","op",-1882987955))),cljs.core.str(" "),cljs.core.str(tx.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473)))].join(''));
});})(hl,entry,txs__$1,temp__4425__auto__,self__$1))
,new cljs.core.Keyword(null,"structure","structure",1563832083).cljs$core$IFn$_invoke$arity$1(txs__$1)))], null);
} else {
return null;
}
})()], null)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33439){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33445 = cljs.core.keyword_identical_QMARK_;
var expr__33446 = k__17447__auto__;
if(cljs.core.truth_(pred__33445.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33446))){
return (new examples.playground.interaction_watcher_STAR_(G__33439,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33445.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33446))){
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,G__33439,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33445.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33446))){
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,G__33439,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33445.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33446))){
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,self__.parent,G__33439,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33445.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33446))){
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33439,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33445.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33446))){
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33439,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33445.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33446))){
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33439,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33445.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33446))){
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33439,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33445.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33446))){
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33439,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33439),null));
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

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33439){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.interaction_watcher_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33439,self__.__extmap,self__.__hash));
});

examples.playground.interaction_watcher_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.interaction_watcher_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.interaction_watcher_STAR_.cljs$lang$type = true;

examples.playground.interaction_watcher_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/interaction-watcher*");
});

examples.playground.interaction_watcher_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/interaction-watcher*");
});

examples.playground.__GT_interaction_watcher_STAR_ = (function examples$playground$__GT_interaction_watcher_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.interaction_watcher_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_interaction_watcher_STAR_ = (function examples$playground$map__GT_interaction_watcher_STAR_(G__33441){
return (new examples.playground.interaction_watcher_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33441),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33441),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33441),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33441),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33441),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33441),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33441),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33441),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33441),null,cljs.core.dissoc.call(null,G__33441,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.interaction_watcher = (function examples$playground$interaction_watcher(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33454 = arguments.length;
var i__17884__auto___33455 = (0);
while(true){
if((i__17884__auto___33455 < len__17883__auto___33454)){
args__17890__auto__.push((arguments[i__17884__auto___33455]));

var G__33456 = (i__17884__auto___33455 + (1));
i__17884__auto___33455 = G__33456;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.interaction_watcher.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.interaction_watcher.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_interaction_watcher_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"window","window",-1929916235,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"extent","extent",-186399820)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.Keyword(null,"title","title",636505583),"User Interactions",new cljs.core.Keyword(null,"scrollable?","scrollable?",1366456374),true,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-extent","new-extent",288815376,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Symbol(null,"new-extent","new-extent",288815376,null)], null))),new cljs.core.Keyword(null,"on-move","on-move",-1779179710),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null)], null))),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"txs","txs",-598397391,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"meta-focus","meta-focus",-1603875642,null)),cljs.core.list(new cljs.core.Symbol(null,"changes-on-morph","changes-on-morph",-1689685504,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"meta-focus","meta-focus",-1603875642,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hl","hl",523727930,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-string","text-string",1520601822),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null))),new cljs.core.Symbol(null,"entry","entry",2145700350,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"grey",new cljs.core.Keyword(null,"text-string","text-string",1520601822),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ace","ace",-1015690959,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"id","id",-1388402092),"model-viewer",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"format-code","format-code",952320057,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"$morph","$morph",1827866470,null),new cljs.core.Keyword(null,"meta-focus","meta-focus",1050560127)),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"value","value",305978217))),new cljs.core.Keyword(null,"line-numbers?","line-numbers?",1919907771),false,new cljs.core.Keyword(null,"edited?","edited?",1327972333),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),false),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null),new cljs.core.Keyword(null,"model-viewer","model-viewer",1032790307)),cljs.core.list(new cljs.core.Symbol(null,"listmorph","listmorph",-1017316297,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"structure",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(210)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"hl","hl",523727930,null),"Property Changes:"),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prop","prop",1125363195,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"entry","entry",2145700350,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"prop","prop",1125363195,null)," ",new cljs.core.Symbol(null,"value","value",1946509744,null)))),cljs.core.list(new cljs.core.Keyword(null,"prop-changes","prop-changes",1146560598),new cljs.core.Symbol(null,"txs","txs",-598397391,null))),cljs.core.list(new cljs.core.Symbol(null,"hl","hl",523727930,null),"Structural Changes:"),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tx","tx",2107161945,null)], null),cljs.core.list(new cljs.core.Symbol(null,"entry","entry",2145700350,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Keyword(null,"op","op",-1882987955))," ",cljs.core.list(new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Keyword(null,"idx","idx",1053688473))))),cljs.core.list(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Symbol(null,"txs","txs",-598397391,null))))], null)))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33450){
var map__33451 = p__33450;
var map__33451__$1 = ((((!((map__33451 == null)))?((((map__33451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33451):map__33451);
var m_1 = cljs.core.get.call(null,map__33451__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"interaction-watcher","interaction-watcher",2121924715,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.interaction_watcher.cljs$lang$maxFixedArity = (1);

examples.playground.interaction_watcher.cljs$lang$applyTo = (function (seq33448){
var G__33449 = cljs.core.first.call(null,seq33448);
var seq33448__$1 = cljs.core.next.call(null,seq33448);
return examples.playground.interaction_watcher.cljs$core$IFn$_invoke$arity$variadic(G__33449,seq33448__$1);
});
examples.playground.scrubber;


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
examples.playground.scrubber_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.scrubber_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.scrubber_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.scrubber_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.scrubber_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33458,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33460 = (((k33458 instanceof cljs.core.Keyword))?k33458.fqn:null);
switch (G__33460) {
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
return cljs.core.get.call(null,self__.__extmap,k33458,else__17442__auto__);

}
});

examples.playground.scrubber_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.scrubber*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.scrubber_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.scrubber_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33457){
var self__ = this;
var G__33457__$1 = this;
return (new cljs.core.RecordIter((0),G__33457__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.scrubber_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.scrubber_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.scrubber_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.scrubber_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.scrubber_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.scrubber_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.scrubber_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.scrubber_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.scrubber_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,m,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
var k = (function (){var or__16825__auto__ = m.call(null,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"extent","extent",-186399820);
}
})();
var position = m.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220));
var model = m.call(null,new cljs.core.Keyword(null,"model","model",331153215));
var transform = m.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764));
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"id","id",-1388402092),m.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),((function (k,position,model,transform,self__$1){
return (function (start_pos){
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev-cursor","prev-cursor",-1264191409),start_pos], null));
});})(k,position,model,transform,self__$1))
,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),((function (k,position,model,transform,self__$1){
return (function (new_cursor){
var map__33461 = transmorphic.utils.delta.call(null,model.call(null,new cljs.core.Keyword(null,"prev-cursor","prev-cursor",-1264191409)),new_cursor);
var map__33461__$1 = ((((!((map__33461 == null)))?((((map__33461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33461):map__33461);
var dx = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return transmorphic.core.rerender_BANG_.call(null,self__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"prev-cursor","prev-cursor",-1264191409),new_cursor,k,(function (){var or__16825__auto__ = (cljs.core.truth_(transform)?transform.call(null,transmorphic.utils.delta,cljs.core.get.call(null,model,k)):null);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return transmorphic.utils.add_points.call(null,cljs.core.get.call(null,model,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(- dx),new cljs.core.Keyword(null,"y","y",-1757859776),(- dy)], null));
}
})()], true, false));
});})(k,position,model,transform,self__$1))
,new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.utils.add_points.call(null,position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-25),new cljs.core.Keyword(null,"y","y",-1757859776),(-25)], null)),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, ["cursor","nwse-resize"], null)], null)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.scrubber_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.scrubber_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33457){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33463 = cljs.core.keyword_identical_QMARK_;
var expr__33464 = k__17447__auto__;
if(cljs.core.truth_(pred__33463.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33464))){
return (new examples.playground.scrubber_STAR_(G__33457,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33463.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33464))){
return (new examples.playground.scrubber_STAR_(self__.component_id,G__33457,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33463.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33464))){
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,G__33457,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33463.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33464))){
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,self__.parent,G__33457,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33463.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33464))){
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33457,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33463.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33464))){
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33457,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33463.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33464))){
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33457,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33463.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33464))){
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33457,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33463.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33464))){
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33457,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33457),null));
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

examples.playground.scrubber_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.scrubber_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33457){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.scrubber_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33457,self__.__extmap,self__.__hash));
});

examples.playground.scrubber_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.scrubber_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.scrubber_STAR_.cljs$lang$type = true;

examples.playground.scrubber_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/scrubber*");
});

examples.playground.scrubber_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/scrubber*");
});

examples.playground.__GT_scrubber_STAR_ = (function examples$playground$__GT_scrubber_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.scrubber_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_scrubber_STAR_ = (function examples$playground$map__GT_scrubber_STAR_(G__33459){
return (new examples.playground.scrubber_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33459),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33459),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33459),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33459),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33459),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33459),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33459),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33459),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33459),null,cljs.core.dissoc.call(null,G__33459,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.scrubber = (function examples$playground$scrubber(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33472 = arguments.length;
var i__17884__auto___33473 = (0);
while(true){
if((i__17884__auto___33473 < len__17883__auto___33472)){
args__17890__auto__.push((arguments[i__17884__auto___33473]));

var G__33474 = (i__17884__auto___33473 + (1));
i__17884__auto___33473 = G__33474;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.scrubber.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.scrubber.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_scrubber_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev-cursor","prev-cursor",-1264191409),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null)], null))),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-cursor","new-cursor",-16418203,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"dx","dx",1258734795,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"dy","dy",-934888526,null),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.list(new cljs.core.Symbol(null,"delta","delta",1749471484,null),cljs.core.list(new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"prev-cursor","prev-cursor",-1264191409)),new cljs.core.Symbol(null,"new-cursor","new-cursor",-16418203,null))], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prev-cursor","prev-cursor",-1264191409),new cljs.core.Symbol(null,"new-cursor","new-cursor",-16418203,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null),cljs.core.list(new cljs.core.Symbol(null,"transform","transform",-1273134005,null),new cljs.core.Symbol(null,"delta","delta",1749471484,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Symbol(null,"k","k",-505765866,null)))),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Symbol(null,"k","k",-505765866,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"dx","dx",1258734795,null)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"dy","dy",-934888526,null))], null)))], null)))),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),new cljs.core.Symbol(null,"position","position",-371200385,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-25),new cljs.core.Keyword(null,"y","y",-1757859776),(-25)], null)),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, ["cursor","nwse-resize"], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33468){
var map__33469 = p__33468;
var map__33469__$1 = ((((!((map__33469 == null)))?((((map__33469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33469):map__33469);
var m_1 = cljs.core.get.call(null,map__33469__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extent","extent",-186399820)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"position","position",-371200385,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform","transform",-1273134005,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",1381301764)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"scrubber","scrubber",-1078239385,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.scrubber.cljs$lang$maxFixedArity = (1);

examples.playground.scrubber.cljs$lang$applyTo = (function (seq33466){
var G__33467 = cljs.core.first.call(null,seq33466);
var seq33466__$1 = cljs.core.next.call(null,seq33466);
return examples.playground.scrubber.cljs$core$IFn$_invoke$arity$variadic(G__33467,seq33466__$1);
});
examples.playground.kitchen;


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
examples.playground.kitchen_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.kitchen_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.kitchen_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.kitchen_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.kitchen_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33476,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33478 = (((k33476 instanceof cljs.core.Keyword))?k33476.fqn:null);
switch (G__33478) {
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
return cljs.core.get.call(null,self__.__extmap,k33476,else__17442__auto__);

}
});

examples.playground.kitchen_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.kitchen_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (_,___$1,___$2,render_ctx__30602__auto__){
var self__ = this;
var ___$3 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"kitchen-morph",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null)], null),cljs.core.assoc.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"ellipse",new cljs.core.Keyword(null,"wants-hand-focus?","wants-hand-focus?",1624747765),true,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"dodgerblue",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"blue"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2)),cljs.core.assoc.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"rectangle",new cljs.core.Keyword(null,"wants-hand-focus?","wants-hand-focus?",1624747765),true,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"lightgrey",new cljs.core.Keyword(null,"drop-shadow?","drop-shadow?",-760899900),true,new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),cljs.core.assoc.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(190),new cljs.core.Keyword(null,"y","y",-1757859776),(35)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"dodgerblue"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(4)),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"commit changes...",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"white",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(5)),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"publish as new...",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"grey",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(6)),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(70)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"pull changes...",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"grey",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(7))),new cljs.core.Keyword(null,"source-location","source-location",17618786),(3)),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"url","url",276297046),"http://localhost:9001/core/media/halos/morphmenu.svg"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(8)),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"text",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(700),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"Text",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"allow-input","allow-input",-865500976),false,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(17),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(9)),cljs.core.assoc.call(null,transmorphic.core.checkbox.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$3){
return (function (___$4){
return cljs.core.swap_BANG_.call(null,transmorphic.event.stepping_QMARK_,cljs.core.not);
});})(___$3))
,new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.deref.call(null,transmorphic.event.stepping_QMARK_),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(10)),cljs.core.assoc.call(null,examples.playground.clock.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"Clock",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(11)),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"url","url",276297046),"https://scontent-fra3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12816774_1978817152343619_1541514348_n.jpg?ig_cache_key=MTE5OTkxOTI4NDUzNzkxOTIyOA%3D%3D.2",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"wants-hand-focus?","wants-hand-focus?",1624747765),true,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374),true,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),0.5,new cljs.core.Keyword(null,"id","id",-1388402092),"coffee"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(12))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.kitchen_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.kitchen*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.kitchen_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.kitchen_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33475){
var self__ = this;
var G__33475__$1 = this;
return (new cljs.core.RecordIter((0),G__33475__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.kitchen_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.kitchen_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.kitchen_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.kitchen_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.kitchen_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.kitchen_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.kitchen_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.kitchen_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.kitchen_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33475){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33479 = cljs.core.keyword_identical_QMARK_;
var expr__33480 = k__17447__auto__;
if(cljs.core.truth_(pred__33479.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33480))){
return (new examples.playground.kitchen_STAR_(G__33475,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33479.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33480))){
return (new examples.playground.kitchen_STAR_(self__.component_id,G__33475,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33479.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33480))){
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,G__33475,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33479.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33480))){
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,self__.parent,G__33475,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33479.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33480))){
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33475,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33479.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33480))){
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33475,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33479.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33480))){
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33475,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33479.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33480))){
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33475,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33479.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33480))){
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33475,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33475),null));
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

examples.playground.kitchen_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.kitchen_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33475){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.kitchen_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33475,self__.__extmap,self__.__hash));
});

examples.playground.kitchen_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.kitchen_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.kitchen_STAR_.cljs$lang$type = true;

examples.playground.kitchen_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/kitchen*");
});

examples.playground.kitchen_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/kitchen*");
});

examples.playground.__GT_kitchen_STAR_ = (function examples$playground$__GT_kitchen_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.kitchen_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_kitchen_STAR_ = (function examples$playground$map__GT_kitchen_STAR_(G__33477){
return (new examples.playground.kitchen_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33477),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33477),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33477),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33477),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33477),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33477),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33477),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33477),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33477),null,cljs.core.dissoc.call(null,G__33477,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.kitchen = (function examples$playground$kitchen(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33488 = arguments.length;
var i__17884__auto___33489 = (0);
while(true){
if((i__17884__auto___33489 < len__17883__auto___33488)){
args__17890__auto__.push((arguments[i__17884__auto___33489]));

var G__33490 = (i__17884__auto___33489 + (1));
i__17884__auto___33489 = G__33490;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.kitchen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.kitchen.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_kitchen_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.PersistentHashMap.fromArrays([(0),new cljs.core.Keyword(null,"active?","active?",459499776),(7),(1),(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33484){
var map__33485 = p__33484;
var map__33485__$1 = ((((!((map__33485 == null)))?((((map__33485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33485):map__33485);
var m_1 = cljs.core.get.call(null,map__33485__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),false,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(70)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"pull changes...",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"grey",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"kitchen-morph",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(8),(9),(10),(11),(12)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(190),new cljs.core.Keyword(null,"y","y",-1757859776),(35)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"dodgerblue"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"publish as new...",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"grey",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"rectangle",new cljs.core.Keyword(null,"wants-hand-focus?","wants-hand-focus?",1624747765),true,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"lightgrey",new cljs.core.Keyword(null,"drop-shadow?","drop-shadow?",-760899900),true,new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6),(7)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"url","url",276297046),"https://scontent-fra3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12816774_1978817152343619_1541514348_n.jpg?ig_cache_key=MTE5OTkxOTI4NDUzNzkxOTIyOA%3D%3D.2",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"wants-hand-focus?","wants-hand-focus?",1624747765),true,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374),true,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),0.5,new cljs.core.Keyword(null,"id","id",-1388402092),"coffee"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"ellipse",new cljs.core.Keyword(null,"wants-hand-focus?","wants-hand-focus?",1624747765),true,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"dodgerblue",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"blue"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"clock","clock",746230400,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"Clock",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"text",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(700),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"Text",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"allow-input","allow-input",-865500976),false,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(17),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(40)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"commit changes...",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"white",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"checkbox","checkbox",-1041820114,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol("transmorphic.event","stepping?","transmorphic.event/stepping?",1460130281,null),new cljs.core.Symbol(null,"not","not",1044554643,null))),new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("transmorphic.event","stepping?","transmorphic.event/stepping?",1460130281,null)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"url","url",276297046),"http://localhost:9001/core/media/halos/morphmenu.svg"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null)]),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"kitchen","kitchen",506402285,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.kitchen.cljs$lang$maxFixedArity = (1);

examples.playground.kitchen.cljs$lang$applyTo = (function (seq33482){
var G__33483 = cljs.core.first.call(null,seq33482);
var seq33482__$1 = cljs.core.next.call(null,seq33482);
return examples.playground.kitchen.cljs$core$IFn$_invoke$arity$variadic(G__33483,seq33482__$1);
});
examples.playground.digital_clock;


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
examples.playground.digital_clock_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.digital_clock_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.digital_clock_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33492,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33494 = (((k33492 instanceof cljs.core.Keyword))?k33492.fqn:null);
switch (G__33494) {
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
return cljs.core.get.call(null,self__.__extmap,k33492,else__17442__auto__);

}
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.digital-clock*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.digital_clock_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33491){
var self__ = this;
var G__33491__$1 = this;
return (new cljs.core.RecordIter((0),G__33491__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.digital_clock_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.digital_clock_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.digital_clock_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.digital_clock_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.digital_clock_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,submorphs__$1,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(42),new cljs.core.Keyword(null,"y","y",-1757859776),(42)], null),new cljs.core.Keyword(null,"url","url",276297046),"kermit.png",new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (self__$1){
return (function (e){
return cljs.core.prn.call(null,"Mouse entered!");
});})(self__$1))
], null),cljs.core.assoc.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"green",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2)),cljs.core.map.call(null,((function (self__$1){
return (function (i){
return cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(i)].join(''),new cljs.core.Keyword(null,"value","value",305978217),"Hello World!",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(i * (10)),new cljs.core.Keyword(null,"y","y",-1757859776),(i * (10))], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(4));
});})(self__$1))
,cljs.core.range.call(null,(10))),cljs.core.assoc.call(null,examples.playground.clock.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"Clock",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(5))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33491){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33495 = cljs.core.keyword_identical_QMARK_;
var expr__33496 = k__17447__auto__;
if(cljs.core.truth_(pred__33495.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33496))){
return (new examples.playground.digital_clock_STAR_(G__33491,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33495.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33496))){
return (new examples.playground.digital_clock_STAR_(self__.component_id,G__33491,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33495.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33496))){
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,G__33491,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33495.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33496))){
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,self__.parent,G__33491,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33495.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33496))){
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33491,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33495.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33496))){
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33491,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33495.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33496))){
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33491,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33495.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33496))){
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33491,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33495.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33496))){
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33491,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33491),null));
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

examples.playground.digital_clock_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33491){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.digital_clock_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33491,self__.__extmap,self__.__hash));
});

examples.playground.digital_clock_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.digital_clock_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.digital_clock_STAR_.cljs$lang$type = true;

examples.playground.digital_clock_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/digital-clock*");
});

examples.playground.digital_clock_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/digital-clock*");
});

examples.playground.__GT_digital_clock_STAR_ = (function examples$playground$__GT_digital_clock_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.digital_clock_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_digital_clock_STAR_ = (function examples$playground$map__GT_digital_clock_STAR_(G__33493){
return (new examples.playground.digital_clock_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33493),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33493),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33493),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33493),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33493),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33493),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33493),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33493),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33493),null,cljs.core.dissoc.call(null,G__33493,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.digital_clock = (function examples$playground$digital_clock(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33507 = arguments.length;
var i__17884__auto___33508 = (0);
while(true){
if((i__17884__auto___33508 < len__17883__auto___33507)){
args__17890__auto__.push((arguments[i__17884__auto___33508]));

var G__33509 = (i__17884__auto___33508 + (1));
i__17884__auto___33508 = G__33509;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.digital_clock.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.digital_clock.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_digital_clock_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 7, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"green",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"value","value",305978217),"Hello World!",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"i","i",253690212,null),(10)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"i","i",253690212,null),(10))], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(3),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33500){
var map__33501 = p__33500;
var map__33501__$1 = ((((!((map__33501 == null)))?((((map__33501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33501):map__33501);
var m_4 = cljs.core.get.call(null,map__33501__$1,new cljs.core.Keyword(null,"m_4","m_4",556075955));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map","map",-1282745308,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_4], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"range","range",-1014743483,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4)], null)], null),(5),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"clock","clock",746230400,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"Clock",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(42),new cljs.core.Keyword(null,"y","y",-1757859776),(42)], null),new cljs.core.Keyword(null,"url","url",276297046),"kermit.png",new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"prn","prn",1561684909,null),"Mouse entered!"))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(5)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33503){
var map__33504 = p__33503;
var map__33504__$1 = ((((!((map__33504 == null)))?((((map__33504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33504):map__33504);
var m_1 = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"digital-clock","digital-clock",1404096701,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.digital_clock.cljs$lang$maxFixedArity = (1);

examples.playground.digital_clock.cljs$lang$applyTo = (function (seq33498){
var G__33499 = cljs.core.first.call(null,seq33498);
var seq33498__$1 = cljs.core.next.call(null,seq33498);
return examples.playground.digital_clock.cljs$core$IFn$_invoke$arity$variadic(G__33499,seq33498__$1);
});
examples.playground.my_world;


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
examples.playground.my_world_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
examples.playground.my_world_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

examples.playground.my_world_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

examples.playground.my_world_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

examples.playground.my_world_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33511,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33513 = (((k33511 instanceof cljs.core.Keyword))?k33511.fqn:null);
switch (G__33513) {
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
return cljs.core.get.call(null,self__.__extmap,k33511,else__17442__auto__);

}
});

examples.playground.my_world_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#examples.playground.my-world*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.my_world_STAR_.prototype.cljs$core$IIterable$ = true;

examples.playground.my_world_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33510){
var self__ = this;
var G__33510__$1 = this;
return (new cljs.core.RecordIter((0),G__33510__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

examples.playground.my_world_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

examples.playground.my_world_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

examples.playground.my_world_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

examples.playground.my_world_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

examples.playground.my_world_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

examples.playground.my_world_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

examples.playground.my_world_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

examples.playground.my_world_STAR_.prototype.transmorphic$core$IRender$ = true;

examples.playground.my_world_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (_,___$1,___$2,render_ctx__30602__auto__){
var self__ = this;
var ___$3 = this;
return transmorphic.core.wrap_component.call(null,transmorphic.tools.world.world.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"world",new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2000),new cljs.core.Keyword(null,"y","y",-1757859776),(2000)], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null)], null),cljs.core.assoc.call(null,examples.playground.namespace_viewer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2)),cljs.core.assoc.call(null,examples.playground.digital_clock.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(400)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(80),new cljs.core.Keyword(null,"y","y",-1757859776),(120)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(3)),cljs.core.assoc.call(null,examples.playground.kitchen.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"kitchen"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(4))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

examples.playground.my_world_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

examples.playground.my_world_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33510){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33514 = cljs.core.keyword_identical_QMARK_;
var expr__33515 = k__17447__auto__;
if(cljs.core.truth_(pred__33514.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33515))){
return (new examples.playground.my_world_STAR_(G__33510,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33514.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33515))){
return (new examples.playground.my_world_STAR_(self__.component_id,G__33510,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33514.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33515))){
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,G__33510,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33514.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33515))){
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,self__.parent,G__33510,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33514.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33515))){
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33510,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33514.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33515))){
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33510,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33514.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33515))){
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33510,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33514.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33515))){
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33510,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33514.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33515))){
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33510,self__.__meta,self__.__extmap,null));
} else {
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33510),null));
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

examples.playground.my_world_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

examples.playground.my_world_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33510){
var self__ = this;
var this__17438__auto____$1 = this;
return (new examples.playground.my_world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33510,self__.__extmap,self__.__hash));
});

examples.playground.my_world_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

examples.playground.my_world_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

examples.playground.my_world_STAR_.cljs$lang$type = true;

examples.playground.my_world_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"examples.playground/my-world*");
});

examples.playground.my_world_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"examples.playground/my-world*");
});

examples.playground.__GT_my_world_STAR_ = (function examples$playground$__GT_my_world_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new examples.playground.my_world_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

examples.playground.map__GT_my_world_STAR_ = (function examples$playground$map__GT_my_world_STAR_(G__33512){
return (new examples.playground.my_world_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33512),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33512),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33512),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33512),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33512),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33512),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33512),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33512),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33512),null,cljs.core.dissoc.call(null,G__33512,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


examples.playground.my_world = (function examples$playground$my_world(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33523 = arguments.length;
var i__17884__auto___33524 = (0);
while(true){
if((i__17884__auto___33524 < len__17883__auto___33523)){
args__17890__auto__.push((arguments[i__17884__auto___33524]));

var G__33525 = (i__17884__auto___33524 + (1));
i__17884__auto___33524 = G__33525;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return examples.playground.my_world.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

examples.playground.my_world.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return examples.playground.map__GT_my_world_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 6, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"namespace-viewer","namespace-viewer",460692369,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(3),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"digital-clock","digital-clock",1404096701,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(400)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(80),new cljs.core.Keyword(null,"y","y",-1757859776),(120)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"kitchen","kitchen",506402285,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"kitchen"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"world","world",1222238904,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"world",new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2000),new cljs.core.Keyword(null,"y","y",-1757859776),(2000)], null),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33519){
var map__33520 = p__33519;
var map__33520__$1 = ((((!((map__33520 == null)))?((((map__33520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33520):map__33520);
var m_1 = cljs.core.get.call(null,map__33520__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"my-world","my-world",1177130958,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

examples.playground.my_world.cljs$lang$maxFixedArity = (1);

examples.playground.my_world.cljs$lang$applyTo = (function (seq33517){
var G__33518 = cljs.core.first.call(null,seq33517);
var seq33517__$1 = cljs.core.next.call(null,seq33517);
return examples.playground.my_world.cljs$core$IFn$_invoke$arity$variadic(G__33518,seq33517__$1);
});
if(typeof examples.playground.application !== 'undefined'){
} else {
examples.playground.application = transmorphic.core.set_root_BANG_.call(null,transmorphic.core.universe,examples.playground.my_world,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"foo"], null),goog.dom.getElement("app"));
}
examples.playground.slider_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=playground.js.map
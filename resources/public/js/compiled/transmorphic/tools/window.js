// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.tools.window');
goog.require('cljs.core');
goog.require('transmorphic.core');
goog.require('transmorphic.morph');
goog.require('om.dom');
goog.require('transmorphic.utils');
goog.require('transmorphic.tools.hand');
goog.require('transmorphic.event');
transmorphic.tools.window.window;
transmorphic.tools.window.control_height = (14);
transmorphic.tools.window.close_box;


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
transmorphic.tools.window.close_box_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.window.close_box_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.window.close_box_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32563,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32565 = (((k32563 instanceof cljs.core.Keyword))?k32563.fqn:null);
switch (G__32565) {
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
return cljs.core.get.call(null,self__.__extmap,k32563,else__17442__auto__);

}
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.window.close-box*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32562){
var self__ = this;
var G__32562__$1 = this;
return (new cljs.core.RecordIter((0),G__32562__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.window.close_box_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.window.close_box_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.window.close_box_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.window.close_box_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,model,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"#ff6052",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (self__$1){
return (function (e){
var temp__4425__auto__ = model.call(null,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(cljs.core.truth_(temp__4425__auto__)){
var cb_BANG_ = temp__4425__auto__;
return cb_BANG_.call(null);
} else {
return null;
}
});})(self__$1))
,new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),transmorphic.tools.window.control_height,new cljs.core.Keyword(null,"y","y",-1757859776),transmorphic.tools.window.control_height], null)], null),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-2),new cljs.core.Keyword(null,"y","y",-1757859776),(-6)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"\u00D7",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"allow-input","allow-input",-865500976),false,new cljs.core.Keyword(null,"visible","visible",-1024216805),model.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489))], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32562){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32566 = cljs.core.keyword_identical_QMARK_;
var expr__32567 = k__17447__auto__;
if(cljs.core.truth_(pred__32566.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32567))){
return (new transmorphic.tools.window.close_box_STAR_(G__32562,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32566.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32567))){
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,G__32562,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32566.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32567))){
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,G__32562,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32566.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32567))){
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,self__.parent,G__32562,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32566.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32567))){
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32562,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32566.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32567))){
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32562,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32566.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32567))){
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32562,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32566.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32567))){
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32562,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32566.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32567))){
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32562,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32562),null));
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

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32562){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.window.close_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32562,self__.__extmap,self__.__hash));
});

transmorphic.tools.window.close_box_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.window.close_box_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.window.close_box_STAR_.cljs$lang$type = true;

transmorphic.tools.window.close_box_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.window/close-box*");
});

transmorphic.tools.window.close_box_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.window/close-box*");
});

transmorphic.tools.window.__GT_close_box_STAR_ = (function transmorphic$tools$window$__GT_close_box_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.window.close_box_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.window.map__GT_close_box_STAR_ = (function transmorphic$tools$window$map__GT_close_box_STAR_(G__32564){
return (new transmorphic.tools.window.close_box_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32564),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32564),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32564),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32564),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32564),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32564),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32564),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32564),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32564),null,cljs.core.dissoc.call(null,G__32564,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.window.close_box = (function transmorphic$tools$window$close_box(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32575 = arguments.length;
var i__17884__auto___32576 = (0);
while(true){
if((i__17884__auto___32576 < len__17883__auto___32575)){
args__17890__auto__.push((arguments[i__17884__auto___32576]));

var G__32577 = (i__17884__auto___32576 + (1));
i__17884__auto___32576 = G__32577;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.window.close_box.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.window.close_box.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.window.map__GT_close_box_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-2),new cljs.core.Keyword(null,"y","y",-1757859776),(-6)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"\u00D7",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"allow-input","allow-input",-865500976),false,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.list(new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"hover?","hover?",-1201331489))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"#ff6052",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cb!","cb!",1366488304,null),cljs.core.list(new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"on-close","on-close",-761178394))], null),cljs.core.list(new cljs.core.Symbol(null,"cb!","cb!",1366488304,null)))),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"control-height","control-height",-1455186047,null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"control-height","control-height",-1455186047,null)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32571){
var map__32572 = p__32571;
var map__32572__$1 = ((((!((map__32572 == null)))?((((map__32572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32572):map__32572);
var m_1 = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.window","transmorphic.tools.window",755527658,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"close-box","close-box",631947899,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.window.close_box.cljs$lang$maxFixedArity = (1);

transmorphic.tools.window.close_box.cljs$lang$applyTo = (function (seq32569){
var G__32570 = cljs.core.first.call(null,seq32569);
var seq32569__$1 = cljs.core.next.call(null,seq32569);
return transmorphic.tools.window.close_box.cljs$core$IFn$_invoke$arity$variadic(G__32570,seq32569__$1);
});
transmorphic.tools.window.min_box;


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
transmorphic.tools.window.min_box_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.window.min_box_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.window.min_box_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32579,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32581 = (((k32579 instanceof cljs.core.Keyword))?k32579.fqn:null);
switch (G__32581) {
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
return cljs.core.get.call(null,self__.__extmap,k32579,else__17442__auto__);

}
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.window.min-box*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32578){
var self__ = this;
var G__32578__$1 = this;
return (new cljs.core.RecordIter((0),G__32578__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.window.min_box_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.window.min_box_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.window.min_box_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.window.min_box_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,model,submorphs__$1,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),transmorphic.tools.window.control_height,new cljs.core.Keyword(null,"y","y",-1757859776),transmorphic.tools.window.control_height], null),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffbe06",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (self__$1){
return (function (e){
return transmorphic.core.rerender_BANG_.call(null,self__$1,cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not));
});})(self__$1))
], null),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-2),new cljs.core.Keyword(null,"y","y",-1757859776),(-6)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"\u2212",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"allow-input","allow-input",-865500976),false,new cljs.core.Keyword(null,"visible","visible",-1024216805),model.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489))], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32578){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32582 = cljs.core.keyword_identical_QMARK_;
var expr__32583 = k__17447__auto__;
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32583))){
return (new transmorphic.tools.window.min_box_STAR_(G__32578,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32583))){
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,G__32578,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32583))){
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,G__32578,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32583))){
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,self__.parent,G__32578,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32583))){
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32578,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32583))){
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32578,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32583))){
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32578,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32583))){
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32578,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32583))){
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32578,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32578),null));
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

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32578){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.window.min_box_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32578,self__.__extmap,self__.__hash));
});

transmorphic.tools.window.min_box_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.window.min_box_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.window.min_box_STAR_.cljs$lang$type = true;

transmorphic.tools.window.min_box_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.window/min-box*");
});

transmorphic.tools.window.min_box_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.window/min-box*");
});

transmorphic.tools.window.__GT_min_box_STAR_ = (function transmorphic$tools$window$__GT_min_box_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.window.min_box_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.window.map__GT_min_box_STAR_ = (function transmorphic$tools$window$map__GT_min_box_STAR_(G__32580){
return (new transmorphic.tools.window.min_box_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32580),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32580),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32580),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32580),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32580),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32580),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32580),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32580),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32580),null,cljs.core.dissoc.call(null,G__32580,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.window.min_box = (function transmorphic$tools$window$min_box(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32591 = arguments.length;
var i__17884__auto___32592 = (0);
while(true){
if((i__17884__auto___32592 < len__17883__auto___32591)){
args__17890__auto__.push((arguments[i__17884__auto___32592]));

var G__32593 = (i__17884__auto___32592 + (1));
i__17884__auto___32592 = G__32593;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.window.min_box.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.window.min_box.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.window.map__GT_min_box_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-2),new cljs.core.Keyword(null,"y","y",-1757859776),(-6)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"\u2212",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"allow-input","allow-input",-865500976),false,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.list(new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"hover?","hover?",-1201331489))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"control-height","control-height",-1455186047,null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"control-height","control-height",-1455186047,null)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"#ffbe06",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),new cljs.core.Symbol(null,"not","not",1044554643,null))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32587){
var map__32588 = p__32587;
var map__32588__$1 = ((((!((map__32588 == null)))?((((map__32588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32588):map__32588);
var m_1 = cljs.core.get.call(null,map__32588__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.window","transmorphic.tools.window",755527658,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"min-box","min-box",-1008073912,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.window.min_box.cljs$lang$maxFixedArity = (1);

transmorphic.tools.window.min_box.cljs$lang$applyTo = (function (seq32585){
var G__32586 = cljs.core.first.call(null,seq32585);
var seq32585__$1 = cljs.core.next.call(null,seq32585);
return transmorphic.tools.window.min_box.cljs$core$IFn$_invoke$arity$variadic(G__32586,seq32585__$1);
});
transmorphic.tools.window.window_resizer;


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
transmorphic.tools.window.window_resizer_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.window.window_resizer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.window.window_resizer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32595,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32597 = (((k32595 instanceof cljs.core.Keyword))?k32595.fqn:null);
switch (G__32597) {
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
return cljs.core.get.call(null,self__.__extmap,k32595,else__17442__auto__);

}
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.window.window-resizer*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32594){
var self__ = this;
var G__32594__$1 = this;
return (new cljs.core.RecordIter((0),G__32594__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.window.window_resizer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.window.window_resizer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.window.window_resizer_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.window.window_resizer_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,p__32598,_,render_ctx__30602__auto__){
var self__ = this;
var map__32599 = p__32598;
var map__32599__$1 = ((((!((map__32599 == null)))?((((map__32599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32599):map__32599);
var window = cljs.core.get.call(null,map__32599__$1,new cljs.core.Keyword(null,"window","window",724519534));
var position = cljs.core.get.call(null,map__32599__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var collapsed_QMARK_ = cljs.core.get.call(null,map__32599__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.image.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"position","position",-2011731912)],[cljs.core.not.call(null,collapsed_QMARK_),new cljs.core.PersistentArrayMap(null, 1, ["cursor","nwse-resize"], null),true,((function (self__$1,map__32599,map__32599__$1,window,position,collapsed_QMARK_){
return (function (delta){
return transmorphic.core.rerender_BANG_.call(null,window,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extent","extent",-186399820),transmorphic.utils.add_points.call(null,position,delta)], null));
});})(self__$1,map__32599,map__32599__$1,window,position,collapsed_QMARK_))
,0.3,"resizer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),"http://localhost:3449/resize.png",transmorphic.utils.add_points.call(null,position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-25),new cljs.core.Keyword(null,"y","y",-1757859776),(-25)], null))])),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32594){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32601 = cljs.core.keyword_identical_QMARK_;
var expr__32602 = k__17447__auto__;
if(cljs.core.truth_(pred__32601.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32602))){
return (new transmorphic.tools.window.window_resizer_STAR_(G__32594,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32601.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32602))){
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,G__32594,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32601.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32602))){
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,G__32594,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32601.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32602))){
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,self__.parent,G__32594,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32601.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32602))){
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32594,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32601.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32602))){
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32594,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32601.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32602))){
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32594,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32601.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32602))){
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32594,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32601.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32602))){
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32594,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32594),null));
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

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32594){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.window.window_resizer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32594,self__.__extmap,self__.__hash));
});

transmorphic.tools.window.window_resizer_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.window.window_resizer_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.window.window_resizer_STAR_.cljs$lang$type = true;

transmorphic.tools.window.window_resizer_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.window/window-resizer*");
});

transmorphic.tools.window.window_resizer_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.window/window-resizer*");
});

transmorphic.tools.window.__GT_window_resizer_STAR_ = (function transmorphic$tools$window$__GT_window_resizer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.window.window_resizer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.window.map__GT_window_resizer_STAR_ = (function transmorphic$tools$window$map__GT_window_resizer_STAR_(G__32596){
return (new transmorphic.tools.window.window_resizer_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32596),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32596),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32596),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32596),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32596),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32596),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32596),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32596),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32596),null,cljs.core.dissoc.call(null,G__32596,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.window.window_resizer = (function transmorphic$tools$window$window_resizer(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32610 = arguments.length;
var i__17884__auto___32611 = (0);
while(true){
if((i__17884__auto___32611 < len__17883__auto___32610)){
args__17890__auto__.push((arguments[i__17884__auto___32611]));

var G__32612 = (i__17884__auto___32611 + (1));
i__17884__auto___32611 = G__32612;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.window.window_resizer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.window.window_resizer.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.window.map__GT_window_resizer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"position","position",-2011731912)],[cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"collapsed?","collapsed?",-20889147,null)),new cljs.core.PersistentArrayMap(null, 1, ["cursor","nwse-resize"], null),true,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delta","delta",1749471484,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),new cljs.core.Symbol(null,"position","position",-371200385,null),new cljs.core.Symbol(null,"delta","delta",1749471484,null))], null))),0.3,"resizer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),"http://localhost:3449/resize.png",cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),new cljs.core.Symbol(null,"position","position",-371200385,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-25),new cljs.core.Keyword(null,"y","y",-1757859776),(-25)], null))]),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32606){
var map__32607 = p__32606;
var map__32607__$1 = ((((!((map__32607 == null)))?((((map__32607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32607):map__32607);
var m_1 = cljs.core.get.call(null,map__32607__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"window","window",-1929916235,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"position","position",-371200385,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collapsed?","collapsed?",-20889147,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.window","transmorphic.tools.window",755527658,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"window-resizer","window-resizer",713256662,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.window.window_resizer.cljs$lang$maxFixedArity = (1);

transmorphic.tools.window.window_resizer.cljs$lang$applyTo = (function (seq32604){
var G__32605 = cljs.core.first.call(null,seq32604);
var seq32604__$1 = cljs.core.next.call(null,seq32604);
return transmorphic.tools.window.window_resizer.cljs$core$IFn$_invoke$arity$variadic(G__32605,seq32604__$1);
});
transmorphic.tools.window.window_controls;


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
transmorphic.tools.window.window_controls_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.window.window_controls_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.window.window_controls_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32616,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32618 = (((k32616 instanceof cljs.core.Keyword))?k32616.fqn:null);
switch (G__32618) {
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
return cljs.core.get.call(null,self__.__extmap,k32616,else__17442__auto__);

}
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.window.window-controls*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32615){
var self__ = this;
var G__32615__$1 = this;
return (new cljs.core.RecordIter((0),G__32615__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.window.window_controls_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.window.window_controls_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.window.window_controls_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.window.window_controls_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"control-wrapper",new cljs.core.Keyword(null,"extent","extent",-186399820),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (self__$1){
return (function (p1__32613_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__32613_SHARP_),(0)]);
});})(self__$1))
)], null),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),props__$1.call(null,new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"grey",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2)),cljs.core.assoc.call(null,transmorphic.core.html.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"spinner?","spinner?",939139177).cljs$core$IFn$_invoke$arity$1(props__$1),new cljs.core.Keyword(null,"fill","fill",883462889),"#f0f0f0",new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (self__$1){
return (function (p1__32614_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__32614_SHARP_) - (80)),(-38)]);
});})(self__$1))
),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"html","html",-998796897),(function (){var style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#C3C3C3",new cljs.core.Keyword(null,"width","width",-384071477),"15px",new cljs.core.Keyword(null,"height","height",1025178622),"15px"], null);
return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"sk-three-bounce",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null)),om.util.force_children.call(null,React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"sk-child sk-bounce1",new cljs.core.Keyword(null,"style","style",-496642736),style], null)))),om.util.force_children.call(null,React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"sk-child sk-bounce2",new cljs.core.Keyword(null,"style","style",-496642736),style], null)))),om.util.force_children.call(null,React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"sk-child sk-bounce3",new cljs.core.Keyword(null,"style","style",-496642736),style], null)))));
})()], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(3)),cljs.core.assoc.call(null,transmorphic.tools.window.close_box.call(null,props__$1),new cljs.core.Keyword(null,"source-location","source-location",17618786),(4)),cljs.core.assoc.call(null,transmorphic.tools.window.min_box.call(null,props__$1),new cljs.core.Keyword(null,"source-location","source-location",17618786),(5))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32615){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32619 = cljs.core.keyword_identical_QMARK_;
var expr__32620 = k__17447__auto__;
if(cljs.core.truth_(pred__32619.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32620))){
return (new transmorphic.tools.window.window_controls_STAR_(G__32615,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32619.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32620))){
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,G__32615,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32619.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32620))){
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,G__32615,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32619.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32620))){
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,self__.parent,G__32615,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32619.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32620))){
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32615,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32619.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32620))){
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32615,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32619.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32620))){
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32615,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32619.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32620))){
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32615,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32619.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32620))){
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32615,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32615),null));
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

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32615){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.window.window_controls_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32615,self__.__extmap,self__.__hash));
});

transmorphic.tools.window.window_controls_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.window.window_controls_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.window.window_controls_STAR_.cljs$lang$type = true;

transmorphic.tools.window.window_controls_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.window/window-controls*");
});

transmorphic.tools.window.window_controls_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.window/window-controls*");
});

transmorphic.tools.window.__GT_window_controls_STAR_ = (function transmorphic$tools$window$__GT_window_controls_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.window.window_controls_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.window.map__GT_window_controls_STAR_ = (function transmorphic$tools$window$map__GT_window_controls_STAR_(G__32617){
return (new transmorphic.tools.window.window_controls_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32617),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32617),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32617),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32617),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32617),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32617),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32617),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32617),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32617),null,cljs.core.dissoc.call(null,G__32617,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.window.window_controls = (function transmorphic$tools$window$window_controls(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32628 = arguments.length;
var i__17884__auto___32629 = (0);
while(true){
if((i__17884__auto___32629 < len__17883__auto___32628)){
args__17890__auto__.push((arguments[i__17884__auto___32629]));

var G__32630 = (i__17884__auto___32629 + (1));
i__17884__auto___32629 = G__32630;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.window.window_controls.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.window.window_controls.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.window.map__GT_window_controls_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 7, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null),new cljs.core.Keyword(null,"text-string","text-string",1520601822),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"grey",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(3),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"html","html",641734630,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.list(new cljs.core.Keyword(null,"spinner?","spinner?",939139177),new cljs.core.Symbol(null,"props","props",2093813254,null)),new cljs.core.Keyword(null,"fill","fill",883462889),"#f0f0f0",new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32614#","p1__32614#",-1126307189,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"p1__32614#","p1__32614#",-1126307189,null)),(80)),new cljs.core.Keyword(null,"y","y",-1757859776),(-38)))),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"html","html",-998796897),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#C3C3C3",new cljs.core.Keyword(null,"width","width",-384071477),"15px",new cljs.core.Keyword(null,"height","height",1025178622),"15px"], null)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"sk-three-bounce",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null)),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"sk-child sk-bounce1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Symbol(null,"style","style",1143888791,null)], null))),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"sk-child sk-bounce2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Symbol(null,"style","style",1143888791,null)], null))),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"sk-child sk-bounce3",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Symbol(null,"style","style",1143888791,null)], null)))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"close-box","close-box",631947899,null),cljs.core.merge.call(null,new cljs.core.Symbol(null,"props","props",2093813254,null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(5),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"min-box","min-box",-1008073912,null),cljs.core.merge.call(null,new cljs.core.Symbol(null,"props","props",2093813254,null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"control-wrapper",new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32613#","p1__32613#",-82868735,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"p1__32613#","p1__32613#",-82868735,null)),new cljs.core.Keyword(null,"y","y",-1757859776),(0))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32624){
var map__32625 = p__32624;
var map__32625__$1 = ((((!((map__32625 == null)))?((((map__32625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32625):map__32625);
var m_1 = cljs.core.get.call(null,map__32625__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.window","transmorphic.tools.window",755527658,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"window-controls","window-controls",2109947466,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.window.window_controls.cljs$lang$maxFixedArity = (1);

transmorphic.tools.window.window_controls.cljs$lang$applyTo = (function (seq32622){
var G__32623 = cljs.core.first.call(null,seq32622);
var seq32622__$1 = cljs.core.next.call(null,seq32622);
return transmorphic.tools.window.window_controls.cljs$core$IFn$_invoke$arity$variadic(G__32623,seq32622__$1);
});
transmorphic.tools.window.window;


/**
* @constructor
 * @implements {transmorphic.core.IInitialize}
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
transmorphic.tools.window.window_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.window.window_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.window.window_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32632,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32634 = (((k32632 instanceof cljs.core.Keyword))?k32632.fqn:null);
switch (G__32634) {
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
return cljs.core.get.call(null,self__.__extmap,k32632,else__17442__auto__);

}
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.window.window*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.window.window_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32631){
var self__ = this;
var G__32631__$1 = this;
return (new cljs.core.RecordIter((0),G__32631__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.window.window_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.window.window_STAR_.prototype.transmorphic$core$IInitialize$ = true;

transmorphic.tools.window.window_STAR_.prototype.transmorphic$core$IInitialize$initialize$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extent","extent",-186399820),null,new cljs.core.Keyword(null,"position","position",-2011731912),null], null);
});

transmorphic.tools.window.window_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.window.window_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.window.window_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.window.window_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (p__32635,p__32636,submorphs__$1,render_ctx__30602__auto__){
var self__ = this;
var map__32637 = p__32635;
var map__32637__$1 = ((((!((map__32637 == null)))?((((map__32637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32637):map__32637);
var self = map__32637__$1;
var local_state__$1 = cljs.core.get.call(null,map__32637__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__32638 = p__32636;
var map__32638__$1 = ((((!((map__32638 == null)))?((((map__32638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32638):map__32638);
var props__$1 = map__32638__$1;
var title = cljs.core.get.call(null,map__32638__$1,new cljs.core.Keyword(null,"title","title",636505583));
var scrollable_QMARK_ = cljs.core.get.call(null,map__32638__$1,new cljs.core.Keyword(null,"scrollable?","scrollable?",1366456374));
var on_close = cljs.core.get.call(null,map__32638__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var spinner_QMARK_ = cljs.core.get.call(null,map__32638__$1,new cljs.core.Keyword(null,"spinner?","spinner?",939139177));
var map__32641 = this;
var map__32641__$1 = ((((!((map__32641 == null)))?((((map__32641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32641):map__32641);
var self__$1 = map__32641__$1;
var local_state__$2 = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__32643 = local_state__$2;
var map__32643__$1 = ((((!((map__32643 == null)))?((((map__32643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32643):map__32643);
var extent = cljs.core.get.call(null,map__32643__$1,new cljs.core.Keyword(null,"extent","extent",-186399820));
var position = cljs.core.get.call(null,map__32643__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"drop-shadow?","drop-shadow?",-760899900),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],[true,"linear-gradient(to bottom, #f0f0f0, #e9e9e9)",true,((function (map__32643,map__32643__$1,extent,position,map__32641,map__32641__$1,self__$1,local_state__$2,map__32637,map__32637__$1,self,local_state__$1,map__32638,map__32638__$1,props__$1,title,scrollable_QMARK_,on_close,spinner_QMARK_){
return (function (delta){
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.utils.add_points.call(null,(function (){var or__16825__auto__ = position;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(props__$1);
}
})(),delta)], null));
});})(map__32643,map__32643__$1,extent,position,map__32641,map__32641__$1,self__$1,local_state__$2,map__32637,map__32637__$1,self,local_state__$1,map__32638,map__32638__$1,props__$1,title,scrollable_QMARK_,on_close,spinner_QMARK_))
,(1),(function (){var or__16825__auto__ = extent;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(props__$1);
}
})(),"grey",(function (){var or__16825__auto__ = position;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(props__$1);
}
})(),(10)]),cljs.core.assoc.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"window-wrapper",new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, ["WebkitClipPath","inset(-10px 0px 0px 3px round 10px 10px)"], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.Keyword(null,"scrollable?","scrollable?",1366456374),scrollable_QMARK_,new cljs.core.Keyword(null,"extent","extent",-186399820),transmorphic.utils.add_points.call(null,(function (){var or__16825__auto__ = extent;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(props__$1);
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-30)], null))], null),submorphs__$1),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2)),cljs.core.assoc.call(null,transmorphic.tools.window.window_controls.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"window","window",724519534),self__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"spinner?","spinner?",939139177),spinner_QMARK_], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(4)),cljs.core.assoc.call(null,transmorphic.tools.window.window_resizer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__16825__auto__ = extent;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(props__$1);
}
})(),new cljs.core.Keyword(null,"window","window",724519534),self__$1], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(5))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32631){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32645 = cljs.core.keyword_identical_QMARK_;
var expr__32646 = k__17447__auto__;
if(cljs.core.truth_(pred__32645.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32646))){
return (new transmorphic.tools.window.window_STAR_(G__32631,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32645.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32646))){
return (new transmorphic.tools.window.window_STAR_(self__.component_id,G__32631,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32645.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32646))){
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,G__32631,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32645.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32646))){
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,self__.parent,G__32631,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32645.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32646))){
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32631,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32645.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32646))){
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32631,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32645.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32646))){
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32631,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32645.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32646))){
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32631,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32645.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32646))){
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32631,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32631),null));
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

transmorphic.tools.window.window_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32631){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.window.window_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32631,self__.__extmap,self__.__hash));
});

transmorphic.tools.window.window_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.window.window_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.window.window_STAR_.cljs$lang$type = true;

transmorphic.tools.window.window_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.window/window*");
});

transmorphic.tools.window.window_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.window/window*");
});

transmorphic.tools.window.__GT_window_STAR_ = (function transmorphic$tools$window$__GT_window_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.window.window_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.window.map__GT_window_STAR_ = (function transmorphic$tools$window$map__GT_window_STAR_(G__32633){
return (new transmorphic.tools.window.window_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32633),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32633),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32633),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32633),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32633),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32633),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32633),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32633),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32633),null,cljs.core.dissoc.call(null,G__32633,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.window.window = (function transmorphic$tools$window$window(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32657 = arguments.length;
var i__17884__auto___32658 = (0);
while(true){
if((i__17884__auto___32658 < len__17883__auto___32657)){
args__17890__auto__.push((arguments[i__17884__auto___32658]));

var G__32659 = (i__17884__auto___32658 + (1));
i__17884__auto___32658 = G__32659;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.window.window.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.window.window.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.window.map__GT_window_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 7, [(3),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32650){
var map__32651 = p__32650;
var map__32651__$1 = ((((!((map__32651 == null)))?((((map__32651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32651):map__32651);
return new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"window-wrapper",new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, ["WebkitClipPath","inset(-10px 0px 0px 3px round 10px 10px)"], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.Keyword(null,"scrollable?","scrollable?",1366456374),new cljs.core.Symbol(null,"scrollable?","scrollable?",-1287979395,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"extent","extent",1454131707,null),cljs.core.list(new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Symbol(null,"props","props",2093813254,null))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-30)], null))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),(4),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"window-controls","window-controls",2109947466,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Keyword(null,"spinner?","spinner?",939139177),new cljs.core.Symbol(null,"spinner?","spinner?",-1715296592,null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(5),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"window-resizer","window-resizer",713256662,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"extent","extent",1454131707,null),cljs.core.list(new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Symbol(null,"props","props",2093813254,null))),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Symbol(null,"self","self",93102628,null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"drop-shadow?","drop-shadow?",-760899900),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],[true,"linear-gradient(to bottom, #f0f0f0, #e9e9e9)",true,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delta","delta",1749471484,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"position","position",-371200385,null),cljs.core.list(new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"props","props",2093813254,null))),new cljs.core.Symbol(null,"delta","delta",1749471484,null))], null))),(1),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"extent","extent",1454131707,null),cljs.core.list(new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Symbol(null,"props","props",2093813254,null))),"grey",cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"position","position",-371200385,null),cljs.core.list(new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"props","props",2093813254,null))),(10)]),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(5)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32653){
var map__32654 = p__32653;
var map__32654__$1 = ((((!((map__32654 == null)))?((((map__32654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32654):map__32654);
var m_1 = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IInitialize","IInitialize",1299943917,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initialize","initialize",-2044482856,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extent","extent",-186399820)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scrollable?","scrollable?",-1287979395,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-close","on-close",879353133,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spinner?","spinner?",-1715296592,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extent","extent",1454131707,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"position","position",-371200385,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.window","transmorphic.tools.window",755527658,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"window","window",-1929916235,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.window.window.cljs$lang$maxFixedArity = (1);

transmorphic.tools.window.window.cljs$lang$applyTo = (function (seq32648){
var G__32649 = cljs.core.first.call(null,seq32648);
var seq32648__$1 = cljs.core.next.call(null,seq32648);
return transmorphic.tools.window.window.cljs$core$IFn$_invoke$arity$variadic(G__32649,seq32648__$1);
});

//# sourceMappingURL=window.js.map
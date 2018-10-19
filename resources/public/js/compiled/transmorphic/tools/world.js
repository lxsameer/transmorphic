// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.tools.world');
goog.require('cljs.core');
goog.require('transmorphic.event');
goog.require('transmorphic.tools.halo');
goog.require('transmorphic.utils');
goog.require('transmorphic.tools.window');
goog.require('transmorphic.tools.hand');
goog.require('transmorphic.core');
goog.require('om.next');
goog.require('transmorphic.morph');
goog.require('transmorphic.tools.function_editor');
transmorphic.tools.world.get_local_hkey = (function transmorphic$tools$world$get_local_hkey(){
return "localtoast";
});
transmorphic.tools.world.slider;


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
transmorphic.tools.world.slider_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.world.slider_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.world.slider_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33226,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33228 = (((k33226 instanceof cljs.core.Keyword))?k33226.fqn:null);
switch (G__33228) {
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
return cljs.core.get.call(null,self__.__extmap,k33226,else__17442__auto__);

}
});

transmorphic.tools.world.slider_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.world.slider_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (p__33229,p__33230,submorphs__$1,render_ctx__30602__auto__){
var self__ = this;
var map__33231 = p__33229;
var map__33231__$1 = ((((!((map__33231 == null)))?((((map__33231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33231):map__33231);
var self = map__33231__$1;
var local_state__$1 = cljs.core.get.call(null,map__33231__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__33232 = p__33230;
var map__33232__$1 = ((((!((map__33232 == null)))?((((map__33232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33232):map__33232);
var width = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_change = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var position = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var title = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.call(null,map__33232__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__33235 = this;
var map__33235__$1 = ((((!((map__33235 == null)))?((((map__33235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33235):map__33235);
var self__$1 = map__33235__$1;
var local_state__$2 = cljs.core.get.call(null,map__33235__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"slider",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),width,new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"grey",new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),cljs.core.assoc.call(null,transmorphic.core.ellipse.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"drop-shadow?","drop-shadow?",-760899900),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"wants-hand-focus?","wants-hand-focus?",1624747765),new cljs.core.Keyword(null,"position","position",-2011731912)],[false,"silver",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),((function (map__33235,map__33235__$1,self__$1,local_state__$2,map__33231,map__33231__$1,self,local_state__$1,map__33232,map__33232__$1,width,on_change,position,title,value){
return (function (){
return null;
});})(map__33235,map__33235__$1,self__$1,local_state__$2,map__33231,map__33231__$1,self,local_state__$1,map__33232,map__33232__$1,width,on_change,position,title,value))
,true,((function (map__33235,map__33235__$1,self__$1,local_state__$2,map__33231,map__33231__$1,self,local_state__$1,map__33232,map__33232__$1,width,on_change,position,title,value){
return (function (p__33237){
var map__33238 = p__33237;
var map__33238__$1 = ((((!((map__33238 == null)))?((((map__33238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33238):map__33238);
var x = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var map__33240 = local_state__$2;
var map__33240__$1 = ((((!((map__33240 == null)))?((((map__33240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33240):map__33240);
var current_pos = cljs.core.get.call(null,map__33240__$1,new cljs.core.Keyword(null,"current-pos","current-pos",794884215));
var current_ext = cljs.core.get.call(null,map__33240__$1,new cljs.core.Keyword(null,"current-ext","current-ext",360779664));
var value__$1 = cljs.core.get.call(null,map__33240__$1,new cljs.core.Keyword(null,"value","value",305978217));
var new_pos = transmorphic.utils.add_points.call(null,current_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var new_pos__$1 = ((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(current_ext) < new_pos.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))) || (((0) > new_pos.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))))?current_pos:new_pos);
var new_value = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_pos__$1);
transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-pos","current-pos",794884215),new_pos__$1], null));

if(cljs.core.truth_(on_change)){
return on_change.call(null,self__$1,(new_value / width));
} else {
return null;
}
});})(map__33235,map__33235__$1,self__$1,local_state__$2,map__33231,map__33231__$1,self,local_state__$1,map__33232,map__33232__$1,width,on_change,position,title,value))
,((function (map__33235,map__33235__$1,self__$1,local_state__$2,map__33231,map__33231__$1,self,local_state__$1,map__33232,map__33232__$1,width,on_change,position,title,value){
return (function (p__33242){
var map__33243 = p__33242;
var map__33243__$1 = ((((!((map__33243 == null)))?((((map__33243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33243):map__33243);
var x = cljs.core.get.call(null,map__33243__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__33243__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-pos","current-pos",794884215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"current-ext","current-ext",360779664),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),width,new cljs.core.Keyword(null,"y","y",-1757859776),(19)], null)], null));
});})(map__33235,map__33235__$1,self__$1,local_state__$2,map__33231,map__33231__$1,self,local_state__$1,map__33232,map__33232__$1,width,on_change,position,title,value))
,"knob",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),true,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(width * (function (){var or__16825__auto__ = value;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (1);
}
})()),new cljs.core.Keyword(null,"y","y",-1757859776),(-10)], null)])),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.world.slider*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33225){
var self__ = this;
var G__33225__$1 = this;
return (new cljs.core.RecordIter((0),G__33225__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.world.slider_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.world.slider_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33225){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33245 = cljs.core.keyword_identical_QMARK_;
var expr__33246 = k__17447__auto__;
if(cljs.core.truth_(pred__33245.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33246))){
return (new transmorphic.tools.world.slider_STAR_(G__33225,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33245.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33246))){
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,G__33225,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33245.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33246))){
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,G__33225,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33245.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33246))){
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,self__.parent,G__33225,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33245.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33246))){
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33225,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33245.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33246))){
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33225,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33245.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33246))){
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33225,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33245.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33246))){
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33225,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33245.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33246))){
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33225,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33225),null));
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

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33225){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.world.slider_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33225,self__.__extmap,self__.__hash));
});

transmorphic.tools.world.slider_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.world.slider_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.world.slider_STAR_.cljs$lang$type = true;

transmorphic.tools.world.slider_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.world/slider*");
});

transmorphic.tools.world.slider_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.world/slider*");
});

transmorphic.tools.world.__GT_slider_STAR_ = (function transmorphic$tools$world$__GT_slider_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.world.slider_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.world.map__GT_slider_STAR_ = (function transmorphic$tools$world$map__GT_slider_STAR_(G__33227){
return (new transmorphic.tools.world.slider_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33227),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33227),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33227),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33227),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33227),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33227),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33227),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33227),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33227),null,cljs.core.dissoc.call(null,G__33227,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.world.slider = (function transmorphic$tools$world$slider(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33254 = arguments.length;
var i__17884__auto___33255 = (0);
while(true){
if((i__17884__auto___33255 < len__17883__auto___33254)){
args__17890__auto__.push((arguments[i__17884__auto___33255]));

var G__33256 = (i__17884__auto___33255 + (1));
i__17884__auto___33255 = G__33256;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.world.slider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.world.slider.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.world.map__GT_slider_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"drop-shadow?","drop-shadow?",-760899900),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"wants-hand-focus?","wants-hand-focus?",1624747765),new cljs.core.Keyword(null,"position","position",-2011731912)],[false,"silver",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY),true,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-pos","current-pos",-1859551554,null),new cljs.core.Symbol(null,"current-ext","current-ext",2001311191,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),new cljs.core.Symbol(null,"current-pos","current-pos",-1859551554,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"current-ext","current-ext",2001311191,null)),cljs.core.list(new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null),new cljs.core.Keyword(null,"x","x",2099068185))),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),(0),cljs.core.list(new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null),new cljs.core.Keyword(null,"x","x",2099068185)))),new cljs.core.Symbol(null,"current-pos","current-pos",-1859551554,null),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null)),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null),cljs.core.list(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null))], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-pos","current-pos",794884215),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"on-change","on-change",908485378,null),cljs.core.list(new cljs.core.Symbol(null,"on-change","on-change",908485378,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null),new cljs.core.Symbol(null,"width","width",1256460050,null)))))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-pos","current-pos",794884215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"current-ext","current-ext",360779664),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Keyword(null,"y","y",-1757859776),(19)], null)], null))),"knob",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),true,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"value","value",1946509744,null),(1))),new cljs.core.Keyword(null,"y","y",-1757859776),(-10)], null)]),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"slider",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null),new cljs.core.Keyword(null,"fill","fill",883462889),"grey",new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33250){
var map__33251 = p__33250;
var map__33251__$1 = ((((!((map__33251 == null)))?((((map__33251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33251):map__33251);
var m_1 = cljs.core.get.call(null,map__33251__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-change","on-change",908485378,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"position","position",-371200385,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.world","transmorphic.tools.world",-688925775,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"slider","slider",1167862662,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.world.slider.cljs$lang$maxFixedArity = (1);

transmorphic.tools.world.slider.cljs$lang$applyTo = (function (seq33248){
var G__33249 = cljs.core.first.call(null,seq33248);
var seq33248__$1 = cljs.core.next.call(null,seq33248);
return transmorphic.tools.world.slider.cljs$core$IFn$_invoke$arity$variadic(G__33249,seq33248__$1);
});
transmorphic.tools.world.world;


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
transmorphic.tools.world.world_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.world.world_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.world.world_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33260,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33262 = (((k33260 instanceof cljs.core.Keyword))?k33260.fqn:null);
switch (G__33262) {
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
return cljs.core.get.call(null,self__.__extmap,k33260,else__17442__auto__);

}
});

transmorphic.tools.world.world_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.world.world_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (p__33263,props__$1,submorphs__$1,render_ctx__30602__auto__){
var self__ = this;
var map__33264 = p__33263;
var map__33264__$1 = ((((!((map__33264 == null)))?((((map__33264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33264):map__33264);
var self = map__33264__$1;
var local_state__$1 = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__33266 = this;
var map__33266__$1 = ((((!((map__33266 == null)))?((((map__33266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33266):map__33266);
var self__$1 = map__33266__$1;
var local_state__$2 = cljs.core.get.call(null,map__33266__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"root-morph",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),((function (map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (_){
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hand-position","hand-position",-1172671251),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"edited-morphs","edited-morphs",1990467979),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"edited-components","edited-components",820090463),cljs.core.PersistentHashSet.EMPTY], null));
});})(map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (e){
if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.core.not.call(null,transmorphic.event.meta_click_QMARK_.call(null,e));
if(and__16813__auto__){
return cljs.core.deref.call(null,transmorphic.event.meta_focus);
} else {
return and__16813__auto__;
}
})())){
transmorphic.event.drop_meta_focus_BANG_.call(null);
} else {
}

return transmorphic.core.rerender_BANG_.call(null,self__$1,cljs.core.PersistentArrayMap.EMPTY);
});})(map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (e){
transmorphic.tools.hand.handle_grab_or_drag.call(null,self__$1,transmorphic.event.get_cursor_pos.call(null,e));

transmorphic.event.drop_hand_focus_BANG_.call(null);

return transmorphic.core.rerender_BANG_.call(null,self__$1,cljs.core.PersistentArrayMap.EMPTY);
});})(map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (e){
transmorphic.tools.hand.handle_grab_or_drag.call(null,self__$1,transmorphic.event.get_cursor_pos.call(null,e));

return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hand-position","hand-position",-1172671251),transmorphic.event.get_cursor_pos.call(null,e)], null));
});})(map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
], null),cljs.core.assoc.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"world-morph",new cljs.core.Keyword(null,"extent","extent",-186399820),props__$1.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"fill","fill",883462889),(function (){var or__16825__auto__ = props__$1.call(null,new cljs.core.Keyword(null,"fill","fill",883462889));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return "white";
}
})()], null),submorphs__$1),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2)),(function (){var iter__17597__auto__ = ((function (map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function transmorphic$tools$world$iter__33268(s__33269){
return (new cljs.core.LazySeq(null,((function (map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (){
var s__33269__$1 = s__33269;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33269__$1);
if(temp__4425__auto__){
var s__33269__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33269__$2)){
var c__17595__auto__ = cljs.core.chunk_first.call(null,s__33269__$2);
var size__17596__auto__ = cljs.core.count.call(null,c__17595__auto__);
var b__33271 = cljs.core.chunk_buffer.call(null,size__17596__auto__);
if((function (){var i__33270 = (0);
while(true){
if((i__33270 < size__17596__auto__)){
var ec = cljs.core._nth.call(null,c__17595__auto__,i__33270);
cljs.core.chunk_append.call(null,b__33271,cljs.core.assoc.call(null,transmorphic.tools.function_editor.component_editor.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("editor-on-"),cljs.core.str(ec)].join(''),new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__33270,ec,c__17595__auto__,size__17596__auto__,b__33271,s__33269__$2,temp__4425__auto__,map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (_){
return transmorphic.core.rerender_BANG_.call(null,self__$1,((function (i__33270,ec,c__17595__auto__,size__17596__auto__,b__33271,s__33269__$2,temp__4425__auto__,map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (p1__33257_SHARP_){
return cljs.core.update_in.call(null,p1__33257_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-morphs","edited-morphs",1990467979)], null),cljs.core.disj,ec);
});})(i__33270,ec,c__17595__auto__,size__17596__auto__,b__33271,s__33269__$2,temp__4425__auto__,map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
);
});})(i__33270,ec,c__17595__auto__,size__17596__auto__,b__33271,s__33269__$2,temp__4425__auto__,map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
,new cljs.core.Keyword(null,"target-ref","target-ref",-164384803),ec,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(700),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(600)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(5)));

var G__33287 = (i__33270 + (1));
i__33270 = G__33287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33271),transmorphic$tools$world$iter__33268.call(null,cljs.core.chunk_rest.call(null,s__33269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33271),null);
}
} else {
var ec = cljs.core.first.call(null,s__33269__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,transmorphic.tools.function_editor.component_editor.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("editor-on-"),cljs.core.str(ec)].join(''),new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (ec,s__33269__$2,temp__4425__auto__,map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (_){
return transmorphic.core.rerender_BANG_.call(null,self__$1,((function (ec,s__33269__$2,temp__4425__auto__,map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (p1__33257_SHARP_){
return cljs.core.update_in.call(null,p1__33257_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-morphs","edited-morphs",1990467979)], null),cljs.core.disj,ec);
});})(ec,s__33269__$2,temp__4425__auto__,map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
);
});})(ec,s__33269__$2,temp__4425__auto__,map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
,new cljs.core.Keyword(null,"target-ref","target-ref",-164384803),ec,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(700),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(600)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(5)),transmorphic$tools$world$iter__33268.call(null,cljs.core.rest.call(null,s__33269__$2)));
}
} else {
return null;
}
break;
}
});})(map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
,null,null));
});})(map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
;
return iter__17597__auto__.call(null,new cljs.core.Keyword(null,"edited-morphs","edited-morphs",1990467979).cljs$core$IFn$_invoke$arity$1(local_state__$2));
})(),cljs.core.assoc.call(null,transmorphic.tools.hand.hand_morph.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(transmorphic.tools.world.get_local_hkey.call(null)),cljs.core.str("-hand")].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"hand-position","hand-position",-1172671251).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(self__$1))], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(6)),cljs.core.assoc.call(null,transmorphic.tools.halo.halo.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"halo",new cljs.core.Keyword(null,"start-editing","start-editing",36503254),((function (map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (target){
return transmorphic.core.rerender_BANG_.call(null,self__$1,((function (map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1){
return (function (p1__33258_SHARP_){
return cljs.core.update_in.call(null,p1__33258_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-morphs","edited-morphs",1990467979)], null),cljs.core.conj,new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(target));
});})(map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
);
});})(map__33266,map__33266__$1,self__$1,local_state__$2,map__33264,map__33264__$1,self,local_state__$1))
,new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,transmorphic.event.meta_focus));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,transmorphic.event.meta_focus));
}
})(),new cljs.core.Keyword(null,"idle","idle",-2007156861),true], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(7))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.world.world*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.world.world_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33259){
var self__ = this;
var G__33259__$1 = this;
return (new cljs.core.RecordIter((0),G__33259__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.world.world_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.world.world_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.world.world_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33259){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33272 = cljs.core.keyword_identical_QMARK_;
var expr__33273 = k__17447__auto__;
if(cljs.core.truth_(pred__33272.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33273))){
return (new transmorphic.tools.world.world_STAR_(G__33259,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33272.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33273))){
return (new transmorphic.tools.world.world_STAR_(self__.component_id,G__33259,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33272.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33273))){
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,G__33259,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33272.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33273))){
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,self__.parent,G__33259,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33272.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33273))){
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33259,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33272.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33273))){
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33259,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33272.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33273))){
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33259,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33272.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33273))){
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33259,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33272.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33273))){
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33259,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33259),null));
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

transmorphic.tools.world.world_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33259){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.world.world_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33259,self__.__extmap,self__.__hash));
});

transmorphic.tools.world.world_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.world.world_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.world.world_STAR_.cljs$lang$type = true;

transmorphic.tools.world.world_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.world/world*");
});

transmorphic.tools.world.world_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.world/world*");
});

transmorphic.tools.world.__GT_world_STAR_ = (function transmorphic$tools$world$__GT_world_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.world.world_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.world.map__GT_world_STAR_ = (function transmorphic$tools$world$map__GT_world_STAR_(G__33261){
return (new transmorphic.tools.world.world_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33261),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33261),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33261),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33261),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33261),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33261),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33261),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33261),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33261),null,cljs.core.dissoc.call(null,G__33261,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.world.world = (function transmorphic$tools$world$world(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33288 = arguments.length;
var i__17884__auto___33289 = (0);
while(true){
if((i__17884__auto___33289 < len__17883__auto___33288)){
args__17890__auto__.push((arguments[i__17884__auto___33289]));

var G__33290 = (i__17884__auto___33289 + (1));
i__17884__auto___33289 = G__33290;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.world.world.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.world.world.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.world.map__GT_world_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.PersistentHashMap.fromArrays([(3),(2),(5),(4),(6),(7),(1),(0),new cljs.core.Keyword(null,"active?","active?",459499776)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33277){
var map__33278 = p__33277;
var map__33278__$1 = ((((!((map__33278 == null)))?((((map__33278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33278):map__33278);
return new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"world-morph",new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"extent","extent",-186399820)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"fill","fill",883462889)),"white")], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"component-editor","component-editor",1635482522,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"editor-on-",new cljs.core.Symbol(null,"ec","ec",-2059521198,null)),new cljs.core.Keyword(null,"on-close","on-close",-761178394),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33257#","p1__33257#",-1141911217,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"p1__33257#","p1__33257#",-1141911217,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-morphs","edited-morphs",1990467979)], null),new cljs.core.Symbol(null,"disj","disj",-1076545178,null),new cljs.core.Symbol(null,"ec","ec",-2059521198,null))))),new cljs.core.Keyword(null,"target-ref","target-ref",-164384803),new cljs.core.Symbol(null,"ec","ec",-2059521198,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(700),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(600)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33280){
var map__33281 = p__33280;
var map__33281__$1 = ((((!((map__33281 == null)))?((((map__33281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33281):map__33281);
var m_5 = cljs.core.get.call(null,map__33281__$1,new cljs.core.Keyword(null,"m_5","m_5",-1278638212));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"for","for",316745208,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ec","ec",-2059521198,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-morphs","edited-morphs",1990467979)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_5], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"hand-morph","hand-morph",-971409275,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"get-local-hkey","get-local-hkey",-1949709304,null)),"-hand"),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"hand-position","hand-position",-1172671251))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"halo","halo",-1672990094,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"halo",new cljs.core.Keyword(null,"start-editing","start-editing",36503254),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33258#","p1__33258#",-144706800,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"p1__33258#","p1__33258#",-144706800,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-morphs","edited-morphs",1990467979)], null),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.list(new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Symbol(null,"target","target",1893533248,null)))))),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"meta-focus","meta-focus",-1603875642,null))),cljs.core.list(new cljs.core.Keyword(null,"morph-id","morph-id",953478048),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"meta-focus","meta-focus",-1603875642,null)))),new cljs.core.Keyword(null,"idle","idle",-2007156861),true], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"root-morph",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hand-position","hand-position",-1172671251),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),new cljs.core.Keyword(null,"edited-morphs","edited-morphs",1990467979),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"edited-components","edited-components",820090463),cljs.core.PersistentHashSet.EMPTY], null))),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"meta-click?","meta-click?",1191582878,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"meta-focus","meta-focus",-1603875642,null))),cljs.core.list(new cljs.core.Symbol(null,"drop-meta-focus!","drop-meta-focus!",922452595,null))),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"handle-grab-or-drag","handle-grab-or-drag",1437594240,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.list(new cljs.core.Symbol(null,"get-cursor-pos","get-cursor-pos",-614612315,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"drop-hand-focus!","drop-hand-focus!",-252747124,null)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"handle-grab-or-drag","handle-grab-or-drag",1437594240,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.list(new cljs.core.Symbol(null,"get-cursor-pos","get-cursor-pos",-614612315,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hand-position","hand-position",-1172671251),cljs.core.list(new cljs.core.Symbol(null,"get-cursor-pos","get-cursor-pos",-614612315,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))], null)))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(7)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33283){
var map__33284 = p__33283;
var map__33284__$1 = ((((!((map__33284 == null)))?((((map__33284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33284):map__33284);
var m_1 = cljs.core.get.call(null,map__33284__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),false]),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.world","transmorphic.tools.world",-688925775,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"world","world",1222238904,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.world.world.cljs$lang$maxFixedArity = (1);

transmorphic.tools.world.world.cljs$lang$applyTo = (function (seq33275){
var G__33276 = cljs.core.first.call(null,seq33275);
var seq33275__$1 = cljs.core.next.call(null,seq33275);
return transmorphic.tools.world.world.cljs$core$IFn$_invoke$arity$variadic(G__33276,seq33275__$1);
});

//# sourceMappingURL=world.js.map
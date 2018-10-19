// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.manipulation');
goog.require('cljs.core');

/**
 * The set of operations that can be enacted on a morphic
 *   entity through the halo.
 * @interface
 */
transmorphic.manipulation.IManipulation = function(){};

/**
 * Add a morph to a morph
 */
transmorphic.manipulation.add_morph = (function transmorphic$manipulation$add_morph(self,morph){
if((!((self == null))) && (!((self.transmorphic$manipulation$IManipulation$add_morph$arity$2 == null)))){
return self.transmorphic$manipulation$IManipulation$add_morph$arity$2(self,morph);
} else {
var x__17480__auto__ = (((self == null))?null:self);
var m__17481__auto__ = (transmorphic.manipulation.add_morph[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,self,morph);
} else {
var m__17481__auto____$1 = (transmorphic.manipulation.add_morph["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,self,morph);
} else {
throw cljs.core.missing_protocol.call(null,"IManipulation.add-morph",self);
}
}
}
});

/**
 * Remove morph with given id
 */
transmorphic.manipulation.remove_morph = (function transmorphic$manipulation$remove_morph(self,id){
if((!((self == null))) && (!((self.transmorphic$manipulation$IManipulation$remove_morph$arity$2 == null)))){
return self.transmorphic$manipulation$IManipulation$remove_morph$arity$2(self,id);
} else {
var x__17480__auto__ = (((self == null))?null:self);
var m__17481__auto__ = (transmorphic.manipulation.remove_morph[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,self,id);
} else {
var m__17481__auto____$1 = (transmorphic.manipulation.remove_morph["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,self,id);
} else {
throw cljs.core.missing_protocol.call(null,"IManipulation.remove-morph",self);
}
}
}
});

/**
 * Set prop of morph to value
 */
transmorphic.manipulation.set_prop = (function transmorphic$manipulation$set_prop(self,prop,value){
if((!((self == null))) && (!((self.transmorphic$manipulation$IManipulation$set_prop$arity$3 == null)))){
return self.transmorphic$manipulation$IManipulation$set_prop$arity$3(self,prop,value);
} else {
var x__17480__auto__ = (((self == null))?null:self);
var m__17481__auto__ = (transmorphic.manipulation.set_prop[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,self,prop,value);
} else {
var m__17481__auto____$1 = (transmorphic.manipulation.set_prop["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,self,prop,value);
} else {
throw cljs.core.missing_protocol.call(null,"IManipulation.set-prop",self);
}
}
}
});

if(typeof transmorphic.manipulation.orphanize !== 'undefined'){
} else {
transmorphic.manipulation.orphanize = (function (){var method_table__17738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"transmorphic.manipulation","orphanize"),((function (method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__,hierarchy__17742__auto__){
return (function (morph){
return morph.call(null,new cljs.core.Keyword(null,"role","role",-736691072));
});})(method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__,hierarchy__17742__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17742__auto__,method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__));
})();
}
cljs.core._add_method.call(null,transmorphic.manipulation.orphanize,new cljs.core.Keyword(null,"part","part",77757738),(function (morph){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,morph,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"abstraction-name","abstraction-name",518072573),new cljs.core.Keyword(null,"source-location","source-location",17618786)),new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"orphan","orphan",557820569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),cljs.core.map.call(null,transmorphic.manipulation.orphanize,transmorphic.manipulation.self.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770))),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),transmorphic.manipulation.primitive_reconciler.call(null,transmorphic.manipulation.self));
}));
cljs.core._add_method.call(null,transmorphic.manipulation.orphanize,new cljs.core.Keyword(null,"root","root",-448657453),(function (root){
return cljs.core.assoc.call(null,root,new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"orphan","orphan",557820569),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),transmorphic.manipulation.model_call_reconciler.call(null,transmorphic.manipulation.self));
}));
cljs.core._add_method.call(null,transmorphic.manipulation.orphanize,new cljs.core.Keyword(null,"orphan","orphan",557820569),(function (orphan){
return orphan;
}));
if(typeof transmorphic.manipulation.incorporate !== 'undefined'){
} else {
transmorphic.manipulation.incorporate = (function (){var method_table__17738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"transmorphic.manipulation","incorporate"),((function (method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__,hierarchy__17742__auto__){
return (function (self,orphan){
return self.call(null,new cljs.core.Keyword(null,"role","role",-736691072));
});})(method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__,hierarchy__17742__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17742__auto__,method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__));
})();
}
cljs.core._add_method.call(null,transmorphic.manipulation.incorporate,new cljs.core.Keyword(null,"orphan","orphan",557820569),(function (orphan,other_orphan){
return null;
}));
cljs.core._add_method.call(null,transmorphic.manipulation.incorporate,new cljs.core.Keyword(null,"part","part",77757738),(function (part,orphan){
return null;
}));
cljs.core._add_method.call(null,transmorphic.manipulation.incorporate,new cljs.core.Keyword(null,"root","root",-448657453),(function (root,orphan){
return null;
}));
transmorphic.manipulation.changes_on_morph = (function transmorphic$manipulation$changes_on_morph(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.manipulation.tx_index),path);
});
transmorphic.manipulation.empty_node = (function transmorphic$manipulation$empty_node(morph){
var submorph_nodes = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key.call(null,s),(cljs.core.truth_(cljs.core.val.call(null,s))?transmorphic$manipulation$empty_node.call(null,cljs.core.val.call(null,s)):null)], null);
}),morph.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770))));
var G__27309 = (((morph.call(null,new cljs.core.Keyword(null,"node-type","node-type",129492462)) instanceof cljs.core.Keyword))?morph.call(null,new cljs.core.Keyword(null,"node-type","node-type",129492462)).fqn:null);
switch (G__27309) {
case "coll":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"structure","structure",1563832083),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorph_nodes], null);

break;
case "morph":
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prop-changes","prop-changes",1146560598),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"structure","structure",1563832083),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorph_nodes,new cljs.core.Keyword(null,"source-location","source-location",17618786),cljs.core.get.call(null,morph,new cljs.core.Keyword(null,"source-location","source-location",17618786)),new cljs.core.Keyword(null,"change-integrator","change-integrator",-2108249478),cljs.core.get.call(null,morph,new cljs.core.Keyword(null,"change-integrator","change-integrator",-2108249478))], null);

break;
case "expr":
return cljs.core.PersistentArrayMap.EMPTY;

break;
default:
throw [cljs.core.str("Encountered unknown structure at "),cljs.core.str(morph)].join('');

}
});
transmorphic.manipulation.track_changes_BANG_ = (function transmorphic$manipulation$track_changes_BANG_(morph,path){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.manipulation.tx_index),path))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,transmorphic.manipulation.tx_index,cljs.core.assoc_in,path,transmorphic.manipulation.empty_node.call(null,morph));
}
});
transmorphic.manipulation.ensure_node = (function transmorphic$manipulation$ensure_node(node,path){
return cljs.core.merge.call(null,transmorphic.manipulation.empty_node.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.manipulation.world_state),path)),node);
});
transmorphic.manipulation.ensure_root_node = (function transmorphic$manipulation$ensure_root_node(path){
var root_path = transmorphic.manipulation.abstraction_root.call(null,cljs.core.deref.call(null,transmorphic.manipulation.world_state),path);
return cljs.core.swap_BANG_.call(null,transmorphic.manipulation.tx_index,cljs.core.update_in,root_path,((function (root_path){
return (function (root){
return transmorphic.manipulation.ensure_node.call(null,root,root_path);
});})(root_path))
);
});
transmorphic.manipulation.clear_txs_for_BANG_ = (function transmorphic$manipulation$clear_txs_for_BANG_(path){
cljs.core.prn.call(null,"clearing interactions with ",path);

return cljs.core.swap_BANG_.call(null,transmorphic.manipulation.tx_index,cljs.core.assoc_in,path,null);
});
/**
 * Undo the transaction given by the tx-id.
 *   tx-id is of the form [[:structure | :prop-changes][idx | prop-name]]
 */
transmorphic.manipulation.revert_tx_BANG_ = (function transmorphic$manipulation$revert_tx_BANG_(tx_id){
return null;
});
transmorphic.manipulation.move_morph_BANG_ = (function transmorphic$manipulation$move_morph_BANG_(from_lens,to_lens){
return null;
});
transmorphic.manipulation.set_prop_BANG_ = (function transmorphic$manipulation$set_prop_BANG_(path,prop,value){
return cljs.core.swap_BANG_.call(null,transmorphic.manipulation.tx_index,cljs.core.update_in,path,(function (self){
var self__$1 = transmorphic.manipulation.ensure_node.call(null,self,path);
transmorphic.manipulation.set_prop_change.call(null,self__$1,prop,value);

return cljs.core.assoc_in.call(null,self__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop-changes","prop-changes",1146560598),prop], null),value);
}));
});
transmorphic.manipulation.without_BANG_ = (function transmorphic$manipulation$without_BANG_(path){
var id_27311 = cljs.core.last.call(null,path);
var path_27312__$1 = cljs.core.drop_last.call(null,(2),path);
cljs.core.swap_BANG_.call(null,transmorphic.manipulation.tx_index,cljs.core.update_in,path_27312__$1,((function (id_27311,path_27312__$1){
return (function (self){
var self__$1 = transmorphic.manipulation.ensure_node.call(null,self,path_27312__$1);
var to_be_removed = cljs.core.get_in.call(null,self__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770),id_27311], null));
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"node-type","node-type",129492462).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.manipulation.world_state),path_27312__$1)),new cljs.core.Keyword(null,"coll","coll",1647737163))){
transmorphic.manipulation.remove_morph_change.call(null,self__$1,cljs.core.get_in.call(null,self__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770),id_27311], null)));
} else {
}

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"structure","structure",1563832083)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"idx","idx",1053688473),id_27311,new cljs.core.Keyword(null,"backup","backup",26347393),to_be_removed], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770)], null),((function (self__$1,to_be_removed,id_27311,path_27312__$1){
return (function (subs){
return cljs.core.dissoc.call(null,subs,id_27311);
});})(self__$1,to_be_removed,id_27311,path_27312__$1))
);
});})(id_27311,path_27312__$1))
);

return cljs.core.swap_BANG_.call(null,transmorphic.manipulation.trigger_rerender_BANG_,cljs.core.inc);
});
transmorphic.manipulation.ad_hoc_id = (function transmorphic$manipulation$ad_hoc_id(submorphs){
return (cljs.core.apply.call(null,cljs.core.max,(-1),cljs.core.map.call(null,(function (p1__27313_SHARP_){
if(typeof p1__27313_SHARP_ === 'number'){
return p1__27313_SHARP_;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"ordering","ordering",1096406705).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,submorphs))),p1__27313_SHARP_);
}
}),cljs.core.keys.call(null,submorphs))) + (1));
});
transmorphic.manipulation.add_morph_BANG_ = (function transmorphic$manipulation$add_morph_BANG_(var_args){
var args27314 = [];
var len__17883__auto___27317 = arguments.length;
var i__17884__auto___27318 = (0);
while(true){
if((i__17884__auto___27318 < len__17883__auto___27317)){
args27314.push((arguments[i__17884__auto___27318]));

var G__27319 = (i__17884__auto___27318 + (1));
i__17884__auto___27318 = G__27319;
continue;
} else {
}
break;
}

var G__27316 = args27314.length;
switch (G__27316) {
case 2:
return transmorphic.manipulation.add_morph_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return transmorphic.manipulation.add_morph_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27314.length)].join('')));

}
});

transmorphic.manipulation.add_morph_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (self,morph){
return transmorphic.manipulation.add_morph_BANG_.call(null,self,morph,null);
});

transmorphic.manipulation.add_morph_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (self,morph,changes){
var temp__4423__auto__ = new cljs.core.Keyword(null,"on-morph-add","on-morph-add",2032596050).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(self));
if(cljs.core.truth_(temp__4423__auto__)){
var add_morph_cb_BANG_ = temp__4423__auto__;
return add_morph_cb_BANG_.call(null,morph);
} else {
var morph_STAR_ = ((cljs.core.fn_QMARK_.call(null,morph))?morph.call(null):morph);
var changes__$1 = cljs.core.merge.call(null,transmorphic.manipulation.empty_node.call(null,morph_STAR_),changes);
var morph_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph_STAR_));
if(cljs.core.truth_(morph_id)){
} else {
throw [cljs.core.str("I can not grab a morph with no assigned id!")].join('');
}

cljs.core.swap_BANG_.call(null,transmorphic.manipulation.tx_index,cljs.core.update_in,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(self),((function (morph_STAR_,changes__$1,morph_id,temp__4423__auto__){
return (function (n){
var n__$1 = transmorphic.manipulation.ensure_node.call(null,n,transmorphic.manipulation.path);
var alias_loc = transmorphic.manipulation.add_morph_change.call(null,n__$1,changes__$1);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,n__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"structure","structure",1563832083)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"add-morph","add-morph",1624807286),new cljs.core.Keyword(null,"morph","morph",-595175877),morph,new cljs.core.Keyword(null,"idx","idx",1053688473),morph_id,new cljs.core.Keyword(null,"backup","backup",26347393),changes__$1], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770),morph_id,new cljs.core.Keyword(null,"alias","alias",-2039751630)], null),alias_loc);
});})(morph_STAR_,changes__$1,morph_id,temp__4423__auto__))
);

cljs.core.swap_BANG_.call(null,transmorphic.manipulation.trigger_rerender_BANG_,cljs.core.inc);

return cljs.core.concat.call(null,transmorphic.manipulation.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770),morph_id], null));
}
});

transmorphic.manipulation.add_morph_BANG_.cljs$lang$maxFixedArity = 3;
transmorphic.manipulation.set_id_BANG_ = (function transmorphic$manipulation$set_id_BANG_(path,new_id){
var idx = cljs.core.last.call(null,path);
var path__$1 = cljs.core.drop_last.call(null,(2),path);
return cljs.core.swap_BANG_.call(null,transmorphic.manipulation.tx_index,cljs.core.update_in,path__$1,((function (idx,path__$1){
return (function (self){
var self__$1 = transmorphic.manipulation.ensure_node.call(null,self,path__$1);
transmorphic.manipulation.set_id_change.call(null,self__$1,idx,new_id);

return cljs.core.update_in.call(null,self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"structure","structure",1563832083)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set-id","set-id",675256473),new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"new-id","new-id",638836512),new_id], null));
});})(idx,path__$1))
);
});
transmorphic.manipulation.add_evolvement_BANG_ = (function transmorphic$manipulation$add_evolvement_BANG_(path,evolve_fn){
cljs.core.swap_BANG_.call(null,transmorphic.manipulation.trigger_rerender_BANG_,cljs.core.inc);

return transmorphic.manipulation.add_morph_BANG_.call(null,path,evolve_fn);
});
transmorphic.manipulation.add_morph = (function transmorphic$manipulation$add_morph(parent,morph,morph_id){

var morph__$1 = ((cljs.core.fn_QMARK_.call(null,morph))?morph.call(null):morph);
var submorphs = new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(parent);
var ordering = new cljs.core.Keyword(null,"ordering","ordering",1096406705).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,submorphs));
cljs.core.swap_BANG_.call(null,ordering,cljs.core.assoc,morph_id,transmorphic.manipulation.ad_hoc_id.call(null,submorphs));

return cljs.core.assoc_in.call(null,parent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770),morph_id], null),morph__$1);
});
transmorphic.manipulation.set_id = (function transmorphic$manipulation$set_id(parent,idx,new_id){
return cljs.core.update_in.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770)], null),(function (submorphs){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,submorphs,idx),new_id,cljs.core.assoc_in.call(null,cljs.core.get.call(null,submorphs,idx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new_id));
}));
});
transmorphic.manipulation.apply_tx = (function transmorphic$manipulation$apply_tx(tx,morph){
var G__27322 = (((tx.call(null,new cljs.core.Keyword(null,"op","op",-1882987955)) instanceof cljs.core.Keyword))?tx.call(null,new cljs.core.Keyword(null,"op","op",-1882987955)).fqn:null);
switch (G__27322) {
case "set-id":
return transmorphic.manipulation.set_id.call(null,morph,tx.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473)),tx.call(null,new cljs.core.Keyword(null,"new-id","new-id",638836512)));

break;
case "add-morph":
return transmorphic.manipulation.add_morph.call(null,morph,tx.call(null,new cljs.core.Keyword(null,"morph","morph",-595175877)),tx.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473)));

break;
case "without":
return transmorphic.manipulation.remove_morph.call(null,morph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770),tx.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473))], null));

break;
default:
return morph;

}
});
transmorphic.manipulation.apply_interactions = (function transmorphic$manipulation$apply_interactions(var_args){
var args27326 = [];
var len__17883__auto___27329 = arguments.length;
var i__17884__auto___27330 = (0);
while(true){
if((i__17884__auto___27330 < len__17883__auto___27329)){
args27326.push((arguments[i__17884__auto___27330]));

var G__27331 = (i__17884__auto___27330 + (1));
i__17884__auto___27330 = G__27331;
continue;
} else {
}
break;
}

var G__27328 = args27326.length;
switch (G__27328) {
case 1:
return transmorphic.manipulation.apply_interactions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.manipulation.apply_interactions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27326.length)].join('')));

}
});

transmorphic.manipulation.apply_interactions.cljs$core$IFn$_invoke$arity$1 = (function (world){
return transmorphic.manipulation.apply_interactions.call(null,world,cljs.core.deref.call(null,transmorphic.manipulation.tx_index));
});

transmorphic.manipulation.apply_interactions.cljs$core$IFn$_invoke$arity$2 = (function (morph,txs){
var ci = cljs.core.get.call(null,txs,new cljs.core.Keyword(null,"change-integrator","change-integrator",-2108249478));
var morph__$1 = (function (){var temp__4423__auto__ = cljs.core.get.call(null,txs,new cljs.core.Keyword(null,"structure","structure",1563832083));
if(cljs.core.truth_(temp__4423__auto__)){
var structure_changes = temp__4423__auto__;
var changes = structure_changes;
var m = morph;
while(true){
var temp__4423__auto____$1 = cljs.core.first.call(null,changes);
if(cljs.core.truth_(temp__4423__auto____$1)){
var change = temp__4423__auto____$1;
var G__27333 = cljs.core.rest.call(null,changes);
var G__27334 = transmorphic.manipulation.apply_tx.call(null,change,m);
changes = G__27333;
m = G__27334;
continue;
} else {
return m;
}
break;
}
} else {
return morph;
}
})();
var morph__$2 = (function (){var temp__4423__auto__ = cljs.core.get.call(null,txs,new cljs.core.Keyword(null,"prop-changes","prop-changes",1146560598));
if(cljs.core.truth_(temp__4423__auto__)){
var new_props = temp__4423__auto__;
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,morph__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727)], null),((function (new_props,temp__4423__auto__,ci,morph__$1){
return (function (p1__27324_SHARP_){
return cljs.core.merge.call(null,p1__27324_SHARP_,new_props);
});})(new_props,temp__4423__auto__,ci,morph__$1))
),new cljs.core.Keyword(null,"overridden-props","overridden-props",1786016007),(function (){var temp__4425__auto__ = (function (){var and__16813__auto__ = ci;
if(cljs.core.truth_(and__16813__auto__)){
return new cljs.core.Keyword(null,"props-atom","props-atom",1757377226).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,ci),morph__$1.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786))));
} else {
return and__16813__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var props = temp__4425__auto__;
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,props),new cljs.core.Keyword(null,"overridden","overridden",1487611311).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,ci),morph__$1.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786)))));
} else {
return null;
}
})());
} else {
return morph__$1;
}
})();
var morph__$3 = (cljs.core.truth_(ci)?cljs.core.assoc.call(null,morph__$2,new cljs.core.Keyword(null,"consolidated-abstraction","consolidated-abstraction",1506074378),transmorphic.manipulation.get_description.call(null,cljs.core.deref.call(null,ci))):morph__$2);
return cljs.core.reduce_kv.call(null,((function (ci,morph__$1,morph__$2,morph__$3){
return (function (morph__$4,id,txs__$1){
return cljs.core.update_in.call(null,morph__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770),id], null),((function (ci,morph__$1,morph__$2,morph__$3){
return (function (p1__27325_SHARP_){
if(cljs.core.truth_(p1__27325_SHARP_)){
return transmorphic.manipulation.apply_interactions.call(null,p1__27325_SHARP_,txs__$1);
} else {
return null;
}
});})(ci,morph__$1,morph__$2,morph__$3))
);
});})(ci,morph__$1,morph__$2,morph__$3))
,morph__$3,cljs.core.select_keys.call(null,cljs.core.get.call(null,txs,new cljs.core.Keyword(null,"submorphs","submorphs",360747770)),cljs.core.keys.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(morph__$3))));
});

transmorphic.manipulation.apply_interactions.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=manipulation.js.map
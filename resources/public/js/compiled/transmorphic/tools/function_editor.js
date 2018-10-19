// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.tools.function_editor');
goog.require('cljs.core');
goog.require('transmorphic.morph');
goog.require('transmorphic.core');
goog.require('transmorphic.symbolic');
goog.require('transmorphic.tools.window');
goog.require('transmorphic.tools.ace');
goog.require('transmorphic.repl');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.pprint');
transmorphic.tools.function_editor.get_slice_for_defn = (function transmorphic$tools$function_editor$get_slice_for_defn(source,defn_name){
var ast = paredit.parse(source);
var def_nodes = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.call(null,ast.children.map(((function (ast){
return (function (node){
var temp__4425__auto__ = node.children;
if(cljs.core.truth_(temp__4425__auto__)){
var ch = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,paredit.walk.stringify((ch[(1)]))),node], null);
} else {
return null;
}
});})(ast))
)));
var ns_def_node = cljs.core.get.call(null,def_nodes,defn_name);
if(cljs.core.truth_(ns_def_node)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.get.call(null,ns_def_node,"start"),new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.get.call(null,ns_def_node,"end")], null);
} else {
return null;
}
});
transmorphic.tools.function_editor.get_description_for = (function transmorphic$tools$function_editor$get_description_for(component,root_morph){
if(cljs.core.truth_((function (){var and__16813__auto__ = component;
if(cljs.core.truth_(and__16813__auto__)){
return new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(root_morph);
} else {
return and__16813__auto__;
}
})())){
return transmorphic.symbolic.format_code.call(null,cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"defcomponent","defcomponent",974395370,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(component)),transmorphic.symbolic.get_component_def.call(null,cljs.core.deref.call(null,transmorphic.core.universe),root_morph,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(component))));
} else {
return transmorphic.symbolic.format_code.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"render","render",232498073,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"self","self",93102628,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"props","props",2093813254,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,transmorphic.symbolic.get_external_reconciliation.call(null,cljs.core.deref.call(null,transmorphic.core.universe),root_morph)))))),new cljs.core.Symbol(null,"IRender","IRender",590822196,null)),cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(root_morph))),cljs.core.str("-component")].join(''))),new cljs.core.Symbol(null,"defcomponent","defcomponent",974395370,null)));
}
});
transmorphic.tools.function_editor.get_defn_in_source = (function transmorphic$tools$function_editor$get_defn_in_source(component,source){
var map__33150 = transmorphic.tools.function_editor.get_slice_for_defn.call(null,source,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(component)));
var map__33150__$1 = ((((!((map__33150 == null)))?((((map__33150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33150):map__33150);
var start = cljs.core.get.call(null,map__33150__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__33150__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.subs.call(null,source,start,end);
});
transmorphic.tools.function_editor.refresh_editor_BANG_ = (function transmorphic$tools$function_editor$refresh_editor_BANG_(p__33152,ace_editor,root_morph,ns_source,component){
var map__33155 = p__33152;
var map__33155__$1 = ((((!((map__33155 == null)))?((((map__33155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33155):map__33155);
var self = map__33155__$1;
var local_state = cljs.core.get.call(null,map__33155__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
if(cljs.core.truth_((function (){var and__16813__auto__ = ns_source;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"locked?","locked?",995448757).cljs$core$IFn$_invoke$arity$1(local_state));
} else {
return and__16813__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(component)))){
return transmorphic.tools.ace.set_value_BANG_.call(null,self,ace_editor,transmorphic.tools.function_editor.get_description_for.call(null,component,root_morph));
} else {
if(cljs.core.not.call(null,component)){
return transmorphic.tools.ace.set_value_BANG_.call(null,self,ace_editor,transmorphic.tools.function_editor.get_description_for.call(null,component,root_morph));
} else {
return transmorphic.tools.ace.set_value_BANG_.call(null,self,ace_editor,transmorphic.tools.function_editor.get_defn_in_source.call(null,component,ns_source));

}
}
} else {
return null;
}
});
transmorphic.tools.function_editor.save_handler = (function transmorphic$tools$function_editor$save_handler(p__33157,component,root_morph,ns_source,p__33158){
var map__33167 = p__33157;
var map__33167__$1 = ((((!((map__33167 == null)))?((((map__33167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33167):map__33167);
var self = map__33167__$1;
var local_state = cljs.core.get.call(null,map__33167__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__33168 = p__33158;
var map__33168__$1 = ((((!((map__33168 == null)))?((((map__33168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33168):map__33168);
var description = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var ns = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var create_QMARK_ = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"create?","create?",-1986446702));
if(cljs.core.truth_(create_QMARK_)){
var name_33175__$1 = cljs.core.second.call(null,cljs.reader.read_string.call(null,description));
var map__33171_33176 = transmorphic.tools.function_editor.get_slice_for_defn.call(null,ns_source,ns);
var map__33171_33177__$1 = ((((!((map__33171_33176 == null)))?((((map__33171_33176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33171_33176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33171_33176):map__33171_33176);
var start_33178 = cljs.core.get.call(null,map__33171_33177__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_33179 = cljs.core.get.call(null,map__33171_33177__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var new_ns_source_33180 = [cljs.core.str(cljs.core.subs.call(null,ns_source,start_33178,end_33179)),cljs.core.str("\n\n"),cljs.core.str(cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name_33175__$1))))),cljs.core.str("\n"),cljs.core.str(cljs.core.subs.call(null,ns_source,end_33179)),cljs.core.str("\n\n"),cljs.core.str(description)].join('');
transmorphic.core.create_abstraction_BANG_.call(null,self,root_morph,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_33175__$1,new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"new-source","new-source",-1734301279),new_ns_source_33180], null));
} else {
var map__33173_33181 = transmorphic.tools.function_editor.get_slice_for_defn.call(null,ns_source,name);
var map__33173_33182__$1 = ((((!((map__33173_33181 == null)))?((((map__33173_33181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33173_33181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33173_33181):map__33173_33181);
var start_33183 = cljs.core.get.call(null,map__33173_33182__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_33184 = cljs.core.get.call(null,map__33173_33182__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var new_ns_source_33185 = [cljs.core.str(cljs.core.subs.call(null,ns_source,(0),start_33183)),cljs.core.str(description),cljs.core.str(cljs.core.subs.call(null,ns_source,end_33184))].join('');
transmorphic.core.update_abstraction_BANG_.call(null,self,component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"new-source","new-source",-1734301279),new_ns_source_33185], null));
}

return transmorphic.core.rerender_BANG_.call(null,self,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compiling?","compiling?",-383905868),true], null));
});
transmorphic.tools.function_editor.component_editor;


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
transmorphic.tools.function_editor.component_editor_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
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
transmorphic.tools.function_editor.component_editor_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.function_editor.component_editor_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33194,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33196 = (((k33194 instanceof cljs.core.Keyword))?k33194.fqn:null);
switch (G__33196) {
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
return cljs.core.get.call(null,self__.__extmap,k33194,else__17442__auto__);

}
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.function-editor.component-editor*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33193){
var self__ = this;
var G__33193__$1 = this;
return (new cljs.core.RecordIter((0),G__33193__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.function_editor.component_editor_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.function_editor.component_editor_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.function_editor.component_editor_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (p__33197,p__33198,_,render_ctx__30602__auto__){
var self__ = this;
var map__33199 = p__33197;
var map__33199__$1 = ((((!((map__33199 == null)))?((((map__33199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33199):map__33199);
var self = map__33199__$1;
var local_state__$1 = cljs.core.get.call(null,map__33199__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__33200 = p__33198;
var map__33200__$1 = ((((!((map__33200 == null)))?((((map__33200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33200):map__33200);
var props__$1 = map__33200__$1;
var position = cljs.core.get.call(null,map__33200__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var extent = cljs.core.get.call(null,map__33200__$1,new cljs.core.Keyword(null,"extent","extent",-186399820));
var target_ref = cljs.core.get.call(null,map__33200__$1,new cljs.core.Keyword(null,"target-ref","target-ref",-164384803));
var id = cljs.core.get.call(null,map__33200__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_close = cljs.core.get.call(null,map__33200__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var map__33203 = this;
var map__33203__$1 = ((((!((map__33203 == null)))?((((map__33203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33203):map__33203);
var self__$1 = map__33203__$1;
var local_state__$2 = cljs.core.get.call(null,map__33203__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var root_morph = transmorphic.morph.$morph.call(null,target_ref);
var component = (function (){var and__16813__auto__ = new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(root_morph);
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(root_morph);
if(cljs.core.truth_(and__16813__auto____$1)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(root_morph));
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})();
var abstraction_info = (function (){var or__16825__auto__ = new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null),new cljs.core.Keyword(null,"create?","create?",-1986446702),true,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(root_morph))),cljs.core.str("-component")].join(''))], null);
}
})();
var title = [cljs.core.str(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(abstraction_info)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(abstraction_info))].join('');
var ns_source = transmorphic.morph.$source.call(null,(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(component));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null);
}
})());
var editor = (function (){var and__16813__auto__ = document.getElementById(props__$1.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
if(cljs.core.truth_(and__16813__auto__)){
return ace.edit(props__$1.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
} else {
return and__16813__auto__;
}
})();
if(cljs.core.truth_(editor)){
transmorphic.tools.ace.set_save_handler_BANG_.call(null,editor,((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (p1__33186_SHARP_){
return transmorphic.tools.function_editor.save_handler.call(null,self__$1,component,root_morph,ns_source,cljs.core.assoc.call(null,abstraction_info,new cljs.core.Keyword(null,"description","description",-1428560544),p1__33186_SHARP_));
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
);
} else {
}

return transmorphic.core.wrap_component.call(null,transmorphic.tools.window.window.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"extent","extent",-186399820),extent,new cljs.core.Keyword(null,"spinner?","spinner?",939139177),new cljs.core.Keyword(null,"compiling?","compiling?",-383905868).cljs$core$IFn$_invoke$arity$1(local_state__$2),new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (___$1){
on_close.call(null);

return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locked?","locked?",995448757),false], null));
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
,new cljs.core.Keyword(null,"title","title",636505583),title], null),cljs.core.assoc.call(null,transmorphic.core.ace.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ace-id","ace-id",1168967199),id,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(new cljs.core.Keyword(null,"locked?","locked?",995448757).cljs$core$IFn$_invoke$arity$1(local_state__$2))?"orange":"transparent"),new cljs.core.Keyword(null,"step","step",1288888124),((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (___$1){
if(cljs.core.truth_(editor)){
return transmorphic.tools.function_editor.refresh_editor_BANG_.call(null,self__$1,editor,root_morph,ns_source,component);
} else {
return null;
}
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (___$1){
return transmorphic.tools.ace.setup_ace_BANG_.call(null,self__$1,props__$1);
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (p1__33187_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(210),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__33187_SHARP_) - (20))]);
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"Locked? ",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(4)),cljs.core.assoc.call(null,transmorphic.core.checkbox.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (___$1){
return transmorphic.core.rerender_BANG_.call(null,self__$1,((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (p1__33188_SHARP_){
return cljs.core.update_in.call(null,p1__33188_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locked?","locked?",995448757)], null),cljs.core.not);
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
);
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
,new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Keyword(null,"locked?","locked?",995448757).cljs$core$IFn$_invoke$arity$1(local_state__$2),new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (p1__33189_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(290),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__33189_SHARP_) - (20))]);
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(5))], null),(cljs.core.truth_(component)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (p1__33190_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(10),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__33190_SHARP_) - (20))]);
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"Reconcile Changes ",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(7)),cljs.core.assoc.call(null,transmorphic.core.checkbox.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (___$1){
return transmorphic.core.toggle_reconciler_BANG_.call(null,component);
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
,new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(component)),new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close){
return (function (p1__33191_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(180),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__33191_SHARP_) - (20))]);
});})(root_morph,component,abstraction_info,title,ns_source,editor,map__33203,map__33203__$1,self__$1,local_state__$2,map__33199,map__33199__$1,self,local_state__$1,map__33200,map__33200__$1,props__$1,position,extent,target_ref,id,on_close))
)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(8))], null):null)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33193){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33205 = cljs.core.keyword_identical_QMARK_;
var expr__33206 = k__17447__auto__;
if(cljs.core.truth_(pred__33205.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33206))){
return (new transmorphic.tools.function_editor.component_editor_STAR_(G__33193,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33205.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33206))){
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,G__33193,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33205.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33206))){
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,G__33193,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33205.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33206))){
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,self__.parent,G__33193,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33205.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33206))){
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33193,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33205.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33206))){
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33193,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33205.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33206))){
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33193,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33205.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33206))){
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33193,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33205.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33206))){
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33193,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33193),null));
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

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33193){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.function_editor.component_editor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33193,self__.__extmap,self__.__hash));
});

transmorphic.tools.function_editor.component_editor_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.function_editor.component_editor_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.function_editor.component_editor_STAR_.cljs$lang$type = true;

transmorphic.tools.function_editor.component_editor_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.function-editor/component-editor*");
});

transmorphic.tools.function_editor.component_editor_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.function-editor/component-editor*");
});

transmorphic.tools.function_editor.__GT_component_editor_STAR_ = (function transmorphic$tools$function_editor$__GT_component_editor_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.function_editor.component_editor_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.function_editor.map__GT_component_editor_STAR_ = (function transmorphic$tools$function_editor$map__GT_component_editor_STAR_(G__33195){
return (new transmorphic.tools.function_editor.component_editor_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33195),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33195),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33195),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33195),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33195),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33195),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33195),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33195),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33195),null,cljs.core.dissoc.call(null,G__33195,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.function_editor.component_editor = (function transmorphic$tools$function_editor$component_editor(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33220 = arguments.length;
var i__17884__auto___33221 = (0);
while(true){
if((i__17884__auto___33221 < len__17883__auto___33220)){
args__17890__auto__.push((arguments[i__17884__auto___33221]));

var G__33222 = (i__17884__auto___33221 + (1));
i__17884__auto___33221 = G__33222;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.function_editor.component_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.function_editor.component_editor.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.function_editor.map__GT_component_editor_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.PersistentHashMap.fromArrays([(0),new cljs.core.Keyword(null,"active?","active?",459499776),(7),(1),(4),(6),(3),(2),(5),(8)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33210){
var map__33211 = p__33210;
var map__33211__$1 = ((((!((map__33211 == null)))?((((map__33211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33211):map__33211);
var m_1 = cljs.core.get.call(null,map__33211__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRender","IRender",590822196,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"position","position",-371200385,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extent","extent",1454131707,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target-ref","target-ref",1476146724,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-close","on-close",879353133,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root-morph","root-morph",-1672043146,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$morph","$morph",1827866470,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target-ref","target-ref",1476146724,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root-morph","root-morph",-1672043146,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner","owner",-392611939)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root-morph","root-morph",-1672043146,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"universe","universe",-588789408,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner","owner",-392611939)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root-morph","root-morph",-1672043146,null)], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"abstraction-info","abstraction-info",-713207008,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abstraction","abstraction",877248569)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",1377916282,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create?","create?",-1986446702)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"str","str",-1564826950,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root-morph","root-morph",-1672043146,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-component"], null)))], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"str","str",-1564826950,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"abstraction-info","abstraction-info",-713207008,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"abstraction-info","abstraction-info",-713207008,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns-source","ns-source",-1961802475,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$source","$source",321323049,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abstraction","abstraction",877248569)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",1377916282,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"examples.playground","examples.playground",728965668,null)], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"editor","editor",651153757,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".getElementById",".getElementById",-816611111,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("js","document","js/document",311343521,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".edit",".edit",316445950,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("js","ace","js/ace",-1015727366,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)))], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"when","when",1064114221,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"editor","editor",651153757,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-save-handler!","set-save-handler!",-510935436,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"editor","editor",651153757,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33186__auto__33192","p1__33186__auto__33192",-300123559,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"save-handler","save-handler",-89597391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root-morph","root-morph",-1672043146,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns-source","ns-source",-1961802475,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"assoc","assoc",2071440380,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"abstraction-info","abstraction-info",-713207008,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33186__auto__33192","p1__33186__auto__33192",-300123559,null)], null)))], null)))], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),false,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33190#","p1__33190#",-1854518919,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"p1__33190#","p1__33190#",-1854518919,null)),(20))))),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"Reconcile Changes ",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"window","window",-1929916235,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"position","position",-371200385,null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Symbol(null,"extent","extent",1454131707,null),new cljs.core.Keyword(null,"spinner?","spinner?",939139177),cljs.core.list(new cljs.core.Keyword(null,"compiling?","compiling?",-383905868),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)),new cljs.core.Keyword(null,"on-close","on-close",-761178394),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"on-close","on-close",879353133,null)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locked?","locked?",995448757),false], null))),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"title","title",-2017930186,null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(6)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33187#","p1__33187#",1943247154,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),(210),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"p1__33187#","p1__33187#",1943247154,null)),(20))))),new cljs.core.Keyword(null,"text-string","text-string",1520601822),"Locked? ",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic",new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33213){
var map__33214 = p__33213;
var map__33214__$1 = ((((!((map__33214 == null)))?((((map__33214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33214):map__33214);
var m_7 = cljs.core.get.call(null,map__33214__$1,new cljs.core.Keyword(null,"m_7","m_7",1374517055));
var m_8 = cljs.core.get.call(null,map__33214__$1,new cljs.core.Keyword(null,"m_8","m_8",-384151164));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"when","when",1064114221,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_7], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_8], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33216){
var map__33217 = p__33216;
var map__33217__$1 = ((((!((map__33217 == null)))?((((map__33217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33217):map__33217);
var m_5 = cljs.core.get.call(null,map__33217__$1,new cljs.core.Keyword(null,"m_5","m_5",-1278638212));
var m_4 = cljs.core.get.call(null,map__33217__$1,new cljs.core.Keyword(null,"m_4","m_4",556075955));
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_4], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_5], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ace","ace",-1015690959,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ace-id","ace-id",1168967199),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Keyword(null,"locked?","locked?",995448757),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)),"orange","transparent"),new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"editor","editor",651153757,null),cljs.core.list(new cljs.core.Symbol(null,"refresh-editor!","refresh-editor!",-783469197,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"editor","editor",651153757,null),new cljs.core.Symbol(null,"root-morph","root-morph",-1672043146,null),new cljs.core.Symbol(null,"ns-source","ns-source",-1961802475,null),new cljs.core.Symbol(null,"component","component",-1098498987,null)))),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"setup-ace!","setup-ace!",691619940,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"checkbox","checkbox",-1041820114,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33188#","p1__33188#",2021103821,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"p1__33188#","p1__33188#",2021103821,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locked?","locked?",995448757)], null),new cljs.core.Symbol(null,"not","not",1044554643,null))))),new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Keyword(null,"locked?","locked?",995448757)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33189#","p1__33189#",300333480,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),(290),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"p1__33189#","p1__33189#",300333480,null)),(20)))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"checkbox","checkbox",-1041820114,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"toggle-reconciler!","toggle-reconciler!",1774348800,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))),new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"active?","active?",459499776)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33191#","p1__33191#",-1045381519,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),(180),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"p1__33191#","p1__33191#",-1045381519,null)),(20)))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null)]),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.function-editor","transmorphic.tools.function-editor",-1782227140,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"component-editor","component-editor",1635482522,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.function_editor.component_editor.cljs$lang$maxFixedArity = (1);

transmorphic.tools.function_editor.component_editor.cljs$lang$applyTo = (function (seq33208){
var G__33209 = cljs.core.first.call(null,seq33208);
var seq33208__$1 = cljs.core.next.call(null,seq33208);
return transmorphic.tools.function_editor.component_editor.cljs$core$IFn$_invoke$arity$variadic(G__33209,seq33208__$1);
});

//# sourceMappingURL=function_editor.js.map
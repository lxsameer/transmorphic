// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.symbolic');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('cljs.tools.reader');
goog.require('cljs.analyzer');
goog.require('transmorphic.globals');
goog.require('clojure.core.reducers');
goog.require('clojure.string');
goog.require('clojure.zip');
transmorphic.symbolic.orphan_QMARK_ = (function transmorphic$symbolic$orphan_QMARK_(morph){
return (new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(morph) == null);
});
/**
 * A morph is foreign to another one, if
 *   he is an orphan or the owner are always
 *   different regardless how high we walk up
 *   the owner chain
 */
transmorphic.symbolic.foreign_QMARK_ = (function transmorphic$symbolic$foreign_QMARK_(state,a,b){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(b))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(b)));
});
transmorphic.symbolic.fetch_ns_source = (function transmorphic$symbolic$fetch_ns_source(ns){
return null;
});
transmorphic.symbolic.update_ns_source_BANG_ = (function transmorphic$symbolic$update_ns_source_BANG_(ns){
return null;
});
transmorphic.symbolic.format_code = (function transmorphic$symbolic$format_code(form){

var sb__17799__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30299_30303 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30300_30304 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30299_30303,_STAR_print_fn_STAR_30300_30304,sb__17799__auto__){
return (function (x__17800__auto__){
return sb__17799__auto__.append(x__17800__auto__);
});})(_STAR_print_newline_STAR_30299_30303,_STAR_print_fn_STAR_30300_30304,sb__17799__auto__))
;

try{var _STAR_print_right_margin_STAR_30301_30305 = cljs.pprint._STAR_print_right_margin_STAR_;
cljs.pprint._STAR_print_right_margin_STAR_ = (72);

try{var _STAR_print_pprint_dispatch_STAR_30302_30306 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,form);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_30302_30306;
}}finally {cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_30301_30305;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30300_30304;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30299_30303;
}
return [cljs.core.str(sb__17799__auto__)].join('');
});
transmorphic.symbolic.ctx_param_name = new cljs.core.Symbol(null,"render-ctx__30307__auto__","render-ctx__30307__auto__",-662485033,null);
transmorphic.symbolic._STAR_resolve_STAR_;
transmorphic.symbolic._STAR_gensyms_STAR_;
transmorphic.symbolic.n_resolve = (function transmorphic$symbolic$n_resolve(sym){
var ns = cljs.core.namespace.call(null,sym);
var n = cljs.core.name.call(null,sym);
if((cljs.core.not.call(null,ns)) && (cljs.core._EQ_.call(null,cljs.core.last.call(null,n),"#"))){
var temp__4423__auto__ = cljs.core.deref.call(null,transmorphic.symbolic._STAR_gensyms_STAR_).call(null,sym);
if(cljs.core.truth_(temp__4423__auto__)){
var gs = temp__4423__auto__;
return gs;
} else {
var gs = cljs.core.gensym.call(null,[cljs.core.str(cljs.core.subs.call(null,n,(0),(cljs.core.count.call(null,n) - (1)))),cljs.core.str("__auto__")].join(''));
cljs.core.swap_BANG_.call(null,transmorphic.symbolic._STAR_gensyms_STAR_,cljs.core.assoc,sym,gs);

return gs;
}
} else {
return transmorphic.symbolic._STAR_resolve_STAR_.call(null,sym);
}
});
transmorphic.symbolic.unquote_QMARK_ = (function transmorphic$symbolic$unquote_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null)));
});
transmorphic.symbolic.unquote_splicing_QMARK_ = (function transmorphic$symbolic$unquote_splicing_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null)));
});
transmorphic.symbolic.quote_fn_STAR_ = (function transmorphic$symbolic$quote_fn_STAR_(form){
if((form instanceof cljs.core.Symbol)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,transmorphic.symbolic.n_resolve.call(null,form)))));
} else {
if(cljs.core.truth_(transmorphic.symbolic.unquote_QMARK_.call(null,form))){
return cljs.core.second.call(null,form);
} else {
if(cljs.core.truth_(transmorphic.symbolic.unquote_splicing_QMARK_.call(null,form))){
throw "splice not in list";
} else {
if(cljs.core.record_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,form))));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
var xs = ((cljs.core.map_QMARK_.call(null,form))?cljs.core.apply.call(null,cljs.core.concat,form):form);
var parts = (function (){var iter__17597__auto__ = ((function (xs){
return (function transmorphic$symbolic$quote_fn_STAR__$_iter__30312(s__30313){
return (new cljs.core.LazySeq(null,((function (xs){
return (function (){
var s__30313__$1 = s__30313;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30313__$1);
if(temp__4425__auto__){
var s__30313__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30313__$2)){
var c__17595__auto__ = cljs.core.chunk_first.call(null,s__30313__$2);
var size__17596__auto__ = cljs.core.count.call(null,c__17595__auto__);
var b__30315 = cljs.core.chunk_buffer.call(null,size__17596__auto__);
if((function (){var i__30314 = (0);
while(true){
if((i__30314 < size__17596__auto__)){
var x = cljs.core._nth.call(null,c__17595__auto__,i__30314);
cljs.core.chunk_append.call(null,b__30315,(cljs.core.truth_(transmorphic.symbolic.unquote_splicing_QMARK_.call(null,x))?cljs.core.second.call(null,x):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transmorphic$symbolic$quote_fn_STAR_.call(null,x)], null)));

var G__30316 = (i__30314 + (1));
i__30314 = G__30316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30315),transmorphic$symbolic$quote_fn_STAR__$_iter__30312.call(null,cljs.core.chunk_rest.call(null,s__30313__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30315),null);
}
} else {
var x = cljs.core.first.call(null,s__30313__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(transmorphic.symbolic.unquote_splicing_QMARK_.call(null,x))?cljs.core.second.call(null,x):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transmorphic$symbolic$quote_fn_STAR_.call(null,x)], null)),transmorphic$symbolic$quote_fn_STAR__$_iter__30312.call(null,cljs.core.rest.call(null,s__30313__$2)));
}
} else {
return null;
}
break;
}
});})(xs))
,null,null));
});})(xs))
;
return iter__17597__auto__.call(null,xs);
})();
var cat = cljs.core.doall.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),parts))));
if(cljs.core.vector_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cat))));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cat))));
} else {
if(cljs.core.set_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cat))));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cat))));
} else {
throw "Unknown collection type";

}
}
}
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,form))));

}
}
}
}
}
});
transmorphic.symbolic.quote_fn = (function transmorphic$symbolic$quote_fn(resolver,form){
var _STAR_resolve_STAR_30319 = transmorphic.symbolic._STAR_resolve_STAR_;
var _STAR_gensyms_STAR_30320 = transmorphic.symbolic._STAR_gensyms_STAR_;
transmorphic.symbolic._STAR_resolve_STAR_ = resolver;

transmorphic.symbolic._STAR_gensyms_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

try{return transmorphic.symbolic.quote_fn_STAR_.call(null,form);
}finally {transmorphic.symbolic._STAR_gensyms_STAR_ = _STAR_gensyms_STAR_30320;

transmorphic.symbolic._STAR_resolve_STAR_ = _STAR_resolve_STAR_30319;
}});
transmorphic.symbolic.template = (function transmorphic$symbolic$template(_AMPERSAND_form,_AMPERSAND_env,form){
return transmorphic.symbolic.quote_fn.call(null,cljs.core.identity,form);
});

transmorphic.symbolic.template.cljs$lang$macro = true;
transmorphic.symbolic.template_fn = (function transmorphic$symbolic$template_fn(form){
return transmorphic.symbolic.quote_fn.call(null,cljs.core.identity,form);
});
transmorphic.symbolic.get_class = (function transmorphic$symbolic$get_class(node){
if(cljs.core.vector_QMARK_.call(null,node)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.list_QMARK_.call(null,node)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.array_QMARK_.call(null,node)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
return false;

}

}
}
});
if(typeof transmorphic.symbolic.tree_branch_QMARK_ !== 'undefined'){
} else {
transmorphic.symbolic.tree_branch_QMARK_ = (function (){var method_table__17738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"transmorphic.symbolic","tree-branch?"),transmorphic.symbolic.get_class,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17742__auto__,method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__));
})();
}
cljs.core._add_method.call(null,transmorphic.symbolic.tree_branch_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return false;
}));
cljs.core._add_method.call(null,transmorphic.symbolic.tree_branch_QMARK_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (v){
return cljs.core.not_empty.call(null,v);
}));
cljs.core._add_method.call(null,transmorphic.symbolic.tree_branch_QMARK_,new cljs.core.Keyword(null,"hash-map","hash-map",-2079562477),(function (m){
return cljs.core.not_empty.call(null,m);
}));
cljs.core._add_method.call(null,transmorphic.symbolic.tree_branch_QMARK_,new cljs.core.Keyword(null,"list","list",765357683),(function (l){
return true;
}));
cljs.core._add_method.call(null,transmorphic.symbolic.tree_branch_QMARK_,new cljs.core.Keyword(null,"array","array",-2080713842),(function (a){
return true;
}));
if(typeof transmorphic.symbolic.tree_children !== 'undefined'){
} else {
transmorphic.symbolic.tree_children = (function (){var method_table__17738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"transmorphic.symbolic","tree-children"),transmorphic.symbolic.get_class,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17742__auto__,method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__));
})();
}
cljs.core._add_method.call(null,transmorphic.symbolic.tree_children,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (v){
return v;
}));
cljs.core._add_method.call(null,transmorphic.symbolic.tree_children,new cljs.core.Keyword(null,"hash-map","hash-map",-2079562477),(function (m){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,m));
}));
cljs.core._add_method.call(null,transmorphic.symbolic.tree_children,new cljs.core.Keyword(null,"list","list",765357683),(function (l){
return l;
}));
cljs.core._add_method.call(null,transmorphic.symbolic.tree_children,new cljs.core.Keyword(null,"array","array",-2080713842),(function (a){
return a;
}));
if(typeof transmorphic.symbolic.tree_make_node !== 'undefined'){
} else {
transmorphic.symbolic.tree_make_node = (function (){var method_table__17738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"transmorphic.symbolic","tree-make-node"),((function (method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__,hierarchy__17742__auto__){
return (function (node,children){
return transmorphic.symbolic.get_class.call(null,node);
});})(method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__,hierarchy__17742__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17742__auto__,method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__));
})();
}
cljs.core._add_method.call(null,transmorphic.symbolic.tree_make_node,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (v,children){
return cljs.core.vec.call(null,children);
}));
cljs.core._add_method.call(null,transmorphic.symbolic.tree_make_node,new cljs.core.Keyword(null,"hash-map","hash-map",-2079562477),(function (m,children){
return cljs.core.apply.call(null,cljs.core.hash_map,children);
}));
cljs.core._add_method.call(null,transmorphic.symbolic.tree_make_node,new cljs.core.Keyword(null,"list","list",765357683),(function (_,children){
return cljs.core.apply.call(null,cljs.core.list,children);
}));
cljs.core._add_method.call(null,transmorphic.symbolic.tree_make_node,new cljs.core.Keyword(null,"array","array",-2080713842),(function (_,children){
cljs.core.prn.call(null,"create array seq");

return cljs.core.apply.call(null,cljs.core.array_seq,children);
}));
transmorphic.symbolic.tree_zipper = (function transmorphic$symbolic$tree_zipper(node){
return clojure.zip.zipper.call(null,transmorphic.symbolic.tree_branch_QMARK_,transmorphic.symbolic.tree_children,transmorphic.symbolic.tree_make_node,node);
});
transmorphic.symbolic.morph_QMARK_ = (function transmorphic$symbolic$morph_QMARK_(m){
return (cljs.core.seq_QMARK_.call(null,m)) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,transmorphic.globals.morph_defs),cljs.core.first.call(null,m)));
});
transmorphic.symbolic.component_QMARK_ = (function transmorphic$symbolic$component_QMARK_(c){
return (cljs.core.seq_QMARK_.call(null,c)) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,transmorphic.globals.component_defs),cljs.core.first.call(null,c)));
});
transmorphic.symbolic.render_def_QMARK_ = (function transmorphic$symbolic$render_def_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"render","render",232498073,null),cljs.core.first.call(null,form)));
});
transmorphic.symbolic.ellipse_QMARK_ = (function transmorphic$symbolic$ellipse_QMARK_(m){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m));
});
transmorphic.symbolic.each_morph_call_out = (function transmorphic$symbolic$each_morph_call_out(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30325 = arguments.length;
var i__17884__auto___30326 = (0);
while(true){
if((i__17884__auto___30326 < len__17883__auto___30325)){
args__17890__auto__.push((arguments[i__17884__auto___30326]));

var G__30327 = (i__17884__auto___30326 + (1));
i__17884__auto___30326 = G__30327;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((2) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((2)),(0))):null);
return transmorphic.symbolic.each_morph_call_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17891__auto__);
});

transmorphic.symbolic.each_morph_call_out.cljs$core$IFn$_invoke$arity$variadic = (function (form,transform,args){

var root = transmorphic.symbolic.tree_zipper.call(null,form);
var unrolled = cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,clojure.zip.end_QMARK_),cljs.core.iterate.call(null,clojure.zip.next,root));
var i = cljs.core.count.call(null,unrolled);
var z = cljs.core.last.call(null,unrolled);
while(true){
if(cljs.core.truth_((function (){var x = clojure.zip.node.call(null,z);
var or__16825__auto__ = transmorphic.symbolic.morph_QMARK_.call(null,x);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return transmorphic.symbolic.component_QMARK_.call(null,x);
}
})())){
var z__$1 = clojure.zip.edit.call(null,z,((function (i,z,root,unrolled){
return (function (p1__30321_SHARP_){
return cljs.core.apply.call(null,transform,p1__30321_SHARP_,i,args);
});})(i,z,root,unrolled))
);
var temp__4423__auto__ = clojure.zip.prev.call(null,z__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var rz = temp__4423__auto__;
var G__30328 = (i - (1));
var G__30329 = rz;
i = G__30328;
z = G__30329;
continue;
} else {
return clojure.zip.root.call(null,z__$1);
}
} else {
if(cljs.core.truth_(clojure.zip.prev.call(null,z))){
var G__30330 = (i - (1));
var G__30331 = clojure.zip.prev.call(null,z);
i = G__30330;
z = G__30331;
continue;
} else {
return clojure.zip.root.call(null,z);
}
}
break;
}
});

transmorphic.symbolic.each_morph_call_out.cljs$lang$maxFixedArity = (2);

transmorphic.symbolic.each_morph_call_out.cljs$lang$applyTo = (function (seq30322){
var G__30323 = cljs.core.first.call(null,seq30322);
var seq30322__$1 = cljs.core.next.call(null,seq30322);
var G__30324 = cljs.core.first.call(null,seq30322__$1);
var seq30322__$2 = cljs.core.next.call(null,seq30322__$1);
return transmorphic.symbolic.each_morph_call_out.cljs$core$IFn$_invoke$arity$variadic(G__30323,G__30324,seq30322__$2);
});
transmorphic.symbolic.each_morph_call_in = (function transmorphic$symbolic$each_morph_call_in(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30336 = arguments.length;
var i__17884__auto___30337 = (0);
while(true){
if((i__17884__auto___30337 < len__17883__auto___30336)){
args__17890__auto__.push((arguments[i__17884__auto___30337]));

var G__30338 = (i__17884__auto___30337 + (1));
i__17884__auto___30337 = G__30338;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((2) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((2)),(0))):null);
return transmorphic.symbolic.each_morph_call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17891__auto__);
});

transmorphic.symbolic.each_morph_call_in.cljs$core$IFn$_invoke$arity$variadic = (function (form,transform,args){

var root = transmorphic.symbolic.tree_zipper.call(null,form);
var i = (0);
var z = root;
while(true){
if(cljs.core.truth_((function (){var x = clojure.zip.node.call(null,z);
var or__16825__auto__ = transmorphic.symbolic.morph_QMARK_.call(null,x);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return transmorphic.symbolic.component_QMARK_.call(null,x);
}
})())){
var z__$1 = clojure.zip.edit.call(null,z,((function (i,z,root){
return (function (p1__30332_SHARP_){
return cljs.core.apply.call(null,transform,p1__30332_SHARP_,i,args);
});})(i,z,root))
);
var temp__4423__auto__ = clojure.zip.next.call(null,z__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var rz = temp__4423__auto__;
var G__30339 = (i + (1));
var G__30340 = rz;
i = G__30339;
z = G__30340;
continue;
} else {
return clojure.zip.root.call(null,z__$1);
}
} else {
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,z))){
return clojure.zip.root.call(null,z);
} else {
var G__30341 = (i + (1));
var G__30342 = clojure.zip.next.call(null,z);
i = G__30341;
z = G__30342;
continue;
}
}
break;
}
});

transmorphic.symbolic.each_morph_call_in.cljs$lang$maxFixedArity = (2);

transmorphic.symbolic.each_morph_call_in.cljs$lang$applyTo = (function (seq30333){
var G__30334 = cljs.core.first.call(null,seq30333);
var seq30333__$1 = cljs.core.next.call(null,seq30333);
var G__30335 = cljs.core.first.call(null,seq30333__$1);
var seq30333__$2 = cljs.core.next.call(null,seq30333__$1);
return transmorphic.symbolic.each_morph_call_in.cljs$core$IFn$_invoke$arity$variadic(G__30334,G__30335,seq30333__$2);
});
/**
 * Alter all occuring calls to morphs, parts or widgets
 * such thath they are aware, they are being used in the
 * context of the current abstraction.
 * It also wraps the morph into a function call
 * that closes over all the context related information
 * needed to inspect the morph hierarchy through tooling.
 */
transmorphic.symbolic.instrument_call = (function transmorphic$symbolic$instrument_call(call,p__30343){
var map__30346 = p__30343;
var map__30346__$1 = ((((!((map__30346 == null)))?((((map__30346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30346):map__30346);
var env = map__30346__$1;
var edit_session = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"edit-session","edit-session",-14770393));
var id_stack = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"id-stack","id-stack",-1563026027));
var loc = cljs.core.first.call(null,cljs.core.deref.call(null,id_stack));
cljs.core.swap_BANG_.call(null,id_stack,cljs.core.rest);

if(cljs.core._EQ_.call(null,(1),loc)){
if(cljs.core.truth_(transmorphic.symbolic.morph_QMARK_.call(null,call))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("transmorphic.core","wrap-morph","transmorphic.core/wrap-morph",590739475,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,call),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,transmorphic.symbolic.ctx_param_name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"source-location","source-location",17618786)),cljs.core._conj.call(null,cljs.core.List.EMPTY,loc))))))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("transmorphic.core","wrap-component","transmorphic.core/wrap-component",335339981,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,call),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,transmorphic.symbolic.ctx_param_name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"source-location","source-location",17618786)),cljs.core._conj.call(null,cljs.core.List.EMPTY,loc))))))));
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,call),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"source-location","source-location",17618786)),cljs.core._conj.call(null,cljs.core.List.EMPTY,loc))));
}
});
/**
 * Find that place where render definition resides, and
 * add an additional render-context variable
 */
transmorphic.symbolic.inject_ctx_parameter = (function transmorphic$symbolic$inject_ctx_parameter(form){
var root = transmorphic.symbolic.tree_zipper.call(null,form);
var i = (0);
var z = root;
while(true){
if(cljs.core.truth_(transmorphic.symbolic.render_def_QMARK_.call(null,clojure.zip.node.call(null,z)))){
var z__$1 = clojure.zip.edit.call(null,z,((function (i,z,root){
return (function (render_def){
return cljs.core.apply.call(null,cljs.core.list,cljs.core.first.call(null,render_def),cljs.core.conj.call(null,cljs.core.second.call(null,render_def),transmorphic.symbolic.ctx_param_name),cljs.core.drop.call(null,(2),render_def));
});})(i,z,root))
);
return clojure.zip.root.call(null,z__$1);
} else {
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,z))){
return clojure.zip.root.call(null,z);
} else {
var G__30348 = (i + (1));
var G__30349 = clojure.zip.next.call(null,z);
i = G__30348;
z = G__30349;
continue;
}
}
break;
}
});
transmorphic.symbolic.instrument_body_BANG_ = (function transmorphic$symbolic$instrument_body_BANG_(component_body,env){
return transmorphic.symbolic.each_morph_call_out.call(null,transmorphic.symbolic.inject_ctx_parameter.call(null,component_body),(function (call,_){
return transmorphic.symbolic.instrument_call.call(null,call,env);
}));
});
transmorphic.symbolic.bound_props = (function transmorphic$symbolic$bound_props(props){
var _STAR_cljs_warnings_STAR_30353 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));

try{var props__$1 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,cljs.analyzer.empty_env.call(null),props));
return cljs.core.map.call(null,((function (props__$1,_STAR_cljs_warnings_STAR_30353){
return (function (p1__30350_SHARP_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__30350_SHARP_));
});})(props__$1,_STAR_cljs_warnings_STAR_30353))
,cljs.core.filter.call(null,((function (props__$1,_STAR_cljs_warnings_STAR_30353){
return (function (v){
var or__16825__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,v)));
if(or__16825__auto__){
return or__16825__auto__;
} else {
return cljs.core.some.call(null,((function (or__16825__auto__,props__$1,_STAR_cljs_warnings_STAR_30353){
return (function (p1__30351_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__30351_SHARP_));
});})(or__16825__auto__,props__$1,_STAR_cljs_warnings_STAR_30353))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,v)));
}
});})(props__$1,_STAR_cljs_warnings_STAR_30353))
,cljs.core.partition.call(null,(2),props__$1)));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_30353;
}});
transmorphic.symbolic.analyze_expr_BANG_ = (function transmorphic$symbolic$analyze_expr_BANG_(expr,change_integrator,morph_idx,id_stack){
if(cljs.core.truth_((function (){var or__16825__auto__ = transmorphic.symbolic.component_QMARK_.call(null,expr);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return transmorphic.symbolic.morph_QMARK_.call(null,expr);
}
})())){
var current_morph_idx = cljs.core.swap_BANG_.call(null,morph_idx,cljs.core.inc);
var _ = cljs.core.swap_BANG_.call(null,id_stack,cljs.core.conj,current_morph_idx);
var vec__30359 = expr;
var name = cljs.core.nth.call(null,vec__30359,(0),null);
var props = cljs.core.nth.call(null,vec__30359,(1),null);
var submorphs = cljs.core.nthnext.call(null,vec__30359,(2));
var submorphs__$1 = (function (){var iter__17597__auto__ = ((function (current_morph_idx,_,vec__30359,name,props,submorphs){
return (function transmorphic$symbolic$analyze_expr_BANG__$_iter__30360(s__30361){
return (new cljs.core.LazySeq(null,((function (current_morph_idx,_,vec__30359,name,props,submorphs){
return (function (){
var s__30361__$1 = s__30361;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30361__$1);
if(temp__4425__auto__){
var s__30361__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30361__$2)){
var c__17595__auto__ = cljs.core.chunk_first.call(null,s__30361__$2);
var size__17596__auto__ = cljs.core.count.call(null,c__17595__auto__);
var b__30363 = cljs.core.chunk_buffer.call(null,size__17596__auto__);
if((function (){var i__30362 = (0);
while(true){
if((i__30362 < size__17596__auto__)){
var m = cljs.core._nth.call(null,c__17595__auto__,i__30362);
cljs.core.chunk_append.call(null,b__30363,transmorphic$symbolic$analyze_expr_BANG_.call(null,m,change_integrator,morph_idx,id_stack));

var G__30364 = (i__30362 + (1));
i__30362 = G__30364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30363),transmorphic$symbolic$analyze_expr_BANG__$_iter__30360.call(null,cljs.core.chunk_rest.call(null,s__30361__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30363),null);
}
} else {
var m = cljs.core.first.call(null,s__30361__$2);
return cljs.core.cons.call(null,transmorphic$symbolic$analyze_expr_BANG_.call(null,m,change_integrator,morph_idx,id_stack),transmorphic$symbolic$analyze_expr_BANG__$_iter__30360.call(null,cljs.core.rest.call(null,s__30361__$2)));
}
} else {
return null;
}
break;
}
});})(current_morph_idx,_,vec__30359,name,props,submorphs))
,null,null));
});})(current_morph_idx,_,vec__30359,name,props,submorphs))
;
return iter__17597__auto__.call(null,cljs.core.vec.call(null,submorphs));
})();
var integration = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(transmorphic.symbolic.morph_QMARK_.call(null,expr))?new cljs.core.Keyword(null,"morph","morph",-595175877):new cljs.core.Keyword(null,"component","component",1555936782))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"txs","txs",2056038378)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"props","props",453281727)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"added","added",2057651688)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,submorphs__$1))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"reification","reification",1115803776)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"self","self",93102628,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"props-txs","props-txs",1631917947,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",-822184067,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"props-txs","props-txs",1631917947,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null))))))))))))));
cljs.core.swap_BANG_.call(null,change_integrator,cljs.core.assoc,current_morph_idx,integration);

return current_morph_idx;
} else {
var current_morph_idx = cljs.core.swap_BANG_.call(null,morph_idx,cljs.core.inc);
var submorphs = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var reification_params = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var templatized_expr = transmorphic.symbolic.each_morph_call_in.call(null,expr,((function (current_morph_idx,submorphs,reification_params){
return (function (morph_def,_){
var m_idx = transmorphic$symbolic$analyze_expr_BANG_.call(null,morph_def,change_integrator,morph_idx,id_stack);
cljs.core.swap_BANG_.call(null,reification_params,cljs.core.conj,cljs.core.symbol.call(null,[cljs.core.str("m_"),cljs.core.str(m_idx)].join('')));

cljs.core.swap_BANG_.call(null,submorphs,cljs.core.conj,m_idx);

return cljs.core.symbol.call(null,[cljs.core.str("~m_"),cljs.core.str(m_idx)].join(''));
});})(current_morph_idx,submorphs,reification_params))
);
var integration = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,submorphs)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"reification","reification",1115803776)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"keys","keys",1068423698)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.deref.call(null,reification_params)))))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,transmorphic.symbolic.template_fn.call(null,cljs.tools.reader.read_string.call(null,[cljs.core.str(templatized_expr)].join(''))))))))))));
cljs.core.swap_BANG_.call(null,change_integrator,cljs.core.assoc,current_morph_idx,integration);

return current_morph_idx;
}
});
transmorphic.symbolic.analyze_body_BANG_ = (function transmorphic$symbolic$analyze_body_BANG_(defmorph_body,id_stack){

var change_integrator = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var morph_idx = cljs.core.atom.call(null,(-1));
transmorphic.symbolic.analyze_expr_BANG_.call(null,defmorph_body,change_integrator,morph_idx,id_stack);

return cljs.core.deref.call(null,change_integrator);
});
/**
 * Returns the symbolic description of a morph
 *   hierarchy outside of a symbolic functional scope.
 *   This is essentially a composition of morph calls,
 *   with custom behavior stripped away and and other functional
 *   abstractions removed. The only other kinds of abstractions,
 *   that an external reconciliation maintains are calls to other
 *   components, which function as 'abstractional strongholds'.
 */
transmorphic.symbolic.get_external_reconciliation = (function transmorphic$symbolic$get_external_reconciliation(state,morph){
var c = (function (){var or__16825__auto__ = (function (){var and__16813__auto__ = new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(morph);
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(morph);
if(cljs.core.truth_(and__16813__auto____$1)){
return cljs.core.get_in.call(null,state,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(morph));
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})();
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var and__16813__auto__ = new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(morph);
if(cljs.core.truth_(and__16813__auto__)){
return morph;
} else {
return and__16813__auto__;
}
}
})();
return cljs.core.apply.call(null,cljs.core.list,(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.symbol.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(morph)));
}
})(),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1((function (){var or__16825__auto__ = c;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return morph;
}
})()),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (c){
return (function (p1__30365_SHARP_){
return cljs.core.get_in.call(null,state,p1__30365_SHARP_);
});})(c))
),cljs.core.map.call(null,((function (c){
return (function (p1__30366_SHARP_){
return transmorphic$symbolic$get_external_reconciliation.call(null,state,p1__30366_SHARP_);
});})(c))
)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1((function (){var or__16825__auto__ = c;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return morph;
}
})())));
});
transmorphic.symbolic.get_description = (function transmorphic$symbolic$get_description(state,morph,reconciler,cached_descriptions){
var loc = new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(morph);
var map__30376 = cljs.core.get.call(null,reconciler,loc);
var map__30376__$1 = ((((!((map__30376 == null)))?((((map__30376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30376):map__30376);
var reification = cljs.core.get.call(null,map__30376__$1,new cljs.core.Keyword(null,"reification","reification",1115803776));
var submorph_locations = cljs.core.get.call(null,map__30376__$1,new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187));
var type = cljs.core.get.call(null,map__30376__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var txs = cljs.core.get.call(null,map__30376__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var get_sub_descriptions = ((function (loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs){
return (function (submorph_refs){
var submorphs = cljs.core.map.call(null,((function (loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs){
return (function (p1__30367_SHARP_){
return cljs.core.get_in.call(null,state,p1__30367_SHARP_);
});})(loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs))
,submorph_refs);
var loc__GT_submorph_descriptions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (submorphs,loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs){
return (function (p1__30368_SHARP_){
var x_SINGLEQUOTE_ = p1__30368_SHARP_;
while(true){
if(cljs.core.truth_((function (){var and__16813__auto__ = new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(x_SINGLEQUOTE_);
if(cljs.core.truth_(and__16813__auto__)){
return transmorphic.symbolic.foreign_QMARK_.call(null,state,morph,x_SINGLEQUOTE_);
} else {
return and__16813__auto__;
}
})())){
var G__30382 = cljs.core.get_in.call(null,state,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(x_SINGLEQUOTE_));
x_SINGLEQUOTE_ = G__30382;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(x_SINGLEQUOTE_),transmorphic$symbolic$get_description.call(null,state,x_SINGLEQUOTE_,reconciler,cached_descriptions)], null);
}
break;
}
});})(submorphs,loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs))
)),submorphs);
var _ = cljs.core.swap_BANG_.call(null,cached_descriptions,cljs.core.merge,loc__GT_submorph_descriptions);
var loc__GT_submorph_descriptions__$1 = cljs.core.deref.call(null,cached_descriptions);
var own_descriptions = cljs.core.map.call(null,((function (submorphs,loc__GT_submorph_descriptions,_,loc__GT_submorph_descriptions__$1,loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs){
return (function (loc__$1){
var map__30378 = cljs.core.get.call(null,reconciler,loc__$1);
var map__30378__$1 = ((((!((map__30378 == null)))?((((map__30378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30378):map__30378);
var reification__$1 = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"reification","reification",1115803776));
var submorph_locations__$1 = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187));
var type__$1 = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__30380 = (((type__$1 instanceof cljs.core.Keyword))?type__$1.fqn:null);
switch (G__30380) {
case "morph":
return cljs.core.get.call(null,loc__GT_submorph_descriptions__$1,loc__$1);

break;
case "component":
return cljs.core.get.call(null,loc__GT_submorph_descriptions__$1,loc__$1);

break;
case "expr":
var args = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__30380,map__30378,map__30378__$1,reification__$1,submorph_locations__$1,type__$1,submorphs,loc__GT_submorph_descriptions,_,loc__GT_submorph_descriptions__$1,loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs){
return (function (entry){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("m_"),cljs.core.str(cljs.core.key.call(null,entry))].join('')),cljs.core.val.call(null,entry)], null);
});})(G__30380,map__30378,map__30378__$1,reification__$1,submorph_locations__$1,type__$1,submorphs,loc__GT_submorph_descriptions,_,loc__GT_submorph_descriptions__$1,loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs))
),loc__GT_submorph_descriptions__$1);
return reification__$1.call(null,args);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type__$1)].join('')));

}
});})(submorphs,loc__GT_submorph_descriptions,_,loc__GT_submorph_descriptions__$1,loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs))
,submorph_locations);
var added_submorphs = cljs.core.map.call(null,((function (submorphs,loc__GT_submorph_descriptions,_,loc__GT_submorph_descriptions__$1,own_descriptions,loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs){
return (function (p1__30369_SHARP_){
return cljs.core.get_in.call(null,state,p1__30369_SHARP_);
});})(submorphs,loc__GT_submorph_descriptions,_,loc__GT_submorph_descriptions__$1,own_descriptions,loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs))
,new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(txs));
var added_descriptions = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (submorphs,loc__GT_submorph_descriptions,_,loc__GT_submorph_descriptions__$1,own_descriptions,added_submorphs,loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs){
return (function (m){
if(cljs.core.truth_(transmorphic.symbolic.foreign_QMARK_.call(null,state,morph,m))){
return transmorphic.symbolic.get_external_reconciliation.call(null,state,m);
} else {
return null;
}
});})(submorphs,loc__GT_submorph_descriptions,_,loc__GT_submorph_descriptions__$1,own_descriptions,added_submorphs,loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs))
)),added_submorphs);
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.concat.call(null,own_descriptions,added_descriptions));
});})(loc,map__30376,map__30376__$1,reification,submorph_locations,type,txs))
;
var G__30381 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30381) {
case "morph":
return reification.call(null,morph,txs.call(null,new cljs.core.Keyword(null,"props","props",453281727)),get_sub_descriptions.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(morph)));

break;
case "component":
var c = cljs.core.get_in.call(null,state,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(morph));
return reification.call(null,c,txs.call(null,new cljs.core.Keyword(null,"props","props",453281727)),get_sub_descriptions.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(c)));

break;
default:
return null;

}
});
transmorphic.symbolic.get_component_def = (function transmorphic$symbolic$get_component_def(state,root_morph,reconciler){
var map__30387 = cljs.core.get.call(null,reconciler,(0));
var map__30387__$1 = ((((!((map__30387 == null)))?((((map__30387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30387):map__30387);
var reification = cljs.core.get.call(null,map__30387__$1,new cljs.core.Keyword(null,"reification","reification",1115803776));
var submorph_locations = cljs.core.get.call(null,map__30387__$1,new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187));
var type = cljs.core.get.call(null,map__30387__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var txs = cljs.core.get.call(null,map__30387__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var root_reconciliation = transmorphic.symbolic.get_description.call(null,state,root_morph,reconciler,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),type)){
return reification.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m_1","m_1",1111378532),root_reconciliation], null));
} else {
return root_reconciliation;
}
});
/**
 * Given a morph, return its symbolic consolidation
 *   within the context of the abstraction it is the root of.
 *   If morph is not a root of a component,
 *   this falls back to an external reconciliation if the
 */
transmorphic.symbolic.get_internal_reconciliation = (function transmorphic$symbolic$get_internal_reconciliation(state,morph){
return transmorphic.symbolic.get_description.call(null,state,morph,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,state,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(morph))),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=symbolic.js.map
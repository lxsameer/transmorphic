// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__19842 = s;
var map__19842__$1 = ((((!((map__19842 == null)))?((((map__19842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19842):map__19842);
var name = cljs.core.get.call(null,map__19842__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__19842__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__19845 = info;
var map__19846 = G__19845;
var map__19846__$1 = ((((!((map__19846 == null)))?((((map__19846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19846):map__19846);
var shadow = cljs.core.get.call(null,map__19846__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__19845__$1 = G__19845;
while(true){
var d__$2 = d__$1;
var map__19848 = G__19845__$1;
var map__19848__$1 = ((((!((map__19848 == null)))?((((map__19848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19848):map__19848);
var shadow__$1 = cljs.core.get.call(null,map__19848__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__19850 = (d__$2 + (1));
var G__19851 = shadow__$1;
d__$1 = G__19850;
G__19845__$1 = G__19851;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.munge;
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__19852){
var map__19857 = p__19852;
var map__19857__$1 = ((((!((map__19857 == null)))?((((map__19857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19857):map__19857);
var name_var = map__19857__$1;
var name = cljs.core.get.call(null,map__19857__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__19857__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__19859 = info;
var map__19859__$1 = ((((!((map__19859 == null)))?((((map__19859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19859):map__19859);
var ns = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args19861 = [];
var len__17883__auto___19864 = arguments.length;
var i__17884__auto___19865 = (0);
while(true){
if((i__17884__auto___19865 < len__17883__auto___19864)){
args19861.push((arguments[i__17884__auto___19865]));

var G__19866 = (i__17884__auto___19865 + (1));
i__17884__auto___19865 = G__19866;
continue;
} else {
}
break;
}

var G__19863 = args19861.length;
switch (G__19863) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19861.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__19869 = cp;
switch (G__19869) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__19875_19879 = cljs.core.seq.call(null,s);
var chunk__19876_19880 = null;
var count__19877_19881 = (0);
var i__19878_19882 = (0);
while(true){
if((i__19878_19882 < count__19877_19881)){
var c_19883 = cljs.core._nth.call(null,chunk__19876_19880,i__19878_19882);
sb.append(cljs.compiler.escape_char.call(null,c_19883));

var G__19884 = seq__19875_19879;
var G__19885 = chunk__19876_19880;
var G__19886 = count__19877_19881;
var G__19887 = (i__19878_19882 + (1));
seq__19875_19879 = G__19884;
chunk__19876_19880 = G__19885;
count__19877_19881 = G__19886;
i__19878_19882 = G__19887;
continue;
} else {
var temp__4425__auto___19888 = cljs.core.seq.call(null,seq__19875_19879);
if(temp__4425__auto___19888){
var seq__19875_19889__$1 = temp__4425__auto___19888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19875_19889__$1)){
var c__17628__auto___19890 = cljs.core.chunk_first.call(null,seq__19875_19889__$1);
var G__19891 = cljs.core.chunk_rest.call(null,seq__19875_19889__$1);
var G__19892 = c__17628__auto___19890;
var G__19893 = cljs.core.count.call(null,c__17628__auto___19890);
var G__19894 = (0);
seq__19875_19879 = G__19891;
chunk__19876_19880 = G__19892;
count__19877_19881 = G__19893;
i__19878_19882 = G__19894;
continue;
} else {
var c_19895 = cljs.core.first.call(null,seq__19875_19889__$1);
sb.append(cljs.compiler.escape_char.call(null,c_19895));

var G__19896 = cljs.core.next.call(null,seq__19875_19889__$1);
var G__19897 = null;
var G__19898 = (0);
var G__19899 = (0);
seq__19875_19879 = G__19896;
chunk__19876_19880 = G__19897;
count__19877_19881 = G__19898;
i__19878_19882 = G__19899;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__17738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17742__auto__,method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__18409__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__18409__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__19905_19910 = ast;
var map__19905_19911__$1 = ((((!((map__19905_19910 == null)))?((((map__19905_19910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19905_19910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19905_19910):map__19905_19910);
var env_19912 = cljs.core.get.call(null,map__19905_19911__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_19912))){
var map__19907_19913 = env_19912;
var map__19907_19914__$1 = ((((!((map__19907_19913 == null)))?((((map__19907_19913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19907_19913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19907_19913):map__19907_19913);
var line_19915 = cljs.core.get.call(null,map__19907_19914__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_19916 = cljs.core.get.call(null,map__19907_19914__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__19907_19913,map__19907_19914__$1,line_19915,column_19916,map__19905_19910,map__19905_19911__$1,env_19912,val__18409__auto__){
return (function (m){
var minfo = (function (){var G__19909 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__19909__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__19909,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__19909);
return G__19909__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_19915 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__19907_19913,map__19907_19914__$1,line_19915,column_19916,map__19905_19910,map__19905_19911__$1,env_19912,val__18409__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_19916)?(column_19916 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__19907_19913,map__19907_19914__$1,line_19915,column_19916,map__19905_19910,map__19905_19911__$1,env_19912,val__18409__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__19907_19913,map__19907_19914__$1,line_19915,column_19916,map__19905_19910,map__19905_19911__$1,env_19912,val__18409__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__19907_19913,map__19907_19914__$1,line_19915,column_19916,map__19905_19910,map__19905_19911__$1,env_19912,val__18409__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__19907_19913,map__19907_19914__$1,line_19915,column_19916,map__19905_19910,map__19905_19911__$1,env_19912,val__18409__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__18409__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__17890__auto__ = [];
var len__17883__auto___19923 = arguments.length;
var i__17884__auto___19924 = (0);
while(true){
if((i__17884__auto___19924 < len__17883__auto___19923)){
args__17890__auto__.push((arguments[i__17884__auto___19924]));

var G__19925 = (i__17884__auto___19924 + (1));
i__17884__auto___19924 = G__19925;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((0) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__17891__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__19919_19926 = cljs.core.seq.call(null,xs);
var chunk__19920_19927 = null;
var count__19921_19928 = (0);
var i__19922_19929 = (0);
while(true){
if((i__19922_19929 < count__19921_19928)){
var x_19930 = cljs.core._nth.call(null,chunk__19920_19927,i__19922_19929);
if((x_19930 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_19930)){
cljs.compiler.emit.call(null,x_19930);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_19930)){
cljs.core.apply.call(null,cljs.compiler.emits,x_19930);
} else {
if(goog.isFunction(x_19930)){
x_19930.call(null);
} else {
var s_19931 = cljs.core.print_str.call(null,x_19930);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__19919_19926,chunk__19920_19927,count__19921_19928,i__19922_19929,s_19931,x_19930){
return (function (p1__19917_SHARP_){
return (p1__19917_SHARP_ + cljs.core.count.call(null,s_19931));
});})(seq__19919_19926,chunk__19920_19927,count__19921_19928,i__19922_19929,s_19931,x_19930))
);
}

cljs.core.print.call(null,s_19931);

}
}
}
}

var G__19932 = seq__19919_19926;
var G__19933 = chunk__19920_19927;
var G__19934 = count__19921_19928;
var G__19935 = (i__19922_19929 + (1));
seq__19919_19926 = G__19932;
chunk__19920_19927 = G__19933;
count__19921_19928 = G__19934;
i__19922_19929 = G__19935;
continue;
} else {
var temp__4425__auto___19936 = cljs.core.seq.call(null,seq__19919_19926);
if(temp__4425__auto___19936){
var seq__19919_19937__$1 = temp__4425__auto___19936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19919_19937__$1)){
var c__17628__auto___19938 = cljs.core.chunk_first.call(null,seq__19919_19937__$1);
var G__19939 = cljs.core.chunk_rest.call(null,seq__19919_19937__$1);
var G__19940 = c__17628__auto___19938;
var G__19941 = cljs.core.count.call(null,c__17628__auto___19938);
var G__19942 = (0);
seq__19919_19926 = G__19939;
chunk__19920_19927 = G__19940;
count__19921_19928 = G__19941;
i__19922_19929 = G__19942;
continue;
} else {
var x_19943 = cljs.core.first.call(null,seq__19919_19937__$1);
if((x_19943 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_19943)){
cljs.compiler.emit.call(null,x_19943);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_19943)){
cljs.core.apply.call(null,cljs.compiler.emits,x_19943);
} else {
if(goog.isFunction(x_19943)){
x_19943.call(null);
} else {
var s_19944 = cljs.core.print_str.call(null,x_19943);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__19919_19926,chunk__19920_19927,count__19921_19928,i__19922_19929,s_19944,x_19943,seq__19919_19937__$1,temp__4425__auto___19936){
return (function (p1__19917_SHARP_){
return (p1__19917_SHARP_ + cljs.core.count.call(null,s_19944));
});})(seq__19919_19926,chunk__19920_19927,count__19921_19928,i__19922_19929,s_19944,x_19943,seq__19919_19937__$1,temp__4425__auto___19936))
);
}

cljs.core.print.call(null,s_19944);

}
}
}
}

var G__19945 = cljs.core.next.call(null,seq__19919_19937__$1);
var G__19946 = null;
var G__19947 = (0);
var G__19948 = (0);
seq__19919_19926 = G__19945;
chunk__19920_19927 = G__19946;
count__19921_19928 = G__19947;
i__19922_19929 = G__19948;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq19918){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19918));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__17890__auto__ = [];
var len__17883__auto___19953 = arguments.length;
var i__17884__auto___19954 = (0);
while(true){
if((i__17884__auto___19954 < len__17883__auto___19953)){
args__17890__auto__.push((arguments[i__17884__auto___19954]));

var G__19955 = (i__17884__auto___19954 + (1));
i__17884__auto___19954 = G__19955;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((0) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__17891__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__19950){
var map__19951 = p__19950;
var map__19951__$1 = ((((!((map__19951 == null)))?((((map__19951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19951):map__19951);
var m = map__19951__$1;
var gen_line = cljs.core.get.call(null,map__19951__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq19949){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19949));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__17799__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19958_19960 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19959_19961 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19958_19960,_STAR_print_fn_STAR_19959_19961,sb__17799__auto__){
return (function (x__17800__auto__){
return sb__17799__auto__.append(x__17800__auto__);
});})(_STAR_print_newline_STAR_19958_19960,_STAR_print_fn_STAR_19959_19961,sb__17799__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19959_19961;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19958_19960;
}
return [cljs.core.str(sb__17799__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__17738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17742__auto__,method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__19962 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__19962,(0),null);
var flags = cljs.core.nth.call(null,vec__19962,(1),null);
var pattern = cljs.core.nth.call(null,vec__19962,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__19964){
var map__19965 = p__19964;
var map__19965__$1 = ((((!((map__19965 == null)))?((((map__19965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19965):map__19965);
var arg = map__19965__$1;
var info = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__16825__auto__ = js_module_name;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__19967 = info__$1;
var G__19967__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__19967):G__19967);
return G__19967__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__19968){
var map__19969 = p__19968;
var map__19969__$1 = ((((!((map__19969 == null)))?((((map__19969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19969):map__19969);
var arg = map__19969__$1;
var env = cljs.core.get.call(null,map__19969__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__19969__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__19969__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__19969__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__19971 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__19971__$1 = ((((!((map__19971 == null)))?((((map__19971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19971):map__19971);
var name = cljs.core.get.call(null,map__19971__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__19973){
var map__19974 = p__19973;
var map__19974__$1 = ((((!((map__19974 == null)))?((((map__19974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19974):map__19974);
var expr = cljs.core.get.call(null,map__19974__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__19974__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__19974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__19976_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__19976_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__19977){
var map__19978 = p__19977;
var map__19978__$1 = ((((!((map__19978 == null)))?((((map__19978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19978):map__19978);
var env = cljs.core.get.call(null,map__19978__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__19978__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__19978__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__19980){
var map__19981 = p__19980;
var map__19981__$1 = ((((!((map__19981 == null)))?((((map__19981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19981):map__19981);
var items = cljs.core.get.call(null,map__19981__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19981__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__19983){
var map__19984 = p__19983;
var map__19984__$1 = ((((!((map__19984 == null)))?((((map__19984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19984):map__19984);
var items = cljs.core.get.call(null,map__19984__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19984__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_19986 = cljs.core.count.call(null,items);
if((cnt_19986 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_19986,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__19987_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__19987_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__19988){
var map__19989 = p__19988;
var map__19989__$1 = ((((!((map__19989 == null)))?((((map__19989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19989):map__19989);
var items = cljs.core.get.call(null,map__19989__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19989__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__19991){
var map__19992 = p__19991;
var map__19992__$1 = ((((!((map__19992 == null)))?((((map__19992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19992):map__19992);
var items = cljs.core.get.call(null,map__19992__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__19992__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__19992__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___20002 = cljs.core.seq.call(null,items);
if(temp__4425__auto___20002){
var items_20003__$1 = temp__4425__auto___20002;
var vec__19994_20004 = items_20003__$1;
var vec__19995_20005 = cljs.core.nth.call(null,vec__19994_20004,(0),null);
var k_20006 = cljs.core.nth.call(null,vec__19995_20005,(0),null);
var v_20007 = cljs.core.nth.call(null,vec__19995_20005,(1),null);
var r_20008 = cljs.core.nthnext.call(null,vec__19994_20004,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_20006),"\": ",v_20007);

var seq__19996_20009 = cljs.core.seq.call(null,r_20008);
var chunk__19997_20010 = null;
var count__19998_20011 = (0);
var i__19999_20012 = (0);
while(true){
if((i__19999_20012 < count__19998_20011)){
var vec__20000_20013 = cljs.core._nth.call(null,chunk__19997_20010,i__19999_20012);
var k_20014__$1 = cljs.core.nth.call(null,vec__20000_20013,(0),null);
var v_20015__$1 = cljs.core.nth.call(null,vec__20000_20013,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_20014__$1),"\": ",v_20015__$1);

var G__20016 = seq__19996_20009;
var G__20017 = chunk__19997_20010;
var G__20018 = count__19998_20011;
var G__20019 = (i__19999_20012 + (1));
seq__19996_20009 = G__20016;
chunk__19997_20010 = G__20017;
count__19998_20011 = G__20018;
i__19999_20012 = G__20019;
continue;
} else {
var temp__4425__auto___20020__$1 = cljs.core.seq.call(null,seq__19996_20009);
if(temp__4425__auto___20020__$1){
var seq__19996_20021__$1 = temp__4425__auto___20020__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19996_20021__$1)){
var c__17628__auto___20022 = cljs.core.chunk_first.call(null,seq__19996_20021__$1);
var G__20023 = cljs.core.chunk_rest.call(null,seq__19996_20021__$1);
var G__20024 = c__17628__auto___20022;
var G__20025 = cljs.core.count.call(null,c__17628__auto___20022);
var G__20026 = (0);
seq__19996_20009 = G__20023;
chunk__19997_20010 = G__20024;
count__19998_20011 = G__20025;
i__19999_20012 = G__20026;
continue;
} else {
var vec__20001_20027 = cljs.core.first.call(null,seq__19996_20021__$1);
var k_20028__$1 = cljs.core.nth.call(null,vec__20001_20027,(0),null);
var v_20029__$1 = cljs.core.nth.call(null,vec__20001_20027,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_20028__$1),"\": ",v_20029__$1);

var G__20030 = cljs.core.next.call(null,seq__19996_20021__$1);
var G__20031 = null;
var G__20032 = (0);
var G__20033 = (0);
seq__19996_20009 = G__20030;
chunk__19997_20010 = G__20031;
count__19998_20011 = G__20032;
i__19999_20012 = G__20033;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__20034){
var map__20035 = p__20034;
var map__20035__$1 = ((((!((map__20035 == null)))?((((map__20035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20035):map__20035);
var form = cljs.core.get.call(null,map__20035__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__20035__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__20037){
var map__20040 = p__20037;
var map__20040__$1 = ((((!((map__20040 == null)))?((((map__20040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20040):map__20040);
var op = cljs.core.get.call(null,map__20040__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__20040__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__16813__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__16813__auto__){
var and__16813__auto____$1 = form;
if(cljs.core.truth_(and__16813__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__20042){
var map__20045 = p__20042;
var map__20045__$1 = ((((!((map__20045 == null)))?((((map__20045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20045):map__20045);
var op = cljs.core.get.call(null,map__20045__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__20045__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__16825__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__20047){
var map__20048 = p__20047;
var map__20048__$1 = ((((!((map__20048 == null)))?((((map__20048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20048):map__20048);
var test = cljs.core.get.call(null,map__20048__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__20048__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__20048__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__20048__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__20048__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__16825__auto__ = unchecked;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__20050){
var map__20051 = p__20050;
var map__20051__$1 = ((((!((map__20051 == null)))?((((map__20051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20051):map__20051);
var v = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__20051__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__20053_20067 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__20054_20068 = null;
var count__20055_20069 = (0);
var i__20056_20070 = (0);
while(true){
if((i__20056_20070 < count__20055_20069)){
var vec__20057_20071 = cljs.core._nth.call(null,chunk__20054_20068,i__20056_20070);
var ts_20072 = cljs.core.nth.call(null,vec__20057_20071,(0),null);
var then_20073 = cljs.core.nth.call(null,vec__20057_20071,(1),null);
var seq__20058_20074 = cljs.core.seq.call(null,ts_20072);
var chunk__20059_20075 = null;
var count__20060_20076 = (0);
var i__20061_20077 = (0);
while(true){
if((i__20061_20077 < count__20060_20076)){
var test_20078 = cljs.core._nth.call(null,chunk__20059_20075,i__20061_20077);
cljs.compiler.emitln.call(null,"case ",test_20078,":");

var G__20079 = seq__20058_20074;
var G__20080 = chunk__20059_20075;
var G__20081 = count__20060_20076;
var G__20082 = (i__20061_20077 + (1));
seq__20058_20074 = G__20079;
chunk__20059_20075 = G__20080;
count__20060_20076 = G__20081;
i__20061_20077 = G__20082;
continue;
} else {
var temp__4425__auto___20083 = cljs.core.seq.call(null,seq__20058_20074);
if(temp__4425__auto___20083){
var seq__20058_20084__$1 = temp__4425__auto___20083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20058_20084__$1)){
var c__17628__auto___20085 = cljs.core.chunk_first.call(null,seq__20058_20084__$1);
var G__20086 = cljs.core.chunk_rest.call(null,seq__20058_20084__$1);
var G__20087 = c__17628__auto___20085;
var G__20088 = cljs.core.count.call(null,c__17628__auto___20085);
var G__20089 = (0);
seq__20058_20074 = G__20086;
chunk__20059_20075 = G__20087;
count__20060_20076 = G__20088;
i__20061_20077 = G__20089;
continue;
} else {
var test_20090 = cljs.core.first.call(null,seq__20058_20084__$1);
cljs.compiler.emitln.call(null,"case ",test_20090,":");

var G__20091 = cljs.core.next.call(null,seq__20058_20084__$1);
var G__20092 = null;
var G__20093 = (0);
var G__20094 = (0);
seq__20058_20074 = G__20091;
chunk__20059_20075 = G__20092;
count__20060_20076 = G__20093;
i__20061_20077 = G__20094;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_20073);
} else {
cljs.compiler.emitln.call(null,then_20073);
}

cljs.compiler.emitln.call(null,"break;");

var G__20095 = seq__20053_20067;
var G__20096 = chunk__20054_20068;
var G__20097 = count__20055_20069;
var G__20098 = (i__20056_20070 + (1));
seq__20053_20067 = G__20095;
chunk__20054_20068 = G__20096;
count__20055_20069 = G__20097;
i__20056_20070 = G__20098;
continue;
} else {
var temp__4425__auto___20099 = cljs.core.seq.call(null,seq__20053_20067);
if(temp__4425__auto___20099){
var seq__20053_20100__$1 = temp__4425__auto___20099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20053_20100__$1)){
var c__17628__auto___20101 = cljs.core.chunk_first.call(null,seq__20053_20100__$1);
var G__20102 = cljs.core.chunk_rest.call(null,seq__20053_20100__$1);
var G__20103 = c__17628__auto___20101;
var G__20104 = cljs.core.count.call(null,c__17628__auto___20101);
var G__20105 = (0);
seq__20053_20067 = G__20102;
chunk__20054_20068 = G__20103;
count__20055_20069 = G__20104;
i__20056_20070 = G__20105;
continue;
} else {
var vec__20062_20106 = cljs.core.first.call(null,seq__20053_20100__$1);
var ts_20107 = cljs.core.nth.call(null,vec__20062_20106,(0),null);
var then_20108 = cljs.core.nth.call(null,vec__20062_20106,(1),null);
var seq__20063_20109 = cljs.core.seq.call(null,ts_20107);
var chunk__20064_20110 = null;
var count__20065_20111 = (0);
var i__20066_20112 = (0);
while(true){
if((i__20066_20112 < count__20065_20111)){
var test_20113 = cljs.core._nth.call(null,chunk__20064_20110,i__20066_20112);
cljs.compiler.emitln.call(null,"case ",test_20113,":");

var G__20114 = seq__20063_20109;
var G__20115 = chunk__20064_20110;
var G__20116 = count__20065_20111;
var G__20117 = (i__20066_20112 + (1));
seq__20063_20109 = G__20114;
chunk__20064_20110 = G__20115;
count__20065_20111 = G__20116;
i__20066_20112 = G__20117;
continue;
} else {
var temp__4425__auto___20118__$1 = cljs.core.seq.call(null,seq__20063_20109);
if(temp__4425__auto___20118__$1){
var seq__20063_20119__$1 = temp__4425__auto___20118__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20063_20119__$1)){
var c__17628__auto___20120 = cljs.core.chunk_first.call(null,seq__20063_20119__$1);
var G__20121 = cljs.core.chunk_rest.call(null,seq__20063_20119__$1);
var G__20122 = c__17628__auto___20120;
var G__20123 = cljs.core.count.call(null,c__17628__auto___20120);
var G__20124 = (0);
seq__20063_20109 = G__20121;
chunk__20064_20110 = G__20122;
count__20065_20111 = G__20123;
i__20066_20112 = G__20124;
continue;
} else {
var test_20125 = cljs.core.first.call(null,seq__20063_20119__$1);
cljs.compiler.emitln.call(null,"case ",test_20125,":");

var G__20126 = cljs.core.next.call(null,seq__20063_20119__$1);
var G__20127 = null;
var G__20128 = (0);
var G__20129 = (0);
seq__20063_20109 = G__20126;
chunk__20064_20110 = G__20127;
count__20065_20111 = G__20128;
i__20066_20112 = G__20129;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_20108);
} else {
cljs.compiler.emitln.call(null,then_20108);
}

cljs.compiler.emitln.call(null,"break;");

var G__20130 = cljs.core.next.call(null,seq__20053_20100__$1);
var G__20131 = null;
var G__20132 = (0);
var G__20133 = (0);
seq__20053_20067 = G__20130;
chunk__20054_20068 = G__20131;
count__20055_20069 = G__20132;
i__20056_20070 = G__20133;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__20134){
var map__20135 = p__20134;
var map__20135__$1 = ((((!((map__20135 == null)))?((((map__20135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20135):map__20135);
var throw$ = cljs.core.get.call(null,map__20135__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__20135__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__20140 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__20140,(0),null);
var rstr = cljs.core.nth.call(null,vec__20140,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__20140,fstr,rstr,ret_t,axstr){
return (function (p1__20137_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__20137_SHARP_);
});})(idx,vec__20140,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__20141 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__20141__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__20141),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__20141);
return G__20141__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__20142_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__20142_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__20145 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__20145,(0),null);
var ts = cljs.core.nth.call(null,vec__20145,(1),null);
var n = cljs.core.nth.call(null,vec__20145,(2),null);
var xs = cljs.core.nthnext.call(null,vec__20145,(3));
if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__16813__auto__){
var and__16813__auto____$1 = ts;
if(cljs.core.truth_(and__16813__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__20146 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__20146,(0),null);
var ts = cljs.core.nth.call(null,vec__20146,(1),null);
var xs = cljs.core.nthnext.call(null,vec__20146,(2));
if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__16813__auto__){
var and__16813__auto____$1 = ts;
if(cljs.core.truth_(and__16813__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args20148 = [];
var len__17883__auto___20175 = arguments.length;
var i__17884__auto___20176 = (0);
while(true){
if((i__17884__auto___20176 < len__17883__auto___20175)){
args20148.push((arguments[i__17884__auto___20176]));

var G__20177 = (i__17884__auto___20176 + (1));
i__17884__auto___20176 = G__20177;
continue;
} else {
}
break;
}

var G__20150 = args20148.length;
switch (G__20150) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20148.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__20166 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__20147_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__20147_SHARP_);
} else {
return p1__20147_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__20166,(0),null);
var ys = cljs.core.nthnext.call(null,vec__20166,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__20167 = cljs.core.seq.call(null,ys);
var chunk__20168 = null;
var count__20169 = (0);
var i__20170 = (0);
while(true){
if((i__20170 < count__20169)){
var next_line = cljs.core._nth.call(null,chunk__20168,i__20170);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__20179 = seq__20167;
var G__20180 = chunk__20168;
var G__20181 = count__20169;
var G__20182 = (i__20170 + (1));
seq__20167 = G__20179;
chunk__20168 = G__20180;
count__20169 = G__20181;
i__20170 = G__20182;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20167);
if(temp__4425__auto__){
var seq__20167__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20167__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__20167__$1);
var G__20183 = cljs.core.chunk_rest.call(null,seq__20167__$1);
var G__20184 = c__17628__auto__;
var G__20185 = cljs.core.count.call(null,c__17628__auto__);
var G__20186 = (0);
seq__20167 = G__20183;
chunk__20168 = G__20184;
count__20169 = G__20185;
i__20170 = G__20186;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__20167__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__20187 = cljs.core.next.call(null,seq__20167__$1);
var G__20188 = null;
var G__20189 = (0);
var G__20190 = (0);
seq__20167 = G__20187;
chunk__20168 = G__20188;
count__20169 = G__20189;
i__20170 = G__20190;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__20171_20191 = cljs.core.seq.call(null,docs__$2);
var chunk__20172_20192 = null;
var count__20173_20193 = (0);
var i__20174_20194 = (0);
while(true){
if((i__20174_20194 < count__20173_20193)){
var e_20195 = cljs.core._nth.call(null,chunk__20172_20192,i__20174_20194);
if(cljs.core.truth_(e_20195)){
print_comment_lines.call(null,e_20195);
} else {
}

var G__20196 = seq__20171_20191;
var G__20197 = chunk__20172_20192;
var G__20198 = count__20173_20193;
var G__20199 = (i__20174_20194 + (1));
seq__20171_20191 = G__20196;
chunk__20172_20192 = G__20197;
count__20173_20193 = G__20198;
i__20174_20194 = G__20199;
continue;
} else {
var temp__4425__auto___20200 = cljs.core.seq.call(null,seq__20171_20191);
if(temp__4425__auto___20200){
var seq__20171_20201__$1 = temp__4425__auto___20200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20171_20201__$1)){
var c__17628__auto___20202 = cljs.core.chunk_first.call(null,seq__20171_20201__$1);
var G__20203 = cljs.core.chunk_rest.call(null,seq__20171_20201__$1);
var G__20204 = c__17628__auto___20202;
var G__20205 = cljs.core.count.call(null,c__17628__auto___20202);
var G__20206 = (0);
seq__20171_20191 = G__20203;
chunk__20172_20192 = G__20204;
count__20173_20193 = G__20205;
i__20174_20194 = G__20206;
continue;
} else {
var e_20207 = cljs.core.first.call(null,seq__20171_20201__$1);
if(cljs.core.truth_(e_20207)){
print_comment_lines.call(null,e_20207);
} else {
}

var G__20208 = cljs.core.next.call(null,seq__20171_20201__$1);
var G__20209 = null;
var G__20210 = (0);
var G__20211 = (0);
seq__20171_20191 = G__20208;
chunk__20172_20192 = G__20209;
count__20173_20193 = G__20210;
i__20174_20194 = G__20211;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__16813__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__20213_SHARP_){
return goog.string.startsWith(p1__20213_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = opts;
if(cljs.core.truth_(and__16813__auto____$1)){
var and__16813__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__16813__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__16813__auto____$2;
}
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__20214){
var map__20215 = p__20214;
var map__20215__$1 = ((((!((map__20215 == null)))?((((map__20215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20215):map__20215);
var name = cljs.core.get.call(null,map__20215__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__20215__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__20215__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__20215__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__20215__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__20215__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__20215__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__20215__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__20215__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__16813__auto__)){
return test;
} else {
return and__16813__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__20217){
var map__20234 = p__20217;
var map__20234__$1 = ((((!((map__20234 == null)))?((((map__20234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20234):map__20234);
var name = cljs.core.get.call(null,map__20234__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__20234__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__20234__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__20236_20250 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__20237_20251 = null;
var count__20238_20252 = (0);
var i__20239_20253 = (0);
while(true){
if((i__20239_20253 < count__20238_20252)){
var vec__20240_20254 = cljs.core._nth.call(null,chunk__20237_20251,i__20239_20253);
var i_20255 = cljs.core.nth.call(null,vec__20240_20254,(0),null);
var param_20256 = cljs.core.nth.call(null,vec__20240_20254,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_20256);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__20257 = seq__20236_20250;
var G__20258 = chunk__20237_20251;
var G__20259 = count__20238_20252;
var G__20260 = (i__20239_20253 + (1));
seq__20236_20250 = G__20257;
chunk__20237_20251 = G__20258;
count__20238_20252 = G__20259;
i__20239_20253 = G__20260;
continue;
} else {
var temp__4425__auto___20261 = cljs.core.seq.call(null,seq__20236_20250);
if(temp__4425__auto___20261){
var seq__20236_20262__$1 = temp__4425__auto___20261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20236_20262__$1)){
var c__17628__auto___20263 = cljs.core.chunk_first.call(null,seq__20236_20262__$1);
var G__20264 = cljs.core.chunk_rest.call(null,seq__20236_20262__$1);
var G__20265 = c__17628__auto___20263;
var G__20266 = cljs.core.count.call(null,c__17628__auto___20263);
var G__20267 = (0);
seq__20236_20250 = G__20264;
chunk__20237_20251 = G__20265;
count__20238_20252 = G__20266;
i__20239_20253 = G__20267;
continue;
} else {
var vec__20241_20268 = cljs.core.first.call(null,seq__20236_20262__$1);
var i_20269 = cljs.core.nth.call(null,vec__20241_20268,(0),null);
var param_20270 = cljs.core.nth.call(null,vec__20241_20268,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_20270);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__20271 = cljs.core.next.call(null,seq__20236_20262__$1);
var G__20272 = null;
var G__20273 = (0);
var G__20274 = (0);
seq__20236_20250 = G__20271;
chunk__20237_20251 = G__20272;
count__20238_20252 = G__20273;
i__20239_20253 = G__20274;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__20242_20275 = cljs.core.seq.call(null,params);
var chunk__20243_20276 = null;
var count__20244_20277 = (0);
var i__20245_20278 = (0);
while(true){
if((i__20245_20278 < count__20244_20277)){
var param_20279 = cljs.core._nth.call(null,chunk__20243_20276,i__20245_20278);
cljs.compiler.emit.call(null,param_20279);

if(cljs.core._EQ_.call(null,param_20279,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20280 = seq__20242_20275;
var G__20281 = chunk__20243_20276;
var G__20282 = count__20244_20277;
var G__20283 = (i__20245_20278 + (1));
seq__20242_20275 = G__20280;
chunk__20243_20276 = G__20281;
count__20244_20277 = G__20282;
i__20245_20278 = G__20283;
continue;
} else {
var temp__4425__auto___20284 = cljs.core.seq.call(null,seq__20242_20275);
if(temp__4425__auto___20284){
var seq__20242_20285__$1 = temp__4425__auto___20284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20242_20285__$1)){
var c__17628__auto___20286 = cljs.core.chunk_first.call(null,seq__20242_20285__$1);
var G__20287 = cljs.core.chunk_rest.call(null,seq__20242_20285__$1);
var G__20288 = c__17628__auto___20286;
var G__20289 = cljs.core.count.call(null,c__17628__auto___20286);
var G__20290 = (0);
seq__20242_20275 = G__20287;
chunk__20243_20276 = G__20288;
count__20244_20277 = G__20289;
i__20245_20278 = G__20290;
continue;
} else {
var param_20291 = cljs.core.first.call(null,seq__20242_20285__$1);
cljs.compiler.emit.call(null,param_20291);

if(cljs.core._EQ_.call(null,param_20291,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20292 = cljs.core.next.call(null,seq__20242_20285__$1);
var G__20293 = null;
var G__20294 = (0);
var G__20295 = (0);
seq__20242_20275 = G__20292;
chunk__20243_20276 = G__20293;
count__20244_20277 = G__20294;
i__20245_20278 = G__20295;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__20246_20296 = cljs.core.seq.call(null,params);
var chunk__20247_20297 = null;
var count__20248_20298 = (0);
var i__20249_20299 = (0);
while(true){
if((i__20249_20299 < count__20248_20298)){
var param_20300 = cljs.core._nth.call(null,chunk__20247_20297,i__20249_20299);
cljs.compiler.emit.call(null,param_20300);

if(cljs.core._EQ_.call(null,param_20300,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20301 = seq__20246_20296;
var G__20302 = chunk__20247_20297;
var G__20303 = count__20248_20298;
var G__20304 = (i__20249_20299 + (1));
seq__20246_20296 = G__20301;
chunk__20247_20297 = G__20302;
count__20248_20298 = G__20303;
i__20249_20299 = G__20304;
continue;
} else {
var temp__4425__auto___20305 = cljs.core.seq.call(null,seq__20246_20296);
if(temp__4425__auto___20305){
var seq__20246_20306__$1 = temp__4425__auto___20305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20246_20306__$1)){
var c__17628__auto___20307 = cljs.core.chunk_first.call(null,seq__20246_20306__$1);
var G__20308 = cljs.core.chunk_rest.call(null,seq__20246_20306__$1);
var G__20309 = c__17628__auto___20307;
var G__20310 = cljs.core.count.call(null,c__17628__auto___20307);
var G__20311 = (0);
seq__20246_20296 = G__20308;
chunk__20247_20297 = G__20309;
count__20248_20298 = G__20310;
i__20249_20299 = G__20311;
continue;
} else {
var param_20312 = cljs.core.first.call(null,seq__20246_20306__$1);
cljs.compiler.emit.call(null,param_20312);

if(cljs.core._EQ_.call(null,param_20312,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20313 = cljs.core.next.call(null,seq__20246_20306__$1);
var G__20314 = null;
var G__20315 = (0);
var G__20316 = (0);
seq__20246_20296 = G__20313;
chunk__20247_20297 = G__20314;
count__20248_20298 = G__20315;
i__20249_20299 = G__20316;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__20321 = cljs.core.seq.call(null,params);
var chunk__20322 = null;
var count__20323 = (0);
var i__20324 = (0);
while(true){
if((i__20324 < count__20323)){
var param = cljs.core._nth.call(null,chunk__20322,i__20324);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20325 = seq__20321;
var G__20326 = chunk__20322;
var G__20327 = count__20323;
var G__20328 = (i__20324 + (1));
seq__20321 = G__20325;
chunk__20322 = G__20326;
count__20323 = G__20327;
i__20324 = G__20328;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20321);
if(temp__4425__auto__){
var seq__20321__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20321__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__20321__$1);
var G__20329 = cljs.core.chunk_rest.call(null,seq__20321__$1);
var G__20330 = c__17628__auto__;
var G__20331 = cljs.core.count.call(null,c__17628__auto__);
var G__20332 = (0);
seq__20321 = G__20329;
chunk__20322 = G__20330;
count__20323 = G__20331;
i__20324 = G__20332;
continue;
} else {
var param = cljs.core.first.call(null,seq__20321__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20333 = cljs.core.next.call(null,seq__20321__$1);
var G__20334 = null;
var G__20335 = (0);
var G__20336 = (0);
seq__20321 = G__20333;
chunk__20322 = G__20334;
count__20323 = G__20335;
i__20324 = G__20336;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__20337){
var map__20340 = p__20337;
var map__20340__$1 = ((((!((map__20340 == null)))?((((map__20340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20340):map__20340);
var type = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__20340__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__20342){
var map__20353 = p__20342;
var map__20353__$1 = ((((!((map__20353 == null)))?((((map__20353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20353):map__20353);
var f = map__20353__$1;
var type = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__20353__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_20363__$1 = (function (){var or__16825__auto__ = name;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_20364 = cljs.compiler.munge.call(null,name_20363__$1);
var delegate_name_20365 = [cljs.core.str(mname_20364),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_20365," = function (");

var seq__20355_20366 = cljs.core.seq.call(null,params);
var chunk__20356_20367 = null;
var count__20357_20368 = (0);
var i__20358_20369 = (0);
while(true){
if((i__20358_20369 < count__20357_20368)){
var param_20370 = cljs.core._nth.call(null,chunk__20356_20367,i__20358_20369);
cljs.compiler.emit.call(null,param_20370);

if(cljs.core._EQ_.call(null,param_20370,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20371 = seq__20355_20366;
var G__20372 = chunk__20356_20367;
var G__20373 = count__20357_20368;
var G__20374 = (i__20358_20369 + (1));
seq__20355_20366 = G__20371;
chunk__20356_20367 = G__20372;
count__20357_20368 = G__20373;
i__20358_20369 = G__20374;
continue;
} else {
var temp__4425__auto___20375 = cljs.core.seq.call(null,seq__20355_20366);
if(temp__4425__auto___20375){
var seq__20355_20376__$1 = temp__4425__auto___20375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20355_20376__$1)){
var c__17628__auto___20377 = cljs.core.chunk_first.call(null,seq__20355_20376__$1);
var G__20378 = cljs.core.chunk_rest.call(null,seq__20355_20376__$1);
var G__20379 = c__17628__auto___20377;
var G__20380 = cljs.core.count.call(null,c__17628__auto___20377);
var G__20381 = (0);
seq__20355_20366 = G__20378;
chunk__20356_20367 = G__20379;
count__20357_20368 = G__20380;
i__20358_20369 = G__20381;
continue;
} else {
var param_20382 = cljs.core.first.call(null,seq__20355_20376__$1);
cljs.compiler.emit.call(null,param_20382);

if(cljs.core._EQ_.call(null,param_20382,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20383 = cljs.core.next.call(null,seq__20355_20376__$1);
var G__20384 = null;
var G__20385 = (0);
var G__20386 = (0);
seq__20355_20366 = G__20383;
chunk__20356_20367 = G__20384;
count__20357_20368 = G__20385;
i__20358_20369 = G__20386;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_20364," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_20387 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_20387,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_20365,".call(this,");

var seq__20359_20388 = cljs.core.seq.call(null,params);
var chunk__20360_20389 = null;
var count__20361_20390 = (0);
var i__20362_20391 = (0);
while(true){
if((i__20362_20391 < count__20361_20390)){
var param_20392 = cljs.core._nth.call(null,chunk__20360_20389,i__20362_20391);
cljs.compiler.emit.call(null,param_20392);

if(cljs.core._EQ_.call(null,param_20392,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20393 = seq__20359_20388;
var G__20394 = chunk__20360_20389;
var G__20395 = count__20361_20390;
var G__20396 = (i__20362_20391 + (1));
seq__20359_20388 = G__20393;
chunk__20360_20389 = G__20394;
count__20361_20390 = G__20395;
i__20362_20391 = G__20396;
continue;
} else {
var temp__4425__auto___20397 = cljs.core.seq.call(null,seq__20359_20388);
if(temp__4425__auto___20397){
var seq__20359_20398__$1 = temp__4425__auto___20397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20359_20398__$1)){
var c__17628__auto___20399 = cljs.core.chunk_first.call(null,seq__20359_20398__$1);
var G__20400 = cljs.core.chunk_rest.call(null,seq__20359_20398__$1);
var G__20401 = c__17628__auto___20399;
var G__20402 = cljs.core.count.call(null,c__17628__auto___20399);
var G__20403 = (0);
seq__20359_20388 = G__20400;
chunk__20360_20389 = G__20401;
count__20361_20390 = G__20402;
i__20362_20391 = G__20403;
continue;
} else {
var param_20404 = cljs.core.first.call(null,seq__20359_20398__$1);
cljs.compiler.emit.call(null,param_20404);

if(cljs.core._EQ_.call(null,param_20404,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20405 = cljs.core.next.call(null,seq__20359_20398__$1);
var G__20406 = null;
var G__20407 = (0);
var G__20408 = (0);
seq__20359_20388 = G__20405;
chunk__20360_20389 = G__20406;
count__20361_20390 = G__20407;
i__20362_20391 = G__20408;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_20364,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_20364,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_20363__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_20364,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_20365,";");

cljs.compiler.emitln.call(null,"return ",mname_20364,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__20412){
var map__20413 = p__20412;
var map__20413__$1 = ((((!((map__20413 == null)))?((((map__20413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20413):map__20413);
var name = cljs.core.get.call(null,map__20413__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__20413__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__20413__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__20413__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__20413__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__20413__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__20413__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__20413,map__20413__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20409_SHARP_){
var and__16813__auto__ = p1__20409_SHARP_;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__20409_SHARP_));
} else {
return and__16813__auto__;
}
});})(map__20413,map__20413__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_20434__$1 = (function (){var or__16825__auto__ = name;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_20435 = cljs.compiler.munge.call(null,name_20434__$1);
var maxparams_20436 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_20437 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_20434__$1,mname_20435,maxparams_20436,loop_locals,map__20413,map__20413__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_20435),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_20434__$1,mname_20435,maxparams_20436,loop_locals,map__20413,map__20413__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_20438 = cljs.core.sort_by.call(null,((function (name_20434__$1,mname_20435,maxparams_20436,mmap_20437,loop_locals,map__20413,map__20413__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20410_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20410_SHARP_)));
});})(name_20434__$1,mname_20435,maxparams_20436,mmap_20437,loop_locals,map__20413,map__20413__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_20437));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_20435," = null;");

var seq__20415_20439 = cljs.core.seq.call(null,ms_20438);
var chunk__20416_20440 = null;
var count__20417_20441 = (0);
var i__20418_20442 = (0);
while(true){
if((i__20418_20442 < count__20417_20441)){
var vec__20419_20443 = cljs.core._nth.call(null,chunk__20416_20440,i__20418_20442);
var n_20444 = cljs.core.nth.call(null,vec__20419_20443,(0),null);
var meth_20445 = cljs.core.nth.call(null,vec__20419_20443,(1),null);
cljs.compiler.emits.call(null,"var ",n_20444," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20445))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_20445);
} else {
cljs.compiler.emit_fn_method.call(null,meth_20445);
}

cljs.compiler.emitln.call(null,";");

var G__20446 = seq__20415_20439;
var G__20447 = chunk__20416_20440;
var G__20448 = count__20417_20441;
var G__20449 = (i__20418_20442 + (1));
seq__20415_20439 = G__20446;
chunk__20416_20440 = G__20447;
count__20417_20441 = G__20448;
i__20418_20442 = G__20449;
continue;
} else {
var temp__4425__auto___20450 = cljs.core.seq.call(null,seq__20415_20439);
if(temp__4425__auto___20450){
var seq__20415_20451__$1 = temp__4425__auto___20450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20415_20451__$1)){
var c__17628__auto___20452 = cljs.core.chunk_first.call(null,seq__20415_20451__$1);
var G__20453 = cljs.core.chunk_rest.call(null,seq__20415_20451__$1);
var G__20454 = c__17628__auto___20452;
var G__20455 = cljs.core.count.call(null,c__17628__auto___20452);
var G__20456 = (0);
seq__20415_20439 = G__20453;
chunk__20416_20440 = G__20454;
count__20417_20441 = G__20455;
i__20418_20442 = G__20456;
continue;
} else {
var vec__20420_20457 = cljs.core.first.call(null,seq__20415_20451__$1);
var n_20458 = cljs.core.nth.call(null,vec__20420_20457,(0),null);
var meth_20459 = cljs.core.nth.call(null,vec__20420_20457,(1),null);
cljs.compiler.emits.call(null,"var ",n_20458," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20459))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_20459);
} else {
cljs.compiler.emit_fn_method.call(null,meth_20459);
}

cljs.compiler.emitln.call(null,";");

var G__20460 = cljs.core.next.call(null,seq__20415_20451__$1);
var G__20461 = null;
var G__20462 = (0);
var G__20463 = (0);
seq__20415_20439 = G__20460;
chunk__20416_20440 = G__20461;
count__20417_20441 = G__20462;
i__20418_20442 = G__20463;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_20435," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_20436),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_20436)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_20436));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__20421_20464 = cljs.core.seq.call(null,ms_20438);
var chunk__20422_20465 = null;
var count__20423_20466 = (0);
var i__20424_20467 = (0);
while(true){
if((i__20424_20467 < count__20423_20466)){
var vec__20425_20468 = cljs.core._nth.call(null,chunk__20422_20465,i__20424_20467);
var n_20469 = cljs.core.nth.call(null,vec__20425_20468,(0),null);
var meth_20470 = cljs.core.nth.call(null,vec__20425_20468,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20470))){
cljs.compiler.emitln.call(null,"default:");

var restarg_20471 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_20471," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_20472 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_20471," = new cljs.core.IndexedSeq(",a_20472,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_20469,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_20436)),(((cljs.core.count.call(null,maxparams_20436) > (1)))?", ":null),restarg_20471,");");
} else {
var pcnt_20473 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20470));
cljs.compiler.emitln.call(null,"case ",pcnt_20473,":");

cljs.compiler.emitln.call(null,"return ",n_20469,".call(this",(((pcnt_20473 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_20473,maxparams_20436))),",")),");");
}

var G__20474 = seq__20421_20464;
var G__20475 = chunk__20422_20465;
var G__20476 = count__20423_20466;
var G__20477 = (i__20424_20467 + (1));
seq__20421_20464 = G__20474;
chunk__20422_20465 = G__20475;
count__20423_20466 = G__20476;
i__20424_20467 = G__20477;
continue;
} else {
var temp__4425__auto___20478 = cljs.core.seq.call(null,seq__20421_20464);
if(temp__4425__auto___20478){
var seq__20421_20479__$1 = temp__4425__auto___20478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20421_20479__$1)){
var c__17628__auto___20480 = cljs.core.chunk_first.call(null,seq__20421_20479__$1);
var G__20481 = cljs.core.chunk_rest.call(null,seq__20421_20479__$1);
var G__20482 = c__17628__auto___20480;
var G__20483 = cljs.core.count.call(null,c__17628__auto___20480);
var G__20484 = (0);
seq__20421_20464 = G__20481;
chunk__20422_20465 = G__20482;
count__20423_20466 = G__20483;
i__20424_20467 = G__20484;
continue;
} else {
var vec__20426_20485 = cljs.core.first.call(null,seq__20421_20479__$1);
var n_20486 = cljs.core.nth.call(null,vec__20426_20485,(0),null);
var meth_20487 = cljs.core.nth.call(null,vec__20426_20485,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20487))){
cljs.compiler.emitln.call(null,"default:");

var restarg_20488 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_20488," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_20489 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_20488," = new cljs.core.IndexedSeq(",a_20489,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_20486,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_20436)),(((cljs.core.count.call(null,maxparams_20436) > (1)))?", ":null),restarg_20488,");");
} else {
var pcnt_20490 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20487));
cljs.compiler.emitln.call(null,"case ",pcnt_20490,":");

cljs.compiler.emitln.call(null,"return ",n_20486,".call(this",(((pcnt_20490 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_20490,maxparams_20436))),",")),");");
}

var G__20491 = cljs.core.next.call(null,seq__20421_20479__$1);
var G__20492 = null;
var G__20493 = (0);
var G__20494 = (0);
seq__20421_20464 = G__20491;
chunk__20422_20465 = G__20492;
count__20423_20466 = G__20493;
i__20424_20467 = G__20494;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_20435,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_20435,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_20434__$1,mname_20435,maxparams_20436,mmap_20437,ms_20438,loop_locals,map__20413,map__20413__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20411_SHARP_){
var vec__20427 = p1__20411_SHARP_;
var n = cljs.core.nth.call(null,vec__20427,(0),null);
var m = cljs.core.nth.call(null,vec__20427,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_20434__$1,mname_20435,maxparams_20436,mmap_20437,ms_20438,loop_locals,map__20413,map__20413__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_20438),".cljs$lang$applyTo;");
} else {
}

var seq__20428_20495 = cljs.core.seq.call(null,ms_20438);
var chunk__20429_20496 = null;
var count__20430_20497 = (0);
var i__20431_20498 = (0);
while(true){
if((i__20431_20498 < count__20430_20497)){
var vec__20432_20499 = cljs.core._nth.call(null,chunk__20429_20496,i__20431_20498);
var n_20500 = cljs.core.nth.call(null,vec__20432_20499,(0),null);
var meth_20501 = cljs.core.nth.call(null,vec__20432_20499,(1),null);
var c_20502 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20501));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20501))){
cljs.compiler.emitln.call(null,mname_20435,".cljs$core$IFn$_invoke$arity$variadic = ",n_20500,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_20435,".cljs$core$IFn$_invoke$arity$",c_20502," = ",n_20500,";");
}

var G__20503 = seq__20428_20495;
var G__20504 = chunk__20429_20496;
var G__20505 = count__20430_20497;
var G__20506 = (i__20431_20498 + (1));
seq__20428_20495 = G__20503;
chunk__20429_20496 = G__20504;
count__20430_20497 = G__20505;
i__20431_20498 = G__20506;
continue;
} else {
var temp__4425__auto___20507 = cljs.core.seq.call(null,seq__20428_20495);
if(temp__4425__auto___20507){
var seq__20428_20508__$1 = temp__4425__auto___20507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20428_20508__$1)){
var c__17628__auto___20509 = cljs.core.chunk_first.call(null,seq__20428_20508__$1);
var G__20510 = cljs.core.chunk_rest.call(null,seq__20428_20508__$1);
var G__20511 = c__17628__auto___20509;
var G__20512 = cljs.core.count.call(null,c__17628__auto___20509);
var G__20513 = (0);
seq__20428_20495 = G__20510;
chunk__20429_20496 = G__20511;
count__20430_20497 = G__20512;
i__20431_20498 = G__20513;
continue;
} else {
var vec__20433_20514 = cljs.core.first.call(null,seq__20428_20508__$1);
var n_20515 = cljs.core.nth.call(null,vec__20433_20514,(0),null);
var meth_20516 = cljs.core.nth.call(null,vec__20433_20514,(1),null);
var c_20517 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20516));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20516))){
cljs.compiler.emitln.call(null,mname_20435,".cljs$core$IFn$_invoke$arity$variadic = ",n_20515,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_20435,".cljs$core$IFn$_invoke$arity$",c_20517," = ",n_20515,";");
}

var G__20518 = cljs.core.next.call(null,seq__20428_20508__$1);
var G__20519 = null;
var G__20520 = (0);
var G__20521 = (0);
seq__20428_20495 = G__20518;
chunk__20429_20496 = G__20519;
count__20430_20497 = G__20520;
i__20431_20498 = G__20521;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_20435,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__20522){
var map__20523 = p__20522;
var map__20523__$1 = ((((!((map__20523 == null)))?((((map__20523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20523):map__20523);
var statements = cljs.core.get.call(null,map__20523__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__20523__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__20523__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__16813__auto__ = statements;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__16813__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__20525_20529 = cljs.core.seq.call(null,statements);
var chunk__20526_20530 = null;
var count__20527_20531 = (0);
var i__20528_20532 = (0);
while(true){
if((i__20528_20532 < count__20527_20531)){
var s_20533 = cljs.core._nth.call(null,chunk__20526_20530,i__20528_20532);
cljs.compiler.emitln.call(null,s_20533);

var G__20534 = seq__20525_20529;
var G__20535 = chunk__20526_20530;
var G__20536 = count__20527_20531;
var G__20537 = (i__20528_20532 + (1));
seq__20525_20529 = G__20534;
chunk__20526_20530 = G__20535;
count__20527_20531 = G__20536;
i__20528_20532 = G__20537;
continue;
} else {
var temp__4425__auto___20538 = cljs.core.seq.call(null,seq__20525_20529);
if(temp__4425__auto___20538){
var seq__20525_20539__$1 = temp__4425__auto___20538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20525_20539__$1)){
var c__17628__auto___20540 = cljs.core.chunk_first.call(null,seq__20525_20539__$1);
var G__20541 = cljs.core.chunk_rest.call(null,seq__20525_20539__$1);
var G__20542 = c__17628__auto___20540;
var G__20543 = cljs.core.count.call(null,c__17628__auto___20540);
var G__20544 = (0);
seq__20525_20529 = G__20541;
chunk__20526_20530 = G__20542;
count__20527_20531 = G__20543;
i__20528_20532 = G__20544;
continue;
} else {
var s_20545 = cljs.core.first.call(null,seq__20525_20539__$1);
cljs.compiler.emitln.call(null,s_20545);

var G__20546 = cljs.core.next.call(null,seq__20525_20539__$1);
var G__20547 = null;
var G__20548 = (0);
var G__20549 = (0);
seq__20525_20529 = G__20546;
chunk__20526_20530 = G__20547;
count__20527_20531 = G__20548;
i__20528_20532 = G__20549;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__16813__auto__ = statements;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__16813__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__20550){
var map__20551 = p__20550;
var map__20551__$1 = ((((!((map__20551 == null)))?((((map__20551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20551):map__20551);
var env = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__16825__auto__ = name;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__20553,is_loop){
var map__20565 = p__20553;
var map__20565__$1 = ((((!((map__20565 == null)))?((((map__20565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20565):map__20565);
var bindings = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_20567_20576 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_20567_20576,context,map__20565,map__20565__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_20567_20576,context,map__20565,map__20565__$1,bindings,expr,env))
,bindings):null));

try{var seq__20568_20577 = cljs.core.seq.call(null,bindings);
var chunk__20569_20578 = null;
var count__20570_20579 = (0);
var i__20571_20580 = (0);
while(true){
if((i__20571_20580 < count__20570_20579)){
var map__20572_20581 = cljs.core._nth.call(null,chunk__20569_20578,i__20571_20580);
var map__20572_20582__$1 = ((((!((map__20572_20581 == null)))?((((map__20572_20581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20572_20581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20572_20581):map__20572_20581);
var binding_20583 = map__20572_20582__$1;
var init_20584 = cljs.core.get.call(null,map__20572_20582__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_20583);

cljs.compiler.emitln.call(null," = ",init_20584,";");

var G__20585 = seq__20568_20577;
var G__20586 = chunk__20569_20578;
var G__20587 = count__20570_20579;
var G__20588 = (i__20571_20580 + (1));
seq__20568_20577 = G__20585;
chunk__20569_20578 = G__20586;
count__20570_20579 = G__20587;
i__20571_20580 = G__20588;
continue;
} else {
var temp__4425__auto___20589 = cljs.core.seq.call(null,seq__20568_20577);
if(temp__4425__auto___20589){
var seq__20568_20590__$1 = temp__4425__auto___20589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20568_20590__$1)){
var c__17628__auto___20591 = cljs.core.chunk_first.call(null,seq__20568_20590__$1);
var G__20592 = cljs.core.chunk_rest.call(null,seq__20568_20590__$1);
var G__20593 = c__17628__auto___20591;
var G__20594 = cljs.core.count.call(null,c__17628__auto___20591);
var G__20595 = (0);
seq__20568_20577 = G__20592;
chunk__20569_20578 = G__20593;
count__20570_20579 = G__20594;
i__20571_20580 = G__20595;
continue;
} else {
var map__20574_20596 = cljs.core.first.call(null,seq__20568_20590__$1);
var map__20574_20597__$1 = ((((!((map__20574_20596 == null)))?((((map__20574_20596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20574_20596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20574_20596):map__20574_20596);
var binding_20598 = map__20574_20597__$1;
var init_20599 = cljs.core.get.call(null,map__20574_20597__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_20598);

cljs.compiler.emitln.call(null," = ",init_20599,";");

var G__20600 = cljs.core.next.call(null,seq__20568_20590__$1);
var G__20601 = null;
var G__20602 = (0);
var G__20603 = (0);
seq__20568_20577 = G__20600;
chunk__20569_20578 = G__20601;
count__20570_20579 = G__20602;
i__20571_20580 = G__20603;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_20567_20576;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__20604){
var map__20605 = p__20604;
var map__20605__$1 = ((((!((map__20605 == null)))?((((map__20605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20605):map__20605);
var frame = cljs.core.get.call(null,map__20605__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__20605__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__20605__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__17728__auto___20607 = cljs.core.count.call(null,exprs);
var i_20608 = (0);
while(true){
if((i_20608 < n__17728__auto___20607)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_20608)," = ",exprs.call(null,i_20608),";");

var G__20609 = (i_20608 + (1));
i_20608 = G__20609;
continue;
} else {
}
break;
}

var n__17728__auto___20610 = cljs.core.count.call(null,exprs);
var i_20611 = (0);
while(true){
if((i_20611 < n__17728__auto___20610)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_20611))," = ",temps.call(null,i_20611),";");

var G__20612 = (i_20611 + (1));
i_20611 = G__20612;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__20613){
var map__20614 = p__20613;
var map__20614__$1 = ((((!((map__20614 == null)))?((((map__20614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20614):map__20614);
var bindings = cljs.core.get.call(null,map__20614__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__20614__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20614__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__20616_20624 = cljs.core.seq.call(null,bindings);
var chunk__20617_20625 = null;
var count__20618_20626 = (0);
var i__20619_20627 = (0);
while(true){
if((i__20619_20627 < count__20618_20626)){
var map__20620_20628 = cljs.core._nth.call(null,chunk__20617_20625,i__20619_20627);
var map__20620_20629__$1 = ((((!((map__20620_20628 == null)))?((((map__20620_20628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20620_20628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20620_20628):map__20620_20628);
var binding_20630 = map__20620_20629__$1;
var init_20631 = cljs.core.get.call(null,map__20620_20629__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_20630)," = ",init_20631,";");

var G__20632 = seq__20616_20624;
var G__20633 = chunk__20617_20625;
var G__20634 = count__20618_20626;
var G__20635 = (i__20619_20627 + (1));
seq__20616_20624 = G__20632;
chunk__20617_20625 = G__20633;
count__20618_20626 = G__20634;
i__20619_20627 = G__20635;
continue;
} else {
var temp__4425__auto___20636 = cljs.core.seq.call(null,seq__20616_20624);
if(temp__4425__auto___20636){
var seq__20616_20637__$1 = temp__4425__auto___20636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20616_20637__$1)){
var c__17628__auto___20638 = cljs.core.chunk_first.call(null,seq__20616_20637__$1);
var G__20639 = cljs.core.chunk_rest.call(null,seq__20616_20637__$1);
var G__20640 = c__17628__auto___20638;
var G__20641 = cljs.core.count.call(null,c__17628__auto___20638);
var G__20642 = (0);
seq__20616_20624 = G__20639;
chunk__20617_20625 = G__20640;
count__20618_20626 = G__20641;
i__20619_20627 = G__20642;
continue;
} else {
var map__20622_20643 = cljs.core.first.call(null,seq__20616_20637__$1);
var map__20622_20644__$1 = ((((!((map__20622_20643 == null)))?((((map__20622_20643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20622_20643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20622_20643):map__20622_20643);
var binding_20645 = map__20622_20644__$1;
var init_20646 = cljs.core.get.call(null,map__20622_20644__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_20645)," = ",init_20646,";");

var G__20647 = cljs.core.next.call(null,seq__20616_20637__$1);
var G__20648 = null;
var G__20649 = (0);
var G__20650 = (0);
seq__20616_20624 = G__20647;
chunk__20617_20625 = G__20648;
count__20618_20626 = G__20649;
i__20619_20627 = G__20650;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__20653){
var map__20654 = p__20653;
var map__20654__$1 = ((((!((map__20654 == null)))?((((map__20654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20654):map__20654);
var expr = map__20654__$1;
var f = cljs.core.get.call(null,map__20654__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__20654__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20654__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__16813__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__16813__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__16813__auto__ = protocol;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = tag;
if(cljs.core.truth_(and__16813__auto____$1)){
var or__16825__auto__ = (function (){var and__16813__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16813__auto____$2)){
var and__16813__auto____$3 = protocol;
if(cljs.core.truth_(and__16813__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__16813__auto____$3;
}
} else {
return and__16813__auto____$2;
}
})();
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var and__16813__auto____$2 = (function (){var or__16825__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__16825__auto____$1)){
return or__16825__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__16813__auto____$2)){
var or__16825__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__16825__auto____$1){
return or__16825__auto____$1;
} else {
var and__16813__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__16813__auto____$3){
var and__16813__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__16813__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__16813__auto____$4;
}
} else {
return and__16813__auto____$3;
}
}
} else {
return and__16813__auto____$2;
}
}
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__16825__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__16825__auto__){
return or__16825__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__20656 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__16813__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__16813__auto__)){
return (arity > mfa);
} else {
return and__16813__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20654,map__20654__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20654,map__20654__$1,expr,f,args,env){
return (function (p1__20651_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__20651_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20654,map__20654__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20654,map__20654__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20654,map__20654__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20654,map__20654__$1,expr,f,args,env){
return (function (p1__20652_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__20652_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20654,map__20654__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20654,map__20654__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__20656,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__20656,(1),null);
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_20657 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_20657,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_20658 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_20658,args)),(((mfa_20658 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_20658,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__16825__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var or__16825__auto____$1 = js_QMARK_;
if(or__16825__auto____$1){
return or__16825__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__16813__auto__;
}
})())){
var fprop_20659 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_20659," ? ",f__$1,fprop_20659,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__20660){
var map__20661 = p__20660;
var map__20661__$1 = ((((!((map__20661 == null)))?((((map__20661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20661):map__20661);
var ctor = cljs.core.get.call(null,map__20661__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__20661__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__20663){
var map__20664 = p__20663;
var map__20664__$1 = ((((!((map__20664 == null)))?((((map__20664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20664):map__20664);
var target = cljs.core.get.call(null,map__20664__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__20664__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__20664__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__20670_20674 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__20671_20675 = null;
var count__20672_20676 = (0);
var i__20673_20677 = (0);
while(true){
if((i__20673_20677 < count__20672_20676)){
var lib_20678 = cljs.core._nth.call(null,chunk__20671_20675,i__20673_20677);
if(cljs.core.truth_((function (){var or__16825__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20678),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20678),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__16825__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20678),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20678),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20678),"');");

}
}

var G__20679 = seq__20670_20674;
var G__20680 = chunk__20671_20675;
var G__20681 = count__20672_20676;
var G__20682 = (i__20673_20677 + (1));
seq__20670_20674 = G__20679;
chunk__20671_20675 = G__20680;
count__20672_20676 = G__20681;
i__20673_20677 = G__20682;
continue;
} else {
var temp__4425__auto___20683 = cljs.core.seq.call(null,seq__20670_20674);
if(temp__4425__auto___20683){
var seq__20670_20684__$1 = temp__4425__auto___20683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20670_20684__$1)){
var c__17628__auto___20685 = cljs.core.chunk_first.call(null,seq__20670_20684__$1);
var G__20686 = cljs.core.chunk_rest.call(null,seq__20670_20684__$1);
var G__20687 = c__17628__auto___20685;
var G__20688 = cljs.core.count.call(null,c__17628__auto___20685);
var G__20689 = (0);
seq__20670_20674 = G__20686;
chunk__20671_20675 = G__20687;
count__20672_20676 = G__20688;
i__20673_20677 = G__20689;
continue;
} else {
var lib_20690 = cljs.core.first.call(null,seq__20670_20684__$1);
if(cljs.core.truth_((function (){var or__16825__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20690),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20690),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__16825__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20690),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20690),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20690),"');");

}
}

var G__20691 = cljs.core.next.call(null,seq__20670_20684__$1);
var G__20692 = null;
var G__20693 = (0);
var G__20694 = (0);
seq__20670_20674 = G__20691;
chunk__20671_20675 = G__20692;
count__20672_20676 = G__20693;
i__20673_20677 = G__20694;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__20695){
var map__20696 = p__20695;
var map__20696__$1 = ((((!((map__20696 == null)))?((((map__20696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20696):map__20696);
var name = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__20698){
var map__20699 = p__20698;
var map__20699__$1 = ((((!((map__20699 == null)))?((((map__20699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20699):map__20699);
var t = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__20701_20715 = cljs.core.seq.call(null,protocols);
var chunk__20702_20716 = null;
var count__20703_20717 = (0);
var i__20704_20718 = (0);
while(true){
if((i__20704_20718 < count__20703_20717)){
var protocol_20719 = cljs.core._nth.call(null,chunk__20702_20716,i__20704_20718);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_20719)].join('')),"}");

var G__20720 = seq__20701_20715;
var G__20721 = chunk__20702_20716;
var G__20722 = count__20703_20717;
var G__20723 = (i__20704_20718 + (1));
seq__20701_20715 = G__20720;
chunk__20702_20716 = G__20721;
count__20703_20717 = G__20722;
i__20704_20718 = G__20723;
continue;
} else {
var temp__4425__auto___20724 = cljs.core.seq.call(null,seq__20701_20715);
if(temp__4425__auto___20724){
var seq__20701_20725__$1 = temp__4425__auto___20724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20701_20725__$1)){
var c__17628__auto___20726 = cljs.core.chunk_first.call(null,seq__20701_20725__$1);
var G__20727 = cljs.core.chunk_rest.call(null,seq__20701_20725__$1);
var G__20728 = c__17628__auto___20726;
var G__20729 = cljs.core.count.call(null,c__17628__auto___20726);
var G__20730 = (0);
seq__20701_20715 = G__20727;
chunk__20702_20716 = G__20728;
count__20703_20717 = G__20729;
i__20704_20718 = G__20730;
continue;
} else {
var protocol_20731 = cljs.core.first.call(null,seq__20701_20725__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_20731)].join('')),"}");

var G__20732 = cljs.core.next.call(null,seq__20701_20725__$1);
var G__20733 = null;
var G__20734 = (0);
var G__20735 = (0);
seq__20701_20715 = G__20732;
chunk__20702_20716 = G__20733;
count__20703_20717 = G__20734;
i__20704_20718 = G__20735;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__20705_20736 = cljs.core.seq.call(null,fields__$1);
var chunk__20706_20737 = null;
var count__20707_20738 = (0);
var i__20708_20739 = (0);
while(true){
if((i__20708_20739 < count__20707_20738)){
var fld_20740 = cljs.core._nth.call(null,chunk__20706_20737,i__20708_20739);
cljs.compiler.emitln.call(null,"this.",fld_20740," = ",fld_20740,";");

var G__20741 = seq__20705_20736;
var G__20742 = chunk__20706_20737;
var G__20743 = count__20707_20738;
var G__20744 = (i__20708_20739 + (1));
seq__20705_20736 = G__20741;
chunk__20706_20737 = G__20742;
count__20707_20738 = G__20743;
i__20708_20739 = G__20744;
continue;
} else {
var temp__4425__auto___20745 = cljs.core.seq.call(null,seq__20705_20736);
if(temp__4425__auto___20745){
var seq__20705_20746__$1 = temp__4425__auto___20745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20705_20746__$1)){
var c__17628__auto___20747 = cljs.core.chunk_first.call(null,seq__20705_20746__$1);
var G__20748 = cljs.core.chunk_rest.call(null,seq__20705_20746__$1);
var G__20749 = c__17628__auto___20747;
var G__20750 = cljs.core.count.call(null,c__17628__auto___20747);
var G__20751 = (0);
seq__20705_20736 = G__20748;
chunk__20706_20737 = G__20749;
count__20707_20738 = G__20750;
i__20708_20739 = G__20751;
continue;
} else {
var fld_20752 = cljs.core.first.call(null,seq__20705_20746__$1);
cljs.compiler.emitln.call(null,"this.",fld_20752," = ",fld_20752,";");

var G__20753 = cljs.core.next.call(null,seq__20705_20746__$1);
var G__20754 = null;
var G__20755 = (0);
var G__20756 = (0);
seq__20705_20736 = G__20753;
chunk__20706_20737 = G__20754;
count__20707_20738 = G__20755;
i__20708_20739 = G__20756;
continue;
}
} else {
}
}
break;
}

var seq__20709_20757 = cljs.core.seq.call(null,pmasks);
var chunk__20710_20758 = null;
var count__20711_20759 = (0);
var i__20712_20760 = (0);
while(true){
if((i__20712_20760 < count__20711_20759)){
var vec__20713_20761 = cljs.core._nth.call(null,chunk__20710_20758,i__20712_20760);
var pno_20762 = cljs.core.nth.call(null,vec__20713_20761,(0),null);
var pmask_20763 = cljs.core.nth.call(null,vec__20713_20761,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20762,"$ = ",pmask_20763,";");

var G__20764 = seq__20709_20757;
var G__20765 = chunk__20710_20758;
var G__20766 = count__20711_20759;
var G__20767 = (i__20712_20760 + (1));
seq__20709_20757 = G__20764;
chunk__20710_20758 = G__20765;
count__20711_20759 = G__20766;
i__20712_20760 = G__20767;
continue;
} else {
var temp__4425__auto___20768 = cljs.core.seq.call(null,seq__20709_20757);
if(temp__4425__auto___20768){
var seq__20709_20769__$1 = temp__4425__auto___20768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20709_20769__$1)){
var c__17628__auto___20770 = cljs.core.chunk_first.call(null,seq__20709_20769__$1);
var G__20771 = cljs.core.chunk_rest.call(null,seq__20709_20769__$1);
var G__20772 = c__17628__auto___20770;
var G__20773 = cljs.core.count.call(null,c__17628__auto___20770);
var G__20774 = (0);
seq__20709_20757 = G__20771;
chunk__20710_20758 = G__20772;
count__20711_20759 = G__20773;
i__20712_20760 = G__20774;
continue;
} else {
var vec__20714_20775 = cljs.core.first.call(null,seq__20709_20769__$1);
var pno_20776 = cljs.core.nth.call(null,vec__20714_20775,(0),null);
var pmask_20777 = cljs.core.nth.call(null,vec__20714_20775,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20776,"$ = ",pmask_20777,";");

var G__20778 = cljs.core.next.call(null,seq__20709_20769__$1);
var G__20779 = null;
var G__20780 = (0);
var G__20781 = (0);
seq__20709_20757 = G__20778;
chunk__20710_20758 = G__20779;
count__20711_20759 = G__20780;
i__20712_20760 = G__20781;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__20782){
var map__20783 = p__20782;
var map__20783__$1 = ((((!((map__20783 == null)))?((((map__20783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20783):map__20783);
var t = cljs.core.get.call(null,map__20783__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__20783__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__20783__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__20783__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__20783__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__20785_20799 = cljs.core.seq.call(null,protocols);
var chunk__20786_20800 = null;
var count__20787_20801 = (0);
var i__20788_20802 = (0);
while(true){
if((i__20788_20802 < count__20787_20801)){
var protocol_20803 = cljs.core._nth.call(null,chunk__20786_20800,i__20788_20802);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_20803)].join('')),"}");

var G__20804 = seq__20785_20799;
var G__20805 = chunk__20786_20800;
var G__20806 = count__20787_20801;
var G__20807 = (i__20788_20802 + (1));
seq__20785_20799 = G__20804;
chunk__20786_20800 = G__20805;
count__20787_20801 = G__20806;
i__20788_20802 = G__20807;
continue;
} else {
var temp__4425__auto___20808 = cljs.core.seq.call(null,seq__20785_20799);
if(temp__4425__auto___20808){
var seq__20785_20809__$1 = temp__4425__auto___20808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20785_20809__$1)){
var c__17628__auto___20810 = cljs.core.chunk_first.call(null,seq__20785_20809__$1);
var G__20811 = cljs.core.chunk_rest.call(null,seq__20785_20809__$1);
var G__20812 = c__17628__auto___20810;
var G__20813 = cljs.core.count.call(null,c__17628__auto___20810);
var G__20814 = (0);
seq__20785_20799 = G__20811;
chunk__20786_20800 = G__20812;
count__20787_20801 = G__20813;
i__20788_20802 = G__20814;
continue;
} else {
var protocol_20815 = cljs.core.first.call(null,seq__20785_20809__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_20815)].join('')),"}");

var G__20816 = cljs.core.next.call(null,seq__20785_20809__$1);
var G__20817 = null;
var G__20818 = (0);
var G__20819 = (0);
seq__20785_20799 = G__20816;
chunk__20786_20800 = G__20817;
count__20787_20801 = G__20818;
i__20788_20802 = G__20819;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__20789_20820 = cljs.core.seq.call(null,fields__$1);
var chunk__20790_20821 = null;
var count__20791_20822 = (0);
var i__20792_20823 = (0);
while(true){
if((i__20792_20823 < count__20791_20822)){
var fld_20824 = cljs.core._nth.call(null,chunk__20790_20821,i__20792_20823);
cljs.compiler.emitln.call(null,"this.",fld_20824," = ",fld_20824,";");

var G__20825 = seq__20789_20820;
var G__20826 = chunk__20790_20821;
var G__20827 = count__20791_20822;
var G__20828 = (i__20792_20823 + (1));
seq__20789_20820 = G__20825;
chunk__20790_20821 = G__20826;
count__20791_20822 = G__20827;
i__20792_20823 = G__20828;
continue;
} else {
var temp__4425__auto___20829 = cljs.core.seq.call(null,seq__20789_20820);
if(temp__4425__auto___20829){
var seq__20789_20830__$1 = temp__4425__auto___20829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20789_20830__$1)){
var c__17628__auto___20831 = cljs.core.chunk_first.call(null,seq__20789_20830__$1);
var G__20832 = cljs.core.chunk_rest.call(null,seq__20789_20830__$1);
var G__20833 = c__17628__auto___20831;
var G__20834 = cljs.core.count.call(null,c__17628__auto___20831);
var G__20835 = (0);
seq__20789_20820 = G__20832;
chunk__20790_20821 = G__20833;
count__20791_20822 = G__20834;
i__20792_20823 = G__20835;
continue;
} else {
var fld_20836 = cljs.core.first.call(null,seq__20789_20830__$1);
cljs.compiler.emitln.call(null,"this.",fld_20836," = ",fld_20836,";");

var G__20837 = cljs.core.next.call(null,seq__20789_20830__$1);
var G__20838 = null;
var G__20839 = (0);
var G__20840 = (0);
seq__20789_20820 = G__20837;
chunk__20790_20821 = G__20838;
count__20791_20822 = G__20839;
i__20792_20823 = G__20840;
continue;
}
} else {
}
}
break;
}

var seq__20793_20841 = cljs.core.seq.call(null,pmasks);
var chunk__20794_20842 = null;
var count__20795_20843 = (0);
var i__20796_20844 = (0);
while(true){
if((i__20796_20844 < count__20795_20843)){
var vec__20797_20845 = cljs.core._nth.call(null,chunk__20794_20842,i__20796_20844);
var pno_20846 = cljs.core.nth.call(null,vec__20797_20845,(0),null);
var pmask_20847 = cljs.core.nth.call(null,vec__20797_20845,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20846,"$ = ",pmask_20847,";");

var G__20848 = seq__20793_20841;
var G__20849 = chunk__20794_20842;
var G__20850 = count__20795_20843;
var G__20851 = (i__20796_20844 + (1));
seq__20793_20841 = G__20848;
chunk__20794_20842 = G__20849;
count__20795_20843 = G__20850;
i__20796_20844 = G__20851;
continue;
} else {
var temp__4425__auto___20852 = cljs.core.seq.call(null,seq__20793_20841);
if(temp__4425__auto___20852){
var seq__20793_20853__$1 = temp__4425__auto___20852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20793_20853__$1)){
var c__17628__auto___20854 = cljs.core.chunk_first.call(null,seq__20793_20853__$1);
var G__20855 = cljs.core.chunk_rest.call(null,seq__20793_20853__$1);
var G__20856 = c__17628__auto___20854;
var G__20857 = cljs.core.count.call(null,c__17628__auto___20854);
var G__20858 = (0);
seq__20793_20841 = G__20855;
chunk__20794_20842 = G__20856;
count__20795_20843 = G__20857;
i__20796_20844 = G__20858;
continue;
} else {
var vec__20798_20859 = cljs.core.first.call(null,seq__20793_20853__$1);
var pno_20860 = cljs.core.nth.call(null,vec__20798_20859,(0),null);
var pmask_20861 = cljs.core.nth.call(null,vec__20798_20859,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20860,"$ = ",pmask_20861,";");

var G__20862 = cljs.core.next.call(null,seq__20793_20853__$1);
var G__20863 = null;
var G__20864 = (0);
var G__20865 = (0);
seq__20793_20841 = G__20862;
chunk__20794_20842 = G__20863;
count__20795_20843 = G__20864;
i__20796_20844 = G__20865;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__20866){
var map__20867 = p__20866;
var map__20867__$1 = ((((!((map__20867 == null)))?((((map__20867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20867):map__20867);
var target = cljs.core.get.call(null,map__20867__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__20867__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__20867__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__20867__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20867__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__20869){
var map__20870 = p__20869;
var map__20870__$1 = ((((!((map__20870 == null)))?((((map__20870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20870):map__20870);
var op = cljs.core.get.call(null,map__20870__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__20870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__20870__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__20870__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__20870__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__16813__auto__ = code;
if(cljs.core.truth_(and__16813__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__16813__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__19826__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19826__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__20880 = cljs.core.seq.call(null,table);
var chunk__20881 = null;
var count__20882 = (0);
var i__20883 = (0);
while(true){
if((i__20883 < count__20882)){
var vec__20884 = cljs.core._nth.call(null,chunk__20881,i__20883);
var sym = cljs.core.nth.call(null,vec__20884,(0),null);
var value = cljs.core.nth.call(null,vec__20884,(1),null);
var ns_20886 = cljs.core.namespace.call(null,sym);
var name_20887 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__20888 = seq__20880;
var G__20889 = chunk__20881;
var G__20890 = count__20882;
var G__20891 = (i__20883 + (1));
seq__20880 = G__20888;
chunk__20881 = G__20889;
count__20882 = G__20890;
i__20883 = G__20891;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20880);
if(temp__4425__auto__){
var seq__20880__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20880__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__20880__$1);
var G__20892 = cljs.core.chunk_rest.call(null,seq__20880__$1);
var G__20893 = c__17628__auto__;
var G__20894 = cljs.core.count.call(null,c__17628__auto__);
var G__20895 = (0);
seq__20880 = G__20892;
chunk__20881 = G__20893;
count__20882 = G__20894;
i__20883 = G__20895;
continue;
} else {
var vec__20885 = cljs.core.first.call(null,seq__20880__$1);
var sym = cljs.core.nth.call(null,vec__20885,(0),null);
var value = cljs.core.nth.call(null,vec__20885,(1),null);
var ns_20896 = cljs.core.namespace.call(null,sym);
var name_20897 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__20898 = cljs.core.next.call(null,seq__20880__$1);
var G__20899 = null;
var G__20900 = (0);
var G__20901 = (0);
seq__20880 = G__20898;
chunk__20881 = G__20899;
count__20882 = G__20900;
i__20883 = G__20901;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map
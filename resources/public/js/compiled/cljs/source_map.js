// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__19152){
var vec__19153 = p__19152;
var i = cljs.core.nth.call(null,vec__19153,(0),null);
var v = cljs.core.nth.call(null,vec__19153,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__19155 = seg;
var gcol = cljs.core.nth.call(null,vec__19155,(0),null);
var source = cljs.core.nth.call(null,vec__19155,(1),null);
var line = cljs.core.nth.call(null,vec__19155,(2),null);
var col = cljs.core.nth.call(null,vec__19155,(3),null);
var name = cljs.core.nth.call(null,vec__19155,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__19158 = seg;
var gcol = cljs.core.nth.call(null,vec__19158,(0),null);
var source = cljs.core.nth.call(null,vec__19158,(1),null);
var line = cljs.core.nth.call(null,vec__19158,(2),null);
var col = cljs.core.nth.call(null,vec__19158,(3),null);
var name = cljs.core.nth.call(null,vec__19158,(4),null);
var vec__19159 = relseg;
var rgcol = cljs.core.nth.call(null,vec__19159,(0),null);
var rsource = cljs.core.nth.call(null,vec__19159,(1),null);
var rline = cljs.core.nth.call(null,vec__19159,(2),null);
var rcol = cljs.core.nth.call(null,vec__19159,(3),null);
var rname = cljs.core.nth.call(null,vec__19159,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__16825__auto__ = source;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__16825__auto__ = line;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__16825__auto__ = col;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__16825__auto__ = name;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__19162 = segmap;
var map__19162__$1 = ((((!((map__19162 == null)))?((((map__19162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19162):map__19162);
var gcol = cljs.core.get.call(null,map__19162__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__19162__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__19162__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__19162__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__19162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__19162,map__19162__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__19162,map__19162__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__19162,map__19162__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__19162,map__19162__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__19162,map__19162__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__19162,map__19162__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args19164 = [];
var len__17883__auto___19168 = arguments.length;
var i__17884__auto___19169 = (0);
while(true){
if((i__17884__auto___19169 < len__17883__auto___19168)){
args19164.push((arguments[i__17884__auto___19169]));

var G__19170 = (i__17884__auto___19169 + (1));
i__17884__auto___19169 = G__19170;
continue;
} else {
}
break;
}

var G__19166 = args19164.length;
switch (G__19166) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19164.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__19167 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__19172 = cljs.core.next.call(null,segs__$1);
var G__19173 = nrelseg;
var G__19174 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__19172;
relseg__$1 = G__19173;
result__$1 = G__19174;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__19167,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__19167,(1),null);
var G__19175 = (gline + (1));
var G__19176 = cljs.core.next.call(null,lines__$1);
var G__19177 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__19178 = result__$1;
gline = G__19175;
lines__$1 = G__19176;
relseg = G__19177;
result = G__19178;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__19182 = segmap;
var map__19182__$1 = ((((!((map__19182 == null)))?((((map__19182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19182):map__19182);
var gcol = cljs.core.get.call(null,map__19182__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__19182__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__19182__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__19182__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__19182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__19182,map__19182__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__19182,map__19182__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__19179_SHARP_){
return cljs.core.conj.call(null,p1__19179_SHARP_,d__$1);
});})(map__19182,map__19182__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__19182,map__19182__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args19184 = [];
var len__17883__auto___19188 = arguments.length;
var i__17884__auto___19189 = (0);
while(true){
if((i__17884__auto___19189 < len__17883__auto___19188)){
args19184.push((arguments[i__17884__auto___19189]));

var G__19190 = (i__17884__auto___19189 + (1));
i__17884__auto___19189 = G__19190;
continue;
} else {
}
break;
}

var G__19186 = args19184.length;
switch (G__19186) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19184.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__19187 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__19192 = cljs.core.next.call(null,segs__$1);
var G__19193 = nrelseg;
var G__19194 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__19192;
relseg__$1 = G__19193;
result__$1 = G__19194;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__19187,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__19187,(1),null);
var G__19195 = (gline + (1));
var G__19196 = cljs.core.next.call(null,lines__$1);
var G__19197 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__19198 = result__$1;
gline = G__19195;
lines__$1 = G__19196;
relseg = G__19197;
result = G__19198;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__19205){
var vec__19206 = p__19205;
var _ = cljs.core.nth.call(null,vec__19206,(0),null);
var source = cljs.core.nth.call(null,vec__19206,(1),null);
var line = cljs.core.nth.call(null,vec__19206,(2),null);
var col = cljs.core.nth.call(null,vec__19206,(3),null);
var name = cljs.core.nth.call(null,vec__19206,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__19207){
var vec__19208 = p__19207;
var gcol = cljs.core.nth.call(null,vec__19208,(0),null);
var sidx = cljs.core.nth.call(null,vec__19208,(1),null);
var line = cljs.core.nth.call(null,vec__19208,(2),null);
var col = cljs.core.nth.call(null,vec__19208,(3),null);
var name = cljs.core.nth.call(null,vec__19208,(4),null);
var seg = vec__19208;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__19208,gcol,sidx,line,col,name,seg,relseg){
return (function (p__19209){
var vec__19210 = p__19209;
var _ = cljs.core.nth.call(null,vec__19210,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__19210,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__19210,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__19210,(3),null);
var lname = cljs.core.nth.call(null,vec__19210,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__16825__auto__ = name;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__19208,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__19264 = cljs.core.seq.call(null,infos);
var chunk__19265 = null;
var count__19266 = (0);
var i__19267 = (0);
while(true){
if((i__19267 < count__19266)){
var info = cljs.core._nth.call(null,chunk__19265,i__19267);
var segv_19314 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_19315 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_19316 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_19315 > (lc_19316 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__19264,chunk__19265,count__19266,i__19267,segv_19314,gline_19315,lc_19316,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_19315 - (lc_19316 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_19314], null));
});})(seq__19264,chunk__19265,count__19266,i__19267,segv_19314,gline_19315,lc_19316,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__19264,chunk__19265,count__19266,i__19267,segv_19314,gline_19315,lc_19316,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19315], null),cljs.core.conj,segv_19314);
});})(seq__19264,chunk__19265,count__19266,i__19267,segv_19314,gline_19315,lc_19316,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__19317 = seq__19264;
var G__19318 = chunk__19265;
var G__19319 = count__19266;
var G__19320 = (i__19267 + (1));
seq__19264 = G__19317;
chunk__19265 = G__19318;
count__19266 = G__19319;
i__19267 = G__19320;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19264);
if(temp__4425__auto__){
var seq__19264__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19264__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__19264__$1);
var G__19321 = cljs.core.chunk_rest.call(null,seq__19264__$1);
var G__19322 = c__17628__auto__;
var G__19323 = cljs.core.count.call(null,c__17628__auto__);
var G__19324 = (0);
seq__19264 = G__19321;
chunk__19265 = G__19322;
count__19266 = G__19323;
i__19267 = G__19324;
continue;
} else {
var info = cljs.core.first.call(null,seq__19264__$1);
var segv_19325 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_19326 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_19327 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_19326 > (lc_19327 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__19264,chunk__19265,count__19266,i__19267,segv_19325,gline_19326,lc_19327,info,seq__19264__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_19326 - (lc_19327 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_19325], null));
});})(seq__19264,chunk__19265,count__19266,i__19267,segv_19325,gline_19326,lc_19327,info,seq__19264__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__19264,chunk__19265,count__19266,i__19267,segv_19325,gline_19326,lc_19327,info,seq__19264__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19326], null),cljs.core.conj,segv_19325);
});})(seq__19264,chunk__19265,count__19266,i__19267,segv_19325,gline_19326,lc_19327,info,seq__19264__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__19328 = cljs.core.next.call(null,seq__19264__$1);
var G__19329 = null;
var G__19330 = (0);
var G__19331 = (0);
seq__19264 = G__19328;
chunk__19265 = G__19329;
count__19266 = G__19330;
i__19267 = G__19331;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__19268_19332 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__19269_19333 = null;
var count__19270_19334 = (0);
var i__19271_19335 = (0);
while(true){
if((i__19271_19335 < count__19270_19334)){
var vec__19272_19336 = cljs.core._nth.call(null,chunk__19269_19333,i__19271_19335);
var source_idx_19337 = cljs.core.nth.call(null,vec__19272_19336,(0),null);
var vec__19273_19338 = cljs.core.nth.call(null,vec__19272_19336,(1),null);
var __19339 = cljs.core.nth.call(null,vec__19273_19338,(0),null);
var lines_19340__$1 = cljs.core.nth.call(null,vec__19273_19338,(1),null);
var seq__19274_19341 = cljs.core.seq.call(null,lines_19340__$1);
var chunk__19275_19342 = null;
var count__19276_19343 = (0);
var i__19277_19344 = (0);
while(true){
if((i__19277_19344 < count__19276_19343)){
var vec__19278_19345 = cljs.core._nth.call(null,chunk__19275_19342,i__19277_19344);
var line_19346 = cljs.core.nth.call(null,vec__19278_19345,(0),null);
var cols_19347 = cljs.core.nth.call(null,vec__19278_19345,(1),null);
var seq__19279_19348 = cljs.core.seq.call(null,cols_19347);
var chunk__19280_19349 = null;
var count__19281_19350 = (0);
var i__19282_19351 = (0);
while(true){
if((i__19282_19351 < count__19281_19350)){
var vec__19283_19352 = cljs.core._nth.call(null,chunk__19280_19349,i__19282_19351);
var col_19353 = cljs.core.nth.call(null,vec__19283_19352,(0),null);
var infos_19354 = cljs.core.nth.call(null,vec__19283_19352,(1),null);
encode_cols.call(null,infos_19354,source_idx_19337,line_19346,col_19353);

var G__19355 = seq__19279_19348;
var G__19356 = chunk__19280_19349;
var G__19357 = count__19281_19350;
var G__19358 = (i__19282_19351 + (1));
seq__19279_19348 = G__19355;
chunk__19280_19349 = G__19356;
count__19281_19350 = G__19357;
i__19282_19351 = G__19358;
continue;
} else {
var temp__4425__auto___19359 = cljs.core.seq.call(null,seq__19279_19348);
if(temp__4425__auto___19359){
var seq__19279_19360__$1 = temp__4425__auto___19359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19279_19360__$1)){
var c__17628__auto___19361 = cljs.core.chunk_first.call(null,seq__19279_19360__$1);
var G__19362 = cljs.core.chunk_rest.call(null,seq__19279_19360__$1);
var G__19363 = c__17628__auto___19361;
var G__19364 = cljs.core.count.call(null,c__17628__auto___19361);
var G__19365 = (0);
seq__19279_19348 = G__19362;
chunk__19280_19349 = G__19363;
count__19281_19350 = G__19364;
i__19282_19351 = G__19365;
continue;
} else {
var vec__19284_19366 = cljs.core.first.call(null,seq__19279_19360__$1);
var col_19367 = cljs.core.nth.call(null,vec__19284_19366,(0),null);
var infos_19368 = cljs.core.nth.call(null,vec__19284_19366,(1),null);
encode_cols.call(null,infos_19368,source_idx_19337,line_19346,col_19367);

var G__19369 = cljs.core.next.call(null,seq__19279_19360__$1);
var G__19370 = null;
var G__19371 = (0);
var G__19372 = (0);
seq__19279_19348 = G__19369;
chunk__19280_19349 = G__19370;
count__19281_19350 = G__19371;
i__19282_19351 = G__19372;
continue;
}
} else {
}
}
break;
}

var G__19373 = seq__19274_19341;
var G__19374 = chunk__19275_19342;
var G__19375 = count__19276_19343;
var G__19376 = (i__19277_19344 + (1));
seq__19274_19341 = G__19373;
chunk__19275_19342 = G__19374;
count__19276_19343 = G__19375;
i__19277_19344 = G__19376;
continue;
} else {
var temp__4425__auto___19377 = cljs.core.seq.call(null,seq__19274_19341);
if(temp__4425__auto___19377){
var seq__19274_19378__$1 = temp__4425__auto___19377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19274_19378__$1)){
var c__17628__auto___19379 = cljs.core.chunk_first.call(null,seq__19274_19378__$1);
var G__19380 = cljs.core.chunk_rest.call(null,seq__19274_19378__$1);
var G__19381 = c__17628__auto___19379;
var G__19382 = cljs.core.count.call(null,c__17628__auto___19379);
var G__19383 = (0);
seq__19274_19341 = G__19380;
chunk__19275_19342 = G__19381;
count__19276_19343 = G__19382;
i__19277_19344 = G__19383;
continue;
} else {
var vec__19285_19384 = cljs.core.first.call(null,seq__19274_19378__$1);
var line_19385 = cljs.core.nth.call(null,vec__19285_19384,(0),null);
var cols_19386 = cljs.core.nth.call(null,vec__19285_19384,(1),null);
var seq__19286_19387 = cljs.core.seq.call(null,cols_19386);
var chunk__19287_19388 = null;
var count__19288_19389 = (0);
var i__19289_19390 = (0);
while(true){
if((i__19289_19390 < count__19288_19389)){
var vec__19290_19391 = cljs.core._nth.call(null,chunk__19287_19388,i__19289_19390);
var col_19392 = cljs.core.nth.call(null,vec__19290_19391,(0),null);
var infos_19393 = cljs.core.nth.call(null,vec__19290_19391,(1),null);
encode_cols.call(null,infos_19393,source_idx_19337,line_19385,col_19392);

var G__19394 = seq__19286_19387;
var G__19395 = chunk__19287_19388;
var G__19396 = count__19288_19389;
var G__19397 = (i__19289_19390 + (1));
seq__19286_19387 = G__19394;
chunk__19287_19388 = G__19395;
count__19288_19389 = G__19396;
i__19289_19390 = G__19397;
continue;
} else {
var temp__4425__auto___19398__$1 = cljs.core.seq.call(null,seq__19286_19387);
if(temp__4425__auto___19398__$1){
var seq__19286_19399__$1 = temp__4425__auto___19398__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19286_19399__$1)){
var c__17628__auto___19400 = cljs.core.chunk_first.call(null,seq__19286_19399__$1);
var G__19401 = cljs.core.chunk_rest.call(null,seq__19286_19399__$1);
var G__19402 = c__17628__auto___19400;
var G__19403 = cljs.core.count.call(null,c__17628__auto___19400);
var G__19404 = (0);
seq__19286_19387 = G__19401;
chunk__19287_19388 = G__19402;
count__19288_19389 = G__19403;
i__19289_19390 = G__19404;
continue;
} else {
var vec__19291_19405 = cljs.core.first.call(null,seq__19286_19399__$1);
var col_19406 = cljs.core.nth.call(null,vec__19291_19405,(0),null);
var infos_19407 = cljs.core.nth.call(null,vec__19291_19405,(1),null);
encode_cols.call(null,infos_19407,source_idx_19337,line_19385,col_19406);

var G__19408 = cljs.core.next.call(null,seq__19286_19399__$1);
var G__19409 = null;
var G__19410 = (0);
var G__19411 = (0);
seq__19286_19387 = G__19408;
chunk__19287_19388 = G__19409;
count__19288_19389 = G__19410;
i__19289_19390 = G__19411;
continue;
}
} else {
}
}
break;
}

var G__19412 = cljs.core.next.call(null,seq__19274_19378__$1);
var G__19413 = null;
var G__19414 = (0);
var G__19415 = (0);
seq__19274_19341 = G__19412;
chunk__19275_19342 = G__19413;
count__19276_19343 = G__19414;
i__19277_19344 = G__19415;
continue;
}
} else {
}
}
break;
}

var G__19416 = seq__19268_19332;
var G__19417 = chunk__19269_19333;
var G__19418 = count__19270_19334;
var G__19419 = (i__19271_19335 + (1));
seq__19268_19332 = G__19416;
chunk__19269_19333 = G__19417;
count__19270_19334 = G__19418;
i__19271_19335 = G__19419;
continue;
} else {
var temp__4425__auto___19420 = cljs.core.seq.call(null,seq__19268_19332);
if(temp__4425__auto___19420){
var seq__19268_19421__$1 = temp__4425__auto___19420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19268_19421__$1)){
var c__17628__auto___19422 = cljs.core.chunk_first.call(null,seq__19268_19421__$1);
var G__19423 = cljs.core.chunk_rest.call(null,seq__19268_19421__$1);
var G__19424 = c__17628__auto___19422;
var G__19425 = cljs.core.count.call(null,c__17628__auto___19422);
var G__19426 = (0);
seq__19268_19332 = G__19423;
chunk__19269_19333 = G__19424;
count__19270_19334 = G__19425;
i__19271_19335 = G__19426;
continue;
} else {
var vec__19292_19427 = cljs.core.first.call(null,seq__19268_19421__$1);
var source_idx_19428 = cljs.core.nth.call(null,vec__19292_19427,(0),null);
var vec__19293_19429 = cljs.core.nth.call(null,vec__19292_19427,(1),null);
var __19430 = cljs.core.nth.call(null,vec__19293_19429,(0),null);
var lines_19431__$1 = cljs.core.nth.call(null,vec__19293_19429,(1),null);
var seq__19294_19432 = cljs.core.seq.call(null,lines_19431__$1);
var chunk__19295_19433 = null;
var count__19296_19434 = (0);
var i__19297_19435 = (0);
while(true){
if((i__19297_19435 < count__19296_19434)){
var vec__19298_19436 = cljs.core._nth.call(null,chunk__19295_19433,i__19297_19435);
var line_19437 = cljs.core.nth.call(null,vec__19298_19436,(0),null);
var cols_19438 = cljs.core.nth.call(null,vec__19298_19436,(1),null);
var seq__19299_19439 = cljs.core.seq.call(null,cols_19438);
var chunk__19300_19440 = null;
var count__19301_19441 = (0);
var i__19302_19442 = (0);
while(true){
if((i__19302_19442 < count__19301_19441)){
var vec__19303_19443 = cljs.core._nth.call(null,chunk__19300_19440,i__19302_19442);
var col_19444 = cljs.core.nth.call(null,vec__19303_19443,(0),null);
var infos_19445 = cljs.core.nth.call(null,vec__19303_19443,(1),null);
encode_cols.call(null,infos_19445,source_idx_19428,line_19437,col_19444);

var G__19446 = seq__19299_19439;
var G__19447 = chunk__19300_19440;
var G__19448 = count__19301_19441;
var G__19449 = (i__19302_19442 + (1));
seq__19299_19439 = G__19446;
chunk__19300_19440 = G__19447;
count__19301_19441 = G__19448;
i__19302_19442 = G__19449;
continue;
} else {
var temp__4425__auto___19450__$1 = cljs.core.seq.call(null,seq__19299_19439);
if(temp__4425__auto___19450__$1){
var seq__19299_19451__$1 = temp__4425__auto___19450__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19299_19451__$1)){
var c__17628__auto___19452 = cljs.core.chunk_first.call(null,seq__19299_19451__$1);
var G__19453 = cljs.core.chunk_rest.call(null,seq__19299_19451__$1);
var G__19454 = c__17628__auto___19452;
var G__19455 = cljs.core.count.call(null,c__17628__auto___19452);
var G__19456 = (0);
seq__19299_19439 = G__19453;
chunk__19300_19440 = G__19454;
count__19301_19441 = G__19455;
i__19302_19442 = G__19456;
continue;
} else {
var vec__19304_19457 = cljs.core.first.call(null,seq__19299_19451__$1);
var col_19458 = cljs.core.nth.call(null,vec__19304_19457,(0),null);
var infos_19459 = cljs.core.nth.call(null,vec__19304_19457,(1),null);
encode_cols.call(null,infos_19459,source_idx_19428,line_19437,col_19458);

var G__19460 = cljs.core.next.call(null,seq__19299_19451__$1);
var G__19461 = null;
var G__19462 = (0);
var G__19463 = (0);
seq__19299_19439 = G__19460;
chunk__19300_19440 = G__19461;
count__19301_19441 = G__19462;
i__19302_19442 = G__19463;
continue;
}
} else {
}
}
break;
}

var G__19464 = seq__19294_19432;
var G__19465 = chunk__19295_19433;
var G__19466 = count__19296_19434;
var G__19467 = (i__19297_19435 + (1));
seq__19294_19432 = G__19464;
chunk__19295_19433 = G__19465;
count__19296_19434 = G__19466;
i__19297_19435 = G__19467;
continue;
} else {
var temp__4425__auto___19468__$1 = cljs.core.seq.call(null,seq__19294_19432);
if(temp__4425__auto___19468__$1){
var seq__19294_19469__$1 = temp__4425__auto___19468__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19294_19469__$1)){
var c__17628__auto___19470 = cljs.core.chunk_first.call(null,seq__19294_19469__$1);
var G__19471 = cljs.core.chunk_rest.call(null,seq__19294_19469__$1);
var G__19472 = c__17628__auto___19470;
var G__19473 = cljs.core.count.call(null,c__17628__auto___19470);
var G__19474 = (0);
seq__19294_19432 = G__19471;
chunk__19295_19433 = G__19472;
count__19296_19434 = G__19473;
i__19297_19435 = G__19474;
continue;
} else {
var vec__19305_19475 = cljs.core.first.call(null,seq__19294_19469__$1);
var line_19476 = cljs.core.nth.call(null,vec__19305_19475,(0),null);
var cols_19477 = cljs.core.nth.call(null,vec__19305_19475,(1),null);
var seq__19306_19478 = cljs.core.seq.call(null,cols_19477);
var chunk__19307_19479 = null;
var count__19308_19480 = (0);
var i__19309_19481 = (0);
while(true){
if((i__19309_19481 < count__19308_19480)){
var vec__19310_19482 = cljs.core._nth.call(null,chunk__19307_19479,i__19309_19481);
var col_19483 = cljs.core.nth.call(null,vec__19310_19482,(0),null);
var infos_19484 = cljs.core.nth.call(null,vec__19310_19482,(1),null);
encode_cols.call(null,infos_19484,source_idx_19428,line_19476,col_19483);

var G__19485 = seq__19306_19478;
var G__19486 = chunk__19307_19479;
var G__19487 = count__19308_19480;
var G__19488 = (i__19309_19481 + (1));
seq__19306_19478 = G__19485;
chunk__19307_19479 = G__19486;
count__19308_19480 = G__19487;
i__19309_19481 = G__19488;
continue;
} else {
var temp__4425__auto___19489__$2 = cljs.core.seq.call(null,seq__19306_19478);
if(temp__4425__auto___19489__$2){
var seq__19306_19490__$1 = temp__4425__auto___19489__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19306_19490__$1)){
var c__17628__auto___19491 = cljs.core.chunk_first.call(null,seq__19306_19490__$1);
var G__19492 = cljs.core.chunk_rest.call(null,seq__19306_19490__$1);
var G__19493 = c__17628__auto___19491;
var G__19494 = cljs.core.count.call(null,c__17628__auto___19491);
var G__19495 = (0);
seq__19306_19478 = G__19492;
chunk__19307_19479 = G__19493;
count__19308_19480 = G__19494;
i__19309_19481 = G__19495;
continue;
} else {
var vec__19311_19496 = cljs.core.first.call(null,seq__19306_19490__$1);
var col_19497 = cljs.core.nth.call(null,vec__19311_19496,(0),null);
var infos_19498 = cljs.core.nth.call(null,vec__19311_19496,(1),null);
encode_cols.call(null,infos_19498,source_idx_19428,line_19476,col_19497);

var G__19499 = cljs.core.next.call(null,seq__19306_19490__$1);
var G__19500 = null;
var G__19501 = (0);
var G__19502 = (0);
seq__19306_19478 = G__19499;
chunk__19307_19479 = G__19500;
count__19308_19480 = G__19501;
i__19309_19481 = G__19502;
continue;
}
} else {
}
}
break;
}

var G__19503 = cljs.core.next.call(null,seq__19294_19469__$1);
var G__19504 = null;
var G__19505 = (0);
var G__19506 = (0);
seq__19294_19432 = G__19503;
chunk__19295_19433 = G__19504;
count__19296_19434 = G__19505;
i__19297_19435 = G__19506;
continue;
}
} else {
}
}
break;
}

var G__19507 = cljs.core.next.call(null,seq__19268_19421__$1);
var G__19508 = null;
var G__19509 = (0);
var G__19510 = (0);
seq__19268_19332 = G__19507;
chunk__19269_19333 = G__19508;
count__19270_19334 = G__19509;
i__19271_19335 = G__19510;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__19312 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19211_SHARP_){
return [cljs.core.str(p1__19211_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19212_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__19212_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19213_SHARP_){
return clojure.string.join.call(null,",",p1__19213_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__19312__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__19313 = G__19312;
goog.object.set(G__19313,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__19313;
})():G__19312);
return G__19312__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__19516 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__19516,(0),null);
var col_map = cljs.core.nth.call(null,vec__19516,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__19517 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__19517,(0),null);
var infos = cljs.core.nth.call(null,vec__19517,(1),null);
var G__19521 = cljs.core.next.call(null,col_map_seq);
var G__19522 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__19517,col,infos,vec__19516,line,col_map){
return (function (v,p__19518){
var map__19519 = p__19518;
var map__19519__$1 = ((((!((map__19519 == null)))?((((map__19519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19519):map__19519);
var gline = cljs.core.get.call(null,map__19519__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__19519__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__19517,col,infos,vec__19516,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__19521;
new_cols = G__19522;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__19523 = cljs.core.next.call(null,line_map_seq);
var G__19524 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__19523;
new_lines = G__19524;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__19575_19625 = cljs.core.seq.call(null,reverse_map);
var chunk__19576_19626 = null;
var count__19577_19627 = (0);
var i__19578_19628 = (0);
while(true){
if((i__19578_19628 < count__19577_19627)){
var vec__19579_19629 = cljs.core._nth.call(null,chunk__19576_19626,i__19578_19628);
var line_19630 = cljs.core.nth.call(null,vec__19579_19629,(0),null);
var columns_19631 = cljs.core.nth.call(null,vec__19579_19629,(1),null);
var seq__19580_19632 = cljs.core.seq.call(null,columns_19631);
var chunk__19581_19633 = null;
var count__19582_19634 = (0);
var i__19583_19635 = (0);
while(true){
if((i__19583_19635 < count__19582_19634)){
var vec__19584_19636 = cljs.core._nth.call(null,chunk__19581_19633,i__19583_19635);
var column_19637 = cljs.core.nth.call(null,vec__19584_19636,(0),null);
var column_info_19638 = cljs.core.nth.call(null,vec__19584_19636,(1),null);
var seq__19585_19639 = cljs.core.seq.call(null,column_info_19638);
var chunk__19586_19640 = null;
var count__19587_19641 = (0);
var i__19588_19642 = (0);
while(true){
if((i__19588_19642 < count__19587_19641)){
var map__19589_19643 = cljs.core._nth.call(null,chunk__19586_19640,i__19588_19642);
var map__19589_19644__$1 = ((((!((map__19589_19643 == null)))?((((map__19589_19643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19589_19643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19589_19643):map__19589_19643);
var gline_19645 = cljs.core.get.call(null,map__19589_19644__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19646 = cljs.core.get.call(null,map__19589_19644__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19647 = cljs.core.get.call(null,map__19589_19644__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19645], null),cljs.core.fnil.call(null,((function (seq__19585_19639,chunk__19586_19640,count__19587_19641,i__19588_19642,seq__19580_19632,chunk__19581_19633,count__19582_19634,i__19583_19635,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19589_19643,map__19589_19644__$1,gline_19645,gcol_19646,name_19647,vec__19584_19636,column_19637,column_info_19638,vec__19579_19629,line_19630,columns_19631,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19637], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19630,new cljs.core.Keyword(null,"col","col",-1959363084),column_19637,new cljs.core.Keyword(null,"name","name",1843675177),name_19647], null));
});})(seq__19585_19639,chunk__19586_19640,count__19587_19641,i__19588_19642,seq__19580_19632,chunk__19581_19633,count__19582_19634,i__19583_19635,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19589_19643,map__19589_19644__$1,gline_19645,gcol_19646,name_19647,vec__19584_19636,column_19637,column_info_19638,vec__19579_19629,line_19630,columns_19631,inverted))
,cljs.core.sorted_map.call(null)));

var G__19648 = seq__19585_19639;
var G__19649 = chunk__19586_19640;
var G__19650 = count__19587_19641;
var G__19651 = (i__19588_19642 + (1));
seq__19585_19639 = G__19648;
chunk__19586_19640 = G__19649;
count__19587_19641 = G__19650;
i__19588_19642 = G__19651;
continue;
} else {
var temp__4425__auto___19652 = cljs.core.seq.call(null,seq__19585_19639);
if(temp__4425__auto___19652){
var seq__19585_19653__$1 = temp__4425__auto___19652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19585_19653__$1)){
var c__17628__auto___19654 = cljs.core.chunk_first.call(null,seq__19585_19653__$1);
var G__19655 = cljs.core.chunk_rest.call(null,seq__19585_19653__$1);
var G__19656 = c__17628__auto___19654;
var G__19657 = cljs.core.count.call(null,c__17628__auto___19654);
var G__19658 = (0);
seq__19585_19639 = G__19655;
chunk__19586_19640 = G__19656;
count__19587_19641 = G__19657;
i__19588_19642 = G__19658;
continue;
} else {
var map__19591_19659 = cljs.core.first.call(null,seq__19585_19653__$1);
var map__19591_19660__$1 = ((((!((map__19591_19659 == null)))?((((map__19591_19659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19591_19659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19591_19659):map__19591_19659);
var gline_19661 = cljs.core.get.call(null,map__19591_19660__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19662 = cljs.core.get.call(null,map__19591_19660__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19663 = cljs.core.get.call(null,map__19591_19660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19661], null),cljs.core.fnil.call(null,((function (seq__19585_19639,chunk__19586_19640,count__19587_19641,i__19588_19642,seq__19580_19632,chunk__19581_19633,count__19582_19634,i__19583_19635,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19591_19659,map__19591_19660__$1,gline_19661,gcol_19662,name_19663,seq__19585_19653__$1,temp__4425__auto___19652,vec__19584_19636,column_19637,column_info_19638,vec__19579_19629,line_19630,columns_19631,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19637], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19630,new cljs.core.Keyword(null,"col","col",-1959363084),column_19637,new cljs.core.Keyword(null,"name","name",1843675177),name_19663], null));
});})(seq__19585_19639,chunk__19586_19640,count__19587_19641,i__19588_19642,seq__19580_19632,chunk__19581_19633,count__19582_19634,i__19583_19635,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19591_19659,map__19591_19660__$1,gline_19661,gcol_19662,name_19663,seq__19585_19653__$1,temp__4425__auto___19652,vec__19584_19636,column_19637,column_info_19638,vec__19579_19629,line_19630,columns_19631,inverted))
,cljs.core.sorted_map.call(null)));

var G__19664 = cljs.core.next.call(null,seq__19585_19653__$1);
var G__19665 = null;
var G__19666 = (0);
var G__19667 = (0);
seq__19585_19639 = G__19664;
chunk__19586_19640 = G__19665;
count__19587_19641 = G__19666;
i__19588_19642 = G__19667;
continue;
}
} else {
}
}
break;
}

var G__19668 = seq__19580_19632;
var G__19669 = chunk__19581_19633;
var G__19670 = count__19582_19634;
var G__19671 = (i__19583_19635 + (1));
seq__19580_19632 = G__19668;
chunk__19581_19633 = G__19669;
count__19582_19634 = G__19670;
i__19583_19635 = G__19671;
continue;
} else {
var temp__4425__auto___19672 = cljs.core.seq.call(null,seq__19580_19632);
if(temp__4425__auto___19672){
var seq__19580_19673__$1 = temp__4425__auto___19672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19580_19673__$1)){
var c__17628__auto___19674 = cljs.core.chunk_first.call(null,seq__19580_19673__$1);
var G__19675 = cljs.core.chunk_rest.call(null,seq__19580_19673__$1);
var G__19676 = c__17628__auto___19674;
var G__19677 = cljs.core.count.call(null,c__17628__auto___19674);
var G__19678 = (0);
seq__19580_19632 = G__19675;
chunk__19581_19633 = G__19676;
count__19582_19634 = G__19677;
i__19583_19635 = G__19678;
continue;
} else {
var vec__19593_19679 = cljs.core.first.call(null,seq__19580_19673__$1);
var column_19680 = cljs.core.nth.call(null,vec__19593_19679,(0),null);
var column_info_19681 = cljs.core.nth.call(null,vec__19593_19679,(1),null);
var seq__19594_19682 = cljs.core.seq.call(null,column_info_19681);
var chunk__19595_19683 = null;
var count__19596_19684 = (0);
var i__19597_19685 = (0);
while(true){
if((i__19597_19685 < count__19596_19684)){
var map__19598_19686 = cljs.core._nth.call(null,chunk__19595_19683,i__19597_19685);
var map__19598_19687__$1 = ((((!((map__19598_19686 == null)))?((((map__19598_19686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19598_19686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19598_19686):map__19598_19686);
var gline_19688 = cljs.core.get.call(null,map__19598_19687__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19689 = cljs.core.get.call(null,map__19598_19687__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19690 = cljs.core.get.call(null,map__19598_19687__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19688], null),cljs.core.fnil.call(null,((function (seq__19594_19682,chunk__19595_19683,count__19596_19684,i__19597_19685,seq__19580_19632,chunk__19581_19633,count__19582_19634,i__19583_19635,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19598_19686,map__19598_19687__$1,gline_19688,gcol_19689,name_19690,vec__19593_19679,column_19680,column_info_19681,seq__19580_19673__$1,temp__4425__auto___19672,vec__19579_19629,line_19630,columns_19631,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19680], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19630,new cljs.core.Keyword(null,"col","col",-1959363084),column_19680,new cljs.core.Keyword(null,"name","name",1843675177),name_19690], null));
});})(seq__19594_19682,chunk__19595_19683,count__19596_19684,i__19597_19685,seq__19580_19632,chunk__19581_19633,count__19582_19634,i__19583_19635,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19598_19686,map__19598_19687__$1,gline_19688,gcol_19689,name_19690,vec__19593_19679,column_19680,column_info_19681,seq__19580_19673__$1,temp__4425__auto___19672,vec__19579_19629,line_19630,columns_19631,inverted))
,cljs.core.sorted_map.call(null)));

var G__19691 = seq__19594_19682;
var G__19692 = chunk__19595_19683;
var G__19693 = count__19596_19684;
var G__19694 = (i__19597_19685 + (1));
seq__19594_19682 = G__19691;
chunk__19595_19683 = G__19692;
count__19596_19684 = G__19693;
i__19597_19685 = G__19694;
continue;
} else {
var temp__4425__auto___19695__$1 = cljs.core.seq.call(null,seq__19594_19682);
if(temp__4425__auto___19695__$1){
var seq__19594_19696__$1 = temp__4425__auto___19695__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19594_19696__$1)){
var c__17628__auto___19697 = cljs.core.chunk_first.call(null,seq__19594_19696__$1);
var G__19698 = cljs.core.chunk_rest.call(null,seq__19594_19696__$1);
var G__19699 = c__17628__auto___19697;
var G__19700 = cljs.core.count.call(null,c__17628__auto___19697);
var G__19701 = (0);
seq__19594_19682 = G__19698;
chunk__19595_19683 = G__19699;
count__19596_19684 = G__19700;
i__19597_19685 = G__19701;
continue;
} else {
var map__19600_19702 = cljs.core.first.call(null,seq__19594_19696__$1);
var map__19600_19703__$1 = ((((!((map__19600_19702 == null)))?((((map__19600_19702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19600_19702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19600_19702):map__19600_19702);
var gline_19704 = cljs.core.get.call(null,map__19600_19703__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19705 = cljs.core.get.call(null,map__19600_19703__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19706 = cljs.core.get.call(null,map__19600_19703__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19704], null),cljs.core.fnil.call(null,((function (seq__19594_19682,chunk__19595_19683,count__19596_19684,i__19597_19685,seq__19580_19632,chunk__19581_19633,count__19582_19634,i__19583_19635,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19600_19702,map__19600_19703__$1,gline_19704,gcol_19705,name_19706,seq__19594_19696__$1,temp__4425__auto___19695__$1,vec__19593_19679,column_19680,column_info_19681,seq__19580_19673__$1,temp__4425__auto___19672,vec__19579_19629,line_19630,columns_19631,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19680], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19630,new cljs.core.Keyword(null,"col","col",-1959363084),column_19680,new cljs.core.Keyword(null,"name","name",1843675177),name_19706], null));
});})(seq__19594_19682,chunk__19595_19683,count__19596_19684,i__19597_19685,seq__19580_19632,chunk__19581_19633,count__19582_19634,i__19583_19635,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19600_19702,map__19600_19703__$1,gline_19704,gcol_19705,name_19706,seq__19594_19696__$1,temp__4425__auto___19695__$1,vec__19593_19679,column_19680,column_info_19681,seq__19580_19673__$1,temp__4425__auto___19672,vec__19579_19629,line_19630,columns_19631,inverted))
,cljs.core.sorted_map.call(null)));

var G__19707 = cljs.core.next.call(null,seq__19594_19696__$1);
var G__19708 = null;
var G__19709 = (0);
var G__19710 = (0);
seq__19594_19682 = G__19707;
chunk__19595_19683 = G__19708;
count__19596_19684 = G__19709;
i__19597_19685 = G__19710;
continue;
}
} else {
}
}
break;
}

var G__19711 = cljs.core.next.call(null,seq__19580_19673__$1);
var G__19712 = null;
var G__19713 = (0);
var G__19714 = (0);
seq__19580_19632 = G__19711;
chunk__19581_19633 = G__19712;
count__19582_19634 = G__19713;
i__19583_19635 = G__19714;
continue;
}
} else {
}
}
break;
}

var G__19715 = seq__19575_19625;
var G__19716 = chunk__19576_19626;
var G__19717 = count__19577_19627;
var G__19718 = (i__19578_19628 + (1));
seq__19575_19625 = G__19715;
chunk__19576_19626 = G__19716;
count__19577_19627 = G__19717;
i__19578_19628 = G__19718;
continue;
} else {
var temp__4425__auto___19719 = cljs.core.seq.call(null,seq__19575_19625);
if(temp__4425__auto___19719){
var seq__19575_19720__$1 = temp__4425__auto___19719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19575_19720__$1)){
var c__17628__auto___19721 = cljs.core.chunk_first.call(null,seq__19575_19720__$1);
var G__19722 = cljs.core.chunk_rest.call(null,seq__19575_19720__$1);
var G__19723 = c__17628__auto___19721;
var G__19724 = cljs.core.count.call(null,c__17628__auto___19721);
var G__19725 = (0);
seq__19575_19625 = G__19722;
chunk__19576_19626 = G__19723;
count__19577_19627 = G__19724;
i__19578_19628 = G__19725;
continue;
} else {
var vec__19602_19726 = cljs.core.first.call(null,seq__19575_19720__$1);
var line_19727 = cljs.core.nth.call(null,vec__19602_19726,(0),null);
var columns_19728 = cljs.core.nth.call(null,vec__19602_19726,(1),null);
var seq__19603_19729 = cljs.core.seq.call(null,columns_19728);
var chunk__19604_19730 = null;
var count__19605_19731 = (0);
var i__19606_19732 = (0);
while(true){
if((i__19606_19732 < count__19605_19731)){
var vec__19607_19733 = cljs.core._nth.call(null,chunk__19604_19730,i__19606_19732);
var column_19734 = cljs.core.nth.call(null,vec__19607_19733,(0),null);
var column_info_19735 = cljs.core.nth.call(null,vec__19607_19733,(1),null);
var seq__19608_19736 = cljs.core.seq.call(null,column_info_19735);
var chunk__19609_19737 = null;
var count__19610_19738 = (0);
var i__19611_19739 = (0);
while(true){
if((i__19611_19739 < count__19610_19738)){
var map__19612_19740 = cljs.core._nth.call(null,chunk__19609_19737,i__19611_19739);
var map__19612_19741__$1 = ((((!((map__19612_19740 == null)))?((((map__19612_19740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19612_19740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19612_19740):map__19612_19740);
var gline_19742 = cljs.core.get.call(null,map__19612_19741__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19743 = cljs.core.get.call(null,map__19612_19741__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19744 = cljs.core.get.call(null,map__19612_19741__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19742], null),cljs.core.fnil.call(null,((function (seq__19608_19736,chunk__19609_19737,count__19610_19738,i__19611_19739,seq__19603_19729,chunk__19604_19730,count__19605_19731,i__19606_19732,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19612_19740,map__19612_19741__$1,gline_19742,gcol_19743,name_19744,vec__19607_19733,column_19734,column_info_19735,vec__19602_19726,line_19727,columns_19728,seq__19575_19720__$1,temp__4425__auto___19719,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19734], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19727,new cljs.core.Keyword(null,"col","col",-1959363084),column_19734,new cljs.core.Keyword(null,"name","name",1843675177),name_19744], null));
});})(seq__19608_19736,chunk__19609_19737,count__19610_19738,i__19611_19739,seq__19603_19729,chunk__19604_19730,count__19605_19731,i__19606_19732,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19612_19740,map__19612_19741__$1,gline_19742,gcol_19743,name_19744,vec__19607_19733,column_19734,column_info_19735,vec__19602_19726,line_19727,columns_19728,seq__19575_19720__$1,temp__4425__auto___19719,inverted))
,cljs.core.sorted_map.call(null)));

var G__19745 = seq__19608_19736;
var G__19746 = chunk__19609_19737;
var G__19747 = count__19610_19738;
var G__19748 = (i__19611_19739 + (1));
seq__19608_19736 = G__19745;
chunk__19609_19737 = G__19746;
count__19610_19738 = G__19747;
i__19611_19739 = G__19748;
continue;
} else {
var temp__4425__auto___19749__$1 = cljs.core.seq.call(null,seq__19608_19736);
if(temp__4425__auto___19749__$1){
var seq__19608_19750__$1 = temp__4425__auto___19749__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19608_19750__$1)){
var c__17628__auto___19751 = cljs.core.chunk_first.call(null,seq__19608_19750__$1);
var G__19752 = cljs.core.chunk_rest.call(null,seq__19608_19750__$1);
var G__19753 = c__17628__auto___19751;
var G__19754 = cljs.core.count.call(null,c__17628__auto___19751);
var G__19755 = (0);
seq__19608_19736 = G__19752;
chunk__19609_19737 = G__19753;
count__19610_19738 = G__19754;
i__19611_19739 = G__19755;
continue;
} else {
var map__19614_19756 = cljs.core.first.call(null,seq__19608_19750__$1);
var map__19614_19757__$1 = ((((!((map__19614_19756 == null)))?((((map__19614_19756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19614_19756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19614_19756):map__19614_19756);
var gline_19758 = cljs.core.get.call(null,map__19614_19757__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19759 = cljs.core.get.call(null,map__19614_19757__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19760 = cljs.core.get.call(null,map__19614_19757__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19758], null),cljs.core.fnil.call(null,((function (seq__19608_19736,chunk__19609_19737,count__19610_19738,i__19611_19739,seq__19603_19729,chunk__19604_19730,count__19605_19731,i__19606_19732,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19614_19756,map__19614_19757__$1,gline_19758,gcol_19759,name_19760,seq__19608_19750__$1,temp__4425__auto___19749__$1,vec__19607_19733,column_19734,column_info_19735,vec__19602_19726,line_19727,columns_19728,seq__19575_19720__$1,temp__4425__auto___19719,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19734], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19727,new cljs.core.Keyword(null,"col","col",-1959363084),column_19734,new cljs.core.Keyword(null,"name","name",1843675177),name_19760], null));
});})(seq__19608_19736,chunk__19609_19737,count__19610_19738,i__19611_19739,seq__19603_19729,chunk__19604_19730,count__19605_19731,i__19606_19732,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19614_19756,map__19614_19757__$1,gline_19758,gcol_19759,name_19760,seq__19608_19750__$1,temp__4425__auto___19749__$1,vec__19607_19733,column_19734,column_info_19735,vec__19602_19726,line_19727,columns_19728,seq__19575_19720__$1,temp__4425__auto___19719,inverted))
,cljs.core.sorted_map.call(null)));

var G__19761 = cljs.core.next.call(null,seq__19608_19750__$1);
var G__19762 = null;
var G__19763 = (0);
var G__19764 = (0);
seq__19608_19736 = G__19761;
chunk__19609_19737 = G__19762;
count__19610_19738 = G__19763;
i__19611_19739 = G__19764;
continue;
}
} else {
}
}
break;
}

var G__19765 = seq__19603_19729;
var G__19766 = chunk__19604_19730;
var G__19767 = count__19605_19731;
var G__19768 = (i__19606_19732 + (1));
seq__19603_19729 = G__19765;
chunk__19604_19730 = G__19766;
count__19605_19731 = G__19767;
i__19606_19732 = G__19768;
continue;
} else {
var temp__4425__auto___19769__$1 = cljs.core.seq.call(null,seq__19603_19729);
if(temp__4425__auto___19769__$1){
var seq__19603_19770__$1 = temp__4425__auto___19769__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19603_19770__$1)){
var c__17628__auto___19771 = cljs.core.chunk_first.call(null,seq__19603_19770__$1);
var G__19772 = cljs.core.chunk_rest.call(null,seq__19603_19770__$1);
var G__19773 = c__17628__auto___19771;
var G__19774 = cljs.core.count.call(null,c__17628__auto___19771);
var G__19775 = (0);
seq__19603_19729 = G__19772;
chunk__19604_19730 = G__19773;
count__19605_19731 = G__19774;
i__19606_19732 = G__19775;
continue;
} else {
var vec__19616_19776 = cljs.core.first.call(null,seq__19603_19770__$1);
var column_19777 = cljs.core.nth.call(null,vec__19616_19776,(0),null);
var column_info_19778 = cljs.core.nth.call(null,vec__19616_19776,(1),null);
var seq__19617_19779 = cljs.core.seq.call(null,column_info_19778);
var chunk__19618_19780 = null;
var count__19619_19781 = (0);
var i__19620_19782 = (0);
while(true){
if((i__19620_19782 < count__19619_19781)){
var map__19621_19783 = cljs.core._nth.call(null,chunk__19618_19780,i__19620_19782);
var map__19621_19784__$1 = ((((!((map__19621_19783 == null)))?((((map__19621_19783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19621_19783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19621_19783):map__19621_19783);
var gline_19785 = cljs.core.get.call(null,map__19621_19784__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19786 = cljs.core.get.call(null,map__19621_19784__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19787 = cljs.core.get.call(null,map__19621_19784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19785], null),cljs.core.fnil.call(null,((function (seq__19617_19779,chunk__19618_19780,count__19619_19781,i__19620_19782,seq__19603_19729,chunk__19604_19730,count__19605_19731,i__19606_19732,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19621_19783,map__19621_19784__$1,gline_19785,gcol_19786,name_19787,vec__19616_19776,column_19777,column_info_19778,seq__19603_19770__$1,temp__4425__auto___19769__$1,vec__19602_19726,line_19727,columns_19728,seq__19575_19720__$1,temp__4425__auto___19719,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19777], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19727,new cljs.core.Keyword(null,"col","col",-1959363084),column_19777,new cljs.core.Keyword(null,"name","name",1843675177),name_19787], null));
});})(seq__19617_19779,chunk__19618_19780,count__19619_19781,i__19620_19782,seq__19603_19729,chunk__19604_19730,count__19605_19731,i__19606_19732,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19621_19783,map__19621_19784__$1,gline_19785,gcol_19786,name_19787,vec__19616_19776,column_19777,column_info_19778,seq__19603_19770__$1,temp__4425__auto___19769__$1,vec__19602_19726,line_19727,columns_19728,seq__19575_19720__$1,temp__4425__auto___19719,inverted))
,cljs.core.sorted_map.call(null)));

var G__19788 = seq__19617_19779;
var G__19789 = chunk__19618_19780;
var G__19790 = count__19619_19781;
var G__19791 = (i__19620_19782 + (1));
seq__19617_19779 = G__19788;
chunk__19618_19780 = G__19789;
count__19619_19781 = G__19790;
i__19620_19782 = G__19791;
continue;
} else {
var temp__4425__auto___19792__$2 = cljs.core.seq.call(null,seq__19617_19779);
if(temp__4425__auto___19792__$2){
var seq__19617_19793__$1 = temp__4425__auto___19792__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19617_19793__$1)){
var c__17628__auto___19794 = cljs.core.chunk_first.call(null,seq__19617_19793__$1);
var G__19795 = cljs.core.chunk_rest.call(null,seq__19617_19793__$1);
var G__19796 = c__17628__auto___19794;
var G__19797 = cljs.core.count.call(null,c__17628__auto___19794);
var G__19798 = (0);
seq__19617_19779 = G__19795;
chunk__19618_19780 = G__19796;
count__19619_19781 = G__19797;
i__19620_19782 = G__19798;
continue;
} else {
var map__19623_19799 = cljs.core.first.call(null,seq__19617_19793__$1);
var map__19623_19800__$1 = ((((!((map__19623_19799 == null)))?((((map__19623_19799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19623_19799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19623_19799):map__19623_19799);
var gline_19801 = cljs.core.get.call(null,map__19623_19800__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19802 = cljs.core.get.call(null,map__19623_19800__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19803 = cljs.core.get.call(null,map__19623_19800__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19801], null),cljs.core.fnil.call(null,((function (seq__19617_19779,chunk__19618_19780,count__19619_19781,i__19620_19782,seq__19603_19729,chunk__19604_19730,count__19605_19731,i__19606_19732,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19623_19799,map__19623_19800__$1,gline_19801,gcol_19802,name_19803,seq__19617_19793__$1,temp__4425__auto___19792__$2,vec__19616_19776,column_19777,column_info_19778,seq__19603_19770__$1,temp__4425__auto___19769__$1,vec__19602_19726,line_19727,columns_19728,seq__19575_19720__$1,temp__4425__auto___19719,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19777], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19727,new cljs.core.Keyword(null,"col","col",-1959363084),column_19777,new cljs.core.Keyword(null,"name","name",1843675177),name_19803], null));
});})(seq__19617_19779,chunk__19618_19780,count__19619_19781,i__19620_19782,seq__19603_19729,chunk__19604_19730,count__19605_19731,i__19606_19732,seq__19575_19625,chunk__19576_19626,count__19577_19627,i__19578_19628,map__19623_19799,map__19623_19800__$1,gline_19801,gcol_19802,name_19803,seq__19617_19793__$1,temp__4425__auto___19792__$2,vec__19616_19776,column_19777,column_info_19778,seq__19603_19770__$1,temp__4425__auto___19769__$1,vec__19602_19726,line_19727,columns_19728,seq__19575_19720__$1,temp__4425__auto___19719,inverted))
,cljs.core.sorted_map.call(null)));

var G__19804 = cljs.core.next.call(null,seq__19617_19793__$1);
var G__19805 = null;
var G__19806 = (0);
var G__19807 = (0);
seq__19617_19779 = G__19804;
chunk__19618_19780 = G__19805;
count__19619_19781 = G__19806;
i__19620_19782 = G__19807;
continue;
}
} else {
}
}
break;
}

var G__19808 = cljs.core.next.call(null,seq__19603_19770__$1);
var G__19809 = null;
var G__19810 = (0);
var G__19811 = (0);
seq__19603_19729 = G__19808;
chunk__19604_19730 = G__19809;
count__19605_19731 = G__19810;
i__19606_19732 = G__19811;
continue;
}
} else {
}
}
break;
}

var G__19812 = cljs.core.next.call(null,seq__19575_19720__$1);
var G__19813 = null;
var G__19814 = (0);
var G__19815 = (0);
seq__19575_19625 = G__19812;
chunk__19576_19626 = G__19813;
count__19577_19627 = G__19814;
i__19578_19628 = G__19815;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
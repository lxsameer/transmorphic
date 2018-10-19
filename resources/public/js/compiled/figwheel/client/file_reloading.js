// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16825__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16825__auto__){
return or__16825__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16825__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34768_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34768_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34773 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34774 = null;
var count__34775 = (0);
var i__34776 = (0);
while(true){
if((i__34776 < count__34775)){
var n = cljs.core._nth.call(null,chunk__34774,i__34776);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34777 = seq__34773;
var G__34778 = chunk__34774;
var G__34779 = count__34775;
var G__34780 = (i__34776 + (1));
seq__34773 = G__34777;
chunk__34774 = G__34778;
count__34775 = G__34779;
i__34776 = G__34780;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34773);
if(temp__4425__auto__){
var seq__34773__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34773__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__34773__$1);
var G__34781 = cljs.core.chunk_rest.call(null,seq__34773__$1);
var G__34782 = c__17628__auto__;
var G__34783 = cljs.core.count.call(null,c__17628__auto__);
var G__34784 = (0);
seq__34773 = G__34781;
chunk__34774 = G__34782;
count__34775 = G__34783;
i__34776 = G__34784;
continue;
} else {
var n = cljs.core.first.call(null,seq__34773__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34785 = cljs.core.next.call(null,seq__34773__$1);
var G__34786 = null;
var G__34787 = (0);
var G__34788 = (0);
seq__34773 = G__34785;
chunk__34774 = G__34786;
count__34775 = G__34787;
i__34776 = G__34788;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34827_34834 = cljs.core.seq.call(null,deps);
var chunk__34828_34835 = null;
var count__34829_34836 = (0);
var i__34830_34837 = (0);
while(true){
if((i__34830_34837 < count__34829_34836)){
var dep_34838 = cljs.core._nth.call(null,chunk__34828_34835,i__34830_34837);
topo_sort_helper_STAR_.call(null,dep_34838,(depth + (1)),state);

var G__34839 = seq__34827_34834;
var G__34840 = chunk__34828_34835;
var G__34841 = count__34829_34836;
var G__34842 = (i__34830_34837 + (1));
seq__34827_34834 = G__34839;
chunk__34828_34835 = G__34840;
count__34829_34836 = G__34841;
i__34830_34837 = G__34842;
continue;
} else {
var temp__4425__auto___34843 = cljs.core.seq.call(null,seq__34827_34834);
if(temp__4425__auto___34843){
var seq__34827_34844__$1 = temp__4425__auto___34843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34827_34844__$1)){
var c__17628__auto___34845 = cljs.core.chunk_first.call(null,seq__34827_34844__$1);
var G__34846 = cljs.core.chunk_rest.call(null,seq__34827_34844__$1);
var G__34847 = c__17628__auto___34845;
var G__34848 = cljs.core.count.call(null,c__17628__auto___34845);
var G__34849 = (0);
seq__34827_34834 = G__34846;
chunk__34828_34835 = G__34847;
count__34829_34836 = G__34848;
i__34830_34837 = G__34849;
continue;
} else {
var dep_34850 = cljs.core.first.call(null,seq__34827_34844__$1);
topo_sort_helper_STAR_.call(null,dep_34850,(depth + (1)),state);

var G__34851 = cljs.core.next.call(null,seq__34827_34844__$1);
var G__34852 = null;
var G__34853 = (0);
var G__34854 = (0);
seq__34827_34834 = G__34851;
chunk__34828_34835 = G__34852;
count__34829_34836 = G__34853;
i__34830_34837 = G__34854;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34831){
var vec__34833 = p__34831;
var x = cljs.core.nth.call(null,vec__34833,(0),null);
var xs = cljs.core.nthnext.call(null,vec__34833,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34833,x,xs,get_deps__$1){
return (function (p1__34789_SHARP_){
return clojure.set.difference.call(null,p1__34789_SHARP_,x);
});})(vec__34833,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34867 = cljs.core.seq.call(null,provides);
var chunk__34868 = null;
var count__34869 = (0);
var i__34870 = (0);
while(true){
if((i__34870 < count__34869)){
var prov = cljs.core._nth.call(null,chunk__34868,i__34870);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34871_34879 = cljs.core.seq.call(null,requires);
var chunk__34872_34880 = null;
var count__34873_34881 = (0);
var i__34874_34882 = (0);
while(true){
if((i__34874_34882 < count__34873_34881)){
var req_34883 = cljs.core._nth.call(null,chunk__34872_34880,i__34874_34882);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34883,prov);

var G__34884 = seq__34871_34879;
var G__34885 = chunk__34872_34880;
var G__34886 = count__34873_34881;
var G__34887 = (i__34874_34882 + (1));
seq__34871_34879 = G__34884;
chunk__34872_34880 = G__34885;
count__34873_34881 = G__34886;
i__34874_34882 = G__34887;
continue;
} else {
var temp__4425__auto___34888 = cljs.core.seq.call(null,seq__34871_34879);
if(temp__4425__auto___34888){
var seq__34871_34889__$1 = temp__4425__auto___34888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34871_34889__$1)){
var c__17628__auto___34890 = cljs.core.chunk_first.call(null,seq__34871_34889__$1);
var G__34891 = cljs.core.chunk_rest.call(null,seq__34871_34889__$1);
var G__34892 = c__17628__auto___34890;
var G__34893 = cljs.core.count.call(null,c__17628__auto___34890);
var G__34894 = (0);
seq__34871_34879 = G__34891;
chunk__34872_34880 = G__34892;
count__34873_34881 = G__34893;
i__34874_34882 = G__34894;
continue;
} else {
var req_34895 = cljs.core.first.call(null,seq__34871_34889__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34895,prov);

var G__34896 = cljs.core.next.call(null,seq__34871_34889__$1);
var G__34897 = null;
var G__34898 = (0);
var G__34899 = (0);
seq__34871_34879 = G__34896;
chunk__34872_34880 = G__34897;
count__34873_34881 = G__34898;
i__34874_34882 = G__34899;
continue;
}
} else {
}
}
break;
}

var G__34900 = seq__34867;
var G__34901 = chunk__34868;
var G__34902 = count__34869;
var G__34903 = (i__34870 + (1));
seq__34867 = G__34900;
chunk__34868 = G__34901;
count__34869 = G__34902;
i__34870 = G__34903;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34867);
if(temp__4425__auto__){
var seq__34867__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34867__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__34867__$1);
var G__34904 = cljs.core.chunk_rest.call(null,seq__34867__$1);
var G__34905 = c__17628__auto__;
var G__34906 = cljs.core.count.call(null,c__17628__auto__);
var G__34907 = (0);
seq__34867 = G__34904;
chunk__34868 = G__34905;
count__34869 = G__34906;
i__34870 = G__34907;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34867__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34875_34908 = cljs.core.seq.call(null,requires);
var chunk__34876_34909 = null;
var count__34877_34910 = (0);
var i__34878_34911 = (0);
while(true){
if((i__34878_34911 < count__34877_34910)){
var req_34912 = cljs.core._nth.call(null,chunk__34876_34909,i__34878_34911);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34912,prov);

var G__34913 = seq__34875_34908;
var G__34914 = chunk__34876_34909;
var G__34915 = count__34877_34910;
var G__34916 = (i__34878_34911 + (1));
seq__34875_34908 = G__34913;
chunk__34876_34909 = G__34914;
count__34877_34910 = G__34915;
i__34878_34911 = G__34916;
continue;
} else {
var temp__4425__auto___34917__$1 = cljs.core.seq.call(null,seq__34875_34908);
if(temp__4425__auto___34917__$1){
var seq__34875_34918__$1 = temp__4425__auto___34917__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34875_34918__$1)){
var c__17628__auto___34919 = cljs.core.chunk_first.call(null,seq__34875_34918__$1);
var G__34920 = cljs.core.chunk_rest.call(null,seq__34875_34918__$1);
var G__34921 = c__17628__auto___34919;
var G__34922 = cljs.core.count.call(null,c__17628__auto___34919);
var G__34923 = (0);
seq__34875_34908 = G__34920;
chunk__34876_34909 = G__34921;
count__34877_34910 = G__34922;
i__34878_34911 = G__34923;
continue;
} else {
var req_34924 = cljs.core.first.call(null,seq__34875_34918__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34924,prov);

var G__34925 = cljs.core.next.call(null,seq__34875_34918__$1);
var G__34926 = null;
var G__34927 = (0);
var G__34928 = (0);
seq__34875_34908 = G__34925;
chunk__34876_34909 = G__34926;
count__34877_34910 = G__34927;
i__34878_34911 = G__34928;
continue;
}
} else {
}
}
break;
}

var G__34929 = cljs.core.next.call(null,seq__34867__$1);
var G__34930 = null;
var G__34931 = (0);
var G__34932 = (0);
seq__34867 = G__34929;
chunk__34868 = G__34930;
count__34869 = G__34931;
i__34870 = G__34932;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34937_34941 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34938_34942 = null;
var count__34939_34943 = (0);
var i__34940_34944 = (0);
while(true){
if((i__34940_34944 < count__34939_34943)){
var ns_34945 = cljs.core._nth.call(null,chunk__34938_34942,i__34940_34944);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34945);

var G__34946 = seq__34937_34941;
var G__34947 = chunk__34938_34942;
var G__34948 = count__34939_34943;
var G__34949 = (i__34940_34944 + (1));
seq__34937_34941 = G__34946;
chunk__34938_34942 = G__34947;
count__34939_34943 = G__34948;
i__34940_34944 = G__34949;
continue;
} else {
var temp__4425__auto___34950 = cljs.core.seq.call(null,seq__34937_34941);
if(temp__4425__auto___34950){
var seq__34937_34951__$1 = temp__4425__auto___34950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34937_34951__$1)){
var c__17628__auto___34952 = cljs.core.chunk_first.call(null,seq__34937_34951__$1);
var G__34953 = cljs.core.chunk_rest.call(null,seq__34937_34951__$1);
var G__34954 = c__17628__auto___34952;
var G__34955 = cljs.core.count.call(null,c__17628__auto___34952);
var G__34956 = (0);
seq__34937_34941 = G__34953;
chunk__34938_34942 = G__34954;
count__34939_34943 = G__34955;
i__34940_34944 = G__34956;
continue;
} else {
var ns_34957 = cljs.core.first.call(null,seq__34937_34951__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34957);

var G__34958 = cljs.core.next.call(null,seq__34937_34951__$1);
var G__34959 = null;
var G__34960 = (0);
var G__34961 = (0);
seq__34937_34941 = G__34958;
chunk__34938_34942 = G__34959;
count__34939_34943 = G__34960;
i__34940_34944 = G__34961;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16825__auto__ = goog.require__;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34962__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34963__i = 0, G__34963__a = new Array(arguments.length -  0);
while (G__34963__i < G__34963__a.length) {G__34963__a[G__34963__i] = arguments[G__34963__i + 0]; ++G__34963__i;}
  args = new cljs.core.IndexedSeq(G__34963__a,0);
} 
return G__34962__delegate.call(this,args);};
G__34962.cljs$lang$maxFixedArity = 0;
G__34962.cljs$lang$applyTo = (function (arglist__34964){
var args = cljs.core.seq(arglist__34964);
return G__34962__delegate(args);
});
G__34962.cljs$core$IFn$_invoke$arity$variadic = G__34962__delegate;
return G__34962;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34966 = cljs.core._EQ_;
var expr__34967 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34966.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34967))){
var path_parts = ((function (pred__34966,expr__34967){
return (function (p1__34965_SHARP_){
return clojure.string.split.call(null,p1__34965_SHARP_,/[\/\\]/);
});})(pred__34966,expr__34967))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34966,expr__34967){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34969){if((e34969 instanceof Error)){
var e = e34969;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34969;

}
}})());
});
;})(path_parts,sep,root,pred__34966,expr__34967))
} else {
if(cljs.core.truth_(pred__34966.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34967))){
return ((function (pred__34966,expr__34967){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__34966,expr__34967){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34966,expr__34967))
);

return deferred.addErrback(((function (deferred,pred__34966,expr__34967){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34966,expr__34967))
);
});
;})(pred__34966,expr__34967))
} else {
return ((function (pred__34966,expr__34967){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34966,expr__34967))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34970,callback){
var map__34973 = p__34970;
var map__34973__$1 = ((((!((map__34973 == null)))?((((map__34973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34973):map__34973);
var file_msg = map__34973__$1;
var request_url = cljs.core.get.call(null,map__34973__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34973,map__34973__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34973,map__34973__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_34997){
var state_val_34998 = (state_34997[(1)]);
if((state_val_34998 === (7))){
var inst_34993 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_34999_35019 = state_34997__$1;
(statearr_34999_35019[(2)] = inst_34993);

(statearr_34999_35019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (1))){
var state_34997__$1 = state_34997;
var statearr_35000_35020 = state_34997__$1;
(statearr_35000_35020[(2)] = null);

(statearr_35000_35020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (4))){
var inst_34977 = (state_34997[(7)]);
var inst_34977__$1 = (state_34997[(2)]);
var state_34997__$1 = (function (){var statearr_35001 = state_34997;
(statearr_35001[(7)] = inst_34977__$1);

return statearr_35001;
})();
if(cljs.core.truth_(inst_34977__$1)){
var statearr_35002_35021 = state_34997__$1;
(statearr_35002_35021[(1)] = (5));

} else {
var statearr_35003_35022 = state_34997__$1;
(statearr_35003_35022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (6))){
var state_34997__$1 = state_34997;
var statearr_35004_35023 = state_34997__$1;
(statearr_35004_35023[(2)] = null);

(statearr_35004_35023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (3))){
var inst_34995 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34997__$1,inst_34995);
} else {
if((state_val_34998 === (2))){
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34997__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34998 === (11))){
var inst_34989 = (state_34997[(2)]);
var state_34997__$1 = (function (){var statearr_35005 = state_34997;
(statearr_35005[(8)] = inst_34989);

return statearr_35005;
})();
var statearr_35006_35024 = state_34997__$1;
(statearr_35006_35024[(2)] = null);

(statearr_35006_35024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (9))){
var inst_34983 = (state_34997[(9)]);
var inst_34981 = (state_34997[(10)]);
var inst_34985 = inst_34983.call(null,inst_34981);
var state_34997__$1 = state_34997;
var statearr_35007_35025 = state_34997__$1;
(statearr_35007_35025[(2)] = inst_34985);

(statearr_35007_35025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (5))){
var inst_34977 = (state_34997[(7)]);
var inst_34979 = figwheel.client.file_reloading.blocking_load.call(null,inst_34977);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34997__$1,(8),inst_34979);
} else {
if((state_val_34998 === (10))){
var inst_34981 = (state_34997[(10)]);
var inst_34987 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34981);
var state_34997__$1 = state_34997;
var statearr_35008_35026 = state_34997__$1;
(statearr_35008_35026[(2)] = inst_34987);

(statearr_35008_35026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (8))){
var inst_34983 = (state_34997[(9)]);
var inst_34977 = (state_34997[(7)]);
var inst_34981 = (state_34997[(2)]);
var inst_34982 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34983__$1 = cljs.core.get.call(null,inst_34982,inst_34977);
var state_34997__$1 = (function (){var statearr_35009 = state_34997;
(statearr_35009[(9)] = inst_34983__$1);

(statearr_35009[(10)] = inst_34981);

return statearr_35009;
})();
if(cljs.core.truth_(inst_34983__$1)){
var statearr_35010_35027 = state_34997__$1;
(statearr_35010_35027[(1)] = (9));

} else {
var statearr_35011_35028 = state_34997__$1;
(statearr_35011_35028[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22193__auto__ = null;
var figwheel$client$file_reloading$state_machine__22193__auto____0 = (function (){
var statearr_35015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35015[(0)] = figwheel$client$file_reloading$state_machine__22193__auto__);

(statearr_35015[(1)] = (1));

return statearr_35015;
});
var figwheel$client$file_reloading$state_machine__22193__auto____1 = (function (state_34997){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_34997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e35016){if((e35016 instanceof Object)){
var ex__22196__auto__ = e35016;
var statearr_35017_35029 = state_34997;
(statearr_35017_35029[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35030 = state_34997;
state_34997 = G__35030;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22193__auto__ = function(state_34997){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22193__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22193__auto____1.call(this,state_34997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22193__auto____0;
figwheel$client$file_reloading$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22193__auto____1;
return figwheel$client$file_reloading$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_35018 = f__22305__auto__.call(null);
(statearr_35018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_35018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35031,callback){
var map__35034 = p__35031;
var map__35034__$1 = ((((!((map__35034 == null)))?((((map__35034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35034):map__35034);
var file_msg = map__35034__$1;
var namespace = cljs.core.get.call(null,map__35034__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35034,map__35034__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35034,map__35034__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35036){
var map__35039 = p__35036;
var map__35039__$1 = ((((!((map__35039 == null)))?((((map__35039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35039):map__35039);
var file_msg = map__35039__$1;
var namespace = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16813__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16813__auto__){
var or__16825__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var or__16825__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16825__auto____$1)){
return or__16825__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16813__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35041,callback){
var map__35044 = p__35041;
var map__35044__$1 = ((((!((map__35044 == null)))?((((map__35044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35044):map__35044);
var file_msg = map__35044__$1;
var request_url = cljs.core.get.call(null,map__35044__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35044__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22304__auto___35132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___35132,out){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___35132,out){
return (function (state_35114){
var state_val_35115 = (state_35114[(1)]);
if((state_val_35115 === (1))){
var inst_35092 = cljs.core.nth.call(null,files,(0),null);
var inst_35093 = cljs.core.nthnext.call(null,files,(1));
var inst_35094 = files;
var state_35114__$1 = (function (){var statearr_35116 = state_35114;
(statearr_35116[(7)] = inst_35093);

(statearr_35116[(8)] = inst_35092);

(statearr_35116[(9)] = inst_35094);

return statearr_35116;
})();
var statearr_35117_35133 = state_35114__$1;
(statearr_35117_35133[(2)] = null);

(statearr_35117_35133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (2))){
var inst_35097 = (state_35114[(10)]);
var inst_35094 = (state_35114[(9)]);
var inst_35097__$1 = cljs.core.nth.call(null,inst_35094,(0),null);
var inst_35098 = cljs.core.nthnext.call(null,inst_35094,(1));
var inst_35099 = (inst_35097__$1 == null);
var inst_35100 = cljs.core.not.call(null,inst_35099);
var state_35114__$1 = (function (){var statearr_35118 = state_35114;
(statearr_35118[(10)] = inst_35097__$1);

(statearr_35118[(11)] = inst_35098);

return statearr_35118;
})();
if(inst_35100){
var statearr_35119_35134 = state_35114__$1;
(statearr_35119_35134[(1)] = (4));

} else {
var statearr_35120_35135 = state_35114__$1;
(statearr_35120_35135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (3))){
var inst_35112 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35114__$1,inst_35112);
} else {
if((state_val_35115 === (4))){
var inst_35097 = (state_35114[(10)]);
var inst_35102 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35097);
var state_35114__$1 = state_35114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35114__$1,(7),inst_35102);
} else {
if((state_val_35115 === (5))){
var inst_35108 = cljs.core.async.close_BANG_.call(null,out);
var state_35114__$1 = state_35114;
var statearr_35121_35136 = state_35114__$1;
(statearr_35121_35136[(2)] = inst_35108);

(statearr_35121_35136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (6))){
var inst_35110 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
var statearr_35122_35137 = state_35114__$1;
(statearr_35122_35137[(2)] = inst_35110);

(statearr_35122_35137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (7))){
var inst_35098 = (state_35114[(11)]);
var inst_35104 = (state_35114[(2)]);
var inst_35105 = cljs.core.async.put_BANG_.call(null,out,inst_35104);
var inst_35094 = inst_35098;
var state_35114__$1 = (function (){var statearr_35123 = state_35114;
(statearr_35123[(9)] = inst_35094);

(statearr_35123[(12)] = inst_35105);

return statearr_35123;
})();
var statearr_35124_35138 = state_35114__$1;
(statearr_35124_35138[(2)] = null);

(statearr_35124_35138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22304__auto___35132,out))
;
return ((function (switch__22192__auto__,c__22304__auto___35132,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto____0 = (function (){
var statearr_35128 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35128[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto__);

(statearr_35128[(1)] = (1));

return statearr_35128;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto____1 = (function (state_35114){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_35114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e35129){if((e35129 instanceof Object)){
var ex__22196__auto__ = e35129;
var statearr_35130_35139 = state_35114;
(statearr_35130_35139[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35140 = state_35114;
state_35114 = G__35140;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto__ = function(state_35114){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto____1.call(this,state_35114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___35132,out))
})();
var state__22306__auto__ = (function (){var statearr_35131 = f__22305__auto__.call(null);
(statearr_35131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___35132);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___35132,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35141,opts){
var map__35145 = p__35141;
var map__35145__$1 = ((((!((map__35145 == null)))?((((map__35145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35145):map__35145);
var eval_body__$1 = cljs.core.get.call(null,map__35145__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35145__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16813__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16813__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16813__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35147){var e = e35147;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35148_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35148_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35153){
var vec__35154 = p__35153;
var k = cljs.core.nth.call(null,vec__35154,(0),null);
var v = cljs.core.nth.call(null,vec__35154,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35155){
var vec__35156 = p__35155;
var k = cljs.core.nth.call(null,vec__35156,(0),null);
var v = cljs.core.nth.call(null,vec__35156,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35160,p__35161){
var map__35408 = p__35160;
var map__35408__$1 = ((((!((map__35408 == null)))?((((map__35408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35408):map__35408);
var opts = map__35408__$1;
var before_jsload = cljs.core.get.call(null,map__35408__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35408__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35408__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35409 = p__35161;
var map__35409__$1 = ((((!((map__35409 == null)))?((((map__35409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35409):map__35409);
var msg = map__35409__$1;
var files = cljs.core.get.call(null,map__35409__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35409__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35409__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35562){
var state_val_35563 = (state_35562[(1)]);
if((state_val_35563 === (7))){
var inst_35423 = (state_35562[(7)]);
var inst_35424 = (state_35562[(8)]);
var inst_35426 = (state_35562[(9)]);
var inst_35425 = (state_35562[(10)]);
var inst_35431 = cljs.core._nth.call(null,inst_35424,inst_35426);
var inst_35432 = figwheel.client.file_reloading.eval_body.call(null,inst_35431,opts);
var inst_35433 = (inst_35426 + (1));
var tmp35564 = inst_35423;
var tmp35565 = inst_35424;
var tmp35566 = inst_35425;
var inst_35423__$1 = tmp35564;
var inst_35424__$1 = tmp35565;
var inst_35425__$1 = tmp35566;
var inst_35426__$1 = inst_35433;
var state_35562__$1 = (function (){var statearr_35567 = state_35562;
(statearr_35567[(7)] = inst_35423__$1);

(statearr_35567[(8)] = inst_35424__$1);

(statearr_35567[(9)] = inst_35426__$1);

(statearr_35567[(11)] = inst_35432);

(statearr_35567[(10)] = inst_35425__$1);

return statearr_35567;
})();
var statearr_35568_35654 = state_35562__$1;
(statearr_35568_35654[(2)] = null);

(statearr_35568_35654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (20))){
var inst_35466 = (state_35562[(12)]);
var inst_35474 = figwheel.client.file_reloading.sort_files.call(null,inst_35466);
var state_35562__$1 = state_35562;
var statearr_35569_35655 = state_35562__$1;
(statearr_35569_35655[(2)] = inst_35474);

(statearr_35569_35655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (27))){
var state_35562__$1 = state_35562;
var statearr_35570_35656 = state_35562__$1;
(statearr_35570_35656[(2)] = null);

(statearr_35570_35656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (1))){
var inst_35415 = (state_35562[(13)]);
var inst_35412 = before_jsload.call(null,files);
var inst_35413 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35414 = (function (){return ((function (inst_35415,inst_35412,inst_35413,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35157_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35157_SHARP_);
});
;})(inst_35415,inst_35412,inst_35413,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35415__$1 = cljs.core.filter.call(null,inst_35414,files);
var inst_35416 = cljs.core.not_empty.call(null,inst_35415__$1);
var state_35562__$1 = (function (){var statearr_35571 = state_35562;
(statearr_35571[(14)] = inst_35413);

(statearr_35571[(13)] = inst_35415__$1);

(statearr_35571[(15)] = inst_35412);

return statearr_35571;
})();
if(cljs.core.truth_(inst_35416)){
var statearr_35572_35657 = state_35562__$1;
(statearr_35572_35657[(1)] = (2));

} else {
var statearr_35573_35658 = state_35562__$1;
(statearr_35573_35658[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (24))){
var state_35562__$1 = state_35562;
var statearr_35574_35659 = state_35562__$1;
(statearr_35574_35659[(2)] = null);

(statearr_35574_35659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (39))){
var inst_35516 = (state_35562[(16)]);
var state_35562__$1 = state_35562;
var statearr_35575_35660 = state_35562__$1;
(statearr_35575_35660[(2)] = inst_35516);

(statearr_35575_35660[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (46))){
var inst_35557 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35576_35661 = state_35562__$1;
(statearr_35576_35661[(2)] = inst_35557);

(statearr_35576_35661[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (4))){
var inst_35460 = (state_35562[(2)]);
var inst_35461 = cljs.core.List.EMPTY;
var inst_35462 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35461);
var inst_35463 = (function (){return ((function (inst_35460,inst_35461,inst_35462,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35158_SHARP_){
var and__16813__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35158_SHARP_);
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35158_SHARP_));
} else {
return and__16813__auto__;
}
});
;})(inst_35460,inst_35461,inst_35462,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35464 = cljs.core.filter.call(null,inst_35463,files);
var inst_35465 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35466 = cljs.core.concat.call(null,inst_35464,inst_35465);
var state_35562__$1 = (function (){var statearr_35577 = state_35562;
(statearr_35577[(17)] = inst_35460);

(statearr_35577[(12)] = inst_35466);

(statearr_35577[(18)] = inst_35462);

return statearr_35577;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35578_35662 = state_35562__$1;
(statearr_35578_35662[(1)] = (16));

} else {
var statearr_35579_35663 = state_35562__$1;
(statearr_35579_35663[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (15))){
var inst_35450 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35580_35664 = state_35562__$1;
(statearr_35580_35664[(2)] = inst_35450);

(statearr_35580_35664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (21))){
var inst_35476 = (state_35562[(19)]);
var inst_35476__$1 = (state_35562[(2)]);
var inst_35477 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35476__$1);
var state_35562__$1 = (function (){var statearr_35581 = state_35562;
(statearr_35581[(19)] = inst_35476__$1);

return statearr_35581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35562__$1,(22),inst_35477);
} else {
if((state_val_35563 === (31))){
var inst_35560 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35562__$1,inst_35560);
} else {
if((state_val_35563 === (32))){
var inst_35516 = (state_35562[(16)]);
var inst_35521 = inst_35516.cljs$lang$protocol_mask$partition0$;
var inst_35522 = (inst_35521 & (64));
var inst_35523 = inst_35516.cljs$core$ISeq$;
var inst_35524 = (inst_35522) || (inst_35523);
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35524)){
var statearr_35582_35665 = state_35562__$1;
(statearr_35582_35665[(1)] = (35));

} else {
var statearr_35583_35666 = state_35562__$1;
(statearr_35583_35666[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (40))){
var inst_35537 = (state_35562[(20)]);
var inst_35536 = (state_35562[(2)]);
var inst_35537__$1 = cljs.core.get.call(null,inst_35536,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35538 = cljs.core.get.call(null,inst_35536,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35539 = cljs.core.not_empty.call(null,inst_35537__$1);
var state_35562__$1 = (function (){var statearr_35584 = state_35562;
(statearr_35584[(21)] = inst_35538);

(statearr_35584[(20)] = inst_35537__$1);

return statearr_35584;
})();
if(cljs.core.truth_(inst_35539)){
var statearr_35585_35667 = state_35562__$1;
(statearr_35585_35667[(1)] = (41));

} else {
var statearr_35586_35668 = state_35562__$1;
(statearr_35586_35668[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (33))){
var state_35562__$1 = state_35562;
var statearr_35587_35669 = state_35562__$1;
(statearr_35587_35669[(2)] = false);

(statearr_35587_35669[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (13))){
var inst_35436 = (state_35562[(22)]);
var inst_35440 = cljs.core.chunk_first.call(null,inst_35436);
var inst_35441 = cljs.core.chunk_rest.call(null,inst_35436);
var inst_35442 = cljs.core.count.call(null,inst_35440);
var inst_35423 = inst_35441;
var inst_35424 = inst_35440;
var inst_35425 = inst_35442;
var inst_35426 = (0);
var state_35562__$1 = (function (){var statearr_35588 = state_35562;
(statearr_35588[(7)] = inst_35423);

(statearr_35588[(8)] = inst_35424);

(statearr_35588[(9)] = inst_35426);

(statearr_35588[(10)] = inst_35425);

return statearr_35588;
})();
var statearr_35589_35670 = state_35562__$1;
(statearr_35589_35670[(2)] = null);

(statearr_35589_35670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (22))){
var inst_35476 = (state_35562[(19)]);
var inst_35480 = (state_35562[(23)]);
var inst_35484 = (state_35562[(24)]);
var inst_35479 = (state_35562[(25)]);
var inst_35479__$1 = (state_35562[(2)]);
var inst_35480__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35479__$1);
var inst_35481 = (function (){var all_files = inst_35476;
var res_SINGLEQUOTE_ = inst_35479__$1;
var res = inst_35480__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35476,inst_35480,inst_35484,inst_35479,inst_35479__$1,inst_35480__$1,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35159_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35159_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35476,inst_35480,inst_35484,inst_35479,inst_35479__$1,inst_35480__$1,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35482 = cljs.core.filter.call(null,inst_35481,inst_35479__$1);
var inst_35483 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35484__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35483);
var inst_35485 = cljs.core.not_empty.call(null,inst_35484__$1);
var state_35562__$1 = (function (){var statearr_35590 = state_35562;
(statearr_35590[(23)] = inst_35480__$1);

(statearr_35590[(24)] = inst_35484__$1);

(statearr_35590[(26)] = inst_35482);

(statearr_35590[(25)] = inst_35479__$1);

return statearr_35590;
})();
if(cljs.core.truth_(inst_35485)){
var statearr_35591_35671 = state_35562__$1;
(statearr_35591_35671[(1)] = (23));

} else {
var statearr_35592_35672 = state_35562__$1;
(statearr_35592_35672[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (36))){
var state_35562__$1 = state_35562;
var statearr_35593_35673 = state_35562__$1;
(statearr_35593_35673[(2)] = false);

(statearr_35593_35673[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (41))){
var inst_35537 = (state_35562[(20)]);
var inst_35541 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35542 = cljs.core.map.call(null,inst_35541,inst_35537);
var inst_35543 = cljs.core.pr_str.call(null,inst_35542);
var inst_35544 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35543)].join('');
var inst_35545 = figwheel.client.utils.log.call(null,inst_35544);
var state_35562__$1 = state_35562;
var statearr_35594_35674 = state_35562__$1;
(statearr_35594_35674[(2)] = inst_35545);

(statearr_35594_35674[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (43))){
var inst_35538 = (state_35562[(21)]);
var inst_35548 = (state_35562[(2)]);
var inst_35549 = cljs.core.not_empty.call(null,inst_35538);
var state_35562__$1 = (function (){var statearr_35595 = state_35562;
(statearr_35595[(27)] = inst_35548);

return statearr_35595;
})();
if(cljs.core.truth_(inst_35549)){
var statearr_35596_35675 = state_35562__$1;
(statearr_35596_35675[(1)] = (44));

} else {
var statearr_35597_35676 = state_35562__$1;
(statearr_35597_35676[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (29))){
var inst_35476 = (state_35562[(19)]);
var inst_35480 = (state_35562[(23)]);
var inst_35484 = (state_35562[(24)]);
var inst_35516 = (state_35562[(16)]);
var inst_35482 = (state_35562[(26)]);
var inst_35479 = (state_35562[(25)]);
var inst_35512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35515 = (function (){var all_files = inst_35476;
var res_SINGLEQUOTE_ = inst_35479;
var res = inst_35480;
var files_not_loaded = inst_35482;
var dependencies_that_loaded = inst_35484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35476,inst_35480,inst_35484,inst_35516,inst_35482,inst_35479,inst_35512,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35514){
var map__35598 = p__35514;
var map__35598__$1 = ((((!((map__35598 == null)))?((((map__35598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35598):map__35598);
var namespace = cljs.core.get.call(null,map__35598__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35476,inst_35480,inst_35484,inst_35516,inst_35482,inst_35479,inst_35512,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35516__$1 = cljs.core.group_by.call(null,inst_35515,inst_35482);
var inst_35518 = (inst_35516__$1 == null);
var inst_35519 = cljs.core.not.call(null,inst_35518);
var state_35562__$1 = (function (){var statearr_35600 = state_35562;
(statearr_35600[(28)] = inst_35512);

(statearr_35600[(16)] = inst_35516__$1);

return statearr_35600;
})();
if(inst_35519){
var statearr_35601_35677 = state_35562__$1;
(statearr_35601_35677[(1)] = (32));

} else {
var statearr_35602_35678 = state_35562__$1;
(statearr_35602_35678[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (44))){
var inst_35538 = (state_35562[(21)]);
var inst_35551 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35538);
var inst_35552 = cljs.core.pr_str.call(null,inst_35551);
var inst_35553 = [cljs.core.str("not required: "),cljs.core.str(inst_35552)].join('');
var inst_35554 = figwheel.client.utils.log.call(null,inst_35553);
var state_35562__$1 = state_35562;
var statearr_35603_35679 = state_35562__$1;
(statearr_35603_35679[(2)] = inst_35554);

(statearr_35603_35679[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (6))){
var inst_35457 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35604_35680 = state_35562__$1;
(statearr_35604_35680[(2)] = inst_35457);

(statearr_35604_35680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (28))){
var inst_35482 = (state_35562[(26)]);
var inst_35509 = (state_35562[(2)]);
var inst_35510 = cljs.core.not_empty.call(null,inst_35482);
var state_35562__$1 = (function (){var statearr_35605 = state_35562;
(statearr_35605[(29)] = inst_35509);

return statearr_35605;
})();
if(cljs.core.truth_(inst_35510)){
var statearr_35606_35681 = state_35562__$1;
(statearr_35606_35681[(1)] = (29));

} else {
var statearr_35607_35682 = state_35562__$1;
(statearr_35607_35682[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (25))){
var inst_35480 = (state_35562[(23)]);
var inst_35496 = (state_35562[(2)]);
var inst_35497 = cljs.core.not_empty.call(null,inst_35480);
var state_35562__$1 = (function (){var statearr_35608 = state_35562;
(statearr_35608[(30)] = inst_35496);

return statearr_35608;
})();
if(cljs.core.truth_(inst_35497)){
var statearr_35609_35683 = state_35562__$1;
(statearr_35609_35683[(1)] = (26));

} else {
var statearr_35610_35684 = state_35562__$1;
(statearr_35610_35684[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (34))){
var inst_35531 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35531)){
var statearr_35611_35685 = state_35562__$1;
(statearr_35611_35685[(1)] = (38));

} else {
var statearr_35612_35686 = state_35562__$1;
(statearr_35612_35686[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (17))){
var state_35562__$1 = state_35562;
var statearr_35613_35687 = state_35562__$1;
(statearr_35613_35687[(2)] = recompile_dependents);

(statearr_35613_35687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (3))){
var state_35562__$1 = state_35562;
var statearr_35614_35688 = state_35562__$1;
(statearr_35614_35688[(2)] = null);

(statearr_35614_35688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (12))){
var inst_35453 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35615_35689 = state_35562__$1;
(statearr_35615_35689[(2)] = inst_35453);

(statearr_35615_35689[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (2))){
var inst_35415 = (state_35562[(13)]);
var inst_35422 = cljs.core.seq.call(null,inst_35415);
var inst_35423 = inst_35422;
var inst_35424 = null;
var inst_35425 = (0);
var inst_35426 = (0);
var state_35562__$1 = (function (){var statearr_35616 = state_35562;
(statearr_35616[(7)] = inst_35423);

(statearr_35616[(8)] = inst_35424);

(statearr_35616[(9)] = inst_35426);

(statearr_35616[(10)] = inst_35425);

return statearr_35616;
})();
var statearr_35617_35690 = state_35562__$1;
(statearr_35617_35690[(2)] = null);

(statearr_35617_35690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (23))){
var inst_35476 = (state_35562[(19)]);
var inst_35480 = (state_35562[(23)]);
var inst_35484 = (state_35562[(24)]);
var inst_35482 = (state_35562[(26)]);
var inst_35479 = (state_35562[(25)]);
var inst_35487 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35489 = (function (){var all_files = inst_35476;
var res_SINGLEQUOTE_ = inst_35479;
var res = inst_35480;
var files_not_loaded = inst_35482;
var dependencies_that_loaded = inst_35484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35476,inst_35480,inst_35484,inst_35482,inst_35479,inst_35487,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35488){
var map__35618 = p__35488;
var map__35618__$1 = ((((!((map__35618 == null)))?((((map__35618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35618):map__35618);
var request_url = cljs.core.get.call(null,map__35618__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35476,inst_35480,inst_35484,inst_35482,inst_35479,inst_35487,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35490 = cljs.core.reverse.call(null,inst_35484);
var inst_35491 = cljs.core.map.call(null,inst_35489,inst_35490);
var inst_35492 = cljs.core.pr_str.call(null,inst_35491);
var inst_35493 = figwheel.client.utils.log.call(null,inst_35492);
var state_35562__$1 = (function (){var statearr_35620 = state_35562;
(statearr_35620[(31)] = inst_35487);

return statearr_35620;
})();
var statearr_35621_35691 = state_35562__$1;
(statearr_35621_35691[(2)] = inst_35493);

(statearr_35621_35691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (35))){
var state_35562__$1 = state_35562;
var statearr_35622_35692 = state_35562__$1;
(statearr_35622_35692[(2)] = true);

(statearr_35622_35692[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (19))){
var inst_35466 = (state_35562[(12)]);
var inst_35472 = figwheel.client.file_reloading.expand_files.call(null,inst_35466);
var state_35562__$1 = state_35562;
var statearr_35623_35693 = state_35562__$1;
(statearr_35623_35693[(2)] = inst_35472);

(statearr_35623_35693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (11))){
var state_35562__$1 = state_35562;
var statearr_35624_35694 = state_35562__$1;
(statearr_35624_35694[(2)] = null);

(statearr_35624_35694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (9))){
var inst_35455 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35625_35695 = state_35562__$1;
(statearr_35625_35695[(2)] = inst_35455);

(statearr_35625_35695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (5))){
var inst_35426 = (state_35562[(9)]);
var inst_35425 = (state_35562[(10)]);
var inst_35428 = (inst_35426 < inst_35425);
var inst_35429 = inst_35428;
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35429)){
var statearr_35626_35696 = state_35562__$1;
(statearr_35626_35696[(1)] = (7));

} else {
var statearr_35627_35697 = state_35562__$1;
(statearr_35627_35697[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (14))){
var inst_35436 = (state_35562[(22)]);
var inst_35445 = cljs.core.first.call(null,inst_35436);
var inst_35446 = figwheel.client.file_reloading.eval_body.call(null,inst_35445,opts);
var inst_35447 = cljs.core.next.call(null,inst_35436);
var inst_35423 = inst_35447;
var inst_35424 = null;
var inst_35425 = (0);
var inst_35426 = (0);
var state_35562__$1 = (function (){var statearr_35628 = state_35562;
(statearr_35628[(7)] = inst_35423);

(statearr_35628[(32)] = inst_35446);

(statearr_35628[(8)] = inst_35424);

(statearr_35628[(9)] = inst_35426);

(statearr_35628[(10)] = inst_35425);

return statearr_35628;
})();
var statearr_35629_35698 = state_35562__$1;
(statearr_35629_35698[(2)] = null);

(statearr_35629_35698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (45))){
var state_35562__$1 = state_35562;
var statearr_35630_35699 = state_35562__$1;
(statearr_35630_35699[(2)] = null);

(statearr_35630_35699[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (26))){
var inst_35476 = (state_35562[(19)]);
var inst_35480 = (state_35562[(23)]);
var inst_35484 = (state_35562[(24)]);
var inst_35482 = (state_35562[(26)]);
var inst_35479 = (state_35562[(25)]);
var inst_35499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35501 = (function (){var all_files = inst_35476;
var res_SINGLEQUOTE_ = inst_35479;
var res = inst_35480;
var files_not_loaded = inst_35482;
var dependencies_that_loaded = inst_35484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35476,inst_35480,inst_35484,inst_35482,inst_35479,inst_35499,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35500){
var map__35631 = p__35500;
var map__35631__$1 = ((((!((map__35631 == null)))?((((map__35631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35631):map__35631);
var namespace = cljs.core.get.call(null,map__35631__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35476,inst_35480,inst_35484,inst_35482,inst_35479,inst_35499,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35502 = cljs.core.map.call(null,inst_35501,inst_35480);
var inst_35503 = cljs.core.pr_str.call(null,inst_35502);
var inst_35504 = figwheel.client.utils.log.call(null,inst_35503);
var inst_35505 = (function (){var all_files = inst_35476;
var res_SINGLEQUOTE_ = inst_35479;
var res = inst_35480;
var files_not_loaded = inst_35482;
var dependencies_that_loaded = inst_35484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35476,inst_35480,inst_35484,inst_35482,inst_35479,inst_35499,inst_35501,inst_35502,inst_35503,inst_35504,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35476,inst_35480,inst_35484,inst_35482,inst_35479,inst_35499,inst_35501,inst_35502,inst_35503,inst_35504,state_val_35563,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35506 = setTimeout(inst_35505,(10));
var state_35562__$1 = (function (){var statearr_35633 = state_35562;
(statearr_35633[(33)] = inst_35504);

(statearr_35633[(34)] = inst_35499);

return statearr_35633;
})();
var statearr_35634_35700 = state_35562__$1;
(statearr_35634_35700[(2)] = inst_35506);

(statearr_35634_35700[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (16))){
var state_35562__$1 = state_35562;
var statearr_35635_35701 = state_35562__$1;
(statearr_35635_35701[(2)] = reload_dependents);

(statearr_35635_35701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (38))){
var inst_35516 = (state_35562[(16)]);
var inst_35533 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35516);
var state_35562__$1 = state_35562;
var statearr_35636_35702 = state_35562__$1;
(statearr_35636_35702[(2)] = inst_35533);

(statearr_35636_35702[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (30))){
var state_35562__$1 = state_35562;
var statearr_35637_35703 = state_35562__$1;
(statearr_35637_35703[(2)] = null);

(statearr_35637_35703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (10))){
var inst_35436 = (state_35562[(22)]);
var inst_35438 = cljs.core.chunked_seq_QMARK_.call(null,inst_35436);
var state_35562__$1 = state_35562;
if(inst_35438){
var statearr_35638_35704 = state_35562__$1;
(statearr_35638_35704[(1)] = (13));

} else {
var statearr_35639_35705 = state_35562__$1;
(statearr_35639_35705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (18))){
var inst_35470 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35470)){
var statearr_35640_35706 = state_35562__$1;
(statearr_35640_35706[(1)] = (19));

} else {
var statearr_35641_35707 = state_35562__$1;
(statearr_35641_35707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (42))){
var state_35562__$1 = state_35562;
var statearr_35642_35708 = state_35562__$1;
(statearr_35642_35708[(2)] = null);

(statearr_35642_35708[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (37))){
var inst_35528 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35643_35709 = state_35562__$1;
(statearr_35643_35709[(2)] = inst_35528);

(statearr_35643_35709[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (8))){
var inst_35423 = (state_35562[(7)]);
var inst_35436 = (state_35562[(22)]);
var inst_35436__$1 = cljs.core.seq.call(null,inst_35423);
var state_35562__$1 = (function (){var statearr_35644 = state_35562;
(statearr_35644[(22)] = inst_35436__$1);

return statearr_35644;
})();
if(inst_35436__$1){
var statearr_35645_35710 = state_35562__$1;
(statearr_35645_35710[(1)] = (10));

} else {
var statearr_35646_35711 = state_35562__$1;
(statearr_35646_35711[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22192__auto__,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto____0 = (function (){
var statearr_35650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35650[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto__);

(statearr_35650[(1)] = (1));

return statearr_35650;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto____1 = (function (state_35562){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_35562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e35651){if((e35651 instanceof Object)){
var ex__22196__auto__ = e35651;
var statearr_35652_35712 = state_35562;
(statearr_35652_35712[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35713 = state_35562;
state_35562 = G__35713;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto__ = function(state_35562){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto____1.call(this,state_35562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22306__auto__ = (function (){var statearr_35653 = f__22305__auto__.call(null);
(statearr_35653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_35653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__,map__35408,map__35408__$1,opts,before_jsload,on_jsload,reload_dependents,map__35409,map__35409__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22304__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35716,link){
var map__35719 = p__35716;
var map__35719__$1 = ((((!((map__35719 == null)))?((((map__35719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35719):map__35719);
var file = cljs.core.get.call(null,map__35719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__35719,map__35719__$1,file){
return (function (p1__35714_SHARP_,p2__35715_SHARP_){
if(cljs.core._EQ_.call(null,p1__35714_SHARP_,p2__35715_SHARP_)){
return p1__35714_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__35719,map__35719__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35725){
var map__35726 = p__35725;
var map__35726__$1 = ((((!((map__35726 == null)))?((((map__35726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35726):map__35726);
var match_length = cljs.core.get.call(null,map__35726__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35726__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35721_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35721_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args35728 = [];
var len__17883__auto___35731 = arguments.length;
var i__17884__auto___35732 = (0);
while(true){
if((i__17884__auto___35732 < len__17883__auto___35731)){
args35728.push((arguments[i__17884__auto___35732]));

var G__35733 = (i__17884__auto___35732 + (1));
i__17884__auto___35732 = G__35733;
continue;
} else {
}
break;
}

var G__35730 = args35728.length;
switch (G__35730) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35728.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35735_SHARP_,p2__35736_SHARP_){
return cljs.core.assoc.call(null,p1__35735_SHARP_,cljs.core.get.call(null,p2__35736_SHARP_,key),p2__35736_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35737){
var map__35740 = p__35737;
var map__35740__$1 = ((((!((map__35740 == null)))?((((map__35740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35740):map__35740);
var f_data = map__35740__$1;
var file = cljs.core.get.call(null,map__35740__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35742,files_msg){
var map__35749 = p__35742;
var map__35749__$1 = ((((!((map__35749 == null)))?((((map__35749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35749):map__35749);
var opts = map__35749__$1;
var on_cssload = cljs.core.get.call(null,map__35749__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35751_35755 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35752_35756 = null;
var count__35753_35757 = (0);
var i__35754_35758 = (0);
while(true){
if((i__35754_35758 < count__35753_35757)){
var f_35759 = cljs.core._nth.call(null,chunk__35752_35756,i__35754_35758);
figwheel.client.file_reloading.reload_css_file.call(null,f_35759);

var G__35760 = seq__35751_35755;
var G__35761 = chunk__35752_35756;
var G__35762 = count__35753_35757;
var G__35763 = (i__35754_35758 + (1));
seq__35751_35755 = G__35760;
chunk__35752_35756 = G__35761;
count__35753_35757 = G__35762;
i__35754_35758 = G__35763;
continue;
} else {
var temp__4425__auto___35764 = cljs.core.seq.call(null,seq__35751_35755);
if(temp__4425__auto___35764){
var seq__35751_35765__$1 = temp__4425__auto___35764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35751_35765__$1)){
var c__17628__auto___35766 = cljs.core.chunk_first.call(null,seq__35751_35765__$1);
var G__35767 = cljs.core.chunk_rest.call(null,seq__35751_35765__$1);
var G__35768 = c__17628__auto___35766;
var G__35769 = cljs.core.count.call(null,c__17628__auto___35766);
var G__35770 = (0);
seq__35751_35755 = G__35767;
chunk__35752_35756 = G__35768;
count__35753_35757 = G__35769;
i__35754_35758 = G__35770;
continue;
} else {
var f_35771 = cljs.core.first.call(null,seq__35751_35765__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35771);

var G__35772 = cljs.core.next.call(null,seq__35751_35765__$1);
var G__35773 = null;
var G__35774 = (0);
var G__35775 = (0);
seq__35751_35755 = G__35772;
chunk__35752_35756 = G__35773;
count__35753_35757 = G__35774;
i__35754_35758 = G__35775;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35749,map__35749__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35749,map__35749__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
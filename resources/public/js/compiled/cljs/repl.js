// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27428_27442 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27429_27443 = null;
var count__27430_27444 = (0);
var i__27431_27445 = (0);
while(true){
if((i__27431_27445 < count__27430_27444)){
var f_27446 = cljs.core._nth.call(null,chunk__27429_27443,i__27431_27445);
cljs.core.println.call(null,"  ",f_27446);

var G__27447 = seq__27428_27442;
var G__27448 = chunk__27429_27443;
var G__27449 = count__27430_27444;
var G__27450 = (i__27431_27445 + (1));
seq__27428_27442 = G__27447;
chunk__27429_27443 = G__27448;
count__27430_27444 = G__27449;
i__27431_27445 = G__27450;
continue;
} else {
var temp__4425__auto___27451 = cljs.core.seq.call(null,seq__27428_27442);
if(temp__4425__auto___27451){
var seq__27428_27452__$1 = temp__4425__auto___27451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27428_27452__$1)){
var c__17628__auto___27453 = cljs.core.chunk_first.call(null,seq__27428_27452__$1);
var G__27454 = cljs.core.chunk_rest.call(null,seq__27428_27452__$1);
var G__27455 = c__17628__auto___27453;
var G__27456 = cljs.core.count.call(null,c__17628__auto___27453);
var G__27457 = (0);
seq__27428_27442 = G__27454;
chunk__27429_27443 = G__27455;
count__27430_27444 = G__27456;
i__27431_27445 = G__27457;
continue;
} else {
var f_27458 = cljs.core.first.call(null,seq__27428_27452__$1);
cljs.core.println.call(null,"  ",f_27458);

var G__27459 = cljs.core.next.call(null,seq__27428_27452__$1);
var G__27460 = null;
var G__27461 = (0);
var G__27462 = (0);
seq__27428_27442 = G__27459;
chunk__27429_27443 = G__27460;
count__27430_27444 = G__27461;
i__27431_27445 = G__27462;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27463 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16825__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27463);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27463)))?cljs.core.second.call(null,arglists_27463):arglists_27463));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27432 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27433 = null;
var count__27434 = (0);
var i__27435 = (0);
while(true){
if((i__27435 < count__27434)){
var vec__27436 = cljs.core._nth.call(null,chunk__27433,i__27435);
var name = cljs.core.nth.call(null,vec__27436,(0),null);
var map__27437 = cljs.core.nth.call(null,vec__27436,(1),null);
var map__27437__$1 = ((((!((map__27437 == null)))?((((map__27437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27437):map__27437);
var doc = cljs.core.get.call(null,map__27437__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27437__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27464 = seq__27432;
var G__27465 = chunk__27433;
var G__27466 = count__27434;
var G__27467 = (i__27435 + (1));
seq__27432 = G__27464;
chunk__27433 = G__27465;
count__27434 = G__27466;
i__27435 = G__27467;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27432);
if(temp__4425__auto__){
var seq__27432__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27432__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__27432__$1);
var G__27468 = cljs.core.chunk_rest.call(null,seq__27432__$1);
var G__27469 = c__17628__auto__;
var G__27470 = cljs.core.count.call(null,c__17628__auto__);
var G__27471 = (0);
seq__27432 = G__27468;
chunk__27433 = G__27469;
count__27434 = G__27470;
i__27435 = G__27471;
continue;
} else {
var vec__27439 = cljs.core.first.call(null,seq__27432__$1);
var name = cljs.core.nth.call(null,vec__27439,(0),null);
var map__27440 = cljs.core.nth.call(null,vec__27439,(1),null);
var map__27440__$1 = ((((!((map__27440 == null)))?((((map__27440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27440):map__27440);
var doc = cljs.core.get.call(null,map__27440__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27440__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27472 = cljs.core.next.call(null,seq__27432__$1);
var G__27473 = null;
var G__27474 = (0);
var G__27475 = (0);
seq__27432 = G__27472;
chunk__27433 = G__27473;
count__27434 = G__27474;
i__27435 = G__27475;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
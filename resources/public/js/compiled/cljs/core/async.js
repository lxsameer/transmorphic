// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async22352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22352 = (function (fn_handler,f,meta22353){
this.fn_handler = fn_handler;
this.f = f;
this.meta22353 = meta22353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22354,meta22353__$1){
var self__ = this;
var _22354__$1 = this;
return (new cljs.core.async.t_cljs$core$async22352(self__.fn_handler,self__.f,meta22353__$1));
});

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22354){
var self__ = this;
var _22354__$1 = this;
return self__.meta22353;
});

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta22353","meta22353",1587281312,null)], null);
});

cljs.core.async.t_cljs$core$async22352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22352";

cljs.core.async.t_cljs$core$async22352.cljs$lang$ctorPrWriter = (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"cljs.core.async/t_cljs$core$async22352");
});

cljs.core.async.__GT_t_cljs$core$async22352 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async22352(fn_handler__$1,f__$1,meta22353){
return (new cljs.core.async.t_cljs$core$async22352(fn_handler__$1,f__$1,meta22353));
});

}

return (new cljs.core.async.t_cljs$core$async22352(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22357 = [];
var len__17883__auto___22360 = arguments.length;
var i__17884__auto___22361 = (0);
while(true){
if((i__17884__auto___22361 < len__17883__auto___22360)){
args22357.push((arguments[i__17884__auto___22361]));

var G__22362 = (i__17884__auto___22361 + (1));
i__17884__auto___22361 = G__22362;
continue;
} else {
}
break;
}

var G__22359 = args22357.length;
switch (G__22359) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22357.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22364 = [];
var len__17883__auto___22367 = arguments.length;
var i__17884__auto___22368 = (0);
while(true){
if((i__17884__auto___22368 < len__17883__auto___22367)){
args22364.push((arguments[i__17884__auto___22368]));

var G__22369 = (i__17884__auto___22368 + (1));
i__17884__auto___22368 = G__22369;
continue;
} else {
}
break;
}

var G__22366 = args22364.length;
switch (G__22366) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22364.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22371 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22371);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22371,ret){
return (function (){
return fn1.call(null,val_22371);
});})(val_22371,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22372 = [];
var len__17883__auto___22375 = arguments.length;
var i__17884__auto___22376 = (0);
while(true){
if((i__17884__auto___22376 < len__17883__auto___22375)){
args22372.push((arguments[i__17884__auto___22376]));

var G__22377 = (i__17884__auto___22376 + (1));
i__17884__auto___22376 = G__22377;
continue;
} else {
}
break;
}

var G__22374 = args22372.length;
switch (G__22374) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22372.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17728__auto___22379 = n;
var x_22380 = (0);
while(true){
if((x_22380 < n__17728__auto___22379)){
(a[x_22380] = (0));

var G__22381 = (x_22380 + (1));
x_22380 = G__22381;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22382 = (i + (1));
i = G__22382;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22386 = (function (alt_flag,flag,meta22387){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22387 = meta22387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22388,meta22387__$1){
var self__ = this;
var _22388__$1 = this;
return (new cljs.core.async.t_cljs$core$async22386(self__.alt_flag,self__.flag,meta22387__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22388){
var self__ = this;
var _22388__$1 = this;
return self__.meta22387;
});})(flag))
;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22386.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22387","meta22387",1385294784,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22386";

cljs.core.async.t_cljs$core$async22386.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"cljs.core.async/t_cljs$core$async22386");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22386 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22386(alt_flag__$1,flag__$1,meta22387){
return (new cljs.core.async.t_cljs$core$async22386(alt_flag__$1,flag__$1,meta22387));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22386(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22392 = (function (alt_handler,flag,cb,meta22393){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22393 = meta22393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22394,meta22393__$1){
var self__ = this;
var _22394__$1 = this;
return (new cljs.core.async.t_cljs$core$async22392(self__.alt_handler,self__.flag,self__.cb,meta22393__$1));
});

cljs.core.async.t_cljs$core$async22392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22394){
var self__ = this;
var _22394__$1 = this;
return self__.meta22393;
});

cljs.core.async.t_cljs$core$async22392.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22393","meta22393",-358470529,null)], null);
});

cljs.core.async.t_cljs$core$async22392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22392";

cljs.core.async.t_cljs$core$async22392.cljs$lang$ctorPrWriter = (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"cljs.core.async/t_cljs$core$async22392");
});

cljs.core.async.__GT_t_cljs$core$async22392 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22392(alt_handler__$1,flag__$1,cb__$1,meta22393){
return (new cljs.core.async.t_cljs$core$async22392(alt_handler__$1,flag__$1,cb__$1,meta22393));
});

}

return (new cljs.core.async.t_cljs$core$async22392(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22395_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22395_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22396_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22396_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16825__auto__ = wport;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22397 = (i + (1));
i = G__22397;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16825__auto__ = ret;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16813__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16813__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17890__auto__ = [];
var len__17883__auto___22403 = arguments.length;
var i__17884__auto___22404 = (0);
while(true){
if((i__17884__auto___22404 < len__17883__auto___22403)){
args__17890__auto__.push((arguments[i__17884__auto___22404]));

var G__22405 = (i__17884__auto___22404 + (1));
i__17884__auto___22404 = G__22405;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22400){
var map__22401 = p__22400;
var map__22401__$1 = ((((!((map__22401 == null)))?((((map__22401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22401):map__22401);
var opts = map__22401__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22398){
var G__22399 = cljs.core.first.call(null,seq22398);
var seq22398__$1 = cljs.core.next.call(null,seq22398);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22399,seq22398__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22406 = [];
var len__17883__auto___22456 = arguments.length;
var i__17884__auto___22457 = (0);
while(true){
if((i__17884__auto___22457 < len__17883__auto___22456)){
args22406.push((arguments[i__17884__auto___22457]));

var G__22458 = (i__17884__auto___22457 + (1));
i__17884__auto___22457 = G__22458;
continue;
} else {
}
break;
}

var G__22408 = args22406.length;
switch (G__22408) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22406.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22304__auto___22460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___22460){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___22460){
return (function (state_22432){
var state_val_22433 = (state_22432[(1)]);
if((state_val_22433 === (7))){
var inst_22428 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22434_22461 = state_22432__$1;
(statearr_22434_22461[(2)] = inst_22428);

(statearr_22434_22461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (1))){
var state_22432__$1 = state_22432;
var statearr_22435_22462 = state_22432__$1;
(statearr_22435_22462[(2)] = null);

(statearr_22435_22462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (4))){
var inst_22411 = (state_22432[(7)]);
var inst_22411__$1 = (state_22432[(2)]);
var inst_22412 = (inst_22411__$1 == null);
var state_22432__$1 = (function (){var statearr_22436 = state_22432;
(statearr_22436[(7)] = inst_22411__$1);

return statearr_22436;
})();
if(cljs.core.truth_(inst_22412)){
var statearr_22437_22463 = state_22432__$1;
(statearr_22437_22463[(1)] = (5));

} else {
var statearr_22438_22464 = state_22432__$1;
(statearr_22438_22464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (13))){
var state_22432__$1 = state_22432;
var statearr_22439_22465 = state_22432__$1;
(statearr_22439_22465[(2)] = null);

(statearr_22439_22465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (6))){
var inst_22411 = (state_22432[(7)]);
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22432__$1,(11),to,inst_22411);
} else {
if((state_val_22433 === (3))){
var inst_22430 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22432__$1,inst_22430);
} else {
if((state_val_22433 === (12))){
var state_22432__$1 = state_22432;
var statearr_22440_22466 = state_22432__$1;
(statearr_22440_22466[(2)] = null);

(statearr_22440_22466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (2))){
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22432__$1,(4),from);
} else {
if((state_val_22433 === (11))){
var inst_22421 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
if(cljs.core.truth_(inst_22421)){
var statearr_22441_22467 = state_22432__$1;
(statearr_22441_22467[(1)] = (12));

} else {
var statearr_22442_22468 = state_22432__$1;
(statearr_22442_22468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (9))){
var state_22432__$1 = state_22432;
var statearr_22443_22469 = state_22432__$1;
(statearr_22443_22469[(2)] = null);

(statearr_22443_22469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (5))){
var state_22432__$1 = state_22432;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22444_22470 = state_22432__$1;
(statearr_22444_22470[(1)] = (8));

} else {
var statearr_22445_22471 = state_22432__$1;
(statearr_22445_22471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (14))){
var inst_22426 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22446_22472 = state_22432__$1;
(statearr_22446_22472[(2)] = inst_22426);

(statearr_22446_22472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (10))){
var inst_22418 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22447_22473 = state_22432__$1;
(statearr_22447_22473[(2)] = inst_22418);

(statearr_22447_22473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (8))){
var inst_22415 = cljs.core.async.close_BANG_.call(null,to);
var state_22432__$1 = state_22432;
var statearr_22448_22474 = state_22432__$1;
(statearr_22448_22474[(2)] = inst_22415);

(statearr_22448_22474[(1)] = (10));


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
});})(c__22304__auto___22460))
;
return ((function (switch__22192__auto__,c__22304__auto___22460){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_22452 = [null,null,null,null,null,null,null,null];
(statearr_22452[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_22452[(1)] = (1));

return statearr_22452;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_22432){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_22432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e22453){if((e22453 instanceof Object)){
var ex__22196__auto__ = e22453;
var statearr_22454_22475 = state_22432;
(statearr_22454_22475[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22476 = state_22432;
state_22432 = G__22476;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_22432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_22432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___22460))
})();
var state__22306__auto__ = (function (){var statearr_22455 = f__22305__auto__.call(null);
(statearr_22455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___22460);

return statearr_22455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___22460))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22660){
var vec__22661 = p__22660;
var v = cljs.core.nth.call(null,vec__22661,(0),null);
var p = cljs.core.nth.call(null,vec__22661,(1),null);
var job = vec__22661;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22304__auto___22843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___22843,res,vec__22661,v,p,job,jobs,results){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___22843,res,vec__22661,v,p,job,jobs,results){
return (function (state_22666){
var state_val_22667 = (state_22666[(1)]);
if((state_val_22667 === (1))){
var state_22666__$1 = state_22666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22666__$1,(2),res,v);
} else {
if((state_val_22667 === (2))){
var inst_22663 = (state_22666[(2)]);
var inst_22664 = cljs.core.async.close_BANG_.call(null,res);
var state_22666__$1 = (function (){var statearr_22668 = state_22666;
(statearr_22668[(7)] = inst_22663);

return statearr_22668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22666__$1,inst_22664);
} else {
return null;
}
}
});})(c__22304__auto___22843,res,vec__22661,v,p,job,jobs,results))
;
return ((function (switch__22192__auto__,c__22304__auto___22843,res,vec__22661,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0 = (function (){
var statearr_22672 = [null,null,null,null,null,null,null,null];
(statearr_22672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__);

(statearr_22672[(1)] = (1));

return statearr_22672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1 = (function (state_22666){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_22666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e22673){if((e22673 instanceof Object)){
var ex__22196__auto__ = e22673;
var statearr_22674_22844 = state_22666;
(statearr_22674_22844[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22845 = state_22666;
state_22666 = G__22845;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__ = function(state_22666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1.call(this,state_22666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___22843,res,vec__22661,v,p,job,jobs,results))
})();
var state__22306__auto__ = (function (){var statearr_22675 = f__22305__auto__.call(null);
(statearr_22675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___22843);

return statearr_22675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___22843,res,vec__22661,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22676){
var vec__22677 = p__22676;
var v = cljs.core.nth.call(null,vec__22677,(0),null);
var p = cljs.core.nth.call(null,vec__22677,(1),null);
var job = vec__22677;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17728__auto___22846 = n;
var __22847 = (0);
while(true){
if((__22847 < n__17728__auto___22846)){
var G__22678_22848 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22678_22848) {
case "compute":
var c__22304__auto___22850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22847,c__22304__auto___22850,G__22678_22848,n__17728__auto___22846,jobs,results,process,async){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (__22847,c__22304__auto___22850,G__22678_22848,n__17728__auto___22846,jobs,results,process,async){
return (function (state_22691){
var state_val_22692 = (state_22691[(1)]);
if((state_val_22692 === (1))){
var state_22691__$1 = state_22691;
var statearr_22693_22851 = state_22691__$1;
(statearr_22693_22851[(2)] = null);

(statearr_22693_22851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22692 === (2))){
var state_22691__$1 = state_22691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22691__$1,(4),jobs);
} else {
if((state_val_22692 === (3))){
var inst_22689 = (state_22691[(2)]);
var state_22691__$1 = state_22691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22691__$1,inst_22689);
} else {
if((state_val_22692 === (4))){
var inst_22681 = (state_22691[(2)]);
var inst_22682 = process.call(null,inst_22681);
var state_22691__$1 = state_22691;
if(cljs.core.truth_(inst_22682)){
var statearr_22694_22852 = state_22691__$1;
(statearr_22694_22852[(1)] = (5));

} else {
var statearr_22695_22853 = state_22691__$1;
(statearr_22695_22853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22692 === (5))){
var state_22691__$1 = state_22691;
var statearr_22696_22854 = state_22691__$1;
(statearr_22696_22854[(2)] = null);

(statearr_22696_22854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22692 === (6))){
var state_22691__$1 = state_22691;
var statearr_22697_22855 = state_22691__$1;
(statearr_22697_22855[(2)] = null);

(statearr_22697_22855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22692 === (7))){
var inst_22687 = (state_22691[(2)]);
var state_22691__$1 = state_22691;
var statearr_22698_22856 = state_22691__$1;
(statearr_22698_22856[(2)] = inst_22687);

(statearr_22698_22856[(1)] = (3));


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
});})(__22847,c__22304__auto___22850,G__22678_22848,n__17728__auto___22846,jobs,results,process,async))
;
return ((function (__22847,switch__22192__auto__,c__22304__auto___22850,G__22678_22848,n__17728__auto___22846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0 = (function (){
var statearr_22702 = [null,null,null,null,null,null,null];
(statearr_22702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__);

(statearr_22702[(1)] = (1));

return statearr_22702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1 = (function (state_22691){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_22691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e22703){if((e22703 instanceof Object)){
var ex__22196__auto__ = e22703;
var statearr_22704_22857 = state_22691;
(statearr_22704_22857[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22858 = state_22691;
state_22691 = G__22858;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__ = function(state_22691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1.call(this,state_22691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__;
})()
;})(__22847,switch__22192__auto__,c__22304__auto___22850,G__22678_22848,n__17728__auto___22846,jobs,results,process,async))
})();
var state__22306__auto__ = (function (){var statearr_22705 = f__22305__auto__.call(null);
(statearr_22705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___22850);

return statearr_22705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(__22847,c__22304__auto___22850,G__22678_22848,n__17728__auto___22846,jobs,results,process,async))
);


break;
case "async":
var c__22304__auto___22859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22847,c__22304__auto___22859,G__22678_22848,n__17728__auto___22846,jobs,results,process,async){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (__22847,c__22304__auto___22859,G__22678_22848,n__17728__auto___22846,jobs,results,process,async){
return (function (state_22718){
var state_val_22719 = (state_22718[(1)]);
if((state_val_22719 === (1))){
var state_22718__$1 = state_22718;
var statearr_22720_22860 = state_22718__$1;
(statearr_22720_22860[(2)] = null);

(statearr_22720_22860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22719 === (2))){
var state_22718__$1 = state_22718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22718__$1,(4),jobs);
} else {
if((state_val_22719 === (3))){
var inst_22716 = (state_22718[(2)]);
var state_22718__$1 = state_22718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22718__$1,inst_22716);
} else {
if((state_val_22719 === (4))){
var inst_22708 = (state_22718[(2)]);
var inst_22709 = async.call(null,inst_22708);
var state_22718__$1 = state_22718;
if(cljs.core.truth_(inst_22709)){
var statearr_22721_22861 = state_22718__$1;
(statearr_22721_22861[(1)] = (5));

} else {
var statearr_22722_22862 = state_22718__$1;
(statearr_22722_22862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22719 === (5))){
var state_22718__$1 = state_22718;
var statearr_22723_22863 = state_22718__$1;
(statearr_22723_22863[(2)] = null);

(statearr_22723_22863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22719 === (6))){
var state_22718__$1 = state_22718;
var statearr_22724_22864 = state_22718__$1;
(statearr_22724_22864[(2)] = null);

(statearr_22724_22864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22719 === (7))){
var inst_22714 = (state_22718[(2)]);
var state_22718__$1 = state_22718;
var statearr_22725_22865 = state_22718__$1;
(statearr_22725_22865[(2)] = inst_22714);

(statearr_22725_22865[(1)] = (3));


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
});})(__22847,c__22304__auto___22859,G__22678_22848,n__17728__auto___22846,jobs,results,process,async))
;
return ((function (__22847,switch__22192__auto__,c__22304__auto___22859,G__22678_22848,n__17728__auto___22846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0 = (function (){
var statearr_22729 = [null,null,null,null,null,null,null];
(statearr_22729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__);

(statearr_22729[(1)] = (1));

return statearr_22729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1 = (function (state_22718){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_22718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e22730){if((e22730 instanceof Object)){
var ex__22196__auto__ = e22730;
var statearr_22731_22866 = state_22718;
(statearr_22731_22866[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22867 = state_22718;
state_22718 = G__22867;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__ = function(state_22718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1.call(this,state_22718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__;
})()
;})(__22847,switch__22192__auto__,c__22304__auto___22859,G__22678_22848,n__17728__auto___22846,jobs,results,process,async))
})();
var state__22306__auto__ = (function (){var statearr_22732 = f__22305__auto__.call(null);
(statearr_22732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___22859);

return statearr_22732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(__22847,c__22304__auto___22859,G__22678_22848,n__17728__auto___22846,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22868 = (__22847 + (1));
__22847 = G__22868;
continue;
} else {
}
break;
}

var c__22304__auto___22869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___22869,jobs,results,process,async){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___22869,jobs,results,process,async){
return (function (state_22754){
var state_val_22755 = (state_22754[(1)]);
if((state_val_22755 === (1))){
var state_22754__$1 = state_22754;
var statearr_22756_22870 = state_22754__$1;
(statearr_22756_22870[(2)] = null);

(statearr_22756_22870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (2))){
var state_22754__$1 = state_22754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22754__$1,(4),from);
} else {
if((state_val_22755 === (3))){
var inst_22752 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22754__$1,inst_22752);
} else {
if((state_val_22755 === (4))){
var inst_22735 = (state_22754[(7)]);
var inst_22735__$1 = (state_22754[(2)]);
var inst_22736 = (inst_22735__$1 == null);
var state_22754__$1 = (function (){var statearr_22757 = state_22754;
(statearr_22757[(7)] = inst_22735__$1);

return statearr_22757;
})();
if(cljs.core.truth_(inst_22736)){
var statearr_22758_22871 = state_22754__$1;
(statearr_22758_22871[(1)] = (5));

} else {
var statearr_22759_22872 = state_22754__$1;
(statearr_22759_22872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (5))){
var inst_22738 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22754__$1 = state_22754;
var statearr_22760_22873 = state_22754__$1;
(statearr_22760_22873[(2)] = inst_22738);

(statearr_22760_22873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (6))){
var inst_22740 = (state_22754[(8)]);
var inst_22735 = (state_22754[(7)]);
var inst_22740__$1 = cljs.core.async.chan.call(null,(1));
var inst_22741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22742 = [inst_22735,inst_22740__$1];
var inst_22743 = (new cljs.core.PersistentVector(null,2,(5),inst_22741,inst_22742,null));
var state_22754__$1 = (function (){var statearr_22761 = state_22754;
(statearr_22761[(8)] = inst_22740__$1);

return statearr_22761;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22754__$1,(8),jobs,inst_22743);
} else {
if((state_val_22755 === (7))){
var inst_22750 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
var statearr_22762_22874 = state_22754__$1;
(statearr_22762_22874[(2)] = inst_22750);

(statearr_22762_22874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (8))){
var inst_22740 = (state_22754[(8)]);
var inst_22745 = (state_22754[(2)]);
var state_22754__$1 = (function (){var statearr_22763 = state_22754;
(statearr_22763[(9)] = inst_22745);

return statearr_22763;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22754__$1,(9),results,inst_22740);
} else {
if((state_val_22755 === (9))){
var inst_22747 = (state_22754[(2)]);
var state_22754__$1 = (function (){var statearr_22764 = state_22754;
(statearr_22764[(10)] = inst_22747);

return statearr_22764;
})();
var statearr_22765_22875 = state_22754__$1;
(statearr_22765_22875[(2)] = null);

(statearr_22765_22875[(1)] = (2));


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
});})(c__22304__auto___22869,jobs,results,process,async))
;
return ((function (switch__22192__auto__,c__22304__auto___22869,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0 = (function (){
var statearr_22769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__);

(statearr_22769[(1)] = (1));

return statearr_22769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1 = (function (state_22754){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_22754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e22770){if((e22770 instanceof Object)){
var ex__22196__auto__ = e22770;
var statearr_22771_22876 = state_22754;
(statearr_22771_22876[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22877 = state_22754;
state_22754 = G__22877;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__ = function(state_22754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1.call(this,state_22754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___22869,jobs,results,process,async))
})();
var state__22306__auto__ = (function (){var statearr_22772 = f__22305__auto__.call(null);
(statearr_22772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___22869);

return statearr_22772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___22869,jobs,results,process,async))
);


var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__,jobs,results,process,async){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__,jobs,results,process,async){
return (function (state_22810){
var state_val_22811 = (state_22810[(1)]);
if((state_val_22811 === (7))){
var inst_22806 = (state_22810[(2)]);
var state_22810__$1 = state_22810;
var statearr_22812_22878 = state_22810__$1;
(statearr_22812_22878[(2)] = inst_22806);

(statearr_22812_22878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (20))){
var state_22810__$1 = state_22810;
var statearr_22813_22879 = state_22810__$1;
(statearr_22813_22879[(2)] = null);

(statearr_22813_22879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (1))){
var state_22810__$1 = state_22810;
var statearr_22814_22880 = state_22810__$1;
(statearr_22814_22880[(2)] = null);

(statearr_22814_22880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (4))){
var inst_22775 = (state_22810[(7)]);
var inst_22775__$1 = (state_22810[(2)]);
var inst_22776 = (inst_22775__$1 == null);
var state_22810__$1 = (function (){var statearr_22815 = state_22810;
(statearr_22815[(7)] = inst_22775__$1);

return statearr_22815;
})();
if(cljs.core.truth_(inst_22776)){
var statearr_22816_22881 = state_22810__$1;
(statearr_22816_22881[(1)] = (5));

} else {
var statearr_22817_22882 = state_22810__$1;
(statearr_22817_22882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (15))){
var inst_22788 = (state_22810[(8)]);
var state_22810__$1 = state_22810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22810__$1,(18),to,inst_22788);
} else {
if((state_val_22811 === (21))){
var inst_22801 = (state_22810[(2)]);
var state_22810__$1 = state_22810;
var statearr_22818_22883 = state_22810__$1;
(statearr_22818_22883[(2)] = inst_22801);

(statearr_22818_22883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (13))){
var inst_22803 = (state_22810[(2)]);
var state_22810__$1 = (function (){var statearr_22819 = state_22810;
(statearr_22819[(9)] = inst_22803);

return statearr_22819;
})();
var statearr_22820_22884 = state_22810__$1;
(statearr_22820_22884[(2)] = null);

(statearr_22820_22884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (6))){
var inst_22775 = (state_22810[(7)]);
var state_22810__$1 = state_22810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22810__$1,(11),inst_22775);
} else {
if((state_val_22811 === (17))){
var inst_22796 = (state_22810[(2)]);
var state_22810__$1 = state_22810;
if(cljs.core.truth_(inst_22796)){
var statearr_22821_22885 = state_22810__$1;
(statearr_22821_22885[(1)] = (19));

} else {
var statearr_22822_22886 = state_22810__$1;
(statearr_22822_22886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (3))){
var inst_22808 = (state_22810[(2)]);
var state_22810__$1 = state_22810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22810__$1,inst_22808);
} else {
if((state_val_22811 === (12))){
var inst_22785 = (state_22810[(10)]);
var state_22810__$1 = state_22810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22810__$1,(14),inst_22785);
} else {
if((state_val_22811 === (2))){
var state_22810__$1 = state_22810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22810__$1,(4),results);
} else {
if((state_val_22811 === (19))){
var state_22810__$1 = state_22810;
var statearr_22823_22887 = state_22810__$1;
(statearr_22823_22887[(2)] = null);

(statearr_22823_22887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (11))){
var inst_22785 = (state_22810[(2)]);
var state_22810__$1 = (function (){var statearr_22824 = state_22810;
(statearr_22824[(10)] = inst_22785);

return statearr_22824;
})();
var statearr_22825_22888 = state_22810__$1;
(statearr_22825_22888[(2)] = null);

(statearr_22825_22888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (9))){
var state_22810__$1 = state_22810;
var statearr_22826_22889 = state_22810__$1;
(statearr_22826_22889[(2)] = null);

(statearr_22826_22889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (5))){
var state_22810__$1 = state_22810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22827_22890 = state_22810__$1;
(statearr_22827_22890[(1)] = (8));

} else {
var statearr_22828_22891 = state_22810__$1;
(statearr_22828_22891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (14))){
var inst_22788 = (state_22810[(8)]);
var inst_22790 = (state_22810[(11)]);
var inst_22788__$1 = (state_22810[(2)]);
var inst_22789 = (inst_22788__$1 == null);
var inst_22790__$1 = cljs.core.not.call(null,inst_22789);
var state_22810__$1 = (function (){var statearr_22829 = state_22810;
(statearr_22829[(8)] = inst_22788__$1);

(statearr_22829[(11)] = inst_22790__$1);

return statearr_22829;
})();
if(inst_22790__$1){
var statearr_22830_22892 = state_22810__$1;
(statearr_22830_22892[(1)] = (15));

} else {
var statearr_22831_22893 = state_22810__$1;
(statearr_22831_22893[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (16))){
var inst_22790 = (state_22810[(11)]);
var state_22810__$1 = state_22810;
var statearr_22832_22894 = state_22810__$1;
(statearr_22832_22894[(2)] = inst_22790);

(statearr_22832_22894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (10))){
var inst_22782 = (state_22810[(2)]);
var state_22810__$1 = state_22810;
var statearr_22833_22895 = state_22810__$1;
(statearr_22833_22895[(2)] = inst_22782);

(statearr_22833_22895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (18))){
var inst_22793 = (state_22810[(2)]);
var state_22810__$1 = state_22810;
var statearr_22834_22896 = state_22810__$1;
(statearr_22834_22896[(2)] = inst_22793);

(statearr_22834_22896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22811 === (8))){
var inst_22779 = cljs.core.async.close_BANG_.call(null,to);
var state_22810__$1 = state_22810;
var statearr_22835_22897 = state_22810__$1;
(statearr_22835_22897[(2)] = inst_22779);

(statearr_22835_22897[(1)] = (10));


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
});})(c__22304__auto__,jobs,results,process,async))
;
return ((function (switch__22192__auto__,c__22304__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0 = (function (){
var statearr_22839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__);

(statearr_22839[(1)] = (1));

return statearr_22839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1 = (function (state_22810){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_22810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e22840){if((e22840 instanceof Object)){
var ex__22196__auto__ = e22840;
var statearr_22841_22898 = state_22810;
(statearr_22841_22898[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22899 = state_22810;
state_22810 = G__22899;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__ = function(state_22810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1.call(this,state_22810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__,jobs,results,process,async))
})();
var state__22306__auto__ = (function (){var statearr_22842 = f__22305__auto__.call(null);
(statearr_22842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_22842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__,jobs,results,process,async))
);

return c__22304__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22900 = [];
var len__17883__auto___22903 = arguments.length;
var i__17884__auto___22904 = (0);
while(true){
if((i__17884__auto___22904 < len__17883__auto___22903)){
args22900.push((arguments[i__17884__auto___22904]));

var G__22905 = (i__17884__auto___22904 + (1));
i__17884__auto___22904 = G__22905;
continue;
} else {
}
break;
}

var G__22902 = args22900.length;
switch (G__22902) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22900.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22907 = [];
var len__17883__auto___22910 = arguments.length;
var i__17884__auto___22911 = (0);
while(true){
if((i__17884__auto___22911 < len__17883__auto___22910)){
args22907.push((arguments[i__17884__auto___22911]));

var G__22912 = (i__17884__auto___22911 + (1));
i__17884__auto___22911 = G__22912;
continue;
} else {
}
break;
}

var G__22909 = args22907.length;
switch (G__22909) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22907.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22914 = [];
var len__17883__auto___22967 = arguments.length;
var i__17884__auto___22968 = (0);
while(true){
if((i__17884__auto___22968 < len__17883__auto___22967)){
args22914.push((arguments[i__17884__auto___22968]));

var G__22969 = (i__17884__auto___22968 + (1));
i__17884__auto___22968 = G__22969;
continue;
} else {
}
break;
}

var G__22916 = args22914.length;
switch (G__22916) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22914.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22304__auto___22971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___22971,tc,fc){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___22971,tc,fc){
return (function (state_22942){
var state_val_22943 = (state_22942[(1)]);
if((state_val_22943 === (7))){
var inst_22938 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
var statearr_22944_22972 = state_22942__$1;
(statearr_22944_22972[(2)] = inst_22938);

(statearr_22944_22972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (1))){
var state_22942__$1 = state_22942;
var statearr_22945_22973 = state_22942__$1;
(statearr_22945_22973[(2)] = null);

(statearr_22945_22973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (4))){
var inst_22919 = (state_22942[(7)]);
var inst_22919__$1 = (state_22942[(2)]);
var inst_22920 = (inst_22919__$1 == null);
var state_22942__$1 = (function (){var statearr_22946 = state_22942;
(statearr_22946[(7)] = inst_22919__$1);

return statearr_22946;
})();
if(cljs.core.truth_(inst_22920)){
var statearr_22947_22974 = state_22942__$1;
(statearr_22947_22974[(1)] = (5));

} else {
var statearr_22948_22975 = state_22942__$1;
(statearr_22948_22975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (13))){
var state_22942__$1 = state_22942;
var statearr_22949_22976 = state_22942__$1;
(statearr_22949_22976[(2)] = null);

(statearr_22949_22976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (6))){
var inst_22919 = (state_22942[(7)]);
var inst_22925 = p.call(null,inst_22919);
var state_22942__$1 = state_22942;
if(cljs.core.truth_(inst_22925)){
var statearr_22950_22977 = state_22942__$1;
(statearr_22950_22977[(1)] = (9));

} else {
var statearr_22951_22978 = state_22942__$1;
(statearr_22951_22978[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (3))){
var inst_22940 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22942__$1,inst_22940);
} else {
if((state_val_22943 === (12))){
var state_22942__$1 = state_22942;
var statearr_22952_22979 = state_22942__$1;
(statearr_22952_22979[(2)] = null);

(statearr_22952_22979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (2))){
var state_22942__$1 = state_22942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22942__$1,(4),ch);
} else {
if((state_val_22943 === (11))){
var inst_22919 = (state_22942[(7)]);
var inst_22929 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22942__$1,(8),inst_22929,inst_22919);
} else {
if((state_val_22943 === (9))){
var state_22942__$1 = state_22942;
var statearr_22953_22980 = state_22942__$1;
(statearr_22953_22980[(2)] = tc);

(statearr_22953_22980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (5))){
var inst_22922 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22923 = cljs.core.async.close_BANG_.call(null,fc);
var state_22942__$1 = (function (){var statearr_22954 = state_22942;
(statearr_22954[(8)] = inst_22922);

return statearr_22954;
})();
var statearr_22955_22981 = state_22942__$1;
(statearr_22955_22981[(2)] = inst_22923);

(statearr_22955_22981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (14))){
var inst_22936 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
var statearr_22956_22982 = state_22942__$1;
(statearr_22956_22982[(2)] = inst_22936);

(statearr_22956_22982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (10))){
var state_22942__$1 = state_22942;
var statearr_22957_22983 = state_22942__$1;
(statearr_22957_22983[(2)] = fc);

(statearr_22957_22983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (8))){
var inst_22931 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
if(cljs.core.truth_(inst_22931)){
var statearr_22958_22984 = state_22942__$1;
(statearr_22958_22984[(1)] = (12));

} else {
var statearr_22959_22985 = state_22942__$1;
(statearr_22959_22985[(1)] = (13));

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
});})(c__22304__auto___22971,tc,fc))
;
return ((function (switch__22192__auto__,c__22304__auto___22971,tc,fc){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_22963 = [null,null,null,null,null,null,null,null,null];
(statearr_22963[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_22963[(1)] = (1));

return statearr_22963;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_22942){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_22942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e22964){if((e22964 instanceof Object)){
var ex__22196__auto__ = e22964;
var statearr_22965_22986 = state_22942;
(statearr_22965_22986[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22987 = state_22942;
state_22942 = G__22987;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_22942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_22942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___22971,tc,fc))
})();
var state__22306__auto__ = (function (){var statearr_22966 = f__22305__auto__.call(null);
(statearr_22966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___22971);

return statearr_22966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___22971,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_23034){
var state_val_23035 = (state_23034[(1)]);
if((state_val_23035 === (1))){
var inst_23020 = init;
var state_23034__$1 = (function (){var statearr_23036 = state_23034;
(statearr_23036[(7)] = inst_23020);

return statearr_23036;
})();
var statearr_23037_23052 = state_23034__$1;
(statearr_23037_23052[(2)] = null);

(statearr_23037_23052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (2))){
var state_23034__$1 = state_23034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23034__$1,(4),ch);
} else {
if((state_val_23035 === (3))){
var inst_23032 = (state_23034[(2)]);
var state_23034__$1 = state_23034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23034__$1,inst_23032);
} else {
if((state_val_23035 === (4))){
var inst_23023 = (state_23034[(8)]);
var inst_23023__$1 = (state_23034[(2)]);
var inst_23024 = (inst_23023__$1 == null);
var state_23034__$1 = (function (){var statearr_23038 = state_23034;
(statearr_23038[(8)] = inst_23023__$1);

return statearr_23038;
})();
if(cljs.core.truth_(inst_23024)){
var statearr_23039_23053 = state_23034__$1;
(statearr_23039_23053[(1)] = (5));

} else {
var statearr_23040_23054 = state_23034__$1;
(statearr_23040_23054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (5))){
var inst_23020 = (state_23034[(7)]);
var state_23034__$1 = state_23034;
var statearr_23041_23055 = state_23034__$1;
(statearr_23041_23055[(2)] = inst_23020);

(statearr_23041_23055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (6))){
var inst_23023 = (state_23034[(8)]);
var inst_23020 = (state_23034[(7)]);
var inst_23027 = f.call(null,inst_23020,inst_23023);
var inst_23020__$1 = inst_23027;
var state_23034__$1 = (function (){var statearr_23042 = state_23034;
(statearr_23042[(7)] = inst_23020__$1);

return statearr_23042;
})();
var statearr_23043_23056 = state_23034__$1;
(statearr_23043_23056[(2)] = null);

(statearr_23043_23056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (7))){
var inst_23030 = (state_23034[(2)]);
var state_23034__$1 = state_23034;
var statearr_23044_23057 = state_23034__$1;
(statearr_23044_23057[(2)] = inst_23030);

(statearr_23044_23057[(1)] = (3));


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
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22193__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22193__auto____0 = (function (){
var statearr_23048 = [null,null,null,null,null,null,null,null,null];
(statearr_23048[(0)] = cljs$core$async$reduce_$_state_machine__22193__auto__);

(statearr_23048[(1)] = (1));

return statearr_23048;
});
var cljs$core$async$reduce_$_state_machine__22193__auto____1 = (function (state_23034){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_23034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e23049){if((e23049 instanceof Object)){
var ex__22196__auto__ = e23049;
var statearr_23050_23058 = state_23034;
(statearr_23050_23058[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23059 = state_23034;
state_23034 = G__23059;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22193__auto__ = function(state_23034){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22193__auto____1.call(this,state_23034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22193__auto____0;
cljs$core$async$reduce_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22193__auto____1;
return cljs$core$async$reduce_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_23051 = f__22305__auto__.call(null);
(statearr_23051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_23051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23060 = [];
var len__17883__auto___23112 = arguments.length;
var i__17884__auto___23113 = (0);
while(true){
if((i__17884__auto___23113 < len__17883__auto___23112)){
args23060.push((arguments[i__17884__auto___23113]));

var G__23114 = (i__17884__auto___23113 + (1));
i__17884__auto___23113 = G__23114;
continue;
} else {
}
break;
}

var G__23062 = args23060.length;
switch (G__23062) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23060.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_23087){
var state_val_23088 = (state_23087[(1)]);
if((state_val_23088 === (7))){
var inst_23069 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23089_23116 = state_23087__$1;
(statearr_23089_23116[(2)] = inst_23069);

(statearr_23089_23116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (1))){
var inst_23063 = cljs.core.seq.call(null,coll);
var inst_23064 = inst_23063;
var state_23087__$1 = (function (){var statearr_23090 = state_23087;
(statearr_23090[(7)] = inst_23064);

return statearr_23090;
})();
var statearr_23091_23117 = state_23087__$1;
(statearr_23091_23117[(2)] = null);

(statearr_23091_23117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (4))){
var inst_23064 = (state_23087[(7)]);
var inst_23067 = cljs.core.first.call(null,inst_23064);
var state_23087__$1 = state_23087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23087__$1,(7),ch,inst_23067);
} else {
if((state_val_23088 === (13))){
var inst_23081 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23092_23118 = state_23087__$1;
(statearr_23092_23118[(2)] = inst_23081);

(statearr_23092_23118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (6))){
var inst_23072 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
if(cljs.core.truth_(inst_23072)){
var statearr_23093_23119 = state_23087__$1;
(statearr_23093_23119[(1)] = (8));

} else {
var statearr_23094_23120 = state_23087__$1;
(statearr_23094_23120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (3))){
var inst_23085 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23087__$1,inst_23085);
} else {
if((state_val_23088 === (12))){
var state_23087__$1 = state_23087;
var statearr_23095_23121 = state_23087__$1;
(statearr_23095_23121[(2)] = null);

(statearr_23095_23121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (2))){
var inst_23064 = (state_23087[(7)]);
var state_23087__$1 = state_23087;
if(cljs.core.truth_(inst_23064)){
var statearr_23096_23122 = state_23087__$1;
(statearr_23096_23122[(1)] = (4));

} else {
var statearr_23097_23123 = state_23087__$1;
(statearr_23097_23123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (11))){
var inst_23078 = cljs.core.async.close_BANG_.call(null,ch);
var state_23087__$1 = state_23087;
var statearr_23098_23124 = state_23087__$1;
(statearr_23098_23124[(2)] = inst_23078);

(statearr_23098_23124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (9))){
var state_23087__$1 = state_23087;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23099_23125 = state_23087__$1;
(statearr_23099_23125[(1)] = (11));

} else {
var statearr_23100_23126 = state_23087__$1;
(statearr_23100_23126[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (5))){
var inst_23064 = (state_23087[(7)]);
var state_23087__$1 = state_23087;
var statearr_23101_23127 = state_23087__$1;
(statearr_23101_23127[(2)] = inst_23064);

(statearr_23101_23127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (10))){
var inst_23083 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23102_23128 = state_23087__$1;
(statearr_23102_23128[(2)] = inst_23083);

(statearr_23102_23128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (8))){
var inst_23064 = (state_23087[(7)]);
var inst_23074 = cljs.core.next.call(null,inst_23064);
var inst_23064__$1 = inst_23074;
var state_23087__$1 = (function (){var statearr_23103 = state_23087;
(statearr_23103[(7)] = inst_23064__$1);

return statearr_23103;
})();
var statearr_23104_23129 = state_23087__$1;
(statearr_23104_23129[(2)] = null);

(statearr_23104_23129[(1)] = (2));


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
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_23108 = [null,null,null,null,null,null,null,null];
(statearr_23108[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_23108[(1)] = (1));

return statearr_23108;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_23087){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_23087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e23109){if((e23109 instanceof Object)){
var ex__22196__auto__ = e23109;
var statearr_23110_23130 = state_23087;
(statearr_23110_23130[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23131 = state_23087;
state_23087 = G__23131;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_23087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_23087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_23111 = f__22305__auto__.call(null);
(statearr_23111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_23111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17480__auto__ = (((_ == null))?null:_);
var m__17481__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,_);
} else {
var m__17481__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17480__auto__ = (((m == null))?null:m);
var m__17481__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17481__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17480__auto__ = (((m == null))?null:m);
var m__17481__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,m,ch);
} else {
var m__17481__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17480__auto__ = (((m == null))?null:m);
var m__17481__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,m);
} else {
var m__17481__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23353 = (function (mult,ch,cs,meta23354){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23354 = meta23354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23355,meta23354__$1){
var self__ = this;
var _23355__$1 = this;
return (new cljs.core.async.t_cljs$core$async23353(self__.mult,self__.ch,self__.cs,meta23354__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23355){
var self__ = this;
var _23355__$1 = this;
return self__.meta23354;
});})(cs))
;

cljs.core.async.t_cljs$core$async23353.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23353.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23353.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23353.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23353.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23353.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23354","meta23354",-838080694,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23353";

cljs.core.async.t_cljs$core$async23353.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"cljs.core.async/t_cljs$core$async23353");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23353 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23353(mult__$1,ch__$1,cs__$1,meta23354){
return (new cljs.core.async.t_cljs$core$async23353(mult__$1,ch__$1,cs__$1,meta23354));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23353(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22304__auto___23574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___23574,cs,m,dchan,dctr,done){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___23574,cs,m,dchan,dctr,done){
return (function (state_23486){
var state_val_23487 = (state_23486[(1)]);
if((state_val_23487 === (7))){
var inst_23482 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23488_23575 = state_23486__$1;
(statearr_23488_23575[(2)] = inst_23482);

(statearr_23488_23575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (20))){
var inst_23387 = (state_23486[(7)]);
var inst_23397 = cljs.core.first.call(null,inst_23387);
var inst_23398 = cljs.core.nth.call(null,inst_23397,(0),null);
var inst_23399 = cljs.core.nth.call(null,inst_23397,(1),null);
var state_23486__$1 = (function (){var statearr_23489 = state_23486;
(statearr_23489[(8)] = inst_23398);

return statearr_23489;
})();
if(cljs.core.truth_(inst_23399)){
var statearr_23490_23576 = state_23486__$1;
(statearr_23490_23576[(1)] = (22));

} else {
var statearr_23491_23577 = state_23486__$1;
(statearr_23491_23577[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (27))){
var inst_23429 = (state_23486[(9)]);
var inst_23434 = (state_23486[(10)]);
var inst_23358 = (state_23486[(11)]);
var inst_23427 = (state_23486[(12)]);
var inst_23434__$1 = cljs.core._nth.call(null,inst_23427,inst_23429);
var inst_23435 = cljs.core.async.put_BANG_.call(null,inst_23434__$1,inst_23358,done);
var state_23486__$1 = (function (){var statearr_23492 = state_23486;
(statearr_23492[(10)] = inst_23434__$1);

return statearr_23492;
})();
if(cljs.core.truth_(inst_23435)){
var statearr_23493_23578 = state_23486__$1;
(statearr_23493_23578[(1)] = (30));

} else {
var statearr_23494_23579 = state_23486__$1;
(statearr_23494_23579[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (1))){
var state_23486__$1 = state_23486;
var statearr_23495_23580 = state_23486__$1;
(statearr_23495_23580[(2)] = null);

(statearr_23495_23580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (24))){
var inst_23387 = (state_23486[(7)]);
var inst_23404 = (state_23486[(2)]);
var inst_23405 = cljs.core.next.call(null,inst_23387);
var inst_23367 = inst_23405;
var inst_23368 = null;
var inst_23369 = (0);
var inst_23370 = (0);
var state_23486__$1 = (function (){var statearr_23496 = state_23486;
(statearr_23496[(13)] = inst_23367);

(statearr_23496[(14)] = inst_23369);

(statearr_23496[(15)] = inst_23368);

(statearr_23496[(16)] = inst_23404);

(statearr_23496[(17)] = inst_23370);

return statearr_23496;
})();
var statearr_23497_23581 = state_23486__$1;
(statearr_23497_23581[(2)] = null);

(statearr_23497_23581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (39))){
var state_23486__$1 = state_23486;
var statearr_23501_23582 = state_23486__$1;
(statearr_23501_23582[(2)] = null);

(statearr_23501_23582[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (4))){
var inst_23358 = (state_23486[(11)]);
var inst_23358__$1 = (state_23486[(2)]);
var inst_23359 = (inst_23358__$1 == null);
var state_23486__$1 = (function (){var statearr_23502 = state_23486;
(statearr_23502[(11)] = inst_23358__$1);

return statearr_23502;
})();
if(cljs.core.truth_(inst_23359)){
var statearr_23503_23583 = state_23486__$1;
(statearr_23503_23583[(1)] = (5));

} else {
var statearr_23504_23584 = state_23486__$1;
(statearr_23504_23584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (15))){
var inst_23367 = (state_23486[(13)]);
var inst_23369 = (state_23486[(14)]);
var inst_23368 = (state_23486[(15)]);
var inst_23370 = (state_23486[(17)]);
var inst_23383 = (state_23486[(2)]);
var inst_23384 = (inst_23370 + (1));
var tmp23498 = inst_23367;
var tmp23499 = inst_23369;
var tmp23500 = inst_23368;
var inst_23367__$1 = tmp23498;
var inst_23368__$1 = tmp23500;
var inst_23369__$1 = tmp23499;
var inst_23370__$1 = inst_23384;
var state_23486__$1 = (function (){var statearr_23505 = state_23486;
(statearr_23505[(13)] = inst_23367__$1);

(statearr_23505[(14)] = inst_23369__$1);

(statearr_23505[(15)] = inst_23368__$1);

(statearr_23505[(18)] = inst_23383);

(statearr_23505[(17)] = inst_23370__$1);

return statearr_23505;
})();
var statearr_23506_23585 = state_23486__$1;
(statearr_23506_23585[(2)] = null);

(statearr_23506_23585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (21))){
var inst_23408 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23510_23586 = state_23486__$1;
(statearr_23510_23586[(2)] = inst_23408);

(statearr_23510_23586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (31))){
var inst_23434 = (state_23486[(10)]);
var inst_23438 = done.call(null,null);
var inst_23439 = cljs.core.async.untap_STAR_.call(null,m,inst_23434);
var state_23486__$1 = (function (){var statearr_23511 = state_23486;
(statearr_23511[(19)] = inst_23438);

return statearr_23511;
})();
var statearr_23512_23587 = state_23486__$1;
(statearr_23512_23587[(2)] = inst_23439);

(statearr_23512_23587[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (32))){
var inst_23426 = (state_23486[(20)]);
var inst_23429 = (state_23486[(9)]);
var inst_23428 = (state_23486[(21)]);
var inst_23427 = (state_23486[(12)]);
var inst_23441 = (state_23486[(2)]);
var inst_23442 = (inst_23429 + (1));
var tmp23507 = inst_23426;
var tmp23508 = inst_23428;
var tmp23509 = inst_23427;
var inst_23426__$1 = tmp23507;
var inst_23427__$1 = tmp23509;
var inst_23428__$1 = tmp23508;
var inst_23429__$1 = inst_23442;
var state_23486__$1 = (function (){var statearr_23513 = state_23486;
(statearr_23513[(20)] = inst_23426__$1);

(statearr_23513[(9)] = inst_23429__$1);

(statearr_23513[(21)] = inst_23428__$1);

(statearr_23513[(12)] = inst_23427__$1);

(statearr_23513[(22)] = inst_23441);

return statearr_23513;
})();
var statearr_23514_23588 = state_23486__$1;
(statearr_23514_23588[(2)] = null);

(statearr_23514_23588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (40))){
var inst_23454 = (state_23486[(23)]);
var inst_23458 = done.call(null,null);
var inst_23459 = cljs.core.async.untap_STAR_.call(null,m,inst_23454);
var state_23486__$1 = (function (){var statearr_23515 = state_23486;
(statearr_23515[(24)] = inst_23458);

return statearr_23515;
})();
var statearr_23516_23589 = state_23486__$1;
(statearr_23516_23589[(2)] = inst_23459);

(statearr_23516_23589[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (33))){
var inst_23445 = (state_23486[(25)]);
var inst_23447 = cljs.core.chunked_seq_QMARK_.call(null,inst_23445);
var state_23486__$1 = state_23486;
if(inst_23447){
var statearr_23517_23590 = state_23486__$1;
(statearr_23517_23590[(1)] = (36));

} else {
var statearr_23518_23591 = state_23486__$1;
(statearr_23518_23591[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (13))){
var inst_23377 = (state_23486[(26)]);
var inst_23380 = cljs.core.async.close_BANG_.call(null,inst_23377);
var state_23486__$1 = state_23486;
var statearr_23519_23592 = state_23486__$1;
(statearr_23519_23592[(2)] = inst_23380);

(statearr_23519_23592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (22))){
var inst_23398 = (state_23486[(8)]);
var inst_23401 = cljs.core.async.close_BANG_.call(null,inst_23398);
var state_23486__$1 = state_23486;
var statearr_23520_23593 = state_23486__$1;
(statearr_23520_23593[(2)] = inst_23401);

(statearr_23520_23593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (36))){
var inst_23445 = (state_23486[(25)]);
var inst_23449 = cljs.core.chunk_first.call(null,inst_23445);
var inst_23450 = cljs.core.chunk_rest.call(null,inst_23445);
var inst_23451 = cljs.core.count.call(null,inst_23449);
var inst_23426 = inst_23450;
var inst_23427 = inst_23449;
var inst_23428 = inst_23451;
var inst_23429 = (0);
var state_23486__$1 = (function (){var statearr_23521 = state_23486;
(statearr_23521[(20)] = inst_23426);

(statearr_23521[(9)] = inst_23429);

(statearr_23521[(21)] = inst_23428);

(statearr_23521[(12)] = inst_23427);

return statearr_23521;
})();
var statearr_23522_23594 = state_23486__$1;
(statearr_23522_23594[(2)] = null);

(statearr_23522_23594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (41))){
var inst_23445 = (state_23486[(25)]);
var inst_23461 = (state_23486[(2)]);
var inst_23462 = cljs.core.next.call(null,inst_23445);
var inst_23426 = inst_23462;
var inst_23427 = null;
var inst_23428 = (0);
var inst_23429 = (0);
var state_23486__$1 = (function (){var statearr_23523 = state_23486;
(statearr_23523[(20)] = inst_23426);

(statearr_23523[(9)] = inst_23429);

(statearr_23523[(27)] = inst_23461);

(statearr_23523[(21)] = inst_23428);

(statearr_23523[(12)] = inst_23427);

return statearr_23523;
})();
var statearr_23524_23595 = state_23486__$1;
(statearr_23524_23595[(2)] = null);

(statearr_23524_23595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (43))){
var state_23486__$1 = state_23486;
var statearr_23525_23596 = state_23486__$1;
(statearr_23525_23596[(2)] = null);

(statearr_23525_23596[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (29))){
var inst_23470 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23526_23597 = state_23486__$1;
(statearr_23526_23597[(2)] = inst_23470);

(statearr_23526_23597[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (44))){
var inst_23479 = (state_23486[(2)]);
var state_23486__$1 = (function (){var statearr_23527 = state_23486;
(statearr_23527[(28)] = inst_23479);

return statearr_23527;
})();
var statearr_23528_23598 = state_23486__$1;
(statearr_23528_23598[(2)] = null);

(statearr_23528_23598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (6))){
var inst_23418 = (state_23486[(29)]);
var inst_23417 = cljs.core.deref.call(null,cs);
var inst_23418__$1 = cljs.core.keys.call(null,inst_23417);
var inst_23419 = cljs.core.count.call(null,inst_23418__$1);
var inst_23420 = cljs.core.reset_BANG_.call(null,dctr,inst_23419);
var inst_23425 = cljs.core.seq.call(null,inst_23418__$1);
var inst_23426 = inst_23425;
var inst_23427 = null;
var inst_23428 = (0);
var inst_23429 = (0);
var state_23486__$1 = (function (){var statearr_23529 = state_23486;
(statearr_23529[(20)] = inst_23426);

(statearr_23529[(9)] = inst_23429);

(statearr_23529[(30)] = inst_23420);

(statearr_23529[(29)] = inst_23418__$1);

(statearr_23529[(21)] = inst_23428);

(statearr_23529[(12)] = inst_23427);

return statearr_23529;
})();
var statearr_23530_23599 = state_23486__$1;
(statearr_23530_23599[(2)] = null);

(statearr_23530_23599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (28))){
var inst_23426 = (state_23486[(20)]);
var inst_23445 = (state_23486[(25)]);
var inst_23445__$1 = cljs.core.seq.call(null,inst_23426);
var state_23486__$1 = (function (){var statearr_23531 = state_23486;
(statearr_23531[(25)] = inst_23445__$1);

return statearr_23531;
})();
if(inst_23445__$1){
var statearr_23532_23600 = state_23486__$1;
(statearr_23532_23600[(1)] = (33));

} else {
var statearr_23533_23601 = state_23486__$1;
(statearr_23533_23601[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (25))){
var inst_23429 = (state_23486[(9)]);
var inst_23428 = (state_23486[(21)]);
var inst_23431 = (inst_23429 < inst_23428);
var inst_23432 = inst_23431;
var state_23486__$1 = state_23486;
if(cljs.core.truth_(inst_23432)){
var statearr_23534_23602 = state_23486__$1;
(statearr_23534_23602[(1)] = (27));

} else {
var statearr_23535_23603 = state_23486__$1;
(statearr_23535_23603[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (34))){
var state_23486__$1 = state_23486;
var statearr_23536_23604 = state_23486__$1;
(statearr_23536_23604[(2)] = null);

(statearr_23536_23604[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (17))){
var state_23486__$1 = state_23486;
var statearr_23537_23605 = state_23486__$1;
(statearr_23537_23605[(2)] = null);

(statearr_23537_23605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (3))){
var inst_23484 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23486__$1,inst_23484);
} else {
if((state_val_23487 === (12))){
var inst_23413 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23538_23606 = state_23486__$1;
(statearr_23538_23606[(2)] = inst_23413);

(statearr_23538_23606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (2))){
var state_23486__$1 = state_23486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23486__$1,(4),ch);
} else {
if((state_val_23487 === (23))){
var state_23486__$1 = state_23486;
var statearr_23539_23607 = state_23486__$1;
(statearr_23539_23607[(2)] = null);

(statearr_23539_23607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (35))){
var inst_23468 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23540_23608 = state_23486__$1;
(statearr_23540_23608[(2)] = inst_23468);

(statearr_23540_23608[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (19))){
var inst_23387 = (state_23486[(7)]);
var inst_23391 = cljs.core.chunk_first.call(null,inst_23387);
var inst_23392 = cljs.core.chunk_rest.call(null,inst_23387);
var inst_23393 = cljs.core.count.call(null,inst_23391);
var inst_23367 = inst_23392;
var inst_23368 = inst_23391;
var inst_23369 = inst_23393;
var inst_23370 = (0);
var state_23486__$1 = (function (){var statearr_23541 = state_23486;
(statearr_23541[(13)] = inst_23367);

(statearr_23541[(14)] = inst_23369);

(statearr_23541[(15)] = inst_23368);

(statearr_23541[(17)] = inst_23370);

return statearr_23541;
})();
var statearr_23542_23609 = state_23486__$1;
(statearr_23542_23609[(2)] = null);

(statearr_23542_23609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (11))){
var inst_23367 = (state_23486[(13)]);
var inst_23387 = (state_23486[(7)]);
var inst_23387__$1 = cljs.core.seq.call(null,inst_23367);
var state_23486__$1 = (function (){var statearr_23543 = state_23486;
(statearr_23543[(7)] = inst_23387__$1);

return statearr_23543;
})();
if(inst_23387__$1){
var statearr_23544_23610 = state_23486__$1;
(statearr_23544_23610[(1)] = (16));

} else {
var statearr_23545_23611 = state_23486__$1;
(statearr_23545_23611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (9))){
var inst_23415 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23546_23612 = state_23486__$1;
(statearr_23546_23612[(2)] = inst_23415);

(statearr_23546_23612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (5))){
var inst_23365 = cljs.core.deref.call(null,cs);
var inst_23366 = cljs.core.seq.call(null,inst_23365);
var inst_23367 = inst_23366;
var inst_23368 = null;
var inst_23369 = (0);
var inst_23370 = (0);
var state_23486__$1 = (function (){var statearr_23547 = state_23486;
(statearr_23547[(13)] = inst_23367);

(statearr_23547[(14)] = inst_23369);

(statearr_23547[(15)] = inst_23368);

(statearr_23547[(17)] = inst_23370);

return statearr_23547;
})();
var statearr_23548_23613 = state_23486__$1;
(statearr_23548_23613[(2)] = null);

(statearr_23548_23613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (14))){
var state_23486__$1 = state_23486;
var statearr_23549_23614 = state_23486__$1;
(statearr_23549_23614[(2)] = null);

(statearr_23549_23614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (45))){
var inst_23476 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23550_23615 = state_23486__$1;
(statearr_23550_23615[(2)] = inst_23476);

(statearr_23550_23615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (26))){
var inst_23418 = (state_23486[(29)]);
var inst_23472 = (state_23486[(2)]);
var inst_23473 = cljs.core.seq.call(null,inst_23418);
var state_23486__$1 = (function (){var statearr_23551 = state_23486;
(statearr_23551[(31)] = inst_23472);

return statearr_23551;
})();
if(inst_23473){
var statearr_23552_23616 = state_23486__$1;
(statearr_23552_23616[(1)] = (42));

} else {
var statearr_23553_23617 = state_23486__$1;
(statearr_23553_23617[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (16))){
var inst_23387 = (state_23486[(7)]);
var inst_23389 = cljs.core.chunked_seq_QMARK_.call(null,inst_23387);
var state_23486__$1 = state_23486;
if(inst_23389){
var statearr_23554_23618 = state_23486__$1;
(statearr_23554_23618[(1)] = (19));

} else {
var statearr_23555_23619 = state_23486__$1;
(statearr_23555_23619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (38))){
var inst_23465 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23556_23620 = state_23486__$1;
(statearr_23556_23620[(2)] = inst_23465);

(statearr_23556_23620[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (30))){
var state_23486__$1 = state_23486;
var statearr_23557_23621 = state_23486__$1;
(statearr_23557_23621[(2)] = null);

(statearr_23557_23621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (10))){
var inst_23368 = (state_23486[(15)]);
var inst_23370 = (state_23486[(17)]);
var inst_23376 = cljs.core._nth.call(null,inst_23368,inst_23370);
var inst_23377 = cljs.core.nth.call(null,inst_23376,(0),null);
var inst_23378 = cljs.core.nth.call(null,inst_23376,(1),null);
var state_23486__$1 = (function (){var statearr_23558 = state_23486;
(statearr_23558[(26)] = inst_23377);

return statearr_23558;
})();
if(cljs.core.truth_(inst_23378)){
var statearr_23559_23622 = state_23486__$1;
(statearr_23559_23622[(1)] = (13));

} else {
var statearr_23560_23623 = state_23486__$1;
(statearr_23560_23623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (18))){
var inst_23411 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23561_23624 = state_23486__$1;
(statearr_23561_23624[(2)] = inst_23411);

(statearr_23561_23624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (42))){
var state_23486__$1 = state_23486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23486__$1,(45),dchan);
} else {
if((state_val_23487 === (37))){
var inst_23454 = (state_23486[(23)]);
var inst_23358 = (state_23486[(11)]);
var inst_23445 = (state_23486[(25)]);
var inst_23454__$1 = cljs.core.first.call(null,inst_23445);
var inst_23455 = cljs.core.async.put_BANG_.call(null,inst_23454__$1,inst_23358,done);
var state_23486__$1 = (function (){var statearr_23562 = state_23486;
(statearr_23562[(23)] = inst_23454__$1);

return statearr_23562;
})();
if(cljs.core.truth_(inst_23455)){
var statearr_23563_23625 = state_23486__$1;
(statearr_23563_23625[(1)] = (39));

} else {
var statearr_23564_23626 = state_23486__$1;
(statearr_23564_23626[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (8))){
var inst_23369 = (state_23486[(14)]);
var inst_23370 = (state_23486[(17)]);
var inst_23372 = (inst_23370 < inst_23369);
var inst_23373 = inst_23372;
var state_23486__$1 = state_23486;
if(cljs.core.truth_(inst_23373)){
var statearr_23565_23627 = state_23486__$1;
(statearr_23565_23627[(1)] = (10));

} else {
var statearr_23566_23628 = state_23486__$1;
(statearr_23566_23628[(1)] = (11));

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
});})(c__22304__auto___23574,cs,m,dchan,dctr,done))
;
return ((function (switch__22192__auto__,c__22304__auto___23574,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22193__auto__ = null;
var cljs$core$async$mult_$_state_machine__22193__auto____0 = (function (){
var statearr_23570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23570[(0)] = cljs$core$async$mult_$_state_machine__22193__auto__);

(statearr_23570[(1)] = (1));

return statearr_23570;
});
var cljs$core$async$mult_$_state_machine__22193__auto____1 = (function (state_23486){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_23486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e23571){if((e23571 instanceof Object)){
var ex__22196__auto__ = e23571;
var statearr_23572_23629 = state_23486;
(statearr_23572_23629[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23630 = state_23486;
state_23486 = G__23630;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22193__auto__ = function(state_23486){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22193__auto____1.call(this,state_23486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22193__auto____0;
cljs$core$async$mult_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22193__auto____1;
return cljs$core$async$mult_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___23574,cs,m,dchan,dctr,done))
})();
var state__22306__auto__ = (function (){var statearr_23573 = f__22305__auto__.call(null);
(statearr_23573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___23574);

return statearr_23573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___23574,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23631 = [];
var len__17883__auto___23634 = arguments.length;
var i__17884__auto___23635 = (0);
while(true){
if((i__17884__auto___23635 < len__17883__auto___23634)){
args23631.push((arguments[i__17884__auto___23635]));

var G__23636 = (i__17884__auto___23635 + (1));
i__17884__auto___23635 = G__23636;
continue;
} else {
}
break;
}

var G__23633 = args23631.length;
switch (G__23633) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23631.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17480__auto__ = (((m == null))?null:m);
var m__17481__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,m,ch);
} else {
var m__17481__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17480__auto__ = (((m == null))?null:m);
var m__17481__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,m,ch);
} else {
var m__17481__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17480__auto__ = (((m == null))?null:m);
var m__17481__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,m);
} else {
var m__17481__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17480__auto__ = (((m == null))?null:m);
var m__17481__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,m,state_map);
} else {
var m__17481__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17480__auto__ = (((m == null))?null:m);
var m__17481__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,m,mode);
} else {
var m__17481__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17890__auto__ = [];
var len__17883__auto___23648 = arguments.length;
var i__17884__auto___23649 = (0);
while(true){
if((i__17884__auto___23649 < len__17883__auto___23648)){
args__17890__auto__.push((arguments[i__17884__auto___23649]));

var G__23650 = (i__17884__auto___23649 + (1));
i__17884__auto___23649 = G__23650;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((3) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17891__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23642){
var map__23643 = p__23642;
var map__23643__$1 = ((((!((map__23643 == null)))?((((map__23643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23643):map__23643);
var opts = map__23643__$1;
var statearr_23645_23651 = state;
(statearr_23645_23651[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23643,map__23643__$1,opts){
return (function (val){
var statearr_23646_23652 = state;
(statearr_23646_23652[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23643,map__23643__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23647_23653 = state;
(statearr_23647_23653[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23638){
var G__23639 = cljs.core.first.call(null,seq23638);
var seq23638__$1 = cljs.core.next.call(null,seq23638);
var G__23640 = cljs.core.first.call(null,seq23638__$1);
var seq23638__$2 = cljs.core.next.call(null,seq23638__$1);
var G__23641 = cljs.core.first.call(null,seq23638__$2);
var seq23638__$3 = cljs.core.next.call(null,seq23638__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23639,G__23640,G__23641,seq23638__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23817 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23818){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23818 = meta23818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23819,meta23818__$1){
var self__ = this;
var _23819__$1 = this;
return (new cljs.core.async.t_cljs$core$async23817(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23818__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23819){
var self__ = this;
var _23819__$1 = this;
return self__.meta23818;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23817.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23817.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23818","meta23818",-818848607,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23817";

cljs.core.async.t_cljs$core$async23817.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"cljs.core.async/t_cljs$core$async23817");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23817 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23817(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23818){
return (new cljs.core.async.t_cljs$core$async23817(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23818));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23817(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22304__auto___23980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___23980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___23980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23917){
var state_val_23918 = (state_23917[(1)]);
if((state_val_23918 === (7))){
var inst_23835 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23919_23981 = state_23917__$1;
(statearr_23919_23981[(2)] = inst_23835);

(statearr_23919_23981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (20))){
var inst_23847 = (state_23917[(7)]);
var state_23917__$1 = state_23917;
var statearr_23920_23982 = state_23917__$1;
(statearr_23920_23982[(2)] = inst_23847);

(statearr_23920_23982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (27))){
var state_23917__$1 = state_23917;
var statearr_23921_23983 = state_23917__$1;
(statearr_23921_23983[(2)] = null);

(statearr_23921_23983[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (1))){
var inst_23823 = (state_23917[(8)]);
var inst_23823__$1 = calc_state.call(null);
var inst_23825 = (inst_23823__$1 == null);
var inst_23826 = cljs.core.not.call(null,inst_23825);
var state_23917__$1 = (function (){var statearr_23922 = state_23917;
(statearr_23922[(8)] = inst_23823__$1);

return statearr_23922;
})();
if(inst_23826){
var statearr_23923_23984 = state_23917__$1;
(statearr_23923_23984[(1)] = (2));

} else {
var statearr_23924_23985 = state_23917__$1;
(statearr_23924_23985[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (24))){
var inst_23891 = (state_23917[(9)]);
var inst_23877 = (state_23917[(10)]);
var inst_23870 = (state_23917[(11)]);
var inst_23891__$1 = inst_23870.call(null,inst_23877);
var state_23917__$1 = (function (){var statearr_23925 = state_23917;
(statearr_23925[(9)] = inst_23891__$1);

return statearr_23925;
})();
if(cljs.core.truth_(inst_23891__$1)){
var statearr_23926_23986 = state_23917__$1;
(statearr_23926_23986[(1)] = (29));

} else {
var statearr_23927_23987 = state_23917__$1;
(statearr_23927_23987[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (4))){
var inst_23838 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23838)){
var statearr_23928_23988 = state_23917__$1;
(statearr_23928_23988[(1)] = (8));

} else {
var statearr_23929_23989 = state_23917__$1;
(statearr_23929_23989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (15))){
var inst_23864 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23864)){
var statearr_23930_23990 = state_23917__$1;
(statearr_23930_23990[(1)] = (19));

} else {
var statearr_23931_23991 = state_23917__$1;
(statearr_23931_23991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (21))){
var inst_23869 = (state_23917[(12)]);
var inst_23869__$1 = (state_23917[(2)]);
var inst_23870 = cljs.core.get.call(null,inst_23869__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23871 = cljs.core.get.call(null,inst_23869__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23872 = cljs.core.get.call(null,inst_23869__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23917__$1 = (function (){var statearr_23932 = state_23917;
(statearr_23932[(13)] = inst_23871);

(statearr_23932[(12)] = inst_23869__$1);

(statearr_23932[(11)] = inst_23870);

return statearr_23932;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23917__$1,(22),inst_23872);
} else {
if((state_val_23918 === (31))){
var inst_23899 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23899)){
var statearr_23933_23992 = state_23917__$1;
(statearr_23933_23992[(1)] = (32));

} else {
var statearr_23934_23993 = state_23917__$1;
(statearr_23934_23993[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (32))){
var inst_23876 = (state_23917[(14)]);
var state_23917__$1 = state_23917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23917__$1,(35),out,inst_23876);
} else {
if((state_val_23918 === (33))){
var inst_23869 = (state_23917[(12)]);
var inst_23847 = inst_23869;
var state_23917__$1 = (function (){var statearr_23935 = state_23917;
(statearr_23935[(7)] = inst_23847);

return statearr_23935;
})();
var statearr_23936_23994 = state_23917__$1;
(statearr_23936_23994[(2)] = null);

(statearr_23936_23994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (13))){
var inst_23847 = (state_23917[(7)]);
var inst_23854 = inst_23847.cljs$lang$protocol_mask$partition0$;
var inst_23855 = (inst_23854 & (64));
var inst_23856 = inst_23847.cljs$core$ISeq$;
var inst_23857 = (inst_23855) || (inst_23856);
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23857)){
var statearr_23937_23995 = state_23917__$1;
(statearr_23937_23995[(1)] = (16));

} else {
var statearr_23938_23996 = state_23917__$1;
(statearr_23938_23996[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (22))){
var inst_23877 = (state_23917[(10)]);
var inst_23876 = (state_23917[(14)]);
var inst_23875 = (state_23917[(2)]);
var inst_23876__$1 = cljs.core.nth.call(null,inst_23875,(0),null);
var inst_23877__$1 = cljs.core.nth.call(null,inst_23875,(1),null);
var inst_23878 = (inst_23876__$1 == null);
var inst_23879 = cljs.core._EQ_.call(null,inst_23877__$1,change);
var inst_23880 = (inst_23878) || (inst_23879);
var state_23917__$1 = (function (){var statearr_23939 = state_23917;
(statearr_23939[(10)] = inst_23877__$1);

(statearr_23939[(14)] = inst_23876__$1);

return statearr_23939;
})();
if(cljs.core.truth_(inst_23880)){
var statearr_23940_23997 = state_23917__$1;
(statearr_23940_23997[(1)] = (23));

} else {
var statearr_23941_23998 = state_23917__$1;
(statearr_23941_23998[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (36))){
var inst_23869 = (state_23917[(12)]);
var inst_23847 = inst_23869;
var state_23917__$1 = (function (){var statearr_23942 = state_23917;
(statearr_23942[(7)] = inst_23847);

return statearr_23942;
})();
var statearr_23943_23999 = state_23917__$1;
(statearr_23943_23999[(2)] = null);

(statearr_23943_23999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (29))){
var inst_23891 = (state_23917[(9)]);
var state_23917__$1 = state_23917;
var statearr_23944_24000 = state_23917__$1;
(statearr_23944_24000[(2)] = inst_23891);

(statearr_23944_24000[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (6))){
var state_23917__$1 = state_23917;
var statearr_23945_24001 = state_23917__$1;
(statearr_23945_24001[(2)] = false);

(statearr_23945_24001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (28))){
var inst_23887 = (state_23917[(2)]);
var inst_23888 = calc_state.call(null);
var inst_23847 = inst_23888;
var state_23917__$1 = (function (){var statearr_23946 = state_23917;
(statearr_23946[(15)] = inst_23887);

(statearr_23946[(7)] = inst_23847);

return statearr_23946;
})();
var statearr_23947_24002 = state_23917__$1;
(statearr_23947_24002[(2)] = null);

(statearr_23947_24002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (25))){
var inst_23913 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23948_24003 = state_23917__$1;
(statearr_23948_24003[(2)] = inst_23913);

(statearr_23948_24003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (34))){
var inst_23911 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23949_24004 = state_23917__$1;
(statearr_23949_24004[(2)] = inst_23911);

(statearr_23949_24004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (17))){
var state_23917__$1 = state_23917;
var statearr_23950_24005 = state_23917__$1;
(statearr_23950_24005[(2)] = false);

(statearr_23950_24005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (3))){
var state_23917__$1 = state_23917;
var statearr_23951_24006 = state_23917__$1;
(statearr_23951_24006[(2)] = false);

(statearr_23951_24006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (12))){
var inst_23915 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23917__$1,inst_23915);
} else {
if((state_val_23918 === (2))){
var inst_23823 = (state_23917[(8)]);
var inst_23828 = inst_23823.cljs$lang$protocol_mask$partition0$;
var inst_23829 = (inst_23828 & (64));
var inst_23830 = inst_23823.cljs$core$ISeq$;
var inst_23831 = (inst_23829) || (inst_23830);
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23831)){
var statearr_23952_24007 = state_23917__$1;
(statearr_23952_24007[(1)] = (5));

} else {
var statearr_23953_24008 = state_23917__$1;
(statearr_23953_24008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (23))){
var inst_23876 = (state_23917[(14)]);
var inst_23882 = (inst_23876 == null);
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23882)){
var statearr_23954_24009 = state_23917__$1;
(statearr_23954_24009[(1)] = (26));

} else {
var statearr_23955_24010 = state_23917__$1;
(statearr_23955_24010[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (35))){
var inst_23902 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23902)){
var statearr_23956_24011 = state_23917__$1;
(statearr_23956_24011[(1)] = (36));

} else {
var statearr_23957_24012 = state_23917__$1;
(statearr_23957_24012[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (19))){
var inst_23847 = (state_23917[(7)]);
var inst_23866 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23847);
var state_23917__$1 = state_23917;
var statearr_23958_24013 = state_23917__$1;
(statearr_23958_24013[(2)] = inst_23866);

(statearr_23958_24013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (11))){
var inst_23847 = (state_23917[(7)]);
var inst_23851 = (inst_23847 == null);
var inst_23852 = cljs.core.not.call(null,inst_23851);
var state_23917__$1 = state_23917;
if(inst_23852){
var statearr_23959_24014 = state_23917__$1;
(statearr_23959_24014[(1)] = (13));

} else {
var statearr_23960_24015 = state_23917__$1;
(statearr_23960_24015[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (9))){
var inst_23823 = (state_23917[(8)]);
var state_23917__$1 = state_23917;
var statearr_23961_24016 = state_23917__$1;
(statearr_23961_24016[(2)] = inst_23823);

(statearr_23961_24016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (5))){
var state_23917__$1 = state_23917;
var statearr_23962_24017 = state_23917__$1;
(statearr_23962_24017[(2)] = true);

(statearr_23962_24017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (14))){
var state_23917__$1 = state_23917;
var statearr_23963_24018 = state_23917__$1;
(statearr_23963_24018[(2)] = false);

(statearr_23963_24018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (26))){
var inst_23877 = (state_23917[(10)]);
var inst_23884 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23877);
var state_23917__$1 = state_23917;
var statearr_23964_24019 = state_23917__$1;
(statearr_23964_24019[(2)] = inst_23884);

(statearr_23964_24019[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (16))){
var state_23917__$1 = state_23917;
var statearr_23965_24020 = state_23917__$1;
(statearr_23965_24020[(2)] = true);

(statearr_23965_24020[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (38))){
var inst_23907 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23966_24021 = state_23917__$1;
(statearr_23966_24021[(2)] = inst_23907);

(statearr_23966_24021[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (30))){
var inst_23871 = (state_23917[(13)]);
var inst_23877 = (state_23917[(10)]);
var inst_23870 = (state_23917[(11)]);
var inst_23894 = cljs.core.empty_QMARK_.call(null,inst_23870);
var inst_23895 = inst_23871.call(null,inst_23877);
var inst_23896 = cljs.core.not.call(null,inst_23895);
var inst_23897 = (inst_23894) && (inst_23896);
var state_23917__$1 = state_23917;
var statearr_23967_24022 = state_23917__$1;
(statearr_23967_24022[(2)] = inst_23897);

(statearr_23967_24022[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (10))){
var inst_23823 = (state_23917[(8)]);
var inst_23843 = (state_23917[(2)]);
var inst_23844 = cljs.core.get.call(null,inst_23843,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23845 = cljs.core.get.call(null,inst_23843,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23846 = cljs.core.get.call(null,inst_23843,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23847 = inst_23823;
var state_23917__$1 = (function (){var statearr_23968 = state_23917;
(statearr_23968[(16)] = inst_23845);

(statearr_23968[(7)] = inst_23847);

(statearr_23968[(17)] = inst_23846);

(statearr_23968[(18)] = inst_23844);

return statearr_23968;
})();
var statearr_23969_24023 = state_23917__$1;
(statearr_23969_24023[(2)] = null);

(statearr_23969_24023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (18))){
var inst_23861 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23970_24024 = state_23917__$1;
(statearr_23970_24024[(2)] = inst_23861);

(statearr_23970_24024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (37))){
var state_23917__$1 = state_23917;
var statearr_23971_24025 = state_23917__$1;
(statearr_23971_24025[(2)] = null);

(statearr_23971_24025[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (8))){
var inst_23823 = (state_23917[(8)]);
var inst_23840 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23823);
var state_23917__$1 = state_23917;
var statearr_23972_24026 = state_23917__$1;
(statearr_23972_24026[(2)] = inst_23840);

(statearr_23972_24026[(1)] = (10));


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
});})(c__22304__auto___23980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22192__auto__,c__22304__auto___23980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22193__auto__ = null;
var cljs$core$async$mix_$_state_machine__22193__auto____0 = (function (){
var statearr_23976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23976[(0)] = cljs$core$async$mix_$_state_machine__22193__auto__);

(statearr_23976[(1)] = (1));

return statearr_23976;
});
var cljs$core$async$mix_$_state_machine__22193__auto____1 = (function (state_23917){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_23917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e23977){if((e23977 instanceof Object)){
var ex__22196__auto__ = e23977;
var statearr_23978_24027 = state_23917;
(statearr_23978_24027[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24028 = state_23917;
state_23917 = G__24028;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22193__auto__ = function(state_23917){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22193__auto____1.call(this,state_23917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22193__auto____0;
cljs$core$async$mix_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22193__auto____1;
return cljs$core$async$mix_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___23980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22306__auto__ = (function (){var statearr_23979 = f__22305__auto__.call(null);
(statearr_23979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___23980);

return statearr_23979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___23980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17480__auto__ = (((p == null))?null:p);
var m__17481__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17481__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17480__auto__ = (((p == null))?null:p);
var m__17481__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,p,v,ch);
} else {
var m__17481__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24029 = [];
var len__17883__auto___24032 = arguments.length;
var i__17884__auto___24033 = (0);
while(true){
if((i__17884__auto___24033 < len__17883__auto___24032)){
args24029.push((arguments[i__17884__auto___24033]));

var G__24034 = (i__17884__auto___24033 + (1));
i__17884__auto___24033 = G__24034;
continue;
} else {
}
break;
}

var G__24031 = args24029.length;
switch (G__24031) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24029.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17480__auto__ = (((p == null))?null:p);
var m__17481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,p);
} else {
var m__17481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17480__auto__ = (((p == null))?null:p);
var m__17481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,p,v);
} else {
var m__17481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24037 = [];
var len__17883__auto___24162 = arguments.length;
var i__17884__auto___24163 = (0);
while(true){
if((i__17884__auto___24163 < len__17883__auto___24162)){
args24037.push((arguments[i__17884__auto___24163]));

var G__24164 = (i__17884__auto___24163 + (1));
i__17884__auto___24163 = G__24164;
continue;
} else {
}
break;
}

var G__24039 = args24037.length;
switch (G__24039) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24037.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16825__auto__,mults){
return (function (p1__24036_SHARP_){
if(cljs.core.truth_(p1__24036_SHARP_.call(null,topic))){
return p1__24036_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24036_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16825__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24040 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24041){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24041 = meta24041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24042,meta24041__$1){
var self__ = this;
var _24042__$1 = this;
return (new cljs.core.async.t_cljs$core$async24040(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24041__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24042){
var self__ = this;
var _24042__$1 = this;
return self__.meta24041;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24040.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24041","meta24041",-868830332,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24040";

cljs.core.async.t_cljs$core$async24040.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"cljs.core.async/t_cljs$core$async24040");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24040 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24040(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24041){
return (new cljs.core.async.t_cljs$core$async24040(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24041));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24040(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22304__auto___24166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___24166,mults,ensure_mult,p){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___24166,mults,ensure_mult,p){
return (function (state_24114){
var state_val_24115 = (state_24114[(1)]);
if((state_val_24115 === (7))){
var inst_24110 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
var statearr_24116_24167 = state_24114__$1;
(statearr_24116_24167[(2)] = inst_24110);

(statearr_24116_24167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (20))){
var state_24114__$1 = state_24114;
var statearr_24117_24168 = state_24114__$1;
(statearr_24117_24168[(2)] = null);

(statearr_24117_24168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (1))){
var state_24114__$1 = state_24114;
var statearr_24118_24169 = state_24114__$1;
(statearr_24118_24169[(2)] = null);

(statearr_24118_24169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (24))){
var inst_24093 = (state_24114[(7)]);
var inst_24102 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24093);
var state_24114__$1 = state_24114;
var statearr_24119_24170 = state_24114__$1;
(statearr_24119_24170[(2)] = inst_24102);

(statearr_24119_24170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (4))){
var inst_24045 = (state_24114[(8)]);
var inst_24045__$1 = (state_24114[(2)]);
var inst_24046 = (inst_24045__$1 == null);
var state_24114__$1 = (function (){var statearr_24120 = state_24114;
(statearr_24120[(8)] = inst_24045__$1);

return statearr_24120;
})();
if(cljs.core.truth_(inst_24046)){
var statearr_24121_24171 = state_24114__$1;
(statearr_24121_24171[(1)] = (5));

} else {
var statearr_24122_24172 = state_24114__$1;
(statearr_24122_24172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (15))){
var inst_24087 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
var statearr_24123_24173 = state_24114__$1;
(statearr_24123_24173[(2)] = inst_24087);

(statearr_24123_24173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (21))){
var inst_24107 = (state_24114[(2)]);
var state_24114__$1 = (function (){var statearr_24124 = state_24114;
(statearr_24124[(9)] = inst_24107);

return statearr_24124;
})();
var statearr_24125_24174 = state_24114__$1;
(statearr_24125_24174[(2)] = null);

(statearr_24125_24174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (13))){
var inst_24069 = (state_24114[(10)]);
var inst_24071 = cljs.core.chunked_seq_QMARK_.call(null,inst_24069);
var state_24114__$1 = state_24114;
if(inst_24071){
var statearr_24126_24175 = state_24114__$1;
(statearr_24126_24175[(1)] = (16));

} else {
var statearr_24127_24176 = state_24114__$1;
(statearr_24127_24176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (22))){
var inst_24099 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
if(cljs.core.truth_(inst_24099)){
var statearr_24128_24177 = state_24114__$1;
(statearr_24128_24177[(1)] = (23));

} else {
var statearr_24129_24178 = state_24114__$1;
(statearr_24129_24178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (6))){
var inst_24093 = (state_24114[(7)]);
var inst_24095 = (state_24114[(11)]);
var inst_24045 = (state_24114[(8)]);
var inst_24093__$1 = topic_fn.call(null,inst_24045);
var inst_24094 = cljs.core.deref.call(null,mults);
var inst_24095__$1 = cljs.core.get.call(null,inst_24094,inst_24093__$1);
var state_24114__$1 = (function (){var statearr_24130 = state_24114;
(statearr_24130[(7)] = inst_24093__$1);

(statearr_24130[(11)] = inst_24095__$1);

return statearr_24130;
})();
if(cljs.core.truth_(inst_24095__$1)){
var statearr_24131_24179 = state_24114__$1;
(statearr_24131_24179[(1)] = (19));

} else {
var statearr_24132_24180 = state_24114__$1;
(statearr_24132_24180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (25))){
var inst_24104 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
var statearr_24133_24181 = state_24114__$1;
(statearr_24133_24181[(2)] = inst_24104);

(statearr_24133_24181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (17))){
var inst_24069 = (state_24114[(10)]);
var inst_24078 = cljs.core.first.call(null,inst_24069);
var inst_24079 = cljs.core.async.muxch_STAR_.call(null,inst_24078);
var inst_24080 = cljs.core.async.close_BANG_.call(null,inst_24079);
var inst_24081 = cljs.core.next.call(null,inst_24069);
var inst_24055 = inst_24081;
var inst_24056 = null;
var inst_24057 = (0);
var inst_24058 = (0);
var state_24114__$1 = (function (){var statearr_24134 = state_24114;
(statearr_24134[(12)] = inst_24058);

(statearr_24134[(13)] = inst_24057);

(statearr_24134[(14)] = inst_24056);

(statearr_24134[(15)] = inst_24080);

(statearr_24134[(16)] = inst_24055);

return statearr_24134;
})();
var statearr_24135_24182 = state_24114__$1;
(statearr_24135_24182[(2)] = null);

(statearr_24135_24182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (3))){
var inst_24112 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24114__$1,inst_24112);
} else {
if((state_val_24115 === (12))){
var inst_24089 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
var statearr_24136_24183 = state_24114__$1;
(statearr_24136_24183[(2)] = inst_24089);

(statearr_24136_24183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (2))){
var state_24114__$1 = state_24114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24114__$1,(4),ch);
} else {
if((state_val_24115 === (23))){
var state_24114__$1 = state_24114;
var statearr_24137_24184 = state_24114__$1;
(statearr_24137_24184[(2)] = null);

(statearr_24137_24184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (19))){
var inst_24095 = (state_24114[(11)]);
var inst_24045 = (state_24114[(8)]);
var inst_24097 = cljs.core.async.muxch_STAR_.call(null,inst_24095);
var state_24114__$1 = state_24114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24114__$1,(22),inst_24097,inst_24045);
} else {
if((state_val_24115 === (11))){
var inst_24069 = (state_24114[(10)]);
var inst_24055 = (state_24114[(16)]);
var inst_24069__$1 = cljs.core.seq.call(null,inst_24055);
var state_24114__$1 = (function (){var statearr_24138 = state_24114;
(statearr_24138[(10)] = inst_24069__$1);

return statearr_24138;
})();
if(inst_24069__$1){
var statearr_24139_24185 = state_24114__$1;
(statearr_24139_24185[(1)] = (13));

} else {
var statearr_24140_24186 = state_24114__$1;
(statearr_24140_24186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (9))){
var inst_24091 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
var statearr_24141_24187 = state_24114__$1;
(statearr_24141_24187[(2)] = inst_24091);

(statearr_24141_24187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (5))){
var inst_24052 = cljs.core.deref.call(null,mults);
var inst_24053 = cljs.core.vals.call(null,inst_24052);
var inst_24054 = cljs.core.seq.call(null,inst_24053);
var inst_24055 = inst_24054;
var inst_24056 = null;
var inst_24057 = (0);
var inst_24058 = (0);
var state_24114__$1 = (function (){var statearr_24142 = state_24114;
(statearr_24142[(12)] = inst_24058);

(statearr_24142[(13)] = inst_24057);

(statearr_24142[(14)] = inst_24056);

(statearr_24142[(16)] = inst_24055);

return statearr_24142;
})();
var statearr_24143_24188 = state_24114__$1;
(statearr_24143_24188[(2)] = null);

(statearr_24143_24188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (14))){
var state_24114__$1 = state_24114;
var statearr_24147_24189 = state_24114__$1;
(statearr_24147_24189[(2)] = null);

(statearr_24147_24189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (16))){
var inst_24069 = (state_24114[(10)]);
var inst_24073 = cljs.core.chunk_first.call(null,inst_24069);
var inst_24074 = cljs.core.chunk_rest.call(null,inst_24069);
var inst_24075 = cljs.core.count.call(null,inst_24073);
var inst_24055 = inst_24074;
var inst_24056 = inst_24073;
var inst_24057 = inst_24075;
var inst_24058 = (0);
var state_24114__$1 = (function (){var statearr_24148 = state_24114;
(statearr_24148[(12)] = inst_24058);

(statearr_24148[(13)] = inst_24057);

(statearr_24148[(14)] = inst_24056);

(statearr_24148[(16)] = inst_24055);

return statearr_24148;
})();
var statearr_24149_24190 = state_24114__$1;
(statearr_24149_24190[(2)] = null);

(statearr_24149_24190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (10))){
var inst_24058 = (state_24114[(12)]);
var inst_24057 = (state_24114[(13)]);
var inst_24056 = (state_24114[(14)]);
var inst_24055 = (state_24114[(16)]);
var inst_24063 = cljs.core._nth.call(null,inst_24056,inst_24058);
var inst_24064 = cljs.core.async.muxch_STAR_.call(null,inst_24063);
var inst_24065 = cljs.core.async.close_BANG_.call(null,inst_24064);
var inst_24066 = (inst_24058 + (1));
var tmp24144 = inst_24057;
var tmp24145 = inst_24056;
var tmp24146 = inst_24055;
var inst_24055__$1 = tmp24146;
var inst_24056__$1 = tmp24145;
var inst_24057__$1 = tmp24144;
var inst_24058__$1 = inst_24066;
var state_24114__$1 = (function (){var statearr_24150 = state_24114;
(statearr_24150[(12)] = inst_24058__$1);

(statearr_24150[(13)] = inst_24057__$1);

(statearr_24150[(14)] = inst_24056__$1);

(statearr_24150[(17)] = inst_24065);

(statearr_24150[(16)] = inst_24055__$1);

return statearr_24150;
})();
var statearr_24151_24191 = state_24114__$1;
(statearr_24151_24191[(2)] = null);

(statearr_24151_24191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (18))){
var inst_24084 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
var statearr_24152_24192 = state_24114__$1;
(statearr_24152_24192[(2)] = inst_24084);

(statearr_24152_24192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (8))){
var inst_24058 = (state_24114[(12)]);
var inst_24057 = (state_24114[(13)]);
var inst_24060 = (inst_24058 < inst_24057);
var inst_24061 = inst_24060;
var state_24114__$1 = state_24114;
if(cljs.core.truth_(inst_24061)){
var statearr_24153_24193 = state_24114__$1;
(statearr_24153_24193[(1)] = (10));

} else {
var statearr_24154_24194 = state_24114__$1;
(statearr_24154_24194[(1)] = (11));

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
});})(c__22304__auto___24166,mults,ensure_mult,p))
;
return ((function (switch__22192__auto__,c__22304__auto___24166,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_24158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24158[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_24158[(1)] = (1));

return statearr_24158;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_24114){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_24114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e24159){if((e24159 instanceof Object)){
var ex__22196__auto__ = e24159;
var statearr_24160_24195 = state_24114;
(statearr_24160_24195[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24196 = state_24114;
state_24114 = G__24196;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_24114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_24114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___24166,mults,ensure_mult,p))
})();
var state__22306__auto__ = (function (){var statearr_24161 = f__22305__auto__.call(null);
(statearr_24161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___24166);

return statearr_24161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___24166,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24197 = [];
var len__17883__auto___24200 = arguments.length;
var i__17884__auto___24201 = (0);
while(true){
if((i__17884__auto___24201 < len__17883__auto___24200)){
args24197.push((arguments[i__17884__auto___24201]));

var G__24202 = (i__17884__auto___24201 + (1));
i__17884__auto___24201 = G__24202;
continue;
} else {
}
break;
}

var G__24199 = args24197.length;
switch (G__24199) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24197.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24204 = [];
var len__17883__auto___24207 = arguments.length;
var i__17884__auto___24208 = (0);
while(true){
if((i__17884__auto___24208 < len__17883__auto___24207)){
args24204.push((arguments[i__17884__auto___24208]));

var G__24209 = (i__17884__auto___24208 + (1));
i__17884__auto___24208 = G__24209;
continue;
} else {
}
break;
}

var G__24206 = args24204.length;
switch (G__24206) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24204.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24211 = [];
var len__17883__auto___24282 = arguments.length;
var i__17884__auto___24283 = (0);
while(true){
if((i__17884__auto___24283 < len__17883__auto___24282)){
args24211.push((arguments[i__17884__auto___24283]));

var G__24284 = (i__17884__auto___24283 + (1));
i__17884__auto___24283 = G__24284;
continue;
} else {
}
break;
}

var G__24213 = args24211.length;
switch (G__24213) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24211.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22304__auto___24286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___24286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___24286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24252){
var state_val_24253 = (state_24252[(1)]);
if((state_val_24253 === (7))){
var state_24252__$1 = state_24252;
var statearr_24254_24287 = state_24252__$1;
(statearr_24254_24287[(2)] = null);

(statearr_24254_24287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (1))){
var state_24252__$1 = state_24252;
var statearr_24255_24288 = state_24252__$1;
(statearr_24255_24288[(2)] = null);

(statearr_24255_24288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (4))){
var inst_24216 = (state_24252[(7)]);
var inst_24218 = (inst_24216 < cnt);
var state_24252__$1 = state_24252;
if(cljs.core.truth_(inst_24218)){
var statearr_24256_24289 = state_24252__$1;
(statearr_24256_24289[(1)] = (6));

} else {
var statearr_24257_24290 = state_24252__$1;
(statearr_24257_24290[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (15))){
var inst_24248 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24258_24291 = state_24252__$1;
(statearr_24258_24291[(2)] = inst_24248);

(statearr_24258_24291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (13))){
var inst_24241 = cljs.core.async.close_BANG_.call(null,out);
var state_24252__$1 = state_24252;
var statearr_24259_24292 = state_24252__$1;
(statearr_24259_24292[(2)] = inst_24241);

(statearr_24259_24292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (6))){
var state_24252__$1 = state_24252;
var statearr_24260_24293 = state_24252__$1;
(statearr_24260_24293[(2)] = null);

(statearr_24260_24293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (3))){
var inst_24250 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24252__$1,inst_24250);
} else {
if((state_val_24253 === (12))){
var inst_24238 = (state_24252[(8)]);
var inst_24238__$1 = (state_24252[(2)]);
var inst_24239 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24238__$1);
var state_24252__$1 = (function (){var statearr_24261 = state_24252;
(statearr_24261[(8)] = inst_24238__$1);

return statearr_24261;
})();
if(cljs.core.truth_(inst_24239)){
var statearr_24262_24294 = state_24252__$1;
(statearr_24262_24294[(1)] = (13));

} else {
var statearr_24263_24295 = state_24252__$1;
(statearr_24263_24295[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (2))){
var inst_24215 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24216 = (0);
var state_24252__$1 = (function (){var statearr_24264 = state_24252;
(statearr_24264[(7)] = inst_24216);

(statearr_24264[(9)] = inst_24215);

return statearr_24264;
})();
var statearr_24265_24296 = state_24252__$1;
(statearr_24265_24296[(2)] = null);

(statearr_24265_24296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (11))){
var inst_24216 = (state_24252[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24252,(10),Object,null,(9));
var inst_24225 = chs__$1.call(null,inst_24216);
var inst_24226 = done.call(null,inst_24216);
var inst_24227 = cljs.core.async.take_BANG_.call(null,inst_24225,inst_24226);
var state_24252__$1 = state_24252;
var statearr_24266_24297 = state_24252__$1;
(statearr_24266_24297[(2)] = inst_24227);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24252__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (9))){
var inst_24216 = (state_24252[(7)]);
var inst_24229 = (state_24252[(2)]);
var inst_24230 = (inst_24216 + (1));
var inst_24216__$1 = inst_24230;
var state_24252__$1 = (function (){var statearr_24267 = state_24252;
(statearr_24267[(7)] = inst_24216__$1);

(statearr_24267[(10)] = inst_24229);

return statearr_24267;
})();
var statearr_24268_24298 = state_24252__$1;
(statearr_24268_24298[(2)] = null);

(statearr_24268_24298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (5))){
var inst_24236 = (state_24252[(2)]);
var state_24252__$1 = (function (){var statearr_24269 = state_24252;
(statearr_24269[(11)] = inst_24236);

return statearr_24269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24252__$1,(12),dchan);
} else {
if((state_val_24253 === (14))){
var inst_24238 = (state_24252[(8)]);
var inst_24243 = cljs.core.apply.call(null,f,inst_24238);
var state_24252__$1 = state_24252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24252__$1,(16),out,inst_24243);
} else {
if((state_val_24253 === (16))){
var inst_24245 = (state_24252[(2)]);
var state_24252__$1 = (function (){var statearr_24270 = state_24252;
(statearr_24270[(12)] = inst_24245);

return statearr_24270;
})();
var statearr_24271_24299 = state_24252__$1;
(statearr_24271_24299[(2)] = null);

(statearr_24271_24299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (10))){
var inst_24220 = (state_24252[(2)]);
var inst_24221 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24252__$1 = (function (){var statearr_24272 = state_24252;
(statearr_24272[(13)] = inst_24220);

return statearr_24272;
})();
var statearr_24273_24300 = state_24252__$1;
(statearr_24273_24300[(2)] = inst_24221);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24252__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (8))){
var inst_24234 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24274_24301 = state_24252__$1;
(statearr_24274_24301[(2)] = inst_24234);

(statearr_24274_24301[(1)] = (5));


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
});})(c__22304__auto___24286,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22192__auto__,c__22304__auto___24286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_24278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24278[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_24278[(1)] = (1));

return statearr_24278;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_24252){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_24252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e24279){if((e24279 instanceof Object)){
var ex__22196__auto__ = e24279;
var statearr_24280_24302 = state_24252;
(statearr_24280_24302[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24303 = state_24252;
state_24252 = G__24303;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_24252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_24252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___24286,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22306__auto__ = (function (){var statearr_24281 = f__22305__auto__.call(null);
(statearr_24281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___24286);

return statearr_24281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___24286,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24305 = [];
var len__17883__auto___24361 = arguments.length;
var i__17884__auto___24362 = (0);
while(true){
if((i__17884__auto___24362 < len__17883__auto___24361)){
args24305.push((arguments[i__17884__auto___24362]));

var G__24363 = (i__17884__auto___24362 + (1));
i__17884__auto___24362 = G__24363;
continue;
} else {
}
break;
}

var G__24307 = args24305.length;
switch (G__24307) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24305.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22304__auto___24365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___24365,out){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___24365,out){
return (function (state_24337){
var state_val_24338 = (state_24337[(1)]);
if((state_val_24338 === (7))){
var inst_24317 = (state_24337[(7)]);
var inst_24316 = (state_24337[(8)]);
var inst_24316__$1 = (state_24337[(2)]);
var inst_24317__$1 = cljs.core.nth.call(null,inst_24316__$1,(0),null);
var inst_24318 = cljs.core.nth.call(null,inst_24316__$1,(1),null);
var inst_24319 = (inst_24317__$1 == null);
var state_24337__$1 = (function (){var statearr_24339 = state_24337;
(statearr_24339[(9)] = inst_24318);

(statearr_24339[(7)] = inst_24317__$1);

(statearr_24339[(8)] = inst_24316__$1);

return statearr_24339;
})();
if(cljs.core.truth_(inst_24319)){
var statearr_24340_24366 = state_24337__$1;
(statearr_24340_24366[(1)] = (8));

} else {
var statearr_24341_24367 = state_24337__$1;
(statearr_24341_24367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (1))){
var inst_24308 = cljs.core.vec.call(null,chs);
var inst_24309 = inst_24308;
var state_24337__$1 = (function (){var statearr_24342 = state_24337;
(statearr_24342[(10)] = inst_24309);

return statearr_24342;
})();
var statearr_24343_24368 = state_24337__$1;
(statearr_24343_24368[(2)] = null);

(statearr_24343_24368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (4))){
var inst_24309 = (state_24337[(10)]);
var state_24337__$1 = state_24337;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24337__$1,(7),inst_24309);
} else {
if((state_val_24338 === (6))){
var inst_24333 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
var statearr_24344_24369 = state_24337__$1;
(statearr_24344_24369[(2)] = inst_24333);

(statearr_24344_24369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (3))){
var inst_24335 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24337__$1,inst_24335);
} else {
if((state_val_24338 === (2))){
var inst_24309 = (state_24337[(10)]);
var inst_24311 = cljs.core.count.call(null,inst_24309);
var inst_24312 = (inst_24311 > (0));
var state_24337__$1 = state_24337;
if(cljs.core.truth_(inst_24312)){
var statearr_24346_24370 = state_24337__$1;
(statearr_24346_24370[(1)] = (4));

} else {
var statearr_24347_24371 = state_24337__$1;
(statearr_24347_24371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (11))){
var inst_24309 = (state_24337[(10)]);
var inst_24326 = (state_24337[(2)]);
var tmp24345 = inst_24309;
var inst_24309__$1 = tmp24345;
var state_24337__$1 = (function (){var statearr_24348 = state_24337;
(statearr_24348[(11)] = inst_24326);

(statearr_24348[(10)] = inst_24309__$1);

return statearr_24348;
})();
var statearr_24349_24372 = state_24337__$1;
(statearr_24349_24372[(2)] = null);

(statearr_24349_24372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (9))){
var inst_24317 = (state_24337[(7)]);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24337__$1,(11),out,inst_24317);
} else {
if((state_val_24338 === (5))){
var inst_24331 = cljs.core.async.close_BANG_.call(null,out);
var state_24337__$1 = state_24337;
var statearr_24350_24373 = state_24337__$1;
(statearr_24350_24373[(2)] = inst_24331);

(statearr_24350_24373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (10))){
var inst_24329 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
var statearr_24351_24374 = state_24337__$1;
(statearr_24351_24374[(2)] = inst_24329);

(statearr_24351_24374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (8))){
var inst_24318 = (state_24337[(9)]);
var inst_24317 = (state_24337[(7)]);
var inst_24316 = (state_24337[(8)]);
var inst_24309 = (state_24337[(10)]);
var inst_24321 = (function (){var cs = inst_24309;
var vec__24314 = inst_24316;
var v = inst_24317;
var c = inst_24318;
return ((function (cs,vec__24314,v,c,inst_24318,inst_24317,inst_24316,inst_24309,state_val_24338,c__22304__auto___24365,out){
return (function (p1__24304_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24304_SHARP_);
});
;})(cs,vec__24314,v,c,inst_24318,inst_24317,inst_24316,inst_24309,state_val_24338,c__22304__auto___24365,out))
})();
var inst_24322 = cljs.core.filterv.call(null,inst_24321,inst_24309);
var inst_24309__$1 = inst_24322;
var state_24337__$1 = (function (){var statearr_24352 = state_24337;
(statearr_24352[(10)] = inst_24309__$1);

return statearr_24352;
})();
var statearr_24353_24375 = state_24337__$1;
(statearr_24353_24375[(2)] = null);

(statearr_24353_24375[(1)] = (2));


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
});})(c__22304__auto___24365,out))
;
return ((function (switch__22192__auto__,c__22304__auto___24365,out){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_24357 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24357[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_24357[(1)] = (1));

return statearr_24357;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_24337){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_24337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e24358){if((e24358 instanceof Object)){
var ex__22196__auto__ = e24358;
var statearr_24359_24376 = state_24337;
(statearr_24359_24376[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24377 = state_24337;
state_24337 = G__24377;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_24337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_24337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___24365,out))
})();
var state__22306__auto__ = (function (){var statearr_24360 = f__22305__auto__.call(null);
(statearr_24360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___24365);

return statearr_24360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___24365,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24378 = [];
var len__17883__auto___24427 = arguments.length;
var i__17884__auto___24428 = (0);
while(true){
if((i__17884__auto___24428 < len__17883__auto___24427)){
args24378.push((arguments[i__17884__auto___24428]));

var G__24429 = (i__17884__auto___24428 + (1));
i__17884__auto___24428 = G__24429;
continue;
} else {
}
break;
}

var G__24380 = args24378.length;
switch (G__24380) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24378.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22304__auto___24431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___24431,out){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___24431,out){
return (function (state_24404){
var state_val_24405 = (state_24404[(1)]);
if((state_val_24405 === (7))){
var inst_24386 = (state_24404[(7)]);
var inst_24386__$1 = (state_24404[(2)]);
var inst_24387 = (inst_24386__$1 == null);
var inst_24388 = cljs.core.not.call(null,inst_24387);
var state_24404__$1 = (function (){var statearr_24406 = state_24404;
(statearr_24406[(7)] = inst_24386__$1);

return statearr_24406;
})();
if(inst_24388){
var statearr_24407_24432 = state_24404__$1;
(statearr_24407_24432[(1)] = (8));

} else {
var statearr_24408_24433 = state_24404__$1;
(statearr_24408_24433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24405 === (1))){
var inst_24381 = (0);
var state_24404__$1 = (function (){var statearr_24409 = state_24404;
(statearr_24409[(8)] = inst_24381);

return statearr_24409;
})();
var statearr_24410_24434 = state_24404__$1;
(statearr_24410_24434[(2)] = null);

(statearr_24410_24434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24405 === (4))){
var state_24404__$1 = state_24404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24404__$1,(7),ch);
} else {
if((state_val_24405 === (6))){
var inst_24399 = (state_24404[(2)]);
var state_24404__$1 = state_24404;
var statearr_24411_24435 = state_24404__$1;
(statearr_24411_24435[(2)] = inst_24399);

(statearr_24411_24435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24405 === (3))){
var inst_24401 = (state_24404[(2)]);
var inst_24402 = cljs.core.async.close_BANG_.call(null,out);
var state_24404__$1 = (function (){var statearr_24412 = state_24404;
(statearr_24412[(9)] = inst_24401);

return statearr_24412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24404__$1,inst_24402);
} else {
if((state_val_24405 === (2))){
var inst_24381 = (state_24404[(8)]);
var inst_24383 = (inst_24381 < n);
var state_24404__$1 = state_24404;
if(cljs.core.truth_(inst_24383)){
var statearr_24413_24436 = state_24404__$1;
(statearr_24413_24436[(1)] = (4));

} else {
var statearr_24414_24437 = state_24404__$1;
(statearr_24414_24437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24405 === (11))){
var inst_24381 = (state_24404[(8)]);
var inst_24391 = (state_24404[(2)]);
var inst_24392 = (inst_24381 + (1));
var inst_24381__$1 = inst_24392;
var state_24404__$1 = (function (){var statearr_24415 = state_24404;
(statearr_24415[(10)] = inst_24391);

(statearr_24415[(8)] = inst_24381__$1);

return statearr_24415;
})();
var statearr_24416_24438 = state_24404__$1;
(statearr_24416_24438[(2)] = null);

(statearr_24416_24438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24405 === (9))){
var state_24404__$1 = state_24404;
var statearr_24417_24439 = state_24404__$1;
(statearr_24417_24439[(2)] = null);

(statearr_24417_24439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24405 === (5))){
var state_24404__$1 = state_24404;
var statearr_24418_24440 = state_24404__$1;
(statearr_24418_24440[(2)] = null);

(statearr_24418_24440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24405 === (10))){
var inst_24396 = (state_24404[(2)]);
var state_24404__$1 = state_24404;
var statearr_24419_24441 = state_24404__$1;
(statearr_24419_24441[(2)] = inst_24396);

(statearr_24419_24441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24405 === (8))){
var inst_24386 = (state_24404[(7)]);
var state_24404__$1 = state_24404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24404__$1,(11),out,inst_24386);
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
});})(c__22304__auto___24431,out))
;
return ((function (switch__22192__auto__,c__22304__auto___24431,out){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_24423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24423[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_24423[(1)] = (1));

return statearr_24423;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_24404){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_24404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e24424){if((e24424 instanceof Object)){
var ex__22196__auto__ = e24424;
var statearr_24425_24442 = state_24404;
(statearr_24425_24442[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24443 = state_24404;
state_24404 = G__24443;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_24404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_24404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___24431,out))
})();
var state__22306__auto__ = (function (){var statearr_24426 = f__22305__auto__.call(null);
(statearr_24426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___24431);

return statearr_24426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___24431,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24451 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24451 = (function (map_LT_,f,ch,meta24452){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24452 = meta24452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24453,meta24452__$1){
var self__ = this;
var _24453__$1 = this;
return (new cljs.core.async.t_cljs$core$async24451(self__.map_LT_,self__.f,self__.ch,meta24452__$1));
});

cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24453){
var self__ = this;
var _24453__$1 = this;
return self__.meta24452;
});

cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24454 = (function (map_LT_,f,ch,meta24452,_,fn1,meta24455){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24452 = meta24452;
this._ = _;
this.fn1 = fn1;
this.meta24455 = meta24455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24456,meta24455__$1){
var self__ = this;
var _24456__$1 = this;
return (new cljs.core.async.t_cljs$core$async24454(self__.map_LT_,self__.f,self__.ch,self__.meta24452,self__._,self__.fn1,meta24455__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24456){
var self__ = this;
var _24456__$1 = this;
return self__.meta24455;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24454.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24444_SHARP_){
return f1.call(null,(((p1__24444_SHARP_ == null))?null:self__.f.call(null,p1__24444_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24454.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24452","meta24452",-365040684,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24451","cljs.core.async/t_cljs$core$async24451",-2087605587,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24455","meta24455",-657850418,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24454";

cljs.core.async.t_cljs$core$async24454.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"cljs.core.async/t_cljs$core$async24454");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24454 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24454(map_LT___$1,f__$1,ch__$1,meta24452__$1,___$2,fn1__$1,meta24455){
return (new cljs.core.async.t_cljs$core$async24454(map_LT___$1,f__$1,ch__$1,meta24452__$1,___$2,fn1__$1,meta24455));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24454(self__.map_LT_,self__.f,self__.ch,self__.meta24452,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16813__auto__ = ret;
if(cljs.core.truth_(and__16813__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16813__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24452","meta24452",-365040684,null)], null);
});

cljs.core.async.t_cljs$core$async24451.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24451";

cljs.core.async.t_cljs$core$async24451.cljs$lang$ctorPrWriter = (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"cljs.core.async/t_cljs$core$async24451");
});

cljs.core.async.__GT_t_cljs$core$async24451 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24451(map_LT___$1,f__$1,ch__$1,meta24452){
return (new cljs.core.async.t_cljs$core$async24451(map_LT___$1,f__$1,ch__$1,meta24452));
});

}

return (new cljs.core.async.t_cljs$core$async24451(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24460 = (function (map_GT_,f,ch,meta24461){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24461 = meta24461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24462,meta24461__$1){
var self__ = this;
var _24462__$1 = this;
return (new cljs.core.async.t_cljs$core$async24460(self__.map_GT_,self__.f,self__.ch,meta24461__$1));
});

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24462){
var self__ = this;
var _24462__$1 = this;
return self__.meta24461;
});

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24461","meta24461",-1300306985,null)], null);
});

cljs.core.async.t_cljs$core$async24460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24460";

cljs.core.async.t_cljs$core$async24460.cljs$lang$ctorPrWriter = (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"cljs.core.async/t_cljs$core$async24460");
});

cljs.core.async.__GT_t_cljs$core$async24460 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24460(map_GT___$1,f__$1,ch__$1,meta24461){
return (new cljs.core.async.t_cljs$core$async24460(map_GT___$1,f__$1,ch__$1,meta24461));
});

}

return (new cljs.core.async.t_cljs$core$async24460(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24466 = (function (filter_GT_,p,ch,meta24467){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24467 = meta24467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24468,meta24467__$1){
var self__ = this;
var _24468__$1 = this;
return (new cljs.core.async.t_cljs$core$async24466(self__.filter_GT_,self__.p,self__.ch,meta24467__$1));
});

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24468){
var self__ = this;
var _24468__$1 = this;
return self__.meta24467;
});

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24467","meta24467",566246805,null)], null);
});

cljs.core.async.t_cljs$core$async24466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24466";

cljs.core.async.t_cljs$core$async24466.cljs$lang$ctorPrWriter = (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"cljs.core.async/t_cljs$core$async24466");
});

cljs.core.async.__GT_t_cljs$core$async24466 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24466(filter_GT___$1,p__$1,ch__$1,meta24467){
return (new cljs.core.async.t_cljs$core$async24466(filter_GT___$1,p__$1,ch__$1,meta24467));
});

}

return (new cljs.core.async.t_cljs$core$async24466(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24469 = [];
var len__17883__auto___24513 = arguments.length;
var i__17884__auto___24514 = (0);
while(true){
if((i__17884__auto___24514 < len__17883__auto___24513)){
args24469.push((arguments[i__17884__auto___24514]));

var G__24515 = (i__17884__auto___24514 + (1));
i__17884__auto___24514 = G__24515;
continue;
} else {
}
break;
}

var G__24471 = args24469.length;
switch (G__24471) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24469.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22304__auto___24517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___24517,out){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___24517,out){
return (function (state_24492){
var state_val_24493 = (state_24492[(1)]);
if((state_val_24493 === (7))){
var inst_24488 = (state_24492[(2)]);
var state_24492__$1 = state_24492;
var statearr_24494_24518 = state_24492__$1;
(statearr_24494_24518[(2)] = inst_24488);

(statearr_24494_24518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24493 === (1))){
var state_24492__$1 = state_24492;
var statearr_24495_24519 = state_24492__$1;
(statearr_24495_24519[(2)] = null);

(statearr_24495_24519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24493 === (4))){
var inst_24474 = (state_24492[(7)]);
var inst_24474__$1 = (state_24492[(2)]);
var inst_24475 = (inst_24474__$1 == null);
var state_24492__$1 = (function (){var statearr_24496 = state_24492;
(statearr_24496[(7)] = inst_24474__$1);

return statearr_24496;
})();
if(cljs.core.truth_(inst_24475)){
var statearr_24497_24520 = state_24492__$1;
(statearr_24497_24520[(1)] = (5));

} else {
var statearr_24498_24521 = state_24492__$1;
(statearr_24498_24521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24493 === (6))){
var inst_24474 = (state_24492[(7)]);
var inst_24479 = p.call(null,inst_24474);
var state_24492__$1 = state_24492;
if(cljs.core.truth_(inst_24479)){
var statearr_24499_24522 = state_24492__$1;
(statearr_24499_24522[(1)] = (8));

} else {
var statearr_24500_24523 = state_24492__$1;
(statearr_24500_24523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24493 === (3))){
var inst_24490 = (state_24492[(2)]);
var state_24492__$1 = state_24492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24492__$1,inst_24490);
} else {
if((state_val_24493 === (2))){
var state_24492__$1 = state_24492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24492__$1,(4),ch);
} else {
if((state_val_24493 === (11))){
var inst_24482 = (state_24492[(2)]);
var state_24492__$1 = state_24492;
var statearr_24501_24524 = state_24492__$1;
(statearr_24501_24524[(2)] = inst_24482);

(statearr_24501_24524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24493 === (9))){
var state_24492__$1 = state_24492;
var statearr_24502_24525 = state_24492__$1;
(statearr_24502_24525[(2)] = null);

(statearr_24502_24525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24493 === (5))){
var inst_24477 = cljs.core.async.close_BANG_.call(null,out);
var state_24492__$1 = state_24492;
var statearr_24503_24526 = state_24492__$1;
(statearr_24503_24526[(2)] = inst_24477);

(statearr_24503_24526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24493 === (10))){
var inst_24485 = (state_24492[(2)]);
var state_24492__$1 = (function (){var statearr_24504 = state_24492;
(statearr_24504[(8)] = inst_24485);

return statearr_24504;
})();
var statearr_24505_24527 = state_24492__$1;
(statearr_24505_24527[(2)] = null);

(statearr_24505_24527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24493 === (8))){
var inst_24474 = (state_24492[(7)]);
var state_24492__$1 = state_24492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24492__$1,(11),out,inst_24474);
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
});})(c__22304__auto___24517,out))
;
return ((function (switch__22192__auto__,c__22304__auto___24517,out){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_24509 = [null,null,null,null,null,null,null,null,null];
(statearr_24509[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_24509[(1)] = (1));

return statearr_24509;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_24492){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_24492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e24510){if((e24510 instanceof Object)){
var ex__22196__auto__ = e24510;
var statearr_24511_24528 = state_24492;
(statearr_24511_24528[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24529 = state_24492;
state_24492 = G__24529;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_24492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_24492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___24517,out))
})();
var state__22306__auto__ = (function (){var statearr_24512 = f__22305__auto__.call(null);
(statearr_24512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___24517);

return statearr_24512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___24517,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24530 = [];
var len__17883__auto___24533 = arguments.length;
var i__17884__auto___24534 = (0);
while(true){
if((i__17884__auto___24534 < len__17883__auto___24533)){
args24530.push((arguments[i__17884__auto___24534]));

var G__24535 = (i__17884__auto___24534 + (1));
i__17884__auto___24534 = G__24535;
continue;
} else {
}
break;
}

var G__24532 = args24530.length;
switch (G__24532) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24530.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_24702){
var state_val_24703 = (state_24702[(1)]);
if((state_val_24703 === (7))){
var inst_24698 = (state_24702[(2)]);
var state_24702__$1 = state_24702;
var statearr_24704_24745 = state_24702__$1;
(statearr_24704_24745[(2)] = inst_24698);

(statearr_24704_24745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (20))){
var inst_24668 = (state_24702[(7)]);
var inst_24679 = (state_24702[(2)]);
var inst_24680 = cljs.core.next.call(null,inst_24668);
var inst_24654 = inst_24680;
var inst_24655 = null;
var inst_24656 = (0);
var inst_24657 = (0);
var state_24702__$1 = (function (){var statearr_24705 = state_24702;
(statearr_24705[(8)] = inst_24656);

(statearr_24705[(9)] = inst_24657);

(statearr_24705[(10)] = inst_24654);

(statearr_24705[(11)] = inst_24655);

(statearr_24705[(12)] = inst_24679);

return statearr_24705;
})();
var statearr_24706_24746 = state_24702__$1;
(statearr_24706_24746[(2)] = null);

(statearr_24706_24746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (1))){
var state_24702__$1 = state_24702;
var statearr_24707_24747 = state_24702__$1;
(statearr_24707_24747[(2)] = null);

(statearr_24707_24747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (4))){
var inst_24643 = (state_24702[(13)]);
var inst_24643__$1 = (state_24702[(2)]);
var inst_24644 = (inst_24643__$1 == null);
var state_24702__$1 = (function (){var statearr_24708 = state_24702;
(statearr_24708[(13)] = inst_24643__$1);

return statearr_24708;
})();
if(cljs.core.truth_(inst_24644)){
var statearr_24709_24748 = state_24702__$1;
(statearr_24709_24748[(1)] = (5));

} else {
var statearr_24710_24749 = state_24702__$1;
(statearr_24710_24749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (15))){
var state_24702__$1 = state_24702;
var statearr_24714_24750 = state_24702__$1;
(statearr_24714_24750[(2)] = null);

(statearr_24714_24750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (21))){
var state_24702__$1 = state_24702;
var statearr_24715_24751 = state_24702__$1;
(statearr_24715_24751[(2)] = null);

(statearr_24715_24751[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (13))){
var inst_24656 = (state_24702[(8)]);
var inst_24657 = (state_24702[(9)]);
var inst_24654 = (state_24702[(10)]);
var inst_24655 = (state_24702[(11)]);
var inst_24664 = (state_24702[(2)]);
var inst_24665 = (inst_24657 + (1));
var tmp24711 = inst_24656;
var tmp24712 = inst_24654;
var tmp24713 = inst_24655;
var inst_24654__$1 = tmp24712;
var inst_24655__$1 = tmp24713;
var inst_24656__$1 = tmp24711;
var inst_24657__$1 = inst_24665;
var state_24702__$1 = (function (){var statearr_24716 = state_24702;
(statearr_24716[(8)] = inst_24656__$1);

(statearr_24716[(9)] = inst_24657__$1);

(statearr_24716[(10)] = inst_24654__$1);

(statearr_24716[(11)] = inst_24655__$1);

(statearr_24716[(14)] = inst_24664);

return statearr_24716;
})();
var statearr_24717_24752 = state_24702__$1;
(statearr_24717_24752[(2)] = null);

(statearr_24717_24752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (22))){
var state_24702__$1 = state_24702;
var statearr_24718_24753 = state_24702__$1;
(statearr_24718_24753[(2)] = null);

(statearr_24718_24753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (6))){
var inst_24643 = (state_24702[(13)]);
var inst_24652 = f.call(null,inst_24643);
var inst_24653 = cljs.core.seq.call(null,inst_24652);
var inst_24654 = inst_24653;
var inst_24655 = null;
var inst_24656 = (0);
var inst_24657 = (0);
var state_24702__$1 = (function (){var statearr_24719 = state_24702;
(statearr_24719[(8)] = inst_24656);

(statearr_24719[(9)] = inst_24657);

(statearr_24719[(10)] = inst_24654);

(statearr_24719[(11)] = inst_24655);

return statearr_24719;
})();
var statearr_24720_24754 = state_24702__$1;
(statearr_24720_24754[(2)] = null);

(statearr_24720_24754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (17))){
var inst_24668 = (state_24702[(7)]);
var inst_24672 = cljs.core.chunk_first.call(null,inst_24668);
var inst_24673 = cljs.core.chunk_rest.call(null,inst_24668);
var inst_24674 = cljs.core.count.call(null,inst_24672);
var inst_24654 = inst_24673;
var inst_24655 = inst_24672;
var inst_24656 = inst_24674;
var inst_24657 = (0);
var state_24702__$1 = (function (){var statearr_24721 = state_24702;
(statearr_24721[(8)] = inst_24656);

(statearr_24721[(9)] = inst_24657);

(statearr_24721[(10)] = inst_24654);

(statearr_24721[(11)] = inst_24655);

return statearr_24721;
})();
var statearr_24722_24755 = state_24702__$1;
(statearr_24722_24755[(2)] = null);

(statearr_24722_24755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (3))){
var inst_24700 = (state_24702[(2)]);
var state_24702__$1 = state_24702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24702__$1,inst_24700);
} else {
if((state_val_24703 === (12))){
var inst_24688 = (state_24702[(2)]);
var state_24702__$1 = state_24702;
var statearr_24723_24756 = state_24702__$1;
(statearr_24723_24756[(2)] = inst_24688);

(statearr_24723_24756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (2))){
var state_24702__$1 = state_24702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24702__$1,(4),in$);
} else {
if((state_val_24703 === (23))){
var inst_24696 = (state_24702[(2)]);
var state_24702__$1 = state_24702;
var statearr_24724_24757 = state_24702__$1;
(statearr_24724_24757[(2)] = inst_24696);

(statearr_24724_24757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (19))){
var inst_24683 = (state_24702[(2)]);
var state_24702__$1 = state_24702;
var statearr_24725_24758 = state_24702__$1;
(statearr_24725_24758[(2)] = inst_24683);

(statearr_24725_24758[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (11))){
var inst_24654 = (state_24702[(10)]);
var inst_24668 = (state_24702[(7)]);
var inst_24668__$1 = cljs.core.seq.call(null,inst_24654);
var state_24702__$1 = (function (){var statearr_24726 = state_24702;
(statearr_24726[(7)] = inst_24668__$1);

return statearr_24726;
})();
if(inst_24668__$1){
var statearr_24727_24759 = state_24702__$1;
(statearr_24727_24759[(1)] = (14));

} else {
var statearr_24728_24760 = state_24702__$1;
(statearr_24728_24760[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (9))){
var inst_24690 = (state_24702[(2)]);
var inst_24691 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24702__$1 = (function (){var statearr_24729 = state_24702;
(statearr_24729[(15)] = inst_24690);

return statearr_24729;
})();
if(cljs.core.truth_(inst_24691)){
var statearr_24730_24761 = state_24702__$1;
(statearr_24730_24761[(1)] = (21));

} else {
var statearr_24731_24762 = state_24702__$1;
(statearr_24731_24762[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (5))){
var inst_24646 = cljs.core.async.close_BANG_.call(null,out);
var state_24702__$1 = state_24702;
var statearr_24732_24763 = state_24702__$1;
(statearr_24732_24763[(2)] = inst_24646);

(statearr_24732_24763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (14))){
var inst_24668 = (state_24702[(7)]);
var inst_24670 = cljs.core.chunked_seq_QMARK_.call(null,inst_24668);
var state_24702__$1 = state_24702;
if(inst_24670){
var statearr_24733_24764 = state_24702__$1;
(statearr_24733_24764[(1)] = (17));

} else {
var statearr_24734_24765 = state_24702__$1;
(statearr_24734_24765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (16))){
var inst_24686 = (state_24702[(2)]);
var state_24702__$1 = state_24702;
var statearr_24735_24766 = state_24702__$1;
(statearr_24735_24766[(2)] = inst_24686);

(statearr_24735_24766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (10))){
var inst_24657 = (state_24702[(9)]);
var inst_24655 = (state_24702[(11)]);
var inst_24662 = cljs.core._nth.call(null,inst_24655,inst_24657);
var state_24702__$1 = state_24702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24702__$1,(13),out,inst_24662);
} else {
if((state_val_24703 === (18))){
var inst_24668 = (state_24702[(7)]);
var inst_24677 = cljs.core.first.call(null,inst_24668);
var state_24702__$1 = state_24702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24702__$1,(20),out,inst_24677);
} else {
if((state_val_24703 === (8))){
var inst_24656 = (state_24702[(8)]);
var inst_24657 = (state_24702[(9)]);
var inst_24659 = (inst_24657 < inst_24656);
var inst_24660 = inst_24659;
var state_24702__$1 = state_24702;
if(cljs.core.truth_(inst_24660)){
var statearr_24736_24767 = state_24702__$1;
(statearr_24736_24767[(1)] = (10));

} else {
var statearr_24737_24768 = state_24702__$1;
(statearr_24737_24768[(1)] = (11));

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
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22193__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22193__auto____0 = (function (){
var statearr_24741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24741[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22193__auto__);

(statearr_24741[(1)] = (1));

return statearr_24741;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22193__auto____1 = (function (state_24702){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_24702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e24742){if((e24742 instanceof Object)){
var ex__22196__auto__ = e24742;
var statearr_24743_24769 = state_24702;
(statearr_24743_24769[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24770 = state_24702;
state_24702 = G__24770;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22193__auto__ = function(state_24702){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22193__auto____1.call(this,state_24702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22193__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22193__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_24744 = f__22305__auto__.call(null);
(statearr_24744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_24744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24771 = [];
var len__17883__auto___24774 = arguments.length;
var i__17884__auto___24775 = (0);
while(true){
if((i__17884__auto___24775 < len__17883__auto___24774)){
args24771.push((arguments[i__17884__auto___24775]));

var G__24776 = (i__17884__auto___24775 + (1));
i__17884__auto___24775 = G__24776;
continue;
} else {
}
break;
}

var G__24773 = args24771.length;
switch (G__24773) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24771.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24778 = [];
var len__17883__auto___24781 = arguments.length;
var i__17884__auto___24782 = (0);
while(true){
if((i__17884__auto___24782 < len__17883__auto___24781)){
args24778.push((arguments[i__17884__auto___24782]));

var G__24783 = (i__17884__auto___24782 + (1));
i__17884__auto___24782 = G__24783;
continue;
} else {
}
break;
}

var G__24780 = args24778.length;
switch (G__24780) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24778.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24785 = [];
var len__17883__auto___24836 = arguments.length;
var i__17884__auto___24837 = (0);
while(true){
if((i__17884__auto___24837 < len__17883__auto___24836)){
args24785.push((arguments[i__17884__auto___24837]));

var G__24838 = (i__17884__auto___24837 + (1));
i__17884__auto___24837 = G__24838;
continue;
} else {
}
break;
}

var G__24787 = args24785.length;
switch (G__24787) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24785.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22304__auto___24840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___24840,out){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___24840,out){
return (function (state_24811){
var state_val_24812 = (state_24811[(1)]);
if((state_val_24812 === (7))){
var inst_24806 = (state_24811[(2)]);
var state_24811__$1 = state_24811;
var statearr_24813_24841 = state_24811__$1;
(statearr_24813_24841[(2)] = inst_24806);

(statearr_24813_24841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24812 === (1))){
var inst_24788 = null;
var state_24811__$1 = (function (){var statearr_24814 = state_24811;
(statearr_24814[(7)] = inst_24788);

return statearr_24814;
})();
var statearr_24815_24842 = state_24811__$1;
(statearr_24815_24842[(2)] = null);

(statearr_24815_24842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24812 === (4))){
var inst_24791 = (state_24811[(8)]);
var inst_24791__$1 = (state_24811[(2)]);
var inst_24792 = (inst_24791__$1 == null);
var inst_24793 = cljs.core.not.call(null,inst_24792);
var state_24811__$1 = (function (){var statearr_24816 = state_24811;
(statearr_24816[(8)] = inst_24791__$1);

return statearr_24816;
})();
if(inst_24793){
var statearr_24817_24843 = state_24811__$1;
(statearr_24817_24843[(1)] = (5));

} else {
var statearr_24818_24844 = state_24811__$1;
(statearr_24818_24844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24812 === (6))){
var state_24811__$1 = state_24811;
var statearr_24819_24845 = state_24811__$1;
(statearr_24819_24845[(2)] = null);

(statearr_24819_24845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24812 === (3))){
var inst_24808 = (state_24811[(2)]);
var inst_24809 = cljs.core.async.close_BANG_.call(null,out);
var state_24811__$1 = (function (){var statearr_24820 = state_24811;
(statearr_24820[(9)] = inst_24808);

return statearr_24820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24811__$1,inst_24809);
} else {
if((state_val_24812 === (2))){
var state_24811__$1 = state_24811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24811__$1,(4),ch);
} else {
if((state_val_24812 === (11))){
var inst_24791 = (state_24811[(8)]);
var inst_24800 = (state_24811[(2)]);
var inst_24788 = inst_24791;
var state_24811__$1 = (function (){var statearr_24821 = state_24811;
(statearr_24821[(7)] = inst_24788);

(statearr_24821[(10)] = inst_24800);

return statearr_24821;
})();
var statearr_24822_24846 = state_24811__$1;
(statearr_24822_24846[(2)] = null);

(statearr_24822_24846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24812 === (9))){
var inst_24791 = (state_24811[(8)]);
var state_24811__$1 = state_24811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24811__$1,(11),out,inst_24791);
} else {
if((state_val_24812 === (5))){
var inst_24788 = (state_24811[(7)]);
var inst_24791 = (state_24811[(8)]);
var inst_24795 = cljs.core._EQ_.call(null,inst_24791,inst_24788);
var state_24811__$1 = state_24811;
if(inst_24795){
var statearr_24824_24847 = state_24811__$1;
(statearr_24824_24847[(1)] = (8));

} else {
var statearr_24825_24848 = state_24811__$1;
(statearr_24825_24848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24812 === (10))){
var inst_24803 = (state_24811[(2)]);
var state_24811__$1 = state_24811;
var statearr_24826_24849 = state_24811__$1;
(statearr_24826_24849[(2)] = inst_24803);

(statearr_24826_24849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24812 === (8))){
var inst_24788 = (state_24811[(7)]);
var tmp24823 = inst_24788;
var inst_24788__$1 = tmp24823;
var state_24811__$1 = (function (){var statearr_24827 = state_24811;
(statearr_24827[(7)] = inst_24788__$1);

return statearr_24827;
})();
var statearr_24828_24850 = state_24811__$1;
(statearr_24828_24850[(2)] = null);

(statearr_24828_24850[(1)] = (2));


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
});})(c__22304__auto___24840,out))
;
return ((function (switch__22192__auto__,c__22304__auto___24840,out){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_24832 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24832[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_24832[(1)] = (1));

return statearr_24832;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_24811){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_24811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e24833){if((e24833 instanceof Object)){
var ex__22196__auto__ = e24833;
var statearr_24834_24851 = state_24811;
(statearr_24834_24851[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24852 = state_24811;
state_24811 = G__24852;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_24811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_24811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___24840,out))
})();
var state__22306__auto__ = (function (){var statearr_24835 = f__22305__auto__.call(null);
(statearr_24835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___24840);

return statearr_24835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___24840,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24853 = [];
var len__17883__auto___24923 = arguments.length;
var i__17884__auto___24924 = (0);
while(true){
if((i__17884__auto___24924 < len__17883__auto___24923)){
args24853.push((arguments[i__17884__auto___24924]));

var G__24925 = (i__17884__auto___24924 + (1));
i__17884__auto___24924 = G__24925;
continue;
} else {
}
break;
}

var G__24855 = args24853.length;
switch (G__24855) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24853.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22304__auto___24927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___24927,out){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___24927,out){
return (function (state_24893){
var state_val_24894 = (state_24893[(1)]);
if((state_val_24894 === (7))){
var inst_24889 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24895_24928 = state_24893__$1;
(statearr_24895_24928[(2)] = inst_24889);

(statearr_24895_24928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (1))){
var inst_24856 = (new Array(n));
var inst_24857 = inst_24856;
var inst_24858 = (0);
var state_24893__$1 = (function (){var statearr_24896 = state_24893;
(statearr_24896[(7)] = inst_24858);

(statearr_24896[(8)] = inst_24857);

return statearr_24896;
})();
var statearr_24897_24929 = state_24893__$1;
(statearr_24897_24929[(2)] = null);

(statearr_24897_24929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (4))){
var inst_24861 = (state_24893[(9)]);
var inst_24861__$1 = (state_24893[(2)]);
var inst_24862 = (inst_24861__$1 == null);
var inst_24863 = cljs.core.not.call(null,inst_24862);
var state_24893__$1 = (function (){var statearr_24898 = state_24893;
(statearr_24898[(9)] = inst_24861__$1);

return statearr_24898;
})();
if(inst_24863){
var statearr_24899_24930 = state_24893__$1;
(statearr_24899_24930[(1)] = (5));

} else {
var statearr_24900_24931 = state_24893__$1;
(statearr_24900_24931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (15))){
var inst_24883 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24901_24932 = state_24893__$1;
(statearr_24901_24932[(2)] = inst_24883);

(statearr_24901_24932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (13))){
var state_24893__$1 = state_24893;
var statearr_24902_24933 = state_24893__$1;
(statearr_24902_24933[(2)] = null);

(statearr_24902_24933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (6))){
var inst_24858 = (state_24893[(7)]);
var inst_24879 = (inst_24858 > (0));
var state_24893__$1 = state_24893;
if(cljs.core.truth_(inst_24879)){
var statearr_24903_24934 = state_24893__$1;
(statearr_24903_24934[(1)] = (12));

} else {
var statearr_24904_24935 = state_24893__$1;
(statearr_24904_24935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (3))){
var inst_24891 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24893__$1,inst_24891);
} else {
if((state_val_24894 === (12))){
var inst_24857 = (state_24893[(8)]);
var inst_24881 = cljs.core.vec.call(null,inst_24857);
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24893__$1,(15),out,inst_24881);
} else {
if((state_val_24894 === (2))){
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24893__$1,(4),ch);
} else {
if((state_val_24894 === (11))){
var inst_24873 = (state_24893[(2)]);
var inst_24874 = (new Array(n));
var inst_24857 = inst_24874;
var inst_24858 = (0);
var state_24893__$1 = (function (){var statearr_24905 = state_24893;
(statearr_24905[(10)] = inst_24873);

(statearr_24905[(7)] = inst_24858);

(statearr_24905[(8)] = inst_24857);

return statearr_24905;
})();
var statearr_24906_24936 = state_24893__$1;
(statearr_24906_24936[(2)] = null);

(statearr_24906_24936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (9))){
var inst_24857 = (state_24893[(8)]);
var inst_24871 = cljs.core.vec.call(null,inst_24857);
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24893__$1,(11),out,inst_24871);
} else {
if((state_val_24894 === (5))){
var inst_24866 = (state_24893[(11)]);
var inst_24858 = (state_24893[(7)]);
var inst_24857 = (state_24893[(8)]);
var inst_24861 = (state_24893[(9)]);
var inst_24865 = (inst_24857[inst_24858] = inst_24861);
var inst_24866__$1 = (inst_24858 + (1));
var inst_24867 = (inst_24866__$1 < n);
var state_24893__$1 = (function (){var statearr_24907 = state_24893;
(statearr_24907[(11)] = inst_24866__$1);

(statearr_24907[(12)] = inst_24865);

return statearr_24907;
})();
if(cljs.core.truth_(inst_24867)){
var statearr_24908_24937 = state_24893__$1;
(statearr_24908_24937[(1)] = (8));

} else {
var statearr_24909_24938 = state_24893__$1;
(statearr_24909_24938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (14))){
var inst_24886 = (state_24893[(2)]);
var inst_24887 = cljs.core.async.close_BANG_.call(null,out);
var state_24893__$1 = (function (){var statearr_24911 = state_24893;
(statearr_24911[(13)] = inst_24886);

return statearr_24911;
})();
var statearr_24912_24939 = state_24893__$1;
(statearr_24912_24939[(2)] = inst_24887);

(statearr_24912_24939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (10))){
var inst_24877 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24913_24940 = state_24893__$1;
(statearr_24913_24940[(2)] = inst_24877);

(statearr_24913_24940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (8))){
var inst_24866 = (state_24893[(11)]);
var inst_24857 = (state_24893[(8)]);
var tmp24910 = inst_24857;
var inst_24857__$1 = tmp24910;
var inst_24858 = inst_24866;
var state_24893__$1 = (function (){var statearr_24914 = state_24893;
(statearr_24914[(7)] = inst_24858);

(statearr_24914[(8)] = inst_24857__$1);

return statearr_24914;
})();
var statearr_24915_24941 = state_24893__$1;
(statearr_24915_24941[(2)] = null);

(statearr_24915_24941[(1)] = (2));


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
});})(c__22304__auto___24927,out))
;
return ((function (switch__22192__auto__,c__22304__auto___24927,out){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_24919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24919[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_24919[(1)] = (1));

return statearr_24919;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_24893){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_24893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e24920){if((e24920 instanceof Object)){
var ex__22196__auto__ = e24920;
var statearr_24921_24942 = state_24893;
(statearr_24921_24942[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24943 = state_24893;
state_24893 = G__24943;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_24893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_24893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___24927,out))
})();
var state__22306__auto__ = (function (){var statearr_24922 = f__22305__auto__.call(null);
(statearr_24922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___24927);

return statearr_24922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___24927,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24944 = [];
var len__17883__auto___25018 = arguments.length;
var i__17884__auto___25019 = (0);
while(true){
if((i__17884__auto___25019 < len__17883__auto___25018)){
args24944.push((arguments[i__17884__auto___25019]));

var G__25020 = (i__17884__auto___25019 + (1));
i__17884__auto___25019 = G__25020;
continue;
} else {
}
break;
}

var G__24946 = args24944.length;
switch (G__24946) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24944.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22304__auto___25022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto___25022,out){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto___25022,out){
return (function (state_24988){
var state_val_24989 = (state_24988[(1)]);
if((state_val_24989 === (7))){
var inst_24984 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_24990_25023 = state_24988__$1;
(statearr_24990_25023[(2)] = inst_24984);

(statearr_24990_25023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (1))){
var inst_24947 = [];
var inst_24948 = inst_24947;
var inst_24949 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24988__$1 = (function (){var statearr_24991 = state_24988;
(statearr_24991[(7)] = inst_24948);

(statearr_24991[(8)] = inst_24949);

return statearr_24991;
})();
var statearr_24992_25024 = state_24988__$1;
(statearr_24992_25024[(2)] = null);

(statearr_24992_25024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (4))){
var inst_24952 = (state_24988[(9)]);
var inst_24952__$1 = (state_24988[(2)]);
var inst_24953 = (inst_24952__$1 == null);
var inst_24954 = cljs.core.not.call(null,inst_24953);
var state_24988__$1 = (function (){var statearr_24993 = state_24988;
(statearr_24993[(9)] = inst_24952__$1);

return statearr_24993;
})();
if(inst_24954){
var statearr_24994_25025 = state_24988__$1;
(statearr_24994_25025[(1)] = (5));

} else {
var statearr_24995_25026 = state_24988__$1;
(statearr_24995_25026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (15))){
var inst_24978 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_24996_25027 = state_24988__$1;
(statearr_24996_25027[(2)] = inst_24978);

(statearr_24996_25027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (13))){
var state_24988__$1 = state_24988;
var statearr_24997_25028 = state_24988__$1;
(statearr_24997_25028[(2)] = null);

(statearr_24997_25028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (6))){
var inst_24948 = (state_24988[(7)]);
var inst_24973 = inst_24948.length;
var inst_24974 = (inst_24973 > (0));
var state_24988__$1 = state_24988;
if(cljs.core.truth_(inst_24974)){
var statearr_24998_25029 = state_24988__$1;
(statearr_24998_25029[(1)] = (12));

} else {
var statearr_24999_25030 = state_24988__$1;
(statearr_24999_25030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (3))){
var inst_24986 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24988__$1,inst_24986);
} else {
if((state_val_24989 === (12))){
var inst_24948 = (state_24988[(7)]);
var inst_24976 = cljs.core.vec.call(null,inst_24948);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24988__$1,(15),out,inst_24976);
} else {
if((state_val_24989 === (2))){
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24988__$1,(4),ch);
} else {
if((state_val_24989 === (11))){
var inst_24952 = (state_24988[(9)]);
var inst_24956 = (state_24988[(10)]);
var inst_24966 = (state_24988[(2)]);
var inst_24967 = [];
var inst_24968 = inst_24967.push(inst_24952);
var inst_24948 = inst_24967;
var inst_24949 = inst_24956;
var state_24988__$1 = (function (){var statearr_25000 = state_24988;
(statearr_25000[(7)] = inst_24948);

(statearr_25000[(8)] = inst_24949);

(statearr_25000[(11)] = inst_24966);

(statearr_25000[(12)] = inst_24968);

return statearr_25000;
})();
var statearr_25001_25031 = state_24988__$1;
(statearr_25001_25031[(2)] = null);

(statearr_25001_25031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (9))){
var inst_24948 = (state_24988[(7)]);
var inst_24964 = cljs.core.vec.call(null,inst_24948);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24988__$1,(11),out,inst_24964);
} else {
if((state_val_24989 === (5))){
var inst_24949 = (state_24988[(8)]);
var inst_24952 = (state_24988[(9)]);
var inst_24956 = (state_24988[(10)]);
var inst_24956__$1 = f.call(null,inst_24952);
var inst_24957 = cljs.core._EQ_.call(null,inst_24956__$1,inst_24949);
var inst_24958 = cljs.core.keyword_identical_QMARK_.call(null,inst_24949,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24959 = (inst_24957) || (inst_24958);
var state_24988__$1 = (function (){var statearr_25002 = state_24988;
(statearr_25002[(10)] = inst_24956__$1);

return statearr_25002;
})();
if(cljs.core.truth_(inst_24959)){
var statearr_25003_25032 = state_24988__$1;
(statearr_25003_25032[(1)] = (8));

} else {
var statearr_25004_25033 = state_24988__$1;
(statearr_25004_25033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (14))){
var inst_24981 = (state_24988[(2)]);
var inst_24982 = cljs.core.async.close_BANG_.call(null,out);
var state_24988__$1 = (function (){var statearr_25006 = state_24988;
(statearr_25006[(13)] = inst_24981);

return statearr_25006;
})();
var statearr_25007_25034 = state_24988__$1;
(statearr_25007_25034[(2)] = inst_24982);

(statearr_25007_25034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (10))){
var inst_24971 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25008_25035 = state_24988__$1;
(statearr_25008_25035[(2)] = inst_24971);

(statearr_25008_25035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (8))){
var inst_24948 = (state_24988[(7)]);
var inst_24952 = (state_24988[(9)]);
var inst_24956 = (state_24988[(10)]);
var inst_24961 = inst_24948.push(inst_24952);
var tmp25005 = inst_24948;
var inst_24948__$1 = tmp25005;
var inst_24949 = inst_24956;
var state_24988__$1 = (function (){var statearr_25009 = state_24988;
(statearr_25009[(7)] = inst_24948__$1);

(statearr_25009[(8)] = inst_24949);

(statearr_25009[(14)] = inst_24961);

return statearr_25009;
})();
var statearr_25010_25036 = state_24988__$1;
(statearr_25010_25036[(2)] = null);

(statearr_25010_25036[(1)] = (2));


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
});})(c__22304__auto___25022,out))
;
return ((function (switch__22192__auto__,c__22304__auto___25022,out){
return (function() {
var cljs$core$async$state_machine__22193__auto__ = null;
var cljs$core$async$state_machine__22193__auto____0 = (function (){
var statearr_25014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25014[(0)] = cljs$core$async$state_machine__22193__auto__);

(statearr_25014[(1)] = (1));

return statearr_25014;
});
var cljs$core$async$state_machine__22193__auto____1 = (function (state_24988){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_24988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e25015){if((e25015 instanceof Object)){
var ex__22196__auto__ = e25015;
var statearr_25016_25037 = state_24988;
(statearr_25016_25037[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25038 = state_24988;
state_24988 = G__25038;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
cljs$core$async$state_machine__22193__auto__ = function(state_24988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22193__auto____1.call(this,state_24988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22193__auto____0;
cljs$core$async$state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22193__auto____1;
return cljs$core$async$state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto___25022,out))
})();
var state__22306__auto__ = (function (){var statearr_25017 = f__22305__auto__.call(null);
(statearr_25017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto___25022);

return statearr_25017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto___25022,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
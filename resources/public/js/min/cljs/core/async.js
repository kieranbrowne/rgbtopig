// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15483 = arguments.length;
switch (G__15483) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15484 = (function (f,blockable,meta15485){
this.f = f;
this.blockable = blockable;
this.meta15485 = meta15485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15486,meta15485__$1){
var self__ = this;
var _15486__$1 = this;
return (new cljs.core.async.t_cljs$core$async15484(self__.f,self__.blockable,meta15485__$1));
});

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15486){
var self__ = this;
var _15486__$1 = this;
return self__.meta15485;
});

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15485], null);
});

cljs.core.async.t_cljs$core$async15484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15484";

cljs.core.async.t_cljs$core$async15484.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async15484");
});

cljs.core.async.__GT_t_cljs$core$async15484 = (function cljs$core$async$__GT_t_cljs$core$async15484(f__$1,blockable__$1,meta15485){
return (new cljs.core.async.t_cljs$core$async15484(f__$1,blockable__$1,meta15485));
});

}

return (new cljs.core.async.t_cljs$core$async15484(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__15490 = arguments.length;
switch (G__15490) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15493 = arguments.length;
switch (G__15493) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__15496 = arguments.length;
switch (G__15496) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15498 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15498) : fn1.call(null,val_15498));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15498,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15498) : fn1.call(null,val_15498));
});})(val_15498,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__15500 = arguments.length;
switch (G__15500) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8615__auto___15502 = n;
var x_15503 = (0);
while(true){
if((x_15503 < n__8615__auto___15502)){
(a[x_15503] = (0));

var G__15504 = (x_15503 + (1));
x_15503 = G__15504;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15505 = (i + (1));
i = G__15505;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async15506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15506 = (function (flag,meta15507){
this.flag = flag;
this.meta15507 = meta15507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15508,meta15507__$1){
var self__ = this;
var _15508__$1 = this;
return (new cljs.core.async.t_cljs$core$async15506(self__.flag,meta15507__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15508){
var self__ = this;
var _15508__$1 = this;
return self__.meta15507;
});})(flag))
;

cljs.core.async.t_cljs$core$async15506.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15506.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15507], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15506";

cljs.core.async.t_cljs$core$async15506.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async15506");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15506 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15506(flag__$1,meta15507){
return (new cljs.core.async.t_cljs$core$async15506(flag__$1,meta15507));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15506(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15509 = (function (flag,cb,meta15510){
this.flag = flag;
this.cb = cb;
this.meta15510 = meta15510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15511,meta15510__$1){
var self__ = this;
var _15511__$1 = this;
return (new cljs.core.async.t_cljs$core$async15509(self__.flag,self__.cb,meta15510__$1));
});

cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15511){
var self__ = this;
var _15511__$1 = this;
return self__.meta15510;
});

cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15510], null);
});

cljs.core.async.t_cljs$core$async15509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15509";

cljs.core.async.t_cljs$core$async15509.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async15509");
});

cljs.core.async.__GT_t_cljs$core$async15509 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15509(flag__$1,cb__$1,meta15510){
return (new cljs.core.async.t_cljs$core$async15509(flag__$1,cb__$1,meta15510));
});

}

return (new cljs.core.async.t_cljs$core$async15509(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15512_SHARP_){
var G__15514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15512_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15514) : fret.call(null,G__15514));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15513_SHARP_){
var G__15515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15513_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15515) : fret.call(null,G__15515));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__7668__auto__ = wport;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15516 = (i + (1));
i = G__15516;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7668__auto__ = ret;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__7656__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7656__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__8835__auto__ = [];
var len__8828__auto___15522 = arguments.length;
var i__8829__auto___15523 = (0);
while(true){
if((i__8829__auto___15523 < len__8828__auto___15522)){
args__8835__auto__.push((arguments[i__8829__auto___15523]));

var G__15524 = (i__8829__auto___15523 + (1));
i__8829__auto___15523 = G__15524;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15519){
var map__15520 = p__15519;
var map__15520__$1 = ((((!((map__15520 == null)))?((((map__15520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15520):map__15520);
var opts = map__15520__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15517){
var G__15518 = cljs.core.first(seq15517);
var seq15517__$1 = cljs.core.next(seq15517);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15518,seq15517__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15526 = arguments.length;
switch (G__15526) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15437__auto___15572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___15572){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___15572){
return (function (state_15550){
var state_val_15551 = (state_15550[(1)]);
if((state_val_15551 === (7))){
var inst_15546 = (state_15550[(2)]);
var state_15550__$1 = state_15550;
var statearr_15552_15573 = state_15550__$1;
(statearr_15552_15573[(2)] = inst_15546);

(statearr_15552_15573[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (1))){
var state_15550__$1 = state_15550;
var statearr_15553_15574 = state_15550__$1;
(statearr_15553_15574[(2)] = null);

(statearr_15553_15574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (4))){
var inst_15529 = (state_15550[(7)]);
var inst_15529__$1 = (state_15550[(2)]);
var inst_15530 = (inst_15529__$1 == null);
var state_15550__$1 = (function (){var statearr_15554 = state_15550;
(statearr_15554[(7)] = inst_15529__$1);

return statearr_15554;
})();
if(cljs.core.truth_(inst_15530)){
var statearr_15555_15575 = state_15550__$1;
(statearr_15555_15575[(1)] = (5));

} else {
var statearr_15556_15576 = state_15550__$1;
(statearr_15556_15576[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (13))){
var state_15550__$1 = state_15550;
var statearr_15557_15577 = state_15550__$1;
(statearr_15557_15577[(2)] = null);

(statearr_15557_15577[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (6))){
var inst_15529 = (state_15550[(7)]);
var state_15550__$1 = state_15550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15550__$1,(11),to,inst_15529);
} else {
if((state_val_15551 === (3))){
var inst_15548 = (state_15550[(2)]);
var state_15550__$1 = state_15550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15550__$1,inst_15548);
} else {
if((state_val_15551 === (12))){
var state_15550__$1 = state_15550;
var statearr_15558_15578 = state_15550__$1;
(statearr_15558_15578[(2)] = null);

(statearr_15558_15578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (2))){
var state_15550__$1 = state_15550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15550__$1,(4),from);
} else {
if((state_val_15551 === (11))){
var inst_15539 = (state_15550[(2)]);
var state_15550__$1 = state_15550;
if(cljs.core.truth_(inst_15539)){
var statearr_15559_15579 = state_15550__$1;
(statearr_15559_15579[(1)] = (12));

} else {
var statearr_15560_15580 = state_15550__$1;
(statearr_15560_15580[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (9))){
var state_15550__$1 = state_15550;
var statearr_15561_15581 = state_15550__$1;
(statearr_15561_15581[(2)] = null);

(statearr_15561_15581[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (5))){
var state_15550__$1 = state_15550;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15562_15582 = state_15550__$1;
(statearr_15562_15582[(1)] = (8));

} else {
var statearr_15563_15583 = state_15550__$1;
(statearr_15563_15583[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (14))){
var inst_15544 = (state_15550[(2)]);
var state_15550__$1 = state_15550;
var statearr_15564_15584 = state_15550__$1;
(statearr_15564_15584[(2)] = inst_15544);

(statearr_15564_15584[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (10))){
var inst_15536 = (state_15550[(2)]);
var state_15550__$1 = state_15550;
var statearr_15565_15585 = state_15550__$1;
(statearr_15565_15585[(2)] = inst_15536);

(statearr_15565_15585[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (8))){
var inst_15533 = cljs.core.async.close_BANG_(to);
var state_15550__$1 = state_15550;
var statearr_15566_15586 = state_15550__$1;
(statearr_15566_15586[(2)] = inst_15533);

(statearr_15566_15586[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___15572))
;
return ((function (switch__15337__auto__,c__15437__auto___15572){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_15567 = [null,null,null,null,null,null,null,null];
(statearr_15567[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_15567[(1)] = (1));

return statearr_15567;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_15550){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_15550);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e15568){if((e15568 instanceof Object)){
var ex__15341__auto__ = e15568;
var statearr_15569_15587 = state_15550;
(statearr_15569_15587[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15550);

return cljs.core.cst$kw$recur;
} else {
throw e15568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__15588 = state_15550;
state_15550 = G__15588;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_15550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_15550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___15572))
})();
var state__15439__auto__ = (function (){var statearr_15570 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_15570[(6)] = c__15437__auto___15572);

return statearr_15570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___15572))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15589){
var vec__15590 = p__15589;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590,(1),null);
var job = vec__15590;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15437__auto___15761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___15761,res,vec__15590,v,p,job,jobs,results){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___15761,res,vec__15590,v,p,job,jobs,results){
return (function (state_15597){
var state_val_15598 = (state_15597[(1)]);
if((state_val_15598 === (1))){
var state_15597__$1 = state_15597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15597__$1,(2),res,v);
} else {
if((state_val_15598 === (2))){
var inst_15594 = (state_15597[(2)]);
var inst_15595 = cljs.core.async.close_BANG_(res);
var state_15597__$1 = (function (){var statearr_15599 = state_15597;
(statearr_15599[(7)] = inst_15594);

return statearr_15599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15597__$1,inst_15595);
} else {
return null;
}
}
});})(c__15437__auto___15761,res,vec__15590,v,p,job,jobs,results))
;
return ((function (switch__15337__auto__,c__15437__auto___15761,res,vec__15590,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0 = (function (){
var statearr_15600 = [null,null,null,null,null,null,null,null];
(statearr_15600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__);

(statearr_15600[(1)] = (1));

return statearr_15600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1 = (function (state_15597){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_15597);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e15601){if((e15601 instanceof Object)){
var ex__15341__auto__ = e15601;
var statearr_15602_15762 = state_15597;
(statearr_15602_15762[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15597);

return cljs.core.cst$kw$recur;
} else {
throw e15601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__15763 = state_15597;
state_15597 = G__15763;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__ = function(state_15597){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1.call(this,state_15597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___15761,res,vec__15590,v,p,job,jobs,results))
})();
var state__15439__auto__ = (function (){var statearr_15603 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_15603[(6)] = c__15437__auto___15761);

return statearr_15603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___15761,res,vec__15590,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15604){
var vec__15605 = p__15604;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15605,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15605,(1),null);
var job = vec__15605;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8615__auto___15764 = n;
var __15765 = (0);
while(true){
if((__15765 < n__8615__auto___15764)){
var G__15608_15766 = type;
var G__15608_15767__$1 = (((G__15608_15766 instanceof cljs.core.Keyword))?G__15608_15766.fqn:null);
switch (G__15608_15767__$1) {
case "compute":
var c__15437__auto___15769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15765,c__15437__auto___15769,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (__15765,c__15437__auto___15769,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async){
return (function (state_15621){
var state_val_15622 = (state_15621[(1)]);
if((state_val_15622 === (1))){
var state_15621__$1 = state_15621;
var statearr_15623_15770 = state_15621__$1;
(statearr_15623_15770[(2)] = null);

(statearr_15623_15770[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15622 === (2))){
var state_15621__$1 = state_15621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15621__$1,(4),jobs);
} else {
if((state_val_15622 === (3))){
var inst_15619 = (state_15621[(2)]);
var state_15621__$1 = state_15621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15621__$1,inst_15619);
} else {
if((state_val_15622 === (4))){
var inst_15611 = (state_15621[(2)]);
var inst_15612 = process(inst_15611);
var state_15621__$1 = state_15621;
if(cljs.core.truth_(inst_15612)){
var statearr_15624_15771 = state_15621__$1;
(statearr_15624_15771[(1)] = (5));

} else {
var statearr_15625_15772 = state_15621__$1;
(statearr_15625_15772[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15622 === (5))){
var state_15621__$1 = state_15621;
var statearr_15626_15773 = state_15621__$1;
(statearr_15626_15773[(2)] = null);

(statearr_15626_15773[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15622 === (6))){
var state_15621__$1 = state_15621;
var statearr_15627_15774 = state_15621__$1;
(statearr_15627_15774[(2)] = null);

(statearr_15627_15774[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15622 === (7))){
var inst_15617 = (state_15621[(2)]);
var state_15621__$1 = state_15621;
var statearr_15628_15775 = state_15621__$1;
(statearr_15628_15775[(2)] = inst_15617);

(statearr_15628_15775[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15765,c__15437__auto___15769,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async))
;
return ((function (__15765,switch__15337__auto__,c__15437__auto___15769,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0 = (function (){
var statearr_15629 = [null,null,null,null,null,null,null];
(statearr_15629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__);

(statearr_15629[(1)] = (1));

return statearr_15629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1 = (function (state_15621){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_15621);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e15630){if((e15630 instanceof Object)){
var ex__15341__auto__ = e15630;
var statearr_15631_15776 = state_15621;
(statearr_15631_15776[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15621);

return cljs.core.cst$kw$recur;
} else {
throw e15630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__15777 = state_15621;
state_15621 = G__15777;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__ = function(state_15621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1.call(this,state_15621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__;
})()
;})(__15765,switch__15337__auto__,c__15437__auto___15769,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async))
})();
var state__15439__auto__ = (function (){var statearr_15632 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_15632[(6)] = c__15437__auto___15769);

return statearr_15632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(__15765,c__15437__auto___15769,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async))
);


break;
case "async":
var c__15437__auto___15778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15765,c__15437__auto___15778,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (__15765,c__15437__auto___15778,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async){
return (function (state_15645){
var state_val_15646 = (state_15645[(1)]);
if((state_val_15646 === (1))){
var state_15645__$1 = state_15645;
var statearr_15647_15779 = state_15645__$1;
(statearr_15647_15779[(2)] = null);

(statearr_15647_15779[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (2))){
var state_15645__$1 = state_15645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15645__$1,(4),jobs);
} else {
if((state_val_15646 === (3))){
var inst_15643 = (state_15645[(2)]);
var state_15645__$1 = state_15645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15645__$1,inst_15643);
} else {
if((state_val_15646 === (4))){
var inst_15635 = (state_15645[(2)]);
var inst_15636 = async(inst_15635);
var state_15645__$1 = state_15645;
if(cljs.core.truth_(inst_15636)){
var statearr_15648_15780 = state_15645__$1;
(statearr_15648_15780[(1)] = (5));

} else {
var statearr_15649_15781 = state_15645__$1;
(statearr_15649_15781[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (5))){
var state_15645__$1 = state_15645;
var statearr_15650_15782 = state_15645__$1;
(statearr_15650_15782[(2)] = null);

(statearr_15650_15782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (6))){
var state_15645__$1 = state_15645;
var statearr_15651_15783 = state_15645__$1;
(statearr_15651_15783[(2)] = null);

(statearr_15651_15783[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (7))){
var inst_15641 = (state_15645[(2)]);
var state_15645__$1 = state_15645;
var statearr_15652_15784 = state_15645__$1;
(statearr_15652_15784[(2)] = inst_15641);

(statearr_15652_15784[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15765,c__15437__auto___15778,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async))
;
return ((function (__15765,switch__15337__auto__,c__15437__auto___15778,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0 = (function (){
var statearr_15653 = [null,null,null,null,null,null,null];
(statearr_15653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__);

(statearr_15653[(1)] = (1));

return statearr_15653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1 = (function (state_15645){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_15645);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e15654){if((e15654 instanceof Object)){
var ex__15341__auto__ = e15654;
var statearr_15655_15785 = state_15645;
(statearr_15655_15785[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15645);

return cljs.core.cst$kw$recur;
} else {
throw e15654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__15786 = state_15645;
state_15645 = G__15786;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__ = function(state_15645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1.call(this,state_15645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__;
})()
;})(__15765,switch__15337__auto__,c__15437__auto___15778,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async))
})();
var state__15439__auto__ = (function (){var statearr_15656 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_15656[(6)] = c__15437__auto___15778);

return statearr_15656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(__15765,c__15437__auto___15778,G__15608_15766,G__15608_15767__$1,n__8615__auto___15764,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15608_15767__$1)].join('')));

}

var G__15787 = (__15765 + (1));
__15765 = G__15787;
continue;
} else {
}
break;
}

var c__15437__auto___15788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___15788,jobs,results,process,async){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___15788,jobs,results,process,async){
return (function (state_15678){
var state_val_15679 = (state_15678[(1)]);
if((state_val_15679 === (1))){
var state_15678__$1 = state_15678;
var statearr_15680_15789 = state_15678__$1;
(statearr_15680_15789[(2)] = null);

(statearr_15680_15789[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15679 === (2))){
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15678__$1,(4),from);
} else {
if((state_val_15679 === (3))){
var inst_15676 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15678__$1,inst_15676);
} else {
if((state_val_15679 === (4))){
var inst_15659 = (state_15678[(7)]);
var inst_15659__$1 = (state_15678[(2)]);
var inst_15660 = (inst_15659__$1 == null);
var state_15678__$1 = (function (){var statearr_15681 = state_15678;
(statearr_15681[(7)] = inst_15659__$1);

return statearr_15681;
})();
if(cljs.core.truth_(inst_15660)){
var statearr_15682_15790 = state_15678__$1;
(statearr_15682_15790[(1)] = (5));

} else {
var statearr_15683_15791 = state_15678__$1;
(statearr_15683_15791[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15679 === (5))){
var inst_15662 = cljs.core.async.close_BANG_(jobs);
var state_15678__$1 = state_15678;
var statearr_15684_15792 = state_15678__$1;
(statearr_15684_15792[(2)] = inst_15662);

(statearr_15684_15792[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15679 === (6))){
var inst_15659 = (state_15678[(7)]);
var inst_15664 = (state_15678[(8)]);
var inst_15664__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15666 = [inst_15659,inst_15664__$1];
var inst_15667 = (new cljs.core.PersistentVector(null,2,(5),inst_15665,inst_15666,null));
var state_15678__$1 = (function (){var statearr_15685 = state_15678;
(statearr_15685[(8)] = inst_15664__$1);

return statearr_15685;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15678__$1,(8),jobs,inst_15667);
} else {
if((state_val_15679 === (7))){
var inst_15674 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15686_15793 = state_15678__$1;
(statearr_15686_15793[(2)] = inst_15674);

(statearr_15686_15793[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15679 === (8))){
var inst_15664 = (state_15678[(8)]);
var inst_15669 = (state_15678[(2)]);
var state_15678__$1 = (function (){var statearr_15687 = state_15678;
(statearr_15687[(9)] = inst_15669);

return statearr_15687;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15678__$1,(9),results,inst_15664);
} else {
if((state_val_15679 === (9))){
var inst_15671 = (state_15678[(2)]);
var state_15678__$1 = (function (){var statearr_15688 = state_15678;
(statearr_15688[(10)] = inst_15671);

return statearr_15688;
})();
var statearr_15689_15794 = state_15678__$1;
(statearr_15689_15794[(2)] = null);

(statearr_15689_15794[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___15788,jobs,results,process,async))
;
return ((function (switch__15337__auto__,c__15437__auto___15788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0 = (function (){
var statearr_15690 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__);

(statearr_15690[(1)] = (1));

return statearr_15690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1 = (function (state_15678){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_15678);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e15691){if((e15691 instanceof Object)){
var ex__15341__auto__ = e15691;
var statearr_15692_15795 = state_15678;
(statearr_15692_15795[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15678);

return cljs.core.cst$kw$recur;
} else {
throw e15691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__15796 = state_15678;
state_15678 = G__15796;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__ = function(state_15678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1.call(this,state_15678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___15788,jobs,results,process,async))
})();
var state__15439__auto__ = (function (){var statearr_15693 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_15693[(6)] = c__15437__auto___15788);

return statearr_15693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___15788,jobs,results,process,async))
);


var c__15437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto__,jobs,results,process,async){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto__,jobs,results,process,async){
return (function (state_15731){
var state_val_15732 = (state_15731[(1)]);
if((state_val_15732 === (7))){
var inst_15727 = (state_15731[(2)]);
var state_15731__$1 = state_15731;
var statearr_15733_15797 = state_15731__$1;
(statearr_15733_15797[(2)] = inst_15727);

(statearr_15733_15797[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (20))){
var state_15731__$1 = state_15731;
var statearr_15734_15798 = state_15731__$1;
(statearr_15734_15798[(2)] = null);

(statearr_15734_15798[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (1))){
var state_15731__$1 = state_15731;
var statearr_15735_15799 = state_15731__$1;
(statearr_15735_15799[(2)] = null);

(statearr_15735_15799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (4))){
var inst_15696 = (state_15731[(7)]);
var inst_15696__$1 = (state_15731[(2)]);
var inst_15697 = (inst_15696__$1 == null);
var state_15731__$1 = (function (){var statearr_15736 = state_15731;
(statearr_15736[(7)] = inst_15696__$1);

return statearr_15736;
})();
if(cljs.core.truth_(inst_15697)){
var statearr_15737_15800 = state_15731__$1;
(statearr_15737_15800[(1)] = (5));

} else {
var statearr_15738_15801 = state_15731__$1;
(statearr_15738_15801[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (15))){
var inst_15709 = (state_15731[(8)]);
var state_15731__$1 = state_15731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15731__$1,(18),to,inst_15709);
} else {
if((state_val_15732 === (21))){
var inst_15722 = (state_15731[(2)]);
var state_15731__$1 = state_15731;
var statearr_15739_15802 = state_15731__$1;
(statearr_15739_15802[(2)] = inst_15722);

(statearr_15739_15802[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (13))){
var inst_15724 = (state_15731[(2)]);
var state_15731__$1 = (function (){var statearr_15740 = state_15731;
(statearr_15740[(9)] = inst_15724);

return statearr_15740;
})();
var statearr_15741_15803 = state_15731__$1;
(statearr_15741_15803[(2)] = null);

(statearr_15741_15803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (6))){
var inst_15696 = (state_15731[(7)]);
var state_15731__$1 = state_15731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15731__$1,(11),inst_15696);
} else {
if((state_val_15732 === (17))){
var inst_15717 = (state_15731[(2)]);
var state_15731__$1 = state_15731;
if(cljs.core.truth_(inst_15717)){
var statearr_15742_15804 = state_15731__$1;
(statearr_15742_15804[(1)] = (19));

} else {
var statearr_15743_15805 = state_15731__$1;
(statearr_15743_15805[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (3))){
var inst_15729 = (state_15731[(2)]);
var state_15731__$1 = state_15731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15731__$1,inst_15729);
} else {
if((state_val_15732 === (12))){
var inst_15706 = (state_15731[(10)]);
var state_15731__$1 = state_15731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15731__$1,(14),inst_15706);
} else {
if((state_val_15732 === (2))){
var state_15731__$1 = state_15731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15731__$1,(4),results);
} else {
if((state_val_15732 === (19))){
var state_15731__$1 = state_15731;
var statearr_15744_15806 = state_15731__$1;
(statearr_15744_15806[(2)] = null);

(statearr_15744_15806[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (11))){
var inst_15706 = (state_15731[(2)]);
var state_15731__$1 = (function (){var statearr_15745 = state_15731;
(statearr_15745[(10)] = inst_15706);

return statearr_15745;
})();
var statearr_15746_15807 = state_15731__$1;
(statearr_15746_15807[(2)] = null);

(statearr_15746_15807[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (9))){
var state_15731__$1 = state_15731;
var statearr_15747_15808 = state_15731__$1;
(statearr_15747_15808[(2)] = null);

(statearr_15747_15808[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (5))){
var state_15731__$1 = state_15731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15748_15809 = state_15731__$1;
(statearr_15748_15809[(1)] = (8));

} else {
var statearr_15749_15810 = state_15731__$1;
(statearr_15749_15810[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (14))){
var inst_15711 = (state_15731[(11)]);
var inst_15709 = (state_15731[(8)]);
var inst_15709__$1 = (state_15731[(2)]);
var inst_15710 = (inst_15709__$1 == null);
var inst_15711__$1 = cljs.core.not(inst_15710);
var state_15731__$1 = (function (){var statearr_15750 = state_15731;
(statearr_15750[(11)] = inst_15711__$1);

(statearr_15750[(8)] = inst_15709__$1);

return statearr_15750;
})();
if(inst_15711__$1){
var statearr_15751_15811 = state_15731__$1;
(statearr_15751_15811[(1)] = (15));

} else {
var statearr_15752_15812 = state_15731__$1;
(statearr_15752_15812[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (16))){
var inst_15711 = (state_15731[(11)]);
var state_15731__$1 = state_15731;
var statearr_15753_15813 = state_15731__$1;
(statearr_15753_15813[(2)] = inst_15711);

(statearr_15753_15813[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (10))){
var inst_15703 = (state_15731[(2)]);
var state_15731__$1 = state_15731;
var statearr_15754_15814 = state_15731__$1;
(statearr_15754_15814[(2)] = inst_15703);

(statearr_15754_15814[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (18))){
var inst_15714 = (state_15731[(2)]);
var state_15731__$1 = state_15731;
var statearr_15755_15815 = state_15731__$1;
(statearr_15755_15815[(2)] = inst_15714);

(statearr_15755_15815[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15732 === (8))){
var inst_15700 = cljs.core.async.close_BANG_(to);
var state_15731__$1 = state_15731;
var statearr_15756_15816 = state_15731__$1;
(statearr_15756_15816[(2)] = inst_15700);

(statearr_15756_15816[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto__,jobs,results,process,async))
;
return ((function (switch__15337__auto__,c__15437__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0 = (function (){
var statearr_15757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__);

(statearr_15757[(1)] = (1));

return statearr_15757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1 = (function (state_15731){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_15731);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e15758){if((e15758 instanceof Object)){
var ex__15341__auto__ = e15758;
var statearr_15759_15817 = state_15731;
(statearr_15759_15817[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15731);

return cljs.core.cst$kw$recur;
} else {
throw e15758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__15818 = state_15731;
state_15731 = G__15818;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__ = function(state_15731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1.call(this,state_15731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto__,jobs,results,process,async))
})();
var state__15439__auto__ = (function (){var statearr_15760 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_15760[(6)] = c__15437__auto__);

return statearr_15760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto__,jobs,results,process,async))
);

return c__15437__auto__;
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
var G__15820 = arguments.length;
switch (G__15820) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__15823 = arguments.length;
switch (G__15823) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__15826 = arguments.length;
switch (G__15826) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15437__auto___15875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___15875,tc,fc){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___15875,tc,fc){
return (function (state_15852){
var state_val_15853 = (state_15852[(1)]);
if((state_val_15853 === (7))){
var inst_15848 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
var statearr_15854_15876 = state_15852__$1;
(statearr_15854_15876[(2)] = inst_15848);

(statearr_15854_15876[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15853 === (1))){
var state_15852__$1 = state_15852;
var statearr_15855_15877 = state_15852__$1;
(statearr_15855_15877[(2)] = null);

(statearr_15855_15877[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15853 === (4))){
var inst_15829 = (state_15852[(7)]);
var inst_15829__$1 = (state_15852[(2)]);
var inst_15830 = (inst_15829__$1 == null);
var state_15852__$1 = (function (){var statearr_15856 = state_15852;
(statearr_15856[(7)] = inst_15829__$1);

return statearr_15856;
})();
if(cljs.core.truth_(inst_15830)){
var statearr_15857_15878 = state_15852__$1;
(statearr_15857_15878[(1)] = (5));

} else {
var statearr_15858_15879 = state_15852__$1;
(statearr_15858_15879[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15853 === (13))){
var state_15852__$1 = state_15852;
var statearr_15859_15880 = state_15852__$1;
(statearr_15859_15880[(2)] = null);

(statearr_15859_15880[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15853 === (6))){
var inst_15829 = (state_15852[(7)]);
var inst_15835 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15829) : p.call(null,inst_15829));
var state_15852__$1 = state_15852;
if(cljs.core.truth_(inst_15835)){
var statearr_15860_15881 = state_15852__$1;
(statearr_15860_15881[(1)] = (9));

} else {
var statearr_15861_15882 = state_15852__$1;
(statearr_15861_15882[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15853 === (3))){
var inst_15850 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15852__$1,inst_15850);
} else {
if((state_val_15853 === (12))){
var state_15852__$1 = state_15852;
var statearr_15862_15883 = state_15852__$1;
(statearr_15862_15883[(2)] = null);

(statearr_15862_15883[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15853 === (2))){
var state_15852__$1 = state_15852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15852__$1,(4),ch);
} else {
if((state_val_15853 === (11))){
var inst_15829 = (state_15852[(7)]);
var inst_15839 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15852__$1,(8),inst_15839,inst_15829);
} else {
if((state_val_15853 === (9))){
var state_15852__$1 = state_15852;
var statearr_15863_15884 = state_15852__$1;
(statearr_15863_15884[(2)] = tc);

(statearr_15863_15884[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15853 === (5))){
var inst_15832 = cljs.core.async.close_BANG_(tc);
var inst_15833 = cljs.core.async.close_BANG_(fc);
var state_15852__$1 = (function (){var statearr_15864 = state_15852;
(statearr_15864[(8)] = inst_15832);

return statearr_15864;
})();
var statearr_15865_15885 = state_15852__$1;
(statearr_15865_15885[(2)] = inst_15833);

(statearr_15865_15885[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15853 === (14))){
var inst_15846 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
var statearr_15866_15886 = state_15852__$1;
(statearr_15866_15886[(2)] = inst_15846);

(statearr_15866_15886[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15853 === (10))){
var state_15852__$1 = state_15852;
var statearr_15867_15887 = state_15852__$1;
(statearr_15867_15887[(2)] = fc);

(statearr_15867_15887[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15853 === (8))){
var inst_15841 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
if(cljs.core.truth_(inst_15841)){
var statearr_15868_15888 = state_15852__$1;
(statearr_15868_15888[(1)] = (12));

} else {
var statearr_15869_15889 = state_15852__$1;
(statearr_15869_15889[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___15875,tc,fc))
;
return ((function (switch__15337__auto__,c__15437__auto___15875,tc,fc){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_15870 = [null,null,null,null,null,null,null,null,null];
(statearr_15870[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_15870[(1)] = (1));

return statearr_15870;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_15852){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_15852);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e15871){if((e15871 instanceof Object)){
var ex__15341__auto__ = e15871;
var statearr_15872_15890 = state_15852;
(statearr_15872_15890[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15852);

return cljs.core.cst$kw$recur;
} else {
throw e15871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__15891 = state_15852;
state_15852 = G__15891;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_15852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_15852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___15875,tc,fc))
})();
var state__15439__auto__ = (function (){var statearr_15873 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_15873[(6)] = c__15437__auto___15875);

return statearr_15873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___15875,tc,fc))
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
var c__15437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto__){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto__){
return (function (state_15912){
var state_val_15913 = (state_15912[(1)]);
if((state_val_15913 === (7))){
var inst_15908 = (state_15912[(2)]);
var state_15912__$1 = state_15912;
var statearr_15914_15932 = state_15912__$1;
(statearr_15914_15932[(2)] = inst_15908);

(statearr_15914_15932[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15913 === (1))){
var inst_15892 = init;
var state_15912__$1 = (function (){var statearr_15915 = state_15912;
(statearr_15915[(7)] = inst_15892);

return statearr_15915;
})();
var statearr_15916_15933 = state_15912__$1;
(statearr_15916_15933[(2)] = null);

(statearr_15916_15933[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15913 === (4))){
var inst_15895 = (state_15912[(8)]);
var inst_15895__$1 = (state_15912[(2)]);
var inst_15896 = (inst_15895__$1 == null);
var state_15912__$1 = (function (){var statearr_15917 = state_15912;
(statearr_15917[(8)] = inst_15895__$1);

return statearr_15917;
})();
if(cljs.core.truth_(inst_15896)){
var statearr_15918_15934 = state_15912__$1;
(statearr_15918_15934[(1)] = (5));

} else {
var statearr_15919_15935 = state_15912__$1;
(statearr_15919_15935[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15913 === (6))){
var inst_15892 = (state_15912[(7)]);
var inst_15895 = (state_15912[(8)]);
var inst_15899 = (state_15912[(9)]);
var inst_15899__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15892,inst_15895) : f.call(null,inst_15892,inst_15895));
var inst_15900 = cljs.core.reduced_QMARK_(inst_15899__$1);
var state_15912__$1 = (function (){var statearr_15920 = state_15912;
(statearr_15920[(9)] = inst_15899__$1);

return statearr_15920;
})();
if(inst_15900){
var statearr_15921_15936 = state_15912__$1;
(statearr_15921_15936[(1)] = (8));

} else {
var statearr_15922_15937 = state_15912__$1;
(statearr_15922_15937[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15913 === (3))){
var inst_15910 = (state_15912[(2)]);
var state_15912__$1 = state_15912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15912__$1,inst_15910);
} else {
if((state_val_15913 === (2))){
var state_15912__$1 = state_15912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15912__$1,(4),ch);
} else {
if((state_val_15913 === (9))){
var inst_15899 = (state_15912[(9)]);
var inst_15892 = inst_15899;
var state_15912__$1 = (function (){var statearr_15923 = state_15912;
(statearr_15923[(7)] = inst_15892);

return statearr_15923;
})();
var statearr_15924_15938 = state_15912__$1;
(statearr_15924_15938[(2)] = null);

(statearr_15924_15938[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15913 === (5))){
var inst_15892 = (state_15912[(7)]);
var state_15912__$1 = state_15912;
var statearr_15925_15939 = state_15912__$1;
(statearr_15925_15939[(2)] = inst_15892);

(statearr_15925_15939[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15913 === (10))){
var inst_15906 = (state_15912[(2)]);
var state_15912__$1 = state_15912;
var statearr_15926_15940 = state_15912__$1;
(statearr_15926_15940[(2)] = inst_15906);

(statearr_15926_15940[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15913 === (8))){
var inst_15899 = (state_15912[(9)]);
var inst_15902 = cljs.core.deref(inst_15899);
var state_15912__$1 = state_15912;
var statearr_15927_15941 = state_15912__$1;
(statearr_15927_15941[(2)] = inst_15902);

(statearr_15927_15941[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto__))
;
return ((function (switch__15337__auto__,c__15437__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15338__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15338__auto____0 = (function (){
var statearr_15928 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15928[(0)] = cljs$core$async$reduce_$_state_machine__15338__auto__);

(statearr_15928[(1)] = (1));

return statearr_15928;
});
var cljs$core$async$reduce_$_state_machine__15338__auto____1 = (function (state_15912){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_15912);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e15929){if((e15929 instanceof Object)){
var ex__15341__auto__ = e15929;
var statearr_15930_15942 = state_15912;
(statearr_15930_15942[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15912);

return cljs.core.cst$kw$recur;
} else {
throw e15929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__15943 = state_15912;
state_15912 = G__15943;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15338__auto__ = function(state_15912){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15338__auto____1.call(this,state_15912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15338__auto____0;
cljs$core$async$reduce_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15338__auto____1;
return cljs$core$async$reduce_$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto__))
})();
var state__15439__auto__ = (function (){var statearr_15931 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_15931[(6)] = c__15437__auto__);

return statearr_15931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto__))
);

return c__15437__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto__,f__$1){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto__,f__$1){
return (function (state_15949){
var state_val_15950 = (state_15949[(1)]);
if((state_val_15950 === (1))){
var inst_15944 = cljs.core.async.reduce(f__$1,init,ch);
var state_15949__$1 = state_15949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15949__$1,(2),inst_15944);
} else {
if((state_val_15950 === (2))){
var inst_15946 = (state_15949[(2)]);
var inst_15947 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15946) : f__$1.call(null,inst_15946));
var state_15949__$1 = state_15949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15949__$1,inst_15947);
} else {
return null;
}
}
});})(c__15437__auto__,f__$1))
;
return ((function (switch__15337__auto__,c__15437__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15338__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15338__auto____0 = (function (){
var statearr_15951 = [null,null,null,null,null,null,null];
(statearr_15951[(0)] = cljs$core$async$transduce_$_state_machine__15338__auto__);

(statearr_15951[(1)] = (1));

return statearr_15951;
});
var cljs$core$async$transduce_$_state_machine__15338__auto____1 = (function (state_15949){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_15949);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e15952){if((e15952 instanceof Object)){
var ex__15341__auto__ = e15952;
var statearr_15953_15955 = state_15949;
(statearr_15953_15955[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15949);

return cljs.core.cst$kw$recur;
} else {
throw e15952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__15956 = state_15949;
state_15949 = G__15956;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15338__auto__ = function(state_15949){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15338__auto____1.call(this,state_15949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15338__auto____0;
cljs$core$async$transduce_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15338__auto____1;
return cljs$core$async$transduce_$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto__,f__$1))
})();
var state__15439__auto__ = (function (){var statearr_15954 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_15954[(6)] = c__15437__auto__);

return statearr_15954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto__,f__$1))
);

return c__15437__auto__;
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
var G__15958 = arguments.length;
switch (G__15958) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto__){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto__){
return (function (state_15983){
var state_val_15984 = (state_15983[(1)]);
if((state_val_15984 === (7))){
var inst_15965 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
var statearr_15985_16006 = state_15983__$1;
(statearr_15985_16006[(2)] = inst_15965);

(statearr_15985_16006[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15984 === (1))){
var inst_15959 = cljs.core.seq(coll);
var inst_15960 = inst_15959;
var state_15983__$1 = (function (){var statearr_15986 = state_15983;
(statearr_15986[(7)] = inst_15960);

return statearr_15986;
})();
var statearr_15987_16007 = state_15983__$1;
(statearr_15987_16007[(2)] = null);

(statearr_15987_16007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15984 === (4))){
var inst_15960 = (state_15983[(7)]);
var inst_15963 = cljs.core.first(inst_15960);
var state_15983__$1 = state_15983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15983__$1,(7),ch,inst_15963);
} else {
if((state_val_15984 === (13))){
var inst_15977 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
var statearr_15988_16008 = state_15983__$1;
(statearr_15988_16008[(2)] = inst_15977);

(statearr_15988_16008[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15984 === (6))){
var inst_15968 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
if(cljs.core.truth_(inst_15968)){
var statearr_15989_16009 = state_15983__$1;
(statearr_15989_16009[(1)] = (8));

} else {
var statearr_15990_16010 = state_15983__$1;
(statearr_15990_16010[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15984 === (3))){
var inst_15981 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15983__$1,inst_15981);
} else {
if((state_val_15984 === (12))){
var state_15983__$1 = state_15983;
var statearr_15991_16011 = state_15983__$1;
(statearr_15991_16011[(2)] = null);

(statearr_15991_16011[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15984 === (2))){
var inst_15960 = (state_15983[(7)]);
var state_15983__$1 = state_15983;
if(cljs.core.truth_(inst_15960)){
var statearr_15992_16012 = state_15983__$1;
(statearr_15992_16012[(1)] = (4));

} else {
var statearr_15993_16013 = state_15983__$1;
(statearr_15993_16013[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15984 === (11))){
var inst_15974 = cljs.core.async.close_BANG_(ch);
var state_15983__$1 = state_15983;
var statearr_15994_16014 = state_15983__$1;
(statearr_15994_16014[(2)] = inst_15974);

(statearr_15994_16014[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15984 === (9))){
var state_15983__$1 = state_15983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15995_16015 = state_15983__$1;
(statearr_15995_16015[(1)] = (11));

} else {
var statearr_15996_16016 = state_15983__$1;
(statearr_15996_16016[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15984 === (5))){
var inst_15960 = (state_15983[(7)]);
var state_15983__$1 = state_15983;
var statearr_15997_16017 = state_15983__$1;
(statearr_15997_16017[(2)] = inst_15960);

(statearr_15997_16017[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15984 === (10))){
var inst_15979 = (state_15983[(2)]);
var state_15983__$1 = state_15983;
var statearr_15998_16018 = state_15983__$1;
(statearr_15998_16018[(2)] = inst_15979);

(statearr_15998_16018[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15984 === (8))){
var inst_15960 = (state_15983[(7)]);
var inst_15970 = cljs.core.next(inst_15960);
var inst_15960__$1 = inst_15970;
var state_15983__$1 = (function (){var statearr_15999 = state_15983;
(statearr_15999[(7)] = inst_15960__$1);

return statearr_15999;
})();
var statearr_16000_16019 = state_15983__$1;
(statearr_16000_16019[(2)] = null);

(statearr_16000_16019[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto__))
;
return ((function (switch__15337__auto__,c__15437__auto__){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_16001 = [null,null,null,null,null,null,null,null];
(statearr_16001[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_16001[(1)] = (1));

return statearr_16001;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_15983){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_15983);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e16002){if((e16002 instanceof Object)){
var ex__15341__auto__ = e16002;
var statearr_16003_16020 = state_15983;
(statearr_16003_16020[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15983);

return cljs.core.cst$kw$recur;
} else {
throw e16002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__16021 = state_15983;
state_15983 = G__16021;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_15983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_15983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto__))
})();
var state__15439__auto__ = (function (){var statearr_16004 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_16004[(6)] = c__15437__auto__);

return statearr_16004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto__))
);

return c__15437__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
var x__8351__auto__ = (((_ == null))?null:_);
var m__8352__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8352__auto__.call(null,_));
} else {
var m__8352__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8352__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8352__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8352__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8352__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto__.call(null,m,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto__.call(null,m));
} else {
var m__8352__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16022 = (function (ch,cs,meta16023){
this.ch = ch;
this.cs = cs;
this.meta16023 = meta16023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16024,meta16023__$1){
var self__ = this;
var _16024__$1 = this;
return (new cljs.core.async.t_cljs$core$async16022(self__.ch,self__.cs,meta16023__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16024){
var self__ = this;
var _16024__$1 = this;
return self__.meta16023;
});})(cs))
;

cljs.core.async.t_cljs$core$async16022.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16022.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16022.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16022.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16022.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16022.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16023], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16022";

cljs.core.async.t_cljs$core$async16022.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16022");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16022 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16022(ch__$1,cs__$1,meta16023){
return (new cljs.core.async.t_cljs$core$async16022(ch__$1,cs__$1,meta16023));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16022(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15437__auto___16244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___16244,cs,m,dchan,dctr,done){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___16244,cs,m,dchan,dctr,done){
return (function (state_16159){
var state_val_16160 = (state_16159[(1)]);
if((state_val_16160 === (7))){
var inst_16155 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16161_16245 = state_16159__$1;
(statearr_16161_16245[(2)] = inst_16155);

(statearr_16161_16245[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (20))){
var inst_16058 = (state_16159[(7)]);
var inst_16070 = cljs.core.first(inst_16058);
var inst_16071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16070,(0),null);
var inst_16072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16070,(1),null);
var state_16159__$1 = (function (){var statearr_16162 = state_16159;
(statearr_16162[(8)] = inst_16071);

return statearr_16162;
})();
if(cljs.core.truth_(inst_16072)){
var statearr_16163_16246 = state_16159__$1;
(statearr_16163_16246[(1)] = (22));

} else {
var statearr_16164_16247 = state_16159__$1;
(statearr_16164_16247[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (27))){
var inst_16102 = (state_16159[(9)]);
var inst_16027 = (state_16159[(10)]);
var inst_16100 = (state_16159[(11)]);
var inst_16107 = (state_16159[(12)]);
var inst_16107__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16100,inst_16102);
var inst_16108 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16107__$1,inst_16027,done);
var state_16159__$1 = (function (){var statearr_16165 = state_16159;
(statearr_16165[(12)] = inst_16107__$1);

return statearr_16165;
})();
if(cljs.core.truth_(inst_16108)){
var statearr_16166_16248 = state_16159__$1;
(statearr_16166_16248[(1)] = (30));

} else {
var statearr_16167_16249 = state_16159__$1;
(statearr_16167_16249[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (1))){
var state_16159__$1 = state_16159;
var statearr_16168_16250 = state_16159__$1;
(statearr_16168_16250[(2)] = null);

(statearr_16168_16250[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (24))){
var inst_16058 = (state_16159[(7)]);
var inst_16077 = (state_16159[(2)]);
var inst_16078 = cljs.core.next(inst_16058);
var inst_16036 = inst_16078;
var inst_16037 = null;
var inst_16038 = (0);
var inst_16039 = (0);
var state_16159__$1 = (function (){var statearr_16169 = state_16159;
(statearr_16169[(13)] = inst_16077);

(statearr_16169[(14)] = inst_16039);

(statearr_16169[(15)] = inst_16038);

(statearr_16169[(16)] = inst_16036);

(statearr_16169[(17)] = inst_16037);

return statearr_16169;
})();
var statearr_16170_16251 = state_16159__$1;
(statearr_16170_16251[(2)] = null);

(statearr_16170_16251[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (39))){
var state_16159__$1 = state_16159;
var statearr_16174_16252 = state_16159__$1;
(statearr_16174_16252[(2)] = null);

(statearr_16174_16252[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (4))){
var inst_16027 = (state_16159[(10)]);
var inst_16027__$1 = (state_16159[(2)]);
var inst_16028 = (inst_16027__$1 == null);
var state_16159__$1 = (function (){var statearr_16175 = state_16159;
(statearr_16175[(10)] = inst_16027__$1);

return statearr_16175;
})();
if(cljs.core.truth_(inst_16028)){
var statearr_16176_16253 = state_16159__$1;
(statearr_16176_16253[(1)] = (5));

} else {
var statearr_16177_16254 = state_16159__$1;
(statearr_16177_16254[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (15))){
var inst_16039 = (state_16159[(14)]);
var inst_16038 = (state_16159[(15)]);
var inst_16036 = (state_16159[(16)]);
var inst_16037 = (state_16159[(17)]);
var inst_16054 = (state_16159[(2)]);
var inst_16055 = (inst_16039 + (1));
var tmp16171 = inst_16038;
var tmp16172 = inst_16036;
var tmp16173 = inst_16037;
var inst_16036__$1 = tmp16172;
var inst_16037__$1 = tmp16173;
var inst_16038__$1 = tmp16171;
var inst_16039__$1 = inst_16055;
var state_16159__$1 = (function (){var statearr_16178 = state_16159;
(statearr_16178[(14)] = inst_16039__$1);

(statearr_16178[(15)] = inst_16038__$1);

(statearr_16178[(16)] = inst_16036__$1);

(statearr_16178[(18)] = inst_16054);

(statearr_16178[(17)] = inst_16037__$1);

return statearr_16178;
})();
var statearr_16179_16255 = state_16159__$1;
(statearr_16179_16255[(2)] = null);

(statearr_16179_16255[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (21))){
var inst_16081 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16183_16256 = state_16159__$1;
(statearr_16183_16256[(2)] = inst_16081);

(statearr_16183_16256[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (31))){
var inst_16107 = (state_16159[(12)]);
var inst_16111 = done(null);
var inst_16112 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16107);
var state_16159__$1 = (function (){var statearr_16184 = state_16159;
(statearr_16184[(19)] = inst_16111);

return statearr_16184;
})();
var statearr_16185_16257 = state_16159__$1;
(statearr_16185_16257[(2)] = inst_16112);

(statearr_16185_16257[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (32))){
var inst_16102 = (state_16159[(9)]);
var inst_16099 = (state_16159[(20)]);
var inst_16101 = (state_16159[(21)]);
var inst_16100 = (state_16159[(11)]);
var inst_16114 = (state_16159[(2)]);
var inst_16115 = (inst_16102 + (1));
var tmp16180 = inst_16099;
var tmp16181 = inst_16101;
var tmp16182 = inst_16100;
var inst_16099__$1 = tmp16180;
var inst_16100__$1 = tmp16182;
var inst_16101__$1 = tmp16181;
var inst_16102__$1 = inst_16115;
var state_16159__$1 = (function (){var statearr_16186 = state_16159;
(statearr_16186[(9)] = inst_16102__$1);

(statearr_16186[(20)] = inst_16099__$1);

(statearr_16186[(21)] = inst_16101__$1);

(statearr_16186[(11)] = inst_16100__$1);

(statearr_16186[(22)] = inst_16114);

return statearr_16186;
})();
var statearr_16187_16258 = state_16159__$1;
(statearr_16187_16258[(2)] = null);

(statearr_16187_16258[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (40))){
var inst_16127 = (state_16159[(23)]);
var inst_16131 = done(null);
var inst_16132 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16127);
var state_16159__$1 = (function (){var statearr_16188 = state_16159;
(statearr_16188[(24)] = inst_16131);

return statearr_16188;
})();
var statearr_16189_16259 = state_16159__$1;
(statearr_16189_16259[(2)] = inst_16132);

(statearr_16189_16259[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (33))){
var inst_16118 = (state_16159[(25)]);
var inst_16120 = cljs.core.chunked_seq_QMARK_(inst_16118);
var state_16159__$1 = state_16159;
if(inst_16120){
var statearr_16190_16260 = state_16159__$1;
(statearr_16190_16260[(1)] = (36));

} else {
var statearr_16191_16261 = state_16159__$1;
(statearr_16191_16261[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (13))){
var inst_16048 = (state_16159[(26)]);
var inst_16051 = cljs.core.async.close_BANG_(inst_16048);
var state_16159__$1 = state_16159;
var statearr_16192_16262 = state_16159__$1;
(statearr_16192_16262[(2)] = inst_16051);

(statearr_16192_16262[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (22))){
var inst_16071 = (state_16159[(8)]);
var inst_16074 = cljs.core.async.close_BANG_(inst_16071);
var state_16159__$1 = state_16159;
var statearr_16193_16263 = state_16159__$1;
(statearr_16193_16263[(2)] = inst_16074);

(statearr_16193_16263[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (36))){
var inst_16118 = (state_16159[(25)]);
var inst_16122 = cljs.core.chunk_first(inst_16118);
var inst_16123 = cljs.core.chunk_rest(inst_16118);
var inst_16124 = cljs.core.count(inst_16122);
var inst_16099 = inst_16123;
var inst_16100 = inst_16122;
var inst_16101 = inst_16124;
var inst_16102 = (0);
var state_16159__$1 = (function (){var statearr_16194 = state_16159;
(statearr_16194[(9)] = inst_16102);

(statearr_16194[(20)] = inst_16099);

(statearr_16194[(21)] = inst_16101);

(statearr_16194[(11)] = inst_16100);

return statearr_16194;
})();
var statearr_16195_16264 = state_16159__$1;
(statearr_16195_16264[(2)] = null);

(statearr_16195_16264[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (41))){
var inst_16118 = (state_16159[(25)]);
var inst_16134 = (state_16159[(2)]);
var inst_16135 = cljs.core.next(inst_16118);
var inst_16099 = inst_16135;
var inst_16100 = null;
var inst_16101 = (0);
var inst_16102 = (0);
var state_16159__$1 = (function (){var statearr_16196 = state_16159;
(statearr_16196[(27)] = inst_16134);

(statearr_16196[(9)] = inst_16102);

(statearr_16196[(20)] = inst_16099);

(statearr_16196[(21)] = inst_16101);

(statearr_16196[(11)] = inst_16100);

return statearr_16196;
})();
var statearr_16197_16265 = state_16159__$1;
(statearr_16197_16265[(2)] = null);

(statearr_16197_16265[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (43))){
var state_16159__$1 = state_16159;
var statearr_16198_16266 = state_16159__$1;
(statearr_16198_16266[(2)] = null);

(statearr_16198_16266[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (29))){
var inst_16143 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16199_16267 = state_16159__$1;
(statearr_16199_16267[(2)] = inst_16143);

(statearr_16199_16267[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (44))){
var inst_16152 = (state_16159[(2)]);
var state_16159__$1 = (function (){var statearr_16200 = state_16159;
(statearr_16200[(28)] = inst_16152);

return statearr_16200;
})();
var statearr_16201_16268 = state_16159__$1;
(statearr_16201_16268[(2)] = null);

(statearr_16201_16268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (6))){
var inst_16091 = (state_16159[(29)]);
var inst_16090 = cljs.core.deref(cs);
var inst_16091__$1 = cljs.core.keys(inst_16090);
var inst_16092 = cljs.core.count(inst_16091__$1);
var inst_16093 = cljs.core.reset_BANG_(dctr,inst_16092);
var inst_16098 = cljs.core.seq(inst_16091__$1);
var inst_16099 = inst_16098;
var inst_16100 = null;
var inst_16101 = (0);
var inst_16102 = (0);
var state_16159__$1 = (function (){var statearr_16202 = state_16159;
(statearr_16202[(30)] = inst_16093);

(statearr_16202[(9)] = inst_16102);

(statearr_16202[(29)] = inst_16091__$1);

(statearr_16202[(20)] = inst_16099);

(statearr_16202[(21)] = inst_16101);

(statearr_16202[(11)] = inst_16100);

return statearr_16202;
})();
var statearr_16203_16269 = state_16159__$1;
(statearr_16203_16269[(2)] = null);

(statearr_16203_16269[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (28))){
var inst_16118 = (state_16159[(25)]);
var inst_16099 = (state_16159[(20)]);
var inst_16118__$1 = cljs.core.seq(inst_16099);
var state_16159__$1 = (function (){var statearr_16204 = state_16159;
(statearr_16204[(25)] = inst_16118__$1);

return statearr_16204;
})();
if(inst_16118__$1){
var statearr_16205_16270 = state_16159__$1;
(statearr_16205_16270[(1)] = (33));

} else {
var statearr_16206_16271 = state_16159__$1;
(statearr_16206_16271[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (25))){
var inst_16102 = (state_16159[(9)]);
var inst_16101 = (state_16159[(21)]);
var inst_16104 = (inst_16102 < inst_16101);
var inst_16105 = inst_16104;
var state_16159__$1 = state_16159;
if(cljs.core.truth_(inst_16105)){
var statearr_16207_16272 = state_16159__$1;
(statearr_16207_16272[(1)] = (27));

} else {
var statearr_16208_16273 = state_16159__$1;
(statearr_16208_16273[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (34))){
var state_16159__$1 = state_16159;
var statearr_16209_16274 = state_16159__$1;
(statearr_16209_16274[(2)] = null);

(statearr_16209_16274[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (17))){
var state_16159__$1 = state_16159;
var statearr_16210_16275 = state_16159__$1;
(statearr_16210_16275[(2)] = null);

(statearr_16210_16275[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (3))){
var inst_16157 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16159__$1,inst_16157);
} else {
if((state_val_16160 === (12))){
var inst_16086 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16211_16276 = state_16159__$1;
(statearr_16211_16276[(2)] = inst_16086);

(statearr_16211_16276[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (2))){
var state_16159__$1 = state_16159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16159__$1,(4),ch);
} else {
if((state_val_16160 === (23))){
var state_16159__$1 = state_16159;
var statearr_16212_16277 = state_16159__$1;
(statearr_16212_16277[(2)] = null);

(statearr_16212_16277[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (35))){
var inst_16141 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16213_16278 = state_16159__$1;
(statearr_16213_16278[(2)] = inst_16141);

(statearr_16213_16278[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (19))){
var inst_16058 = (state_16159[(7)]);
var inst_16062 = cljs.core.chunk_first(inst_16058);
var inst_16063 = cljs.core.chunk_rest(inst_16058);
var inst_16064 = cljs.core.count(inst_16062);
var inst_16036 = inst_16063;
var inst_16037 = inst_16062;
var inst_16038 = inst_16064;
var inst_16039 = (0);
var state_16159__$1 = (function (){var statearr_16214 = state_16159;
(statearr_16214[(14)] = inst_16039);

(statearr_16214[(15)] = inst_16038);

(statearr_16214[(16)] = inst_16036);

(statearr_16214[(17)] = inst_16037);

return statearr_16214;
})();
var statearr_16215_16279 = state_16159__$1;
(statearr_16215_16279[(2)] = null);

(statearr_16215_16279[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (11))){
var inst_16058 = (state_16159[(7)]);
var inst_16036 = (state_16159[(16)]);
var inst_16058__$1 = cljs.core.seq(inst_16036);
var state_16159__$1 = (function (){var statearr_16216 = state_16159;
(statearr_16216[(7)] = inst_16058__$1);

return statearr_16216;
})();
if(inst_16058__$1){
var statearr_16217_16280 = state_16159__$1;
(statearr_16217_16280[(1)] = (16));

} else {
var statearr_16218_16281 = state_16159__$1;
(statearr_16218_16281[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (9))){
var inst_16088 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16219_16282 = state_16159__$1;
(statearr_16219_16282[(2)] = inst_16088);

(statearr_16219_16282[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (5))){
var inst_16034 = cljs.core.deref(cs);
var inst_16035 = cljs.core.seq(inst_16034);
var inst_16036 = inst_16035;
var inst_16037 = null;
var inst_16038 = (0);
var inst_16039 = (0);
var state_16159__$1 = (function (){var statearr_16220 = state_16159;
(statearr_16220[(14)] = inst_16039);

(statearr_16220[(15)] = inst_16038);

(statearr_16220[(16)] = inst_16036);

(statearr_16220[(17)] = inst_16037);

return statearr_16220;
})();
var statearr_16221_16283 = state_16159__$1;
(statearr_16221_16283[(2)] = null);

(statearr_16221_16283[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (14))){
var state_16159__$1 = state_16159;
var statearr_16222_16284 = state_16159__$1;
(statearr_16222_16284[(2)] = null);

(statearr_16222_16284[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (45))){
var inst_16149 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16223_16285 = state_16159__$1;
(statearr_16223_16285[(2)] = inst_16149);

(statearr_16223_16285[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (26))){
var inst_16091 = (state_16159[(29)]);
var inst_16145 = (state_16159[(2)]);
var inst_16146 = cljs.core.seq(inst_16091);
var state_16159__$1 = (function (){var statearr_16224 = state_16159;
(statearr_16224[(31)] = inst_16145);

return statearr_16224;
})();
if(inst_16146){
var statearr_16225_16286 = state_16159__$1;
(statearr_16225_16286[(1)] = (42));

} else {
var statearr_16226_16287 = state_16159__$1;
(statearr_16226_16287[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (16))){
var inst_16058 = (state_16159[(7)]);
var inst_16060 = cljs.core.chunked_seq_QMARK_(inst_16058);
var state_16159__$1 = state_16159;
if(inst_16060){
var statearr_16227_16288 = state_16159__$1;
(statearr_16227_16288[(1)] = (19));

} else {
var statearr_16228_16289 = state_16159__$1;
(statearr_16228_16289[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (38))){
var inst_16138 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16229_16290 = state_16159__$1;
(statearr_16229_16290[(2)] = inst_16138);

(statearr_16229_16290[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (30))){
var state_16159__$1 = state_16159;
var statearr_16230_16291 = state_16159__$1;
(statearr_16230_16291[(2)] = null);

(statearr_16230_16291[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (10))){
var inst_16039 = (state_16159[(14)]);
var inst_16037 = (state_16159[(17)]);
var inst_16047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16037,inst_16039);
var inst_16048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16047,(0),null);
var inst_16049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16047,(1),null);
var state_16159__$1 = (function (){var statearr_16231 = state_16159;
(statearr_16231[(26)] = inst_16048);

return statearr_16231;
})();
if(cljs.core.truth_(inst_16049)){
var statearr_16232_16292 = state_16159__$1;
(statearr_16232_16292[(1)] = (13));

} else {
var statearr_16233_16293 = state_16159__$1;
(statearr_16233_16293[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (18))){
var inst_16084 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16234_16294 = state_16159__$1;
(statearr_16234_16294[(2)] = inst_16084);

(statearr_16234_16294[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (42))){
var state_16159__$1 = state_16159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16159__$1,(45),dchan);
} else {
if((state_val_16160 === (37))){
var inst_16118 = (state_16159[(25)]);
var inst_16027 = (state_16159[(10)]);
var inst_16127 = (state_16159[(23)]);
var inst_16127__$1 = cljs.core.first(inst_16118);
var inst_16128 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16127__$1,inst_16027,done);
var state_16159__$1 = (function (){var statearr_16235 = state_16159;
(statearr_16235[(23)] = inst_16127__$1);

return statearr_16235;
})();
if(cljs.core.truth_(inst_16128)){
var statearr_16236_16295 = state_16159__$1;
(statearr_16236_16295[(1)] = (39));

} else {
var statearr_16237_16296 = state_16159__$1;
(statearr_16237_16296[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (8))){
var inst_16039 = (state_16159[(14)]);
var inst_16038 = (state_16159[(15)]);
var inst_16041 = (inst_16039 < inst_16038);
var inst_16042 = inst_16041;
var state_16159__$1 = state_16159;
if(cljs.core.truth_(inst_16042)){
var statearr_16238_16297 = state_16159__$1;
(statearr_16238_16297[(1)] = (10));

} else {
var statearr_16239_16298 = state_16159__$1;
(statearr_16239_16298[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___16244,cs,m,dchan,dctr,done))
;
return ((function (switch__15337__auto__,c__15437__auto___16244,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15338__auto__ = null;
var cljs$core$async$mult_$_state_machine__15338__auto____0 = (function (){
var statearr_16240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16240[(0)] = cljs$core$async$mult_$_state_machine__15338__auto__);

(statearr_16240[(1)] = (1));

return statearr_16240;
});
var cljs$core$async$mult_$_state_machine__15338__auto____1 = (function (state_16159){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_16159);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e16241){if((e16241 instanceof Object)){
var ex__15341__auto__ = e16241;
var statearr_16242_16299 = state_16159;
(statearr_16242_16299[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16159);

return cljs.core.cst$kw$recur;
} else {
throw e16241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__16300 = state_16159;
state_16159 = G__16300;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15338__auto__ = function(state_16159){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15338__auto____1.call(this,state_16159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15338__auto____0;
cljs$core$async$mult_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15338__auto____1;
return cljs$core$async$mult_$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___16244,cs,m,dchan,dctr,done))
})();
var state__15439__auto__ = (function (){var statearr_16243 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_16243[(6)] = c__15437__auto___16244);

return statearr_16243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___16244,cs,m,dchan,dctr,done))
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
var G__16302 = arguments.length;
switch (G__16302) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto__.call(null,m,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto__.call(null,m,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8352__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto__.call(null,m));
} else {
var m__8352__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8352__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8352__auto__.call(null,m,state_map));
} else {
var m__8352__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8352__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8352__auto__.call(null,m,mode));
} else {
var m__8352__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8352__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8835__auto__ = [];
var len__8828__auto___16314 = arguments.length;
var i__8829__auto___16315 = (0);
while(true){
if((i__8829__auto___16315 < len__8828__auto___16314)){
args__8835__auto__.push((arguments[i__8829__auto___16315]));

var G__16316 = (i__8829__auto___16315 + (1));
i__8829__auto___16315 = G__16316;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((3) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8836__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16308){
var map__16309 = p__16308;
var map__16309__$1 = ((((!((map__16309 == null)))?((((map__16309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16309):map__16309);
var opts = map__16309__$1;
var statearr_16311_16317 = state;
(statearr_16311_16317[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__16309,map__16309__$1,opts){
return (function (val){
var statearr_16312_16318 = state;
(statearr_16312_16318[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16309,map__16309__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16313_16319 = state;
(statearr_16313_16319[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16304){
var G__16305 = cljs.core.first(seq16304);
var seq16304__$1 = cljs.core.next(seq16304);
var G__16306 = cljs.core.first(seq16304__$1);
var seq16304__$2 = cljs.core.next(seq16304__$1);
var G__16307 = cljs.core.first(seq16304__$2);
var seq16304__$3 = cljs.core.next(seq16304__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16305,G__16306,G__16307,seq16304__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16320 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16321){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16321 = meta16321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16322,meta16321__$1){
var self__ = this;
var _16322__$1 = this;
return (new cljs.core.async.t_cljs$core$async16320(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16321__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16322){
var self__ = this;
var _16322__$1 = this;
return self__.meta16321;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16320.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16320.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16320.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16320.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16320.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16320.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16320.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16320.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16321], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16320";

cljs.core.async.t_cljs$core$async16320.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16320");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16320 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16320(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16321){
return (new cljs.core.async.t_cljs$core$async16320(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16321));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16320(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15437__auto___16484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___16484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___16484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16424){
var state_val_16425 = (state_16424[(1)]);
if((state_val_16425 === (7))){
var inst_16339 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
var statearr_16426_16485 = state_16424__$1;
(statearr_16426_16485[(2)] = inst_16339);

(statearr_16426_16485[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (20))){
var inst_16351 = (state_16424[(7)]);
var state_16424__$1 = state_16424;
var statearr_16427_16486 = state_16424__$1;
(statearr_16427_16486[(2)] = inst_16351);

(statearr_16427_16486[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (27))){
var state_16424__$1 = state_16424;
var statearr_16428_16487 = state_16424__$1;
(statearr_16428_16487[(2)] = null);

(statearr_16428_16487[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (1))){
var inst_16326 = (state_16424[(8)]);
var inst_16326__$1 = calc_state();
var inst_16328 = (inst_16326__$1 == null);
var inst_16329 = cljs.core.not(inst_16328);
var state_16424__$1 = (function (){var statearr_16429 = state_16424;
(statearr_16429[(8)] = inst_16326__$1);

return statearr_16429;
})();
if(inst_16329){
var statearr_16430_16488 = state_16424__$1;
(statearr_16430_16488[(1)] = (2));

} else {
var statearr_16431_16489 = state_16424__$1;
(statearr_16431_16489[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (24))){
var inst_16375 = (state_16424[(9)]);
var inst_16384 = (state_16424[(10)]);
var inst_16398 = (state_16424[(11)]);
var inst_16398__$1 = (inst_16375.cljs$core$IFn$_invoke$arity$1 ? inst_16375.cljs$core$IFn$_invoke$arity$1(inst_16384) : inst_16375.call(null,inst_16384));
var state_16424__$1 = (function (){var statearr_16432 = state_16424;
(statearr_16432[(11)] = inst_16398__$1);

return statearr_16432;
})();
if(cljs.core.truth_(inst_16398__$1)){
var statearr_16433_16490 = state_16424__$1;
(statearr_16433_16490[(1)] = (29));

} else {
var statearr_16434_16491 = state_16424__$1;
(statearr_16434_16491[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (4))){
var inst_16342 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
if(cljs.core.truth_(inst_16342)){
var statearr_16435_16492 = state_16424__$1;
(statearr_16435_16492[(1)] = (8));

} else {
var statearr_16436_16493 = state_16424__$1;
(statearr_16436_16493[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (15))){
var inst_16369 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
if(cljs.core.truth_(inst_16369)){
var statearr_16437_16494 = state_16424__$1;
(statearr_16437_16494[(1)] = (19));

} else {
var statearr_16438_16495 = state_16424__$1;
(statearr_16438_16495[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (21))){
var inst_16374 = (state_16424[(12)]);
var inst_16374__$1 = (state_16424[(2)]);
var inst_16375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16374__$1,cljs.core.cst$kw$solos);
var inst_16376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16374__$1,cljs.core.cst$kw$mutes);
var inst_16377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16374__$1,cljs.core.cst$kw$reads);
var state_16424__$1 = (function (){var statearr_16439 = state_16424;
(statearr_16439[(13)] = inst_16376);

(statearr_16439[(9)] = inst_16375);

(statearr_16439[(12)] = inst_16374__$1);

return statearr_16439;
})();
return cljs.core.async.ioc_alts_BANG_(state_16424__$1,(22),inst_16377);
} else {
if((state_val_16425 === (31))){
var inst_16406 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
if(cljs.core.truth_(inst_16406)){
var statearr_16440_16496 = state_16424__$1;
(statearr_16440_16496[(1)] = (32));

} else {
var statearr_16441_16497 = state_16424__$1;
(statearr_16441_16497[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (32))){
var inst_16383 = (state_16424[(14)]);
var state_16424__$1 = state_16424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16424__$1,(35),out,inst_16383);
} else {
if((state_val_16425 === (33))){
var inst_16374 = (state_16424[(12)]);
var inst_16351 = inst_16374;
var state_16424__$1 = (function (){var statearr_16442 = state_16424;
(statearr_16442[(7)] = inst_16351);

return statearr_16442;
})();
var statearr_16443_16498 = state_16424__$1;
(statearr_16443_16498[(2)] = null);

(statearr_16443_16498[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (13))){
var inst_16351 = (state_16424[(7)]);
var inst_16358 = inst_16351.cljs$lang$protocol_mask$partition0$;
var inst_16359 = (inst_16358 & (64));
var inst_16360 = inst_16351.cljs$core$ISeq$;
var inst_16361 = (cljs.core.PROTOCOL_SENTINEL === inst_16360);
var inst_16362 = (inst_16359) || (inst_16361);
var state_16424__$1 = state_16424;
if(cljs.core.truth_(inst_16362)){
var statearr_16444_16499 = state_16424__$1;
(statearr_16444_16499[(1)] = (16));

} else {
var statearr_16445_16500 = state_16424__$1;
(statearr_16445_16500[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (22))){
var inst_16383 = (state_16424[(14)]);
var inst_16384 = (state_16424[(10)]);
var inst_16382 = (state_16424[(2)]);
var inst_16383__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16382,(0),null);
var inst_16384__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16382,(1),null);
var inst_16385 = (inst_16383__$1 == null);
var inst_16386 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16384__$1,change);
var inst_16387 = (inst_16385) || (inst_16386);
var state_16424__$1 = (function (){var statearr_16446 = state_16424;
(statearr_16446[(14)] = inst_16383__$1);

(statearr_16446[(10)] = inst_16384__$1);

return statearr_16446;
})();
if(cljs.core.truth_(inst_16387)){
var statearr_16447_16501 = state_16424__$1;
(statearr_16447_16501[(1)] = (23));

} else {
var statearr_16448_16502 = state_16424__$1;
(statearr_16448_16502[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (36))){
var inst_16374 = (state_16424[(12)]);
var inst_16351 = inst_16374;
var state_16424__$1 = (function (){var statearr_16449 = state_16424;
(statearr_16449[(7)] = inst_16351);

return statearr_16449;
})();
var statearr_16450_16503 = state_16424__$1;
(statearr_16450_16503[(2)] = null);

(statearr_16450_16503[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (29))){
var inst_16398 = (state_16424[(11)]);
var state_16424__$1 = state_16424;
var statearr_16451_16504 = state_16424__$1;
(statearr_16451_16504[(2)] = inst_16398);

(statearr_16451_16504[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (6))){
var state_16424__$1 = state_16424;
var statearr_16452_16505 = state_16424__$1;
(statearr_16452_16505[(2)] = false);

(statearr_16452_16505[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (28))){
var inst_16394 = (state_16424[(2)]);
var inst_16395 = calc_state();
var inst_16351 = inst_16395;
var state_16424__$1 = (function (){var statearr_16453 = state_16424;
(statearr_16453[(15)] = inst_16394);

(statearr_16453[(7)] = inst_16351);

return statearr_16453;
})();
var statearr_16454_16506 = state_16424__$1;
(statearr_16454_16506[(2)] = null);

(statearr_16454_16506[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (25))){
var inst_16420 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
var statearr_16455_16507 = state_16424__$1;
(statearr_16455_16507[(2)] = inst_16420);

(statearr_16455_16507[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (34))){
var inst_16418 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
var statearr_16456_16508 = state_16424__$1;
(statearr_16456_16508[(2)] = inst_16418);

(statearr_16456_16508[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (17))){
var state_16424__$1 = state_16424;
var statearr_16457_16509 = state_16424__$1;
(statearr_16457_16509[(2)] = false);

(statearr_16457_16509[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (3))){
var state_16424__$1 = state_16424;
var statearr_16458_16510 = state_16424__$1;
(statearr_16458_16510[(2)] = false);

(statearr_16458_16510[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (12))){
var inst_16422 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16424__$1,inst_16422);
} else {
if((state_val_16425 === (2))){
var inst_16326 = (state_16424[(8)]);
var inst_16331 = inst_16326.cljs$lang$protocol_mask$partition0$;
var inst_16332 = (inst_16331 & (64));
var inst_16333 = inst_16326.cljs$core$ISeq$;
var inst_16334 = (cljs.core.PROTOCOL_SENTINEL === inst_16333);
var inst_16335 = (inst_16332) || (inst_16334);
var state_16424__$1 = state_16424;
if(cljs.core.truth_(inst_16335)){
var statearr_16459_16511 = state_16424__$1;
(statearr_16459_16511[(1)] = (5));

} else {
var statearr_16460_16512 = state_16424__$1;
(statearr_16460_16512[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (23))){
var inst_16383 = (state_16424[(14)]);
var inst_16389 = (inst_16383 == null);
var state_16424__$1 = state_16424;
if(cljs.core.truth_(inst_16389)){
var statearr_16461_16513 = state_16424__$1;
(statearr_16461_16513[(1)] = (26));

} else {
var statearr_16462_16514 = state_16424__$1;
(statearr_16462_16514[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (35))){
var inst_16409 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
if(cljs.core.truth_(inst_16409)){
var statearr_16463_16515 = state_16424__$1;
(statearr_16463_16515[(1)] = (36));

} else {
var statearr_16464_16516 = state_16424__$1;
(statearr_16464_16516[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (19))){
var inst_16351 = (state_16424[(7)]);
var inst_16371 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16351);
var state_16424__$1 = state_16424;
var statearr_16465_16517 = state_16424__$1;
(statearr_16465_16517[(2)] = inst_16371);

(statearr_16465_16517[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (11))){
var inst_16351 = (state_16424[(7)]);
var inst_16355 = (inst_16351 == null);
var inst_16356 = cljs.core.not(inst_16355);
var state_16424__$1 = state_16424;
if(inst_16356){
var statearr_16466_16518 = state_16424__$1;
(statearr_16466_16518[(1)] = (13));

} else {
var statearr_16467_16519 = state_16424__$1;
(statearr_16467_16519[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (9))){
var inst_16326 = (state_16424[(8)]);
var state_16424__$1 = state_16424;
var statearr_16468_16520 = state_16424__$1;
(statearr_16468_16520[(2)] = inst_16326);

(statearr_16468_16520[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (5))){
var state_16424__$1 = state_16424;
var statearr_16469_16521 = state_16424__$1;
(statearr_16469_16521[(2)] = true);

(statearr_16469_16521[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (14))){
var state_16424__$1 = state_16424;
var statearr_16470_16522 = state_16424__$1;
(statearr_16470_16522[(2)] = false);

(statearr_16470_16522[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (26))){
var inst_16384 = (state_16424[(10)]);
var inst_16391 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16384);
var state_16424__$1 = state_16424;
var statearr_16471_16523 = state_16424__$1;
(statearr_16471_16523[(2)] = inst_16391);

(statearr_16471_16523[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (16))){
var state_16424__$1 = state_16424;
var statearr_16472_16524 = state_16424__$1;
(statearr_16472_16524[(2)] = true);

(statearr_16472_16524[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (38))){
var inst_16414 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
var statearr_16473_16525 = state_16424__$1;
(statearr_16473_16525[(2)] = inst_16414);

(statearr_16473_16525[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (30))){
var inst_16376 = (state_16424[(13)]);
var inst_16375 = (state_16424[(9)]);
var inst_16384 = (state_16424[(10)]);
var inst_16401 = cljs.core.empty_QMARK_(inst_16375);
var inst_16402 = (inst_16376.cljs$core$IFn$_invoke$arity$1 ? inst_16376.cljs$core$IFn$_invoke$arity$1(inst_16384) : inst_16376.call(null,inst_16384));
var inst_16403 = cljs.core.not(inst_16402);
var inst_16404 = (inst_16401) && (inst_16403);
var state_16424__$1 = state_16424;
var statearr_16474_16526 = state_16424__$1;
(statearr_16474_16526[(2)] = inst_16404);

(statearr_16474_16526[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (10))){
var inst_16326 = (state_16424[(8)]);
var inst_16347 = (state_16424[(2)]);
var inst_16348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16347,cljs.core.cst$kw$solos);
var inst_16349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16347,cljs.core.cst$kw$mutes);
var inst_16350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16347,cljs.core.cst$kw$reads);
var inst_16351 = inst_16326;
var state_16424__$1 = (function (){var statearr_16475 = state_16424;
(statearr_16475[(16)] = inst_16349);

(statearr_16475[(17)] = inst_16348);

(statearr_16475[(18)] = inst_16350);

(statearr_16475[(7)] = inst_16351);

return statearr_16475;
})();
var statearr_16476_16527 = state_16424__$1;
(statearr_16476_16527[(2)] = null);

(statearr_16476_16527[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (18))){
var inst_16366 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
var statearr_16477_16528 = state_16424__$1;
(statearr_16477_16528[(2)] = inst_16366);

(statearr_16477_16528[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (37))){
var state_16424__$1 = state_16424;
var statearr_16478_16529 = state_16424__$1;
(statearr_16478_16529[(2)] = null);

(statearr_16478_16529[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16425 === (8))){
var inst_16326 = (state_16424[(8)]);
var inst_16344 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16326);
var state_16424__$1 = state_16424;
var statearr_16479_16530 = state_16424__$1;
(statearr_16479_16530[(2)] = inst_16344);

(statearr_16479_16530[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___16484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15337__auto__,c__15437__auto___16484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15338__auto__ = null;
var cljs$core$async$mix_$_state_machine__15338__auto____0 = (function (){
var statearr_16480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16480[(0)] = cljs$core$async$mix_$_state_machine__15338__auto__);

(statearr_16480[(1)] = (1));

return statearr_16480;
});
var cljs$core$async$mix_$_state_machine__15338__auto____1 = (function (state_16424){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_16424);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e16481){if((e16481 instanceof Object)){
var ex__15341__auto__ = e16481;
var statearr_16482_16531 = state_16424;
(statearr_16482_16531[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16424);

return cljs.core.cst$kw$recur;
} else {
throw e16481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__16532 = state_16424;
state_16424 = G__16532;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15338__auto__ = function(state_16424){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15338__auto____1.call(this,state_16424);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15338__auto____0;
cljs$core$async$mix_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15338__auto____1;
return cljs$core$async$mix_$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___16484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15439__auto__ = (function (){var statearr_16483 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_16483[(6)] = c__15437__auto___16484);

return statearr_16483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___16484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8352__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8352__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8352__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8352__auto__.call(null,p,v,ch));
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8352__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16534 = arguments.length;
switch (G__16534) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8352__auto__.call(null,p));
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8352__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8352__auto__.call(null,p,v));
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8352__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__16538 = arguments.length;
switch (G__16538) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7668__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7668__auto__,mults){
return (function (p1__16536_SHARP_){
if(cljs.core.truth_((p1__16536_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16536_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16536_SHARP_.call(null,topic)))){
return p1__16536_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16536_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16539 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16540){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16540 = meta16540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16541,meta16540__$1){
var self__ = this;
var _16541__$1 = this;
return (new cljs.core.async.t_cljs$core$async16539(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16540__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16541){
var self__ = this;
var _16541__$1 = this;
return self__.meta16540;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16539.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16540], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16539";

cljs.core.async.t_cljs$core$async16539.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16539");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16539 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16540){
return (new cljs.core.async.t_cljs$core$async16539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16540));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16539(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15437__auto___16659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___16659,mults,ensure_mult,p){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___16659,mults,ensure_mult,p){
return (function (state_16613){
var state_val_16614 = (state_16613[(1)]);
if((state_val_16614 === (7))){
var inst_16609 = (state_16613[(2)]);
var state_16613__$1 = state_16613;
var statearr_16615_16660 = state_16613__$1;
(statearr_16615_16660[(2)] = inst_16609);

(statearr_16615_16660[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (20))){
var state_16613__$1 = state_16613;
var statearr_16616_16661 = state_16613__$1;
(statearr_16616_16661[(2)] = null);

(statearr_16616_16661[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (1))){
var state_16613__$1 = state_16613;
var statearr_16617_16662 = state_16613__$1;
(statearr_16617_16662[(2)] = null);

(statearr_16617_16662[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (24))){
var inst_16592 = (state_16613[(7)]);
var inst_16601 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16592);
var state_16613__$1 = state_16613;
var statearr_16618_16663 = state_16613__$1;
(statearr_16618_16663[(2)] = inst_16601);

(statearr_16618_16663[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (4))){
var inst_16544 = (state_16613[(8)]);
var inst_16544__$1 = (state_16613[(2)]);
var inst_16545 = (inst_16544__$1 == null);
var state_16613__$1 = (function (){var statearr_16619 = state_16613;
(statearr_16619[(8)] = inst_16544__$1);

return statearr_16619;
})();
if(cljs.core.truth_(inst_16545)){
var statearr_16620_16664 = state_16613__$1;
(statearr_16620_16664[(1)] = (5));

} else {
var statearr_16621_16665 = state_16613__$1;
(statearr_16621_16665[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (15))){
var inst_16586 = (state_16613[(2)]);
var state_16613__$1 = state_16613;
var statearr_16622_16666 = state_16613__$1;
(statearr_16622_16666[(2)] = inst_16586);

(statearr_16622_16666[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (21))){
var inst_16606 = (state_16613[(2)]);
var state_16613__$1 = (function (){var statearr_16623 = state_16613;
(statearr_16623[(9)] = inst_16606);

return statearr_16623;
})();
var statearr_16624_16667 = state_16613__$1;
(statearr_16624_16667[(2)] = null);

(statearr_16624_16667[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (13))){
var inst_16568 = (state_16613[(10)]);
var inst_16570 = cljs.core.chunked_seq_QMARK_(inst_16568);
var state_16613__$1 = state_16613;
if(inst_16570){
var statearr_16625_16668 = state_16613__$1;
(statearr_16625_16668[(1)] = (16));

} else {
var statearr_16626_16669 = state_16613__$1;
(statearr_16626_16669[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (22))){
var inst_16598 = (state_16613[(2)]);
var state_16613__$1 = state_16613;
if(cljs.core.truth_(inst_16598)){
var statearr_16627_16670 = state_16613__$1;
(statearr_16627_16670[(1)] = (23));

} else {
var statearr_16628_16671 = state_16613__$1;
(statearr_16628_16671[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (6))){
var inst_16544 = (state_16613[(8)]);
var inst_16592 = (state_16613[(7)]);
var inst_16594 = (state_16613[(11)]);
var inst_16592__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16544) : topic_fn.call(null,inst_16544));
var inst_16593 = cljs.core.deref(mults);
var inst_16594__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16593,inst_16592__$1);
var state_16613__$1 = (function (){var statearr_16629 = state_16613;
(statearr_16629[(7)] = inst_16592__$1);

(statearr_16629[(11)] = inst_16594__$1);

return statearr_16629;
})();
if(cljs.core.truth_(inst_16594__$1)){
var statearr_16630_16672 = state_16613__$1;
(statearr_16630_16672[(1)] = (19));

} else {
var statearr_16631_16673 = state_16613__$1;
(statearr_16631_16673[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (25))){
var inst_16603 = (state_16613[(2)]);
var state_16613__$1 = state_16613;
var statearr_16632_16674 = state_16613__$1;
(statearr_16632_16674[(2)] = inst_16603);

(statearr_16632_16674[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (17))){
var inst_16568 = (state_16613[(10)]);
var inst_16577 = cljs.core.first(inst_16568);
var inst_16578 = cljs.core.async.muxch_STAR_(inst_16577);
var inst_16579 = cljs.core.async.close_BANG_(inst_16578);
var inst_16580 = cljs.core.next(inst_16568);
var inst_16554 = inst_16580;
var inst_16555 = null;
var inst_16556 = (0);
var inst_16557 = (0);
var state_16613__$1 = (function (){var statearr_16633 = state_16613;
(statearr_16633[(12)] = inst_16579);

(statearr_16633[(13)] = inst_16557);

(statearr_16633[(14)] = inst_16555);

(statearr_16633[(15)] = inst_16556);

(statearr_16633[(16)] = inst_16554);

return statearr_16633;
})();
var statearr_16634_16675 = state_16613__$1;
(statearr_16634_16675[(2)] = null);

(statearr_16634_16675[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (3))){
var inst_16611 = (state_16613[(2)]);
var state_16613__$1 = state_16613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16613__$1,inst_16611);
} else {
if((state_val_16614 === (12))){
var inst_16588 = (state_16613[(2)]);
var state_16613__$1 = state_16613;
var statearr_16635_16676 = state_16613__$1;
(statearr_16635_16676[(2)] = inst_16588);

(statearr_16635_16676[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (2))){
var state_16613__$1 = state_16613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16613__$1,(4),ch);
} else {
if((state_val_16614 === (23))){
var state_16613__$1 = state_16613;
var statearr_16636_16677 = state_16613__$1;
(statearr_16636_16677[(2)] = null);

(statearr_16636_16677[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (19))){
var inst_16544 = (state_16613[(8)]);
var inst_16594 = (state_16613[(11)]);
var inst_16596 = cljs.core.async.muxch_STAR_(inst_16594);
var state_16613__$1 = state_16613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16613__$1,(22),inst_16596,inst_16544);
} else {
if((state_val_16614 === (11))){
var inst_16568 = (state_16613[(10)]);
var inst_16554 = (state_16613[(16)]);
var inst_16568__$1 = cljs.core.seq(inst_16554);
var state_16613__$1 = (function (){var statearr_16637 = state_16613;
(statearr_16637[(10)] = inst_16568__$1);

return statearr_16637;
})();
if(inst_16568__$1){
var statearr_16638_16678 = state_16613__$1;
(statearr_16638_16678[(1)] = (13));

} else {
var statearr_16639_16679 = state_16613__$1;
(statearr_16639_16679[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (9))){
var inst_16590 = (state_16613[(2)]);
var state_16613__$1 = state_16613;
var statearr_16640_16680 = state_16613__$1;
(statearr_16640_16680[(2)] = inst_16590);

(statearr_16640_16680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (5))){
var inst_16551 = cljs.core.deref(mults);
var inst_16552 = cljs.core.vals(inst_16551);
var inst_16553 = cljs.core.seq(inst_16552);
var inst_16554 = inst_16553;
var inst_16555 = null;
var inst_16556 = (0);
var inst_16557 = (0);
var state_16613__$1 = (function (){var statearr_16641 = state_16613;
(statearr_16641[(13)] = inst_16557);

(statearr_16641[(14)] = inst_16555);

(statearr_16641[(15)] = inst_16556);

(statearr_16641[(16)] = inst_16554);

return statearr_16641;
})();
var statearr_16642_16681 = state_16613__$1;
(statearr_16642_16681[(2)] = null);

(statearr_16642_16681[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (14))){
var state_16613__$1 = state_16613;
var statearr_16646_16682 = state_16613__$1;
(statearr_16646_16682[(2)] = null);

(statearr_16646_16682[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (16))){
var inst_16568 = (state_16613[(10)]);
var inst_16572 = cljs.core.chunk_first(inst_16568);
var inst_16573 = cljs.core.chunk_rest(inst_16568);
var inst_16574 = cljs.core.count(inst_16572);
var inst_16554 = inst_16573;
var inst_16555 = inst_16572;
var inst_16556 = inst_16574;
var inst_16557 = (0);
var state_16613__$1 = (function (){var statearr_16647 = state_16613;
(statearr_16647[(13)] = inst_16557);

(statearr_16647[(14)] = inst_16555);

(statearr_16647[(15)] = inst_16556);

(statearr_16647[(16)] = inst_16554);

return statearr_16647;
})();
var statearr_16648_16683 = state_16613__$1;
(statearr_16648_16683[(2)] = null);

(statearr_16648_16683[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (10))){
var inst_16557 = (state_16613[(13)]);
var inst_16555 = (state_16613[(14)]);
var inst_16556 = (state_16613[(15)]);
var inst_16554 = (state_16613[(16)]);
var inst_16562 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16555,inst_16557);
var inst_16563 = cljs.core.async.muxch_STAR_(inst_16562);
var inst_16564 = cljs.core.async.close_BANG_(inst_16563);
var inst_16565 = (inst_16557 + (1));
var tmp16643 = inst_16555;
var tmp16644 = inst_16556;
var tmp16645 = inst_16554;
var inst_16554__$1 = tmp16645;
var inst_16555__$1 = tmp16643;
var inst_16556__$1 = tmp16644;
var inst_16557__$1 = inst_16565;
var state_16613__$1 = (function (){var statearr_16649 = state_16613;
(statearr_16649[(17)] = inst_16564);

(statearr_16649[(13)] = inst_16557__$1);

(statearr_16649[(14)] = inst_16555__$1);

(statearr_16649[(15)] = inst_16556__$1);

(statearr_16649[(16)] = inst_16554__$1);

return statearr_16649;
})();
var statearr_16650_16684 = state_16613__$1;
(statearr_16650_16684[(2)] = null);

(statearr_16650_16684[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (18))){
var inst_16583 = (state_16613[(2)]);
var state_16613__$1 = state_16613;
var statearr_16651_16685 = state_16613__$1;
(statearr_16651_16685[(2)] = inst_16583);

(statearr_16651_16685[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16614 === (8))){
var inst_16557 = (state_16613[(13)]);
var inst_16556 = (state_16613[(15)]);
var inst_16559 = (inst_16557 < inst_16556);
var inst_16560 = inst_16559;
var state_16613__$1 = state_16613;
if(cljs.core.truth_(inst_16560)){
var statearr_16652_16686 = state_16613__$1;
(statearr_16652_16686[(1)] = (10));

} else {
var statearr_16653_16687 = state_16613__$1;
(statearr_16653_16687[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___16659,mults,ensure_mult,p))
;
return ((function (switch__15337__auto__,c__15437__auto___16659,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_16654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16654[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_16654[(1)] = (1));

return statearr_16654;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_16613){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_16613);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e16655){if((e16655 instanceof Object)){
var ex__15341__auto__ = e16655;
var statearr_16656_16688 = state_16613;
(statearr_16656_16688[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16613);

return cljs.core.cst$kw$recur;
} else {
throw e16655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__16689 = state_16613;
state_16613 = G__16689;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_16613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_16613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___16659,mults,ensure_mult,p))
})();
var state__15439__auto__ = (function (){var statearr_16657 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_16657[(6)] = c__15437__auto___16659);

return statearr_16657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___16659,mults,ensure_mult,p))
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
var G__16691 = arguments.length;
switch (G__16691) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16694 = arguments.length;
switch (G__16694) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__16697 = arguments.length;
switch (G__16697) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15437__auto___16764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___16764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___16764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16736){
var state_val_16737 = (state_16736[(1)]);
if((state_val_16737 === (7))){
var state_16736__$1 = state_16736;
var statearr_16738_16765 = state_16736__$1;
(statearr_16738_16765[(2)] = null);

(statearr_16738_16765[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (1))){
var state_16736__$1 = state_16736;
var statearr_16739_16766 = state_16736__$1;
(statearr_16739_16766[(2)] = null);

(statearr_16739_16766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (4))){
var inst_16700 = (state_16736[(7)]);
var inst_16702 = (inst_16700 < cnt);
var state_16736__$1 = state_16736;
if(cljs.core.truth_(inst_16702)){
var statearr_16740_16767 = state_16736__$1;
(statearr_16740_16767[(1)] = (6));

} else {
var statearr_16741_16768 = state_16736__$1;
(statearr_16741_16768[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (15))){
var inst_16732 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16742_16769 = state_16736__$1;
(statearr_16742_16769[(2)] = inst_16732);

(statearr_16742_16769[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (13))){
var inst_16725 = cljs.core.async.close_BANG_(out);
var state_16736__$1 = state_16736;
var statearr_16743_16770 = state_16736__$1;
(statearr_16743_16770[(2)] = inst_16725);

(statearr_16743_16770[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (6))){
var state_16736__$1 = state_16736;
var statearr_16744_16771 = state_16736__$1;
(statearr_16744_16771[(2)] = null);

(statearr_16744_16771[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (3))){
var inst_16734 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16736__$1,inst_16734);
} else {
if((state_val_16737 === (12))){
var inst_16722 = (state_16736[(8)]);
var inst_16722__$1 = (state_16736[(2)]);
var inst_16723 = cljs.core.some(cljs.core.nil_QMARK_,inst_16722__$1);
var state_16736__$1 = (function (){var statearr_16745 = state_16736;
(statearr_16745[(8)] = inst_16722__$1);

return statearr_16745;
})();
if(cljs.core.truth_(inst_16723)){
var statearr_16746_16772 = state_16736__$1;
(statearr_16746_16772[(1)] = (13));

} else {
var statearr_16747_16773 = state_16736__$1;
(statearr_16747_16773[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (2))){
var inst_16699 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16700 = (0);
var state_16736__$1 = (function (){var statearr_16748 = state_16736;
(statearr_16748[(7)] = inst_16700);

(statearr_16748[(9)] = inst_16699);

return statearr_16748;
})();
var statearr_16749_16774 = state_16736__$1;
(statearr_16749_16774[(2)] = null);

(statearr_16749_16774[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (11))){
var inst_16700 = (state_16736[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16736,(10),Object,null,(9));
var inst_16709 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16700) : chs__$1.call(null,inst_16700));
var inst_16710 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16700) : done.call(null,inst_16700));
var inst_16711 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16709,inst_16710);
var state_16736__$1 = state_16736;
var statearr_16750_16775 = state_16736__$1;
(statearr_16750_16775[(2)] = inst_16711);


cljs.core.async.impl.ioc_helpers.process_exception(state_16736__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (9))){
var inst_16700 = (state_16736[(7)]);
var inst_16713 = (state_16736[(2)]);
var inst_16714 = (inst_16700 + (1));
var inst_16700__$1 = inst_16714;
var state_16736__$1 = (function (){var statearr_16751 = state_16736;
(statearr_16751[(7)] = inst_16700__$1);

(statearr_16751[(10)] = inst_16713);

return statearr_16751;
})();
var statearr_16752_16776 = state_16736__$1;
(statearr_16752_16776[(2)] = null);

(statearr_16752_16776[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (5))){
var inst_16720 = (state_16736[(2)]);
var state_16736__$1 = (function (){var statearr_16753 = state_16736;
(statearr_16753[(11)] = inst_16720);

return statearr_16753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16736__$1,(12),dchan);
} else {
if((state_val_16737 === (14))){
var inst_16722 = (state_16736[(8)]);
var inst_16727 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16722);
var state_16736__$1 = state_16736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16736__$1,(16),out,inst_16727);
} else {
if((state_val_16737 === (16))){
var inst_16729 = (state_16736[(2)]);
var state_16736__$1 = (function (){var statearr_16754 = state_16736;
(statearr_16754[(12)] = inst_16729);

return statearr_16754;
})();
var statearr_16755_16777 = state_16736__$1;
(statearr_16755_16777[(2)] = null);

(statearr_16755_16777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (10))){
var inst_16704 = (state_16736[(2)]);
var inst_16705 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16736__$1 = (function (){var statearr_16756 = state_16736;
(statearr_16756[(13)] = inst_16704);

return statearr_16756;
})();
var statearr_16757_16778 = state_16736__$1;
(statearr_16757_16778[(2)] = inst_16705);


cljs.core.async.impl.ioc_helpers.process_exception(state_16736__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16737 === (8))){
var inst_16718 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16758_16779 = state_16736__$1;
(statearr_16758_16779[(2)] = inst_16718);

(statearr_16758_16779[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___16764,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15337__auto__,c__15437__auto___16764,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_16759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16759[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_16759[(1)] = (1));

return statearr_16759;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_16736){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_16736);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e16760){if((e16760 instanceof Object)){
var ex__15341__auto__ = e16760;
var statearr_16761_16780 = state_16736;
(statearr_16761_16780[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16736);

return cljs.core.cst$kw$recur;
} else {
throw e16760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__16781 = state_16736;
state_16736 = G__16781;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_16736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_16736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___16764,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15439__auto__ = (function (){var statearr_16762 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_16762[(6)] = c__15437__auto___16764);

return statearr_16762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___16764,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16784 = arguments.length;
switch (G__16784) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15437__auto___16838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___16838,out){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___16838,out){
return (function (state_16816){
var state_val_16817 = (state_16816[(1)]);
if((state_val_16817 === (7))){
var inst_16795 = (state_16816[(7)]);
var inst_16796 = (state_16816[(8)]);
var inst_16795__$1 = (state_16816[(2)]);
var inst_16796__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16795__$1,(0),null);
var inst_16797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16795__$1,(1),null);
var inst_16798 = (inst_16796__$1 == null);
var state_16816__$1 = (function (){var statearr_16818 = state_16816;
(statearr_16818[(7)] = inst_16795__$1);

(statearr_16818[(8)] = inst_16796__$1);

(statearr_16818[(9)] = inst_16797);

return statearr_16818;
})();
if(cljs.core.truth_(inst_16798)){
var statearr_16819_16839 = state_16816__$1;
(statearr_16819_16839[(1)] = (8));

} else {
var statearr_16820_16840 = state_16816__$1;
(statearr_16820_16840[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16817 === (1))){
var inst_16785 = cljs.core.vec(chs);
var inst_16786 = inst_16785;
var state_16816__$1 = (function (){var statearr_16821 = state_16816;
(statearr_16821[(10)] = inst_16786);

return statearr_16821;
})();
var statearr_16822_16841 = state_16816__$1;
(statearr_16822_16841[(2)] = null);

(statearr_16822_16841[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16817 === (4))){
var inst_16786 = (state_16816[(10)]);
var state_16816__$1 = state_16816;
return cljs.core.async.ioc_alts_BANG_(state_16816__$1,(7),inst_16786);
} else {
if((state_val_16817 === (6))){
var inst_16812 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16823_16842 = state_16816__$1;
(statearr_16823_16842[(2)] = inst_16812);

(statearr_16823_16842[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16817 === (3))){
var inst_16814 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16816__$1,inst_16814);
} else {
if((state_val_16817 === (2))){
var inst_16786 = (state_16816[(10)]);
var inst_16788 = cljs.core.count(inst_16786);
var inst_16789 = (inst_16788 > (0));
var state_16816__$1 = state_16816;
if(cljs.core.truth_(inst_16789)){
var statearr_16825_16843 = state_16816__$1;
(statearr_16825_16843[(1)] = (4));

} else {
var statearr_16826_16844 = state_16816__$1;
(statearr_16826_16844[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16817 === (11))){
var inst_16786 = (state_16816[(10)]);
var inst_16805 = (state_16816[(2)]);
var tmp16824 = inst_16786;
var inst_16786__$1 = tmp16824;
var state_16816__$1 = (function (){var statearr_16827 = state_16816;
(statearr_16827[(11)] = inst_16805);

(statearr_16827[(10)] = inst_16786__$1);

return statearr_16827;
})();
var statearr_16828_16845 = state_16816__$1;
(statearr_16828_16845[(2)] = null);

(statearr_16828_16845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16817 === (9))){
var inst_16796 = (state_16816[(8)]);
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16816__$1,(11),out,inst_16796);
} else {
if((state_val_16817 === (5))){
var inst_16810 = cljs.core.async.close_BANG_(out);
var state_16816__$1 = state_16816;
var statearr_16829_16846 = state_16816__$1;
(statearr_16829_16846[(2)] = inst_16810);

(statearr_16829_16846[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16817 === (10))){
var inst_16808 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16830_16847 = state_16816__$1;
(statearr_16830_16847[(2)] = inst_16808);

(statearr_16830_16847[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16817 === (8))){
var inst_16795 = (state_16816[(7)]);
var inst_16796 = (state_16816[(8)]);
var inst_16786 = (state_16816[(10)]);
var inst_16797 = (state_16816[(9)]);
var inst_16800 = (function (){var cs = inst_16786;
var vec__16791 = inst_16795;
var v = inst_16796;
var c = inst_16797;
return ((function (cs,vec__16791,v,c,inst_16795,inst_16796,inst_16786,inst_16797,state_val_16817,c__15437__auto___16838,out){
return (function (p1__16782_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16782_SHARP_);
});
;})(cs,vec__16791,v,c,inst_16795,inst_16796,inst_16786,inst_16797,state_val_16817,c__15437__auto___16838,out))
})();
var inst_16801 = cljs.core.filterv(inst_16800,inst_16786);
var inst_16786__$1 = inst_16801;
var state_16816__$1 = (function (){var statearr_16831 = state_16816;
(statearr_16831[(10)] = inst_16786__$1);

return statearr_16831;
})();
var statearr_16832_16848 = state_16816__$1;
(statearr_16832_16848[(2)] = null);

(statearr_16832_16848[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___16838,out))
;
return ((function (switch__15337__auto__,c__15437__auto___16838,out){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_16833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16833[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_16833[(1)] = (1));

return statearr_16833;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_16816){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_16816);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e16834){if((e16834 instanceof Object)){
var ex__15341__auto__ = e16834;
var statearr_16835_16849 = state_16816;
(statearr_16835_16849[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16816);

return cljs.core.cst$kw$recur;
} else {
throw e16834;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__16850 = state_16816;
state_16816 = G__16850;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_16816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_16816);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___16838,out))
})();
var state__15439__auto__ = (function (){var statearr_16836 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_16836[(6)] = c__15437__auto___16838);

return statearr_16836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___16838,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16852 = arguments.length;
switch (G__16852) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15437__auto___16897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___16897,out){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___16897,out){
return (function (state_16876){
var state_val_16877 = (state_16876[(1)]);
if((state_val_16877 === (7))){
var inst_16858 = (state_16876[(7)]);
var inst_16858__$1 = (state_16876[(2)]);
var inst_16859 = (inst_16858__$1 == null);
var inst_16860 = cljs.core.not(inst_16859);
var state_16876__$1 = (function (){var statearr_16878 = state_16876;
(statearr_16878[(7)] = inst_16858__$1);

return statearr_16878;
})();
if(inst_16860){
var statearr_16879_16898 = state_16876__$1;
(statearr_16879_16898[(1)] = (8));

} else {
var statearr_16880_16899 = state_16876__$1;
(statearr_16880_16899[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16877 === (1))){
var inst_16853 = (0);
var state_16876__$1 = (function (){var statearr_16881 = state_16876;
(statearr_16881[(8)] = inst_16853);

return statearr_16881;
})();
var statearr_16882_16900 = state_16876__$1;
(statearr_16882_16900[(2)] = null);

(statearr_16882_16900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16877 === (4))){
var state_16876__$1 = state_16876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16876__$1,(7),ch);
} else {
if((state_val_16877 === (6))){
var inst_16871 = (state_16876[(2)]);
var state_16876__$1 = state_16876;
var statearr_16883_16901 = state_16876__$1;
(statearr_16883_16901[(2)] = inst_16871);

(statearr_16883_16901[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16877 === (3))){
var inst_16873 = (state_16876[(2)]);
var inst_16874 = cljs.core.async.close_BANG_(out);
var state_16876__$1 = (function (){var statearr_16884 = state_16876;
(statearr_16884[(9)] = inst_16873);

return statearr_16884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16876__$1,inst_16874);
} else {
if((state_val_16877 === (2))){
var inst_16853 = (state_16876[(8)]);
var inst_16855 = (inst_16853 < n);
var state_16876__$1 = state_16876;
if(cljs.core.truth_(inst_16855)){
var statearr_16885_16902 = state_16876__$1;
(statearr_16885_16902[(1)] = (4));

} else {
var statearr_16886_16903 = state_16876__$1;
(statearr_16886_16903[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16877 === (11))){
var inst_16853 = (state_16876[(8)]);
var inst_16863 = (state_16876[(2)]);
var inst_16864 = (inst_16853 + (1));
var inst_16853__$1 = inst_16864;
var state_16876__$1 = (function (){var statearr_16887 = state_16876;
(statearr_16887[(10)] = inst_16863);

(statearr_16887[(8)] = inst_16853__$1);

return statearr_16887;
})();
var statearr_16888_16904 = state_16876__$1;
(statearr_16888_16904[(2)] = null);

(statearr_16888_16904[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16877 === (9))){
var state_16876__$1 = state_16876;
var statearr_16889_16905 = state_16876__$1;
(statearr_16889_16905[(2)] = null);

(statearr_16889_16905[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16877 === (5))){
var state_16876__$1 = state_16876;
var statearr_16890_16906 = state_16876__$1;
(statearr_16890_16906[(2)] = null);

(statearr_16890_16906[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16877 === (10))){
var inst_16868 = (state_16876[(2)]);
var state_16876__$1 = state_16876;
var statearr_16891_16907 = state_16876__$1;
(statearr_16891_16907[(2)] = inst_16868);

(statearr_16891_16907[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16877 === (8))){
var inst_16858 = (state_16876[(7)]);
var state_16876__$1 = state_16876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16876__$1,(11),out,inst_16858);
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
});})(c__15437__auto___16897,out))
;
return ((function (switch__15337__auto__,c__15437__auto___16897,out){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_16892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16892[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_16892[(1)] = (1));

return statearr_16892;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_16876){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_16876);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e16893){if((e16893 instanceof Object)){
var ex__15341__auto__ = e16893;
var statearr_16894_16908 = state_16876;
(statearr_16894_16908[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16876);

return cljs.core.cst$kw$recur;
} else {
throw e16893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__16909 = state_16876;
state_16876 = G__16909;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_16876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_16876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___16897,out))
})();
var state__15439__auto__ = (function (){var statearr_16895 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_16895[(6)] = c__15437__auto___16897);

return statearr_16895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___16897,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16911 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16911 = (function (f,ch,meta16912){
this.f = f;
this.ch = ch;
this.meta16912 = meta16912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16913,meta16912__$1){
var self__ = this;
var _16913__$1 = this;
return (new cljs.core.async.t_cljs$core$async16911(self__.f,self__.ch,meta16912__$1));
});

cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16913){
var self__ = this;
var _16913__$1 = this;
return self__.meta16912;
});

cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16914 = (function (f,ch,meta16912,_,fn1,meta16915){
this.f = f;
this.ch = ch;
this.meta16912 = meta16912;
this._ = _;
this.fn1 = fn1;
this.meta16915 = meta16915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16916,meta16915__$1){
var self__ = this;
var _16916__$1 = this;
return (new cljs.core.async.t_cljs$core$async16914(self__.f,self__.ch,self__.meta16912,self__._,self__.fn1,meta16915__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16916){
var self__ = this;
var _16916__$1 = this;
return self__.meta16915;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16914.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16914.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16910_SHARP_){
var G__16917 = (((p1__16910_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16910_SHARP_) : self__.f.call(null,p1__16910_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16917) : f1.call(null,G__16917));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16914.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16912,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16911], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16915], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16914";

cljs.core.async.t_cljs$core$async16914.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16914");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16914 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16914(f__$1,ch__$1,meta16912__$1,___$2,fn1__$1,meta16915){
return (new cljs.core.async.t_cljs$core$async16914(f__$1,ch__$1,meta16912__$1,___$2,fn1__$1,meta16915));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16914(self__.f,self__.ch,self__.meta16912,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7656__auto__ = ret;
if(cljs.core.truth_(and__7656__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__7656__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16918 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16918) : self__.f.call(null,G__16918));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16912], null);
});

cljs.core.async.t_cljs$core$async16911.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16911";

cljs.core.async.t_cljs$core$async16911.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16911");
});

cljs.core.async.__GT_t_cljs$core$async16911 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16911(f__$1,ch__$1,meta16912){
return (new cljs.core.async.t_cljs$core$async16911(f__$1,ch__$1,meta16912));
});

}

return (new cljs.core.async.t_cljs$core$async16911(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16919 = (function (f,ch,meta16920){
this.f = f;
this.ch = ch;
this.meta16920 = meta16920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16921,meta16920__$1){
var self__ = this;
var _16921__$1 = this;
return (new cljs.core.async.t_cljs$core$async16919(self__.f,self__.ch,meta16920__$1));
});

cljs.core.async.t_cljs$core$async16919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16921){
var self__ = this;
var _16921__$1 = this;
return self__.meta16920;
});

cljs.core.async.t_cljs$core$async16919.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16919.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16919.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16920], null);
});

cljs.core.async.t_cljs$core$async16919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16919";

cljs.core.async.t_cljs$core$async16919.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16919");
});

cljs.core.async.__GT_t_cljs$core$async16919 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16919(f__$1,ch__$1,meta16920){
return (new cljs.core.async.t_cljs$core$async16919(f__$1,ch__$1,meta16920));
});

}

return (new cljs.core.async.t_cljs$core$async16919(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16922 = (function (p,ch,meta16923){
this.p = p;
this.ch = ch;
this.meta16923 = meta16923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16924,meta16923__$1){
var self__ = this;
var _16924__$1 = this;
return (new cljs.core.async.t_cljs$core$async16922(self__.p,self__.ch,meta16923__$1));
});

cljs.core.async.t_cljs$core$async16922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16924){
var self__ = this;
var _16924__$1 = this;
return self__.meta16923;
});

cljs.core.async.t_cljs$core$async16922.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16922.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16922.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16922.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16923], null);
});

cljs.core.async.t_cljs$core$async16922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16922";

cljs.core.async.t_cljs$core$async16922.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async/t_cljs$core$async16922");
});

cljs.core.async.__GT_t_cljs$core$async16922 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16922(p__$1,ch__$1,meta16923){
return (new cljs.core.async.t_cljs$core$async16922(p__$1,ch__$1,meta16923));
});

}

return (new cljs.core.async.t_cljs$core$async16922(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16926 = arguments.length;
switch (G__16926) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15437__auto___16966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___16966,out){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___16966,out){
return (function (state_16947){
var state_val_16948 = (state_16947[(1)]);
if((state_val_16948 === (7))){
var inst_16943 = (state_16947[(2)]);
var state_16947__$1 = state_16947;
var statearr_16949_16967 = state_16947__$1;
(statearr_16949_16967[(2)] = inst_16943);

(statearr_16949_16967[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (1))){
var state_16947__$1 = state_16947;
var statearr_16950_16968 = state_16947__$1;
(statearr_16950_16968[(2)] = null);

(statearr_16950_16968[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (4))){
var inst_16929 = (state_16947[(7)]);
var inst_16929__$1 = (state_16947[(2)]);
var inst_16930 = (inst_16929__$1 == null);
var state_16947__$1 = (function (){var statearr_16951 = state_16947;
(statearr_16951[(7)] = inst_16929__$1);

return statearr_16951;
})();
if(cljs.core.truth_(inst_16930)){
var statearr_16952_16969 = state_16947__$1;
(statearr_16952_16969[(1)] = (5));

} else {
var statearr_16953_16970 = state_16947__$1;
(statearr_16953_16970[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (6))){
var inst_16929 = (state_16947[(7)]);
var inst_16934 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16929) : p.call(null,inst_16929));
var state_16947__$1 = state_16947;
if(cljs.core.truth_(inst_16934)){
var statearr_16954_16971 = state_16947__$1;
(statearr_16954_16971[(1)] = (8));

} else {
var statearr_16955_16972 = state_16947__$1;
(statearr_16955_16972[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (3))){
var inst_16945 = (state_16947[(2)]);
var state_16947__$1 = state_16947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16947__$1,inst_16945);
} else {
if((state_val_16948 === (2))){
var state_16947__$1 = state_16947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16947__$1,(4),ch);
} else {
if((state_val_16948 === (11))){
var inst_16937 = (state_16947[(2)]);
var state_16947__$1 = state_16947;
var statearr_16956_16973 = state_16947__$1;
(statearr_16956_16973[(2)] = inst_16937);

(statearr_16956_16973[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (9))){
var state_16947__$1 = state_16947;
var statearr_16957_16974 = state_16947__$1;
(statearr_16957_16974[(2)] = null);

(statearr_16957_16974[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (5))){
var inst_16932 = cljs.core.async.close_BANG_(out);
var state_16947__$1 = state_16947;
var statearr_16958_16975 = state_16947__$1;
(statearr_16958_16975[(2)] = inst_16932);

(statearr_16958_16975[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (10))){
var inst_16940 = (state_16947[(2)]);
var state_16947__$1 = (function (){var statearr_16959 = state_16947;
(statearr_16959[(8)] = inst_16940);

return statearr_16959;
})();
var statearr_16960_16976 = state_16947__$1;
(statearr_16960_16976[(2)] = null);

(statearr_16960_16976[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16948 === (8))){
var inst_16929 = (state_16947[(7)]);
var state_16947__$1 = state_16947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16947__$1,(11),out,inst_16929);
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
});})(c__15437__auto___16966,out))
;
return ((function (switch__15337__auto__,c__15437__auto___16966,out){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_16961 = [null,null,null,null,null,null,null,null,null];
(statearr_16961[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_16961[(1)] = (1));

return statearr_16961;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_16947){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_16947);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e16962){if((e16962 instanceof Object)){
var ex__15341__auto__ = e16962;
var statearr_16963_16977 = state_16947;
(statearr_16963_16977[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16947);

return cljs.core.cst$kw$recur;
} else {
throw e16962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__16978 = state_16947;
state_16947 = G__16978;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_16947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_16947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___16966,out))
})();
var state__15439__auto__ = (function (){var statearr_16964 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_16964[(6)] = c__15437__auto___16966);

return statearr_16964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___16966,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16980 = arguments.length;
switch (G__16980) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto__){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto__){
return (function (state_17043){
var state_val_17044 = (state_17043[(1)]);
if((state_val_17044 === (7))){
var inst_17039 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17045_17083 = state_17043__$1;
(statearr_17045_17083[(2)] = inst_17039);

(statearr_17045_17083[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (20))){
var inst_17009 = (state_17043[(7)]);
var inst_17020 = (state_17043[(2)]);
var inst_17021 = cljs.core.next(inst_17009);
var inst_16995 = inst_17021;
var inst_16996 = null;
var inst_16997 = (0);
var inst_16998 = (0);
var state_17043__$1 = (function (){var statearr_17046 = state_17043;
(statearr_17046[(8)] = inst_16998);

(statearr_17046[(9)] = inst_16996);

(statearr_17046[(10)] = inst_16997);

(statearr_17046[(11)] = inst_17020);

(statearr_17046[(12)] = inst_16995);

return statearr_17046;
})();
var statearr_17047_17084 = state_17043__$1;
(statearr_17047_17084[(2)] = null);

(statearr_17047_17084[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (1))){
var state_17043__$1 = state_17043;
var statearr_17048_17085 = state_17043__$1;
(statearr_17048_17085[(2)] = null);

(statearr_17048_17085[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (4))){
var inst_16984 = (state_17043[(13)]);
var inst_16984__$1 = (state_17043[(2)]);
var inst_16985 = (inst_16984__$1 == null);
var state_17043__$1 = (function (){var statearr_17049 = state_17043;
(statearr_17049[(13)] = inst_16984__$1);

return statearr_17049;
})();
if(cljs.core.truth_(inst_16985)){
var statearr_17050_17086 = state_17043__$1;
(statearr_17050_17086[(1)] = (5));

} else {
var statearr_17051_17087 = state_17043__$1;
(statearr_17051_17087[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (15))){
var state_17043__$1 = state_17043;
var statearr_17055_17088 = state_17043__$1;
(statearr_17055_17088[(2)] = null);

(statearr_17055_17088[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (21))){
var state_17043__$1 = state_17043;
var statearr_17056_17089 = state_17043__$1;
(statearr_17056_17089[(2)] = null);

(statearr_17056_17089[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (13))){
var inst_16998 = (state_17043[(8)]);
var inst_16996 = (state_17043[(9)]);
var inst_16997 = (state_17043[(10)]);
var inst_16995 = (state_17043[(12)]);
var inst_17005 = (state_17043[(2)]);
var inst_17006 = (inst_16998 + (1));
var tmp17052 = inst_16996;
var tmp17053 = inst_16997;
var tmp17054 = inst_16995;
var inst_16995__$1 = tmp17054;
var inst_16996__$1 = tmp17052;
var inst_16997__$1 = tmp17053;
var inst_16998__$1 = inst_17006;
var state_17043__$1 = (function (){var statearr_17057 = state_17043;
(statearr_17057[(8)] = inst_16998__$1);

(statearr_17057[(9)] = inst_16996__$1);

(statearr_17057[(10)] = inst_16997__$1);

(statearr_17057[(14)] = inst_17005);

(statearr_17057[(12)] = inst_16995__$1);

return statearr_17057;
})();
var statearr_17058_17090 = state_17043__$1;
(statearr_17058_17090[(2)] = null);

(statearr_17058_17090[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (22))){
var state_17043__$1 = state_17043;
var statearr_17059_17091 = state_17043__$1;
(statearr_17059_17091[(2)] = null);

(statearr_17059_17091[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (6))){
var inst_16984 = (state_17043[(13)]);
var inst_16993 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16984) : f.call(null,inst_16984));
var inst_16994 = cljs.core.seq(inst_16993);
var inst_16995 = inst_16994;
var inst_16996 = null;
var inst_16997 = (0);
var inst_16998 = (0);
var state_17043__$1 = (function (){var statearr_17060 = state_17043;
(statearr_17060[(8)] = inst_16998);

(statearr_17060[(9)] = inst_16996);

(statearr_17060[(10)] = inst_16997);

(statearr_17060[(12)] = inst_16995);

return statearr_17060;
})();
var statearr_17061_17092 = state_17043__$1;
(statearr_17061_17092[(2)] = null);

(statearr_17061_17092[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (17))){
var inst_17009 = (state_17043[(7)]);
var inst_17013 = cljs.core.chunk_first(inst_17009);
var inst_17014 = cljs.core.chunk_rest(inst_17009);
var inst_17015 = cljs.core.count(inst_17013);
var inst_16995 = inst_17014;
var inst_16996 = inst_17013;
var inst_16997 = inst_17015;
var inst_16998 = (0);
var state_17043__$1 = (function (){var statearr_17062 = state_17043;
(statearr_17062[(8)] = inst_16998);

(statearr_17062[(9)] = inst_16996);

(statearr_17062[(10)] = inst_16997);

(statearr_17062[(12)] = inst_16995);

return statearr_17062;
})();
var statearr_17063_17093 = state_17043__$1;
(statearr_17063_17093[(2)] = null);

(statearr_17063_17093[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (3))){
var inst_17041 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17043__$1,inst_17041);
} else {
if((state_val_17044 === (12))){
var inst_17029 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17064_17094 = state_17043__$1;
(statearr_17064_17094[(2)] = inst_17029);

(statearr_17064_17094[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (2))){
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17043__$1,(4),in$);
} else {
if((state_val_17044 === (23))){
var inst_17037 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17065_17095 = state_17043__$1;
(statearr_17065_17095[(2)] = inst_17037);

(statearr_17065_17095[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (19))){
var inst_17024 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17066_17096 = state_17043__$1;
(statearr_17066_17096[(2)] = inst_17024);

(statearr_17066_17096[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (11))){
var inst_17009 = (state_17043[(7)]);
var inst_16995 = (state_17043[(12)]);
var inst_17009__$1 = cljs.core.seq(inst_16995);
var state_17043__$1 = (function (){var statearr_17067 = state_17043;
(statearr_17067[(7)] = inst_17009__$1);

return statearr_17067;
})();
if(inst_17009__$1){
var statearr_17068_17097 = state_17043__$1;
(statearr_17068_17097[(1)] = (14));

} else {
var statearr_17069_17098 = state_17043__$1;
(statearr_17069_17098[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (9))){
var inst_17031 = (state_17043[(2)]);
var inst_17032 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17043__$1 = (function (){var statearr_17070 = state_17043;
(statearr_17070[(15)] = inst_17031);

return statearr_17070;
})();
if(cljs.core.truth_(inst_17032)){
var statearr_17071_17099 = state_17043__$1;
(statearr_17071_17099[(1)] = (21));

} else {
var statearr_17072_17100 = state_17043__$1;
(statearr_17072_17100[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (5))){
var inst_16987 = cljs.core.async.close_BANG_(out);
var state_17043__$1 = state_17043;
var statearr_17073_17101 = state_17043__$1;
(statearr_17073_17101[(2)] = inst_16987);

(statearr_17073_17101[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (14))){
var inst_17009 = (state_17043[(7)]);
var inst_17011 = cljs.core.chunked_seq_QMARK_(inst_17009);
var state_17043__$1 = state_17043;
if(inst_17011){
var statearr_17074_17102 = state_17043__$1;
(statearr_17074_17102[(1)] = (17));

} else {
var statearr_17075_17103 = state_17043__$1;
(statearr_17075_17103[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (16))){
var inst_17027 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17076_17104 = state_17043__$1;
(statearr_17076_17104[(2)] = inst_17027);

(statearr_17076_17104[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (10))){
var inst_16998 = (state_17043[(8)]);
var inst_16996 = (state_17043[(9)]);
var inst_17003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16996,inst_16998);
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17043__$1,(13),out,inst_17003);
} else {
if((state_val_17044 === (18))){
var inst_17009 = (state_17043[(7)]);
var inst_17018 = cljs.core.first(inst_17009);
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17043__$1,(20),out,inst_17018);
} else {
if((state_val_17044 === (8))){
var inst_16998 = (state_17043[(8)]);
var inst_16997 = (state_17043[(10)]);
var inst_17000 = (inst_16998 < inst_16997);
var inst_17001 = inst_17000;
var state_17043__$1 = state_17043;
if(cljs.core.truth_(inst_17001)){
var statearr_17077_17105 = state_17043__$1;
(statearr_17077_17105[(1)] = (10));

} else {
var statearr_17078_17106 = state_17043__$1;
(statearr_17078_17106[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15437__auto__))
;
return ((function (switch__15337__auto__,c__15437__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15338__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15338__auto____0 = (function (){
var statearr_17079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17079[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15338__auto__);

(statearr_17079[(1)] = (1));

return statearr_17079;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15338__auto____1 = (function (state_17043){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_17043);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e17080){if((e17080 instanceof Object)){
var ex__15341__auto__ = e17080;
var statearr_17081_17107 = state_17043;
(statearr_17081_17107[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17043);

return cljs.core.cst$kw$recur;
} else {
throw e17080;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__17108 = state_17043;
state_17043 = G__17108;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15338__auto__ = function(state_17043){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15338__auto____1.call(this,state_17043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15338__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15338__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto__))
})();
var state__15439__auto__ = (function (){var statearr_17082 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_17082[(6)] = c__15437__auto__);

return statearr_17082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto__))
);

return c__15437__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17110 = arguments.length;
switch (G__17110) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17113 = arguments.length;
switch (G__17113) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17116 = arguments.length;
switch (G__17116) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15437__auto___17163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___17163,out){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___17163,out){
return (function (state_17140){
var state_val_17141 = (state_17140[(1)]);
if((state_val_17141 === (7))){
var inst_17135 = (state_17140[(2)]);
var state_17140__$1 = state_17140;
var statearr_17142_17164 = state_17140__$1;
(statearr_17142_17164[(2)] = inst_17135);

(statearr_17142_17164[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17141 === (1))){
var inst_17117 = null;
var state_17140__$1 = (function (){var statearr_17143 = state_17140;
(statearr_17143[(7)] = inst_17117);

return statearr_17143;
})();
var statearr_17144_17165 = state_17140__$1;
(statearr_17144_17165[(2)] = null);

(statearr_17144_17165[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17141 === (4))){
var inst_17120 = (state_17140[(8)]);
var inst_17120__$1 = (state_17140[(2)]);
var inst_17121 = (inst_17120__$1 == null);
var inst_17122 = cljs.core.not(inst_17121);
var state_17140__$1 = (function (){var statearr_17145 = state_17140;
(statearr_17145[(8)] = inst_17120__$1);

return statearr_17145;
})();
if(inst_17122){
var statearr_17146_17166 = state_17140__$1;
(statearr_17146_17166[(1)] = (5));

} else {
var statearr_17147_17167 = state_17140__$1;
(statearr_17147_17167[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17141 === (6))){
var state_17140__$1 = state_17140;
var statearr_17148_17168 = state_17140__$1;
(statearr_17148_17168[(2)] = null);

(statearr_17148_17168[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17141 === (3))){
var inst_17137 = (state_17140[(2)]);
var inst_17138 = cljs.core.async.close_BANG_(out);
var state_17140__$1 = (function (){var statearr_17149 = state_17140;
(statearr_17149[(9)] = inst_17137);

return statearr_17149;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17140__$1,inst_17138);
} else {
if((state_val_17141 === (2))){
var state_17140__$1 = state_17140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17140__$1,(4),ch);
} else {
if((state_val_17141 === (11))){
var inst_17120 = (state_17140[(8)]);
var inst_17129 = (state_17140[(2)]);
var inst_17117 = inst_17120;
var state_17140__$1 = (function (){var statearr_17150 = state_17140;
(statearr_17150[(7)] = inst_17117);

(statearr_17150[(10)] = inst_17129);

return statearr_17150;
})();
var statearr_17151_17169 = state_17140__$1;
(statearr_17151_17169[(2)] = null);

(statearr_17151_17169[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17141 === (9))){
var inst_17120 = (state_17140[(8)]);
var state_17140__$1 = state_17140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17140__$1,(11),out,inst_17120);
} else {
if((state_val_17141 === (5))){
var inst_17120 = (state_17140[(8)]);
var inst_17117 = (state_17140[(7)]);
var inst_17124 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17120,inst_17117);
var state_17140__$1 = state_17140;
if(inst_17124){
var statearr_17153_17170 = state_17140__$1;
(statearr_17153_17170[(1)] = (8));

} else {
var statearr_17154_17171 = state_17140__$1;
(statearr_17154_17171[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17141 === (10))){
var inst_17132 = (state_17140[(2)]);
var state_17140__$1 = state_17140;
var statearr_17155_17172 = state_17140__$1;
(statearr_17155_17172[(2)] = inst_17132);

(statearr_17155_17172[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17141 === (8))){
var inst_17117 = (state_17140[(7)]);
var tmp17152 = inst_17117;
var inst_17117__$1 = tmp17152;
var state_17140__$1 = (function (){var statearr_17156 = state_17140;
(statearr_17156[(7)] = inst_17117__$1);

return statearr_17156;
})();
var statearr_17157_17173 = state_17140__$1;
(statearr_17157_17173[(2)] = null);

(statearr_17157_17173[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___17163,out))
;
return ((function (switch__15337__auto__,c__15437__auto___17163,out){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_17158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17158[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_17158[(1)] = (1));

return statearr_17158;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_17140){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_17140);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e17159){if((e17159 instanceof Object)){
var ex__15341__auto__ = e17159;
var statearr_17160_17174 = state_17140;
(statearr_17160_17174[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17140);

return cljs.core.cst$kw$recur;
} else {
throw e17159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__17175 = state_17140;
state_17140 = G__17175;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_17140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_17140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___17163,out))
})();
var state__15439__auto__ = (function (){var statearr_17161 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_17161[(6)] = c__15437__auto___17163);

return statearr_17161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___17163,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17177 = arguments.length;
switch (G__17177) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15437__auto___17243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___17243,out){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___17243,out){
return (function (state_17215){
var state_val_17216 = (state_17215[(1)]);
if((state_val_17216 === (7))){
var inst_17211 = (state_17215[(2)]);
var state_17215__$1 = state_17215;
var statearr_17217_17244 = state_17215__$1;
(statearr_17217_17244[(2)] = inst_17211);

(statearr_17217_17244[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17216 === (1))){
var inst_17178 = (new Array(n));
var inst_17179 = inst_17178;
var inst_17180 = (0);
var state_17215__$1 = (function (){var statearr_17218 = state_17215;
(statearr_17218[(7)] = inst_17180);

(statearr_17218[(8)] = inst_17179);

return statearr_17218;
})();
var statearr_17219_17245 = state_17215__$1;
(statearr_17219_17245[(2)] = null);

(statearr_17219_17245[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17216 === (4))){
var inst_17183 = (state_17215[(9)]);
var inst_17183__$1 = (state_17215[(2)]);
var inst_17184 = (inst_17183__$1 == null);
var inst_17185 = cljs.core.not(inst_17184);
var state_17215__$1 = (function (){var statearr_17220 = state_17215;
(statearr_17220[(9)] = inst_17183__$1);

return statearr_17220;
})();
if(inst_17185){
var statearr_17221_17246 = state_17215__$1;
(statearr_17221_17246[(1)] = (5));

} else {
var statearr_17222_17247 = state_17215__$1;
(statearr_17222_17247[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17216 === (15))){
var inst_17205 = (state_17215[(2)]);
var state_17215__$1 = state_17215;
var statearr_17223_17248 = state_17215__$1;
(statearr_17223_17248[(2)] = inst_17205);

(statearr_17223_17248[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17216 === (13))){
var state_17215__$1 = state_17215;
var statearr_17224_17249 = state_17215__$1;
(statearr_17224_17249[(2)] = null);

(statearr_17224_17249[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17216 === (6))){
var inst_17180 = (state_17215[(7)]);
var inst_17201 = (inst_17180 > (0));
var state_17215__$1 = state_17215;
if(cljs.core.truth_(inst_17201)){
var statearr_17225_17250 = state_17215__$1;
(statearr_17225_17250[(1)] = (12));

} else {
var statearr_17226_17251 = state_17215__$1;
(statearr_17226_17251[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17216 === (3))){
var inst_17213 = (state_17215[(2)]);
var state_17215__$1 = state_17215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17215__$1,inst_17213);
} else {
if((state_val_17216 === (12))){
var inst_17179 = (state_17215[(8)]);
var inst_17203 = cljs.core.vec(inst_17179);
var state_17215__$1 = state_17215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17215__$1,(15),out,inst_17203);
} else {
if((state_val_17216 === (2))){
var state_17215__$1 = state_17215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17215__$1,(4),ch);
} else {
if((state_val_17216 === (11))){
var inst_17195 = (state_17215[(2)]);
var inst_17196 = (new Array(n));
var inst_17179 = inst_17196;
var inst_17180 = (0);
var state_17215__$1 = (function (){var statearr_17227 = state_17215;
(statearr_17227[(10)] = inst_17195);

(statearr_17227[(7)] = inst_17180);

(statearr_17227[(8)] = inst_17179);

return statearr_17227;
})();
var statearr_17228_17252 = state_17215__$1;
(statearr_17228_17252[(2)] = null);

(statearr_17228_17252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17216 === (9))){
var inst_17179 = (state_17215[(8)]);
var inst_17193 = cljs.core.vec(inst_17179);
var state_17215__$1 = state_17215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17215__$1,(11),out,inst_17193);
} else {
if((state_val_17216 === (5))){
var inst_17183 = (state_17215[(9)]);
var inst_17180 = (state_17215[(7)]);
var inst_17188 = (state_17215[(11)]);
var inst_17179 = (state_17215[(8)]);
var inst_17187 = (inst_17179[inst_17180] = inst_17183);
var inst_17188__$1 = (inst_17180 + (1));
var inst_17189 = (inst_17188__$1 < n);
var state_17215__$1 = (function (){var statearr_17229 = state_17215;
(statearr_17229[(12)] = inst_17187);

(statearr_17229[(11)] = inst_17188__$1);

return statearr_17229;
})();
if(cljs.core.truth_(inst_17189)){
var statearr_17230_17253 = state_17215__$1;
(statearr_17230_17253[(1)] = (8));

} else {
var statearr_17231_17254 = state_17215__$1;
(statearr_17231_17254[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17216 === (14))){
var inst_17208 = (state_17215[(2)]);
var inst_17209 = cljs.core.async.close_BANG_(out);
var state_17215__$1 = (function (){var statearr_17233 = state_17215;
(statearr_17233[(13)] = inst_17208);

return statearr_17233;
})();
var statearr_17234_17255 = state_17215__$1;
(statearr_17234_17255[(2)] = inst_17209);

(statearr_17234_17255[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17216 === (10))){
var inst_17199 = (state_17215[(2)]);
var state_17215__$1 = state_17215;
var statearr_17235_17256 = state_17215__$1;
(statearr_17235_17256[(2)] = inst_17199);

(statearr_17235_17256[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17216 === (8))){
var inst_17188 = (state_17215[(11)]);
var inst_17179 = (state_17215[(8)]);
var tmp17232 = inst_17179;
var inst_17179__$1 = tmp17232;
var inst_17180 = inst_17188;
var state_17215__$1 = (function (){var statearr_17236 = state_17215;
(statearr_17236[(7)] = inst_17180);

(statearr_17236[(8)] = inst_17179__$1);

return statearr_17236;
})();
var statearr_17237_17257 = state_17215__$1;
(statearr_17237_17257[(2)] = null);

(statearr_17237_17257[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___17243,out))
;
return ((function (switch__15337__auto__,c__15437__auto___17243,out){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_17238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17238[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_17238[(1)] = (1));

return statearr_17238;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_17215){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_17215);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e17239){if((e17239 instanceof Object)){
var ex__15341__auto__ = e17239;
var statearr_17240_17258 = state_17215;
(statearr_17240_17258[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17215);

return cljs.core.cst$kw$recur;
} else {
throw e17239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__17259 = state_17215;
state_17215 = G__17259;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_17215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_17215);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___17243,out))
})();
var state__15439__auto__ = (function (){var statearr_17241 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_17241[(6)] = c__15437__auto___17243);

return statearr_17241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___17243,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17261 = arguments.length;
switch (G__17261) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15437__auto___17331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___17331,out){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___17331,out){
return (function (state_17303){
var state_val_17304 = (state_17303[(1)]);
if((state_val_17304 === (7))){
var inst_17299 = (state_17303[(2)]);
var state_17303__$1 = state_17303;
var statearr_17305_17332 = state_17303__$1;
(statearr_17305_17332[(2)] = inst_17299);

(statearr_17305_17332[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17304 === (1))){
var inst_17262 = [];
var inst_17263 = inst_17262;
var inst_17264 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17303__$1 = (function (){var statearr_17306 = state_17303;
(statearr_17306[(7)] = inst_17263);

(statearr_17306[(8)] = inst_17264);

return statearr_17306;
})();
var statearr_17307_17333 = state_17303__$1;
(statearr_17307_17333[(2)] = null);

(statearr_17307_17333[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17304 === (4))){
var inst_17267 = (state_17303[(9)]);
var inst_17267__$1 = (state_17303[(2)]);
var inst_17268 = (inst_17267__$1 == null);
var inst_17269 = cljs.core.not(inst_17268);
var state_17303__$1 = (function (){var statearr_17308 = state_17303;
(statearr_17308[(9)] = inst_17267__$1);

return statearr_17308;
})();
if(inst_17269){
var statearr_17309_17334 = state_17303__$1;
(statearr_17309_17334[(1)] = (5));

} else {
var statearr_17310_17335 = state_17303__$1;
(statearr_17310_17335[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17304 === (15))){
var inst_17293 = (state_17303[(2)]);
var state_17303__$1 = state_17303;
var statearr_17311_17336 = state_17303__$1;
(statearr_17311_17336[(2)] = inst_17293);

(statearr_17311_17336[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17304 === (13))){
var state_17303__$1 = state_17303;
var statearr_17312_17337 = state_17303__$1;
(statearr_17312_17337[(2)] = null);

(statearr_17312_17337[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17304 === (6))){
var inst_17263 = (state_17303[(7)]);
var inst_17288 = inst_17263.length;
var inst_17289 = (inst_17288 > (0));
var state_17303__$1 = state_17303;
if(cljs.core.truth_(inst_17289)){
var statearr_17313_17338 = state_17303__$1;
(statearr_17313_17338[(1)] = (12));

} else {
var statearr_17314_17339 = state_17303__$1;
(statearr_17314_17339[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17304 === (3))){
var inst_17301 = (state_17303[(2)]);
var state_17303__$1 = state_17303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17303__$1,inst_17301);
} else {
if((state_val_17304 === (12))){
var inst_17263 = (state_17303[(7)]);
var inst_17291 = cljs.core.vec(inst_17263);
var state_17303__$1 = state_17303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17303__$1,(15),out,inst_17291);
} else {
if((state_val_17304 === (2))){
var state_17303__$1 = state_17303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17303__$1,(4),ch);
} else {
if((state_val_17304 === (11))){
var inst_17271 = (state_17303[(10)]);
var inst_17267 = (state_17303[(9)]);
var inst_17281 = (state_17303[(2)]);
var inst_17282 = [];
var inst_17283 = inst_17282.push(inst_17267);
var inst_17263 = inst_17282;
var inst_17264 = inst_17271;
var state_17303__$1 = (function (){var statearr_17315 = state_17303;
(statearr_17315[(7)] = inst_17263);

(statearr_17315[(8)] = inst_17264);

(statearr_17315[(11)] = inst_17281);

(statearr_17315[(12)] = inst_17283);

return statearr_17315;
})();
var statearr_17316_17340 = state_17303__$1;
(statearr_17316_17340[(2)] = null);

(statearr_17316_17340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17304 === (9))){
var inst_17263 = (state_17303[(7)]);
var inst_17279 = cljs.core.vec(inst_17263);
var state_17303__$1 = state_17303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17303__$1,(11),out,inst_17279);
} else {
if((state_val_17304 === (5))){
var inst_17271 = (state_17303[(10)]);
var inst_17264 = (state_17303[(8)]);
var inst_17267 = (state_17303[(9)]);
var inst_17271__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17267) : f.call(null,inst_17267));
var inst_17272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17271__$1,inst_17264);
var inst_17273 = cljs.core.keyword_identical_QMARK_(inst_17264,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17274 = (inst_17272) || (inst_17273);
var state_17303__$1 = (function (){var statearr_17317 = state_17303;
(statearr_17317[(10)] = inst_17271__$1);

return statearr_17317;
})();
if(cljs.core.truth_(inst_17274)){
var statearr_17318_17341 = state_17303__$1;
(statearr_17318_17341[(1)] = (8));

} else {
var statearr_17319_17342 = state_17303__$1;
(statearr_17319_17342[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17304 === (14))){
var inst_17296 = (state_17303[(2)]);
var inst_17297 = cljs.core.async.close_BANG_(out);
var state_17303__$1 = (function (){var statearr_17321 = state_17303;
(statearr_17321[(13)] = inst_17296);

return statearr_17321;
})();
var statearr_17322_17343 = state_17303__$1;
(statearr_17322_17343[(2)] = inst_17297);

(statearr_17322_17343[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17304 === (10))){
var inst_17286 = (state_17303[(2)]);
var state_17303__$1 = state_17303;
var statearr_17323_17344 = state_17303__$1;
(statearr_17323_17344[(2)] = inst_17286);

(statearr_17323_17344[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17304 === (8))){
var inst_17271 = (state_17303[(10)]);
var inst_17263 = (state_17303[(7)]);
var inst_17267 = (state_17303[(9)]);
var inst_17276 = inst_17263.push(inst_17267);
var tmp17320 = inst_17263;
var inst_17263__$1 = tmp17320;
var inst_17264 = inst_17271;
var state_17303__$1 = (function (){var statearr_17324 = state_17303;
(statearr_17324[(14)] = inst_17276);

(statearr_17324[(7)] = inst_17263__$1);

(statearr_17324[(8)] = inst_17264);

return statearr_17324;
})();
var statearr_17325_17345 = state_17303__$1;
(statearr_17325_17345[(2)] = null);

(statearr_17325_17345[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15437__auto___17331,out))
;
return ((function (switch__15337__auto__,c__15437__auto___17331,out){
return (function() {
var cljs$core$async$state_machine__15338__auto__ = null;
var cljs$core$async$state_machine__15338__auto____0 = (function (){
var statearr_17326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17326[(0)] = cljs$core$async$state_machine__15338__auto__);

(statearr_17326[(1)] = (1));

return statearr_17326;
});
var cljs$core$async$state_machine__15338__auto____1 = (function (state_17303){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_17303);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e17327){if((e17327 instanceof Object)){
var ex__15341__auto__ = e17327;
var statearr_17328_17346 = state_17303;
(statearr_17328_17346[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17303);

return cljs.core.cst$kw$recur;
} else {
throw e17327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__17347 = state_17303;
state_17303 = G__17347;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs$core$async$state_machine__15338__auto__ = function(state_17303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15338__auto____1.call(this,state_17303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15338__auto____0;
cljs$core$async$state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15338__auto____1;
return cljs$core$async$state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___17331,out))
})();
var state__15439__auto__ = (function (){var statearr_17329 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_17329[(6)] = c__15437__auto___17331);

return statearr_17329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___17331,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


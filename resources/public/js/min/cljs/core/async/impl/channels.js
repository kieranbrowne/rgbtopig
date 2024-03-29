// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877 = (function (val,meta13878){
this.val = val;
this.meta13878 = meta13878;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13879,meta13878__$1){
var self__ = this;
var _13879__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877(self__.val,meta13878__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13879){
var self__ = this;
var _13879__$1 = this;
return self__.meta13878;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta13878], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels13877";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels13877");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels13877 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels13877(val__$1,meta13878){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877(val__$1,meta13878));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels13877(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$val], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__8351__auto__ = (((this$ == null))?null:this$);
var m__8352__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return (m__8352__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8352__auto__.call(null,this$));
} else {
var m__8352__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__8352__auto____$1 == null))){
return (m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8352__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8352__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_13891 = self__.puts.pop();
if((putter_13891 == null)){
} else {
var put_handler_13892 = putter_13891.handler;
var val_13893 = putter_13891.val;
if(put_handler_13892.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_13894 = put_handler_13892.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_13894,put_handler_13892,val_13893,putter_13891,this$__$1){
return (function (){
return (put_cb_13894.cljs$core$IFn$_invoke$arity$1 ? put_cb_13894.cljs$core$IFn$_invoke$arity$1(true) : put_cb_13894.call(null,true));
});})(put_cb_13894,put_handler_13892,val_13893,putter_13891,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__7656__auto__ = self__.buf;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__7656__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__13895 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__13895;
continue;
} else {
var G__13896 = takers;
takers = G__13896;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__13880_13897 = cljs.core.seq(take_cbs);
var chunk__13881_13898 = null;
var count__13882_13899 = (0);
var i__13883_13900 = (0);
while(true){
if((i__13883_13900 < count__13882_13899)){
var f_13901 = chunk__13881_13898.cljs$core$IIndexed$_nth$arity$2(null,i__13883_13900);
cljs.core.async.impl.dispatch.run(f_13901);

var G__13902 = seq__13880_13897;
var G__13903 = chunk__13881_13898;
var G__13904 = count__13882_13899;
var G__13905 = (i__13883_13900 + (1));
seq__13880_13897 = G__13902;
chunk__13881_13898 = G__13903;
count__13882_13899 = G__13904;
i__13883_13900 = G__13905;
continue;
} else {
var temp__4657__auto___13906 = cljs.core.seq(seq__13880_13897);
if(temp__4657__auto___13906){
var seq__13880_13907__$1 = temp__4657__auto___13906;
if(cljs.core.chunked_seq_QMARK_(seq__13880_13907__$1)){
var c__8507__auto___13908 = cljs.core.chunk_first(seq__13880_13907__$1);
var G__13909 = cljs.core.chunk_rest(seq__13880_13907__$1);
var G__13910 = c__8507__auto___13908;
var G__13911 = cljs.core.count(c__8507__auto___13908);
var G__13912 = (0);
seq__13880_13897 = G__13909;
chunk__13881_13898 = G__13910;
count__13882_13899 = G__13911;
i__13883_13900 = G__13912;
continue;
} else {
var f_13913 = cljs.core.first(seq__13880_13907__$1);
cljs.core.async.impl.dispatch.run(f_13913);

var G__13914 = cljs.core.next(seq__13880_13907__$1);
var G__13915 = null;
var G__13916 = (0);
var G__13917 = (0);
seq__13880_13897 = G__13914;
chunk__13881_13898 = G__13915;
count__13882_13899 = G__13916;
i__13883_13900 = G__13917;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var temp__4655__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__4655__auto__)){
var take_cb = temp__4655__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__13884 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__7656__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__7656__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__7656__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))){
var G__13918 = cbs__$1;
cbs = G__13918;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13884,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13884,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__13887_13919 = cljs.core.seq(cbs);
var chunk__13888_13920 = null;
var count__13889_13921 = (0);
var i__13890_13922 = (0);
while(true){
if((i__13890_13922 < count__13889_13921)){
var cb_13923 = chunk__13888_13920.cljs$core$IIndexed$_nth$arity$2(null,i__13890_13922);
cljs.core.async.impl.dispatch.run(((function (seq__13887_13919,chunk__13888_13920,count__13889_13921,i__13890_13922,cb_13923,val,vec__13884,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return (cb_13923.cljs$core$IFn$_invoke$arity$1 ? cb_13923.cljs$core$IFn$_invoke$arity$1(true) : cb_13923.call(null,true));
});})(seq__13887_13919,chunk__13888_13920,count__13889_13921,i__13890_13922,cb_13923,val,vec__13884,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__13924 = seq__13887_13919;
var G__13925 = chunk__13888_13920;
var G__13926 = count__13889_13921;
var G__13927 = (i__13890_13922 + (1));
seq__13887_13919 = G__13924;
chunk__13888_13920 = G__13925;
count__13889_13921 = G__13926;
i__13890_13922 = G__13927;
continue;
} else {
var temp__4657__auto___13928 = cljs.core.seq(seq__13887_13919);
if(temp__4657__auto___13928){
var seq__13887_13929__$1 = temp__4657__auto___13928;
if(cljs.core.chunked_seq_QMARK_(seq__13887_13929__$1)){
var c__8507__auto___13930 = cljs.core.chunk_first(seq__13887_13929__$1);
var G__13931 = cljs.core.chunk_rest(seq__13887_13929__$1);
var G__13932 = c__8507__auto___13930;
var G__13933 = cljs.core.count(c__8507__auto___13930);
var G__13934 = (0);
seq__13887_13919 = G__13931;
chunk__13888_13920 = G__13932;
count__13889_13921 = G__13933;
i__13890_13922 = G__13934;
continue;
} else {
var cb_13935 = cljs.core.first(seq__13887_13929__$1);
cljs.core.async.impl.dispatch.run(((function (seq__13887_13919,chunk__13888_13920,count__13889_13921,i__13890_13922,cb_13935,seq__13887_13929__$1,temp__4657__auto___13928,val,vec__13884,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return (cb_13935.cljs$core$IFn$_invoke$arity$1 ? cb_13935.cljs$core$IFn$_invoke$arity$1(true) : cb_13935.call(null,true));
});})(seq__13887_13919,chunk__13888_13920,count__13889_13921,i__13890_13922,cb_13935,seq__13887_13929__$1,temp__4657__auto___13928,val,vec__13884,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__13936 = cljs.core.next(seq__13887_13929__$1);
var G__13937 = null;
var G__13938 = (0);
var G__13939 = (0);
seq__13887_13919 = G__13936;
chunk__13888_13920 = G__13937;
count__13889_13921 = G__13938;
i__13890_13922 = G__13939;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__7656__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__7656__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__7656__auto__;
}
})())){
var has_val = (function (){var and__7656__auto__ = self__.buf;
if(cljs.core.truth_(and__7656__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__7656__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__7656__auto__ = self__.buf;
if(cljs.core.truth_(and__7656__auto__)){
return (self__.puts.length === (0));
} else {
return and__7656__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_13940 = self__.takes.pop();
if((taker_13940 == null)){
} else {
if(taker_13940.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_13941 = taker_13940.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_13942 = (cljs.core.truth_((function (){var and__7656__auto__ = self__.buf;
if(cljs.core.truth_(and__7656__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__7656__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_13941,val_13942,taker_13940,this$__$1){
return (function (){
return (take_cb_13941.cljs$core$IFn$_invoke$arity$1 ? take_cb_13941.cljs$core$IFn$_invoke$arity$1(val_13942) : take_cb_13941.call(null,val_13942));
});})(take_cb_13941,val_13942,taker_13940,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$takes,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_takes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$puts,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_puts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null)),cljs.core.with_meta(cljs.core.cst$sym$closed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$add_BANG_], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__13943 = (function (){var or__7668__auto__ = exh;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__13943.cljs$core$IFn$_invoke$arity$1 ? fexpr__13943.cljs$core$IFn$_invoke$arity$1(t) : fexpr__13943.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__13945 = arguments.length;
switch (G__13945) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__13949 = null;
var G__13949__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e13946){var t = e13946;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__13949__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e13947){var t = e13947;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__13949 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__13949__1.call(this,buf__$1);
case 2:
return G__13949__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__13949.cljs$core$IFn$_invoke$arity$1 = G__13949__1;
G__13949.cljs$core$IFn$_invoke$arity$2 = G__13949__2;
return G__13949;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


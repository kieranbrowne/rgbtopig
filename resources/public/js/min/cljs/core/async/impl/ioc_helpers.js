// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),cljs.core.cst$kw$finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350 = (function (f,meta15351){
this.f = f;
this.meta15351 = meta15351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15352,meta15351__$1){
var self__ = this;
var _15352__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350(self__.f,meta15351__$1));
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15352){
var self__ = this;
var _15352__$1 = this;
return self__.meta15351;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$meta15351], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers15350";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write(writer__8294__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers15350");
});

cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers15350 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers15350(f__$1,meta15351){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350(f__$1,meta15351));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers15350(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__15353 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__15353.cljs$core$IFn$_invoke$arity$1 ? fexpr__15353.cljs$core$IFn$_invoke$arity$1(state) : fexpr__15353.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e15354){if((e15354 instanceof Object)){
var ex = e15354;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e15354;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4655__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_15355_15357 = state;
(statearr_15355_15357[(2)] = x);

(statearr_15355_15357[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4655__auto__)){
var cb = temp__4655__auto__;
var statearr_15356_15358 = state;
(statearr_15356_15358[(2)] = cljs.core.deref(cb));

(statearr_15356_15358[(1)] = blk);


return cljs.core.cst$kw$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4655__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_15359_15361 = state;
(statearr_15359_15361[(2)] = ret_val);

(statearr_15359_15361[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4655__auto__)){
var cb = temp__4655__auto__;
var statearr_15360_15362 = state;
(statearr_15360_15362[(2)] = cljs.core.deref(cb));

(statearr_15360_15362[(1)] = blk);


return cljs.core.cst$kw$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8308__auto__,k__8309__auto__){
var self__ = this;
var this__8308__auto____$1 = this;
return this__8308__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8309__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8310__auto__,k15364,else__8311__auto__){
var self__ = this;
var this__8310__auto____$1 = this;
var G__15368 = k15364;
var G__15368__$1 = (((G__15368 instanceof cljs.core.Keyword))?G__15368.fqn:null);
switch (G__15368__$1) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15364,else__8311__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8322__auto__,writer__8323__auto__,opts__8324__auto__){
var self__ = this;
var this__8322__auto____$1 = this;
var pr_pair__8325__auto__ = ((function (this__8322__auto____$1){
return (function (keyval__8326__auto__){
return cljs.core.pr_sequential_writer(writer__8323__auto__,cljs.core.pr_writer,""," ","",opts__8324__auto__,keyval__8326__auto__);
});})(this__8322__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8323__auto__,pr_pair__8325__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__8324__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15363){
var self__ = this;
var G__15363__$1 = this;
return (new cljs.core.RecordIter((0),G__15363__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$catch_DASH_block,cljs.core.cst$kw$catch_DASH_exception,cljs.core.cst$kw$finally_DASH_block,cljs.core.cst$kw$continue_DASH_block,cljs.core.cst$kw$prev], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8306__auto__){
var self__ = this;
var this__8306__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8303__auto__){
var self__ = this;
var this__8303__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8312__auto__){
var self__ = this;
var this__8312__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8304__auto__){
var self__ = this;
var this__8304__auto____$1 = this;
var h__8122__auto__ = self__.__hash;
if(!((h__8122__auto__ == null))){
return h__8122__auto__;
} else {
var h__8122__auto____$1 = (function (){var fexpr__15369 = ((function (h__8122__auto__,this__8304__auto____$1){
return (function (coll__8305__auto__){
return (846900531 ^ cljs.core.hash_unordered_coll(coll__8305__auto__));
});})(h__8122__auto__,this__8304__auto____$1))
;
return fexpr__15369(this__8304__auto____$1);
})();
self__.__hash = h__8122__auto____$1;

return h__8122__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15365,other15366){
var self__ = this;
var this15365__$1 = this;
return (!((other15366 == null))) && ((this15365__$1.constructor === other15366.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15365__$1.catch_block,other15366.catch_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15365__$1.catch_exception,other15366.catch_exception)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15365__$1.finally_block,other15366.finally_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15365__$1.continue_block,other15366.continue_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15365__$1.prev,other15366.prev)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15365__$1.__extmap,other15366.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8317__auto__,k__8318__auto__){
var self__ = this;
var this__8317__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$finally_DASH_block,null,cljs.core.cst$kw$catch_DASH_block,null,cljs.core.cst$kw$catch_DASH_exception,null,cljs.core.cst$kw$prev,null,cljs.core.cst$kw$continue_DASH_block,null], null), null),k__8318__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8317__auto____$1),self__.__meta),k__8318__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8318__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8315__auto__,k__8316__auto__,G__15363){
var self__ = this;
var this__8315__auto____$1 = this;
var pred__15370 = cljs.core.keyword_identical_QMARK_;
var expr__15371 = k__8316__auto__;
if(cljs.core.truth_((function (){var G__15373 = cljs.core.cst$kw$catch_DASH_block;
var G__15374 = expr__15371;
return (pred__15370.cljs$core$IFn$_invoke$arity$2 ? pred__15370.cljs$core$IFn$_invoke$arity$2(G__15373,G__15374) : pred__15370.call(null,G__15373,G__15374));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__15363,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15375 = cljs.core.cst$kw$catch_DASH_exception;
var G__15376 = expr__15371;
return (pred__15370.cljs$core$IFn$_invoke$arity$2 ? pred__15370.cljs$core$IFn$_invoke$arity$2(G__15375,G__15376) : pred__15370.call(null,G__15375,G__15376));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__15363,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15377 = cljs.core.cst$kw$finally_DASH_block;
var G__15378 = expr__15371;
return (pred__15370.cljs$core$IFn$_invoke$arity$2 ? pred__15370.cljs$core$IFn$_invoke$arity$2(G__15377,G__15378) : pred__15370.call(null,G__15377,G__15378));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__15363,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15379 = cljs.core.cst$kw$continue_DASH_block;
var G__15380 = expr__15371;
return (pred__15370.cljs$core$IFn$_invoke$arity$2 ? pred__15370.cljs$core$IFn$_invoke$arity$2(G__15379,G__15380) : pred__15370.call(null,G__15379,G__15380));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__15363,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15381 = cljs.core.cst$kw$prev;
var G__15382 = expr__15371;
return (pred__15370.cljs$core$IFn$_invoke$arity$2 ? pred__15370.cljs$core$IFn$_invoke$arity$2(G__15381,G__15382) : pred__15370.call(null,G__15381,G__15382));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__15363,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8316__auto__,G__15363),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8320__auto__){
var self__ = this;
var this__8320__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8307__auto__,G__15363){
var self__ = this;
var this__8307__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__15363,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8313__auto__,entry__8314__auto__){
var self__ = this;
var this__8313__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8314__auto__)){
return this__8313__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8314__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8314__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8313__auto____$1,entry__8314__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$catch_DASH_block,cljs.core.with_meta(cljs.core.cst$sym$catch_DASH_exception,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$Class], null)),cljs.core.cst$sym$finally_DASH_block,cljs.core.cst$sym$continue_DASH_block,cljs.core.cst$sym$prev], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__8344__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__8344__auto__,writer__8345__auto__){
return cljs.core._write(writer__8345__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__15367){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.cst$kw$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15367),cljs.core.cst$kw$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(G__15367),cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15367),cljs.core.cst$kw$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15367),cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(G__15367),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15367,cljs.core.cst$kw$catch_DASH_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$catch_DASH_exception,cljs.core.cst$kw$finally_DASH_block,cljs.core.cst$kw$continue_DASH_block,cljs.core.cst$kw$prev], 0))),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_15384 = state;
(statearr_15384[(4)] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,(4))));

return statearr_15384;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,(4));
var catch_block = cljs.core.cst$kw$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.cst$kw$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,(5));
if(cljs.core.truth_((function (){var and__7656__auto__ = exception;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__7656__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__7656__auto__ = exception;
if(cljs.core.truth_(and__7656__auto__)){
var and__7656__auto____$1 = catch_block;
if(cljs.core.truth_(and__7656__auto____$1)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,catch_exception)) || ((exception instanceof catch_exception));
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
}
})())){
var statearr_15385 = state;
(statearr_15385[(1)] = catch_block);

(statearr_15385[(2)] = exception);

(statearr_15385[(5)] = null);

(statearr_15385[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.cst$kw$catch_DASH_block,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$catch_DASH_exception,null], 0)));

return statearr_15385;
} else {
if(cljs.core.truth_((function (){var and__7656__auto__ = exception;
if(cljs.core.truth_(and__7656__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__7656__auto__;
}
})())){
var statearr_15386_15390 = state;
(statearr_15386_15390[(4)] = cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__15391 = state;
state = G__15391;
continue;
} else {
if(cljs.core.truth_((function (){var and__7656__auto__ = exception;
if(cljs.core.truth_(and__7656__auto__)){
var and__7656__auto____$1 = cljs.core.not(catch_block);
if(and__7656__auto____$1){
return cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
}
})())){
var statearr_15387 = state;
(statearr_15387[(1)] = cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_15387[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.cst$kw$finally_DASH_block,null));

return statearr_15387;
} else {
if(cljs.core.truth_((function (){var and__7656__auto__ = cljs.core.not(exception);
if(and__7656__auto__){
return cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__7656__auto__;
}
})())){
var statearr_15388 = state;
(statearr_15388[(1)] = cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_15388[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.cst$kw$finally_DASH_block,null));

return statearr_15388;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_15389 = state;
(statearr_15389[(1)] = cljs.core.cst$kw$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_15389[(4)] = cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_15389;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

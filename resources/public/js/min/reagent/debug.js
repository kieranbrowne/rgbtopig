// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13204__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13205__i = 0, G__13205__a = new Array(arguments.length -  0);
while (G__13205__i < G__13205__a.length) {G__13205__a[G__13205__i] = arguments[G__13205__i + 0]; ++G__13205__i;}
  args = new cljs.core.IndexedSeq(G__13205__a,0,null);
} 
return G__13204__delegate.call(this,args);};
G__13204.cljs$lang$maxFixedArity = 0;
G__13204.cljs$lang$applyTo = (function (arglist__13206){
var args = cljs.core.seq(arglist__13206);
return G__13204__delegate(args);
});
G__13204.cljs$core$IFn$_invoke$arity$variadic = G__13204__delegate;
return G__13204;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13207__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13208__i = 0, G__13208__a = new Array(arguments.length -  0);
while (G__13208__i < G__13208__a.length) {G__13208__a[G__13208__i] = arguments[G__13208__i + 0]; ++G__13208__i;}
  args = new cljs.core.IndexedSeq(G__13208__a,0,null);
} 
return G__13207__delegate.call(this,args);};
G__13207.cljs$lang$maxFixedArity = 0;
G__13207.cljs$lang$applyTo = (function (arglist__13209){
var args = cljs.core.seq(arglist__13209);
return G__13207__delegate(args);
});
G__13207.cljs$core$IFn$_invoke$arity$variadic = G__13207__delegate;
return G__13207;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

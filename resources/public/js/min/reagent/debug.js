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
var G__13842__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13843__i = 0, G__13843__a = new Array(arguments.length -  0);
while (G__13843__i < G__13843__a.length) {G__13843__a[G__13843__i] = arguments[G__13843__i + 0]; ++G__13843__i;}
  args = new cljs.core.IndexedSeq(G__13843__a,0,null);
} 
return G__13842__delegate.call(this,args);};
G__13842.cljs$lang$maxFixedArity = 0;
G__13842.cljs$lang$applyTo = (function (arglist__13844){
var args = cljs.core.seq(arglist__13844);
return G__13842__delegate(args);
});
G__13842.cljs$core$IFn$_invoke$arity$variadic = G__13842__delegate;
return G__13842;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13845__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13846__i = 0, G__13846__a = new Array(arguments.length -  0);
while (G__13846__i < G__13846__a.length) {G__13846__a[G__13846__i] = arguments[G__13846__i + 0]; ++G__13846__i;}
  args = new cljs.core.IndexedSeq(G__13846__a,0,null);
} 
return G__13845__delegate.call(this,args);};
G__13845.cljs$lang$maxFixedArity = 0;
G__13845.cljs$lang$applyTo = (function (arglist__13847){
var args = cljs.core.seq(arglist__13847);
return G__13845__delegate(args);
});
G__13845.cljs$core$IFn$_invoke$arity$variadic = G__13845__delegate;
return G__13845;
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

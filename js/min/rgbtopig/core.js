// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('rgbtopig.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
rgbtopig.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rgb,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,(255),cljs.core.cst$kw$g,(255),cljs.core.cst$kw$b,(255)], null),cljs.core.cst$kw$whitebalance,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,(255),cljs.core.cst$kw$g,(255),cljs.core.cst$kw$b,(255)], null),cljs.core.cst$kw$pigs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pig,"(PW6, PW4) Winsor & Newton Titanium White",cljs.core.cst$kw$grams,(0),cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null)], null)], null));
rgbtopig.core.css_colour = (function rgbtopig$core$css_colour(state){
var map__13722 = cljs.core.deref(state);
var map__13722__$1 = ((((!((map__13722 == null)))?((((map__13722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13722):map__13722);
var whitebalance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13722__$1,cljs.core.cst$kw$whitebalance);
var rgb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13722__$1,cljs.core.cst$kw$rgb);
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",(function (){var fexpr__13724 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b);
return (fexpr__13724.cljs$core$IFn$_invoke$arity$1 ? fexpr__13724.cljs$core$IFn$_invoke$arity$1(rgb) : fexpr__13724.call(null,rgb));
})())),")"].join('');
});
rgbtopig.core.text_colour = (function rgbtopig$core$text_colour(state){
var map__13725 = cljs.core.deref(state);
var map__13725__$1 = ((((!((map__13725 == null)))?((((map__13725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13725):map__13725);
var rgb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13725__$1,cljs.core.cst$kw$rgb);
if((cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,(function (){var fexpr__13727 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b);
return (fexpr__13727.cljs$core$IFn$_invoke$arity$1 ? fexpr__13727.cljs$core$IFn$_invoke$arity$1(rgb) : fexpr__13727.call(null,rgb));
})())) > ((255) * (2)))){
return "black";
} else {
return "white";
}
});
rgbtopig.core.update_val = (function rgbtopig$core$update_val(atom,event){
return cljs.core.reset_BANG_(atom,event.target.value);
});
rgbtopig.core.parse_int = (function rgbtopig$core$parse_int(x){
return window.parseInt(x);
});
rgbtopig.core.update_rgb_val = (function rgbtopig$core$update_rgb_val(atom,event){
return cljs.core.reset_BANG_(atom,(function (){var x__8025__auto__ = (255);
var y__8026__auto__ = (function (){var x__8018__auto__ = (0);
var y__8019__auto__ = event.target.value;
return ((x__8018__auto__ > y__8019__auto__) ? x__8018__auto__ : y__8019__auto__);
})();
return ((x__8025__auto__ < y__8026__auto__) ? x__8025__auto__ : y__8026__auto__);
})());
});
rgbtopig.core.rename_pig = (function rgbtopig$core$rename_pig(atom,id,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__13728_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13728_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13728_SHARP_,cljs.core.cst$kw$pig,event.target.value);
} else {
return p1__13728_SHARP_;
}
})));
});
rgbtopig.core.change_weight_pig = (function rgbtopig$core$change_weight_pig(atom,id,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__13729_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13729_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13729_SHARP_,cljs.core.cst$kw$grams,event.target.value);
} else {
return p1__13729_SHARP_;
}
})));
});
rgbtopig.core.rgb_form = (function rgbtopig$core$rgb_form(curs){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(255),cljs.core.cst$kw$value,cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"linear-gradient( 90deg, #000, #f00)"], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"Red",cljs.core.cst$kw$value,cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null)))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(255),cljs.core.cst$kw$value,cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"linear-gradient( 90deg, #000, #0f0)"], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"Green",cljs.core.cst$kw$value,cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null)))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(255),cljs.core.cst$kw$value,cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"linear-gradient( 90deg, #000, #00f)"], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"Blue",cljs.core.cst$kw$value,cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null)))], null)], null)], null);
});
rgbtopig.core.form = (function rgbtopig$core$form(ratom){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),"RGBtoPIG"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$rgb,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgbtopig.core.rgb_form,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rgb], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Pigments"], null),(function (){var iter__8476__auto__ = (function rgbtopig$core$form_$_iter__13730(s__13731){
return (new cljs.core.LazySeq(null,(function (){
var s__13731__$1 = s__13731;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13731__$1);
if(temp__4657__auto__){
var s__13731__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13731__$2)){
var c__8474__auto__ = cljs.core.chunk_first(s__13731__$2);
var size__8475__auto__ = cljs.core.count(c__8474__auto__);
var b__13733 = cljs.core.chunk_buffer(size__8475__auto__);
if((function (){var i__13732 = (0);
while(true){
if((i__13732 < size__8475__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8474__auto__,i__13732);
cljs.core.chunk_append(b__13733,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"weight",cljs.core.cst$kw$placeholder,"Pigment",cljs.core.cst$kw$value,cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.rename_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"grams",cljs.core.cst$kw$value,cljs.core.cst$kw$grams.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.change_weight_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__13732,p,c__8474__auto__,size__8475__auto__,b__13733,s__13731__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,((function (i__13732,p,c__8474__auto__,size__8475__auto__,b__13733,s__13731__$2,temp__4657__auto__){
return (function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x));
});})(i__13732,p,c__8474__auto__,size__8475__auto__,b__13733,s__13731__$2,temp__4657__auto__))
));
});})(i__13732,p,c__8474__auto__,size__8475__auto__,b__13733,s__13731__$2,temp__4657__auto__))
], null),"\u00D7"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__13734 = (i__13732 + (1));
i__13732 = G__13734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13733),rgbtopig$core$form_$_iter__13730(cljs.core.chunk_rest(s__13731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13733),null);
}
} else {
var p = cljs.core.first(s__13731__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"weight",cljs.core.cst$kw$placeholder,"Pigment",cljs.core.cst$kw$value,cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.rename_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"grams",cljs.core.cst$kw$value,cljs.core.cst$kw$grams.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.change_weight_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (p,s__13731__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,((function (p,s__13731__$2,temp__4657__auto__){
return (function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x));
});})(p,s__13731__$2,temp__4657__auto__))
));
});})(p,s__13731__$2,temp__4657__auto__))
], null),"\u00D7"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)),rgbtopig$core$form_$_iter__13730(cljs.core.rest(s__13731__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__(cljs.core.cst$kw$pigs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),(function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pig,"",cljs.core.cst$kw$grams,(0),cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null));
}));
})], null),"add pig"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Paint names and weights in grams"], null)], null);
});
rgbtopig.core.page = (function rgbtopig$core$page(ratom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,rgbtopig.core.css_colour(rgbtopig.core.app_state),cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgbtopig.core.form,ratom], null)], null);
});
rgbtopig.core.dev_setup = (function rgbtopig$core$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
rgbtopig.core.reload = (function rgbtopig$core$reload(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgbtopig.core.page,rgbtopig.core.app_state], null),document.getElementById("app"));
});
rgbtopig.core.main = (function rgbtopig$core$main(){
rgbtopig.core.dev_setup();

return rgbtopig.core.reload();
});
goog.exportSymbol('rgbtopig.core.main', rgbtopig.core.main);

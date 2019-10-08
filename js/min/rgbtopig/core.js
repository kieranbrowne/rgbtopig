// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('rgbtopig.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
if(typeof rgbtopig.core.app_state !== 'undefined'){
} else {
rgbtopig.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rgb,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,(255),cljs.core.cst$kw$g,(255),cljs.core.cst$kw$b,(255)], null),cljs.core.cst$kw$whitebalance,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,(255),cljs.core.cst$kw$g,(255),cljs.core.cst$kw$b,(255)], null),cljs.core.cst$kw$show_DASH_whitebalance,false,cljs.core.cst$kw$pigs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pig,"(PW6, PW4) Winsor & Newton Titanium White",cljs.core.cst$kw$grams,(0),cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null)], null)], null));
}
rgbtopig.core.try_upload = (function rgbtopig$core$try_upload(){
var c__15437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto__){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto__){
return (function (state_18100){
var state_val_18101 = (state_18100[(1)]);
if((state_val_18101 === (1))){
var inst_18087 = [cljs.core.cst$kw$json_DASH_params,cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_18088 = cljs.core.deref(rgbtopig.core.app_state);
var inst_18089 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18090 = [cljs.core.cst$kw$rgb,cljs.core.cst$kw$whitebalance,cljs.core.cst$kw$pigs];
var inst_18091 = (new cljs.core.PersistentVector(null,3,(5),inst_18089,inst_18090,null));
var inst_18092 = cljs.core.select_keys(inst_18088,inst_18091);
var inst_18093 = [inst_18092,false];
var inst_18094 = cljs.core.PersistentHashMap.fromArrays(inst_18087,inst_18093);
var inst_18095 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://dev.kieranbrowne.com/rgbtopig-api/add",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18094], 0));
var state_18100__$1 = state_18100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18100__$1,(2),inst_18095);
} else {
if((state_val_18101 === (2))){
var inst_18097 = (state_18100[(2)]);
var inst_18098 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18097], 0));
var state_18100__$1 = state_18100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18100__$1,inst_18098);
} else {
return null;
}
}
});})(c__15437__auto__))
;
return ((function (switch__15337__auto__,c__15437__auto__){
return (function() {
var rgbtopig$core$try_upload_$_state_machine__15338__auto__ = null;
var rgbtopig$core$try_upload_$_state_machine__15338__auto____0 = (function (){
var statearr_18102 = [null,null,null,null,null,null,null];
(statearr_18102[(0)] = rgbtopig$core$try_upload_$_state_machine__15338__auto__);

(statearr_18102[(1)] = (1));

return statearr_18102;
});
var rgbtopig$core$try_upload_$_state_machine__15338__auto____1 = (function (state_18100){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_18100);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e18103){if((e18103 instanceof Object)){
var ex__15341__auto__ = e18103;
var statearr_18104_18106 = state_18100;
(statearr_18104_18106[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18100);

return cljs.core.cst$kw$recur;
} else {
throw e18103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__18107 = state_18100;
state_18100 = G__18107;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
rgbtopig$core$try_upload_$_state_machine__15338__auto__ = function(state_18100){
switch(arguments.length){
case 0:
return rgbtopig$core$try_upload_$_state_machine__15338__auto____0.call(this);
case 1:
return rgbtopig$core$try_upload_$_state_machine__15338__auto____1.call(this,state_18100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rgbtopig$core$try_upload_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = rgbtopig$core$try_upload_$_state_machine__15338__auto____0;
rgbtopig$core$try_upload_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = rgbtopig$core$try_upload_$_state_machine__15338__auto____1;
return rgbtopig$core$try_upload_$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto__))
})();
var state__15439__auto__ = (function (){var statearr_18105 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_18105[(6)] = c__15437__auto__);

return statearr_18105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto__))
);

return c__15437__auto__;
});
rgbtopig.core.pigs = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(PW6, PW4) Winsor & Newton Titanium White","(PB29) Art Spectrum Ultramarine Blue","(PBr7) Gamblin Raw Sienna","(PBr7) Gamblin Burnt Sienna","(PBr7) Gamblin Burnt Umber","(PV19) Flinders Blue Violet","(PR108) Cadmium Maroon","(PBk28) Gamblin Black Spinel","(PG18) Art Spectrum Viridian","(PY37, PY35, PG7) Art Spectrum Cadmium Green","(PO20) Art Spectum Cadmium Orange","(PR101) Gamblin Indian Red","(PB27) Art Spectrum Prussian Blue","(PB15:3, PW4) Art Spectrum Phthalo Blue","(PR108) Art Spectrum Cadmium Red","(PW6, PR101) Art Spectrum Flesh Tint Deep","(PG18) Art Spectrum Viridian"], null);
rgbtopig.core.whitebalance_colour = (function rgbtopig$core$whitebalance_colour(state){
var map__18108 = cljs.core.deref(state);
var map__18108__$1 = ((((!((map__18108 == null)))?((((map__18108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18108):map__18108);
var whitebalance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18108__$1,cljs.core.cst$kw$whitebalance);
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",(function (){var fexpr__18110 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b);
return (fexpr__18110.cljs$core$IFn$_invoke$arity$1 ? fexpr__18110.cljs$core$IFn$_invoke$arity$1(whitebalance) : fexpr__18110.call(null,whitebalance));
})())),")"].join('');
});
rgbtopig.core.css_colour = (function rgbtopig$core$css_colour(state){
var map__18111 = cljs.core.deref(state);
var map__18111__$1 = ((((!((map__18111 == null)))?((((map__18111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18111):map__18111);
var whitebalance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18111__$1,cljs.core.cst$kw$whitebalance);
var rgb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18111__$1,cljs.core.cst$kw$rgb);
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (map__18111,map__18111__$1,whitebalance,rgb){
return (function (v,wb){
return (v * (wb / (255)));
});})(map__18111,map__18111__$1,whitebalance,rgb))
,(function (){var fexpr__18113 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b);
return (fexpr__18113.cljs$core$IFn$_invoke$arity$1 ? fexpr__18113.cljs$core$IFn$_invoke$arity$1(rgb) : fexpr__18113.call(null,rgb));
})(),(function (){var fexpr__18114 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b);
return (fexpr__18114.cljs$core$IFn$_invoke$arity$1 ? fexpr__18114.cljs$core$IFn$_invoke$arity$1(whitebalance) : fexpr__18114.call(null,whitebalance));
})()))),")"].join('');
});
rgbtopig.core.text_colour = (function rgbtopig$core$text_colour(state){
var map__18115 = cljs.core.deref(state);
var map__18115__$1 = ((((!((map__18115 == null)))?((((map__18115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18115):map__18115);
var rgb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18115__$1,cljs.core.cst$kw$rgb);
if((cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,(function (){var fexpr__18117 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b);
return (fexpr__18117.cljs$core$IFn$_invoke$arity$1 ? fexpr__18117.cljs$core$IFn$_invoke$arity$1(rgb) : fexpr__18117.call(null,rgb));
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__18118_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__18118_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18118_SHARP_,cljs.core.cst$kw$pig,event.target.value);
} else {
return p1__18118_SHARP_;
}
})));
});
rgbtopig.core.change_weight_pig = (function rgbtopig$core$change_weight_pig(atom,id,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__18119_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__18119_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18119_SHARP_,cljs.core.cst$kw$grams,event.target.value);
} else {
return p1__18119_SHARP_;
}
})));
});
rgbtopig.core.rgb_form = (function rgbtopig$core$rgb_form(curs){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(255),cljs.core.cst$kw$value,cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"linear-gradient( 90deg, #000, #f00)"], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"Red",cljs.core.cst$kw$value,cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null)))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(255),cljs.core.cst$kw$value,cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"linear-gradient( 90deg, #000, #0f0)"], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"Green",cljs.core.cst$kw$value,cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null)))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(255),cljs.core.cst$kw$value,cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"linear-gradient( 90deg, #000, #00f)"], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"Blue",cljs.core.cst$kw$value,cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null)))], null)], null)], null);
});
rgbtopig.core.form = (function rgbtopig$core$form(ratom){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),"RGBtoPIG"], null),(cljs.core.truth_(cljs.core.cst$kw$show_DASH_whitebalance.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$whitebalance,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$position,cljs.core.cst$kw$fixed,cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$padding_DASH_top,"122px",cljs.core.cst$kw$background,rgbtopig.core.whitebalance_colour(ratom)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgbtopig.core.rgb_form,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$whitebalance], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"20px",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ratom,(function (p1__18120_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18120_SHARP_,cljs.core.cst$kw$show_DASH_whitebalance,false);
}));
})], null),"Done \u2714"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$rgb,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgbtopig.core.rgb_form,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rgb], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$margin_DASH_top,"20px",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ratom,(function (p1__18121_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18121_SHARP_,cljs.core.cst$kw$show_DASH_whitebalance,true);
}));
})], null),"adjust whitebalance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Pigments"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$pig,(function (){var iter__8476__auto__ = (function rgbtopig$core$form_$_iter__18122(s__18123){
return (new cljs.core.LazySeq(null,(function (){
var s__18123__$1 = s__18123;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18123__$1);
if(temp__4657__auto__){
var s__18123__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18123__$2)){
var c__8474__auto__ = cljs.core.chunk_first(s__18123__$2);
var size__8475__auto__ = cljs.core.count(c__8474__auto__);
var b__18125 = cljs.core.chunk_buffer(size__8475__auto__);
if((function (){var i__18124 = (0);
while(true){
if((i__18124 < size__8475__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8474__auto__,i__18124);
cljs.core.chunk_append(b__18125,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Pigment Code",cljs.core.cst$kw$value,cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.rename_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"grams",cljs.core.cst$kw$value,cljs.core.cst$kw$grams.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.change_weight_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"40px",cljs.core.cst$kw$line_DASH_height,"32px",cljs.core.cst$kw$margin_DASH_left,"10px",cljs.core.cst$kw$vertical_DASH_align,"top"], null),cljs.core.cst$kw$on_DASH_click,((function (i__18124,p,c__8474__auto__,size__8475__auto__,b__18125,s__18123__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,((function (i__18124,p,c__8474__auto__,size__8475__auto__,b__18125,s__18123__$2,temp__4657__auto__){
return (function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x));
});})(i__18124,p,c__8474__auto__,size__8475__auto__,b__18125,s__18123__$2,temp__4657__auto__))
));
});})(i__18124,p,c__8474__auto__,size__8475__auto__,b__18125,s__18123__$2,temp__4657__auto__))
], null),"\u00D7"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__18126 = (i__18124 + (1));
i__18124 = G__18126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18125),rgbtopig$core$form_$_iter__18122(cljs.core.chunk_rest(s__18123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18125),null);
}
} else {
var p = cljs.core.first(s__18123__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Pigment Code",cljs.core.cst$kw$value,cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.rename_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"grams",cljs.core.cst$kw$value,cljs.core.cst$kw$grams.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.change_weight_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"40px",cljs.core.cst$kw$line_DASH_height,"32px",cljs.core.cst$kw$margin_DASH_left,"10px",cljs.core.cst$kw$vertical_DASH_align,"top"], null),cljs.core.cst$kw$on_DASH_click,((function (p,s__18123__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,((function (p,s__18123__$2,temp__4657__auto__){
return (function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x));
});})(p,s__18123__$2,temp__4657__auto__))
));
});})(p,s__18123__$2,temp__4657__auto__))
], null),"\u00D7"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)),rgbtopig$core$form_$_iter__18122(cljs.core.rest(s__18123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__(cljs.core.cst$kw$pigs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_addpig,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),(function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pig,"",cljs.core.cst$kw$grams,(0),cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null));
}));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"40px",cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null)], null),"+"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$submit,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,rgbtopig.core.try_upload], null),"Submit"], null)], null)], null);
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

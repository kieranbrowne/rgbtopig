// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('rgbtopig.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
if(typeof rgbtopig.core.app_state !== 'undefined'){
} else {
rgbtopig.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rgb,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,(255),cljs.core.cst$kw$g,(255),cljs.core.cst$kw$b,(255)], null),cljs.core.cst$kw$whitebalance,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,(255),cljs.core.cst$kw$g,(255),cljs.core.cst$kw$b,(255)], null),cljs.core.cst$kw$show_DASH_whitebalance,false,cljs.core.cst$kw$pigs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pig,"(PW6) Art Spectrum Titanium White",cljs.core.cst$kw$grams,(0),cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null)], null)], null));
}
rgbtopig.core.try_upload = (function rgbtopig$core$try_upload(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.app_state,(function (p1__18087_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18087_SHARP_,cljs.core.cst$kw$remote,cljs.core.cst$kw$uploading);
}));

var c__15437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto__){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto__){
return (function (state_18115){
var state_val_18116 = (state_18115[(1)]);
if((state_val_18116 === (1))){
var inst_18091 = [cljs.core.cst$kw$json_DASH_params,cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_18092 = cljs.core.deref(rgbtopig.core.app_state);
var inst_18093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18094 = [cljs.core.cst$kw$rgb,cljs.core.cst$kw$whitebalance,cljs.core.cst$kw$pigs];
var inst_18095 = (new cljs.core.PersistentVector(null,3,(5),inst_18093,inst_18094,null));
var inst_18096 = cljs.core.select_keys(inst_18092,inst_18095);
var inst_18097 = [inst_18096,false];
var inst_18098 = cljs.core.PersistentHashMap.fromArrays(inst_18091,inst_18097);
var inst_18099 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://dev.kieranbrowne.com/rgbtopig-api/add",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18098], 0));
var state_18115__$1 = state_18115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18115__$1,(2),inst_18099);
} else {
if((state_val_18116 === (2))){
var inst_18101 = (state_18115[(7)]);
var inst_18101__$1 = (state_18115[(2)]);
var inst_18102 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_18101__$1);
var state_18115__$1 = (function (){var statearr_18117 = state_18115;
(statearr_18117[(7)] = inst_18101__$1);

return statearr_18117;
})();
if(cljs.core.truth_(inst_18102)){
var statearr_18118_18128 = state_18115__$1;
(statearr_18118_18128[(1)] = (3));

} else {
var statearr_18119_18129 = state_18115__$1;
(statearr_18119_18129[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (3))){
var inst_18101 = (state_18115[(7)]);
var inst_18104 = (function (){var response = inst_18101;
return ((function (response,inst_18101,state_val_18116,c__15437__auto__){
return (function (p1__18088_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18088_SHARP_,cljs.core.cst$kw$remote,cljs.core.cst$kw$success);
});
;})(response,inst_18101,state_val_18116,c__15437__auto__))
})();
var inst_18105 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.app_state,inst_18104);
var inst_18106 = (function (){var response = inst_18101;
return ((function (response,inst_18101,inst_18104,inst_18105,state_val_18116,c__15437__auto__){
return (function (p1__18089_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18089_SHARP_,cljs.core.cst$kw$rgb,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,(255),cljs.core.cst$kw$g,(255),cljs.core.cst$kw$b,(255)], null));
});
;})(response,inst_18101,inst_18104,inst_18105,state_val_18116,c__15437__auto__))
})();
var inst_18107 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.app_state,inst_18106);
var state_18115__$1 = (function (){var statearr_18120 = state_18115;
(statearr_18120[(8)] = inst_18105);

return statearr_18120;
})();
var statearr_18121_18130 = state_18115__$1;
(statearr_18121_18130[(2)] = inst_18107);

(statearr_18121_18130[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (4))){
var inst_18101 = (state_18115[(7)]);
var inst_18109 = (function (){var response = inst_18101;
return ((function (response,inst_18101,state_val_18116,c__15437__auto__){
return (function (p1__18090_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18090_SHARP_,cljs.core.cst$kw$remote,cljs.core.cst$kw$error);
});
;})(response,inst_18101,state_val_18116,c__15437__auto__))
})();
var inst_18110 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.app_state,inst_18109);
var state_18115__$1 = state_18115;
var statearr_18122_18131 = state_18115__$1;
(statearr_18122_18131[(2)] = inst_18110);

(statearr_18122_18131[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (5))){
var inst_18101 = (state_18115[(7)]);
var inst_18112 = (state_18115[(2)]);
var inst_18113 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18101], 0));
var state_18115__$1 = (function (){var statearr_18123 = state_18115;
(statearr_18123[(9)] = inst_18112);

return statearr_18123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18115__$1,inst_18113);
} else {
return null;
}
}
}
}
}
});})(c__15437__auto__))
;
return ((function (switch__15337__auto__,c__15437__auto__){
return (function() {
var rgbtopig$core$try_upload_$_state_machine__15338__auto__ = null;
var rgbtopig$core$try_upload_$_state_machine__15338__auto____0 = (function (){
var statearr_18124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18124[(0)] = rgbtopig$core$try_upload_$_state_machine__15338__auto__);

(statearr_18124[(1)] = (1));

return statearr_18124;
});
var rgbtopig$core$try_upload_$_state_machine__15338__auto____1 = (function (state_18115){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_18115);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e18125){if((e18125 instanceof Object)){
var ex__15341__auto__ = e18125;
var statearr_18126_18132 = state_18115;
(statearr_18126_18132[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18115);

return cljs.core.cst$kw$recur;
} else {
throw e18125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__18133 = state_18115;
state_18115 = G__18133;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
rgbtopig$core$try_upload_$_state_machine__15338__auto__ = function(state_18115){
switch(arguments.length){
case 0:
return rgbtopig$core$try_upload_$_state_machine__15338__auto____0.call(this);
case 1:
return rgbtopig$core$try_upload_$_state_machine__15338__auto____1.call(this,state_18115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rgbtopig$core$try_upload_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = rgbtopig$core$try_upload_$_state_machine__15338__auto____0;
rgbtopig$core$try_upload_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = rgbtopig$core$try_upload_$_state_machine__15338__auto____1;
return rgbtopig$core$try_upload_$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto__))
})();
var state__15439__auto__ = (function (){var statearr_18127 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_18127[(6)] = c__15437__auto__);

return statearr_18127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto__))
);

return c__15437__auto__;
});
rgbtopig.core.pigs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(PB15:3) Art Spectrum Phthalo Blue","(PV19; PV23) Permanent Magenta","(PY35) Cadmium Yellow Light","(PBK28) Gamblin Black Spinel","(PW6) Art Spectrum Titanium White","(PR108) Art Spectrum Cadmium Red","(PY37; PY35; PG7) Art Spectrum Cadmium Green","(PB29) Art Spectrum Ultramarine Blue"], null);
rgbtopig.core.whitebalance_colour = (function rgbtopig$core$whitebalance_colour(state){
var map__18134 = cljs.core.deref(state);
var map__18134__$1 = ((((!((map__18134 == null)))?((((map__18134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18134):map__18134);
var whitebalance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18134__$1,cljs.core.cst$kw$whitebalance);
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",(function (){var fexpr__18136 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b);
return (fexpr__18136.cljs$core$IFn$_invoke$arity$1 ? fexpr__18136.cljs$core$IFn$_invoke$arity$1(whitebalance) : fexpr__18136.call(null,whitebalance));
})())),")"].join('');
});
rgbtopig.core.css_colour = (function rgbtopig$core$css_colour(state){
var map__18137 = cljs.core.deref(state);
var map__18137__$1 = ((((!((map__18137 == null)))?((((map__18137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18137):map__18137);
var whitebalance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18137__$1,cljs.core.cst$kw$whitebalance);
var rgb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18137__$1,cljs.core.cst$kw$rgb);
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (map__18137,map__18137__$1,whitebalance,rgb){
return (function (v,wb){
return (v * (wb / (255)));
});})(map__18137,map__18137__$1,whitebalance,rgb))
,(function (){var fexpr__18139 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b);
return (fexpr__18139.cljs$core$IFn$_invoke$arity$1 ? fexpr__18139.cljs$core$IFn$_invoke$arity$1(rgb) : fexpr__18139.call(null,rgb));
})(),(function (){var fexpr__18140 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b);
return (fexpr__18140.cljs$core$IFn$_invoke$arity$1 ? fexpr__18140.cljs$core$IFn$_invoke$arity$1(whitebalance) : fexpr__18140.call(null,whitebalance));
})()))),")"].join('');
});
rgbtopig.core.text_colour = (function rgbtopig$core$text_colour(state){
var map__18141 = cljs.core.deref(state);
var map__18141__$1 = ((((!((map__18141 == null)))?((((map__18141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18141):map__18141);
var rgb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18141__$1,cljs.core.cst$kw$rgb);
if((cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,(function (){var fexpr__18143 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b);
return (fexpr__18143.cljs$core$IFn$_invoke$arity$1 ? fexpr__18143.cljs$core$IFn$_invoke$arity$1(rgb) : fexpr__18143.call(null,rgb));
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__18144_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__18144_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18144_SHARP_,cljs.core.cst$kw$pig,event.target.value);
} else {
return p1__18144_SHARP_;
}
})));
});
rgbtopig.core.change_weight_pig = (function rgbtopig$core$change_weight_pig(atom,id,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__18145_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__18145_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18145_SHARP_,cljs.core.cst$kw$grams,event.target.value);
} else {
return p1__18145_SHARP_;
}
})));
});
rgbtopig.core.rgb_form = (function rgbtopig$core$rgb_form(curs){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(255),cljs.core.cst$kw$value,cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"linear-gradient( 90deg, #000, #f00)"], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"Red",cljs.core.cst$kw$value,cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null)))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(255),cljs.core.cst$kw$value,cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"linear-gradient( 90deg, #000, #0f0)"], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"Green",cljs.core.cst$kw$value,cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null)))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(255),cljs.core.cst$kw$value,cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"linear-gradient( 90deg, #000, #00f)"], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"Blue",cljs.core.cst$kw$value,cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(curs)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rgbtopig.core.update_rgb_val,reagent.core.cursor(curs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null)))], null)], null)], null);
});
rgbtopig.core.suggestions = (function rgbtopig$core$suggestions(pig){
if((cljs.core.contains_QMARK_(cljs.core.set(rgbtopig.core.pigs),cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(pig))) || (((2) > cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(pig).length))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,""], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background,rgbtopig.core.css_colour(rgbtopig.core.app_state),cljs.core.cst$kw$width,"inherit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__8476__auto__ = (function rgbtopig$core$suggestions_$_iter__18146(s__18147){
return (new cljs.core.LazySeq(null,(function (){
var s__18147__$1 = s__18147;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18147__$1);
if(temp__4657__auto__){
var s__18147__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18147__$2)){
var c__8474__auto__ = cljs.core.chunk_first(s__18147__$2);
var size__8475__auto__ = cljs.core.count(c__8474__auto__);
var b__18149 = cljs.core.chunk_buffer(size__8475__auto__);
if((function (){var i__18148 = (0);
while(true){
if((i__18148 < size__8475__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8474__auto__,i__18148);
cljs.core.chunk_append(b__18149,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (i__18148,s,c__8474__auto__,size__8475__auto__,b__18149,s__18147__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor(rgbtopig.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,((function (i__18148,s,c__8474__auto__,size__8475__auto__,b__18149,s__18147__$2,temp__4657__auto__){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(pig))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.cst$kw$pig,s);
} else {
return x;
}
});})(i__18148,s,c__8474__auto__,size__8475__auto__,b__18149,s__18147__$2,temp__4657__auto__))
));
});})(i__18148,s,c__8474__auto__,size__8475__auto__,b__18149,s__18147__$2,temp__4657__auto__))
], null),s], null));

var G__18150 = (i__18148 + (1));
i__18148 = G__18150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18149),rgbtopig$core$suggestions_$_iter__18146(cljs.core.chunk_rest(s__18147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18149),null);
}
} else {
var s = cljs.core.first(s__18147__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (s,s__18147__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor(rgbtopig.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,((function (s,s__18147__$2,temp__4657__auto__){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(pig))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.cst$kw$pig,s);
} else {
return x;
}
});})(s,s__18147__$2,temp__4657__auto__))
));
});})(s,s__18147__$2,temp__4657__auto__))
], null),s], null),rgbtopig$core$suggestions_$_iter__18146(cljs.core.rest(s__18147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__8476__auto__){
return (function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),x.indexOf(cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(pig)));
});})(iter__8476__auto__))
,rgbtopig.core.pigs)));
})()], null)], null);
}
});
rgbtopig.core.form = (function rgbtopig$core$form(ratom){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),"RGBtoPIG"], null),(cljs.core.truth_(cljs.core.cst$kw$show_DASH_whitebalance.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$whitebalance,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$position,cljs.core.cst$kw$fixed,cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$padding_DASH_top,"122px",cljs.core.cst$kw$background,rgbtopig.core.whitebalance_colour(ratom)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgbtopig.core.rgb_form,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$whitebalance], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"20px",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ratom,(function (p1__18151_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18151_SHARP_,cljs.core.cst$kw$show_DASH_whitebalance,false);
}));
})], null),"Done \u2714"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$rgb,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgbtopig.core.rgb_form,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rgb], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$margin_DASH_top,"20px",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ratom,(function (p1__18152_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18152_SHARP_,cljs.core.cst$kw$show_DASH_whitebalance,true);
}));
})], null),"adjust whitebalance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Pigments"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$pig,(function (){var iter__8476__auto__ = (function rgbtopig$core$form_$_iter__18153(s__18154){
return (new cljs.core.LazySeq(null,(function (){
var s__18154__$1 = s__18154;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18154__$1);
if(temp__4657__auto__){
var s__18154__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18154__$2)){
var c__8474__auto__ = cljs.core.chunk_first(s__18154__$2);
var size__8475__auto__ = cljs.core.count(c__8474__auto__);
var b__18156 = cljs.core.chunk_buffer(size__8475__auto__);
if((function (){var i__18155 = (0);
while(true){
if((i__18155 < size__8475__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8474__auto__,i__18155);
cljs.core.chunk_append(b__18156,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Pigment Code",cljs.core.cst$kw$value,cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((cljs.core.contains_QMARK_(cljs.core.set(rgbtopig.core.pigs),cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(p)))?rgbtopig.core.text_colour(rgbtopig.core.app_state):"red"),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.rename_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgbtopig.core.suggestions,p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"grams",cljs.core.cst$kw$value,cljs.core.cst$kw$grams.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$step,0.1,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.change_weight_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"40px",cljs.core.cst$kw$line_DASH_height,"32px",cljs.core.cst$kw$margin_DASH_left,"10px",cljs.core.cst$kw$vertical_DASH_align,"top"], null),cljs.core.cst$kw$on_DASH_click,((function (i__18155,p,c__8474__auto__,size__8475__auto__,b__18156,s__18154__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,((function (i__18155,p,c__8474__auto__,size__8475__auto__,b__18156,s__18154__$2,temp__4657__auto__){
return (function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x));
});})(i__18155,p,c__8474__auto__,size__8475__auto__,b__18156,s__18154__$2,temp__4657__auto__))
));
});})(i__18155,p,c__8474__auto__,size__8475__auto__,b__18156,s__18154__$2,temp__4657__auto__))
], null),"\u00D7"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__18158 = (i__18155 + (1));
i__18155 = G__18158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18156),rgbtopig$core$form_$_iter__18153(cljs.core.chunk_rest(s__18154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18156),null);
}
} else {
var p = cljs.core.first(s__18154__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Pigment Code",cljs.core.cst$kw$value,cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((cljs.core.contains_QMARK_(cljs.core.set(rgbtopig.core.pigs),cljs.core.cst$kw$pig.cljs$core$IFn$_invoke$arity$1(p)))?rgbtopig.core.text_colour(rgbtopig.core.app_state):"red"),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.rename_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgbtopig.core.suggestions,p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"grams",cljs.core.cst$kw$value,cljs.core.cst$kw$grams.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$step,0.1,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rgbtopig.core.text_colour(rgbtopig.core.app_state),cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rgbtopig.core.change_weight_pig,reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"40px",cljs.core.cst$kw$line_DASH_height,"32px",cljs.core.cst$kw$margin_DASH_left,"10px",cljs.core.cst$kw$vertical_DASH_align,"top"], null),cljs.core.cst$kw$on_DASH_click,((function (p,s__18154__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor(ratom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pigs], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,((function (p,s__18154__$2,temp__4657__auto__){
return (function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x));
});})(p,s__18154__$2,temp__4657__auto__))
));
});})(p,s__18154__$2,temp__4657__auto__))
], null),"\u00D7"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)),rgbtopig$core$form_$_iter__18153(cljs.core.rest(s__18154__$2)));
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pig,"",cljs.core.cst$kw$grams,(1),cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null));
}));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"40px",cljs.core.cst$kw$border_DASH_color,rgbtopig.core.text_colour(rgbtopig.core.app_state)], null)], null),"+"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$submit,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$uploading,cljs.core.cst$kw$remote.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rgbtopig.core.app_state))))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opacity,"0.4",cljs.core.cst$kw$pointer_DASH_events,"none"], null):cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$on_DASH_click,rgbtopig.core.try_upload], null),"Submit"], null),(function (){var G__18157 = cljs.core.cst$kw$remote.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rgbtopig.core.app_state));
var G__18157__$1 = (((G__18157 instanceof cljs.core.Keyword))?G__18157.fqn:null);
switch (G__18157__$1) {
case "uploading":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$spinner], null);

break;
case "success":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$success,"\u2713"], null);

break;
case "error":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$error,"\u00D7"], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);

}
})()], null)], null);
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

// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__7656__auto__ = v;
if(cljs.core.truth_(and__7656__auto__)){
return (v > (0));
} else {
return and__7656__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(o,v);
} else {
if(!((o == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17876_SHARP_,p2__17875_SHARP_){
var vec__17877 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__17875_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__17876_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),cljs_http.client.acc_param,no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17880_SHARP_){
return cljs_http.client.encode_val(k,p1__17880_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__17881){
var vec__17882 = p__17881;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17882,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17882,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__17885_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17885_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__7656__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__7656__auto__){
var and__7656__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__7656__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__7656__auto____$1;
}
} else {
return and__7656__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17886 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17886) : client.call(null,G__17886));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17887_SHARP_){
return cljs_http.client.decode_body(p1__17887_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__8835__auto__ = [];
var len__8828__auto___17895 = arguments.length;
var i__8829__auto___17896 = (0);
while(true){
if((i__8829__auto___17896 < len__8828__auto___17895)){
args__8835__auto__.push((arguments[i__8829__auto___17896]));

var G__17897 = (i__8829__auto___17896 + (1));
i__8829__auto___17896 = G__17897;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17890){
var vec__17891 = p__17890;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17891,(0),null);
return ((function (vec__17891,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__7668__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
var G__17894 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17894) : client.call(null,G__17894));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17891,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq17888){
var G__17889 = cljs.core.first(seq17888);
var seq17888__$1 = cljs.core.next(seq17888);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__17889,seq17888__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__8835__auto__ = [];
var len__8828__auto___17905 = arguments.length;
var i__8829__auto___17906 = (0);
while(true){
if((i__8829__auto___17906 < len__8828__auto___17905)){
args__8835__auto__.push((arguments[i__8829__auto___17906]));

var G__17907 = (i__8829__auto___17906 + (1));
i__8829__auto___17906 = G__17907;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17900){
var vec__17901 = p__17900;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17901,(0),null);
return ((function (vec__17901,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__7668__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
var G__17904 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17904) : client.call(null,G__17904));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17901,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq17898){
var G__17899 = cljs.core.first(seq17898);
var seq17898__$1 = cljs.core.next(seq17898);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__17899,seq17898__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__8835__auto__ = [];
var len__8828__auto___17915 = arguments.length;
var i__8829__auto___17916 = (0);
while(true){
if((i__8829__auto___17916 < len__8828__auto___17915)){
args__8835__auto__.push((arguments[i__8829__auto___17916]));

var G__17917 = (i__8829__auto___17916 + (1));
i__8829__auto___17916 = G__17917;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17910){
var vec__17911 = p__17910;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17911,(0),null);
return ((function (vec__17911,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__7668__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
var G__17914 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17914) : client.call(null,G__17914));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17911,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq17908){
var G__17909 = cljs.core.first(seq17908);
var seq17908__$1 = cljs.core.next(seq17908);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__17909,seq17908__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__17918 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17918__$1 = ((((!((map__17918 == null)))?((((map__17918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17918):map__17918);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17918__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17918__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17920 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17920) : client.call(null,G__17920));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__17923 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17923__$1 = ((((!((map__17923 == null)))?((((map__17923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17923):map__17923);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17923__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17923__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__17923,map__17923__$1,decoding,decoding_opts){
return (function (p1__17921_SHARP_){
return cljs_http.util.transit_decode(p1__17921_SHARP_,decoding,decoding_opts);
});})(map__17923,map__17923__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__17923,map__17923__$1,decoding,decoding_opts,transit_decode){
return (function (p1__17922_SHARP_){
return cljs_http.client.decode_body(p1__17922_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__17923,map__17923__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17925 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17925) : client.call(null,G__17925));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17926_SHARP_){
return cljs_http.client.decode_body(p1__17926_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__17927){
var map__17928 = p__17927;
var map__17928__$1 = ((((!((map__17928 == null)))?((((map__17928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17928):map__17928);
var req = map__17928__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17928__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__17930 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17930) : client.call(null,G__17930));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__17931){
var map__17932 = p__17931;
var map__17932__$1 = ((((!((map__17932 == null)))?((((map__17932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17932):map__17932);
var request = map__17932__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__7656__auto__ = form_params;
if(cljs.core.truth_(and__7656__auto__)){
var fexpr__17934 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__17934.cljs$core$IFn$_invoke$arity$1 ? fexpr__17934.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__17934.call(null,request_method));
} else {
return and__7656__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__17935 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17935) : client.call(null,G__17935));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__17936_17946 = cljs.core.seq(params);
var chunk__17937_17947 = null;
var count__17938_17948 = (0);
var i__17939_17949 = (0);
while(true){
if((i__17939_17949 < count__17938_17948)){
var vec__17940_17950 = chunk__17937_17947.cljs$core$IIndexed$_nth$arity$2(null,i__17939_17949);
var k_17951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17940_17950,(0),null);
var v_17952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17940_17950,(1),null);
if(cljs.core.coll_QMARK_(v_17952)){
form_data.append(cljs.core.name(k_17951),cljs.core.first(v_17952),cljs.core.second(v_17952));
} else {
form_data.append(cljs.core.name(k_17951),v_17952);
}

var G__17953 = seq__17936_17946;
var G__17954 = chunk__17937_17947;
var G__17955 = count__17938_17948;
var G__17956 = (i__17939_17949 + (1));
seq__17936_17946 = G__17953;
chunk__17937_17947 = G__17954;
count__17938_17948 = G__17955;
i__17939_17949 = G__17956;
continue;
} else {
var temp__4657__auto___17957 = cljs.core.seq(seq__17936_17946);
if(temp__4657__auto___17957){
var seq__17936_17958__$1 = temp__4657__auto___17957;
if(cljs.core.chunked_seq_QMARK_(seq__17936_17958__$1)){
var c__8507__auto___17959 = cljs.core.chunk_first(seq__17936_17958__$1);
var G__17960 = cljs.core.chunk_rest(seq__17936_17958__$1);
var G__17961 = c__8507__auto___17959;
var G__17962 = cljs.core.count(c__8507__auto___17959);
var G__17963 = (0);
seq__17936_17946 = G__17960;
chunk__17937_17947 = G__17961;
count__17938_17948 = G__17962;
i__17939_17949 = G__17963;
continue;
} else {
var vec__17943_17964 = cljs.core.first(seq__17936_17958__$1);
var k_17965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943_17964,(0),null);
var v_17966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943_17964,(1),null);
if(cljs.core.coll_QMARK_(v_17966)){
form_data.append(cljs.core.name(k_17965),cljs.core.first(v_17966),cljs.core.second(v_17966));
} else {
form_data.append(cljs.core.name(k_17965),v_17966);
}

var G__17967 = cljs.core.next(seq__17936_17958__$1);
var G__17968 = null;
var G__17969 = (0);
var G__17970 = (0);
seq__17936_17946 = G__17967;
chunk__17937_17947 = G__17968;
count__17938_17948 = G__17969;
i__17939_17949 = G__17970;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__17971){
var map__17972 = p__17971;
var map__17972__$1 = ((((!((map__17972 == null)))?((((map__17972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17972):map__17972);
var request = map__17972__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17972__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17972__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__7656__auto__ = multipart_params;
if(cljs.core.truth_(and__7656__auto__)){
var fexpr__17974 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__17974.cljs$core$IFn$_invoke$arity$1 ? fexpr__17974.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__17974.call(null,request_method));
} else {
return and__7656__auto__;
}
})())){
var G__17975 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17975) : client.call(null,G__17975));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
var G__17976 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17976) : client.call(null,G__17976));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__17977_SHARP_){
var G__17978 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17977_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17978) : client.call(null,G__17978));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__17980){
var map__17981 = p__17980;
var map__17981__$1 = ((((!((map__17981 == null)))?((((map__17981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17981):map__17981);
var req = map__17981__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17981__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4655__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
var G__17983 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4655__auto__,map__17981,map__17981__$1,req,query_params){
return (function (p1__17979_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__17979_SHARP_,query_params], 0));
});})(spec,temp__4655__auto__,map__17981,map__17981__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17983) : client.call(null,G__17983));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__8835__auto__ = [];
var len__8828__auto___17991 = arguments.length;
var i__8829__auto___17992 = (0);
while(true){
if((i__8829__auto___17992 < len__8828__auto___17991)){
args__8835__auto__.push((arguments[i__8829__auto___17992]));

var G__17993 = (i__8829__auto___17992 + (1));
i__8829__auto___17992 = G__17993;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17986){
var vec__17987 = p__17986;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17987,(0),null);
return ((function (vec__17987,credentials){
return (function (req){
var credentials__$1 = (function (){var or__7668__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__17990 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17990) : client.call(null,G__17990));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__17987,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq17984){
var G__17985 = cljs.core.first(seq17984);
var seq17984__$1 = cljs.core.next(seq17984);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__17985,seq17984__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
var G__17994 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17994) : client.call(null,G__17994));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__8835__auto__ = [];
var len__8828__auto___18002 = arguments.length;
var i__8829__auto___18003 = (0);
while(true){
if((i__8829__auto___18003 < len__8828__auto___18002)){
args__8835__auto__.push((arguments[i__8829__auto___18003]));

var G__18004 = (i__8829__auto___18003 + (1));
i__8829__auto___18003 = G__18004;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17997){
var vec__17998 = p__17997;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17998,(0),null);
var G__18001 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18001) : cljs_http.client.request.call(null,G__18001));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq17995){
var G__17996 = cljs.core.first(seq17995);
var seq17995__$1 = cljs.core.next(seq17995);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__17996,seq17995__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__8835__auto__ = [];
var len__8828__auto___18012 = arguments.length;
var i__8829__auto___18013 = (0);
while(true){
if((i__8829__auto___18013 < len__8828__auto___18012)){
args__8835__auto__.push((arguments[i__8829__auto___18013]));

var G__18014 = (i__8829__auto___18013 + (1));
i__8829__auto___18013 = G__18014;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18007){
var vec__18008 = p__18007;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18008,(0),null);
var G__18011 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18011) : cljs_http.client.request.call(null,G__18011));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq18005){
var G__18006 = cljs.core.first(seq18005);
var seq18005__$1 = cljs.core.next(seq18005);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__18006,seq18005__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__8835__auto__ = [];
var len__8828__auto___18022 = arguments.length;
var i__8829__auto___18023 = (0);
while(true){
if((i__8829__auto___18023 < len__8828__auto___18022)){
args__8835__auto__.push((arguments[i__8829__auto___18023]));

var G__18024 = (i__8829__auto___18023 + (1));
i__8829__auto___18023 = G__18024;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18017){
var vec__18018 = p__18017;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18018,(0),null);
var G__18021 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18021) : cljs_http.client.request.call(null,G__18021));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq18015){
var G__18016 = cljs.core.first(seq18015);
var seq18015__$1 = cljs.core.next(seq18015);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__18016,seq18015__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__8835__auto__ = [];
var len__8828__auto___18032 = arguments.length;
var i__8829__auto___18033 = (0);
while(true){
if((i__8829__auto___18033 < len__8828__auto___18032)){
args__8835__auto__.push((arguments[i__8829__auto___18033]));

var G__18034 = (i__8829__auto___18033 + (1));
i__8829__auto___18033 = G__18034;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18027){
var vec__18028 = p__18027;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(0),null);
var G__18031 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18031) : cljs_http.client.request.call(null,G__18031));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq18025){
var G__18026 = cljs.core.first(seq18025);
var seq18025__$1 = cljs.core.next(seq18025);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__18026,seq18025__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__8835__auto__ = [];
var len__8828__auto___18042 = arguments.length;
var i__8829__auto___18043 = (0);
while(true){
if((i__8829__auto___18043 < len__8828__auto___18042)){
args__8835__auto__.push((arguments[i__8829__auto___18043]));

var G__18044 = (i__8829__auto___18043 + (1));
i__8829__auto___18043 = G__18044;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18037){
var vec__18038 = p__18037;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18038,(0),null);
var G__18041 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18041) : cljs_http.client.request.call(null,G__18041));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq18035){
var G__18036 = cljs.core.first(seq18035);
var seq18035__$1 = cljs.core.next(seq18035);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__18036,seq18035__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__8835__auto__ = [];
var len__8828__auto___18052 = arguments.length;
var i__8829__auto___18053 = (0);
while(true){
if((i__8829__auto___18053 < len__8828__auto___18052)){
args__8835__auto__.push((arguments[i__8829__auto___18053]));

var G__18054 = (i__8829__auto___18053 + (1));
i__8829__auto___18053 = G__18054;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18047){
var vec__18048 = p__18047;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,(0),null);
var G__18051 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18051) : cljs_http.client.request.call(null,G__18051));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq18045){
var G__18046 = cljs.core.first(seq18045);
var seq18045__$1 = cljs.core.next(seq18045);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__18046,seq18045__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__8835__auto__ = [];
var len__8828__auto___18062 = arguments.length;
var i__8829__auto___18063 = (0);
while(true){
if((i__8829__auto___18063 < len__8828__auto___18062)){
args__8835__auto__.push((arguments[i__8829__auto___18063]));

var G__18064 = (i__8829__auto___18063 + (1));
i__8829__auto___18063 = G__18064;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18057){
var vec__18058 = p__18057;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18058,(0),null);
var G__18061 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18061) : cljs_http.client.request.call(null,G__18061));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq18055){
var G__18056 = cljs.core.first(seq18055);
var seq18055__$1 = cljs.core.next(seq18055);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__18056,seq18055__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__8835__auto__ = [];
var len__8828__auto___18072 = arguments.length;
var i__8829__auto___18073 = (0);
while(true){
if((i__8829__auto___18073 < len__8828__auto___18072)){
args__8835__auto__.push((arguments[i__8829__auto___18073]));

var G__18074 = (i__8829__auto___18073 + (1));
i__8829__auto___18073 = G__18074;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18067){
var vec__18068 = p__18067;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18068,(0),null);
var G__18071 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18071) : cljs_http.client.request.call(null,G__18071));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq18065){
var G__18066 = cljs.core.first(seq18065);
var seq18065__$1 = cljs.core.next(seq18065);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__18066,seq18065__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__8835__auto__ = [];
var len__8828__auto___18082 = arguments.length;
var i__8829__auto___18083 = (0);
while(true){
if((i__8829__auto___18083 < len__8828__auto___18082)){
args__8835__auto__.push((arguments[i__8829__auto___18083]));

var G__18084 = (i__8829__auto___18083 + (1));
i__8829__auto___18083 = G__18084;
continue;
} else {
}
break;
}

var argseq__8836__auto__ = ((((1) < args__8835__auto__.length))?(new cljs.core.IndexedSeq(args__8835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8836__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18077){
var vec__18078 = p__18077;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18078,(0),null);
var G__18081 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18081) : cljs_http.client.request.call(null,G__18081));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq18075){
var G__18076 = cljs.core.first(seq18075);
var seq18075__$1 = cljs.core.next(seq18075);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__18076,seq18075__$1);
});


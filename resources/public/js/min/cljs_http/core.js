// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (function (){var fexpr__17369 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__17369.cljs$core$IFn$_invoke$arity$1 ? fexpr__17369.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__17369.call(null,channel));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__17370){
var vec__17371 = p__17370;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17371,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17371,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__17374 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__17374)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__17374)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__17374)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__17374)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__17374)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17374)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17374)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__17375){
var map__17376 = p__17375;
var map__17376__$1 = ((((!((map__17376 == null)))?((((map__17376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17376):map__17376);
var request = map__17376__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17376__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17376__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17376__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__7668__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__17378 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__17378,default_headers);

cljs_http.core.apply_response_type_BANG_(G__17378,response_type);

G__17378.setTimeoutInterval(timeout);

G__17378.setWithCredentials(send_credentials);

return G__17378;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__17379){
var map__17380 = p__17379;
var map__17380__$1 = ((((!((map__17380 == null)))?((((map__17380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17380):map__17380);
var request = map__17380__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17380__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17380__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17380__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17380__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17380__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17380__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__7668__auto__ = request_method;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__17380,map__17380__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__17382 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__17382) : cljs_http.core.error_kw.call(null,G__17382));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__17380,map__17380__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_17405 = ((function (channel,request_url,method,headers__$1,xhr,map__17380,map__17380__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__17380,map__17380__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__17383_17406 = xhr;
G__17383_17406.setProgressEventsEnabled(true);

G__17383_17406.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17405,cljs.core.cst$kw$upload));

G__17383_17406.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17405,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__15437__auto___17407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___17407,channel,request_url,method,headers__$1,xhr,map__17380,map__17380__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___17407,channel,request_url,method,headers__$1,xhr,map__17380,map__17380__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_17394){
var state_val_17395 = (state_17394[(1)]);
if((state_val_17395 === (1))){
var state_17394__$1 = state_17394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17394__$1,(2),cancel);
} else {
if((state_val_17395 === (2))){
var inst_17385 = (state_17394[(2)]);
var inst_17386 = xhr.isComplete();
var inst_17387 = cljs.core.not(inst_17386);
var state_17394__$1 = (function (){var statearr_17396 = state_17394;
(statearr_17396[(7)] = inst_17385);

return statearr_17396;
})();
if(inst_17387){
var statearr_17397_17408 = state_17394__$1;
(statearr_17397_17408[(1)] = (3));

} else {
var statearr_17398_17409 = state_17394__$1;
(statearr_17398_17409[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17395 === (3))){
var inst_17389 = xhr.abort();
var state_17394__$1 = state_17394;
var statearr_17399_17410 = state_17394__$1;
(statearr_17399_17410[(2)] = inst_17389);

(statearr_17399_17410[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17395 === (4))){
var state_17394__$1 = state_17394;
var statearr_17400_17411 = state_17394__$1;
(statearr_17400_17411[(2)] = null);

(statearr_17400_17411[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17395 === (5))){
var inst_17392 = (state_17394[(2)]);
var state_17394__$1 = state_17394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17394__$1,inst_17392);
} else {
return null;
}
}
}
}
}
});})(c__15437__auto___17407,channel,request_url,method,headers__$1,xhr,map__17380,map__17380__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__15337__auto__,c__15437__auto___17407,channel,request_url,method,headers__$1,xhr,map__17380,map__17380__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__15338__auto__ = null;
var cljs_http$core$xhr_$_state_machine__15338__auto____0 = (function (){
var statearr_17401 = [null,null,null,null,null,null,null,null];
(statearr_17401[(0)] = cljs_http$core$xhr_$_state_machine__15338__auto__);

(statearr_17401[(1)] = (1));

return statearr_17401;
});
var cljs_http$core$xhr_$_state_machine__15338__auto____1 = (function (state_17394){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_17394);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e17402){if((e17402 instanceof Object)){
var ex__15341__auto__ = e17402;
var statearr_17403_17412 = state_17394;
(statearr_17403_17412[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17394);

return cljs.core.cst$kw$recur;
} else {
throw e17402;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__17413 = state_17394;
state_17394 = G__17413;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__15338__auto__ = function(state_17394){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__15338__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__15338__auto____1.call(this,state_17394);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__15338__auto____0;
cljs_http$core$xhr_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__15338__auto____1;
return cljs_http$core$xhr_$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___17407,channel,request_url,method,headers__$1,xhr,map__17380,map__17380__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__15439__auto__ = (function (){var statearr_17404 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_17404[(6)] = c__15437__auto___17407);

return statearr_17404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___17407,channel,request_url,method,headers__$1,xhr,map__17380,map__17380__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__17414){
var map__17415 = p__17414;
var map__17415__$1 = ((((!((map__17415 == null)))?((((map__17415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17415):map__17415);
var request = map__17415__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17415__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_17428 = jsonp.send(null,((function (channel,jsonp,map__17415,map__17415__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__17415,map__17415__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__17415,map__17415__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__17415,map__17415__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_17428], null));

if(cljs.core.truth_(cancel)){
var c__15437__auto___17429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15437__auto___17429,req_17428,channel,jsonp,map__17415,map__17415__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__15438__auto__ = (function (){var switch__15337__auto__ = ((function (c__15437__auto___17429,req_17428,channel,jsonp,map__17415,map__17415__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_17421){
var state_val_17422 = (state_17421[(1)]);
if((state_val_17422 === (1))){
var state_17421__$1 = state_17421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17421__$1,(2),cancel);
} else {
if((state_val_17422 === (2))){
var inst_17418 = (state_17421[(2)]);
var inst_17419 = jsonp.cancel(req_17428);
var state_17421__$1 = (function (){var statearr_17423 = state_17421;
(statearr_17423[(7)] = inst_17418);

return statearr_17423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17421__$1,inst_17419);
} else {
return null;
}
}
});})(c__15437__auto___17429,req_17428,channel,jsonp,map__17415,map__17415__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__15337__auto__,c__15437__auto___17429,req_17428,channel,jsonp,map__17415,map__17415__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__15338__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__15338__auto____0 = (function (){
var statearr_17424 = [null,null,null,null,null,null,null,null];
(statearr_17424[(0)] = cljs_http$core$jsonp_$_state_machine__15338__auto__);

(statearr_17424[(1)] = (1));

return statearr_17424;
});
var cljs_http$core$jsonp_$_state_machine__15338__auto____1 = (function (state_17421){
while(true){
var ret_value__15339__auto__ = (function (){try{while(true){
var result__15340__auto__ = switch__15337__auto__(state_17421);
if(cljs.core.keyword_identical_QMARK_(result__15340__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15340__auto__;
}
break;
}
}catch (e17425){if((e17425 instanceof Object)){
var ex__15341__auto__ = e17425;
var statearr_17426_17430 = state_17421;
(statearr_17426_17430[(5)] = ex__15341__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17421);

return cljs.core.cst$kw$recur;
} else {
throw e17425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15339__auto__,cljs.core.cst$kw$recur)){
var G__17431 = state_17421;
state_17421 = G__17431;
continue;
} else {
return ret_value__15339__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__15338__auto__ = function(state_17421){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__15338__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__15338__auto____1.call(this,state_17421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__15338__auto____0;
cljs_http$core$jsonp_$_state_machine__15338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__15338__auto____1;
return cljs_http$core$jsonp_$_state_machine__15338__auto__;
})()
;})(switch__15337__auto__,c__15437__auto___17429,req_17428,channel,jsonp,map__17415,map__17415__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__15439__auto__ = (function (){var statearr_17427 = (f__15438__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15438__auto__.cljs$core$IFn$_invoke$arity$0() : f__15438__auto__.call(null));
(statearr_17427[(6)] = c__15437__auto___17429);

return statearr_17427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15439__auto__);
});})(c__15437__auto___17429,req_17428,channel,jsonp,map__17415,map__17415__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__17432){
var map__17433 = p__17432;
var map__17433__$1 = ((((!((map__17433 == null)))?((((map__17433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17433):map__17433);
var request = map__17433__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17433__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

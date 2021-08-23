goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38892){
var map__38893 = p__38892;
var map__38893__$1 = cljs.core.__destructure_map(map__38893);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38893__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38893__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38893__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38893__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38896_38925 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38897_38926 = null;
var count__38898_38927 = (0);
var i__38899_38928 = (0);
while(true){
if((i__38899_38928 < count__38898_38927)){
var vec__38911_38929 = chunk__38897_38926.cljs$core$IIndexed$_nth$arity$2(null,i__38899_38928);
var k_38930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38911_38929,(0),null);
var cb_38931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38911_38929,(1),null);
try{var G__38915_38932 = cljs.core.deref(re_frame.trace.traces);
(cb_38931.cljs$core$IFn$_invoke$arity$1 ? cb_38931.cljs$core$IFn$_invoke$arity$1(G__38915_38932) : cb_38931.call(null,G__38915_38932));
}catch (e38914){var e_38933 = e38914;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38930,"while storing",cljs.core.deref(re_frame.trace.traces),e_38933], 0));
}

var G__38934 = seq__38896_38925;
var G__38935 = chunk__38897_38926;
var G__38936 = count__38898_38927;
var G__38937 = (i__38899_38928 + (1));
seq__38896_38925 = G__38934;
chunk__38897_38926 = G__38935;
count__38898_38927 = G__38936;
i__38899_38928 = G__38937;
continue;
} else {
var temp__5753__auto___38938 = cljs.core.seq(seq__38896_38925);
if(temp__5753__auto___38938){
var seq__38896_38939__$1 = temp__5753__auto___38938;
if(cljs.core.chunked_seq_QMARK_(seq__38896_38939__$1)){
var c__4649__auto___38940 = cljs.core.chunk_first(seq__38896_38939__$1);
var G__38941 = cljs.core.chunk_rest(seq__38896_38939__$1);
var G__38942 = c__4649__auto___38940;
var G__38943 = cljs.core.count(c__4649__auto___38940);
var G__38944 = (0);
seq__38896_38925 = G__38941;
chunk__38897_38926 = G__38942;
count__38898_38927 = G__38943;
i__38899_38928 = G__38944;
continue;
} else {
var vec__38917_38945 = cljs.core.first(seq__38896_38939__$1);
var k_38946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38917_38945,(0),null);
var cb_38947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38917_38945,(1),null);
try{var G__38921_38948 = cljs.core.deref(re_frame.trace.traces);
(cb_38947.cljs$core$IFn$_invoke$arity$1 ? cb_38947.cljs$core$IFn$_invoke$arity$1(G__38921_38948) : cb_38947.call(null,G__38921_38948));
}catch (e38920){var e_38949 = e38920;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38946,"while storing",cljs.core.deref(re_frame.trace.traces),e_38949], 0));
}

var G__38950 = cljs.core.next(seq__38896_38939__$1);
var G__38951 = null;
var G__38952 = (0);
var G__38953 = (0);
seq__38896_38925 = G__38950;
chunk__38897_38926 = G__38951;
count__38898_38927 = G__38952;
i__38899_38928 = G__38953;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

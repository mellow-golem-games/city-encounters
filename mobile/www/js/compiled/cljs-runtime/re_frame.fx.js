goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__39336 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39337 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39337);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39443 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39443)){
var new_db_39444 = temp__5753__auto___39443;
var fexpr__39340_39445 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39340_39445.cljs$core$IFn$_invoke$arity$1 ? fexpr__39340_39445.cljs$core$IFn$_invoke$arity$1(new_db_39444) : fexpr__39340_39445.call(null,new_db_39444));
} else {
}

var seq__39341 = cljs.core.seq(effects_without_db);
var chunk__39342 = null;
var count__39343 = (0);
var i__39344 = (0);
while(true){
if((i__39344 < count__39343)){
var vec__39352 = chunk__39342.cljs$core$IIndexed$_nth$arity$2(null,i__39344);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39352,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39352,(1),null);
var temp__5751__auto___39447 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39447)){
var effect_fn_39448 = temp__5751__auto___39447;
(effect_fn_39448.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39448.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39448.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39449 = seq__39341;
var G__39450 = chunk__39342;
var G__39451 = count__39343;
var G__39452 = (i__39344 + (1));
seq__39341 = G__39449;
chunk__39342 = G__39450;
count__39343 = G__39451;
i__39344 = G__39452;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39341);
if(temp__5753__auto__){
var seq__39341__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39341__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39341__$1);
var G__39454 = cljs.core.chunk_rest(seq__39341__$1);
var G__39455 = c__4649__auto__;
var G__39456 = cljs.core.count(c__4649__auto__);
var G__39457 = (0);
seq__39341 = G__39454;
chunk__39342 = G__39455;
count__39343 = G__39456;
i__39344 = G__39457;
continue;
} else {
var vec__39356 = cljs.core.first(seq__39341__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39356,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39356,(1),null);
var temp__5751__auto___39458 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39458)){
var effect_fn_39459 = temp__5751__auto___39458;
(effect_fn_39459.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39459.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39459.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39460 = cljs.core.next(seq__39341__$1);
var G__39461 = null;
var G__39462 = (0);
var G__39463 = (0);
seq__39341 = G__39460;
chunk__39342 = G__39461;
count__39343 = G__39462;
i__39344 = G__39463;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38870__auto___39464 = re_frame.interop.now();
var duration__38871__auto___39465 = (end__38870__auto___39464 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38871__auto___39465,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38870__auto___39464);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39336);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39466 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39466)){
var new_db_39467 = temp__5753__auto___39466;
var fexpr__39367_39468 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39367_39468.cljs$core$IFn$_invoke$arity$1 ? fexpr__39367_39468.cljs$core$IFn$_invoke$arity$1(new_db_39467) : fexpr__39367_39468.call(null,new_db_39467));
} else {
}

var seq__39372 = cljs.core.seq(effects_without_db);
var chunk__39373 = null;
var count__39374 = (0);
var i__39375 = (0);
while(true){
if((i__39375 < count__39374)){
var vec__39383 = chunk__39373.cljs$core$IIndexed$_nth$arity$2(null,i__39375);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39383,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39383,(1),null);
var temp__5751__auto___39469 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39469)){
var effect_fn_39470 = temp__5751__auto___39469;
(effect_fn_39470.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39470.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39470.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39471 = seq__39372;
var G__39472 = chunk__39373;
var G__39473 = count__39374;
var G__39474 = (i__39375 + (1));
seq__39372 = G__39471;
chunk__39373 = G__39472;
count__39374 = G__39473;
i__39375 = G__39474;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39372);
if(temp__5753__auto__){
var seq__39372__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39372__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39372__$1);
var G__39475 = cljs.core.chunk_rest(seq__39372__$1);
var G__39476 = c__4649__auto__;
var G__39477 = cljs.core.count(c__4649__auto__);
var G__39478 = (0);
seq__39372 = G__39475;
chunk__39373 = G__39476;
count__39374 = G__39477;
i__39375 = G__39478;
continue;
} else {
var vec__39386 = cljs.core.first(seq__39372__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39386,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39386,(1),null);
var temp__5751__auto___39481 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39481)){
var effect_fn_39482 = temp__5751__auto___39481;
(effect_fn_39482.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39482.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39482.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39483 = cljs.core.next(seq__39372__$1);
var G__39484 = null;
var G__39485 = (0);
var G__39486 = (0);
seq__39372 = G__39483;
chunk__39373 = G__39484;
count__39374 = G__39485;
i__39375 = G__39486;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__39389){
var map__39390 = p__39389;
var map__39390__$1 = cljs.core.__destructure_map(map__39390);
var effect = map__39390__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39390__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39390__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__39391 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39392 = null;
var count__39393 = (0);
var i__39394 = (0);
while(true){
if((i__39394 < count__39393)){
var effect = chunk__39392.cljs$core$IIndexed$_nth$arity$2(null,i__39394);
re_frame.fx.dispatch_later(effect);


var G__39489 = seq__39391;
var G__39490 = chunk__39392;
var G__39491 = count__39393;
var G__39492 = (i__39394 + (1));
seq__39391 = G__39489;
chunk__39392 = G__39490;
count__39393 = G__39491;
i__39394 = G__39492;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39391);
if(temp__5753__auto__){
var seq__39391__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39391__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39391__$1);
var G__39493 = cljs.core.chunk_rest(seq__39391__$1);
var G__39494 = c__4649__auto__;
var G__39495 = cljs.core.count(c__4649__auto__);
var G__39496 = (0);
seq__39391 = G__39493;
chunk__39392 = G__39494;
count__39393 = G__39495;
i__39394 = G__39496;
continue;
} else {
var effect = cljs.core.first(seq__39391__$1);
re_frame.fx.dispatch_later(effect);


var G__39497 = cljs.core.next(seq__39391__$1);
var G__39498 = null;
var G__39499 = (0);
var G__39500 = (0);
seq__39391 = G__39497;
chunk__39392 = G__39498;
count__39393 = G__39499;
i__39394 = G__39500;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__39395 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__39396 = null;
var count__39397 = (0);
var i__39398 = (0);
while(true){
if((i__39398 < count__39397)){
var vec__39406 = chunk__39396.cljs$core$IIndexed$_nth$arity$2(null,i__39398);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39406,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39406,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39501 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39501)){
var effect_fn_39502 = temp__5751__auto___39501;
(effect_fn_39502.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39502.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39502.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39503 = seq__39395;
var G__39504 = chunk__39396;
var G__39505 = count__39397;
var G__39506 = (i__39398 + (1));
seq__39395 = G__39503;
chunk__39396 = G__39504;
count__39397 = G__39505;
i__39398 = G__39506;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39395);
if(temp__5753__auto__){
var seq__39395__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39395__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39395__$1);
var G__39508 = cljs.core.chunk_rest(seq__39395__$1);
var G__39509 = c__4649__auto__;
var G__39510 = cljs.core.count(c__4649__auto__);
var G__39511 = (0);
seq__39395 = G__39508;
chunk__39396 = G__39509;
count__39397 = G__39510;
i__39398 = G__39511;
continue;
} else {
var vec__39412 = cljs.core.first(seq__39395__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39412,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39412,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39512 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39512)){
var effect_fn_39513 = temp__5751__auto___39512;
(effect_fn_39513.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39513.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39513.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39514 = cljs.core.next(seq__39395__$1);
var G__39515 = null;
var G__39516 = (0);
var G__39517 = (0);
seq__39395 = G__39514;
chunk__39396 = G__39515;
count__39397 = G__39516;
i__39398 = G__39517;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__39418 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39419 = null;
var count__39420 = (0);
var i__39421 = (0);
while(true){
if((i__39421 < count__39420)){
var event = chunk__39419.cljs$core$IIndexed$_nth$arity$2(null,i__39421);
re_frame.router.dispatch(event);


var G__39518 = seq__39418;
var G__39519 = chunk__39419;
var G__39520 = count__39420;
var G__39521 = (i__39421 + (1));
seq__39418 = G__39518;
chunk__39419 = G__39519;
count__39420 = G__39520;
i__39421 = G__39521;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39418);
if(temp__5753__auto__){
var seq__39418__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39418__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39418__$1);
var G__39522 = cljs.core.chunk_rest(seq__39418__$1);
var G__39523 = c__4649__auto__;
var G__39524 = cljs.core.count(c__4649__auto__);
var G__39525 = (0);
seq__39418 = G__39522;
chunk__39419 = G__39523;
count__39420 = G__39524;
i__39421 = G__39525;
continue;
} else {
var event = cljs.core.first(seq__39418__$1);
re_frame.router.dispatch(event);


var G__39526 = cljs.core.next(seq__39418__$1);
var G__39527 = null;
var G__39528 = (0);
var G__39529 = (0);
seq__39418 = G__39526;
chunk__39419 = G__39527;
count__39420 = G__39528;
i__39421 = G__39529;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39431 = cljs.core.seq(value);
var chunk__39432 = null;
var count__39433 = (0);
var i__39434 = (0);
while(true){
if((i__39434 < count__39433)){
var event = chunk__39432.cljs$core$IIndexed$_nth$arity$2(null,i__39434);
clear_event(event);


var G__39530 = seq__39431;
var G__39531 = chunk__39432;
var G__39532 = count__39433;
var G__39533 = (i__39434 + (1));
seq__39431 = G__39530;
chunk__39432 = G__39531;
count__39433 = G__39532;
i__39434 = G__39533;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39431);
if(temp__5753__auto__){
var seq__39431__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39431__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39431__$1);
var G__39536 = cljs.core.chunk_rest(seq__39431__$1);
var G__39537 = c__4649__auto__;
var G__39538 = cljs.core.count(c__4649__auto__);
var G__39539 = (0);
seq__39431 = G__39536;
chunk__39432 = G__39537;
count__39433 = G__39538;
i__39434 = G__39539;
continue;
} else {
var event = cljs.core.first(seq__39431__$1);
clear_event(event);


var G__39540 = cljs.core.next(seq__39431__$1);
var G__39541 = null;
var G__39542 = (0);
var G__39543 = (0);
seq__39431 = G__39540;
chunk__39432 = G__39541;
count__39433 = G__39542;
i__39434 = G__39543;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

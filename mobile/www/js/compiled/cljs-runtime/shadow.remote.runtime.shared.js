goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33140,res){
var map__33142 = p__33140;
var map__33142__$1 = cljs.core.__destructure_map(map__33142);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33143 = res;
var G__33143__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33143,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33143);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33143__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33143__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33145 = arguments.length;
switch (G__33145) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33161,msg,handlers,timeout_after_ms){
var map__33162 = p__33161;
var map__33162__$1 = cljs.core.__destructure_map(map__33162);
var runtime = map__33162__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33162__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33304 = arguments.length;
var i__4830__auto___33305 = (0);
while(true){
if((i__4830__auto___33305 < len__4829__auto___33304)){
args__4835__auto__.push((arguments[i__4830__auto___33305]));

var G__33306 = (i__4830__auto___33305 + (1));
i__4830__auto___33305 = G__33306;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33169,ev,args){
var map__33170 = p__33169;
var map__33170__$1 = cljs.core.__destructure_map(map__33170);
var runtime = map__33170__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33170__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33171 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33174 = null;
var count__33175 = (0);
var i__33176 = (0);
while(true){
if((i__33176 < count__33175)){
var ext = chunk__33174.cljs$core$IIndexed$_nth$arity$2(null,i__33176);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33307 = seq__33171;
var G__33308 = chunk__33174;
var G__33309 = count__33175;
var G__33310 = (i__33176 + (1));
seq__33171 = G__33307;
chunk__33174 = G__33308;
count__33175 = G__33309;
i__33176 = G__33310;
continue;
} else {
var G__33311 = seq__33171;
var G__33312 = chunk__33174;
var G__33313 = count__33175;
var G__33314 = (i__33176 + (1));
seq__33171 = G__33311;
chunk__33174 = G__33312;
count__33175 = G__33313;
i__33176 = G__33314;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33171);
if(temp__5753__auto__){
var seq__33171__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33171__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33171__$1);
var G__33315 = cljs.core.chunk_rest(seq__33171__$1);
var G__33316 = c__4649__auto__;
var G__33317 = cljs.core.count(c__4649__auto__);
var G__33318 = (0);
seq__33171 = G__33315;
chunk__33174 = G__33316;
count__33175 = G__33317;
i__33176 = G__33318;
continue;
} else {
var ext = cljs.core.first(seq__33171__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33320 = cljs.core.next(seq__33171__$1);
var G__33321 = null;
var G__33322 = (0);
var G__33323 = (0);
seq__33171 = G__33320;
chunk__33174 = G__33321;
count__33175 = G__33322;
i__33176 = G__33323;
continue;
} else {
var G__33324 = cljs.core.next(seq__33171__$1);
var G__33325 = null;
var G__33326 = (0);
var G__33327 = (0);
seq__33171 = G__33324;
chunk__33174 = G__33325;
count__33175 = G__33326;
i__33176 = G__33327;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33164){
var G__33165 = cljs.core.first(seq33164);
var seq33164__$1 = cljs.core.next(seq33164);
var G__33166 = cljs.core.first(seq33164__$1);
var seq33164__$2 = cljs.core.next(seq33164__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33165,G__33166,seq33164__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33180,p__33181){
var map__33182 = p__33180;
var map__33182__$1 = cljs.core.__destructure_map(map__33182);
var runtime = map__33182__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33182__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33183 = p__33181;
var map__33183__$1 = cljs.core.__destructure_map(map__33183);
var msg = map__33183__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33183__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33184 = cljs.core.deref(state_ref);
var map__33184__$1 = cljs.core.__destructure_map(map__33184);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33184__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33184__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33187){
var map__33188 = p__33187;
var map__33188__$1 = cljs.core.__destructure_map(map__33188);
var runtime = map__33188__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33188__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33192,msg){
var map__33193 = p__33192;
var map__33193__$1 = cljs.core.__destructure_map(map__33193);
var runtime = map__33193__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33193__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33196,key,p__33197){
var map__33198 = p__33196;
var map__33198__$1 = cljs.core.__destructure_map(map__33198);
var state = map__33198__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33198__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33199 = p__33197;
var map__33199__$1 = cljs.core.__destructure_map(map__33199);
var spec = map__33199__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33199__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33200,key,spec){
var map__33201 = p__33200;
var map__33201__$1 = cljs.core.__destructure_map(map__33201);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33201__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33204_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33204_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33207_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33207_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33208_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33208_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33209_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33209_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33210_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33210_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33238,key){
var map__33240 = p__33238;
var map__33240__$1 = cljs.core.__destructure_map(map__33240);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33240__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33246,msg){
var map__33247 = p__33246;
var map__33247__$1 = cljs.core.__destructure_map(map__33247);
var runtime = map__33247__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33247__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33251,p__33252){
var map__33254 = p__33251;
var map__33254__$1 = cljs.core.__destructure_map(map__33254);
var runtime = map__33254__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33254__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33255 = p__33252;
var map__33255__$1 = cljs.core.__destructure_map(map__33255);
var msg = map__33255__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33255__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33255__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33263 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33265 = null;
var count__33266 = (0);
var i__33267 = (0);
while(true){
if((i__33267 < count__33266)){
var map__33276 = chunk__33265.cljs$core$IIndexed$_nth$arity$2(null,i__33267);
var map__33276__$1 = cljs.core.__destructure_map(map__33276);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33276__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33338 = seq__33263;
var G__33339 = chunk__33265;
var G__33340 = count__33266;
var G__33341 = (i__33267 + (1));
seq__33263 = G__33338;
chunk__33265 = G__33339;
count__33266 = G__33340;
i__33267 = G__33341;
continue;
} else {
var G__33342 = seq__33263;
var G__33343 = chunk__33265;
var G__33344 = count__33266;
var G__33345 = (i__33267 + (1));
seq__33263 = G__33342;
chunk__33265 = G__33343;
count__33266 = G__33344;
i__33267 = G__33345;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33263);
if(temp__5753__auto__){
var seq__33263__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33263__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33263__$1);
var G__33346 = cljs.core.chunk_rest(seq__33263__$1);
var G__33347 = c__4649__auto__;
var G__33348 = cljs.core.count(c__4649__auto__);
var G__33349 = (0);
seq__33263 = G__33346;
chunk__33265 = G__33347;
count__33266 = G__33348;
i__33267 = G__33349;
continue;
} else {
var map__33277 = cljs.core.first(seq__33263__$1);
var map__33277__$1 = cljs.core.__destructure_map(map__33277);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33277__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33351 = cljs.core.next(seq__33263__$1);
var G__33352 = null;
var G__33353 = (0);
var G__33354 = (0);
seq__33263 = G__33351;
chunk__33265 = G__33352;
count__33266 = G__33353;
i__33267 = G__33354;
continue;
} else {
var G__33355 = cljs.core.next(seq__33263__$1);
var G__33356 = null;
var G__33357 = (0);
var G__33358 = (0);
seq__33263 = G__33355;
chunk__33265 = G__33356;
count__33266 = G__33357;
i__33267 = G__33358;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

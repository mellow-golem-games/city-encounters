goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__42371,match){
var map__42372 = p__42371;
var map__42372__$1 = cljs.core.__destructure_map(map__42372);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42372__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42372__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42372__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4221__auto__ = identity;
if(cljs.core.truth_(and__4221__auto__)){
return parameters;
} else {
return and__4221__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__42373(s__42374){
return (new cljs.core.LazySeq(null,(function (){
var s__42374__$1 = s__42374;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42374__$1);
if(temp__5753__auto__){
var s__42374__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42374__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__42374__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__42376 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__42375 = (0);
while(true){
if((i__42375 < size__4621__auto__)){
var vec__42379 = cljs.core._nth(c__4620__auto__,i__42375);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42379,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42379,(1),null);
cljs.core.chunk_append(b__42376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__42447 = (i__42375 + (1));
i__42375 = G__42447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42376),reitit$frontend$controllers$get_identity_$_iter__42373(cljs.core.chunk_rest(s__42374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42376),null);
}
} else {
var vec__42388 = cljs.core.first(s__42374__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42388,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42388,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__42373(cljs.core.rest(s__42374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
var G__42392 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42392) : f.call(null,G__42392));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__42410_42450 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__42411_42451 = null;
var count__42412_42452 = (0);
var i__42413_42453 = (0);
while(true){
if((i__42413_42453 < count__42412_42452)){
var controller_42454 = chunk__42411_42451.cljs$core$IIndexed$_nth$arity$2(null,i__42413_42453);
reitit.frontend.controllers.apply_controller(controller_42454,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__42455 = seq__42410_42450;
var G__42456 = chunk__42411_42451;
var G__42457 = count__42412_42452;
var G__42458 = (i__42413_42453 + (1));
seq__42410_42450 = G__42455;
chunk__42411_42451 = G__42456;
count__42412_42452 = G__42457;
i__42413_42453 = G__42458;
continue;
} else {
var temp__5753__auto___42459 = cljs.core.seq(seq__42410_42450);
if(temp__5753__auto___42459){
var seq__42410_42460__$1 = temp__5753__auto___42459;
if(cljs.core.chunked_seq_QMARK_(seq__42410_42460__$1)){
var c__4649__auto___42461 = cljs.core.chunk_first(seq__42410_42460__$1);
var G__42462 = cljs.core.chunk_rest(seq__42410_42460__$1);
var G__42463 = c__4649__auto___42461;
var G__42464 = cljs.core.count(c__4649__auto___42461);
var G__42465 = (0);
seq__42410_42450 = G__42462;
chunk__42411_42451 = G__42463;
count__42412_42452 = G__42464;
i__42413_42453 = G__42465;
continue;
} else {
var controller_42466 = cljs.core.first(seq__42410_42460__$1);
reitit.frontend.controllers.apply_controller(controller_42466,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__42467 = cljs.core.next(seq__42410_42460__$1);
var G__42468 = null;
var G__42469 = (0);
var G__42470 = (0);
seq__42410_42450 = G__42467;
chunk__42411_42451 = G__42468;
count__42412_42452 = G__42469;
i__42413_42453 = G__42470;
continue;
}
} else {
}
}
break;
}

var seq__42436_42471 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__42437_42472 = null;
var count__42438_42473 = (0);
var i__42439_42474 = (0);
while(true){
if((i__42439_42474 < count__42438_42473)){
var controller_42475 = chunk__42437_42472.cljs$core$IIndexed$_nth$arity$2(null,i__42439_42474);
reitit.frontend.controllers.apply_controller(controller_42475,new cljs.core.Keyword(null,"start","start",-355208981));


var G__42476 = seq__42436_42471;
var G__42477 = chunk__42437_42472;
var G__42478 = count__42438_42473;
var G__42479 = (i__42439_42474 + (1));
seq__42436_42471 = G__42476;
chunk__42437_42472 = G__42477;
count__42438_42473 = G__42478;
i__42439_42474 = G__42479;
continue;
} else {
var temp__5753__auto___42480 = cljs.core.seq(seq__42436_42471);
if(temp__5753__auto___42480){
var seq__42436_42481__$1 = temp__5753__auto___42480;
if(cljs.core.chunked_seq_QMARK_(seq__42436_42481__$1)){
var c__4649__auto___42482 = cljs.core.chunk_first(seq__42436_42481__$1);
var G__42483 = cljs.core.chunk_rest(seq__42436_42481__$1);
var G__42484 = c__4649__auto___42482;
var G__42485 = cljs.core.count(c__4649__auto___42482);
var G__42486 = (0);
seq__42436_42471 = G__42483;
chunk__42437_42472 = G__42484;
count__42438_42473 = G__42485;
i__42439_42474 = G__42486;
continue;
} else {
var controller_42487 = cljs.core.first(seq__42436_42481__$1);
reitit.frontend.controllers.apply_controller(controller_42487,new cljs.core.Keyword(null,"start","start",-355208981));


var G__42488 = cljs.core.next(seq__42436_42481__$1);
var G__42489 = null;
var G__42490 = (0);
var G__42491 = (0);
seq__42436_42471 = G__42488;
chunk__42437_42472 = G__42489;
count__42438_42473 = G__42490;
i__42439_42474 = G__42491;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map

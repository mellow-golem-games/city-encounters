goog.provide('city_encounters.routes');
city_encounters.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("routes","home","routes/home",-1297486007),new cljs.core.Keyword(null,"view","view",1247994814),city_encounters.views.home.Home_page,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Home"], null)], null)], null);
city_encounters.routes.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(city_encounters.routes.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.malli.coercion], null)], null));
city_encounters.routes.on_navigate = (function city_encounters$routes$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigated","navigated",540897836),new_match], null));
} else {
return null;
}
});
city_encounters.routes.init_routes_BANG_ = (function city_encounters$routes$init_routes_BANG_(){
console.log("initializing routes");

return reitit.frontend.easy.start_BANG_(city_encounters.routes.router,city_encounters.routes.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));
});

//# sourceMappingURL=city_encounters.routes.js.map

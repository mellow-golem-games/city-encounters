goog.provide('city_encounters.core');
city_encounters.core.dev_setup = (function city_encounters$core$dev_setup(){
if(city_encounters.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
city_encounters.core.mount_root = (function city_encounters$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.views.home.Home_page], null),document.getElementById("app"));
});
/**
 * Called on page-load in public/index.html.
 *   Only called once - does not get called on 'live-reloads' during development.
 *   
 */
city_encounters.core.init = (function city_encounters$core$init(){
city_encounters.core.dev_setup();

city_encounters.core.mount_root();

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("city-encounters.events","init","city-encounters.events/init",-374800545)], null));
});
goog.exportSymbol('city_encounters.core.init', city_encounters.core.init);

//# sourceMappingURL=city_encounters.core.js.map

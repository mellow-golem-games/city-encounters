goog.provide('city_encounters.services.local');
var module$node_modules$localforage$dist$localforage=shadow.js.require("module$node_modules$localforage$dist$localforage", {});
city_encounters.services.local.STORAGE_KEY = "mgg-city-encoutners-ids";
city_encounters.services.local.get_current_state = (function city_encounters$services$local$get_current_state(){
return module$node_modules$localforage$dist$localforage.getItem(city_encounters.services.local.STORAGE_KEY);
});
city_encounters.services.local.handle_save = (function city_encounters$services$local$handle_save(encounter){
if(cljs.core.truth_(encounter)){
return city_encounters.services.local.get_current_state().then((function (value){
var currentValue = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return module$node_modules$localforage$dist$localforage.setItem(city_encounters.services.local.STORAGE_KEY,cljs.core.clj__GT_js(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(currentValue,encounter))).then((function (_){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-outcome","set-new-outcome",-1471639933),encounter], null));

return alert("Saved!");
}));
}));
} else {
return alert("No Encounter To Save!");
}
});
city_encounters.services.local.handle_delete = (function city_encounters$services$local$handle_delete(id){
return city_encounters.services.local.get_current_state().then((function (value){
var currentValue = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var newVal = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29154_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__29154_SHARP_),id);
}),currentValue);
return module$node_modules$localforage$dist$localforage.setItem(city_encounters.services.local.STORAGE_KEY,cljs.core.clj__GT_js(newVal)).then((function (_){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-saved-outcomes","set-saved-outcomes",-1439582232),newVal], null));

return alert("Deleted!");
}));
}));
});

//# sourceMappingURL=city_encounters.services.local.js.map

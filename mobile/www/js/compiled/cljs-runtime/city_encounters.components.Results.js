goog.provide('city_encounters.components.Results');
city_encounters.components.Results.get_fill = (function city_encounters$components$Results$get_fill(is_saved_QMARK_){
if(cljs.core.truth_(is_saved_QMARK_)){
return "#903918";
} else {
return "#62574a";
}
});
city_encounters.components.Results.is_encounter_saved_QMARK_ = (function city_encounters$components$Results$is_encounter_saved_QMARK_(encounter,saved_outcomes){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29402_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__29402_SHARP_),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(encounter));
}),saved_outcomes)),(0))));
});
city_encounters.components.Results.handle_localstorage = (function city_encounters$components$Results$handle_localstorage(encounter,is_saved_QMARK_){
if(cljs.core.truth_(is_saved_QMARK_)){
return city_encounters.services.local.handle_delete(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(encounter));
} else {
return city_encounters.services.local.handle_save(encounter);
}
});
city_encounters.components.Results.Results = (function city_encounters$components$Results$Results(encounter,saved_outcomes){
var is_saved_QMARK_ = city_encounters.components.Results.is_encounter_saved_QMARK_(encounter,saved_outcomes);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([is_saved_QMARK_], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Results.max-w-xl.mx-auto.px-6","div.Results.max-w-xl.mx-auto.px-6",1547477295),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Results__header.flex.justify-between","div.Results__header.flex.justify-between",621430633),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-3xl","h2.text-3xl",-828328568),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(encounter)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"22px",new cljs.core.Keyword(null,"height","height",1025178622),"22px"], null),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 576 512",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return city_encounters.components.Results.handle_localstorage(encounter,is_saved_QMARK_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),city_encounters.components.Results.get_fill(is_saved_QMARK_),new cljs.core.Keyword(null,"d","d",1972142424),"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Results__details.pt-2","div.Results__details.pt-2",999703117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(encounter)], null)], null)], null);
});

//# sourceMappingURL=city_encounters.components.Results.js.map

goog.provide('city_encounters.views.saved');
city_encounters.views.saved.get_saved_outcomes = (function city_encounters$views$saved$get_saved_outcomes(){
return null;
});
city_encounters.services.local.get_current_state().then((function (value){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-saved-outcomes","set-saved-outcomes",-1439582232),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null));
}));
city_encounters.views.saved.Saved_page = (function city_encounters$views$saved$Saved_page(active){
var saved_outcomes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-outcomes","saved-outcomes",927462452)], null)));
if(cljs.core.truth_(saved_outcomes)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Saved.sub-page.mx-auto.pt-4","div.Saved.sub-page.mx-auto.pt-4",1865712517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,"saved"))?"active":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(saved_outcomes),(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-3xl","h3.text-3xl",-380039392),"No Saved Encounters"], null):(function (){var iter__4622__auto__ = (function city_encounters$views$saved$Saved_page_$_iter__29421(s__29422){
return (new cljs.core.LazySeq(null,(function (){
var s__29422__$1 = s__29422;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29422__$1);
if(temp__5753__auto__){
var s__29422__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29422__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__29422__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__29424 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__29423 = (0);
while(true){
if((i__29423 < size__4621__auto__)){
var outcome = cljs.core._nth(c__4620__auto__,i__29423);
cljs.core.chunk_append(b__29424,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-xl.mx-auto.px-6","div.max-w-xl.mx-auto.px-6",-344022044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(outcome)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between","div.flex.justify-between",-1943883738),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-3xl","h3.text-3xl",-380039392),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(outcome)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"22px",new cljs.core.Keyword(null,"height","height",1025178622),"22px"], null),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 576 512",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29423,outcome,c__4620__auto__,size__4621__auto__,b__29424,s__29422__$2,temp__5753__auto__,saved_outcomes){
return (function (){
return city_encounters.services.local.handle_delete(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(outcome));
});})(i__29423,outcome,c__4620__auto__,size__4621__auto__,b__29424,s__29422__$2,temp__5753__auto__,saved_outcomes))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#62574a",new cljs.core.Keyword(null,"d","d",1972142424),"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(outcome)], null)], null));

var G__29425 = (i__29423 + (1));
i__29423 = G__29425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29424),city_encounters$views$saved$Saved_page_$_iter__29421(cljs.core.chunk_rest(s__29422__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29424),null);
}
} else {
var outcome = cljs.core.first(s__29422__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-xl.mx-auto.px-6","div.max-w-xl.mx-auto.px-6",-344022044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(outcome)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between","div.flex.justify-between",-1943883738),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-3xl","h3.text-3xl",-380039392),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(outcome)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"22px",new cljs.core.Keyword(null,"height","height",1025178622),"22px"], null),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 576 512",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (outcome,s__29422__$2,temp__5753__auto__,saved_outcomes){
return (function (){
return city_encounters.services.local.handle_delete(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(outcome));
});})(outcome,s__29422__$2,temp__5753__auto__,saved_outcomes))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#62574a",new cljs.core.Keyword(null,"d","d",1972142424),"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(outcome)], null)], null),city_encounters$views$saved$Saved_page_$_iter__29421(cljs.core.rest(s__29422__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(saved_outcomes);
})())], null);
} else {
return city_encounters.views.saved.get_saved_outcomes();
}
});

//# sourceMappingURL=city_encounters.views.saved.js.map

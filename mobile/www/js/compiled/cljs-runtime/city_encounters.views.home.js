goog.provide('city_encounters.views.home');
city_encounters.views.home.SIZES = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hamlet","Village","CITY","TOWN","METROPOLIS"], null);
city_encounters.views.home.OUTCOME_TYPE = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Good","Neutral","Bad"], null);
city_encounters.views.home.OUTCOMES = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Combat","Roleplay","Hook"], null);
city_encounters.views.home.on_success = (function city_encounters$views$home$on_success(res){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-is-loading","set-is-loading",1042437358),false], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-encounter","set-encounter",-1498067629),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(res)], null));
});
city_encounters.views.home.on_error = (function city_encounters$views$home$on_error(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-is-loading","set-is-loading",1042437358),false], null));

return alert("There was an error");
});
city_encounters.views.home.get_encounter = (function city_encounters$views$home$get_encounter(size,outcome,extra){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-is-loading","set-is-loading",1042437358),true], null));

var outcomes_string = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29426_SHARP_,p2__29427_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29426_SHARP_),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29427_SHARP_)].join('');
}),"",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [outcome], null),extra)),(1));
var c = city_encounters.services.api.get_random_encouner(size,outcomes_string);
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(c,(function (res){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(res),(200))){
return city_encounters.views.home.on_success(res);
} else {
return city_encounters.views.home.on_error();
}
}));
});
city_encounters.views.home.set_current_size = (function city_encounters$views$home$set_current_size(size_string){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-size","set-current-size",2113280238),size_string], null));
});
city_encounters.views.home.set_current_outcome = (function city_encounters$views$home$set_current_outcome(outcome_string){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-outcome","set-current-outcome",-1305037972),outcome_string], null));
});
city_encounters.views.home.set_extra_outcomes = (function city_encounters$views$home$set_extra_outcomes(outcome_string,add_QMARK_){
if(cljs.core.truth_(add_QMARK_)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-extra-outcome","add-extra-outcome",184554128),outcome_string], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-extra-outcome","remove-extra-outcome",-1496711294),outcome_string], null));
}
});
city_encounters.views.home.Home_page = (function city_encounters$views$home$Home_page(){
var encounter = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"encounter","encounter",726495847)], null)));
var current_size = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-size","current-size",1609818719)], null)));
var current_outcome = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-outcome","current-outcome",1819761040)], null)));
var extra_outcomes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-outcomes","extra-outcomes",1378780109)], null)));
var is_loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-loading","is-loading",-1729867543)], null)));
var active_page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null)));
var saved_outcomes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-outcomes","saved-outcomes",927462452)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home.page.text-center.mx-auto.pt-4","div.Home.page.text-center.mx-auto.pt-4",-486689842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(encounter)?"Home__encounter":"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.views.saved.Saved_page,active_page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.views.settings.Settings_page,active_page], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home__options.px-2","div.Home__options.px-2",-1176599672),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-4xl.pb-2.pt-2","h2.text-4xl.pb-2.pt-2",-1527458602),"Choose Your Encounter Settings"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home__buttonWrapper.flex.flex-wrap.py-4.justify-center","div.Home__buttonWrapper.flex.flex-wrap.py-4.justify-center",176325776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.min-w-full.text-3xl.pb-2","h3.min-w-full.text-3xl.pb-2",-1433984796),"Location Size"], null),(function (){var iter__4622__auto__ = (function city_encounters$views$home$Home_page_$_iter__29429(s__29430){
return (new cljs.core.LazySeq(null,(function (){
var s__29430__$1 = s__29430;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29430__$1);
if(temp__5753__auto__){
var s__29430__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29430__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__29430__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__29432 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__29431 = (0);
while(true){
if((i__29431 < size__4621__auto__)){
var size = cljs.core._nth(c__4620__auto__,i__29431);
cljs.core.chunk_append(b__29432,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.components.Button.Button,size,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_size,size),((function (i__29431,size,c__4620__auto__,size__4621__auto__,b__29432,s__29430__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes){
return (function (){
return city_encounters.views.home.set_current_size(size);
});})(i__29431,size,c__4620__auto__,size__4621__auto__,b__29432,s__29430__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),size], null)));

var G__29441 = (i__29431 + (1));
i__29431 = G__29441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29432),city_encounters$views$home$Home_page_$_iter__29429(cljs.core.chunk_rest(s__29430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29432),null);
}
} else {
var size = cljs.core.first(s__29430__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.components.Button.Button,size,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_size,size),((function (size,s__29430__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes){
return (function (){
return city_encounters.views.home.set_current_size(size);
});})(size,s__29430__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),size], null)),city_encounters$views$home$Home_page_$_iter__29429(cljs.core.rest(s__29430__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(city_encounters.views.home.SIZES);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home__buttonWrapper.flex.flex-wrap.py-4.justify-center","div.Home__buttonWrapper.flex.flex-wrap.py-4.justify-center",176325776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.min-w-full.text-3xl.pb-2","h3.min-w-full.text-3xl.pb-2",-1433984796),"Outcome"], null),(function (){var iter__4622__auto__ = (function city_encounters$views$home$Home_page_$_iter__29433(s__29434){
return (new cljs.core.LazySeq(null,(function (){
var s__29434__$1 = s__29434;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29434__$1);
if(temp__5753__auto__){
var s__29434__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29434__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__29434__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__29436 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__29435 = (0);
while(true){
if((i__29435 < size__4621__auto__)){
var outcome = cljs.core._nth(c__4620__auto__,i__29435);
cljs.core.chunk_append(b__29436,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.components.Button.Button,outcome,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_outcome,outcome),((function (i__29435,outcome,c__4620__auto__,size__4621__auto__,b__29436,s__29434__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes){
return (function (){
return city_encounters.views.home.set_current_outcome(outcome);
});})(i__29435,outcome,c__4620__auto__,size__4621__auto__,b__29436,s__29434__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),outcome], null)));

var G__29442 = (i__29435 + (1));
i__29435 = G__29442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29436),city_encounters$views$home$Home_page_$_iter__29433(cljs.core.chunk_rest(s__29434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29436),null);
}
} else {
var outcome = cljs.core.first(s__29434__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.components.Button.Button,outcome,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_outcome,outcome),((function (outcome,s__29434__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes){
return (function (){
return city_encounters.views.home.set_current_outcome(outcome);
});})(outcome,s__29434__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),outcome], null)),city_encounters$views$home$Home_page_$_iter__29433(cljs.core.rest(s__29434__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(city_encounters.views.home.OUTCOME_TYPE);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home__buttonWrapper.flex.flex-wrap.py-4.justify-center","div.Home__buttonWrapper.flex.flex-wrap.py-4.justify-center",176325776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.min-w-full.text-3xl.pb-2","h3.min-w-full.text-3xl.pb-2",-1433984796),"Extras"], null),(function (){var iter__4622__auto__ = (function city_encounters$views$home$Home_page_$_iter__29437(s__29438){
return (new cljs.core.LazySeq(null,(function (){
var s__29438__$1 = s__29438;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29438__$1);
if(temp__5753__auto__){
var s__29438__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29438__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__29438__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__29440 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__29439 = (0);
while(true){
if((i__29439 < size__4621__auto__)){
var outcome = cljs.core._nth(c__4620__auto__,i__29439);
cljs.core.chunk_append(b__29440,(function (){var is_in_list_QMARK_ = cljs.core.some(((function (i__29439,outcome,c__4620__auto__,size__4621__auto__,b__29440,s__29438__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes){
return (function (p1__29428_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outcome,p1__29428_SHARP_);
});})(i__29439,outcome,c__4620__auto__,size__4621__auto__,b__29440,s__29438__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes))
,extra_outcomes);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.components.Button.Button,outcome,is_in_list_QMARK_,((function (i__29439,is_in_list_QMARK_,outcome,c__4620__auto__,size__4621__auto__,b__29440,s__29438__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes){
return (function (){
return city_encounters.views.home.set_extra_outcomes(outcome,cljs.core.not(is_in_list_QMARK_));
});})(i__29439,is_in_list_QMARK_,outcome,c__4620__auto__,size__4621__auto__,b__29440,s__29438__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),outcome], null));
})());

var G__29443 = (i__29439 + (1));
i__29439 = G__29443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29440),city_encounters$views$home$Home_page_$_iter__29437(cljs.core.chunk_rest(s__29438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29440),null);
}
} else {
var outcome = cljs.core.first(s__29438__$2);
return cljs.core.cons((function (){var is_in_list_QMARK_ = cljs.core.some(((function (outcome,s__29438__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes){
return (function (p1__29428_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outcome,p1__29428_SHARP_);
});})(outcome,s__29438__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes))
,extra_outcomes);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.components.Button.Button,outcome,is_in_list_QMARK_,((function (is_in_list_QMARK_,outcome,s__29438__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes){
return (function (){
return city_encounters.views.home.set_extra_outcomes(outcome,cljs.core.not(is_in_list_QMARK_));
});})(is_in_list_QMARK_,outcome,s__29438__$2,temp__5753__auto__,encounter,current_size,current_outcome,extra_outcomes,is_loading_QMARK_,active_page,saved_outcomes))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),outcome], null));
})(),city_encounters$views$home$Home_page_$_iter__29437(cljs.core.rest(s__29438__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(city_encounters.views.home.OUTCOMES);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.Button__generate.text-xl.text-white.rounded.uppercase.mt-4","button.Button__generate.text-xl.text-white.rounded.uppercase.mt-4",221711607),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return city_encounters.views.home.get_encounter(current_size,current_outcome,extra_outcomes);
})], null),"Generate"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home__options__bottom.text-center.flex.items-center.flex-col.justify-center","div.Home__options__bottom.text-center.flex.items-center.flex-col.justify-center",1452381104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-encounter","set-encounter",-1498067629),null], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-white.text-xl.flex-grow-0","h3.text-white.text-xl.flex-grow-0",-1920240656),"New Encounter?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true",new cljs.core.Keyword(null,"focusable","focusable",1031236480),"false",new cljs.core.Keyword(null,"role","role",-736691072),"img",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"15px"], null),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 320 512"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"d","d",1972142424),"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home__options__bottom__border","div.Home__options__bottom__border",868539974)], null)], null)], null),(cljs.core.truth_(is_loading_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.components.Loader.Loader], null):(cljs.core.truth_(encounter)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.components.Results.Results,encounter,saved_outcomes], null):null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_encounters.components.Nav.Nav], null)], null);
});

//# sourceMappingURL=city_encounters.views.home.js.map

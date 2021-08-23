goog.provide('city_encounters.services.api');
city_encounters.services.api.get_random_encouner = (function city_encounters$services$api$get_random_encouner(sizes,outcomes){
var c__32697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_43083){
var state_val_43084 = (state_43083[(1)]);
if((state_val_43084 === (1))){
var inst_43075 = [city_encounters.config.API_URL,"city-encounter?size=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sizes),"&outcomes=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(outcomes)].join('');
var inst_43076 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_43077 = [false];
var inst_43078 = cljs.core.PersistentHashMap.fromArrays(inst_43076,inst_43077);
var inst_43079 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_43075,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43078], 0));
var state_43083__$1 = state_43083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43083__$1,(2),inst_43079);
} else {
if((state_val_43084 === (2))){
var inst_43081 = (state_43083[(2)]);
var state_43083__$1 = state_43083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43083__$1,inst_43081);
} else {
return null;
}
}
});
return (function() {
var city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto__ = null;
var city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto____0 = (function (){
var statearr_43085 = [null,null,null,null,null,null,null];
(statearr_43085[(0)] = city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto__);

(statearr_43085[(1)] = (1));

return statearr_43085;
});
var city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto____1 = (function (state_43083){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_43083);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e43086){var ex__32468__auto__ = e43086;
var statearr_43087_43090 = state_43083;
(statearr_43087_43090[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_43083[(4)]))){
var statearr_43088_43091 = state_43083;
(statearr_43088_43091[(1)] = cljs.core.first((state_43083[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43092 = state_43083;
state_43083 = G__43092;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto__ = function(state_43083){
switch(arguments.length){
case 0:
return city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto____0.call(this);
case 1:
return city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto____1.call(this,state_43083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto____0;
city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto____1;
return city_encounters$services$api$get_random_encouner_$_state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_43089 = f__32698__auto__();
(statearr_43089[(6)] = c__32697__auto__);

return statearr_43089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));

return c__32697__auto__;
});

//# sourceMappingURL=city_encounters.services.api.js.map

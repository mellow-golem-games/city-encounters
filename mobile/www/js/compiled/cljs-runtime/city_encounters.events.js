goog.provide('city_encounters.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("city-encounters.events","initialize-db","city-encounters.events/initialize-db",1648305883),(function (_,___$1){
return city_encounters.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (_cofx,p__29109){
var vec__29110 = p__29109;
var seq__29111 = cljs.core.seq(vec__29110);
var first__29112 = cljs.core.first(seq__29111);
var seq__29111__$1 = cljs.core.next(seq__29111);
var _ = first__29112;
var route = seq__29111__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate!","navigate!",79998348),route], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate!","navigate!",79998348),(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigated","navigated",540897836),(function (db,p__29113){
var vec__29114 = p__29113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29114,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29114,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-size","set-current-size",2113280238),(function (db,p__29117){
var vec__29118 = p__29117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29118,(0),null);
var current_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29118,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-size","current-size",1609818719),current_size], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-outcome","set-current-outcome",-1305037972),(function (db,p__29121){
var vec__29122 = p__29121;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29122,(0),null);
var current_outcome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29122,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-outcome","current-outcome",1819761040),current_outcome], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-extra-outcome","add-extra-outcome",184554128),(function (db,p__29125){
var vec__29126 = p__29125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29126,(0),null);
var outcome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29126,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"extra-outcomes","extra-outcomes",1378780109),cljs.core.conj,outcome);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-extra-outcome","remove-extra-outcome",-1496711294),(function (db,p__29130){
var vec__29131 = p__29130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29131,(0),null);
var outcome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29131,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"extra-outcomes","extra-outcomes",1378780109),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,(function (p1__29129_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29129_SHARP_,outcome);
})));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-is-loading","set-is-loading",1042437358),(function (db,p__29134){
var vec__29135 = p__29134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29135,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29135,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-loading","is-loading",-1729867543),val], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-encounter","set-encounter",-1498067629),(function (db,p__29138){
var vec__29139 = p__29138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29139,(0),null);
var encounter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29139,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encounter","encounter",726495847),encounter], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__29142){
var vec__29143 = p__29142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29143,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29143,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-page","active-page",370357330),val], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-new-outcome","set-new-outcome",-1471639933),(function (db,p__29146){
var vec__29147 = p__29146;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29147,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29147,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-outcomes","saved-outcomes",927462452)], null),cljs.core.conj,val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-saved-outcomes","set-saved-outcomes",-1439582232),(function (db,p__29150){
var vec__29151 = p__29150;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29151,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29151,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"saved-outcomes","saved-outcomes",927462452),val], null));
}));

//# sourceMappingURL=city_encounters.events.js.map

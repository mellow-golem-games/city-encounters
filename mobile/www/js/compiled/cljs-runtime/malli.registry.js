goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_39667 = (function (this$,type){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (malli.registry._schema[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4522__auto__.call(null,this$,type));
} else {
var m__4519__auto__ = (malli.registry._schema["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4519__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_39667(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_39676 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (malli.registry._schemas[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (malli.registry._schemas["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_39676(this$);
}
});

malli.registry.simple_registry = (function malli$registry$simple_registry(schemas){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry39583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39583 = (function (schemas,meta39584){
this.schemas = schemas;
this.meta39584 = meta39584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39585,meta39584__$1){
var self__ = this;
var _39585__$1 = this;
return (new malli.registry.t_malli$registry39583(self__.schemas,meta39584__$1));
}));

(malli.registry.t_malli$registry39583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39585){
var self__ = this;
var _39585__$1 = this;
return self__.meta39584;
}));

(malli.registry.t_malli$registry39583.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39583.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.schemas,type);
}));

(malli.registry.t_malli$registry39583.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schemas;
}));

(malli.registry.t_malli$registry39583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null),new cljs.core.Symbol(null,"meta39584","meta39584",1603595694,null)], null);
}));

(malli.registry.t_malli$registry39583.cljs$lang$type = true);

(malli.registry.t_malli$registry39583.cljs$lang$ctorStr = "malli.registry/t_malli$registry39583");

(malli.registry.t_malli$registry39583.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry39583");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39583.
 */
malli.registry.__GT_t_malli$registry39583 = (function malli$registry$simple_registry_$___GT_t_malli$registry39583(schemas__$1,meta39584){
return (new malli.registry.t_malli$registry39583(schemas__$1,meta39584));
});

}

return (new malli.registry.t_malli$registry39583(schemas,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
return null;
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((malli.registry.type === "custom")){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});
malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry39596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39596 = (function (meta39597){
this.meta39597 = meta39597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39598,meta39597__$1){
var self__ = this;
var _39598__$1 = this;
return (new malli.registry.t_malli$registry39596(meta39597__$1));
}));

(malli.registry.t_malli$registry39596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39598){
var self__ = this;
var _39598__$1 = this;
return self__.meta39597;
}));

(malli.registry.t_malli$registry39596.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39596.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry39596.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry39596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39597","meta39597",692498089,null)], null);
}));

(malli.registry.t_malli$registry39596.cljs$lang$type = true);

(malli.registry.t_malli$registry39596.cljs$lang$ctorStr = "malli.registry/t_malli$registry39596");

(malli.registry.t_malli$registry39596.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry39596");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39596.
 */
malli.registry.__GT_t_malli$registry39596 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry39596(meta39597){
return (new malli.registry.t_malli$registry39596(meta39597));
});

}

return (new malli.registry.t_malli$registry39596(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39700 = arguments.length;
var i__4830__auto___39701 = (0);
while(true){
if((i__4830__auto___39701 < len__4829__auto___39700)){
args__4835__auto__.push((arguments[i__4830__auto___39701]));

var G__39702 = (i__4830__auto___39701 + (1));
i__4830__auto___39701 = G__39702;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry39601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39601 = (function (_QMARK_registries,registries,meta39602){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta39602 = meta39602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39603,meta39602__$1){
var self__ = this;
var _39603__$1 = this;
return (new malli.registry.t_malli$registry39601(self__._QMARK_registries,self__.registries,meta39602__$1));
}));

(malli.registry.t_malli$registry39601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39603){
var self__ = this;
var _39603__$1 = this;
return self__.meta39602;
}));

(malli.registry.t_malli$registry39601.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39601.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__39599_SHARP_){
return malli.registry._schema(p1__39599_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry39601.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry39601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta39602","meta39602",-1714801844,null)], null);
}));

(malli.registry.t_malli$registry39601.cljs$lang$type = true);

(malli.registry.t_malli$registry39601.cljs$lang$ctorStr = "malli.registry/t_malli$registry39601");

(malli.registry.t_malli$registry39601.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry39601");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39601.
 */
malli.registry.__GT_t_malli$registry39601 = (function malli$registry$__GT_t_malli$registry39601(_QMARK_registries__$1,registries__$1,meta39602){
return (new malli.registry.t_malli$registry39601(_QMARK_registries__$1,registries__$1,meta39602));
});

}

return (new malli.registry.t_malli$registry39601(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq39600){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39600));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry39604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39604 = (function (db,meta39605){
this.db = db;
this.meta39605 = meta39605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39606,meta39605__$1){
var self__ = this;
var _39606__$1 = this;
return (new malli.registry.t_malli$registry39604(self__.db,meta39605__$1));
}));

(malli.registry.t_malli$registry39604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39606){
var self__ = this;
var _39606__$1 = this;
return self__.meta39605;
}));

(malli.registry.t_malli$registry39604.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39604.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.db),type);
}));

(malli.registry.t_malli$registry39604.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.db);
}));

(malli.registry.t_malli$registry39604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta39605","meta39605",316283763,null)], null);
}));

(malli.registry.t_malli$registry39604.cljs$lang$type = true);

(malli.registry.t_malli$registry39604.cljs$lang$ctorStr = "malli.registry/t_malli$registry39604");

(malli.registry.t_malli$registry39604.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry39604");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39604.
 */
malli.registry.__GT_t_malli$registry39604 = (function malli$registry$mutable_registry_$___GT_t_malli$registry39604(db__$1,meta39605){
return (new malli.registry.t_malli$registry39604(db__$1,meta39605));
});

}

return (new malli.registry.t_malli$registry39604(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry39610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39610 = (function (meta39611){
this.meta39611 = meta39611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39612,meta39611__$1){
var self__ = this;
var _39612__$1 = this;
return (new malli.registry.t_malli$registry39610(meta39611__$1));
}));

(malli.registry.t_malli$registry39610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39612){
var self__ = this;
var _39612__$1 = this;
return self__.meta39611;
}));

(malli.registry.t_malli$registry39610.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39610.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(malli.registry._STAR_registry_STAR_,type);
}));

(malli.registry.t_malli$registry39610.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._STAR_registry_STAR_;
}));

(malli.registry.t_malli$registry39610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39611","meta39611",-1144477293,null)], null);
}));

(malli.registry.t_malli$registry39610.cljs$lang$type = true);

(malli.registry.t_malli$registry39610.cljs$lang$ctorStr = "malli.registry/t_malli$registry39610");

(malli.registry.t_malli$registry39610.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry39610");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39610.
 */
malli.registry.__GT_t_malli$registry39610 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry39610(meta39611){
return (new malli.registry.t_malli$registry39610(meta39611));
});

}

return (new malli.registry.t_malli$registry39610(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry39617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39617 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta39618){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta39618 = meta39618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39619,meta39618__$1){
var self__ = this;
var _39619__$1 = this;
return (new malli.registry.t_malli$registry39617(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta39618__$1));
}));

(malli.registry.t_malli$registry39617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39619){
var self__ = this;
var _39619__$1 = this;
return self__.meta39618;
}));

(malli.registry.t_malli$registry39617.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39617.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4223__auto__ = (function (){var fexpr__39625 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__39625.cljs$core$IFn$_invoke$arity$1 ? fexpr__39625.cljs$core$IFn$_invoke$arity$1(name) : fexpr__39625.call(null,name));
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var temp__5753__auto__ = (function (){var G__39626 = name;
var G__39627 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__39626,G__39627) : self__.provider.call(null,G__39626,G__39627));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var schema = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry39617.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry39617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta39618","meta39618",-1953793039,null)], null);
}));

(malli.registry.t_malli$registry39617.cljs$lang$type = true);

(malli.registry.t_malli$registry39617.cljs$lang$ctorStr = "malli.registry/t_malli$registry39617");

(malli.registry.t_malli$registry39617.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.registry/t_malli$registry39617");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39617.
 */
malli.registry.__GT_t_malli$registry39617 = (function malli$registry$lazy_registry_$___GT_t_malli$registry39617(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta39618){
return (new malli.registry.t_malli$registry39617(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta39618));
});

}

return (new malli.registry.t_malli$registry39617(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
})()
], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map

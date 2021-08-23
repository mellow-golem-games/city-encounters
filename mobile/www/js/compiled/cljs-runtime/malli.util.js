goog.provide('malli.util');
malli.util.equals = (function malli$util$equals(var_args){
var G__41743 = arguments.length;
switch (G__41743) {
case 2:
return malli.util.equals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.equals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.equals.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.equals.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.equals.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema1,options),malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema2,options));
}));

(malli.util.equals.cljs$lang$maxFixedArity = 3);

malli.util._simplify_map_entry = (function malli$util$_simplify_map_entry(p__41750){
var vec__41752 = p__41750;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41752,(0),null);
var _QMARK_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41752,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41752,(2),null);
if(cljs.core.not(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,_QMARK_p], null);
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = _QMARK_p;
if(cljs.core.truth_(and__4221__auto__)){
return ((new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(_QMARK_p))));
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
} else {
if(cljs.core.not(cljs.core.seq(_QMARK_p))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
} else {
if(new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === false){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_p,new cljs.core.Keyword(null,"optional","optional",2053951509)),s], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,_QMARK_p,s], null);

}
}
}
}
});
malli.util._required_map_entry_QMARK_ = (function malli$util$_required_map_entry_QMARK_(p__41761){
var vec__41762 = p__41761;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41762,(0),null);
var _QMARK_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41762,(1),null);
return (!(((cljs.core.map_QMARK_(_QMARK_p)) && (new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === true))));
});
malli.util._entry = (function malli$util$_entry(p__41774,p__41775,merge_required,merge,options){
var vec__41776 = p__41774;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41776,(0),null);
var _QMARK_p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41776,(1),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41776,(2),null);
var e1 = vec__41776;
var vec__41779 = p__41775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41779,(0),null);
var _QMARK_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41779,(1),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41779,(2),null);
var e2 = vec__41779;
var required = (function (){var G__41782 = malli.util._required_map_entry_QMARK_(e1);
var G__41783 = malli.util._required_map_entry_QMARK_(e2);
return (merge_required.cljs$core$IFn$_invoke$arity$2 ? merge_required.cljs$core$IFn$_invoke$arity$2(G__41782,G__41783) : merge_required.call(null,G__41782,G__41783));
})();
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_QMARK_p1,_QMARK_p2], 0));
return malli.util._simplify_map_entry(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"optional","optional",2053951509),cljs.core.not(required)),(merge.cljs$core$IFn$_invoke$arity$3 ? merge.cljs$core$IFn$_invoke$arity$3(s1,s2,options) : merge.call(null,s1,s2,options))], null));
});
malli.util._open_map_QMARK_ = (function malli$util$_open_map_QMARK_(schema,options){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.type.cljs$core$IFn$_invoke$arity$2(schema,options))) && ((!(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema)) === false))));
});
/**
 * Prewalks the Schema recursively with a 3-arity fn [schema path options], returns with
 *   and as soon as the function returns non-null value.
 */
malli.util.find_first = (function malli$util$find_first(var_args){
var G__41792 = arguments.length;
switch (G__41792) {
case 2:
return malli.util.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.find_first.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.find_first.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.util.find_first.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,f,null);
}));

(malli.util.find_first.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
malli.core._walk(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),(function (){
if((typeof malli !== 'undefined') && (typeof malli.util !== 'undefined') && (typeof malli.util.t_malli$util41800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.Walker}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.util.t_malli$util41800 = (function (_QMARK_schema,f,options,result,meta41801){
this._QMARK_schema = _QMARK_schema;
this.f = f;
this.options = options;
this.result = result;
this.meta41801 = meta41801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.util.t_malli$util41800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41802,meta41801__$1){
var self__ = this;
var _41802__$1 = this;
return (new malli.util.t_malli$util41800(self__._QMARK_schema,self__.f,self__.options,self__.result,meta41801__$1));
}));

(malli.util.t_malli$util41800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41802){
var self__ = this;
var _41802__$1 = this;
return self__.meta41801;
}));

(malli.util.t_malli$util41800.prototype.malli$core$Walker$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util41800.prototype.malli$core$Walker$_accept$arity$4 = (function (_,s,path,options__$1){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var or__4223__auto__ = cljs.core.deref(self__.result);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.reset_BANG_(self__.result,(self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(s,path,options__$1) : self__.f.call(null,s,path,options__$1)));
}
})());
}));

(malli.util.t_malli$util41800.prototype.malli$core$Walker$_inner$arity$4 = (function (this$,s,path,options__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(cljs.core.deref(self__.result))){
return malli.core._walk(s,this$__$1,path,options__$1);
} else {
return null;
}
}));

(malli.util.t_malli$util41800.prototype.malli$core$Walker$_outer$arity$5 = (function (_,___$1,___$2,___$3,___$4){
var self__ = this;
var ___$5 = this;
return null;
}));

(malli.util.t_malli$util41800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?schema","?schema",-271534072,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"meta41801","meta41801",1510674794,null)], null);
}));

(malli.util.t_malli$util41800.cljs$lang$type = true);

(malli.util.t_malli$util41800.cljs$lang$ctorStr = "malli.util/t_malli$util41800");

(malli.util.t_malli$util41800.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.util/t_malli$util41800");
}));

/**
 * Positional factory function for malli.util/t_malli$util41800.
 */
malli.util.__GT_t_malli$util41800 = (function malli$util$__GT_t_malli$util41800(_QMARK_schema__$1,f__$1,options__$1,result__$1,meta41801){
return (new malli.util.t_malli$util41800(_QMARK_schema__$1,f__$1,options__$1,result__$1,meta41801));
});

}

return (new malli.util.t_malli$util41800(_QMARK_schema,f,options,result,cljs.core.PersistentArrayMap.EMPTY));
})()
,cljs.core.PersistentVector.EMPTY,options);

return cljs.core.deref(result);
}));

(malli.util.find_first.cljs$lang$maxFixedArity = 3);

/**
 * Merges two schemas into one with the following rules:
 * 
 *   * if either schemas is `nil`, the other one is used, regardless of value
 *   * with two :map schemas, both keys and values are merged
 *   * with two :map entries, `:merge-entries` fn is used (default last one wins)
 *   * with any other schemas, `:merge-default` fn is used (default last one wins)
 * 
 *   | key               | description
 *   | ------------------|-------------
 *   | `:merge-default`  | `schema1 schema2 options -> schema` fn to merge unknown entries
 *   | `:merge-required` | `boolean boolean -> boolean` fn to resolve how required keys are merged
 */
malli.util.merge = (function malli$util$merge(var_args){
var G__41813 = arguments.length;
switch (G__41813) {
case 2:
return malli.util.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.merge.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.merge.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
var vec__41826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_schema1)?malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema1,options)):null),(cljs.core.truth_(_QMARK_schema2)?malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema2,options)):null)], null);
var schema1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41826,(0),null);
var schema2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41826,(1),null);
var schemas = vec__41826;
var map__41829 = options;
var map__41829__$1 = cljs.core.__destructure_map(map__41829);
var merge_default = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41829__$1,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083),(function (_,s2,___$1){
return s2;
}));
var merge_required = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41829__$1,new cljs.core.Keyword(null,"merge-required","merge-required",75277811),(function (_,r2){
return r2;
}));
if(cljs.core.not(schema1)){
return schema2;
} else {
if(cljs.core.not(schema2)){
return schema1;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.type.cljs$core$IFn$_invoke$arity$1(schema2)], 0))){
return (merge_default.cljs$core$IFn$_invoke$arity$3 ? merge_default.cljs$core$IFn$_invoke$arity$3(schema1,schema2,options) : merge_default.call(null,schema1,schema2,options));
} else {
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema1),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema2)], 0));
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__41842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null);
if(cljs.core.truth_(p)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41842,p);
} else {
return G__41842;
}
})(),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__41846,p__41847){
var map__41849 = p__41846;
var map__41849__$1 = cljs.core.__destructure_map(map__41849);
var acc = map__41849__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41849__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vec__41850 = p__41847;
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41850,(0),null);
var e2 = vec__41850;
if(cljs.core.truth_((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(k2) : keys.call(null,k2)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_SINGLEQUOTE_,p__41860){
var vec__41861 = p__41860;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41861,(0),null);
var e1 = vec__41861;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_SINGLEQUOTE_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))?malli.util._entry(e1,e2,merge_required,malli.util.merge,options):e1));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(acc)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.conj,e2),new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.conj,k2);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(malli.core.children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schemas], 0))))),options);

}
}
}
}));

(malli.util.merge.cljs$lang$maxFixedArity = 3);

/**
 * Union of two schemas. See [[merge]] for more details.
 */
malli.util.union = (function malli$util$union(var_args){
var G__41881 = arguments.length;
switch (G__41881) {
case 2:
return malli.util.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.union.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.union.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.union.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.union.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
var merge_default = (function (s1,s2,options__$1){
if(cljs.core.truth_(malli.util.equals.cljs$core$IFn$_invoke$arity$2(s1,s2))){
return s1;
} else {
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),s1,s2], null),options__$1);
}
});
var merge_required = (function (r1,r2){
var and__4221__auto__ = r1;
if(cljs.core.truth_(and__4221__auto__)){
return r2;
} else {
return and__4221__auto__;
}
});
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,merge_default)),new cljs.core.Keyword(null,"merge-required","merge-required",75277811),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,merge_required)));
}));

(malli.util.union.cljs$lang$maxFixedArity = 3);

/**
 * Returns a Schema instance with updated properties.
 */
malli.util.update_properties = (function malli$util$update_properties(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42186 = arguments.length;
var i__4830__auto___42187 = (0);
while(true){
if((i__4830__auto___42187 < len__4829__auto___42186)){
args__4835__auto__.push((arguments[i__4830__auto___42187]));

var G__42188 = (i__4830__auto___42187 + (1));
i__4830__auto___42187 = G__42188;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic = (function (schema,f,args){
var properties = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),args);
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(malli.core.type.cljs$core$IFn$_invoke$arity$1(schema),((cljs.core.seq(properties))?properties:null),malli.core.children.cljs$core$IFn$_invoke$arity$1(schema),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema));
}));

(malli.util.update_properties.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(malli.util.update_properties.cljs$lang$applyTo = (function (seq41885){
var G__41886 = cljs.core.first(seq41885);
var seq41885__$1 = cljs.core.next(seq41885);
var G__41887 = cljs.core.first(seq41885__$1);
var seq41885__$2 = cljs.core.next(seq41885__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41886,G__41887,seq41885__$2);
}));

/**
 * Closes recursively all :map schemas by adding `{:closed true}`
 *   property, unless schema explicitely open with `{:closed false}`
 */
malli.util.closed_schema = (function malli$util$closed_schema(var_args){
var G__41891 = arguments.length;
switch (G__41891) {
case 1:
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.core.schema_walker((function (schema){
if(malli.util._open_map_QMARK_(schema,options)){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed","closed",-919675359),true], 0));
} else {
return schema;
}
})),options);
}));

(malli.util.closed_schema.cljs$lang$maxFixedArity = 2);

/**
 * Closes recursively all :map schemas by removing `:closed`
 *   property, unless schema explicitely open with `{:closed false}`
 */
malli.util.open_schema = (function malli$util$open_schema(var_args){
var G__41896 = arguments.length;
switch (G__41896) {
case 1:
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.open_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.open_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.core.schema_walker((function (schema){
if(malli.util._open_map_QMARK_(schema,options)){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed","closed",-919675359)], 0));
} else {
return schema;
}
})),options);
}));

(malli.util.open_schema.cljs$lang$maxFixedArity = 2);

/**
 * Returns all subschemas for unique paths as a vector of maps with :schema, :path and :in keys.
 * Walks over :schema references and top-level :refs. See [[malli.core/-walk]] for all options.
 */
malli.util.subschemas = (function malli$util$subschemas(var_args){
var G__41901 = arguments.length;
switch (G__41901) {
case 1:
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.subschemas.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.subschemas.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
var options__$1 = (function (){var ref = (function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema));
if(and__4221__auto__){
return malli.core._ref(schema);
} else {
return and__4221__auto__;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.core","walk-schema-refs","malli.core/walk-schema-refs",-1140065954),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,true)),new cljs.core.Keyword("malli.core","walk-refs","malli.core/walk-refs",755904802),(function (f){
return (function (p1__41899_SHARP_){
var or__4223__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref,p1__41899_SHARP_);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__41902 = malli.core._boolean_fn(f);
return (fexpr__41902.cljs$core$IFn$_invoke$arity$1 ? fexpr__41902.cljs$core$IFn$_invoke$arity$1(p1__41899_SHARP_) : fexpr__41902.call(null,p1__41899_SHARP_));
}
});
}));
})();
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
malli.util.find_first.cljs$core$IFn$_invoke$arity$3(schema,(function (s,p,_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"in","in",-1531184865),(malli.util.path__GT_in.cljs$core$IFn$_invoke$arity$2 ? malli.util.path__GT_in.cljs$core$IFn$_invoke$arity$2(schema,p) : malli.util.path__GT_in.call(null,schema,p)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

return null;
}),options__$1);

return cljs.core.deref(state);
}));

(malli.util.subschemas.cljs$lang$maxFixedArity = 2);

/**
 * Returns a sequence of distict (f x) values)
 */
malli.util.distinct_by = (function malli$util$distinct_by(f,coll){
var seen = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.not((function (){var fexpr__41904 = cljs.core.deref(seen);
return (fexpr__41904.cljs$core$IFn$_invoke$arity$1 ? fexpr__41904.cljs$core$IFn$_invoke$arity$1(v) : fexpr__41904.call(null,v));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,v);
} else {
return null;
}
}),coll);
});
/**
 * Returns a value path for a given Schema and schema path
 */
malli.util.path__GT_in = (function malli$util$path__GT_in(schema,path){
var i = (0);
var s = schema;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var or__4223__auto__ = (function (){var and__4221__auto__ = (i >= cljs.core.count(path));
if(and__4221__auto__){
return acc;
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var G__42203 = (i + (1));
var G__42204 = malli.core._get(s,(path.cljs$core$IFn$_invoke$arity$1 ? path.cljs$core$IFn$_invoke$arity$1(i) : path.call(null,i)),null);
var G__42205 = (function (){var G__41907 = acc;
if(cljs.core.truth_(malli.core._keep(s))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41907,(path.cljs$core$IFn$_invoke$arity$1 ? path.cljs$core$IFn$_invoke$arity$1(i) : path.call(null,i)));
} else {
return G__41907;
}
})();
i = G__42203;
s = G__42204;
acc = G__42205;
continue;
}
break;
}
});
/**
 * Returns a vector of schema paths for a given Schema and value path
 */
malli.util.in__GT_paths = (function malli$util$in__GT_paths(schema,in$){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var in_equals = (function (p__41909,p__41910){
while(true){
var vec__41911 = p__41909;
var seq__41912 = cljs.core.seq(vec__41911);
var first__41913 = cljs.core.first(seq__41912);
var seq__41912__$1 = cljs.core.next(seq__41912);
var x = first__41913;
var xs = seq__41912__$1;
var vec__41914 = p__41910;
var seq__41915 = cljs.core.seq(vec__41914);
var first__41916 = cljs.core.first(seq__41915);
var seq__41915__$1 = cljs.core.next(seq__41915);
var y = first__41916;
var ys = seq__41915__$1;
if(cljs.core.truth_((function (){var and__4221__auto__ = x;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
} else {
return and__4221__auto__;
}
})())){
var G__42208 = xs;
var G__42209 = ys;
p__41909 = G__42208;
p__41910 = G__42209;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.core","in","malli.core/in",-1208578537),x)){
var G__42210 = xs;
var G__42211 = ys;
p__41909 = G__42210;
p__41910 = G__42211;
continue;
} else {
return null;
}
}
}
break;
}
});
var parent_exists = (function (v1,v2){
var i = (function (){var x__4309__auto__ = cljs.core.count(v1);
var y__4310__auto__ = cljs.core.count(v2);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v1,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v2,(0),i));
});
malli.util.find_first.cljs$core$IFn$_invoke$arity$2(schema,(function (_,path,___$1){
if(cljs.core.truth_((function (){var and__4221__auto__ = in_equals(malli.util.path__GT_in(schema,path),in$);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some((function (p1__41908_SHARP_){
return parent_exists(path,p1__41908_SHARP_);
}),cljs.core.deref(state)));
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.conj,path);

return null;
} else {
return null;
}
}));

return cljs.core.deref(state);
});
/**
 * Transforms entries with f.
 */
malli.util.transform_entries = (function malli$util$transform_entries(_QMARK_schema,f,options){
var schema = malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options));
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$3(malli.core.type.cljs$core$IFn$_invoke$arity$1(schema),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),(function (){var G__41922 = malli.core.children.cljs$core$IFn$_invoke$arity$1(schema);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41922) : f.call(null,G__41922));
})());
});
/**
 * Makes map keys optional.
 */
malli.util.optional_keys = (function malli$util$optional_keys(var_args){
var G__41926 = arguments.length;
switch (G__41926) {
case 1:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,null,null);
}));

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,_QMARK_keys){
var vec__41928 = ((cljs.core.map_QMARK_(_QMARK_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,_QMARK_keys], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_keys,null], null));
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41928,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41928,(1),null);
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,options);
}));

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var accept = (cljs.core.truth_(keys)?cljs.core.set(keys):cljs.core.constantly(true));
var mapper = (function (p__41931){
var vec__41932 = p__41931;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41932,(0),null);
var e = vec__41932;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(k) : accept.call(null,k)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(e,(1),cljs.core.assoc,new cljs.core.Keyword(null,"optional","optional",2053951509),true);
} else {
return e;
}
});
return malli.util.transform_entries(_QMARK_schema,(function (p1__41924_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mapper,p1__41924_SHARP_);
}),options);
}));

(malli.util.optional_keys.cljs$lang$maxFixedArity = 3);

/**
 * Makes map keys required.
 */
malli.util.required_keys = (function malli$util$required_keys(var_args){
var G__41938 = arguments.length;
switch (G__41938) {
case 1:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,null,null);
}));

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,_QMARK_keys){
var vec__41939 = ((cljs.core.map_QMARK_(_QMARK_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,_QMARK_keys], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_keys,null], null));
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41939,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41939,(1),null);
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,options);
}));

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var accept = (cljs.core.truth_(keys)?cljs.core.set(keys):cljs.core.constantly(true));
var required = (function (p){
var p_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"optional","optional",2053951509));
if(cljs.core.seq(p_SINGLEQUOTE_)){
return p_SINGLEQUOTE_;
} else {
return null;
}
});
var mapper = (function (p__41943){
var vec__41948 = p__41943;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41948,(0),null);
var e = vec__41948;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(k) : accept.call(null,k)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,(1),required);
} else {
return e;
}
});
return malli.util.transform_entries(_QMARK_schema,(function (p1__41935_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mapper,p1__41935_SHARP_);
}),options);
}));

(malli.util.required_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/select-keys]], but for MapSchemas.
 */
malli.util.select_keys = (function malli$util$select_keys(var_args){
var G__41953 = arguments.length;
switch (G__41953) {
case 2:
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.select_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,keys){
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,null);
}));

(malli.util.select_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var key_set = cljs.core.set(keys);
return malli.util.transform_entries(_QMARK_schema,(function (p1__41951_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__41954){
var vec__41955 = p__41954;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41955,(0),null);
return (key_set.cljs$core$IFn$_invoke$arity$1 ? key_set.cljs$core$IFn$_invoke$arity$1(k) : key_set.call(null,k));
}),p1__41951_SHARP_);
}),options);
}));

(malli.util.select_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/dissoc]], but for MapSchemas.
 */
malli.util.dissoc = (function malli$util$dissoc(var_args){
var G__41964 = arguments.length;
switch (G__41964) {
case 2:
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.dissoc.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,key){
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,key,null);
}));

(malli.util.dissoc.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,key,options){
return malli.util.transform_entries(_QMARK_schema,(function (p1__41960_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41967){
var vec__41968 = p__41967;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41968,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,k);
}),p1__41960_SHARP_);
}),options);
}));

(malli.util.dissoc.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/get]], but for LensSchemas.
 */
malli.util.get = (function malli$util$get(var_args){
var G__41974 = arguments.length;
switch (G__41974) {
case 2:
return malli.util.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.get.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,k){
return malli.util.get.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,k,null,null);
}));

(malli.util.get.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,k,default$){
return malli.util.get.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,k,default$,null);
}));

(malli.util.get.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,k,default$,options){
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__4223__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.truth_(schema)){
return malli.core._get(schema,k,default$);
} else {
return null;
}
}));

(malli.util.get.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/assoc]], but for LensSchemas.
 */
malli.util.assoc = (function malli$util$assoc(var_args){
var G__41986 = arguments.length;
switch (G__41986) {
case 3:
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.assoc.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.assoc.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,key,value){
return malli.util.assoc.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,key,value,null);
}));

(malli.util.assoc.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,key,value,options){
return malli.core._set(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),key,value);
}));

(malli.util.assoc.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/update]], but for LensSchema instances.
 */
malli.util.update = (function malli$util$update(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42228 = arguments.length;
var i__4830__auto___42229 = (0);
while(true){
if((i__4830__auto___42229 < len__4829__auto___42228)){
args__4835__auto__.push((arguments[i__4830__auto___42229]));

var G__42231 = (i__4830__auto___42229 + (1));
i__4830__auto___42229 = G__42231;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return malli.util.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(malli.util.update.cljs$core$IFn$_invoke$arity$variadic = (function (schema,key,f,args){
return malli.core._set(schema,key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,malli.util.get.cljs$core$IFn$_invoke$arity$3(schema,key,malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema))),args));
}));

(malli.util.update.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(malli.util.update.cljs$lang$applyTo = (function (seq42001){
var G__42002 = cljs.core.first(seq42001);
var seq42001__$1 = cljs.core.next(seq42001);
var G__42003 = cljs.core.first(seq42001__$1);
var seq42001__$2 = cljs.core.next(seq42001__$1);
var G__42004 = cljs.core.first(seq42001__$2);
var seq42001__$3 = cljs.core.next(seq42001__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42002,G__42003,G__42004,seq42001__$3);
}));

/**
 * Like [[clojure.core/get-in]], but for LensSchemas.
 */
malli.util.get_in = (function malli$util$get_in(var_args){
var G__42007 = arguments.length;
switch (G__42007) {
case 2:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.get_in.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,ks){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,null,null);
}));

(malli.util.get_in.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,ks,default$){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,default$,null);
}));

(malli.util.get_in.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,p__42008,default$,options){
var vec__42009 = p__42008;
var seq__42010 = cljs.core.seq(vec__42009);
var first__42011 = cljs.core.first(seq__42010);
var seq__42010__$1 = cljs.core.next(seq__42010);
var k = first__42011;
var ks = seq__42010__$1;
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__4223__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.not(k)){
return schema;
} else {
var sentinel = ({});
var schema__$1 = malli.util.get.cljs$core$IFn$_invoke$arity$3(schema,k,sentinel);
if((schema__$1 === sentinel)){
return default$;
} else {
if(ks){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$3(schema__$1,ks,default$);
} else {
return schema__$1;

}
}
}
}));

(malli.util.get_in.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/assoc-in]], but for LensSchemas.
 */
malli.util.assoc_in = (function malli$util$assoc_in(var_args){
var G__42015 = arguments.length;
switch (G__42015) {
case 3:
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,ks,value){
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,value,null);
}));

(malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,p__42017,value,options){
var vec__42021 = p__42017;
var seq__42022 = cljs.core.seq(vec__42021);
var first__42023 = cljs.core.first(seq__42022);
var seq__42022__$1 = cljs.core.next(seq__42022);
var k = first__42023;
var ks = seq__42022__$1;
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3(schema,k,((ks)?malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3(malli.util.get.cljs$core$IFn$_invoke$arity$3(schema,k,malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema))),ks,value):value));
}));

(malli.util.assoc_in.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/update-in]], but for LensSchemas.
 */
malli.util.update_in = (function malli$util$update_in(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42235 = arguments.length;
var i__4830__auto___42236 = (0);
while(true){
if((i__4830__auto___42236 < len__4829__auto___42235)){
args__4835__auto__.push((arguments[i__4830__auto___42236]));

var G__42237 = (i__4830__auto___42236 + (1));
i__4830__auto___42236 = G__42237;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return malli.util.update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(malli.util.update_in.cljs$core$IFn$_invoke$arity$variadic = (function (schema,ks,f,args){
var up = (function malli$util$up(s,p__42032,f__$1,args__$1){
var vec__42033 = p__42032;
var seq__42034 = cljs.core.seq(vec__42033);
var first__42035 = cljs.core.first(seq__42034);
var seq__42034__$1 = cljs.core.next(seq__42034);
var k = first__42035;
var ks__$1 = seq__42034__$1;
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3(s,k,((ks__$1)?malli$util$up(malli.util.get.cljs$core$IFn$_invoke$arity$3(s,k,malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema))),ks__$1,f__$1,args__$1):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,malli.util.get.cljs$core$IFn$_invoke$arity$2(s,k),args__$1)));
});
return up(schema,ks,f,args);
}));

(malli.util.update_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(malli.util.update_in.cljs$lang$applyTo = (function (seq42024){
var G__42025 = cljs.core.first(seq42024);
var seq42024__$1 = cljs.core.next(seq42024);
var G__42026 = cljs.core.first(seq42024__$1);
var seq42024__$2 = cljs.core.next(seq42024__$1);
var G__42027 = cljs.core.first(seq42024__$2);
var seq42024__$3 = cljs.core.next(seq42024__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42025,G__42026,G__42027,seq42024__$3);
}));

malli.util._map_syntax_walker = (function malli$util$_map_syntax_walker(schema,_,children,___$1){
var properties = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var G__42043 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema)], null);
var G__42043__$1 = ((cljs.core.seq(properties))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42043,new cljs.core.Keyword(null,"properties","properties",685819552),properties):G__42043);
if(cljs.core.seq(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42043__$1,new cljs.core.Keyword(null,"children","children",-940561982),children);
} else {
return G__42043__$1;
}
});
malli.util.to_map_syntax = (function malli$util$to_map_syntax(var_args){
var G__42047 = arguments.length;
switch (G__42047) {
case 1:
return malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.util._map_syntax_walker,options);
}));

(malli.util.to_map_syntax.cljs$lang$maxFixedArity = 2);

malli.util.from_map_syntax = (function malli$util$from_map_syntax(var_args){
var G__42052 = arguments.length;
switch (G__42052) {
case 1:
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$1 = (function (m){
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2 = (function (p__42053,options){
var map__42054 = p__42053;
var map__42054__$1 = cljs.core.__destructure_map(map__42054);
var m = map__42054__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42054__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42054__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42054__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.map_QMARK_(m)){
var _LT__child = ((cljs.core.vector_QMARK_(cljs.core.first(children)))?(function (f){
return (function (p1__42049_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__42049_SHARP_,(2),f);
});
}):cljs.core.identity);
var vec__42055 = malli.core._properties_and_options(properties,options,malli.core._form);
var properties__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42055,(0),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42055,(1),null);
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(type,properties__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (){var G__42058 = (function (p1__42050_SHARP_){
return malli.util.from_map_syntax.cljs$core$IFn$_invoke$arity$2(p1__42050_SHARP_,options__$1);
});
return (_LT__child.cljs$core$IFn$_invoke$arity$1 ? _LT__child.cljs$core$IFn$_invoke$arity$1(G__42058) : _LT__child.call(null,G__42058));
})(),children),options__$1);
} else {
return m;
}
}));

(malli.util.from_map_syntax.cljs$lang$maxFixedArity = 2);

malli.util._reducing = (function malli$util$_reducing(f){
return (function (_,p__42065,options){
var vec__42066 = p__42065;
var seq__42067 = cljs.core.seq(vec__42066);
var first__42068 = cljs.core.first(seq__42067);
var seq__42067__$1 = cljs.core.next(seq__42067);
var first = first__42068;
var rest = seq__42067__$1;
var children = vec__42066;
var children__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42060_SHARP_){
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(p1__42060_SHARP_,options);
}),children);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [children__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.core.form,children__$1),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42061_SHARP_,p2__42062_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__42061_SHARP_,p2__42062_SHARP_,options) : f.call(null,p1__42061_SHARP_,p2__42062_SHARP_,options));
}),first,rest)], null);
});
});
malli.util._applying = (function malli$util$_applying(f){
return (function (_,children,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(children,(0),(function (p1__42070_SHARP_){
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(p1__42070_SHARP_,options);
})),cljs.core.update.cljs$core$IFn$_invoke$arity$3(children,(0),(function (p1__42071_SHARP_){
return malli.core.form.cljs$core$IFn$_invoke$arity$2(p1__42071_SHARP_,options);
})),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,options))], null);
});
});
malli.util._util_schema = (function malli$util$_util_schema(p__42099){
var map__42100 = p__42099;
var map__42100__$1 = cljs.core.__destructure_map(map__42100);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42100__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42100__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42100__$1,new cljs.core.Keyword(null,"max","max",61366548));
var childs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42100__$1,new cljs.core.Keyword(null,"childs","childs",-1293201887));
var type_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42100__$1,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42100__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if((typeof malli !== 'undefined') && (typeof malli.util !== 'undefined') && (typeof malli.util.t_malli$util42103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.IntoSchema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.util.t_malli$util42103 = (function (p__42099,map__42100,type,min,max,childs,type_properties,fn,meta42104){
this.p__42099 = p__42099;
this.map__42100 = map__42100;
this.type = type;
this.min = min;
this.max = max;
this.childs = childs;
this.type_properties = type_properties;
this.fn = fn;
this.meta42104 = meta42104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.util.t_malli$util42103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42105,meta42104__$1){
var self__ = this;
var _42105__$1 = this;
return (new malli.util.t_malli$util42103(self__.p__42099,self__.map__42100,self__.type,self__.min,self__.max,self__.childs,self__.type_properties,self__.fn,meta42104__$1));
}));

(malli.util.t_malli$util42103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42105){
var self__ = this;
var _42105__$1 = this;
return self__.meta42104;
}));

(malli.util.t_malli$util42103.prototype.malli$core$IntoSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util42103.prototype.malli$core$IntoSchema$_into_schema$arity$4 = (function (_,properties,children,options){
var self__ = this;
var ___$1 = this;
malli.core._check_children_BANG_(self__.type,properties,children,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),self__.min,new cljs.core.Keyword(null,"max","max",61366548),self__.max], null));

var vec__42108 = (function (){var G__42111 = properties;
var G__42112 = cljs.core.vec(children);
var G__42113 = options;
return (self__.fn.cljs$core$IFn$_invoke$arity$3 ? self__.fn.cljs$core$IFn$_invoke$arity$3(G__42111,G__42112,G__42113) : self__.fn.call(null,G__42111,G__42112,G__42113));
})();
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42108,(0),null);
var forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42108,(1),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42108,(2),null);
var walkable_childs = (cljs.core.truth_(self__.childs)?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children__$1,(0),self__.childs):children__$1);
var form = malli.core._create_form(self__.type,properties,forms);
if((typeof malli !== 'undefined') && (typeof malli.util !== 'undefined') && (typeof malli.util.t_malli$util42116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {malli.core.LensSchema}
 * @implements {malli.core.Schema}
 * @implements {malli.core.RefSchema}
 * @implements {cljs.core.IWithMeta}
*/
malli.util.t_malli$util42116 = (function (form,options,forms,properties,childs,schema,children,min,type_properties,walkable_childs,fn,_,map__42100,p__42099,vec__42108,type,max,meta42104,meta42117){
this.form = form;
this.options = options;
this.forms = forms;
this.properties = properties;
this.childs = childs;
this.schema = schema;
this.children = children;
this.min = min;
this.type_properties = type_properties;
this.walkable_childs = walkable_childs;
this.fn = fn;
this._ = _;
this.map__42100 = map__42100;
this.p__42099 = p__42099;
this.vec__42108 = vec__42108;
this.type = type;
this.max = max;
this.meta42104 = meta42104;
this.meta42117 = meta42117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.util.t_malli$util42116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42118,meta42117__$1){
var self__ = this;
var _42118__$1 = this;
return (new malli.util.t_malli$util42116(self__.form,self__.options,self__.forms,self__.properties,self__.childs,self__.schema,self__.children,self__.min,self__.type_properties,self__.walkable_childs,self__.fn,self__._,self__.map__42100,self__.p__42099,self__.vec__42108,self__.type,self__.max,self__.meta42104,meta42117__$1));
}));

(malli.util.t_malli$util42116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42118){
var self__ = this;
var _42118__$1 = this;
return self__.meta42117;
}));

(malli.util.t_malli$util42116.prototype.malli$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util42116.prototype.malli$core$Schema$_validator$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return malli.core._validator(self__.schema);
}));

(malli.util.t_malli$util42116.prototype.malli$core$Schema$_options$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.options;
}));

(malli.util.t_malli$util42116.prototype.malli$core$Schema$_transformer$arity$4 = (function (this$,transformer,method,options__$1){
var self__ = this;
var this$__$1 = this;
return malli.core._parent_children_transformer(this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.schema], null),transformer,method,options__$1);
}));

(malli.util.t_malli$util42116.prototype.malli$core$Schema$_walk$arity$4 = (function (this$,walker,path,options__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(malli.core._accept(walker,this$__$1,path,options__$1))){
return malli.core._outer(walker,this$__$1,path,malli.core._inner_indexed(walker,path,self__.walkable_childs,options__$1),options__$1);
} else {
return null;
}
}));

(malli.util.t_malli$util42116.prototype.malli$core$Schema$_properties$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.properties;
}));

(malli.util.t_malli$util42116.prototype.malli$core$Schema$_type$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.type;
}));

(malli.util.t_malli$util42116.prototype.malli$core$Schema$_children$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.children;
}));

(malli.util.t_malli$util42116.prototype.malli$core$Schema$_form$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.form;
}));

(malli.util.t_malli$util42116.prototype.malli$core$Schema$_explainer$arity$2 = (function (___$1,path){
var self__ = this;
var ___$2 = this;
return malli.core._explainer(self__.schema,path);
}));

(malli.util.t_malli$util42116.prototype.malli$core$Schema$_type_properties$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.type_properties;
}));

(malli.util.t_malli$util42116.prototype.malli$core$LensSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util42116.prototype.malli$core$LensSchema$_keep$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.util.t_malli$util42116.prototype.malli$core$LensSchema$_get$arity$3 = (function (___$1,key,default$){
var self__ = this;
var ___$2 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.children,key,default$);
}));

(malli.util.t_malli$util42116.prototype.malli$core$LensSchema$_set$arity$3 = (function (___$1,key,value){
var self__ = this;
var ___$2 = this;
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$3(self__.type,self__.properties,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.children,key,value));
}));

(malli.util.t_malli$util42116.prototype.malli$core$RefSchema$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util42116.prototype.malli$core$RefSchema$_ref$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(malli.util.t_malli$util42116.prototype.malli$core$RefSchema$_deref$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.schema;
}));

(malli.util.t_malli$util42116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"properties","properties",-1968616217,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"walkable-childs","walkable-childs",1399888171,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("malli.util","t_malli$util42103","malli.util/t_malli$util42103",776564586,null)], null)),new cljs.core.Symbol(null,"map__42100","map__42100",1450246768,null),new cljs.core.Symbol(null,"p__42099","p__42099",51222865,null),new cljs.core.Symbol(null,"vec__42108","vec__42108",565308115,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"meta42104","meta42104",-1402072451,null),new cljs.core.Symbol(null,"meta42117","meta42117",458245082,null)], null);
}));

(malli.util.t_malli$util42116.cljs$lang$type = true);

(malli.util.t_malli$util42116.cljs$lang$ctorStr = "malli.util/t_malli$util42116");

(malli.util.t_malli$util42116.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.util/t_malli$util42116");
}));

/**
 * Positional factory function for malli.util/t_malli$util42116.
 */
malli.util.__GT_t_malli$util42116 = (function malli$util$_util_schema_$___GT_t_malli$util42116(form__$1,options__$1,forms__$1,properties__$1,childs__$1,schema__$1,children__$2,min__$1,type_properties__$1,walkable_childs__$1,fn__$1,___$2,map__42100__$1,p__42099__$1,vec__42108__$1,type__$1,max__$1,meta42104__$1,meta42117){
return (new malli.util.t_malli$util42116(form__$1,options__$1,forms__$1,properties__$1,childs__$1,schema__$1,children__$2,min__$1,type_properties__$1,walkable_childs__$1,fn__$1,___$2,map__42100__$1,p__42099__$1,vec__42108__$1,type__$1,max__$1,meta42104__$1,meta42117));
});

}

return (new malli.util.t_malli$util42116(form,options,forms,properties,self__.childs,schema,children__$1,self__.min,self__.type_properties,walkable_childs,self__.fn,___$1,self__.map__42100,self__.p__42099,vec__42108,self__.type,self__.max,self__.meta42104,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863)], null)));
}));

(malli.util.t_malli$util42103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__42099","p__42099",51222865,null),new cljs.core.Symbol(null,"map__42100","map__42100",1450246768,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"type-properties","type-properties",-87820599,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"meta42104","meta42104",-1402072451,null)], null);
}));

(malli.util.t_malli$util42103.cljs$lang$type = true);

(malli.util.t_malli$util42103.cljs$lang$ctorStr = "malli.util/t_malli$util42103");

(malli.util.t_malli$util42103.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"malli.util/t_malli$util42103");
}));

/**
 * Positional factory function for malli.util/t_malli$util42103.
 */
malli.util.__GT_t_malli$util42103 = (function malli$util$_util_schema_$___GT_t_malli$util42103(p__42099__$1,map__42100__$2,type__$1,min__$1,max__$1,childs__$1,type_properties__$1,fn__$1,meta42104){
return (new malli.util.t_malli$util42103(p__42099__$1,map__42100__$2,type__$1,min__$1,max__$1,childs__$1,type_properties__$1,fn__$1,meta42104));
});

}

return (new malli.util.t_malli$util42103(p__42099,map__42100__$1,type,min,max,childs,type_properties,fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("malli.core","into-schema","malli.core/into-schema",1522165759)], null)));
});
malli.util._merge = (function malli$util$_merge(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._reducing(malli.util.merge)], null));
});
malli.util._union = (function malli$util$_union(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._reducing(malli.util.union)], null));
});
malli.util._select_keys = (function malli$util$_select_keys(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),new cljs.core.Keyword(null,"childs","childs",-1293201887),(1),new cljs.core.Keyword(null,"min","min",444991522),(2),new cljs.core.Keyword(null,"max","max",61366548),(2),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._applying(malli.util.select_keys)], null));
});
malli.util.schemas = (function malli$util$schemas(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"merge","merge",-1804319409),malli.util._merge(),new cljs.core.Keyword(null,"union","union",2142937499),malli.util._union(),new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),malli.util._select_keys()], null);
});

//# sourceMappingURL=malli.util.js.map

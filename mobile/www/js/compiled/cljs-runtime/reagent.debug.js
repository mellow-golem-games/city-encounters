goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__37472__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37473__i = 0, G__37473__a = new Array(arguments.length -  0);
while (G__37473__i < G__37473__a.length) {G__37473__a[G__37473__i] = arguments[G__37473__i + 0]; ++G__37473__i;}
  args = new cljs.core.IndexedSeq(G__37473__a,0,null);
} 
return G__37472__delegate.call(this,args);};
G__37472.cljs$lang$maxFixedArity = 0;
G__37472.cljs$lang$applyTo = (function (arglist__37474){
var args = cljs.core.seq(arglist__37474);
return G__37472__delegate(args);
});
G__37472.cljs$core$IFn$_invoke$arity$variadic = G__37472__delegate;
return G__37472;
})()
);

(o.error = (function() { 
var G__37475__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37477__i = 0, G__37477__a = new Array(arguments.length -  0);
while (G__37477__i < G__37477__a.length) {G__37477__a[G__37477__i] = arguments[G__37477__i + 0]; ++G__37477__i;}
  args = new cljs.core.IndexedSeq(G__37477__a,0,null);
} 
return G__37475__delegate.call(this,args);};
G__37475.cljs$lang$maxFixedArity = 0;
G__37475.cljs$lang$applyTo = (function (arglist__37478){
var args = cljs.core.seq(arglist__37478);
return G__37475__delegate(args);
});
G__37475.cljs$core$IFn$_invoke$arity$variadic = G__37475__delegate;
return G__37475;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

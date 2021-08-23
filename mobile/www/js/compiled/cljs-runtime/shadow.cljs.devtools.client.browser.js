goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37819 = arguments.length;
var i__4830__auto___37820 = (0);
while(true){
if((i__4830__auto___37820 < len__4829__auto___37819)){
args__4835__auto__.push((arguments[i__4830__auto___37820]));

var G__37821 = (i__4830__auto___37820 + (1));
i__4830__auto___37820 = G__37821;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37619){
var G__37620 = cljs.core.first(seq37619);
var seq37619__$1 = cljs.core.next(seq37619);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37620,seq37619__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37628 = cljs.core.seq(sources);
var chunk__37629 = null;
var count__37630 = (0);
var i__37631 = (0);
while(true){
if((i__37631 < count__37630)){
var map__37647 = chunk__37629.cljs$core$IIndexed$_nth$arity$2(null,i__37631);
var map__37647__$1 = cljs.core.__destructure_map(map__37647);
var src = map__37647__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37650){var e_37822 = e37650;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37822);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37822.message)].join('')));
}

var G__37823 = seq__37628;
var G__37824 = chunk__37629;
var G__37825 = count__37630;
var G__37826 = (i__37631 + (1));
seq__37628 = G__37823;
chunk__37629 = G__37824;
count__37630 = G__37825;
i__37631 = G__37826;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37628);
if(temp__5753__auto__){
var seq__37628__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37628__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37628__$1);
var G__37827 = cljs.core.chunk_rest(seq__37628__$1);
var G__37828 = c__4649__auto__;
var G__37829 = cljs.core.count(c__4649__auto__);
var G__37830 = (0);
seq__37628 = G__37827;
chunk__37629 = G__37828;
count__37630 = G__37829;
i__37631 = G__37830;
continue;
} else {
var map__37653 = cljs.core.first(seq__37628__$1);
var map__37653__$1 = cljs.core.__destructure_map(map__37653);
var src = map__37653__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37653__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37653__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37653__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37653__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37654){var e_37831 = e37654;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37831);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37831.message)].join('')));
}

var G__37832 = cljs.core.next(seq__37628__$1);
var G__37833 = null;
var G__37834 = (0);
var G__37835 = (0);
seq__37628 = G__37832;
chunk__37629 = G__37833;
count__37630 = G__37834;
i__37631 = G__37835;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37655 = cljs.core.seq(js_requires);
var chunk__37656 = null;
var count__37657 = (0);
var i__37658 = (0);
while(true){
if((i__37658 < count__37657)){
var js_ns = chunk__37656.cljs$core$IIndexed$_nth$arity$2(null,i__37658);
var require_str_37839 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37839);


var G__37840 = seq__37655;
var G__37841 = chunk__37656;
var G__37842 = count__37657;
var G__37843 = (i__37658 + (1));
seq__37655 = G__37840;
chunk__37656 = G__37841;
count__37657 = G__37842;
i__37658 = G__37843;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37655);
if(temp__5753__auto__){
var seq__37655__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37655__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37655__$1);
var G__37844 = cljs.core.chunk_rest(seq__37655__$1);
var G__37845 = c__4649__auto__;
var G__37846 = cljs.core.count(c__4649__auto__);
var G__37847 = (0);
seq__37655 = G__37844;
chunk__37656 = G__37845;
count__37657 = G__37846;
i__37658 = G__37847;
continue;
} else {
var js_ns = cljs.core.first(seq__37655__$1);
var require_str_37848 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37848);


var G__37849 = cljs.core.next(seq__37655__$1);
var G__37850 = null;
var G__37851 = (0);
var G__37852 = (0);
seq__37655 = G__37849;
chunk__37656 = G__37850;
count__37657 = G__37851;
i__37658 = G__37852;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37671){
var map__37673 = p__37671;
var map__37673__$1 = cljs.core.__destructure_map(map__37673);
var msg = map__37673__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37673__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37673__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37674(s__37675){
return (new cljs.core.LazySeq(null,(function (){
var s__37675__$1 = s__37675;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37675__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37680 = cljs.core.first(xs__6308__auto__);
var map__37680__$1 = cljs.core.__destructure_map(map__37680);
var src = map__37680__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__37675__$1,map__37680,map__37680__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37673,map__37673__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37674_$_iter__37676(s__37677){
return (new cljs.core.LazySeq(null,((function (s__37675__$1,map__37680,map__37680__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37673,map__37673__$1,msg,info,reload_info){
return (function (){
var s__37677__$1 = s__37677;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37677__$1);
if(temp__5753__auto____$1){
var s__37677__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37677__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__37677__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__37679 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__37678 = (0);
while(true){
if((i__37678 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__37678);
cljs.core.chunk_append(b__37679,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37854 = (i__37678 + (1));
i__37678 = G__37854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37679),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37674_$_iter__37676(cljs.core.chunk_rest(s__37677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37679),null);
}
} else {
var warning = cljs.core.first(s__37677__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37674_$_iter__37676(cljs.core.rest(s__37677__$2)));
}
} else {
return null;
}
break;
}
});})(s__37675__$1,map__37680,map__37680__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37673,map__37673__$1,msg,info,reload_info))
,null,null));
});})(s__37675__$1,map__37680,map__37680__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37673,map__37673__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37674(cljs.core.rest(s__37675__$1)));
} else {
var G__37857 = cljs.core.rest(s__37675__$1);
s__37675__$1 = G__37857;
continue;
}
} else {
var G__37858 = cljs.core.rest(s__37675__$1);
s__37675__$1 = G__37858;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37683_37859 = cljs.core.seq(warnings);
var chunk__37684_37860 = null;
var count__37685_37861 = (0);
var i__37686_37862 = (0);
while(true){
if((i__37686_37862 < count__37685_37861)){
var map__37691_37863 = chunk__37684_37860.cljs$core$IIndexed$_nth$arity$2(null,i__37686_37862);
var map__37691_37864__$1 = cljs.core.__destructure_map(map__37691_37863);
var w_37865 = map__37691_37864__$1;
var msg_37866__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691_37864__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691_37864__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691_37864__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37691_37864__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37869)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37867),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37868),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37866__$1)].join(''));


var G__37870 = seq__37683_37859;
var G__37871 = chunk__37684_37860;
var G__37872 = count__37685_37861;
var G__37873 = (i__37686_37862 + (1));
seq__37683_37859 = G__37870;
chunk__37684_37860 = G__37871;
count__37685_37861 = G__37872;
i__37686_37862 = G__37873;
continue;
} else {
var temp__5753__auto___37874 = cljs.core.seq(seq__37683_37859);
if(temp__5753__auto___37874){
var seq__37683_37875__$1 = temp__5753__auto___37874;
if(cljs.core.chunked_seq_QMARK_(seq__37683_37875__$1)){
var c__4649__auto___37876 = cljs.core.chunk_first(seq__37683_37875__$1);
var G__37877 = cljs.core.chunk_rest(seq__37683_37875__$1);
var G__37878 = c__4649__auto___37876;
var G__37879 = cljs.core.count(c__4649__auto___37876);
var G__37880 = (0);
seq__37683_37859 = G__37877;
chunk__37684_37860 = G__37878;
count__37685_37861 = G__37879;
i__37686_37862 = G__37880;
continue;
} else {
var map__37692_37881 = cljs.core.first(seq__37683_37875__$1);
var map__37692_37882__$1 = cljs.core.__destructure_map(map__37692_37881);
var w_37883 = map__37692_37882__$1;
var msg_37884__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37692_37882__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37692_37882__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37692_37882__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37692_37882__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37887)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37885),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37886),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37884__$1)].join(''));


var G__37888 = cljs.core.next(seq__37683_37875__$1);
var G__37889 = null;
var G__37890 = (0);
var G__37891 = (0);
seq__37683_37859 = G__37888;
chunk__37684_37860 = G__37889;
count__37685_37861 = G__37890;
i__37686_37862 = G__37891;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37670_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37670_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37693){
var map__37694 = p__37693;
var map__37694__$1 = cljs.core.__destructure_map(map__37694);
var msg = map__37694__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37694__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37695 = cljs.core.seq(updates);
var chunk__37697 = null;
var count__37698 = (0);
var i__37699 = (0);
while(true){
if((i__37699 < count__37698)){
var path = chunk__37697.cljs$core$IIndexed$_nth$arity$2(null,i__37699);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37734_37892 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37738_37893 = null;
var count__37739_37894 = (0);
var i__37740_37895 = (0);
while(true){
if((i__37740_37895 < count__37739_37894)){
var node_37896 = chunk__37738_37893.cljs$core$IIndexed$_nth$arity$2(null,i__37740_37895);
if(cljs.core.not(node_37896.shadow$old)){
var path_match_37897 = shadow.cljs.devtools.client.browser.match_paths(node_37896.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37897)){
var new_link_37898 = (function (){var G__37746 = node_37896.cloneNode(true);
G__37746.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37897),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37746;
})();
(node_37896.shadow$old = true);

(new_link_37898.onload = ((function (seq__37734_37892,chunk__37738_37893,count__37739_37894,i__37740_37895,seq__37695,chunk__37697,count__37698,i__37699,new_link_37898,path_match_37897,node_37896,path,map__37694,map__37694__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37896);
});})(seq__37734_37892,chunk__37738_37893,count__37739_37894,i__37740_37895,seq__37695,chunk__37697,count__37698,i__37699,new_link_37898,path_match_37897,node_37896,path,map__37694,map__37694__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37897], 0));

goog.dom.insertSiblingAfter(new_link_37898,node_37896);


var G__37899 = seq__37734_37892;
var G__37900 = chunk__37738_37893;
var G__37901 = count__37739_37894;
var G__37902 = (i__37740_37895 + (1));
seq__37734_37892 = G__37899;
chunk__37738_37893 = G__37900;
count__37739_37894 = G__37901;
i__37740_37895 = G__37902;
continue;
} else {
var G__37903 = seq__37734_37892;
var G__37904 = chunk__37738_37893;
var G__37905 = count__37739_37894;
var G__37906 = (i__37740_37895 + (1));
seq__37734_37892 = G__37903;
chunk__37738_37893 = G__37904;
count__37739_37894 = G__37905;
i__37740_37895 = G__37906;
continue;
}
} else {
var G__37907 = seq__37734_37892;
var G__37908 = chunk__37738_37893;
var G__37909 = count__37739_37894;
var G__37910 = (i__37740_37895 + (1));
seq__37734_37892 = G__37907;
chunk__37738_37893 = G__37908;
count__37739_37894 = G__37909;
i__37740_37895 = G__37910;
continue;
}
} else {
var temp__5753__auto___37911 = cljs.core.seq(seq__37734_37892);
if(temp__5753__auto___37911){
var seq__37734_37912__$1 = temp__5753__auto___37911;
if(cljs.core.chunked_seq_QMARK_(seq__37734_37912__$1)){
var c__4649__auto___37913 = cljs.core.chunk_first(seq__37734_37912__$1);
var G__37914 = cljs.core.chunk_rest(seq__37734_37912__$1);
var G__37915 = c__4649__auto___37913;
var G__37916 = cljs.core.count(c__4649__auto___37913);
var G__37917 = (0);
seq__37734_37892 = G__37914;
chunk__37738_37893 = G__37915;
count__37739_37894 = G__37916;
i__37740_37895 = G__37917;
continue;
} else {
var node_37918 = cljs.core.first(seq__37734_37912__$1);
if(cljs.core.not(node_37918.shadow$old)){
var path_match_37919 = shadow.cljs.devtools.client.browser.match_paths(node_37918.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37919)){
var new_link_37920 = (function (){var G__37747 = node_37918.cloneNode(true);
G__37747.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37919),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37747;
})();
(node_37918.shadow$old = true);

(new_link_37920.onload = ((function (seq__37734_37892,chunk__37738_37893,count__37739_37894,i__37740_37895,seq__37695,chunk__37697,count__37698,i__37699,new_link_37920,path_match_37919,node_37918,seq__37734_37912__$1,temp__5753__auto___37911,path,map__37694,map__37694__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37918);
});})(seq__37734_37892,chunk__37738_37893,count__37739_37894,i__37740_37895,seq__37695,chunk__37697,count__37698,i__37699,new_link_37920,path_match_37919,node_37918,seq__37734_37912__$1,temp__5753__auto___37911,path,map__37694,map__37694__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37919], 0));

goog.dom.insertSiblingAfter(new_link_37920,node_37918);


var G__37921 = cljs.core.next(seq__37734_37912__$1);
var G__37922 = null;
var G__37923 = (0);
var G__37924 = (0);
seq__37734_37892 = G__37921;
chunk__37738_37893 = G__37922;
count__37739_37894 = G__37923;
i__37740_37895 = G__37924;
continue;
} else {
var G__37925 = cljs.core.next(seq__37734_37912__$1);
var G__37926 = null;
var G__37927 = (0);
var G__37928 = (0);
seq__37734_37892 = G__37925;
chunk__37738_37893 = G__37926;
count__37739_37894 = G__37927;
i__37740_37895 = G__37928;
continue;
}
} else {
var G__37929 = cljs.core.next(seq__37734_37912__$1);
var G__37930 = null;
var G__37931 = (0);
var G__37932 = (0);
seq__37734_37892 = G__37929;
chunk__37738_37893 = G__37930;
count__37739_37894 = G__37931;
i__37740_37895 = G__37932;
continue;
}
}
} else {
}
}
break;
}


var G__37933 = seq__37695;
var G__37934 = chunk__37697;
var G__37935 = count__37698;
var G__37936 = (i__37699 + (1));
seq__37695 = G__37933;
chunk__37697 = G__37934;
count__37698 = G__37935;
i__37699 = G__37936;
continue;
} else {
var G__37937 = seq__37695;
var G__37938 = chunk__37697;
var G__37939 = count__37698;
var G__37940 = (i__37699 + (1));
seq__37695 = G__37937;
chunk__37697 = G__37938;
count__37698 = G__37939;
i__37699 = G__37940;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37695);
if(temp__5753__auto__){
var seq__37695__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37695__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37695__$1);
var G__37941 = cljs.core.chunk_rest(seq__37695__$1);
var G__37942 = c__4649__auto__;
var G__37943 = cljs.core.count(c__4649__auto__);
var G__37944 = (0);
seq__37695 = G__37941;
chunk__37697 = G__37942;
count__37698 = G__37943;
i__37699 = G__37944;
continue;
} else {
var path = cljs.core.first(seq__37695__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37748_37945 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37752_37946 = null;
var count__37753_37947 = (0);
var i__37754_37948 = (0);
while(true){
if((i__37754_37948 < count__37753_37947)){
var node_37949 = chunk__37752_37946.cljs$core$IIndexed$_nth$arity$2(null,i__37754_37948);
if(cljs.core.not(node_37949.shadow$old)){
var path_match_37950 = shadow.cljs.devtools.client.browser.match_paths(node_37949.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37950)){
var new_link_37951 = (function (){var G__37761 = node_37949.cloneNode(true);
G__37761.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37950),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37761;
})();
(node_37949.shadow$old = true);

(new_link_37951.onload = ((function (seq__37748_37945,chunk__37752_37946,count__37753_37947,i__37754_37948,seq__37695,chunk__37697,count__37698,i__37699,new_link_37951,path_match_37950,node_37949,path,seq__37695__$1,temp__5753__auto__,map__37694,map__37694__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37949);
});})(seq__37748_37945,chunk__37752_37946,count__37753_37947,i__37754_37948,seq__37695,chunk__37697,count__37698,i__37699,new_link_37951,path_match_37950,node_37949,path,seq__37695__$1,temp__5753__auto__,map__37694,map__37694__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37950], 0));

goog.dom.insertSiblingAfter(new_link_37951,node_37949);


var G__37952 = seq__37748_37945;
var G__37953 = chunk__37752_37946;
var G__37954 = count__37753_37947;
var G__37955 = (i__37754_37948 + (1));
seq__37748_37945 = G__37952;
chunk__37752_37946 = G__37953;
count__37753_37947 = G__37954;
i__37754_37948 = G__37955;
continue;
} else {
var G__37956 = seq__37748_37945;
var G__37957 = chunk__37752_37946;
var G__37958 = count__37753_37947;
var G__37959 = (i__37754_37948 + (1));
seq__37748_37945 = G__37956;
chunk__37752_37946 = G__37957;
count__37753_37947 = G__37958;
i__37754_37948 = G__37959;
continue;
}
} else {
var G__37960 = seq__37748_37945;
var G__37961 = chunk__37752_37946;
var G__37962 = count__37753_37947;
var G__37963 = (i__37754_37948 + (1));
seq__37748_37945 = G__37960;
chunk__37752_37946 = G__37961;
count__37753_37947 = G__37962;
i__37754_37948 = G__37963;
continue;
}
} else {
var temp__5753__auto___37964__$1 = cljs.core.seq(seq__37748_37945);
if(temp__5753__auto___37964__$1){
var seq__37748_37965__$1 = temp__5753__auto___37964__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37748_37965__$1)){
var c__4649__auto___37966 = cljs.core.chunk_first(seq__37748_37965__$1);
var G__37967 = cljs.core.chunk_rest(seq__37748_37965__$1);
var G__37968 = c__4649__auto___37966;
var G__37969 = cljs.core.count(c__4649__auto___37966);
var G__37970 = (0);
seq__37748_37945 = G__37967;
chunk__37752_37946 = G__37968;
count__37753_37947 = G__37969;
i__37754_37948 = G__37970;
continue;
} else {
var node_37971 = cljs.core.first(seq__37748_37965__$1);
if(cljs.core.not(node_37971.shadow$old)){
var path_match_37972 = shadow.cljs.devtools.client.browser.match_paths(node_37971.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37972)){
var new_link_37973 = (function (){var G__37762 = node_37971.cloneNode(true);
G__37762.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37972),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37762;
})();
(node_37971.shadow$old = true);

(new_link_37973.onload = ((function (seq__37748_37945,chunk__37752_37946,count__37753_37947,i__37754_37948,seq__37695,chunk__37697,count__37698,i__37699,new_link_37973,path_match_37972,node_37971,seq__37748_37965__$1,temp__5753__auto___37964__$1,path,seq__37695__$1,temp__5753__auto__,map__37694,map__37694__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37971);
});})(seq__37748_37945,chunk__37752_37946,count__37753_37947,i__37754_37948,seq__37695,chunk__37697,count__37698,i__37699,new_link_37973,path_match_37972,node_37971,seq__37748_37965__$1,temp__5753__auto___37964__$1,path,seq__37695__$1,temp__5753__auto__,map__37694,map__37694__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37972], 0));

goog.dom.insertSiblingAfter(new_link_37973,node_37971);


var G__37975 = cljs.core.next(seq__37748_37965__$1);
var G__37976 = null;
var G__37977 = (0);
var G__37978 = (0);
seq__37748_37945 = G__37975;
chunk__37752_37946 = G__37976;
count__37753_37947 = G__37977;
i__37754_37948 = G__37978;
continue;
} else {
var G__37980 = cljs.core.next(seq__37748_37965__$1);
var G__37981 = null;
var G__37982 = (0);
var G__37983 = (0);
seq__37748_37945 = G__37980;
chunk__37752_37946 = G__37981;
count__37753_37947 = G__37982;
i__37754_37948 = G__37983;
continue;
}
} else {
var G__37985 = cljs.core.next(seq__37748_37965__$1);
var G__37986 = null;
var G__37987 = (0);
var G__37988 = (0);
seq__37748_37945 = G__37985;
chunk__37752_37946 = G__37986;
count__37753_37947 = G__37987;
i__37754_37948 = G__37988;
continue;
}
}
} else {
}
}
break;
}


var G__37989 = cljs.core.next(seq__37695__$1);
var G__37990 = null;
var G__37991 = (0);
var G__37992 = (0);
seq__37695 = G__37989;
chunk__37697 = G__37990;
count__37698 = G__37991;
i__37699 = G__37992;
continue;
} else {
var G__37993 = cljs.core.next(seq__37695__$1);
var G__37994 = null;
var G__37995 = (0);
var G__37996 = (0);
seq__37695 = G__37993;
chunk__37697 = G__37994;
count__37698 = G__37995;
i__37699 = G__37996;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37771){
var map__37772 = p__37771;
var map__37772__$1 = cljs.core.__destructure_map(map__37772);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37772__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37791){
var map__37792 = p__37791;
var map__37792__$1 = cljs.core.__destructure_map(map__37792);
var _ = map__37792__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37792__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37793,done,error){
var map__37794 = p__37793;
var map__37794__$1 = cljs.core.__destructure_map(map__37794);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37794__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37795,done,error){
var map__37796 = p__37795;
var map__37796__$1 = cljs.core.__destructure_map(map__37796);
var msg = map__37796__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37799){
var map__37800 = p__37799;
var map__37800__$1 = cljs.core.__destructure_map(map__37800);
var src = map__37800__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37800__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37801 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37801) : done.call(null,G__37801));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37802){
var map__37803 = p__37802;
var map__37803__$1 = cljs.core.__destructure_map(map__37803);
var msg__$1 = map__37803__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37803__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37804){var ex = e37804;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37805){
var map__37806 = p__37805;
var map__37806__$1 = cljs.core.__destructure_map(map__37806);
var env = map__37806__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37806__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37811){
var map__37812 = p__37811;
var map__37812__$1 = cljs.core.__destructure_map(map__37812);
var msg = map__37812__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37813){
var map__37814 = p__37813;
var map__37814__$1 = cljs.core.__destructure_map(map__37814);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37814__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37814__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37815){
var map__37816 = p__37815;
var map__37816__$1 = cljs.core.__destructure_map(map__37816);
var svc = map__37816__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

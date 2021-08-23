goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35967 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35967(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35981 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35981(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35048 = coll;
var G__35049 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35048,G__35049) : shadow.dom.lazy_native_coll_seq.call(null,G__35048,G__35049));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35079 = arguments.length;
switch (G__35079) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35088 = arguments.length;
switch (G__35088) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35113 = arguments.length;
switch (G__35113) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35129 = arguments.length;
switch (G__35129) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35137 = arguments.length;
switch (G__35137) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35152 = arguments.length;
switch (G__35152) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35156){if((e35156 instanceof Object)){
var e = e35156;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35156;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35160 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35161 = null;
var count__35162 = (0);
var i__35163 = (0);
while(true){
if((i__35163 < count__35162)){
var el = chunk__35161.cljs$core$IIndexed$_nth$arity$2(null,i__35163);
var handler_36054__$1 = ((function (seq__35160,chunk__35161,count__35162,i__35163,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35160,chunk__35161,count__35162,i__35163,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36054__$1);


var G__36055 = seq__35160;
var G__36056 = chunk__35161;
var G__36057 = count__35162;
var G__36058 = (i__35163 + (1));
seq__35160 = G__36055;
chunk__35161 = G__36056;
count__35162 = G__36057;
i__35163 = G__36058;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35160);
if(temp__5753__auto__){
var seq__35160__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35160__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35160__$1);
var G__36059 = cljs.core.chunk_rest(seq__35160__$1);
var G__36060 = c__4649__auto__;
var G__36061 = cljs.core.count(c__4649__auto__);
var G__36062 = (0);
seq__35160 = G__36059;
chunk__35161 = G__36060;
count__35162 = G__36061;
i__35163 = G__36062;
continue;
} else {
var el = cljs.core.first(seq__35160__$1);
var handler_36063__$1 = ((function (seq__35160,chunk__35161,count__35162,i__35163,el,seq__35160__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35160,chunk__35161,count__35162,i__35163,el,seq__35160__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36063__$1);


var G__36064 = cljs.core.next(seq__35160__$1);
var G__36065 = null;
var G__36066 = (0);
var G__36067 = (0);
seq__35160 = G__36064;
chunk__35161 = G__36065;
count__35162 = G__36066;
i__35163 = G__36067;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35179 = arguments.length;
switch (G__35179) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35186 = cljs.core.seq(events);
var chunk__35187 = null;
var count__35188 = (0);
var i__35189 = (0);
while(true){
if((i__35189 < count__35188)){
var vec__35218 = chunk__35187.cljs$core$IIndexed$_nth$arity$2(null,i__35189);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35218,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36072 = seq__35186;
var G__36073 = chunk__35187;
var G__36074 = count__35188;
var G__36075 = (i__35189 + (1));
seq__35186 = G__36072;
chunk__35187 = G__36073;
count__35188 = G__36074;
i__35189 = G__36075;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35186);
if(temp__5753__auto__){
var seq__35186__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35186__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35186__$1);
var G__36076 = cljs.core.chunk_rest(seq__35186__$1);
var G__36077 = c__4649__auto__;
var G__36078 = cljs.core.count(c__4649__auto__);
var G__36079 = (0);
seq__35186 = G__36076;
chunk__35187 = G__36077;
count__35188 = G__36078;
i__35189 = G__36079;
continue;
} else {
var vec__35247 = cljs.core.first(seq__35186__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36080 = cljs.core.next(seq__35186__$1);
var G__36081 = null;
var G__36082 = (0);
var G__36083 = (0);
seq__35186 = G__36080;
chunk__35187 = G__36081;
count__35188 = G__36082;
i__35189 = G__36083;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35261 = cljs.core.seq(styles);
var chunk__35262 = null;
var count__35263 = (0);
var i__35264 = (0);
while(true){
if((i__35264 < count__35263)){
var vec__35303 = chunk__35262.cljs$core$IIndexed$_nth$arity$2(null,i__35264);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35303,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36085 = seq__35261;
var G__36086 = chunk__35262;
var G__36087 = count__35263;
var G__36088 = (i__35264 + (1));
seq__35261 = G__36085;
chunk__35262 = G__36086;
count__35263 = G__36087;
i__35264 = G__36088;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35261);
if(temp__5753__auto__){
var seq__35261__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35261__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35261__$1);
var G__36090 = cljs.core.chunk_rest(seq__35261__$1);
var G__36091 = c__4649__auto__;
var G__36092 = cljs.core.count(c__4649__auto__);
var G__36093 = (0);
seq__35261 = G__36090;
chunk__35262 = G__36091;
count__35263 = G__36092;
i__35264 = G__36093;
continue;
} else {
var vec__35309 = cljs.core.first(seq__35261__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35309,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36094 = cljs.core.next(seq__35261__$1);
var G__36095 = null;
var G__36096 = (0);
var G__36097 = (0);
seq__35261 = G__36094;
chunk__35262 = G__36095;
count__35263 = G__36096;
i__35264 = G__36097;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35314_36099 = key;
var G__35314_36100__$1 = (((G__35314_36099 instanceof cljs.core.Keyword))?G__35314_36099.fqn:null);
switch (G__35314_36100__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36102 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_36102,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_36102,"aria-");
}
})())){
el.setAttribute(ks_36102,value);
} else {
(el[ks_36102] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35345){
var map__35347 = p__35345;
var map__35347__$1 = cljs.core.__destructure_map(map__35347);
var props = map__35347__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35347__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35350 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35350,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35350,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35350,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35356 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35356,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35356;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35360 = arguments.length;
switch (G__35360) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35367){
var vec__35368 = p__35367;
var seq__35369 = cljs.core.seq(vec__35368);
var first__35370 = cljs.core.first(seq__35369);
var seq__35369__$1 = cljs.core.next(seq__35369);
var nn = first__35370;
var first__35370__$1 = cljs.core.first(seq__35369__$1);
var seq__35369__$2 = cljs.core.next(seq__35369__$1);
var np = first__35370__$1;
var nc = seq__35369__$2;
var node = vec__35368;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35374 = nn;
var G__35375 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35374,G__35375) : create_fn.call(null,G__35374,G__35375));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35378 = nn;
var G__35379 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35378,G__35379) : create_fn.call(null,G__35378,G__35379));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35384 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384,(1),null);
var seq__35387_36117 = cljs.core.seq(node_children);
var chunk__35388_36118 = null;
var count__35389_36119 = (0);
var i__35390_36120 = (0);
while(true){
if((i__35390_36120 < count__35389_36119)){
var child_struct_36122 = chunk__35388_36118.cljs$core$IIndexed$_nth$arity$2(null,i__35390_36120);
var children_36123 = shadow.dom.dom_node(child_struct_36122);
if(cljs.core.seq_QMARK_(children_36123)){
var seq__35414_36124 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36123));
var chunk__35416_36125 = null;
var count__35417_36126 = (0);
var i__35418_36127 = (0);
while(true){
if((i__35418_36127 < count__35417_36126)){
var child_36130 = chunk__35416_36125.cljs$core$IIndexed$_nth$arity$2(null,i__35418_36127);
if(cljs.core.truth_(child_36130)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36130);


var G__36133 = seq__35414_36124;
var G__36134 = chunk__35416_36125;
var G__36135 = count__35417_36126;
var G__36136 = (i__35418_36127 + (1));
seq__35414_36124 = G__36133;
chunk__35416_36125 = G__36134;
count__35417_36126 = G__36135;
i__35418_36127 = G__36136;
continue;
} else {
var G__36137 = seq__35414_36124;
var G__36138 = chunk__35416_36125;
var G__36139 = count__35417_36126;
var G__36140 = (i__35418_36127 + (1));
seq__35414_36124 = G__36137;
chunk__35416_36125 = G__36138;
count__35417_36126 = G__36139;
i__35418_36127 = G__36140;
continue;
}
} else {
var temp__5753__auto___36141 = cljs.core.seq(seq__35414_36124);
if(temp__5753__auto___36141){
var seq__35414_36142__$1 = temp__5753__auto___36141;
if(cljs.core.chunked_seq_QMARK_(seq__35414_36142__$1)){
var c__4649__auto___36143 = cljs.core.chunk_first(seq__35414_36142__$1);
var G__36144 = cljs.core.chunk_rest(seq__35414_36142__$1);
var G__36145 = c__4649__auto___36143;
var G__36146 = cljs.core.count(c__4649__auto___36143);
var G__36147 = (0);
seq__35414_36124 = G__36144;
chunk__35416_36125 = G__36145;
count__35417_36126 = G__36146;
i__35418_36127 = G__36147;
continue;
} else {
var child_36149 = cljs.core.first(seq__35414_36142__$1);
if(cljs.core.truth_(child_36149)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36149);


var G__36150 = cljs.core.next(seq__35414_36142__$1);
var G__36151 = null;
var G__36152 = (0);
var G__36153 = (0);
seq__35414_36124 = G__36150;
chunk__35416_36125 = G__36151;
count__35417_36126 = G__36152;
i__35418_36127 = G__36153;
continue;
} else {
var G__36154 = cljs.core.next(seq__35414_36142__$1);
var G__36155 = null;
var G__36156 = (0);
var G__36157 = (0);
seq__35414_36124 = G__36154;
chunk__35416_36125 = G__36155;
count__35417_36126 = G__36156;
i__35418_36127 = G__36157;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36123);
}


var G__36158 = seq__35387_36117;
var G__36159 = chunk__35388_36118;
var G__36160 = count__35389_36119;
var G__36161 = (i__35390_36120 + (1));
seq__35387_36117 = G__36158;
chunk__35388_36118 = G__36159;
count__35389_36119 = G__36160;
i__35390_36120 = G__36161;
continue;
} else {
var temp__5753__auto___36162 = cljs.core.seq(seq__35387_36117);
if(temp__5753__auto___36162){
var seq__35387_36163__$1 = temp__5753__auto___36162;
if(cljs.core.chunked_seq_QMARK_(seq__35387_36163__$1)){
var c__4649__auto___36164 = cljs.core.chunk_first(seq__35387_36163__$1);
var G__36165 = cljs.core.chunk_rest(seq__35387_36163__$1);
var G__36166 = c__4649__auto___36164;
var G__36167 = cljs.core.count(c__4649__auto___36164);
var G__36168 = (0);
seq__35387_36117 = G__36165;
chunk__35388_36118 = G__36166;
count__35389_36119 = G__36167;
i__35390_36120 = G__36168;
continue;
} else {
var child_struct_36170 = cljs.core.first(seq__35387_36163__$1);
var children_36171 = shadow.dom.dom_node(child_struct_36170);
if(cljs.core.seq_QMARK_(children_36171)){
var seq__35439_36172 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36171));
var chunk__35441_36173 = null;
var count__35442_36174 = (0);
var i__35443_36175 = (0);
while(true){
if((i__35443_36175 < count__35442_36174)){
var child_36176 = chunk__35441_36173.cljs$core$IIndexed$_nth$arity$2(null,i__35443_36175);
if(cljs.core.truth_(child_36176)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36176);


var G__36177 = seq__35439_36172;
var G__36178 = chunk__35441_36173;
var G__36179 = count__35442_36174;
var G__36180 = (i__35443_36175 + (1));
seq__35439_36172 = G__36177;
chunk__35441_36173 = G__36178;
count__35442_36174 = G__36179;
i__35443_36175 = G__36180;
continue;
} else {
var G__36181 = seq__35439_36172;
var G__36182 = chunk__35441_36173;
var G__36183 = count__35442_36174;
var G__36184 = (i__35443_36175 + (1));
seq__35439_36172 = G__36181;
chunk__35441_36173 = G__36182;
count__35442_36174 = G__36183;
i__35443_36175 = G__36184;
continue;
}
} else {
var temp__5753__auto___36185__$1 = cljs.core.seq(seq__35439_36172);
if(temp__5753__auto___36185__$1){
var seq__35439_36186__$1 = temp__5753__auto___36185__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35439_36186__$1)){
var c__4649__auto___36187 = cljs.core.chunk_first(seq__35439_36186__$1);
var G__36188 = cljs.core.chunk_rest(seq__35439_36186__$1);
var G__36189 = c__4649__auto___36187;
var G__36190 = cljs.core.count(c__4649__auto___36187);
var G__36191 = (0);
seq__35439_36172 = G__36188;
chunk__35441_36173 = G__36189;
count__35442_36174 = G__36190;
i__35443_36175 = G__36191;
continue;
} else {
var child_36192 = cljs.core.first(seq__35439_36186__$1);
if(cljs.core.truth_(child_36192)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36192);


var G__36193 = cljs.core.next(seq__35439_36186__$1);
var G__36194 = null;
var G__36195 = (0);
var G__36196 = (0);
seq__35439_36172 = G__36193;
chunk__35441_36173 = G__36194;
count__35442_36174 = G__36195;
i__35443_36175 = G__36196;
continue;
} else {
var G__36197 = cljs.core.next(seq__35439_36186__$1);
var G__36198 = null;
var G__36199 = (0);
var G__36200 = (0);
seq__35439_36172 = G__36197;
chunk__35441_36173 = G__36198;
count__35442_36174 = G__36199;
i__35443_36175 = G__36200;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36171);
}


var G__36201 = cljs.core.next(seq__35387_36163__$1);
var G__36202 = null;
var G__36203 = (0);
var G__36204 = (0);
seq__35387_36117 = G__36201;
chunk__35388_36118 = G__36202;
count__35389_36119 = G__36203;
i__35390_36120 = G__36204;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35494 = cljs.core.seq(node);
var chunk__35495 = null;
var count__35496 = (0);
var i__35497 = (0);
while(true){
if((i__35497 < count__35496)){
var n = chunk__35495.cljs$core$IIndexed$_nth$arity$2(null,i__35497);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36208 = seq__35494;
var G__36209 = chunk__35495;
var G__36210 = count__35496;
var G__36211 = (i__35497 + (1));
seq__35494 = G__36208;
chunk__35495 = G__36209;
count__35496 = G__36210;
i__35497 = G__36211;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35494);
if(temp__5753__auto__){
var seq__35494__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35494__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35494__$1);
var G__36213 = cljs.core.chunk_rest(seq__35494__$1);
var G__36214 = c__4649__auto__;
var G__36215 = cljs.core.count(c__4649__auto__);
var G__36216 = (0);
seq__35494 = G__36213;
chunk__35495 = G__36214;
count__35496 = G__36215;
i__35497 = G__36216;
continue;
} else {
var n = cljs.core.first(seq__35494__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36217 = cljs.core.next(seq__35494__$1);
var G__36218 = null;
var G__36219 = (0);
var G__36220 = (0);
seq__35494 = G__36217;
chunk__35495 = G__36218;
count__35496 = G__36219;
i__35497 = G__36220;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35510 = arguments.length;
switch (G__35510) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35512 = arguments.length;
switch (G__35512) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35541 = arguments.length;
switch (G__35541) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36230 = arguments.length;
var i__4830__auto___36231 = (0);
while(true){
if((i__4830__auto___36231 < len__4829__auto___36230)){
args__4835__auto__.push((arguments[i__4830__auto___36231]));

var G__36233 = (i__4830__auto___36231 + (1));
i__4830__auto___36231 = G__36233;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35560_36234 = cljs.core.seq(nodes);
var chunk__35561_36235 = null;
var count__35562_36236 = (0);
var i__35563_36237 = (0);
while(true){
if((i__35563_36237 < count__35562_36236)){
var node_36239 = chunk__35561_36235.cljs$core$IIndexed$_nth$arity$2(null,i__35563_36237);
fragment.appendChild(shadow.dom._to_dom(node_36239));


var G__36240 = seq__35560_36234;
var G__36241 = chunk__35561_36235;
var G__36242 = count__35562_36236;
var G__36243 = (i__35563_36237 + (1));
seq__35560_36234 = G__36240;
chunk__35561_36235 = G__36241;
count__35562_36236 = G__36242;
i__35563_36237 = G__36243;
continue;
} else {
var temp__5753__auto___36244 = cljs.core.seq(seq__35560_36234);
if(temp__5753__auto___36244){
var seq__35560_36246__$1 = temp__5753__auto___36244;
if(cljs.core.chunked_seq_QMARK_(seq__35560_36246__$1)){
var c__4649__auto___36247 = cljs.core.chunk_first(seq__35560_36246__$1);
var G__36248 = cljs.core.chunk_rest(seq__35560_36246__$1);
var G__36249 = c__4649__auto___36247;
var G__36250 = cljs.core.count(c__4649__auto___36247);
var G__36251 = (0);
seq__35560_36234 = G__36248;
chunk__35561_36235 = G__36249;
count__35562_36236 = G__36250;
i__35563_36237 = G__36251;
continue;
} else {
var node_36253 = cljs.core.first(seq__35560_36246__$1);
fragment.appendChild(shadow.dom._to_dom(node_36253));


var G__36254 = cljs.core.next(seq__35560_36246__$1);
var G__36255 = null;
var G__36256 = (0);
var G__36257 = (0);
seq__35560_36234 = G__36254;
chunk__35561_36235 = G__36255;
count__35562_36236 = G__36256;
i__35563_36237 = G__36257;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35556){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35556));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35580_36259 = cljs.core.seq(scripts);
var chunk__35581_36260 = null;
var count__35582_36261 = (0);
var i__35583_36262 = (0);
while(true){
if((i__35583_36262 < count__35582_36261)){
var vec__35592_36263 = chunk__35581_36260.cljs$core$IIndexed$_nth$arity$2(null,i__35583_36262);
var script_tag_36264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592_36263,(0),null);
var script_body_36265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592_36263,(1),null);
eval(script_body_36265);


var G__36266 = seq__35580_36259;
var G__36267 = chunk__35581_36260;
var G__36268 = count__35582_36261;
var G__36269 = (i__35583_36262 + (1));
seq__35580_36259 = G__36266;
chunk__35581_36260 = G__36267;
count__35582_36261 = G__36268;
i__35583_36262 = G__36269;
continue;
} else {
var temp__5753__auto___36270 = cljs.core.seq(seq__35580_36259);
if(temp__5753__auto___36270){
var seq__35580_36271__$1 = temp__5753__auto___36270;
if(cljs.core.chunked_seq_QMARK_(seq__35580_36271__$1)){
var c__4649__auto___36272 = cljs.core.chunk_first(seq__35580_36271__$1);
var G__36274 = cljs.core.chunk_rest(seq__35580_36271__$1);
var G__36275 = c__4649__auto___36272;
var G__36276 = cljs.core.count(c__4649__auto___36272);
var G__36277 = (0);
seq__35580_36259 = G__36274;
chunk__35581_36260 = G__36275;
count__35582_36261 = G__36276;
i__35583_36262 = G__36277;
continue;
} else {
var vec__35598_36278 = cljs.core.first(seq__35580_36271__$1);
var script_tag_36279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35598_36278,(0),null);
var script_body_36280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35598_36278,(1),null);
eval(script_body_36280);


var G__36281 = cljs.core.next(seq__35580_36271__$1);
var G__36282 = null;
var G__36283 = (0);
var G__36284 = (0);
seq__35580_36259 = G__36281;
chunk__35581_36260 = G__36282;
count__35582_36261 = G__36283;
i__35583_36262 = G__36284;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35602){
var vec__35603 = p__35602;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35618 = arguments.length;
switch (G__35618) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35633 = cljs.core.seq(style_keys);
var chunk__35634 = null;
var count__35635 = (0);
var i__35636 = (0);
while(true){
if((i__35636 < count__35635)){
var it = chunk__35634.cljs$core$IIndexed$_nth$arity$2(null,i__35636);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36289 = seq__35633;
var G__36290 = chunk__35634;
var G__36291 = count__35635;
var G__36292 = (i__35636 + (1));
seq__35633 = G__36289;
chunk__35634 = G__36290;
count__35635 = G__36291;
i__35636 = G__36292;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35633);
if(temp__5753__auto__){
var seq__35633__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35633__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35633__$1);
var G__36293 = cljs.core.chunk_rest(seq__35633__$1);
var G__36294 = c__4649__auto__;
var G__36295 = cljs.core.count(c__4649__auto__);
var G__36296 = (0);
seq__35633 = G__36293;
chunk__35634 = G__36294;
count__35635 = G__36295;
i__35636 = G__36296;
continue;
} else {
var it = cljs.core.first(seq__35633__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36297 = cljs.core.next(seq__35633__$1);
var G__36298 = null;
var G__36299 = (0);
var G__36300 = (0);
seq__35633 = G__36297;
chunk__35634 = G__36298;
count__35635 = G__36299;
i__35636 = G__36300;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k35644,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__35656 = k35644;
var G__35656__$1 = (((G__35656 instanceof cljs.core.Keyword))?G__35656.fqn:null);
switch (G__35656__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35644,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__35660){
var vec__35662 = p__35660;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35662,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35662,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35643){
var self__ = this;
var G__35643__$1 = this;
return (new cljs.core.RecordIter((0),G__35643__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35645,other35646){
var self__ = this;
var this35645__$1 = this;
return (((!((other35646 == null)))) && ((((this35645__$1.constructor === other35646.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35645__$1.x,other35646.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35645__$1.y,other35646.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35645__$1.__extmap,other35646.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k35644){
var self__ = this;
var this__4479__auto____$1 = this;
var G__35673 = k35644;
var G__35673__$1 = (((G__35673 instanceof cljs.core.Keyword))?G__35673.fqn:null);
switch (G__35673__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35644);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__35643){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__35676 = cljs.core.keyword_identical_QMARK_;
var expr__35677 = k__4481__auto__;
if(cljs.core.truth_((pred__35676.cljs$core$IFn$_invoke$arity$2 ? pred__35676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35677) : pred__35676.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35677)))){
return (new shadow.dom.Coordinate(G__35643,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35676.cljs$core$IFn$_invoke$arity$2 ? pred__35676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35677) : pred__35676.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35677)))){
return (new shadow.dom.Coordinate(self__.x,G__35643,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__35643),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__35643){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35643,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35650){
var extmap__4512__auto__ = (function (){var G__35691 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35650,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35650)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35691);
} else {
return G__35691;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35650),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35650),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k35706,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__35714 = k35706;
var G__35714__$1 = (((G__35714 instanceof cljs.core.Keyword))?G__35714.fqn:null);
switch (G__35714__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35706,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__35718){
var vec__35719 = p__35718;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35719,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35719,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35705){
var self__ = this;
var G__35705__$1 = this;
return (new cljs.core.RecordIter((0),G__35705__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35707,other35708){
var self__ = this;
var this35707__$1 = this;
return (((!((other35708 == null)))) && ((((this35707__$1.constructor === other35708.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35707__$1.w,other35708.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35707__$1.h,other35708.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35707__$1.__extmap,other35708.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k35706){
var self__ = this;
var this__4479__auto____$1 = this;
var G__35738 = k35706;
var G__35738__$1 = (((G__35738 instanceof cljs.core.Keyword))?G__35738.fqn:null);
switch (G__35738__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35706);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__35705){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__35741 = cljs.core.keyword_identical_QMARK_;
var expr__35742 = k__4481__auto__;
if(cljs.core.truth_((pred__35741.cljs$core$IFn$_invoke$arity$2 ? pred__35741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35742) : pred__35741.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35742)))){
return (new shadow.dom.Size(G__35705,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35741.cljs$core$IFn$_invoke$arity$2 ? pred__35741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35742) : pred__35741.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35742)))){
return (new shadow.dom.Size(self__.w,G__35705,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__35705),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__35705){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35705,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35711){
var extmap__4512__auto__ = (function (){var G__35753 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35711,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35711)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35753);
} else {
return G__35753;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35711),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35711),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__36329 = (i + (1));
var G__36330 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36329;
ret = G__36330;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35774){
var vec__35775 = p__35774;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35775,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35775,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35786 = arguments.length;
switch (G__35786) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36339 = ps;
var G__36340 = (i + (1));
el__$1 = G__36339;
i = G__36340;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35820 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35820,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35820,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35820,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35823_36355 = cljs.core.seq(props);
var chunk__35824_36356 = null;
var count__35825_36357 = (0);
var i__35826_36358 = (0);
while(true){
if((i__35826_36358 < count__35825_36357)){
var vec__35833_36359 = chunk__35824_36356.cljs$core$IIndexed$_nth$arity$2(null,i__35826_36358);
var k_36360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35833_36359,(0),null);
var v_36361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35833_36359,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36360);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36360),v_36361);


var G__36363 = seq__35823_36355;
var G__36364 = chunk__35824_36356;
var G__36365 = count__35825_36357;
var G__36366 = (i__35826_36358 + (1));
seq__35823_36355 = G__36363;
chunk__35824_36356 = G__36364;
count__35825_36357 = G__36365;
i__35826_36358 = G__36366;
continue;
} else {
var temp__5753__auto___36368 = cljs.core.seq(seq__35823_36355);
if(temp__5753__auto___36368){
var seq__35823_36369__$1 = temp__5753__auto___36368;
if(cljs.core.chunked_seq_QMARK_(seq__35823_36369__$1)){
var c__4649__auto___36370 = cljs.core.chunk_first(seq__35823_36369__$1);
var G__36371 = cljs.core.chunk_rest(seq__35823_36369__$1);
var G__36372 = c__4649__auto___36370;
var G__36373 = cljs.core.count(c__4649__auto___36370);
var G__36374 = (0);
seq__35823_36355 = G__36371;
chunk__35824_36356 = G__36372;
count__35825_36357 = G__36373;
i__35826_36358 = G__36374;
continue;
} else {
var vec__35836_36379 = cljs.core.first(seq__35823_36369__$1);
var k_36380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35836_36379,(0),null);
var v_36381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35836_36379,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36380);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36380),v_36381);


var G__36386 = cljs.core.next(seq__35823_36369__$1);
var G__36387 = null;
var G__36388 = (0);
var G__36389 = (0);
seq__35823_36355 = G__36386;
chunk__35824_36356 = G__36387;
count__35825_36357 = G__36388;
i__35826_36358 = G__36389;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35841 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35841,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35841,(1),null);
var seq__35845_36390 = cljs.core.seq(node_children);
var chunk__35847_36391 = null;
var count__35848_36392 = (0);
var i__35849_36393 = (0);
while(true){
if((i__35849_36393 < count__35848_36392)){
var child_struct_36394 = chunk__35847_36391.cljs$core$IIndexed$_nth$arity$2(null,i__35849_36393);
if((!((child_struct_36394 == null)))){
if(typeof child_struct_36394 === 'string'){
var text_36397 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36397),child_struct_36394].join(''));
} else {
var children_36398 = shadow.dom.svg_node(child_struct_36394);
if(cljs.core.seq_QMARK_(children_36398)){
var seq__35868_36399 = cljs.core.seq(children_36398);
var chunk__35870_36400 = null;
var count__35871_36401 = (0);
var i__35872_36402 = (0);
while(true){
if((i__35872_36402 < count__35871_36401)){
var child_36403 = chunk__35870_36400.cljs$core$IIndexed$_nth$arity$2(null,i__35872_36402);
if(cljs.core.truth_(child_36403)){
node.appendChild(child_36403);


var G__36404 = seq__35868_36399;
var G__36405 = chunk__35870_36400;
var G__36406 = count__35871_36401;
var G__36407 = (i__35872_36402 + (1));
seq__35868_36399 = G__36404;
chunk__35870_36400 = G__36405;
count__35871_36401 = G__36406;
i__35872_36402 = G__36407;
continue;
} else {
var G__36408 = seq__35868_36399;
var G__36409 = chunk__35870_36400;
var G__36410 = count__35871_36401;
var G__36411 = (i__35872_36402 + (1));
seq__35868_36399 = G__36408;
chunk__35870_36400 = G__36409;
count__35871_36401 = G__36410;
i__35872_36402 = G__36411;
continue;
}
} else {
var temp__5753__auto___36412 = cljs.core.seq(seq__35868_36399);
if(temp__5753__auto___36412){
var seq__35868_36416__$1 = temp__5753__auto___36412;
if(cljs.core.chunked_seq_QMARK_(seq__35868_36416__$1)){
var c__4649__auto___36417 = cljs.core.chunk_first(seq__35868_36416__$1);
var G__36418 = cljs.core.chunk_rest(seq__35868_36416__$1);
var G__36419 = c__4649__auto___36417;
var G__36420 = cljs.core.count(c__4649__auto___36417);
var G__36421 = (0);
seq__35868_36399 = G__36418;
chunk__35870_36400 = G__36419;
count__35871_36401 = G__36420;
i__35872_36402 = G__36421;
continue;
} else {
var child_36422 = cljs.core.first(seq__35868_36416__$1);
if(cljs.core.truth_(child_36422)){
node.appendChild(child_36422);


var G__36423 = cljs.core.next(seq__35868_36416__$1);
var G__36424 = null;
var G__36425 = (0);
var G__36426 = (0);
seq__35868_36399 = G__36423;
chunk__35870_36400 = G__36424;
count__35871_36401 = G__36425;
i__35872_36402 = G__36426;
continue;
} else {
var G__36427 = cljs.core.next(seq__35868_36416__$1);
var G__36428 = null;
var G__36429 = (0);
var G__36430 = (0);
seq__35868_36399 = G__36427;
chunk__35870_36400 = G__36428;
count__35871_36401 = G__36429;
i__35872_36402 = G__36430;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36398);
}
}


var G__36436 = seq__35845_36390;
var G__36437 = chunk__35847_36391;
var G__36438 = count__35848_36392;
var G__36439 = (i__35849_36393 + (1));
seq__35845_36390 = G__36436;
chunk__35847_36391 = G__36437;
count__35848_36392 = G__36438;
i__35849_36393 = G__36439;
continue;
} else {
var G__36440 = seq__35845_36390;
var G__36441 = chunk__35847_36391;
var G__36442 = count__35848_36392;
var G__36443 = (i__35849_36393 + (1));
seq__35845_36390 = G__36440;
chunk__35847_36391 = G__36441;
count__35848_36392 = G__36442;
i__35849_36393 = G__36443;
continue;
}
} else {
var temp__5753__auto___36444 = cljs.core.seq(seq__35845_36390);
if(temp__5753__auto___36444){
var seq__35845_36450__$1 = temp__5753__auto___36444;
if(cljs.core.chunked_seq_QMARK_(seq__35845_36450__$1)){
var c__4649__auto___36460 = cljs.core.chunk_first(seq__35845_36450__$1);
var G__36461 = cljs.core.chunk_rest(seq__35845_36450__$1);
var G__36462 = c__4649__auto___36460;
var G__36463 = cljs.core.count(c__4649__auto___36460);
var G__36464 = (0);
seq__35845_36390 = G__36461;
chunk__35847_36391 = G__36462;
count__35848_36392 = G__36463;
i__35849_36393 = G__36464;
continue;
} else {
var child_struct_36469 = cljs.core.first(seq__35845_36450__$1);
if((!((child_struct_36469 == null)))){
if(typeof child_struct_36469 === 'string'){
var text_36470 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36470),child_struct_36469].join(''));
} else {
var children_36471 = shadow.dom.svg_node(child_struct_36469);
if(cljs.core.seq_QMARK_(children_36471)){
var seq__35878_36472 = cljs.core.seq(children_36471);
var chunk__35880_36473 = null;
var count__35881_36474 = (0);
var i__35882_36475 = (0);
while(true){
if((i__35882_36475 < count__35881_36474)){
var child_36476 = chunk__35880_36473.cljs$core$IIndexed$_nth$arity$2(null,i__35882_36475);
if(cljs.core.truth_(child_36476)){
node.appendChild(child_36476);


var G__36477 = seq__35878_36472;
var G__36478 = chunk__35880_36473;
var G__36479 = count__35881_36474;
var G__36480 = (i__35882_36475 + (1));
seq__35878_36472 = G__36477;
chunk__35880_36473 = G__36478;
count__35881_36474 = G__36479;
i__35882_36475 = G__36480;
continue;
} else {
var G__36481 = seq__35878_36472;
var G__36482 = chunk__35880_36473;
var G__36483 = count__35881_36474;
var G__36484 = (i__35882_36475 + (1));
seq__35878_36472 = G__36481;
chunk__35880_36473 = G__36482;
count__35881_36474 = G__36483;
i__35882_36475 = G__36484;
continue;
}
} else {
var temp__5753__auto___36485__$1 = cljs.core.seq(seq__35878_36472);
if(temp__5753__auto___36485__$1){
var seq__35878_36486__$1 = temp__5753__auto___36485__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35878_36486__$1)){
var c__4649__auto___36492 = cljs.core.chunk_first(seq__35878_36486__$1);
var G__36493 = cljs.core.chunk_rest(seq__35878_36486__$1);
var G__36494 = c__4649__auto___36492;
var G__36495 = cljs.core.count(c__4649__auto___36492);
var G__36496 = (0);
seq__35878_36472 = G__36493;
chunk__35880_36473 = G__36494;
count__35881_36474 = G__36495;
i__35882_36475 = G__36496;
continue;
} else {
var child_36497 = cljs.core.first(seq__35878_36486__$1);
if(cljs.core.truth_(child_36497)){
node.appendChild(child_36497);


var G__36501 = cljs.core.next(seq__35878_36486__$1);
var G__36502 = null;
var G__36503 = (0);
var G__36504 = (0);
seq__35878_36472 = G__36501;
chunk__35880_36473 = G__36502;
count__35881_36474 = G__36503;
i__35882_36475 = G__36504;
continue;
} else {
var G__36505 = cljs.core.next(seq__35878_36486__$1);
var G__36506 = null;
var G__36507 = (0);
var G__36508 = (0);
seq__35878_36472 = G__36505;
chunk__35880_36473 = G__36506;
count__35881_36474 = G__36507;
i__35882_36475 = G__36508;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36471);
}
}


var G__36509 = cljs.core.next(seq__35845_36450__$1);
var G__36510 = null;
var G__36511 = (0);
var G__36512 = (0);
seq__35845_36390 = G__36509;
chunk__35847_36391 = G__36510;
count__35848_36392 = G__36511;
i__35849_36393 = G__36512;
continue;
} else {
var G__36513 = cljs.core.next(seq__35845_36450__$1);
var G__36514 = null;
var G__36515 = (0);
var G__36516 = (0);
seq__35845_36390 = G__36513;
chunk__35847_36391 = G__36514;
count__35848_36392 = G__36515;
i__35849_36393 = G__36516;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36520 = arguments.length;
var i__4830__auto___36521 = (0);
while(true){
if((i__4830__auto___36521 < len__4829__auto___36520)){
args__4835__auto__.push((arguments[i__4830__auto___36521]));

var G__36522 = (i__4830__auto___36521 + (1));
i__4830__auto___36521 = G__36522;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35884){
var G__35885 = cljs.core.first(seq35884);
var seq35884__$1 = cljs.core.next(seq35884);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35885,seq35884__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35887 = arguments.length;
switch (G__35887) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__32697__auto___36524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_35902){
var state_val_35903 = (state_35902[(1)]);
if((state_val_35903 === (1))){
var state_35902__$1 = state_35902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35902__$1,(2),once_or_cleanup);
} else {
if((state_val_35903 === (2))){
var inst_35894 = (state_35902[(2)]);
var inst_35895 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35902__$1 = (function (){var statearr_35911 = state_35902;
(statearr_35911[(7)] = inst_35894);

return statearr_35911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35902__$1,inst_35895);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32465__auto__ = null;
var shadow$dom$state_machine__32465__auto____0 = (function (){
var statearr_35920 = [null,null,null,null,null,null,null,null];
(statearr_35920[(0)] = shadow$dom$state_machine__32465__auto__);

(statearr_35920[(1)] = (1));

return statearr_35920;
});
var shadow$dom$state_machine__32465__auto____1 = (function (state_35902){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_35902);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e35924){var ex__32468__auto__ = e35924;
var statearr_35929_36526 = state_35902;
(statearr_35929_36526[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_35902[(4)]))){
var statearr_35930_36530 = state_35902;
(statearr_35930_36530[(1)] = cljs.core.first((state_35902[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36531 = state_35902;
state_35902 = G__36531;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
shadow$dom$state_machine__32465__auto__ = function(state_35902){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32465__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32465__auto____1.call(this,state_35902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32465__auto____0;
shadow$dom$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32465__auto____1;
return shadow$dom$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_35941 = f__32698__auto__();
(statearr_35941[(6)] = c__32697__auto___36524);

return statearr_35941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

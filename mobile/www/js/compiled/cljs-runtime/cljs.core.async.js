goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32783 = arguments.length;
switch (G__32783) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32787 = (function (f,blockable,meta32788){
this.f = f;
this.blockable = blockable;
this.meta32788 = meta32788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32789,meta32788__$1){
var self__ = this;
var _32789__$1 = this;
return (new cljs.core.async.t_cljs$core$async32787(self__.f,self__.blockable,meta32788__$1));
}));

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32789){
var self__ = this;
var _32789__$1 = this;
return self__.meta32788;
}));

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32788","meta32788",448234998,null)], null);
}));

(cljs.core.async.t_cljs$core$async32787.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32787");

(cljs.core.async.t_cljs$core$async32787.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32787");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32787.
 */
cljs.core.async.__GT_t_cljs$core$async32787 = (function cljs$core$async$__GT_t_cljs$core$async32787(f__$1,blockable__$1,meta32788){
return (new cljs.core.async.t_cljs$core$async32787(f__$1,blockable__$1,meta32788));
});

}

return (new cljs.core.async.t_cljs$core$async32787(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32792 = arguments.length;
switch (G__32792) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32794 = arguments.length;
switch (G__32794) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32797 = arguments.length;
switch (G__32797) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35000 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35000) : fn1.call(null,val_35000));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35000) : fn1.call(null,val_35000));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32799 = arguments.length;
switch (G__32799) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___35004 = n;
var x_35005 = (0);
while(true){
if((x_35005 < n__4706__auto___35004)){
(a[x_35005] = x_35005);

var G__35007 = (x_35005 + (1));
x_35005 = G__35007;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32874 = (function (flag,meta32878){
this.flag = flag;
this.meta32878 = meta32878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32879,meta32878__$1){
var self__ = this;
var _32879__$1 = this;
return (new cljs.core.async.t_cljs$core$async32874(self__.flag,meta32878__$1));
}));

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32879){
var self__ = this;
var _32879__$1 = this;
return self__.meta32878;
}));

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32878","meta32878",-1776442060,null)], null);
}));

(cljs.core.async.t_cljs$core$async32874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32874");

(cljs.core.async.t_cljs$core$async32874.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32874.
 */
cljs.core.async.__GT_t_cljs$core$async32874 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32874(flag__$1,meta32878){
return (new cljs.core.async.t_cljs$core$async32874(flag__$1,meta32878));
});

}

return (new cljs.core.async.t_cljs$core$async32874(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32900 = (function (flag,cb,meta32901){
this.flag = flag;
this.cb = cb;
this.meta32901 = meta32901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32902,meta32901__$1){
var self__ = this;
var _32902__$1 = this;
return (new cljs.core.async.t_cljs$core$async32900(self__.flag,self__.cb,meta32901__$1));
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32902){
var self__ = this;
var _32902__$1 = this;
return self__.meta32901;
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32901","meta32901",-93370286,null)], null);
}));

(cljs.core.async.t_cljs$core$async32900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32900");

(cljs.core.async.t_cljs$core$async32900.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32900.
 */
cljs.core.async.__GT_t_cljs$core$async32900 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32900(flag__$1,cb__$1,meta32901){
return (new cljs.core.async.t_cljs$core$async32900(flag__$1,cb__$1,meta32901));
});

}

return (new cljs.core.async.t_cljs$core$async32900(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32904_SHARP_){
var G__32906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32904_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32906) : fret.call(null,G__32906));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32905_SHARP_){
var G__32907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32905_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32907) : fret.call(null,G__32907));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35011 = (i + (1));
i = G__35011;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35012 = arguments.length;
var i__4830__auto___35013 = (0);
while(true){
if((i__4830__auto___35013 < len__4829__auto___35012)){
args__4835__auto__.push((arguments[i__4830__auto___35013]));

var G__35014 = (i__4830__auto___35013 + (1));
i__4830__auto___35013 = G__35014;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32914){
var map__32919 = p__32914;
var map__32919__$1 = cljs.core.__destructure_map(map__32919);
var opts = map__32919__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32908){
var G__32909 = cljs.core.first(seq32908);
var seq32908__$1 = cljs.core.next(seq32908);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32909,seq32908__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32925 = arguments.length;
switch (G__32925) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32697__auto___35027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_32950){
var state_val_32951 = (state_32950[(1)]);
if((state_val_32951 === (7))){
var inst_32946 = (state_32950[(2)]);
var state_32950__$1 = state_32950;
var statearr_32954_35028 = state_32950__$1;
(statearr_32954_35028[(2)] = inst_32946);

(statearr_32954_35028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32951 === (1))){
var state_32950__$1 = state_32950;
var statearr_32955_35029 = state_32950__$1;
(statearr_32955_35029[(2)] = null);

(statearr_32955_35029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32951 === (4))){
var inst_32929 = (state_32950[(7)]);
var inst_32929__$1 = (state_32950[(2)]);
var inst_32930 = (inst_32929__$1 == null);
var state_32950__$1 = (function (){var statearr_32956 = state_32950;
(statearr_32956[(7)] = inst_32929__$1);

return statearr_32956;
})();
if(cljs.core.truth_(inst_32930)){
var statearr_32957_35031 = state_32950__$1;
(statearr_32957_35031[(1)] = (5));

} else {
var statearr_32958_35032 = state_32950__$1;
(statearr_32958_35032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32951 === (13))){
var state_32950__$1 = state_32950;
var statearr_32959_35033 = state_32950__$1;
(statearr_32959_35033[(2)] = null);

(statearr_32959_35033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32951 === (6))){
var inst_32929 = (state_32950[(7)]);
var state_32950__$1 = state_32950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32950__$1,(11),to,inst_32929);
} else {
if((state_val_32951 === (3))){
var inst_32948 = (state_32950[(2)]);
var state_32950__$1 = state_32950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32950__$1,inst_32948);
} else {
if((state_val_32951 === (12))){
var state_32950__$1 = state_32950;
var statearr_32960_35034 = state_32950__$1;
(statearr_32960_35034[(2)] = null);

(statearr_32960_35034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32951 === (2))){
var state_32950__$1 = state_32950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32950__$1,(4),from);
} else {
if((state_val_32951 === (11))){
var inst_32939 = (state_32950[(2)]);
var state_32950__$1 = state_32950;
if(cljs.core.truth_(inst_32939)){
var statearr_32961_35035 = state_32950__$1;
(statearr_32961_35035[(1)] = (12));

} else {
var statearr_32962_35036 = state_32950__$1;
(statearr_32962_35036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32951 === (9))){
var state_32950__$1 = state_32950;
var statearr_32963_35037 = state_32950__$1;
(statearr_32963_35037[(2)] = null);

(statearr_32963_35037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32951 === (5))){
var state_32950__$1 = state_32950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32965_35038 = state_32950__$1;
(statearr_32965_35038[(1)] = (8));

} else {
var statearr_32966_35039 = state_32950__$1;
(statearr_32966_35039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32951 === (14))){
var inst_32944 = (state_32950[(2)]);
var state_32950__$1 = state_32950;
var statearr_32967_35040 = state_32950__$1;
(statearr_32967_35040[(2)] = inst_32944);

(statearr_32967_35040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32951 === (10))){
var inst_32936 = (state_32950[(2)]);
var state_32950__$1 = state_32950;
var statearr_32968_35041 = state_32950__$1;
(statearr_32968_35041[(2)] = inst_32936);

(statearr_32968_35041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32951 === (8))){
var inst_32933 = cljs.core.async.close_BANG_(to);
var state_32950__$1 = state_32950;
var statearr_32969_35042 = state_32950__$1;
(statearr_32969_35042[(2)] = inst_32933);

(statearr_32969_35042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_32970 = [null,null,null,null,null,null,null,null];
(statearr_32970[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_32970[(1)] = (1));

return statearr_32970;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_32950){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_32950);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e32971){var ex__32468__auto__ = e32971;
var statearr_32972_35043 = state_32950;
(statearr_32972_35043[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_32950[(4)]))){
var statearr_32973_35045 = state_32950;
(statearr_32973_35045[(1)] = cljs.core.first((state_32950[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35046 = state_32950;
state_32950 = G__35046;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_32950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_32950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_32974 = f__32698__auto__();
(statearr_32974[(6)] = c__32697__auto___35027);

return statearr_32974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32976){
var vec__32977 = p__32976;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32977,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32977,(1),null);
var job = vec__32977;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32697__auto___35047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_32984){
var state_val_32985 = (state_32984[(1)]);
if((state_val_32985 === (1))){
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32984__$1,(2),res,v);
} else {
if((state_val_32985 === (2))){
var inst_32981 = (state_32984[(2)]);
var inst_32982 = cljs.core.async.close_BANG_(res);
var state_32984__$1 = (function (){var statearr_32986 = state_32984;
(statearr_32986[(7)] = inst_32981);

return statearr_32986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32984__$1,inst_32982);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0 = (function (){
var statearr_32987 = [null,null,null,null,null,null,null,null];
(statearr_32987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__);

(statearr_32987[(1)] = (1));

return statearr_32987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1 = (function (state_32984){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_32984);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e32988){var ex__32468__auto__ = e32988;
var statearr_32989_35050 = state_32984;
(statearr_32989_35050[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_32984[(4)]))){
var statearr_32990_35051 = state_32984;
(statearr_32990_35051[(1)] = cljs.core.first((state_32984[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35052 = state_32984;
state_32984 = G__35052;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__ = function(state_32984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1.call(this,state_32984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_32991 = f__32698__auto__();
(statearr_32991[(6)] = c__32697__auto___35047);

return statearr_32991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32992){
var vec__32993 = p__32992;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32993,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32993,(1),null);
var job = vec__32993;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___35053 = n;
var __35054 = (0);
while(true){
if((__35054 < n__4706__auto___35053)){
var G__32996_35055 = type;
var G__32996_35056__$1 = (((G__32996_35055 instanceof cljs.core.Keyword))?G__32996_35055.fqn:null);
switch (G__32996_35056__$1) {
case "compute":
var c__32697__auto___35058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35054,c__32697__auto___35058,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async){
return (function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = ((function (__35054,c__32697__auto___35058,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async){
return (function (state_33009){
var state_val_33010 = (state_33009[(1)]);
if((state_val_33010 === (1))){
var state_33009__$1 = state_33009;
var statearr_33011_35059 = state_33009__$1;
(statearr_33011_35059[(2)] = null);

(statearr_33011_35059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (2))){
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33009__$1,(4),jobs);
} else {
if((state_val_33010 === (3))){
var inst_33007 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33009__$1,inst_33007);
} else {
if((state_val_33010 === (4))){
var inst_32999 = (state_33009[(2)]);
var inst_33000 = process(inst_32999);
var state_33009__$1 = state_33009;
if(cljs.core.truth_(inst_33000)){
var statearr_33012_35060 = state_33009__$1;
(statearr_33012_35060[(1)] = (5));

} else {
var statearr_33013_35061 = state_33009__$1;
(statearr_33013_35061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (5))){
var state_33009__$1 = state_33009;
var statearr_33014_35062 = state_33009__$1;
(statearr_33014_35062[(2)] = null);

(statearr_33014_35062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (6))){
var state_33009__$1 = state_33009;
var statearr_33015_35063 = state_33009__$1;
(statearr_33015_35063[(2)] = null);

(statearr_33015_35063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (7))){
var inst_33005 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33016_35064 = state_33009__$1;
(statearr_33016_35064[(2)] = inst_33005);

(statearr_33016_35064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35054,c__32697__auto___35058,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async))
;
return ((function (__35054,switch__32464__auto__,c__32697__auto___35058,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0 = (function (){
var statearr_33017 = [null,null,null,null,null,null,null];
(statearr_33017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__);

(statearr_33017[(1)] = (1));

return statearr_33017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1 = (function (state_33009){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_33009);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e33018){var ex__32468__auto__ = e33018;
var statearr_33019_35065 = state_33009;
(statearr_33019_35065[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_33009[(4)]))){
var statearr_33020_35066 = state_33009;
(statearr_33020_35066[(1)] = cljs.core.first((state_33009[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35067 = state_33009;
state_33009 = G__35067;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__ = function(state_33009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1.call(this,state_33009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__;
})()
;})(__35054,switch__32464__auto__,c__32697__auto___35058,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async))
})();
var state__32699__auto__ = (function (){var statearr_33021 = f__32698__auto__();
(statearr_33021[(6)] = c__32697__auto___35058);

return statearr_33021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
});})(__35054,c__32697__auto___35058,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async))
);


break;
case "async":
var c__32697__auto___35068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35054,c__32697__auto___35068,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async){
return (function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = ((function (__35054,c__32697__auto___35068,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async){
return (function (state_33034){
var state_val_33035 = (state_33034[(1)]);
if((state_val_33035 === (1))){
var state_33034__$1 = state_33034;
var statearr_33036_35069 = state_33034__$1;
(statearr_33036_35069[(2)] = null);

(statearr_33036_35069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (2))){
var state_33034__$1 = state_33034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33034__$1,(4),jobs);
} else {
if((state_val_33035 === (3))){
var inst_33032 = (state_33034[(2)]);
var state_33034__$1 = state_33034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33034__$1,inst_33032);
} else {
if((state_val_33035 === (4))){
var inst_33024 = (state_33034[(2)]);
var inst_33025 = async(inst_33024);
var state_33034__$1 = state_33034;
if(cljs.core.truth_(inst_33025)){
var statearr_33037_35071 = state_33034__$1;
(statearr_33037_35071[(1)] = (5));

} else {
var statearr_33038_35072 = state_33034__$1;
(statearr_33038_35072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (5))){
var state_33034__$1 = state_33034;
var statearr_33039_35073 = state_33034__$1;
(statearr_33039_35073[(2)] = null);

(statearr_33039_35073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (6))){
var state_33034__$1 = state_33034;
var statearr_33040_35074 = state_33034__$1;
(statearr_33040_35074[(2)] = null);

(statearr_33040_35074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (7))){
var inst_33030 = (state_33034[(2)]);
var state_33034__$1 = state_33034;
var statearr_33041_35075 = state_33034__$1;
(statearr_33041_35075[(2)] = inst_33030);

(statearr_33041_35075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35054,c__32697__auto___35068,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async))
;
return ((function (__35054,switch__32464__auto__,c__32697__auto___35068,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0 = (function (){
var statearr_33042 = [null,null,null,null,null,null,null];
(statearr_33042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__);

(statearr_33042[(1)] = (1));

return statearr_33042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1 = (function (state_33034){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_33034);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e33043){var ex__32468__auto__ = e33043;
var statearr_33044_35076 = state_33034;
(statearr_33044_35076[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_33034[(4)]))){
var statearr_33045_35078 = state_33034;
(statearr_33045_35078[(1)] = cljs.core.first((state_33034[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35080 = state_33034;
state_33034 = G__35080;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__ = function(state_33034){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1.call(this,state_33034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__;
})()
;})(__35054,switch__32464__auto__,c__32697__auto___35068,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async))
})();
var state__32699__auto__ = (function (){var statearr_33046 = f__32698__auto__();
(statearr_33046[(6)] = c__32697__auto___35068);

return statearr_33046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
});})(__35054,c__32697__auto___35068,G__32996_35055,G__32996_35056__$1,n__4706__auto___35053,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32996_35056__$1)].join('')));

}

var G__35081 = (__35054 + (1));
__35054 = G__35081;
continue;
} else {
}
break;
}

var c__32697__auto___35082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_33068){
var state_val_33069 = (state_33068[(1)]);
if((state_val_33069 === (7))){
var inst_33064 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
var statearr_33070_35083 = state_33068__$1;
(statearr_33070_35083[(2)] = inst_33064);

(statearr_33070_35083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (1))){
var state_33068__$1 = state_33068;
var statearr_33071_35084 = state_33068__$1;
(statearr_33071_35084[(2)] = null);

(statearr_33071_35084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (4))){
var inst_33049 = (state_33068[(7)]);
var inst_33049__$1 = (state_33068[(2)]);
var inst_33050 = (inst_33049__$1 == null);
var state_33068__$1 = (function (){var statearr_33072 = state_33068;
(statearr_33072[(7)] = inst_33049__$1);

return statearr_33072;
})();
if(cljs.core.truth_(inst_33050)){
var statearr_33073_35085 = state_33068__$1;
(statearr_33073_35085[(1)] = (5));

} else {
var statearr_33074_35086 = state_33068__$1;
(statearr_33074_35086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (6))){
var inst_33054 = (state_33068[(8)]);
var inst_33049 = (state_33068[(7)]);
var inst_33054__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33055 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33056 = [inst_33049,inst_33054__$1];
var inst_33057 = (new cljs.core.PersistentVector(null,2,(5),inst_33055,inst_33056,null));
var state_33068__$1 = (function (){var statearr_33075 = state_33068;
(statearr_33075[(8)] = inst_33054__$1);

return statearr_33075;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33068__$1,(8),jobs,inst_33057);
} else {
if((state_val_33069 === (3))){
var inst_33066 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33068__$1,inst_33066);
} else {
if((state_val_33069 === (2))){
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33068__$1,(4),from);
} else {
if((state_val_33069 === (9))){
var inst_33061 = (state_33068[(2)]);
var state_33068__$1 = (function (){var statearr_33076 = state_33068;
(statearr_33076[(9)] = inst_33061);

return statearr_33076;
})();
var statearr_33077_35089 = state_33068__$1;
(statearr_33077_35089[(2)] = null);

(statearr_33077_35089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (5))){
var inst_33052 = cljs.core.async.close_BANG_(jobs);
var state_33068__$1 = state_33068;
var statearr_33078_35090 = state_33068__$1;
(statearr_33078_35090[(2)] = inst_33052);

(statearr_33078_35090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (8))){
var inst_33054 = (state_33068[(8)]);
var inst_33059 = (state_33068[(2)]);
var state_33068__$1 = (function (){var statearr_33079 = state_33068;
(statearr_33079[(10)] = inst_33059);

return statearr_33079;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33068__$1,(9),results,inst_33054);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0 = (function (){
var statearr_33080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__);

(statearr_33080[(1)] = (1));

return statearr_33080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1 = (function (state_33068){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_33068);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e33081){var ex__32468__auto__ = e33081;
var statearr_33082_35091 = state_33068;
(statearr_33082_35091[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_33068[(4)]))){
var statearr_33083_35092 = state_33068;
(statearr_33083_35092[(1)] = cljs.core.first((state_33068[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35093 = state_33068;
state_33068 = G__35093;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__ = function(state_33068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1.call(this,state_33068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_33084 = f__32698__auto__();
(statearr_33084[(6)] = c__32697__auto___35082);

return statearr_33084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


var c__32697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_33122){
var state_val_33123 = (state_33122[(1)]);
if((state_val_33123 === (7))){
var inst_33118 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33124_35094 = state_33122__$1;
(statearr_33124_35094[(2)] = inst_33118);

(statearr_33124_35094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (20))){
var state_33122__$1 = state_33122;
var statearr_33125_35095 = state_33122__$1;
(statearr_33125_35095[(2)] = null);

(statearr_33125_35095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (1))){
var state_33122__$1 = state_33122;
var statearr_33126_35096 = state_33122__$1;
(statearr_33126_35096[(2)] = null);

(statearr_33126_35096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (4))){
var inst_33087 = (state_33122[(7)]);
var inst_33087__$1 = (state_33122[(2)]);
var inst_33088 = (inst_33087__$1 == null);
var state_33122__$1 = (function (){var statearr_33127 = state_33122;
(statearr_33127[(7)] = inst_33087__$1);

return statearr_33127;
})();
if(cljs.core.truth_(inst_33088)){
var statearr_33128_35097 = state_33122__$1;
(statearr_33128_35097[(1)] = (5));

} else {
var statearr_33129_35098 = state_33122__$1;
(statearr_33129_35098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (15))){
var inst_33100 = (state_33122[(8)]);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33122__$1,(18),to,inst_33100);
} else {
if((state_val_33123 === (21))){
var inst_33113 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33130_35099 = state_33122__$1;
(statearr_33130_35099[(2)] = inst_33113);

(statearr_33130_35099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (13))){
var inst_33115 = (state_33122[(2)]);
var state_33122__$1 = (function (){var statearr_33131 = state_33122;
(statearr_33131[(9)] = inst_33115);

return statearr_33131;
})();
var statearr_33132_35100 = state_33122__$1;
(statearr_33132_35100[(2)] = null);

(statearr_33132_35100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (6))){
var inst_33087 = (state_33122[(7)]);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33122__$1,(11),inst_33087);
} else {
if((state_val_33123 === (17))){
var inst_33108 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
if(cljs.core.truth_(inst_33108)){
var statearr_33133_35101 = state_33122__$1;
(statearr_33133_35101[(1)] = (19));

} else {
var statearr_33134_35102 = state_33122__$1;
(statearr_33134_35102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (3))){
var inst_33120 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33122__$1,inst_33120);
} else {
if((state_val_33123 === (12))){
var inst_33097 = (state_33122[(10)]);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33122__$1,(14),inst_33097);
} else {
if((state_val_33123 === (2))){
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33122__$1,(4),results);
} else {
if((state_val_33123 === (19))){
var state_33122__$1 = state_33122;
var statearr_33135_35103 = state_33122__$1;
(statearr_33135_35103[(2)] = null);

(statearr_33135_35103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (11))){
var inst_33097 = (state_33122[(2)]);
var state_33122__$1 = (function (){var statearr_33136 = state_33122;
(statearr_33136[(10)] = inst_33097);

return statearr_33136;
})();
var statearr_33137_35104 = state_33122__$1;
(statearr_33137_35104[(2)] = null);

(statearr_33137_35104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (9))){
var state_33122__$1 = state_33122;
var statearr_33138_35106 = state_33122__$1;
(statearr_33138_35106[(2)] = null);

(statearr_33138_35106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (5))){
var state_33122__$1 = state_33122;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33139_35107 = state_33122__$1;
(statearr_33139_35107[(1)] = (8));

} else {
var statearr_33141_35108 = state_33122__$1;
(statearr_33141_35108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (14))){
var inst_33100 = (state_33122[(8)]);
var inst_33102 = (state_33122[(11)]);
var inst_33100__$1 = (state_33122[(2)]);
var inst_33101 = (inst_33100__$1 == null);
var inst_33102__$1 = cljs.core.not(inst_33101);
var state_33122__$1 = (function (){var statearr_33146 = state_33122;
(statearr_33146[(8)] = inst_33100__$1);

(statearr_33146[(11)] = inst_33102__$1);

return statearr_33146;
})();
if(inst_33102__$1){
var statearr_33147_35109 = state_33122__$1;
(statearr_33147_35109[(1)] = (15));

} else {
var statearr_33148_35110 = state_33122__$1;
(statearr_33148_35110[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (16))){
var inst_33102 = (state_33122[(11)]);
var state_33122__$1 = state_33122;
var statearr_33149_35111 = state_33122__$1;
(statearr_33149_35111[(2)] = inst_33102);

(statearr_33149_35111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (10))){
var inst_33094 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33150_35112 = state_33122__$1;
(statearr_33150_35112[(2)] = inst_33094);

(statearr_33150_35112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (18))){
var inst_33105 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33152_35114 = state_33122__$1;
(statearr_33152_35114[(2)] = inst_33105);

(statearr_33152_35114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (8))){
var inst_33091 = cljs.core.async.close_BANG_(to);
var state_33122__$1 = state_33122;
var statearr_33153_35115 = state_33122__$1;
(statearr_33153_35115[(2)] = inst_33091);

(statearr_33153_35115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0 = (function (){
var statearr_33154 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__);

(statearr_33154[(1)] = (1));

return statearr_33154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1 = (function (state_33122){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_33122);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e33155){var ex__32468__auto__ = e33155;
var statearr_33156_35116 = state_33122;
(statearr_33156_35116[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_33122[(4)]))){
var statearr_33157_35117 = state_33122;
(statearr_33157_35117[(1)] = cljs.core.first((state_33122[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35118 = state_33122;
state_33122 = G__35118;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__ = function(state_33122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1.call(this,state_33122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_33158 = f__32698__auto__();
(statearr_33158[(6)] = c__32697__auto__);

return statearr_33158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));

return c__32697__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33160 = arguments.length;
switch (G__33160) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33167 = arguments.length;
switch (G__33167) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33194 = arguments.length;
switch (G__33194) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32697__auto___35122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_33233){
var state_val_33234 = (state_33233[(1)]);
if((state_val_33234 === (7))){
var inst_33229 = (state_33233[(2)]);
var state_33233__$1 = state_33233;
var statearr_33235_35123 = state_33233__$1;
(statearr_33235_35123[(2)] = inst_33229);

(statearr_33235_35123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33234 === (1))){
var state_33233__$1 = state_33233;
var statearr_33236_35124 = state_33233__$1;
(statearr_33236_35124[(2)] = null);

(statearr_33236_35124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33234 === (4))){
var inst_33206 = (state_33233[(7)]);
var inst_33206__$1 = (state_33233[(2)]);
var inst_33211 = (inst_33206__$1 == null);
var state_33233__$1 = (function (){var statearr_33239 = state_33233;
(statearr_33239[(7)] = inst_33206__$1);

return statearr_33239;
})();
if(cljs.core.truth_(inst_33211)){
var statearr_33241_35125 = state_33233__$1;
(statearr_33241_35125[(1)] = (5));

} else {
var statearr_33242_35126 = state_33233__$1;
(statearr_33242_35126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33234 === (13))){
var state_33233__$1 = state_33233;
var statearr_33243_35127 = state_33233__$1;
(statearr_33243_35127[(2)] = null);

(statearr_33243_35127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33234 === (6))){
var inst_33206 = (state_33233[(7)]);
var inst_33216 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33206) : p.call(null,inst_33206));
var state_33233__$1 = state_33233;
if(cljs.core.truth_(inst_33216)){
var statearr_33244_35132 = state_33233__$1;
(statearr_33244_35132[(1)] = (9));

} else {
var statearr_33245_35133 = state_33233__$1;
(statearr_33245_35133[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33234 === (3))){
var inst_33231 = (state_33233[(2)]);
var state_33233__$1 = state_33233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33233__$1,inst_33231);
} else {
if((state_val_33234 === (12))){
var state_33233__$1 = state_33233;
var statearr_33248_35135 = state_33233__$1;
(statearr_33248_35135[(2)] = null);

(statearr_33248_35135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33234 === (2))){
var state_33233__$1 = state_33233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33233__$1,(4),ch);
} else {
if((state_val_33234 === (11))){
var inst_33206 = (state_33233[(7)]);
var inst_33220 = (state_33233[(2)]);
var state_33233__$1 = state_33233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33233__$1,(8),inst_33220,inst_33206);
} else {
if((state_val_33234 === (9))){
var state_33233__$1 = state_33233;
var statearr_33250_35138 = state_33233__$1;
(statearr_33250_35138[(2)] = tc);

(statearr_33250_35138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33234 === (5))){
var inst_33213 = cljs.core.async.close_BANG_(tc);
var inst_33214 = cljs.core.async.close_BANG_(fc);
var state_33233__$1 = (function (){var statearr_33253 = state_33233;
(statearr_33253[(8)] = inst_33213);

return statearr_33253;
})();
var statearr_33256_35148 = state_33233__$1;
(statearr_33256_35148[(2)] = inst_33214);

(statearr_33256_35148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33234 === (14))){
var inst_33227 = (state_33233[(2)]);
var state_33233__$1 = state_33233;
var statearr_33257_35149 = state_33233__$1;
(statearr_33257_35149[(2)] = inst_33227);

(statearr_33257_35149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33234 === (10))){
var state_33233__$1 = state_33233;
var statearr_33258_35153 = state_33233__$1;
(statearr_33258_35153[(2)] = fc);

(statearr_33258_35153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33234 === (8))){
var inst_33222 = (state_33233[(2)]);
var state_33233__$1 = state_33233;
if(cljs.core.truth_(inst_33222)){
var statearr_33259_35154 = state_33233__$1;
(statearr_33259_35154[(1)] = (12));

} else {
var statearr_33260_35155 = state_33233__$1;
(statearr_33260_35155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_33262 = [null,null,null,null,null,null,null,null,null];
(statearr_33262[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_33262[(1)] = (1));

return statearr_33262;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_33233){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_33233);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e33269){var ex__32468__auto__ = e33269;
var statearr_33270_35157 = state_33233;
(statearr_33270_35157[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_33233[(4)]))){
var statearr_33272_35158 = state_33233;
(statearr_33272_35158[(1)] = cljs.core.first((state_33233[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35159 = state_33233;
state_33233 = G__35159;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_33233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_33233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_33273 = f__32698__auto__();
(statearr_33273[(6)] = c__32697__auto___35122);

return statearr_33273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_33301){
var state_val_33302 = (state_33301[(1)]);
if((state_val_33302 === (7))){
var inst_33296 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33328_35168 = state_33301__$1;
(statearr_33328_35168[(2)] = inst_33296);

(statearr_33328_35168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (1))){
var inst_33278 = init;
var inst_33279 = inst_33278;
var state_33301__$1 = (function (){var statearr_33329 = state_33301;
(statearr_33329[(7)] = inst_33279);

return statearr_33329;
})();
var statearr_33331_35169 = state_33301__$1;
(statearr_33331_35169[(2)] = null);

(statearr_33331_35169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (4))){
var inst_33282 = (state_33301[(8)]);
var inst_33282__$1 = (state_33301[(2)]);
var inst_33284 = (inst_33282__$1 == null);
var state_33301__$1 = (function (){var statearr_33332 = state_33301;
(statearr_33332[(8)] = inst_33282__$1);

return statearr_33332;
})();
if(cljs.core.truth_(inst_33284)){
var statearr_33334_35170 = state_33301__$1;
(statearr_33334_35170[(1)] = (5));

} else {
var statearr_33335_35171 = state_33301__$1;
(statearr_33335_35171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (6))){
var inst_33282 = (state_33301[(8)]);
var inst_33287 = (state_33301[(9)]);
var inst_33279 = (state_33301[(7)]);
var inst_33287__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33279,inst_33282) : f.call(null,inst_33279,inst_33282));
var inst_33288 = cljs.core.reduced_QMARK_(inst_33287__$1);
var state_33301__$1 = (function (){var statearr_33337 = state_33301;
(statearr_33337[(9)] = inst_33287__$1);

return statearr_33337;
})();
if(inst_33288){
var statearr_33350_35172 = state_33301__$1;
(statearr_33350_35172[(1)] = (8));

} else {
var statearr_33359_35173 = state_33301__$1;
(statearr_33359_35173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (3))){
var inst_33298 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33301__$1,inst_33298);
} else {
if((state_val_33302 === (2))){
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33301__$1,(4),ch);
} else {
if((state_val_33302 === (9))){
var inst_33287 = (state_33301[(9)]);
var inst_33279 = inst_33287;
var state_33301__$1 = (function (){var statearr_33361 = state_33301;
(statearr_33361[(7)] = inst_33279);

return statearr_33361;
})();
var statearr_33362_35174 = state_33301__$1;
(statearr_33362_35174[(2)] = null);

(statearr_33362_35174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (5))){
var inst_33279 = (state_33301[(7)]);
var state_33301__$1 = state_33301;
var statearr_33363_35175 = state_33301__$1;
(statearr_33363_35175[(2)] = inst_33279);

(statearr_33363_35175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (10))){
var inst_33294 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33364_35176 = state_33301__$1;
(statearr_33364_35176[(2)] = inst_33294);

(statearr_33364_35176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (8))){
var inst_33287 = (state_33301[(9)]);
var inst_33290 = cljs.core.deref(inst_33287);
var state_33301__$1 = state_33301;
var statearr_33365_35178 = state_33301__$1;
(statearr_33365_35178[(2)] = inst_33290);

(statearr_33365_35178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32465__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32465__auto____0 = (function (){
var statearr_33366 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33366[(0)] = cljs$core$async$reduce_$_state_machine__32465__auto__);

(statearr_33366[(1)] = (1));

return statearr_33366;
});
var cljs$core$async$reduce_$_state_machine__32465__auto____1 = (function (state_33301){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_33301);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e33367){var ex__32468__auto__ = e33367;
var statearr_33368_35180 = state_33301;
(statearr_33368_35180[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_33301[(4)]))){
var statearr_33369_35181 = state_33301;
(statearr_33369_35181[(1)] = cljs.core.first((state_33301[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35182 = state_33301;
state_33301 = G__35182;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32465__auto__ = function(state_33301){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32465__auto____1.call(this,state_33301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32465__auto____0;
cljs$core$async$reduce_$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32465__auto____1;
return cljs$core$async$reduce_$_state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_33370 = f__32698__auto__();
(statearr_33370[(6)] = c__32697__auto__);

return statearr_33370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));

return c__32697__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_33376){
var state_val_33377 = (state_33376[(1)]);
if((state_val_33377 === (1))){
var inst_33371 = cljs.core.async.reduce(f__$1,init,ch);
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33376__$1,(2),inst_33371);
} else {
if((state_val_33377 === (2))){
var inst_33373 = (state_33376[(2)]);
var inst_33374 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33373) : f__$1.call(null,inst_33373));
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33376__$1,inst_33374);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32465__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32465__auto____0 = (function (){
var statearr_33378 = [null,null,null,null,null,null,null];
(statearr_33378[(0)] = cljs$core$async$transduce_$_state_machine__32465__auto__);

(statearr_33378[(1)] = (1));

return statearr_33378;
});
var cljs$core$async$transduce_$_state_machine__32465__auto____1 = (function (state_33376){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_33376);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e33379){var ex__32468__auto__ = e33379;
var statearr_33380_35183 = state_33376;
(statearr_33380_35183[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_33376[(4)]))){
var statearr_33381_35184 = state_33376;
(statearr_33381_35184[(1)] = cljs.core.first((state_33376[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35185 = state_33376;
state_33376 = G__35185;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32465__auto__ = function(state_33376){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32465__auto____1.call(this,state_33376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32465__auto____0;
cljs$core$async$transduce_$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32465__auto____1;
return cljs$core$async$transduce_$_state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_33382 = f__32698__auto__();
(statearr_33382[(6)] = c__32697__auto__);

return statearr_33382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));

return c__32697__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33385 = arguments.length;
switch (G__33385) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_33410){
var state_val_33411 = (state_33410[(1)]);
if((state_val_33411 === (7))){
var inst_33392 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33412_35194 = state_33410__$1;
(statearr_33412_35194[(2)] = inst_33392);

(statearr_33412_35194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (1))){
var inst_33386 = cljs.core.seq(coll);
var inst_33387 = inst_33386;
var state_33410__$1 = (function (){var statearr_33413 = state_33410;
(statearr_33413[(7)] = inst_33387);

return statearr_33413;
})();
var statearr_33414_35198 = state_33410__$1;
(statearr_33414_35198[(2)] = null);

(statearr_33414_35198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (4))){
var inst_33387 = (state_33410[(7)]);
var inst_33390 = cljs.core.first(inst_33387);
var state_33410__$1 = state_33410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33410__$1,(7),ch,inst_33390);
} else {
if((state_val_33411 === (13))){
var inst_33404 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33415_35199 = state_33410__$1;
(statearr_33415_35199[(2)] = inst_33404);

(statearr_33415_35199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (6))){
var inst_33395 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
if(cljs.core.truth_(inst_33395)){
var statearr_33416_35200 = state_33410__$1;
(statearr_33416_35200[(1)] = (8));

} else {
var statearr_33417_35201 = state_33410__$1;
(statearr_33417_35201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (3))){
var inst_33408 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33410__$1,inst_33408);
} else {
if((state_val_33411 === (12))){
var state_33410__$1 = state_33410;
var statearr_33418_35202 = state_33410__$1;
(statearr_33418_35202[(2)] = null);

(statearr_33418_35202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (2))){
var inst_33387 = (state_33410[(7)]);
var state_33410__$1 = state_33410;
if(cljs.core.truth_(inst_33387)){
var statearr_33419_35210 = state_33410__$1;
(statearr_33419_35210[(1)] = (4));

} else {
var statearr_33420_35211 = state_33410__$1;
(statearr_33420_35211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (11))){
var inst_33401 = cljs.core.async.close_BANG_(ch);
var state_33410__$1 = state_33410;
var statearr_33421_35212 = state_33410__$1;
(statearr_33421_35212[(2)] = inst_33401);

(statearr_33421_35212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (9))){
var state_33410__$1 = state_33410;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33422_35213 = state_33410__$1;
(statearr_33422_35213[(1)] = (11));

} else {
var statearr_33423_35214 = state_33410__$1;
(statearr_33423_35214[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (5))){
var inst_33387 = (state_33410[(7)]);
var state_33410__$1 = state_33410;
var statearr_33424_35216 = state_33410__$1;
(statearr_33424_35216[(2)] = inst_33387);

(statearr_33424_35216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (10))){
var inst_33406 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33426_35217 = state_33410__$1;
(statearr_33426_35217[(2)] = inst_33406);

(statearr_33426_35217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (8))){
var inst_33387 = (state_33410[(7)]);
var inst_33397 = cljs.core.next(inst_33387);
var inst_33387__$1 = inst_33397;
var state_33410__$1 = (function (){var statearr_33427 = state_33410;
(statearr_33427[(7)] = inst_33387__$1);

return statearr_33427;
})();
var statearr_33428_35221 = state_33410__$1;
(statearr_33428_35221[(2)] = null);

(statearr_33428_35221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_33429 = [null,null,null,null,null,null,null,null];
(statearr_33429[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_33429[(1)] = (1));

return statearr_33429;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_33410){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_33410);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e33430){var ex__32468__auto__ = e33430;
var statearr_33431_35231 = state_33410;
(statearr_33431_35231[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_33410[(4)]))){
var statearr_33432_35232 = state_33410;
(statearr_33432_35232[(1)] = cljs.core.first((state_33410[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35233 = state_33410;
state_33410 = G__35233;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_33410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_33410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_33433 = f__32698__auto__();
(statearr_33433[(6)] = c__32697__auto__);

return statearr_33433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));

return c__32697__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33435 = arguments.length;
switch (G__33435) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35239 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35239(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35250 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35250(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35252 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35252(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35253 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35253(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33439 = (function (ch,cs,meta33440){
this.ch = ch;
this.cs = cs;
this.meta33440 = meta33440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33441,meta33440__$1){
var self__ = this;
var _33441__$1 = this;
return (new cljs.core.async.t_cljs$core$async33439(self__.ch,self__.cs,meta33440__$1));
}));

(cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33441){
var self__ = this;
var _33441__$1 = this;
return self__.meta33440;
}));

(cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33440","meta33440",1354243826,null)], null);
}));

(cljs.core.async.t_cljs$core$async33439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33439");

(cljs.core.async.t_cljs$core$async33439.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33439.
 */
cljs.core.async.__GT_t_cljs$core$async33439 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33439(ch__$1,cs__$1,meta33440){
return (new cljs.core.async.t_cljs$core$async33439(ch__$1,cs__$1,meta33440));
});

}

return (new cljs.core.async.t_cljs$core$async33439(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32697__auto___35266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_33578){
var state_val_33579 = (state_33578[(1)]);
if((state_val_33579 === (7))){
var inst_33574 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33581_35270 = state_33578__$1;
(statearr_33581_35270[(2)] = inst_33574);

(statearr_33581_35270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (20))){
var inst_33478 = (state_33578[(7)]);
var inst_33490 = cljs.core.first(inst_33478);
var inst_33491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33490,(0),null);
var inst_33492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33490,(1),null);
var state_33578__$1 = (function (){var statearr_33582 = state_33578;
(statearr_33582[(8)] = inst_33491);

return statearr_33582;
})();
if(cljs.core.truth_(inst_33492)){
var statearr_33583_35274 = state_33578__$1;
(statearr_33583_35274[(1)] = (22));

} else {
var statearr_33584_35276 = state_33578__$1;
(statearr_33584_35276[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (27))){
var inst_33446 = (state_33578[(9)]);
var inst_33527 = (state_33578[(10)]);
var inst_33522 = (state_33578[(11)]);
var inst_33520 = (state_33578[(12)]);
var inst_33527__$1 = cljs.core._nth(inst_33520,inst_33522);
var inst_33528 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33527__$1,inst_33446,done);
var state_33578__$1 = (function (){var statearr_33585 = state_33578;
(statearr_33585[(10)] = inst_33527__$1);

return statearr_33585;
})();
if(cljs.core.truth_(inst_33528)){
var statearr_33586_35277 = state_33578__$1;
(statearr_33586_35277[(1)] = (30));

} else {
var statearr_33587_35278 = state_33578__$1;
(statearr_33587_35278[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (1))){
var state_33578__$1 = state_33578;
var statearr_33589_35279 = state_33578__$1;
(statearr_33589_35279[(2)] = null);

(statearr_33589_35279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (24))){
var inst_33478 = (state_33578[(7)]);
var inst_33497 = (state_33578[(2)]);
var inst_33498 = cljs.core.next(inst_33478);
var inst_33455 = inst_33498;
var inst_33456 = null;
var inst_33457 = (0);
var inst_33458 = (0);
var state_33578__$1 = (function (){var statearr_33590 = state_33578;
(statearr_33590[(13)] = inst_33455);

(statearr_33590[(14)] = inst_33456);

(statearr_33590[(15)] = inst_33457);

(statearr_33590[(16)] = inst_33497);

(statearr_33590[(17)] = inst_33458);

return statearr_33590;
})();
var statearr_33591_35280 = state_33578__$1;
(statearr_33591_35280[(2)] = null);

(statearr_33591_35280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (39))){
var state_33578__$1 = state_33578;
var statearr_33596_35281 = state_33578__$1;
(statearr_33596_35281[(2)] = null);

(statearr_33596_35281[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (4))){
var inst_33446 = (state_33578[(9)]);
var inst_33446__$1 = (state_33578[(2)]);
var inst_33447 = (inst_33446__$1 == null);
var state_33578__$1 = (function (){var statearr_33597 = state_33578;
(statearr_33597[(9)] = inst_33446__$1);

return statearr_33597;
})();
if(cljs.core.truth_(inst_33447)){
var statearr_33598_35282 = state_33578__$1;
(statearr_33598_35282[(1)] = (5));

} else {
var statearr_33599_35283 = state_33578__$1;
(statearr_33599_35283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (15))){
var inst_33455 = (state_33578[(13)]);
var inst_33456 = (state_33578[(14)]);
var inst_33457 = (state_33578[(15)]);
var inst_33458 = (state_33578[(17)]);
var inst_33474 = (state_33578[(2)]);
var inst_33475 = (inst_33458 + (1));
var tmp33592 = inst_33455;
var tmp33593 = inst_33456;
var tmp33594 = inst_33457;
var inst_33455__$1 = tmp33592;
var inst_33456__$1 = tmp33593;
var inst_33457__$1 = tmp33594;
var inst_33458__$1 = inst_33475;
var state_33578__$1 = (function (){var statearr_33600 = state_33578;
(statearr_33600[(18)] = inst_33474);

(statearr_33600[(13)] = inst_33455__$1);

(statearr_33600[(14)] = inst_33456__$1);

(statearr_33600[(15)] = inst_33457__$1);

(statearr_33600[(17)] = inst_33458__$1);

return statearr_33600;
})();
var statearr_33601_35285 = state_33578__$1;
(statearr_33601_35285[(2)] = null);

(statearr_33601_35285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (21))){
var inst_33501 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33605_35286 = state_33578__$1;
(statearr_33605_35286[(2)] = inst_33501);

(statearr_33605_35286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (31))){
var inst_33527 = (state_33578[(10)]);
var inst_33531 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33527);
var state_33578__$1 = state_33578;
var statearr_33607_35291 = state_33578__$1;
(statearr_33607_35291[(2)] = inst_33531);

(statearr_33607_35291[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (32))){
var inst_33519 = (state_33578[(19)]);
var inst_33521 = (state_33578[(20)]);
var inst_33522 = (state_33578[(11)]);
var inst_33520 = (state_33578[(12)]);
var inst_33533 = (state_33578[(2)]);
var inst_33534 = (inst_33522 + (1));
var tmp33602 = inst_33519;
var tmp33603 = inst_33521;
var tmp33604 = inst_33520;
var inst_33519__$1 = tmp33602;
var inst_33520__$1 = tmp33604;
var inst_33521__$1 = tmp33603;
var inst_33522__$1 = inst_33534;
var state_33578__$1 = (function (){var statearr_33608 = state_33578;
(statearr_33608[(19)] = inst_33519__$1);

(statearr_33608[(21)] = inst_33533);

(statearr_33608[(20)] = inst_33521__$1);

(statearr_33608[(11)] = inst_33522__$1);

(statearr_33608[(12)] = inst_33520__$1);

return statearr_33608;
})();
var statearr_33609_35298 = state_33578__$1;
(statearr_33609_35298[(2)] = null);

(statearr_33609_35298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (40))){
var inst_33547 = (state_33578[(22)]);
var inst_33551 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33547);
var state_33578__$1 = state_33578;
var statearr_33610_35299 = state_33578__$1;
(statearr_33610_35299[(2)] = inst_33551);

(statearr_33610_35299[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (33))){
var inst_33537 = (state_33578[(23)]);
var inst_33540 = cljs.core.chunked_seq_QMARK_(inst_33537);
var state_33578__$1 = state_33578;
if(inst_33540){
var statearr_33611_35301 = state_33578__$1;
(statearr_33611_35301[(1)] = (36));

} else {
var statearr_33613_35302 = state_33578__$1;
(statearr_33613_35302[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (13))){
var inst_33467 = (state_33578[(24)]);
var inst_33471 = cljs.core.async.close_BANG_(inst_33467);
var state_33578__$1 = state_33578;
var statearr_33614_35306 = state_33578__$1;
(statearr_33614_35306[(2)] = inst_33471);

(statearr_33614_35306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (22))){
var inst_33491 = (state_33578[(8)]);
var inst_33494 = cljs.core.async.close_BANG_(inst_33491);
var state_33578__$1 = state_33578;
var statearr_33615_35312 = state_33578__$1;
(statearr_33615_35312[(2)] = inst_33494);

(statearr_33615_35312[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (36))){
var inst_33537 = (state_33578[(23)]);
var inst_33542 = cljs.core.chunk_first(inst_33537);
var inst_33543 = cljs.core.chunk_rest(inst_33537);
var inst_33544 = cljs.core.count(inst_33542);
var inst_33519 = inst_33543;
var inst_33520 = inst_33542;
var inst_33521 = inst_33544;
var inst_33522 = (0);
var state_33578__$1 = (function (){var statearr_33616 = state_33578;
(statearr_33616[(19)] = inst_33519);

(statearr_33616[(20)] = inst_33521);

(statearr_33616[(11)] = inst_33522);

(statearr_33616[(12)] = inst_33520);

return statearr_33616;
})();
var statearr_33617_35313 = state_33578__$1;
(statearr_33617_35313[(2)] = null);

(statearr_33617_35313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (41))){
var inst_33537 = (state_33578[(23)]);
var inst_33553 = (state_33578[(2)]);
var inst_33554 = cljs.core.next(inst_33537);
var inst_33519 = inst_33554;
var inst_33520 = null;
var inst_33521 = (0);
var inst_33522 = (0);
var state_33578__$1 = (function (){var statearr_33619 = state_33578;
(statearr_33619[(19)] = inst_33519);

(statearr_33619[(25)] = inst_33553);

(statearr_33619[(20)] = inst_33521);

(statearr_33619[(11)] = inst_33522);

(statearr_33619[(12)] = inst_33520);

return statearr_33619;
})();
var statearr_33620_35315 = state_33578__$1;
(statearr_33620_35315[(2)] = null);

(statearr_33620_35315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (43))){
var state_33578__$1 = state_33578;
var statearr_33621_35316 = state_33578__$1;
(statearr_33621_35316[(2)] = null);

(statearr_33621_35316[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (29))){
var inst_33562 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33622_35317 = state_33578__$1;
(statearr_33622_35317[(2)] = inst_33562);

(statearr_33622_35317[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (44))){
var inst_33571 = (state_33578[(2)]);
var state_33578__$1 = (function (){var statearr_33623 = state_33578;
(statearr_33623[(26)] = inst_33571);

return statearr_33623;
})();
var statearr_33624_35318 = state_33578__$1;
(statearr_33624_35318[(2)] = null);

(statearr_33624_35318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (6))){
var inst_33511 = (state_33578[(27)]);
var inst_33510 = cljs.core.deref(cs);
var inst_33511__$1 = cljs.core.keys(inst_33510);
var inst_33512 = cljs.core.count(inst_33511__$1);
var inst_33513 = cljs.core.reset_BANG_(dctr,inst_33512);
var inst_33518 = cljs.core.seq(inst_33511__$1);
var inst_33519 = inst_33518;
var inst_33520 = null;
var inst_33521 = (0);
var inst_33522 = (0);
var state_33578__$1 = (function (){var statearr_33626 = state_33578;
(statearr_33626[(28)] = inst_33513);

(statearr_33626[(27)] = inst_33511__$1);

(statearr_33626[(19)] = inst_33519);

(statearr_33626[(20)] = inst_33521);

(statearr_33626[(11)] = inst_33522);

(statearr_33626[(12)] = inst_33520);

return statearr_33626;
})();
var statearr_33627_35321 = state_33578__$1;
(statearr_33627_35321[(2)] = null);

(statearr_33627_35321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (28))){
var inst_33519 = (state_33578[(19)]);
var inst_33537 = (state_33578[(23)]);
var inst_33537__$1 = cljs.core.seq(inst_33519);
var state_33578__$1 = (function (){var statearr_33628 = state_33578;
(statearr_33628[(23)] = inst_33537__$1);

return statearr_33628;
})();
if(inst_33537__$1){
var statearr_33629_35322 = state_33578__$1;
(statearr_33629_35322[(1)] = (33));

} else {
var statearr_33630_35323 = state_33578__$1;
(statearr_33630_35323[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (25))){
var inst_33521 = (state_33578[(20)]);
var inst_33522 = (state_33578[(11)]);
var inst_33524 = (inst_33522 < inst_33521);
var inst_33525 = inst_33524;
var state_33578__$1 = state_33578;
if(cljs.core.truth_(inst_33525)){
var statearr_33631_35324 = state_33578__$1;
(statearr_33631_35324[(1)] = (27));

} else {
var statearr_33632_35325 = state_33578__$1;
(statearr_33632_35325[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (34))){
var state_33578__$1 = state_33578;
var statearr_33633_35326 = state_33578__$1;
(statearr_33633_35326[(2)] = null);

(statearr_33633_35326[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (17))){
var state_33578__$1 = state_33578;
var statearr_33634_35327 = state_33578__$1;
(statearr_33634_35327[(2)] = null);

(statearr_33634_35327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (3))){
var inst_33576 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33578__$1,inst_33576);
} else {
if((state_val_33579 === (12))){
var inst_33506 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33636_35328 = state_33578__$1;
(statearr_33636_35328[(2)] = inst_33506);

(statearr_33636_35328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (2))){
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33578__$1,(4),ch);
} else {
if((state_val_33579 === (23))){
var state_33578__$1 = state_33578;
var statearr_33637_35329 = state_33578__$1;
(statearr_33637_35329[(2)] = null);

(statearr_33637_35329[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (35))){
var inst_33560 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33638_35330 = state_33578__$1;
(statearr_33638_35330[(2)] = inst_33560);

(statearr_33638_35330[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (19))){
var inst_33478 = (state_33578[(7)]);
var inst_33482 = cljs.core.chunk_first(inst_33478);
var inst_33483 = cljs.core.chunk_rest(inst_33478);
var inst_33484 = cljs.core.count(inst_33482);
var inst_33455 = inst_33483;
var inst_33456 = inst_33482;
var inst_33457 = inst_33484;
var inst_33458 = (0);
var state_33578__$1 = (function (){var statearr_33639 = state_33578;
(statearr_33639[(13)] = inst_33455);

(statearr_33639[(14)] = inst_33456);

(statearr_33639[(15)] = inst_33457);

(statearr_33639[(17)] = inst_33458);

return statearr_33639;
})();
var statearr_33640_35331 = state_33578__$1;
(statearr_33640_35331[(2)] = null);

(statearr_33640_35331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (11))){
var inst_33455 = (state_33578[(13)]);
var inst_33478 = (state_33578[(7)]);
var inst_33478__$1 = cljs.core.seq(inst_33455);
var state_33578__$1 = (function (){var statearr_33642 = state_33578;
(statearr_33642[(7)] = inst_33478__$1);

return statearr_33642;
})();
if(inst_33478__$1){
var statearr_33643_35332 = state_33578__$1;
(statearr_33643_35332[(1)] = (16));

} else {
var statearr_33644_35333 = state_33578__$1;
(statearr_33644_35333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (9))){
var inst_33508 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33645_35334 = state_33578__$1;
(statearr_33645_35334[(2)] = inst_33508);

(statearr_33645_35334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (5))){
var inst_33453 = cljs.core.deref(cs);
var inst_33454 = cljs.core.seq(inst_33453);
var inst_33455 = inst_33454;
var inst_33456 = null;
var inst_33457 = (0);
var inst_33458 = (0);
var state_33578__$1 = (function (){var statearr_33646 = state_33578;
(statearr_33646[(13)] = inst_33455);

(statearr_33646[(14)] = inst_33456);

(statearr_33646[(15)] = inst_33457);

(statearr_33646[(17)] = inst_33458);

return statearr_33646;
})();
var statearr_33647_35335 = state_33578__$1;
(statearr_33647_35335[(2)] = null);

(statearr_33647_35335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (14))){
var state_33578__$1 = state_33578;
var statearr_33648_35336 = state_33578__$1;
(statearr_33648_35336[(2)] = null);

(statearr_33648_35336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (45))){
var inst_33568 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33650_35337 = state_33578__$1;
(statearr_33650_35337[(2)] = inst_33568);

(statearr_33650_35337[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (26))){
var inst_33511 = (state_33578[(27)]);
var inst_33564 = (state_33578[(2)]);
var inst_33565 = cljs.core.seq(inst_33511);
var state_33578__$1 = (function (){var statearr_33651 = state_33578;
(statearr_33651[(29)] = inst_33564);

return statearr_33651;
})();
if(inst_33565){
var statearr_33652_35339 = state_33578__$1;
(statearr_33652_35339[(1)] = (42));

} else {
var statearr_33653_35340 = state_33578__$1;
(statearr_33653_35340[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (16))){
var inst_33478 = (state_33578[(7)]);
var inst_33480 = cljs.core.chunked_seq_QMARK_(inst_33478);
var state_33578__$1 = state_33578;
if(inst_33480){
var statearr_33654_35341 = state_33578__$1;
(statearr_33654_35341[(1)] = (19));

} else {
var statearr_33655_35342 = state_33578__$1;
(statearr_33655_35342[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (38))){
var inst_33557 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33656_35343 = state_33578__$1;
(statearr_33656_35343[(2)] = inst_33557);

(statearr_33656_35343[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (30))){
var state_33578__$1 = state_33578;
var statearr_33657_35344 = state_33578__$1;
(statearr_33657_35344[(2)] = null);

(statearr_33657_35344[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (10))){
var inst_33456 = (state_33578[(14)]);
var inst_33458 = (state_33578[(17)]);
var inst_33466 = cljs.core._nth(inst_33456,inst_33458);
var inst_33467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33466,(0),null);
var inst_33468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33466,(1),null);
var state_33578__$1 = (function (){var statearr_33659 = state_33578;
(statearr_33659[(24)] = inst_33467);

return statearr_33659;
})();
if(cljs.core.truth_(inst_33468)){
var statearr_33660_35346 = state_33578__$1;
(statearr_33660_35346[(1)] = (13));

} else {
var statearr_33661_35348 = state_33578__$1;
(statearr_33661_35348[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (18))){
var inst_33504 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33662_35349 = state_33578__$1;
(statearr_33662_35349[(2)] = inst_33504);

(statearr_33662_35349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (42))){
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33578__$1,(45),dchan);
} else {
if((state_val_33579 === (37))){
var inst_33446 = (state_33578[(9)]);
var inst_33537 = (state_33578[(23)]);
var inst_33547 = (state_33578[(22)]);
var inst_33547__$1 = cljs.core.first(inst_33537);
var inst_33548 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33547__$1,inst_33446,done);
var state_33578__$1 = (function (){var statearr_33663 = state_33578;
(statearr_33663[(22)] = inst_33547__$1);

return statearr_33663;
})();
if(cljs.core.truth_(inst_33548)){
var statearr_33664_35353 = state_33578__$1;
(statearr_33664_35353[(1)] = (39));

} else {
var statearr_33665_35354 = state_33578__$1;
(statearr_33665_35354[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (8))){
var inst_33457 = (state_33578[(15)]);
var inst_33458 = (state_33578[(17)]);
var inst_33460 = (inst_33458 < inst_33457);
var inst_33461 = inst_33460;
var state_33578__$1 = state_33578;
if(cljs.core.truth_(inst_33461)){
var statearr_33666_35357 = state_33578__$1;
(statearr_33666_35357[(1)] = (10));

} else {
var statearr_33668_35358 = state_33578__$1;
(statearr_33668_35358[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32465__auto__ = null;
var cljs$core$async$mult_$_state_machine__32465__auto____0 = (function (){
var statearr_33669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33669[(0)] = cljs$core$async$mult_$_state_machine__32465__auto__);

(statearr_33669[(1)] = (1));

return statearr_33669;
});
var cljs$core$async$mult_$_state_machine__32465__auto____1 = (function (state_33578){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_33578);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e33670){var ex__32468__auto__ = e33670;
var statearr_33671_35361 = state_33578;
(statearr_33671_35361[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_33578[(4)]))){
var statearr_33672_35362 = state_33578;
(statearr_33672_35362[(1)] = cljs.core.first((state_33578[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35363 = state_33578;
state_33578 = G__35363;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32465__auto__ = function(state_33578){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32465__auto____1.call(this,state_33578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32465__auto____0;
cljs$core$async$mult_$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32465__auto____1;
return cljs$core$async$mult_$_state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_33674 = f__32698__auto__();
(statearr_33674[(6)] = c__32697__auto___35266);

return statearr_33674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33676 = arguments.length;
switch (G__33676) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35365 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35365(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35366 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35366(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35371 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35371(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35372 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35372(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35373 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35373(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35376 = arguments.length;
var i__4830__auto___35377 = (0);
while(true){
if((i__4830__auto___35377 < len__4829__auto___35376)){
args__4835__auto__.push((arguments[i__4830__auto___35377]));

var G__35380 = (i__4830__auto___35377 + (1));
i__4830__auto___35377 = G__35380;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33687){
var map__33688 = p__33687;
var map__33688__$1 = cljs.core.__destructure_map(map__33688);
var opts = map__33688__$1;
var statearr_33689_35381 = state;
(statearr_33689_35381[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33691_35382 = state;
(statearr_33691_35382[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33693_35383 = state;
(statearr_33693_35383[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33682){
var G__33683 = cljs.core.first(seq33682);
var seq33682__$1 = cljs.core.next(seq33682);
var G__33684 = cljs.core.first(seq33682__$1);
var seq33682__$2 = cljs.core.next(seq33682__$1);
var G__33685 = cljs.core.first(seq33682__$2);
var seq33682__$3 = cljs.core.next(seq33682__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33683,G__33684,G__33685,seq33682__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33696 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33697){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33697 = meta33697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33698,meta33697__$1){
var self__ = this;
var _33698__$1 = this;
return (new cljs.core.async.t_cljs$core$async33696(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33697__$1));
}));

(cljs.core.async.t_cljs$core$async33696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33698){
var self__ = this;
var _33698__$1 = this;
return self__.meta33697;
}));

(cljs.core.async.t_cljs$core$async33696.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33696.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33696.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33696.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33696.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33696.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33696.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33697","meta33697",-1766824698,null)], null);
}));

(cljs.core.async.t_cljs$core$async33696.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33696");

(cljs.core.async.t_cljs$core$async33696.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33696");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33696.
 */
cljs.core.async.__GT_t_cljs$core$async33696 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33696(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33697){
return (new cljs.core.async.t_cljs$core$async33696(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33697));
});

}

return (new cljs.core.async.t_cljs$core$async33696(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32697__auto___35403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_33768){
var state_val_33769 = (state_33768[(1)]);
if((state_val_33769 === (7))){
var inst_33728 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
if(cljs.core.truth_(inst_33728)){
var statearr_33770_35408 = state_33768__$1;
(statearr_33770_35408[(1)] = (8));

} else {
var statearr_33771_35409 = state_33768__$1;
(statearr_33771_35409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (20))){
var inst_33721 = (state_33768[(7)]);
var state_33768__$1 = state_33768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33768__$1,(23),out,inst_33721);
} else {
if((state_val_33769 === (1))){
var inst_33704 = calc_state();
var inst_33705 = cljs.core.__destructure_map(inst_33704);
var inst_33706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33705,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33705,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33705,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33709 = inst_33704;
var state_33768__$1 = (function (){var statearr_33772 = state_33768;
(statearr_33772[(8)] = inst_33708);

(statearr_33772[(9)] = inst_33709);

(statearr_33772[(10)] = inst_33706);

(statearr_33772[(11)] = inst_33707);

return statearr_33772;
})();
var statearr_33773_35410 = state_33768__$1;
(statearr_33773_35410[(2)] = null);

(statearr_33773_35410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (24))){
var inst_33712 = (state_33768[(12)]);
var inst_33709 = inst_33712;
var state_33768__$1 = (function (){var statearr_33776 = state_33768;
(statearr_33776[(9)] = inst_33709);

return statearr_33776;
})();
var statearr_33778_35411 = state_33768__$1;
(statearr_33778_35411[(2)] = null);

(statearr_33778_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (4))){
var inst_33723 = (state_33768[(13)]);
var inst_33721 = (state_33768[(7)]);
var inst_33720 = (state_33768[(2)]);
var inst_33721__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33720,(0),null);
var inst_33722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33720,(1),null);
var inst_33723__$1 = (inst_33721__$1 == null);
var state_33768__$1 = (function (){var statearr_33779 = state_33768;
(statearr_33779[(14)] = inst_33722);

(statearr_33779[(13)] = inst_33723__$1);

(statearr_33779[(7)] = inst_33721__$1);

return statearr_33779;
})();
if(cljs.core.truth_(inst_33723__$1)){
var statearr_33780_35412 = state_33768__$1;
(statearr_33780_35412[(1)] = (5));

} else {
var statearr_33783_35413 = state_33768__$1;
(statearr_33783_35413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (15))){
var inst_33713 = (state_33768[(15)]);
var inst_33742 = (state_33768[(16)]);
var inst_33742__$1 = cljs.core.empty_QMARK_(inst_33713);
var state_33768__$1 = (function (){var statearr_33785 = state_33768;
(statearr_33785[(16)] = inst_33742__$1);

return statearr_33785;
})();
if(inst_33742__$1){
var statearr_33789_35420 = state_33768__$1;
(statearr_33789_35420[(1)] = (17));

} else {
var statearr_33790_35422 = state_33768__$1;
(statearr_33790_35422[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (21))){
var inst_33712 = (state_33768[(12)]);
var inst_33709 = inst_33712;
var state_33768__$1 = (function (){var statearr_33791 = state_33768;
(statearr_33791[(9)] = inst_33709);

return statearr_33791;
})();
var statearr_33792_35423 = state_33768__$1;
(statearr_33792_35423[(2)] = null);

(statearr_33792_35423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (13))){
var inst_33735 = (state_33768[(2)]);
var inst_33736 = calc_state();
var inst_33709 = inst_33736;
var state_33768__$1 = (function (){var statearr_33793 = state_33768;
(statearr_33793[(9)] = inst_33709);

(statearr_33793[(17)] = inst_33735);

return statearr_33793;
})();
var statearr_33794_35430 = state_33768__$1;
(statearr_33794_35430[(2)] = null);

(statearr_33794_35430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (22))){
var inst_33762 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
var statearr_33795_35431 = state_33768__$1;
(statearr_33795_35431[(2)] = inst_33762);

(statearr_33795_35431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (6))){
var inst_33722 = (state_33768[(14)]);
var inst_33726 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33722,change);
var state_33768__$1 = state_33768;
var statearr_33797_35435 = state_33768__$1;
(statearr_33797_35435[(2)] = inst_33726);

(statearr_33797_35435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (25))){
var state_33768__$1 = state_33768;
var statearr_33800_35436 = state_33768__$1;
(statearr_33800_35436[(2)] = null);

(statearr_33800_35436[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (17))){
var inst_33722 = (state_33768[(14)]);
var inst_33714 = (state_33768[(18)]);
var inst_33744 = (inst_33714.cljs$core$IFn$_invoke$arity$1 ? inst_33714.cljs$core$IFn$_invoke$arity$1(inst_33722) : inst_33714.call(null,inst_33722));
var inst_33745 = cljs.core.not(inst_33744);
var state_33768__$1 = state_33768;
var statearr_33802_35437 = state_33768__$1;
(statearr_33802_35437[(2)] = inst_33745);

(statearr_33802_35437[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (3))){
var inst_33766 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33768__$1,inst_33766);
} else {
if((state_val_33769 === (12))){
var state_33768__$1 = state_33768;
var statearr_33804_35448 = state_33768__$1;
(statearr_33804_35448[(2)] = null);

(statearr_33804_35448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (2))){
var inst_33709 = (state_33768[(9)]);
var inst_33712 = (state_33768[(12)]);
var inst_33712__$1 = cljs.core.__destructure_map(inst_33709);
var inst_33713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33712__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33712__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33712__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33768__$1 = (function (){var statearr_33808 = state_33768;
(statearr_33808[(18)] = inst_33714);

(statearr_33808[(15)] = inst_33713);

(statearr_33808[(12)] = inst_33712__$1);

return statearr_33808;
})();
return cljs.core.async.ioc_alts_BANG_(state_33768__$1,(4),inst_33715);
} else {
if((state_val_33769 === (23))){
var inst_33753 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
if(cljs.core.truth_(inst_33753)){
var statearr_33811_35449 = state_33768__$1;
(statearr_33811_35449[(1)] = (24));

} else {
var statearr_33813_35450 = state_33768__$1;
(statearr_33813_35450[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (19))){
var inst_33748 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
var statearr_33815_35451 = state_33768__$1;
(statearr_33815_35451[(2)] = inst_33748);

(statearr_33815_35451[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (11))){
var inst_33722 = (state_33768[(14)]);
var inst_33732 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33722);
var state_33768__$1 = state_33768;
var statearr_33817_35452 = state_33768__$1;
(statearr_33817_35452[(2)] = inst_33732);

(statearr_33817_35452[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (9))){
var inst_33722 = (state_33768[(14)]);
var inst_33713 = (state_33768[(15)]);
var inst_33739 = (state_33768[(19)]);
var inst_33739__$1 = (inst_33713.cljs$core$IFn$_invoke$arity$1 ? inst_33713.cljs$core$IFn$_invoke$arity$1(inst_33722) : inst_33713.call(null,inst_33722));
var state_33768__$1 = (function (){var statearr_33821 = state_33768;
(statearr_33821[(19)] = inst_33739__$1);

return statearr_33821;
})();
if(cljs.core.truth_(inst_33739__$1)){
var statearr_33822_35459 = state_33768__$1;
(statearr_33822_35459[(1)] = (14));

} else {
var statearr_33823_35460 = state_33768__$1;
(statearr_33823_35460[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (5))){
var inst_33723 = (state_33768[(13)]);
var state_33768__$1 = state_33768;
var statearr_33825_35461 = state_33768__$1;
(statearr_33825_35461[(2)] = inst_33723);

(statearr_33825_35461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (14))){
var inst_33739 = (state_33768[(19)]);
var state_33768__$1 = state_33768;
var statearr_33828_35462 = state_33768__$1;
(statearr_33828_35462[(2)] = inst_33739);

(statearr_33828_35462[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (26))){
var inst_33758 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
var statearr_33830_35469 = state_33768__$1;
(statearr_33830_35469[(2)] = inst_33758);

(statearr_33830_35469[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (16))){
var inst_33750 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
if(cljs.core.truth_(inst_33750)){
var statearr_33832_35470 = state_33768__$1;
(statearr_33832_35470[(1)] = (20));

} else {
var statearr_33833_35471 = state_33768__$1;
(statearr_33833_35471[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (10))){
var inst_33764 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
var statearr_33836_35472 = state_33768__$1;
(statearr_33836_35472[(2)] = inst_33764);

(statearr_33836_35472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (18))){
var inst_33742 = (state_33768[(16)]);
var state_33768__$1 = state_33768;
var statearr_33838_35473 = state_33768__$1;
(statearr_33838_35473[(2)] = inst_33742);

(statearr_33838_35473[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (8))){
var inst_33721 = (state_33768[(7)]);
var inst_33730 = (inst_33721 == null);
var state_33768__$1 = state_33768;
if(cljs.core.truth_(inst_33730)){
var statearr_33840_35474 = state_33768__$1;
(statearr_33840_35474[(1)] = (11));

} else {
var statearr_33841_35475 = state_33768__$1;
(statearr_33841_35475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32465__auto__ = null;
var cljs$core$async$mix_$_state_machine__32465__auto____0 = (function (){
var statearr_33845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33845[(0)] = cljs$core$async$mix_$_state_machine__32465__auto__);

(statearr_33845[(1)] = (1));

return statearr_33845;
});
var cljs$core$async$mix_$_state_machine__32465__auto____1 = (function (state_33768){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_33768);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e33847){var ex__32468__auto__ = e33847;
var statearr_33848_35477 = state_33768;
(statearr_33848_35477[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_33768[(4)]))){
var statearr_33851_35478 = state_33768;
(statearr_33851_35478[(1)] = cljs.core.first((state_33768[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35480 = state_33768;
state_33768 = G__35480;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32465__auto__ = function(state_33768){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32465__auto____1.call(this,state_33768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32465__auto____0;
cljs$core$async$mix_$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32465__auto____1;
return cljs$core$async$mix_$_state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_33854 = f__32698__auto__();
(statearr_33854[(6)] = c__32697__auto___35403);

return statearr_33854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35481 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35481(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35488 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35488(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35498 = (function() {
var G__35499 = null;
var G__35499__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35499__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35499 = function(p,v){
switch(arguments.length){
case 1:
return G__35499__1.call(this,p);
case 2:
return G__35499__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35499.cljs$core$IFn$_invoke$arity$1 = G__35499__1;
G__35499.cljs$core$IFn$_invoke$arity$2 = G__35499__2;
return G__35499;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33889 = arguments.length;
switch (G__33889) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35498(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35498(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33906 = arguments.length;
switch (G__33906) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33902_SHARP_){
if(cljs.core.truth_((p1__33902_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33902_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33902_SHARP_.call(null,topic)))){
return p1__33902_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33902_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33917 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33918){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33918 = meta33918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33919,meta33918__$1){
var self__ = this;
var _33919__$1 = this;
return (new cljs.core.async.t_cljs$core$async33917(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33918__$1));
}));

(cljs.core.async.t_cljs$core$async33917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33919){
var self__ = this;
var _33919__$1 = this;
return self__.meta33918;
}));

(cljs.core.async.t_cljs$core$async33917.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33917.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33917.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33917.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33917.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33917.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33918","meta33918",-190078708,null)], null);
}));

(cljs.core.async.t_cljs$core$async33917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33917");

(cljs.core.async.t_cljs$core$async33917.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33917.
 */
cljs.core.async.__GT_t_cljs$core$async33917 = (function cljs$core$async$__GT_t_cljs$core$async33917(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33918){
return (new cljs.core.async.t_cljs$core$async33917(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33918));
});

}

return (new cljs.core.async.t_cljs$core$async33917(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32697__auto___35513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_34021){
var state_val_34022 = (state_34021[(1)]);
if((state_val_34022 === (7))){
var inst_34016 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34027_35518 = state_34021__$1;
(statearr_34027_35518[(2)] = inst_34016);

(statearr_34027_35518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (20))){
var state_34021__$1 = state_34021;
var statearr_34028_35519 = state_34021__$1;
(statearr_34028_35519[(2)] = null);

(statearr_34028_35519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (1))){
var state_34021__$1 = state_34021;
var statearr_34032_35520 = state_34021__$1;
(statearr_34032_35520[(2)] = null);

(statearr_34032_35520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (24))){
var inst_33998 = (state_34021[(7)]);
var inst_34008 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33998);
var state_34021__$1 = state_34021;
var statearr_34034_35521 = state_34021__$1;
(statearr_34034_35521[(2)] = inst_34008);

(statearr_34034_35521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (4))){
var inst_33941 = (state_34021[(8)]);
var inst_33941__$1 = (state_34021[(2)]);
var inst_33942 = (inst_33941__$1 == null);
var state_34021__$1 = (function (){var statearr_34037 = state_34021;
(statearr_34037[(8)] = inst_33941__$1);

return statearr_34037;
})();
if(cljs.core.truth_(inst_33942)){
var statearr_34039_35522 = state_34021__$1;
(statearr_34039_35522[(1)] = (5));

} else {
var statearr_34040_35523 = state_34021__$1;
(statearr_34040_35523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (15))){
var inst_33991 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34042_35524 = state_34021__$1;
(statearr_34042_35524[(2)] = inst_33991);

(statearr_34042_35524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (21))){
var inst_34013 = (state_34021[(2)]);
var state_34021__$1 = (function (){var statearr_34043 = state_34021;
(statearr_34043[(9)] = inst_34013);

return statearr_34043;
})();
var statearr_34046_35525 = state_34021__$1;
(statearr_34046_35525[(2)] = null);

(statearr_34046_35525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (13))){
var inst_33970 = (state_34021[(10)]);
var inst_33973 = cljs.core.chunked_seq_QMARK_(inst_33970);
var state_34021__$1 = state_34021;
if(inst_33973){
var statearr_34048_35530 = state_34021__$1;
(statearr_34048_35530[(1)] = (16));

} else {
var statearr_34050_35534 = state_34021__$1;
(statearr_34050_35534[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (22))){
var inst_34005 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
if(cljs.core.truth_(inst_34005)){
var statearr_34051_35535 = state_34021__$1;
(statearr_34051_35535[(1)] = (23));

} else {
var statearr_34052_35536 = state_34021__$1;
(statearr_34052_35536[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (6))){
var inst_34001 = (state_34021[(11)]);
var inst_33941 = (state_34021[(8)]);
var inst_33998 = (state_34021[(7)]);
var inst_33998__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33941) : topic_fn.call(null,inst_33941));
var inst_34000 = cljs.core.deref(mults);
var inst_34001__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34000,inst_33998__$1);
var state_34021__$1 = (function (){var statearr_34056 = state_34021;
(statearr_34056[(11)] = inst_34001__$1);

(statearr_34056[(7)] = inst_33998__$1);

return statearr_34056;
})();
if(cljs.core.truth_(inst_34001__$1)){
var statearr_34058_35542 = state_34021__$1;
(statearr_34058_35542[(1)] = (19));

} else {
var statearr_34059_35543 = state_34021__$1;
(statearr_34059_35543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (25))){
var inst_34010 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34063_35544 = state_34021__$1;
(statearr_34063_35544[(2)] = inst_34010);

(statearr_34063_35544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (17))){
var inst_33970 = (state_34021[(10)]);
var inst_33981 = cljs.core.first(inst_33970);
var inst_33982 = cljs.core.async.muxch_STAR_(inst_33981);
var inst_33983 = cljs.core.async.close_BANG_(inst_33982);
var inst_33984 = cljs.core.next(inst_33970);
var inst_33952 = inst_33984;
var inst_33953 = null;
var inst_33954 = (0);
var inst_33955 = (0);
var state_34021__$1 = (function (){var statearr_34065 = state_34021;
(statearr_34065[(12)] = inst_33955);

(statearr_34065[(13)] = inst_33983);

(statearr_34065[(14)] = inst_33952);

(statearr_34065[(15)] = inst_33954);

(statearr_34065[(16)] = inst_33953);

return statearr_34065;
})();
var statearr_34068_35545 = state_34021__$1;
(statearr_34068_35545[(2)] = null);

(statearr_34068_35545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (3))){
var inst_34018 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34021__$1,inst_34018);
} else {
if((state_val_34022 === (12))){
var inst_33993 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34070_35546 = state_34021__$1;
(statearr_34070_35546[(2)] = inst_33993);

(statearr_34070_35546[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (2))){
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34021__$1,(4),ch);
} else {
if((state_val_34022 === (23))){
var state_34021__$1 = state_34021;
var statearr_34073_35547 = state_34021__$1;
(statearr_34073_35547[(2)] = null);

(statearr_34073_35547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (19))){
var inst_34001 = (state_34021[(11)]);
var inst_33941 = (state_34021[(8)]);
var inst_34003 = cljs.core.async.muxch_STAR_(inst_34001);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34021__$1,(22),inst_34003,inst_33941);
} else {
if((state_val_34022 === (11))){
var inst_33952 = (state_34021[(14)]);
var inst_33970 = (state_34021[(10)]);
var inst_33970__$1 = cljs.core.seq(inst_33952);
var state_34021__$1 = (function (){var statearr_34079 = state_34021;
(statearr_34079[(10)] = inst_33970__$1);

return statearr_34079;
})();
if(inst_33970__$1){
var statearr_34080_35548 = state_34021__$1;
(statearr_34080_35548[(1)] = (13));

} else {
var statearr_34082_35549 = state_34021__$1;
(statearr_34082_35549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (9))){
var inst_33996 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34085_35553 = state_34021__$1;
(statearr_34085_35553[(2)] = inst_33996);

(statearr_34085_35553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (5))){
var inst_33949 = cljs.core.deref(mults);
var inst_33950 = cljs.core.vals(inst_33949);
var inst_33951 = cljs.core.seq(inst_33950);
var inst_33952 = inst_33951;
var inst_33953 = null;
var inst_33954 = (0);
var inst_33955 = (0);
var state_34021__$1 = (function (){var statearr_34091 = state_34021;
(statearr_34091[(12)] = inst_33955);

(statearr_34091[(14)] = inst_33952);

(statearr_34091[(15)] = inst_33954);

(statearr_34091[(16)] = inst_33953);

return statearr_34091;
})();
var statearr_34094_35554 = state_34021__$1;
(statearr_34094_35554[(2)] = null);

(statearr_34094_35554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (14))){
var state_34021__$1 = state_34021;
var statearr_34103_35555 = state_34021__$1;
(statearr_34103_35555[(2)] = null);

(statearr_34103_35555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (16))){
var inst_33970 = (state_34021[(10)]);
var inst_33976 = cljs.core.chunk_first(inst_33970);
var inst_33977 = cljs.core.chunk_rest(inst_33970);
var inst_33978 = cljs.core.count(inst_33976);
var inst_33952 = inst_33977;
var inst_33953 = inst_33976;
var inst_33954 = inst_33978;
var inst_33955 = (0);
var state_34021__$1 = (function (){var statearr_34106 = state_34021;
(statearr_34106[(12)] = inst_33955);

(statearr_34106[(14)] = inst_33952);

(statearr_34106[(15)] = inst_33954);

(statearr_34106[(16)] = inst_33953);

return statearr_34106;
})();
var statearr_34110_35557 = state_34021__$1;
(statearr_34110_35557[(2)] = null);

(statearr_34110_35557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (10))){
var inst_33955 = (state_34021[(12)]);
var inst_33952 = (state_34021[(14)]);
var inst_33954 = (state_34021[(15)]);
var inst_33953 = (state_34021[(16)]);
var inst_33961 = cljs.core._nth(inst_33953,inst_33955);
var inst_33963 = cljs.core.async.muxch_STAR_(inst_33961);
var inst_33964 = cljs.core.async.close_BANG_(inst_33963);
var inst_33966 = (inst_33955 + (1));
var tmp34096 = inst_33952;
var tmp34097 = inst_33954;
var tmp34098 = inst_33953;
var inst_33952__$1 = tmp34096;
var inst_33953__$1 = tmp34098;
var inst_33954__$1 = tmp34097;
var inst_33955__$1 = inst_33966;
var state_34021__$1 = (function (){var statearr_34112 = state_34021;
(statearr_34112[(12)] = inst_33955__$1);

(statearr_34112[(17)] = inst_33964);

(statearr_34112[(14)] = inst_33952__$1);

(statearr_34112[(15)] = inst_33954__$1);

(statearr_34112[(16)] = inst_33953__$1);

return statearr_34112;
})();
var statearr_34116_35558 = state_34021__$1;
(statearr_34116_35558[(2)] = null);

(statearr_34116_35558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (18))){
var inst_33987 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34121_35559 = state_34021__$1;
(statearr_34121_35559[(2)] = inst_33987);

(statearr_34121_35559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (8))){
var inst_33955 = (state_34021[(12)]);
var inst_33954 = (state_34021[(15)]);
var inst_33957 = (inst_33955 < inst_33954);
var inst_33958 = inst_33957;
var state_34021__$1 = state_34021;
if(cljs.core.truth_(inst_33958)){
var statearr_34127_35564 = state_34021__$1;
(statearr_34127_35564[(1)] = (10));

} else {
var statearr_34128_35565 = state_34021__$1;
(statearr_34128_35565[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_34133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34133[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_34133[(1)] = (1));

return statearr_34133;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_34021){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_34021);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e34138){var ex__32468__auto__ = e34138;
var statearr_34141_35566 = state_34021;
(statearr_34141_35566[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_34021[(4)]))){
var statearr_34143_35567 = state_34021;
(statearr_34143_35567[(1)] = cljs.core.first((state_34021[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35568 = state_34021;
state_34021 = G__35568;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_34021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_34021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_34150 = f__32698__auto__();
(statearr_34150[(6)] = c__32697__auto___35513);

return statearr_34150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34157 = arguments.length;
switch (G__34157) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34164 = arguments.length;
switch (G__34164) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34174 = arguments.length;
switch (G__34174) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32697__auto___35572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_34246){
var state_val_34247 = (state_34246[(1)]);
if((state_val_34247 === (7))){
var state_34246__$1 = state_34246;
var statearr_34249_35573 = state_34246__$1;
(statearr_34249_35573[(2)] = null);

(statearr_34249_35573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (1))){
var state_34246__$1 = state_34246;
var statearr_34250_35574 = state_34246__$1;
(statearr_34250_35574[(2)] = null);

(statearr_34250_35574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (4))){
var inst_34186 = (state_34246[(7)]);
var inst_34187 = (state_34246[(8)]);
var inst_34189 = (inst_34187 < inst_34186);
var state_34246__$1 = state_34246;
if(cljs.core.truth_(inst_34189)){
var statearr_34251_35575 = state_34246__$1;
(statearr_34251_35575[(1)] = (6));

} else {
var statearr_34252_35576 = state_34246__$1;
(statearr_34252_35576[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (15))){
var inst_34228 = (state_34246[(9)]);
var inst_34236 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34228);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34246__$1,(17),out,inst_34236);
} else {
if((state_val_34247 === (13))){
var inst_34228 = (state_34246[(9)]);
var inst_34228__$1 = (state_34246[(2)]);
var inst_34229 = cljs.core.some(cljs.core.nil_QMARK_,inst_34228__$1);
var state_34246__$1 = (function (){var statearr_34260 = state_34246;
(statearr_34260[(9)] = inst_34228__$1);

return statearr_34260;
})();
if(cljs.core.truth_(inst_34229)){
var statearr_34262_35577 = state_34246__$1;
(statearr_34262_35577[(1)] = (14));

} else {
var statearr_34263_35578 = state_34246__$1;
(statearr_34263_35578[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (6))){
var state_34246__$1 = state_34246;
var statearr_34264_35579 = state_34246__$1;
(statearr_34264_35579[(2)] = null);

(statearr_34264_35579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (17))){
var inst_34238 = (state_34246[(2)]);
var state_34246__$1 = (function (){var statearr_34274 = state_34246;
(statearr_34274[(10)] = inst_34238);

return statearr_34274;
})();
var statearr_34275_35584 = state_34246__$1;
(statearr_34275_35584[(2)] = null);

(statearr_34275_35584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (3))){
var inst_34243 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34246__$1,inst_34243);
} else {
if((state_val_34247 === (12))){
var _ = (function (){var statearr_34280 = state_34246;
(statearr_34280[(4)] = cljs.core.rest((state_34246[(4)])));

return statearr_34280;
})();
var state_34246__$1 = state_34246;
var ex34273 = (state_34246__$1[(2)]);
var statearr_34281_35595 = state_34246__$1;
(statearr_34281_35595[(5)] = ex34273);


if((ex34273 instanceof Object)){
var statearr_34282_35596 = state_34246__$1;
(statearr_34282_35596[(1)] = (11));

(statearr_34282_35596[(5)] = null);

} else {
throw ex34273;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (2))){
var inst_34185 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34186 = cnt;
var inst_34187 = (0);
var state_34246__$1 = (function (){var statearr_34283 = state_34246;
(statearr_34283[(7)] = inst_34186);

(statearr_34283[(11)] = inst_34185);

(statearr_34283[(8)] = inst_34187);

return statearr_34283;
})();
var statearr_34284_35597 = state_34246__$1;
(statearr_34284_35597[(2)] = null);

(statearr_34284_35597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (11))){
var inst_34206 = (state_34246[(2)]);
var inst_34208 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34246__$1 = (function (){var statearr_34285 = state_34246;
(statearr_34285[(12)] = inst_34206);

return statearr_34285;
})();
var statearr_34290_35601 = state_34246__$1;
(statearr_34290_35601[(2)] = inst_34208);

(statearr_34290_35601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (9))){
var inst_34187 = (state_34246[(8)]);
var _ = (function (){var statearr_34291 = state_34246;
(statearr_34291[(4)] = cljs.core.cons((12),(state_34246[(4)])));

return statearr_34291;
})();
var inst_34214 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34187) : chs__$1.call(null,inst_34187));
var inst_34215 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34187) : done.call(null,inst_34187));
var inst_34216 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34214,inst_34215);
var ___$1 = (function (){var statearr_34292 = state_34246;
(statearr_34292[(4)] = cljs.core.rest((state_34246[(4)])));

return statearr_34292;
})();
var state_34246__$1 = state_34246;
var statearr_34293_35606 = state_34246__$1;
(statearr_34293_35606[(2)] = inst_34216);

(statearr_34293_35606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (5))){
var inst_34226 = (state_34246[(2)]);
var state_34246__$1 = (function (){var statearr_34294 = state_34246;
(statearr_34294[(13)] = inst_34226);

return statearr_34294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34246__$1,(13),dchan);
} else {
if((state_val_34247 === (14))){
var inst_34231 = cljs.core.async.close_BANG_(out);
var state_34246__$1 = state_34246;
var statearr_34296_35607 = state_34246__$1;
(statearr_34296_35607[(2)] = inst_34231);

(statearr_34296_35607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (16))){
var inst_34241 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34297_35608 = state_34246__$1;
(statearr_34297_35608[(2)] = inst_34241);

(statearr_34297_35608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (10))){
var inst_34187 = (state_34246[(8)]);
var inst_34219 = (state_34246[(2)]);
var inst_34220 = (inst_34187 + (1));
var inst_34187__$1 = inst_34220;
var state_34246__$1 = (function (){var statearr_34298 = state_34246;
(statearr_34298[(14)] = inst_34219);

(statearr_34298[(8)] = inst_34187__$1);

return statearr_34298;
})();
var statearr_34299_35612 = state_34246__$1;
(statearr_34299_35612[(2)] = null);

(statearr_34299_35612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (8))){
var inst_34224 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34300_35613 = state_34246__$1;
(statearr_34300_35613[(2)] = inst_34224);

(statearr_34300_35613[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_34301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34301[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_34301[(1)] = (1));

return statearr_34301;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_34246){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_34246);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e34302){var ex__32468__auto__ = e34302;
var statearr_34303_35614 = state_34246;
(statearr_34303_35614[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_34246[(4)]))){
var statearr_34304_35615 = state_34246;
(statearr_34304_35615[(1)] = cljs.core.first((state_34246[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35617 = state_34246;
state_34246 = G__35617;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_34246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_34246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_34307 = f__32698__auto__();
(statearr_34307[(6)] = c__32697__auto___35572);

return statearr_34307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34310 = arguments.length;
switch (G__34310) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32697__auto___35620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_34342){
var state_val_34343 = (state_34342[(1)]);
if((state_val_34343 === (7))){
var inst_34321 = (state_34342[(7)]);
var inst_34322 = (state_34342[(8)]);
var inst_34321__$1 = (state_34342[(2)]);
var inst_34322__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34321__$1,(0),null);
var inst_34323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34321__$1,(1),null);
var inst_34324 = (inst_34322__$1 == null);
var state_34342__$1 = (function (){var statearr_34344 = state_34342;
(statearr_34344[(7)] = inst_34321__$1);

(statearr_34344[(9)] = inst_34323);

(statearr_34344[(8)] = inst_34322__$1);

return statearr_34344;
})();
if(cljs.core.truth_(inst_34324)){
var statearr_34345_35621 = state_34342__$1;
(statearr_34345_35621[(1)] = (8));

} else {
var statearr_34346_35622 = state_34342__$1;
(statearr_34346_35622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (1))){
var inst_34311 = cljs.core.vec(chs);
var inst_34312 = inst_34311;
var state_34342__$1 = (function (){var statearr_34347 = state_34342;
(statearr_34347[(10)] = inst_34312);

return statearr_34347;
})();
var statearr_34348_35623 = state_34342__$1;
(statearr_34348_35623[(2)] = null);

(statearr_34348_35623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (4))){
var inst_34312 = (state_34342[(10)]);
var state_34342__$1 = state_34342;
return cljs.core.async.ioc_alts_BANG_(state_34342__$1,(7),inst_34312);
} else {
if((state_val_34343 === (6))){
var inst_34338 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34349_35624 = state_34342__$1;
(statearr_34349_35624[(2)] = inst_34338);

(statearr_34349_35624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (3))){
var inst_34340 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34342__$1,inst_34340);
} else {
if((state_val_34343 === (2))){
var inst_34312 = (state_34342[(10)]);
var inst_34314 = cljs.core.count(inst_34312);
var inst_34315 = (inst_34314 > (0));
var state_34342__$1 = state_34342;
if(cljs.core.truth_(inst_34315)){
var statearr_34351_35625 = state_34342__$1;
(statearr_34351_35625[(1)] = (4));

} else {
var statearr_34352_35626 = state_34342__$1;
(statearr_34352_35626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (11))){
var inst_34312 = (state_34342[(10)]);
var inst_34331 = (state_34342[(2)]);
var tmp34350 = inst_34312;
var inst_34312__$1 = tmp34350;
var state_34342__$1 = (function (){var statearr_34353 = state_34342;
(statearr_34353[(10)] = inst_34312__$1);

(statearr_34353[(11)] = inst_34331);

return statearr_34353;
})();
var statearr_34354_35627 = state_34342__$1;
(statearr_34354_35627[(2)] = null);

(statearr_34354_35627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (9))){
var inst_34322 = (state_34342[(8)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34342__$1,(11),out,inst_34322);
} else {
if((state_val_34343 === (5))){
var inst_34336 = cljs.core.async.close_BANG_(out);
var state_34342__$1 = state_34342;
var statearr_34357_35628 = state_34342__$1;
(statearr_34357_35628[(2)] = inst_34336);

(statearr_34357_35628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (10))){
var inst_34334 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34358_35629 = state_34342__$1;
(statearr_34358_35629[(2)] = inst_34334);

(statearr_34358_35629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (8))){
var inst_34321 = (state_34342[(7)]);
var inst_34323 = (state_34342[(9)]);
var inst_34312 = (state_34342[(10)]);
var inst_34322 = (state_34342[(8)]);
var inst_34326 = (function (){var cs = inst_34312;
var vec__34317 = inst_34321;
var v = inst_34322;
var c = inst_34323;
return (function (p1__34308_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34308_SHARP_);
});
})();
var inst_34327 = cljs.core.filterv(inst_34326,inst_34312);
var inst_34312__$1 = inst_34327;
var state_34342__$1 = (function (){var statearr_34359 = state_34342;
(statearr_34359[(10)] = inst_34312__$1);

return statearr_34359;
})();
var statearr_34360_35637 = state_34342__$1;
(statearr_34360_35637[(2)] = null);

(statearr_34360_35637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_34361 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34361[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_34361[(1)] = (1));

return statearr_34361;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_34342){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_34342);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e34362){var ex__32468__auto__ = e34362;
var statearr_34364_35638 = state_34342;
(statearr_34364_35638[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_34342[(4)]))){
var statearr_34366_35639 = state_34342;
(statearr_34366_35639[(1)] = cljs.core.first((state_34342[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35640 = state_34342;
state_34342 = G__35640;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_34342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_34342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_34367 = f__32698__auto__();
(statearr_34367[(6)] = c__32697__auto___35620);

return statearr_34367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34370 = arguments.length;
switch (G__34370) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32697__auto___35642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_34395){
var state_val_34396 = (state_34395[(1)]);
if((state_val_34396 === (7))){
var inst_34377 = (state_34395[(7)]);
var inst_34377__$1 = (state_34395[(2)]);
var inst_34378 = (inst_34377__$1 == null);
var inst_34379 = cljs.core.not(inst_34378);
var state_34395__$1 = (function (){var statearr_34397 = state_34395;
(statearr_34397[(7)] = inst_34377__$1);

return statearr_34397;
})();
if(inst_34379){
var statearr_34398_35647 = state_34395__$1;
(statearr_34398_35647[(1)] = (8));

} else {
var statearr_34399_35648 = state_34395__$1;
(statearr_34399_35648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (1))){
var inst_34372 = (0);
var state_34395__$1 = (function (){var statearr_34400 = state_34395;
(statearr_34400[(8)] = inst_34372);

return statearr_34400;
})();
var statearr_34401_35649 = state_34395__$1;
(statearr_34401_35649[(2)] = null);

(statearr_34401_35649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (4))){
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34395__$1,(7),ch);
} else {
if((state_val_34396 === (6))){
var inst_34390 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34402_35651 = state_34395__$1;
(statearr_34402_35651[(2)] = inst_34390);

(statearr_34402_35651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (3))){
var inst_34392 = (state_34395[(2)]);
var inst_34393 = cljs.core.async.close_BANG_(out);
var state_34395__$1 = (function (){var statearr_34404 = state_34395;
(statearr_34404[(9)] = inst_34392);

return statearr_34404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34395__$1,inst_34393);
} else {
if((state_val_34396 === (2))){
var inst_34372 = (state_34395[(8)]);
var inst_34374 = (inst_34372 < n);
var state_34395__$1 = state_34395;
if(cljs.core.truth_(inst_34374)){
var statearr_34406_35652 = state_34395__$1;
(statearr_34406_35652[(1)] = (4));

} else {
var statearr_34407_35653 = state_34395__$1;
(statearr_34407_35653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (11))){
var inst_34372 = (state_34395[(8)]);
var inst_34382 = (state_34395[(2)]);
var inst_34383 = (inst_34372 + (1));
var inst_34372__$1 = inst_34383;
var state_34395__$1 = (function (){var statearr_34408 = state_34395;
(statearr_34408[(8)] = inst_34372__$1);

(statearr_34408[(10)] = inst_34382);

return statearr_34408;
})();
var statearr_34409_35654 = state_34395__$1;
(statearr_34409_35654[(2)] = null);

(statearr_34409_35654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (9))){
var state_34395__$1 = state_34395;
var statearr_34414_35655 = state_34395__$1;
(statearr_34414_35655[(2)] = null);

(statearr_34414_35655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (5))){
var state_34395__$1 = state_34395;
var statearr_34418_35657 = state_34395__$1;
(statearr_34418_35657[(2)] = null);

(statearr_34418_35657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (10))){
var inst_34387 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34419_35658 = state_34395__$1;
(statearr_34419_35658[(2)] = inst_34387);

(statearr_34419_35658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (8))){
var inst_34377 = (state_34395[(7)]);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34395__$1,(11),out,inst_34377);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_34422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34422[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_34422[(1)] = (1));

return statearr_34422;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_34395){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_34395);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e34423){var ex__32468__auto__ = e34423;
var statearr_34424_35659 = state_34395;
(statearr_34424_35659[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_34395[(4)]))){
var statearr_34428_35661 = state_34395;
(statearr_34428_35661[(1)] = cljs.core.first((state_34395[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35665 = state_34395;
state_34395 = G__35665;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_34395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_34395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_34429 = f__32698__auto__();
(statearr_34429[(6)] = c__32697__auto___35642);

return statearr_34429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34463 = (function (f,ch,meta34464){
this.f = f;
this.ch = ch;
this.meta34464 = meta34464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34465,meta34464__$1){
var self__ = this;
var _34465__$1 = this;
return (new cljs.core.async.t_cljs$core$async34463(self__.f,self__.ch,meta34464__$1));
}));

(cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34465){
var self__ = this;
var _34465__$1 = this;
return self__.meta34464;
}));

(cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34466 = (function (f,ch,meta34464,_,fn1,meta34467){
this.f = f;
this.ch = ch;
this.meta34464 = meta34464;
this._ = _;
this.fn1 = fn1;
this.meta34467 = meta34467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34468,meta34467__$1){
var self__ = this;
var _34468__$1 = this;
return (new cljs.core.async.t_cljs$core$async34466(self__.f,self__.ch,self__.meta34464,self__._,self__.fn1,meta34467__$1));
}));

(cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34468){
var self__ = this;
var _34468__$1 = this;
return self__.meta34467;
}));

(cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34449_SHARP_){
var G__34473 = (((p1__34449_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34449_SHARP_) : self__.f.call(null,p1__34449_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34473) : f1.call(null,G__34473));
});
}));

(cljs.core.async.t_cljs$core$async34466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34464","meta34464",24082378,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34463","cljs.core.async/t_cljs$core$async34463",434136504,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34467","meta34467",591632901,null)], null);
}));

(cljs.core.async.t_cljs$core$async34466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34466");

(cljs.core.async.t_cljs$core$async34466.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async34466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34466.
 */
cljs.core.async.__GT_t_cljs$core$async34466 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34466(f__$1,ch__$1,meta34464__$1,___$2,fn1__$1,meta34467){
return (new cljs.core.async.t_cljs$core$async34466(f__$1,ch__$1,meta34464__$1,___$2,fn1__$1,meta34467));
});

}

return (new cljs.core.async.t_cljs$core$async34466(self__.f,self__.ch,self__.meta34464,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34478 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34478) : self__.f.call(null,G__34478));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34464","meta34464",24082378,null)], null);
}));

(cljs.core.async.t_cljs$core$async34463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34463");

(cljs.core.async.t_cljs$core$async34463.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async34463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34463.
 */
cljs.core.async.__GT_t_cljs$core$async34463 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34463(f__$1,ch__$1,meta34464){
return (new cljs.core.async.t_cljs$core$async34463(f__$1,ch__$1,meta34464));
});

}

return (new cljs.core.async.t_cljs$core$async34463(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34483 = (function (f,ch,meta34484){
this.f = f;
this.ch = ch;
this.meta34484 = meta34484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34485,meta34484__$1){
var self__ = this;
var _34485__$1 = this;
return (new cljs.core.async.t_cljs$core$async34483(self__.f,self__.ch,meta34484__$1));
}));

(cljs.core.async.t_cljs$core$async34483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34485){
var self__ = this;
var _34485__$1 = this;
return self__.meta34484;
}));

(cljs.core.async.t_cljs$core$async34483.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34483.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34483.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34484","meta34484",503060974,null)], null);
}));

(cljs.core.async.t_cljs$core$async34483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34483");

(cljs.core.async.t_cljs$core$async34483.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async34483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34483.
 */
cljs.core.async.__GT_t_cljs$core$async34483 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34483(f__$1,ch__$1,meta34484){
return (new cljs.core.async.t_cljs$core$async34483(f__$1,ch__$1,meta34484));
});

}

return (new cljs.core.async.t_cljs$core$async34483(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34488 = (function (p,ch,meta34489){
this.p = p;
this.ch = ch;
this.meta34489 = meta34489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34490,meta34489__$1){
var self__ = this;
var _34490__$1 = this;
return (new cljs.core.async.t_cljs$core$async34488(self__.p,self__.ch,meta34489__$1));
}));

(cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34490){
var self__ = this;
var _34490__$1 = this;
return self__.meta34489;
}));

(cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34489","meta34489",561498808,null)], null);
}));

(cljs.core.async.t_cljs$core$async34488.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34488");

(cljs.core.async.t_cljs$core$async34488.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async34488");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34488.
 */
cljs.core.async.__GT_t_cljs$core$async34488 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34488(p__$1,ch__$1,meta34489){
return (new cljs.core.async.t_cljs$core$async34488(p__$1,ch__$1,meta34489));
});

}

return (new cljs.core.async.t_cljs$core$async34488(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34497 = arguments.length;
switch (G__34497) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32697__auto___35672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_34518){
var state_val_34519 = (state_34518[(1)]);
if((state_val_34519 === (7))){
var inst_34514 = (state_34518[(2)]);
var state_34518__$1 = state_34518;
var statearr_34521_35674 = state_34518__$1;
(statearr_34521_35674[(2)] = inst_34514);

(statearr_34521_35674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34519 === (1))){
var state_34518__$1 = state_34518;
var statearr_34525_35675 = state_34518__$1;
(statearr_34525_35675[(2)] = null);

(statearr_34525_35675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34519 === (4))){
var inst_34500 = (state_34518[(7)]);
var inst_34500__$1 = (state_34518[(2)]);
var inst_34501 = (inst_34500__$1 == null);
var state_34518__$1 = (function (){var statearr_34526 = state_34518;
(statearr_34526[(7)] = inst_34500__$1);

return statearr_34526;
})();
if(cljs.core.truth_(inst_34501)){
var statearr_34528_35683 = state_34518__$1;
(statearr_34528_35683[(1)] = (5));

} else {
var statearr_34529_35684 = state_34518__$1;
(statearr_34529_35684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34519 === (6))){
var inst_34500 = (state_34518[(7)]);
var inst_34505 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34500) : p.call(null,inst_34500));
var state_34518__$1 = state_34518;
if(cljs.core.truth_(inst_34505)){
var statearr_34530_35685 = state_34518__$1;
(statearr_34530_35685[(1)] = (8));

} else {
var statearr_34531_35686 = state_34518__$1;
(statearr_34531_35686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34519 === (3))){
var inst_34516 = (state_34518[(2)]);
var state_34518__$1 = state_34518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34518__$1,inst_34516);
} else {
if((state_val_34519 === (2))){
var state_34518__$1 = state_34518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34518__$1,(4),ch);
} else {
if((state_val_34519 === (11))){
var inst_34508 = (state_34518[(2)]);
var state_34518__$1 = state_34518;
var statearr_34532_35687 = state_34518__$1;
(statearr_34532_35687[(2)] = inst_34508);

(statearr_34532_35687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34519 === (9))){
var state_34518__$1 = state_34518;
var statearr_34533_35688 = state_34518__$1;
(statearr_34533_35688[(2)] = null);

(statearr_34533_35688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34519 === (5))){
var inst_34503 = cljs.core.async.close_BANG_(out);
var state_34518__$1 = state_34518;
var statearr_34534_35689 = state_34518__$1;
(statearr_34534_35689[(2)] = inst_34503);

(statearr_34534_35689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34519 === (10))){
var inst_34511 = (state_34518[(2)]);
var state_34518__$1 = (function (){var statearr_34535 = state_34518;
(statearr_34535[(8)] = inst_34511);

return statearr_34535;
})();
var statearr_34536_35690 = state_34518__$1;
(statearr_34536_35690[(2)] = null);

(statearr_34536_35690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34519 === (8))){
var inst_34500 = (state_34518[(7)]);
var state_34518__$1 = state_34518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34518__$1,(11),out,inst_34500);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_34539 = [null,null,null,null,null,null,null,null,null];
(statearr_34539[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_34539[(1)] = (1));

return statearr_34539;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_34518){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_34518);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e34540){var ex__32468__auto__ = e34540;
var statearr_34541_35694 = state_34518;
(statearr_34541_35694[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_34518[(4)]))){
var statearr_34542_35695 = state_34518;
(statearr_34542_35695[(1)] = cljs.core.first((state_34518[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35696 = state_34518;
state_34518 = G__35696;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_34518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_34518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_34544 = f__32698__auto__();
(statearr_34544[(6)] = c__32697__auto___35672);

return statearr_34544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34550 = arguments.length;
switch (G__34550) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_34616){
var state_val_34617 = (state_34616[(1)]);
if((state_val_34617 === (7))){
var inst_34609 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34618_35698 = state_34616__$1;
(statearr_34618_35698[(2)] = inst_34609);

(statearr_34618_35698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (20))){
var inst_34578 = (state_34616[(7)]);
var inst_34589 = (state_34616[(2)]);
var inst_34590 = cljs.core.next(inst_34578);
var inst_34564 = inst_34590;
var inst_34565 = null;
var inst_34566 = (0);
var inst_34567 = (0);
var state_34616__$1 = (function (){var statearr_34623 = state_34616;
(statearr_34623[(8)] = inst_34567);

(statearr_34623[(9)] = inst_34589);

(statearr_34623[(10)] = inst_34565);

(statearr_34623[(11)] = inst_34564);

(statearr_34623[(12)] = inst_34566);

return statearr_34623;
})();
var statearr_34624_35699 = state_34616__$1;
(statearr_34624_35699[(2)] = null);

(statearr_34624_35699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (1))){
var state_34616__$1 = state_34616;
var statearr_34625_35700 = state_34616__$1;
(statearr_34625_35700[(2)] = null);

(statearr_34625_35700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (4))){
var inst_34553 = (state_34616[(13)]);
var inst_34553__$1 = (state_34616[(2)]);
var inst_34554 = (inst_34553__$1 == null);
var state_34616__$1 = (function (){var statearr_34626 = state_34616;
(statearr_34626[(13)] = inst_34553__$1);

return statearr_34626;
})();
if(cljs.core.truth_(inst_34554)){
var statearr_34627_35701 = state_34616__$1;
(statearr_34627_35701[(1)] = (5));

} else {
var statearr_34628_35702 = state_34616__$1;
(statearr_34628_35702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (15))){
var state_34616__$1 = state_34616;
var statearr_34632_35703 = state_34616__$1;
(statearr_34632_35703[(2)] = null);

(statearr_34632_35703[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (21))){
var state_34616__$1 = state_34616;
var statearr_34633_35704 = state_34616__$1;
(statearr_34633_35704[(2)] = null);

(statearr_34633_35704[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (13))){
var inst_34567 = (state_34616[(8)]);
var inst_34565 = (state_34616[(10)]);
var inst_34564 = (state_34616[(11)]);
var inst_34566 = (state_34616[(12)]);
var inst_34574 = (state_34616[(2)]);
var inst_34575 = (inst_34567 + (1));
var tmp34629 = inst_34565;
var tmp34630 = inst_34564;
var tmp34631 = inst_34566;
var inst_34564__$1 = tmp34630;
var inst_34565__$1 = tmp34629;
var inst_34566__$1 = tmp34631;
var inst_34567__$1 = inst_34575;
var state_34616__$1 = (function (){var statearr_34634 = state_34616;
(statearr_34634[(8)] = inst_34567__$1);

(statearr_34634[(14)] = inst_34574);

(statearr_34634[(10)] = inst_34565__$1);

(statearr_34634[(11)] = inst_34564__$1);

(statearr_34634[(12)] = inst_34566__$1);

return statearr_34634;
})();
var statearr_34635_35709 = state_34616__$1;
(statearr_34635_35709[(2)] = null);

(statearr_34635_35709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (22))){
var state_34616__$1 = state_34616;
var statearr_34636_35710 = state_34616__$1;
(statearr_34636_35710[(2)] = null);

(statearr_34636_35710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (6))){
var inst_34553 = (state_34616[(13)]);
var inst_34562 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34553) : f.call(null,inst_34553));
var inst_34563 = cljs.core.seq(inst_34562);
var inst_34564 = inst_34563;
var inst_34565 = null;
var inst_34566 = (0);
var inst_34567 = (0);
var state_34616__$1 = (function (){var statearr_34637 = state_34616;
(statearr_34637[(8)] = inst_34567);

(statearr_34637[(10)] = inst_34565);

(statearr_34637[(11)] = inst_34564);

(statearr_34637[(12)] = inst_34566);

return statearr_34637;
})();
var statearr_34638_35712 = state_34616__$1;
(statearr_34638_35712[(2)] = null);

(statearr_34638_35712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (17))){
var inst_34578 = (state_34616[(7)]);
var inst_34582 = cljs.core.chunk_first(inst_34578);
var inst_34583 = cljs.core.chunk_rest(inst_34578);
var inst_34584 = cljs.core.count(inst_34582);
var inst_34564 = inst_34583;
var inst_34565 = inst_34582;
var inst_34566 = inst_34584;
var inst_34567 = (0);
var state_34616__$1 = (function (){var statearr_34639 = state_34616;
(statearr_34639[(8)] = inst_34567);

(statearr_34639[(10)] = inst_34565);

(statearr_34639[(11)] = inst_34564);

(statearr_34639[(12)] = inst_34566);

return statearr_34639;
})();
var statearr_34641_35713 = state_34616__$1;
(statearr_34641_35713[(2)] = null);

(statearr_34641_35713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (3))){
var inst_34611 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34616__$1,inst_34611);
} else {
if((state_val_34617 === (12))){
var inst_34598 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34643_35715 = state_34616__$1;
(statearr_34643_35715[(2)] = inst_34598);

(statearr_34643_35715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (2))){
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34616__$1,(4),in$);
} else {
if((state_val_34617 === (23))){
var inst_34607 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34644_35716 = state_34616__$1;
(statearr_34644_35716[(2)] = inst_34607);

(statearr_34644_35716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (19))){
var inst_34593 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34648_35717 = state_34616__$1;
(statearr_34648_35717[(2)] = inst_34593);

(statearr_34648_35717[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (11))){
var inst_34578 = (state_34616[(7)]);
var inst_34564 = (state_34616[(11)]);
var inst_34578__$1 = cljs.core.seq(inst_34564);
var state_34616__$1 = (function (){var statearr_34649 = state_34616;
(statearr_34649[(7)] = inst_34578__$1);

return statearr_34649;
})();
if(inst_34578__$1){
var statearr_34650_35722 = state_34616__$1;
(statearr_34650_35722[(1)] = (14));

} else {
var statearr_34651_35723 = state_34616__$1;
(statearr_34651_35723[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (9))){
var inst_34600 = (state_34616[(2)]);
var inst_34601 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34616__$1 = (function (){var statearr_34652 = state_34616;
(statearr_34652[(15)] = inst_34600);

return statearr_34652;
})();
if(cljs.core.truth_(inst_34601)){
var statearr_34653_35724 = state_34616__$1;
(statearr_34653_35724[(1)] = (21));

} else {
var statearr_34654_35725 = state_34616__$1;
(statearr_34654_35725[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (5))){
var inst_34556 = cljs.core.async.close_BANG_(out);
var state_34616__$1 = state_34616;
var statearr_34655_35726 = state_34616__$1;
(statearr_34655_35726[(2)] = inst_34556);

(statearr_34655_35726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (14))){
var inst_34578 = (state_34616[(7)]);
var inst_34580 = cljs.core.chunked_seq_QMARK_(inst_34578);
var state_34616__$1 = state_34616;
if(inst_34580){
var statearr_34656_35727 = state_34616__$1;
(statearr_34656_35727[(1)] = (17));

} else {
var statearr_34657_35728 = state_34616__$1;
(statearr_34657_35728[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (16))){
var inst_34596 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34658_35729 = state_34616__$1;
(statearr_34658_35729[(2)] = inst_34596);

(statearr_34658_35729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (10))){
var inst_34567 = (state_34616[(8)]);
var inst_34565 = (state_34616[(10)]);
var inst_34572 = cljs.core._nth(inst_34565,inst_34567);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34616__$1,(13),out,inst_34572);
} else {
if((state_val_34617 === (18))){
var inst_34578 = (state_34616[(7)]);
var inst_34587 = cljs.core.first(inst_34578);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34616__$1,(20),out,inst_34587);
} else {
if((state_val_34617 === (8))){
var inst_34567 = (state_34616[(8)]);
var inst_34566 = (state_34616[(12)]);
var inst_34569 = (inst_34567 < inst_34566);
var inst_34570 = inst_34569;
var state_34616__$1 = state_34616;
if(cljs.core.truth_(inst_34570)){
var statearr_34659_35730 = state_34616__$1;
(statearr_34659_35730[(1)] = (10));

} else {
var statearr_34660_35731 = state_34616__$1;
(statearr_34660_35731[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32465__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32465__auto____0 = (function (){
var statearr_34661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34661[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32465__auto__);

(statearr_34661[(1)] = (1));

return statearr_34661;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32465__auto____1 = (function (state_34616){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_34616);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e34662){var ex__32468__auto__ = e34662;
var statearr_34663_35732 = state_34616;
(statearr_34663_35732[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_34616[(4)]))){
var statearr_34664_35733 = state_34616;
(statearr_34664_35733[(1)] = cljs.core.first((state_34616[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35734 = state_34616;
state_34616 = G__35734;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32465__auto__ = function(state_34616){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32465__auto____1.call(this,state_34616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32465__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32465__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_34665 = f__32698__auto__();
(statearr_34665[(6)] = c__32697__auto__);

return statearr_34665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));

return c__32697__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34667 = arguments.length;
switch (G__34667) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34669 = arguments.length;
switch (G__34669) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34671 = arguments.length;
switch (G__34671) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32697__auto___35739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_34696){
var state_val_34697 = (state_34696[(1)]);
if((state_val_34697 === (7))){
var inst_34691 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
var statearr_34698_35740 = state_34696__$1;
(statearr_34698_35740[(2)] = inst_34691);

(statearr_34698_35740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (1))){
var inst_34672 = null;
var state_34696__$1 = (function (){var statearr_34699 = state_34696;
(statearr_34699[(7)] = inst_34672);

return statearr_34699;
})();
var statearr_34700_35744 = state_34696__$1;
(statearr_34700_35744[(2)] = null);

(statearr_34700_35744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (4))){
var inst_34675 = (state_34696[(8)]);
var inst_34675__$1 = (state_34696[(2)]);
var inst_34677 = (inst_34675__$1 == null);
var inst_34678 = cljs.core.not(inst_34677);
var state_34696__$1 = (function (){var statearr_34701 = state_34696;
(statearr_34701[(8)] = inst_34675__$1);

return statearr_34701;
})();
if(inst_34678){
var statearr_34702_35745 = state_34696__$1;
(statearr_34702_35745[(1)] = (5));

} else {
var statearr_34704_35746 = state_34696__$1;
(statearr_34704_35746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (6))){
var state_34696__$1 = state_34696;
var statearr_34707_35747 = state_34696__$1;
(statearr_34707_35747[(2)] = null);

(statearr_34707_35747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (3))){
var inst_34693 = (state_34696[(2)]);
var inst_34694 = cljs.core.async.close_BANG_(out);
var state_34696__$1 = (function (){var statearr_34708 = state_34696;
(statearr_34708[(9)] = inst_34693);

return statearr_34708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34696__$1,inst_34694);
} else {
if((state_val_34697 === (2))){
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34696__$1,(4),ch);
} else {
if((state_val_34697 === (11))){
var inst_34675 = (state_34696[(8)]);
var inst_34685 = (state_34696[(2)]);
var inst_34672 = inst_34675;
var state_34696__$1 = (function (){var statearr_34709 = state_34696;
(statearr_34709[(10)] = inst_34685);

(statearr_34709[(7)] = inst_34672);

return statearr_34709;
})();
var statearr_34710_35748 = state_34696__$1;
(statearr_34710_35748[(2)] = null);

(statearr_34710_35748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (9))){
var inst_34675 = (state_34696[(8)]);
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34696__$1,(11),out,inst_34675);
} else {
if((state_val_34697 === (5))){
var inst_34675 = (state_34696[(8)]);
var inst_34672 = (state_34696[(7)]);
var inst_34680 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34675,inst_34672);
var state_34696__$1 = state_34696;
if(inst_34680){
var statearr_34712_35749 = state_34696__$1;
(statearr_34712_35749[(1)] = (8));

} else {
var statearr_34713_35750 = state_34696__$1;
(statearr_34713_35750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (10))){
var inst_34688 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
var statearr_34718_35751 = state_34696__$1;
(statearr_34718_35751[(2)] = inst_34688);

(statearr_34718_35751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (8))){
var inst_34672 = (state_34696[(7)]);
var tmp34711 = inst_34672;
var inst_34672__$1 = tmp34711;
var state_34696__$1 = (function (){var statearr_34719 = state_34696;
(statearr_34719[(7)] = inst_34672__$1);

return statearr_34719;
})();
var statearr_34720_35752 = state_34696__$1;
(statearr_34720_35752[(2)] = null);

(statearr_34720_35752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_34721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34721[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_34721[(1)] = (1));

return statearr_34721;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_34696){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_34696);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e34722){var ex__32468__auto__ = e34722;
var statearr_34723_35754 = state_34696;
(statearr_34723_35754[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_34696[(4)]))){
var statearr_34724_35755 = state_34696;
(statearr_34724_35755[(1)] = cljs.core.first((state_34696[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35756 = state_34696;
state_34696 = G__35756;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_34696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_34696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_34725 = f__32698__auto__();
(statearr_34725[(6)] = c__32697__auto___35739);

return statearr_34725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34727 = arguments.length;
switch (G__34727) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32697__auto___35758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_34779){
var state_val_34780 = (state_34779[(1)]);
if((state_val_34780 === (7))){
var inst_34775 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34787_35759 = state_34779__$1;
(statearr_34787_35759[(2)] = inst_34775);

(statearr_34787_35759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (1))){
var inst_34728 = (new Array(n));
var inst_34729 = inst_34728;
var inst_34730 = (0);
var state_34779__$1 = (function (){var statearr_34788 = state_34779;
(statearr_34788[(7)] = inst_34730);

(statearr_34788[(8)] = inst_34729);

return statearr_34788;
})();
var statearr_34789_35760 = state_34779__$1;
(statearr_34789_35760[(2)] = null);

(statearr_34789_35760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (4))){
var inst_34733 = (state_34779[(9)]);
var inst_34733__$1 = (state_34779[(2)]);
var inst_34734 = (inst_34733__$1 == null);
var inst_34735 = cljs.core.not(inst_34734);
var state_34779__$1 = (function (){var statearr_34790 = state_34779;
(statearr_34790[(9)] = inst_34733__$1);

return statearr_34790;
})();
if(inst_34735){
var statearr_34791_35761 = state_34779__$1;
(statearr_34791_35761[(1)] = (5));

} else {
var statearr_34800_35762 = state_34779__$1;
(statearr_34800_35762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (15))){
var inst_34769 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34807_35763 = state_34779__$1;
(statearr_34807_35763[(2)] = inst_34769);

(statearr_34807_35763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (13))){
var state_34779__$1 = state_34779;
var statearr_34808_35764 = state_34779__$1;
(statearr_34808_35764[(2)] = null);

(statearr_34808_35764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (6))){
var inst_34730 = (state_34779[(7)]);
var inst_34759 = (inst_34730 > (0));
var state_34779__$1 = state_34779;
if(cljs.core.truth_(inst_34759)){
var statearr_34815_35765 = state_34779__$1;
(statearr_34815_35765[(1)] = (12));

} else {
var statearr_34816_35766 = state_34779__$1;
(statearr_34816_35766[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (3))){
var inst_34777 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34779__$1,inst_34777);
} else {
if((state_val_34780 === (12))){
var inst_34729 = (state_34779[(8)]);
var inst_34764 = cljs.core.vec(inst_34729);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34779__$1,(15),out,inst_34764);
} else {
if((state_val_34780 === (2))){
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34779__$1,(4),ch);
} else {
if((state_val_34780 === (11))){
var inst_34745 = (state_34779[(2)]);
var inst_34754 = (new Array(n));
var inst_34729 = inst_34754;
var inst_34730 = (0);
var state_34779__$1 = (function (){var statearr_34817 = state_34779;
(statearr_34817[(7)] = inst_34730);

(statearr_34817[(10)] = inst_34745);

(statearr_34817[(8)] = inst_34729);

return statearr_34817;
})();
var statearr_34820_35767 = state_34779__$1;
(statearr_34820_35767[(2)] = null);

(statearr_34820_35767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (9))){
var inst_34729 = (state_34779[(8)]);
var inst_34743 = cljs.core.vec(inst_34729);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34779__$1,(11),out,inst_34743);
} else {
if((state_val_34780 === (5))){
var inst_34730 = (state_34779[(7)]);
var inst_34738 = (state_34779[(11)]);
var inst_34733 = (state_34779[(9)]);
var inst_34729 = (state_34779[(8)]);
var inst_34737 = (inst_34729[inst_34730] = inst_34733);
var inst_34738__$1 = (inst_34730 + (1));
var inst_34739 = (inst_34738__$1 < n);
var state_34779__$1 = (function (){var statearr_34821 = state_34779;
(statearr_34821[(12)] = inst_34737);

(statearr_34821[(11)] = inst_34738__$1);

return statearr_34821;
})();
if(cljs.core.truth_(inst_34739)){
var statearr_34823_35772 = state_34779__$1;
(statearr_34823_35772[(1)] = (8));

} else {
var statearr_34824_35773 = state_34779__$1;
(statearr_34824_35773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (14))){
var inst_34772 = (state_34779[(2)]);
var inst_34773 = cljs.core.async.close_BANG_(out);
var state_34779__$1 = (function (){var statearr_34826 = state_34779;
(statearr_34826[(13)] = inst_34772);

return statearr_34826;
})();
var statearr_34827_35778 = state_34779__$1;
(statearr_34827_35778[(2)] = inst_34773);

(statearr_34827_35778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (10))){
var inst_34757 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34828_35779 = state_34779__$1;
(statearr_34828_35779[(2)] = inst_34757);

(statearr_34828_35779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (8))){
var inst_34738 = (state_34779[(11)]);
var inst_34729 = (state_34779[(8)]);
var tmp34825 = inst_34729;
var inst_34729__$1 = tmp34825;
var inst_34730 = inst_34738;
var state_34779__$1 = (function (){var statearr_34829 = state_34779;
(statearr_34829[(7)] = inst_34730);

(statearr_34829[(8)] = inst_34729__$1);

return statearr_34829;
})();
var statearr_34830_35781 = state_34779__$1;
(statearr_34830_35781[(2)] = null);

(statearr_34830_35781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_34831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34831[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_34831[(1)] = (1));

return statearr_34831;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_34779){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_34779);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e34835){var ex__32468__auto__ = e34835;
var statearr_34836_35787 = state_34779;
(statearr_34836_35787[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_34779[(4)]))){
var statearr_34837_35788 = state_34779;
(statearr_34837_35788[(1)] = cljs.core.first((state_34779[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35789 = state_34779;
state_34779 = G__35789;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_34779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_34779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_34838 = f__32698__auto__();
(statearr_34838[(6)] = c__32697__auto___35758);

return statearr_34838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34840 = arguments.length;
switch (G__34840) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32697__auto___35791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32464__auto__ = (function (state_34885){
var state_val_34886 = (state_34885[(1)]);
if((state_val_34886 === (7))){
var inst_34881 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
var statearr_34887_35792 = state_34885__$1;
(statearr_34887_35792[(2)] = inst_34881);

(statearr_34887_35792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (1))){
var inst_34841 = [];
var inst_34842 = inst_34841;
var inst_34843 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34885__$1 = (function (){var statearr_34888 = state_34885;
(statearr_34888[(7)] = inst_34843);

(statearr_34888[(8)] = inst_34842);

return statearr_34888;
})();
var statearr_34889_35793 = state_34885__$1;
(statearr_34889_35793[(2)] = null);

(statearr_34889_35793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (4))){
var inst_34846 = (state_34885[(9)]);
var inst_34846__$1 = (state_34885[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var inst_34848 = cljs.core.not(inst_34847);
var state_34885__$1 = (function (){var statearr_34890 = state_34885;
(statearr_34890[(9)] = inst_34846__$1);

return statearr_34890;
})();
if(inst_34848){
var statearr_34891_35794 = state_34885__$1;
(statearr_34891_35794[(1)] = (5));

} else {
var statearr_34892_35795 = state_34885__$1;
(statearr_34892_35795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (15))){
var inst_34842 = (state_34885[(8)]);
var inst_34873 = cljs.core.vec(inst_34842);
var state_34885__$1 = state_34885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34885__$1,(18),out,inst_34873);
} else {
if((state_val_34886 === (13))){
var inst_34868 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
var statearr_34893_35799 = state_34885__$1;
(statearr_34893_35799[(2)] = inst_34868);

(statearr_34893_35799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (6))){
var inst_34842 = (state_34885[(8)]);
var inst_34870 = inst_34842.length;
var inst_34871 = (inst_34870 > (0));
var state_34885__$1 = state_34885;
if(cljs.core.truth_(inst_34871)){
var statearr_34894_35800 = state_34885__$1;
(statearr_34894_35800[(1)] = (15));

} else {
var statearr_34895_35801 = state_34885__$1;
(statearr_34895_35801[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (17))){
var inst_34878 = (state_34885[(2)]);
var inst_34879 = cljs.core.async.close_BANG_(out);
var state_34885__$1 = (function (){var statearr_34896 = state_34885;
(statearr_34896[(10)] = inst_34878);

return statearr_34896;
})();
var statearr_34897_35802 = state_34885__$1;
(statearr_34897_35802[(2)] = inst_34879);

(statearr_34897_35802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (3))){
var inst_34883 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34885__$1,inst_34883);
} else {
if((state_val_34886 === (12))){
var inst_34842 = (state_34885[(8)]);
var inst_34861 = cljs.core.vec(inst_34842);
var state_34885__$1 = state_34885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34885__$1,(14),out,inst_34861);
} else {
if((state_val_34886 === (2))){
var state_34885__$1 = state_34885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34885__$1,(4),ch);
} else {
if((state_val_34886 === (11))){
var inst_34846 = (state_34885[(9)]);
var inst_34850 = (state_34885[(11)]);
var inst_34842 = (state_34885[(8)]);
var inst_34858 = inst_34842.push(inst_34846);
var tmp34898 = inst_34842;
var inst_34842__$1 = tmp34898;
var inst_34843 = inst_34850;
var state_34885__$1 = (function (){var statearr_34899 = state_34885;
(statearr_34899[(7)] = inst_34843);

(statearr_34899[(12)] = inst_34858);

(statearr_34899[(8)] = inst_34842__$1);

return statearr_34899;
})();
var statearr_34900_35803 = state_34885__$1;
(statearr_34900_35803[(2)] = null);

(statearr_34900_35803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (9))){
var inst_34843 = (state_34885[(7)]);
var inst_34854 = cljs.core.keyword_identical_QMARK_(inst_34843,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34885__$1 = state_34885;
var statearr_34901_35804 = state_34885__$1;
(statearr_34901_35804[(2)] = inst_34854);

(statearr_34901_35804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (5))){
var inst_34843 = (state_34885[(7)]);
var inst_34846 = (state_34885[(9)]);
var inst_34851 = (state_34885[(13)]);
var inst_34850 = (state_34885[(11)]);
var inst_34850__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34846) : f.call(null,inst_34846));
var inst_34851__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34850__$1,inst_34843);
var state_34885__$1 = (function (){var statearr_34902 = state_34885;
(statearr_34902[(13)] = inst_34851__$1);

(statearr_34902[(11)] = inst_34850__$1);

return statearr_34902;
})();
if(inst_34851__$1){
var statearr_34903_35805 = state_34885__$1;
(statearr_34903_35805[(1)] = (8));

} else {
var statearr_34906_35806 = state_34885__$1;
(statearr_34906_35806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (14))){
var inst_34846 = (state_34885[(9)]);
var inst_34850 = (state_34885[(11)]);
var inst_34863 = (state_34885[(2)]);
var inst_34864 = [];
var inst_34865 = inst_34864.push(inst_34846);
var inst_34842 = inst_34864;
var inst_34843 = inst_34850;
var state_34885__$1 = (function (){var statearr_34913 = state_34885;
(statearr_34913[(7)] = inst_34843);

(statearr_34913[(14)] = inst_34863);

(statearr_34913[(15)] = inst_34865);

(statearr_34913[(8)] = inst_34842);

return statearr_34913;
})();
var statearr_34914_35807 = state_34885__$1;
(statearr_34914_35807[(2)] = null);

(statearr_34914_35807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (16))){
var state_34885__$1 = state_34885;
var statearr_34918_35808 = state_34885__$1;
(statearr_34918_35808[(2)] = null);

(statearr_34918_35808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (10))){
var inst_34856 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
if(cljs.core.truth_(inst_34856)){
var statearr_34919_35809 = state_34885__$1;
(statearr_34919_35809[(1)] = (11));

} else {
var statearr_34920_35810 = state_34885__$1;
(statearr_34920_35810[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (18))){
var inst_34875 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
var statearr_34921_35811 = state_34885__$1;
(statearr_34921_35811[(2)] = inst_34875);

(statearr_34921_35811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (8))){
var inst_34851 = (state_34885[(13)]);
var state_34885__$1 = state_34885;
var statearr_34922_35812 = state_34885__$1;
(statearr_34922_35812[(2)] = inst_34851);

(statearr_34922_35812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32465__auto__ = null;
var cljs$core$async$state_machine__32465__auto____0 = (function (){
var statearr_34923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34923[(0)] = cljs$core$async$state_machine__32465__auto__);

(statearr_34923[(1)] = (1));

return statearr_34923;
});
var cljs$core$async$state_machine__32465__auto____1 = (function (state_34885){
while(true){
var ret_value__32466__auto__ = (function (){try{while(true){
var result__32467__auto__ = switch__32464__auto__(state_34885);
if(cljs.core.keyword_identical_QMARK_(result__32467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32467__auto__;
}
break;
}
}catch (e34924){var ex__32468__auto__ = e34924;
var statearr_34925_35814 = state_34885;
(statearr_34925_35814[(2)] = ex__32468__auto__);


if(cljs.core.seq((state_34885[(4)]))){
var statearr_34926_35815 = state_34885;
(statearr_34926_35815[(1)] = cljs.core.first((state_34885[(4)])));

} else {
throw ex__32468__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35816 = state_34885;
state_34885 = G__35816;
continue;
} else {
return ret_value__32466__auto__;
}
break;
}
});
cljs$core$async$state_machine__32465__auto__ = function(state_34885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32465__auto____1.call(this,state_34885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32465__auto____0;
cljs$core$async$state_machine__32465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32465__auto____1;
return cljs$core$async$state_machine__32465__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_34927 = f__32698__auto__();
(statearr_34927[(6)] = c__32697__auto___35791);

return statearr_34927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

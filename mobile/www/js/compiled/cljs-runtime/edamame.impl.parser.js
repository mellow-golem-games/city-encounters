goog.provide('edamame.impl.parser');
edamame.impl.parser.edn_read = (function edamame$impl$parser$edn_read(ctx,reader){
var tools_reader_opts = new cljs.core.Keyword("tools.reader","opts","tools.reader/opts",-2121810901).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(tools_reader_opts,reader);
});
edamame.impl.parser.dispatch_macro_QMARK_ = (function edamame$impl$parser$dispatch_macro_QMARK_(ch){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["!",null,"\"",null,"#",null,"'",null,"(",null,":",null,"{",null,"^",null,"?",null,"_",null], null), null),ch);
});
edamame.impl.parser.read_token = new cljs.core.Var(function(){return cljs.tools.reader.edn.read_token;},new cljs.core.Symbol("cljs.tools.reader.edn","read-token","cljs.tools.reader.edn/read-token",-1809266548,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"read-token","read-token",392624627,null),"cljs/tools/reader/edn.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),4,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),4,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_token)?cljs.tools.reader.edn.read_token.cljs$lang$test:null)]));
edamame.impl.parser.parse_symbol = new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.parse_symbol;},new cljs.core.Symbol("cljs.tools.reader.impl.commons","parse-symbol","cljs.tools.reader.impl.commons/parse-symbol",-903976395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.tools.reader.impl.commons","cljs.tools.reader.impl.commons",1569241026,null),new cljs.core.Symbol(null,"parse-symbol","parse-symbol",1608073451,null),"cljs/tools/reader/impl/commons.cljs",19,1,97,97,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",429068312,null)], null)),"Parses a string into a vector of the namespace and symbol",(cljs.core.truth_(cljs.tools.reader.impl.commons.parse_symbol)?cljs.tools.reader.impl.commons.parse_symbol.cljs$lang$test:null)]));
edamame.impl.parser.location = (function edamame$impl$parser$location(reader){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),new cljs.core.Keyword(null,"col","col",-1959363084),reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null)], null);
});
edamame.impl.parser.kw_identical_QMARK_ = (function edamame$impl$parser$kw_identical_QMARK_(kw,v){
return cljs.core.keyword_identical_QMARK_(kw,v);
});
edamame.impl.parser.parse_comment = (function edamame$impl$parser$parse_comment(reader){
cljs.tools.reader.reader_types.read_line(reader);

return reader;
});
edamame.impl.parser.whitespace_QMARK_ = (function edamame$impl$parser$whitespace_QMARK_(c){
var and__4221__auto__ = c;
if(cljs.core.truth_(and__4221__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__4221__auto__;
}
});
/**
 * Skips whitespace. Returns reader. If end of stream is reached, returns nil.
 */
edamame.impl.parser.skip_whitespace = (function edamame$impl$parser$skip_whitespace(_ctx,reader){
while(true){
var temp__5753__auto__ = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5753__auto__)){
var c = temp__5753__auto__;
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_(c))){
continue;
} else {
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,c);

return reader;
}
} else {
return null;
}
break;
}
});
/**
 * Throw reader exception, including line line/column. line/column is
 *   read from the reader but it can be overriden by passing loc
 *   optional parameter.
 */
edamame.impl.parser.throw_reader = (function edamame$impl$parser$throw_reader(var_args){
var G__41615 = arguments.length;
switch (G__41615) {
case 3:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,msg){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,msg,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,msg,data){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,msg,data,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5 = (function (ctx,reader,msg,data,loc){
var c = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_column_number(reader));
var l = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_line_number(reader));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("edamame","error","edamame/error",882529634),new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),l,new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),c]),data], 0)));
}));

(edamame.impl.parser.throw_reader.cljs$lang$maxFixedArity = 5);

edamame.impl.parser.non_match = new cljs.core.Keyword("edamame.impl.parser","nil","edamame.impl.parser/nil",-841451036);
edamame.impl.parser.non_match_QMARK_ = (function edamame$impl$parser$non_match_QMARK_(v){
return edamame.impl.parser.kw_identical_QMARK_(v,edamame.impl.parser.non_match);
});
edamame.impl.parser.throw_eof_while_reading = (function edamame$impl$parser$throw_eof_while_reading(ctx,reader){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"EOF while reading");
});
edamame.impl.parser.parse_to_delimiter = (function edamame$impl$parser$parse_to_delimiter(var_args){
var G__41636 = arguments.length;
switch (G__41636) {
case 3:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,delimiter){
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4(ctx,reader,delimiter,cljs.core.PersistentVector.EMPTY);
}));

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,delimiter,into){
var row = reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null);
var col = reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),delimiter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], 0));
var vals = cljs.core.transient$(into);
while(true){
var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : edamame.impl.parser.parse_next.call(null,ctx__$1,reader));
var cond_splice_QMARK_ = (function (){var G__41651 = next_val;
var G__41651__$1 = (((G__41651 == null))?null:cljs.core.meta(G__41651));
if((G__41651__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("edamame.impl.parser","cond-splice","edamame.impl.parser/cond-splice",1534599765).cljs$core$IFn$_invoke$arity$1(G__41651__$1);
}
})();
if(edamame.impl.parser.kw_identical_QMARK_(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),next_val)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''));
} else {
if(edamame.impl.parser.kw_identical_QMARK_(new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),next_val)){
return cljs.core.persistent_BANG_(vals);
} else {
if(cljs.core.truth_(cond_splice_QMARK_)){
var seq__41653_42074 = cljs.core.seq(next_val);
var chunk__41654_42075 = null;
var count__41655_42076 = (0);
var i__41656_42077 = (0);
while(true){
if((i__41656_42077 < count__41655_42076)){
var v_42078 = chunk__41654_42075.cljs$core$IIndexed$_nth$arity$2(null,i__41656_42077);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_42078);


var G__42079 = seq__41653_42074;
var G__42080 = chunk__41654_42075;
var G__42081 = count__41655_42076;
var G__42082 = (i__41656_42077 + (1));
seq__41653_42074 = G__42079;
chunk__41654_42075 = G__42080;
count__41655_42076 = G__42081;
i__41656_42077 = G__42082;
continue;
} else {
var temp__5753__auto___42083 = cljs.core.seq(seq__41653_42074);
if(temp__5753__auto___42083){
var seq__41653_42084__$1 = temp__5753__auto___42083;
if(cljs.core.chunked_seq_QMARK_(seq__41653_42084__$1)){
var c__4649__auto___42085 = cljs.core.chunk_first(seq__41653_42084__$1);
var G__42086 = cljs.core.chunk_rest(seq__41653_42084__$1);
var G__42087 = c__4649__auto___42085;
var G__42088 = cljs.core.count(c__4649__auto___42085);
var G__42089 = (0);
seq__41653_42074 = G__42086;
chunk__41654_42075 = G__42087;
count__41655_42076 = G__42088;
i__41656_42077 = G__42089;
continue;
} else {
var v_42090 = cljs.core.first(seq__41653_42084__$1);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_42090);


var G__42091 = cljs.core.next(seq__41653_42084__$1);
var G__42092 = null;
var G__42093 = (0);
var G__42094 = (0);
seq__41653_42074 = G__42091;
chunk__41654_42075 = G__42092;
count__41655_42076 = G__42093;
i__41656_42077 = G__42094;
continue;
}
} else {
}
}
break;
}

var G__42095 = vals;
vals = G__42095;
continue;
} else {
if(edamame.impl.parser.non_match_QMARK_(next_val)){
var G__42096 = vals;
vals = G__42096;
continue;
} else {
var G__42097 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,next_val);
vals = G__42097;
continue;

}
}
}
}
break;
}
}));

(edamame.impl.parser.parse_to_delimiter.cljs$lang$maxFixedArity = 4);

edamame.impl.parser.parse_list = (function edamame$impl$parser$parse_list(ctx,reader){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,")"));
});
/**
 * Modeled after tools.reader/read-regex.
 */
edamame.impl.parser.read_regex_pattern = (function edamame$impl$parser$read_regex_pattern(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(("\"" === ch)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((ch == null)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
sb.append(ch);

if(("\\" === ch)){
var ch_42102__$1 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_42102__$1 == null)){
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
}

sb.append(ch_42102__$1);
} else {
}

var G__42106 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__42106;
continue;
}
}
break;
}
});
edamame.impl.parser.duplicate_keys_error = (function edamame$impl$parser$duplicate_keys_error(msg,coll){
var duplicates = (function edamame$impl$parser$duplicate_keys_error_$_duplicates(seq){
var iter__4622__auto__ = (function edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__41704(s__41705){
return (new cljs.core.LazySeq(null,(function (){
var s__41705__$1 = s__41705;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41705__$1);
if(temp__5753__auto__){
var s__41705__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41705__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__41705__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__41707 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__41706 = (0);
while(true){
if((i__41706 < size__4621__auto__)){
var vec__41710 = cljs.core._nth(c__4620__auto__,i__41706);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41710,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41710,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__41707,id);

var G__42114 = (i__41706 + (1));
i__41706 = G__42114;
continue;
} else {
var G__42115 = (i__41706 + (1));
i__41706 = G__42115;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41707),edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__41704(cljs.core.chunk_rest(s__41705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41707),null);
}
} else {
var vec__41717 = cljs.core.first(s__41705__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41717,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41717,(1),null);
if((freq > (1))){
return cljs.core.cons(id,edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__41704(cljs.core.rest(s__41705__$2)));
} else {
var G__42120 = cljs.core.rest(s__41705__$2);
s__41705__$1 = G__42120;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
edamame.impl.parser.throw_dup_keys = (function edamame$impl$parser$throw_dup_keys(ctx,reader,loc,kind,ks){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,edamame.impl.parser.duplicate_keys_error([clojure.string.capitalize(cljs.core.name(kind))," literal contains duplicate key"].join(''),ks),null,loc);
});
edamame.impl.parser.parse_set = (function edamame$impl$parser$parse_set(ctx,reader){
var start_loc = edamame.impl.parser.location(reader);
var coll = edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var the_set = cljs.core.set(coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
edamame.impl.parser.throw_dup_keys(ctx,reader,start_loc,new cljs.core.Keyword(null,"set","set",304602554),coll);
}

return the_set;
});
edamame.impl.parser.parse_first_matching_condition = (function edamame$impl$parser$parse_first_matching_condition(ctx,reader){
var features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(ctx);
var match = edamame.impl.parser.non_match;
while(true){
edamame.impl.parser.skip_whitespace(ctx,reader);

var end_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null));
if(end_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return match;
} else {
var k = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var match_QMARK_ = ((edamame.impl.parser.non_match_QMARK_(match)) && (((cljs.core.contains_QMARK_(features,k)) || (edamame.impl.parser.kw_identical_QMARK_(k,new cljs.core.Keyword(null,"default","default",-1987822328))))));
if(match_QMARK_){
var G__42122 = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
match = G__42122;
continue;
} else {
var G__41741_42123 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755),true);
var G__41742_42124 = reader;
(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(G__41741_42123,G__41742_42124) : edamame.impl.parser.parse_next.call(null,G__41741_42123,G__41742_42124));

var G__42125 = match;
match = G__42125;
continue;
}
}
break;
}
});
edamame.impl.parser.parse_reader_conditional = (function edamame$impl$parser$parse_reader_conditional(ctx,reader){
edamame.impl.parser.skip_whitespace(ctx,reader);

var opt = new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx);
var splice_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null));
if(splice_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
} else {
}

if(edamame.impl.parser.kw_identical_QMARK_(new cljs.core.Keyword(null,"preserve","preserve",1276846509),opt)){
return cljs.tools.reader.impl.utils.reader_conditional((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),splice_QMARK_);
} else {
if(cljs.core.fn_QMARK_(opt)){
var G__41769 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),cljs.core.assoc,new cljs.core.Keyword("edamame","read-cond-splicing","edamame/read-cond-splicing",-1992728777),splice_QMARK_);
return (opt.cljs$core$IFn$_invoke$arity$1 ? opt.cljs$core$IFn$_invoke$arity$1(G__41769) : opt.call(null,G__41769));
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var match = edamame.impl.parser.parse_first_matching_condition(ctx,reader);
if(edamame.impl.parser.non_match_QMARK_(match)){
return reader;
} else {
if(splice_QMARK_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(match,(function (p1__41751_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41751_SHARP_,new cljs.core.Keyword("edamame.impl.parser","cond-splice","edamame.impl.parser/cond-splice",1534599765),true);
}));
} else {
return match;

}
}

}
}
});
edamame.impl.parser.get_auto_resolve = (function edamame$impl$parser$get_auto_resolve(var_args){
var G__41799 = arguments.length;
switch (G__41799) {
case 3:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,next_val){
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,next_val,null);
}));

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,next_val,msg){
var temp__5751__auto__ = new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
return v;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__4223__auto__ = msg;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "Use `:auto-resolve` to resolve aliases.";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.get_auto_resolve.cljs$lang$maxFixedArity = 4);

/**
 * Returns namespace for given alias.
 */
edamame.impl.parser.auto_resolve = (function edamame$impl$parser$auto_resolve(var_args){
var G__41817 = arguments.length;
switch (G__41817) {
case 5:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5 = (function (ctx,m,kns,reader,next_val){
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,m,kns,reader,next_val,null);
}));

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6 = (function (ctx,m,kns,reader,next_val,msg){
var temp__5751__auto__ = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(kns) : m.call(null,kns));
if(cljs.core.truth_(temp__5751__auto__)){
var kns__$1 = temp__5751__auto__;
return kns__$1;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__4223__auto__ = msg;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return ["Alias `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(kns)),"` not found in `:auto-resolve`"].join('');
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.auto_resolve.cljs$lang$maxFixedArity = 6);

edamame.impl.parser.parse_namespaced_map = (function edamame$impl$parser$parse_namespaced_map(ctx,reader){
var prefix = edamame.impl.parser.edn_read(ctx,reader);
var the_map = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if((prefix instanceof cljs.core.Keyword)){
var ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prefix));
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,ns);
var resolved_ns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,ns,reader,prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_ns),cljs.core.keys(the_map)),cljs.core.vals(the_map));
} else {
var resolved_ns = cljs.core.name(prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(resolved_ns,cljs.core.keys(the_map)),cljs.core.vals(the_map));
}
});
edamame.impl.parser.parse_sharp = (function edamame$impl$parser$parse_sharp(ctx,reader){
var c = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
var G__41843 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41843)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("!",G__41843)){
edamame.impl.parser.parse_comment(reader);

return reader;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__41843)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
var pat = edamame.impl.parser.read_regex_pattern(ctx,reader);
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(pat) : v.call(null,pat));
} else {
return cljs.core.re_pattern(pat);
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Regex not allowed. Use the `:regex` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__41843)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(edamame.impl.parser.kw_identical_QMARK_(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),next_val)){
edamame.impl.parser.throw_eof_while_reading(ctx,reader);
} else {
}

if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Var literal not allowed. Use the `:var` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__41843)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
var fn_expr = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(fn_expr) : v.call(null,fn_expr));
} else {
return edamame.impl.read_fn.read_fn(fn_expr);
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Function literal not allowed. Use the `:fn` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__41843)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_namespaced_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__41843)){
return edamame.impl.parser.parse_set(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__41843)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"read-eval","read-eval",1788733932).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"read-eval","read-eval",-865701837,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Read-eval not allowed. Use the `:read-eval` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__41843)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx))){
} else {
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Conditional read not allowed.");
}

reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_reader_conditional(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__41843)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));

return reader;
} else {
if(edamame.impl.parser.dispatch_macro_QMARK_(c)){
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,"#");

return edamame.impl.parser.edn_read(ctx,reader);
} else {
var suppress_QMARK_ = new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(suppress_QMARK_)){
(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));

return (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
} else {
var sym = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var data = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var f = (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$1(ctx),sym);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.tagged_literals._STAR_cljs_data_readers_STAR_.call(null,sym);
}
})();
if(cljs.core.truth_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));
} else {
throw (new Error(["No reader function for tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
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
edamame.impl.parser.throw_odd_map = (function edamame$impl$parser$throw_odd_map(ctx,reader,loc,elements){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["The map literal starting with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)))," contains ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(elements))," form(s). Map literals must contain an even number of forms."].join(''),null,loc);
});
edamame.impl.parser.parse_map = (function edamame$impl$parser$parse_map(ctx,reader){
var start_loc = edamame.impl.parser.location(reader);
var elements = edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var c = cljs.core.count(elements);
if((c > (0))){
if(cljs.core.odd_QMARK_(c)){
edamame.impl.parser.throw_odd_map(ctx,reader,start_loc,elements);
} else {
}

var ks_42128 = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),elements);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,ks_42128))){
} else {
edamame.impl.parser.throw_dup_keys(ctx,reader,start_loc,new cljs.core.Keyword(null,"map","map",1371690461),ks_42128);
}
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,elements);
});
edamame.impl.parser.parse_keyword = (function edamame$impl$parser$parse_keyword(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var init_c = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_(init_c))){
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Invalid token: :");
} else {
}

var token = (edamame.impl.parser.read_token.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.parser.read_token.cljs$core$IFn$_invoke$arity$3(reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),init_c) : edamame.impl.parser.read_token.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),init_c));
var auto_resolve_QMARK_ = (":" === token.charAt((0)));
if(auto_resolve_QMARK_){
var token__$1 = ((auto_resolve_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,(1)):token);
var vec__41878 = (edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1 ? edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1(token__$1) : edamame.impl.parser.parse_symbol.call(null,token__$1));
var token_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41878,(0),null);
var token_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41878,(1),null);
if(cljs.core.truth_(token_ns)){
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,token__$1);
var kns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token_ns),reader,token_ns);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
} else {
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
var kns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,f,new cljs.core.Keyword(null,"current","current",-1088038603),reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
}
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
}
});
/**
 * Resolves syntactical sugar in metadata
 */
edamame.impl.parser.desugar_meta = (function edamame$impl$parser$desugar_meta(var_args){
var G__41884 = arguments.length;
switch (G__41884) {
case 1:
return edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1 = (function (f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
}));

(edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2 = (function (f,postprocess){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f)),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(true) : postprocess.call(null,true))]);
} else {
if((f instanceof cljs.core.Symbol)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223)) : postprocess.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223))),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f))]);
} else {
if(typeof f === 'string'){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223)) : postprocess.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223))),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f))]);
} else {
return f;

}
}
}
}));

(edamame.impl.parser.desugar_meta.cljs$lang$maxFixedArity = 2);

edamame.impl.parser.dispatch = (function edamame$impl$parser$dispatch(ctx,reader,c){
var sharp_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",c);
if(sharp_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_sharp(ctx,reader);
} else {
var G__41888 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41888)){
return new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",G__41888)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"deref","deref",-145586795).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Deref not allowed. Use the `:deref` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__41888)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.fn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
var gensyms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"gensyms","gensyms",248713782),gensyms);
var ret = edamame.impl.syntax_quote.syntax_quote(ctx__$1,reader,next_val);
return ret;
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax quote not allowed. Use the `:syntax-quote` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__41888)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(edamame.impl.parser.kw_identical_QMARK_(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),next_val)){
edamame.impl.parser.throw_eof_while_reading(ctx,reader);
} else {
}

if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.edn_read(ctx,reader);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__41888)){
return edamame.impl.parser.parse_list(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",G__41888)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = edamame.impl.parser.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__41897 = temp__5753__auto__;
var map__41897__$1 = cljs.core.__destructure_map(map__41897);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41897__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__41888)){
return edamame.impl.parser.parse_keyword(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",G__41888)){
return edamame.impl.parser.parse_comment(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",G__41888)){
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"]");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__41888)){
return edamame.impl.parser.parse_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("]",G__41888)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = edamame.impl.parser.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__41942 = temp__5753__auto__;
var map__41942__$1 = cljs.core.__destructure_map(map__41942);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41942__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41942__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41942__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",G__41888)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = edamame.impl.parser.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__41966 = temp__5753__auto__;
var map__41966__$1 = cljs.core.__destructure_map(map__41966);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41966__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41966__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41966__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__41888)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var meta_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,true) : edamame.impl.parser.parse_next.call(null,ctx,reader,true));
var val_val = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),cljs.core.merge,meta_val);
return val_val;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("~",G__41888)){
var temp__5751__auto__ = (function (){var and__4221__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__4221__auto__)){
var or__4223__auto__ = new cljs.core.Keyword(null,"unquote","unquote",1649741032).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return true;
}
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var nc = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if((nc === "@")){
var temp__5751__auto____$1 = (function (){var and__4221__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__4221__auto__)){
var or__4223__auto__ = new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return true;
}
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto____$1)){
var v__$1 = temp__5751__auto____$1;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v__$1)){
return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(next_val) : v__$1.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax unquote splice not allowed. Use the `:syntax-quote` option");
}
} else {
var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax unquote not allowed. Use the `:syntax-unquote` option");
}
} else {
return edamame.impl.parser.edn_read(ctx,reader);

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
edamame.impl.parser.parse_next = (function edamame$impl$parser$parse_next(var_args){
var G__41982 = arguments.length;
switch (G__41982) {
case 2:
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,null);
}));

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,desugar){
while(true){
var temp__5751__auto__ = (function (){var and__4221__auto__ = edamame.impl.parser.skip_whitespace(ctx,reader);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.tools.reader.reader_types.peek_char(reader);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
var loc = edamame.impl.parser.location(reader);
var obj = edamame.impl.parser.dispatch(ctx,reader,c);
if((reader === obj)){
var G__42155 = ctx;
var G__42156 = reader;
var G__42157 = desugar;
ctx = G__42155;
reader = G__42156;
desugar = G__42157;
continue;
} else {
if(edamame.impl.parser.kw_identical_QMARK_(new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),obj)){
return obj;
} else {
var postprocess = new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881).cljs$core$IFn$_invoke$arity$1(ctx);
var iobj_QMARK_ = (((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj));
var end_loc = (cljs.core.truth_((function (){var or__4223__auto__ = iobj_QMARK_;
if(or__4223__auto__){
return or__4223__auto__;
} else {
return postprocess;
}
})())?edamame.impl.parser.location(reader):null);
var postprocess_fn = (cljs.core.truth_(postprocess)?((function (ctx,reader,desugar,postprocess,iobj_QMARK_,end_loc,loc,obj,c,temp__5751__auto__){
return (function (p1__41976_SHARP_){
var G__41984 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),p1__41976_SHARP_,new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(loc),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(loc),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end_loc),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(end_loc)])], null);
return (postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(G__41984) : postprocess.call(null,G__41984));
});})(ctx,reader,desugar,postprocess,iobj_QMARK_,end_loc,loc,obj,c,temp__5751__auto__))
:null);
var obj__$1 = (cljs.core.truth_(desugar)?(cljs.core.truth_(postprocess_fn)?edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2(obj,postprocess_fn):edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1(obj)):obj);
var obj__$2 = (cljs.core.truth_(postprocess)?(postprocess_fn.cljs$core$IFn$_invoke$arity$1 ? postprocess_fn.cljs$core$IFn$_invoke$arity$1(obj__$1) : postprocess_fn.call(null,obj__$1)):((iobj_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(obj__$1,((function (ctx,reader,desugar,postprocess,iobj_QMARK_,end_loc,postprocess_fn,obj__$1,loc,obj,c,temp__5751__auto__){
return (function (p1__41980_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__41980_SHARP_,new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(loc),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(loc),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end_loc),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(end_loc)], 0));
});})(ctx,reader,desugar,postprocess,iobj_QMARK_,end_loc,postprocess_fn,obj__$1,loc,obj,c,temp__5751__auto__))
):obj__$1
));
return obj__$2;
}
}
} else {
return new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
}
break;
}
}));

(edamame.impl.parser.parse_next.cljs$lang$maxFixedArity = 3);

/**
 * Create reader for strings.
 */
edamame.impl.parser.string_reader = (function edamame$impl$parser$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
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
edamame.impl.parser.Options = (function (dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,__meta,__extmap,__hash){
this.dispatch = dispatch;
this.deref = deref;
this.syntax_quote = syntax_quote;
this.unquote = unquote;
this.unquote_splicing = unquote_splicing;
this.quote = quote;
this.fn = fn;
this.var$ = var$;
this.read_eval = read_eval;
this.regex = regex;
this.row_key = row_key;
this.col_key = col_key;
this.end_row_key = end_row_key;
this.end_col_key = end_col_key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k41988,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__41992 = k41988;
var G__41992__$1 = (((G__41992 instanceof cljs.core.Keyword))?G__41992.fqn:null);
switch (G__41992__$1) {
case "dispatch":
return self__.dispatch;

break;
case "deref":
return self__.deref;

break;
case "syntax-quote":
return self__.syntax_quote;

break;
case "unquote":
return self__.unquote;

break;
case "unquote-splicing":
return self__.unquote_splicing;

break;
case "quote":
return self__.quote;

break;
case "fn":
return self__.fn;

break;
case "var":
return self__.var$;

break;
case "read-eval":
return self__.read_eval;

break;
case "regex":
return self__.regex;

break;
case "row-key":
return self__.row_key;

break;
case "col-key":
return self__.col_key;

break;
case "end-row-key":
return self__.end_row_key;

break;
case "end-col-key":
return self__.end_col_key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41988,else__4475__auto__);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__41993){
var vec__41994 = p__41993;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41994,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41994,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(edamame.impl.parser.Options.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#edamame.impl.parser.Options{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),self__.dispatch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deref","deref",-145586795),self__.deref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),self__.syntax_quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unquote","unquote",1649741032),self__.unquote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),self__.unquote_splicing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"quote","quote",-262615245),self__.quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),self__.read_eval],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row-key","row-key",-1189010712),self__.row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col-key","col-key",-2009675766),self__.col_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),self__.end_row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),self__.end_col_key],null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41987){
var self__ = this;
var G__41987__$1 = this;
return (new cljs.core.RecordIter((0),G__41987__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1037796634 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41989,other41990){
var self__ = this;
var this41989__$1 = this;
return (((!((other41990 == null)))) && ((((this41989__$1.constructor === other41990.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.dispatch,other41990.dispatch)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.deref,other41990.deref)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.syntax_quote,other41990.syntax_quote)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.unquote,other41990.unquote)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.unquote_splicing,other41990.unquote_splicing)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.quote,other41990.quote)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.fn,other41990.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.var,other41990.var)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.read_eval,other41990.read_eval)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.regex,other41990.regex)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.row_key,other41990.row_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.col_key,other41990.col_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.end_row_key,other41990.end_row_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.end_col_key,other41990.end_col_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41989__$1.__extmap,other41990.__extmap)))))))))))))))))))))))))))))))));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),null,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"deref","deref",-145586795),null,new cljs.core.Keyword(null,"regex","regex",939488856),null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k41988){
var self__ = this;
var this__4479__auto____$1 = this;
var G__42016 = k41988;
var G__42016__$1 = (((G__42016 instanceof cljs.core.Keyword))?G__42016.fqn:null);
switch (G__42016__$1) {
case "dispatch":
case "deref":
case "syntax-quote":
case "unquote":
case "unquote-splicing":
case "quote":
case "fn":
case "var":
case "read-eval":
case "regex":
case "row-key":
case "col-key":
case "end-row-key":
case "end-col-key":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41988);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__41987){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__42018 = cljs.core.keyword_identical_QMARK_;
var expr__42019 = k__4481__auto__;
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),expr__42019)))){
return (new edamame.impl.parser.Options(G__41987,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deref","deref",-145586795),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"deref","deref",-145586795),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,G__41987,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,G__41987,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unquote","unquote",1649741032),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,G__41987,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,G__41987,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"quote","quote",-262615245),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"quote","quote",-262615245),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,G__41987,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,G__41987,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var","var",-769682797),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,G__41987,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,G__41987,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regex","regex",939488856),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"regex","regex",939488856),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,G__41987,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-key","row-key",-1189010712),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,G__41987,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col-key","col-key",-2009675766),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,G__41987,self__.end_row_key,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,G__41987,self__.end_col_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42018.cljs$core$IFn$_invoke$arity$2 ? pred__42018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),expr__42019) : pred__42018.call(null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),expr__42019)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,G__41987,self__.__meta,self__.__extmap,null));
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__41987),null));
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
}));

(edamame.impl.parser.Options.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),self__.dispatch,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"deref","deref",-145586795),self__.deref,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),self__.syntax_quote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unquote","unquote",1649741032),self__.unquote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),self__.unquote_splicing,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"quote","quote",-262615245),self__.quote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var","var",-769682797),self__.var$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),self__.read_eval,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"row-key","row-key",-1189010712),self__.row_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col-key","col-key",-2009675766),self__.col_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),self__.end_row_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),self__.end_col_key,null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__41987){
var self__ = this;
var this__4471__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,G__41987,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(edamame.impl.parser.Options.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"read-eval","read-eval",-865701837,null),new cljs.core.Symbol(null,"regex","regex",-1714946913,null),new cljs.core.Symbol(null,"row-key","row-key",451520815,null),new cljs.core.Symbol(null,"col-key","col-key",-369144239,null),new cljs.core.Symbol(null,"end-row-key","end-row-key",513868847,null),new cljs.core.Symbol(null,"end-col-key","end-col-key",1722344831,null)], null);
}));

(edamame.impl.parser.Options.cljs$lang$type = true);

(edamame.impl.parser.Options.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"edamame.impl.parser/Options",null,(1),null));
}));

(edamame.impl.parser.Options.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"edamame.impl.parser/Options");
}));

/**
 * Positional factory function for edamame.impl.parser/Options.
 */
edamame.impl.parser.__GT_Options = (function edamame$impl$parser$__GT_Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key){
return (new edamame.impl.parser.Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,null,null,null));
});

/**
 * Factory function for edamame.impl.parser/Options, taking a map of keywords to field values.
 */
edamame.impl.parser.map__GT_Options = (function edamame$impl$parser$map__GT_Options(G__41991){
var extmap__4512__auto__ = (function (){var G__42044 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41991,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304)], 0));
if(cljs.core.record_QMARK_(G__41991)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42044);
} else {
return G__42044;
}
})();
return (new edamame.impl.parser.Options(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"deref","deref",-145586795).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"unquote","unquote",1649741032).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(G__41991),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(G__41991),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

edamame.impl.parser.normalize_opts = (function edamame$impl$parser$normalize_opts(opts){
var opts__$1 = (function (){var temp__5751__auto__ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5751__auto__)){
var dispatch = temp__5751__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deref","deref",-145586795),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
if(cljs.core.fn_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote","unquote",1649741032),v], null);
} else {
var temp__5753__auto____$1 = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5753__auto____$1)){
var v__$1 = temp__5753__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote","unquote",1649741032),v__$1], null);
} else {
return null;
}
}
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","@"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quote","quote",-262615245),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","("], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","'"], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","="], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),v], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","\""], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regex","regex",939488856),v], null);
} else {
return null;
}
})()], null));
} else {
return opts;
}
})();
var opts__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"deref","deref",-145586795),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),true,new cljs.core.Keyword(null,"quote","quote",-262615245),true,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),true,new cljs.core.Keyword(null,"regex","regex",939488856),true,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),true,new cljs.core.Keyword(null,"var","var",-769682797),true], null),opts__$1], 0)):opts__$1);
var opts__$3 = (function (){var G__42048 = opts__$2;
var G__42048__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42048,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"row","row",-570139521)):G__42048);
var G__42048__$2 = ((cljs.core.not(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42048__$1,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-row","end-row",-545103581)):G__42048__$1);
var G__42048__$3 = ((cljs.core.not(new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42048__$2,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"col","col",-1959363084)):G__42048__$2);
if(cljs.core.not(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(opts__$2))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42048__$3,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"end-col","end-col",-724155879));
} else {
return G__42048__$3;
}
})();
return edamame.impl.parser.map__GT_Options(opts__$3);
});
edamame.impl.parser.parse_string = (function edamame$impl$parser$parse_string(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts(opts);
var r = edamame.impl.parser.string_reader(s);
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var v = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if(edamame.impl.parser.kw_identical_QMARK_(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),v)){
return null;
} else {
return v;
}
});
edamame.impl.parser.parse_string_all = (function edamame$impl$parser$parse_string_all(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts(opts);
var r = edamame.impl.parser.string_reader(s);
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var next_val = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if(edamame.impl.parser.kw_identical_QMARK_(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),next_val)){
return cljs.core.persistent_BANG_(ret);
} else {
var G__42212 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,next_val);
ret = G__42212;
continue;
}
break;
}
});

//# sourceMappingURL=edamame.impl.parser.js.map
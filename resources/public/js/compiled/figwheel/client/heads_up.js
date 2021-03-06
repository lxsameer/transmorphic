// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17890__auto__ = [];
var len__17883__auto___35798 = arguments.length;
var i__17884__auto___35799 = (0);
while(true){
if((i__17884__auto___35799 < len__17883__auto___35798)){
args__17890__auto__.push((arguments[i__17884__auto___35799]));

var G__35800 = (i__17884__auto___35799 + (1));
i__17884__auto___35799 = G__35800;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((2) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17891__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__35790_35801 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35791_35802 = null;
var count__35792_35803 = (0);
var i__35793_35804 = (0);
while(true){
if((i__35793_35804 < count__35792_35803)){
var k_35805 = cljs.core._nth.call(null,chunk__35791_35802,i__35793_35804);
e.setAttribute(cljs.core.name.call(null,k_35805),cljs.core.get.call(null,attrs,k_35805));

var G__35806 = seq__35790_35801;
var G__35807 = chunk__35791_35802;
var G__35808 = count__35792_35803;
var G__35809 = (i__35793_35804 + (1));
seq__35790_35801 = G__35806;
chunk__35791_35802 = G__35807;
count__35792_35803 = G__35808;
i__35793_35804 = G__35809;
continue;
} else {
var temp__4425__auto___35810 = cljs.core.seq.call(null,seq__35790_35801);
if(temp__4425__auto___35810){
var seq__35790_35811__$1 = temp__4425__auto___35810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35790_35811__$1)){
var c__17628__auto___35812 = cljs.core.chunk_first.call(null,seq__35790_35811__$1);
var G__35813 = cljs.core.chunk_rest.call(null,seq__35790_35811__$1);
var G__35814 = c__17628__auto___35812;
var G__35815 = cljs.core.count.call(null,c__17628__auto___35812);
var G__35816 = (0);
seq__35790_35801 = G__35813;
chunk__35791_35802 = G__35814;
count__35792_35803 = G__35815;
i__35793_35804 = G__35816;
continue;
} else {
var k_35817 = cljs.core.first.call(null,seq__35790_35811__$1);
e.setAttribute(cljs.core.name.call(null,k_35817),cljs.core.get.call(null,attrs,k_35817));

var G__35818 = cljs.core.next.call(null,seq__35790_35811__$1);
var G__35819 = null;
var G__35820 = (0);
var G__35821 = (0);
seq__35790_35801 = G__35818;
chunk__35791_35802 = G__35819;
count__35792_35803 = G__35820;
i__35793_35804 = G__35821;
continue;
}
} else {
}
}
break;
}

var seq__35794_35822 = cljs.core.seq.call(null,children);
var chunk__35795_35823 = null;
var count__35796_35824 = (0);
var i__35797_35825 = (0);
while(true){
if((i__35797_35825 < count__35796_35824)){
var ch_35826 = cljs.core._nth.call(null,chunk__35795_35823,i__35797_35825);
e.appendChild(ch_35826);

var G__35827 = seq__35794_35822;
var G__35828 = chunk__35795_35823;
var G__35829 = count__35796_35824;
var G__35830 = (i__35797_35825 + (1));
seq__35794_35822 = G__35827;
chunk__35795_35823 = G__35828;
count__35796_35824 = G__35829;
i__35797_35825 = G__35830;
continue;
} else {
var temp__4425__auto___35831 = cljs.core.seq.call(null,seq__35794_35822);
if(temp__4425__auto___35831){
var seq__35794_35832__$1 = temp__4425__auto___35831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35794_35832__$1)){
var c__17628__auto___35833 = cljs.core.chunk_first.call(null,seq__35794_35832__$1);
var G__35834 = cljs.core.chunk_rest.call(null,seq__35794_35832__$1);
var G__35835 = c__17628__auto___35833;
var G__35836 = cljs.core.count.call(null,c__17628__auto___35833);
var G__35837 = (0);
seq__35794_35822 = G__35834;
chunk__35795_35823 = G__35835;
count__35796_35824 = G__35836;
i__35797_35825 = G__35837;
continue;
} else {
var ch_35838 = cljs.core.first.call(null,seq__35794_35832__$1);
e.appendChild(ch_35838);

var G__35839 = cljs.core.next.call(null,seq__35794_35832__$1);
var G__35840 = null;
var G__35841 = (0);
var G__35842 = (0);
seq__35794_35822 = G__35839;
chunk__35795_35823 = G__35840;
count__35796_35824 = G__35841;
i__35797_35825 = G__35842;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq35787){
var G__35788 = cljs.core.first.call(null,seq35787);
var seq35787__$1 = cljs.core.next.call(null,seq35787);
var G__35789 = cljs.core.first.call(null,seq35787__$1);
var seq35787__$2 = cljs.core.next.call(null,seq35787__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__35788,G__35789,seq35787__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__,hierarchy__17742__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__,hierarchy__17742__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17742__auto__,method_table__17738__auto__,prefer_table__17739__auto__,method_cache__17740__auto__,cached_hierarchy__17741__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_35843 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_35843.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_35843.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_35843.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_35843);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__35844,st_map){
var map__35849 = p__35844;
var map__35849__$1 = ((((!((map__35849 == null)))?((((map__35849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35849):map__35849);
var container_el = cljs.core.get.call(null,map__35849__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35849,map__35849__$1,container_el){
return (function (p__35851){
var vec__35852 = p__35851;
var k = cljs.core.nth.call(null,vec__35852,(0),null);
var v = cljs.core.nth.call(null,vec__35852,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35849,map__35849__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__35853,dom_str){
var map__35856 = p__35853;
var map__35856__$1 = ((((!((map__35856 == null)))?((((map__35856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35856):map__35856);
var c = map__35856__$1;
var content_area_el = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__35858){
var map__35861 = p__35858;
var map__35861__$1 = ((((!((map__35861 == null)))?((((map__35861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35861):map__35861);
var content_area_el = cljs.core.get.call(null,map__35861__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_35904){
var state_val_35905 = (state_35904[(1)]);
if((state_val_35905 === (1))){
var inst_35889 = (state_35904[(7)]);
var inst_35889__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35890 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35891 = ["10px","10px","100%","68px","1.0"];
var inst_35892 = cljs.core.PersistentHashMap.fromArrays(inst_35890,inst_35891);
var inst_35893 = cljs.core.merge.call(null,inst_35892,style);
var inst_35894 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35889__$1,inst_35893);
var inst_35895 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35889__$1,msg);
var inst_35896 = cljs.core.async.timeout.call(null,(300));
var state_35904__$1 = (function (){var statearr_35906 = state_35904;
(statearr_35906[(8)] = inst_35895);

(statearr_35906[(7)] = inst_35889__$1);

(statearr_35906[(9)] = inst_35894);

return statearr_35906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35904__$1,(2),inst_35896);
} else {
if((state_val_35905 === (2))){
var inst_35889 = (state_35904[(7)]);
var inst_35898 = (state_35904[(2)]);
var inst_35899 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35900 = ["auto"];
var inst_35901 = cljs.core.PersistentHashMap.fromArrays(inst_35899,inst_35900);
var inst_35902 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35889,inst_35901);
var state_35904__$1 = (function (){var statearr_35907 = state_35904;
(statearr_35907[(10)] = inst_35898);

return statearr_35907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35904__$1,inst_35902);
} else {
return null;
}
}
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto____0 = (function (){
var statearr_35911 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35911[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto__);

(statearr_35911[(1)] = (1));

return statearr_35911;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto____1 = (function (state_35904){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_35904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e35912){if((e35912 instanceof Object)){
var ex__22196__auto__ = e35912;
var statearr_35913_35915 = state_35904;
(statearr_35913_35915[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35916 = state_35904;
state_35904 = G__35916;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto__ = function(state_35904){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto____1.call(this,state_35904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_35914 = f__22305__auto__.call(null);
(statearr_35914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_35914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__35918 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__35918,(0),null);
var ln = cljs.core.nth.call(null,vec__35918,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__35921 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__35921,(0),null);
var file_line = cljs.core.nth.call(null,vec__35921,(1),null);
var file_column = cljs.core.nth.call(null,vec__35921,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35921,file_name,file_line,file_column){
return (function (p1__35919_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__35919_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__35921,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16825__auto__ = file_line;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var and__16813__auto__ = cause;
if(cljs.core.truth_(and__16813__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16813__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__35924 = figwheel.client.heads_up.ensure_container.call(null);
var map__35924__$1 = ((((!((map__35924 == null)))?((((map__35924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35924):map__35924);
var content_area_el = cljs.core.get.call(null,map__35924__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_35972){
var state_val_35973 = (state_35972[(1)]);
if((state_val_35973 === (1))){
var inst_35955 = (state_35972[(7)]);
var inst_35955__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35956 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35957 = ["0.0"];
var inst_35958 = cljs.core.PersistentHashMap.fromArrays(inst_35956,inst_35957);
var inst_35959 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35955__$1,inst_35958);
var inst_35960 = cljs.core.async.timeout.call(null,(300));
var state_35972__$1 = (function (){var statearr_35974 = state_35972;
(statearr_35974[(7)] = inst_35955__$1);

(statearr_35974[(8)] = inst_35959);

return statearr_35974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35972__$1,(2),inst_35960);
} else {
if((state_val_35973 === (2))){
var inst_35955 = (state_35972[(7)]);
var inst_35962 = (state_35972[(2)]);
var inst_35963 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35964 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35965 = cljs.core.PersistentHashMap.fromArrays(inst_35963,inst_35964);
var inst_35966 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35955,inst_35965);
var inst_35967 = cljs.core.async.timeout.call(null,(200));
var state_35972__$1 = (function (){var statearr_35975 = state_35972;
(statearr_35975[(9)] = inst_35966);

(statearr_35975[(10)] = inst_35962);

return statearr_35975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35972__$1,(3),inst_35967);
} else {
if((state_val_35973 === (3))){
var inst_35955 = (state_35972[(7)]);
var inst_35969 = (state_35972[(2)]);
var inst_35970 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35955,"");
var state_35972__$1 = (function (){var statearr_35976 = state_35972;
(statearr_35976[(11)] = inst_35969);

return statearr_35976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35972__$1,inst_35970);
} else {
return null;
}
}
}
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22193__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22193__auto____0 = (function (){
var statearr_35980 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35980[(0)] = figwheel$client$heads_up$clear_$_state_machine__22193__auto__);

(statearr_35980[(1)] = (1));

return statearr_35980;
});
var figwheel$client$heads_up$clear_$_state_machine__22193__auto____1 = (function (state_35972){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_35972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e35981){if((e35981 instanceof Object)){
var ex__22196__auto__ = e35981;
var statearr_35982_35984 = state_35972;
(statearr_35982_35984[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35985 = state_35972;
state_35972 = G__35985;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22193__auto__ = function(state_35972){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22193__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22193__auto____1.call(this,state_35972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22193__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22193__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_35983 = f__22305__auto__.call(null);
(statearr_35983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_35983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22304__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22304__auto__){
return (function (){
var f__22305__auto__ = (function (){var switch__22192__auto__ = ((function (c__22304__auto__){
return (function (state_36017){
var state_val_36018 = (state_36017[(1)]);
if((state_val_36018 === (1))){
var inst_36007 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_36017__$1 = state_36017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36017__$1,(2),inst_36007);
} else {
if((state_val_36018 === (2))){
var inst_36009 = (state_36017[(2)]);
var inst_36010 = cljs.core.async.timeout.call(null,(400));
var state_36017__$1 = (function (){var statearr_36019 = state_36017;
(statearr_36019[(7)] = inst_36009);

return statearr_36019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36017__$1,(3),inst_36010);
} else {
if((state_val_36018 === (3))){
var inst_36012 = (state_36017[(2)]);
var inst_36013 = figwheel.client.heads_up.clear.call(null);
var state_36017__$1 = (function (){var statearr_36020 = state_36017;
(statearr_36020[(8)] = inst_36012);

return statearr_36020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36017__$1,(4),inst_36013);
} else {
if((state_val_36018 === (4))){
var inst_36015 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36017__$1,inst_36015);
} else {
return null;
}
}
}
}
});})(c__22304__auto__))
;
return ((function (switch__22192__auto__,c__22304__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto____0 = (function (){
var statearr_36024 = [null,null,null,null,null,null,null,null,null];
(statearr_36024[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto__);

(statearr_36024[(1)] = (1));

return statearr_36024;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto____1 = (function (state_36017){
while(true){
var ret_value__22194__auto__ = (function (){try{while(true){
var result__22195__auto__ = switch__22192__auto__.call(null,state_36017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22195__auto__;
}
break;
}
}catch (e36025){if((e36025 instanceof Object)){
var ex__22196__auto__ = e36025;
var statearr_36026_36028 = state_36017;
(statearr_36026_36028[(5)] = ex__22196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36029 = state_36017;
state_36017 = G__36029;
continue;
} else {
return ret_value__22194__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto__ = function(state_36017){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto____1.call(this,state_36017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22193__auto__;
})()
;})(switch__22192__auto__,c__22304__auto__))
})();
var state__22306__auto__ = (function (){var statearr_36027 = f__22305__auto__.call(null);
(statearr_36027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22304__auto__);

return statearr_36027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22306__auto__);
});})(c__22304__auto__))
);

return c__22304__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map
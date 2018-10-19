// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.core');
goog.require('cljs.core');
goog.require('transmorphic.event');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('devtools.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('transmorphic.repl');
goog.require('transmorphic.symbolic');
cljs.core.enable_console_print_BANG_.call(null);
devtools.core.enable_feature_BANG_.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),new cljs.core.Keyword(null,"dirac","dirac",1785994033));
devtools.core.install_BANG_.call(null);
transmorphic.core.meta_focus = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
transmorphic.core.rerender_BANG_;

transmorphic.core.insert_component_BANG_;

transmorphic.core.get_world_ref;

transmorphic.core.refresh_scene_BANG_;
transmorphic.core.component_migration_queue = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
transmorphic.core.morph_migration_queue = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

/**
 * @interface
 */
transmorphic.core.IMorph_QMARK_ = function(){};

transmorphic.core.morph_QMARK_ = (function transmorphic$core$morph_QMARK_(x){
if((!((x == null))) && (!((x.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 == null)))){
return x.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1(x);
} else {
var x__17480__auto__ = (((x == null))?null:x);
var m__17481__auto__ = (transmorphic.core.morph_QMARK_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,x);
} else {
var m__17481__auto____$1 = (transmorphic.core.morph_QMARK_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IMorph?.morph?",x);
}
}
}
});


/**
 * @interface
 */
transmorphic.core.IComponent_QMARK_ = function(){};

transmorphic.core.component_QMARK_ = (function transmorphic$core$component_QMARK_(x){
if((!((x == null))) && (!((x.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 == null)))){
return x.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1(x);
} else {
var x__17480__auto__ = (((x == null))?null:x);
var m__17481__auto__ = (transmorphic.core.component_QMARK_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,x);
} else {
var m__17481__auto____$1 = (transmorphic.core.component_QMARK_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IComponent?.component?",x);
}
}
}
});

transmorphic.core.morphic_read;

transmorphic.core.morphic_mutate;

transmorphic.core.universe;

transmorphic.core.render_morph;
transmorphic.core.morphic_uuid = (function transmorphic$core$morphic_uuid(morph){
cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157),new cljs.core.Keyword(null,"uuid-state","uuid-state",-1557959592),morph.call(null,new cljs.core.Keyword(null,"type","type",1174270348))], null),cljs.core.inc);

var uuid_state = cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157),new cljs.core.Keyword(null,"uuid-state","uuid-state",-1557959592)], null));
var G__30818 = (((morph.call(null,new cljs.core.Keyword(null,"type","type",1174270348)) instanceof cljs.core.Keyword))?morph.call(null,new cljs.core.Keyword(null,"type","type",1174270348)).fqn:null);
switch (G__30818) {
case "rectangle":
return [cljs.core.str("rectangle-"),cljs.core.str(uuid_state.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262)))].join('');

break;
case "ellipse":
return [cljs.core.str("ellipse-"),cljs.core.str(uuid_state.call(null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702)))].join('');

break;
case "text":
return [cljs.core.str("text-"),cljs.core.str(uuid_state.call(null,new cljs.core.Keyword(null,"text","text",-1790561697)))].join('');

break;
case "polygon":
return [cljs.core.str("polygon-"),cljs.core.str(uuid_state.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759)))].join('');

break;
case "io":
return [cljs.core.str("io-"),cljs.core.str(uuid_state.call(null,new cljs.core.Keyword(null,"io","io",-307341917)))].join('');

break;
case "image":
return [cljs.core.str("image-"),cljs.core.str(uuid_state.call(null,new cljs.core.Keyword(null,"image","image",-58725096)))].join('');

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(morph.call(null,new cljs.core.Keyword(null,"type","type",1174270348)))].join('')));

}
});
transmorphic.core.filepath__GT_ns = (function transmorphic$core$filepath__GT_ns(path){
if(cljs.core.truth_(path)){
var file = clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,path,"/Users/robin/Development/cljs-morphic/",""),"src/cljs/",""),"test/","");
var lib_name = cljs.core.subs.call(null,clojure.string.replace.call(null,file,"/","."),(0),(cljs.core.count.call(null,file) - (5)));
return cljs.core.symbol.call(null,cljs.core.demunge.call(null,lib_name));
} else {
return null;
}
});
transmorphic.core.abstraction__GT_ns = (function transmorphic$core$abstraction__GT_ns(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30825 = arguments.length;
var i__17884__auto___30826 = (0);
while(true){
if((i__17884__auto___30826 < len__17883__auto___30825)){
args__17890__auto__.push((arguments[i__17884__auto___30826]));

var G__30827 = (i__17884__auto___30826 + (1));
i__17884__auto___30826 = G__30827;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.abstraction__GT_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.abstraction__GT_ns.cljs$core$IFn$_invoke$arity$variadic = (function (abstraction,p__30822){
var map__30823 = p__30822;
var map__30823__$1 = ((((!((map__30823 == null)))?((((map__30823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30823):map__30823);
var ns = cljs.core.get.call(null,map__30823__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var path = cljs.core.get.call(null,map__30823__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var or__16825__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157),new cljs.core.Keyword(null,"abstractions","abstractions",-1718407887),abstraction], null));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var or__16825__auto____$1 = ns;
if(cljs.core.truth_(or__16825__auto____$1)){
return or__16825__auto____$1;
} else {
return transmorphic.core.filepath__GT_ns.call(null,path);
}
}
});

transmorphic.core.abstraction__GT_ns.cljs$lang$maxFixedArity = (1);

transmorphic.core.abstraction__GT_ns.cljs$lang$applyTo = (function (seq30820){
var G__30821 = cljs.core.first.call(null,seq30820);
var seq30820__$1 = cljs.core.next.call(null,seq30820);
return transmorphic.core.abstraction__GT_ns.cljs$core$IFn$_invoke$arity$variadic(G__30821,seq30820__$1);
});
transmorphic.core.get_abstraction_info = (function transmorphic$core$get_abstraction_info(fn_name){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157),new cljs.core.Keyword(null,"abstractions","abstractions",-1718407887),fn_name], null));
});
transmorphic.core.pi = Math.PI;
transmorphic.core.morph_class = (function transmorphic$core$morph_class(props){
var or__16825__auto__ = new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return "Morph";
}
});
transmorphic.core.morph_style = (function transmorphic$core$morph_style(props){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__30831){
var vec__30832 = p__30831;
var prop = cljs.core.nth.call(null,vec__30832,(0),null);
var value = cljs.core.nth.call(null,vec__30832,(1),null);
var G__30833 = (((prop instanceof cljs.core.Keyword))?prop.fqn:null);
switch (G__30833) {
case "scrollable?":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll"], null);

break;
case "position":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(value)], null);

break;
default:
return null;

}
}),props));
});
transmorphic.core.html_attributes = (function transmorphic$core$html_attributes(props,ident){
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,transmorphic.event.extract_event_handlers.call(null,ident,props,transmorphic.core.refresh_scene_BANG_),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,transmorphic.core.morph_style.call(null,props),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)),new cljs.core.Keyword(null,"class-name","class-name",945142584),transmorphic.core.morph_class.call(null,props)], null)));
});
transmorphic.core.html5TransformProperty = new cljs.core.Keyword(null,"WebkitTransform","WebkitTransform",-979436000);
transmorphic.core.html5TransformOriginProperty = new cljs.core.Keyword(null,"WebkitTransformOrigin","WebkitTransformOrigin",2144538707);
transmorphic.core.shape_style = (function transmorphic$core$shape_style(props){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__30844){
var vec__30845 = p__30844;
var prop = cljs.core.nth.call(null,vec__30845,(0),null);
var value = cljs.core.nth.call(null,vec__30845,(1),null);
var G__30846 = (((prop instanceof cljs.core.Keyword))?prop.fqn:null);
switch (G__30846) {
case "border-style":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"borderStyle","borderStyle",808349810),value], null);

break;
case "rotation":
var map__30847 = props;
var map__30847__$1 = ((((!((map__30847 == null)))?((((map__30847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30847):map__30847);
var rotation = cljs.core.get.call(null,map__30847__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0));
var scale = cljs.core.get.call(null,map__30847__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),(1));
var pivot = cljs.core.get.call(null,map__30847__$1,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
return cljs.core.PersistentArrayMap.fromArray([transmorphic.core.html5TransformProperty,[cljs.core.str("rotate("),cljs.core.str(cljs.core.mod.call(null,((rotation * (180)) / transmorphic.core.pi),(360))),cljs.core.str("deg) scale("),cljs.core.str(scale),cljs.core.str(","),cljs.core.str(scale),cljs.core.str(")")].join(''),transmorphic.core.html5TransformOriginProperty,[cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pivot)),cljs.core.str("px "),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pivot)),cljs.core.str("px")].join('')], true, false);

break;
case "drop-shadow?":
if(cljs.core.truth_(value)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boxShadow","boxShadow",-1591689862),"0 18px 40px 10px rgba(0, 0, 0, 0.36)",new cljs.core.Keyword(null,"WebkitTransition","WebkitTransition",368414520),"box-shadow 0.5s"], null);
} else {
return null;
}

break;
case "scale":
var map__30849 = props;
var map__30849__$1 = ((((!((map__30849 == null)))?((((map__30849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30849):map__30849);
var rotation = cljs.core.get.call(null,map__30849__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0));
var scale = cljs.core.get.call(null,map__30849__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),(1));
var pivot = cljs.core.get.call(null,map__30849__$1,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
return cljs.core.PersistentArrayMap.fromArray([transmorphic.core.html5TransformProperty,[cljs.core.str("rotate("),cljs.core.str(cljs.core.mod.call(null,((rotation * (180)) / transmorphic.core.pi),(360))),cljs.core.str("deg) scale("),cljs.core.str(scale),cljs.core.str(","),cljs.core.str(scale),cljs.core.str(")")].join(''),transmorphic.core.html5TransformOriginProperty,[cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pivot)),cljs.core.str("px "),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pivot)),cljs.core.str("px")].join('')], true, false);

break;
case "fill":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),value], null);

break;
case "css":
return value;

break;
case "pivot-point":
var map__30851 = props;
var map__30851__$1 = ((((!((map__30851 == null)))?((((map__30851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30851):map__30851);
var rotation = cljs.core.get.call(null,map__30851__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0));
var scale = cljs.core.get.call(null,map__30851__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),(1));
var pivot = cljs.core.get.call(null,map__30851__$1,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
return cljs.core.PersistentArrayMap.fromArray([transmorphic.core.html5TransformProperty,[cljs.core.str("rotate("),cljs.core.str(cljs.core.mod.call(null,((rotation * (180)) / transmorphic.core.pi),(360))),cljs.core.str("deg) scale("),cljs.core.str(scale),cljs.core.str(","),cljs.core.str(scale),cljs.core.str(")")].join(''),transmorphic.core.html5TransformOriginProperty,[cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pivot)),cljs.core.str("px "),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pivot)),cljs.core.str("px")].join('')], true, false);

break;
case "border-width":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),value,new cljs.core.Keyword(null,"borderStyle","borderStyle",808349810),"solid"], null);

break;
case "opacity":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),value], null);

break;
case "extent":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(value)], null);

break;
case "border-color":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),value,new cljs.core.Keyword(null,"borderStyle","borderStyle",808349810),"solid"], null);

break;
case "visible":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_(value)?"visible":"hidden")], null);

break;
case "border-radius":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),value], null);

break;
default:
return null;

}
}),props));
});

/**
 * @interface
 */
transmorphic.core.IInitialize = function(){};

transmorphic.core.initialize = (function transmorphic$core$initialize(self){
if((!((self == null))) && (!((self.transmorphic$core$IInitialize$initialize$arity$1 == null)))){
return self.transmorphic$core$IInitialize$initialize$arity$1(self);
} else {
var x__17480__auto__ = (((self == null))?null:self);
var m__17481__auto__ = (transmorphic.core.initialize[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,self);
} else {
var m__17481__auto____$1 = (transmorphic.core.initialize["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IInitialize.initialize",self);
}
}
}
});


/**
 * @interface
 */
transmorphic.core.IFinialize = function(){};

transmorphic.core.finalize = (function transmorphic$core$finalize(self){
if((!((self == null))) && (!((self.transmorphic$core$IFinialize$finalize$arity$1 == null)))){
return self.transmorphic$core$IFinialize$finalize$arity$1(self);
} else {
var x__17480__auto__ = (((self == null))?null:self);
var m__17481__auto__ = (transmorphic.core.finalize[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,self);
} else {
var m__17481__auto____$1 = (transmorphic.core.finalize["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IFinialize.finalize",self);
}
}
}
});


/**
 * @interface
 */
transmorphic.core.IRefresh = function(){};

transmorphic.core.refresh = (function transmorphic$core$refresh(self,props){
if((!((self == null))) && (!((self.transmorphic$core$IRefresh$refresh$arity$2 == null)))){
return self.transmorphic$core$IRefresh$refresh$arity$2(self,props);
} else {
var x__17480__auto__ = (((self == null))?null:self);
var m__17481__auto__ = (transmorphic.core.refresh[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,self,props);
} else {
var m__17481__auto____$1 = (transmorphic.core.refresh["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,self,props);
} else {
throw cljs.core.missing_protocol.call(null,"IRefresh.refresh",self);
}
}
}
});


/**
 * @interface
 */
transmorphic.core.IDidMount = function(){};

transmorphic.core.did_mount = (function transmorphic$core$did_mount(self){
if((!((self == null))) && (!((self.transmorphic$core$IDidMount$did_mount$arity$1 == null)))){
return self.transmorphic$core$IDidMount$did_mount$arity$1(self);
} else {
var x__17480__auto__ = (((self == null))?null:self);
var m__17481__auto__ = (transmorphic.core.did_mount[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,self);
} else {
var m__17481__auto____$1 = (transmorphic.core.did_mount["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",self);
}
}
}
});


/**
 * @interface
 */
transmorphic.core.IWillReceiveProps = function(){};

transmorphic.core.will_receive_props = (function transmorphic$core$will_receive_props(self,next_props){
if((!((self == null))) && (!((self.transmorphic$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return self.transmorphic$core$IWillReceiveProps$will_receive_props$arity$2(self,next_props);
} else {
var x__17480__auto__ = (((self == null))?null:self);
var m__17481__auto__ = (transmorphic.core.will_receive_props[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,self,next_props);
} else {
var m__17481__auto____$1 = (transmorphic.core.will_receive_props["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,self,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",self);
}
}
}
});


/**
 * @interface
 */
transmorphic.core.IRender = function(){};

transmorphic.core.render = (function transmorphic$core$render(self,props,submorphs,render_ctx){
if((!((self == null))) && (!((self.transmorphic$core$IRender$render$arity$4 == null)))){
return self.transmorphic$core$IRender$render$arity$4(self,props,submorphs,render_ctx);
} else {
var x__17480__auto__ = (((self == null))?null:self);
var m__17481__auto__ = (transmorphic.core.render[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,self,props,submorphs,render_ctx);
} else {
var m__17481__auto____$1 = (transmorphic.core.render["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,self,props,submorphs,render_ctx);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",self);
}
}
}
});

transmorphic.core.eval_suspended_props = (function transmorphic$core$eval_suspended_props(world_state,morph){
return cljs.core.assoc.call(null,morph,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30856){
var vec__30857 = p__30856;
var p = cljs.core.nth.call(null,vec__30857,(0),null);
var v = cljs.core.nth.call(null,vec__30857,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,v.call(null,new cljs.core.Keyword(null,"value","value",305978217))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"relative?","relative?",-967368007).cljs$core$IFn$_invoke$arity$1(v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,v.call(null,new cljs.core.Keyword(null,"eval","eval",-1103567905)).call(null,world_state,morph)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,v], null);

}
}
})),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph)));
});
transmorphic.core.render_morph = (function transmorphic$core$render_morph(morph){
if(typeof transmorphic.core.t_transmorphic$core30861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
transmorphic.core.t_transmorphic$core30861 = (function (render_morph,morph,meta30862){
this.render_morph = render_morph;
this.morph = morph;
this.meta30862 = meta30862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
transmorphic.core.t_transmorphic$core30861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30863,meta30862__$1){
var self__ = this;
var _30863__$1 = this;
return (new transmorphic.core.t_transmorphic$core30861(self__.render_morph,self__.morph,meta30862__$1));
});

transmorphic.core.t_transmorphic$core30861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30863){
var self__ = this;
var _30863__$1 = this;
return self__.meta30862;
});

transmorphic.core.t_transmorphic$core30861.prototype.om$core$IDidMount$ = true;

transmorphic.core.t_transmorphic$core30861.prototype.om$core$IDidMount$did_mount$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
var temp__4425__auto__ = new cljs.core.Keyword(null,"did-mount","did-mount",918232960).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(self__.morph));
if(cljs.core.truth_(temp__4425__auto__)){
var did_mount = temp__4425__auto__;
return did_mount.call(null,self__$1);
} else {
return null;
}
});

transmorphic.core.t_transmorphic$core30861.prototype.om$core$IWillReceiveProps$ = true;

transmorphic.core.t_transmorphic$core30861.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (self,next_props){
var self__ = this;
var self__$1 = this;
var temp__4425__auto__ = new cljs.core.Keyword(null,"will-receive-props","will-receive-props",-58749004).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(self__.morph));
if(cljs.core.truth_(temp__4425__auto__)){
var recv_props = temp__4425__auto__;
return recv_props.call(null,self__$1);
} else {
return null;
}
});

transmorphic.core.t_transmorphic$core30861.prototype.om$core$IRender$ = true;

transmorphic.core.t_transmorphic$core30861.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.morph)){
return new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(self__.morph).call(null,transmorphic.core.eval_suspended_props.call(null,cljs.core.deref.call(null,transmorphic.core.universe),self__.morph));
} else {
return React.DOM.div({"id": "dummy-root"});
}
});

transmorphic.core.t_transmorphic$core30861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"render-morph","render-morph",-1787207675,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph","morph",1045355650,null)], null)))], null)),new cljs.core.Symbol(null,"morph","morph",1045355650,null),new cljs.core.Symbol(null,"meta30862","meta30862",2026382898,null)], null);
});

transmorphic.core.t_transmorphic$core30861.cljs$lang$type = true;

transmorphic.core.t_transmorphic$core30861.cljs$lang$ctorStr = "transmorphic.core/t_transmorphic$core30861";

transmorphic.core.t_transmorphic$core30861.cljs$lang$ctorPrWriter = (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"transmorphic.core/t_transmorphic$core30861");
});

transmorphic.core.__GT_t_transmorphic$core30861 = (function transmorphic$core$render_morph_$___GT_t_transmorphic$core30861(render_morph__$1,morph__$1,meta30862){
return (new transmorphic.core.t_transmorphic$core30861(render_morph__$1,morph__$1,meta30862));
});

}

return (new transmorphic.core.t_transmorphic$core30861(transmorphic$core$render_morph,morph,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
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
transmorphic.core.div_STAR_ = (function (morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,__meta,__extmap,__hash){
this.morph_id = morph_id;
this.type = type;
this.props = props;
this.submorphs = submorphs;
this.morph__GT_html = morph__GT_html;
this.root_QMARK_ = root_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.core.div_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.core.div_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.core.div_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.core.div_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k30865,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__30867 = (((k30865 instanceof cljs.core.Keyword))?k30865.fqn:null);
switch (G__30867) {
case "morph-id":
return self__.morph_id;

break;
case "type":
return self__.type;

break;
case "props":
return self__.props;

break;
case "submorphs":
return self__.submorphs;

break;
case "morph->html":
return self__.morph__GT_html;

break;
case "root?":
return self__.root_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30865,else__17442__auto__);

}
});

transmorphic.core.div_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.core.div*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.div_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.core.div_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30864){
var self__ = this;
var G__30864__$1 = this;
return (new cljs.core.RecordIter((0),G__30864__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.core.div_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.core.div_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.core.div_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.core.div_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.core.div_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.core.div_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.core.div_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.core.div_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.core.div_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.core.div_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.core.div_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__30864){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__30868 = cljs.core.keyword_identical_QMARK_;
var expr__30869 = k__17447__auto__;
if(cljs.core.truth_(pred__30868.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),expr__30869))){
return (new transmorphic.core.div_STAR_(G__30864,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30868.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__30869))){
return (new transmorphic.core.div_STAR_(self__.morph_id,G__30864,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30868.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__30869))){
return (new transmorphic.core.div_STAR_(self__.morph_id,self__.type,G__30864,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30868.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__30869))){
return (new transmorphic.core.div_STAR_(self__.morph_id,self__.type,self__.props,G__30864,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30868.call(null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),expr__30869))){
return (new transmorphic.core.div_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,G__30864,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30868.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518),expr__30869))){
return (new transmorphic.core.div_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,G__30864,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.core.div_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__30864),null));
}
}
}
}
}
}
});

transmorphic.core.div_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.div_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__30864){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.core.div_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,G__30864,self__.__extmap,self__.__hash));
});

transmorphic.core.div_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.core.div_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"morph->html","morph->html",780449544,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null);
});

transmorphic.core.div_STAR_.cljs$lang$type = true;

transmorphic.core.div_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.core/div*");
});

transmorphic.core.div_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.core/div*");
});

transmorphic.core.__GT_div_STAR_ = (function transmorphic$core$__GT_div_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_){
return (new transmorphic.core.div_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,null,null,null));
});

transmorphic.core.map__GT_div_STAR_ = (function transmorphic$core$map__GT_div_STAR_(G__30866){
return (new transmorphic.core.div_STAR_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(G__30866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__30866),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__30866),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__30866),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(G__30866),new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(G__30866),null,cljs.core.dissoc.call(null,G__30866,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)),null));
});


transmorphic.core.div = (function transmorphic$core$div(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30877 = arguments.length;
var i__17884__auto___30878 = (0);
while(true){
if((i__17884__auto___30878 < len__17883__auto___30877)){
args__17890__auto__.push((arguments[i__17884__auto___30878]));

var G__30879 = (i__17884__auto___30878 + (1));
i__17884__auto___30878 = G__30879;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.div.cljs$core$IFn$_invoke$arity$variadic = (function (props,submorphs){
return transmorphic.core.map__GT_div_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),(function (p__30873){
var map__30874 = p__30873;
var map__30874__$1 = ((((!((map__30874 == null)))?((((map__30874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30874):map__30874);
var type = cljs.core.get.call(null,map__30874__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var props__$1 = cljs.core.get.call(null,map__30874__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs__$1 = cljs.core.get.call(null,map__30874__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
return cljs.core.apply.call(null,om.dom.div,{"style": transmorphic.core.shape_style.call(null,props__$1)},om.core.build_all.call(null,transmorphic.core.render_morph,submorphs__$1));
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Symbol(null,"div","div",-1597244137,null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs,new cljs.core.Keyword(null,"props","props",453281727),props], null));
});

transmorphic.core.div.cljs$lang$maxFixedArity = (1);

transmorphic.core.div.cljs$lang$applyTo = (function (seq30871){
var G__30872 = cljs.core.first.call(null,seq30871);
var seq30871__$1 = cljs.core.next.call(null,seq30871);
return transmorphic.core.div.cljs$core$IFn$_invoke$arity$variadic(G__30872,seq30871__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
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
transmorphic.core.rectangle_STAR_ = (function (morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,__meta,__extmap,__hash){
this.morph_id = morph_id;
this.type = type;
this.props = props;
this.submorphs = submorphs;
this.morph__GT_html = morph__GT_html;
this.root_QMARK_ = root_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.core.rectangle_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.core.rectangle_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k30881,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__30883 = (((k30881 instanceof cljs.core.Keyword))?k30881.fqn:null);
switch (G__30883) {
case "morph-id":
return self__.morph_id;

break;
case "type":
return self__.type;

break;
case "props":
return self__.props;

break;
case "submorphs":
return self__.submorphs;

break;
case "morph->html":
return self__.morph__GT_html;

break;
case "root?":
return self__.root_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30881,else__17442__auto__);

}
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.core.rectangle*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.core.rectangle_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30880){
var self__ = this;
var G__30880__$1 = this;
return (new cljs.core.RecordIter((0),G__30880__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.core.rectangle_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.core.rectangle_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.core.rectangle_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.core.rectangle_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__30880){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__30884 = cljs.core.keyword_identical_QMARK_;
var expr__30885 = k__17447__auto__;
if(cljs.core.truth_(pred__30884.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),expr__30885))){
return (new transmorphic.core.rectangle_STAR_(G__30880,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30884.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__30885))){
return (new transmorphic.core.rectangle_STAR_(self__.morph_id,G__30880,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30884.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__30885))){
return (new transmorphic.core.rectangle_STAR_(self__.morph_id,self__.type,G__30880,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30884.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__30885))){
return (new transmorphic.core.rectangle_STAR_(self__.morph_id,self__.type,self__.props,G__30880,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30884.call(null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),expr__30885))){
return (new transmorphic.core.rectangle_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,G__30880,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30884.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518),expr__30885))){
return (new transmorphic.core.rectangle_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,G__30880,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.core.rectangle_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__30880),null));
}
}
}
}
}
}
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__30880){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.core.rectangle_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,G__30880,self__.__extmap,self__.__hash));
});

transmorphic.core.rectangle_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.core.rectangle_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"morph->html","morph->html",780449544,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null);
});

transmorphic.core.rectangle_STAR_.cljs$lang$type = true;

transmorphic.core.rectangle_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.core/rectangle*");
});

transmorphic.core.rectangle_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.core/rectangle*");
});

transmorphic.core.__GT_rectangle_STAR_ = (function transmorphic$core$__GT_rectangle_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_){
return (new transmorphic.core.rectangle_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,null,null,null));
});

transmorphic.core.map__GT_rectangle_STAR_ = (function transmorphic$core$map__GT_rectangle_STAR_(G__30882){
return (new transmorphic.core.rectangle_STAR_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(G__30882),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__30882),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__30882),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__30882),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(G__30882),new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(G__30882),null,cljs.core.dissoc.call(null,G__30882,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)),null));
});


transmorphic.core.rectangle = (function transmorphic$core$rectangle(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30893 = arguments.length;
var i__17884__auto___30894 = (0);
while(true){
if((i__17884__auto___30894 < len__17883__auto___30893)){
args__17890__auto__.push((arguments[i__17884__auto___30894]));

var G__30895 = (i__17884__auto___30894 + (1));
i__17884__auto___30894 = G__30895;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.rectangle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.rectangle.cljs$core$IFn$_invoke$arity$variadic = (function (props,submorphs){
return transmorphic.core.map__GT_rectangle_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),(function (p__30889){
var map__30890 = p__30889;
var map__30890__$1 = ((((!((map__30890 == null)))?((((map__30890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30890):map__30890);
var morph_id = cljs.core.get.call(null,map__30890__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var type = cljs.core.get.call(null,map__30890__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var props__$1 = cljs.core.get.call(null,map__30890__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs__$1 = cljs.core.get.call(null,map__30890__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
return React.DOM.div(transmorphic.core.html_attributes.call(null,props__$1,morph_id),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),transmorphic.core.shape_style.call(null,props__$1)], null)),om.core.build_all.call(null,transmorphic.core.render_morph,submorphs__$1))));
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs,new cljs.core.Keyword(null,"props","props",453281727),props], null));
});

transmorphic.core.rectangle.cljs$lang$maxFixedArity = (1);

transmorphic.core.rectangle.cljs$lang$applyTo = (function (seq30887){
var G__30888 = cljs.core.first.call(null,seq30887);
var seq30887__$1 = cljs.core.next.call(null,seq30887);
return transmorphic.core.rectangle.cljs$core$IFn$_invoke$arity$variadic(G__30888,seq30887__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
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
transmorphic.core.ellipse_STAR_ = (function (morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,__meta,__extmap,__hash){
this.morph_id = morph_id;
this.type = type;
this.props = props;
this.submorphs = submorphs;
this.morph__GT_html = morph__GT_html;
this.root_QMARK_ = root_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.core.ellipse_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.core.ellipse_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k30897,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__30899 = (((k30897 instanceof cljs.core.Keyword))?k30897.fqn:null);
switch (G__30899) {
case "morph-id":
return self__.morph_id;

break;
case "type":
return self__.type;

break;
case "props":
return self__.props;

break;
case "submorphs":
return self__.submorphs;

break;
case "morph->html":
return self__.morph__GT_html;

break;
case "root?":
return self__.root_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30897,else__17442__auto__);

}
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.core.ellipse*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.core.ellipse_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30896){
var self__ = this;
var G__30896__$1 = this;
return (new cljs.core.RecordIter((0),G__30896__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.core.ellipse_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.core.ellipse_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.core.ellipse_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.core.ellipse_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__30896){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__30900 = cljs.core.keyword_identical_QMARK_;
var expr__30901 = k__17447__auto__;
if(cljs.core.truth_(pred__30900.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),expr__30901))){
return (new transmorphic.core.ellipse_STAR_(G__30896,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30900.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__30901))){
return (new transmorphic.core.ellipse_STAR_(self__.morph_id,G__30896,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30900.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__30901))){
return (new transmorphic.core.ellipse_STAR_(self__.morph_id,self__.type,G__30896,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30900.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__30901))){
return (new transmorphic.core.ellipse_STAR_(self__.morph_id,self__.type,self__.props,G__30896,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30900.call(null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),expr__30901))){
return (new transmorphic.core.ellipse_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,G__30896,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30900.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518),expr__30901))){
return (new transmorphic.core.ellipse_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,G__30896,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.core.ellipse_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__30896),null));
}
}
}
}
}
}
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__30896){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.core.ellipse_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,G__30896,self__.__extmap,self__.__hash));
});

transmorphic.core.ellipse_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.core.ellipse_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"morph->html","morph->html",780449544,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null);
});

transmorphic.core.ellipse_STAR_.cljs$lang$type = true;

transmorphic.core.ellipse_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.core/ellipse*");
});

transmorphic.core.ellipse_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.core/ellipse*");
});

transmorphic.core.__GT_ellipse_STAR_ = (function transmorphic$core$__GT_ellipse_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_){
return (new transmorphic.core.ellipse_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,null,null,null));
});

transmorphic.core.map__GT_ellipse_STAR_ = (function transmorphic$core$map__GT_ellipse_STAR_(G__30898){
return (new transmorphic.core.ellipse_STAR_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(G__30898),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__30898),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__30898),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__30898),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(G__30898),new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(G__30898),null,cljs.core.dissoc.call(null,G__30898,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)),null));
});


transmorphic.core.ellipse = (function transmorphic$core$ellipse(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30909 = arguments.length;
var i__17884__auto___30910 = (0);
while(true){
if((i__17884__auto___30910 < len__17883__auto___30909)){
args__17890__auto__.push((arguments[i__17884__auto___30910]));

var G__30911 = (i__17884__auto___30910 + (1));
i__17884__auto___30910 = G__30911;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (props,submorphs){
return transmorphic.core.map__GT_ellipse_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),(function (p__30905){
var map__30906 = p__30905;
var map__30906__$1 = ((((!((map__30906 == null)))?((((map__30906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30906):map__30906);
var morph_id = cljs.core.get.call(null,map__30906__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var type = cljs.core.get.call(null,map__30906__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var props__$1 = cljs.core.get.call(null,map__30906__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs__$1 = cljs.core.get.call(null,map__30906__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
return React.DOM.div(transmorphic.core.html_attributes.call(null,props__$1,morph_id),om.util.force_children.call(null,(function (){var offset = props__$1.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820));
var x_offset = [cljs.core.str((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset) / (2))),cljs.core.str("px")].join('');
var y_offset = [cljs.core.str((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset) / (2))),cljs.core.str("px")].join('');
var style = transmorphic.core.shape_style.call(null,props__$1);
return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),[cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(props__$1))),cljs.core.str("px /"),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"extent","extent",-186399820).cljs$core$IFn$_invoke$arity$1(props__$1))),cljs.core.str("px")].join(''))], null)),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),y_offset,new cljs.core.Keyword(null,"left","left",-399115937),x_offset,new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"-2px",new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"-2px"], null)], null)),om.core.build_all.call(null,transmorphic.core.render_morph,submorphs__$1))));
})()));
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs,new cljs.core.Keyword(null,"props","props",453281727),props], null));
});

transmorphic.core.ellipse.cljs$lang$maxFixedArity = (1);

transmorphic.core.ellipse.cljs$lang$applyTo = (function (seq30903){
var G__30904 = cljs.core.first.call(null,seq30903);
var seq30903__$1 = cljs.core.next.call(null,seq30903);
return transmorphic.core.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__30904,seq30903__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
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
transmorphic.core.image_STAR_ = (function (morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,__meta,__extmap,__hash){
this.morph_id = morph_id;
this.type = type;
this.props = props;
this.submorphs = submorphs;
this.morph__GT_html = morph__GT_html;
this.root_QMARK_ = root_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.core.image_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.core.image_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.core.image_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.core.image_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k30913,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__30915 = (((k30913 instanceof cljs.core.Keyword))?k30913.fqn:null);
switch (G__30915) {
case "morph-id":
return self__.morph_id;

break;
case "type":
return self__.type;

break;
case "props":
return self__.props;

break;
case "submorphs":
return self__.submorphs;

break;
case "morph->html":
return self__.morph__GT_html;

break;
case "root?":
return self__.root_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30913,else__17442__auto__);

}
});

transmorphic.core.image_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.core.image*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.image_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.core.image_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30912){
var self__ = this;
var G__30912__$1 = this;
return (new cljs.core.RecordIter((0),G__30912__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.core.image_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.core.image_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.core.image_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.core.image_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.core.image_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.core.image_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.core.image_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.core.image_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.core.image_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.core.image_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.core.image_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__30912){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__30916 = cljs.core.keyword_identical_QMARK_;
var expr__30917 = k__17447__auto__;
if(cljs.core.truth_(pred__30916.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),expr__30917))){
return (new transmorphic.core.image_STAR_(G__30912,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30916.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__30917))){
return (new transmorphic.core.image_STAR_(self__.morph_id,G__30912,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30916.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__30917))){
return (new transmorphic.core.image_STAR_(self__.morph_id,self__.type,G__30912,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30916.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__30917))){
return (new transmorphic.core.image_STAR_(self__.morph_id,self__.type,self__.props,G__30912,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30916.call(null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),expr__30917))){
return (new transmorphic.core.image_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,G__30912,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30916.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518),expr__30917))){
return (new transmorphic.core.image_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,G__30912,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.core.image_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__30912),null));
}
}
}
}
}
}
});

transmorphic.core.image_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.image_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__30912){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.core.image_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,G__30912,self__.__extmap,self__.__hash));
});

transmorphic.core.image_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.core.image_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"morph->html","morph->html",780449544,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null);
});

transmorphic.core.image_STAR_.cljs$lang$type = true;

transmorphic.core.image_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.core/image*");
});

transmorphic.core.image_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.core/image*");
});

transmorphic.core.__GT_image_STAR_ = (function transmorphic$core$__GT_image_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_){
return (new transmorphic.core.image_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,null,null,null));
});

transmorphic.core.map__GT_image_STAR_ = (function transmorphic$core$map__GT_image_STAR_(G__30914){
return (new transmorphic.core.image_STAR_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(G__30914),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__30914),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__30914),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__30914),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(G__30914),new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(G__30914),null,cljs.core.dissoc.call(null,G__30914,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)),null));
});


transmorphic.core.image = (function transmorphic$core$image(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30925 = arguments.length;
var i__17884__auto___30926 = (0);
while(true){
if((i__17884__auto___30926 < len__17883__auto___30925)){
args__17890__auto__.push((arguments[i__17884__auto___30926]));

var G__30927 = (i__17884__auto___30926 + (1));
i__17884__auto___30926 = G__30927;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.image.cljs$core$IFn$_invoke$arity$variadic = (function (props,submorphs){
return transmorphic.core.map__GT_image_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),(function (p__30921){
var map__30922 = p__30921;
var map__30922__$1 = ((((!((map__30922 == null)))?((((map__30922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30922):map__30922);
var morph_id = cljs.core.get.call(null,map__30922__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var type = cljs.core.get.call(null,map__30922__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var props__$1 = cljs.core.get.call(null,map__30922__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs__$1 = cljs.core.get.call(null,map__30922__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
return cljs.core.apply.call(null,om.dom.div,transmorphic.core.html_attributes.call(null,props__$1,morph_id),React.DOM.div(null,om.util.force_children.call(null,React.DOM.img(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),transmorphic.core.shape_style.call(null,props__$1),new cljs.core.Keyword(null,"src","src",-1651076051),props__$1.call(null,new cljs.core.Keyword(null,"url","url",276297046))], null))))),om.core.build_all.call(null,transmorphic.core.render_morph,submorphs__$1));
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Symbol(null,"image","image",1581806431,null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs,new cljs.core.Keyword(null,"props","props",453281727),props], null));
});

transmorphic.core.image.cljs$lang$maxFixedArity = (1);

transmorphic.core.image.cljs$lang$applyTo = (function (seq30919){
var G__30920 = cljs.core.first.call(null,seq30919);
var seq30919__$1 = cljs.core.next.call(null,seq30919);
return transmorphic.core.image.cljs$core$IFn$_invoke$arity$variadic(G__30920,seq30919__$1);
});
transmorphic.core.text_style = (function transmorphic$core$text_style(props){
return cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__30931){
var vec__30932 = p__30931;
var prop = cljs.core.nth.call(null,vec__30932,(0),null);
var value = cljs.core.nth.call(null,vec__30932,(1),null);
if(cljs.core._EQ_.call(null,prop,new cljs.core.Keyword(null,"allow-input","allow-input",-865500976))){
if(value === false){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"WebkitUserSelect","WebkitUserSelect",1037201977),"none"], null);
} else {
return null;
}
} else {
var G__30933 = (((prop instanceof cljs.core.Keyword))?prop.fqn:null);
switch (G__30933) {
case "font-family":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),value], null);

break;
case "font-size":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),[cljs.core.str(value),cljs.core.str("pt")].join('')], null);

break;
case "max-text-height":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),[cljs.core.str(value),cljs.core.str("px")].join('')], null);

break;
case "max-text-width":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),[cljs.core.str(value),cljs.core.str("px")].join('')], null);

break;
case "min-text-height":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),[cljs.core.str(value),cljs.core.str("px")].join('')], null);

break;
case "min-text-width":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),[cljs.core.str(value),cljs.core.str("px")].join('')], null);

break;
case "text-color":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),value], null);

break;
default:
return null;

}
}
}),props)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
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
transmorphic.core.text_STAR_ = (function (morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,__meta,__extmap,__hash){
this.morph_id = morph_id;
this.type = type;
this.props = props;
this.submorphs = submorphs;
this.morph__GT_html = morph__GT_html;
this.root_QMARK_ = root_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.core.text_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.core.text_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.core.text_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.core.text_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k30936,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__30938 = (((k30936 instanceof cljs.core.Keyword))?k30936.fqn:null);
switch (G__30938) {
case "morph-id":
return self__.morph_id;

break;
case "type":
return self__.type;

break;
case "props":
return self__.props;

break;
case "submorphs":
return self__.submorphs;

break;
case "morph->html":
return self__.morph__GT_html;

break;
case "root?":
return self__.root_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30936,else__17442__auto__);

}
});

transmorphic.core.text_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.core.text*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.text_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.core.text_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30935){
var self__ = this;
var G__30935__$1 = this;
return (new cljs.core.RecordIter((0),G__30935__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.core.text_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.core.text_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.core.text_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.core.text_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.core.text_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.core.text_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.core.text_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.core.text_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.core.text_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.core.text_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.core.text_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__30935){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__30939 = cljs.core.keyword_identical_QMARK_;
var expr__30940 = k__17447__auto__;
if(cljs.core.truth_(pred__30939.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),expr__30940))){
return (new transmorphic.core.text_STAR_(G__30935,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30939.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__30940))){
return (new transmorphic.core.text_STAR_(self__.morph_id,G__30935,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30939.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__30940))){
return (new transmorphic.core.text_STAR_(self__.morph_id,self__.type,G__30935,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30939.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__30940))){
return (new transmorphic.core.text_STAR_(self__.morph_id,self__.type,self__.props,G__30935,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30939.call(null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),expr__30940))){
return (new transmorphic.core.text_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,G__30935,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30939.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518),expr__30940))){
return (new transmorphic.core.text_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,G__30935,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.core.text_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__30935),null));
}
}
}
}
}
}
});

transmorphic.core.text_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.text_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__30935){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.core.text_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,G__30935,self__.__extmap,self__.__hash));
});

transmorphic.core.text_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.core.text_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"morph->html","morph->html",780449544,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null);
});

transmorphic.core.text_STAR_.cljs$lang$type = true;

transmorphic.core.text_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.core/text*");
});

transmorphic.core.text_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.core/text*");
});

transmorphic.core.__GT_text_STAR_ = (function transmorphic$core$__GT_text_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_){
return (new transmorphic.core.text_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,null,null,null));
});

transmorphic.core.map__GT_text_STAR_ = (function transmorphic$core$map__GT_text_STAR_(G__30937){
return (new transmorphic.core.text_STAR_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(G__30937),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__30937),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__30937),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__30937),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(G__30937),new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(G__30937),null,cljs.core.dissoc.call(null,G__30937,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)),null));
});


transmorphic.core.text = (function transmorphic$core$text(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30948 = arguments.length;
var i__17884__auto___30949 = (0);
while(true){
if((i__17884__auto___30949 < len__17883__auto___30948)){
args__17890__auto__.push((arguments[i__17884__auto___30949]));

var G__30950 = (i__17884__auto___30949 + (1));
i__17884__auto___30949 = G__30950;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.text.cljs$core$IFn$_invoke$arity$variadic = (function (props,submorphs){
return transmorphic.core.map__GT_text_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),(function (p__30944){
var map__30945 = p__30944;
var map__30945__$1 = ((((!((map__30945 == null)))?((((map__30945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30945):map__30945);
var morph_id = cljs.core.get.call(null,map__30945__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var type = cljs.core.get.call(null,map__30945__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var props__$1 = cljs.core.get.call(null,map__30945__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs__$1 = cljs.core.get.call(null,map__30945__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
return React.DOM.div(transmorphic.core.html_attributes.call(null,props__$1,morph_id),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,transmorphic.core.shape_style.call(null,props__$1),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"),new cljs.core.Keyword(null,"className","className",-1983287057),"Morph Text"], null)),React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"visible Selection",new cljs.core.Keyword(null,"style","style",-496642736),transmorphic.core.text_style.call(null,props__$1),new cljs.core.Keyword(null,"ref","ref",1289896967),"myInput"], null)),om.util.force_children.call(null,new cljs.core.Keyword(null,"text-string","text-string",1520601822).cljs$core$IFn$_invoke$arity$1(props__$1))),om.core.build_all.call(null,transmorphic.core.render_morph,submorphs__$1))));
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Symbol(null,"text","text",-150030170,null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs,new cljs.core.Keyword(null,"props","props",453281727),props], null));
});

transmorphic.core.text.cljs$lang$maxFixedArity = (1);

transmorphic.core.text.cljs$lang$applyTo = (function (seq30942){
var G__30943 = cljs.core.first.call(null,seq30942);
var seq30942__$1 = cljs.core.next.call(null,seq30942);
return transmorphic.core.text.cljs$core$IFn$_invoke$arity$variadic(G__30943,seq30942__$1);
});
transmorphic.core.render_io = (function transmorphic$core$render_io(p__30951,owner){
var map__30957 = p__30951;
var map__30957__$1 = ((((!((map__30957 == null)))?((((map__30957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30957):map__30957);
var morph_id = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var props = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
if(typeof transmorphic.core.t_transmorphic$core30959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
transmorphic.core.t_transmorphic$core30959 = (function (render_io,p__30951,owner,map__30957,morph_id,props,submorphs,meta30960){
this.render_io = render_io;
this.p__30951 = p__30951;
this.owner = owner;
this.map__30957 = map__30957;
this.morph_id = morph_id;
this.props = props;
this.submorphs = submorphs;
this.meta30960 = meta30960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
transmorphic.core.t_transmorphic$core30959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30957,map__30957__$1,morph_id,props,submorphs){
return (function (_30961,meta30960__$1){
var self__ = this;
var _30961__$1 = this;
return (new transmorphic.core.t_transmorphic$core30959(self__.render_io,self__.p__30951,self__.owner,self__.map__30957,self__.morph_id,self__.props,self__.submorphs,meta30960__$1));
});})(map__30957,map__30957__$1,morph_id,props,submorphs))
;

transmorphic.core.t_transmorphic$core30959.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30957,map__30957__$1,morph_id,props,submorphs){
return (function (_30961){
var self__ = this;
var _30961__$1 = this;
return self__.meta30960;
});})(map__30957,map__30957__$1,morph_id,props,submorphs))
;

transmorphic.core.t_transmorphic$core30959.prototype.om$core$IDidMount$ = true;

transmorphic.core.t_transmorphic$core30959.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30957,map__30957__$1,morph_id,props,submorphs){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"did-mount","did-mount",918232960).cljs$core$IFn$_invoke$arity$1(self__.props).call(null,this$__$1);
});})(map__30957,map__30957__$1,morph_id,props,submorphs))
;

transmorphic.core.t_transmorphic$core30959.prototype.om$core$IRender$ = true;

transmorphic.core.t_transmorphic$core30959.prototype.om$core$IRender$render$arity$1 = ((function (map__30957,map__30957__$1,morph_id,props,submorphs){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(self__.props).call(null);
});})(map__30957,map__30957__$1,morph_id,props,submorphs))
;

transmorphic.core.t_transmorphic$core30959.getBasis = ((function (map__30957,map__30957__$1,morph_id,props,submorphs){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"render-io","render-io",1021866792,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__30951","p__30951",-332998929,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__30957","map__30957",527322593,null),new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"meta30960","meta30960",-605493164,null)], null);
});})(map__30957,map__30957__$1,morph_id,props,submorphs))
;

transmorphic.core.t_transmorphic$core30959.cljs$lang$type = true;

transmorphic.core.t_transmorphic$core30959.cljs$lang$ctorStr = "transmorphic.core/t_transmorphic$core30959";

transmorphic.core.t_transmorphic$core30959.cljs$lang$ctorPrWriter = ((function (map__30957,map__30957__$1,morph_id,props,submorphs){
return (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"transmorphic.core/t_transmorphic$core30959");
});})(map__30957,map__30957__$1,morph_id,props,submorphs))
;

transmorphic.core.__GT_t_transmorphic$core30959 = ((function (map__30957,map__30957__$1,morph_id,props,submorphs){
return (function transmorphic$core$render_io_$___GT_t_transmorphic$core30959(render_io__$1,p__30951__$1,owner__$1,map__30957__$2,morph_id__$1,props__$1,submorphs__$1,meta30960){
return (new transmorphic.core.t_transmorphic$core30959(render_io__$1,p__30951__$1,owner__$1,map__30957__$2,morph_id__$1,props__$1,submorphs__$1,meta30960));
});})(map__30957,map__30957__$1,morph_id,props,submorphs))
;

}

return (new transmorphic.core.t_transmorphic$core30959(transmorphic$core$render_io,p__30951,owner,map__30957__$1,morph_id,props,submorphs,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
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
transmorphic.core.io_STAR_ = (function (morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,__meta,__extmap,__hash){
this.morph_id = morph_id;
this.type = type;
this.props = props;
this.submorphs = submorphs;
this.morph__GT_html = morph__GT_html;
this.root_QMARK_ = root_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.core.io_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.core.io_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.core.io_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.core.io_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k30963,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__30965 = (((k30963 instanceof cljs.core.Keyword))?k30963.fqn:null);
switch (G__30965) {
case "morph-id":
return self__.morph_id;

break;
case "type":
return self__.type;

break;
case "props":
return self__.props;

break;
case "submorphs":
return self__.submorphs;

break;
case "morph->html":
return self__.morph__GT_html;

break;
case "root?":
return self__.root_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30963,else__17442__auto__);

}
});

transmorphic.core.io_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.core.io*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.io_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.core.io_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30962){
var self__ = this;
var G__30962__$1 = this;
return (new cljs.core.RecordIter((0),G__30962__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.core.io_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.core.io_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.core.io_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.core.io_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.core.io_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.core.io_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.core.io_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.core.io_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.core.io_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.core.io_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.core.io_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__30962){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__30966 = cljs.core.keyword_identical_QMARK_;
var expr__30967 = k__17447__auto__;
if(cljs.core.truth_(pred__30966.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),expr__30967))){
return (new transmorphic.core.io_STAR_(G__30962,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30966.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__30967))){
return (new transmorphic.core.io_STAR_(self__.morph_id,G__30962,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30966.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__30967))){
return (new transmorphic.core.io_STAR_(self__.morph_id,self__.type,G__30962,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30966.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__30967))){
return (new transmorphic.core.io_STAR_(self__.morph_id,self__.type,self__.props,G__30962,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30966.call(null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),expr__30967))){
return (new transmorphic.core.io_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,G__30962,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30966.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518),expr__30967))){
return (new transmorphic.core.io_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,G__30962,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.core.io_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__30962),null));
}
}
}
}
}
}
});

transmorphic.core.io_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.io_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__30962){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.core.io_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,G__30962,self__.__extmap,self__.__hash));
});

transmorphic.core.io_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.core.io_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"morph->html","morph->html",780449544,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null);
});

transmorphic.core.io_STAR_.cljs$lang$type = true;

transmorphic.core.io_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.core/io*");
});

transmorphic.core.io_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.core/io*");
});

transmorphic.core.__GT_io_STAR_ = (function transmorphic$core$__GT_io_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_){
return (new transmorphic.core.io_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,null,null,null));
});

transmorphic.core.map__GT_io_STAR_ = (function transmorphic$core$map__GT_io_STAR_(G__30964){
return (new transmorphic.core.io_STAR_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(G__30964),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__30964),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__30964),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__30964),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(G__30964),new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(G__30964),null,cljs.core.dissoc.call(null,G__30964,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)),null));
});


transmorphic.core.io = (function transmorphic$core$io(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30972 = arguments.length;
var i__17884__auto___30973 = (0);
while(true){
if((i__17884__auto___30973 < len__17883__auto___30972)){
args__17890__auto__.push((arguments[i__17884__auto___30973]));

var G__30974 = (i__17884__auto___30973 + (1));
i__17884__auto___30973 = G__30974;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.io.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.io.cljs$core$IFn$_invoke$arity$variadic = (function (props,submorphs){
return transmorphic.core.map__GT_io_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),(function (args){
return om.core.build.call(null,transmorphic.core.render_io,args);
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Symbol(null,"io","io",1333189610,null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs,new cljs.core.Keyword(null,"props","props",453281727),props], null));
});

transmorphic.core.io.cljs$lang$maxFixedArity = (1);

transmorphic.core.io.cljs$lang$applyTo = (function (seq30969){
var G__30970 = cljs.core.first.call(null,seq30969);
var seq30969__$1 = cljs.core.next.call(null,seq30969);
return transmorphic.core.io.cljs$core$IFn$_invoke$arity$variadic(G__30970,seq30969__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
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
transmorphic.core.html_STAR_ = (function (morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,__meta,__extmap,__hash){
this.morph_id = morph_id;
this.type = type;
this.props = props;
this.submorphs = submorphs;
this.morph__GT_html = morph__GT_html;
this.root_QMARK_ = root_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.core.html_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.core.html_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.core.html_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.core.html_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k30976,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__30978 = (((k30976 instanceof cljs.core.Keyword))?k30976.fqn:null);
switch (G__30978) {
case "morph-id":
return self__.morph_id;

break;
case "type":
return self__.type;

break;
case "props":
return self__.props;

break;
case "submorphs":
return self__.submorphs;

break;
case "morph->html":
return self__.morph__GT_html;

break;
case "root?":
return self__.root_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30976,else__17442__auto__);

}
});

transmorphic.core.html_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.core.html*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.html_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.core.html_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30975){
var self__ = this;
var G__30975__$1 = this;
return (new cljs.core.RecordIter((0),G__30975__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.core.html_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.core.html_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.core.html_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.core.html_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.core.html_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.core.html_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.core.html_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.core.html_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.core.html_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.core.html_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.core.html_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__30975){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__30979 = cljs.core.keyword_identical_QMARK_;
var expr__30980 = k__17447__auto__;
if(cljs.core.truth_(pred__30979.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),expr__30980))){
return (new transmorphic.core.html_STAR_(G__30975,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30979.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__30980))){
return (new transmorphic.core.html_STAR_(self__.morph_id,G__30975,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30979.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__30980))){
return (new transmorphic.core.html_STAR_(self__.morph_id,self__.type,G__30975,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30979.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__30980))){
return (new transmorphic.core.html_STAR_(self__.morph_id,self__.type,self__.props,G__30975,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30979.call(null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),expr__30980))){
return (new transmorphic.core.html_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,G__30975,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30979.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518),expr__30980))){
return (new transmorphic.core.html_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,G__30975,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.core.html_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__30975),null));
}
}
}
}
}
}
});

transmorphic.core.html_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.html_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__30975){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.core.html_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,G__30975,self__.__extmap,self__.__hash));
});

transmorphic.core.html_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.core.html_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"morph->html","morph->html",780449544,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null);
});

transmorphic.core.html_STAR_.cljs$lang$type = true;

transmorphic.core.html_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.core/html*");
});

transmorphic.core.html_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.core/html*");
});

transmorphic.core.__GT_html_STAR_ = (function transmorphic$core$__GT_html_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_){
return (new transmorphic.core.html_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,null,null,null));
});

transmorphic.core.map__GT_html_STAR_ = (function transmorphic$core$map__GT_html_STAR_(G__30977){
return (new transmorphic.core.html_STAR_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(G__30977),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__30977),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__30977),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__30977),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(G__30977),new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(G__30977),null,cljs.core.dissoc.call(null,G__30977,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)),null));
});


transmorphic.core.html = (function transmorphic$core$html(var_args){
var args__17890__auto__ = [];
var len__17883__auto___30988 = arguments.length;
var i__17884__auto___30989 = (0);
while(true){
if((i__17884__auto___30989 < len__17883__auto___30988)){
args__17890__auto__.push((arguments[i__17884__auto___30989]));

var G__30990 = (i__17884__auto___30989 + (1));
i__17884__auto___30989 = G__30990;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (props,submorphs){
return transmorphic.core.map__GT_html_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),(function (p__30984,owner){
var map__30985 = p__30984;
var map__30985__$1 = ((((!((map__30985 == null)))?((((map__30985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30985):map__30985);
var morph_id = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var props__$1 = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs__$1 = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
return React.DOM.div(transmorphic.core.html_attributes.call(null,props__$1,morph_id),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),transmorphic.core.shape_style.call(null,props__$1)], null)),new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(props__$1),om.core.build_all.call(null,transmorphic.core.render_morph,submorphs__$1))));
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Symbol(null,"html","html",641734630,null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs,new cljs.core.Keyword(null,"props","props",453281727),props], null));
});

transmorphic.core.html.cljs$lang$maxFixedArity = (1);

transmorphic.core.html.cljs$lang$applyTo = (function (seq30982){
var G__30983 = cljs.core.first.call(null,seq30982);
var seq30982__$1 = cljs.core.next.call(null,seq30982);
return transmorphic.core.html.cljs$core$IFn$_invoke$arity$variadic(G__30983,seq30982__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
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
transmorphic.core.ace_STAR_ = (function (morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,__meta,__extmap,__hash){
this.morph_id = morph_id;
this.type = type;
this.props = props;
this.submorphs = submorphs;
this.morph__GT_html = morph__GT_html;
this.root_QMARK_ = root_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.core.ace_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.core.ace_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.core.ace_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.core.ace_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k30992,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__30994 = (((k30992 instanceof cljs.core.Keyword))?k30992.fqn:null);
switch (G__30994) {
case "morph-id":
return self__.morph_id;

break;
case "type":
return self__.type;

break;
case "props":
return self__.props;

break;
case "submorphs":
return self__.submorphs;

break;
case "morph->html":
return self__.morph__GT_html;

break;
case "root?":
return self__.root_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30992,else__17442__auto__);

}
});

transmorphic.core.ace_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.core.ace*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.ace_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.core.ace_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30991){
var self__ = this;
var G__30991__$1 = this;
return (new cljs.core.RecordIter((0),G__30991__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.core.ace_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.core.ace_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.core.ace_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.core.ace_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.core.ace_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.core.ace_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.core.ace_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.core.ace_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.core.ace_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.core.ace_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.core.ace_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__30991){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__30995 = cljs.core.keyword_identical_QMARK_;
var expr__30996 = k__17447__auto__;
if(cljs.core.truth_(pred__30995.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),expr__30996))){
return (new transmorphic.core.ace_STAR_(G__30991,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30995.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__30996))){
return (new transmorphic.core.ace_STAR_(self__.morph_id,G__30991,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30995.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__30996))){
return (new transmorphic.core.ace_STAR_(self__.morph_id,self__.type,G__30991,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30995.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__30996))){
return (new transmorphic.core.ace_STAR_(self__.morph_id,self__.type,self__.props,G__30991,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30995.call(null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),expr__30996))){
return (new transmorphic.core.ace_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,G__30991,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30995.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518),expr__30996))){
return (new transmorphic.core.ace_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,G__30991,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.core.ace_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__30991),null));
}
}
}
}
}
}
});

transmorphic.core.ace_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.ace_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__30991){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.core.ace_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,G__30991,self__.__extmap,self__.__hash));
});

transmorphic.core.ace_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.core.ace_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"morph->html","morph->html",780449544,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null);
});

transmorphic.core.ace_STAR_.cljs$lang$type = true;

transmorphic.core.ace_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.core/ace*");
});

transmorphic.core.ace_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.core/ace*");
});

transmorphic.core.__GT_ace_STAR_ = (function transmorphic$core$__GT_ace_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_){
return (new transmorphic.core.ace_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,null,null,null));
});

transmorphic.core.map__GT_ace_STAR_ = (function transmorphic$core$map__GT_ace_STAR_(G__30993){
return (new transmorphic.core.ace_STAR_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(G__30993),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__30993),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__30993),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__30993),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(G__30993),new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(G__30993),null,cljs.core.dissoc.call(null,G__30993,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)),null));
});


transmorphic.core.ace = (function transmorphic$core$ace(var_args){
var args__17890__auto__ = [];
var len__17883__auto___31004 = arguments.length;
var i__17884__auto___31005 = (0);
while(true){
if((i__17884__auto___31005 < len__17883__auto___31004)){
args__17890__auto__.push((arguments[i__17884__auto___31005]));

var G__31006 = (i__17884__auto___31005 + (1));
i__17884__auto___31005 = G__31006;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.ace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.ace.cljs$core$IFn$_invoke$arity$variadic = (function (props,submorphs){
return transmorphic.core.map__GT_ace_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),(function (p__31000,owner){
var map__31001 = p__31000;
var map__31001__$1 = ((((!((map__31001 == null)))?((((map__31001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31001):map__31001);
var morph_id = cljs.core.get.call(null,map__31001__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var props__$1 = cljs.core.get.call(null,map__31001__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs__$1 = cljs.core.get.call(null,map__31001__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
return React.DOM.div(transmorphic.core.html_attributes.call(null,props__$1,morph_id),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),transmorphic.core.shape_style.call(null,props__$1)], null)),React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),props__$1.call(null,new cljs.core.Keyword(null,"ace-id","ace-id",1168967199)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"className","className",-1983287057),"ace"], null))),om.core.build_all.call(null,transmorphic.core.render_morph,submorphs__$1))));
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Symbol(null,"ace","ace",-1015690959,null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs,new cljs.core.Keyword(null,"props","props",453281727),props], null));
});

transmorphic.core.ace.cljs$lang$maxFixedArity = (1);

transmorphic.core.ace.cljs$lang$applyTo = (function (seq30998){
var G__30999 = cljs.core.first.call(null,seq30998);
var seq30998__$1 = cljs.core.next.call(null,seq30998);
return transmorphic.core.ace.cljs$core$IFn$_invoke$arity$variadic(G__30999,seq30998__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
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
transmorphic.core.listmorph_STAR_ = (function (morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,__meta,__extmap,__hash){
this.morph_id = morph_id;
this.type = type;
this.props = props;
this.submorphs = submorphs;
this.morph__GT_html = morph__GT_html;
this.root_QMARK_ = root_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.core.listmorph_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.core.listmorph_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k31008,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__31010 = (((k31008 instanceof cljs.core.Keyword))?k31008.fqn:null);
switch (G__31010) {
case "morph-id":
return self__.morph_id;

break;
case "type":
return self__.type;

break;
case "props":
return self__.props;

break;
case "submorphs":
return self__.submorphs;

break;
case "morph->html":
return self__.morph__GT_html;

break;
case "root?":
return self__.root_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31008,else__17442__auto__);

}
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.core.listmorph*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.core.listmorph_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31007){
var self__ = this;
var G__31007__$1 = this;
return (new cljs.core.RecordIter((0),G__31007__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.core.listmorph_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.core.listmorph_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.core.listmorph_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.core.listmorph_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__31007){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__31011 = cljs.core.keyword_identical_QMARK_;
var expr__31012 = k__17447__auto__;
if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),expr__31012))){
return (new transmorphic.core.listmorph_STAR_(G__31007,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__31012))){
return (new transmorphic.core.listmorph_STAR_(self__.morph_id,G__31007,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__31012))){
return (new transmorphic.core.listmorph_STAR_(self__.morph_id,self__.type,G__31007,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__31012))){
return (new transmorphic.core.listmorph_STAR_(self__.morph_id,self__.type,self__.props,G__31007,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),expr__31012))){
return (new transmorphic.core.listmorph_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,G__31007,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31011.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518),expr__31012))){
return (new transmorphic.core.listmorph_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,G__31007,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.core.listmorph_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__31007),null));
}
}
}
}
}
}
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__31007){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.core.listmorph_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,G__31007,self__.__extmap,self__.__hash));
});

transmorphic.core.listmorph_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.core.listmorph_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"morph->html","morph->html",780449544,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null);
});

transmorphic.core.listmorph_STAR_.cljs$lang$type = true;

transmorphic.core.listmorph_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.core/listmorph*");
});

transmorphic.core.listmorph_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.core/listmorph*");
});

transmorphic.core.__GT_listmorph_STAR_ = (function transmorphic$core$__GT_listmorph_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_){
return (new transmorphic.core.listmorph_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,null,null,null));
});

transmorphic.core.map__GT_listmorph_STAR_ = (function transmorphic$core$map__GT_listmorph_STAR_(G__31009){
return (new transmorphic.core.listmorph_STAR_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(G__31009),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__31009),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__31009),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__31009),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(G__31009),new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(G__31009),null,cljs.core.dissoc.call(null,G__31009,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)),null));
});


transmorphic.core.listmorph = (function transmorphic$core$listmorph(var_args){
var args__17890__auto__ = [];
var len__17883__auto___31028 = arguments.length;
var i__17884__auto___31029 = (0);
while(true){
if((i__17884__auto___31029 < len__17883__auto___31028)){
args__17890__auto__.push((arguments[i__17884__auto___31029]));

var G__31030 = (i__17884__auto___31029 + (1));
i__17884__auto___31029 = G__31030;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.listmorph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.listmorph.cljs$core$IFn$_invoke$arity$variadic = (function (props,submorphs){
return transmorphic.core.map__GT_listmorph_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),(function (p__31016){
var map__31017 = p__31016;
var map__31017__$1 = ((((!((map__31017 == null)))?((((map__31017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31017):map__31017);
var morph_id = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var type = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var props__$1 = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs__$1 = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
return React.DOM.ul(transmorphic.core.html_attributes.call(null,props__$1,morph_id),om.util.force_children.call(null,(function (){var iter__17597__auto__ = ((function (map__31017,map__31017__$1,morph_id,type,props__$1,submorphs__$1){
return (function transmorphic$core$iter__31019(s__31020){
return (new cljs.core.LazySeq(null,((function (map__31017,map__31017__$1,morph_id,type,props__$1,submorphs__$1){
return (function (){
var s__31020__$1 = s__31020;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31020__$1);
if(temp__4425__auto__){
var s__31020__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31020__$2)){
var c__17595__auto__ = cljs.core.chunk_first.call(null,s__31020__$2);
var size__17596__auto__ = cljs.core.count.call(null,c__17595__auto__);
var b__31022 = cljs.core.chunk_buffer.call(null,size__17596__auto__);
if((function (){var i__31021 = (0);
while(true){
if((i__31021 < size__17596__auto__)){
var vec__31025 = cljs.core._nth.call(null,c__17595__auto__,i__31021);
var idx = cljs.core.nth.call(null,vec__31025,(0),null);
var submorph = cljs.core.nth.call(null,vec__31025,(1),null);
cljs.core.chunk_append.call(null,b__31022,React.DOM.li({"key": idx, "style": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listStyleType","listStyleType",-1072540600),"none"], null)},om.util.force_children.call(null,om.core.build.call(null,transmorphic.core.render_morph,submorph))));

var G__31031 = (i__31021 + (1));
i__31021 = G__31031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31022),transmorphic$core$iter__31019.call(null,cljs.core.chunk_rest.call(null,s__31020__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31022),null);
}
} else {
var vec__31026 = cljs.core.first.call(null,s__31020__$2);
var idx = cljs.core.nth.call(null,vec__31026,(0),null);
var submorph = cljs.core.nth.call(null,vec__31026,(1),null);
return cljs.core.cons.call(null,React.DOM.li({"key": idx, "style": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listStyleType","listStyleType",-1072540600),"none"], null)},om.util.force_children.call(null,om.core.build.call(null,transmorphic.core.render_morph,submorph))),transmorphic$core$iter__31019.call(null,cljs.core.rest.call(null,s__31020__$2)));
}
} else {
return null;
}
break;
}
});})(map__31017,map__31017__$1,morph_id,type,props__$1,submorphs__$1))
,null,null));
});})(map__31017,map__31017__$1,morph_id,type,props__$1,submorphs__$1))
;
return iter__17597__auto__.call(null,submorphs__$1);
})()));
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Symbol(null,"listmorph","listmorph",-1017316297,null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs,new cljs.core.Keyword(null,"props","props",453281727),props], null));
});

transmorphic.core.listmorph.cljs$lang$maxFixedArity = (1);

transmorphic.core.listmorph.cljs$lang$applyTo = (function (seq31014){
var G__31015 = cljs.core.first.call(null,seq31014);
var seq31014__$1 = cljs.core.next.call(null,seq31014);
return transmorphic.core.listmorph.cljs$core$IFn$_invoke$arity$variadic(G__31015,seq31014__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {transmorphic.core.IMorph_QMARK_}
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
transmorphic.core.checkbox_STAR_ = (function (morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,__meta,__extmap,__hash){
this.morph_id = morph_id;
this.type = type;
this.props = props;
this.submorphs = submorphs;
this.morph__GT_html = morph__GT_html;
this.root_QMARK_ = root_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.core.checkbox_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.core.checkbox_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k31033,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__31035 = (((k31033 instanceof cljs.core.Keyword))?k31033.fqn:null);
switch (G__31035) {
case "morph-id":
return self__.morph_id;

break;
case "type":
return self__.type;

break;
case "props":
return self__.props;

break;
case "submorphs":
return self__.submorphs;

break;
case "morph->html":
return self__.morph__GT_html;

break;
case "root?":
return self__.root_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31033,else__17442__auto__);

}
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.core.checkbox*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.core.checkbox_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31032){
var self__ = this;
var G__31032__$1 = this;
return (new cljs.core.RecordIter((0),G__31032__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.core.checkbox_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
var h__17260__auto__ = self__.__hash;
if(!((h__17260__auto__ == null))){
return h__17260__auto__;
} else {
var h__17260__auto____$1 = cljs.core.hash_imap.call(null,this__17434__auto____$1);
self__.__hash = h__17260__auto____$1;

return h__17260__auto____$1;
}
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16813__auto__ = other__17436__auto__;
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = (this__17435__auto____$1.constructor === other__17436__auto__.constructor);
if(and__16813__auto____$1){
return cljs.core.equiv_map.call(null,this__17435__auto____$1,other__17436__auto__);
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
return false;
}
});

transmorphic.core.checkbox_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.core.checkbox_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.core.checkbox_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__31032){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__31036 = cljs.core.keyword_identical_QMARK_;
var expr__31037 = k__17447__auto__;
if(cljs.core.truth_(pred__31036.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),expr__31037))){
return (new transmorphic.core.checkbox_STAR_(G__31032,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31036.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__31037))){
return (new transmorphic.core.checkbox_STAR_(self__.morph_id,G__31032,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31036.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__31037))){
return (new transmorphic.core.checkbox_STAR_(self__.morph_id,self__.type,G__31032,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31036.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__31037))){
return (new transmorphic.core.checkbox_STAR_(self__.morph_id,self__.type,self__.props,G__31032,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31036.call(null,new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),expr__31037))){
return (new transmorphic.core.checkbox_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,G__31032,self__.root_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31036.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518),expr__31037))){
return (new transmorphic.core.checkbox_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,G__31032,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.core.checkbox_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__31032),null));
}
}
}
}
}
}
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph-id","morph-id",953478048),self__.morph_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),self__.morph__GT_html],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root?","root?",-2045639518),self__.root_QMARK_],null))], null),self__.__extmap));
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__31032){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.core.checkbox_STAR_(self__.morph_id,self__.type,self__.props,self__.submorphs,self__.morph__GT_html,self__.root_QMARK_,G__31032,self__.__extmap,self__.__hash));
});

transmorphic.core.checkbox_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.core.checkbox_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph-id","morph-id",-1700957721,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"morph->html","morph->html",780449544,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null);
});

transmorphic.core.checkbox_STAR_.cljs$lang$type = true;

transmorphic.core.checkbox_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.core/checkbox*");
});

transmorphic.core.checkbox_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.core/checkbox*");
});

transmorphic.core.__GT_checkbox_STAR_ = (function transmorphic$core$__GT_checkbox_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_){
return (new transmorphic.core.checkbox_STAR_(morph_id,type,props,submorphs,morph__GT_html,root_QMARK_,null,null,null));
});

transmorphic.core.map__GT_checkbox_STAR_ = (function transmorphic$core$map__GT_checkbox_STAR_(G__31034){
return (new transmorphic.core.checkbox_STAR_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(G__31034),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__31034),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__31034),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__31034),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983).cljs$core$IFn$_invoke$arity$1(G__31034),new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(G__31034),null,cljs.core.dissoc.call(null,G__31034,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),new cljs.core.Keyword(null,"root?","root?",-2045639518)),null));
});


transmorphic.core.checkbox = (function transmorphic$core$checkbox(var_args){
var args__17890__auto__ = [];
var len__17883__auto___31045 = arguments.length;
var i__17884__auto___31046 = (0);
while(true){
if((i__17884__auto___31046 < len__17883__auto___31045)){
args__17890__auto__.push((arguments[i__17884__auto___31046]));

var G__31047 = (i__17884__auto___31046 + (1));
i__17884__auto___31046 = G__31047;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.core.checkbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (props,submorphs){
return transmorphic.core.map__GT_checkbox_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"morph->html","morph->html",-860081983),(function (p__31041){
var map__31042 = p__31041;
var map__31042__$1 = ((((!((map__31042 == null)))?((((map__31042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31042):map__31042);
var morph_id = cljs.core.get.call(null,map__31042__$1,new cljs.core.Keyword(null,"morph-id","morph-id",953478048));
var type = cljs.core.get.call(null,map__31042__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var props__$1 = cljs.core.get.call(null,map__31042__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs__$1 = cljs.core.get.call(null,map__31042__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
return React.DOM.div(transmorphic.core.html_attributes.call(null,props__$1,morph_id),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),transmorphic.core.shape_style.call(null,props__$1)], null)),om.dom.input.call(null,{"className": "toggle", "type": "checkbox", "checked": new cljs.core.Keyword(null,"checked?","checked?",2024809091).cljs$core$IFn$_invoke$arity$1(props__$1), "onChange": new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(props__$1)}),om.core.build_all.call(null,transmorphic.core.render_morph,submorphs__$1))));
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Symbol(null,"checkbox","checkbox",-1041820114,null)),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs,new cljs.core.Keyword(null,"props","props",453281727),props], null));
});

transmorphic.core.checkbox.cljs$lang$maxFixedArity = (1);

transmorphic.core.checkbox.cljs$lang$applyTo = (function (seq31039){
var G__31040 = cljs.core.first.call(null,seq31039);
var seq31039__$1 = cljs.core.next.call(null,seq31039);
return transmorphic.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(G__31040,seq31039__$1);
});
transmorphic.core.get_ref;

transmorphic.core.refresh_root;
transmorphic.core.history_cache = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
transmorphic.core.reverted_entities = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
transmorphic.core.reverted_QMARK_ = (function transmorphic$core$reverted_QMARK_(x){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,transmorphic.core.reverted_entities),cljs.core.second.call(null,transmorphic.core.get_ref.call(null,x)));
});
transmorphic.core.history_count = (function transmorphic$core$history_count(){
return cljs.core.count.call(null,cljs.core.deref.call(null,transmorphic.core.history_cache));
});
transmorphic.core.revert_history_BANG_ = (function transmorphic$core$revert_history_BANG_(x,history_idx){
var temp__4425__auto__ = transmorphic.core.get_ref.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
cljs.core.swap_BANG_.call(null,transmorphic.core.reverted_entities,cljs.core.assoc,cljs.core.second.call(null,ref),history_idx);

cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.update_in,ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reverted","reverted",327403620)], null),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(ref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,transmorphic.core.history_cache),history_idx))));

var temp__4425__auto___31048__$1 = new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__4425__auto___31048__$1)){
var p_ref_31049 = temp__4425__auto___31048__$1;
cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.update_in,p_ref_31049,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reverted","reverted",327403620)], null),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(ref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,transmorphic.core.history_cache),history_idx))));
} else {
}

return cljs.core.swap_BANG_.call(null,transmorphic.core.universe,transmorphic.core.refresh_root,false);
} else {
return null;
}
});
transmorphic.core.detach_cache_BANG_ = (function transmorphic$core$detach_cache_BANG_(x){
if(cljs.core.truth_(transmorphic.core.reverted_QMARK_.call(null,x))){
cljs.core.swap_BANG_.call(null,transmorphic.core.reverted_entities,cljs.core.dissoc,cljs.core.second.call(null,transmorphic.core.get_ref.call(null,x)));

cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.update_in,transmorphic.core.get_ref.call(null,x),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reverted","reverted",327403620)], null),null);

var temp__4425__auto__ = new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__4425__auto__)){
var p_ref = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.update_in,p_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reverted","reverted",327403620)], null),null);
} else {
return null;
}
} else {
return null;
}
});
transmorphic.core.update_dynamic_props_BANG_ = (function transmorphic$core$update_dynamic_props_BANG_(morph,cursor_pos){
var seq__31056 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph));
var chunk__31057 = null;
var count__31058 = (0);
var i__31059 = (0);
while(true){
if((i__31059 < count__31058)){
var vec__31060 = cljs.core._nth.call(null,chunk__31057,i__31059);
var k = cljs.core.nth.call(null,vec__31060,(0),null);
var v = cljs.core.nth.call(null,vec__31060,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(v))){
v.call(null,new cljs.core.Keyword(null,"update","update",1045576396)).call(null,morph,k,cursor_pos);
} else {
}

var G__31062 = seq__31056;
var G__31063 = chunk__31057;
var G__31064 = count__31058;
var G__31065 = (i__31059 + (1));
seq__31056 = G__31062;
chunk__31057 = G__31063;
count__31058 = G__31064;
i__31059 = G__31065;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31056);
if(temp__4425__auto__){
var seq__31056__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31056__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__31056__$1);
var G__31066 = cljs.core.chunk_rest.call(null,seq__31056__$1);
var G__31067 = c__17628__auto__;
var G__31068 = cljs.core.count.call(null,c__17628__auto__);
var G__31069 = (0);
seq__31056 = G__31066;
chunk__31057 = G__31067;
count__31058 = G__31068;
i__31059 = G__31069;
continue;
} else {
var vec__31061 = cljs.core.first.call(null,seq__31056__$1);
var k = cljs.core.nth.call(null,vec__31061,(0),null);
var v = cljs.core.nth.call(null,vec__31061,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(v))){
v.call(null,new cljs.core.Keyword(null,"update","update",1045576396)).call(null,morph,k,cursor_pos);
} else {
}

var G__31070 = cljs.core.next.call(null,seq__31056__$1);
var G__31071 = null;
var G__31072 = (0);
var G__31073 = (0);
seq__31056 = G__31070;
chunk__31057 = G__31071;
count__31058 = G__31072;
i__31059 = G__31073;
continue;
}
} else {
return null;
}
}
break;
}
});
transmorphic.core.render_component_STAR_;

transmorphic.core.get_morph_tree;

transmorphic.core.store_morph_BANG_;
transmorphic.core.wrap_morph;

transmorphic.core.wrap_component;
transmorphic.core.refresh_root = (function transmorphic$core$refresh_root(var_args){
var args31074 = [];
var len__17883__auto___31077 = arguments.length;
var i__17884__auto___31078 = (0);
while(true){
if((i__17884__auto___31078 < len__17883__auto___31077)){
args31074.push((arguments[i__17884__auto___31078]));

var G__31079 = (i__17884__auto___31078 + (1));
i__17884__auto___31078 = G__31079;
continue;
} else {
}
break;
}

var G__31076 = args31074.length;
switch (G__31076) {
case 1:
return transmorphic.core.refresh_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.core.refresh_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31074.length)].join('')));

}
});

transmorphic.core.refresh_root.cljs$core$IFn$_invoke$arity$1 = (function (state){
return transmorphic.core.refresh_root.call(null,state,false);
});

transmorphic.core.refresh_root.cljs$core$IFn$_invoke$arity$2 = (function (state,patch){
var component = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"root-component","root-component",-1807026475));
var props = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"root-props","root-props",-1015460595));
var state_tracker = cljs.core.atom.call(null,state);
var morph_tree = transmorphic.core.render_component_STAR_.call(null,component.call(null,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state_tracker], null));
var new_state = cljs.core.assoc.call(null,cljs.core.deref.call(null,state_tracker),new cljs.core.Keyword(null,"morph-tree","morph-tree",1252939896),morph_tree);
return new_state;
});

transmorphic.core.refresh_root.cljs$lang$maxFixedArity = 2;
transmorphic.core.mark_as_derived = (function transmorphic$core$mark_as_derived(state,morph){
var morph_ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(morph)], null);
return cljs.core.assoc.call(null,morph,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),null,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),morph_ref,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (morph_ref){
return (function (p1__31081_SHARP_){
return transmorphic$core$mark_as_derived.call(null,state,p1__31081_SHARP_);
});})(morph_ref))
,new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(morph))));
});
transmorphic.core.submorphs__GT_flatten = (function transmorphic$core$submorphs__GT_flatten(var_args){
var args31082 = [];
var len__17883__auto___31094 = arguments.length;
var i__17884__auto___31095 = (0);
while(true){
if((i__17884__auto___31095 < len__17883__auto___31094)){
args31082.push((arguments[i__17884__auto___31095]));

var G__31096 = (i__17884__auto___31095 + (1));
i__17884__auto___31095 = G__31096;
continue;
} else {
}
break;
}

var G__31084 = args31082.length;
switch (G__31084) {
case 1:
return transmorphic.core.submorphs__GT_flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.core.submorphs__GT_flatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31082.length)].join('')));

}
});

transmorphic.core.submorphs__GT_flatten.cljs$core$IFn$_invoke$arity$1 = (function (submorphs){
return transmorphic.core.submorphs__GT_flatten.call(null,submorphs,null);
});

transmorphic.core.submorphs__GT_flatten.cljs$core$IFn$_invoke$arity$2 = (function (submorphs,p__31085){
var map__31086 = p__31085;
var map__31086__$1 = ((((!((map__31086 == null)))?((((map__31086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31086):map__31086);
var render_ctx = map__31086__$1;
var idx_QMARK_ = cljs.core.get.call(null,map__31086__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var reduce_morphs = ((function (map__31086,map__31086__$1,render_ctx,idx_QMARK_){
return (function transmorphic$core$reduce_morphs(morphs,p__31091){
var vec__31093 = p__31091;
var idx = cljs.core.nth.call(null,vec__31093,(0),null);
var x = cljs.core.nth.call(null,vec__31093,(1),null);
var idx__$1 = (cljs.core.truth_((function (){var and__16813__auto__ = idx_QMARK_;
if(cljs.core.truth_(and__16813__auto__)){
return idx;
} else {
return and__16813__auto__;
}
})())?[cljs.core.str(idx_QMARK_),cljs.core.str("."),cljs.core.str(idx)].join(''):idx);
if((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x))){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,morphs,transmorphic.core.submorphs__GT_flatten.call(null,x,cljs.core.assoc.call(null,render_ctx,new cljs.core.Keyword(null,"idx","idx",1053688473),idx__$1))));
} else {
if(cljs.core.truth_(transmorphic.core.morph_QMARK_.call(null,x))){
return cljs.core.conj.call(null,morphs,transmorphic.core.wrap_morph.call(null,x,cljs.core.assoc.call(null,render_ctx,new cljs.core.Keyword(null,"idx","idx",1053688473),idx__$1)));
} else {
if(cljs.core.truth_(transmorphic.core.component_QMARK_.call(null,x))){
return cljs.core.conj.call(null,morphs,transmorphic.core.wrap_component.call(null,x,cljs.core.assoc.call(null,render_ctx,new cljs.core.Keyword(null,"idx","idx",1053688473),idx__$1)));
} else {
return morphs;

}
}
}
});})(map__31086,map__31086__$1,render_ctx,idx_QMARK_))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,reduce_morphs,cljs.core.PersistentVector.EMPTY,cljs.core.zipmap.call(null,cljs.core.range.call(null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,submorphs))));
});

transmorphic.core.submorphs__GT_flatten.cljs$lang$maxFixedArity = 2;
transmorphic.core.unwrap_submorphs = (function transmorphic$core$unwrap_submorphs(submorphs,render_context){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_),transmorphic.core.submorphs__GT_flatten.call(null,submorphs,render_context));
});
transmorphic.core.store_morph_BANG_ = (function transmorphic$core$store_morph_BANG_(state,morph,redefined_QMARK_){
var stored_31099 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(morph)], null));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(morph)], null),cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,morph,new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner","owner",-392611939)], null),((function (stored_31099){
return (function (c){
if(cljs.core.truth_(c)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(c)], null);
} else {
return null;
}
});})(stored_31099))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770)], null),((function (stored_31099){
return (function (p1__31098_SHARP_){
return cljs.core.mapv.call(null,((function (stored_31099){
return (function (s){
if(cljs.core.truth_(s)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(s))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(s))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(s)], null);
}
} else {
return null;
}
});})(stored_31099))
,p1__31098_SHARP_);
});})(stored_31099))
));

return morph;
});
transmorphic.core.store_component_BANG_ = (function transmorphic$core$store_component_BANG_(state,component,redefined_QMARK_){
var id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(component);
var stored = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),id], null));
var map__31103 = stored;
var map__31103__$1 = ((((!((map__31103 == null)))?((((map__31103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31103):map__31103);
var local_state = cljs.core.get.call(null,map__31103__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var reconciler = cljs.core.get.call(null,map__31103__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var cached = cljs.core.get.call(null,map__31103__$1,new cljs.core.Keyword(null,"cached","cached",1437727905));
var component__$1 = cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"cached","cached",1437727905),(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"cached","cached",1437727905).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cached;
}
})(),new cljs.core.Keyword(null,"local-state","local-state",-282143524),(function (){var or__16825__auto__ = local_state;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(component);
}
})(),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),(function (){var or__16825__auto__ = (function (){var and__16813__auto__ = cljs.core.not.call(null,redefined_QMARK_);
if(and__16813__auto__){
return reconciler;
} else {
return and__16813__auto__;
}
})();
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(component);
}
})());
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(component__$1)], null),cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner","owner",-392611939)], null),((function (id,stored,map__31103,map__31103__$1,local_state,reconciler,cached,component__$1){
return (function (c){
if(cljs.core.truth_(c)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(c)], null);
} else {
return null;
}
});})(id,stored,map__31103,map__31103__$1,local_state,reconciler,cached,component__$1))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770)], null),((function (id,stored,map__31103,map__31103__$1,local_state,reconciler,cached,component__$1){
return (function (p1__31100_SHARP_){
return cljs.core.mapv.call(null,((function (id,stored,map__31103,map__31103__$1,local_state,reconciler,cached,component__$1){
return (function (s){
if(cljs.core.truth_(s)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(s))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(s))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(s)], null);
}
} else {
return null;
}
});})(id,stored,map__31103,map__31103__$1,local_state,reconciler,cached,component__$1))
,p1__31100_SHARP_);
});})(id,stored,map__31103,map__31103__$1,local_state,reconciler,cached,component__$1))
));

return component__$1;
});
transmorphic.core.consolidate_component;

transmorphic.core.get_root_morph;

transmorphic.core.consolidate_morph;

transmorphic.core.ensure;
transmorphic.core.get_morph_tree = (function transmorphic$core$get_morph_tree(state,ref){
var x = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),ref);
if(cljs.core.truth_(transmorphic.core.component_QMARK_.call(null,x))){
return transmorphic.core.render_component_STAR_.call(null,transmorphic.core.consolidate_component.call(null,state,x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
} else {
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770)], null),((function (x){
return (function (submorphs){
return cljs.core.mapv.call(null,((function (x){
return (function (m){
return transmorphic$core$get_morph_tree.call(null,state,m);
});})(x))
,submorphs);
});})(x))
);
}
});
transmorphic.core.align_with_stored = (function transmorphic$core$align_with_stored(x,stored,owner,state){
var map__31114 = stored;
var map__31114__$1 = ((((!((map__31114 == null)))?((((map__31114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31114):map__31114);
var txs = cljs.core.get.call(null,map__31114__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var parent = cljs.core.get.call(null,map__31114__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var map__31115 = owner;
var map__31115__$1 = ((((!((map__31115 == null)))?((((map__31115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31115):map__31115);
var reconciler = cljs.core.get.call(null,map__31115__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__31116 = (function (){var or__16825__auto__ = new cljs.core.Keyword(null,"reverted","reverted",327403620).cljs$core$IFn$_invoke$arity$1(txs);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return txs;
}
})();
var map__31116__$1 = ((((!((map__31116 == null)))?((((map__31116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31116):map__31116);
var props = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"props","props",453281727));
var added = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"added","added",2057651688));
var removed = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"removed","removed",609626430));
var align = ((function (map__31114,map__31114__$1,txs,parent,map__31115,map__31115__$1,reconciler,map__31116,map__31116__$1,props,added,removed){
return (function (x__$1,props__$1,added__$1,removed__$1){
var align_submorph = ((function (map__31114,map__31114__$1,txs,parent,map__31115,map__31115__$1,reconciler,map__31116,map__31116__$1,props,added,removed){
return (function (submorphs,ref){
var temp__4423__auto__ = (function (){var and__16813__auto__ = !(cljs.core.contains_QMARK_.call(null,removed__$1,ref));
if(and__16813__auto__){
return transmorphic.core.get_morph_tree.call(null,state,ref);
} else {
return and__16813__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var x__$2 = temp__4423__auto__;
return cljs.core.conj.call(null,submorphs,x__$2);
} else {
return submorphs;
}
});})(map__31114,map__31114__$1,txs,parent,map__31115,map__31115__$1,reconciler,map__31116,map__31116__$1,props,added,removed))
;
var aligned_props = cljs.core.merge_with.call(null,((function (align_submorph,map__31114,map__31114__$1,txs,parent,map__31115,map__31115__$1,reconciler,map__31116,map__31116__$1,props,added,removed){
return (function (inline,stored__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(inline))){
return cljs.core.merge.call(null,inline,cljs.core.dissoc.call(null,stored__$1,new cljs.core.Keyword(null,"update","update",1045576396)));
} else {
return stored__$1;
}
});})(align_submorph,map__31114,map__31114__$1,txs,parent,map__31115,map__31115__$1,reconciler,map__31116,map__31116__$1,props,added,removed))
,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(x__$1),props__$1);
var filtered_submorphs = cljs.core.filter.call(null,((function (align_submorph,aligned_props,map__31114,map__31114__$1,txs,parent,map__31115,map__31115__$1,reconciler,map__31116,map__31116__$1,props,added,removed){
return (function (p1__31105_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,removed__$1,transmorphic.core.get_ref.call(null,p1__31105_SHARP_)));
});})(align_submorph,aligned_props,map__31114,map__31114__$1,txs,parent,map__31115,map__31115__$1,reconciler,map__31116,map__31116__$1,props,added,removed))
,(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(x__$1);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var aligned_submorphs = cljs.core.reduce.call(null,align_submorph,filtered_submorphs,added__$1);
return cljs.core.assoc.call(null,x__$1,new cljs.core.Keyword(null,"owner","owner",-392611939),owner,new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"txs","txs",2056038378),txs,new cljs.core.Keyword(null,"props","props",453281727),aligned_props,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),aligned_submorphs,new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846).cljs$core$IFn$_invoke$arity$1(stored);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (cljs.core.not_EQ_.call(null,aligned_submorphs,new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(x__$1))) || (cljs.core.not_EQ_.call(null,aligned_props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(stored)));
}
})());
});})(map__31114,map__31114__$1,txs,parent,map__31115,map__31115__$1,reconciler,map__31116,map__31116__$1,props,added,removed))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(reconciler))){
var map__31120 = cljs.core.get_in.call(null,reconciler,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"txs","txs",2056038378)], null));
var map__31120__$1 = ((((!((map__31120 == null)))?((((map__31120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31120):map__31120);
var props__$1 = cljs.core.get.call(null,map__31120__$1,new cljs.core.Keyword(null,"props","props",453281727));
var added__$1 = cljs.core.get.call(null,map__31120__$1,new cljs.core.Keyword(null,"added","added",2057651688));
var removed__$1 = cljs.core.get.call(null,map__31120__$1,new cljs.core.Keyword(null,"removed","removed",609626430));
return align.call(null,x,props__$1,added__$1,removed__$1);
} else {
return align.call(null,x,props,added,removed);
}
});
transmorphic.core.consolidate = (function transmorphic$core$consolidate(x,store_fn,key,prefix,state,redefined_QMARK_){
var id = key.call(null,x);
var ens_ref = (function (){var or__16825__auto__ = transmorphic.core.ensure.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,id], null));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,id], null);
}
})();
var stored = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),ens_ref);
var owner = (cljs.core.truth_(new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(x))?(cljs.core.truth_((function (){var and__16813__auto__ = stored;
if(cljs.core.truth_(and__16813__auto__)){
return new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(stored);
} else {
return and__16813__auto__;
}
})())?cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(stored)):new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(x)):null);
var redefined_QMARK___$1 = (function (){var or__16825__auto__ = redefined_QMARK_;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var or__16825__auto____$1 = (function (){var and__16813__auto__ = transmorphic.core.component_QMARK_.call(null,x);
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,transmorphic.core.component_migration_queue),id);
} else {
return and__16813__auto__;
}
})();
if(cljs.core.truth_(or__16825__auto____$1)){
return or__16825__auto____$1;
} else {
var and__16813__auto__ = owner;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,transmorphic.core.component_migration_queue),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(owner));
} else {
return and__16813__auto__;
}
}
}
})();
var x__$1 = (cljs.core.truth_((function (){var and__16813__auto__ = transmorphic.core.component_QMARK_.call(null,x);
if(cljs.core.truth_(and__16813__auto__)){
return redefined_QMARK___$1;
} else {
return and__16813__auto__;
}
})())?(function (){var comp_fn = transmorphic.repl.morph_eval_str.call(null,[cljs.core.str(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(x))),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(x)))].join(''));
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(comp_fn.call(null,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(x))));
})():x);
var removed_QMARK_ = (function (){var and__16813__auto__ = stored;
if(cljs.core.truth_(and__16813__auto__)){
return (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(x__$1),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(stored))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(stored))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(x__$1)));
} else {
return and__16813__auto__;
}
})();
var x__$2 = (cljs.core.truth_(removed_QMARK_)?null:cljs.core.assoc.call(null,x__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),transmorphic.core.unwrap_submorphs.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(x__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,id], null),new cljs.core.Keyword(null,"owner","owner",-392611939),owner,new cljs.core.Keyword(null,"redefined?","redefined?",1520256533),redefined_QMARK___$1,new cljs.core.Keyword(null,"state","state",-1988618099),state], null))));
if(cljs.core.truth_(x__$2)){
if(cljs.core.truth_((function (){var and__16813__auto__ = stored;
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core.not.call(null,redefined_QMARK___$1);
} else {
return and__16813__auto__;
}
})())){
if(cljs.core.truth_(removed_QMARK_)){
return null;
} else {
var x__$3 = transmorphic.core.align_with_stored.call(null,x__$2,stored,owner,state);
return store_fn.call(null,state,x__$3,redefined_QMARK___$1);
}
} else {
return cljs.core.assoc.call(null,store_fn.call(null,state,x__$2,redefined_QMARK___$1),new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),true);
}
} else {
return null;
}
});
transmorphic.core.consolidate_component = (function transmorphic$core$consolidate_component(state,component,redefined_QMARK_){
return transmorphic.core.consolidate.call(null,component,transmorphic.core.store_component_BANG_,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword("component","by-id","component/by-id",746697032),state,redefined_QMARK_);
});
transmorphic.core.consolidate_morph = (function transmorphic$core$consolidate_morph(state,morph,redefined_QMARK_){
return transmorphic.core.consolidate.call(null,morph,transmorphic.core.store_morph_BANG_,new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),state,redefined_QMARK_);
});
transmorphic.core.render_component_STAR_ = (function transmorphic$core$render_component_STAR_(self,p__31124){
var map__31131 = p__31124;
var map__31131__$1 = ((((!((map__31131 == null)))?((((map__31131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31131):map__31131);
var state = cljs.core.get.call(null,map__31131__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var idx = cljs.core.get.call(null,map__31131__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var map__31133 = self;
var map__31133__$1 = ((((!((map__31133 == null)))?((((map__31133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31133):map__31133);
var local_state = cljs.core.get.call(null,map__31133__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var props = cljs.core.get.call(null,map__31133__$1,new cljs.core.Keyword(null,"props","props",453281727));
var submorphs = cljs.core.get.call(null,map__31133__$1,new cljs.core.Keyword(null,"submorphs","submorphs",360747770));
var parent = cljs.core.get.call(null,map__31133__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var component_id = cljs.core.get.call(null,map__31133__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var render_ctx = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"root?","root?",-2045639518),true,new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),component_id], null))], null);
var self__$1 = (function (){var temp__4423__auto__ = (function (){var and__16813__auto__ = cljs.core.not.call(null,local_state);
if(and__16813__auto__){
if(!((self == null))){
if((false) || (self.transmorphic$core$IInitialize$)){
return true;
} else {
if((!self.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,transmorphic.core.IInitialize,self);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,transmorphic.core.IInitialize,self);
}
} else {
return and__16813__auto__;
}
})();
if(temp__4423__auto__){
var init_BANG_ = temp__4423__auto__;
return cljs.core.assoc.call(null,self,new cljs.core.Keyword(null,"local-state","local-state",-282143524),transmorphic.core.initialize.call(null,self));
} else {
return self;
}
})();
var morph = transmorphic.core.render.call(null,self__$1,props,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__31133,map__31133__$1,local_state,props,submorphs,parent,component_id,render_ctx,self__$1,map__31131,map__31131__$1,state,idx){
return (function (p1__31122_SHARP_){
return transmorphic.core.mark_as_derived.call(null,state,p1__31122_SHARP_);
});})(map__31133,map__31133__$1,local_state,props,submorphs,parent,component_id,render_ctx,self__$1,map__31131,map__31131__$1,state,idx))
,submorphs)),render_ctx);
if(cljs.core.truth_(morph)){
var morph__$1 = cljs.core.update_in.call(null,morph,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727)], null),((function (map__31133,map__31133__$1,local_state,props,submorphs,parent,component_id,render_ctx,self__$1,morph,map__31131,map__31131__$1,state,idx){
return (function (p1__31123_SHARP_){
return cljs.core.merge.call(null,props,p1__31123_SHARP_);
});})(map__31133,map__31133__$1,local_state,props,submorphs,parent,component_id,render_ctx,self__$1,morph,map__31131,map__31131__$1,state,idx))
);
if(cljs.core.truth_(component_id)){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),component_id,new cljs.core.Keyword(null,"cached","cached",1437727905)], null),morph__$1);
} else {
}

if(cljs.core.truth_((function (){var and__16813__auto__ = new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(self__$1);
if(cljs.core.truth_(and__16813__auto__)){
return new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(self__$1);
} else {
return and__16813__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(self__$1)),new cljs.core.Keyword(null,"cached","cached",1437727905)], null),morph__$1);
} else {
}

return morph__$1;
} else {
return null;
}
});
transmorphic.core.wrap_component = (function transmorphic$core$wrap_component(component,render_context){
var map__31139 = render_context;
var map__31139__$1 = ((((!((map__31139 == null)))?((((map__31139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31139):map__31139);
var parent = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var owner = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var idx = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var state = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var root_QMARK_ = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"root?","root?",-2045639518));
var source_location = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"source-location","source-location",17618786));
var redefined_QMARK_ = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"redefined?","redefined?",1520256533));
var owner__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(component))?new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(component):owner);
var component_id = clojure.string.join.call(null,".",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(owner__$1)?[cljs.core.str("["),cljs.core.str(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(owner__$1)),cljs.core.str("]")].join(''):null),cljs.core.second.call(null,parent),(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(component));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return idx;
}
})()], null)));
var component__$1 = transmorphic.core.consolidate_component.call(null,state,cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"root?","root?",-2045639518),(function (){var and__16813__auto__ = owner__$1;
if(cljs.core.truth_(and__16813__auto__)){
return root_QMARK_;
} else {
return and__16813__auto__;
}
})(),new cljs.core.Keyword(null,"source-location","source-location",17618786),(cljs.core.truth_(root_QMARK_)?source_location:new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(component)),new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"owner","owner",-392611939),owner__$1,new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY], null)),redefined_QMARK_);
if(cljs.core.truth_(component__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846).cljs$core$IFn$_invoke$arity$1(component__$1))){
var root_morph = transmorphic.core.render_component_STAR_.call(null,component__$1,cljs.core.assoc.call(null,render_context,new cljs.core.Keyword(null,"owner","owner",-392611939),owner__$1));
return root_morph;
} else {
return new cljs.core.Keyword(null,"cached","cached",1437727905).cljs$core$IFn$_invoke$arity$1(component__$1);
}
} else {
return null;
}
});
transmorphic.core.wrap_morph = (function transmorphic$core$wrap_morph(morph,render_context){
var map__31143 = render_context;
var map__31143__$1 = ((((!((map__31143 == null)))?((((map__31143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31143):map__31143);
var parent = cljs.core.get.call(null,map__31143__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var owner = cljs.core.get.call(null,map__31143__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var idx = cljs.core.get.call(null,map__31143__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var state = cljs.core.get.call(null,map__31143__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var root_QMARK_ = cljs.core.get.call(null,map__31143__$1,new cljs.core.Keyword(null,"root?","root?",-2045639518));
var source_location = cljs.core.get.call(null,map__31143__$1,new cljs.core.Keyword(null,"source-location","source-location",17618786));
var redefined_QMARK_ = cljs.core.get.call(null,map__31143__$1,new cljs.core.Keyword(null,"redefined?","redefined?",1520256533));
var morph_id = clojure.string.join.call(null,".",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,parent),(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return idx;
}
})()], null)));
var morph__$1 = transmorphic.core.consolidate_morph.call(null,state,cljs.core.assoc.call(null,morph,new cljs.core.Keyword(null,"source-location","source-location",17618786),(cljs.core.truth_(root_QMARK_)?source_location:new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(morph)),new cljs.core.Keyword(null,"morph-id","morph-id",953478048),(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(morph);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return morph_id;
}
})(),new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"owner","owner",-392611939),(cljs.core.truth_(new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(morph))?new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(morph):owner),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.Keyword(null,"root?","root?",-2045639518),(function (){var or__16825__auto__ = root_QMARK_;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(morph);
}
})()),redefined_QMARK_);
return morph__$1;
});
transmorphic.core.update_reconciler = (function transmorphic$core$update_reconciler(state,ref_to_changed){
var map__31147 = cljs.core.get_in.call(null,state,ref_to_changed);
var map__31147__$1 = ((((!((map__31147 == null)))?((((map__31147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31147):map__31147);
var source_location = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"source-location","source-location",17618786));
var owner = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var txs = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var reconciler = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,state,owner)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_location,new cljs.core.Keyword(null,"txs","txs",2056038378)], null),cljs.core.merge,txs);
if(cljs.core.truth_(owner)){
return cljs.core.update_in.call(null,state,owner,cljs.core.assoc,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler);
} else {
return state;
}
});
/**
 * Ensures that the reference is
 * actually valid, replacing it
 * in case a redirect is referenced.
 */
transmorphic.core.ensure = (function transmorphic$core$ensure(state,ref){
var ref__$1 = ref;
while(true){
var temp__4425__auto__ = cljs.core.get_in.call(null,state,ref__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
var temp__4423__auto__ = new cljs.core.Keyword(null,"redirect","redirect",-1975673286).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__4423__auto__)){
var redirect = temp__4423__auto__;
var G__31149 = redirect;
ref__$1 = G__31149;
continue;
} else {
return ref__$1;
}
} else {
return null;
}
break;
}
});
/**
 * Inserts a redirect into the
 * identity lookup table at ref-a, that
 * immediately dispatches to the
 * identity ref-b
 */
transmorphic.core.become = (function transmorphic$core$become(state,ref_a,ref_b){
return cljs.core.assoc_in.call(null,state,ref_a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect","redirect",-1975673286),ref_b], null));
});
transmorphic.core.set_props = (function transmorphic$core$set_props(state,p__31150){
var map__31154 = p__31150;
var map__31154__$1 = ((((!((map__31154 == null)))?((((map__31154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31154):map__31154);
var ref = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var props__GT_values = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"props->values","props->values",166177204));
var ref__$1 = transmorphic.core.ensure.call(null,state,ref);
var x = cljs.core.get_in.call(null,state,ref__$1);
var prototype = new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(x);
var state__$1 = (function (){var G__31156 = state;
var G__31156__$1 = (cljs.core.truth_(prototype)?transmorphic$core$set_props.call(null,G__31156,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),prototype,new cljs.core.Keyword(null,"props->values","props->values",166177204),props__GT_values], null)):G__31156);
var G__31156__$2 = cljs.core.update_in.call(null,G__31156__$1,ref__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"props","props",453281727)], null),cljs.core.merge,props__GT_values)
;
var G__31156__$3 = cljs.core.update_in.call(null,G__31156__$2,ref__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727)], null),cljs.core.merge,props__GT_values)
;
return G__31156__$3;
})();
return transmorphic.core.update_reconciler.call(null,state__$1,ref__$1);
});
transmorphic.core.set_prop = (function transmorphic$core$set_prop(state,p__31157){
var map__31160 = p__31157;
var map__31160__$1 = ((((!((map__31160 == null)))?((((map__31160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31160):map__31160);
var ref = cljs.core.get.call(null,map__31160__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var prop = cljs.core.get.call(null,map__31160__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var value = cljs.core.get.call(null,map__31160__$1,new cljs.core.Keyword(null,"value","value",305978217));
return transmorphic.core.set_props.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"props->values","props->values",166177204),cljs.core.PersistentArrayMap.fromArray([prop,value], true, false)], null));
});
transmorphic.core.orphanize;

transmorphic.core.remove_component;
transmorphic.core.remove_morph = (function transmorphic$core$remove_morph(state,p__31163){
var map__31166 = p__31163;
var map__31166__$1 = ((((!((map__31166 == null)))?((((map__31166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31166):map__31166);
var ref = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var ref__$1 = transmorphic.core.ensure.call(null,state,ref);
var remove = ((function (ref__$1,map__31166,map__31166__$1,ref){
return (function (p1__31162_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__31162_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"removed","removed",609626430)], null),cljs.core.conj,ref__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"added","added",2057651688)], null),((function (ref__$1,map__31166,map__31166__$1,ref){
return (function (added){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (ref__$1,map__31166,map__31166__$1,ref){
return (function (x){
return cljs.core._EQ_.call(null,x,ref__$1);
});})(ref__$1,map__31166,map__31166__$1,ref))
,added));
});})(ref__$1,map__31166,map__31166__$1,ref))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770)], null),((function (ref__$1,map__31166,map__31166__$1,ref){
return (function (sub_refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (ref__$1,map__31166,map__31166__$1,ref){
return (function (x){
return cljs.core._EQ_.call(null,x,ref__$1);
});})(ref__$1,map__31166,map__31166__$1,ref))
,sub_refs));
});})(ref__$1,map__31166,map__31166__$1,ref))
);
});})(ref__$1,map__31166,map__31166__$1,ref))
;
var to_be_removed = cljs.core.get_in.call(null,state,ref__$1);
var prototype = new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(to_be_removed);
var state__$1 = (cljs.core.truth_((function (){var and__16813__auto__ = new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(to_be_removed);
if(cljs.core.truth_(and__16813__auto__)){
return new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(to_be_removed);
} else {
return and__16813__auto__;
}
})())?transmorphic.core.remove_component.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(to_be_removed)], null)):state);
var state__$2 = (cljs.core.truth_(prototype)?transmorphic$core$remove_morph.call(null,state__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),prototype], null)):state__$1);
return transmorphic.core.update_reconciler.call(null,cljs.core.update_in.call(null,transmorphic.core.orphanize.call(null,state__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null)),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(to_be_removed),remove),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(to_be_removed));
});
transmorphic.core.mark_path_dirty;
transmorphic.core.remove_component = (function transmorphic$core$remove_component(state,p__31168){
var map__31171 = p__31168;
var map__31171__$1 = ((((!((map__31171 == null)))?((((map__31171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31171):map__31171);
var ref = cljs.core.get.call(null,map__31171__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return transmorphic.core.mark_path_dirty.call(null,transmorphic.core.remove_morph.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null)),cljs.core.get_in.call(null,state,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,state,ref))));
});
transmorphic.core.add_morph = (function transmorphic$core$add_morph(state,p__31175){
var map__31178 = p__31175;
var map__31178__$1 = ((((!((map__31178 == null)))?((((map__31178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31178):map__31178);
var ref = cljs.core.get.call(null,map__31178__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var new_parent_ref = cljs.core.get.call(null,map__31178__$1,new cljs.core.Keyword(null,"new-parent-ref","new-parent-ref",-156075028));
var ref__$1 = transmorphic.core.ensure.call(null,state,ref);
var new_parent_ref__$1 = transmorphic.core.ensure.call(null,state,new_parent_ref);
var add = ((function (ref__$1,new_parent_ref__$1,map__31178,map__31178__$1,ref,new_parent_ref){
return (function (p1__31173_SHARP_){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__31173_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"added","added",2057651688)], null),cljs.core.conj,ref__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"removed","removed",609626430)], null),cljs.core.disj,ref__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770)], null),cljs.core.conj,ref__$1),new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),true);
});})(ref__$1,new_parent_ref__$1,map__31178,map__31178__$1,ref,new_parent_ref))
;
var change_parent = ((function (ref__$1,new_parent_ref__$1,add,map__31178,map__31178__$1,ref,new_parent_ref){
return (function (p1__31174_SHARP_){
return cljs.core.assoc.call(null,p1__31174_SHARP_,new cljs.core.Keyword(null,"parent","parent",-878878779),new_parent_ref__$1);
});})(ref__$1,new_parent_ref__$1,add,map__31178,map__31178__$1,ref,new_parent_ref))
;
var parent_prototype = new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,state,new_parent_ref__$1));
if(cljs.core.truth_(parent_prototype)){
return transmorphic$core$add_morph.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-parent-ref","new-parent-ref",-156075028),parent_prototype,new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null));
} else {
return transmorphic.core.update_reconciler.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new_parent_ref__$1,add),ref__$1,change_parent),new_parent_ref__$1);
}
});
transmorphic.core.add_component = (function transmorphic$core$add_component(state,p__31180){
var map__31183 = p__31180;
var map__31183__$1 = ((((!((map__31183 == null)))?((((map__31183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31183):map__31183);
var args = map__31183__$1;
var ref = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var new_parent_ref = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"new-parent-ref","new-parent-ref",-156075028));
return transmorphic.core.mark_path_dirty.call(null,transmorphic.core.add_morph.call(null,state,args),cljs.core.get_in.call(null,state,new_parent_ref));
});
transmorphic.core.orphanize = (function transmorphic$core$orphanize(state,p__31185){
var map__31188 = p__31185;
var map__31188__$1 = ((((!((map__31188 == null)))?((((map__31188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31188):map__31188);
var ref = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return cljs.core.update_in.call(null,state,ref,((function (map__31188,map__31188__$1,ref){
return (function (morph){
var morph__$1 = cljs.core.assoc.call(null,morph,new cljs.core.Keyword(null,"owner","owner",-392611939),null,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),null,new cljs.core.Keyword(null,"root?","root?",-2045639518),false);
var props = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.fn_QMARK_,cljs.core.val),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph__$1)));
return cljs.core.assoc.call(null,morph__$1,new cljs.core.Keyword(null,"props","props",453281727),props);
});})(map__31188,map__31188__$1,ref))
);
});
transmorphic.core.copy_morph = (function transmorphic$core$copy_morph(state,p__31190){
var map__31193 = p__31190;
var map__31193__$1 = ((((!((map__31193 == null)))?((((map__31193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31193):map__31193);
var ref = cljs.core.get.call(null,map__31193__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var new_morph_id = cljs.core.get.call(null,map__31193__$1,new cljs.core.Keyword(null,"new-morph-id","new-morph-id",1953522744));
var new_id = cljs.core.get.call(null,map__31193__$1,new cljs.core.Keyword(null,"new-id","new-id",638836512));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),new_morph_id], null),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.get_in.call(null,state,ref),new cljs.core.Keyword(null,"morph-id","morph-id",953478048),new_morph_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new_id));
});
transmorphic.core.copy_component = (function transmorphic$core$copy_component(state,p__31195){
var map__31198 = p__31195;
var map__31198__$1 = ((((!((map__31198 == null)))?((((map__31198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31198):map__31198);
var ref = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var new_component_id = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"new-component-id","new-component-id",1420600933));
var new_id = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"new-id","new-id",638836512));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),new_component_id], null),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.get_in.call(null,state,ref),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new_component_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new_id));
});
transmorphic.core.get_root;
transmorphic.core.migrate_changes = (function transmorphic$core$migrate_changes(state,p__31200){
var map__31205 = p__31200;
var map__31205__$1 = ((((!((map__31205 == null)))?((((map__31205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31205):map__31205);
var from = cljs.core.get.call(null,map__31205__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__31205__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from_morph = cljs.core.get_in.call(null,state,from);
var descendants = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (from_morph,map__31205,map__31205__$1,from,to){
return (function (submorph_ref){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.second.call(null,submorph_ref),cljs.core.re_pattern.call(null,[cljs.core.str("\\["),cljs.core.str(cljs.core.second.call(null,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(from_morph))),cljs.core.str("\\]")].join('')),""),cljs.core.re_pattern.call(null,(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(from_morph);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(from_morph);
}
})()),""),submorph_ref], null);
});})(from_morph,map__31205,map__31205__$1,from,to))
),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,state,from)));
var to_morph = cljs.core.get_in.call(null,state,to);
var to_morph_owner = cljs.core.get_in.call(null,state,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(to_morph));
var txs = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(from_morph),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"removed","removed",609626430)], null),((function (from_morph,descendants,to_morph,to_morph_owner,map__31205,map__31205__$1,from,to){
return (function (removed){
return cljs.core.set.call(null,cljs.core.map.call(null,((function (from_morph,descendants,to_morph,to_morph_owner,map__31205,map__31205__$1,from,to){
return (function (rm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rm),clojure.string.replace.call(null,cljs.core.second.call(null,rm),cljs.core.re_pattern.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(from_morph)),new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(to_morph))], null);
});})(from_morph,descendants,to_morph,to_morph_owner,map__31205,map__31205__$1,from,to))
,removed));
});})(from_morph,descendants,to_morph,to_morph_owner,map__31205,map__31205__$1,from,to))
);
var state__$1 = cljs.core.dissoc.call(null,transmorphic.core.mark_path_dirty.call(null,cljs.core.update_in.call(null,state,to,cljs.core.assoc,new cljs.core.Keyword(null,"txs","txs",2056038378),txs),to_morph),from);
var state__$2 = (cljs.core.truth_(transmorphic.core.component_QMARK_.call(null,from_morph))?transmorphic$core$migrate_changes.call(null,state__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),transmorphic.core.get_root.call(null,state__$1,from_morph),new cljs.core.Keyword(null,"to","to",192099007),transmorphic.core.get_root.call(null,state__$1,to_morph)], null)):state__$1);
return cljs.core.reduce.call(null,((function (from_morph,descendants,to_morph,to_morph_owner,txs,state__$1,state__$2,map__31205,map__31205__$1,from,to){
return (function (state__$3,p__31207){
var vec__31208 = p__31207;
var id_postfix = cljs.core.nth.call(null,vec__31208,(0),null);
var descendant = cljs.core.nth.call(null,vec__31208,(1),null);
var co_descendant = cljs.core.some.call(null,((function (vec__31208,id_postfix,descendant,from_morph,descendants,to_morph,to_morph_owner,txs,state__$1,state__$2,map__31205,map__31205__$1,from,to){
return (function (submorph_ref){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str(".*"),cljs.core.str(id_postfix)].join('')),cljs.core.second.call(null,submorph_ref)))){
return submorph_ref;
} else {
return null;
}
});})(vec__31208,id_postfix,descendant,from_morph,descendants,to_morph,to_morph_owner,txs,state__$1,state__$2,map__31205,map__31205__$1,from,to))
,new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(to_morph));
return transmorphic$core$migrate_changes.call(null,state__$3,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),descendant,new cljs.core.Keyword(null,"to","to",192099007),co_descendant], null));
});})(from_morph,descendants,to_morph,to_morph_owner,txs,state__$1,state__$2,map__31205,map__31205__$1,from,to))
,state__$2,descendants);
});
transmorphic.core.get_owners_morphs = (function transmorphic$core$get_owners_morphs(state,owner){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (morph_entry){
if(cljs.core._EQ_.call(null,owner,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,morph_entry)))){
return morph_entry;
} else {
return null;
}
})),cljs.core.map.call(null,cljs.core.key)),state.call(null,new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293)));
});
transmorphic.core.get_owners_components = (function transmorphic$core$get_owners_components(state,owner){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (morph_entry){
if(cljs.core._EQ_.call(null,owner,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,morph_entry)))){
return morph_entry;
} else {
return null;
}
})),cljs.core.map.call(null,cljs.core.key)),state.call(null,new cljs.core.Keyword("component","by-id","component/by-id",746697032)));
});
transmorphic.core.move_component = (function transmorphic$core$move_component(state,p__31209){
var map__31214 = p__31209;
var map__31214__$1 = ((((!((map__31214 == null)))?((((map__31214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31214):map__31214);
var ref = cljs.core.get.call(null,map__31214__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var new_parent_ref = cljs.core.get.call(null,map__31214__$1,new cljs.core.Keyword(null,"new-parent-ref","new-parent-ref",-156075028));
var ref__$1 = transmorphic.core.ensure.call(null,state,ref);
var old_parent_ref = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,state,ref__$1));
var new_parent_ref__$1 = transmorphic.core.ensure.call(null,state,new_parent_ref);
var owned_morphs = transmorphic.core.get_owners_morphs.call(null,state,ref__$1);
var owned_components = transmorphic.core.get_owners_components.call(null,state,ref__$1);
var root_morph = new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cached","cached",1437727905).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,state,ref__$1)));
var state__$1 = transmorphic.core.refresh_root.call(null,transmorphic.core.add_component.call(null,transmorphic.core.remove_component.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-parent-ref","new-parent-ref",-156075028),new_parent_ref__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null)));
var new_root_morph = cljs.core.some.call(null,((function (ref__$1,old_parent_ref,new_parent_ref__$1,owned_morphs,owned_components,root_morph,state__$1,map__31214,map__31214__$1,ref,new_parent_ref){
return (function (p__31216){
var vec__31217 = p__31216;
var morph_id = cljs.core.nth.call(null,vec__31217,(0),null);
var morph = cljs.core.nth.call(null,vec__31217,(1),null);
if(cljs.core.truth_((function (){var and__16813__auto__ = cljs.core._EQ_.call(null,ref__$1,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(morph));
if(and__16813__auto__){
var and__16813__auto____$1 = new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(morph);
if(cljs.core.truth_(and__16813__auto____$1)){
return !(cljs.core.contains_QMARK_.call(null,owned_morphs,morph_id));
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return morph_id;
} else {
return null;
}
});})(ref__$1,old_parent_ref,new_parent_ref__$1,owned_morphs,owned_components,root_morph,state__$1,map__31214,map__31214__$1,ref,new_parent_ref))
,state__$1.call(null,new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293)));
var state__$2 = (cljs.core.truth_(new_root_morph)?transmorphic.core.mark_path_dirty.call(null,transmorphic.core.migrate_changes.call(null,state__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),root_morph], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),new_root_morph], null)], null)),cljs.core.get_in.call(null,state__$1,new_parent_ref__$1)):state__$1);
var state__$3 = cljs.core.reduce.call(null,((function (ref__$1,old_parent_ref,new_parent_ref__$1,owned_morphs,owned_components,root_morph,state__$1,new_root_morph,state__$2,map__31214,map__31214__$1,ref,new_parent_ref){
return (function (state__$3,id){
return cljs.core.update_in.call(null,state__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293)], null),cljs.core.dissoc,id);
});})(ref__$1,old_parent_ref,new_parent_ref__$1,owned_morphs,owned_components,root_morph,state__$1,new_root_morph,state__$2,map__31214,map__31214__$1,ref,new_parent_ref))
,state__$2,owned_morphs);
var state__$4 = cljs.core.reduce.call(null,((function (ref__$1,old_parent_ref,new_parent_ref__$1,owned_morphs,owned_components,root_morph,state__$1,new_root_morph,state__$2,state__$3,map__31214,map__31214__$1,ref,new_parent_ref){
return (function (state__$4,id){
return cljs.core.update_in.call(null,state__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032)], null),cljs.core.dissoc,id);
});})(ref__$1,old_parent_ref,new_parent_ref__$1,owned_morphs,owned_components,root_morph,state__$1,new_root_morph,state__$2,state__$3,map__31214,map__31214__$1,ref,new_parent_ref))
,state__$3,owned_components);
return transmorphic.core.refresh_root.call(null,state__$4);
});
transmorphic.core.move_morph = (function transmorphic$core$move_morph(state,p__31218){
var map__31221 = p__31218;
var map__31221__$1 = ((((!((map__31221 == null)))?((((map__31221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31221):map__31221);
var ref = cljs.core.get.call(null,map__31221__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var new_parent_ref = cljs.core.get.call(null,map__31221__$1,new cljs.core.Keyword(null,"new-parent-ref","new-parent-ref",-156075028));
var ref__$1 = transmorphic.core.ensure.call(null,state,ref);
var new_parent_ref__$1 = transmorphic.core.ensure.call(null,state,new_parent_ref);
var state__$1 = transmorphic.core.remove_morph.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null));
var state__$2 = transmorphic.core.add_morph.call(null,state__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-parent-ref","new-parent-ref",-156075028),new_parent_ref__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null));
return state__$2;
});
transmorphic.core.set_root = (function transmorphic$core$set_root(universe,root_component,root_props){
var state = cljs.core.atom.call(null,universe);
var morph_tree = transmorphic.core.render_component_STAR_.call(null,root_component.call(null,root_props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
return cljs.core.assoc.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"morph-tree","morph-tree",1252939896),morph_tree,new cljs.core.Keyword(null,"root-component","root-component",-1807026475),root_component,new cljs.core.Keyword(null,"root-props","root-props",-1015460595),root_props);
});
transmorphic.core.update_namespace_BANG_ = (function transmorphic$core$update_namespace_BANG_(namespace_name,new_source,cb){
transmorphic.repl.update_ns_source_BANG_.call(null,namespace_name,new_source,cb);

return cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("namespace","by-name","namespace/by-name",-896052663),namespace_name], null),new_source);
});
transmorphic.core.update_abstraction_BANG_ = (function transmorphic$core$update_abstraction_BANG_(editor,component,p__31223){
var map__31226 = p__31223;
var map__31226__$1 = ((((!((map__31226 == null)))?((((map__31226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31226):map__31226);
var ns = cljs.core.get.call(null,map__31226__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__31226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var new_source = cljs.core.get.call(null,map__31226__$1,new cljs.core.Keyword(null,"new-source","new-source",-1734301279));
cljs.core.swap_BANG_.call(null,transmorphic.core.component_migration_queue,cljs.core.assoc,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(component),editor);

return transmorphic.core.update_namespace_BANG_.call(null,ns,new_source,((function (map__31226,map__31226__$1,ns,name,new_source){
return (function (_){
return cljs.core.prn.call(null,"Updated: ",ns,"/",name);
});})(map__31226,map__31226__$1,ns,name,new_source))
);
});
transmorphic.core.create_abstraction_BANG_ = (function transmorphic$core$create_abstraction_BANG_(editor,morph,p__31228){
var map__31231 = p__31228;
var map__31231__$1 = ((((!((map__31231 == null)))?((((map__31231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31231):map__31231);
var ns = cljs.core.get.call(null,map__31231__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__31231__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var new_source = cljs.core.get.call(null,map__31231__$1,new cljs.core.Keyword(null,"new-source","new-source",-1734301279));
cljs.core.swap_BANG_.call(null,transmorphic.core.morph_migration_queue,cljs.core.assoc,new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(morph),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor","editor",-989377770),editor,new cljs.core.Keyword(null,"new-component-name","new-component-name",-1381807584),[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join('')], null));

return transmorphic.core.update_namespace_BANG_.call(null,ns,new_source,((function (map__31231,map__31231__$1,ns,name,new_source){
return (function (_){
return cljs.core.prn.call(null,"Created: ",ns,"/",name);
});})(map__31231,map__31231__$1,ns,name,new_source))
);
});
transmorphic.core.update_component = (function transmorphic$core$update_component(state,p__31233){
var map__31236 = p__31233;
var map__31236__$1 = ((((!((map__31236 == null)))?((((map__31236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31236):map__31236);
var component_id = cljs.core.get.call(null,map__31236__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var new_local_state = cljs.core.get.call(null,map__31236__$1,new cljs.core.Keyword(null,"new-local-state","new-local-state",-622051641));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),component_id,new cljs.core.Keyword(null,"local-state","local-state",-282143524)], null),new_local_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),component_id,new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846)], null),true);
});
transmorphic.core.tx_queue = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * return the index of the supplied item, or nil
 */
transmorphic.core.index_of = (function transmorphic$core$index_of(v,item){
var len = cljs.core.count.call(null,v);
var i = (0);
while(true){
if((len <= i)){
return null;
} else {
if(cljs.core._EQ_.call(null,item,cljs.core.get.call(null,v,i))){
return i;
} else {
var G__31238 = (i + (1));
i = G__31238;
continue;

}
}
break;
}
});
/**
 * Retrieve the reference to the part of the global morph tree
 * that corresponds to the entity x. In case x is a component,
 * return the path to the morph that is the root of the component.
 * x has to be stored already!
 */
transmorphic.core.get_world_ref = (function transmorphic$core$get_world_ref(var_args){
var args31239 = [];
var len__17883__auto___31242 = arguments.length;
var i__17884__auto___31243 = (0);
while(true){
if((i__17884__auto___31243 < len__17883__auto___31242)){
args31239.push((arguments[i__17884__auto___31243]));

var G__31244 = (i__17884__auto___31243 + (1));
i__17884__auto___31243 = G__31244;
continue;
} else {
}
break;
}

var G__31241 = args31239.length;
switch (G__31241) {
case 1:
return transmorphic.core.get_world_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.core.get_world_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31239.length)].join('')));

}
});

transmorphic.core.get_world_ref.cljs$core$IFn$_invoke$arity$1 = (function (x){
return transmorphic.core.get_world_ref.call(null,cljs.core.deref.call(null,transmorphic.core.universe),x);
});

transmorphic.core.get_world_ref.cljs$core$IFn$_invoke$arity$2 = (function (state,x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(x))){
var temp__4425__auto__ = transmorphic.core.get_root_morph.call(null,state,x);
if(cljs.core.truth_(temp__4425__auto__)){
var rm = temp__4425__auto__;
return transmorphic.core.get_world_ref.call(null,state,rm);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"morph-tree","morph-tree",1252939896).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph-tree","morph-tree",1252939896)], null);
} else {
var parent = cljs.core.get_in.call(null,state,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(x));
var idx = transmorphic.core.index_of.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(parent),transmorphic.core.get_ref.call(null,state,x));
var rest = transmorphic.core.get_world_ref.call(null,state,parent);
if(cljs.core.truth_((function (){var and__16813__auto__ = rest;
if(cljs.core.truth_(and__16813__auto__)){
return idx;
} else {
return and__16813__auto__;
}
})())){
return cljs.core.concat.call(null,rest,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submorphs","submorphs",360747770),idx], null));
} else {
return null;
}
}
}
});

transmorphic.core.get_world_ref.cljs$lang$maxFixedArity = 2;
/**
 * Mark the owner chain leadin up the the entity x
 * as dirty, such that a rerendering is ensured.
 */
transmorphic.core.mark_path_dirty = (function transmorphic$core$mark_path_dirty(state,x){
var state__$1 = cljs.core.update_in.call(null,state,transmorphic.core.get_ref.call(null,state,x),cljs.core.assoc,new cljs.core.Keyword(null,"dirty?","dirty?",-2059845846),true);
var state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(x))?transmorphic$core$mark_path_dirty.call(null,state__$1,cljs.core.get_in.call(null,state__$1,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(x))):state__$1);
var state__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(x))?transmorphic$core$mark_path_dirty.call(null,state__$2,cljs.core.get_in.call(null,state__$2,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(x))):state__$2);
return state__$3;
});
transmorphic.core.get_ref = (function transmorphic$core$get_ref(var_args){
var args31246 = [];
var len__17883__auto___31249 = arguments.length;
var i__17884__auto___31250 = (0);
while(true){
if((i__17884__auto___31250 < len__17883__auto___31249)){
args31246.push((arguments[i__17884__auto___31250]));

var G__31251 = (i__17884__auto___31250 + (1));
i__17884__auto___31250 = G__31251;
continue;
} else {
}
break;
}

var G__31248 = args31246.length;
switch (G__31248) {
case 1:
return transmorphic.core.get_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transmorphic.core.get_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31246.length)].join('')));

}
});

transmorphic.core.get_ref.cljs$core$IFn$_invoke$arity$1 = (function (x){
return transmorphic.core.get_ref.call(null,cljs.core.deref.call(null,transmorphic.core.universe),x);
});

transmorphic.core.get_ref.cljs$core$IFn$_invoke$arity$2 = (function (state,x){
return transmorphic.core.ensure.call(null,state,(cljs.core.truth_(new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(x)], null):(cljs.core.truth_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(x)], null):(function(){throw [cljs.core.str("Can not transform "),cljs.core.str(x)].join('')})()
)));
});

transmorphic.core.get_ref.cljs$lang$maxFixedArity = 2;
transmorphic.core.update_component_BANG_ = (function transmorphic$core$update_component_BANG_(component_id,new_state){
return cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.comp.call(null,transmorphic.core.refresh_root,(function (p1__31253_SHARP_){
return transmorphic.core.mark_path_dirty.call(null,p1__31253_SHARP_,cljs.core.get_in.call(null,p1__31253_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),component_id], null)));
}),transmorphic.core.update_component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"new-local-state","new-local-state",-622051641),new_state], null));
});
transmorphic.core.remove_component_BANG_ = (function transmorphic$core$remove_component_BANG_(component_id){
return om.core.transact_BANG_.call(null,transmorphic.core.universe,new cljs.core.Keyword("component","by-id","component/by-id",746697032),(function (p1__31254_SHARP_){
return cljs.core.dissoc.call(null,p1__31254_SHARP_,component_id);
}));
});
transmorphic.core.rerender_BANG_ = (function transmorphic$core$rerender_BANG_(self,val){
var id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(self);
var state = cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),id,new cljs.core.Keyword(null,"local-state","local-state",-282143524)], null));
return transmorphic.core.update_component_BANG_.call(null,id,((cljs.core.fn_QMARK_.call(null,val))?val.call(null,state):cljs.core.merge.call(null,state,val)));
});
transmorphic.core.set_prop_BANG_ = (function transmorphic$core$set_prop_BANG_(x,prop_name,prop_value){
cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.comp.call(null,transmorphic.core.refresh_root,(function (p1__31255_SHARP_){
return transmorphic.core.mark_path_dirty.call(null,p1__31255_SHARP_,cljs.core.get_in.call(null,p1__31255_SHARP_,transmorphic.core.get_ref.call(null,p1__31255_SHARP_,x)));
}),transmorphic.core.set_prop),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),transmorphic.core.get_ref.call(null,x),new cljs.core.Keyword(null,"prop","prop",-515168332),prop_name,new cljs.core.Keyword(null,"value","value",305978217),prop_value], null));

return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),transmorphic.core.get_ref.call(null,x));
});
transmorphic.core.set_props_BANG_ = (function transmorphic$core$set_props_BANG_(x,props__GT_values){
cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.comp.call(null,transmorphic.core.refresh_root,(function (p1__31256_SHARP_){
return transmorphic.core.mark_path_dirty.call(null,p1__31256_SHARP_,cljs.core.get_in.call(null,p1__31256_SHARP_,transmorphic.core.get_ref.call(null,p1__31256_SHARP_,x)));
}),transmorphic.core.set_props),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),transmorphic.core.get_ref.call(null,x),new cljs.core.Keyword(null,"props->values","props->values",166177204),props__GT_values], null));

return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),transmorphic.core.get_ref.call(null,x));
});
transmorphic.core.refresh_scene_BANG_ = (function transmorphic$core$refresh_scene_BANG_(var_args){
var args__17890__auto__ = [];
var len__17883__auto___31258 = arguments.length;
var i__17884__auto___31259 = (0);
while(true){
if((i__17884__auto___31259 < len__17883__auto___31258)){
args__17890__auto__.push((arguments[i__17884__auto___31259]));

var G__31260 = (i__17884__auto___31259 + (1));
i__17884__auto___31259 = G__31260;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((0) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((0)),(0))):null);
return transmorphic.core.refresh_scene_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__17891__auto__);
});

transmorphic.core.refresh_scene_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (skip){
cljs.core.swap_BANG_.call(null,transmorphic.core.universe,transmorphic.core.refresh_root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip","skip",602715391),cljs.core.set.call(null,skip)], null));

return true;
});

transmorphic.core.refresh_scene_BANG_.cljs$lang$maxFixedArity = (0);

transmorphic.core.refresh_scene_BANG_.cljs$lang$applyTo = (function (seq31257){
return transmorphic.core.refresh_scene_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31257));
});
transmorphic.core.move_morph_BANG_ = (function transmorphic$core$move_morph_BANG_(x,new_parent){
cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.comp.call(null,transmorphic.core.refresh_root,(function (p1__31261_SHARP_){
return transmorphic.core.mark_path_dirty.call(null,p1__31261_SHARP_,cljs.core.get_in.call(null,p1__31261_SHARP_,transmorphic.core.get_ref.call(null,p1__31261_SHARP_,new_parent)));
}),(function (p1__31262_SHARP_){
return transmorphic.core.mark_path_dirty.call(null,p1__31262_SHARP_,cljs.core.get_in.call(null,p1__31262_SHARP_,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(x)));
}),transmorphic.core.move_morph),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),transmorphic.core.get_ref.call(null,x),new cljs.core.Keyword(null,"new-parent-ref","new-parent-ref",-156075028),transmorphic.core.get_ref.call(null,new_parent)], null));

return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),transmorphic.core.get_ref.call(null,x));
});
transmorphic.core.orphanize_BANG_ = (function transmorphic$core$orphanize_BANG_(morph){
cljs.core.swap_BANG_.call(null,transmorphic.core.universe,transmorphic.core.orphanize,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),transmorphic.core.get_ref.call(null,morph)], null));

return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),transmorphic.core.get_ref.call(null,morph));
});
transmorphic.core.remove_morph_BANG_ = (function transmorphic$core$remove_morph_BANG_(x){
return cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.comp.call(null,transmorphic.core.refresh_root,(function (p1__31263_SHARP_){
return transmorphic.core.mark_path_dirty.call(null,p1__31263_SHARP_,cljs.core.get_in.call(null,p1__31263_SHARP_,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(x)));
}),transmorphic.core.remove_morph),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),transmorphic.core.get_ref.call(null,x)], null));
});
transmorphic.core.get_cached = (function transmorphic$core$get_cached(state,component){
return new cljs.core.Keyword(null,"cached","cached",1437727905).cljs$core$IFn$_invoke$arity$1(component);
});
/**
 * Find the root morph of a certain component.
 */
transmorphic.core.get_root_morph = (function transmorphic$core$get_root_morph(state,component){
return cljs.core.some.call(null,(function (p__31266){
var vec__31267 = p__31266;
var _ = cljs.core.nth.call(null,vec__31267,(0),null);
var morph = cljs.core.nth.call(null,vec__31267,(1),null);
if(cljs.core.truth_((function (){var and__16813__auto__ = new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(morph);
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core._EQ_.call(null,transmorphic.core.get_ref.call(null,component),new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(morph));
} else {
return and__16813__auto__;
}
})())){
return transmorphic.core.get_ref.call(null,state,morph);
} else {
return null;
}
}),new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Some component may render as their root
 * an actual component.
 */
transmorphic.core.get_root_component = (function transmorphic$core$get_root_component(state,component){
return cljs.core.some.call(null,(function (p__31270){
var vec__31271 = p__31270;
var _ = cljs.core.nth.call(null,vec__31271,(0),null);
var c = cljs.core.nth.call(null,vec__31271,(1),null);
if(cljs.core.truth_((function (){var and__16813__auto__ = new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(and__16813__auto__)){
return cljs.core._EQ_.call(null,transmorphic.core.get_ref.call(null,component),new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(c));
} else {
return and__16813__auto__;
}
})())){
return transmorphic.core.get_ref.call(null,state,c);
} else {
return null;
}
}),new cljs.core.Keyword("component","by-id","component/by-id",746697032).cljs$core$IFn$_invoke$arity$1(state));
});
transmorphic.core.get_root = (function transmorphic$core$get_root(state,c){
var or__16825__auto__ = transmorphic.core.get_root_morph.call(null,state,c);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return transmorphic.core.get_root_component.call(null,state,c);
}
});
transmorphic.core.add_component_BANG_ = (function transmorphic$core$add_component_BANG_(x,component){
var state = cljs.core.deref.call(null,transmorphic.core.universe);
var uuid = [cljs.core.str(cljs.core.second.call(null,transmorphic.core.get_ref.call(null,state,x))),cljs.core.str("."),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(component)))].join('');
var link = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),uuid], null);
var parent_ref = transmorphic.core.get_ref.call(null,state,x);
var new_component = cljs.core.assoc.call(null,component,new cljs.core.Keyword(null,"component-id","component-id",1551113783),uuid);
var state__$1 = cljs.core.assoc_in.call(null,state,link,new_component);
var state__$2 = transmorphic.core.add_morph.call(null,state__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),link,new cljs.core.Keyword(null,"new-parent-ref","new-parent-ref",-156075028),parent_ref], null));
var state__$3 = transmorphic.core.refresh_root.call(null,state__$2);
cljs.core.reset_BANG_.call(null,transmorphic.core.universe,state__$3);

return transmorphic.core.get_root.call(null,state__$3,new_component);
});
transmorphic.core.move_component_BANG_ = (function transmorphic$core$move_component_BANG_(component,new_parent){
return cljs.core.swap_BANG_.call(null,transmorphic.core.universe,transmorphic.core.move_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),transmorphic.core.get_ref.call(null,component),new cljs.core.Keyword(null,"new-parent-ref","new-parent-ref",-156075028),transmorphic.core.get_ref.call(null,new_parent)], null));
});
transmorphic.core.uuid_from = (function transmorphic$core$uuid_from(morph_id){
var splitted_morph_id = clojure.string.split.call(null,morph_id,/\./);
var id_prop = [cljs.core.str(cljs.core.last.call(null,splitted_morph_id)),cljs.core.str("-copy")].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),clojure.string.join.call(null,".",cljs.core.concat.call(null,cljs.core.butlast.call(null,splitted_morph_id),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_prop))),new cljs.core.Keyword(null,"id","id",-1388402092),id_prop], null);
});
transmorphic.core.copy_morph_BANG_ = (function transmorphic$core$copy_morph_BANG_(morph){
var morph_id = new cljs.core.Keyword(null,"morph-id","morph-id",953478048).cljs$core$IFn$_invoke$arity$1(morph);
var map__31274 = transmorphic.core.uuid_from.call(null,morph_id);
var map__31274__$1 = ((((!((map__31274 == null)))?((((map__31274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31274):map__31274);
var uuid = cljs.core.get.call(null,map__31274__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var id = cljs.core.get.call(null,map__31274__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.swap_BANG_.call(null,transmorphic.core.universe,transmorphic.core.copy_morph,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),transmorphic.core.get_ref.call(null,morph),new cljs.core.Keyword(null,"new-morph-id","new-morph-id",1953522744),uuid,new cljs.core.Keyword(null,"new-id","new-id",638836512),id], null));

return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),uuid], null));
});
transmorphic.core.toggle_reconciler_BANG_ = (function transmorphic$core$toggle_reconciler_BANG_(component){
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(component);
return cljs.core.swap_BANG_.call(null,transmorphic.core.universe,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","by-id","component/by-id",746697032),component_id,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"active?","active?",459499776)], null),cljs.core.not);
});
transmorphic.core.reload_hook = (function transmorphic$core$reload_hook(args){
var seq__31292_31308 = cljs.core.seq.call(null,cljs.core.deref.call(null,transmorphic.core.morph_migration_queue));
var chunk__31293_31309 = null;
var count__31294_31310 = (0);
var i__31295_31311 = (0);
while(true){
if((i__31295_31311 < count__31294_31310)){
var vec__31296_31312 = cljs.core._nth.call(null,chunk__31293_31309,i__31295_31311);
var morph_id_31313 = cljs.core.nth.call(null,vec__31296_31312,(0),null);
var map__31297_31314 = cljs.core.nth.call(null,vec__31296_31312,(1),null);
var map__31297_31315__$1 = ((((!((map__31297_31314 == null)))?((((map__31297_31314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31297_31314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31297_31314):map__31297_31314);
var editor_31316 = cljs.core.get.call(null,map__31297_31315__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var new_component_name_31317 = cljs.core.get.call(null,map__31297_31315__$1,new cljs.core.Keyword(null,"new-component-name","new-component-name",-1381807584));
var morph_31318 = cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),morph_id_31313], null));
var morph_31319__$1 = (function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(morph_31318);
if(cljs.core.truth_(temp__4423__auto__)){
var p_ref = temp__4423__auto__;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),p_ref);
} else {
return morph_31318;
}
})();
var comp_fn_31320 = transmorphic.repl.morph_eval_str.call(null,new_component_name_31317);
var component_31321 = comp_fn_31320.call(null,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph_31319__$1));
var __31322 = transmorphic.core.remove_morph_BANG_.call(null,morph_31319__$1);
var root_morph_31323 = transmorphic.core.add_component_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(morph_31319__$1)),component_31321);
transmorphic.core.rerender_BANG_.call(null,editor_31316,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-target","current-target",34322910),cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),root_morph_31323)], null));

cljs.core.prn.call(null,"Morph -> Component ",morph_id_31313,root_morph_31323);

transmorphic.core.rerender_BANG_.call(null,editor_31316,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compiling?","compiling?",-383905868),false,new cljs.core.Keyword(null,"current-target","current-target",34322910),cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),root_morph_31323)], null));

var G__31324 = seq__31292_31308;
var G__31325 = chunk__31293_31309;
var G__31326 = count__31294_31310;
var G__31327 = (i__31295_31311 + (1));
seq__31292_31308 = G__31324;
chunk__31293_31309 = G__31325;
count__31294_31310 = G__31326;
i__31295_31311 = G__31327;
continue;
} else {
var temp__4425__auto___31328 = cljs.core.seq.call(null,seq__31292_31308);
if(temp__4425__auto___31328){
var seq__31292_31329__$1 = temp__4425__auto___31328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31292_31329__$1)){
var c__17628__auto___31330 = cljs.core.chunk_first.call(null,seq__31292_31329__$1);
var G__31331 = cljs.core.chunk_rest.call(null,seq__31292_31329__$1);
var G__31332 = c__17628__auto___31330;
var G__31333 = cljs.core.count.call(null,c__17628__auto___31330);
var G__31334 = (0);
seq__31292_31308 = G__31331;
chunk__31293_31309 = G__31332;
count__31294_31310 = G__31333;
i__31295_31311 = G__31334;
continue;
} else {
var vec__31299_31335 = cljs.core.first.call(null,seq__31292_31329__$1);
var morph_id_31336 = cljs.core.nth.call(null,vec__31299_31335,(0),null);
var map__31300_31337 = cljs.core.nth.call(null,vec__31299_31335,(1),null);
var map__31300_31338__$1 = ((((!((map__31300_31337 == null)))?((((map__31300_31337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31300_31337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31300_31337):map__31300_31337);
var editor_31339 = cljs.core.get.call(null,map__31300_31338__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var new_component_name_31340 = cljs.core.get.call(null,map__31300_31338__$1,new cljs.core.Keyword(null,"new-component-name","new-component-name",-1381807584));
var morph_31341 = cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),morph_id_31336], null));
var morph_31342__$1 = (function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(morph_31341);
if(cljs.core.truth_(temp__4423__auto__)){
var p_ref = temp__4423__auto__;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),p_ref);
} else {
return morph_31341;
}
})();
var comp_fn_31343 = transmorphic.repl.morph_eval_str.call(null,new_component_name_31340);
var component_31344 = comp_fn_31343.call(null,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(morph_31342__$1));
var __31345 = transmorphic.core.remove_morph_BANG_.call(null,morph_31342__$1);
var root_morph_31346 = transmorphic.core.add_component_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(morph_31342__$1)),component_31344);
transmorphic.core.rerender_BANG_.call(null,editor_31339,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-target","current-target",34322910),cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),root_morph_31346)], null));

cljs.core.prn.call(null,"Morph -> Component ",morph_id_31336,root_morph_31346);

transmorphic.core.rerender_BANG_.call(null,editor_31339,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compiling?","compiling?",-383905868),false,new cljs.core.Keyword(null,"current-target","current-target",34322910),cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),root_morph_31346)], null));

var G__31347 = cljs.core.next.call(null,seq__31292_31329__$1);
var G__31348 = null;
var G__31349 = (0);
var G__31350 = (0);
seq__31292_31308 = G__31347;
chunk__31293_31309 = G__31348;
count__31294_31310 = G__31349;
i__31295_31311 = G__31350;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,transmorphic.core.morph_migration_queue,cljs.core.PersistentArrayMap.EMPTY);

var seq__31302_31351 = cljs.core.seq.call(null,cljs.core.deref.call(null,transmorphic.core.component_migration_queue));
var chunk__31303_31352 = null;
var count__31304_31353 = (0);
var i__31305_31354 = (0);
while(true){
if((i__31305_31354 < count__31304_31353)){
var vec__31306_31355 = cljs.core._nth.call(null,chunk__31303_31352,i__31305_31354);
var component_31356 = cljs.core.nth.call(null,vec__31306_31355,(0),null);
var editor_component_31357 = cljs.core.nth.call(null,vec__31306_31355,(1),null);
transmorphic.core.rerender_BANG_.call(null,editor_component_31357,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compiling?","compiling?",-383905868),false], null));

cljs.core.prn.call(null,"Wake up editor ",component_31356);

var G__31358 = seq__31302_31351;
var G__31359 = chunk__31303_31352;
var G__31360 = count__31304_31353;
var G__31361 = (i__31305_31354 + (1));
seq__31302_31351 = G__31358;
chunk__31303_31352 = G__31359;
count__31304_31353 = G__31360;
i__31305_31354 = G__31361;
continue;
} else {
var temp__4425__auto___31362 = cljs.core.seq.call(null,seq__31302_31351);
if(temp__4425__auto___31362){
var seq__31302_31363__$1 = temp__4425__auto___31362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31302_31363__$1)){
var c__17628__auto___31364 = cljs.core.chunk_first.call(null,seq__31302_31363__$1);
var G__31365 = cljs.core.chunk_rest.call(null,seq__31302_31363__$1);
var G__31366 = c__17628__auto___31364;
var G__31367 = cljs.core.count.call(null,c__17628__auto___31364);
var G__31368 = (0);
seq__31302_31351 = G__31365;
chunk__31303_31352 = G__31366;
count__31304_31353 = G__31367;
i__31305_31354 = G__31368;
continue;
} else {
var vec__31307_31369 = cljs.core.first.call(null,seq__31302_31363__$1);
var component_31370 = cljs.core.nth.call(null,vec__31307_31369,(0),null);
var editor_component_31371 = cljs.core.nth.call(null,vec__31307_31369,(1),null);
transmorphic.core.rerender_BANG_.call(null,editor_component_31371,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compiling?","compiling?",-383905868),false], null));

cljs.core.prn.call(null,"Wake up editor ",component_31370);

var G__31372 = cljs.core.next.call(null,seq__31302_31363__$1);
var G__31373 = null;
var G__31374 = (0);
var G__31375 = (0);
seq__31302_31351 = G__31372;
chunk__31303_31352 = G__31373;
count__31304_31353 = G__31374;
i__31305_31354 = G__31375;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,transmorphic.core.component_migration_queue,cljs.core.PersistentArrayMap.EMPTY);
});
transmorphic.core.current_namespace = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
transmorphic.core.set_root_BANG_ = (function transmorphic$core$set_root_BANG_(app_state,component,props,target){
om.core.root.call(null,(function (data,_){
if(typeof transmorphic.core.t_transmorphic$core31379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
transmorphic.core.t_transmorphic$core31379 = (function (set_root_BANG_,app_state,component,props,target,data,_,meta31380){
this.set_root_BANG_ = set_root_BANG_;
this.app_state = app_state;
this.component = component;
this.props = props;
this.target = target;
this.data = data;
this._ = _;
this.meta31380 = meta31380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
transmorphic.core.t_transmorphic$core31379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31381,meta31380__$1){
var self__ = this;
var _31381__$1 = this;
return (new transmorphic.core.t_transmorphic$core31379(self__.set_root_BANG_,self__.app_state,self__.component,self__.props,self__.target,self__.data,self__._,meta31380__$1));
});

transmorphic.core.t_transmorphic$core31379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31381){
var self__ = this;
var _31381__$1 = this;
return self__.meta31380;
});

transmorphic.core.t_transmorphic$core31379.prototype.om$core$IRender$ = true;

transmorphic.core.t_transmorphic$core31379.prototype.om$core$IRender$render$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
var temp__4423__auto__ = cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"morph-tree","morph-tree",1252939896).cljs$core$IFn$_invoke$arity$1(self__.data));
if(cljs.core.truth_(temp__4423__auto__)){
var tree = temp__4423__auto__;
return om.core.build.call(null,transmorphic.core.render_morph,tree,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"morph-id","morph-id",953478048)], null));
} else {
return React.DOM.div({"id": "dummy-root"});
}
});

transmorphic.core.t_transmorphic$core31379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"set-root!","set-root!",-1594946360,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"target","target",1893533248,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta31380","meta31380",-62968425,null)], null);
});

transmorphic.core.t_transmorphic$core31379.cljs$lang$type = true;

transmorphic.core.t_transmorphic$core31379.cljs$lang$ctorStr = "transmorphic.core/t_transmorphic$core31379";

transmorphic.core.t_transmorphic$core31379.cljs$lang$ctorPrWriter = (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"transmorphic.core/t_transmorphic$core31379");
});

transmorphic.core.__GT_t_transmorphic$core31379 = (function transmorphic$core$set_root_BANG__$___GT_t_transmorphic$core31379(set_root_BANG___$1,app_state__$1,component__$1,props__$1,target__$1,data__$1,___$1,meta31380){
return (new transmorphic.core.t_transmorphic$core31379(set_root_BANG___$1,app_state__$1,component__$1,props__$1,target__$1,data__$1,___$1,meta31380));
});

}

return (new transmorphic.core.t_transmorphic$core31379(transmorphic$core$set_root_BANG_,app_state,component,props,target,data,_,cljs.core.PersistentArrayMap.EMPTY));
}),app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));

return cljs.core.swap_BANG_.call(null,app_state,transmorphic.core.set_root,component,props);
});
transmorphic.core.universe = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"morph-tree","morph-tree",1252939896),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("namespace","by-name","namespace/by-name",-896052663),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("abstraction","by-name","abstraction/by-name",1165036254),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("morph","by-id","morph/by-id",-2107204293),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("component","by-id","component/by-id",746697032),cljs.core.PersistentArrayMap.EMPTY], null));

//# sourceMappingURL=core.js.map
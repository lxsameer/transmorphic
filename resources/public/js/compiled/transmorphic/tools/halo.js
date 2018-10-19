// Compiled by ClojureScript 1.7.170 {}
goog.provide('transmorphic.tools.halo');
goog.require('cljs.core');
goog.require('transmorphic.morph');
goog.require('transmorphic.core');
goog.require('transmorphic.tools.function_inspector');
goog.require('transmorphic.tools.hand');
goog.require('transmorphic.event');
goog.require('transmorphic.utils');
transmorphic.tools.halo.resize_button;

transmorphic.tools.halo.inspect_button;

transmorphic.tools.halo.close_button;

transmorphic.tools.halo.grab_button;

transmorphic.tools.halo.drag_button;

transmorphic.tools.halo.edit_button;

transmorphic.tools.halo.copy_button;

transmorphic.tools.halo.styling_button;

transmorphic.tools.halo.rotate_button;

transmorphic.tools.halo.name_tag;

transmorphic.tools.halo.viewer;

transmorphic.tools.halo.pivot_cursor;

transmorphic.tools.halo.scaling_button;

transmorphic.tools.halo.style_editor;
transmorphic.tools.halo.abs = (function transmorphic$tools$halo$abs(v){
return Math.abs(v);
});
transmorphic.tools.halo.rotate = (function transmorphic$tools$halo$rotate(v,angle){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(v.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) * Math.cos(angle)),new cljs.core.Keyword(null,"y","y",-1757859776),(v.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) * Math.cos(angle))], null);
});
transmorphic.tools.halo.dot = (function transmorphic$tools$halo$dot(v,u){
var map__32762 = v;
var map__32762__$1 = ((((!((map__32762 == null)))?((((map__32762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32762):map__32762);
var vx = cljs.core.get.call(null,map__32762__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var vy = cljs.core.get.call(null,map__32762__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__32763 = u;
var map__32763__$1 = ((((!((map__32763 == null)))?((((map__32763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32763):map__32763);
var ux = cljs.core.get.call(null,map__32763__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var uy = cljs.core.get.call(null,map__32763__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ux * vx) + (uy * vy));
});
transmorphic.tools.halo.norm = (function transmorphic$tools$halo$norm(v){
var map__32768 = v;
var map__32768__$1 = ((((!((map__32768 == null)))?((((map__32768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32768):map__32768);
var x = cljs.core.get.call(null,map__32768__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__32768__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var l = Math.sqrt(transmorphic.tools.halo.dot.call(null,v,v));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x / l),new cljs.core.Keyword(null,"y","y",-1757859776),(y / l)], null);
});
transmorphic.tools.halo.cross = (function transmorphic$tools$halo$cross(v,u){
var map__32774 = v;
var map__32774__$1 = ((((!((map__32774 == null)))?((((map__32774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32774):map__32774);
var vx = cljs.core.get.call(null,map__32774__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var vy = cljs.core.get.call(null,map__32774__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__32775 = u;
var map__32775__$1 = ((((!((map__32775 == null)))?((((map__32775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32775):map__32775);
var ux = cljs.core.get.call(null,map__32775__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var uy = cljs.core.get.call(null,map__32775__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((ux * vy) - (uy * vx));
});
transmorphic.tools.halo.compute_bounding_box = (function transmorphic$tools$halo$compute_bounding_box(p__32778){
var map__32791 = p__32778;
var map__32791__$1 = ((((!((map__32791 == null)))?((((map__32791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32791):map__32791);
var extent = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"extent","extent",-186399820));
var scale = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var rotation = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var pivot_point = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573));
var map__32793 = extent;
var map__32793__$1 = ((((!((map__32793 == null)))?((((map__32793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32793):map__32793);
var x = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__32794 = pivot_point;
var map__32794__$1 = ((((!((map__32794 == null)))?((((map__32794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32794):map__32794);
var px = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var s = (function (){var or__16825__auto__ = scale;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (1);
}
})();
var t = (- (function (){var or__16825__auto__ = rotation;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (0);
}
})());
var bounds = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(s * y)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(s * x),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(s * x),new cljs.core.Keyword(null,"y","y",-1757859776),(s * y)], null)], null);
var xs = cljs.core.map.call(null,((function (map__32793,map__32793__$1,x,y,map__32794,map__32794__$1,px,py,s,t,bounds,map__32791,map__32791__$1,extent,scale,rotation,pivot_point){
return (function (p__32797){
var map__32798 = p__32797;
var map__32798__$1 = ((((!((map__32798 == null)))?((((map__32798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32798):map__32798);
var x__$1 = cljs.core.get.call(null,map__32798__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__32798__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px + ((x__$1 - px) * Math.cos(t))) + ((y__$1 - py) * Math.sin(t)));
});})(map__32793,map__32793__$1,x,y,map__32794,map__32794__$1,px,py,s,t,bounds,map__32791,map__32791__$1,extent,scale,rotation,pivot_point))
,bounds);
var ys = cljs.core.map.call(null,((function (map__32793,map__32793__$1,x,y,map__32794,map__32794__$1,px,py,s,t,bounds,xs,map__32791,map__32791__$1,extent,scale,rotation,pivot_point){
return (function (p__32800){
var map__32801 = p__32800;
var map__32801__$1 = ((((!((map__32801 == null)))?((((map__32801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32801):map__32801);
var x__$1 = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((py + (- ((x__$1 - px) * Math.sin(t)))) + ((y__$1 - py) * Math.cos(t)));
});})(map__32793,map__32793__$1,x,y,map__32794,map__32794__$1,px,py,s,t,bounds,xs,map__32791,map__32791__$1,extent,scale,rotation,pivot_point))
,bounds);
var min_x = cljs.core.apply.call(null,cljs.core.min,xs);
var max_x = cljs.core.apply.call(null,cljs.core.max,xs);
var min_y = cljs.core.apply.call(null,cljs.core.min,ys);
var max_y = cljs.core.apply.call(null,cljs.core.max,ys);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),min_x,new cljs.core.Keyword(null,"y","y",-1757859776),min_y], null),new cljs.core.Keyword(null,"ext","ext",-996964541),(function (){var x__$1 = (Math.abs(min_x) + Math.abs(max_x));
var y__$1 = (Math.abs(min_y) + Math.abs(max_y));
var x__$2 = ((((50) > x__$1))?(50):x__$1);
var y__$2 = ((((50) > y__$1))?(50):y__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x__$2,new cljs.core.Keyword(null,"y","y",-1757859776),y__$2], null);
})()], null);
});
transmorphic.tools.halo.transformed_props = (function transmorphic$tools$halo$transformed_props(model){
var morph = transmorphic.morph.$morph.call(null,model.call(null,new cljs.core.Keyword(null,"target-id","target-id",-1438159155)));
var props = morph.call(null,new cljs.core.Keyword(null,"props","props",453281727));
var abstraction_root_QMARK_ = (transmorphic.morph.Root instanceof morph);
return cljs.core.assoc.call(null,(cljs.core.truth_(model.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764)))?cljs.core.merge.call(null,props,model.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764))):props),new cljs.core.Keyword(null,"offset","offset",296498311),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),model.call(null,new cljs.core.Keyword(null,"type","type",1174270348))))?(function (){var map__32805 = props.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820));
var map__32805__$1 = ((((!((map__32805 == null)))?((((map__32805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32805):map__32805);
var x = cljs.core.get.call(null,map__32805__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__32805__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y / (2))], null);
})():new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Keyword(null,"abstraction-root?","abstraction-root?",843977535),abstraction_root_QMARK_);
});
transmorphic.tools.halo.manage_meta = (function transmorphic$tools$halo$manage_meta(p__32807){
var map__32810 = p__32807;
var map__32810__$1 = ((((!((map__32810 == null)))?((((map__32810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32810):map__32810);
var target = cljs.core.get.call(null,map__32810__$1,new cljs.core.Keyword(null,"target","target",253001721));
return ((function (map__32810,map__32810__$1,target){
return (function (e){
e.stopPropagation();

if(cljs.core.truth_(e.altKey)){
var promoted_meta = (cljs.core.truth_(new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(target))?transmorphic.morph.$owner.call(null,target):transmorphic.morph.$parent.call(null,target));
return cljs.core.reset_BANG_.call(null,transmorphic.event.meta_focus,(function (){var or__16825__auto__ = promoted_meta;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return transmorphic.morph.morph_under_me.call(null,transmorphic.morph.$morph.call(null,transmorphic.tools.hand.local_hand_name.call(null)));
}
})());
} else {
return cljs.core.reset_BANG_.call(null,transmorphic.event.meta_focus,null);
}
});
;})(map__32810,map__32810__$1,target))
});
transmorphic.tools.halo.halo;


/**
* @constructor
 * @implements {transmorphic.core.IInitialize}
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.halo_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.halo_STAR_.prototype.transmorphic$core$IInitialize$ = true;

transmorphic.tools.halo.halo_STAR_.prototype.transmorphic$core$IInitialize$initialize$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877),null,new cljs.core.Keyword(null,"scaling-mode","scaling-mode",331960082),false,new cljs.core.Keyword(null,"copy-handle","copy-handle",1833215445),null], null);
});

transmorphic.tools.halo.halo_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.halo_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32817,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32819 = (((k32817 instanceof cljs.core.Keyword))?k32817.fqn:null);
switch (G__32819) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32817,else__17442__auto__);

}
});

transmorphic.tools.halo.halo_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.halo_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (p__32820,props__$1,_,render_ctx__30602__auto__){
var self__ = this;
var map__32821 = p__32820;
var map__32821__$1 = ((((!((map__32821 == null)))?((((map__32821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32821):map__32821);
var self = map__32821__$1;
var local_state__$1 = cljs.core.get.call(null,map__32821__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__32823 = this;
var map__32823__$1 = ((((!((map__32823 == null)))?((((map__32823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32823):map__32823);
var self__$1 = map__32823__$1;
var local_state__$2 = cljs.core.get.call(null,map__32823__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
if(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(props__$1))){
var copied_morph = new cljs.core.Keyword(null,"copying","copying",66360851).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877).cljs$core$IFn$_invoke$arity$1(local_state__$2));
var morph = (function (){var or__16825__auto__ = copied_morph;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return transmorphic.morph.$morph.call(null,props__$1.call(null,new cljs.core.Keyword(null,"target","target",253001721)));
}
})();
var component = transmorphic.morph.$component.call(null,props__$1.call(null,new cljs.core.Keyword(null,"target","target",253001721)));
var target = (function (){var or__16825__auto__ = copied_morph;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var or__16825__auto____$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(component)))?cljs.core.get_in.call(null,cljs.core.deref.call(null,transmorphic.core.universe),transmorphic.core.get_root.call(null,cljs.core.deref.call(null,transmorphic.core.universe),component)):null);
if(cljs.core.truth_(or__16825__auto____$1)){
return or__16825__auto____$1;
} else {
var or__16825__auto____$2 = component;
if(cljs.core.truth_(or__16825__auto____$2)){
return or__16825__auto____$2;
} else {
return morph;
}
}
}
})();
var halo_position = transmorphic.morph.position_in_world.call(null,target);
var bbx = transmorphic.tools.halo.compute_bounding_box.call(null,transmorphic.morph.$props.call(null,target));
var params = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"update-target","update-target",-581539889),new cljs.core.Keyword(null,"start-updating","start-updating",1465326384),new cljs.core.Keyword(null,"bbx","bbx",2103477618),new cljs.core.Keyword(null,"multiple-update","multiple-update",2002867827),new cljs.core.Keyword(null,"start-editing","start-editing",36503254),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"stop-updating","stop-updating",917720475),new cljs.core.Keyword(null,"morph","morph",-595175877)],[new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(self__$1)),((function (copied_morph,morph,component,target,halo_position,bbx,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1){
return (function (prop,value){
return transmorphic.core.set_prop_BANG_.call(null,target,prop,value);
});})(copied_morph,morph,component,target,halo_position,bbx,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1))
,component,((function (copied_morph,morph,component,target,halo_position,bbx,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1){
return (function (p1__32813_SHARP_){
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),p1__32813_SHARP_], null));
});})(copied_morph,morph,component,target,halo_position,bbx,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1))
,((function (copied_morph,morph,component,target,halo_position,bbx,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1){
return (function (p1__32812_SHARP_){
transmorphic.core.detach_cache_BANG_.call(null,target);

return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877),p1__32812_SHARP_], null));
});})(copied_morph,morph,component,target,halo_position,bbx,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1))
,bbx,((function (copied_morph,morph,component,target,halo_position,bbx,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1){
return (function (props__GT_values){
return transmorphic.core.set_props_BANG_.call(null,target,props__GT_values);
});})(copied_morph,morph,component,target,halo_position,bbx,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1))
,new cljs.core.Keyword(null,"start-editing","start-editing",36503254).cljs$core$IFn$_invoke$arity$1(props__$1),target,((function (copied_morph,morph,component,target,halo_position,bbx,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1){
return (function (){
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877),null], null));
});})(copied_morph,morph,component,target,halo_position,bbx,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1))
,morph]);
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("halo-on-"),cljs.core.str(transmorphic.morph.$props.call(null,target,new cljs.core.Keyword(null,"id","id",-1388402092)))].join(''),new cljs.core.Keyword(null,"extent","extent",-186399820),bbx.call(null,new cljs.core.Keyword(null,"ext","ext",-996964541)),new cljs.core.Keyword(null,"position","position",-2011731912),halo_position,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),transmorphic.tools.halo.manage_meta.call(null,params),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),((function (copied_morph,morph,component,target,halo_position,bbx,params,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1){
return (function (e){
if(cljs.core.truth_(transmorphic.event.shift_QMARK_.call(null,e))){
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scaling-mode","scaling-mode",331960082),false], null));
} else {
return null;
}
});})(copied_morph,morph,component,target,halo_position,bbx,params,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (copied_morph,morph,component,target,halo_position,bbx,params,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1){
return (function (e){
e.stopPropagation();

if(cljs.core.truth_(transmorphic.event.shift_QMARK_.call(null,e))){
return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scaling-mode","scaling-mode",331960082),true], null));
} else {
if(cljs.core.truth_(transmorphic.event.arrow_QMARK_.call(null,e))){
var old_pos = transmorphic.morph.$props.call(null,target,new cljs.core.Keyword(null,"position","position",-2011731912));
var new_pos = transmorphic.utils.add_points.call(null,old_pos,(function (){var G__32825 = (((transmorphic.event.arrow_QMARK_.call(null,e) instanceof cljs.core.Keyword))?transmorphic.event.arrow_QMARK_.call(null,e).fqn:null);
switch (G__32825) {
case "up":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null);

break;
case "left":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);

break;
case "down":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-1)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(transmorphic.event.arrow_QMARK_.call(null,e))].join('')));

}
})());
return transmorphic.core.set_prop_BANG_.call(null,target,new cljs.core.Keyword(null,"position","position",-2011731912),new_pos);
} else {
return null;
}
}
});})(copied_morph,morph,component,target,halo_position,bbx,params,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1))
], null),cljs.core.assoc.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"visible-bounding-box",new cljs.core.Keyword(null,"extent","extent",-186399820),bbx.call(null,new cljs.core.Keyword(null,"ext","ext",-996964541)),new cljs.core.Keyword(null,"position","position",-2011731912),bbx.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220)),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(component)?"blue":"red"),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1)], null),cljs.core.map.call(null,((function (copied_morph,morph,component,target,halo_position,bbx,params,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1){
return (function (button){
return button.call(null,params);
});})(copied_morph,morph,component,target,halo_position,bbx,params,map__32823,map__32823__$1,self__$1,local_state__$2,map__32821,map__32821__$1,self,local_state__$1))
,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [transmorphic.tools.halo.name_tag,transmorphic.tools.halo.copy_button,transmorphic.tools.halo.styling_button,transmorphic.tools.halo.edit_button,transmorphic.tools.halo.resize_button,transmorphic.tools.halo.drag_button,transmorphic.tools.halo.grab_button,transmorphic.tools.halo.close_button,transmorphic.tools.halo.inspect_button], null)),transmorphic.tools.halo.viewer.call(null,params)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2)),(cljs.core.truth_(new cljs.core.Keyword(null,"scaling-mode","scaling-mode",331960082).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(self__$1)))?transmorphic.tools.halo.scaling_button.call(null,params):transmorphic.tools.halo.rotate_button.call(null,params)),transmorphic.tools.halo.pivot_cursor.call(null,params)),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
} else {
return null;
}
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.halo*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32816){
var self__ = this;
var G__32816__$1 = this;
return (new cljs.core.RecordIter((0),G__32816__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.halo_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.halo_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32816){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32826 = cljs.core.keyword_identical_QMARK_;
var expr__32827 = k__17447__auto__;
if(cljs.core.truth_(pred__32826.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32827))){
return (new transmorphic.tools.halo.halo_STAR_(G__32816,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32826.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32827))){
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,G__32816,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32826.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32827))){
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,G__32816,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32826.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32827))){
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,self__.parent,G__32816,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32826.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32827))){
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32816,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32826.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32827))){
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32816,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32826.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32827))){
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32816,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32826.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32827))){
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32816,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32826.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32827))){
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32816,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32816),null));
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

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32816){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.halo_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32816,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.halo_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.halo_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.halo_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.halo_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/halo*");
});

transmorphic.tools.halo.halo_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/halo*");
});

transmorphic.tools.halo.__GT_halo_STAR_ = (function transmorphic$tools$halo$__GT_halo_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.halo_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_halo_STAR_ = (function transmorphic$tools$halo$map__GT_halo_STAR_(G__32818){
return (new transmorphic.tools.halo.halo_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32818),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32818),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32818),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32818),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32818),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32818),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32818),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32818),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32818),null,cljs.core.dissoc.call(null,G__32818,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.halo = (function transmorphic$tools$halo$halo(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32848 = arguments.length;
var i__17884__auto___32849 = (0);
while(true){
if((i__17884__auto___32849 < len__17883__auto___32848)){
args__17890__auto__.push((arguments[i__17884__auto___32849]));

var G__32850 = (i__17884__auto___32849 + (1));
i__17884__auto___32849 = G__32850;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.halo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.halo.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_halo_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 8, [(3),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32831){
var map__32832 = p__32831;
var map__32832__$1 = ((((!((map__32832 == null)))?((((map__32832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32832):map__32832);
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map","map",-1282745308,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"button","button",-1197855826,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"button","button",-1197855826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name-tag","name-tag",1588923161,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"copy-button","copy-button",2124405651,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"styling-button","styling-button",-595914106,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-button","edit-button",-16686857,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"resize-button","resize-button",-524892357,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"drag-button","drag-button",-540438407,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grab-button","grab-button",-765531067,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"close-button","close-button",-768897648,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inspect-button","inspect-button",2081529156,null)], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32834){
var map__32835 = p__32834;
var map__32835__$1 = ((((!((map__32835 == null)))?((((map__32835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32835):map__32835);
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"viewer","viewer",856581674,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"visible-bounding-box",new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"bbx","bbx",-550958151,null),new cljs.core.Keyword(null,"ext","ext",-996964541)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"bbx","bbx",-550958151,null),new cljs.core.Keyword(null,"pos","pos",-864607220)),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),"blue","red"),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),(5),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32837){
var map__32838 = p__32837;
var map__32838__$1 = ((((!((map__32838 == null)))?((((map__32838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32838):map__32838);
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",1181717262,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local-state","local-state",-282143524)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scaling-mode","scaling-mode",331960082)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scaling-button","scaling-button",862099830,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rotate-button","rotate-button",-1782562804,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(6),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32840){
var map__32841 = p__32840;
var map__32841__$1 = ((((!((map__32841 == null)))?((((map__32841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32841):map__32841);
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pivot-cursor","pivot-cursor",1876710051,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"halo-on-",cljs.core.list(new cljs.core.Symbol(null,"$props","$props",-1512270707,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"bbx","bbx",-550958151,null),new cljs.core.Keyword(null,"ext","ext",-996964541)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"halo-position","halo-position",-1105062015,null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"manage-meta","manage-meta",1677792322,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"shift?","shift?",605796831,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scaling-mode","scaling-mode",331960082),false], null)))),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"shift?","shift?",605796831,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scaling-mode","scaling-mode",331960082),true], null)),cljs.core.list(new cljs.core.Symbol(null,"arrow?","arrow?",-280244602,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-pos","old-pos",-977161542,null),cljs.core.list(new cljs.core.Symbol(null,"$props","$props",-1512270707,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),new cljs.core.Symbol(null,"old-pos","old-pos",-977161542,null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"arrow?","arrow?",-280244602,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-1)], null)))], null),cljs.core.list(new cljs.core.Symbol(null,"set-prop!","set-prop!",-90277612,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null)))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(6)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32843){
var map__32844 = p__32843;
var map__32844__$1 = ((((!((map__32844 == null)))?((((map__32844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32844):map__32844);
var m_1 = cljs.core.get.call(null,map__32844__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IInitialize","transmorphic.core/IInitialize",960350336,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initialize","initialize",-2044482856,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scaling-mode","scaling-mode",331960082)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copy-handle","copy-handle",1833215445)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"when","when",1064114221,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"copied-morph","copied-morph",-540121191,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copying","copying",66360851)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph","morph",1045355650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"copied-morph","copied-morph",-540121191,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$morph","$morph",1827866470,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$component","$component",1634483280,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"copied-morph","copied-morph",-540121191,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"when","when",1064114221,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active?","active?",459499776)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"universe","universe",-588789408,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"get-root","get-root",783326296,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"universe","universe",-588789408,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph","morph",1045355650,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"halo-position","halo-position",-1105062015,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"position-in-world","position-in-world",1973798764,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bbx","bbx",-550958151,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compute-bounding-box","compute-bounding-box",1259922680,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$props","$props",-1512270707,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local-state","local-state",-282143524)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prop","prop",1125363195,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-prop!","set-prop!",-90277612,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prop","prop",1125363195,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-target","update-target",-581539889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32813__auto__32814","p1__32813__auto__32814",-1798013686,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32813__auto__32814","p1__32813__auto__32814",-1798013686,null)], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-updating","start-updating",1465326384)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32812__auto__32815","p1__32812__auto__32815",-425267913,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"do","do",1686842252,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"detach-cache!","detach-cache!",-1599502149,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32812__auto__32815","p1__32812__auto__32815",-425267913,null)], null)))], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bbx","bbx",2103477618)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bbx","bbx",-550958151,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multiple-update","multiple-update",2002867827)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props->values","props->values",1806708731,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-props!","set-props!",-884584839,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props->values","props->values",1806708731,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-updating","stop-updating",917720475)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"morph","morph",-595175877)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph","morph",1045355650,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"halo","halo",-1672990094,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.halo.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.halo.cljs$lang$applyTo = (function (seq32829){
var G__32830 = cljs.core.first.call(null,seq32829);
var seq32829__$1 = cljs.core.next.call(null,seq32829);
return transmorphic.tools.halo.halo.cljs$core$IFn$_invoke$arity$variadic(G__32830,seq32829__$1);
});
transmorphic.tools.halo.pivot_cursor;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.pivot_cursor_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.pivot_cursor_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32852,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32854 = (((k32852 instanceof cljs.core.Keyword))?k32852.fqn:null);
switch (G__32854) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32852,else__17442__auto__);

}
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,submorphs__$1,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
var map__32855 = props__$1;
var map__32855__$1 = ((((!((map__32855 == null)))?((((map__32855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32855):map__32855);
var start_updating = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"start-updating","start-updating",1465326384));
var target = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"target","target",253001721));
var stop_updating = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"stop-updating","stop-updating",917720475));
var update = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var pivot = (function (){var or__16825__auto__ = new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(target));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
}
})();
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visible","visible",-1024216805)],["red",((function (map__32855,map__32855__$1,start_updating,target,stop_updating,update,pivot,self__$1){
return (function (_){
return stop_updating.call(null);
});})(map__32855,map__32855__$1,start_updating,target,stop_updating,update,pivot,self__$1))
,true,((function (map__32855,map__32855__$1,start_updating,target,stop_updating,update,pivot,self__$1){
return (function (delta){
var map__32857 = new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(self__$1);
var map__32857__$1 = ((((!((map__32857 == null)))?((((map__32857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32857):map__32857);
var pivot_point = cljs.core.get.call(null,map__32857__$1,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573));
var new_pivot = transmorphic.utils.add_points.call(null,pivot_point,delta);
update.call(null,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new_pivot);

return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new_pivot], null));
});})(map__32855,map__32855__$1,start_updating,target,stop_updating,update,pivot,self__$1))
,((function (map__32855,map__32855__$1,start_updating,target,stop_updating,update,pivot,self__$1){
return (function (e){
return e.stopPropagation();
});})(map__32855,map__32855__$1,start_updating,target,stop_updating,update,pivot,self__$1))
,((function (map__32855,map__32855__$1,start_updating,target,stop_updating,update,pivot,self__$1){
return (function (start_pos){
start_updating.call(null,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573));

return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),start_pos], null));
});})(map__32855,map__32855__$1,start_updating,target,stop_updating,update,pivot,self__$1))
,0.5,"pivot-cursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),"black",pivot,(function (){var temp__4423__auto__ = props__$1.call(null,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
if(cljs.core.truth_(temp__4423__auto__)){
var prop = temp__4423__auto__;
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),props__$1.call(null,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877)));
} else {
return true;
}
})()])),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.pivot-cursor*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32851){
var self__ = this;
var G__32851__$1 = this;
return (new cljs.core.RecordIter((0),G__32851__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32851){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32859 = cljs.core.keyword_identical_QMARK_;
var expr__32860 = k__17447__auto__;
if(cljs.core.truth_(pred__32859.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32860))){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(G__32851,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32859.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32860))){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,G__32851,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32859.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32860))){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,G__32851,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32859.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32860))){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,self__.parent,G__32851,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32859.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32860))){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32851,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32859.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32860))){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32851,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32859.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32860))){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32851,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32859.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32860))){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32851,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32859.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32860))){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32851,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32851),null));
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

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32851){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.pivot_cursor_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32851,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.pivot_cursor_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.pivot_cursor_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.pivot_cursor_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.pivot_cursor_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/pivot-cursor*");
});

transmorphic.tools.halo.pivot_cursor_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/pivot-cursor*");
});

transmorphic.tools.halo.__GT_pivot_cursor_STAR_ = (function transmorphic$tools$halo$__GT_pivot_cursor_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_pivot_cursor_STAR_ = (function transmorphic$tools$halo$map__GT_pivot_cursor_STAR_(G__32853){
return (new transmorphic.tools.halo.pivot_cursor_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32853),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32853),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32853),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32853),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32853),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32853),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32853),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32853),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32853),null,cljs.core.dissoc.call(null,G__32853,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.pivot_cursor = (function transmorphic$tools$halo$pivot_cursor(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32868 = arguments.length;
var i__17884__auto___32869 = (0);
while(true){
if((i__17884__auto___32869 < len__17883__auto___32868)){
args__17890__auto__.push((arguments[i__17884__auto___32869]));

var G__32870 = (i__17884__auto___32869 + (1));
i__17884__auto___32869 = G__32870;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.pivot_cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.pivot_cursor.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_pivot_cursor_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visible","visible",-1024216805)],["red",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"stop-updating","stop-updating",-1736715294,null))),true,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delta","delta",1749471484,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pivot-point","pivot-point",502983954,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Keyword(null,"local-state","local-state",-282143524)),new cljs.core.Symbol(null,"new-pivot","new-pivot",-1863092895,null),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),new cljs.core.Symbol(null,"pivot-point","pivot-point",502983954,null),new cljs.core.Symbol(null,"delta","delta",1749471484,null))], null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.Symbol(null,"new-pivot","new-pivot",-1863092895,null)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.Symbol(null,"new-pivot","new-pivot",-1863092895,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null)], null),cljs.core.list(new cljs.core.Symbol(null,"start-updating","start-updating",-1189109385,null),new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null)], null))),0.5,"pivot-cursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),"black",new cljs.core.Symbol(null,"pivot","pivot",151448288,null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prop","prop",1125363195,null),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877))], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),cljs.core.list(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877))),true)]),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32864){
var map__32865 = p__32864;
var map__32865__$1 = ((((!((map__32865 == null)))?((((map__32865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32865):map__32865);
var m_1 = cljs.core.get.call(null,map__32865__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-updating","start-updating",-1189109385,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stop-updating","stop-updating",-1736715294,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"update","update",-1608859373,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pivot","pivot",151448288,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"pivot-cursor","pivot-cursor",1876710051,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.pivot_cursor.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.pivot_cursor.cljs$lang$applyTo = (function (seq32862){
var G__32863 = cljs.core.first.call(null,seq32862);
var seq32862__$1 = cljs.core.next.call(null,seq32862);
return transmorphic.tools.halo.pivot_cursor.cljs$core$IFn$_invoke$arity$variadic(G__32863,seq32862__$1);
});
transmorphic.tools.halo.viewer;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.viewer_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.viewer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.viewer_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32872,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32874 = (((k32872 instanceof cljs.core.Keyword))?k32872.fqn:null);
switch (G__32874) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32872,else__17442__auto__);

}
});

transmorphic.tools.halo.viewer_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.viewer_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,p__32875,_,render_ctx__30602__auto__){
var self__ = this;
var map__32876 = p__32875;
var map__32876__$1 = ((((!((map__32876 == null)))?((((map__32876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32876):map__32876);
var updated_prop = cljs.core.get.call(null,map__32876__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var target = cljs.core.get.call(null,map__32876__$1,new cljs.core.Keyword(null,"target","target",253001721));
var self__$1 = this;
var value = [cljs.core.str((cljs.core.truth_(updated_prop)?updated_prop.call(null,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(target)):null))].join('');
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-20)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),!((value == null)),new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((6) * cljs.core.count.call(null,value)),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10)], null),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"text-string","text-string",1520601822),value,new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Web Light Italic"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.viewer*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32871){
var self__ = this;
var G__32871__$1 = this;
return (new cljs.core.RecordIter((0),G__32871__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.viewer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.viewer_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32871){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32878 = cljs.core.keyword_identical_QMARK_;
var expr__32879 = k__17447__auto__;
if(cljs.core.truth_(pred__32878.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32879))){
return (new transmorphic.tools.halo.viewer_STAR_(G__32871,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32878.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32879))){
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,G__32871,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32878.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32879))){
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,G__32871,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32878.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32879))){
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,self__.parent,G__32871,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32878.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32879))){
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32871,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32878.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32879))){
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32871,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32878.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32879))){
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32871,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32878.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32879))){
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32871,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32878.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32879))){
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32871,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32871),null));
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

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32871){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.viewer_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32871,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.viewer_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.viewer_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.viewer_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.viewer_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/viewer*");
});

transmorphic.tools.halo.viewer_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/viewer*");
});

transmorphic.tools.halo.__GT_viewer_STAR_ = (function transmorphic$tools$halo$__GT_viewer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.viewer_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_viewer_STAR_ = (function transmorphic$tools$halo$map__GT_viewer_STAR_(G__32873){
return (new transmorphic.tools.halo.viewer_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32873),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32873),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32873),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32873),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32873),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32873),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32873),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32873),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32873),null,cljs.core.dissoc.call(null,G__32873,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.viewer = (function transmorphic$tools$halo$viewer(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32887 = arguments.length;
var i__17884__auto___32888 = (0);
while(true){
if((i__17884__auto___32888 < len__17883__auto___32887)){
args__17890__auto__.push((arguments[i__17884__auto___32888]));

var G__32889 = (i__17884__auto___32888 + (1));
i__17884__auto___32888 = G__32889;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.viewer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.viewer.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_viewer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"text-string","text-string",1520601822),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Web Light Italic"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-20)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(6),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32883){
var map__32884 = p__32883;
var map__32884__$1 = ((((!((map__32884 == null)))?((((map__32884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32884):map__32884);
var m_1 = cljs.core.get.call(null,map__32884__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"str","str",-1564826950,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"when","when",1064114221,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null)))], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"viewer","viewer",856581674,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.viewer.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.viewer.cljs$lang$applyTo = (function (seq32881){
var G__32882 = cljs.core.first.call(null,seq32881);
var seq32881__$1 = cljs.core.next.call(null,seq32881);
return transmorphic.tools.halo.viewer.cljs$core$IFn$_invoke$arity$variadic(G__32882,seq32881__$1);
});
transmorphic.tools.halo.name_tag;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.name_tag_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.name_tag_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.name_tag_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32892,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32894 = (((k32892 instanceof cljs.core.Keyword))?k32892.fqn:null);
switch (G__32894) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32892,else__17442__auto__);

}
});

transmorphic.tools.halo.name_tag_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.name_tag_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
var map__32895 = props__$1;
var map__32895__$1 = ((((!((map__32895 == null)))?((((map__32895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32895):map__32895);
var target = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"target","target",253001721));
var updated_prop = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var id = (function (){var or__16825__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(target));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(target))){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(target));
} else {
return null;
}
}
})();
var width = ((10) * cljs.core.count.call(null,[cljs.core.str(id)].join('')));
if(cljs.core.truth_(id)){
return transmorphic.core.wrap_morph.call(null,transmorphic.core.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (map__32895,map__32895__$1,target,updated_prop,id,width,self__$1){
return (function (p1__32890_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[((p1__32890_SHARP_.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) / (2)) - (width / (2))),(p1__32890_SHARP_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) + (5))]);
});})(map__32895,map__32895__$1,target,updated_prop,id,width,self__$1))
),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.not.call(null,updated_prop),new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),width,new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10)], null),cljs.core.assoc.call(null,transmorphic.core.text.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"allow-input","allow-input",-865500976),true,new cljs.core.Keyword(null,"text-string","text-string",1520601822),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
} else {
return null;
}
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.name-tag*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32891){
var self__ = this;
var G__32891__$1 = this;
return (new cljs.core.RecordIter((0),G__32891__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.name_tag_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.name_tag_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32891){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32897 = cljs.core.keyword_identical_QMARK_;
var expr__32898 = k__17447__auto__;
if(cljs.core.truth_(pred__32897.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32898))){
return (new transmorphic.tools.halo.name_tag_STAR_(G__32891,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32897.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32898))){
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,G__32891,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32897.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32898))){
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,G__32891,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32897.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32898))){
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,self__.parent,G__32891,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32897.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32898))){
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32891,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32897.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32898))){
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32891,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32897.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32898))){
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32891,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32897.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32898))){
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32891,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32897.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32898))){
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32891,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32891),null));
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

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32891){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.name_tag_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32891,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.name_tag_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.name_tag_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.name_tag_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.name_tag_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/name-tag*");
});

transmorphic.tools.halo.name_tag_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/name-tag*");
});

transmorphic.tools.halo.__GT_name_tag_STAR_ = (function transmorphic$tools$halo$__GT_name_tag_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.name_tag_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_name_tag_STAR_ = (function transmorphic$tools$halo$map__GT_name_tag_STAR_(G__32893){
return (new transmorphic.tools.halo.name_tag_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32893),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32893),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32893),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32893),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32893),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32893),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32893),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32893),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32893),null,cljs.core.dissoc.call(null,G__32893,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.name_tag = (function transmorphic$tools$halo$name_tag(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32906 = arguments.length;
var i__17884__auto___32907 = (0);
while(true){
if((i__17884__auto___32907 < len__17883__auto___32906)){
args__17890__auto__.push((arguments[i__17884__auto___32907]));

var G__32908 = (i__17884__auto___32907 + (1));
i__17884__auto___32907 = G__32908;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.name_tag.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.name_tag.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_name_tag_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"text","text",-150030170,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"black",new cljs.core.Keyword(null,"allow-input","allow-input",-865500976),true,new cljs.core.Keyword(null,"text-string","text-string",1520601822),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Chrono Medium Italic"], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32890#","p1__32890#",54923191,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"p1__32890#","p1__32890#",54923191,null),new cljs.core.Keyword(null,"x","x",2099068185)),(2)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"width","width",1256460050,null),(2))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"p1__32890#","p1__32890#",54923191,null),new cljs.core.Keyword(null,"y","y",-1757859776)),(5))))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)),new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32902){
var map__32903 = p__32902;
var map__32903__$1 = ((((!((map__32903 == null)))?((((map__32903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32903):map__32903);
var m_1 = cljs.core.get.call(null,map__32903__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"when","when",1064114221,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abstraction","abstraction",877248569)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"count","count",-514511684,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"str","str",-1564826950,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null)))], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"when","when",1064114221,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"name-tag","name-tag",1588923161,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.name_tag.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.name_tag.cljs$lang$applyTo = (function (seq32900){
var G__32901 = cljs.core.first.call(null,seq32900);
var seq32900__$1 = cljs.core.next.call(null,seq32900);
return transmorphic.tools.halo.name_tag.cljs$core$IFn$_invoke$arity$variadic(G__32901,seq32900__$1);
});
transmorphic.tools.halo.start_rotating = (function transmorphic$tools$halo$start_rotating(self,p__32909){
var map__32912 = p__32909;
var map__32912__$1 = ((((!((map__32912 == null)))?((((map__32912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32912):map__32912);
var target = cljs.core.get.call(null,map__32912__$1,new cljs.core.Keyword(null,"target","target",253001721));
var start_updating = cljs.core.get.call(null,map__32912__$1,new cljs.core.Keyword(null,"start-updating","start-updating",1465326384));
return ((function (map__32912,map__32912__$1,target,start_updating){
return (function (start_pos){
var pivot_point = (function (){var or__16825__auto__ = new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(target));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
}
})();
var rotation = (function (){var or__16825__auto__ = new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(target));
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return ((2) * Math.PI);
}
})();
start_updating.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));

return transmorphic.core.rerender_BANG_.call(null,self,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"init-polar","init-polar",-95199994),transmorphic.tools.halo.norm.call(null,transmorphic.utils.delta.call(null,start_pos,pivot_point)),new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),pivot_point,new cljs.core.Keyword(null,"rotation-point","rotation-point",-1835450621),start_pos,new cljs.core.Keyword(null,"init-rotation","init-rotation",909252411),rotation], null));
});
;})(map__32912,map__32912__$1,target,start_updating))
});
transmorphic.tools.halo.update_rotation = (function transmorphic$tools$halo$update_rotation(self,p__32914){
var map__32919 = p__32914;
var map__32919__$1 = ((((!((map__32919 == null)))?((((map__32919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32919):map__32919);
var update = cljs.core.get.call(null,map__32919__$1,new cljs.core.Keyword(null,"update","update",1045576396));
return ((function (map__32919,map__32919__$1,update){
return (function (delta){
var map__32921 = new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(self);
var map__32921__$1 = ((((!((map__32921 == null)))?((((map__32921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32921):map__32921);
var rotation_point = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword(null,"rotation-point","rotation-point",-1835450621));
var pivot_point = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573));
var init_rotation = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword(null,"init-rotation","init-rotation",909252411));
var init_polar = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword(null,"init-polar","init-polar",-95199994));
var new_pos = transmorphic.utils.add_points.call(null,rotation_point,delta);
var curr_polar = transmorphic.tools.halo.norm.call(null,delta.call(null,new_pos,rotation_point));
var angle = (init_rotation - (Math.sign(transmorphic.tools.halo.cross.call(null,init_polar,curr_polar)) * Math.acos(transmorphic.tools.halo.dot.call(null,init_polar,curr_polar))));
update.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),angle);

return transmorphic.core.rerender_BANG_.call(null,self,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation-point","rotation-point",-1835450621),new_pos], null));
});
;})(map__32919,map__32919__$1,update))
});
transmorphic.tools.halo.stop_rotating = (function transmorphic$tools$halo$stop_rotating(self,p__32924){
var map__32927 = p__32924;
var map__32927__$1 = ((((!((map__32927 == null)))?((((map__32927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32927):map__32927);
var stop_updating = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"stop-updating","stop-updating",917720475));
return ((function (map__32927,map__32927__$1,stop_updating){
return (function (_){
stop_updating.call(null);

return transmorphic.core.rerender_BANG_.call(null,self,((function (map__32927,map__32927__$1,stop_updating){
return (function (p1__32923_SHARP_){
return cljs.core.dissoc.call(null,p1__32923_SHARP_,new cljs.core.Keyword(null,"init-polar","init-polar",-95199994),new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.Keyword(null,"rotation-point","rotation-point",-1835450621),new cljs.core.Keyword(null,"init-rotation","init-rotation",909252411));
});})(map__32927,map__32927__$1,stop_updating))
);
});
;})(map__32927,map__32927__$1,stop_updating))
});
transmorphic.tools.halo.rotate_button;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.rotate_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.rotate_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.rotate_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32930,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32932 = (((k32930 instanceof cljs.core.Keyword))?k32930.fqn:null);
switch (G__32932) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32930,else__17442__auto__);

}
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.rotate_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (p__32933,p__32934,_,render_ctx__30602__auto__){
var self__ = this;
var map__32935 = p__32933;
var map__32935__$1 = ((((!((map__32935 == null)))?((((map__32935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32935):map__32935);
var self = map__32935__$1;
var local_state__$1 = cljs.core.get.call(null,map__32935__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var map__32936 = p__32934;
var map__32936__$1 = ((((!((map__32936 == null)))?((((map__32936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32936):map__32936);
var props__$1 = map__32936__$1;
var bbx = cljs.core.get.call(null,map__32936__$1,new cljs.core.Keyword(null,"bbx","bbx",2103477618));
var updated_prop = cljs.core.get.call(null,map__32936__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var scaling_mode = cljs.core.get.call(null,map__32936__$1,new cljs.core.Keyword(null,"scaling-mode","scaling-mode",331960082));
var map__32939 = this;
var map__32939__$1 = ((((!((map__32939 == null)))?((((map__32939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32939):map__32939);
var self__$1 = map__32939__$1;
var local_state__$2 = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"wants-hand-focus?","wants-hand-focus?",1624747765),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visible","visible",-1024216805)],["rgba(255,255,255,0.4)",transmorphic.tools.halo.stop_rotating.call(null,self__$1,props__$1),true,transmorphic.tools.halo.update_rotation.call(null,self__$1,props__$1),((function (map__32939,map__32939__$1,self__$1,local_state__$2,map__32935,map__32935__$1,self,local_state__$1,map__32936,map__32936__$1,props__$1,bbx,updated_prop,scaling_mode){
return (function (e){
return e.stopPropagation();
});})(map__32939,map__32939__$1,self__$1,local_state__$2,map__32935,map__32935__$1,self,local_state__$1,map__32936,map__32936__$1,props__$1,bbx,updated_prop,scaling_mode))
,transmorphic.tools.halo.start_rotating.call(null,self__$1,props__$1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),true,(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"rotation-point","rotation-point",-1835450621).cljs$core$IFn$_invoke$arity$1(local_state__$2);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return transmorphic.utils.add_points.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(bbx),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-25),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ext","ext",-996964541).cljs$core$IFn$_invoke$arity$1(bbx)) - (25))], null));
}
})(),(cljs.core.truth_(updated_prop)?cljs.core._EQ_.call(null,updated_prop,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)):true)]),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),(cljs.core.truth_(scaling_mode)?"/media/halos/scale.svg":"/media/halos/rotate.svg"),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.rotate-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32929){
var self__ = this;
var G__32929__$1 = this;
return (new cljs.core.RecordIter((0),G__32929__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.rotate_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.rotate_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32929){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32941 = cljs.core.keyword_identical_QMARK_;
var expr__32942 = k__17447__auto__;
if(cljs.core.truth_(pred__32941.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32942))){
return (new transmorphic.tools.halo.rotate_button_STAR_(G__32929,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32941.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32942))){
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,G__32929,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32941.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32942))){
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,G__32929,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32941.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32942))){
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__32929,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32941.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32942))){
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32929,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32941.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32942))){
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32929,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32941.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32942))){
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32929,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32941.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32942))){
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32929,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32941.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32942))){
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32929,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32929),null));
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

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32929){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.rotate_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32929,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.rotate_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.rotate_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.rotate_button_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.rotate_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/rotate-button*");
});

transmorphic.tools.halo.rotate_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/rotate-button*");
});

transmorphic.tools.halo.__GT_rotate_button_STAR_ = (function transmorphic$tools$halo$__GT_rotate_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.rotate_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_rotate_button_STAR_ = (function transmorphic$tools$halo$map__GT_rotate_button_STAR_(G__32931){
return (new transmorphic.tools.halo.rotate_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32931),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32931),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32931),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32931),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32931),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32931),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32931),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32931),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32931),null,cljs.core.dissoc.call(null,G__32931,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.rotate_button = (function transmorphic$tools$halo$rotate_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32950 = arguments.length;
var i__17884__auto___32951 = (0);
while(true){
if((i__17884__auto___32951 < len__17883__auto___32950)){
args__17890__auto__.push((arguments[i__17884__auto___32951]));

var G__32952 = (i__17884__auto___32951 + (1));
i__17884__auto___32951 = G__32952;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.rotate_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.rotate_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_rotate_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"scaling-mode","scaling-mode",1972491609,null),"/media/halos/scale.svg","/media/halos/rotate.svg"),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"wants-hand-focus?","wants-hand-focus?",1624747765),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visible","visible",-1024216805)],["rgba(255,255,255,0.4)",cljs.core.list(new cljs.core.Symbol(null,"stop-rotating","stop-rotating",139050390,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),true,cljs.core.list(new cljs.core.Symbol(null,"update-rotation","update-rotation",-1511671932,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"start-rotating","start-rotating",1367190035,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),true,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Keyword(null,"rotation-point","rotation-point",-1835450621)),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bbx","bbx",-550958151,null),new cljs.core.Keyword(null,"pos","pos",-864607220)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-25),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"bbx","bbx",-550958151,null),new cljs.core.Keyword(null,"ext","ext",-996964541),new cljs.core.Keyword(null,"y","y",-1757859776)),(25))], null))),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)),true)]),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32946){
var map__32947 = p__32946;
var map__32947__$1 = ((((!((map__32947 == null)))?((((map__32947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32947):map__32947);
var m_1 = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bbx","bbx",-550958151,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scaling-mode","scaling-mode",1972491609,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"rotate-button","rotate-button",-1782562804,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.rotate_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.rotate_button.cljs$lang$applyTo = (function (seq32944){
var G__32945 = cljs.core.first.call(null,seq32944);
var seq32944__$1 = cljs.core.next.call(null,seq32944);
return transmorphic.tools.halo.rotate_button.cljs$core$IFn$_invoke$arity$variadic(G__32945,seq32944__$1);
});
transmorphic.tools.halo.styling_button;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.styling_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.styling_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.styling_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32955,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32957 = (((k32955 instanceof cljs.core.Keyword))?k32955.fqn:null);
switch (G__32957) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32955,else__17442__auto__);

}
});

transmorphic.tools.halo.styling_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.styling_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,p__32958,_,render_ctx__30602__auto__){
var self__ = this;
var map__32959 = p__32958;
var map__32959__$1 = ((((!((map__32959 == null)))?((((map__32959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32959):map__32959);
var updated_prop = cljs.core.get.call(null,map__32959__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),.2,new cljs.core.Keyword(null,"visible","visible",-1024216805),(cljs.core.truth_(updated_prop)?cljs.core._EQ_.call(null,updated_prop,new cljs.core.Keyword(null,"styling","styling",754352827)):true),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (self__$1,map__32959,map__32959__$1,updated_prop){
return (function (e){
return e.stopPropagation();
});})(self__$1,map__32959,map__32959__$1,updated_prop))
,new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (self__$1,map__32959,map__32959__$1,updated_prop){
return (function (p1__32953_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(-25),((p1__32953_SHARP_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) * .66) - (25))]);
});})(self__$1,map__32959,map__32959__$1,updated_prop))
)], null),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/styleedit.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.styling-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32954){
var self__ = this;
var G__32954__$1 = this;
return (new cljs.core.RecordIter((0),G__32954__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.styling_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.styling_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32954){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32961 = cljs.core.keyword_identical_QMARK_;
var expr__32962 = k__17447__auto__;
if(cljs.core.truth_(pred__32961.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32962))){
return (new transmorphic.tools.halo.styling_button_STAR_(G__32954,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32961.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32962))){
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,G__32954,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32961.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32962))){
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,G__32954,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32961.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32962))){
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__32954,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32961.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32962))){
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32954,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32961.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32962))){
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32954,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32961.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32962))){
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32954,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32961.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32962))){
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32954,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32961.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32962))){
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32954,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32954),null));
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

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32954){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.styling_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32954,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.styling_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.styling_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.styling_button_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.styling_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/styling-button*");
});

transmorphic.tools.halo.styling_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/styling-button*");
});

transmorphic.tools.halo.__GT_styling_button_STAR_ = (function transmorphic$tools$halo$__GT_styling_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.styling_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_styling_button_STAR_ = (function transmorphic$tools$halo$map__GT_styling_button_STAR_(G__32956){
return (new transmorphic.tools.halo.styling_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32956),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32956),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32956),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32956),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32956),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32956),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32956),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32956),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32956),null,cljs.core.dissoc.call(null,G__32956,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.styling_button = (function transmorphic$tools$halo$styling_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32970 = arguments.length;
var i__17884__auto___32971 = (0);
while(true){
if((i__17884__auto___32971 < len__17883__auto___32970)){
args__17890__auto__.push((arguments[i__17884__auto___32971]));

var G__32972 = (i__17884__auto___32971 + (1));
i__17884__auto___32971 = G__32972;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.styling_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.styling_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_styling_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/styleedit.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Symbol(null,".2",".2",193159359,null),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null),new cljs.core.Keyword(null,"styling","styling",754352827)),true),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32953#","p1__32953#",768837424,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),(-25),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"p1__32953#","p1__32953#",768837424,null),new cljs.core.Keyword(null,"y","y",-1757859776)),new cljs.core.Symbol(null,".66",".66",-489623068,null)),(25)))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32966){
var map__32967 = p__32966;
var map__32967__$1 = ((((!((map__32967 == null)))?((((map__32967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32967):map__32967);
var m_1 = cljs.core.get.call(null,map__32967__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"styling-button","styling-button",-595914106,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.styling_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.styling_button.cljs$lang$applyTo = (function (seq32964){
var G__32965 = cljs.core.first.call(null,seq32964);
var seq32964__$1 = cljs.core.next.call(null,seq32964);
return transmorphic.tools.halo.styling_button.cljs$core$IFn$_invoke$arity$variadic(G__32965,seq32964__$1);
});
transmorphic.tools.halo.edit_button;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.edit_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.edit_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.edit_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32975,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32977 = (((k32975 instanceof cljs.core.Keyword))?k32975.fqn:null);
switch (G__32977) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32975,else__17442__auto__);

}
});

transmorphic.tools.halo.edit_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.edit_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,props__$1,_,render_ctx__30602__auto__){
var self__ = this;
var self__$1 = this;
var map__32978 = props__$1;
var map__32978__$1 = ((((!((map__32978 == null)))?((((map__32978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32978):map__32978);
var morph = cljs.core.get.call(null,map__32978__$1,new cljs.core.Keyword(null,"morph","morph",-595175877));
var updated_prop = cljs.core.get.call(null,map__32978__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var start_editing = cljs.core.get.call(null,map__32978__$1,new cljs.core.Keyword(null,"start-editing","start-editing",36503254));
var orphan_QMARK_ = cljs.core.not.call(null,new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(morph));
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.not.call(null,updated_prop),new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (map__32978,map__32978__$1,morph,updated_prop,start_editing,orphan_QMARK_,self__$1){
return (function (p1__32973_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[p1__32973_SHARP_.call(null,new cljs.core.Keyword(null,"x","x",2099068185)),((p1__32973_SHARP_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) * .33) - (25))]);
});})(map__32978,map__32978__$1,morph,updated_prop,start_editing,orphan_QMARK_,self__$1))
),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__32978,map__32978__$1,morph,updated_prop,start_editing,orphan_QMARK_,self__$1){
return (function (e){
return start_editing.call(null,morph);
});})(map__32978,map__32978__$1,morph,updated_prop,start_editing,orphan_QMARK_,self__$1))
], null),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),((orphan_QMARK_)?"/media/halos/scriptedit.svg":"/media/halos/scriptedit_script.svg"),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.edit-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32974){
var self__ = this;
var G__32974__$1 = this;
return (new cljs.core.RecordIter((0),G__32974__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.edit_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.edit_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32974){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__32980 = cljs.core.keyword_identical_QMARK_;
var expr__32981 = k__17447__auto__;
if(cljs.core.truth_(pred__32980.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__32981))){
return (new transmorphic.tools.halo.edit_button_STAR_(G__32974,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32980.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__32981))){
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,G__32974,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32980.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32981))){
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,G__32974,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32980.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__32981))){
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__32974,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32980.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__32981))){
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32974,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32980.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__32981))){
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32974,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32980.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__32981))){
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32974,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32980.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__32981))){
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32974,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32980.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__32981))){
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32974,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32974),null));
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

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32974){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.edit_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32974,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.edit_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.edit_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.edit_button_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.edit_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/edit-button*");
});

transmorphic.tools.halo.edit_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/edit-button*");
});

transmorphic.tools.halo.__GT_edit_button_STAR_ = (function transmorphic$tools$halo$__GT_edit_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.edit_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_edit_button_STAR_ = (function transmorphic$tools$halo$map__GT_edit_button_STAR_(G__32976){
return (new transmorphic.tools.halo.edit_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32976),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32976),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32976),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32976),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32976),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32976),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32976),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32976),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32976),null,cljs.core.dissoc.call(null,G__32976,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.edit_button = (function transmorphic$tools$halo$edit_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___32989 = arguments.length;
var i__17884__auto___32990 = (0);
while(true){
if((i__17884__auto___32990 < len__17883__auto___32989)){
args__17890__auto__.push((arguments[i__17884__auto___32990]));

var G__32991 = (i__17884__auto___32990 + (1));
i__17884__auto___32990 = G__32991;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.edit_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.edit_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_edit_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"orphan?","orphan?",62517565,null),"/media/halos/scriptedit.svg","/media/halos/scriptedit_script.svg"),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32973#","p1__32973#",-1161265544,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"p1__32973#","p1__32973#",-1161265544,null),new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"p1__32973#","p1__32973#",-1161265544,null),new cljs.core.Keyword(null,"y","y",-1757859776)),new cljs.core.Symbol(null,".33",".33",-949665639,null)),(25))))),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"start-editing","start-editing",1677034781,null),new cljs.core.Symbol(null,"morph","morph",1045355650,null)))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__32985){
var map__32986 = p__32985;
var map__32986__$1 = ((((!((map__32986 == null)))?((((map__32986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32986):map__32986);
var m_1 = cljs.core.get.call(null,map__32986__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let","let",358118826,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph","morph",1045355650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-editing","start-editing",1677034781,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orphan?","orphan?",62517565,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"morph","morph",1045355650,null)], null)))], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"edit-button","edit-button",-16686857,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.edit_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.edit_button.cljs$lang$applyTo = (function (seq32983){
var G__32984 = cljs.core.first.call(null,seq32983);
var seq32983__$1 = cljs.core.next.call(null,seq32983);
return transmorphic.tools.halo.edit_button.cljs$core$IFn$_invoke$arity$variadic(G__32984,seq32983__$1);
});
transmorphic.tools.halo.copy_button;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.copy_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.copy_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.copy_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k32994,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__32996 = (((k32994 instanceof cljs.core.Keyword))?k32994.fqn:null);
switch (G__32996) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32994,else__17442__auto__);

}
});

transmorphic.tools.halo.copy_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.copy_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,p__32997,_,render_ctx__30602__auto__){
var self__ = this;
var map__32998 = p__32997;
var map__32998__$1 = ((((!((map__32998 == null)))?((((map__32998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32998):map__32998);
var updated_prop = cljs.core.get.call(null,map__32998__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var start_updating = cljs.core.get.call(null,map__32998__$1,new cljs.core.Keyword(null,"start-updating","start-updating",1465326384));
var stop_updating = cljs.core.get.call(null,map__32998__$1,new cljs.core.Keyword(null,"stop-updating","stop-updating",917720475));
var target = cljs.core.get.call(null,map__32998__$1,new cljs.core.Keyword(null,"target","target",253001721));
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),(cljs.core.truth_(updated_prop)?cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"copying","copying",66360851),updated_prop):true),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),true,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (self__$1,map__32998,map__32998__$1,updated_prop,start_updating,stop_updating,target){
return (function (e){
return e.stopPropagation();
});})(self__$1,map__32998,map__32998__$1,updated_prop,start_updating,stop_updating,target))
,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),((function (self__$1,map__32998,map__32998__$1,updated_prop,start_updating,stop_updating,target){
return (function (start_pos){
var copy = transmorphic.core.orphanize_BANG_.call(null,transmorphic.core.copy_morph_BANG_.call(null,target));
start_updating.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copying","copying",66360851),copy], null));

transmorphic.tools.hand.grab_morph_BANG_.call(null,copy);

return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copied-morph","copied-morph",2114314578),copy], null));
});})(self__$1,map__32998,map__32998__$1,updated_prop,start_updating,stop_updating,target))
,new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),((function (self__$1,map__32998,map__32998__$1,updated_prop,start_updating,stop_updating,target){
return (function (___$1){
var map__33000 = transmorphic.morph.$local_state.call(null,self__$1);
var map__33000__$1 = ((((!((map__33000 == null)))?((((map__33000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33000):map__33000);
var copied_morph = cljs.core.get.call(null,map__33000__$1,new cljs.core.Keyword(null,"copied-morph","copied-morph",2114314578));
stop_updating.call(null);

transmorphic.tools.hand.drop_morph_BANG_.call(null,copied_morph);

return cljs.core.reset_BANG_.call(null,transmorphic.event.meta_focus,copied_morph);
});})(self__$1,map__32998,map__32998__$1,updated_prop,start_updating,stop_updating,target))
,new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (self__$1,map__32998,map__32998__$1,updated_prop,start_updating,stop_updating,target){
return (function (p1__32992_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(-25),((p1__32992_SHARP_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) * .33) - (25))]);
});})(self__$1,map__32998,map__32998__$1,updated_prop,start_updating,stop_updating,target))
)], null),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/copy.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.copy-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32993){
var self__ = this;
var G__32993__$1 = this;
return (new cljs.core.RecordIter((0),G__32993__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.copy_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.copy_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__32993){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33002 = cljs.core.keyword_identical_QMARK_;
var expr__33003 = k__17447__auto__;
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33003))){
return (new transmorphic.tools.halo.copy_button_STAR_(G__32993,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33003))){
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,G__32993,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33003))){
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,G__32993,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33003))){
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__32993,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33003))){
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__32993,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33003))){
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__32993,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33003))){
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__32993,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33003))){
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__32993,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33003))){
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__32993,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__32993),null));
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

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__32993){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.copy_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__32993,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.copy_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.copy_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.copy_button_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.copy_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/copy-button*");
});

transmorphic.tools.halo.copy_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/copy-button*");
});

transmorphic.tools.halo.__GT_copy_button_STAR_ = (function transmorphic$tools$halo$__GT_copy_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.copy_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_copy_button_STAR_ = (function transmorphic$tools$halo$map__GT_copy_button_STAR_(G__32995){
return (new transmorphic.tools.halo.copy_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__32995),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__32995),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32995),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__32995),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__32995),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__32995),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__32995),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__32995),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__32995),null,cljs.core.dissoc.call(null,G__32995,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.copy_button = (function transmorphic$tools$halo$copy_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33011 = arguments.length;
var i__17884__auto___33012 = (0);
while(true){
if((i__17884__auto___33012 < len__17883__auto___33011)){
args__17890__auto__.push((arguments[i__17884__auto___33012]));

var G__33013 = (i__17884__auto___33012 + (1));
i__17884__auto___33012 = G__33013;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.copy_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.copy_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_copy_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/copy.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"copying","copying",66360851),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)),true),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),true,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"copy","copy",562914218,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"copy-morph!","copy-morph!",-401155795,null),new cljs.core.Symbol(null,"orphanize!","orphanize!",-181201651,null))], null),cljs.core.list(new cljs.core.Symbol(null,"start-updating","start-updating",-1189109385,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copying","copying",66360851),new cljs.core.Symbol(null,"copy","copy",562914218,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"grab-morph!","grab-morph!",1233474765,null),new cljs.core.Symbol(null,"copy","copy",562914218,null)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copied-morph","copied-morph",2114314578),new cljs.core.Symbol(null,"copy","copy",562914218,null)], null)))),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"copied-morph","copied-morph",-540121191,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"$local-state","$local-state",-1114423248,null))], null),cljs.core.list(new cljs.core.Symbol(null,"stop-updating","stop-updating",-1736715294,null)),cljs.core.list(new cljs.core.Symbol(null,"drop-morph!","drop-morph!",1303941006,null),new cljs.core.Symbol(null,"copied-morph","copied-morph",-540121191,null)),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"meta-focus","meta-focus",-1603875642,null),new cljs.core.Symbol(null,"copied-morph","copied-morph",-540121191,null)))),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32992#","p1__32992#",-1231156065,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),(-25),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"p1__32992#","p1__32992#",-1231156065,null),new cljs.core.Keyword(null,"y","y",-1757859776)),new cljs.core.Symbol(null,".33",".33",-949665639,null)),(25)))))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33007){
var map__33008 = p__33007;
var map__33008__$1 = ((((!((map__33008 == null)))?((((map__33008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33008):map__33008);
var m_1 = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-updating","start-updating",-1189109385,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stop-updating","stop-updating",-1736715294,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"copy-button","copy-button",2124405651,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.copy_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.copy_button.cljs$lang$applyTo = (function (seq33005){
var G__33006 = cljs.core.first.call(null,seq33005);
var seq33005__$1 = cljs.core.next.call(null,seq33005);
return transmorphic.tools.halo.copy_button.cljs$core$IFn$_invoke$arity$variadic(G__33006,seq33005__$1);
});
transmorphic.tools.halo.grab_button;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.grab_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.grab_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.grab_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33016,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33018 = (((k33016 instanceof cljs.core.Keyword))?k33016.fqn:null);
switch (G__33018) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33016,else__17442__auto__);

}
});

transmorphic.tools.halo.grab_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.grab_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,p__33019,_,render_ctx__30602__auto__){
var self__ = this;
var map__33020 = p__33019;
var map__33020__$1 = ((((!((map__33020 == null)))?((((map__33020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33020):map__33020);
var props__$1 = map__33020__$1;
var updated_prop = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var target = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"target","target",253001721));
var component = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var update_target = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"update-target","update-target",-581539889));
var start_updating = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"start-updating","start-updating",1465326384));
var stop_updating = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"stop-updating","stop-updating",917720475));
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visible","visible",-1024216805)],["rgba(255,255,255,0.4)",((function (self__$1,map__33020,map__33020__$1,props__$1,updated_prop,target,component,update_target,start_updating,stop_updating){
return (function (___$1){
stop_updating.call(null);

if(cljs.core.truth_(component)){
return transmorphic.tools.hand.drop_component_BANG_.call(null,component);
} else {
return transmorphic.tools.hand.drop_morph_BANG_.call(null,target);
}
});})(self__$1,map__33020,map__33020__$1,props__$1,updated_prop,target,component,update_target,start_updating,stop_updating))
,true,((function (self__$1,map__33020,map__33020__$1,props__$1,updated_prop,target,component,update_target,start_updating,stop_updating){
return (function (e){
return e.stopPropagation();
});})(self__$1,map__33020,map__33020__$1,props__$1,updated_prop,target,component,update_target,start_updating,stop_updating))
,((function (self__$1,map__33020,map__33020__$1,props__$1,updated_prop,target,component,update_target,start_updating,stop_updating){
return (function (start_pos){
start_updating.call(null,new cljs.core.Keyword(null,"grabbing","grabbing",-1101624423));

if(cljs.core.truth_(component)){
return transmorphic.tools.hand.grab_component_BANG_.call(null,component);
} else {
return transmorphic.tools.hand.grab_morph_BANG_.call(null,target);
}
});})(self__$1,map__33020,map__33020__$1,props__$1,updated_prop,target,component,update_target,start_updating,stop_updating))
,"grab-button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (self__$1,map__33020,map__33020__$1,props__$1,updated_prop,target,component,update_target,start_updating,stop_updating){
return (function (p1__33014_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(p1__33014_SHARP_.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) * .33),(-25)]);
});})(self__$1,map__33020,map__33020__$1,props__$1,updated_prop,target,component,update_target,start_updating,stop_updating))
),(cljs.core.truth_(updated_prop)?cljs.core._EQ_.call(null,updated_prop,new cljs.core.Keyword(null,"grabbing","grabbing",-1101624423)):true)]),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/grabbinghand.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.grab-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33015){
var self__ = this;
var G__33015__$1 = this;
return (new cljs.core.RecordIter((0),G__33015__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.grab_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.grab_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33015){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33022 = cljs.core.keyword_identical_QMARK_;
var expr__33023 = k__17447__auto__;
if(cljs.core.truth_(pred__33022.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33023))){
return (new transmorphic.tools.halo.grab_button_STAR_(G__33015,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33022.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33023))){
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,G__33015,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33022.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33023))){
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,G__33015,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33022.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33023))){
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__33015,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33022.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33023))){
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33015,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33022.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33023))){
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33015,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33022.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33023))){
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33015,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33022.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33023))){
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33015,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33022.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33023))){
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33015,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33015),null));
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

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33015){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.grab_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33015,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.grab_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.grab_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.grab_button_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.grab_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/grab-button*");
});

transmorphic.tools.halo.grab_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/grab-button*");
});

transmorphic.tools.halo.__GT_grab_button_STAR_ = (function transmorphic$tools$halo$__GT_grab_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.grab_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_grab_button_STAR_ = (function transmorphic$tools$halo$map__GT_grab_button_STAR_(G__33017){
return (new transmorphic.tools.halo.grab_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33017),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33017),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33017),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33017),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33017),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33017),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33017),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33017),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33017),null,cljs.core.dissoc.call(null,G__33017,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.grab_button = (function transmorphic$tools$halo$grab_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33031 = arguments.length;
var i__17884__auto___33032 = (0);
while(true){
if((i__17884__auto___33032 < len__17883__auto___33031)){
args__17890__auto__.push((arguments[i__17884__auto___33032]));

var G__33033 = (i__17884__auto___33032 + (1));
i__17884__auto___33032 = G__33033;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.grab_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.grab_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_grab_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/grabbinghand.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visible","visible",-1024216805)],["rgba(255,255,255,0.4)",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"stop-updating","stop-updating",-1736715294,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.list(new cljs.core.Symbol(null,"drop-component!","drop-component!",1824424683,null),new cljs.core.Symbol(null,"component","component",-1098498987,null)),cljs.core.list(new cljs.core.Symbol(null,"drop-morph!","drop-morph!",1303941006,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))),true,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null)], null),cljs.core.list(new cljs.core.Symbol(null,"start-updating","start-updating",-1189109385,null),new cljs.core.Keyword(null,"grabbing","grabbing",-1101624423)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.list(new cljs.core.Symbol(null,"grab-component!","grab-component!",-830880344,null),new cljs.core.Symbol(null,"component","component",-1098498987,null)),cljs.core.list(new cljs.core.Symbol(null,"grab-morph!","grab-morph!",1233474765,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))),"grab-button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33014#","p1__33014#",247817049,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"p1__33014#","p1__33014#",247817049,null),new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Symbol(null,".33",".33",-949665639,null)),new cljs.core.Keyword(null,"y","y",-1757859776),(-25)))),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null),new cljs.core.Keyword(null,"grabbing","grabbing",-1101624423)),true)]),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33027){
var map__33028 = p__33027;
var map__33028__$1 = ((((!((map__33028 == null)))?((((map__33028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33028):map__33028);
var m_1 = cljs.core.get.call(null,map__33028__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"update-target","update-target",1058991638,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-updating","start-updating",-1189109385,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stop-updating","stop-updating",-1736715294,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"grab-button","grab-button",-765531067,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.grab_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.grab_button.cljs$lang$applyTo = (function (seq33025){
var G__33026 = cljs.core.first.call(null,seq33025);
var seq33025__$1 = cljs.core.next.call(null,seq33025);
return transmorphic.tools.halo.grab_button.cljs$core$IFn$_invoke$arity$variadic(G__33026,seq33025__$1);
});
transmorphic.tools.halo.drag_button;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.drag_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.drag_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.drag_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33037,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33039 = (((k33037 instanceof cljs.core.Keyword))?k33037.fqn:null);
switch (G__33039) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33037,else__17442__auto__);

}
});

transmorphic.tools.halo.drag_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.drag_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,p__33040,_,render_ctx__30602__auto__){
var self__ = this;
var map__33041 = p__33040;
var map__33041__$1 = ((((!((map__33041 == null)))?((((map__33041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33041):map__33041);
var props__$1 = map__33041__$1;
var updated_prop = cljs.core.get.call(null,map__33041__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var start_updating = cljs.core.get.call(null,map__33041__$1,new cljs.core.Keyword(null,"start-updating","start-updating",1465326384));
var update = cljs.core.get.call(null,map__33041__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var stop_updating = cljs.core.get.call(null,map__33041__$1,new cljs.core.Keyword(null,"stop-updating","stop-updating",917720475));
var target = cljs.core.get.call(null,map__33041__$1,new cljs.core.Keyword(null,"target","target",253001721));
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visible","visible",-1024216805)],["rgba(255,255,255,0.4)",((function (self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target){
return (function (___$1){
stop_updating.call(null);

return transmorphic.core.rerender_BANG_.call(null,self__$1,((function (self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target){
return (function (p1__33035_SHARP_){
return cljs.core.dissoc.call(null,p1__33035_SHARP_,new cljs.core.Keyword(null,"prev-position","prev-position",506665244));
});})(self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target))
);
});})(self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target))
,true,((function (self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target){
return (function (delta){
var map__33043 = new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(self__$1);
var map__33043__$1 = ((((!((map__33043 == null)))?((((map__33043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33043):map__33043);
var prev_position = cljs.core.get.call(null,map__33043__$1,new cljs.core.Keyword(null,"prev-position","prev-position",506665244));
var new_pos = transmorphic.utils.add_points.call(null,prev_position,delta);
update.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),new_pos);

return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev-position","prev-position",506665244),new_pos], null));
});})(self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target))
,((function (self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target){
return (function (e){
return e.stopPropagation();
});})(self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target))
,((function (self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target){
return (function (start_pos){
start_updating.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));

return transmorphic.core.rerender_BANG_.call(null,self__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev-position","prev-position",506665244),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(target))], null));
});})(self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target))
,"drag-button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target){
return (function (p1__33034_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(p1__33034_SHARP_.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) * .66),(-25)]);
});})(self__$1,map__33041,map__33041__$1,props__$1,updated_prop,start_updating,update,stop_updating,target))
),(cljs.core.truth_(updated_prop)?cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),updated_prop):true)]),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/move.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.drag-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33036){
var self__ = this;
var G__33036__$1 = this;
return (new cljs.core.RecordIter((0),G__33036__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.drag_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.drag_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33036){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33045 = cljs.core.keyword_identical_QMARK_;
var expr__33046 = k__17447__auto__;
if(cljs.core.truth_(pred__33045.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33046))){
return (new transmorphic.tools.halo.drag_button_STAR_(G__33036,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33045.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33046))){
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,G__33036,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33045.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33046))){
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,G__33036,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33045.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33046))){
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__33036,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33045.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33046))){
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33036,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33045.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33046))){
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33036,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33045.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33046))){
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33036,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33045.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33046))){
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33036,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33045.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33046))){
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33036,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33036),null));
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

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33036){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.drag_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33036,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.drag_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.drag_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.drag_button_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.drag_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/drag-button*");
});

transmorphic.tools.halo.drag_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/drag-button*");
});

transmorphic.tools.halo.__GT_drag_button_STAR_ = (function transmorphic$tools$halo$__GT_drag_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.drag_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_drag_button_STAR_ = (function transmorphic$tools$halo$map__GT_drag_button_STAR_(G__33038){
return (new transmorphic.tools.halo.drag_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33038),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33038),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33038),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33038),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33038),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33038),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33038),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33038),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33038),null,cljs.core.dissoc.call(null,G__33038,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.drag_button = (function transmorphic$tools$halo$drag_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33054 = arguments.length;
var i__17884__auto___33055 = (0);
while(true){
if((i__17884__auto___33055 < len__17883__auto___33054)){
args__17890__auto__.push((arguments[i__17884__auto___33055]));

var G__33056 = (i__17884__auto___33055 + (1));
i__17884__auto___33055 = G__33056;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.drag_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.drag_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_drag_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/move.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visible","visible",-1024216805)],["rgba(255,255,255,0.4)",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"stop-updating","stop-updating",-1736715294,null)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33035#","p1__33035#",1419439290,null)], null),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"p1__33035#","p1__33035#",1419439290,null),new cljs.core.Keyword(null,"prev-position","prev-position",506665244))))),true,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delta","delta",1749471484,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev-position","prev-position",2147196771,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Keyword(null,"local-state","local-state",-282143524)),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),new cljs.core.Symbol(null,"prev-position","prev-position",2147196771,null),new cljs.core.Symbol(null,"delta","delta",1749471484,null))], null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev-position","prev-position",506665244),new cljs.core.Symbol(null,"new-pos","new-pos",1449459474,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null)], null),cljs.core.list(new cljs.core.Symbol(null,"start-updating","start-updating",-1189109385,null),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.list(new cljs.core.Symbol(null,"rerender!","rerender!",216601345,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev-position","prev-position",506665244),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"position","position",-2011731912))], null))),"drag-button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33034#","p1__33034#",-1026526951,null)], null),cljs.core.list(new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"p1__33034#","p1__33034#",-1026526951,null),new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Symbol(null,".66",".66",-489623068,null)),new cljs.core.Keyword(null,"y","y",-1757859776),(-25)))),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)),true)]),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33050){
var map__33051 = p__33050;
var map__33051__$1 = ((((!((map__33051 == null)))?((((map__33051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33051):map__33051);
var m_1 = cljs.core.get.call(null,map__33051__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-updating","start-updating",-1189109385,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"update","update",-1608859373,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stop-updating","stop-updating",-1736715294,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"drag-button","drag-button",-540438407,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.drag_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.drag_button.cljs$lang$applyTo = (function (seq33048){
var G__33049 = cljs.core.first.call(null,seq33048);
var seq33048__$1 = cljs.core.next.call(null,seq33048);
return transmorphic.tools.halo.drag_button.cljs$core$IFn$_invoke$arity$variadic(G__33049,seq33048__$1);
});
transmorphic.tools.halo.start_resizing = (function transmorphic$tools$halo$start_resizing(self,p__33057){
var map__33062 = p__33057;
var map__33062__$1 = ((((!((map__33062 == null)))?((((map__33062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33062):map__33062);
var target = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"target","target",253001721));
var update = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var start_updating = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"start-updating","start-updating",1465326384));
return ((function (map__33062,map__33062__$1,target,update,start_updating){
return (function (start_pos){
var map__33064 = new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(target);
var map__33064__$1 = ((((!((map__33064 == null)))?((((map__33064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33064):map__33064);
var pivot_point = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573));
var extent = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"extent","extent",-186399820));
start_updating.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820));

if(cljs.core.truth_(pivot_point)){
} else {
update.call(null,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
}

return transmorphic.core.rerender_BANG_.call(null,self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extent","extent",-186399820),extent,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),(function (){var or__16825__auto__ = pivot_point;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
}
})()], null));
});
;})(map__33062,map__33062__$1,target,update,start_updating))
});
transmorphic.tools.halo.resize = (function transmorphic$tools$halo$resize(self,p__33066){
var map__33075 = p__33066;
var map__33075__$1 = ((((!((map__33075 == null)))?((((map__33075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33075):map__33075);
var target = cljs.core.get.call(null,map__33075__$1,new cljs.core.Keyword(null,"target","target",253001721));
var multiple_update = cljs.core.get.call(null,map__33075__$1,new cljs.core.Keyword(null,"multiple-update","multiple-update",2002867827));
var morph = cljs.core.get.call(null,map__33075__$1,new cljs.core.Keyword(null,"morph","morph",-595175877));
return ((function (map__33075,map__33075__$1,target,multiple_update,morph){
return (function (delta){
var map__33077 = new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(self);
var map__33077__$1 = ((((!((map__33077 == null)))?((((map__33077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33077):map__33077);
var extent = cljs.core.get.call(null,map__33077__$1,new cljs.core.Keyword(null,"extent","extent",-186399820));
var pivot_point = cljs.core.get.call(null,map__33077__$1,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573));
var map__33078 = extent;
var map__33078__$1 = ((((!((map__33078 == null)))?((((map__33078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33078):map__33078);
var old_x = cljs.core.get.call(null,map__33078__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var old_y = cljs.core.get.call(null,map__33078__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__33079 = pivot_point;
var map__33079__$1 = ((((!((map__33079 == null)))?((((map__33079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33079):map__33079);
var px = cljs.core.get.call(null,map__33079__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__33079__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var new_ext = transmorphic.utils.add_points.call(null,extent,delta);
var new_pivot = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((px / old_x) * new_ext.call(null,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"y","y",-1757859776),((py / old_y) * new_ext.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)))], null);
var new_props = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extent","extent",-186399820),new_ext,new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new_pivot], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(morph)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(.8 * new_ext.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)))], null):null));
multiple_update.call(null,new_props);

return transmorphic.core.rerender_BANG_.call(null,self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pivot-point","pivot-point",-1137547573),new_pivot,new cljs.core.Keyword(null,"extent","extent",-186399820),new_ext], null));
});
;})(map__33075,map__33075__$1,target,multiple_update,morph))
});
transmorphic.tools.halo.stop_resizing = (function transmorphic$tools$halo$stop_resizing(p__33083){
var map__33086 = p__33083;
var map__33086__$1 = ((((!((map__33086 == null)))?((((map__33086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33086):map__33086);
var stop_updating = cljs.core.get.call(null,map__33086__$1,new cljs.core.Keyword(null,"stop-updating","stop-updating",917720475));
return ((function (map__33086,map__33086__$1,stop_updating){
return (function (_){
return stop_updating.call(null);
});
;})(map__33086,map__33086__$1,stop_updating))
});
transmorphic.tools.halo.resize_button;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.resize_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.resize_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.resize_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33090,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33092 = (((k33090 instanceof cljs.core.Keyword))?k33090.fqn:null);
switch (G__33092) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33090,else__17442__auto__);

}
});

transmorphic.tools.halo.resize_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.resize_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,p__33093,_,render_ctx__30602__auto__){
var self__ = this;
var map__33094 = p__33093;
var map__33094__$1 = ((((!((map__33094 == null)))?((((map__33094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33094):map__33094);
var props__$1 = map__33094__$1;
var updated_prop = cljs.core.get.call(null,map__33094__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visible","visible",-1024216805)],["rgba(255,255,255,0.4)",transmorphic.tools.halo.stop_resizing.call(null,props__$1),true,transmorphic.tools.halo.resize.call(null,self__$1,props__$1),((function (self__$1,map__33094,map__33094__$1,props__$1,updated_prop){
return (function (e){
return e.stopPropagation();
});})(self__$1,map__33094,map__33094__$1,props__$1,updated_prop))
,transmorphic.tools.halo.start_resizing.call(null,self__$1,props__$1),"resize-button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (self__$1,map__33094,map__33094__$1,props__$1,updated_prop){
return (function (p1__33088_SHARP_){
return transmorphic.utils.add_points.call(null,p1__33088_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-25)], null));
});})(self__$1,map__33094,map__33094__$1,props__$1,updated_prop))
),(cljs.core.truth_(updated_prop)?cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),updated_prop):true)]),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/resize.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.resize-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33089){
var self__ = this;
var G__33089__$1 = this;
return (new cljs.core.RecordIter((0),G__33089__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.resize_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.resize_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33089){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33096 = cljs.core.keyword_identical_QMARK_;
var expr__33097 = k__17447__auto__;
if(cljs.core.truth_(pred__33096.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33097))){
return (new transmorphic.tools.halo.resize_button_STAR_(G__33089,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33096.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33097))){
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,G__33089,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33096.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33097))){
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,G__33089,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33096.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33097))){
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__33089,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33096.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33097))){
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33089,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33096.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33097))){
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33089,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33096.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33097))){
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33089,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33096.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33097))){
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33089,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33096.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33097))){
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33089,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33089),null));
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

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33089){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.resize_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33089,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.resize_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.resize_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.resize_button_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.resize_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/resize-button*");
});

transmorphic.tools.halo.resize_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/resize-button*");
});

transmorphic.tools.halo.__GT_resize_button_STAR_ = (function transmorphic$tools$halo$__GT_resize_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.resize_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_resize_button_STAR_ = (function transmorphic$tools$halo$map__GT_resize_button_STAR_(G__33091){
return (new transmorphic.tools.halo.resize_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33091),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33091),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33091),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33091),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33091),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33091),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33091),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33091),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33091),null,cljs.core.dissoc.call(null,G__33091,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.resize_button = (function transmorphic$tools$halo$resize_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33105 = arguments.length;
var i__17884__auto___33106 = (0);
while(true){
if((i__17884__auto___33106 < len__17883__auto___33105)){
args__17890__auto__.push((arguments[i__17884__auto___33106]));

var G__33107 = (i__17884__auto___33106 + (1));
i__17884__auto___33106 = G__33107;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.resize_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.resize_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_resize_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/resize.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-drag-stop","on-drag-stop",-2029494517),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visible","visible",-1024216805)],["rgba(255,255,255,0.4)",cljs.core.list(new cljs.core.Symbol(null,"stop-resizing","stop-resizing",1789781903,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),true,cljs.core.list(new cljs.core.Symbol(null,"resize","resize",1937898613,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"start-resizing","start-resizing",-1297496593,null),new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"props","props",2093813254,null)),"resize-button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33088#","p1__33088#",-1395700943,null)], null),cljs.core.list(new cljs.core.Symbol(null,"add-points","add-points",1554665873,null),new cljs.core.Symbol(null,"p1__33088#","p1__33088#",-1395700943,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-25)], null)))),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)),true)]),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33101){
var map__33102 = p__33101;
var map__33102__$1 = ((((!((map__33102 == null)))?((((map__33102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33102):map__33102);
var m_1 = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"resize-button","resize-button",-524892357,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.resize_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.resize_button.cljs$lang$applyTo = (function (seq33099){
var G__33100 = cljs.core.first.call(null,seq33099);
var seq33099__$1 = cljs.core.next.call(null,seq33099);
return transmorphic.tools.halo.resize_button.cljs$core$IFn$_invoke$arity$variadic(G__33100,seq33099__$1);
});
transmorphic.tools.halo.close_button;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.close_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.close_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.close_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33109,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33111 = (((k33109 instanceof cljs.core.Keyword))?k33109.fqn:null);
switch (G__33111) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33109,else__17442__auto__);

}
});

transmorphic.tools.halo.close_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.close_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,p__33112,_,render_ctx__30602__auto__){
var self__ = this;
var map__33113 = p__33112;
var map__33113__$1 = ((((!((map__33113 == null)))?((((map__33113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33113):map__33113);
var updated_prop = cljs.core.get.call(null,map__33113__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var target = cljs.core.get.call(null,map__33113__$1,new cljs.core.Keyword(null,"target","target",253001721));
var stop_updating = cljs.core.get.call(null,map__33113__$1,new cljs.core.Keyword(null,"stop-updating","stop-updating",917720475));
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.not.call(null,updated_prop),new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (self__$1,map__33113,map__33113__$1,updated_prop,target,stop_updating){
return (function (ext){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),ext.call(null,new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"y","y",-1757859776),(-25)], null);
});})(self__$1,map__33113,map__33113__$1,updated_prop,target,stop_updating))
),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (self__$1,map__33113,map__33113__$1,updated_prop,target,stop_updating){
return (function (e){
e.stopPropagation();

transmorphic.core.remove_morph_BANG_.call(null,target);

cljs.core.reset_BANG_.call(null,transmorphic.event.meta_focus,null);

return stop_updating.call(null);
});})(self__$1,map__33113,map__33113__$1,updated_prop,target,stop_updating))
], null),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"closeImage",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/close.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.close-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33108){
var self__ = this;
var G__33108__$1 = this;
return (new cljs.core.RecordIter((0),G__33108__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.close_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.close_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33108){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33115 = cljs.core.keyword_identical_QMARK_;
var expr__33116 = k__17447__auto__;
if(cljs.core.truth_(pred__33115.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33116))){
return (new transmorphic.tools.halo.close_button_STAR_(G__33108,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33115.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33116))){
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,G__33108,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33115.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33116))){
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,G__33108,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33115.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33116))){
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__33108,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33115.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33116))){
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33108,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33115.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33116))){
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33108,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33115.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33116))){
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33108,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33115.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33116))){
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33108,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33115.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33116))){
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33108,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33108),null));
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

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33108){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.close_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33108,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.close_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.close_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.close_button_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.close_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/close-button*");
});

transmorphic.tools.halo.close_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/close-button*");
});

transmorphic.tools.halo.__GT_close_button_STAR_ = (function transmorphic$tools$halo$__GT_close_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.close_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_close_button_STAR_ = (function transmorphic$tools$halo$map__GT_close_button_STAR_(G__33110){
return (new transmorphic.tools.halo.close_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33110),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33110),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33110),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33110),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33110),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33110),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33110),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33110),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33110),null,cljs.core.dissoc.call(null,G__33110,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.close_button = (function transmorphic$tools$halo$close_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33124 = arguments.length;
var i__17884__auto___33125 = (0);
while(true){
if((i__17884__auto___33125 < len__17883__auto___33124)){
args__17890__auto__.push((arguments[i__17884__auto___33125]));

var G__33126 = (i__17884__auto___33125 + (1));
i__17884__auto___33125 = G__33126;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.close_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.close_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_close_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"closeImage",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/close.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ext","ext",643566986,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"ext","ext",643566986,null),new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"y","y",-1757859776),(-25)], null))),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"remove-morph!","remove-morph!",200728449,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"meta-focus","meta-focus",-1603875642,null),null),cljs.core.list(new cljs.core.Symbol(null,"stop-updating","stop-updating",-1736715294,null)))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33120){
var map__33121 = p__33120;
var map__33121__$1 = ((((!((map__33121 == null)))?((((map__33121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33121):map__33121);
var m_1 = cljs.core.get.call(null,map__33121__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stop-updating","stop-updating",-1736715294,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"close-button","close-button",-768897648,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.close_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.close_button.cljs$lang$applyTo = (function (seq33118){
var G__33119 = cljs.core.first.call(null,seq33118);
var seq33118__$1 = cljs.core.next.call(null,seq33118);
return transmorphic.tools.halo.close_button.cljs$core$IFn$_invoke$arity$variadic(G__33119,seq33118__$1);
});
transmorphic.tools.halo.inspect_button;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {transmorphic.core.IComponent_QMARK_}
 * @implements {transmorphic.core.IRender}
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
transmorphic.tools.halo.inspect_button_STAR_ = (function (component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,__meta,__extmap,__hash){
this.component_id = component_id;
this.local_state = local_state;
this.parent = parent;
this.props = props;
this.txs = txs;
this.reconciler = reconciler;
this.abstraction = abstraction;
this.submorphs = submorphs;
this.source_location = source_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
transmorphic.tools.halo.inspect_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$ = true;

transmorphic.tools.halo.inspect_button_STAR_.prototype.transmorphic$core$IComponent_QMARK_$component_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return true;
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17439__auto__,k__17440__auto__){
var self__ = this;
var this__17439__auto____$1 = this;
return cljs.core._lookup.call(null,this__17439__auto____$1,k__17440__auto__,null);
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17441__auto__,k33128,else__17442__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var G__33130 = (((k33128 instanceof cljs.core.Keyword))?k33128.fqn:null);
switch (G__33130) {
case "component-id":
return self__.component_id;

break;
case "local-state":
return self__.local_state;

break;
case "parent":
return self__.parent;

break;
case "props":
return self__.props;

break;
case "txs":
return self__.txs;

break;
case "reconciler":
return self__.reconciler;

break;
case "abstraction":
return self__.abstraction;

break;
case "submorphs":
return self__.submorphs;

break;
case "source-location":
return self__.source_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33128,else__17442__auto__);

}
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.transmorphic$core$IRender$ = true;

transmorphic.tools.halo.inspect_button_STAR_.prototype.transmorphic$core$IRender$render$arity$4 = (function (self,p__33131,_,render_ctx__30602__auto__){
var self__ = this;
var map__33132 = p__33131;
var map__33132__$1 = ((((!((map__33132 == null)))?((((map__33132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33132):map__33132);
var updated_prop = cljs.core.get.call(null,map__33132__$1,new cljs.core.Keyword(null,"updated-prop","updated-prop",-337197877));
var target = cljs.core.get.call(null,map__33132__$1,new cljs.core.Keyword(null,"target","target",253001721));
var self__$1 = this;
return transmorphic.core.wrap_morph.call(null,transmorphic.core.ellipse.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (self__$1,map__33132,map__33132__$1,updated_prop,target){
return (function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.call(null,transmorphic.tools.function_inspector.inspected_morphs,cljs.core.conj,transmorphic.core.get_ref.call(null,target));
});})(self__$1,map__33132,map__33132__$1,updated_prop,target))
,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.not.call(null,updated_prop),new cljs.core.Keyword(null,"position","position",-2011731912),transmorphic.morph.$parent.call(null,new cljs.core.Keyword(null,"extent","extent",-186399820),((function (self__$1,map__33132,map__33132__$1,updated_prop,target){
return (function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),v.call(null,new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"y","y",-1757859776),((v.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) * .66) - (25))], null);
});})(self__$1,map__33132,map__33132__$1,updated_prop,target))
)], null),cljs.core.assoc.call(null,transmorphic.core.image.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"infoImage",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/info.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null)),new cljs.core.Keyword(null,"source-location","source-location",17618786),(2))),cljs.core.assoc.call(null,render_ctx__30602__auto__,new cljs.core.Keyword(null,"source-location","source-location",17618786),(1)));
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17453__auto__,writer__17454__auto__,opts__17455__auto__){
var self__ = this;
var this__17453__auto____$1 = this;
var pr_pair__17456__auto__ = ((function (this__17453__auto____$1){
return (function (keyval__17457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,cljs.core.pr_writer,""," ","",opts__17455__auto__,keyval__17457__auto__);
});})(this__17453__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17454__auto__,pr_pair__17456__auto__,"#transmorphic.tools.halo.inspect-button*{",", ","}",opts__17455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$IIterable$ = true;

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33127){
var self__ = this;
var G__33127__$1 = this;
return (new cljs.core.RecordIter((0),G__33127__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17437__auto__){
var self__ = this;
var this__17437__auto____$1 = this;
return self__.__meta;
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17433__auto__){
var self__ = this;
var this__17433__auto____$1 = this;
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17443__auto__){
var self__ = this;
var this__17443__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17434__auto__){
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

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17435__auto__,other__17436__auto__){
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

transmorphic.tools.halo.inspect_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$ = true;

transmorphic.tools.halo.inspect_button_STAR_.prototype.transmorphic$core$IMorph_QMARK_$morph_QMARK_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return false;
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17448__auto__,k__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"source-location","source-location",17618786),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"txs","txs",2056038378),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"props","props",453281727),null], null), null),k__17449__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17448__auto____$1),self__.__meta),k__17449__auto__);
} else {
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17449__auto__)),null));
}
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17446__auto__,k__17447__auto__,G__33127){
var self__ = this;
var this__17446__auto____$1 = this;
var pred__33134 = cljs.core.keyword_identical_QMARK_;
var expr__33135 = k__17447__auto__;
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),expr__33135))){
return (new transmorphic.tools.halo.inspect_button_STAR_(G__33127,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__33135))){
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,G__33127,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33135))){
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,G__33127,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"props","props",453281727),expr__33135))){
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,self__.parent,G__33127,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"txs","txs",2056038378),expr__33135))){
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,G__33127,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__33135))){
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,G__33127,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"abstraction","abstraction",877248569),expr__33135))){
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,G__33127,self__.submorphs,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"submorphs","submorphs",360747770),expr__33135))){
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,G__33127,self__.source_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"source-location","source-location",17618786),expr__33135))){
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,G__33127,self__.__meta,self__.__extmap,null));
} else {
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17447__auto__,G__33127),null));
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

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17451__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component-id","component-id",1551113783),self__.component_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",453281727),self__.props],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txs","txs",2056038378),self__.txs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abstraction","abstraction",877248569),self__.abstraction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"submorphs","submorphs",360747770),self__.submorphs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-location","source-location",17618786),self__.source_location],null))], null),self__.__extmap));
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17438__auto__,G__33127){
var self__ = this;
var this__17438__auto____$1 = this;
return (new transmorphic.tools.halo.inspect_button_STAR_(self__.component_id,self__.local_state,self__.parent,self__.props,self__.txs,self__.reconciler,self__.abstraction,self__.submorphs,self__.source_location,G__33127,self__.__extmap,self__.__hash));
});

transmorphic.tools.halo.inspect_button_STAR_.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17444__auto__,entry__17445__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17445__auto__)){
return cljs.core._assoc.call(null,this__17444__auto____$1,cljs.core._nth.call(null,entry__17445__auto__,(0)),cljs.core._nth.call(null,entry__17445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17444__auto____$1,entry__17445__auto__);
}
});

transmorphic.tools.halo.inspect_button_STAR_.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"txs","txs",-598397391,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"abstraction","abstraction",-1777187200,null),new cljs.core.Symbol(null,"submorphs","submorphs",2001279297,null),new cljs.core.Symbol(null,"source-location","source-location",1658150313,null)], null);
});

transmorphic.tools.halo.inspect_button_STAR_.cljs$lang$type = true;

transmorphic.tools.halo.inspect_button_STAR_.cljs$lang$ctorPrSeq = (function (this__17473__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"transmorphic.tools.halo/inspect-button*");
});

transmorphic.tools.halo.inspect_button_STAR_.cljs$lang$ctorPrWriter = (function (this__17473__auto__,writer__17474__auto__){
return cljs.core._write.call(null,writer__17474__auto__,"transmorphic.tools.halo/inspect-button*");
});

transmorphic.tools.halo.__GT_inspect_button_STAR_ = (function transmorphic$tools$halo$__GT_inspect_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location){
return (new transmorphic.tools.halo.inspect_button_STAR_(component_id,local_state,parent,props,txs,reconciler,abstraction,submorphs,source_location,null,null,null));
});

transmorphic.tools.halo.map__GT_inspect_button_STAR_ = (function transmorphic$tools$halo$map__GT_inspect_button_STAR_(G__33129){
return (new transmorphic.tools.halo.inspect_button_STAR_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__33129),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__33129),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33129),new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__33129),new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(G__33129),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__33129),new cljs.core.Keyword(null,"abstraction","abstraction",877248569).cljs$core$IFn$_invoke$arity$1(G__33129),new cljs.core.Keyword(null,"submorphs","submorphs",360747770).cljs$core$IFn$_invoke$arity$1(G__33129),new cljs.core.Keyword(null,"source-location","source-location",17618786).cljs$core$IFn$_invoke$arity$1(G__33129),null,cljs.core.dissoc.call(null,G__33129,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"local-state","local-state",-282143524),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),new cljs.core.Keyword(null,"source-location","source-location",17618786)),null));
});


transmorphic.tools.halo.inspect_button = (function transmorphic$tools$halo$inspect_button(var_args){
var args__17890__auto__ = [];
var len__17883__auto___33143 = arguments.length;
var i__17884__auto___33144 = (0);
while(true){
if((i__17884__auto___33144 < len__17883__auto___33143)){
args__17890__auto__.push((arguments[i__17884__auto___33144]));

var G__33145 = (i__17884__auto___33144 + (1));
i__17884__auto___33144 = G__33145;
continue;
} else {
}
break;
}

var argseq__17891__auto__ = ((((1) < args__17890__auto__.length))?(new cljs.core.IndexedSeq(args__17890__auto__.slice((1)),(0))):null);
return transmorphic.tools.halo.inspect_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17891__auto__);
});

transmorphic.tools.halo.inspect_button.cljs$core$IFn$_invoke$arity$variadic = (function (props__30808__auto__,submorphs__30809__auto__){
return transmorphic.tools.halo.map__GT_inspect_button_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.PersistentArrayMap(null, 4, [(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"image","image",1581806431,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"infoImage",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-5),new cljs.core.Keyword(null,"y","y",-1757859776),(-5)], null),new cljs.core.Keyword(null,"url","url",276297046),"/media/halos/info.svg",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(15),new cljs.core.Keyword(null,"y","y",-1757859776),(15)], null)], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),cljs.core.PersistentVector.EMPTY], null),(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (self,props_txs,submorphs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(255,255,255,0.4)",new cljs.core.Keyword(null,"extent","extent",-186399820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"inspected-morphs","inspected-morphs",1905953633,null),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.list(new cljs.core.Symbol(null,"get-ref","get-ref",1510914456,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.list(new cljs.core.Symbol(null,"$parent","$parent",-1998757998,null),new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.list(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"y","y",-1757859776)),new cljs.core.Symbol(null,".66",".66",-489623068,null)),(25))], null)))], null),props_txs),submorphs);
}),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"removed","removed",609626430),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reification","reification",1115803776),(function (p__33139){
var map__33140 = p__33139;
var map__33140__$1 = ((((!((map__33140 == null)))?((((map__33140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33140):map__33140);
var m_1 = cljs.core.get.call(null,map__33140__$1,new cljs.core.Keyword(null,"m_1","m_1",1111378532));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("transmorphic.core","IRender","transmorphic.core/IRender",-1863498877,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render","render",232498073,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"updated-prop","updated-prop",1303333650,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null)))], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_1], null)))], null)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"submorph-locations","submorph-locations",892271187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.Keyword(null,"abstraction","abstraction",877248569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"transmorphic.tools.halo","transmorphic.tools.halo",-729602107,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"inspect-button","inspect-button",2081529156,null)], null),new cljs.core.Keyword(null,"submorphs","submorphs",360747770),submorphs__30809__auto__,new cljs.core.Keyword(null,"props","props",453281727),props__30808__auto__], null));
});

transmorphic.tools.halo.inspect_button.cljs$lang$maxFixedArity = (1);

transmorphic.tools.halo.inspect_button.cljs$lang$applyTo = (function (seq33137){
var G__33138 = cljs.core.first.call(null,seq33137);
var seq33137__$1 = cljs.core.next.call(null,seq33137);
return transmorphic.tools.halo.inspect_button.cljs$core$IFn$_invoke$arity$variadic(G__33138,seq33137__$1);
});

//# sourceMappingURL=halo.js.map
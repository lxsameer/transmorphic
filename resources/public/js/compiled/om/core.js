// Compiled by ClojureScript 1.7.170 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.display_name[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core.display_name["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.init_state[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core.init_state["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.should_update[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,next_props,next_state);
} else {
var m__17481__auto____$1 = (om.core.should_update["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.will_mount[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core.will_mount["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.did_mount[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core.did_mount["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.will_unmount[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.will_update[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,next_props,next_state);
} else {
var m__17481__auto____$1 = (om.core.will_update["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.did_update[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__17481__auto____$1 = (om.core.did_update["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.will_receive_props[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,next_props);
} else {
var m__17481__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.render[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core.render["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.render_props[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,props,state);
} else {
var m__17481__auto____$1 = (om.core.render_props["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core.render_state[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,state);
} else {
var m__17481__auto____$1 = (om.core.render_state["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__17481__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args29216 = [];
var len__17883__auto___29219 = arguments.length;
var i__17884__auto___29220 = (0);
while(true){
if((i__17884__auto___29220 < len__17883__auto___29219)){
args29216.push((arguments[i__17884__auto___29220]));

var G__29221 = (i__17884__auto___29220 + (1));
i__17884__auto___29220 = G__29221;
continue;
} else {
}
break;
}

var G__29218 = args29216.length;
switch (G__29218) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29216.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._get_state[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core._get_state["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._get_state[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,ks);
} else {
var m__17481__auto____$1 = (om.core._get_state["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args29223 = [];
var len__17883__auto___29226 = arguments.length;
var i__17884__auto___29227 = (0);
while(true){
if((i__17884__auto___29227 < len__17883__auto___29226)){
args29223.push((arguments[i__17884__auto___29227]));

var G__29228 = (i__17884__auto___29227 + (1));
i__17884__auto___29227 = G__29228;
continue;
} else {
}
break;
}

var G__29225 = args29223.length;
switch (G__29225) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29223.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._get_render_state[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._get_render_state[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,ks);
} else {
var m__17481__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args29230 = [];
var len__17883__auto___29233 = arguments.length;
var i__17884__auto___29234 = (0);
while(true){
if((i__17884__auto___29234 < len__17883__auto___29233)){
args29230.push((arguments[i__17884__auto___29234]));

var G__29235 = (i__17884__auto___29234 + (1));
i__17884__auto___29234 = G__29235;
continue;
} else {
}
break;
}

var G__29232 = args29230.length;
switch (G__29232) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29230.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,val,render);
} else {
var m__17481__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,ks,val,render);
} else {
var m__17481__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._get_queue[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core._get_queue["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,c);
} else {
var m__17481__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__17480__auto__ = (((x == null))?null:x);
var m__17481__auto__ = (om.core._value[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,x);
} else {
var m__17481__auto____$1 = (om.core._value["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__17480__auto__ = (((cursor == null))?null:cursor);
var m__17481__auto__ = (om.core._path[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,cursor);
} else {
var m__17481__auto____$1 = (om.core._path["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__17480__auto__ = (((cursor == null))?null:cursor);
var m__17481__auto__ = (om.core._state[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,cursor);
} else {
var m__17481__auto____$1 = (om.core._state["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args29237 = [];
var len__17883__auto___29240 = arguments.length;
var i__17884__auto___29241 = (0);
while(true){
if((i__17884__auto___29241 < len__17883__auto___29240)){
args29237.push((arguments[i__17884__auto___29241]));

var G__29242 = (i__17884__auto___29241 + (1));
i__17884__auto___29241 = G__29242;
continue;
} else {
}
break;
}

var G__29239 = args29237.length;
switch (G__29239) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29237.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__17480__auto__ = (((value == null))?null:value);
var m__17481__auto__ = (om.core._to_cursor[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,value,state);
} else {
var m__17481__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__17480__auto__ = (((value == null))?null:value);
var m__17481__auto__ = (om.core._to_cursor[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,value,state,path);
} else {
var m__17481__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__17480__auto__ = (((cursor == null))?null:cursor);
var m__17481__auto__ = (om.core._derive[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,cursor,derived,state,path);
} else {
var m__17481__auto____$1 = (om.core._derive["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

om.core.to_cursor;
(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__17480__auto__ = (((cursor == null))?null:cursor);
var m__17481__auto__ = (om.core._transact_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,cursor,korks,f,tag);
} else {
var m__17481__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__17480__auto__ = (((x == null))?null:x);
var m__17481__auto__ = (om.core._listen_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,x,key,tx_listen);
} else {
var m__17481__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__17480__auto__ = (((x == null))?null:x);
var m__17481__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,x,key);
} else {
var m__17481__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__17480__auto__ = (((x == null))?null:x);
var m__17481__auto__ = (om.core._notify_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__17481__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,id,p,val);
} else {
var m__17481__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,id,p);
} else {
var m__17481__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,id);
} else {
var m__17481__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._get_property[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,id,p);
} else {
var m__17481__auto____$1 = (om.core._get_property["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__17480__auto__ = (((cursor == null))?null:cursor);
var m__17481__auto__ = (om.core._root_key[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,cursor);
} else {
var m__17481__auto____$1 = (om.core._root_key["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._adapt[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,other);
} else {
var m__17481__auto____$1 = (om.core._adapt["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,c);
} else {
var m__17481__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$,c);
} else {
var m__17481__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__17480__auto__ = (((this$ == null))?null:this$);
var m__17481__auto__ = (om.core._get_deps[goog.typeOf(x__17480__auto__)]);
if(!((m__17481__auto__ == null))){
return m__17481__auto__.call(null,this$);
} else {
var m__17481__auto____$1 = (om.core._get_deps["_"]);
if(!((m__17481__auto____$1 == null))){
return m__17481__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.notify_STAR_;
om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args29248 = [];
var len__17883__auto___29252 = arguments.length;
var i__17884__auto___29253 = (0);
while(true){
if((i__17884__auto___29253 < len__17883__auto___29252)){
args29248.push((arguments[i__17884__auto___29253]));

var G__29254 = (i__17884__auto___29253 + (1));
i__17884__auto___29253 = G__29254;
continue;
} else {
}
break;
}

var G__29250 = args29248.length;
switch (G__29250) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29248.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__29251 = (x.props["__om_cursor"]);
var G__29251__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__29251,korks__$1):G__29251);
return G__29251__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args29256 = [];
var len__17883__auto___29259 = arguments.length;
var i__17884__auto___29260 = (0);
while(true){
if((i__17884__auto___29260 < len__17883__auto___29259)){
args29256.push((arguments[i__17884__auto___29260]));

var G__29261 = (i__17884__auto___29260 + (1));
i__17884__auto___29260 = G__29261;
continue;
} else {
}
break;
}

var G__29258 = args29256.length;
switch (G__29258) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29256.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args29263 = [];
var len__17883__auto___29266 = arguments.length;
var i__17884__auto___29267 = (0);
while(true){
if((i__17884__auto___29267 < len__17883__auto___29266)){
args29263.push((arguments[i__17884__auto___29267]));

var G__29268 = (i__17884__auto___29267 + (1));
i__17884__auto___29267 = G__29268;
continue;
} else {
}
break;
}

var G__29265 = args29263.length;
switch (G__29265) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29263.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__29271 = state;
(G__29271["__om_prev_state"] = (state["__om_state"]));

(G__29271["__om_state"] = pending_state);

(G__29271["__om_pending_state"] = null);

return G__29271;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args29272 = [];
var len__17883__auto___29275 = arguments.length;
var i__17884__auto___29276 = (0);
while(true){
if((i__17884__auto___29276 < len__17883__auto___29275)){
args29272.push((arguments[i__17884__auto___29276]));

var G__29277 = (i__17884__auto___29276 + (1));
i__17884__auto___29276 = G__29277;
continue;
} else {
}
break;
}

var G__29274 = args29272.length;
switch (G__29274) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29272.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__16825__auto__ = props;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__16825__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.unobserve;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_29301 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__16825__auto__ = (state_29301["__om_prev_state"]);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (state_29301["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__29282 = cljs.core.seq.call(null,refs);
var chunk__29283 = null;
var count__29284 = (0);
var i__29285 = (0);
while(true){
if((i__29285 < count__29284)){
var ref = cljs.core._nth.call(null,chunk__29283,i__29285);
om.core.unobserve.call(null,this$,ref);

var G__29302 = seq__29282;
var G__29303 = chunk__29283;
var G__29304 = count__29284;
var G__29305 = (i__29285 + (1));
seq__29282 = G__29302;
chunk__29283 = G__29303;
count__29284 = G__29304;
i__29285 = G__29305;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__29282);
if(temp__4425__auto____$1){
var seq__29282__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29282__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__29282__$1);
var G__29306 = cljs.core.chunk_rest.call(null,seq__29282__$1);
var G__29307 = c__17628__auto__;
var G__29308 = cljs.core.count.call(null,c__17628__auto__);
var G__29309 = (0);
seq__29282 = G__29306;
chunk__29283 = G__29307;
count__29284 = G__29308;
i__29285 = G__29309;
continue;
} else {
var ref = cljs.core.first.call(null,seq__29282__$1);
om.core.unobserve.call(null,this$,ref);

var G__29310 = cljs.core.next.call(null,seq__29282__$1);
var G__29311 = null;
var G__29312 = (0);
var G__29313 = (0);
seq__29282 = G__29310;
chunk__29283 = G__29311;
count__29284 = G__29312;
i__29285 = G__29313;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__16813__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__16813__auto__)){
var and__16813__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__16813__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__16813__auto____$1;
}
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__16813__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__16813__auto__){
return cljs.core.some.call(null,((function (and__16813__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__29279_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__29279_SHARP_);
});})(and__16813__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__16813__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_29288 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_29289 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_29290 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_29291 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_29292 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_29292;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_29291;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_29290;

om.core._STAR_state_STAR_ = _STAR_state_STAR_29289;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_29288;
}}),(function (next_props,next_state){
var this$ = this;
var c_29314 = om.core.children.call(null,this$);
if(((!((c_29314 == null)))?(((false) || (c_29314.om$core$IWillUpdate$))?true:(((!c_29314.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_29314):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_29314))){
var state_29315 = this$.state;
om.core.will_update.call(null,c_29314,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__16825__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__16825__auto__ = id;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_29316 = om.core.children.call(null,this$);
if(((!((c_29316 == null)))?(((false) || (c_29316.om$core$IWillMount$))?true:(((!c_29316.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_29316):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_29316))){
om.core.will_mount.call(null,c_29316);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x29318 = obj;
x29318.om$core$ISetState$ = true;

x29318.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x29318){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__16813__auto__ = !((app_state == null));
if(and__16813__auto__){
return render;
} else {
return and__16813__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x29318))
;

x29318.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x29318){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__16813__auto__ = !((app_state == null));
if(and__16813__auto__){
return render;
} else {
return and__16813__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x29318))
;

x29318.om$core$IGetRenderState$ = true;

x29318.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x29318){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x29318))
;

x29318.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x29318){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x29318))
;

x29318.om$core$IGetState$ = true;

x29318.om$core$IGetState$_get_state$arity$1 = ((function (x29318){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__16825__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (state["__om_state"]);
}
});})(x29318))
;

x29318.om$core$IGetState$_get_state$arity$2 = ((function (x29318){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x29318))
;

return x29318;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.get_node;
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.mounted_QMARK_;
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__16825__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__16825__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_29329 = om.core.children.call(null,this$);
if(((!((c_29329 == null)))?(((false) || (c_29329.om$core$IWillMount$))?true:(((!c_29329.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_29329):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_29329))){
om.core.will_mount.call(null,c_29329);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__29323 = cljs.core.seq.call(null,refs);
var chunk__29324 = null;
var count__29325 = (0);
var i__29326 = (0);
while(true){
if((i__29326 < count__29325)){
var ref = cljs.core._nth.call(null,chunk__29324,i__29326);
om.core.unobserve.call(null,this$,ref);

var G__29330 = seq__29323;
var G__29331 = chunk__29324;
var G__29332 = count__29325;
var G__29333 = (i__29326 + (1));
seq__29323 = G__29330;
chunk__29324 = G__29331;
count__29325 = G__29332;
i__29326 = G__29333;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__29323);
if(temp__4425__auto____$1){
var seq__29323__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29323__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__29323__$1);
var G__29334 = cljs.core.chunk_rest.call(null,seq__29323__$1);
var G__29335 = c__17628__auto__;
var G__29336 = cljs.core.count.call(null,c__17628__auto__);
var G__29337 = (0);
seq__29323 = G__29334;
chunk__29324 = G__29335;
count__29325 = G__29336;
i__29326 = G__29337;
continue;
} else {
var ref = cljs.core.first.call(null,seq__29323__$1);
om.core.unobserve.call(null,this$,ref);

var G__29338 = cljs.core.next.call(null,seq__29323__$1);
var G__29339 = null;
var G__29340 = (0);
var G__29341 = (0);
seq__29323 = G__29338;
chunk__29324 = G__29339;
count__29325 = G__29340;
i__29326 = G__29341;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_29342 = this$.props;
var c_29343 = om.core.children.call(null,this$);
if(((!((c_29343 == null)))?(((false) || (c_29343.om$core$IWillUpdate$))?true:(((!c_29343.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_29343):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_29343))){
var state_29344 = this$.state;
om.core.will_update.call(null,c_29343,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_29345 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__16825__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x29347 = cljs.core.clj__GT_js.call(null,methods$);
x29347.om$core$ISetState$ = true;

x29347.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x29347){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__16813__auto__ = !((gstate == null));
if(and__16813__auto__){
return render;
} else {
return and__16813__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x29347))
;

x29347.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x29347){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x29347))
;

x29347.om$core$IGetRenderState$ = true;

x29347.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x29347){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x29347))
;

x29347.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x29347){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x29347))
;

x29347.om$core$IGetState$ = true;

x29347.om$core$IGetState$_get_state$arity$1 = ((function (x29347){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__16825__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x29347))
;

x29347.om$core$IGetState$_get_state$arity$2 = ((function (x29347){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x29347))
;

return x29347;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__29351){
var vec__29352 = p__29351;
var k = cljs.core.nth.call(null,vec__29352,(0),null);
var v = cljs.core.nth.call(null,vec__29352,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__29353 = null;
var G__29353__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__29353__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__29353 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29353__2.call(this,self__,k);
case 3:
return G__29353__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29353.cljs$core$IFn$_invoke$arity$2 = G__29353__2;
G__29353.cljs$core$IFn$_invoke$arity$3 = G__29353__3;
return G__29353;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args29350){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29350)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__29355 = null;
var G__29355__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__29355__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__29355 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29355__2.call(this,self__,k);
case 3:
return G__29355__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29355.cljs$core$IFn$_invoke$arity$2 = G__29355__2;
G__29355.cljs$core$IFn$_invoke$arity$3 = G__29355__3;
return G__29355;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args29354){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29354)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__17423__auto__,writer__17424__auto__,opt__17425__auto__){
return cljs.core._write.call(null,writer__17424__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x29357 = cljs.core.clone.call(null,val);
x29357.cljs$core$IDeref$ = true;

x29357.cljs$core$IDeref$_deref$arity$1 = ((function (x29357){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x29357))
;

x29357.om$core$ICursor$ = true;

x29357.om$core$ICursor$_path$arity$1 = ((function (x29357){
return (function (_){
var ___$1 = this;
return path;
});})(x29357))
;

x29357.om$core$ICursor$_state$arity$1 = ((function (x29357){
return (function (_){
var ___$1 = this;
return state;
});})(x29357))
;

x29357.om$core$ITransact$ = true;

x29357.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x29357){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x29357))
;

x29357.cljs$core$IEquiv$ = true;

x29357.cljs$core$IEquiv$_equiv$arity$2 = ((function (x29357){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x29357))
;

return x29357;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args29358 = [];
var len__17883__auto___29363 = arguments.length;
var i__17884__auto___29364 = (0);
while(true){
if((i__17884__auto___29364 < len__17883__auto___29363)){
args29358.push((arguments[i__17884__auto___29364]));

var G__29365 = (i__17884__auto___29364 + (1));
i__17884__auto___29364 = G__29365;
continue;
} else {
}
break;
}

var G__29360 = args29358.length;
switch (G__29360) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29358.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.commit_BANG_;

om.core.id;

om.core.refresh_props_BANG_;
/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x29370 = cljs.core.clone.call(null,x);
x29370.cljs$core$ICloneable$ = true;

x29370.cljs$core$ICloneable$_clone$arity$1 = ((function (x29370){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x29370))
;

x29370.om$core$IAdapt$ = true;

x29370.om$core$IAdapt$_adapt$arity$2 = ((function (x29370){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x29370))
;

x29370.om$core$ICursorDerive$ = true;

x29370.om$core$ICursorDerive$_derive$arity$4 = ((function (x29370){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x29370))
;

x29370.om$core$ITransact$ = true;

x29370.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x29370){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x29370))
;

return x29370;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x29378 = cljs.core.clone.call(null,cursor);
x29378.om$core$ICursorDerive$ = true;

x29378.om$core$ICursorDerive$_derive$arity$4 = ((function (x29378,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x29378,path,storage))
;

x29378.om$core$IOmRef$ = true;

x29378.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x29378,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x29378,path,storage))
;

x29378.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x29378,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x29378,path,storage))
;

x29378.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x29378,path,storage){
return (function (_){
var ___$1 = this;
var seq__29379 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__29380 = null;
var count__29381 = (0);
var i__29382 = (0);
while(true){
if((i__29382 < count__29381)){
var c = cljs.core._nth.call(null,chunk__29380,i__29382);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__29383 = seq__29379;
var G__29384 = chunk__29380;
var G__29385 = count__29381;
var G__29386 = (i__29382 + (1));
seq__29379 = G__29383;
chunk__29380 = G__29384;
count__29381 = G__29385;
i__29382 = G__29386;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29379);
if(temp__4425__auto__){
var seq__29379__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29379__$1)){
var c__17628__auto__ = cljs.core.chunk_first.call(null,seq__29379__$1);
var G__29387 = cljs.core.chunk_rest.call(null,seq__29379__$1);
var G__29388 = c__17628__auto__;
var G__29389 = cljs.core.count.call(null,c__17628__auto__);
var G__29390 = (0);
seq__29379 = G__29387;
chunk__29380 = G__29388;
count__29381 = G__29389;
i__29382 = G__29390;
continue;
} else {
var c = cljs.core.first.call(null,seq__29379__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__29391 = cljs.core.next.call(null,seq__29379__$1);
var G__29392 = null;
var G__29393 = (0);
var G__29394 = (0);
seq__29379 = G__29391;
chunk__29380 = G__29392;
count__29381 = G__29393;
i__29382 = G__29394;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29378,path,storage))
;

x29378.om$core$IOmRef$_get_deps$arity$1 = ((function (x29378,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x29378,path,storage))
;

x29378.om$core$ITransact$ = true;

x29378.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x29378,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x29378,path,storage))
;

return x29378;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__16825__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ref-cursor?","ref-cursor?",1026875459,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__16825__auto__ = state.om$render$T;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args29395 = [];
var len__17883__auto___29402 = arguments.length;
var i__17884__auto___29403 = (0);
while(true){
if((i__17884__auto___29403 < len__17883__auto___29402)){
args29395.push((arguments[i__17884__auto___29403]));

var G__29404 = (i__17884__auto___29403 + (1));
i__17884__auto___29403 = G__29404;
continue;
} else {
}
break;
}

var G__29397 = args29395.length;
switch (G__29397) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29395.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__29398_29406 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__29399_29407 = null;
var count__29400_29408 = (0);
var i__29401_29409 = (0);
while(true){
if((i__29401_29409 < count__29400_29408)){
var f_29410 = cljs.core._nth.call(null,chunk__29399_29407,i__29401_29409);
f_29410.call(null);

var G__29411 = seq__29398_29406;
var G__29412 = chunk__29399_29407;
var G__29413 = count__29400_29408;
var G__29414 = (i__29401_29409 + (1));
seq__29398_29406 = G__29411;
chunk__29399_29407 = G__29412;
count__29400_29408 = G__29413;
i__29401_29409 = G__29414;
continue;
} else {
var temp__4425__auto___29415 = cljs.core.seq.call(null,seq__29398_29406);
if(temp__4425__auto___29415){
var seq__29398_29416__$1 = temp__4425__auto___29415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29398_29416__$1)){
var c__17628__auto___29417 = cljs.core.chunk_first.call(null,seq__29398_29416__$1);
var G__29418 = cljs.core.chunk_rest.call(null,seq__29398_29416__$1);
var G__29419 = c__17628__auto___29417;
var G__29420 = cljs.core.count.call(null,c__17628__auto___29417);
var G__29421 = (0);
seq__29398_29406 = G__29418;
chunk__29399_29407 = G__29419;
count__29400_29408 = G__29420;
i__29401_29409 = G__29421;
continue;
} else {
var f_29422 = cljs.core.first.call(null,seq__29398_29416__$1);
f_29422.call(null);

var G__29423 = cljs.core.next.call(null,seq__29398_29416__$1);
var G__29424 = null;
var G__29425 = (0);
var G__29426 = (0);
seq__29398_29406 = G__29423;
chunk__29399_29407 = G__29424;
count__29400_29408 = G__29425;
i__29401_29409 = G__29426;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__16825__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__16825__auto__){
return or__16825__auto__;
} else {
var or__16825__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__16825__auto____$1){
return or__16825__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args29437 = [];
var len__17883__auto___29440 = arguments.length;
var i__17884__auto___29441 = (0);
while(true){
if((i__17884__auto___29441 < len__17883__auto___29440)){
args29437.push((arguments[i__17884__auto___29441]));

var G__29442 = (i__17884__auto___29441 + (1));
i__17884__auto___29441 = G__29442;
continue;
} else {
}
break;
}

var G__29439 = args29437.length;
switch (G__29439) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29437.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_29444 = (function (){var or__16825__auto__ = descriptor;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
var or__16825__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__16825__auto____$1)){
return or__16825__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_29444 === goog.object.get(f,"om$tag"))))){
var factory_29445 = React.createFactory(React.createClass(rdesc_29444));
goog.object.set(f,"om$descriptor",factory_29445);

goog.object.set(f,"om$tag",rdesc_29444);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args29446 = [];
var len__17883__auto___29449 = arguments.length;
var i__17884__auto___29450 = (0);
while(true){
if((i__17884__auto___29450 < len__17883__auto___29449)){
args29446.push((arguments[i__17884__auto___29450]));

var G__29451 = (i__17884__auto___29450 + (1));
i__17884__auto___29450 = G__29451;
continue;
} else {
}
break;
}

var G__29448 = args29446.length;
switch (G__29448) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29446.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args29453 = [];
var len__17883__auto___29458 = arguments.length;
var i__17884__auto___29459 = (0);
while(true){
if((i__17884__auto___29459 < len__17883__auto___29458)){
args29453.push((arguments[i__17884__auto___29459]));

var G__29460 = (i__17884__auto___29459 + (1));
i__17884__auto___29459 = G__29460;
continue;
} else {
}
break;
}

var G__29455 = args29453.length;
switch (G__29455) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29453.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__29456 = m;
var map__29456__$1 = ((((!((map__29456 == null)))?((((map__29456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29456):map__29456);
var key = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__16825__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__29456,map__29456__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__29456,map__29456__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__29456,map__29456__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__29456,map__29456__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__16825__auto__ = rkey;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args29462 = [];
var len__17883__auto___29465 = arguments.length;
var i__17884__auto___29466 = (0);
while(true){
if((i__17884__auto___29466 < len__17883__auto___29465)){
args29462.push((arguments[i__17884__auto___29466]));

var G__29467 = (i__17884__auto___29466 + (1));
i__17884__auto___29466 = G__29467;
continue;
} else {
}
break;
}

var G__29464 = args29462.length;
switch (G__29464) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29462.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args29469 = [];
var len__17883__auto___29472 = arguments.length;
var i__17884__auto___29473 = (0);
while(true){
if((i__17884__auto___29473 < len__17883__auto___29472)){
args29469.push((arguments[i__17884__auto___29473]));

var G__29474 = (i__17884__auto___29473 + (1));
i__17884__auto___29473 = G__29474;
continue;
} else {
}
break;
}

var G__29471 = args29469.length;
switch (G__29471) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29469.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_29492 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_29493 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_29494 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x29485_29495 = state;
x29485_29495.om$core$IRootProperties$ = true;

x29485_29495.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x29485_29495,properties_29492,listeners_29493,render_queue_29494){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_29492,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x29485_29495,properties_29492,listeners_29493,render_queue_29494))
;

x29485_29495.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x29485_29495,properties_29492,listeners_29493,render_queue_29494){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_29492,cljs.core.dissoc,id,k);
});})(x29485_29495,properties_29492,listeners_29493,render_queue_29494))
;

x29485_29495.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x29485_29495,properties_29492,listeners_29493,render_queue_29494){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_29492,cljs.core.dissoc,id);
});})(x29485_29495,properties_29492,listeners_29493,render_queue_29494))
;

x29485_29495.om$core$IRootProperties$_get_property$arity$3 = ((function (x29485_29495,properties_29492,listeners_29493,render_queue_29494){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_29492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x29485_29495,properties_29492,listeners_29493,render_queue_29494))
;

x29485_29495.om$core$INotify$ = true;

x29485_29495.om$core$INotify$_listen_BANG_$arity$3 = ((function (x29485_29495,properties_29492,listeners_29493,render_queue_29494){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_29493,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x29485_29495,properties_29492,listeners_29493,render_queue_29494))
;

x29485_29495.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x29485_29495,properties_29492,listeners_29493,render_queue_29494){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_29493,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x29485_29495,properties_29492,listeners_29493,render_queue_29494))
;

x29485_29495.om$core$INotify$_notify_BANG_$arity$3 = ((function (x29485_29495,properties_29492,listeners_29493,render_queue_29494){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__29486_29496 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_29493));
var chunk__29487_29497 = null;
var count__29488_29498 = (0);
var i__29489_29499 = (0);
while(true){
if((i__29489_29499 < count__29488_29498)){
var vec__29490_29500 = cljs.core._nth.call(null,chunk__29487_29497,i__29489_29499);
var __29501 = cljs.core.nth.call(null,vec__29490_29500,(0),null);
var f_29502 = cljs.core.nth.call(null,vec__29490_29500,(1),null);
f_29502.call(null,tx_data,root_cursor);

var G__29503 = seq__29486_29496;
var G__29504 = chunk__29487_29497;
var G__29505 = count__29488_29498;
var G__29506 = (i__29489_29499 + (1));
seq__29486_29496 = G__29503;
chunk__29487_29497 = G__29504;
count__29488_29498 = G__29505;
i__29489_29499 = G__29506;
continue;
} else {
var temp__4425__auto___29507 = cljs.core.seq.call(null,seq__29486_29496);
if(temp__4425__auto___29507){
var seq__29486_29508__$1 = temp__4425__auto___29507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29486_29508__$1)){
var c__17628__auto___29509 = cljs.core.chunk_first.call(null,seq__29486_29508__$1);
var G__29510 = cljs.core.chunk_rest.call(null,seq__29486_29508__$1);
var G__29511 = c__17628__auto___29509;
var G__29512 = cljs.core.count.call(null,c__17628__auto___29509);
var G__29513 = (0);
seq__29486_29496 = G__29510;
chunk__29487_29497 = G__29511;
count__29488_29498 = G__29512;
i__29489_29499 = G__29513;
continue;
} else {
var vec__29491_29514 = cljs.core.first.call(null,seq__29486_29508__$1);
var __29515 = cljs.core.nth.call(null,vec__29491_29514,(0),null);
var f_29516 = cljs.core.nth.call(null,vec__29491_29514,(1),null);
f_29516.call(null,tx_data,root_cursor);

var G__29517 = cljs.core.next.call(null,seq__29486_29508__$1);
var G__29518 = null;
var G__29519 = (0);
var G__29520 = (0);
seq__29486_29496 = G__29517;
chunk__29487_29497 = G__29518;
count__29488_29498 = G__29519;
i__29489_29499 = G__29520;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x29485_29495,properties_29492,listeners_29493,render_queue_29494))
;

x29485_29495.om$core$IRenderQueue$ = true;

x29485_29495.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x29485_29495,properties_29492,listeners_29493,render_queue_29494){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_29494);
});})(x29485_29495,properties_29492,listeners_29493,render_queue_29494))
;

x29485_29495.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x29485_29495,properties_29492,listeners_29493,render_queue_29494){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_29494),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_29494,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x29485_29495,properties_29492,listeners_29493,render_queue_29494))
;

x29485_29495.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x29485_29495,properties_29492,listeners_29493,render_queue_29494){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_29494,cljs.core.empty);
});})(x29485_29495,properties_29492,listeners_29493,render_queue_29494))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x29522 = cljs.core.clone.call(null,cursor);
x29522.cljs$core$ICloneable$ = true;

x29522.cljs$core$ICloneable$_clone$arity$1 = ((function (x29522){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x29522))
;

x29522.om$core$IAdapt$ = true;

x29522.om$core$IAdapt$_adapt$arity$2 = ((function (x29522){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x29522))
;

x29522.om$core$IRootKey$ = true;

x29522.om$core$IRootKey$_root_key$arity$1 = ((function (x29522){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x29522))
;

return x29522;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__29523){
var map__29587 = p__29523;
var map__29587__$1 = ((((!((map__29587 == null)))?((((map__29587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29587):map__29587);
var options = map__29587__$1;
var target = cljs.core.get.call(null,map__29587__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__29587__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__29587__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__29587__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__29587__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__29587__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__29587__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__29650 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__29650,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__29650,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__16825__auto__ = adapt;
if(cljs.core.truth_(or__16825__auto__)){
return or__16825__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__29587,map__29587__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_29651 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_29620 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_29621 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_29622 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_29623 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_29623;

om.core._STAR_state_STAR_ = _STAR_state_STAR_29622;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_29621;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_29620;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_29651);
} else {
}
}

var queue_29652 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_29652)){
} else {
var seq__29624_29653 = cljs.core.seq.call(null,queue_29652);
var chunk__29625_29654 = null;
var count__29626_29655 = (0);
var i__29627_29656 = (0);
while(true){
if((i__29627_29656 < count__29626_29655)){
var c_29657 = cljs.core._nth.call(null,chunk__29625_29654,i__29627_29656);
if(cljs.core.truth_(c_29657.isMounted())){
var temp__4425__auto___29658 = (c_29657.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___29658)){
var next_props_29659 = temp__4425__auto___29658;
(c_29657.props["__om_cursor"] = next_props_29659);

(c_29657.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__16825__auto__ = !((function (){var G__29629 = om.core.children.call(null,c_29657);
if(!((G__29629 == null))){
if((false) || (G__29629.om$core$ICheckState$)){
return true;
} else {
if((!G__29629.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29629);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29629);
}
})());
if(or__16825__auto__){
return or__16825__auto__;
} else {
return c_29657.shouldComponentUpdate(c_29657.props,c_29657.state);
}
})())){
c_29657.forceUpdate();
} else {
}
} else {
}

var G__29660 = seq__29624_29653;
var G__29661 = chunk__29625_29654;
var G__29662 = count__29626_29655;
var G__29663 = (i__29627_29656 + (1));
seq__29624_29653 = G__29660;
chunk__29625_29654 = G__29661;
count__29626_29655 = G__29662;
i__29627_29656 = G__29663;
continue;
} else {
var temp__4425__auto___29664 = cljs.core.seq.call(null,seq__29624_29653);
if(temp__4425__auto___29664){
var seq__29624_29665__$1 = temp__4425__auto___29664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29624_29665__$1)){
var c__17628__auto___29666 = cljs.core.chunk_first.call(null,seq__29624_29665__$1);
var G__29667 = cljs.core.chunk_rest.call(null,seq__29624_29665__$1);
var G__29668 = c__17628__auto___29666;
var G__29669 = cljs.core.count.call(null,c__17628__auto___29666);
var G__29670 = (0);
seq__29624_29653 = G__29667;
chunk__29625_29654 = G__29668;
count__29626_29655 = G__29669;
i__29627_29656 = G__29670;
continue;
} else {
var c_29671 = cljs.core.first.call(null,seq__29624_29665__$1);
if(cljs.core.truth_(c_29671.isMounted())){
var temp__4425__auto___29672__$1 = (c_29671.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___29672__$1)){
var next_props_29673 = temp__4425__auto___29672__$1;
(c_29671.props["__om_cursor"] = next_props_29673);

(c_29671.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__16825__auto__ = !((function (){var G__29631 = om.core.children.call(null,c_29671);
if(!((G__29631 == null))){
if((false) || (G__29631.om$core$ICheckState$)){
return true;
} else {
if((!G__29631.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29631);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29631);
}
})());
if(or__16825__auto__){
return or__16825__auto__;
} else {
return c_29671.shouldComponentUpdate(c_29671.props,c_29671.state);
}
})())){
c_29671.forceUpdate();
} else {
}
} else {
}

var G__29674 = cljs.core.next.call(null,seq__29624_29665__$1);
var G__29675 = null;
var G__29676 = (0);
var G__29677 = (0);
seq__29624_29653 = G__29674;
chunk__29625_29654 = G__29675;
count__29626_29655 = G__29676;
i__29627_29656 = G__29677;
continue;
}
} else {
}
}
break;
}
}

var _refs_29678 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_29678)){
} else {
var seq__29632_29679 = cljs.core.seq.call(null,_refs_29678);
var chunk__29633_29680 = null;
var count__29634_29681 = (0);
var i__29635_29682 = (0);
while(true){
if((i__29635_29682 < count__29634_29681)){
var vec__29636_29683 = cljs.core._nth.call(null,chunk__29633_29680,i__29635_29682);
var path_29684__$1 = cljs.core.nth.call(null,vec__29636_29683,(0),null);
var cs_29685 = cljs.core.nth.call(null,vec__29636_29683,(1),null);
var cs_29686__$1 = cljs.core.deref.call(null,cs_29685);
var seq__29637_29687 = cljs.core.seq.call(null,cs_29686__$1);
var chunk__29638_29688 = null;
var count__29639_29689 = (0);
var i__29640_29690 = (0);
while(true){
if((i__29640_29690 < count__29639_29689)){
var vec__29641_29691 = cljs.core._nth.call(null,chunk__29638_29688,i__29640_29690);
var id_29692 = cljs.core.nth.call(null,vec__29641_29691,(0),null);
var c_29693 = cljs.core.nth.call(null,vec__29641_29691,(1),null);
if(cljs.core.truth_(c_29693.shouldComponentUpdate(c_29693.props,c_29693.state))){
c_29693.forceUpdate();
} else {
}

var G__29694 = seq__29637_29687;
var G__29695 = chunk__29638_29688;
var G__29696 = count__29639_29689;
var G__29697 = (i__29640_29690 + (1));
seq__29637_29687 = G__29694;
chunk__29638_29688 = G__29695;
count__29639_29689 = G__29696;
i__29640_29690 = G__29697;
continue;
} else {
var temp__4425__auto___29698 = cljs.core.seq.call(null,seq__29637_29687);
if(temp__4425__auto___29698){
var seq__29637_29699__$1 = temp__4425__auto___29698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29637_29699__$1)){
var c__17628__auto___29700 = cljs.core.chunk_first.call(null,seq__29637_29699__$1);
var G__29701 = cljs.core.chunk_rest.call(null,seq__29637_29699__$1);
var G__29702 = c__17628__auto___29700;
var G__29703 = cljs.core.count.call(null,c__17628__auto___29700);
var G__29704 = (0);
seq__29637_29687 = G__29701;
chunk__29638_29688 = G__29702;
count__29639_29689 = G__29703;
i__29640_29690 = G__29704;
continue;
} else {
var vec__29642_29705 = cljs.core.first.call(null,seq__29637_29699__$1);
var id_29706 = cljs.core.nth.call(null,vec__29642_29705,(0),null);
var c_29707 = cljs.core.nth.call(null,vec__29642_29705,(1),null);
if(cljs.core.truth_(c_29707.shouldComponentUpdate(c_29707.props,c_29707.state))){
c_29707.forceUpdate();
} else {
}

var G__29708 = cljs.core.next.call(null,seq__29637_29699__$1);
var G__29709 = null;
var G__29710 = (0);
var G__29711 = (0);
seq__29637_29687 = G__29708;
chunk__29638_29688 = G__29709;
count__29639_29689 = G__29710;
i__29640_29690 = G__29711;
continue;
}
} else {
}
}
break;
}

var G__29712 = seq__29632_29679;
var G__29713 = chunk__29633_29680;
var G__29714 = count__29634_29681;
var G__29715 = (i__29635_29682 + (1));
seq__29632_29679 = G__29712;
chunk__29633_29680 = G__29713;
count__29634_29681 = G__29714;
i__29635_29682 = G__29715;
continue;
} else {
var temp__4425__auto___29716 = cljs.core.seq.call(null,seq__29632_29679);
if(temp__4425__auto___29716){
var seq__29632_29717__$1 = temp__4425__auto___29716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29632_29717__$1)){
var c__17628__auto___29718 = cljs.core.chunk_first.call(null,seq__29632_29717__$1);
var G__29719 = cljs.core.chunk_rest.call(null,seq__29632_29717__$1);
var G__29720 = c__17628__auto___29718;
var G__29721 = cljs.core.count.call(null,c__17628__auto___29718);
var G__29722 = (0);
seq__29632_29679 = G__29719;
chunk__29633_29680 = G__29720;
count__29634_29681 = G__29721;
i__29635_29682 = G__29722;
continue;
} else {
var vec__29643_29723 = cljs.core.first.call(null,seq__29632_29717__$1);
var path_29724__$1 = cljs.core.nth.call(null,vec__29643_29723,(0),null);
var cs_29725 = cljs.core.nth.call(null,vec__29643_29723,(1),null);
var cs_29726__$1 = cljs.core.deref.call(null,cs_29725);
var seq__29644_29727 = cljs.core.seq.call(null,cs_29726__$1);
var chunk__29645_29728 = null;
var count__29646_29729 = (0);
var i__29647_29730 = (0);
while(true){
if((i__29647_29730 < count__29646_29729)){
var vec__29648_29731 = cljs.core._nth.call(null,chunk__29645_29728,i__29647_29730);
var id_29732 = cljs.core.nth.call(null,vec__29648_29731,(0),null);
var c_29733 = cljs.core.nth.call(null,vec__29648_29731,(1),null);
if(cljs.core.truth_(c_29733.shouldComponentUpdate(c_29733.props,c_29733.state))){
c_29733.forceUpdate();
} else {
}

var G__29734 = seq__29644_29727;
var G__29735 = chunk__29645_29728;
var G__29736 = count__29646_29729;
var G__29737 = (i__29647_29730 + (1));
seq__29644_29727 = G__29734;
chunk__29645_29728 = G__29735;
count__29646_29729 = G__29736;
i__29647_29730 = G__29737;
continue;
} else {
var temp__4425__auto___29738__$1 = cljs.core.seq.call(null,seq__29644_29727);
if(temp__4425__auto___29738__$1){
var seq__29644_29739__$1 = temp__4425__auto___29738__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29644_29739__$1)){
var c__17628__auto___29740 = cljs.core.chunk_first.call(null,seq__29644_29739__$1);
var G__29741 = cljs.core.chunk_rest.call(null,seq__29644_29739__$1);
var G__29742 = c__17628__auto___29740;
var G__29743 = cljs.core.count.call(null,c__17628__auto___29740);
var G__29744 = (0);
seq__29644_29727 = G__29741;
chunk__29645_29728 = G__29742;
count__29646_29729 = G__29743;
i__29647_29730 = G__29744;
continue;
} else {
var vec__29649_29745 = cljs.core.first.call(null,seq__29644_29739__$1);
var id_29746 = cljs.core.nth.call(null,vec__29649_29745,(0),null);
var c_29747 = cljs.core.nth.call(null,vec__29649_29745,(1),null);
if(cljs.core.truth_(c_29747.shouldComponentUpdate(c_29747.props,c_29747.state))){
c_29747.forceUpdate();
} else {
}

var G__29748 = cljs.core.next.call(null,seq__29644_29739__$1);
var G__29749 = null;
var G__29750 = (0);
var G__29751 = (0);
seq__29644_29727 = G__29748;
chunk__29645_29728 = G__29749;
count__29646_29729 = G__29750;
i__29647_29730 = G__29751;
continue;
}
} else {
}
}
break;
}

var G__29752 = cljs.core.next.call(null,seq__29632_29717__$1);
var G__29753 = null;
var G__29754 = (0);
var G__29755 = (0);
seq__29632_29679 = G__29752;
chunk__29633_29680 = G__29753;
count__29634_29681 = G__29754;
i__29635_29682 = G__29755;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__29587,map__29587__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29587,map__29587__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29587,map__29587__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29587,map__29587__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29587,map__29587__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29587,map__29587__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29587,map__29587__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29587,map__29587__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29587,map__29587__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args29758 = [];
var len__17883__auto___29761 = arguments.length;
var i__17884__auto___29762 = (0);
while(true){
if((i__17884__auto___29762 < len__17883__auto___29761)){
args29758.push((arguments[i__17884__auto___29762]));

var G__29763 = (i__17884__auto___29762 + (1));
i__17884__auto___29762 = G__29763;
continue;
} else {
}
break;
}

var G__29760 = args29758.length;
switch (G__29760) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29758.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args29765 = [];
var len__17883__auto___29768 = arguments.length;
var i__17884__auto___29769 = (0);
while(true){
if((i__17884__auto___29769 < len__17883__auto___29768)){
args29765.push((arguments[i__17884__auto___29769]));

var G__29770 = (i__17884__auto___29769 + (1));
i__17884__auto___29769 = G__29770;
continue;
} else {
}
break;
}

var G__29767 = args29765.length;
switch (G__29767) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29765.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args29774 = [];
var len__17883__auto___29778 = arguments.length;
var i__17884__auto___29779 = (0);
while(true){
if((i__17884__auto___29779 < len__17883__auto___29778)){
args29774.push((arguments[i__17884__auto___29779]));

var G__29780 = (i__17884__auto___29779 + (1));
i__17884__auto___29779 = G__29780;
continue;
} else {
}
break;
}

var G__29776 = args29774.length;
switch (G__29776) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29774.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__29777 = owner.refs;
var G__29777__$1 = (((G__29777 == null))?null:(G__29777[name]));
var G__29777__$2 = (((G__29777__$1 == null))?null:G__29777__$1.getDOMNode());
return G__29777__$2;
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__29783 = owner.refs;
var G__29783__$1 = (((G__29783 == null))?null:goog.object.get(G__29783,name));
return G__29783__$1;
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args29784 = [];
var len__17883__auto___29787 = arguments.length;
var i__17884__auto___29788 = (0);
while(true){
if((i__17884__auto___29788 < len__17883__auto___29787)){
args29784.push((arguments[i__17884__auto___29788]));

var G__29789 = (i__17884__auto___29788 + (1));
i__17884__auto___29788 = G__29789;
continue;
} else {
}
break;
}

var G__29786 = args29784.length;
switch (G__29786) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29784.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args29791 = [];
var len__17883__auto___29794 = arguments.length;
var i__17884__auto___29795 = (0);
while(true){
if((i__17884__auto___29795 < len__17883__auto___29794)){
args29791.push((arguments[i__17884__auto___29795]));

var G__29796 = (i__17884__auto___29795 + (1));
i__17884__auto___29795 = G__29796;
continue;
} else {
}
break;
}

var G__29793 = args29791.length;
switch (G__29793) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29791.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args29798 = [];
var len__17883__auto___29801 = arguments.length;
var i__17884__auto___29802 = (0);
while(true){
if((i__17884__auto___29802 < len__17883__auto___29801)){
args29798.push((arguments[i__17884__auto___29802]));

var G__29803 = (i__17884__auto___29802 + (1));
i__17884__auto___29802 = G__29803;
continue;
} else {
}
break;
}

var G__29800 = args29798.length;
switch (G__29800) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29798.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args29805 = [];
var len__17883__auto___29808 = arguments.length;
var i__17884__auto___29809 = (0);
while(true){
if((i__17884__auto___29809 < len__17883__auto___29808)){
args29805.push((arguments[i__17884__auto___29809]));

var G__29810 = (i__17884__auto___29809 + (1));
i__17884__auto___29809 = G__29810;
continue;
} else {
}
break;
}

var G__29807 = args29805.length;
switch (G__29807) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29805.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args29812 = [];
var len__17883__auto___29815 = arguments.length;
var i__17884__auto___29816 = (0);
while(true){
if((i__17884__auto___29816 < len__17883__auto___29815)){
args29812.push((arguments[i__17884__auto___29816]));

var G__29817 = (i__17884__auto___29816 + (1));
i__17884__auto___29816 = G__29817;
continue;
} else {
}
break;
}

var G__29814 = args29812.length;
switch (G__29814) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29812.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map
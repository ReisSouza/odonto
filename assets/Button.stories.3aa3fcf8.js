var l=Object.defineProperty;var s=(o,i)=>l(o,"name",{value:i,configurable:!0});import{I as c,r as p,a as f,b as a}from"./index.bdb81842.js";import{a as r,F as t,j as e,r as x}from"./jsx-runtime.0f49c2db.js";import"./index.432d3e08.js";import"./iframe.cc9555c9.js";var n=new Map;n.set("bold",function(o){return r(t,{children:[e("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});n.set("duotone",function(o){return r(t,{children:[e("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});n.set("fill",function(){return e(t,{children:e("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"})})});n.set("light",function(o){return r(t,{children:[e("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});n.set("thin",function(o){return r(t,{children:[e("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});n.set("regular",function(o){return r(t,{children:[e("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var h=s(function(i,u){return p(i,u,n)},"renderPath"),d=x.exports.forwardRef(function(o,i){return e(c,{...Object.assign({ref:i},o,{renderPath:h})})});d.displayName="SignIn";const k=d,v={title:"Buttons/Button",component:f,args:{children:"Enviar",size:"medium",variant:"contained",color:"primary",as:void 0,onMouseDown:void 0,onClick:void 0,onMouseEnter:void 0,onMouseLeave:void 0,onMouseUp:void 0,isLoading:void 0},argTypes:{size:{options:["small","medium","large"],control:{type:"inline-radio"},defaultValue:"medium",description:"Defina o tamanho do bot\xE3o"},color:{options:["primary","secondary","danger","success","tertiary"],control:{type:"inline-radio"},defaultValue:"primary",description:"Defina o a cor de fundo e a cor do texto do bot\xE3o"},variant:{options:["contained","text","outlined"],control:{type:"inline-radio"},defaultValue:"contained",description:"Defina o estilo do bot\xE3o, sendo contained, com fundo preenchido, outlined somente borda e texto, text somente texto"},fullWidth:{control:{type:"boolean"},description:"Defina se o bot\xE3o vai ocupar todo o espa\xE7o poss\xEDvel",defaultValue:!1},onClick:{type:"function",defaultValue:void 0,description:"Fun\xE7\xE3o de evento quando o bot\xE3o e clicado"},onMouseDown:{type:"function",defaultValue:void 0,description:"Fun\xE7\xE3o de evento quando o mouse esta pressionado"},onMouseEnter:{type:"function",defaultValue:void 0,description:"Fun\xE7\xE3o de evento quando o mouse e entra no bot\xE3o"},onMouseLeave:{type:"function",defaultValue:void 0,description:"Fun\xE7\xE3o de evento quando o mouse e sai de cima do bot\xE3o"},onMouseUp:{type:"function",defaultValue:void 0,description:"Fun\xE7\xE3o de evento quando o mouse e liberado"},form:{type:"string",defaultValue:void 0,description:"Vincule o bot\xE3o a um formul\xE1rio"},ariaLabel:{type:"string",defaultValue:void 0,description:"Defina um nome de acessibilidade"},title:{type:"string",defaultValue:void 0,description:"Defina um nome para o bot\xE3o em casos aonde n\xE3o tenha conte\xFAdo escrito"},type:{options:["reset","submit","button"],control:{type:"inline-radio"},defaultValue:"button",description:"Defina qual tipo de a\xE7\xE3o o bot\xE3o vai executar"},as:{type:"string",defaultValue:"button",description:"Defina o elemento html que ser\xE1 revernizado"},disabled:{type:"boolean",defaultValue:!1,description:"Defina se o bot\xE3o est\xE1 ativo para a\xE7\xE3o ou n\xE3o"},autoCapitalize:{options:["on","off","words","characters"],control:{type:"inline-radio"},defaultValue:"off",description:"Defina se o bot\xE3o vai ter capitaliza\xE7\xE3o"},children:{type:"symbol",defaultValue:void 0,description:"Conte\xFAdo interno do bot\xE3o"},iconButton:{defaultValue:void 0,description:"Apenas \xEDcone no bot\xE3o",type:"symbol"},iconLeft:{defaultValue:void 0,description:"\xCDcone a esquerda",type:"symbol"},iconRight:{defaultValue:void 0,description:"\xCDcone a direita",type:"symbol"},isLoading:{defaultValue:!1,description:"Defina se o bot\xE3o esta em estado de carregamento",type:"boolean"}}},b={},V={args:{variant:"outlined"}},W={args:{variant:"text"}},j={args:{size:"small"}},D={args:{size:"medium"}},M={args:{size:"large"}},z={args:{iconLeft:e(a,{size:20})}},I={args:{iconRight:e(k,{size:20})}},B={args:{iconLeft:e(a,{size:20}),iconRight:e(a,{size:20})}},F={args:{iconButton:e(a,{size:20})}},H={args:{color:"danger"}},S={args:{color:"success"}},q={args:{color:"primary"}},C={args:{color:"secondary"}},P=["Contained","Outlined","Text","Small","Medium","Large","WithIconLeft","WithIconRight","WithIcons","IconButton","Danger","Success","Primary","Secondary"];export{b as Contained,H as Danger,F as IconButton,M as Large,D as Medium,V as Outlined,q as Primary,C as Secondary,j as Small,S as Success,W as Text,z as WithIconLeft,I as WithIconRight,B as WithIcons,P as __namedExportsOrder,v as default};
//# sourceMappingURL=Button.stories.3aa3fcf8.js.map

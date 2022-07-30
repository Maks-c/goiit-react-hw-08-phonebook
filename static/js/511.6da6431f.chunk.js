/*! For license information please see 511.6da6431f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[511],{511:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,a=t(5206),o=t(5861),i=t(885),u=t(7757),c=t.n(u),s=t(2791),l=t(750),d=t(6170),f=t(1051),h=t(168),p=t(7939),m=p.ZP.form(r||(r=(0,h.Z)(["\n  width: 320px;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  grid-row-gap: 10px;\n"]))),v=t(184);var g,b,x,y,w,Z=function(){var n=(0,l.Lr)(),e=(0,i.Z)(n,1)[0],t=(0,l.wY)().data,r=(0,s.useState)(""),u=(0,i.Z)(r,2),h=u[0],p=u[1],g=(0,s.useState)(""),b=(0,i.Z)(g,2),x=b[0],y=b[1],w=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?p(r):y(r)},Z=function(){var n=(0,o.Z)(c().mark((function n(r){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,t.some((function(n){return n.name.toLowerCase().includes(h.toLowerCase())}));case 3:if(!n.sent){n.next=7;break}return a.Am.warning("".concat(h," is already in contacts")),n.abrupt("return");case 7:return n.prev=7,n.next=10,e({name:h,number:x});case 10:a.Am.success("".concat(h," has added to contacts list")),console.log("success"),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(7),a.Am.error("Oops, something went wrong");case 17:p(""),y("");case 19:case"end":return n.stop()}}),n,null,[[7,14]])})));return function(e){return n.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(m,{onSubmit:Z,children:[(0,v.jsx)(f.Z,{sx:{mr:"25px"},variant:"standard",label:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:w,value:h}),(0,v.jsx)(f.Z,{variant:"standard",label:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:w,value:x}),(0,v.jsx)(d.Z,{variant:"contained",type:"submit",children:"Add contact"})]})})},j=t(5048),C=p.ZP.span(g||(g=(0,h.Z)(["\n  margin-right: 5px;\n  font-family: 'Titillium Web', sans-serif;\n"]))),P=p.ZP.ul(b||(b=(0,h.Z)(["\n  margin: 0 auto 0 0;\n  padding-left: 0;\n"]))),k=p.ZP.li(x||(x=(0,h.Z)(["\n  list-style: none;\n  margin: 10px auto 0 auto;\n"]))),_=(p.ZP.button(y||(y=(0,h.Z)(["\n  margin-left: 20px;\n"]))),function(n){var e=n.id,t=n.name,r=n.number,a=(0,l.Nt)(),o=(0,i.Z)(a,2),u=o[0],c=o[1].isLoading;return(0,v.jsxs)(k,{children:[(0,v.jsx)(C,{children:t}),(0,v.jsx)(C,{children:r}),(0,v.jsx)(d.Z,{sx:{ml:2},onClick:function(){return u(e)},children:c?"Deleting...":"Delete"})]},e)}),A=function(){var n=(0,l.wY)().data,e=(0,j.v9)((function(n){return n.filter.value})),t=null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,v.jsx)(P,{children:null===t||void 0===t?void 0:t.map((function(n){return(0,v.jsx)(_,{id:n.id,name:n.name,number:n.number},n.id)}))})},D=p.ZP.div(w||(w=(0,h.Z)(["\n  margin: 20px auto 0 auto;\n"]))),L=t(4808),F=t(5571),S=t.n(F);function T(n){var e=null,t=null,r=new Promise((function(n,r){e=n,t=r}));return n&&n.then((function(n){e&&e(n)}),(function(n){t&&t(n)})),{promise:r,resolve:function(n){e&&e(n)},reject:function(n){t&&t(n)},cancel:function(){e=null,t=null}}}var z=function(){return z=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},z.apply(this,arguments)},O={key:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return null},onlyResolvesLast:!0},q=function(){function n(n){this.config=n,this.debounceSingleton=null,this.debounceCache={}}return n.prototype._createDebouncedFunction=function(){var n=S()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(n=function(n){var e=null;return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];e&&e();var a=T(n.apply(void 0,t)),o=a.promise,i=a.cancel;return e=i,o}}(n)),{func:n}},n.prototype.getDebouncedFunction=function(n){var e,t=(e=this.config.options).key.apply(e,n);return null===t||"undefined"===typeof t?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[t]||(this.debounceCache[t]=this._createDebouncedFunction()),this.debounceCache[t])},n}();var I=function(n,e,t){var r=z({},O,t),a=new q({func:n,wait:e,options:r});return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=a.getDebouncedFunction(n).func;return t.apply(void 0,n)}},N=function(){var n=(0,j.I0)(),e=I((function(e){n((0,L.K)(e.target.value))}),500);return(0,v.jsx)(D,{children:(0,v.jsx)(f.Z,{label:"search name",variant:"standard",type:"text",name:"filter",id:"filter",onChange:e})})},R=t(6151);function Y(){return(0,v.jsxs)(R.i,{children:[(0,v.jsx)(Z,{}),(0,v.jsx)(A,{}),(0,v.jsx)(N,{}),(0,v.jsx)(a.Ix,{theme:"colored",autoClose:500})]})}},5571:function(n){function e(n){return"function"===typeof n?n():n}function t(){var n={};return n.promise=new Promise((function(e,t){n.resolve=e,n.reject=t})),n}n.exports=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=void 0,i=void 0,u=void 0,c=[];return function(){var l=e(r),d=(new Date).getTime(),f=!o||d-o>l;o=d;for(var h=arguments.length,p=Array(h),m=0;m<h;m++)p[m]=arguments[m];if(f&&a.leading)return a.accumulate?Promise.resolve(n.call(this,[p])).then((function(n){return n[0]})):Promise.resolve(n.call.apply(n,[this].concat(p)));if(i?clearTimeout(u):i=t(),c.push(p),u=setTimeout(s.bind(this),l),a.accumulate){var v=c.length-1;return i.promise.then((function(n){return n[v]}))}return i.promise};function s(){var e=i;clearTimeout(u),Promise.resolve(a.accumulate?n.call(this,c):n.apply(this,c[c.length-1])).then(e.resolve,e.reject),c=[],i=null}}}}]);
//# sourceMappingURL=511.6da6431f.chunk.js.map
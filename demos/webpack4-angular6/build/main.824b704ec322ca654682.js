!function(e){function t(t){for(var o,i,f=t[0],l=t[1],u=t[2],a=0,s=[];a<f.length;a++)i=f[a],r[i]&&s.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(p&&p(t);s.length;)s.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,f=1;f<n.length;f++){var l=n[f];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var f=window.webpackJsonp=window.webpackJsonp||[],l=f.push.bind(f);f.push=t,f=f.slice();for(var u=0;u<f.length;u++)t(f[u]);var p=l;c.push([20,2]),n()}([,,,,,,,,,,,,,,,,function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=16},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(26),r=n(21);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i};Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),c=n(1),i=n(22),f=n(24),l=function(){function e(){}return e=o([c.NgModule({imports:[r.BrowserModule],bootstrap:[i.AppComponent],declarations:[i.AppComponent,f.WidgetComponent]})],e)}();t.AppModule=l},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),i=function(){function e(){}return e=o([c.Component({selector:"my-app",styles:[n(23)],template:"\n\t\t<p>\n\t\t\tHello world, <strong>Angular 6</strong> with <strong>Webpack 4</strong>.\n\t\t</p>\n\n\t\t<p>\n\t\t\tI'm not sure how well this works. But, it seems to compile!\n\t\t</p>\n\n\t\t<my-widget></my-widget>\n\t"}),r("design:paramtypes",[])],e)}();t.AppComponent=i},function(e,t){e.exports=":host {\n  display: block ;\n  font-size: 18px ;\n}\nstrong {\n  background-color: gold ;\n  display: inline-block;\n  padding: 0px 5px 0px 5px ;\n}\n"},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),i=function(){function e(){}return e=o([c.Component({selector:"my-widget",styles:[n(25)],template:"\n\t\tI am a widget component.\n\t"}),r("design:paramtypes",[])],e)}();t.WidgetComponent=i},function(e,t){e.exports=":host {\n  background-color: #333333;\n  color: #ffffff;\n  display: block ;\n}\n"}]);
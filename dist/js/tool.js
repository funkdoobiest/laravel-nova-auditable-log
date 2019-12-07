!function(t){var e={};function a(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){a(1),t.exports=a(6)},function(t,e,a){Nova.booting(function(t,e,n){t.component("auditable-log",a(2))})},function(t,e,a){var n=a(3)(a(4),a(5),!1,null,null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,a,n,s,i){var r,l=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,l=t.default);var u,c="function"==typeof l?l.options:l;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),a&&(c.functional=!0),s&&(c._scopeId=s),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=u):n&&(u=n),u){var d=c.functional,p=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(t,e){return u.call(e),p(t,e)}):c.beforeCreate=p?[].concat(p,u):[u]}return{esModule:r,exports:l,options:c}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["resourceName","resourceId","field"],data:function(){return{audits:[],displayAudits:!1,displayAdminAudits:!1,pagination:{},type:!1,typeDisplay:!1}},mounted:function(){!0===this.displayAudits&&this.fetchAudits(type),!0===this.displayAdminAudits&&this.fetchAudits(type)},methods:{showAndFetch:function(t){"admin"==t?(this.typeDisplay="Admin",this.displayAudits=!1,this.displayAdminAudits=!0):(this.typeDisplay="User",this.displayAdminAudits=!1,this.displayAudits=!0),this.fetchAudits(t)},fetchAudits:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=this;e||(e="/nova-vendor/auditable-log/audits/"+a.resourceName+"/"+a.resourceId+"/"+t),Nova.request().get(e).then(function(t){var e=t.data;a.audits=e.audits.data,a.pagination=e.audits}).catch(function(){})},formatData:function(t){var e=[];for(var a in t)t.hasOwnProperty(a)&&e.push({name:a,value:t[a]});return e}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hr",{staticClass:"border-t-2 border-50 my-11"}),t._v(" "),!1===t.displayAudits?a("button",{staticClass:"btn btn-default btn-primary",on:{click:function(e){return e.preventDefault(),t.showAndFetch("user")}}},[t._v("View\n        User Audit Log\n    ")]):t._e(),t._v(" "),!1===t.displayAdminAudits?a("button",{staticClass:"btn btn-default btn-primary",on:{click:function(e){return e.preventDefault(),t.showAndFetch("admin")}}},[t._v("View\n        Admin Audit Log\n    ")]):t._e(),t._v(" "),t.displayAudits||t.displayAdminAudits?a("div",{staticClass:"mt-8"},[a("h2",{staticClass:"mb-3 text-90 font-normal text-2xl"},[t._v(t._s(t.typeDisplay)+" Audit Log")]),t._v(" "),a("div",{staticClass:"card"},[a("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[t._m(0),t._v(" "),a("tbody",t._l(t.audits,function(e){return a("tr",[a("td",["created"===e.event?a("svg",{staticClass:"h-6 text-60 svg-inline--fa fa-save fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"save",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{fill:"currentColor",d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}})]):t._e(),t._v(" "),"updated"===e.event?a("svg",{staticClass:"h-6 text-60 svg-inline--fa fa-save fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"save",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{fill:"currentColor",d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}})]):t._e(),t._v(" "),"deleted"===e.event?a("svg",{staticClass:"h-6 text-60 svg-inline--fa fa-trash-alt fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{fill:"currentColor",d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"}})]):t._e()]),t._v(" "),a("td",[t._v("\n                        "+t._s(e.user?e.user.name:"console")+"\n                    ")]),t._v(" "),a("td",[t._v("\n                        "+t._s(e.event)+"\n                    ")]),t._v(" "),a("td",[t._v("\n                        "+t._s(e.created_at)+"\n                    ")]),t._v(" "),a("td",t._l(t.formatData(e.old_values),function(e){return a("div",{staticClass:"my-2"},[a("span",{staticClass:"inline-block bg-30 p-1 rounded-sm mr-2"},[t._v(t._s(e.name))]),t._v(" "+t._s(e.value)+"\n                        ")])}),0),t._v(" "),a("td",t._l(t.formatData(e.new_values),function(e){return a("div",{staticClass:"my-2"},[a("span",{staticClass:"inline-block bg-30 p-1 rounded-sm mr-2"},[t._v(t._s(e.name))]),t._v(" "+t._s(e.value)+"\n                        ")])}),0)])}),0)]),t._v(" "),a("div",{staticClass:"bg-20 rounded-b",attrs:{"per-page":"5","resource-count-label":"1-3 of 3","current-resource-count":"3","all-matching-resource-count":"3"}},[a("nav",{staticClass:"flex justify-between items-center"},[a("button",{staticClass:"btn btn-link py-3 px-4 text-80",class:{"opacity-50":null===t.pagination.prev_page_url,"text-primary":null!==t.pagination.prev_page_url},attrs:{disabled:null===t.pagination.prev_page_url,rel:"prev",dusk:"previous"},on:{click:function(e){return t.fetchAudits(t.type,t.pagination.prev_page_url)}}},[t._v("\n                        Previous\n                    ")]),t._v(" "),a("span",{staticClass:"text-sm text-80 px-4"},[t._v("\n                "+t._s(t.pagination.from)+"-"+t._s(t.pagination.to)+" of "+t._s(t.pagination.total)+"\n            ")]),t._v(" "),a("button",{staticClass:"btn btn-link py-3 px-4 text-80",class:{"opacity-50":null===t.pagination.next_page_url,"text-primary":null!==t.pagination.next_page_url},attrs:{disabled:null===t.pagination.next_page_url,rel:"next",dusk:"next"},on:{click:function(e){return t.fetchAudits(t.type,t.pagination.next_page_url)}}},[t._v("\n                        Next\n                    ")])])])])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th"),t._v(" "),a("th",{staticClass:"text-left"},[a("span",[t._v(" User ")])]),t._v(" "),a("th",{staticClass:"text-left"},[a("span",[t._v(" Event ")])]),t._v(" "),a("th",{staticClass:"text-left"},[a("span",[t._v(" Date/Time ")])]),t._v(" "),a("th",{staticClass:"text-left"},[a("span",[t._v(" Old Values ")])]),t._v(" "),a("th",{staticClass:"text-left"},[a("span",[t._v(" New Values ")])])])])}]}},function(t,e){}]);
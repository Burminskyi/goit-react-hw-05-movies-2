"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{368:function(e,n,t){t.d(n,{O:function(){return u}});var r=t(689),a=t(87),c=t(184),u=function(e){var n=e.movies,t=(0,r.TH)();return(0,c.jsx)("ul",{children:n.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.original_title})},e.id)}))})}},278:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(323),o=t(368),i=t(791),f=t(87),p=t(970),l=t(184);n.default=function(){var e=(0,i.useState)(!1),n=(0,a.Z)(e,2),t=n[0],c=n[1],h=(0,i.useState)([]),v=(0,a.Z)(h,2),m=v[0],d=v[1],x=(0,f.lr)(),y=(0,a.Z)(x,2),g=y[0],j=y[1];(0,i.useEffect)((function(){m.length>0&&c(!0);var e=g.get("query");if(e){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.IR)(e);case 3:t=n.sent,d(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:return n.prev=10,c(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}}),[m.length,g]);return t?(0,l.jsx)(s.a,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.query.value.toLowerCase().trim();n?j({query:n}):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441")},className:"",children:[(0,l.jsx)("button",{type:"submit",className:"",children:(0,l.jsx)("span",{className:"",children:"Search"})}),(0,l.jsx)("input",{name:"query",className:"",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"})]}),m.length>0&&(0,l.jsx)(o.O,{movies:m})]})}},970:function(e,n,t){t.d(n,{Df:function(){return o},IR:function(){return f},YJ:function(){return i},tx:function(){return l},zv:function(){return p}});var r=t(861),a=t(757),c=t.n(a),u="https://api.themoviedb.org/3/",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzA4NDYyNjE0NDRhNWE0OWRkNzAyZmE1MWUwNjgzOCIsInN1YiI6IjY0N2EwNmVhMGUyOWEyMDExNmFjMjc4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tsNk25POiqhHGD8XWZG5zrh-GEA1QO3lFkkZCPF82kY"}},o=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"trending/all/day?language=en-US&").concat("api_key=d30846261444a5a49dd702fa51e06838"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"movie/").concat(n,"language=en-US&"),s);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1"),s);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"movie/").concat(n,"/credits?language=en-US"),s);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"movie/").concat(n,"/reviews?language=en-US&page=1"),s);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},861:function(e,n,t){function r(e,n,t,r,a,c,u){try{var s=e[c](u),o=s.value}catch(i){return void t(i)}s.done?n(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,c){var u=e.apply(n,t);function s(e){r(u,a,c,s,o,"next",e)}function o(e){r(u,a,c,s,o,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=278.dd719408.chunk.js.map
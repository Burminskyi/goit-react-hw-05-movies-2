"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{368:function(n,e,t){t.d(e,{O:function(){return u}});var r=t(689),c=t(87),a=t(184),u=function(n){var e=n.movies,t=(0,r.TH)();return(0,a.jsx)("ul",{children:e.map((function(n){return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.original_title})},n.id)}))})}},544:function(n,e,t){t.r(e);var r=t(861),c=t(439),a=t(757),u=t.n(a),o=t(368),i=t(791),s=t(970),f=t(184);e.default=function(){var n=(0,i.useState)([]),e=(0,c.Z)(n,2),t=e[0],a=e[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Df)();case 3:e=n.sent,a(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending today"}),t&&(0,f.jsx)(o.O,{movies:t})]})}},970:function(n,e,t){t.d(e,{Df:function(){return i},IR:function(){return f},YJ:function(){return s},tx:function(){return h},zv:function(){return p}});var r=t(861),c=t(757),a=t.n(c),u="https://api.themoviedb.org/3/",o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzA4NDYyNjE0NDRhNWE0OWRkNzAyZmE1MWUwNjgzOCIsInN1YiI6IjY0N2EwNmVhMGUyOWEyMDExNmFjMjc4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tsNk25POiqhHGD8XWZG5zrh-GEA1QO3lFkkZCPF82kY"}},i=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"trending/all/day?language=en-US&").concat("api_key=d30846261444a5a49dd702fa51e06838"));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(e,"language=en-US&"),o);case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),o);case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(e,"/credits?language=en-US"),o);case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(e,"/reviews?language=en-US&page=1"),o);case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},861:function(n,e,t){function r(n,e,t,r,c,a,u){try{var o=n[a](u),i=o.value}catch(s){return void t(s)}o.done?e(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,a){var u=n.apply(e,t);function o(n){r(u,c,a,o,i,"next",n)}function i(n){r(u,c,a,o,i,"throw",n)}o(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=544.9c360fc3.chunk.js.map
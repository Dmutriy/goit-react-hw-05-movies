"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[349],{4146:function(n,t,r){r.d(t,{e:function(){return v}});var e,a,i,c,u=r(7689),o=r(168),s=r(6444),p=r(1087),d=s.ZP.div(e||(e=(0,o.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  @media screen and (min-width: 480px) {\n    width: 480px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 1200px;\n  }\n"]))),f=s.ZP.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px 9%;\n  margin-left: 0 auto;\n"]))),h=(0,s.ZP)(p.rU)(i||(i=(0,o.Z)(["\n  text-decoration: underline;\n  color: black;\n  font-weight: 500;\n  font-size: 20px;\n  color: black;\n  :hover {\n    color: #32badf;\n  }\n"]))),x=s.ZP.li(c||(c=(0,o.Z)(["\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),m=r(3188),l=r(184),v=function(n){var t=n.movies,r=(0,u.TH)();return(0,l.jsx)(d,{children:(0,l.jsx)(f,{children:t.map((function(n){var t=n.id,e=n.original_title,a=n.poster_path;return(0,l.jsx)(x,{children:(0,l.jsxs)(h,{to:"/movies/".concat(t),state:{from:r},children:[(0,l.jsx)("img",{src:a?"".concat("https://image.tmdb.org/t/p/w300").concat(a):m,alt:e,width:"300"}),e]})},t)}))})})}},349:function(n,t,r){r.r(t),r.d(t,{default:function(){return v}});var e,a,i=r(5861),c=r(9439),u=r(7757),o=r.n(u),s=r(2791),p=r(6611),d=r(168),f=r(6444),h=f.ZP.h1(e||(e=(0,d.Z)(["\n  font-size: 500;\n  font-size: 32px;\n  margin-bottom: 16px; ;\n"]))),x=f.ZP.div(a||(a=(0,d.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 16px 32px;\n\n  @media screen and (min-width: 480px) {\n    width: 480px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 1200px;\n  }\n"]))),m=r(4146),l=r(184),v=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,i.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.rj)();case 3:t=n.sent,e(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)(x,{children:[(0,l.jsx)(h,{children:"Trending today"}),(0,l.jsx)(m.e,{movies:r})]})}},6611:function(n,t,r){r.d(t,{M1:function(){return p},TP:function(){return s},qF:function(){return o},rj:function(){return u},tx:function(){return d}});var e=r(5861),a=r(7757),i=r.n(a),c=r(3263);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"7f9da092915547cc78cd8c8696294985",language:"en-US"};var u=function(){var n=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3188:function(n,t,r){n.exports=r.p+"static/media/no-image.234fbd8c1323bcbc6dd4.jpg"}}]);
//# sourceMappingURL=349.1eea3255.chunk.js.map
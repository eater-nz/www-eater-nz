(function(t){function e(e){for(var r,s,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)s=c[f],a[s]&&d.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"07bb":function(t,e,n){},"0cfb":function(t,e,n){},"6afa":function(t,e,n){},a764:function(t,e,n){"use strict";var r=n("c24a"),a=n.n(r);a.a},b0a0:function(t,e,n){"use strict";var r=n("07bb"),a=n.n(r);a.a},b0cd:function(t,e,n){"use strict";var r=n("6afa"),a=n.n(r);a.a},c24a:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("9f7b"),i=n.n(a),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("places-filter")],1),n("main",{attrs:{role:"main"}},[n(t.view,{tag:"component"})],1)])},c=[],o=n("d225"),l=n("b0b4"),u=n("308d"),f=n("6bb5"),d=n("4e2b"),p=n("9ab4"),b=n("60a3"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},[n("div",{staticClass:"container"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("EATER")]),n("form",{staticClass:"form-inline my-2 my-md-0 ml-auto"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.toggleView}},[n("i",{class:"fa fa-"+t.icon})])])])},h=[],v=(n("386d"),function(t){function e(){return Object(o["a"])(this,e),Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(l["a"])(e,[{key:"isTagActive",value:function(t){return this.$store.getters.filter.tags.indexOf(t)>=0}},{key:"toggleView",value:function(){this.$store.commit("toggleView")}},{key:"search",get:function(){return this.$store.getters.filter.search},set:function(t){this.$store.commit("updateFilterSearch",t)}},{key:"tags",get:function(){return this.$store.getters.filteredTags}},{key:"icon",get:function(){return"Map"===this.$store.getters.view?"list":"map-o"}}]),e}(b["b"]));v=p["a"]([b["a"]],v);var y=v,m=y,O=(n("fff1"),n("2877")),j=Object(O["a"])(m,g,h,!1,null,"7a9b164c",null),w=j.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"places-list container"},t._l(t.places,function(e){return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"heading"},[n("h5",[t._v(t._s(e.name))]),n("address",[n("a",{staticClass:"address",attrs:{href:"https://maps.google.com/?q="+e.latlng,target:"_blank"}},[t._v(t._s(t.address(e)))])])]),e.tags?n("ul",{staticClass:"card-text tags"},t._l(e.tags,function(e){return n("li",[t._v("\n          "+t._s(e)+"\n        ")])}),0):t._e(),n("p",{staticClass:"info"},[t._v(t._s(e.summary))])])])}),0)},k=[],x=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments)),t.columns=4,t}return Object(d["a"])(e,t),Object(l["a"])(e,[{key:"address",value:function(t){var e=t.address.number+" "+t.address.street;return e+=", "+t.address.suburb,e+=t.address.district?", "+t.address.district:"",e}},{key:"places",get:function(){return this.$store.getters.filteredPlaces}}]),e}(b["b"]);x=p["a"]([b["a"]],x);var P=x,C=P,$=(n("a764"),Object(O["a"])(C,_,k,!1,null,"a8dcd964",null)),S=$.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"places-map"},[n("l-map",{ref:"map",staticClass:"col-xs-12"},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.places,function(e){return n("l-marker",{attrs:{"lat-lng":t.latlong(e)}})})],2)],1)},A=[],T=(n("28a5"),n("2699")),E=n("a40a"),B=n("4e2b6"),U=(n("6cc5"),function(t){function e(){return Object(o["a"])(this,e),Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(l["a"])(e,[{key:"latlong",value:function(t){var e=t.latlng.split(",");return L.latLng(+e[0],+e[1])}},{key:"mounted",value:function(){this.fitBounds()}},{key:"updated",value:function(){this.fitBounds()}},{key:"fitBounds",value:function(){if(this.places&&this.places.length>0){var t=this.places.map(function(t){var e=t.latlng.split(",");return L.latLng(+e[0],+e[1])}),e=this.$refs.map;e.fitBounds(t)}}},{key:"zoom",get:function(){return 13}},{key:"center",get:function(){return L.latLng(47.41322,-1.219482)}},{key:"url",get:function(){return"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}},{key:"attribution",get:function(){return'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},{key:"places",get:function(){return this.$store.getters.filteredPlaces}}]),e}(b["b"]));U=p["a"]([Object(b["a"])({components:{"l-map":T["a"],"l-tile-layer":E["a"],"l-marker":B["a"]}})],U);var V=U,z=V,F=(n("b0cd"),Object(O["a"])(z,M,A,!1,null,null,null)),I=F.exports,D=function(t){function e(){return Object(o["a"])(this,e),Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(l["a"])(e,[{key:"view",get:function(){return"Places"+this.$store.getters.view}}]),e}(b["b"]);D=p["a"]([Object(b["a"])({components:{PlacesList:S,PlacesFilter:w,PlacesMap:I},mounted:function(){this.$store.dispatch("fetchPlaces")}})],D);var J=D,R=J,q=(n("cf25"),n("b0a0"),Object(O["a"])(R,s,c,!1,null,null,null)),N=q.exports,G=(n("7f7f"),n("5d73")),H=n.n(G),K=function(){function t(){Object(o["a"])(this,t)}return Object(l["a"])(t,null,[{key:"contains",value:function(t,e){return!e||""===e||!(!t||""===t)&&t.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>=0}}]),t}(),Q=function t(){Object(o["a"])(this,t),this.search="",this.tags=new Array},W=n("2f62"),X=n("bc3a"),Y=n.n(X);r["default"].use(W["a"]);var Z=new W["a"].Store({state:{view:"List",places:new Array,tags:new Array,filter:new Q},mutations:{updatePlaces:function(t,e){t.places=e||new Array;var n=new Array,r=!0,a=!1,i=void 0;try{for(var s,c=H()(t.places);!(r=(s=c.next()).done);r=!0){var o=s.value;o.tags&&(n=n.concat(o.tags))}}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}t.tags=n.filter(function(t,e,n){return n.indexOf(t)===e})},updateFilterSearch:function(t,e){t.filter.search=e||""},toggleSuburb:function(t,e){e&&(t.filter.tags.indexOf(e)<0?t.filter.tags.push(e):t.filter.tags=t.filter.tags.filter(function(t){return t!==e}))},toggleView:function(t,e){document.body;t.view="Map"===t.view?"List":"Map"}},getters:{view:function(t,e){return t.view},filteredPlaces:function(t,e){return t.places.filter(function(e){var n=!0,r=!1,a=void 0;try{for(var i,s=H()(t.filter.tags);!(n=(i=s.next()).done);n=!0){var c=i.value;if(e.tags&&e.tags.indexOf(c)<0)return!1}}catch(o){r=!0,a=o}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}return!!K.contains(e.name,t.filter.search)||e.tags.filter(function(e){return K.contains(e,t.filter.search)}).length>0})},filteredTags:function(t,e){return e.tags.filter(function(e){return!!t.filter.search&&!!K.contains(e,t.filter.search)})},tags:function(t,e){return t.tags},filter:function(t,e){return t.filter}},actions:{fetchPlaces:function(t){var e=t.commit;Y.a.get("//api.eater.nz/places.json").then(function(t){return e("updatePlaces",t.data)},function(t){console.error(t)})}}});n("f9e3"),n("2dd8");r["default"].use(i.a),r["default"].config.productionTip=!1;var tt=n("e11e");delete tt.Icon.Default.prototype._getIconUrl;var et=n("584d"),nt=n("6397"),rt=n("e2b9");tt.Icon.Default.mergeOptions({iconRetinaUrl:et,iconUrl:nt,shadowUrl:rt}),new r["default"]({render:function(t){return t(N)},store:Z}).$mount("#app")},cf25:function(t,e,n){"use strict";var r=n("0cfb"),a=n.n(r);a.a},dd27:function(t,e,n){},fff1:function(t,e,n){"use strict";var r=n("dd27"),a=n.n(r);a.a}});
//# sourceMappingURL=app.671e0789.js.map
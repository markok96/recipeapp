(function(e){function t(t){for(var i,c,s=t[0],o=t[1],u=t[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,s=1;s<r.length;s++){var o=r[s];0!==n[o]&&(i=!1)}i&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var i={},n={app:0},a=[];function c(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=i,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(r,i,function(t){return e[t]}.bind(null,i));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/recipeapp/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=o;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0325":function(e,t,r){},"034f":function(e,t,r){"use strict";r("85ec")},"16f5":function(e,t,r){"use strict";r("8162")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view"),r("Footer")],1)},a=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("footer",[r("p",[e._v(" © Marko Korolija 2021")])])])}],o={name:"Footer"},u=o,p=(r("760c"),r("2877")),l=Object(p["a"])(u,c,s,!1,null,null,null),d=l.exports,f={components:{Footer:d}},v=f,m=(r("034f"),Object(p["a"])(v,n,a,!1,null,null,null)),_=m.exports,h=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e._m(0),e.recipes.length?r("div",{staticClass:"home-wrapper"},[r("div",[r("h1",[e._v("Entrée")]),e._l(e.recipes[0].data.results,(function(e){return r("RecipeCard",{key:e.id,attrs:{recipe:e}})}))],2),r("div",[r("h1",[e._v("Main course")]),e._l(e.recipes[1].data.results,(function(e){return r("RecipeCard",{key:e.id,attrs:{recipe:e}})}))],2),r("div",[r("h1",[e._v("Dessert")]),e._l(e.recipes[2].data.results,(function(e){return r("RecipeCard",{key:e.id,attrs:{recipe:e}})}))],2)]):e._e()])])},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title"},[r("h1",[e._v("List of recipes")])])}],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card md-card"},[r("router-link",{attrs:{to:{name:"RecipeDetail",params:{id:e.recipe.id}}}},[r("h2",[e._v(e._s(e.recipe.title))])]),r("span",[r("div",[r("i",{staticClass:"material-icons md-36 icon"},[e._v("timer")]),r("span",[r("time",[e._v("Cooking Time: "+e._s(e.recipe.readyInMinutes)+" Min")])])]),r("div",[r("i",{staticClass:"material-icons md-36 icon"},[e._v("room")]),r("span",[r("strong",[e._v(e._s(e.recipe.servings)+" Servings")])])])])],1)},C=[],w={name:"RecipeCard",props:{recipe:Object}},O=w,j=(r("6d82"),Object(p["a"])(O,b,C,!1,null,"5ff9f152",null)),R=j.exports,k=(r("99af"),r("7338")),x=r.n(k),E=r("323e"),M=r.n(E),P="752a88639f144e299daa236ecf156aef";x.a.interceptors.request.use((function(e){return M.a.start(),e})),x.a.interceptors.response.use((function(e){return M.a.done(),e}));var T=x.a.get("https://api.spoonacular.com/recipes/search?type=bread&apiKey=".concat(P,"&includeNutrition=true")),$=x.a.get("https://api.spoonacular.com/recipes/search?type=main course&apiKey=".concat(P,"&includeNutrition=true")),S=x.a.get("https://api.spoonacular.com/recipes/search?type=dessert&apiKey=".concat(P,"&includeNutrition=true")),D={getCourseType:function(){return x.a.all([T,$,S])},getRecipeDetails:function(e){return x.a.get("https://api.spoonacular.com/recipes/".concat(e,"/information?apiKey=").concat(P,"&includeNutrition=false"))}},I={name:"HomeView",components:{RecipeCard:R},data:function(){return{recipes:[]}},created:function(){var e=this;D.getCourseType().then(x.a.spread((function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];e.recipes=r,console.log("recipes",e.recipes)}))).catch((function(e){console.log("ERROR IN FETCHING DATA",e)}))}},N=I,K=(r("cdb6"),Object(p["a"])(N,g,y,!1,null,"e5042d8a",null)),F=K.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"md-layout"},[r("div",{staticClass:"title"},[r("h1",[e._v(e._s(e.recipe.title))])]),r("div",{staticClass:"md-card card-item"},[r("div",{staticClass:"img"},[r("img",{attrs:{src:e.recipe.image,alt:""}})]),r("div",{staticClass:"content"},[r("router-link",{attrs:{to:"/"}},[r("i",{staticClass:"material-icons md-36 icon arrow"},[e._v("arrow_back")])]),r("h2",[e._v(e._s(e.recipe.dishTypes[0]))]),r("ul",{staticClass:"recipe-stats"},[r("li",{staticClass:"recipe-stats-item"},[r("h2",[e._v(e._s(e.recipe.readyInMinutes))]),r("p",[e._v("Mins")])]),r("li",{staticClass:"recipe-stats-item"},[r("h2",[e._v(e._s(e.recipe.servings))]),r("p",[e._v("Servings")])]),r("li",{staticClass:"recipe-stats-item"},[r("h2",[e._v(e._s(e.recipe.pricePerServing)+"$")]),r("p",[e._v("Price")])])])],1)]),r("div",{staticClass:"card-item md-card"},[r("div",{staticClass:"recipe-summary"},[r("h2",[e._v("Instructions")]),r("p",[e._v(e._s(e.recipe.instructions))])]),r("div",{staticClass:"recipe-ingredients"},[r("h2",[e._v("Ingredients")]),r("ul",e._l(e.recipe.extendedIngredients,(function(t){return r("li",{key:t.id},[e._v(" "+e._s(t.original)+" ")])})),0)])])])},H=[],J=(r("a9e3"),{name:"RecipeDetail",data:function(){return{recipe:[]}},props:{id:Number},created:function(){var e=this;D.getRecipeDetails(this.id).then((function(t){e.recipe=t.data,console.log("recipe-details",e.recipe)}))}}),V=J,q=(r("16f5"),Object(p["a"])(V,A,H,!1,null,"c1b2ba60",null)),G=q.exports;i["default"].use(h["a"]);var L=[{path:"/",name:"HomeView",component:F},{path:"/recipe/:id",name:"RecipeDetail",component:G,props:!0}],z=new h["a"]({mode:"history",base:"/recipeapp/",routes:L}),B=z,Q=r("43f9"),U=r.n(Q);r("51de"),r("a5d8");i["default"].config.productionTip=!1,i["default"].use(U.a),new i["default"]({router:B,render:function(e){return e(_)}}).$mount("#app")},"6ba1":function(e,t,r){},"6d82":function(e,t,r){"use strict";r("6ba1")},"760c":function(e,t,r){"use strict";r("c3f5")},8162:function(e,t,r){},"85ec":function(e,t,r){},c3f5:function(e,t,r){},cdb6:function(e,t,r){"use strict";r("0325")}});
//# sourceMappingURL=app.2218f0cc.js.map
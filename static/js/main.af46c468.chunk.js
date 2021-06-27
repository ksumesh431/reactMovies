(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{39:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(28),s=n.n(a),r=(n(39),n(18)),i=n(13),o=n.n(i),l=n(17),d=n(29),j=n(30),h=n(31),b=n(34),u=n(33),m=n(14),x=n.n(m);function O(e,t){return e.numberInStock-t.numberInStock}function v(e,t){return t.numberInStock-e.numberInStock}function p(e,t){return e.dailyRentalRate-t.dailyRentalRate}function f(e,t){return t.dailyRentalRate-e.dailyRentalRate}var g=n(0),k=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target.value;console.log(n),e.setState({currSearchText:n})},e.handleLimit=function(t){var n=t.target.value;""!==n&&n>0&&e.setState({limit:n})},e.onDelete=function(t){var n=e.state.movies.filter((function(e){return e._id!==t}));e.setState({movies:n})},e.handleSort=function(t){var n,c=t.target.className;console.log(c),"fa fa-sort-asc"===c?n="compareStockAscending":"fa fa-sort-desc"===c?n="compareStockDescending":"fa fa-sort-asc rt"===c?n="compareRateAscending":"fa fa-sort-desc rt"===c&&(n="compareRateDescending"),e.setState({sortState:n})},e.handleGenre=function(t){e.setState({cGenre:t})},e.state={movies:[],currSearchText:"",limit:4,currPage:1,genres:[{_id:"abcd",name:"All Genres"}],cGenre:"All Genres",sortState:"Default"},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;console.log("render");var t=this.state,n=t.movies,c=t.currSearchText,a=t.limit,s=t.currPage,r=t.genres,i=t.cGenre,o=t.sortState,l=[];l=""===c?n:n.filter((function(e){var t=e.title.toLowerCase();return console.log(t),t.includes(c.toLowerCase())})),"All Genres"!==i&&(l=l.filter((function(e){return e.genre.name===i})));for(var d=Math.ceil(l.length/a),j=[],h=0;h<d;h++)j.push(h+1);var b=(s-1)*a,u=b+a-1;return l=l.slice(b,u+1),"Default"!==o&&("compareStockAscending"===o?l.sort(O):"compareStockDescending"===o?l.sort(v):"compareRateAscending"===o?l.sort(p):"compareRateDescending"===o&&l.sort(f)),Object(g.jsx)(g.Fragment,{children:0===this.state.movies.length?Object(g.jsx)("div",{className:"container spin",children:Object(g.jsxs)("button",{style:{marginTop:"10rem"},class:"btn btn-primary",type:"button",disabled:!0,children:[Object(g.jsx)("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Loading..."]})}):Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-3",children:Object(g.jsx)("ul",{className:"list-group",children:r.map((function(t){var n=t.name!==i?"list-group-item":"list-group-item active";return Object(g.jsx)("li",{onClick:function(){e.handleGenre(t.name)},className:n,children:t.name},t._id)}))})}),Object(g.jsxs)("div",{className:"col-9",children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-9",children:[Object(g.jsx)("h3",{children:"Search"}),Object(g.jsx)("input",{style:{width:"100%"},type:"search",value:this.state.currSearchText,onChange:this.handleChange})]}),Object(g.jsxs)("div",{className:"col-3",children:[Object(g.jsx)("h3",{children:"Limit"}),Object(g.jsx)("input",{style:{width:"60%"},type:"number",value:this.state.limit,onChange:this.handleLimit})]})]}),Object(g.jsxs)("table",{className:"table",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"#"}),Object(g.jsx)("th",{scope:"col",children:"Title"}),Object(g.jsx)("th",{scope:"col",children:"Genre"}),Object(g.jsxs)("th",{scope:"col",children:[Object(g.jsx)("i",{onClick:this.handleSort,className:"fa fa-sort-asc","aria-hidden":"true"}),"Stock",Object(g.jsx)("i",{onClick:this.handleSort,className:"fa fa-sort-desc","aria-hidden":"true"})]}),Object(g.jsxs)("th",{scope:"col",children:[Object(g.jsx)("i",{onClick:this.handleSort,className:"fa fa-sort-asc rt","aria-hidden":"true"}),"Rate",Object(g.jsx)("i",{onClick:this.handleSort,className:"fa fa-sort-desc rt","aria-hidden":"true"})]}),Object(g.jsx)("th",{})]})}),Object(g.jsx)("tbody",{children:l.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{}),Object(g.jsx)("td",{children:t.title}),Object(g.jsx)("td",{children:t.genre.name}),Object(g.jsx)("td",{children:t.numberInStock}),Object(g.jsx)("td",{children:t.dailyRentalRate}),Object(g.jsx)("td",{children:Object(g.jsx)("button",{onClick:function(){e.onDelete(t._id)},type:"button",className:"btn btn-danger",children:"Delete"})})]},t._id)}))})]}),Object(g.jsx)("nav",{children:Object(g.jsx)("ul",{className:"pagination",children:j.map((function(t){var n=t===s?"page-item active":"page-item";return Object(g.jsx)("li",{onClick:function(){e.setState({currPage:t})},className:n,children:Object(g.jsx)("span",{className:"page-link",children:t})},t)}))})})]})]})})})}},{key:"componentDidMount",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("component did mount"),e.next=3,x.a.get("https://backend-react-movie.herokuapp.com/movies");case 3:return t=e.sent,e.next=6,x.a.get("https://backend-react-movie.herokuapp.com/genres");case 6:n=e.sent,console.log("moviesObj",t.data.movies),this.setState({movies:t.data.movies,genres:[].concat(Object(l.a)(this.state.genres),Object(l.a)(n.data.genres))});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(c.Component);var S=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"This is home component"})})};var y=function(e){return console.log(e.randomProp),Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"This is about"})})},N=n(9);var C=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{children:Object(g.jsx)("nav",{style:{marginBottom:"1rem"},class:"navbar navbar-expand navbar-dark bg-dark",children:Object(g.jsxs)("div",{class:"container-fluid",children:[Object(g.jsx)("span",{class:"navbar-brand",children:"Navbar"}),Object(g.jsxs)("div",{class:"navbar-nav",children:[Object(g.jsx)(N.b,{to:"/",style:{textDecoration:"none"},children:Object(g.jsx)("span",{class:"nav-link",children:"Home"})}),Object(g.jsx)(N.b,{to:"/about",style:{textDecoration:"none"},children:Object(g.jsx)("span",{class:"nav-link",children:"About"})}),Object(g.jsx)(N.b,{to:"/movies",style:{textDecoration:"none"},children:Object(g.jsx)("span",{class:"nav-link",children:"Movies"})})]})]})})})})},R=n(2);var D=function(){return Object(g.jsxs)(N.a,{children:[Object(g.jsx)(C,{}),Object(g.jsxs)(R.c,{children:[Object(g.jsx)(R.a,{path:"/",component:S,exact:!0}),Object(g.jsx)(R.a,{path:"/movies",component:k}),Object(g.jsx)(R.a,{path:"/about",render:function(e){return Object(g.jsx)(y,Object(r.a)(Object(r.a)({},e),{},{randomProp:!0}))}})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};s.a.render(Object(g.jsx)(D,{}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.af46c468.chunk.js.map
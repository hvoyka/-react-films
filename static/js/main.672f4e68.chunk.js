(this["webpackJsonpreact-films"]=this["webpackJsonpreact-films"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),r=a.n(n),i=(a(13),a(0));function l(){return Object(i.jsx)("footer",{className:"page-footer  green darken-2",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}function o(){return Object(i.jsx)("header",{children:Object(i.jsx)("nav",{className:"green lighten-1",children:Object(i.jsxs)("div",{className:"nav-wrapper ",children:[Object(i.jsx)("a",{href:"#!",className:"brand-logo",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#!",children:"Repo"})})})]})})})}var h=a(2),j=a(3),d=a(5),u=a(4),b=a(8);function m(e){var t=e.Title,a=e.Year,c=e.Type,s=e.Poster;return Object(i.jsx)("div",{className:"movies__list-item",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card__image",children:"N/A"===s?Object(i.jsx)("img",{src:"https://via.placeholder.com/300x450?text=".concat(t),alt:"Placeholder"}):Object(i.jsx)("img",{src:s,alt:"".concat(t," popster")})}),Object(i.jsxs)("div",{className:"card__content",children:[Object(i.jsx)("p",{className:"card__title",children:t}),Object(i.jsx)("span",{children:a})," ",Object(i.jsx)("span",{className:"right",children:c})]})]})})}function v(e){var t=e.movies,a=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies__list",children:a.length?a.map((function(e){return Object(i.jsx)(m,Object(b.a)({},e),e.imdbID)})):Object(i.jsx)("h4",{children:"Nothing found :("})})}function O(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",filter:""},e.handleKeyDown=function(t){"Enter"===t.key&&e.props.loadSearchResult(e.state.search,e.state.filter)},e.handleFilter=function(t){e.setState((function(){return{filter:t.target.value}}),(function(){e.props.loadSearchResult(e.state.search,e.state.filter)}))},e}return Object(j.a)(a,[{key:"render",value:function(e){var t=this;return Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"input-field col s12",children:[Object(i.jsx)("input",{type:"search",placeholder:"Search",className:"validate",value:this.state.search,onChange:function(e){return t.setState({search:e.target.value})},onKeyDown:this.handleKeyDown}),Object(i.jsxs)("button",{className:"search__btn waves-effect waves-light btn-small",onClick:function(){return t.props.loadSearchResult(t.state.search,t.state.filter)},children:["Search ",Object(i.jsx)("i",{className:"material-icons right",children:"search"})]})]}),Object(i.jsxs)("div",{className:"search__filter",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"filter",type:"radio",value:"",onChange:this.handleFilter,checked:""===this.state.filter}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"filter",type:"radio",value:"movie",onChange:this.handleFilter,checked:"movie"===this.state.filter}),Object(i.jsx)("span",{children:"Movie"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"filter",type:"radio",value:"series",onChange:this.handleFilter,checked:"series"===this.state.filter}),Object(i.jsx)("span",{children:"Series"})]})]})]})}}]),a}(s.a.Component),f="b9a1a463",x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],loading:!0},e.loadSearchResult=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(f,"&s=").concat(t,"&type=").concat(a)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.Search,loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log(t)}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=".concat(f,"&s=matrix")).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.Search,loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log(t)}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(i.jsxs)("main",{className:"content container",children:[Object(i.jsx)(p,{loadSearchResult:this.loadSearchResult}),a?Object(i.jsx)(O,{}):Object(i.jsx)(v,{movies:t})]})}}]),a}(s.a.Component);var g=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(x,{}),Object(i.jsx)(l,{})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.672f4e68.chunk.js.map
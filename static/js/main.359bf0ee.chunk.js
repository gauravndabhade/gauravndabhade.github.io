(this["webpackJsonpgauravndabhade.github.io"]=this["webpackJsonpgauravndabhade.github.io"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(15),n=s.n(c),i=(s(23),s(4)),r=s(5),l=s(7),o=s(6),j=s(16),d=s.n(j),h=(s(24),s(17)),b=s(8),m=s.n(b),p=s(1),u=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={mylove:"?"},a}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=[];this.interval=setInterval((function(){e.props.data.mylove&&(t=e.props.data.mylove),e.setState({mylove:t[Math.floor(Math.random()*t.length)]})}),500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.description,s=this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,target:"_blank",rel:"noopener",children:Object(p.jsx)("i",{className:e.className})})},e.name)})),a={num:[4,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-50,50],alpha:[.6,0],scale:[.1,.9],body:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjgwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj44MDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAg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",position:"all",cross:"dead",random:10};return Object(p.jsxs)("header",{id:"home",children:[Object(p.jsx)(h.a,{type:"custom",config:a,bg:!0}),Object(p.jsxs)("nav",{id:"nav-wrap",children:[Object(p.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(p.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(p.jsxs)("ul",{id:"nav",className:"nav",children:[Object(p.jsx)("li",{className:"current",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(p.jsxs)("div",{className:"row banner",children:[Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsxs)(m.a,{bottom:!0,duration:1200,children:[Object(p.jsx)("h1",{className:"responsive-headline",children:e}),Object(p.jsx)("hr",{})]}),Object(p.jsxs)(m.a,{bottom:!0,duration:1200,children:[Object(p.jsxs)("h3",{children:[t,Object(p.jsx)("span",{children:this.state.mylove})]}),Object(p.jsx)("hr",{})]})]}),Object(p.jsx)("div",{className:"twelve columns",children:Object(p.jsx)("ul",{className:"social-links",children:s})})]})]})}}]),s}(a.Component),O=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(m.a,{bottom:!0,children:Object(p.jsx)("div",{className:"twelve columns",children:Object(p.jsxs)("ul",{className:"copyright",children:[Object(p.jsx)("li",{children:"\xa9 Copyright 2023"}),Object(p.jsxs)("li",{children:["Build with "," "," Love"]})]})})}),Object(p.jsx)("div",{id:"go-top",children:Object(p.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(p.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),x=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name;var e="images/"+this.props.data.image,t=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.bio.map((function(e){return Object(p.jsx)("p",{children:e})})));return console.log(t),Object(p.jsx)("section",{id:"about",children:Object(p.jsx)(m.a,{duration:1e3,children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"three columns",children:[Object(p.jsx)("img",{className:"profile-pic",src:e,alt:"Gaurav's Profile Pic"}),Object(p.jsxs)("h6",{className:"profile-name",children:["Python Developer at Tavant ",Object(p.jsx)("br",{}),"Pune"]}),Object(p.jsxs)("p",{className:"quote",children:[Object(p.jsx)("span",{className:"quote-title",children:"Favourite Quote:"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),'"Do What You Love or ',Object(p.jsx)("br",{}),'Love What You Do"']})]}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[Object(p.jsx)("h2",{children:"About Me"}),t]})]})})})}}]),s}(a.Component),g=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){if(!this.props.data)return null;this.props.data.skillmessage;var e=this.props.data.education.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:Object(p.jsxs)("a",{href:e.website,target:"_blank",rel:"noopener",children:[e.school," "]})}),Object(p.jsxs)("p",{className:"info",children:[e.degree," ",Object(p.jsx)("span",{children:"\u2022"}),Object(p.jsx)("em",{className:"date",children:e.graduated})]}),Object(p.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:Object(p.jsx)("a",{href:e.website,target:"_blank",rel:"noopener",children:e.company})}),Object(p.jsxs)("p",{className:"info",children:[e.title,Object(p.jsx)("span",{children:"\u2022"})," ",Object(p.jsx)("em",{className:"date",children:e.years})]})]},e.company)})),s=this.props.data.resumedownload;return Object(p.jsxs)("section",{id:"resume",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"columns"}),Object(p.jsx)("div",{className:"columns download",children:Object(p.jsx)("p",{children:Object(p.jsxs)("a",{href:s,target:"_blank",rel:"noopener",className:"button",children:[Object(p.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]}),Object(p.jsx)(m.a,{right:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row education",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Education"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:Object(p.jsx)("div",{className:"row item",children:Object(p.jsx)("div",{className:"twelve columns",children:e})})})]})}),Object(p.jsx)(m.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row work",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Work"})})}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[" ",t]})]})})]})}}]),s}(a.Component),A=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,a=this.props.data.address.state,c=this.props.data.address.zip,n=this.props.data.phone;this.props.data.contactmessage;return Object(p.jsx)("section",{id:"contact",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"six columns",children:Object(p.jsx)("img",{className:"contacts-pic",src:"images/coffee-cups.jpg",alt:"I am waiting . . ."})}),Object(p.jsx)(b.Slide,{right:!0,duration:1e3,children:Object(p.jsx)("aside",{className:"six columns footer-widgets",children:Object(p.jsxs)("div",{className:"widget widget_contact",children:[Object(p.jsx)("h4",{children:"Address and Phone"}),Object(p.jsxs)("p",{className:"address",children:[e,Object(p.jsx)("br",{}),t," ",Object(p.jsx)("br",{}),s,", ",a," ",c,Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:n})]})]})})})]})})}}]),s}(a.Component),v=s(18),I=s.n(v),C=0,N=(a.Component,function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.openings.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.title}),Object(p.jsx)("p",{className:"info",children:e.description})]},e.title)}));return Object(p.jsx)("section",{id:"openings",children:Object(p.jsx)(m.a,{top:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row work",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Openings"})})}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[e," "]})]})})})}}]),s}(a.Component)),f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},a}return Object(r.a)(s,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(u,{data:this.state.resumeData.main}),Object(p.jsx)(x,{data:this.state.resumeData.main}),Object(p.jsx)(g,{data:this.state.resumeData.resume}),Object(p.jsx)(N,{}),Object(p.jsx)(A,{data:this.state.resumeData.main}),Object(p.jsx)(O,{data:this.state.resumeData.main})]})}}]),s}(a.Component),w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(p.jsx)(f,{}),document.getElementById("root")),w()}},[[46,1,2]]]);
//# sourceMappingURL=main.359bf0ee.chunk.js.map
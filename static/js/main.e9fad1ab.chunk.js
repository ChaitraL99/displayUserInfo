(this.webpackJsonpkommunicate=this.webpackJsonpkommunicate||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),c=(a(14),a(15),a(1)),o=a(2),l=a(4),u=a(3),m=a(5),d=(a(7),{display:"block"}),h={display:"none"},p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"modal",style:this.props.show?d:h},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",null,"First Name : ",this.props.user.first_name,r.a.createElement("br",null),"Last Name : ",this.props.user.last_name,r.a.createElement("br",null),"Email : ",this.props.user.email,r.a.createElement("br",null))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("a",{className:"btn-flat",onClick:function(){return e.props.handleModal()}},"Close"))))}}]),a}(r.a.Component),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(){n.setState((function(){return{showModal:!n.state.showModal}}))},n.state={showModal:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card",onClick:function(){return e.handleCardClick()}},r.a.createElement("h3",null,r.a.createElement("p",{style:{paddingLeft:"20"}},this.props.user.first_name)),r.a.createElement(p,{user:this.props.user,show:this.state.showModal,handleModal:this.handleCardClick})))}}]),a}(r.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={currentPage:1,usersPerPage:4,showModal:!1},n.handleClick=n.handleClick.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(e){this.setState({currentPage:Number(e.target.id)})}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.currentPage,n=t.usersPerPage,i=a*n,s=i-n,c=this.props.items.slice(s,i).map((function(e,t){return r.a.createElement(f,{user:e})})),o=[],l=1;l<=Math.ceil(this.props.items.length/n);l++)o.push(l);var u=o.map((function(t){return r.a.createElement("a",{href:"#",key:t,id:t,onClick:e.handleClick},t)}));return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},c),r.a.createElement("div",{class:"pagination"},u))}}]),a}(r.a.Component),b=(a(16),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).filterList=function(e){var t=n.props.data;t=t.filter((function(t){return-1!==t.first_name.toLowerCase().search(e.target.value.toLowerCase())})),n.setState({items:t})},n.state={items:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({items:this.props.data})}},{key:"render",value:function(){return r.a.createElement("div",{className:"mainBody"},r.a.createElement("div",{className:"filter-list"},r.a.createElement("input",{type:"text",placeholder:"Search",onChange:this.filterList,style:{marginTop:"7%",width:"80",height:"80",borderRadius:"10%",background:"rgb(230, 133, 230)"}}),r.a.createElement(v,{items:this.state.items})))}}]),a}(r.a.Component)),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:[],isLoaded:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://reqres.in/api/users?page=2").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,data:t.data})}))}},{key:"render",value:function(){return this.state.isLoaded?r.a.createElement(b,{data:this.state.data}):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e9fad1ab.chunk.js.map
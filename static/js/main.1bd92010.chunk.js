(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(6),l=n.n(o),r=n(1),i=n(2),s=n(4),u=n(3),m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={date:void 0},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){var e=new Date;t.setState({date:e.toLocaleTimeString()}),console.log(t.state.date)}),1e3)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name,"!!!!"))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React clock"),c.a.createElement("p",null,"Current time:"," ",this.state.date))}}]),n}(c.a.Component),p=(n(12),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isClockVisible:!0,clockName:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isClockVisible;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App__button-container"},c.a.createElement("button",{type:"button",className:"App__button",onClick:function(){t.setState({isClockVisible:!0})}},"Show Clock"),c.a.createElement("button",{type:"button",className:"App__button",onClick:function(){t.setState({isClockVisible:!1})}},"Hide Clock"),c.a.createElement("button",{type:"button",className:"App__button",onClick:function(){var e=Math.ceil(10*Math.random());t.setState({clockName:e})}},"Set random name")),e&&c.a.createElement(m,{name:this.state.clockName}))}}]),n}(c.a.Component));l.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.1bd92010.chunk.js.map
(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{107:function(e,t,a){e.exports=a(192)},112:function(e,t,a){},113:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=(a(112),a(75)),s=a(76),i=a(77),u=a(105),h=a(103),g=a(195),m=a(194),f=a(92),v=a(196),p=a(197),E=a(62),C=(a(113),g.a.TextArea),d=m.a.Title,w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){e&&e.target&&e.target.value&&n.setState({value:e.target.value})},n.onChange2=function(e){e&&e.target&&e.target.value&&n.setState({result:e.target.value})},n.onClick=function(){var e=n.state.value.split("\n");console.log(e);for(var t="",a=1,r=0;r<e.length;++r)e[r].length>0&&e[r].length<10&&(t+=a.toString()+"\u3001"+e[r]+"\n",a++);n.setState({result:t}),f.a.success("\u8f6c\u6362\u6210\u529f")},n.state={value:"",result:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(v.a,{gutter:[16,16]},r.a.createElement(p.a,{span:12,offset:6},r.a.createElement(d,{className:"App"},"\u7b7e\u5230\u8f6c\u6362"))),r.a.createElement(v.a,{gutter:[16,16]},r.a.createElement(p.a,{span:12,offset:6},r.a.createElement(C,{rows:15,allowClear:!0,placeholder:"\u8bf7\u8f93\u5165\u7b7e\u5230\u7684\u4eba\u5458",onChange:this.onChange}))),r.a.createElement(v.a,{gutter:[16,16]},r.a.createElement(p.a,{span:12,offset:6},r.a.createElement(E.a,{type:"primary",onClick:this.onClick},"\u8f6c\u6362"))),r.a.createElement(v.a,{gutter:[16,16]},r.a.createElement(p.a,{span:12,offset:6},r.a.createElement(C,Object(c.a)({rows:15,allowClear:!0,placeholder:"\u8f6c\u6362\u7ed3\u679c\u5c06\u5728\u6b64\u663e\u793a",onChange:this.onChange,value:this.state.result},"onChange",this.onChange2)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.75c9a797.chunk.js.map
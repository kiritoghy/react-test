(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{106:function(e,t,a){e.exports=a(191)},111:function(e,t,a){},112:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=(a(111),a(75)),s=a(76),i=a(104),u=a(102),m=a(194),g=a(193),h=a(91),f=a(195),v=a(196),p=a(62),w=(a(112),m.a.TextArea),E=g.a.Title,d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChange=function(e){e&&e.target&&e.target.value&&n.setState({value:e.target.value})},n.onChange2=function(e){e&&e.target&&e.target.value&&n.setState({result:e.target.value})},n.onClick=function(){var e=n.state.value.split("\n");console.log(e);for(var t="",a=1,r=0;r<e.length;++r)e[r].length>0&&e[r].length<10&&(t+=a.toString()+"\u3001"+e[r]+"\n",a++);n.setState({result:t}),h.a.success("\u8f6c\u6362\u6210\u529f")},n.state={value:"",result:""},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(f.a,{gutter:[16,16]},r.a.createElement(v.a,{span:12,offset:6},r.a.createElement(E,{className:"App",level:2},"\u7b7e\u5230\u8f6c\u6362"))),r.a.createElement(f.a,{gutter:[16,16]},r.a.createElement(v.a,{span:12,offset:6},r.a.createElement(w,{rows:15,allowClear:!0,placeholder:"\u8bf7\u8f93\u5165\u7b7e\u5230\u7684\u4eba\u5458",onChange:this.onChange,autoSize:{minRows:15,maxRows:15}}))),r.a.createElement(f.a,{gutter:[16,16]},r.a.createElement(v.a,{span:12,offset:6},r.a.createElement(p.a,{type:"primary",onClick:this.onClick},"\u8f6c\u6362"))),r.a.createElement(f.a,{gutter:[16,16]},r.a.createElement(v.a,{span:12,offset:6},r.a.createElement(w,{rows:15,allowClear:!0,placeholder:"\u8f6c\u6362\u7ed3\u679c\u5c06\u5728\u6b64\u663e\u793a",value:this.state.result,onChange:this.onChange2,autoSize:{minRows:15,maxRows:15}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.8e7c8187.chunk.js.map
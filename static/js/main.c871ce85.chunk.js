(this["webpackJsonpprops-scess-map"]=this["webpackJsonpprops-scess-map"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),r=a.n(o),s=a(7),m=a(1),l=a(2),i=a(5),u=a(3),d=a(6),h=(a(16),a(17),a(4));var p=function(e){var t=e.contacts,a=e.removeContact,n=e.handleUpdate;return c.a.createElement("div",{className:"contacts"},0===t.length?c.a.createElement("p",{className:"notification"},"Nothing to show... Add new contact list...."):t.map((function(e,t){return c.a.createElement("div",{className:"contact",key:e.id},c.a.createElement("h1",{className:"name"},c.a.createElement(h.b,{className:"iName"}),e.name),c.a.createElement("h3",{className:"company"},e.company),c.a.createElement("p",{className:"number"},c.a.createElement(h.a,{className:"iNumber"}),e.number),c.a.createElement("button",{className:"edit",onClick:function(){return n(t)}},"Edit"),c.a.createElement("button",{className:"delete",onClick:function(){return a(e.id)}},"Delete"))})))},b=a(10),f=(a(18),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={name:null,company:null,number:null},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.addContact(a.state),a.setState({name:"",company:"",number:""})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"addConatact"},c.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"text",placeholder:"Enter the name...",id:"name",value:this.state.name,onChange:this.handleChange}),c.a.createElement("input",{type:"text",placeholder:"Enter company name...",id:"company",value:this.state.company,onChange:this.handleChange}),c.a.createElement("input",{type:"text",placeholder:"Enter phone number...",id:"number",value:this.state.number,onChange:this.handleChange}),c.a.createElement("button",{className:"add"},"Add")))}}]),t}(n.Component)),v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[{name:"Bhaskar Das",company:"X-Bros Pvt Ltd",number:"+8011090289",id:1},{name:"Gobinda Das",company:"X-Bros Pvt Ltd",number:"+9011090289",id:2},{name:"Babita Das",company:"X-Bros Pvt Ltd",number:"+3011090289",id:3},{name:"Rajbeer Das",company:"X-Bros Pvt Ltd",number:"+1111090289",id:4}]},a.addContact=function(e){e.id=a.state.contacts.length+1;var t=[].concat(Object(s.a)(a.state.contacts),[e]);a.setState({contacts:t})},a.removeContact=function(e){var t=a.state.contacts.filter((function(t){return t.id!==e}));a.setState({contacts:t})},a.handleUpdate=function(e){var t=Object(s.a)(a.state.contacts)[e];console.log(t)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(p,{contacts:this.state.contacts,removeContact:this.removeContact,handleUpdate:this.handleUpdate}),c.a.createElement(f,{addContact:this.addContact}))}}]),t}(n.Component);a(19);r.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.c871ce85.chunk.js.map
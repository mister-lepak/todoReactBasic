(this["webpackJsonp9.todo"]=this["webpackJsonp9.todo"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(2),a=n.n(s),c=n(5),d=n.n(c),o=n(6),l=n(7),u=n(1),r=n(9),j=n(8),b=n(4),h=n.n(b),m=function(e){var t=e.tasks,n=e.onDelete,s=e.edit,a=e.editTask,c=e.onEdit,d=e.onSubmitEdit,o=e.editChange;return Object(i.jsx)("div",{className:"ui one column centered grid",children:t.map((function(e,l){return Object(i.jsx)(i.Fragment,{children:s[l]?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"ten wide column ui grid",children:[Object(i.jsxs)("div",{className:"one wide column",children:[t.indexOf(e),"."]}),Object(i.jsx)("div",{className:"thirteen wide column",children:Object(i.jsx)("input",{onChange:o,value:a,type:"text",autoFocus:"true"})},h()()),Object(i.jsx)("div",{className:"one wide column",children:Object(i.jsx)("button",{className:"save icon",onClick:function(){return d(l)},children:"save"})}),Object(i.jsx)("div",{className:"one wide column",children:Object(i.jsx)("i",{className:"undo icon",onClick:function(){c()}})})]})}):Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"ten wide column ui grid",children:[Object(i.jsxs)("div",{className:"one wide column",children:[t.indexOf(e),"."]}),Object(i.jsx)("div",{className:"thirteen wide column",children:e},h()()),Object(i.jsx)("div",{className:"one wide column",children:Object(i.jsx)("i",{className:"edit icon",onClick:function(){return c(l)}})}),Object(i.jsx)("div",{className:"one wide column",children:Object(i.jsx)("i",{className:"close icon",onClick:function(){n(e)}})})]})})})}))})},O=function(e){Object(r.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).handleChange=function(e){i.setState({task:e.target.value})},i.onSubmitTask=function(e){e.preventDefault(),i.setState({tasks:i.state.tasks.concat(i.state.task),task:"",id:i.state.id.concat(i.state.id.length+1),edit:i.state.edit.concat(!1)})},i.onDelete=function(e){i.setState({tasks:i.state.tasks.filter((function(t){return t!==e}))})},i.onEdit=function(e){i.setState({edit:i.state.edit.map((function(t,n){return n===e})),editTask:""})},i.editChange=function(e){i.setState({editTask:e.target.value})},i.onSubmitEdit=function(e){i.setState({tasks:i.state.tasks.map((function(t,n){return n===e?i.state.editTask:t}))}),i.onEdit()},i.state={task:"",tasks:[],id:[],edit:[],editTask:""},i.onDelete=i.onDelete.bind(Object(u.a)(i)),i.onEdit=i.onEdit.bind(Object(u.a)(i)),i.onSubmitEdit=i.onSubmitEdit.bind(Object(u.a)(i)),i.handleChange=i.handleChange.bind(Object(u.a)(i)),i.editChange=i.editChange.bind(Object(u.a)(i)),i}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.task,n=e.tasks,s=e.edit,a=e.id,c=e.editTask;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"ui two column centered grid",children:Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("form",{className:"ui form",onSubmit:this.onSubmitTask,children:[Object(i.jsxs)("div",{className:"field",children:[Object(i.jsx)("label",{children:"Input your task"}),Object(i.jsx)("input",{onChange:this.handleChange,value:t,type:"text",name:"task",placeholder:"Put your task"})]}),Object(i.jsx)("button",{className:"ui button",type:"submit",children:"Add Task"})]})})}),Object(i.jsx)(m,{tasks:n,id:a,onDelete:this.onDelete,edit:s,editTask:c,onEdit:this.onEdit,onSubmitEdit:this.onSubmitEdit,editChange:this.editChange})]})}}]),n}(s.Component);d.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2f7f89ab.chunk.js.map
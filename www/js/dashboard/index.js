var Le={getAllDepartments:"https://employee-managers.herokuapp.com/api/departments/",updateEmployee:"https://employee-managers.herokuapp.com/api/departments/employee/update",getDepartment:r=>`https://employee-managers.herokuapp.com/api/departments/name/${r}`,deleteEmployee:r=>`https://employee-managers.herokuapp.com/api/departments/employee/id/${r}`},L=Le;var Se=async r=>await(await fetch(r)).json(),Ce=async r=>await(await fetch(r,{method:"DELETE",redirect:"follow"})).json(),De=async(r,n)=>{let i=new Headers;i.append("Content-Type","application/json");let o=JSON.stringify(n),m=await(await fetch(r,{method:"PUT",headers:i,body:o,redirect:"follow"})).text()},Ae={getRequest:Se,deleteRequest:Ce,putRequest:De},S=Ae;var Fe=function(){let r=null;function n(){let i=document.createElement("img");document.body.appendChild(i);let o=async m=>{let u=await S.deleteRequest(L.deleteEmployee(m.detail.id));console.log(u),i.dispatchEvent(new CustomEvent("removeItem",{bubbles:!0,detail:u}))},c=async m=>{let u=await S.putRequest(L.updateEmployee,m.detail.payload)},h=async m=>{let u=await S.getRequest(L.getDepartment(m.detail.name));i.dispatchEvent(new CustomEvent("updateDisplay",{bubbles:!0,detail:u}))};return i.addEventListener("deleteEmployee",o),i.addEventListener("editEmployee",c),i.addEventListener("sideBarSelect",h),{handle:i}}return{getInstance:function(){return r||(r=n()),r}}}(),D=Fe;var G=`
    <ul class="departments"></ul>
`,Z=`
   <li class="department" data-name="<%-data.name%> "><%-data.name%></li>
`;function Ie(r){return document.createRange().createContextualFragment(r).firstElementChild}var T=Ie;var Oe=function(){return T(G)},Q=Oe;function K(r,n,i){return i={path:n,exports:{},require:function(o,c){return xe(o,c??i.path)}},r(i,i.exports),i.exports}function xe(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var P={};function Y(r,n){for(var i=0,o=r.length-1;o>=0;o--){var c=r[o];c==="."?r.splice(o,1):c===".."?(r.splice(o,1),i++):i&&(r.splice(o,1),i--)}if(n)for(;i--;i)r.unshift("..");return r}var Me=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,q=function(r){return Me.exec(r).slice(1)};function M(){for(var r="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var o=i>=0?arguments[i]:"/";if(typeof o!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!o)continue;r=o+"/"+r,n=o.charAt(0)==="/"}return r=Y(N(r.split("/"),function(c){return!!c}),!n).join("/"),(n?"/":"")+r||"."}function B(r){var n=k(r),i=Re(r,-1)==="/";return r=Y(N(r.split("/"),function(o){return!!o}),!n).join("/"),!r&&!n&&(r="."),r&&i&&(r+="/"),(n?"/":"")+r}function k(r){return r.charAt(0)==="/"}function ee(){var r=Array.prototype.slice.call(arguments,0);return B(N(r,function(n,i){if(typeof n!="string")throw new TypeError("Arguments to path.join must be strings");return n}).join("/"))}function te(r,n){r=M(r).substr(1),n=M(n).substr(1);function i(g){for(var _=0;_<g.length&&g[_]==="";_++);for(var w=g.length-1;w>=0&&g[w]==="";w--);return _>w?[]:g.slice(_,w-_+1)}for(var o=i(r.split("/")),c=i(n.split("/")),h=Math.min(o.length,c.length),m=h,u=0;u<h;u++)if(o[u]!==c[u]){m=u;break}for(var p=[],u=m;u<o.length;u++)p.push("..");return p=p.concat(c.slice(m)),p.join("/")}var ne="/",re=":";function ae(r){var n=q(r),i=n[0],o=n[1];return!i&&!o?".":(o&&(o=o.substr(0,o.length-1)),i+o)}function se(r,n){var i=q(r)[2];return n&&i.substr(-1*n.length)===n&&(i=i.substr(0,i.length-n.length)),i}function ie(r){return q(r)[3]}var Pe={extname:ie,basename:se,dirname:ae,sep:ne,delimiter:re,relative:te,join:ee,isAbsolute:k,normalize:B,resolve:M};function N(r,n){if(r.filter)return r.filter(n);for(var i=[],o=0;o<r.length;o++)n(r[o],o,r)&&i.push(r[o]);return i}var Re="ab".substr(-1)==="b"?function(r,n,i){return r.substr(n,i)}:function(r,n,i){return n<0&&(n=r.length+n),r.substr(n,i)},qe=Object.freeze({__proto__:null,resolve:M,normalize:B,isAbsolute:k,join:ee,relative:te,sep:ne,delimiter:re,dirname:ae,basename:se,extname:ie,default:Pe}),E=K(function(r,n){var i=/[|\\{}()[\]^$+*?.]/g;n.escapeRegExpChars=function(u){return u?String(u).replace(i,"\\$&"):""};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function h(u){return o[u]||u}var m=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;n.escapeXML=function(u){return u==null?"":String(u).replace(c,h)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+m},n.shallowCopy=function(u,p){p=p||{};for(var g in p)u[g]=p[g];return u},n.shallowCopyFromList=function(u,p,g){for(var _=0;_<g.length;_++){var w=g[_];typeof p[w]!="undefined"&&(u[w]=p[w])}return u},n.cache={_data:{},set:function(u,p){this._data[u]=p},get:function(u){return this._data[u]},remove:function(u){delete this._data[u]},reset:function(){this._data={}}},n.hyphenToCamel=function(u){return u.replace(/-[a-z]/g,function(p){return p[1].toUpperCase()})}}),Ne=[["ejs@3.1.6","C:\\Users\\15873\\Documents\\NAIT\\Winter2021\\DMIT2008\\Assesment-2b\\employee-manager"]],ke="ejs@3.1.6",Be="ejs@3.1.6",He=!1,We="sha512-9lt9Zse4hPucPkoP7FHDF0LQAlGyF9JVpnClFLFH3aSSbxmyoqINRpp/9wePWJTUl4KOQwRL72Iw3InHPDkoGw==",Ue="/ejs",$e={},Je={type:"version",registry:!0,raw:"ejs@3.1.6",name:"ejs",escapedName:"ejs",rawSpec:"3.1.6",saveSpec:null,fetchSpec:"3.1.6"},Ve=["/"],ze="https://registry.npmjs.org/ejs/-/ejs-3.1.6.tgz",Xe="3.1.6",Ge="C:\\Users\\15873\\Documents\\NAIT\\Winter2021\\DMIT2008\\Assesment-2b\\employee-manager",Ze={name:"Matthew Eernisse",email:"mde@fleegix.org",url:"http://fleegix.org"},Qe={ejs:"bin/cli.js"},Ke={url:"https://github.com/mde/ejs/issues"},Ye={jake:"^10.6.1"},et="Embedded JavaScript templates",tt={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.4","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},nt={node:">=0.10.0"},rt="https://github.com/mde/ejs",at="ejs.min.js",st=["template","engine","ejs"],it="Apache-2.0",ot="./lib/ejs.js",lt="ejs",ct={type:"git",url:"git://github.com/mde/ejs.git"},ut={test:"mocha"},mt="ejs.min.js",dt="3.1.6",pt={_args:Ne,_from:ke,_id:Be,_inBundle:He,_integrity:We,_location:Ue,_phantomChildren:$e,_requested:Je,_requiredBy:Ve,_resolved:ze,_spec:Xe,_where:Ge,author:Ze,bin:Qe,bugs:Ke,dependencies:Ye,description:et,devDependencies:tt,engines:nt,homepage:rt,jsdelivr:at,keywords:st,license:it,main:ot,name:lt,repository:ct,scripts:ut,unpkg:mt,version:dt},ft=K(function(r,n){var i=qe,o=!1,c=pt.version,h="<",m=">",u="%",p="locals",g="ejs",_="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",w=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],ye=w.concat("cache"),W=/^\uFEFF/;n.cache=E.cache,n.fileLoader=P.readFileSync,n.localsName=p,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(t,a,e){var s=i.dirname,l=i.extname,d=i.resolve,v=d(e?a:s(a),t),j=l(t);return j||(v+=".ejs"),v};function U(t,a){var e;if(a.some(function(s){return e=n.resolveInclude(t,s,!0),P.existsSync(e)}))return e}function Ee(t,a){var e,s,l=a.views,d=/^[A-Za-z]+:\\|^\//.exec(t);if(d&&d.length)t=t.replace(/^\/*/,""),Array.isArray(a.root)?e=U(t,a.root):e=n.resolveInclude(t,a.root||"/",!0);else if(a.filename&&(s=n.resolveInclude(t,a.filename),P.existsSync(s)&&(e=s)),!e&&Array.isArray(l)&&(e=U(t,l)),!e&&typeof a.includer!="function")throw new Error('Could not find the include file "'+a.escapeFunction(t)+'"');return e}function F(t,a){var e,s=t.filename,l=arguments.length>1;if(t.cache){if(!s)throw new Error("cache option requires a filename");if(e=n.cache.get(s),e)return e;l||(a=$(s).toString().replace(W,""))}else if(!l){if(!s)throw new Error("Internal EJS error: no file name or template provided");a=$(s).toString().replace(W,"")}return e=n.compile(a,t),t.cache&&n.cache.set(s,e),e}function _e(t,a,e){var s;if(e){try{s=F(t)(a)}catch(l){return e(l)}e(null,s)}else{if(typeof n.promiseImpl=="function")return new n.promiseImpl(function(l,d){try{s=F(t)(a),l(s)}catch(v){d(v)}});throw new Error("Please provide a callback function")}}function $(t){return n.fileLoader(t)}function we(t,a){var e=E.shallowCopy({},a);if(e.filename=Ee(t,e),typeof a.includer=="function"){var s=a.includer(t,e.filename);if(s&&(s.filename&&(e.filename=s.filename),s.template))return F(e,s.template)}return F(e)}function J(t,a,e,s,l){var d=a.split(`
`),v=Math.max(s-3,0),j=Math.min(d.length,s+3),b=l(e),C=d.slice(v,j).map(function(O,x){var I=x+v+1;return(I==s?" >> ":"    ")+I+"| "+O}).join(`
`);throw t.path=b,t.message=(b||"ejs")+":"+s+`
`+C+`

`+t.message,t}function V(t){return t.replace(/;(\s*$)/,"$1")}n.compile=function(a,e){var s;return e&&e.scope&&(o||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),o=!0),e.context||(e.context=e.scope),delete e.scope),s=new f(a,e),s.compile()},n.render=function(t,a,e){var s=a||{},l=e||{};return arguments.length==2&&E.shallowCopyFromList(l,s,w),F(l,t)(s)},n.renderFile=function(){var t=Array.prototype.slice.call(arguments),a=t.shift(),e,s={filename:a},l,d;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(l=t.shift(),t.length?E.shallowCopy(s,t.pop()):(l.settings&&(l.settings.views&&(s.views=l.settings.views),l.settings["view cache"]&&(s.cache=!0),d=l.settings["view options"],d&&E.shallowCopy(s,d)),E.shallowCopyFromList(s,l,ye)),s.filename=a):l={},_e(s,l,e)},n.Template=f,n.clearCache=function(){n.cache.reset()};function f(t,a){a=a||{};var e={};this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=a.client||!1,e.escapeFunction=a.escape||a.escapeFunction||E.escapeXML,e.compileDebug=a.compileDebug!==!1,e.debug=!!a.debug,e.filename=a.filename,e.openDelimiter=a.openDelimiter||n.openDelimiter||h,e.closeDelimiter=a.closeDelimiter||n.closeDelimiter||m,e.delimiter=a.delimiter||n.delimiter||u,e.strict=a.strict||!1,e.context=a.context,e.cache=a.cache||!1,e.rmWhitespace=a.rmWhitespace,e.root=a.root,e.includer=a.includer,e.outputFunctionName=a.outputFunctionName,e.localsName=a.localsName||n.localsName||p,e.views=a.views,e.async=a.async,e.destructuredLocals=a.destructuredLocals,e.legacyInclude=typeof a.legacyInclude!="undefined"?!!a.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof a._with!="undefined"?a._with:!0,this.opts=e,this.regex=this.createRegex()}f.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},f.prototype={createRegex:function(){var t=_,a=E.escapeRegExpChars(this.opts.delimiter),e=E.escapeRegExpChars(this.opts.openDelimiter),s=E.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,a).replace(/</g,e).replace(/>/g,s),new RegExp(t)},compile:function(){var t,a,e=this.opts,s="",l="",d=e.escapeFunction,v,j=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),s+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName&&(s+="  var "+e.outputFunctionName+` = __append;
`),e.destructuredLocals&&e.destructuredLocals.length){for(var b="  var __locals = ("+e.localsName+` || {}),
`,C=0;C<e.destructuredLocals.length;C++){var O=e.destructuredLocals[C];C>0&&(b+=`,
  `),b+=O+" = __locals."+O}s+=b+`;
`}e._with!==!1&&(s+="  with ("+e.localsName+` || {}) {
`,l+=`  }
`),l+=`  return __output;
`,this.source=s+this.source+l}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+j+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+d.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+J.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+j+`
`);try{if(e.async)try{v=new Function("return (async function(){}).constructor;")()}catch(y){throw y instanceof SyntaxError?new Error("This environment does not support async/await"):y}else v=Function;a=new v(e.localsName+", escapeFn, include, rethrow",t)}catch(y){throw y instanceof SyntaxError&&(e.filename&&(y.message+=" in "+e.filename),y.message+=` while compiling ejs

`,y.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,y.message+="https://github.com/RyanZim/EJS-Lint",e.async||(y.message+=`
`,y.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),y}var x=e.client?a:function(z){var Te=function(je,X){var R=E.shallowCopy({},z);return X&&(R=E.shallowCopy(R,X)),we(je,e)(R)};return a.apply(e.context,[z||{},d,Te,J])};if(e.filename&&typeof Object.defineProperty=="function"){var I=e.filename,be=i.basename(I,i.extname(I));try{Object.defineProperty(x,"name",{value:be,writable:!1,enumerable:!1,configurable:!0})}catch(y){}}return x},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var a=this,e=this.parseTemplateText(),s=this.opts.delimiter,l=this.opts.openDelimiter,d=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(v,j){var b;if(v.indexOf(l+s)===0&&v.indexOf(l+s+s)!==0&&(b=e[j+2],!(b==s+d||b=="-"+s+d||b=="_"+s+d)))throw new Error('Could not find matching close tag for "'+v+'".');a.scanLine(v)})},parseTemplateText:function(){for(var t=this.templateText,a=this.regex,e=a.exec(t),s=[],l;e;)l=e.index,l!==0&&(s.push(t.substring(0,l)),t=t.slice(l)),s.push(e[0]),t=t.slice(e[0].length),e=a.exec(t);return t&&s.push(t),s},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var a=this,e=this.opts.delimiter,s=this.opts.openDelimiter,l=this.opts.closeDelimiter,d=0;switch(d=t.split(`
`).length-1,t){case s+e:case s+e+"_":this.mode=f.modes.EVAL;break;case s+e+"=":this.mode=f.modes.ESCAPED;break;case s+e+"-":this.mode=f.modes.RAW;break;case s+e+"#":this.mode=f.modes.COMMENT;break;case s+e+e:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(s+e+e,s+e)+`")
`;break;case e+e+l:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+l,e+l)+`")
`;break;case e+l:case"-"+e+l:case"_"+e+l:this.mode==f.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case f.modes.EVAL:case f.modes.ESCAPED:case f.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case f.modes.EVAL:this.source+="    ; "+t+`
`;break;case f.modes.ESCAPED:this.source+="    ; __append(escapeFn("+V(t)+`))
`;break;case f.modes.RAW:this.source+="    ; __append("+V(t)+`)
`;break;case f.modes.COMMENT:break;case f.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}a.opts.compileDebug&&d&&(this.currentLine+=d,this.source+="    ; __line = "+this.currentLine+`
`)}},n.escapeXML=E.escapeXML,n.__express=n.renderFile,n.VERSION=c,n.name=g,typeof window!="undefined"&&(window.ejs=n)}),oe=ft;function ht(r,n){return oe.render(r,{data:n})}var A=ht;var vt=D.getInstance(),le=new CustomEvent("sideBarSelect",{bubbles:!0,detail:{name:null}}),yt=function(r){let n=A(Z,r),i=T(n);return i.addEventListener("click",gt),i},gt=r=>{le.detail.name=r.currentTarget.dataset.name,vt.handle.dispatchEvent(le)},ce=yt;var Et=document.querySelector("#sidebar"),_t=function(){return{init:function(n){let i=Q();n.forEach(o=>{let c=ce(o);i.append(c)}),Et.append(i)}}},ue=_t;var wt=`
<aside class="manager" data-id="<%-data.id%> ">
<img src="<%-data.avatar%>" alt="" />
<ul>
  <li class="fullname"><%-data.firstname%> <%-data.lastname%></li>
  <li class="email">email: <%-data.email%></li>
  <li class="cell-number">cell:<%-data.cellNumber%></li>
</ul>
</aside>  
`,bt=`
<aside class="managers">
<header><h2>manager</h2></header>
</aside>  
`,Tt={parentTemplate:bt,childTemplate:wt},H=Tt;var jt=r=>{let n=document.querySelector("#managers"),i=r.filter(c=>c.role),o=T(H.parentTemplate);return i.forEach(c=>{let h=A(H.childTemplate,c),m=T(h);o.appendChild(m)}),o},me=jt;var de=`
<aside class="employees"></aside>
`,pe=`
 

<ul class="employee" data-id="<%-data.id%>">
<li>
  <img src="<%-data.avatar%>" width="90px" alt="" />
</li>

<li class="fullname">
    <label> firstname </label>
  <input id="firstname" type="text" value="<%-data.firstname%>" >
 
</li>

 
<li class="lastname"> 
<label> lastname </label>
<input id="lastname" type="text" value="<%-data.lastname%>">
</li>
 


<li>
<label> salary</label>
<input id="salary" type="text" value="<%-data.salary%>">
</li>
 


<li class="vacation"><label> vacation days</label>
  <input id="vacation" type="text" value="<%-data.vacation%>" >
</li>
 
<li class="controls" data-id="<%-data.id%>">
<img id="edit" class="icon" src="assets/svgs/edit.svg" width="24px" alt="">
  <img id="delete" class="icon" src="assets/svgs/delete.svg" width:="24px" alt="">
</li>

 
</ul>
 

`;var fe=D.getInstance(),Lt=function(r){let n=T(de),i=r.filter(c=>!c.role),o=c=>{switch(c.target.id){case"delete":fe.handle.dispatchEvent(new CustomEvent("deleteEmployee",{bubbles:!0,detail:{id:c.currentTarget.dataset.id}})),n.removeChild(c.currentTarget.parentElement);break;case"edit":let h={id:c.currentTarget.dataset.id,firstname:c.currentTarget.parentElement.querySelector("#firstname").value.trim(),lastname:c.currentTarget.parentElement.querySelector("#lastname").value.trim(),salary:c.currentTarget.parentElement.querySelector("#salary").value.trim(),vacation:c.currentTarget.parentElement.querySelector("#vacation").value.trim()};fe.handle.dispatchEvent(new CustomEvent("editEmployee",{bubbles:!0,detail:{payload:h}}));break}};return i.forEach(c=>{let h=A(pe,c),m=T(h);m.querySelector(".controls").addEventListener("click",o),n.appendChild(m)}),n},he=Lt;var St=()=>{let r=document.querySelector("#panel"),n=document.querySelector("#widget-heading"),i=null,o=null,c=m=>{n.textContent=`${m[0].department} department`,i=r.appendChild(me(m)),o=r.appendChild(he(m))};return{updateDisplay:m=>{r.removeChild(i),r.removeChild(o),c(m)},view:r,init:c}},ve=St;var ge=ve(),Ct=ue(),Dt=D.getInstance();Dt.handle.addEventListener("updateDisplay",r=>{ge.updateDisplay(r.detail)});var At=async function(){let r=await S.getRequest(L.getAllDepartments),n=await S.getRequest(L.getDepartment("training"));console.log(r),Ct.init(r),ge.init(n)};At();
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */

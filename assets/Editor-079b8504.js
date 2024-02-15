import{_ as E,d as je}from"./index-55c1b714.js";const be="/FlowOS/assets/text-editor-3da5bd40.svg";/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */const Me=(()=>{var e={},r={},s=t=>typeof t=="string"?f.languages[t]:t,o=(t,a=new Map)=>{if(a.has(t))return a.get(t);var i=t,c=u(t);if(c=="Object"){a.set(t,i={});for(var g in t)t.hasOwnProperty(g)&&(i[g]=o(t[g],a))}else if(c=="Array"){a.set(t,i=[]);for(var b=0,l=t.length;b<l;b++)i[b]=o(t[b],a)}return i},d={}.toString,u=t=>d.call(t).slice(8,-1),f={util:{type:u,clone:o},languages:{plain:e,plaintext:e,text:e,txt:e,extend:(t,a)=>Object.assign(o(f.languages[t]),a),insertBefore(t,a,i,c=f.languages){var g=c[t],b={};for(var l in g)g.hasOwnProperty(l)&&(b[l]=g[l],delete g[l]);for(var l in b)l==a&&Object.assign(g,i),i.hasOwnProperty(l)||(g[l]=b[l]);return g}},plugins:{},tokenize(t,a){var i={},c={prev:i},g={head:i,tail:c,length:0},b=s(a.rest),l=[],D=0;for(i.next=c,b&&(Object.assign(a,b),delete a.rest),$(g,i,t),y(t,g,a,i,0);(i=i.next)!=c;)l[D++]=i.value;return l},hooks:{all:r,add(t,a){(r[t]||(r[t]=[])).push(a)},run(t,a){r[t]?.forEach(i=>i(a))}},Token:w},v=(t,a,i)=>{var c=t.exec(a);if(c&&i&&c[1]){var g=c[1].length;c.index+=g,c[0]=c[0].slice(g)}return c},y=(t,a,i,c,g,b)=>{for(var l in i)if(i.hasOwnProperty(l)&&l!="rest"&&i[l])for(var D=0,S=i[l],q=Array.isArray(S)?S:[S];D<q.length;++D){if(b&&b.b==D&&b.a==l)return;var A=q[D],Y=s(A.inside),I=A.lookbehind,Z=A.greedy,ne=A.alias,P=A.pattern||A;Z&&!P.global&&(P=A.pattern=RegExp(P.source,"g"+P.flags));for(var _=c.next,T=g;_!=a.tail&&(!b||T<b.c);T+=_.value.length,_=_.next){var j=_.value;if(a.length>t.length)return;if(!(j instanceof w)){var V=1,O;if(Z){if(P.lastIndex=T,O=v(P,t,I),!O||O.index>=t.length)break;for(var C=O.index,H=C+O[0].length;C>=(T+=_.value.length);)_=_.next;if(T-=_.value.length,_.value instanceof w)continue;for(var B=_,S=T;B!=a.tail&&(S<H||typeof B.value=="string");B=B.next)V++,S+=B.value.length;V--,j=t.slice(T,S),O.index-=T}else if(O=v(P,j,I),!O)continue;var C=O.index,n=O[0],m=j.slice(0,C),p=j.slice(C+n.length),x=T+j.length,L=_.prev;b&&x>b.c&&(b.c=x),m&&(L=$(a,L,m),T+=m.length);for(var k=L.next,F=0;F<V&&k!=a.tail;F++)k=k.next;L.next=k,k.prev=L,a.length-=F;var G=new w(l,Y?f.tokenize(n,Y):n,ne,n);if(_=$(a,L,G),p&&$(a,_,p),V>1){var M={a:l,b:D,c:x};y(t,a,i,_.prev,T,M),b&&M.c>b.c&&(b.c=M.c)}}}}},$=(t,a,i)=>{var c=a.next;return t.length++,a.next=c.prev={value:i,prev:a,next:c}};function w(t,a,i,c=""){this.type=t,this.content=a,this.alias=i,this.length=c.length}return f})(),R=Me,h=R.languages,z=h.insertBefore,ze=(e,r,...s)=>{let o,d,u=le(e),f=[],v,y="",$,w=!1,t=!0,a=[],i;const c=We.cloneNode(!0),g=c.firstChild,b=g.firstChild,l=b.firstChild,D=g.children,S={language:"text"},q=new Set(s),A=addEventListener.bind(l),Y="</span>",I={selectionChange:new Set([([n,m,p])=>{const x=D[$=qe(y,0,p=="backward"?n:m)];x!=v&&(v?.classList.remove("active-line"),x.classList.add("active-line"),v=x),b.classList.toggle("pce-no-selection",n==m)}])},Z=n=>{({language:o,value:y=""}=Object.assign(S,{value:y},n));const m=d!=(d=h[o]);if(!d)throw Error(`Language "${o}" has no grammar.`);q.forEach(p=>p.update(C,S)),c.className=`prism-code-editor language-${o}${S.lineNumbers==!1?"":" show-line-numbers"} pce-${S.wordWrap?"":"no"}wrap${S.rtl?" pce-rtl":""}`,c.style.tabSize=S.tabSize||2,(m||y!=l.value)&&(O(),l.value=y,y=l.value,l.selectionEnd=0,P()),b.classList.toggle("pce-readonly",i=!!S.readOnly),l.inputMode=i?"none":"",l.setAttribute("aria-readonly",i)},ne=()=>{let n="",m="",p={language:o,code:y,grammar:d};R.hooks.run("before-tokenize",p),a=p.tokens=R.tokenize(p.code,p.grammar),R.hooks.run("after-tokenize",p),H("tokenize",p);const x=k=>{let F="",G=k.length;for(let M=0;M<G;)F+=L(k[M++]);return F},L=k=>{if(k instanceof R.Token){let{type:F,alias:G,content:M}=k,Oe=G?" "+(typeof G=="string"?G:G.join(" ")):"",Pe=n,Be=m,ge=`<span class="token ${F+Oe+(F=="keyword"?" keyword-"+M:"")}">`;m+=Y,n+=ge;let Ce=L(M);return n=Pe,m=Be,ge+Ce+Y}return typeof k!="string"?x(k):(k=k.replace(/&/g,"&amp;").replace(/</g,"&lt;")).includes(`
`)&&m?k.replace(/\n/g,m+`
`+n):k};return x(a)},P=()=>{const n=ne().split(`
`),m=n.length;let p=0,x=n.length,L=f.length,k="";for(;n[p]==f[p]&&p<x;)++p;for(;x&&n[--x]==f[--L];);p==x&&p==L&&(D[++p].innerHTML=n[p-1]+`
`);for(let F=L<p?L:p-1;F<x;)k+=`<div class="pce-line" aria-hidden="true">${n[++F]}
</div>`;for(let F=x<p?x:p-1;F<L;F++)D[p+1].remove();k&&D[p].insertAdjacentHTML("afterend",k);for(let F=x<p?x+1:p;F<m;)D[++F].setAttribute("data-line",F);c.style.setProperty("--number-width",Math.ceil(Math.log10(m+1))+.001+"ch"),t=!0,H("update",y),B(),setTimeout(setTimeout,0,()=>t=!0),f=n,t=!1},_=()=>$e||[l.selectionStart,l.selectionEnd,l.selectionDirection],T=()=>X==B,j={Escape(){l.blur()}},V={},O=()=>Ve&&!T()&&A("focus",n=>n.relatedTarget?n.relatedTarget.focus():l.blur(),{once:!0}),H=(n,...m)=>{for(const p of I[n]||[])p.apply(C,m);S[`on${n[0].toUpperCase()}${n.slice(1)}`]?.apply(C,m)},B=n=>(n||t)&&H("selectionChange",_(),y),C={scrollContainer:c,wrapper:g,overlays:b,textarea:l,get activeLine(){return v},get activeLineNumber(){return $},get value(){return y},options:S,get focused(){return T()},get removed(){return w},get tokens(){return a},inputCommandMap:V,keyCommandMap:j,extensions:{},setOptions:Z,update:P,getSelection:_,setSelection(n,m,p){O(),l.setSelectionRange(n,m??n,p),B(!0)},addExtensions(...n){n.forEach(m=>{q.has(m)||(q.add(m),m.update(C,S))})},addListener(n,m){(I[n]||(I[n]=new Set)).add(m)},removeListener(n,m){I[n]?.delete(m)},remove(){c.remove(),w=!0}};return A("keydown",n=>{j[n.key]?.(n,_(),y)&&ae(n)}),A("beforeinput",n=>{(i||n.inputType=="insertText"&&V[n.data]?.(n,_(),y))&&ae(n)}),A("input",()=>{y!=l.value&&(y=l.value,P())}),A("blur",()=>{X=null}),A("focus",()=>{X=B}),A("selectionchange",n=>{B(),ae(n)}),u?.append(c),r&&Z(r),C},Ge=(e="",r="",s="")=>Object.assign(document.createElement("div"),{innerHTML:e,style:r,className:s}),le=e=>typeof e=="string"?document.querySelector(e):e,Fe=navigator.userAgent,at=/Mac|iPhone|iPod|iPad/i.test(navigator.platform),Ie=/Chrome\//.test(Fe),Ve=!Ie&&/AppleWebKit\//.test(Fe),qe=(e,r=0,s=1/0)=>{let o=1;for(;(r=e.indexOf(`
`,r)+1)&&r<=s;o++);return o},rt={},We=Ge('<div class="pce-wrapper"><div class="pce-overlays"><textarea spellcheck="false" autocapitalize="off" autocomplete="off"></textarea></div></div>'),it=e=>Ne=e,ae=e=>{e.preventDefault(),e.stopImmediatePropagation()},st=e=>$e=e;let Ne,X,$e;document.addEventListener("selectionchange",()=>X?.());const Ye=Object.assign({"./atom-one-dark.css":()=>E(()=>import("./atom-one-dark-9918ae76.js"),[]),"./dracula.css":()=>E(()=>import("./dracula-ebaa821b.js"),[]),"./github-dark-dimmed.css":()=>E(()=>import("./github-dark-dimmed-da2bb027.js"),[]),"./github-dark.css":()=>E(()=>import("./github-dark-a73f7b22.js"),[]),"./github-light.css":()=>E(()=>import("./github-light-3d68a84b.js"),[]),"./night-owl.css":()=>E(()=>import("./night-owl-a2264b9d.js"),[]),"./prism-okaidia.css":()=>E(()=>import("./prism-okaidia-f3cbb707.js"),[]),"./prism-solarized-light.css":()=>E(()=>import("./prism-solarized-light-bcb39fb9.js"),[]),"./prism-twilight.css":()=>E(()=>import("./prism-twilight-09489536.js"),[]),"./prism.css":()=>E(()=>import("./prism-de3d353c.js"),[]),"./vs-code-dark.css":()=>E(()=>import("./vs-code-dark-c9758229.js"),[]),"./vs-code-light.css":()=>E(()=>import("./vs-code-light-dc3ac602.js"),[])}),Ze=async e=>(await Ye[`./${e}.css`]?.())?.default,ie=(e,r,s)=>{const o=document.createElement("style");o.textContent=r,s&&(o.id=s),e.append(o)},He=(e,r,s)=>{const o=le(e),d=o.shadowRoot||o.attachShadow({mode:"open"}),u=ze();return Promise.all([E(()=>import("./styles-GYla42XD-e2e08108.js"),[]),Ze(r.theme)]).then(([f,v])=>{u.removed||(ie(d,f.default),ie(d,v||"","theme"),d.append(u.scrollContainer),u.setOptions(r),s&&s())}),u},Ue=(e,r,s)=>{E(()=>import("./common-4MhT9s4s-85718d0c.js"),["assets/common-4MhT9s4s-85718d0c.js","assets/utils-wvIv1qJ9-974d263a.js","assets/index-55c1b714.js"]).then(u=>{u.addExtensions(d)});const o=le(e),d=He(o,r,s);return E(()=>import("./search-AcdErlHO-556a3da7.js"),[]).then(u=>{d.removed||ie(o.shadowRoot,u.default)}),E(()=>import("./index-28e74fa8.js"),["assets/index-28e74fa8.js","assets/utils-wvIv1qJ9-974d263a.js","assets/index-55c1b714.js"]).then(u=>{d.addExtensions(u.highlightSelectionMatches(),u.searchWidget())}),E(()=>import("./matchTags-fbbd4903.js"),["assets/matchTags-fbbd4903.js","assets/utils-wvIv1qJ9-974d263a.js","assets/index-55c1b714.js"]).then(u=>{d.addExtensions(u.matchTags())}),d};var he=[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i],Se=[],me=(e,r)=>({pattern:RegExp(`(<${e}[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/${e}>)`,"i"),lookbehind:!0,greedy:!0,inside:{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:{cdata:/^<!\[CDATA\[|\]\]>$/i,["language-"+r]:{pattern:/[\s\S]+/,inside:r}}},["language-"+r]:{pattern:/[\s\S]+/,inside:r}}}),fe=(e,r)=>({pattern:RegExp(`(^|["'\\s])(?:${e})\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+)`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:"language-"+r,inside:r},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}}),Ke=h.svg=h.mathml=h.html=h.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:"xml"},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=\S))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^:]+:/}},"special-attr":Se,"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)?/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],entity:he}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s/]+/,inside:{namespace:/^[^:]+:/}}}},entity:he,"markup-bracket":{pattern:/[[\](){}]/,alias:"punctuation"}};h.rss=h.atom=h.ssml=h.xml=R.util.clone(Ke);Se.push(fe("style","css"),fe(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));z("markup","cdata",{style:me("style","css"),script:me("script","javascript")});h.clike={comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};var Ee=h.js=h.javascript=h.extend("clike",{"class-name":[{pattern:/(\b(?:class|extends|implements|instanceof|interface|new)\s+)(?!\d)(?:(?!\s)[$\w.\\\xA0-\uFFFF])+/,lookbehind:!0,inside:{punctuation:/[.\\]/}},{pattern:/(^|[^$\w\xA0-\uFFFF]|\s)(?![\da-z])(?:(?!\s)[$\w\xA0-\uFFFF])+(?=\.(?:constructor|prototype)\b)/,lookbehind:!0}],keyword:[{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|export|from(?=\s*(?:['"]|$))|import)\b/,lookbehind:!0,alias:"module"},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:await|break|case|catch|continue|default|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,lookbehind:!0,alias:"control-flow"},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:async(?=\s*(?:[($\w\xA0-\uFFFF]|$))|class|const|debugger|delete|enum|extends|function|(?:get|set)(?=\s*(?:[#[$\w\xA0-\uFFFF]|$))|implements|in|instanceof|interface|let|new|null|of|package|private|protected|public|static|super|this|typeof|undefined|var|void|with)\b/,lookbehind:!0}],function:/#?(?!\d)(?:(?!\s)[$\w\xA0-\uFFFF])+(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:/(^|[^\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![\w$])/,lookbehind:!0},operator:/--|\+\+|\*\*=?|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\?\?=?|\?\.?|[~:]/});z("js","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}|(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-flags":/\w+$/,"regex-delimiter":/^\/|\/$/,"regex-source":{pattern:/[\s\S]+/,alias:"language-regex",inside:"regex"}}},"function-variable":{pattern:/#?(?!\d)(?:(?!\s)[$\w\xA0-\uFFFF])+(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\d)(?:(?!\s)[$\w\xA0-\uFFFF])+)\s*=>))/,alias:"function"},parameter:[/(function(?:\s+(?!\d)(?:(?!\s)[$\w\xA0-\uFFFF])+)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,/(^|[^$\w\xA0-\uFFFF]|\s)(?!\d)(?:(?!\s)[$\w\xA0-\uFFFF])+(?=\s*=>)/,/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\d)(?:(?!\s)[$\w\xA0-\uFFFF])+\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/].map(e=>({pattern:e,lookbehind:!0,inside:Ee})),constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});z("js","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}|(?!\$\{)[^\\`])*`/g,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Ee}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});z("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\d)(?:(?!\s)[$\w\xA0-\uFFFF])+(?=\s*:)/m,lookbehind:!0,alias:"property"},spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}});var Ae=R.util.clone(h.js),J=h.jsx=h.extend("xml",Ae),de=J.tag,te=de.inside,Qe=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))*\*\/)/.source,Xe=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,ee=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/,ce=e=>RegExp(e.source.replace(/<S>/g,Qe).replace(/<BRACES>/g,Xe).replace(/<SPREAD>/g,ee.source));ee=ce(ee);de.pattern=ce(/<\/?(?:(?!\d)[^\s>\/=<%]+(?:<S>+(?:[^\s{*<>\/=]+(?:<S>*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s{'"\/>=]+|<BRACES>)|(?=\S)))?|<SPREAD>))*<S>*\/?)?>/);te.tag.pattern=/^<\/?[^\s>/]*/;te["attr-value"].pattern=/=\s*(?:"[^"]*"|'[^']*'|[^\s\/'">]+)?/;te.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/;te.comment=Ae.comment;delete J["markup-bracket"];z("inside","special-attr",{script:{pattern:ce(/=\s*<BRACES>/),alias:"language-jsx",inside:{"script-punctuation":{pattern:/^=/,alias:"punctuation"},rest:J}},spread:{pattern:ee,inside:J}},de);var ye=e=>e&&(!e.type||e.type=="plain-text"),Le=(e,r,s)=>{for(var o=0,d=[];o<e.length;o++){var u=e[o],f=u.length,v=u.content,y=u.type,$=!y,w,t,a,i;y&&(y=="tag"&&v[0].type=="tag"?(t=r.slice(s+1,s+v[0].length),t[0]=="/"?d[0]&&d[d.length-1][0]==t.slice(1)&&d.pop():r[s+f-2]!="/"&&d.push([t,0])):d[0]&&y=="punctuation"?(w=d[d.length-1],v=="{"?w[1]++:w[1]&&v=="}"?w[1]--:$=!0):$=!0),$&&d[0]&&!d[d.length-1][1]?(a=s,ye(e[o+1])&&(f+=e[o+1].length,e.splice(o+1,1)),ye(e[o-1])&&(a-=e[--o].length,e.splice(o,1)),i=r.slice(a,s+f),e[o]=new R.Token("plain-text",i,null,i)):Array.isArray(v)&&Le(v,r,s),s+=f}};R.hooks.add("after-tokenize",e=>{(e.language=="jsx"||e.language=="tsx")&&Le(e.tokens,e.code,0)});var U=h.ts=h.typescript=h.extend("js",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\d)(?:(?!\s)[$\w\xA0-\uFFFF])+(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0},builtin:/\b(?:Array|Function|Promise|any|boolean|never|number|string|symbol|unknown)\b/});U.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/);delete U.parameter;delete U["literal-property"];var pe=R.util.clone(U);delete pe["class-name"];U["class-name"].inside=pe;z("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\d)(?:(?!\s)[$\w\xA0-\uFFFF])+\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\d)(?:(?!\s)[$\w\xA0-\uFFFF])+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:pe}}}});var Je=R.util.clone(h.ts),ue=h.tsx=h.extend("jsx",Je),se=ue.tag,Re="(?:^|(";delete ue.parameter;delete ue["literal-property"];try{RegExp("(?<=)"),Re+="?<="}catch{se.lookbehind=!0}se.pattern=RegExp(Re+`[^\\w$])|(?=</))${se.pattern.source}`,"g");var Te=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,K=Te.source,ve=h.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|${K})*?(?:;|(?=\\s*\\{))`),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp(`\\burl\\((?:${K}|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+K+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|${K})*(?=\\s*\\{)`),lookbehind:!0},string:{pattern:Te,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\d)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/};ve.atrule.inside.rest=ve;var ke=h.css,we={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},_e={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};ke.selector.inside=ke.atrule.inside["selector-function-argument"].inside={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:/\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/};z("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\d)(?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});z("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:we,number:_e,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:we,number:_e});var et=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source,Q=e=>RegExp(`((?:^|[^\\\\])(?:\\\\{2})*)(?:${e.source.replace(/<inner>/g,et)})`),oe=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,W=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,oe),re=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,N=h.markdown=h.md=h.extend("markup",{});z("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:"language-yaml",inside:"yaml"}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+W+re+"(?:"+W+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+W+re+")(?:"+W+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(oe),inside:N},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+W+")"+re+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+W+"$"),inside:{"table-header":{pattern:RegExp(oe),alias:"important",inside:N},punctuation:/\|/}}}},code:[{pattern:/(^[ \t]*(?:\n|\r\n?))(?:    |\t).+(?:(?:\n|\r\n?)(?:    |\t).+)*/m,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{punctuation:/^```/m,"code-language":/^.+/,"code-block":{pattern:/^(\n|\r\n?)[\s\S]+(?=(?:\n|\r\n?)$)/,lookbehind:!0}}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:Q(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..)/,lookbehind:!0,inside:{}},punctuation:/../}},italic:{pattern:Q(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(?!^)[\s\S]+(?=.)/,inside:{}},punctuation:/./}},strike:{pattern:Q(/(~~?)(?:(?!~)<inner>)+\2/),lookbehind:!0,greedy:!0,inside:{punctuation:/^~~?|~~?$/,content:{pattern:/[\s\S]+/,inside:{}}}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:Q(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{"markup-bracket":N["markup-bracket"]}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0},"markup-bracket":N["markup-bracket"]}}});["url","bold","italic","strike"].forEach(e=>{["url","bold","italic","strike","code-snippet"].forEach(r=>{e!=r&&(N[e].inside.content.inside[r]=N[r])})});var De=e=>{if(Array.isArray(e))for(var r=0,s=e.length;r<s;r++){var o=e[r],d=o.type;if(d)if(d!="code")De(o.content);else{var[,u,,f]=o.content;if(u&&f&&f.type&&u.type){var v=(/[a-z][\w-]*/i.exec(u.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"))||[""])[0].toLowerCase(),y=f.content,$=h[v];if(f.alias="language-"+v,$){var w={code:y,language:v,grammar:$};R.hooks.run("before-tokenize",w),f.content=w.tokens=R.tokenize(w.code,w.grammar),R.hooks.run("after-tokenize",w)}}}}};R.hooks.add("after-tokenize",e=>{(e.language=="markdown"||e.language=="md")&&De(e.tokens)});var xe={"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"}};xe.rest=h.py=h.python={comment:{pattern:/#.*/,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:xe},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};const tt={config:{name:"Editor",type:"process",icon:be,targetVer:"1.0.0-indev.0"},run:async e=>{const r=await e.loadLibrary("lib/MIMETypes");if(Object.keys(e.data).length>0){const s=await e.loadLibrary("lib/WindowManager").then(u=>u.createWindow({title:"Editor",icon:be,width:350,height:500,canResize:!1},e)),o=e.fs,d=e.data;if(s.setTitle(`Editor - ${d.path.split("/").at(-1)}`),s.content.style.display="flex",s.content.style.flexDirection="column",d==null)await e.launch("lib/FileManager"),setTimeout(()=>{s.close()},10);else{const u=async()=>{s.content.innerHTML=`
        <div style="padding: 5px;display: flex;align-items: center;gap: 5px;">
          <div id="file-open">File</div>
          <div id="edit-open">Edit</div>

          <div class="dropdown" id="file">
            <a id="save">
              <i class='material-symbols-rounded' style="font-size: 1.1rem;">save</i>
              Save
            </a>
          </div>
          <div class="dropdown" id="edit">
            <a id="find">
              <i class='material-symbols-rounded' style="font-size: 1.1rem;">search</i>
              Find
            </a>
          </div>
        </div>
        <div class="editor" style="flex:1;display:grid;overflow:scroll;"></div>
        <style>
        .dropdown {
          position: absolute;
          z-index: 100;
          width: 150px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          padding: 5px;
          margin-top: 80px;
          background: var(--surface-0);
          transition: all 0.1s cubic-bezier(0.16, 1, 0.5, 1);
            
          transform: translateY(0.5rem);
          visibility: hidden;
          opacity: 0;
        }
        
        .show {
          transform: translateY(0rem);
          visibility: visible;
          opacity: 1;
        }

        .dropdown a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 5px 10px;
          text-decoration: none;
          color: var(--text);
        }
        
        .dropdown a:hover {
          background-color: var(--base);
          color: white;
        }
        </style>
      `;const f=s.content.querySelector("#file-open"),v=s.content.querySelector("#edit-open"),y=g=>{s.content.querySelector(`#${g}`)?.classList.toggle("show")};f?.addEventListener("click",g=>{g.stopPropagation(),y("file")}),v?.addEventListener("click",g=>{g.stopPropagation(),y("edit")}),s.content.addEventListener("click",()=>{const g=s.content.querySelector("#file"),b=s.content.querySelector("#edit");g.classList.contains("show")&&y("file"),b.classList.contains("show")&&y("edit")});const $=d.path.split(".").pop().toLowerCase();console.log("owo "+$,r);const w=$ in r?r[$].type:"text/plain";let t="text";switch(w){case"text/markdown":t="markdown";break;case"text/css":t="css";break;case"text/html":t="html";break;case"text/javascript":t="javascript";break;case"text/jsx":t="jsx";break;case"application/x-flow-theme":case"application/json":t="clike";break;case"text/typescript":t="typescript";break;case"text/tsx":t="tsx";break;case"application/python":t="python";break;default:t="text";break}const a=je.Buffer.from(await o.readFile(d.path)).toString(),i=Ue(s.content.querySelector(".editor"),{language:t,theme:"github-dark",value:a}),c=document.createElement("style");c.textContent=`
      .prism-code-editor {
        color: var(--text);
        border-radius: 10px 10px 0 0;
        caret-color: var(--text);
        font-weight: 400;
        --editor__bg: var(--base);
        --widget__border: var(--mantle);
        --widget__bg: var(--crust);
        --widget__color: var(--text);
        --widget__color-active: var(--text);
        --widget__color-options: #8a99a8;
        --widget__bg-input: var(--mantle);
        --widget__bg-hover: #5a5d5e4f;
        --widget__bg-active: var(--base);
        --widget__focus-ring: var(--text);
        --search__bg-find: var(--surface-1)80;
        --widget__bg-error: #5a1d1d;
        --widget__error-ring: #be1100;
        --editor__bg-highlight: #636e7b1a;
        --editor__bg-selection-match: var(--surface-1)40;
        --editor__line-number: #636e7b;
        --editor__line-number-active: #adbac7;
        --bg-guide-indent: var(--surface-0);
        overflow: visible;
      }
      .prism-search * {
        font-family: 'Satoshi', sans-serif;
      }
      `,i.scrollContainer.appendChild(c),s.content.querySelector("#find").onclick=()=>{i.extensions.searchWidget?.open()},s.content.querySelector("#save").onclick=async()=>{await o.writeFile(d.path,i.value)}};await u(),document.addEventListener("fs_update",()=>{u().catch(f=>console.error(f))}),document.addEventListener("theme_update",()=>{u().catch(f=>console.error(f))})}return}await e.kill(),await e.launch("apps/Files")}},ot=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));export{ot as E,ae as I,Ge as a,st as f,it as g,Ne as l,qe as o,rt as p,Ve as r,Ie as s,at as u};

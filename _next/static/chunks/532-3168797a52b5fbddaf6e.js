(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[532],{4702:function(e,n,t){"use strict";t.d(n,{Z:function(){return ze}});var r=t(7294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o=/[\'\"]/,c={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},i={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},l=["style","script"],u=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,s=/mailto:/i,f=/\n{2,}$/,p=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,d=/^ *> ?/gm,g=/^ {2,}\n/,m=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,h=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,v=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,k=/^(?:\n *)*\n/,b=/\r\n?/g,x=/^\[\^([^\]]+)](:.*)\n/,H=/^\[\^([^\]]+)]/,M=/\f/g,I=/^\s*?\[(x|\s)\]/,w=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,E=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,L=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,A=/&([a-z]+);/g,C=/^<!--[\s\S]*?(?:-->)/,O=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,S=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,T=/^\{.*\}$/,$=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,_=/^<([^ >]+@[^ >]+)>/,G=/^<([^ >]+:\/[^ >]+)>/,R=/ *\n+$/,z=/(?:^|\n)( *)$/,N=/-([a-z])?/gi,U=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,j=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,X=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,B=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,D=/^\[([^\]]*)\] ?\[([^\]]*)\]/,P=/(\[|\])/g,W=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,K=/^ *\| */,F=/(^ *\||\| *$)/g,q=/ *$/,V=/^ *:-+: *$/,Q=/^ *:-+ *$/,J=/^ *-+: *$/,Y=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ee=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,ne=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,te=/^\\([^0-9A-Za-z\s])/,re=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ae=/(^\n+|\n+$|\s+$)/g,oe=/^([ \t]*)/,ce=/\\([^0-9A-Z\s])/gi,ie=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),le=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),ue=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),se="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",fe=new RegExp("^\\[("+se+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),pe=new RegExp("^!\\[("+se+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),de=[p,y,h,w,E,L,C,S,le,ue,U,j];function ge(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function me(e){return J.test(e)?"right":V.test(e)?"center":Q.test(e)?"left":null}function he(e,n,t){var r=t.inTable;t.inTable=!0;var a=n(e.trim(),t);t.inTable=r;var o=[[]];return a.forEach((function(e,n){"tableSeparator"===e.type?0!==n&&n!==a.length-1&&o.push([]):("text"!==e.type||null!=a[n+1]&&"tableSeparator"!==a[n+1].type||(e.content=e.content.replace(q,"")),o[o.length-1].push(e))})),o}function ye(e,n,t){t.inline=!0;var r=he(e[1],n,t),a=e[2].replace(F,"").split("|").map(me),o=function(e,n,t){return e.trim().split("\n").map((function(e){return he(e,n,t)}))}(e[3],n,t);return t.inline=!1,{align:a,cells:o,header:r,type:"table"}}function ve(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function ke(e){return function(n,t){return t.inline?e.exec(n):null}}function be(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function xe(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function He(e){return function(n){return e.exec(n)}}function Me(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function Ie(e){return e.replace(ce,"$1")}function we(e,n,t){var r=t.inline||!1,a=t.simple||!1;t.inline=!0,t.simple=!0;var o=e(n,t);return t.inline=r,t.simple=a,o}function Ee(e,n,t){var r=t.inline||!1,a=t.simple||!1;t.inline=!1,t.simple=!0;var o=e(n,t);return t.inline=r,t.simple=a,o}function Le(e,n,t){return t.inline=!1,e(n+"\n\n",t)}var Ae,Ce,Oe=function(e,n,t){return{content:we(n,e[1],t)}};function Se(){return{}}function Te(){return null}function $e(){return[].slice.call(arguments).filter(Boolean).join(" ")}function _e(e,n,t){for(var r=e,a=n.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||t}function Ge(e,n){var t=_e(n,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:_e(n,e+".component",e):e}function Re(e,n){void 0===n&&(n={}),n.overrides=n.overrides||{},n.slugify=n.slugify||ge,n.namedCodesToUnicode=n.namedCodesToUnicode?a({},i,n.namedCodesToUnicode):i;var t=n.createElement||r.createElement;function F(e,r){var o=_e(n.overrides,e+".props",{});return t.apply(void 0,[Ge(e,n.overrides),a({},r,o,{className:$e(null==r?void 0:r.className,o.className)||void 0})].concat([].slice.call(arguments,2)))}function q(e){var t=!1;n.forceInline?t=!0:n.forceBlock||(t=!1===W.test(e));var a=Ce(he(t?e:e.replace(ae,"")+"\n\n",{inline:t}));if(null===n.wrapper)return a;var o,c=n.wrapper||(t?"span":"div");if(a.length>1||n.forceWrapper)o=a;else{if(1===a.length)return"string"==typeof(o=a[0])?F("span",{key:"outer"},o):o;o=null}return r.createElement(c,{key:"outer"},o)}function V(e){var n=e.match(u);return n?n.reduce((function(e,n,t){var a,i=n.indexOf("=");if(-1!==i){var l=(a=n.slice(0,i),-1!==a.indexOf("-")&&null===a.match(O)&&(a=a.replace(N,(function(e,n){return n.toUpperCase()}))),a).trim(),u=function(e){return e?(o.test(e.charAt(0))&&(e=e.substr(1)),o.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(n.slice(i+1).trim()),s=c[l]||l,f=e[s]=function(e,n){return"style"===e?n.split(/;\s?/).reduce((function(e,n){var t=n.slice(0,n.indexOf(":"));return e[t.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}))]=n.slice(t.length+1).trim(),e}),{}):"href"===e?Me(n):(n.match(T)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(l,u);"string"==typeof f&&(L.test(f)||S.test(f))&&(e[s]=r.cloneElement(q(f.trim()),{key:t}))}else"style"!==n&&(e[c[n]||n]=!0);return e}),{}):void 0}var Q=[],J={},ce={blockQuote:{match:xe(p),order:Ae.HIGH,parse:function(e,n,t){return{content:n(e[0].replace(d,""),t)}},react:function(e,n,t){return F("blockquote",{key:t.key},n(e.content,t))}},breakLine:{match:He(g),order:Ae.HIGH,parse:Se,react:function(e,n,t){return F("br",{key:t.key})}},breakThematic:{match:xe(m),order:Ae.HIGH,parse:Se,react:function(e,n,t){return F("hr",{key:t.key})}},codeBlock:{match:xe(y),order:Ae.MAX,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,n,t){return F("pre",{key:t.key},F("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:xe(h),order:Ae.MAX,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:be(v),order:Ae.LOW,parse:function(e){return{content:e[2]}},react:function(e,n,t){return F("code",{key:t.key},e.content)}},footnote:{match:xe(x),order:Ae.MAX,parse:function(e){return Q.push({footnote:e[2],identifier:e[1]}),{}},react:Te},footnoteReference:{match:ke(H),order:Ae.HIGH,parse:function(e){return{content:e[1],target:"#"+n.slugify(e[1])}},react:function(e,n,t){return F("a",{key:t.key,href:Me(e.target)},F("sup",{key:t.key},e.content))}},gfmTask:{match:ke(I),order:Ae.HIGH,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,n,t){return F("input",{checked:e.completed,key:t.key,readOnly:!0,type:"checkbox"})}},heading:{match:xe(w),order:Ae.HIGH,parse:function(e,t,r){return{content:we(t,e[2],r),id:n.slugify(e[2]),level:e[1].length}},react:function(e,n,t){return e.tag="h"+e.level,F(e.tag,{id:e.id,key:t.key},n(e.content,t))}},headingSetext:{match:xe(E),order:Ae.MAX,parse:function(e,n,t){return{content:we(n,e[1],t),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:He(C),order:Ae.HIGH,parse:function(){return{}},react:Te},image:{match:be(pe),order:Ae.HIGH,parse:function(e){return{alt:e[1],target:Ie(e[2]),title:e[3]}},react:function(e,n,t){return F("img",{key:t.key,alt:e.alt||void 0,title:e.title||void 0,src:Me(e.target)})}},link:{match:ke(fe),order:Ae.LOW,parse:function(e,n,t){return{content:Ee(n,e[1],t),target:Ie(e[2]),title:e[3]}},react:function(e,n,t){return F("a",{key:t.key,href:Me(e.target),title:e.title},n(e.content,t))}},linkAngleBraceStyleDetector:{match:ke(G),order:Ae.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:function(e,n){return n.inAnchor?null:ke($)(e,n)},order:Ae.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:ke(_),order:Ae.MAX,parse:function(e){var n=e[1],t=e[1];return s.test(t)||(t="mailto:"+t),{content:[{content:n.replace("mailto:",""),type:"text"}],target:t,type:"link"}}},list:{match:function(e,n,t){var r=z.exec(t);return!r||!n._list&&n.inline?null:ue.exec(e=r[1]+e)},order:Ae.HIGH,parse:function(e,n,t){var r=e[2],a=r.length>1,o=a?+r:void 0,c=e[0].replace(f,"\n").match(le),i=!1;return{items:c.map((function(e,r){var a=ie.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(ie,""),u=r===c.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var f,p=t.inline,d=t._list;t._list=!0,s?(t.inline=!1,f=l.replace(R,"\n\n")):(t.inline=!0,f=l.replace(R,""));var g=n(f,t);return t.inline=p,t._list=d,g})),ordered:a,start:o}},react:function(e,n,t){return F(e.ordered?"ol":"ul",{key:t.key,start:e.start},e.items.map((function(e,r){return F("li",{key:r},n(e,t))})))}},newlineCoalescer:{match:xe(k),order:Ae.LOW,parse:Se,react:function(){return"\n"}},paragraph:{match:xe(j),order:Ae.LOW,parse:Oe,react:function(e,n,t){return F("p",{key:t.key},n(e.content,t))}},ref:{match:ke(X),order:Ae.MAX,parse:function(e){return J[e[1]]={target:e[2],title:e[4]},{}},react:Te},refImage:{match:be(B),order:Ae.MAX,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,n,t){return F("img",{key:t.key,alt:e.alt,src:Me(J[e.ref].target),title:J[e.ref].title})}},refLink:{match:ke(D),order:Ae.MAX,parse:function(e,n,t){return{content:n(e[1],t),fallbackContent:n(e[0].replace(P,"\\$1"),t),ref:e[2]}},react:function(e,n,t){return J[e.ref]?F("a",{key:t.key,href:Me(J[e.ref].target),title:J[e.ref].title},n(e.content,t)):F("span",{key:t.key},n(e.fallbackContent,t))}},table:{match:xe(U),order:Ae.HIGH,parse:ye,react:function(e,n,t){return F("table",{key:t.key},F("thead",null,F("tr",null,e.header.map((function(r,a){return F("th",{key:a,style:ve(e,a)},n(r,t))})))),F("tbody",null,e.cells.map((function(r,a){return F("tr",{key:a},r.map((function(r,a){return F("td",{key:a,style:ve(e,a)},n(r,t))})))}))))}},tableSeparator:{match:function(e,n){return n.inTable?K.exec(e):null},order:Ae.HIGH,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:He(re),order:Ae.MIN,parse:function(e){return{content:e[0].replace(A,(function(e,t){return n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e}))}},react:function(e){return e.content}},textBolded:{match:be(Y),order:Ae.MED,parse:function(e,n,t){return{content:n(e[2],t)}},react:function(e,n,t){return F("strong",{key:t.key},n(e.content,t))}},textEmphasized:{match:be(ee),order:Ae.LOW,parse:function(e,n,t){return{content:n(e[2],t)}},react:function(e,n,t){return F("em",{key:t.key},n(e.content,t))}},textEscaped:{match:be(te),order:Ae.HIGH,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:be(ne),order:Ae.LOW,parse:Oe,react:function(e,n,t){return F("del",{key:t.key},n(e.content,t))}}};!0!==n.disableParsingRawHTML&&(ce.htmlBlock={match:He(L),order:Ae.HIGH,parse:function(e,n,t){var r,a=e[3].match(oe),o=new RegExp("^"+a[1],"gm"),c=e[3].replace(o,""),i=(r=c,de.some((function(e){return e.test(r)}))?Le:we),u=e[1].toLowerCase(),s=-1!==l.indexOf(u);t.inAnchor=t.inAnchor||"a"===u;var f=s?e[3]:i(n,c,t);return t.inAnchor=!1,{attrs:V(e[2]),content:f,noInnerParse:s,tag:s?u:e[1]}},react:function(e,n,t){return F(e.tag,Object.assign({key:t.key},e.attrs),e.noInnerParse?e.content:n(e.content,t))}},ce.htmlSelfClosing={match:He(S),order:Ae.HIGH,parse:function(e){return{attrs:V(e[2]||""),tag:e[1]}},react:function(e,n,t){return F(e.tag,Object.assign({},e.attrs,{key:t.key}))}});var se,me,he=function(e){var n=Object.keys(e);function t(r,a){for(var o=[],c="";r;)for(var i=0;i<n.length;){var l=n[i],u=e[l],s=u.match(r,a,c);if(s){var f=s[0];r=r.substring(f.length);var p=u.parse(s,t,a);null==p.type&&(p.type=l),o.push(p),c=f;break}i++}return o}return n.sort((function(n,t){var r=e[n].order,a=e[t].order;return r!==a?r-a:n<t?-1:1})),function(e,n){return t(function(e){return e.replace(b,"\n").replace(M,"").replace(Z,"    ")}(e),n)}}(ce),Ce=(me=ce,se=function(e,n,t){return me[e.type].react(e,n,t)},function e(n,t){if(void 0===t&&(t={}),Array.isArray(n)){for(var r=t.key,a=[],o=!1,c=0;c<n.length;c++){t.key=c;var i=e(n[c],t),l="string"==typeof i;l&&o?a[a.length-1]+=i:a.push(i),o=l}return t.key=r,a}return se(n,e,t)}),Re=q(e);return Q.length&&Re.props.children.push(F("footer",{key:"footer"},Q.map((function(e){return F("div",{id:n.slugify(e.identifier),key:e.identifier},e.identifier,Ce(he(e.footnote,{inline:!0})))})))),Re}function ze(e){var n=e.children,t=e.options,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n.indexOf(t=o[r])>=0||(a[t]=e[t]);return a}(e,["children","options"]);return r.cloneElement(Re(n,t),a)}(Ce=Ae||(Ae={}))[Ce.MAX=0]="MAX",Ce[Ce.HIGH=1]="HIGH",Ce[Ce.MED=2]="MED",Ce[Ce.LOW=3]="LOW",Ce[Ce.MIN=4]="MIN"},2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},c=t(1063),i=t(4651),l=t(7426);var u={};function s(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((function(){var n=c.resolveHref(a,e.href,!0),t=r(n,2),o=t[0],i=t[1];return{href:o,as:e.as?c.resolveHref(a,e.as):i||o}}),[a,e.href,e.as]),p=f.href,d=f.as,g=e.children,m=e.replace,h=e.shallow,y=e.scroll,v=e.locale;"string"===typeof g&&(g=o.default.createElement("a",null,g));var k=(n=o.default.Children.only(g))&&"object"===typeof n&&n.ref,b=l.useIntersection({rootMargin:"200px"}),x=r(b,2),H=x[0],M=x[1],I=o.default.useCallback((function(e){H(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,H]);o.default.useEffect((function(){var e=M&&t&&c.isLocalURL(p),n="undefined"!==typeof v?v:a&&a.locale,r=u[p+"%"+d+(n?"%"+n:"")];e&&!r&&s(a,p,d,{locale:n})}),[d,p,M,v,t,a]);var w={ref:I,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:l,scroll:i}))}(e,a,p,d,m,h,y,v)},onMouseEnter:function(e){c.isLocalURL(p)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(a,p,d,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof v?v:a&&a.locale,L=a&&a.isLocaleDomain&&c.getDomainLocale(d,E,a&&a.locales,a&&a.domainLocales);w.href=L||c.addBasePath(c.addLocale(d,E,a&&a.defaultLocale))}return o.default.cloneElement(n,w)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,l=a.useRef(),u=a.useState(!1),s=r(u,2),f=s[0],p=s[1],d=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[d,f]};var a=t(7294),o=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},1664:function(e,n,t){e.exports=t(2167)},1163:function(e,n,t){e.exports=t(4651)}}]);
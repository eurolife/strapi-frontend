(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var a,c=(a=t(7294))&&a.__esModule?a:{default:a},o=t(1063),i=t(4651),l=t(7426);var u={};function s(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=i.useRouter(),f=c.default.useMemo((function(){var n=o.resolveHref(a,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?o.resolveHref(a,e.as):i||c}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,g=e.shallow,v=e.scroll,y=e.locale;"string"===typeof m&&(m=c.default.createElement("a",null,m));var x=(n=c.default.Children.only(m))&&"object"===typeof n&&n.ref,k=l.useIntersection({rootMargin:"200px"}),b=r(k,2),w=b[0],j=b[1],_=c.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);c.default.useEffect((function(){var e=j&&t&&o.isLocalURL(d),n="undefined"!==typeof y?y:a&&a.locale,r=u[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(a,d,p,{locale:n})}),[p,d,j,y,t,a]);var E={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,c,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](t,r,{shallow:c,locale:l,scroll:i}))}(e,a,d,p,h,g,v,y)},onMouseEnter:function(e){o.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(a,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var H="undefined"!==typeof y?y:a&&a.locale,I=a&&a.isLocaleDomain&&o.getDomainLocale(p,H,a&&a.locales,a&&a.domainLocales);E.href=I||o.addBasePath(o.addLocale(p,H,a&&a.defaultLocale))}return c.default.cloneElement(n,E)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,l=a.useRef(),u=a.useState(!1),s=r(u,2),f=s[0],d=s[1],p=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,c=r.observer,o=r.elements;return o.set(e,n),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!o&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[p,f]};var a=t(7294),c=t(3447),o="undefined"!==typeof IntersectionObserver;var i=new Map},2010:function(e,n,t){"use strict";t.d(n,{o:function(){return r}});var r="https://pchwebservices.co.uk"},5311:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(1664),a=t(5893),c=function(e){var n=e.menu,t=function(e){var n,t;return e.new_window?(0,a.jsx)("a",{href:"/".concat(null!==(t=e.url)&&void 0!==t&&t.length?e.url:e.page.slug),target:"_blank",rel:"noopener noreferrer",children:e.title}):(0,a.jsx)(r.default,{href:"/".concat(null!==(n=e.url)&&void 0!==n&&n.length?e.url:e.page.slug),children:(0,a.jsx)("a",{children:e.title})})};return(0,a.jsx)("nav",{children:(0,a.jsx)("ul",{className:"flex",children:n.item.map((function(e){return(0,a.jsx)("li",{children:t(e)},e.id)}))})})},o=t(2010),i=function(e){var n=e.children,t=e.menu,r=e.global;return(0,a.jsxs)("div",{className:"container flex flex-col justify-start p-4 mx-auto min-h-screen",children:[(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("a",{href:"https://eurolife.github.io/strapi-frontend/",children:(0,a.jsx)("img",{src:"".concat(o.o).concat(r.logo.url),alt:r.company_name,style:{width:"150px"}})})}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)(c,{menu:t})}),(0,a.jsx)("div",{className:"flex-grow",children:(0,a.jsx)("main",{children:n})}),(0,a.jsx)("div",{className:"mt-8 text-gray-400",children:(0,a.jsx)("footer",{children:"\xa9 2021 CPR"})})]})}},7634:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return Xe},default:function(){return Ue}});var r=t(5311),a=t(2010),c=t(7294);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i=/[\'\"]/,l={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},s=["style","script"],f=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,d=/mailto:/i,p=/\n{2,}$/,m=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,h=/^ *> ?/gm,g=/^ {2,}\n/,v=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,y=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,x=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,k=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,b=/^(?:\n *)*\n/,w=/\r\n?/g,j=/^\[\^([^\]]+)](:.*)\n/,_=/^\[\^([^\]]+)]/,E=/\f/g,H=/^\s*?\[(x|\s)\]/,I=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,M=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,N=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,C=/&([a-z]+);/g,L=/^<!--[\s\S]*?(?:-->)/,O=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,S=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,A=/^\{.*\}$/,T=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,G=/^<([^ >]+@[^ >]+)>/,$=/^<([^ >]+:\/[^ >]+)>/,R=/ *\n+$/,z=/(?:^|\n)( *)$/,P=/-([a-z])?/gi,X=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,U=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,B=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,D=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,W=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/(\[|\])/g,F=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,K=/\t/g,q=/^ *\| */,V=/(^ *\||\| *$)/g,Q=/ *$/,J=/^ *:-+: *$/,Y=/^ *:-+ *$/,ee=/^ *-+: *$/,ne=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,te=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,re=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ae=/^\\([^0-9A-Za-z\s])/,ce=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,oe=/(^\n+|\n+$|\s+$)/g,ie=/^([ \t]*)/,le=/\\([^0-9A-Z\s])/gi,ue=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),se=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),fe=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),de="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",pe=new RegExp("^\\[("+de+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),me=new RegExp("^!\\[("+de+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),he=[m,x,y,I,M,N,L,S,se,fe,X,U];function ge(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ve(e){return ee.test(e)?"right":J.test(e)?"center":Y.test(e)?"left":null}function ye(e,n,t){var r=t.inTable;t.inTable=!0;var a=n(e.trim(),t);t.inTable=r;var c=[[]];return a.forEach((function(e,n){"tableSeparator"===e.type?0!==n&&n!==a.length-1&&c.push([]):("text"!==e.type||null!=a[n+1]&&"tableSeparator"!==a[n+1].type||(e.content=e.content.replace(Q,"")),c[c.length-1].push(e))})),c}function xe(e,n,t){t.inline=!0;var r=ye(e[1],n,t),a=e[2].replace(V,"").split("|").map(ve),c=function(e,n,t){return e.trim().split("\n").map((function(e){return ye(e,n,t)}))}(e[3],n,t);return t.inline=!1,{align:a,cells:c,header:r,type:"table"}}function ke(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function be(e){return function(n,t){return t.inline?e.exec(n):null}}function we(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function je(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function _e(e){return function(n){return e.exec(n)}}function Ee(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function He(e){return e.replace(le,"$1")}function Ie(e,n,t){var r=t.inline||!1,a=t.simple||!1;t.inline=!0,t.simple=!0;var c=e(n,t);return t.inline=r,t.simple=a,c}function Me(e,n,t){var r=t.inline||!1,a=t.simple||!1;t.inline=!1,t.simple=!0;var c=e(n,t);return t.inline=r,t.simple=a,c}function Ne(e,n,t){return t.inline=!1,e(n+"\n\n",t)}var Ce,Le,Oe=function(e,n,t){return{content:Ie(n,e[1],t)}};function Se(){return{}}function Ae(){return null}function Te(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Ge(e,n,t){for(var r=e,a=n.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||t}function $e(e,n){var t=Ge(n,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:Ge(n,e+".component",e):e}function Re(e,n){void 0===n&&(n={}),n.overrides=n.overrides||{},n.slugify=n.slugify||ge,n.namedCodesToUnicode=n.namedCodesToUnicode?o({},u,n.namedCodesToUnicode):u;var t=n.createElement||c.createElement;function r(e,r){var a=Ge(n.overrides,e+".props",{});return t.apply(void 0,[$e(e,n.overrides),o({},r,a,{className:Te(null==r?void 0:r.className,a.className)||void 0})].concat([].slice.call(arguments,2)))}function a(e){var t=!1;n.forceInline?t=!0:n.forceBlock||(t=!1===F.test(e));var a=ve(de(t?e:e.replace(oe,"")+"\n\n",{inline:t}));if(null===n.wrapper)return a;var o,i=n.wrapper||(t?"span":"div");if(a.length>1||n.forceWrapper)o=a;else{if(1===a.length)return"string"==typeof(o=a[0])?r("span",{key:"outer"},o):o;o=null}return c.createElement(i,{key:"outer"},o)}function V(e){var n=e.match(f);return n?n.reduce((function(e,n,t){var r,o=n.indexOf("=");if(-1!==o){var u=(r=n.slice(0,o),-1!==r.indexOf("-")&&null===r.match(O)&&(r=r.replace(P,(function(e,n){return n.toUpperCase()}))),r).trim(),s=function(e){return e?(i.test(e.charAt(0))&&(e=e.substr(1)),i.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(n.slice(o+1).trim()),f=l[u]||u,d=e[f]=function(e,n){return"style"===e?n.split(/;\s?/).reduce((function(e,n){var t=n.slice(0,n.indexOf(":"));return e[t.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}))]=n.slice(t.length+1).trim(),e}),{}):"href"===e?Ee(n):(n.match(A)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(u,s);"string"==typeof d&&(N.test(d)||S.test(d))&&(e[f]=c.cloneElement(a(d.trim()),{key:t}))}else"style"!==n&&(e[l[n]||n]=!0);return e}),{}):void 0}var Q=[],J={},Y={blockQuote:{match:je(m),order:Ce.HIGH,parse:function(e,n,t){return{content:n(e[0].replace(h,""),t)}},react:function(e,n,t){return r("blockquote",{key:t.key},n(e.content,t))}},breakLine:{match:_e(g),order:Ce.HIGH,parse:Se,react:function(e,n,t){return r("br",{key:t.key})}},breakThematic:{match:je(v),order:Ce.HIGH,parse:Se,react:function(e,n,t){return r("hr",{key:t.key})}},codeBlock:{match:je(x),order:Ce.MAX,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,n,t){return r("pre",{key:t.key},r("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:je(y),order:Ce.MAX,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:we(k),order:Ce.LOW,parse:function(e){return{content:e[2]}},react:function(e,n,t){return r("code",{key:t.key},e.content)}},footnote:{match:je(j),order:Ce.MAX,parse:function(e){return Q.push({footnote:e[2],identifier:e[1]}),{}},react:Ae},footnoteReference:{match:be(_),order:Ce.HIGH,parse:function(e){return{content:e[1],target:"#"+n.slugify(e[1])}},react:function(e,n,t){return r("a",{key:t.key,href:Ee(e.target)},r("sup",{key:t.key},e.content))}},gfmTask:{match:be(H),order:Ce.HIGH,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,n,t){return r("input",{checked:e.completed,key:t.key,readOnly:!0,type:"checkbox"})}},heading:{match:je(I),order:Ce.HIGH,parse:function(e,t,r){return{content:Ie(t,e[2],r),id:n.slugify(e[2]),level:e[1].length}},react:function(e,n,t){return e.tag="h"+e.level,r(e.tag,{id:e.id,key:t.key},n(e.content,t))}},headingSetext:{match:je(M),order:Ce.MAX,parse:function(e,n,t){return{content:Ie(n,e[1],t),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:_e(L),order:Ce.HIGH,parse:function(){return{}},react:Ae},image:{match:we(me),order:Ce.HIGH,parse:function(e){return{alt:e[1],target:He(e[2]),title:e[3]}},react:function(e,n,t){return r("img",{key:t.key,alt:e.alt||void 0,title:e.title||void 0,src:Ee(e.target)})}},link:{match:be(pe),order:Ce.LOW,parse:function(e,n,t){return{content:Me(n,e[1],t),target:He(e[2]),title:e[3]}},react:function(e,n,t){return r("a",{key:t.key,href:Ee(e.target),title:e.title},n(e.content,t))}},linkAngleBraceStyleDetector:{match:be($),order:Ce.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:function(e,n){return n.inAnchor?null:be(T)(e,n)},order:Ce.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:be(G),order:Ce.MAX,parse:function(e){var n=e[1],t=e[1];return d.test(t)||(t="mailto:"+t),{content:[{content:n.replace("mailto:",""),type:"text"}],target:t,type:"link"}}},list:{match:function(e,n,t){var r=z.exec(t);return!r||!n._list&&n.inline?null:fe.exec(e=r[1]+e)},order:Ce.HIGH,parse:function(e,n,t){var r=e[2],a=r.length>1,c=a?+r:void 0,o=e[0].replace(p,"\n").match(se),i=!1;return{items:o.map((function(e,r){var a=ue.exec(e)[0].length,c=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(c,"").replace(ue,""),u=r===o.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var f,d=t.inline,p=t._list;t._list=!0,s?(t.inline=!1,f=l.replace(R,"\n\n")):(t.inline=!0,f=l.replace(R,""));var m=n(f,t);return t.inline=d,t._list=p,m})),ordered:a,start:c}},react:function(e,n,t){return r(e.ordered?"ol":"ul",{key:t.key,start:e.start},e.items.map((function(e,a){return r("li",{key:a},n(e,t))})))}},newlineCoalescer:{match:je(b),order:Ce.LOW,parse:Se,react:function(){return"\n"}},paragraph:{match:je(U),order:Ce.LOW,parse:Oe,react:function(e,n,t){return r("p",{key:t.key},n(e.content,t))}},ref:{match:be(B),order:Ce.MAX,parse:function(e){return J[e[1]]={target:e[2],title:e[4]},{}},react:Ae},refImage:{match:we(D),order:Ce.MAX,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,n,t){return r("img",{key:t.key,alt:e.alt,src:Ee(J[e.ref].target),title:J[e.ref].title})}},refLink:{match:be(W),order:Ce.MAX,parse:function(e,n,t){return{content:n(e[1],t),fallbackContent:n(e[0].replace(Z,"\\$1"),t),ref:e[2]}},react:function(e,n,t){return J[e.ref]?r("a",{key:t.key,href:Ee(J[e.ref].target),title:J[e.ref].title},n(e.content,t)):r("span",{key:t.key},n(e.fallbackContent,t))}},table:{match:je(X),order:Ce.HIGH,parse:xe,react:function(e,n,t){return r("table",{key:t.key},r("thead",null,r("tr",null,e.header.map((function(a,c){return r("th",{key:c,style:ke(e,c)},n(a,t))})))),r("tbody",null,e.cells.map((function(a,c){return r("tr",{key:c},a.map((function(a,c){return r("td",{key:c,style:ke(e,c)},n(a,t))})))}))))}},tableSeparator:{match:function(e,n){return n.inTable?q.exec(e):null},order:Ce.HIGH,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:_e(ce),order:Ce.MIN,parse:function(e){return{content:e[0].replace(C,(function(e,t){return n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e}))}},react:function(e){return e.content}},textBolded:{match:we(ne),order:Ce.MED,parse:function(e,n,t){return{content:n(e[2],t)}},react:function(e,n,t){return r("strong",{key:t.key},n(e.content,t))}},textEmphasized:{match:we(te),order:Ce.LOW,parse:function(e,n,t){return{content:n(e[2],t)}},react:function(e,n,t){return r("em",{key:t.key},n(e.content,t))}},textEscaped:{match:we(ae),order:Ce.HIGH,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:we(re),order:Ce.LOW,parse:Oe,react:function(e,n,t){return r("del",{key:t.key},n(e.content,t))}}};!0!==n.disableParsingRawHTML&&(Y.htmlBlock={match:_e(N),order:Ce.HIGH,parse:function(e,n,t){var r,a=e[3].match(ie),c=new RegExp("^"+a[1],"gm"),o=e[3].replace(c,""),i=(r=o,he.some((function(e){return e.test(r)}))?Ne:Ie),l=e[1].toLowerCase(),u=-1!==s.indexOf(l);t.inAnchor=t.inAnchor||"a"===l;var f=u?e[3]:i(n,o,t);return t.inAnchor=!1,{attrs:V(e[2]),content:f,noInnerParse:u,tag:u?l:e[1]}},react:function(e,n,t){return r(e.tag,Object.assign({key:t.key},e.attrs),e.noInnerParse?e.content:n(e.content,t))}},Y.htmlSelfClosing={match:_e(S),order:Ce.HIGH,parse:function(e){return{attrs:V(e[2]||""),tag:e[1]}},react:function(e,n,t){return r(e.tag,Object.assign({},e.attrs,{key:t.key}))}});var ee,le,de=function(e){var n=Object.keys(e);function t(r,a){for(var c=[],o="";r;)for(var i=0;i<n.length;){var l=n[i],u=e[l],s=u.match(r,a,o);if(s){var f=s[0];r=r.substring(f.length);var d=u.parse(s,t,a);null==d.type&&(d.type=l),c.push(d),o=f;break}i++}return c}return n.sort((function(n,t){var r=e[n].order,a=e[t].order;return r!==a?r-a:n<t?-1:1})),function(e,n){return t(function(e){return e.replace(w,"\n").replace(E,"").replace(K,"    ")}(e),n)}}(Y),ve=(le=Y,ee=function(e,n,t){return le[e.type].react(e,n,t)},function e(n,t){if(void 0===t&&(t={}),Array.isArray(n)){for(var r=t.key,a=[],c=!1,o=0;o<n.length;o++){t.key=o;var i=e(n[o],t),l="string"==typeof i;l&&c?a[a.length-1]+=i:a.push(i),c=l}return t.key=r,a}return ee(n,e,t)}),ye=a(e);return Q.length&&ye.props.children.push(r("footer",{key:"footer"},Q.map((function(e){return r("div",{id:n.slugify(e.identifier),key:e.identifier},e.identifier,ve(de(e.footnote,{inline:!0})))})))),ye}function ze(e){var n=e.children,t=e.options,r=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n.indexOf(t=c[r])>=0||(a[t]=e[t]);return a}(e,["children","options"]);return c.cloneElement(Re(n,t),r)}(Le=Ce||(Ce={}))[Le.MAX=0]="MAX",Le[Le.HIGH=1]="HIGH",Le[Le.MED=2]="MED",Le[Le.LOW=3]="LOW",Le[Le.MIN=4]="MIN";var Pe=t(5893),Xe=!0,Ue=function(e){var n=e.menu,t=e.page,c=e.preview,o=e.global,i=function(e){return"widgets.image-and-text"===e.__component?(0,Pe.jsxs)("div",{className:"flex",children:[(0,Pe.jsx)("div",{className:"".concat("right"===e.Image_side?"order-2":"order-1"),children:(0,Pe.jsx)("img",{src:"".concat(a.o).concat(e.Image.url),alt:"",style:{width:"250px"}})}),(0,Pe.jsx)("div",{className:"ml-4 ".concat("right"===e.Image_side?"order-1":"order-2"),children:e.Content})]}):"widgets.columned-text"===e.__component?(0,Pe.jsxs)("div",{className:"flex",children:[(0,Pe.jsx)("div",{className:"pr-4",children:e.Firstcol}),(0,Pe.jsx)("div",{children:e.Secondcol})]}):""};return(0,Pe.jsxs)(r.Z,{menu:n,global:o,children:[c?(0,Pe.jsx)("div",{className:"relative bg-indigo-600",children:(0,Pe.jsx)("div",{className:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8",children:(0,Pe.jsx)("div",{className:"pr-16 sm:text-center sm:px-16",children:(0,Pe.jsxs)("p",{className:"font-medium text-white",children:[(0,Pe.jsx)("span",{children:"Preview mode is on,"}),(0,Pe.jsx)("span",{className:"block sm:ml-2 sm:inline-block",children:(0,Pe.jsx)("a",{href:"/api/exit-preview",className:"underline hover:text-cyan transition-colors",children:"turn off"})})]})})})}):null,(0,Pe.jsx)("h1",{className:"font-sans-serif text-3xl my-4",children:t.Title}),(0,Pe.jsx)("div",{children:(0,Pe.jsx)(ze,{children:t.Content})}),(0,Pe.jsx)("div",{className:"mt-4",children:t.Extra.length?t.Extra.map((function(e){return(0,Pe.jsx)("div",{children:i(e)},e.id)})):null})]})}},4008:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return t(7634)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=4008,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"c":[".tk-museo","\"museo\",serif",".tk-museo-sans","\"museo-sans\",sans-serif",".tk-museo-sans-condensed","\"museo-sans-condensed\",sans-serif"],"f":"//fonts.staticworld.net/k/c/fmz2tqe-{format}.css","fn":["museo",["n3","n5","n7","n9"],"museo-sans",["i3","i5","i7","n3","n5","n7","n9"],"museo-sans-condensed",["i7","i9","n1","n5","n7","n9"]],"p":"//p.typekit.net/p.gif?s=1&k=fmz2tqe&ht=sh&h={host}&f=1981.1982.1983.1984.2005.2006.2007.2008.2009.2010.2011.17400.17401.17402.17404.17406.17407&a=620309&_={_}"};
/*{"k":"1.8.5","created":"2014-06-09 08:21:07 UTC"}*/
;(function(window,document,undefined){
var j=!0,k=null,l=!1;function m(a){return function(){return this[a]}}var ba=this;function ca(a,b){var c=a.split("."),d=ba;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}}function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return n.apply(k,arguments)}var fa=Date.now||function(){return+new Date};
function ga(a,b){this.ea=a;this.W=b||a;this.z=this.W.document}ga.prototype.createElement=function(a,b,c){a=this.z.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.z.createTextNode(c));return a};function q(a,b,c){a=a.z.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function ha(a,b){function c(){a.z.body?b():setTimeout(c,0)}c()}
function r(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=l,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=j;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=l;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=j;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ia(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return j;return l}
function s(a){var b=a.W.location.protocol;"about:"==b&&(b=a.ea.location.protocol);return"https:"===("https:"==b?"https:":"http:")}
function ja(a,b,c){var d=a.z.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=l;e.onload=e.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=j,c&&c(k),e.onload=e.onreadystatechange=k,"HEAD"==e.parentNode.tagName&&d.removeChild(e)};d.appendChild(e);window.setTimeout(function(){f||(f=j,c&&c(Error("Script load timeout")))},5E3)}}function t(a,b,c){this.Xa=a;this.ha=b;this.Wa=c}
ca("internalWebfont.BrowserInfo",t);t.prototype.Ka=m("Xa");t.prototype.hasWebFontSupport=t.prototype.Ka;t.prototype.La=m("ha");t.prototype.hasWebKitFallbackBug=t.prototype.La;t.prototype.Ma=m("Wa");t.prototype.hasWebKitMetricsBug=t.prototype.Ma;function u(a,b,c,d){this.g=a!=k?a:k;this.o=b!=k?b:k;this.J=c!=k?c:k;this.m=d!=k?d:k}var ka=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
function v(a,b){return a.g>b.g||a.g===b.g&&a.o>b.o||a.g===b.g&&a.o===b.o&&a.J>b.J?1:a.g<b.g||a.g===b.g&&a.o<b.o||a.g===b.g&&a.o===b.o&&a.J<b.J?-1:0}function w(a,b){return 0===v(a,b)||1===v(a,b)}u.prototype.toString=function(){return[this.g,this.o||"",this.J||"",this.m||""].join("")};
function x(a){a=ka.exec(a);var b=k,c=k,d=k,e=k;a&&(a[1]!==k&&a[1]&&(b=parseInt(a[1],10)),a[2]!==k&&a[2]&&(c=parseInt(a[2],10)),a[3]!==k&&a[3]&&(d=parseInt(a[3],10)),a[4]!==k&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new u(b,c,d,e)}function y(a,b,c,d,e,f,g,h,p,K,C){this.X=a;this.A=b;this.Va=c;this.F=d;this.T=e;this.Aa=f;this.n=g;this.l=h;this.Ra=p;this.S=K;this.B=C}ca("internalWebfont.UserAgent",y);y.prototype.getName=m("X");y.prototype.getName=y.prototype.getName;
y.prototype.Ja=m("Va");y.prototype.getVersion=y.prototype.Ja;y.prototype.Fa=m("F");y.prototype.getEngine=y.prototype.Fa;y.prototype.Ga=m("Aa");y.prototype.getEngineVersion=y.prototype.Ga;y.prototype.Ha=m("n");y.prototype.getPlatform=y.prototype.Ha;y.prototype.Ia=m("Ra");y.prototype.getPlatformVersion=y.prototype.Ia;y.prototype.Ea=m("S");y.prototype.getDocumentMode=y.prototype.Ea;y.prototype.Da=m("B");y.prototype.getBrowserInfo=y.prototype.Da;function la(a,b){this.e=a;this.R=b}
var ma=new y("Unknown",new u,"Unknown","Unknown",new u,"Unknown","Unknown",new u,"Unknown",void 0,new t(l,l,l));
la.prototype.parse=function(){var a;if(-1!=this.e.indexOf("MSIE")||-1!=this.e.indexOf("Trident/")){a=z(this);var b=A(this),c=x(b),d=k,e=k,f=k,g=k,h=D(this.e,/Trident\/([\d\w\.]+)/,1),p=E(this.R),d=-1!=this.e.indexOf("MSIE")?D(this.e,/MSIE ([\d\w\.]+)/,1):D(this.e,/rv:([\d\w\.]+)/,1),e=x(d);""!=h?(f="Trident",g=x(h)):(f="Unknown",g=new u,h="Unknown");a=new y("MSIE",e,d,f,g,h,a,c,b,p,new t("Windows"==a&&6<=e.g||"Windows Phone"==a&&8<=c.g,l,l))}else if(-1!=this.e.indexOf("Opera"))a:if(a="Unknown",b=
D(this.e,/Presto\/([\d\w\.]+)/,1),c=x(b),d=A(this),e=x(d),f=E(this.R),c.g!==k?a="Presto":(-1!=this.e.indexOf("Gecko")&&(a="Gecko"),b=D(this.e,/rv:([^\)]+)/,1),c=x(b)),-1!=this.e.indexOf("Opera Mini/"))g=D(this.e,/Opera Mini\/([\d\.]+)/,1),h=x(g),a=new y("OperaMini",h,g,a,c,b,z(this),e,d,f,new t(l,l,l));else{if(-1!=this.e.indexOf("Version/")&&(g=D(this.e,/Version\/([\d\.]+)/,1),h=x(g),h.g!==k)){a=new y("Opera",h,g,a,c,b,z(this),e,d,f,new t(10<=h.g,l,l));break a}g=D(this.e,/Opera[\/ ]([\d\.]+)/,1);
h=x(g);a=h.g!==k?new y("Opera",h,g,a,c,b,z(this),e,d,f,new t(10<=h.g,l,l)):new y("Opera",new u,"Unknown",a,c,b,z(this),e,d,f,new t(l,l,l))}else/OPR\/[\d.]+/.test(this.e)?a=pa(this):/AppleWeb(K|k)it/.test(this.e)?a=pa(this):-1!=this.e.indexOf("Gecko")?(a="Unknown",b=new u,c="Unknown",d=A(this),e=x(d),f=l,-1!=this.e.indexOf("Firefox")?(a="Firefox",c=D(this.e,/Firefox\/([\d\w\.]+)/,1),b=x(c),f=3<=b.g&&5<=b.o):-1!=this.e.indexOf("Mozilla")&&(a="Mozilla"),g=D(this.e,/rv:([^\)]+)/,1),h=x(g),f||(f=1<h.g||
1==h.g&&9<h.o||1==h.g&&9==h.o&&2<=h.J||g.match(/1\.9\.1b[123]/)!=k||g.match(/1\.9\.1\.[\d\.]+/)!=k),a=new y(a,b,c,"Gecko",h,g,z(this),e,d,E(this.R),new t(f,l,l))):a=ma;return a};function z(a){var b=D(a.e,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=D(a.e,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function A(a){var b=D(a.e,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=D(a.e,/Windows Phone( OS)? ([^;)]+)/,2))||(b=D(a.e,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=D(a.e,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=D(a.e,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function pa(a){var b=z(a),c=A(a),d=x(c),e=D(a.e,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),f=x(e),g="Unknown",h=new u,p="Unknown",K=l;/OPR\/[\d.]+/.test(a.e)?g="Opera":-1!=a.e.indexOf("Chrome")||-1!=a.e.indexOf("CrMo")||-1!=a.e.indexOf("CriOS")?g="Chrome":/Silk\/\d/.test(a.e)?g="Silk":"BlackBerry"==b||"Android"==b?g="BuiltinBrowser":-1!=a.e.indexOf("PhantomJS")?g="PhantomJS":-1!=a.e.indexOf("Safari")?g="Safari":-1!=a.e.indexOf("AdobeAIR")?g="AdobeAIR":-1!=a.e.indexOf("PlayStation")&&(g="BuiltinBrowser");
"BuiltinBrowser"==g?p="Unknown":"Silk"==g?p=D(a.e,/Silk\/([\d\._]+)/,1):"Chrome"==g?p=D(a.e,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.e.indexOf("Version/")?p=D(a.e,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==g?p=D(a.e,/AdobeAIR\/([\d\.]+)/,1):"Opera"==g?p=D(a.e,/OPR\/([\d.]+)/,1):"PhantomJS"==g&&(p=D(a.e,/PhantomJS\/([\d.]+)/,1));h=x(p);K="AdobeAIR"==g?2<h.g||2==h.g&&5<=h.o:"BlackBerry"==b?10<=d.g:"Android"==b?2<d.g||2==d.g&&1<d.o:526<=f.g||525<=f.g&&13<=f.o;return new y(g,h,p,"AppleWebKit",f,e,b,d,c,E(a.R),
new t(K,536>f.g||536==f.g&&11>f.o,"iPhone"==b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function D(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function E(a){if(a.documentMode)return a.documentMode}function qa(a){this.Pa=a||"-"}qa.prototype.m=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Pa)};function ra(a,b,c){this.h=a;this.v=b;this.aa=c;this.r="wf";this.q=new qa("-")}
function sa(a){var b=ia(a.v,a.q.m(a.r,"active")),c=[],d=[a.q.m(a.r,"loading")];b||c.push(a.q.m(a.r,"inactive"));r(a.v,c,d);F(a,"inactive")}function F(a,b,c){if(a.aa[b])if(c)a.aa[b](c.getName(),G(c));else a.aa[b]()}function I(a,b){this.X=a;this.ia=4;this.Y="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.Y=c[1],this.ia=parseInt(c[2],10))}I.prototype.getName=m("X");function G(a){return a.Y+a.ia}
function J(a,b){this.h=a;this.O=b;this.D=this.h.createElement("span",{"aria-hidden":"true"},this.O)}
function ta(a,b){var c;c=[];for(var d=b.X.split(/,\s*/),e=0;e<d.length;e++){var f=d[e].replace(/['"]/g,"");-1==f.indexOf(" ")?c.push(f):c.push("'"+f+"'")}c=c.join(",");d="normal";e=b.ia+"00";"o"===b.Y?d="oblique":"i"===b.Y&&(d="italic");a.D.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+c+";"+("font-style:"+d+";font-weight:"+e+";")}
function ua(a){q(a.h,"body",a.D)}J.prototype.remove=function(){var a=this.D;a.parentNode&&a.parentNode.removeChild(a)};function va(a,b,c,d,e,f,g,h){this.ja=a;this.Oa=b;this.h=c;this.C=d;this.O=h||"BESbswy";this.B=e;this.P={};this.fa=f||5E3;this.ua=g||k;this.N=this.M=k;a=new J(this.h,this.O);ua(a);for(var p in L)L.hasOwnProperty(p)&&(ta(a,new I(L[p],G(this.C))),this.P[L[p]]=a.D.offsetWidth);a.remove()}var L={fb:"serif",eb:"sans-serif",$a:"monospace"};
va.prototype.start=function(){this.M=new J(this.h,this.O);ua(this.M);this.N=new J(this.h,this.O);ua(this.N);this.Ta=fa();ta(this.M,new I(this.C.getName()+",serif",G(this.C)));ta(this.N,new I(this.C.getName()+",sans-serif",G(this.C)));wa(this)};function xa(a,b,c){for(var d in L)if(L.hasOwnProperty(d)&&b===a.P[L[d]]&&c===a.P[L[d]])return j;return l}
function wa(a){var b=a.M.D.offsetWidth,c=a.N.D.offsetWidth;b===a.P.serif&&c===a.P["sans-serif"]||a.B.ha&&xa(a,b,c)?fa()-a.Ta>=a.fa?a.B.ha&&xa(a,b,c)&&(a.ua===k||a.ua.hasOwnProperty(a.C.getName()))?ya(a,a.ja):ya(a,a.Oa):setTimeout(n(function(){wa(this)},a),25):ya(a,a.ja)}function ya(a,b){a.M.remove();a.N.remove();b(a.C)}function M(a,b,c,d){this.h=b;this.G=c;this.ca=0;this.xa=this.ra=l;this.fa=d;this.B=a.B}
M.prototype.ga=function(a,b,c,d){if(0===a.length&&d)sa(this.G);else{this.ca+=a.length;d&&(this.ra=d);for(d=0;d<a.length;d++){var e=a[d],f=b[e.getName()],g=this.G,h=e;r(g.v,[g.q.m(g.r,h.getName(),G(h).toString(),"loading")]);F(g,"fontloading",h);(new va(n(this.Ba,this),n(this.Ca,this),this.h,e,this.B,this.fa,c,f)).start()}}};
M.prototype.Ba=function(a){var b=this.G;r(b.v,[b.q.m(b.r,a.getName(),G(a).toString(),"active")],[b.q.m(b.r,a.getName(),G(a).toString(),"loading"),b.q.m(b.r,a.getName(),G(a).toString(),"inactive")]);F(b,"fontactive",a);this.xa=j;za(this)};M.prototype.Ca=function(a){var b=this.G,c=ia(b.v,b.q.m(b.r,a.getName(),G(a).toString(),"active")),d=[],e=[b.q.m(b.r,a.getName(),G(a).toString(),"loading")];c||d.push(b.q.m(b.r,a.getName(),G(a).toString(),"inactive"));r(b.v,d,e);F(b,"fontinactive",a);za(this)};
function za(a){0==--a.ca&&a.ra&&(a.xa?(a=a.G,r(a.v,[a.q.m(a.r,"active")],[a.q.m(a.r,"loading"),a.q.m(a.r,"inactive")]),F(a,"active")):sa(a.G))}function Aa(){var a=[{name:"font-family",value:N.c[i+1]}];this.Sa=[N.c[i]];this.na=a}function Ba(a){for(var b=a.Sa.join(","),c=[],d=0;d<a.na.length;d++){var e=a.na[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function Ca(a){this.h=a}Ca.prototype.toString=function(){return encodeURIComponent(this.h.W.location.hostname||this.h.ea.location.hostname)};
function Da(a,b){this.s=a;this.u=b}Da.prototype.toString=function(){for(var a=[],b=0;b<this.u.length;b++)for(var c=this.u[b],d=c.H(),c=c.H(this.s),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=j;break a}f=l}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)c=a.slice(0>d-4?0:d-4,d),b.unshift(parseInt(c,2).toString(16));return b.join("")};function O(a){this.Ua=a}
O.prototype.m=function(a,b){var c=b||{},d=this.Ua.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Ea(a,b,c,d){this.L=a;this.U=b;this.hb=c;this.ib=d;this.pa={};this.oa={}}Ea.prototype.H=function(a){return a?(this.pa[a]||this.U).slice(0):this.U.slice(0)};Ea.prototype.ga=function(a,b,c){var d=[],e={};Fa(this,b,d,e);a(d,e,c)};
function Fa(a,b,c,d){c.push(a.L);d[a.L]=a.H(b);a=a.oa[b]||[];for(b=0;b<a.length;b++){for(var e=a[b],f=e.L,g=l,h=0;h<c.length;h++)c[h]==f&&(g=j);g||(c.push(f),d[f]=e.H())}}function Ga(a,b){this.L=a;this.U=b}Ga.prototype.H=m("U");function Ha(){this.la=this.za=this.K=this.V=this.qa=j}function P(a){return"Windows"===a.n}function R(a){return P(a)&&0===v(a.l,new u(5,1))||P(a)&&0===v(a.l,new u(5,2))||P(a)&&0===v(a.l,new u(6,0))||P(a)&&w(a.l,new u(6,1))}
function S(a){return"Macintosh"===a.n&&(w(a.l,new u(10,4))||a.l.g===k)}function Ia(a,b){return b.qa&&("iPhone"===a.n||"iPod"===a.n)}function Ja(a,b){return Ia(a,b)&&w(a.l,new u(4,2))&&-1===v(a.l,new u(5))}function Ka(a,b){return b.V&&"iPad"===a.n&&w(a.l,new u(4,2))&&-1===v(a.l,new u(5))}function T(a,b){return b.K&&"Android"===a.n}function La(a,b){return T(a,b)&&w(a.l,new u(2,2))&&-1===v(a.l,new u(3,1))}function Ma(a,b){return T(a,b)&&w(a.l,new u(3,1))&&-1===v(a.l,new u(4,1))}
function U(a){return"Linux"===a.n||"Ubuntu"===a.n}function Na(a){return"Safari"===a.getName()&&"AppleWebKit"===a.F||"Unknown"===a.getName()&&"AppleWebKit"===a.F&&("iPhone"===a.n||"iPad"===a.n||"iPod"===a.n)}function Oa(a){return"Safari"===a.getName()&&"AppleWebKit"===a.F&&w(a.T,new u(525,13))&&-1===v(a.T,new u(534,50))}function Pa(a){return"BuiltinBrowser"===a.getName()}function Ra(a){this.wa=a}function Sa(a,b){return b}
var V={ab:"a",cb:"b",gb:"d",Za:"i",bb:"j",Ya:"k",NONE:"x"},W={a:function(a,b){return Oa(a)&&R(a)||Pa(a)&&(La(a,b)||T(a,b)&&w(a.l,new u(4,1)))||b.K&&"Silk"===a.getName()&&-1===v(a.A,new u(2))&&(La(a,b)||S)||b.K&&"Silk"===a.getName()&&w(a.A,new u(2))&&T(a,b)&&w(a.l,new u(4,1))||Na(a)&&(Ka(a,b)||Ja(a,b))||"Chrome"===a.getName()&&w(a.A,new u(6))&&(Ka(a,b)||Ja(a,b))||"AdobeAIR"===a.getName()&&w(a.A,new u(2,5))&&(P(a)&&a.l.g===k||U(a))},b:function(a){return Oa(a)&&S(a)||"AdobeAIR"===a.getName()&&w(a.A,
new u(2,5))&&S(a)},d:function(a,b){return"Chrome"===a.getName()&&w(a.A,new u(6))&&(R(a)||U(a)||S(a)||T(a,b)||"CrOS"===a.n||"CrKey"===a.n||b.V&&"iPad"===a.n&&w(a.l,new u(5))||Ia(a,b)&&w(a.l,new u(5)))||"Gecko"===a.F&&1===v(a.T,new u(1,9,1))&&(R(a)||U(a)||S(a)||T(a,b))||"Safari"===a.getName()&&("AppleWebKit"===a.F&&w(a.T,new u(534,50)))&&(R(a)||S(a))||Na(a)&&(b.V&&"iPad"===a.n&&w(a.l,new u(5))||Ia(a,b)&&w(a.l,new u(5)))||"Opera"===a.getName()&&w(a.A,new u(11,10))&&(R(a)||U(a)||S(a)||T(a,b))||"MSIE"===
a.getName()&&9<=a.S&&(P(a)&&w(a.l,new u(6,1))||P(a)&&0===v(a.l,new u(6,0)))||"MSIE"===a.getName()&&b.za&&"Windows Phone"===a.n&&w(a.l,new u(8))||Pa(a)&&(b.la&&"BlackBerry"===a.n&&w(a.l,new u(10))||U(a))},j:function(a,b){return Pa(a)&&Ma(a,b)||b.K&&"Silk"===a.getName()&&w(a.A,new u(2))&&(Ma(a,b)||U(a))},i:function(a){return"MSIE"===a.getName()&&(w(a.A,new u(6,0))&&(void 0===a.S||9>a.S))&&R(a)},x:function(){return l}};
function Ta(a,b){var c=new Ha,d=b||c,e;for(e in V){var f=V[e];if(W[f]&&W[f](a,d))return f}for(e in V)if(f=V[e],W[f]&&W[f](a,c))return"x";return"k"}var Ua={};
Ua.i=new Ra(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+e;c.push(new Ga(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++)for(var f=c[e],g=0;g<f.length;g++){var h=f[g];if(a[h]){d=d.concat(a[h]);break}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=j,a.push(f));c=[];for(d=0;d<b.length;d++){e=b[d];for(f=0;f<a.length;f++)g=a[f],g==e&&
c.push(g)}return c});var X={};X.a=X.j=X.b=X.d=X.j=function(){return[]};X.i=function(a,b,c){return[new Ca(a),new Da(b,c)]};X.k=function(a){return[new Ca(a)]};function Y(a){this.h=a;this.s="x";this.$=this.e=k;this.u=[];this.Q=[];this.ya=this.ba=k}Y.prototype.supportsConfiguredBrowser=function(){return"x"!==this.s};
Y.prototype.init=function(){if(0<this.Q.length){for(var a=[],b=0;b<this.Q.length;b++)a.push(Ba(this.Q[b]));var b=this.h,a=a.join(""),c=this.h.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));q(b,"head",c)}};
Y.prototype.load=function(a,b,c){if(this.s){for(var d=Ua[this.s]||new Ra(Sa),e=0;e<this.u.length;e++){for(var f=this.u[e],g=this.s,h=d,p=[],K=f.L.split(",")[0].replace(/"|'/g,""),C=f.H(),Q=p,B=void 0,H=[],Qa={},na=0;na<C.length;na++)B=C[na],0<B.length&&!Qa[B]&&(Qa[B]=j,H.push(B));C=H;h=h.wa?h.wa(K,C,Q):C;f.pa[g]=h;f.oa[g]=p}if(this.ba){d=X[this.s](this.h,this.s,this.u);e=this.s;f=[];for(g=0;g<d.length;g++)f.push(d[g].toString());d={format:e,extras:f};c&&(d.contextPath=c);d=this.ba.m(s(this.h),d);
c=this.h;var d=c.createElement("link",{rel:"stylesheet",href:d}),aa=l;d.onload=function(){aa||(aa=j)};d.onerror=function(){aa||(aa=j)};q(c,"head",d)}if(a){var oa=this,lb=this.s;ha(this.h,function(){for(var c=0;c<oa.u.length;c++)oa.u[c].ga(a,lb,b&&c==oa.u.length-1)})}}};Y.prototype.collectFontFamilies=function(a,b){if(this.s)for(var c=0;c<this.u.length;c++)Fa(this.u[c],this.s,a,b)};
Y.prototype.performOptionalActions=function(){if(this.da){var a=this,b=this.e,c=this.h;ha(this.h,function(){var d=a.da;if(d.va){var e=window.__adobewebfontsappname__,e=e?e.toString().substr(0,20):"",d=d.va.m(s(c),{host:encodeURIComponent(c.W.location.hostname||c.ea.location.hostname),app:encodeURIComponent(e),_:(+new Date).toString()}),f=new Image(1,1);f.src=d;f.onload=function(){f.onload=k}}d=a.da;d.ka&&(d=d.ka.m(b,c),q(c,"body",d))})}};
function Va(a,b,c,d){this.Qa=a;this.ma=k;this.h=b;this.e=c;this.v=d;this.t=[]}Va.prototype.Z=function(a){this.t.push(a)};Va.prototype.load=function(a,b){var c=a,d=b||{};if("string"==typeof c)c=[c];else if(!c||!c.length)d=c||{},c=[];if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++){var h=this.Qa.m(s(this.h),{id:encodeURIComponent(c[g])});ja(this.h,h,function(){0==--f&&Wa(e,d)})}else Wa(this,d)};
function Wa(a,b){if(0!=a.t.length){a.ma=b.contextPath||".";for(var c=new ra(a.h,a.v,b),d=l,e=0;e<a.t.length;e++)a.t[e].init(),d=d||a.t[e].supportsConfiguredBrowser();if(d){r(c.v,[c.q.m(c.r,"loading")]);F(c,"loading");for(var f=new M(a.e,a.h,c,b.timeout),c=function(a,b,c){for(var d=[],e=0;e<a.length;e+=1){var Q=a[e];if(b[Q])for(var B=b[Q],H=0;H<B.length;H+=1)d.push(new I(Q,B[H]));else d.push(new I(Q))}f.ga(d,{},k,c)},d=0;d<a.t.length;d++)e=a.t[d],e.supportsConfiguredBrowser()&&(e.load(c,d==a.t.length-
1,a.ma),e.performOptionalActions(window))}else sa(c);a.t=[]}}function Xa(a){this.I=a;this.t=[]}Xa.prototype.Z=function(a){this.t.push(a)};
Xa.prototype.load=function(){var a=this.I.__webfonttypekitmodule__;if(a)for(var b=0;b<this.t.length;b++){var c=this.t[b],d=a[c.ya];d&&d(function(a,b,d){a=[];b={};var h=(new la(navigator.userAgent,document)).parse(),p=c;p.e=h;p.s=Ta(p.e,p.$);c.supportsConfiguredBrowser()&&(c.init(),c.load(k),c.collectFontFamilies(a,b),c.performOptionalActions(window));d(c.supportsConfiguredBrowser(),a,b)})}};function Ya(a,b,c,d){this.I=a;this.z=b;this.Na=c;this.ta=d}
Ya.prototype.m=function(a,b){var c=this.z.createElement("img");c.setAttribute("width",62);c.setAttribute("height",25);c.setAttribute("src",this.Na.m(s(b)));c.setAttribute("class","typekit-badge");c.setAttribute("alt","Fonts by Typekit");c.setAttribute("title","Information about the fonts used on this site");c.style.position="fixed";c.style.zIndex=2E9;c.style.right=0;c.style.bottom=0;c.style.cursor="pointer";c.style.border=0;"Opera"!=a.getName()&&(c.style.content="none");c.style.display="inline";c.style["float"]=
"none";c.style.height="25px";c.style.left="auto";c.style.margin=0;c.style.maxHeight="25px";c.style.maxWidth="62px";c.style.minHeight="25px";c.style.minWidth="62px";c.style.orphans=2;c.style.outline="none";c.style.overflow="visible";c.style.padding=0;c.style.pageBreakAfter="auto";c.style.pageBreakBefore="auto";c.style.pageBreakInside="auto";c.style.tableLayout="auto";c.style.textIndent=0;c.style.top="auto";c.style.unicodeBidi="normal";c.style.verticalAlign="baseline";c.style.visibility="visible";c.style.widows=
2;c.style.width="65px";if(this.ta){var d=this.z,e=this.ta;Za(this,c,"click",function(){d.location.href=e})}var f=a.n;if("MSIE"==a.getName()&&"Windows Phone"!=f){c.style.position="absolute";var g=this,h=function(){var a=$a(g,"scrollLeft","scrollTop"),b=$a(g,"clientWidth","clientHeight");c.style.bottom="auto";c.style.right="auto";c.style.top=a[1]+b[1]-25+"px";c.style.left=a[0]+b[0]-3-62+"px"};Za(this,this.I,"scroll",h);Za(this,this.I,"resize",h)}if("iPhone"==f||"iPod"==f||"iPad"==f||"Android"==f||"Windows Phone"==
f||"BlackBerry"==f)c.style.display="none";return c};function $a(a,b,c){var d=0,e=0;a=a.z;if(a.documentElement&&(a.documentElement[b]||a.documentElement[c]))d=a.documentElement[b],e=a.documentElement[c];else if(a.body&&(a.body[b]||a.body[c]))d=a.body[b],e=a.body[c];return[d,e]}function Za(a,b,c,d){if(b.attachEvent){var e=a.I;b["e"+c+d]=d;b[c+d]=function(){b["e"+c+d](e.event)};b.attachEvent("on"+c,b[c+d])}else b.addEventListener(c,d,l)}var ab=(new la(navigator.userAgent,document)).parse();
window.Typekit||(window.Typekit={});if(!window.Typekit.load){var bb=window.Typekit.config||{},cb=k;bb.k&&(cb=new O(bb.k));var db=new Va(cb,new ga(window),ab,document.documentElement),eb=new Xa(window);window.Typekit.load=function(){db.load.apply(db,arguments)};window.Typekit.addKit=function(){db.Z.apply(db,arguments)}}var fb,gb=k,hb=k,ib=k,jb,Z,$,N=window.Typekit.config||{};N.b&&(gb=new O(N.b),hb=new Ya(window,document,gb,N.bu));N.p&&(ib=new O(N.p));jb=new function(){var a=ib;this.ka=hb;this.va=a};
$=new Y(new ga(window));$.da=jb;Z=new Ha;Z.qa=!N.si;Z.V=!N.st;Z.K=!N.sa;Z.za=!N.sw;Z.la=!N.sb;$.$=Z;N.w&&($.ya=N.w);N.f&&(fb=new O(N.f),$.ba=fb);var i;if(N.fn)for(i=0;i<N.fn.length;i+=2)$.u.push(new Ea(N.fn[i],N.fn[i+1]));if(N.c)for(i=0;i<N.c.length;i+=2)$.Q.push(new Aa);var kb;if(kb=eb)kb=!!eb.I.__webfonttypekitmodule__;kb?(eb.Z($),eb.load()):($.e=ab,$.s=Ta($.e,$.$),window.Typekit.addKit($));
})(this,document);

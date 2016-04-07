function url_base64_decode(a){var b=a.replace("-","+").replace("_","/");switch(b.length%4){case 0:break;case 2:b+="==";break;case 3:b+="=";break;default:throw"Illegal base64url string!"}return window.atob(b)}function X2JS(a){"use strict";function b(){void 0===a.escapeMode&&(a.escapeMode=!0),a.attributePrefix=a.attributePrefix||"_",a.arrayAccessForm=a.arrayAccessForm||"none",a.emptyNodeForm=a.emptyNodeForm||"text",void 0===a.enableToStringFunc&&(a.enableToStringFunc=!0),a.arrayAccessFormPaths=a.arrayAccessFormPaths||[],void 0===a.skipEmptyTextNodesForObj&&(a.skipEmptyTextNodesForObj=!0),void 0===a.stripWhitespaces&&(a.stripWhitespaces=!0),a.datetimeAccessFormPaths=a.datetimeAccessFormPaths||[]}function c(){function a(a){var b=String(a);return 1===b.length&&(b="0"+b),b}"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|^\n+|(\s|\n)+$/g,"")}),"function"!=typeof Date.prototype.toISOString&&(Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"."+String((this.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"})}function d(a){var b=a.localName;return null==b&&(b=a.baseName),null!=b&&""!=b||(b=a.nodeName),b}function e(a){return a.prefix}function f(a){return"string"==typeof a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"):a}function g(a){return a.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&#x2F;/g,"/")}function h(b,c,d){switch(a.arrayAccessForm){case"property":b[c]instanceof Array?b[c+"_asArray"]=b[c]:b[c+"_asArray"]=[b[c]]}if(!(b[c]instanceof Array)&&a.arrayAccessFormPaths.length>0){for(var e=0;e<a.arrayAccessFormPaths.length;e++){var f=a.arrayAccessFormPaths[e];if("string"==typeof f){if(f==d)break}else if(f instanceof RegExp){if(f.test(d))break}else if("function"==typeof f&&f(b,c,d))break}e!=a.arrayAccessFormPaths.length&&(b[c]=[b[c]])}}function i(a){var b=a.split(/[-T:+Z]/g),c=new Date(b[0],b[1]-1,b[2]),d=b[5].split(".");if(c.setHours(b[3],b[4],d[0]),d.length>1&&c.setMilliseconds(d[1]),b[6]&&b[7]){var e=60*b[6]+Number(b[7]),f=/\d\d-\d\d:\d\d$/.test(a)?"-":"+";e=0+("-"==f?-1*e:e),c.setMinutes(c.getMinutes()-e-c.getTimezoneOffset())}else-1!==a.indexOf("Z",a.length-1)&&(c=new Date(Date.UTC(c.getFullYear(),c.getMonth(),c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds(),c.getMilliseconds())));return c}function j(b,c,d){if(a.datetimeAccessFormPaths.length>0){for(var e=d.split(".#")[0],f=0;f<a.datetimeAccessFormPaths.length;f++){var g=a.datetimeAccessFormPaths[f];if("string"==typeof g){if(g==e)break}else if(g instanceof RegExp){if(g.test(e))break}else if("function"==typeof g&&g(obj,c,e))break}return f!=a.datetimeAccessFormPaths.length?i(b):b}return b}function k(b,c){if(b.nodeType==w.DOCUMENT_NODE){for(var f=new Object,i=b.childNodes,l=0;l<i.length;l++){var m=i.item(l);if(m.nodeType==w.ELEMENT_NODE){var n=d(m);f[n]=k(m,n)}}return f}if(b.nodeType==w.ELEMENT_NODE){var f=new Object;f.__cnt=0;for(var i=b.childNodes,l=0;l<i.length;l++){var m=i.item(l),n=d(m);m.nodeType!=w.COMMENT_NODE&&(f.__cnt++,null==f[n]?(f[n]=k(m,c+"."+n),h(f,n,c+"."+n)):(null!=f[n]&&(f[n]instanceof Array||(f[n]=[f[n]],h(f,n,c+"."+n))),f[n][f[n].length]=k(m,c+"."+n)))}for(var o=0;o<b.attributes.length;o++){var p=b.attributes.item(o);f.__cnt++,f[a.attributePrefix+p.name]=p.value}var q=e(b);return null!=q&&""!=q&&(f.__cnt++,f.__prefix=q),null!=f["#text"]&&(f.__text=f["#text"],f.__text instanceof Array&&(f.__text=f.__text.join("\n")),a.escapeMode&&(f.__text=g(f.__text)),a.stripWhitespaces&&(f.__text=f.__text.trim()),delete f["#text"],"property"==a.arrayAccessForm&&delete f["#text_asArray"],f.__text=j(f.__text,n,c+"."+n)),null!=f["#cdata-section"]&&(f.__cdata=f["#cdata-section"],delete f["#cdata-section"],"property"==a.arrayAccessForm&&delete f["#cdata-section_asArray"]),1==f.__cnt&&null!=f.__text?f=f.__text:0==f.__cnt&&"text"==a.emptyNodeForm?f="":f.__cnt>1&&null!=f.__text&&a.skipEmptyTextNodesForObj&&(a.stripWhitespaces&&""==f.__text||""==f.__text.trim())&&delete f.__text,delete f.__cnt,!a.enableToStringFunc||null==f.__text&&null==f.__cdata||(f.toString=function(){return(null!=this.__text?this.__text:"")+(null!=this.__cdata?this.__cdata:"")}),f}return b.nodeType==w.TEXT_NODE||b.nodeType==w.CDATA_SECTION_NODE?b.nodeValue:void 0}function l(b,c,d,e){var g="<"+(null!=b&&null!=b.__prefix?b.__prefix+":":"")+c;if(null!=d)for(var h=0;h<d.length;h++){var i=d[h],j=b[i];a.escapeMode&&(j=f(j)),g+=" "+i.substr(a.attributePrefix.length)+"='"+j+"'"}return g+=e?"/>":">"}function m(a,b){return"</"+(null!=a.__prefix?a.__prefix+":":"")+b+">"}function n(a,b){return-1!==a.indexOf(b,a.length-b.length)}function o(b,c){return!!("property"==a.arrayAccessForm&&n(c.toString(),"_asArray")||0==c.toString().indexOf(a.attributePrefix)||0==c.toString().indexOf("__")||b[c]instanceof Function)}function p(a){var b=0;if(a instanceof Object)for(var c in a)o(a,c)||b++;return b}function q(b){var c=[];if(b instanceof Object)for(var d in b)-1==d.toString().indexOf("__")&&0==d.toString().indexOf(a.attributePrefix)&&c.push(d);return c}function r(b){var c="";return null!=b.__cdata&&(c+="<![CDATA["+b.__cdata+"]]>"),null!=b.__text&&(c+=a.escapeMode?f(b.__text):b.__text),c}function s(b){var c="";return b instanceof Object?c+=r(b):null!=b&&(c+=a.escapeMode?f(b):b),c}function t(a,b,c){var d="";if(0==a.length)d+=l(a,b,c,!0);else for(var e=0;e<a.length;e++)d+=l(a[e],b,q(a[e]),!1),d+=u(a[e]),d+=m(a[e],b);return d}function u(a){var b="",c=p(a);if(c>0)for(var d in a)if(!o(a,d)){var e=a[d],f=q(e);if(null==e||void 0==e)b+=l(e,d,f,!0);else if(e instanceof Object)if(e instanceof Array)b+=t(e,d,f);else if(e instanceof Date)b+=l(e,d,f,!1),b+=e.toISOString(),b+=m(e,d);else{var g=p(e);g>0||null!=e.__text||null!=e.__cdata?(b+=l(e,d,f,!1),b+=u(e),b+=m(e,d)):b+=l(e,d,f,!0)}else b+=l(e,d,f,!1),b+=s(e),b+=m(e,d)}return b+=s(a)}var v="1.1.5";a=a||{},b(),c();var w={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_NODE:9};this.parseXmlString=function(a){var b=window.ActiveXObject||"ActiveXObject"in window;if(void 0===a)return null;var c;if(window.DOMParser){var d=new window.DOMParser,e=null;if(!b)try{e=d.parseFromString("INVALID","text/xml").childNodes[0].namespaceURI}catch(f){e=null}try{c=d.parseFromString(a,"text/xml"),null!=e&&c.getElementsByTagNameNS(e,"parsererror").length>0&&(c=null)}catch(f){c=null}}else 0==a.indexOf("<?")&&(a=a.substr(a.indexOf("?>")+2)),c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(a);return c},this.asArray=function(a){return a instanceof Array?a:[a]},this.toXmlDateTime=function(a){return a instanceof Date?a.toISOString():"number"==typeof a?new Date(a).toISOString():null},this.asDateTime=function(a){return"string"==typeof a?i(a):a},this.xml2json=function(a){return k(a)},this.xml_str2json=function(a){var b=this.parseXmlString(a);return null!=b?this.xml2json(b):null},this.json2xml_str=function(a){return u(a)},this.json2xml=function(a){var b=this.json2xml_str(a);return this.parseXmlString(b)},this.getVersion=function(){return v}}!function(){function a(a){var b="    ";if(isNaN(parseInt(a)))b=a;else switch(a){case 1:b=" ";break;case 2:b="  ";break;case 3:b="   ";break;case 4:b="    ";break;case 5:b="     ";break;case 6:b="      ";break;case 7:b="       ";break;case 8:b="        ";break;case 9:b="         ";break;case 10:b="          ";break;case 11:b="           ";break;case 12:b="            "}var c=["\n"];for(ix=0;ix<100;ix++)c.push(c[ix]+b);return c}function b(){this.step="    ",this.shift=a(this.step)}function c(a,b){return b-(a.replace(/\(/g,"").length-a.replace(/\)/g,"").length)}function d(a,b){return a.replace(/\s{1,}/g," ").replace(/ AND /gi,"~::~"+b+b+"AND ").replace(/ BETWEEN /gi,"~::~"+b+"BETWEEN ").replace(/ CASE /gi,"~::~"+b+"CASE ").replace(/ ELSE /gi,"~::~"+b+"ELSE ").replace(/ END /gi,"~::~"+b+"END ").replace(/ FROM /gi,"~::~FROM ").replace(/ GROUP\s{1,}BY/gi,"~::~GROUP BY ").replace(/ HAVING /gi,"~::~HAVING ").replace(/ IN /gi," IN ").replace(/ JOIN /gi,"~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi,"~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi,"~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi,"~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi,"~::~RIGHT JOIN ").replace(/ ON /gi,"~::~"+b+"ON ").replace(/ OR /gi,"~::~"+b+b+"OR ").replace(/ ORDER\s{1,}BY/gi,"~::~ORDER BY ").replace(/ OVER /gi,"~::~"+b+"OVER ").replace(/\(\s{0,}SELECT /gi,"~::~(SELECT ").replace(/\)\s{0,}SELECT /gi,")~::~SELECT ").replace(/ THEN /gi," THEN~::~"+b).replace(/ UNION /gi,"~::~UNION~::~").replace(/ USING /gi,"~::~USING ").replace(/ WHEN /gi,"~::~"+b+"WHEN ").replace(/ WHERE /gi,"~::~WHERE ").replace(/ WITH /gi,"~::~WITH ").replace(/ ALL /gi," ALL ").replace(/ AS /gi," AS ").replace(/ ASC /gi," ASC ").replace(/ DESC /gi," DESC ").replace(/ DISTINCT /gi," DISTINCT ").replace(/ EXISTS /gi," EXISTS ").replace(/ NOT /gi," NOT ").replace(/ NULL /gi," NULL ").replace(/ LIKE /gi," LIKE ").replace(/\s{0,}SELECT /gi,"SELECT ").replace(/\s{0,}UPDATE /gi,"UPDATE ").replace(/ SET /gi," SET ").replace(/~::~{1,}/g,"~::~").split("~::~")}b.prototype.xml=function(b,c){var d=b.replace(/>\s{0,}</g,"><").replace(/</g,"~::~<").replace(/\s*xmlns\:/g,"~::~xmlns:").replace(/\s*xmlns\=/g,"~::~xmlns=").split("~::~"),e=d.length,f=!1,g=0,h="",i=0,j=c?a(c):this.shift;for(i=0;e>i;i++)d[i].search(/<!/)>-1?(h+=j[g]+d[i],f=!0,(d[i].search(/-->/)>-1||d[i].search(/\]>/)>-1||d[i].search(/!DOCTYPE/)>-1)&&(f=!1)):d[i].search(/-->/)>-1||d[i].search(/\]>/)>-1?(h+=d[i],f=!1):/^<\w/.exec(d[i-1])&&/^<\/\w/.exec(d[i])&&/^<[\w:\-\.\,]+/.exec(d[i-1])==/^<\/[\w:\-\.\,]+/.exec(d[i])[0].replace("/","")?(h+=d[i],f||g--):d[i].search(/<\w/)>-1&&-1==d[i].search(/<\//)&&-1==d[i].search(/\/>/)?h=h+=f?d[i]:j[g++]+d[i]:d[i].search(/<\w/)>-1&&d[i].search(/<\//)>-1?h=h+=f?d[i]:j[g]+d[i]:d[i].search(/<\//)>-1?h=h+=f?d[i]:j[--g]+d[i]:d[i].search(/\/>/)>-1?h=h+=f?d[i]:j[g]+d[i]:h+=d[i].search(/<\?/)>-1?j[g]+d[i]:d[i].search(/xmlns\:/)>-1||d[i].search(/xmlns\=/)>-1?j[g]+d[i]:d[i];return"\n"==h[0]?h.slice(1):h},b.prototype.json=function(a,b){var b=b?b:this.step;return"undefined"==typeof JSON?a:"string"==typeof a?JSON.stringify(JSON.parse(a),null,b):"object"==typeof a?JSON.stringify(a,null,b):a},b.prototype.css=function(b,c){var d=b.replace(/\s{1,}/g," ").replace(/\{/g,"{~::~").replace(/\}/g,"~::~}~::~").replace(/\;/g,";~::~").replace(/\/\*/g,"~::~/*").replace(/\*\//g,"*/~::~").replace(/~::~\s{0,}~::~/g,"~::~").split("~::~"),e=d.length,f=0,g="",h=0,i=c?a(c):this.shift;for(h=0;e>h;h++)g+=/\{/.exec(d[h])?i[f++]+d[h]:/\}/.exec(d[h])?i[--f]+d[h]:/\*\\/.exec(d[h])?i[f]+d[h]:i[f]+d[h];return g.replace(/^\n{1,}/,"")},b.prototype.sql=function(b,e){var f=b.replace(/\s{1,}/g," ").replace(/\'/gi,"~::~'").split("~::~"),g=f.length,h=[],i=0,j=this.step,k=0,l="",m=0,n=e?a(e):this.shift;for(m=0;g>m;m++)h=m%2?h.concat(f[m]):h.concat(d(f[m],j));for(g=h.length,m=0;g>m;m++){k=c(h[m],k),/\s{0,}\s{0,}SELECT\s{0,}/.exec(h[m])&&(h[m]=h[m].replace(/\,/g,",\n"+j+j)),/\s{0,}\s{0,}SET\s{0,}/.exec(h[m])&&(h[m]=h[m].replace(/\,/g,",\n"+j+j)),/\s{0,}\(\s{0,}SELECT\s{0,}/.exec(h[m])?(i++,l+=n[i]+h[m]):/\'/.exec(h[m])?(1>k&&i&&i--,l+=h[m]):(l+=n[i]+h[m],1>k&&i&&i--)}return l=l.replace(/^\n{1,}/,"").replace(/\n{1,}/g,"\n")},b.prototype.xmlmin=function(a,b){var c=b?a:a.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g,"").replace(/[ \r\n\t]{1,}xmlns/g," xmlns");return c.replace(/>\s{0,}</g,"><")},b.prototype.jsonmin=function(a){return"undefined"==typeof JSON?a:JSON.stringify(JSON.parse(a),null,0)},b.prototype.cssmin=function(a,b){var c=b?a:a.replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\//g,"");return c.replace(/\s{1,}/g," ").replace(/\{\s{1,}/g,"{").replace(/\}\s{1,}/g,"}").replace(/\;\s{1,}/g,";").replace(/\/\*\s{1,}/g,"/*").replace(/\*\/\s{1,}/g,"*/")},b.prototype.sqlmin=function(a){return a.replace(/\s{1,}/g," ").replace(/\s{1,}\(/,"(").replace(/\s{1,}\)/,")")},window.vkbeautify=new b}(),window.hextorstr=function(a){return window.CryptoJS.enc.Hex.parse(a)},window.decode=function(a){var b=null,c=null;try{b=url_base64_decode(a)}catch(d){c=d}return{result:b,error:c}},window.encode=function(a){var b,c,d,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",k=0,l=0,m="",n=[];if(!a)return a;a=unescape(encodeURIComponent(a));do b=a.charCodeAt(k++),c=a.charCodeAt(k++),d=a.charCodeAt(k++),i=b<<16|c<<8|d,e=i>>18&63,f=i>>12&63,g=i>>6&63,h=63&i,n[l++]=j.charAt(e)+j.charAt(f)+j.charAt(g)+j.charAt(h);while(k<a.length);m=n.join("");var o=a.length%3;return(o?m.slice(0,o-3):m)+"===".slice(o||3)},window.sign=function(a,b,c,d){var e,f,g="",h=null;try{e=JSON.stringify(JSON.parse(a))}catch(i){h={result:null,error:{cause:i,who:["header"]}}}try{f=JSON.stringify(JSON.parse(b))}catch(i){h?h.error.who.push("payload"):h={result:null,error:{cause:i,who:["payload"]}}}if(h)return h;if(d)try{c=window.b64utob64(c),c=window.CryptoJS.enc.Base64.parse(c).toString()}catch(i){return{result:"",error:i}}else c=window.CryptoJS.enc.Latin1.parse(c).toString();try{g=KJUR.jws.JWS.sign(null,e,f,c)}catch(i){h=i}return{result:g,error:h}},window.isValidBase64String=function(a){try{return a=window.b64utob64(a),window.CryptoJS.enc.Base64.parse(a).toString(),!0}catch(b){return!1}},window.verify=function(a,b,c){var d="",e=null;if(c)try{b=window.b64utob64(b),b=window.CryptoJS.enc.Base64.parse(b).toString()}catch(f){return{result:"",error:f}}else b=window.CryptoJS.enc.Latin1.parse(b).toString();try{d=KJUR.jws.JWS.verify(a,b)}catch(f){e=f}return{result:d,error:e}},function(){function a(a){a.replaceSelection("   ","end")}function b(a){localStorage.samlValue=a}function c(a){a(localStorage.samlValue),localStorage.clear()}function d(a){return"[object Array]"===Object.prototype.toString.call(a)}function e(){if(h){var a=i.xml_str2json(h);if(a){if(a.Response)a=a.Response;else if(!a.Assertion)return;var b,c={};if(a.Assertion._Version?b=a.Assertion._Version:a.Assertion._MajorVersion&&(b=a.Assertion._MajorVersion),c.version=b,"2.0"===b?a.Issuer&&a.Issuer.__text&&(c.issuer=a.Issuer.__text):a.Assertion._Issuer&&a.Assertion._Issuer&&(c.issuer=a.Assertion._Issuer),a.Assertion.Subject&&a.Assertion.Subject.NameID&&a.Assertion.Subject.NameID.__text&&(c.nameId=a.Assertion.Subject.NameID.__text),a.Assertion.Conditions){var e=a.Assertion.Conditions._NotOnOrAfter;if(e){var j=new Date;dateExpires=new Date(e),jQuery.timeago.settings.allowFuture=!0,c.expires=jQuery.timeago(dateExpires),dateExpires<j&&(c.expired="expired")}if("2.0"===b){if(a.Assertion.Conditions.AudienceRestriction&&a.Assertion.Conditions.AudienceRestriction.Audience){var k=a.Assertion.Conditions.AudienceRestriction.Audience.__text;k&&(c.audience=k)}}else if(a.Assertion.Conditions.AudienceRestrictionCondition&&a.Assertion.Conditions.AudienceRestrictionCondition.Audience){var k=a.Assertion.Conditions.AudienceRestrictionCondition.Audience;k&&(c.audience=k)}}if(a.Assertion.Signature&&a.Assertion.Signature.KeyInfo&&a.Assertion.Signature.KeyInfo.X509Data&&a.Assertion.Signature.KeyInfo.X509Data.X509Certificate){var l=a.Assertion.Signature.KeyInfo.X509Data.X509Certificate;if(l){l=l.replace(/(\r\n|\n|\r)/gm,"");var m=new jsSHA(l,"B64");c.thumbprint=m.getHash("SHA-1","HEX")}}if(a.Assertion.AttributeStatement){var n=a.Assertion.AttributeStatement.Attribute;if(n){var o={};if(d(n))for(var p=n.length-1;p>=0;p--){n[p].AttributeValue;o[g(n[p],b)]=f(n[p].AttributeValue,b)}else o[g(n,b)]=f(n.AttributeValue,b);c.attributes=o}}return c}}}function f(a,b){var c;if("2.0"===b)if(d(a)){c=[];for(var e=a.length-1;e>=0;e--)c.push(a[e].__text)}else c=[a.__text];else c=d(a)?a:[a];return c}function g(a,b){var c;return c="2.0"===b?a._FriendlyName?a._FriendlyName:a._Name:a._AttributeName}var h,i=new X2JS,j=$("#saml-info-template").html(),k=Handlebars.compile(j),l=$(".token-input");CodeMirror.commands.autocomplete=function(a){CodeMirror.showHint(a,CodeMirror.hint.xml)};var m=CodeMirror.newFoldFunction(CodeMirror.tagRangeFinder);window.xmlEditor=CodeMirror(document.getElementsByClassName("xml-input")[0],{mode:"text/html",htmlMode:!1,autofocus:!0,lineNumbers:!0,extraKeys:{Tab:a,"Ctrl-Q":function(a){m(a,a.getCursor().line)}},foldGutter:!0,onGutterClick:m,glutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],matchTags:{bothTags:!0}}),m(xmlEditor,1),$("#prettify").on("change",function(){$(this).is(":checked")?(xmlEditor.setValue(vkbeautify.xml(h)),xmlEditor.setOption("readOnly",!0)):(xmlEditor.setOption("readOnly",!1),xmlEditor.setValue(h),xmlEditor.focus())}),l.on("change keypress paste textInput input",function(){if(h=window.decode($(this).val()).result){xmlEditor.setValue(h);var a=e(h);$(".saml-info").html(k(a))}}),xmlEditor.on("change",function(a){if(!$("#prettify").is(":checked")){h=xmlEditor.getValue();var c=window.encode(h);l.val(c),b(c);var d=e(h);$(".saml-info").html(k(d))}}),c(function(a){l.val(a||"PHNhbWxwOlJlc3BvbnNlIHhtbG5zOnNhbWxwPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6cHJvdG9jb2wiIElEPSJfNjIxYzRjNGFlNWQ2MGM3NjhjYzIiICBWZXJzaW9uPSIyLjAiIElzc3VlSW5zdGFudD0iMjAxNC0xMC0xNFQxNDozMjoxN1oiICBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hcHAuYXV0aDAuY29tL3Rlc3Rlci9zYW1scCI+PHNhbWw6SXNzdWVyIHhtbG5zOnNhbWw9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphc3NlcnRpb24iPnVybjptYXR1Z2l0LmF1dGgwLmNvbTwvc2FtbDpJc3N1ZXI+PHNhbWxwOlN0YXR1cz48c2FtbHA6U3RhdHVzQ29kZSBWYWx1ZT0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnN0YXR1czpTdWNjZXNzIi8+PC9zYW1scDpTdGF0dXM+PHNhbWw6QXNzZXJ0aW9uIHhtbG5zOnNhbWw9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphc3NlcnRpb24iIFZlcnNpb249IjIuMCIgSUQ9Il81Vks3TFQ3RmxpVWtrYVF1VzZyNGJyRjBERzVFM1g3NiIgSXNzdWVJbnN0YW50PSIyMDE0LTEwLTE0VDE0OjMyOjE3LjI1MVoiPjxzYW1sOklzc3Vlcj51cm46bWF0dWdpdC5hdXRoMC5jb208L3NhbWw6SXNzdWVyPjxTaWduYXR1cmUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyMiPjxTaWduZWRJbmZvPjxDYW5vbmljYWxpemF0aW9uTWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94bWwtZXhjLWMxNG4jIi8+PFNpZ25hdHVyZU1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNyc2Etc2hhMSIvPjxSZWZlcmVuY2UgVVJJPSIjXzVWSzdMVDdGbGlVa2thUXVXNnI0YnJGMERHNUUzWDc2Ij48VHJhbnNmb3Jtcz48VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI2VudmVsb3BlZC1zaWduYXR1cmUiLz48VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94bWwtZXhjLWMxNG4jIi8+PC9UcmFuc2Zvcm1zPjxEaWdlc3RNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjc2hhMSIvPjxEaWdlc3RWYWx1ZT5aRGtmR08zSDFUdTUwaGF3elFWanNBQ3pKd2M9PC9EaWdlc3RWYWx1ZT48L1JlZmVyZW5jZT48L1NpZ25lZEluZm8+PFNpZ25hdHVyZVZhbHVlPjFGZ3B0N0FhSGNNRTJnVEExNThhY2h2R1FWcUR3SFNIc0hGMy9hNXM3ZGplTzFBYVo4NEd6NWVpV0QrY2RJejZob1QxajJ2LzdRdGZqNWJzTU54dWxCblN6Zkw0VFQ0KytBSy96Rk80YWQybXdBQkZqTU1OaW9nd3dUM3R6eTNhUndqZ1NmbDNWS0VTb3ozWnA4S0wvSk5tL1RSS3o5NVREN0g2V25mS1pvTHdFckd6Tnc2Z1ZzMXk5WFl4SUVnNDZHelViMDdnMjNURm1ydjN3SGx4MlRwS1VOL25lNFoyOEtBUXpYcVZ5eWtKVmFLUS9nYkJOQy84QVFLbG9sOGZMR1NoZU9LUTB2Z0VFMXZGblZWQ0VtcDMwWWFwZEtlV1cycWNxSGI3T3FkbSs5YjJtT1VrcWJheEg1aXhCYllhcVphUUN0NVdGNFA1QnhuTWU0QnA4dz09PC9TaWduYXR1cmVWYWx1ZT48S2V5SW5mbz48WDUwOURhdGE+PFg1MDlDZXJ0aWZpY2F0ZT5NSUlET0RDQ0FpQ2dBd0lCQWdJSkFON085aGVmMDVSSk1BMEdDU3FHU0liM0RRRUJCUVVBTUJ3eEdqQVlCZ05WQkFNVEVXMWhkSFZuYVhRdVlYVjBhREF1WTI5dE1CNFhEVEV6TURZeE5qRXpNalF3TmxvWERUSTNNREl5TXpFek1qUXdObG93SERFYU1CZ0dBMVVFQXhNUmJXRjBkV2RwZEM1aGRYUm9NQzVqYjIwd2dnRWlNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJEd0F3Z2dFS0FvSUJBUUQ4a0VmRWNMaXlNSzBxNEU0eFQvbWdsY1hzZjlvQ1dkVGpCMHZzd0ZYUVBDRGdVazVkYUptTzRvUnJDSXVXZ3RDaER5TWM1TTVNVGV4cXJDbnRRbEtwbmV4a3pEeEN2UFgvSVJKc3RqSkRTSCtXWGxqUllEYlhUZ0FaQWpqakFLcURCSWVVV2F3MUZjVXkzU09tUVZ0eVVkZmpYTnFMenhLUzhTVVdZWTNJYTZQVC91b1VqVUZtVXVKRUZwQmxCNzlHVytUdi9aaWRZNTNnSHloRVlPQnptMXZLWlMxdnRQZnh4cEJxdTdWa2YrNWxxM1JZanVvVlVZTjAzVElKdmVhYTdCQkwwamU4ejdVdnZPR2dyR3VvZFNLSG5lcTd1ZWV4NE9Dc2NDSlpiSzdNbGZibUZpdVNuaVZDZy95TXJ4L29rRG1lMzhzT1hIMUEvekp1MmxZcEFnTUJBQUdqZlRCN01CMEdBMVVkRGdRV0JCUUwzY3VEWE5YdTRVU3JwdjQ0ZHpmR3lISVhEVEJNQmdOVkhTTUVSVEJEZ0JRTDNjdURYTlh1NFVTcnB2NDRkemZHeUhJWERhRWdwQjR3SERFYU1CZ0dBMVVFQXhNUmJXRjBkV2RwZEM1aGRYUm9NQzVqYjIyQ0NRRGV6dllYbjlPVVNUQU1CZ05WSFJNRUJUQURBUUgvTUEwR0NTcUdTSWIzRFFFQkJRVUFBNElCQVFDQXRBbUtIb1g3T2VyekZVUTBPanJnOUMxdXpUNmZPTElsWHlhRHN3azJ0TEU2ZnRGaFNpVnpUMVR0Z1RGdjJvNklBNDd0VzZicUw3dDZaNUpOL0w4Y25vK2t4ZUtPZ1B6MkN2YlVUSm10Uk92RlYvVERrRnNZbUZKWjgrNm5aT0F0WFJaUFdGcGE2S0U0TGM1KzdKOTRzWDJBaVlQRkNuWFJ2WkdNaEo2cXRjK2poNTRRRUlseFp0a3hXVUJHczJmaE9RbStVeDB1eTFxeFN6aHAzbG12TmE3OUtkdm1RaXJTaXREb3Z5aWRhbHB3WDc1MFdHTmZRb0lTZTk0ZTNjbFdhNHVLWGdaN0FZbWhkMXc0a05zN3NlRmR0dkNjcVFKcktZVDJjQlRJTnp0TDZTZXFlRi94Qy8vbEdEbzlVSmljNHBjcnFqMVAzV0dIWUlzbE9XQlE8L1g1MDlDZXJ0aWZpY2F0ZT48L1g1MDlEYXRhPjwvS2V5SW5mbz48L1NpZ25hdHVyZT48c2FtbDpTdWJqZWN0PjxzYW1sOk5hbWVJRCBGb3JtYXQ9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjEuMTpuYW1laWQtZm9ybWF0OnVuc3BlY2lmaWVkIj5naXRodWJ8MTc1ODgwPC9zYW1sOk5hbWVJRD48c2FtbDpTdWJqZWN0Q29uZmlybWF0aW9uIE1ldGhvZD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmNtOmJlYXJlciI+PHNhbWw6U3ViamVjdENvbmZpcm1hdGlvbkRhdGEgTm90T25PckFmdGVyPSIyMDE0LTEwLTE0VDE1OjMyOjE3LjI1MVoiIFJlY2lwaWVudD0iaHR0cHM6Ly9hcHAuYXV0aDAuY29tL3Rlc3Rlci9zYW1scCIvPjwvc2FtbDpTdWJqZWN0Q29uZmlybWF0aW9uPjwvc2FtbDpTdWJqZWN0PjxzYW1sOkNvbmRpdGlvbnMgTm90QmVmb3JlPSIyMDE0LTEwLTE0VDE0OjMyOjE3LjI1MVoiIE5vdE9uT3JBZnRlcj0iMjAxNC0xMC0xNFQxNTozMjoxNy4yNTFaIj48c2FtbDpBdWRpZW5jZVJlc3RyaWN0aW9uPjxzYW1sOkF1ZGllbmNlPnVybjpmb288L3NhbWw6QXVkaWVuY2U+PC9zYW1sOkF1ZGllbmNlUmVzdHJpY3Rpb24+PC9zYW1sOkNvbmRpdGlvbnM+PHNhbWw6QXR0cmlidXRlU3RhdGVtZW50IHhtbG5zOnhzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSIgeG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSI+PHNhbWw6QXR0cmlidXRlIE5hbWU9Imh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIj48c2FtbDpBdHRyaWJ1dGVWYWx1ZSB4c2k6dHlwZT0ieHM6YW55VHlwZSI+Z2l0aHVifDE3NTg4MDwvc2FtbDpBdHRyaWJ1dGVWYWx1ZT48L3NhbWw6QXR0cmlidXRlPjxzYW1sOkF0dHJpYnV0ZSBOYW1lPSJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiPjxzYW1sOkF0dHJpYnV0ZVZhbHVlIHhzaTp0eXBlPSJ4czphbnlUeXBlIj5tYXRpYXN3QGdtYWlsLmNvbTwvc2FtbDpBdHRyaWJ1dGVWYWx1ZT48L3NhbWw6QXR0cmlidXRlPjxzYW1sOkF0dHJpYnV0ZSBOYW1lPSJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIj48c2FtbDpBdHRyaWJ1dGVWYWx1ZSB4c2k6dHlwZT0ieHM6YW55VHlwZSI+TWF0aWFzIFdvbG9za2k8L3NhbWw6QXR0cmlidXRlVmFsdWU+PC9zYW1sOkF0dHJpYnV0ZT48c2FtbDpBdHRyaWJ1dGUgTmFtZT0iaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvdXBuIj48c2FtbDpBdHRyaWJ1dGVWYWx1ZSB4c2k6dHlwZT0ieHM6YW55VHlwZSI+bWF0aWFzd0BnbWFpbC5jb208L3NhbWw6QXR0cmlidXRlVmFsdWU+PC9zYW1sOkF0dHJpYnV0ZT48c2FtbDpBdHRyaWJ1dGUgTmFtZT0iaHR0cDovL3NjaGVtYXMuYXV0aDAuY29tL2lkZW50aXRpZXMvZGVmYXVsdC9hY2Nlc3NfdG9rZW4iPjxzYW1sOkF0dHJpYnV0ZVZhbHVlIHhzaTp0eXBlPSJ4czphbnlUeXBlIj4zYTdkMGRmZWZmZTEyODEyYzM3MTEyZGFhODMwYWJlZjU3MDA4OWI0PC9zYW1sOkF0dHJpYnV0ZVZhbHVlPjwvc2FtbDpBdHRyaWJ1dGU+PHNhbWw6QXR0cmlidXRlIE5hbWU9Imh0dHA6Ly9zY2hlbWFzLmF1dGgwLmNvbS9pZGVudGl0aWVzL2RlZmF1bHQvcHJvdmlkZXIiPjxzYW1sOkF0dHJpYnV0ZVZhbHVlIHhzaTp0eXBlPSJ4czphbnlUeXBlIj5naXRodWI8L3NhbWw6QXR0cmlidXRlVmFsdWU+PC9zYW1sOkF0dHJpYnV0ZT48c2FtbDpBdHRyaWJ1dGUgTmFtZT0iaHR0cDovL3NjaGVtYXMuYXV0aDAuY29tL2lkZW50aXRpZXMvZGVmYXVsdC9jb25uZWN0aW9uIj48c2FtbDpBdHRyaWJ1dGVWYWx1ZSB4c2k6dHlwZT0ieHM6YW55VHlwZSI+Z2l0aHViPC9zYW1sOkF0dHJpYnV0ZVZhbHVlPjwvc2FtbDpBdHRyaWJ1dGU+PHNhbWw6QXR0cmlidXRlIE5hbWU9Imh0dHA6Ly9zY2hlbWFzLmF1dGgwLmNvbS9pZGVudGl0aWVzL2RlZmF1bHQvaXNTb2NpYWwiPjxzYW1sOkF0dHJpYnV0ZVZhbHVlIHhzaTp0eXBlPSJ4czphbnlUeXBlIj50cnVlPC9zYW1sOkF0dHJpYnV0ZVZhbHVlPjwvc2FtbDpBdHRyaWJ1dGU+PC9zYW1sOkF0dHJpYnV0ZVN0YXRlbWVudD48c2FtbDpBdXRoblN0YXRlbWVudCBBdXRobkluc3RhbnQ9IjIwMTQtMTAtMTRUMTQ6MzI6MTcuMjUxWiI+PHNhbWw6QXV0aG5Db250ZXh0PjxzYW1sOkF1dGhuQ29udGV4dENsYXNzUmVmPnVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOnVuc3BlY2lmaWVkPC9zYW1sOkF1dGhuQ29udGV4dENsYXNzUmVmPjwvc2FtbDpBdXRobkNvbnRleHQ+PC9zYW1sOkF1dGhuU3RhdGVtZW50Pjwvc2FtbDpBc3NlcnRpb24+PC9zYW1scDpSZXNwb25zZT4="),h=window.decode(l.val()).result,xmlEditor.setValue(vkbeautify.xml(h)),xmlEditor.setOption("readOnly",!0);var b=e(h);$(".saml-info").html(k(b))}),$(".saml-playground .expand").click(function(a){$(this).hide(),$(".saml-playground .collapse").show(),$(".saml-playground .token").hide(),$(".saml-playground .xml.col-md-6").removeClass("col-md-6").addClass("col-md-12")}),$(".saml-playground .collapse").click(function(a){$(this).hide(),$(".saml-playground .expand").show(),$(".saml-playground .token").show(),$(".saml-playground .xml.col-md-12").removeClass("col-md-12").addClass("col-md-6")})}();
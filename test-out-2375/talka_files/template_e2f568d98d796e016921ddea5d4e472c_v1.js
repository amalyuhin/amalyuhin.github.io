
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/aspro-scorp/js/jquery.actual.min.js?14474198921101";s:6:"source";s:53:"/bitrix/templates/aspro-scorp/js/jquery.actual.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.15
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';}var f={absolute:false,clone:false,includeMargin:false};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().addBack().filter(":hidden");d+="visibility: hidden !important; display: block !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);g.push(m.attr("style"));m.attr("style",d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");}else{o.attr("style",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/aspro-scorp/js/jquery.fancybox.min.js?149485587221528";s:6:"source";s:51:"/bitrix/templates/aspro-scorp/js/jquery.fancybox.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e,t,n,i){"use strict";var o=n(e),a=n(t),r=n.fancybox=function(){r.open.apply(this,arguments)},s=null,l=t.createTouch!==i,c=function(e){return e&&e.hasOwnProperty&&e instanceof n},p=function(e){return e&&"string"===n.type(e)},d=function(e){return p(e)&&e.indexOf("%")>0},h=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},f=function(e,t){var n=parseInt(e,10);return t&&d(e)&&(n=r.getViewport()[t]/100*n),Math.ceil(n)},u=function(e,t){return f(e,t)+"px"};n.extend(r,{version:"2.1.0",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!l,autoCenter:!l,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"'+(n.browser.msie?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{closeClick:!0,speedOut:200,showEarly:!0,css:{}},title:{type:"float"}},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(n.isPlainObject(t)||(t={}),!1!==r.close(!0))?(n.isArray(e)||(e=c(e)?n(e).get():[e]),n.each(e,function(o,a){var s,l,d,h,f,u,g,m={};"object"===n.type(a)&&(a.nodeType&&(a=n(a)),c(a)?(m={href:a.attr("href"),title:a.attr("title"),isDom:!0,element:a},n.metadata&&n.extend(!0,m,a.metadata())):m=a),s=t.href||m.href||(p(a)?a:null),l=t.title!==i?t.title:m.title||"",d=t.content||m.content,h=d?"html":t.type||m.type,!h&&m.isDom&&(h=a.data("fancybox-type"),h||(f=a.prop("class").match(/fancybox\.(\w+)/),h=f?f[1]:null)),p(s)&&(h||(r.isImage(s)?h="image":r.isSWF(s)?h="swf":"#"===s.charAt(0)?h="inline":p(a)&&(h="html",d=a)),"ajax"===h&&(u=s.split(/\s+/,2),s=u.shift(),g=u.shift())),d||("inline"===h?s?d=n(p(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):m.isDom&&(d=a):"html"===h?d=s:h||s||!m.isDom||(h="inline",d=a)),n.extend(m,{href:s,type:h,content:d,title:l,selector:g}),e[o]=m}),r.opts=n.extend(!0,{},r.defaults,t),t.keys!==i&&(r.opts.keys=t.keys?n.extend({},r.defaults.keys,t.keys):!1),r.group=e,r._start(r.opts.index)):void 0},cancel:function(){var e=r.coming;e&&!1!==r.trigger("onCancel")&&(r.hideLoading(),r.ajaxLoad&&r.ajaxLoad.abort(),r.ajaxLoad=null,r.imgPreload&&(r.imgPreload.onload=r.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0).trigger("onReset").remove(),r.current||r.trigger("afterClose"),r.coming=null)},close:function(e){r.cancel(),!1!==r.trigger("beforeClose")&&(r.unbindEvents(),r.isOpen&&e!==!0?(r.isOpen=r.isOpened=!1,r.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),r.wrap.stop(!0,!0).removeClass("fancybox-opened"),"fixed"===r.wrap.css("position")&&r.wrap.css(r._getPosition(!0)),r.transitions[r.current.closeMethod]()):(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),r._afterZoomOut()))},play:function(e){var t=function(){clearTimeout(r.player.timer)},i=function(){t(),r.current&&r.player.isActive&&(r.player.timer=setTimeout(r.next,r.current.playSpeed))},o=function(){t(),n("body").unbind(".player"),r.player.isActive=!1,r.trigger("onPlayEnd")},a=function(){r.current&&(r.current.loop||r.current.index<r.group.length-1)&&(r.player.isActive=!0,n("body").bind({"afterShow.player onUpdate.player":i,"onCancel.player beforeClose.player":o,"beforeLoad.player":t}),i(),r.trigger("onPlayStart"))};e===!0||!r.player.isActive&&e!==!1?a():o()},next:function(e){var t=r.current;t&&(p(e)||(e=t.direction.next),r.jumpto(t.index+1,e,"next"))},prev:function(e){var t=r.current;t&&(p(e)||(e=t.direction.prev),r.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var o=r.current;o&&(e=f(e),r.direction=t||o.direction[e>=o.index?"next":"prev"],r.router=n||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==i&&(r.cancel(),r._start(e)))},reposition:function(e,t){var n;r.isOpen&&(n=r._getPosition(t),e&&"scroll"===e.type?(delete n.position,r.wrap.stop(!0,!0).animate(n,200)):r.wrap.css(n))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(s),s=null),r.isOpen&&!s&&((n||l)&&(r.wrap.removeAttr("style").addClass("fancybox-tmp"),r.trigger("onUpdate")),s=setTimeout(function(){var n=r.current;n&&(r.wrap.removeClass("fancybox-tmp"),"scroll"!==t&&r._setDimension(),"scroll"===t&&n.canShrink||r.reposition(e),r.trigger("onUpdate"),s=null)},l?500:n?20:300))},toggle:function(e){r.isOpen&&(r.current.fitToView="boolean"===n.type(e)?e:!r.current.fitToView,r.update())},hideLoading:function(){a.unbind("keypress.fb"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;r.hideLoading(),a.bind("keypress.fb",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),r.cancel())}),e=n('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"),r.defaults.fixed||(t=r.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=r.current?r.current.locked:!1,n={x:o.scrollLeft(),y:o.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=l&&e.innerWidth?e.innerWidth:o.width(),n.h=l&&e.innerHeight?e.innerHeight:o.height()),n},unbindEvents:function(){r.wrap&&c(r.wrap)&&r.wrap.unbind(".fb"),a.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var e,t=r.current;t&&(o.bind("orientationchange.fb"+(l?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),r.update),e=t.keys,e&&a.bind("keydown.fb",function(o){var a=o.which||o.keyCode,s=o.target||o.srcElement;o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||s&&(s.type||n(s).is("[contenteditable]"))||n.each(e,function(e,s){return t.group.length>1&&s[a]!==i?(r[e](s[a]),o.preventDefault(),!1):n.inArray(a,s)>-1?(r[e](),o.preventDefault(),!1):void 0})}),n.fn.mousewheel&&t.mouseWheel&&r.wrap.bind("mousewheel.fb",function(e,i,o,a){for(var s=e.target||null,l=n(s),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=h(l[0]),l=n(l).parent();0===i||c||r.group.length>1&&!t.canShrink&&(a>0||o>0?r.prev(a>0?"down":"left"):(0>a||0>o)&&r.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var i,o=t||r.coming||r.current;if(o){if(n.isFunction(o[e])&&(i=o[e].apply(o,Array.prototype.slice.call(arguments,1))),i===!1)return!1;"onCancel"!==e||r.isOpened||(r.isActive=!1),o.helpers&&n.each(o.helpers,function(t,i){i&&r.helpers[t]&&n.isFunction(r.helpers[t][e])&&r.helpers[t][e](i,o)}),n.event.trigger(e+".fb")}},isImage:function(e){return p(e)&&e.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i)},isSWF:function(e){return p(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,i,o,a,s,c={};if(e=f(e),t=r.group[e]||null,!t)return!1;if(c=n.extend(!0,{},r.opts,t),a=c.margin,s=c.padding,"number"===n.type(a)&&(c.margin=[a,a,a,a]),"number"===n.type(s)&&(c.padding=[s,s,s,s]),c.modal&&n.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),c.autoSize&&(c.autoWidth=c.autoHeight=!0),"auto"===c.width&&(c.autoWidth=!0),"auto"===c.height&&(c.autoHeight=!0),c.group=r.group,c.index=e,r.coming=c,!1===r.trigger("beforeLoad"))return void(r.coming=null);if(o=c.type,i=c.href,!o)return r.coming=null,r.current&&r.router&&"jumpto"!==r.router?(r.current.index=e,r[r.router](r.direction)):!1;if(r.isActive=!0,("image"===o||"swf"===o)&&(c.autoHeight=c.autoWidth=!1,c.scrolling="visible"),"image"===o&&(c.aspectRatio=!0),"iframe"===o&&l&&(c.scrolling="scroll"),c.wrap=n(c.tpl.wrap).addClass("fancybox-"+(l?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent),n.extend(c,{skin:n(".fancybox-skin",c.wrap),outer:n(".fancybox-outer",c.wrap),inner:n(".fancybox-inner",c.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,t){c.skin.css("padding"+t,u(c.padding[e]))}),r.trigger("onReady"),"inline"===o||"html"===o){if(!c.content||!c.content.length)return r._error("content")}else if(!i)return r._error("href");"image"===o?r._loadImage():"ajax"===o?r._loadAjax():"iframe"===o?r._loadIframe():r._afterLoad()},_error:function(e){n.extend(r.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:r.coming.tpl.error}),r._afterLoad()},_loadImage:function(){var e=r.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,r.coming.width=this.width,r.coming.height=this.height,r._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,r._error("image")},e.src=r.coming.href,e.complete!==i&&e.complete||r.showLoading()},_loadAjax:function(){var e=r.coming;r.showLoading(),r.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){r.coming&&"abort"!==t?r._error("ajax",e):r.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,r._afterLoad())}}))},_loadIframe:function(){var e=r.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",l?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(r.showLoading(),t.one("load",function(){n(this).data("ready",1),l||n(this).bind("load.fb",r.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),r._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||r._afterLoad()},_preloadImages:function(){var e,t,n=r.group,i=r.current,o=n.length,a=i.preload?Math.min(i.preload,o-1):0;for(t=1;a>=t;t+=1)e=n[(i.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,i,o,a,s,l=r.coming,p=r.current,d="fancybox-placeholder";if(r.hideLoading(),l&&r.isActive!==!1){if(!1===r.trigger("afterLoad",l,p))return l.wrap.stop(!0).trigger("onReset").remove(),void(r.coming=null);switch(p&&(r.trigger("beforeChange",p),p.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove(),"fixed"===p.wrap.css("position")&&p.wrap.css(r._getPosition(!0))),r.unbindEvents(),e=l,t=l.content,i=l.type,o=l.scrolling,n.extend(r,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:p}),a=e.href,i){case"inline":case"ajax":case"html":e.selector?t=n("<div>").html(t).find(e.selector):c(t)&&(t.data(d)||t.data(d,n('<div class="'+d+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){n(this).find(t).length&&t.hide().replaceAll(t.data(d)).data(d,!1)}));break;case"image":t=e.tpl.image.replace("{href}",a);break;case"swf":t='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',s="",n.each(e.swf,function(e,n){t+='<param name="'+e+'" value="'+n+'"></param>',s+=" "+e+'="'+n+'"'}),t+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+s+"></embed></object>"}c(t)&&t.parent().is(e.inner)||e.inner.append(t),r.trigger("beforeShow"),e.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),r._setDimension(),e.wrap.removeClass("fancybox-tmp"),e.pos=n.extend({},e.dim,r._getPosition(!0)),r.isOpen=!1,r.coming=null,r.bindEvents(),r.isOpened?p.prevMethod&&r.transitions[p.prevMethod]():n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),r.transitions[r.isOpened?e.nextMethod:e.openMethod](),r._preloadImages()}},_setDimension:function(){var e,t,i,o,a,s,l,c,p,h,g,m,y,w,v,b=r.getViewport(),x=0,k=!1,C=!1,O=r.wrap,W=r.skin,_=r.inner,S=r.current,P=S.width,E=S.height,T=S.minWidth,j=S.minHeight,L=S.maxWidth,M=S.maxHeight,H=S.scrolling,R=S.scrollOutside?S.scrollbarWidth:0,A=S.margin,I=A[1]+A[3],D=A[0]+A[2];if(O.add(W).add(_).width("auto").height("auto"),e=W.outerWidth(!0)-W.width(),t=W.outerHeight(!0)-W.height(),i=I+e,o=D+t,a=d(P)?(b.w-i)*f(P)/100:P,s=d(E)?(b.h-o)*f(E)/100:E,"iframe"===S.type){if(w=S.content,S.autoHeight&&1===w.data("ready"))try{w[0].contentWindow.document.location&&(_.width(a).height(9999),v=w.contents().find("body"),R&&v.css("overflow-x","hidden"),s=v.height())}catch(V){}}else(S.autoWidth||S.autoHeight)&&(_.addClass("fancybox-tmp"),S.autoWidth||_.width(a),S.autoHeight||_.height(s),S.autoWidth&&(a=_.width()),S.autoHeight&&(s=_.height()),_.removeClass("fancybox-tmp"));if(P=f(a),E=f(s),p=a/s,T=f(d(T)?f(T,"w")-i:T),L=f(d(L)?f(L,"w")-i:L),j=f(d(j)?f(j,"h")-o:j),M=f(d(M)?f(M,"h")-o:M),l=L,c=M,m=b.w-I,y=b.h-D,S.aspectRatio?(P>L&&(P=L,E=P/p),E>M&&(E=M,P=E*p),T>P&&(P=T,E=P/p),j>E&&(E=j,P=E*p)):(P=Math.max(T,Math.min(P,L)),E=Math.max(j,Math.min(E,M))),S.fitToView)if(L=Math.min(b.w-i,L),M=Math.min(b.h-o,M),_.width(f(P)).height(f(E)),O.width(f(P+e)),h=O.width(),g=O.height(),S.aspectRatio)for(;(h>m||g>y)&&P>T&&E>j&&!(x++>19);)E=Math.max(j,Math.min(M,E-10)),P=E*p,T>P&&(P=T,E=P/p),P>L&&(P=L,E=P/p),_.width(f(P)).height(f(E)),O.width(f(P+e)),h=O.width(),g=O.height();else P=Math.max(T,Math.min(P,P-(h-m))),E=Math.max(j,Math.min(E,E-(g-y)));R&&"auto"===H&&s>E&&m>P+e+R&&(P+=R),_.width(f(P)).height(f(E)),O.width(f(P+e)),h=O.width(),g=O.height(),k=(h>m||g>y)&&P>T&&E>j,C=S.aspectRatio?l>P&&c>E&&a>P&&s>E:(l>P||c>E)&&(a>P||s>E),n.extend(S,{dim:{width:u(h),height:u(g)},origWidth:a,origHeight:s,canShrink:k,canExpand:C,wPadding:e,hPadding:t,wrapSpace:g-W.outerHeight(!0),skinSpace:W.height()-E}),!w&&S.autoHeight&&E>j&&M>E&&!C&&_.height("auto")},_getPosition:function(e){var t=r.current,n=r.getViewport(),i=t.margin,o=r.wrap.width()+i[1]+i[3],a=r.wrap.height()+i[0]+i[2],s={position:"absolute",top:i[0],left:i[3]};return t.autoCenter&&t.fixed&&!e&&a<=n.h&&o<=n.w?s.position="fixed":t.locked||(s.top+=n.y,s.left+=n.x),s.top=u(Math.max(s.top,s.top+(n.h-a)*t.topRatio)),s.left=u(Math.max(s.left,s.left+(n.w-o)*t.leftRatio)),s},_afterZoomIn:function(){var e=r.current;e&&(r.isOpen=r.isOpened=!0,r.wrap.addClass("fancybox-opened").css("overflow","visible"),r.reposition(),(e.closeClick||e.nextClick)&&r.inner.css("cursor","pointer").bind("click.fb",function(t){n(t.target).is("a")||n(t.target).parent().is("a")||r[e.closeClick?"close":"next"]()}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb",r.close),e.arrows&&r.group.length>1&&((e.loop||e.index>0)&&n(e.tpl.prev).appendTo(r.outer).bind("click.fb",r.prev),(e.loop||e.index<r.group.length-1)&&n(e.tpl.next).appendTo(r.outer).bind("click.fb",r.next)),r.trigger("afterShow"),e.loop||e.index!==e.group.length-1?r.opts.autoPlay&&!r.player.isActive&&(r.opts.autoPlay=!1,r.play()):r.play(!1))},_afterZoomOut:function(){var e=r.current;n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),n.extend(r,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),r.trigger("afterClose",e)}}),r.transitions={getOrigPosition:function(){var e=r.current,t=e.element,n=e.orig,i={},o=50,a=50,s=e.hPadding,l=e.wPadding,p=r.getViewport();return!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),c(n)?(i=n.offset(),n.is("img")&&(o=n.outerWidth(),a=n.outerHeight())):(i.top=p.y+(p.h-a)*e.topRatio,i.left=p.x+(p.w-o)*e.leftRatio),e.locked&&(i.top-=p.y,i.left-=p.x),i={top:u(i.top-s*e.topRatio),left:u(i.left-l*e.leftRatio),width:u(o+l),height:u(a+s)}},step:function(e,t){var n,i,o,a=t.prop,s=r.current,l=s.wrapSpace,c=s.skinSpace;("width"===a||"height"===a)&&(n=t.end===t.start?1:(e-t.start)/(t.end-t.start),r.isClosing&&(n=1-n),i="width"===a?s.wPadding:s.hPadding,o=e-i,r.skin[a](f("width"===a?o:o-l*n)),r.inner[a](f("width"===a?o:o-l*n-c*n)))},zoomIn:function(){var e=r.current,t=e.pos,i=e.openEffect,o="elastic"===i,a=n.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1),r.wrap.css(t).animate(a,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:r._afterZoomIn})},zoomOut:function(){var e=r.current,t=e.closeEffect,n="elastic"===t,i={opacity:.1};n&&(i=this.getOrigPosition(),e.closeOpacity&&(i.opacity=.1)),r.wrap.animate(i,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:r._afterZoomOut})},changeIn:function(){var e,t=r.current,n=t.nextEffect,i=t.pos,o={opacity:1},a=r.direction,s=200;i.opacity=.1,"elastic"===n&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(i[e]=u(f(i[e])-s),o[e]="+="+s+"px"):(i[e]=u(f(i[e])+s),o[e]="-="+s+"px")),"none"===n?r._afterZoomIn():r.wrap.css(i).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:r._afterZoomIn})},changeOut:function(){var e=r.previous,t=e.prevEffect,i={opacity:.1},o=r.direction,a=200;"elastic"===t&&(i["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+a+"px"),e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},r.helpers.overlay={overlay:null,update:function(){var e,i="100%";this.overlay.width(i).height("100%"),n.browser.msie?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),a.width()>e&&(i=a.width())):a.width()>o.width()&&(i=a.width()),this.overlay.width(i).height(a.height())},onReady:function(e,i){n(".fancybox-overlay").stop(!0,!0),this.overlay||n.extend(this,{overlay:n('<div class="fancybox-overlay"></div>').appendTo(i.parent),margin:a.height()>o.height()||"scroll"===n("body").css("overflow-y")?n("body").css("margin-right"):!1,el:n(t.all&&!t.querySelector?"html":"body")}),i.fixed&&!l&&(this.overlay.addClass("fancybox-overlay-fixed"),i.autoCenter&&(this.overlay.append(i.wrap),i.locked=this.overlay)),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var i=this.overlay.unbind(".fb").width("auto").height("auto").css(e.css);e.closeClick&&i.bind("click.fb",function(e){n(e.target).hasClass("fancybox-overlay")&&r.close()}),t.fixed&&!l?t.locked&&(this.el.addClass("fancybox-lock"),this.margin!==!1&&n("body").css("margin-right",f(this.margin)+t.scrollbarWidth)):this.update(),i.show()},onUpdate:function(e,t){(!t.fixed||l)&&this.update()},afterClose:function(e){var t=this,i=e.speedOut||0;t.overlay&&!r.isActive&&t.overlay.fadeOut(i||0,function(){n("body").css("margin-right",t.margin),t.el.removeClass("fancybox-lock"),t.overlay.remove(),t.overlay=null})}},r.helpers.title={beforeShow:function(e){var t,i,o=r.current.title,a=e.type;if(p(o)&&""!==n.trim(o)){switch(t=n('<div class="fancybox-title fancybox-title-'+a+'-wrap">'+o+"</div>"),a){case"inside":i=r.skin;break;case"outside":i=r.wrap;break;case"over":i=r.inner;break;default:i=r.skin,t.appendTo("body").width(t.width()).wrapInner('<span class="child"></span>'),r.current.margin[2]+=Math.abs(f(t.css("margin-bottom")))}"top"===e.position?t.prependTo(i):t.appendTo(i)}}},n.fn.fancybox=function(e){var t,i=n(this),o=this.selector||"",s=function(a){var s,l,c=n(this).blur(),p=t;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(s=e.groupAttr||"data-fancybox-group",l=c.attr(s),l||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(c=o.length?n(o):i,c=c.filter("["+s+'="'+l+'"]'),p=c.index(this)),e.index=p,r.open(c,e)!==!1&&a.preventDefault())};return e=e||{},t=e.index||0,o&&e.live!==!1?a.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",s):i.unbind("click.fb-start").bind("click.fb-start",s),this},a.ready(function(){n.scrollbarWidth===i&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),i=t.innerWidth()-t.height(99).innerWidth();return e.remove(),i}),n.support.fixedPosition===i&&(n.support.fixedPosition=function(){var e=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),n.extend(r.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")})})}(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:59:"/bitrix/templates/aspro-scorp/js/blink.min.js?1494855872228";s:6:"source";s:41:"/bitrix/templates/aspro-scorp/js/blink.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(){$.fn.blink=function(){return this.each(function(){$(this).hover(function(){$(this).is(":animated")||$(this).animate({opacity:.75},150,function(){$(this).animate({opacity:1},100,"linear")})},function(){})})}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:72:"/bitrix/templates/aspro-scorp/vendor/jquery.easing.min.js?14948558723338";s:6:"source";s:53:"/bitrix/templates/aspro-scorp/vendor/jquery.easing.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(-Math.pow(2,-10*e/a)+1)+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i))+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=a*(.3*1.5)),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return 1>e?-.5*(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i))+t:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?u/2*(e*e*(((r*=1.525)+1)*e-r))+t:u/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?u*(7.5625*e*e)+t:2/2.75>e?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return a/2>e?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:72:"/bitrix/templates/aspro-scorp/vendor/jquery.appear.min.js?14948558721281";s:6:"source";s:53:"/bitrix/templates/aspro-scorp/vendor/jquery.appear.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){e.fn.appear=function(a,r){var n=e.extend({data:void 0,one:!0,accX:0,accY:0},r);return this.each(function(){var r=e(this);if(r.appeared=!1,!a)return void r.trigger("appear",n.data);var p=e(window),t=function(){if(!r.is(":visible"))return void(r.appeared=!1);var e=p.scrollLeft(),a=p.scrollTop(),t=r.offset(),c=t.left,i=t.top,o=n.accX,f=n.accY,s=r.height(),u=p.height(),d=r.width(),l=p.width();i+s+f>=a&&a+u+f>=i&&c+d+o>=e&&e+l+o>=c?r.appeared||r.trigger("appear",n.data):r.appeared=!1},c=function(){if(r.appeared=!0,n.one){p.unbind("scroll",t);var c=e.inArray(t,e.fn.appear.checks);c>=0&&e.fn.appear.checks.splice(c,1)}a.apply(this,arguments)};n.one?r.one("appear",n.data,c):r.bind("appear",n.data,c),p.scroll(t),e.fn.appear.checks.push(t),t()})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var a=e.fn.appear.checks.length;if(a>0)for(;a--;)e.fn.appear.checks[a]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(a,r){var n=e.fn[r];n&&(e.fn[r]=function(){var a=n.apply(this,arguments);return e.fn.appear.run(),a})})}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:72:"/bitrix/templates/aspro-scorp/vendor/jquery.cookie.min.js?14948558721084";s:6:"source";s:53:"/bitrix/templates/aspro-scorp/vendor/jquery.cookie.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}(function(e){function n(e){return e}function o(e){return decodeURIComponent(e.replace(t," "))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return r.json?JSON.parse(e):e}catch(n){}}var t=/\+/g,r=e.cookie=function(t,c,a){if(void 0!==c){if(a=e.extend({},r.defaults,a),"number"==typeof a.expires){var u=a.expires,d=a.expires=new Date;d.setDate(d.getDate()+u)}return c=r.json?JSON.stringify(c):String(c),document.cookie=[encodeURIComponent(t),"=",r.raw?c:encodeURIComponent(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}for(var f=r.raw?n:o,p=document.cookie.split("; "),s=t?void 0:{},m=0,x=p.length;x>m;m++){var l=p[m].split("="),g=f(l.shift()),v=f(l.join("="));if(t&&t===g){s=i(v);break}t||(s[g]=i(v))}return s};r.defaults={},e.removeCookie=function(n,o){return void 0!==e.cookie(n)?(e.cookie(n,"",e.extend(o,{expires:-1})),!0):!1}});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/bitrix/templates/aspro-scorp/vendor/bootstrap.min.js?149485587227492";s:6:"source";s:49:"/bitrix/templates/aspro-scorp/vendor/bootstrap.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
+function(t){"use strict";var e='[data-dismiss="alert"]',i=function(i){t(i).on("click",e,this.close)};i.prototype.close=function(e){function i(){s.trigger("closed.bs.alert").remove()}var o=t(this),n=o.attr("data-target");n||(n=o.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,""));var s=t(n);e&&e.preventDefault(),s.length||(s=o.hasClass("alert")?o:o.parent()),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one(t.support.transition.end,i).emulateTransitionEnd(150):i())};var o=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var o=t(this),n=o.data("bs.alert");n||o.data("bs.alert",n=new i(this)),"string"==typeof e&&n[e].call(o)})},t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",e,i.prototype.close)}(window.jQuery),+function(t){"use strict";var e=function(i,o){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,o)};e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",n.resetText||i.data("resetText",i[o]()),i[o](n[t]||this.options[t]),setTimeout(function(){"loadingText"==t?i.addClass(e).attr(e,e):i.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons"]');if(t.length){var e=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===e.prop("type")&&t.find(".active").removeClass("active")}this.$element.toggleClass("active")};var i=t.fn.button;t.fn.button=function(i){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof i&&i;n||o.data("bs.button",n=new e(this,s)),"toggle"==i?n.toggle():i&&n.setState(i)})},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api","[data-toggle^=button]",function(e){var i=t(e.target);i.hasClass("btn")||(i=i.closest(".btn")),i.button("toggle"),e.preventDefault()})}(window.jQuery),+function(t){"use strict";var e=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},e.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},e.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},e.prototype.to=function(e){var i=this,o=this.getActiveIndex();if(!(e>this.$items.length-1||0>e))return this.sliding?this.$element.one("slid",function(){i.to(e)}):o==e?this.pause().cycle():this.slide(e>o?"next":"prev",t(this.$items[e]))},e.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(e,i){var o=this.$element.find(".item.active"),n=i||o[e](),s=this.interval,a="next"==e?"left":"right",r="next"==e?"first":"last",l=this;if(!n.length){if(!this.options.wrap)return;n=this.$element.find(".item")[r]()}this.sliding=!0,s&&this.pause();var h=t.Event("slide.bs.carousel",{relatedTarget:n[0],direction:a});if(!n.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(l.$indicators.children()[l.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(h),h.isDefaultPrevented())return;n.addClass(e),n[0].offsetWidth,o.addClass(a),n.addClass(a),o.one(t.support.transition.end,function(){n.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(h),h.isDefaultPrevented())return;o.removeClass("active"),n.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var i=t.fn.carousel;t.fn.carousel=function(i){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},e.DEFAULTS,o.data(),"object"==typeof i&&i),a="string"==typeof i?i:s.slide;n||o.data("bs.carousel",n=new e(this,s)),"number"==typeof i?n.to(i):a?n[a]():s.interval&&n.pause().cycle()})},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var i,o=t(this),n=t(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},n.data(),o.data()),a=o.attr("data-slide-to");a&&(s.interval=!1),n.carousel(s),(a=o.attr("data-slide-to"))&&n.data("bs.carousel").to(a),e.preventDefault()}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);e.carousel(e.data())})})}(window.jQuery),+function(t){function e(){t(o).remove(),t(n).each(function(e){var o=i(t(this));o.hasClass("open")&&(o.trigger(e=t.Event("hide.bs.dropdown")),e.isDefaultPrevented()||o.removeClass("open").trigger("hidden.bs.dropdown"))})}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}var o=".dropdown-backdrop",n="[data-toggle=dropdown]",s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=i(n),a=s.hasClass("open");if(e(),!a){if("ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e),s.trigger(o=t.Event("show.bs.dropdown")),o.isDefaultPrevented())return;s.toggleClass("open").trigger("shown.bs.dropdown"),n.focus()}return!1}},s.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var s=i(o),a=s.hasClass("open");if(!a||a&&27==e.keyCode)return 27==e.which&&s.find(n).focus(),o.click();var r=t("[role=menu] li:not(.divider):visible a",s);if(r.length){var l=r.index(r.filter(":focus"));38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<r.length-1&&l++,~l||(l=0),r.eq(l).focus()}}}};var a=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var i=t(this),o=i.data("dropdown");o||i.data("dropdown",o=new s(this)),"string"==typeof e&&o[e].call(i)})},t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",n,s.prototype.toggle).on("keydown.bs.dropdown.data-api",n+", [role=menu]",s.prototype.keydown)}(window.jQuery),+function(t){"use strict";var e=function(e,i){this.options=i,this.$element=t(e),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this[this.isShown?"hide":"show"](t)},e.prototype.show=function(e){var i=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var o=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(document.body),i.$element.show(),o&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});o?i.$element.find(".modal-dialog").one(t.support.transition.end,function(){i.$element.focus().trigger(n)}).emulateTransitionEnd(300):i.$element.focus().trigger(n)}))},e.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one(t.support.transition.end,t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]!==t.target&&!this.$element.has(t.target).length&&this.$element.focus()},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden.bs.modal")})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(e){var i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&i;if(this.$backdrop=t('<div class="modal-backdrop '+i+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;o?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()):e&&e()};var i=t.fn.modal;t.fn.modal=function(i,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},e.DEFAULTS,n.data(),"object"==typeof i&&i);s||n.data("bs.modal",s=new e(this,a)),"string"==typeof i?s[i](o):a.show&&s.show(o)})},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var i=t(this),o=i.attr("href"),n=t(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=n.data("modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},n.data(),i.data());e.preventDefault(),n.modal(s,this).one("hide",function(){i.is(":visible")&&i.focus()})}),t(document).on("show.bs.modal",".modal",function(){t(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){t(document.body).removeClass("modal-open")})}(window.jQuery),+function(t){"use strict";var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.prototype.init=function(e,i,o){this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o);for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focus",l="hover"==a?"mouseleave":"blur";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},e.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show()},e.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},e.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(e),e.isDefaultPrevented())return;var i=this.tip();this.setContent(),this.options.animation&&i.addClass("fade");var o="function"==typeof this.options.placement?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement,n=/\s?auto?\s?/i,s=n.test(o);s&&(o=o.replace(n,"")||"top"),i.detach().css({top:0,left:0,display:"block"}).addClass(o),this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element);var a=this.getPosition(),r=i[0].offsetWidth,l=i[0].offsetHeight;if(s){var h=this.$element.parent(),p=o,d=document.documentElement.scrollTop||document.body.scrollTop,c="body"==this.options.container?window.innerWidth:h.outerWidth(),f="body"==this.options.container?window.innerHeight:h.outerHeight(),u="body"==this.options.container?0:h.offset().left;o="bottom"==o&&a.top+a.height+l-d>f?"top":"top"==o&&a.top-d-l<0?"bottom":"right"==o&&a.right+r>c?"left":"left"==o&&a.left-r<u?"right":o,i.removeClass(p).addClass(o)}var v=this.getCalculatedOffset(o,a,r,l);this.applyPlacement(v,o),this.$element.trigger("shown.bs."+this.type)}},e.prototype.applyPlacement=function(t,e){var i,o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),t.top=t.top+a,t.left=t.left+r,o.offset(t).addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;if("top"==e&&h!=s&&(i=!0,t.top=t.top+s-h),/bottom|top/.test(e)){var p=0;t.left<0&&(p=-2*t.left,t.left=0,o.offset(t),l=o[0].offsetWidth,h=o[0].offsetHeight),this.replaceArrow(p-n+l,l,"left")}else this.replaceArrow(h-s,h,"top");i&&o.offset(t)},e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(){function e(){"in"!=i.hoverState&&o.detach()}var i=this,o=this.tip(),n=t.Event("hide.bs."+this.type);return this.$element.trigger(n),n.isDefaultPrevented()?void 0:(o.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?o.one(t.support.transition.end,e).emulateTransitionEnd(150):e(),this.$element.trigger("hidden.bs."+this.type),this)},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},e.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},e.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var i=e?t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;i.tip().hasClass("in")?i.leave(i):i.enter(i)},e.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof i&&i;n||o.data("bs.tooltip",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(window.jQuery),+function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},e.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var i=t.fn.popover;t.fn.popover=function(i){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof i&&i;n||o.data("bs.popover",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(window.jQuery),+function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:n});if(e.trigger(s),!s.isDefaultPrevented()){var a=t(o);this.activate(e.parent("li"),i),this.activate(a,a.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:n})})}}},e.prototype.activate=function(e,i,o){function n(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),o&&o()}var s=i.find("> .active"),a=o&&t.support.transition&&s.hasClass("fade");a?s.one(t.support.transition.end,n).emulateTransitionEnd(150):n(),s.removeClass("in")};var i=t.fn.tab;t.fn.tab=function(i){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new e(this)),"string"==typeof i&&n[i]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=i,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery),+function(t){"use strict";var e=function(i,o){this.options=t.extend({},e.DEFAULTS,o),this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=this.unpin=null,this.checkPosition()};e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=t(document).height(),o=this.$window.scrollTop(),n=this.$element.offset(),s=this.options.offset,a=s.top,r=s.bottom;"object"!=typeof s&&(r=a=s),"function"==typeof a&&(a=s.top()),"function"==typeof r&&(r=s.bottom());var l=null!=this.unpin&&o+this.unpin<=n.top?!1:null!=r&&n.top+this.$element.height()>=i-r?"bottom":null!=a&&a>=o?"top":!1;this.affixed!==l&&(this.unpin&&this.$element.css("top",""),this.affixed=l,this.unpin="bottom"==l?n.top-o:null,this.$element.removeClass(e.RESET).addClass("affix"+(l?"-"+l:"")),"bottom"==l&&this.$element.offset({top:document.body.offsetHeight-r-this.$element.height()}))}};var i=t.fn.affix;t.fn.affix=function(i){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof i&&i;n||o.data("bs.affix",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),i=e.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.affix(i)})})}(window.jQuery),+function(t){"use strict";var e=function(i,o){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,o),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e=t.Event("show.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.$parent&&this.$parent.find("> .panel > .in");if(i&&i.length){var o=i.data("bs.collapse");if(o&&o.transitioning)return;i.collapse("hide"),o||i.data("bs.collapse",null)}var n=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[n](0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("in")[n]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return s.call(this);var a=t.camelCase(["scroll",n].join("-"));this.$element.one(t.support.transition.end,t.proxy(s,this)).emulateTransitionEnd(350)[n](this.$element[0][a])}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?void this.$element[i](0).one(t.support.transition.end,t.proxy(o,this)).emulateTransitionEnd(350):o.call(this)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var i=t.fn.collapse;t.fn.collapse=function(i){return this.each(function(){var o=t(this),n=o.data("bs.collapse"),s=t.extend({},e.DEFAULTS,o.data(),"object"==typeof i&&i);n||o.data("bs.collapse",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(e){var i,o=t(this),n=o.attr("data-target")||e.preventDefault()||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),s=t(n),a=s.data("bs.collapse"),r=a?"toggle":o.data(),l=o.attr("data-parent"),h=l&&t(l);a&&a.transitioning||(h&&h.find('[data-toggle=collapse][data-parent="'+l+'"]').not(o).addClass("collapsed"),o[s.hasClass("in")?"addClass":"removeClass"]("collapsed")),s.collapse(r)})}(window.jQuery),+function(t){function e(i,o){var n,s=t.proxy(this.process,this);this.$element=t(t(i).is("body")?window:i),this.$body=t("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",s),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||(n=t(i).attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=t([]),this.targets=t([]),this.activeTarget=null,this.refresh(),this.process()}e.DEFAULTS={offset:10},e.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";this.offsets=t([]),this.targets=t([]);var i=this;this.$body.find(this.selector).map(function(){var o=t(this),n=o.data("target")||o.attr("href"),s=/^#\w/.test(n)&&t(n);return s&&s.length&&[[s[e]().top+(!t.isWindow(i.$scrollElement.get(0))&&i.$scrollElement.scrollTop()),n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,o=i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(e>=o)return a!=(t=s.last()[0])&&this.activate(t);for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(!n[t+1]||e<=n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parents(".active").removeClass("active");var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate")};var i=t.fn.scrollspy;t.fn.scrollspy=function(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),+function(t){function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]}}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one(t.support.transition.end,function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e()})}(window.jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:88:"/bitrix/templates/aspro-scorp/vendor/flexslider/jquery.flexslider-min.js?147507573221828";s:6:"source";s:72:"/bitrix/templates/aspro-scorp/vendor/flexslider/jquery.flexslider-min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery FlexSlider v2.4.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){$.flexslider=function(e,t){var a=$(e);a.vars=$.extend({},$.flexslider.defaults,t);var n=a.vars.namespace,i=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,s=("ontouchstart"in window||i||window.DocumentTouch&&document instanceof DocumentTouch)&&a.vars.touch,r="click touchend MSPointerUp keyup",o="",l,c="vertical"===a.vars.direction,d=a.vars.reverse,u=a.vars.itemWidth>0,v="fade"===a.vars.animation,p=""!==a.vars.asNavFor,m={},f=!0;$.data(e,"flexslider",a),m={init:function(){a.animating=!1,a.currentSlide=parseInt(a.vars.startAt?a.vars.startAt:0,10),isNaN(a.currentSlide)&&(a.currentSlide=0),a.animatingTo=a.currentSlide,a.atEnd=0===a.currentSlide||a.currentSlide===a.last,a.containerSelector=a.vars.selector.substr(0,a.vars.selector.search(" ")),a.slides=$(a.vars.selector,a),a.container=$(a.containerSelector,a),a.count=a.slides.length,a.syncExists=$(a.vars.sync).length>0,"slide"===a.vars.animation&&(a.vars.animation="swing"),a.prop=c?"top":"marginLeft",a.args={},a.manualPause=!1,a.stopped=!1,a.started=!1,a.startTimeout=null,a.transitions=!a.vars.video&&!v&&a.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return a.pfx=t[n].replace("Perspective","").toLowerCase(),a.prop="-"+a.pfx+"-transform",!0;return!1}(),a.ensureAnimationEnd="",""!==a.vars.controlsContainer&&(a.controlsContainer=$(a.vars.controlsContainer).length>0&&$(a.vars.controlsContainer)),""!==a.vars.manualControls&&(a.manualControls=$(a.vars.manualControls).length>0&&$(a.vars.manualControls)),a.vars.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-.5}),a.container.empty().append(a.slides)),a.doMath(),a.setup("init"),a.vars.controlNav&&m.controlNav.setup(),a.vars.directionNav&&m.directionNav.setup(),a.vars.keyboard&&(1===$(a.containerSelector).length||a.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!a.animating&&(39===t||37===t)){var n=39===t?a.getTarget("next"):37===t?a.getTarget("prev"):!1;a.flexAnimate(n,a.vars.pauseOnAction)}}),a.vars.mousewheel&&a.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=a.getTarget(0>t?"next":"prev");a.flexAnimate(s,a.vars.pauseOnAction)}),a.vars.pausePlay&&m.pausePlay.setup(),a.vars.slideshow&&a.vars.pauseInvisible&&m.pauseInvisible.init(),a.vars.slideshow&&(a.vars.pauseOnHover&&a.hover(function(){a.manualPlay||a.manualPause||a.pause()},function(){a.manualPause||a.manualPlay||a.stopped||a.play()}),a.vars.pauseInvisible&&m.pauseInvisible.isHidden()||(a.vars.initDelay>0?a.startTimeout=setTimeout(a.play,a.vars.initDelay):a.play())),p&&m.asNav.setup(),s&&a.vars.touch&&m.touch(),(!v||v&&a.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",m.resize),a.find("img").attr("draggable","false"),setTimeout(function(){a.vars.start(a)},200)},asNav:{setup:function(){a.asNav=!0,a.animatingTo=Math.floor(a.currentSlide/a.move),a.currentItem=a.currentSlide,a.slides.removeClass(n+"active-slide").eq(a.currentItem).addClass(n+"active-slide"),i?(e._slider=a,a.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),n=t.index();$(a.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(a.direction=a.currentItem<n?"next":"prev",a.flexAnimate(n,a.vars.pauseOnAction,!1,!0,!0))})})):a.slides.on(r,function(e){e.preventDefault();var t=$(this),i=t.index(),s=t.offset().left-$(a).scrollLeft();0>=s&&t.hasClass(n+"active-slide")?a.flexAnimate(a.getTarget("prev"),!0):$(a.vars.asNavFor).data("flexslider").animating||t.hasClass(n+"active-slide")||(a.direction=a.currentItem<i?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===a.vars.controlNav?"control-thumbs":"control-paging",t=1,i,s;if(a.controlNavScaffold=$('<ol class="'+n+"control-nav "+n+e+'"></ol>'),a.pagingCount>1)for(var l=0;l<a.pagingCount;l++){if(s=a.slides.eq(l),i="thumbnails"===a.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"/>':"<a>"+t+"</a>","thumbnails"===a.vars.controlNav&&!0===a.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!=c&&void 0!=c&&(i+='<span class="'+n+'caption">'+c+"</span>")}a.controlNavScaffold.append("<li>"+i+"</li>"),t++}a.controlsContainer?$(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),a.controlNavScaffold.delegate("a, img",r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},setupManual:function(){a.controlNav=a.manualControls,m.controlNav.active(),a.controlNav.bind(r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===a.vars.controlNav?"img":"a";a.controlNav=$("."+n+"control-nav li "+e,a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(n+"active").eq(a.animatingTo).addClass(n+"active")},update:function(e,t){a.pagingCount>1&&"add"===e?a.controlNavScaffold.append($("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(t).closest("li").remove(),m.controlNav.set(),a.pagingCount>1&&a.pagingCount!==a.controlNav.length?a.update(t,e):m.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+n+'direction-nav"><li class="'+n+'nav-prev"><a class="'+n+'prev" href="#">'+a.vars.prevText+'</a></li><li class="'+n+'nav-next"><a class="'+n+'next" href="#">'+a.vars.nextText+"</a></li></ul>");a.controlsContainer?($(a.controlsContainer).append(e),a.directionNav=$("."+n+"direction-nav li a",a.controlsContainer)):(a.append(e),a.directionNav=$("."+n+"direction-nav li a",a)),m.directionNav.update(),a.directionNav.bind(r,function(e){e.preventDefault();var t;(""===o||o===e.type)&&(t=a.getTarget($(this).hasClass(n+"next")?"next":"prev"),a.flexAnimate(t,a.vars.pauseOnAction)),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(){var e=n+"disabled";1===a.pagingCount?a.directionNav.addClass(e).attr("tabindex","-1"):a.vars.animationLoop?a.directionNav.removeClass(e).removeAttr("tabindex"):0===a.animatingTo?a.directionNav.removeClass(e).filter("."+n+"prev").addClass(e).attr("tabindex","-1"):a.animatingTo===a.last?a.directionNav.removeClass(e).filter("."+n+"next").addClass(e).attr("tabindex","-1"):a.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+n+'pauseplay"><a></a></div>');a.controlsContainer?(a.controlsContainer.append(e),a.pausePlay=$("."+n+"pauseplay a",a.controlsContainer)):(a.append(e),a.pausePlay=$("."+n+"pauseplay a",a)),m.pausePlay.update(a.vars.slideshow?n+"pause":n+"play"),a.pausePlay.bind(r,function(e){e.preventDefault(),(""===o||o===e.type)&&($(this).hasClass(n+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(e){"play"===e?a.pausePlay.removeClass(n+"pause").addClass(n+"play").html(a.vars.playText):a.pausePlay.removeClass(n+"play").addClass(n+"pause").html(a.vars.pauseText)}},touch:function(){function t(t){a.animating?t.preventDefault():(window.navigator.msPointerEnabled||1===t.touches.length)&&(a.pause(),g=c?a.h:a.w,S=Number(new Date),x=t.touches[0].pageX,b=t.touches[0].pageY,f=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*g:(a.currentSlide+a.cloneOffset)*g,p=c?b:x,m=c?x:b,e.addEventListener("touchmove",n,!1),e.addEventListener("touchend",s,!1))}function n(e){x=e.touches[0].pageX,b=e.touches[0].pageY,h=c?p-b:p-x,y=c?Math.abs(h)<Math.abs(x-m):Math.abs(h)<Math.abs(b-m);var t=500;(!y||Number(new Date)-S>t)&&(e.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(h/=0===a.currentSlide&&0>h||a.currentSlide===a.last&&h>0?Math.abs(h)/g+2:1),a.setProps(f+h,"setTouch")))}function s(t){if(e.removeEventListener("touchmove",n,!1),a.animatingTo===a.currentSlide&&!y&&null!==h){var i=d?-h:h,r=a.getTarget(i>0?"next":"prev");a.canAdvance(r)&&(Number(new Date)-S<550&&Math.abs(i)>50||Math.abs(i)>g/2)?a.flexAnimate(r,a.vars.pauseOnAction):v||a.flexAnimate(a.currentSlide,a.vars.pauseOnAction,!0)}e.removeEventListener("touchend",s,!1),p=null,m=null,h=null,f=null}function r(t){t.stopPropagation(),a.animating?t.preventDefault():(a.pause(),e._gesture.addPointer(t.pointerId),w=0,g=c?a.h:a.w,S=Number(new Date),f=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*g:(a.currentSlide+a.cloneOffset)*g)}function o(t){t.stopPropagation();var a=t.target._slider;if(a){var n=-t.translationX,i=-t.translationY;return w+=c?i:n,h=w,y=c?Math.abs(w)<Math.abs(-n):Math.abs(w)<Math.abs(-i),t.detail===t.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){e._gesture.stop()}):void((!y||Number(new Date)-S>500)&&(t.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(h=w/(0===a.currentSlide&&0>w||a.currentSlide===a.last&&w>0?Math.abs(w)/g+2:1)),a.setProps(f+h,"setTouch"))))}}function l(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==h){var a=d?-h:h,n=t.getTarget(a>0?"next":"prev");t.canAdvance(n)&&(Number(new Date)-S<550&&Math.abs(a)>50||Math.abs(a)>g/2)?t.flexAnimate(n,t.vars.pauseOnAction):v||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}p=null,m=null,h=null,f=null,w=0}}var p,m,f,g,h,S,y=!1,x=0,b=0,w=0;i?(e.style.msTouchAction=w?"pan-x":"pan-y",e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",r,!1),e._slider=a,e.addEventListener("MSGestureChange",o,!1),e.addEventListener("MSGestureEnd",l,!1)):e.addEventListener("touchstart",t,!1)},resize:function(){!a.animating&&a.is(":visible")&&(u||a.doMath(),v?m.smoothHeight():u?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):c?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(a.vars.smoothHeight&&m.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(e){if(!c||v){var t=v?a:a.viewport;e?t.animate({height:a.slides.eq(a.animatingTo).height()},e):t.height(a.slides.eq(a.animatingTo).height())}},sync:function(e){var t=$(a.vars.sync).data("flexslider"),n=a.animatingTo;switch(e){case"animate":t.flexAnimate(n,a.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=m.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){m.pauseInvisible.isHidden()?a.startTimeout?clearTimeout(a.startTimeout):a.pause():a.started?a.play():a.vars.initDelay>0?setTimeout(a.play,a.vars.initDelay):a.play()})}},isHidden:function(){var e=m.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(l),l=setTimeout(function(){o=""},3e3)}},a.flexAnimate=function(e,t,i,r,o){if(a.vars.animationLoop||e===a.currentSlide||(a.direction=e>a.currentSlide?"next":"prev"),p&&1===a.pagingCount&&(a.direction=a.currentItem<e?"next":"prev"),!a.animating&&(a.canAdvance(e,o)||i)&&a.is(":visible")){if(p&&r){var l=$(a.vars.asNavFor).data("flexslider");if(a.atEnd=0===e||e===a.count-1,l.flexAnimate(e,!0,!1,!0,o),a.direction=a.currentItem<e?"next":"prev",l.direction=a.direction,Math.ceil((e+1)/a.visible)-1===a.currentSlide||0===e)return a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),!1;a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),e=Math.floor(e/a.visible)}if(a.animating=!0,a.animatingTo=e,t&&a.pause(),a.vars.before(a),a.syncExists&&!o&&m.sync("animate"),a.vars.controlNav&&m.controlNav.active(),u||a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),a.atEnd=0===e||e===a.last,a.vars.directionNav&&m.directionNav.update(),e===a.last&&(a.vars.end(a),a.vars.animationLoop||a.pause()),v)s?(a.slides.eq(a.currentSlide).css({opacity:0,zIndex:1}),a.slides.eq(e).css({opacity:1,zIndex:2}),a.wrapup(f)):(a.slides.eq(a.currentSlide).css({zIndex:1}).animate({opacity:0},a.vars.animationSpeed,a.vars.easing),a.slides.eq(e).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing,a.wrapup));else{var f=c?a.slides.filter(":first").height():a.computedW,g,h,S;u?(g=a.vars.itemMargin,S=(a.itemW+g)*a.move*a.animatingTo,h=S>a.limit&&1!==a.visible?a.limit:S):h=0===a.currentSlide&&e===a.count-1&&a.vars.animationLoop&&"next"!==a.direction?d?(a.count+a.cloneOffset)*f:0:a.currentSlide===a.last&&0===e&&a.vars.animationLoop&&"prev"!==a.direction?d?0:(a.count+1)*f:d?(a.count-1-e+a.cloneOffset)*f:(e+a.cloneOffset)*f,a.setProps(h,"",a.vars.animationSpeed),a.transitions?(a.vars.animationLoop&&a.atEnd||(a.animating=!1,a.currentSlide=a.animatingTo),a.container.unbind("webkitTransitionEnd transitionend"),a.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(a.ensureAnimationEnd),a.wrapup(f)}),clearTimeout(a.ensureAnimationEnd),a.ensureAnimationEnd=setTimeout(function(){a.wrapup(f)},a.vars.animationSpeed+100)):a.container.animate(a.args,a.vars.animationSpeed,a.vars.easing,function(){a.wrapup(f)})}a.vars.smoothHeight&&m.smoothHeight(a.vars.animationSpeed)}},a.wrapup=function(e){v||u||(0===a.currentSlide&&a.animatingTo===a.last&&a.vars.animationLoop?a.setProps(e,"jumpEnd"):a.currentSlide===a.last&&0===a.animatingTo&&a.vars.animationLoop&&a.setProps(e,"jumpStart")),a.animating=!1,a.currentSlide=a.animatingTo,a.vars.after(a)},a.animateSlides=function(){!a.animating&&f&&a.flexAnimate(a.getTarget("next"))},a.pause=function(){clearInterval(a.animatedSlides),a.animatedSlides=null,a.playing=!1,a.vars.pausePlay&&m.pausePlay.update("play"),a.syncExists&&m.sync("pause")},a.play=function(){a.playing&&clearInterval(a.animatedSlides),a.animatedSlides=a.animatedSlides||setInterval(a.animateSlides,a.vars.slideshowSpeed),a.started=a.playing=!0,a.vars.pausePlay&&m.pausePlay.update("pause"),a.syncExists&&m.sync("play")},a.stop=function(){a.pause(),a.stopped=!0},a.canAdvance=function(e,t){var n=p?a.pagingCount-1:a.last;return t?!0:p&&a.currentItem===a.count-1&&0===e&&"prev"===a.direction?!0:p&&0===a.currentItem&&e===a.pagingCount-1&&"next"!==a.direction?!1:e!==a.currentSlide||p?a.vars.animationLoop?!0:a.atEnd&&0===a.currentSlide&&e===n&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===n&&0===e&&"next"===a.direction?!1:!0:!1},a.getTarget=function(e){return a.direction=e,"next"===e?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1},a.setProps=function(e,t,n){var i=function(){var n=e?e:(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo,i=function(){if(u)return"setTouch"===t?e:d&&a.animatingTo===a.last?0:d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:n;switch(t){case"setTotal":return d?(a.count-1-a.currentSlide+a.cloneOffset)*e:(a.currentSlide+a.cloneOffset)*e;case"setTouch":return d?e:e;case"jumpEnd":return d?e:a.count*e;case"jumpStart":return d?a.count*e:e;default:return e}}();return-1*i+"px"}();a.transitions&&(i=c?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",n=void 0!==n?n/1e3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",n),a.container.css("transition-duration",n)),a.args[a.prop]=i,(a.transitions||void 0===n)&&a.container.css(a.args),a.container.css("transform",i)},a.setup=function(e){if(v)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(s?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+a.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):0==a.vars.fadeFirstSlide?a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).css({opacity:1}):a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing)),a.vars.smoothHeight&&m.smoothHeight();else{var t,i;"init"===e&&(a.viewport=$('<div class="'+n+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,d&&(i=$.makeArray(a.slides).reverse(),a.slides=$(i),a.container.empty().append(a.slides))),a.vars.animationLoop&&!u&&(a.cloneCount=2,a.cloneOffset=1,"init"!==e&&a.container.find(".clone").remove(),a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),a.newSlides=$(a.vars.selector,a),t=d?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset,c&&!u?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"}),a.doMath(),a.viewport.height(a.h),a.setProps(t*a.h,"init")},"init"===e?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(t*a.computedW,"init"),setTimeout(function(){a.doMath(),a.newSlides.css({width:a.computedW,"float":"left",display:"block"}),a.vars.smoothHeight&&m.smoothHeight()},"init"===e?100:0))}u||a.slides.removeClass(n+"active-slide").eq(a.currentSlide).addClass(n+"active-slide"),a.vars.init(a)},a.doMath=function(){var e=a.slides.first(),t=a.vars.itemMargin,n=a.vars.minItems,i=a.vars.maxItems;a.w=void 0===a.viewport?a.width():a.viewport.width(),a.h=e.height(),a.boxPadding=e.outerWidth()-e.width(),u?(a.itemT=a.vars.itemWidth+t,a.minW=n?n*a.itemT:a.w,a.maxW=i?i*a.itemT-t:a.w,a.itemW=a.minW>a.w?(a.w-t*(n-1))/n:a.maxW<a.w?(a.w-t*(i-1))/i:a.vars.itemWidth>a.w?a.w:a.vars.itemWidth,a.visible=Math.floor(a.w/a.itemW),a.move=a.vars.move>0&&a.vars.move<a.visible?a.vars.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:a.vars.itemWidth>a.w?a.itemW*(a.count-1)+t*(a.count-1):(a.itemW+t)*a.count-a.w-t):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1),a.computedW=a.itemW-a.boxPadding},a.update=function(e,t){a.doMath(),u||(e<a.currentSlide?a.currentSlide+=1:e<=a.currentSlide&&0!==e&&(a.currentSlide-=1),a.animatingTo=a.currentSlide),a.vars.controlNav&&!a.manualControls&&("add"===t&&!u||a.pagingCount>a.controlNav.length?m.controlNav.update("add"):("remove"===t&&!u||a.pagingCount<a.controlNav.length)&&(u&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),m.controlNav.update("remove",a.last))),a.vars.directionNav&&m.directionNav.update()},a.addSlide=function(e,t){var n=$(e);a.count+=1,a.last=a.count-1,c&&d?void 0!==t?a.slides.eq(a.count-t).after(n):a.container.prepend(n):void 0!==t?a.slides.eq(t).before(n):a.container.append(n),a.update(t,"add"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.added(a)},a.removeSlide=function(e){var t=isNaN(e)?a.slides.index($(e)):e;a.count-=1,a.last=a.count-1,isNaN(e)?$(e,a.slides).remove():c&&d?a.slides.eq(a.last).remove():a.slides.eq(e).remove(),a.doMath(),a.update(t,"remove"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.removed(a)},m.init()},$(window).blur(function(e){focused=!1}).focus(function(e){focused=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:75:"/bitrix/templates/aspro-scorp/vendor/jquery.validate.min.js?144741989222254";s:6:"source";s:59:"/bitrix/templates/aspro-scorp/vendor/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){/*return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())*/ /*customized!!!*/ var check = false,re=new RegExp((typeof(VALIDATE_DATE_MASK)!=='undefined'?VALIDATE_DATE_MASK:'^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$')),adata,gg,mm,aaaa,xdata;if(re.test(a)){adata=a.split('.');if(adata.length===1){adata=a.split('-');if(adata.length===1){adata=a.split(' ');if(adata.length===1){adata=a.split('/');if(adata.length===1){adata=a.split(':');}}}}gg=parseInt(adata[0],10);mm=parseInt(adata[1],10);aaaa=parseInt(adata[2],10);xdata=new Date(aaaa,mm-1,gg,12,0,0,0);if((xdata.getUTCFullYear()===aaaa)&&(xdata.getUTCMonth()===mm-1)&&(xdata.getUTCDate()===gg)){check = true;}else{check = false;}}else{check = false;}return this.optional(b)||check;},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/bitrix/templates/aspro-scorp/js/jquery.uniform.min.js?14474198928308";s:6:"source";s:54:"/bitrix/templates/aspro-scorp/js/jquery.uniform.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function s(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function a(e,t,n){s(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function r(e,t,n){n?e.addClass(t):e.removeClass(t)}function l(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),r(e,n.checkedClass,a)}function u(e,t,n){r(e,n.disabledClass,t.is(":disabled"))}function o(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function c(t,s,a){var i,r,l;return a||(a={}),a=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=e("<div />"),r=e("<span />"),s.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),s.wrapperClass&&i.addClass(s.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=n(t,"id"),s.useID&&l&&n(i,"id",s.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=o(t,i,a.divWrap),r=o(t,r,a.spanWrap),u(i,t,s),{div:i,span:r}}function d(t,n){var s;return n.wrapperClass?(s=e("<span />").addClass(n.wrapperClass),s=o(t,s,"wrap")):null}function f(){var t,n,s,a;return a="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+a+'">'),e("body").append(n),s=n.get(0),t=window.getComputedStyle?window.getComputedStyle(s,"").color:(s.currentStyle||s.style||{}).color,n.remove(),t.replace(/ /g,"")!==a}function p(t){return t?e("<span />").text(t).html():""}function m(){return navigator.cpuClass&&!navigator.product}function v(){return window.XMLHttpRequest!==void 0?!0:!1}function h(e){var t;return e[0].multiple?!0:(t=n(e,"size"),!t||1>=t?!1:!0)}function C(){return!1}function w(e,t){var n="none";s(e,t,{"selectstart dragstart mousedown":C}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function b(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function y(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),y(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,x=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var r,l,o,d,f;return l=t.submitDefaultHtml,e.is(":reset")&&(l=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||l}:function(){return p(n(e,"value"))||l},o=c(e,t,{divClass:t.buttonClass,spanHtml:d()}),r=o.div,a(e,r,t),f=!1,s(r,t,{"click touchend":function(){var t,s,a,i;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),s=e[0].dispatchEvent(t),e.is("a")&&s&&(a=n(e,"target"),i=n(e,"href"),a&&"_self"!==a?window.open(i,a):document.location.href=i)):e.click(),f=!1)}}),w(r,t),{remove:function(){return r.after(e),r.remove(),e.unbind(t.eventNamespace),e},update:function(){i(r,t),u(r,e,t),e.detach(),o.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,r,o;return n=c(e,t,{divClass:t.checkboxClass}),r=n.div,o=n.span,a(e,r,t),s(e,t,{"click touchend":function(){l(o,e,t)}}),l(o,e,t),{remove:k(e,t),update:function(){i(r,t),o.removeClass(t.checkedClass),l(o,e,t),u(r,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,r){function l(){b(t,p,r)}var d,f,p,v;return d=c(t,r,{divClass:r.fileClass,spanClass:r.fileButtonClass,spanHtml:r.fileButtonHtml,spanWrap:"after"}),f=d.div,v=d.span,p=e("<span />").html(r.fileDefaultHtml),p.addClass(r.filenameClass),p=o(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),a(t,f,r),l(),m()?s(t,r,{click:function(){t.trigger("change"),setTimeout(l,0)}}):s(t,r,{change:l}),w(p,r),w(v,r),{remove:function(){return p.remove(),v.remove(),t.unwrap().unbind(r.eventNamespace)},update:function(){i(f,r),b(t,p,r),u(f,t,r)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),s=" color date datetime datetime-local email month number password search tel text time url week ";return s.indexOf(t)>=0}return!1},apply:function(e,t){var s,i;return s=n(e,"type"),e.addClass(t.inputClass),i=d(e,t),a(e,e,t),t.inputAddTypeAsClass&&e.addClass(s),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(s),i&&e.unwrap()},update:C}}},{match:function(e){return e.is(":radio")},apply:function(t,r){var o,d,f;return o=c(t,r,{divClass:r.radioClass}),d=o.div,f=o.span,a(t,d,r),s(t,r,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),l(f,t,r),{remove:k(t,r),update:function(){i(d,r),l(f,t,r),u(d,t,r)}}}},{match:function(e){return e.is("select")&&!h(e)?!0:!1},apply:function(t,n){var r,l,o,d;return n.selectAutoWidth&&g(t,function(){d=t.width()}),r=c(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),l=r.div,o=r.span,n.selectAutoWidth?g(t,function(){y(e([o[0],l[0]]),{display:"block"},function(){var e;e=o.outerWidth()-o.width(),l.width(d+e),o.width(d)})}):l.addClass("fixedWidth"),a(t,l,n),s(t,n,{change:function(){o.html(t.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();o.html()!==e&&t.trigger("change")},keyup:function(){o.html(t.find(":selected").html())}}),w(o,n),{remove:function(){return o.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(i(l,n),o.html(t.find(":selected").html()),u(l,t,n))}}}},{match:function(e){return e.is("select")&&h(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:C}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:C}}}];m()&&!v()&&(H=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(H=!1)),H?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,s,a,i=e(this);if(i.data("uniformed"))return e.uniform.update(i),void 0;for(n=0;A.length>n;n+=1)if(s=A[n],s.match(i,t))return a=s.apply(i,t),i.data("uniformed",a),e.uniform.elements.push(i.get(0)),void 0})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,s=e(this);n=s.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),s.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:62:"/bitrix/templates/aspro-scorp/js/jqModal.min.js?14948558723389";s:6:"source";s:43:"/bitrix/templates/aspro-scorp/js/jqModal.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jqModal - Minimalist Modaling with jQuery
 *
 * Copyright (c) 2007-2016 Brice Burgess @IceburgBrice
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * $Version: 1.4.2 (2016.04.16 +r27)
 * Requires: jQuery 1.2.3+
 */

!function(n){"object"==typeof module&&"object"==typeof module.exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){n.fn.jqm=function(o){return this.each(function(){var t=n(this).data("jqm")||n.extend({ID:m++},n.jqm.params),e=n.extend(t,o);n(this).data("jqm",e).addClass("jqm-init")[0]._jqmID=e.ID,n(this).jqmAddTrigger(e.trigger)})},n.fn.jqmAddTrigger=function(t){return t?this.each(function(){a(n(this),"jqmShow",t)||o("jqmAddTrigger must be called on initialized modals")}):void 0},n.fn.jqmAddClose=function(t){return t?this.each(function(){a(n(this),"jqmHide",t)||o("jqmAddClose must be called on initialized modals")}):void 0},n.fn.jqmShow=function(o){return this.each(function(){this._jqmShown||t(n(this),o)})},n.fn.jqmHide=function(o){return this.each(function(){this._jqmShown&&e(n(this),o)})};var o=function(n){window.console&&window.console.error&&window.console.error(n)},t=function(o,t){t=t||window.event;var e=o.data("jqm"),i=parseInt(o.css("z-index"),10)||3e3,s=n("<div></div>").addClass(e.overlayClass).css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":i-1,opacity:e.overlay/100}),a={w:o,c:e,o:s,t:t};if(o.css("z-index",i),e.ajax){var d=e.target||o,c=e.ajax;d="string"==typeof d?n(d,o):n(d),"@"===c.substr(0,1)&&(c=n(t).attr(c.substring(1))),d.load(c,function(){e.onLoad&&e.onLoad.call(this,a),l.call(o,e,d)}),e.ajaxText&&d.html(e.ajaxText),r(a)}else r(a)},e=function(n,o){o=o||window.event;var t=n.data("jqm"),e={w:n,c:t,o:n.data("jqmv"),t:o};d(e)},i=function(o){return o.c.overlay>0&&o.o.prependTo("body"),o.w.show(),n.jqm.focusFunc(o.w,!0),!0},s=function(n){return n.w.hide()&&n.o&&n.o.remove(),!0},a=function(o,t,e){var i=o.data("jqm");return i?n(e).each(function(){this[t]=this[t]||[],n.inArray(i.ID,this[t])<0&&(this[t].push(i.ID),n(this).click(function(n){return n.isDefaultPrevented()||o[t](this),!1}))}):void 0},r=function(o){var t=o.w,e=o.o,i=o.c;i.onShow(o)!==!1&&(t[0]._jqmShown=!0,i.modal?(j[0]||c("bind"),j.push(t[0])):t.jqmAddClose(e),l.call(t,i),i.toTop&&e&&t.before('<span id="jqmP'+i.ID+'"></span>').insertAfter(e),t.data("jqmv",e),t.unbind("keydown",n.jqm.closeOnEscFunc),i.closeOnEsc&&t.attr("tabindex",0).bind("keydown",n.jqm.closeOnEscFunc).focus())},d=function(o){var t=o.w,e=o.o,i=o.c;i.onHide(o)!==!1&&(t[0]._jqmShown=!1,i.modal&&(j.pop(),j[0]||c("unbind")),i.toTop&&e&&n("#jqmP"+i.ID).after(t).remove())},c=function(o){n(document)[o]("keypress keydown mousedown",u)},u=function(o){var t=n(o.target).data("jqm")||n(o.target).parents(".jqm-init:first").data("jqm"),e=j[j.length-1];return t&&t.ID===e._jqmID?!0:n.jqm.focusFunc(e,o)},l=function(o,t){t=t||this,o.closeClass&&this.jqmAddClose(n("."+o.closeClass,t))},m=0,j=[];return n.jqm={params:{overlay:50,overlayClass:"jqmOverlay",closeClass:"jqmClose",closeOnEsc:!1,trigger:".jqModal",ajax:!1,target:!1,ajaxText:"",modal:!1,toTop:!1,onShow:i,onHide:s,onLoad:!1},focusFunc:function(o,t){return t&&n(":input:visible:first",o).focus(),!1},closeOnEscFunc:function(o){return 27===o.keyCode?(n(this).jqmHide(),!1):void 0}},n.jqm});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:74:"/bitrix/templates/aspro-scorp/js/detectmobilebrowser.min.js?14948558722056";s:6:"source";s:55:"/bitrix/templates/aspro-scorp/js/detectmobilebrowser.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(i){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/bitrix/templates/aspro-scorp/js/general.min.js?150279864341061";s:6:"source";s:43:"/bitrix/templates/aspro-scorp/js/general.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function pauseMainBanner(){$(".banners-big .flexslider").flexslider("pause")}function playMainBanner(){$(".banners-big .flexslider").flexslider("play")}function startMainBannerSlideVideo(e){var t=e.attr("data-slide_index"),a=e.closest(".items").find('.item[data-slide_index="'+t+'"]'),n=e.attr("data-video_source");if(n){a.addClass("loading"),pauseMainBanner();var o=e.attr("data-video_src"),i=e.attr("data-video_disable_sound"),s=1==i,r=e.attr("data-video_loop"),l=1==r,d=e.attr("data-video_cover"),c=1==d&&!isMobile,p=(e.attr("data-video_under_text"),e.attr("data-video_player")),u="YOUTUBE"===p,m="VIMEO"===p,f="RUTUBE"===p,h="HTML5"===p;if(o&&!e.find(".video").length){var g=function(){a.each(function(e,a){var n=$(a),i=getRandomInt(100,1e3),r=n.hasClass("clone");u?n.prepend('<iframe id="player_'+i+'" class="video'+(c?" cover":"")+'" src="'+o+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'):m?n.prepend('<iframe id="player_'+i+'" class="video'+(c?" cover":"")+'" src="'+o+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'):f?(o=o+"&playerid="+i,n.prepend('<iframe id="player_'+i+'" class="video'+(c?" cover":"")+'" src="'+o+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')):h&&n.prepend('<video id="player_'+i+'" class="video'+(c?" cover":"")+'"'+(l?" loop ":"")+(s||r?" muted ":"")+'><source src="'+o+'" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\' /><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video</p></iframe>'),"undefined"!=typeof players&&players&&(players[i]={id:"player_"+i,mute:s||r,loop:l,cover:c,videoPlayer:p,slideIndex:t,clone:r,playing:!1},u?window[players[i].id]=new YT.Player(players[i].id,{events:{onReady:onYoutubePlayerReady,onStateChange:onYoutubePlayerStateChange}}):m?(window[players[i].id]=new Vimeo.Player(document.getElementById(players[i].id),{autopause:!1,byline:!1,loop:!1,title:!1}),window[players[i].id].on("loaded",onVimeoPlayerReady),window[players[i].id].on("play",onVimeoPlayerStateChange),window[players[i].id].on("pause",onVimeoPlayerStateChange),window[players[i].id].on("ended",onVimeoPlayerStateChange)):f?document.getElementById(players[i].id).onload=function(e){var t=this.id.replace("player_","");players[t].contentWindow=this.contentWindow,onRutubePlayerReady(t)}:h&&(document.getElementById(players[i].id).addEventListener("loadeddata",onHtml5PlayerReady),document.getElementById(players[i].id).addEventListener("play",onHtml5PlayerStateChange),document.getElementById(players[i].id).addEventListener("pause",onHtml5PlayerStateChange),document.getElementById(players[i].id).addEventListener("ended",onHtml5PlayerStateChange)))})};if(h)g();else{var y="",v="";if("undefined"==typeof window.YoutubePlayerScriptLoaded&&(window.YoutubePlayerScriptLoaded=!1),"undefined"==typeof window.VimeoPlayerScriptLoaded&&(window.VimeoPlayerScriptLoaded=!1),"undefined"==typeof window.RutubePlayerListnersAdded&&(window.RutubePlayerListnersAdded=!1),u){if(y="YT",v="Player",!window.YoutubePlayerScriptLoaded){var w=document.createElement("script");w.src="https://www.youtube.com/iframe_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(w,b),window.YoutubePlayerScriptLoaded=!0}}else if(m){if(y="Vimeo",!window.VimeoPlayerScriptLoaded){var w=document.createElement("script");w.src="https://player.vimeo.com/api/player.js",(document.head||document.documentElement).appendChild(w),window.VimeoPlayerScriptLoaded=!0}}else f&&(window.RutubePlayerListnersAdded||window.addEventListener("message",function(e){if(-1!==e.origin.indexOf("rutube.ru")){var t=JSON.parse(e.data);if("object"==typeof t&&t&&"undefined"!=typeof t.type&&t.type){var a=!1;for(var n in players)if("undefined"!=typeof players[n].contentWindow&&players[n].contentWindow==e.source){a=n;break}if(a)switch(t.type){case"player:changeState":onRutubePlayerStateChange(a,t.data.state);break;case"player:currentTime":onRutubePlayerCurrentTime(a,t.data.time)}}}}));if(y.length)if("object"==typeof window[y])(!v.length||v.length&&"function"==typeof window[y][v])&&g();else var C=setInterval(function(){"object"==typeof window[y]&&(!v.length||v.length&&"function"==typeof window[y][v])&&(clearInterval(C),g())},50);else g()}}}}function onYoutubePlayerReady(e){var t=e.target.a.id.replace("player_","");if(t){var a=players[t].mute,n=players[t].cover,o=players[t].clone;(a||o)&&window[players[t].id].mute(),n&&CoverPlayer(),o?setTimeout(function(){e.target.pauseVideo()},100):(pauseMainBanner(),e.target.playVideo());var i=$("#player_"+t).closest(".item");i.addClass("started"),i.removeClass("loading")}}function onYoutubePlayerStateChange(e){var t=e.target.a.id.replace("player_","");if(t){var a=players[t].clone,n=players[t].loop,o=players[t].slideIndex;if(!a)if(e.data===YT.PlayerState.PLAYING)players[t].playing=!0,pauseMainBanner();else if(e.data===YT.PlayerState.PAUSED){players[t].playing=!1;var i=Math.floor(10*window[players[t].id].getCurrentTime())/10;window[players[t].id].seekTo(i,!0);for(var s in players)players[s].slideIndex==o&&players[s].clone&&(window[players[s].id].pauseVideo(),window[players[s].id].seekTo(i,!0))}else e.data===YT.PlayerState.ENDED&&(players[t].playing=!1,n?e.target.playVideo():playMainBanner())}}function onVimeoPlayerReady(e){var t=this.element.id.replace("player_","");if(t){var a=players[t].mute,n=players[t].cover,o=players[t].clone;(a||o)&&window[players[t].id].setVolume(0),n&&CoverPlayer(),o?setTimeout(function(){window[players[t].id].pause()},100):(pauseMainBanner(),window[players[t].id].play());var i=$("#player_"+t).closest(".item");i.addClass("started"),i.removeClass("loading")}}function onVimeoPlayerStateChange(e){var t=this.element.id.replace("player_","");if(t){var a=(players[t].cover,players[t].clone),n=players[t].loop,o=players[t].slideIndex;a||window[players[t].id].getPaused().then(function(e){e?(players[t].playing=!1,window[players[t].id].getCurrentTime().then(function(e){var a=Math.floor(10*e)/10;window[players[t].id].setCurrentTime(a).then(function(e){for(var t in players)players[t].slideIndex==o&&players[t].clone&&(window[players[t].id].pause(),window[players[t].id].setCurrentTime(a).then(function(e){}))})})):window[players[t].id].getEnded().then(function(e){e?(players[t].playing=!1,n?window[players[t].id].play():playMainBanner()):(players[t].playing=!0,pauseMainBanner())})})}}function onRutubePlayerReady(e){if(e){var t=players[e].mute,a=players[e].cover,n=players[e].clone,o=document.getElementById(players[e].id);(t||n)&&o.contentWindow.postMessage(JSON.stringify({type:"player:mute",data:{}}),"*"),a&&CoverPlayer(),n?setTimeout(function(){o.contentWindow.postMessage(JSON.stringify({type:"player:pause",data:{}}),"*")},100):(pauseMainBanner(),o.contentWindow.postMessage(JSON.stringify({type:"player:play",data:{}}),"*"));var i=$("#player_"+e).closest(".item");i.addClass("started"),i.removeClass("loading")}}function onRutubePlayerCurrentTime(e,t){e&&(players[e].time=t)}function onRutubePlayerStateChange(e,t){if(e){var a=players[e].clone,n=players[e].loop,o=players[e].slideIndex,i=document.getElementById(players[e].id);if(!a)if("playing"===t)players[e].playing=!0,pauseMainBanner();else if("paused"===t){players[e].playing=!1;var s=Math.floor(10*players[e].time)/10;i.contentWindow.postMessage(JSON.stringify({type:"player:setCurrentTime",data:{time:s}}),"*");for(var r in players)players[r].slideIndex==o&&players[r].clone&&(document.getElementById(players[r].id).contentWindow.postMessage(JSON.stringify({type:"player:pause",data:{}}),"*"),document.getElementById(players[r].id).contentWindow.postMessage(JSON.stringify({type:"player:setCurrentTime",data:{time:s}}),"*"))}else"stopped"===t&&(players[e].playing=!1,n?i.contentWindow.postMessage(JSON.stringify({type:"player:play",data:{}}),"*"):playMainBanner())}}function onHtml5PlayerReady(e){var t=e.target.id.replace("player_","");if(t){var a=players[t].mute,n=players[t].cover,o=players[t].clone;(a||o)&&$("#"+players[t].id).prop("muted",!0),n&&CoverPlayer(),o?e.target.pause():(pauseMainBanner(),e.target.play());var i=$("#player_"+t).closest(".item");i.addClass("started"),i.removeClass("loading")}}function onHtml5PlayerStateChange(e){var t=e.target.id.replace("player_","");if(t){var a=(players[t].cover,players[t].clone),n=players[t].loop,o=players[t].slideIndex;if(!a)if(e.target.paused){players[t].playing=!1;var i=Math.floor(10*e.target.currentTime)/10;e.target.currentTime=i;for(var s in players)players[s].slideIndex==o&&players[s].clone&&(document.getElementById(players[s].id).pause(),document.getElementById(players[s].id).currentTime=i)}else e.target.ended?(players[t].playing=!1,n?e.target.play():playMainBanner()):(players[t].playing=!0,pauseMainBanner())}}function onLoadjqm(e){var t=$(e.t).data("name"),a=($(window).height()>e.w.height()?Math.floor(($(window).height()-e.w.height())/2):0)+"px";$.each($(e.t).get(0).attributes,function(t,a){if(/^data\-autoload\-(.+)$/.test(a.nodeName)){var n=a.nodeName.match(/^data\-autoload\-(.+)$/)[1],o=$('input[name="'+n.toUpperCase()+'"]');o.val($(e.t).data("autoload-"+n)).attr("readonly","readonly"),o.attr("title",o.val())}}),$(e.t).data("autohide")&&$(e.w).data("autohide",$(e.t).data("autohide")),"order_product"==t&&$(e.t).data("product")&&$('input[name="PRODUCT"]').val($(e.t).data("product")).attr("readonly","readonly").attr("title",$('input[name="PRODUCT"]').val()),"question"==t&&$(e.t).data("product")&&$('input[name="NEED_PRODUCT"]').val($(e.t).data("product")).attr("readonly","readonly").attr("title",$('input[name="NEED_PRODUCT"]').val()),e.w.addClass("show").css({"margin-left":"-"+Math.floor(e.w.width()/2)+"px",top:a,opacity:1})}function onHide(hash){$(hash.w).data("autohide")&&eval($(hash.w).data("autohide")),hash.w.css("opacity",0).removeClass("show"),hash.o.remove(),setTimeout(function(){hash.w.empty()},200)}var getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e))+e},number_format=function(e,t,a,n){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var o=isFinite(+e)?+e:0,i=isFinite(+t)?Math.abs(t):0,s="undefined"==typeof n?",":n,r="undefined"==typeof a?".":a,l="",d=function(e,t){var a=Math.pow(10,t);return""+(Math.round(e*a)/a).toFixed(t)};return l=(i?d(o,i):""+Math.round(o)).split("."),l[0].length>3&&(l[0]=l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,s)),(l[1]||"").length<i&&(l[1]=l[1]||"",l[1]+=new Array(i-l[1].length+1).join("0")),l.join(r)},CheckTopMenuDotted=function(){var e=$("nav.mega-menu"),t=e.find("td.js-dropdown");if("none"==e.parents(".collapse").css("display"))return!1;for(var a=e.closest("div").actual("width"),n=e.find("table").actual("outerWidth"),o=!1;n>a&&(menuItemOldSave=e.find("td").not(".nosave").last(),menuItemOldSave.length);)t.show(),menuItemNewSave='<li class="'+(menuItemOldSave.hasClass("dropdown")?"dropdown-submenu ":"")+(menuItemOldSave.hasClass("active")?"active ":"")+'" data-hidewidth="'+n+'">'+menuItemOldSave.find(".wrap").html()+"</li>",menuItemOldSave.remove(),t.find("> .wrap > .dropdown-menu").prepend(menuItemNewSave),n=e.find("table").actual("outerWidth"),o=!0;if(!o)do{var i=t.find(">.wrap>.dropdown-menu>li").length;if(!i){t.hide();break}menuItemOldSave=t.find(">.wrap>.dropdown-menu>li").first();var s=menuItemOldSave.attr("data-hidewidth");if(s>a)break;if(menuItemNewSave='<td class="'+(menuItemOldSave.hasClass("dropdown-submenu")?"dropdown ":"")+(menuItemOldSave.hasClass("active")?"active ":"")+'" data-hidewidth="'+a+'"><div class="wrap">'+menuItemOldSave.html()+"</div></td>",menuItemOldSave.remove(),$(menuItemNewSave).insertBefore(e.find("td.js-dropdown")),!i){t.hide();break}n=e.find("table").actual("outerWidth")}while(a>=n);return e.find("td").css("visibility","visible"),!1},CheckTopVisibleMenu=function(e){var t=$(".dropdown-menu:visible").last();if(t.length){t.find("a").css("white-space",""),t.css("left",""),t.css("right",""),t.removeClass("toright");var a=t.offset().left;if("undefined"!=typeof a){var n=t.parents(".mega-menu"),o=n.outerWidth(),i=n.offset().left,s=i+o,r=t.parents(".toright").length>0,l=t.parents(".dropdown-menu"),d=l.length>0;if(d)var c=l.first().outerWidth(),p=l.first().offset().left,u=c+p;u+t.outerWidth()>s&&t.find("a").css("white-space","normal");var m=t.outerWidth(),f=a+m;if(f>s||r){var h=0;if(h=s-f,d||r)t.css("left","auto"),t.css("right","100%"),t.addClass("toright");else{var g=parseInt(t.css("left"));t.css("left",g+h+"px")}}}}},CheckPopupTop=function(){var e=$(".jqmWindow.show");if(e.length){var t=$(window).height(),a=parseInt(e.css("top")),n=e.height();t>=n?a=(t-n)/2:(documentScrollTop>documentScrollTopLast?a-=documentScrollTop-documentScrollTopLast:documentScrollTop<documentScrollTopLast&&(a+=documentScrollTopLast-documentScrollTop),t>a+n?a=t-n:a>0&&(a=0)),e.css("top",a+"px")}},CheckMainBannerSliderVText=function(e){if(e.parents(".banners-big").length){var t=e.height();e.find(".item").each(function(){var e=$(this).find(".text .inner");if(e.length){var a=e.actual("height"),n=a>=t?0:Math.floor((t-a)/2);e.css("padding-top",n+"px")}})}},CheckStickyFooter=function(){$(window).resize(function(){try{var e=$("footer").outerHeight();ignoreResize.push(!0),$("footer").css("margin-top","-"+e+"px"),$(".body").css("margin-bottom","-"+e+"px"),$(".main").css("padding-bottom",e+25+"px"),ignoreResize.pop()}catch(t){}})},getGridSize=function(e){var t=parseInt($(".body_media").css("top"));return 2==t?e[0]:1==t?e[1]:e[2]},CheckFlexSlider=function(){$(".flexslider:not(.thmb)").each(function(){var e=$(this);e.resize();var t=e.data("flexslider").vars.counts;if("undefined"!=typeof t){var a=getGridSize(t),n=a!=e.data("flexslider").vars.minItems||a!=e.data("flexslider").vars.maxItems||a!=e.data("flexslider").vars.move;n&&(e.data("flexslider").vars.minItems=a,e.data("flexslider").vars.maxItems=a,e.data("flexslider").vars.move=a,e.flexslider(0),e.resize(),e.resize())}})},CheckHeaderFixed=function(){var e=$("header.canfixed");if(e.length){var t=e.find(".logo_and_menu-row");if(t.length){var a=!1,n=!0,o=53,i=t.actual("outerHeight"),s=i-o,r=$(".btn.btn-responsive-nav");$(window).scroll(function(){var l=$("#panel:visible").outerHeight(),d=$(window).scrollTop();if(a||(i=t.actual("outerHeight"),s=i-o),n=!r.is(":visible")&&!$(".dropdown-menu:visible").length,a){if((a||!n)&&(s+l>=d||!n)){a=!1,e.stop(!0,!0).css("top",""),e.removeClass("fixed");var c=e.next();c.length&&c.css("margin-top",""),CheckTopMenuDotted()}}else if(d>i+l&&n){a=!0;var c=e.next();if(c.length)var p=parseInt(c.css("margin-top"));e.css("top","-"+i+"px"),e.addClass("fixed"),c.length&&c.css("margin-top",i+p+"px"),e.delay(0).animate({top:"0"},300)}})}}},CheckObjectsSizes=function(){$(".container iframe,.container object,.container video").each(function(){var e=$(this).attr("height"),t=$(this).attr("width");e&&t&&$(this).css("height",$(this).outerWidth()*e/t)})},InitScrollToTop=function(){"NONE"!==arScorpOptions.THEME.SCROLLTOTOP_TYPE&&(scrollToTopAnimateClassIn=-1!==arScorpOptions.THEME.SCROLLTOTOP_TYPE.indexOf("ROUND")?"rotateIn":"rubberBand",scrollToTopAnimateClassOut=-1!==arScorpOptions.THEME.SCROLLTOTOP_TYPE.indexOf("ROUND")?"rotateOut":"flipOutX",$("body").append($("<a />").addClass("scroll-to-top "+arScorpOptions.THEME.SCROLLTOTOP_TYPE+" "+arScorpOptions.THEME.SCROLLTOTOP_POSITION).attr({href:"#",id:"scrollToTop"})),$scrolltotop=$("#scrollToTop"),$scrolltotop.click(function(e){return e.preventDefault(),$("body, html").animate({scrollTop:0},500),!1}))},CheckScrollToTop=function(){if($scrolltotop.length){documentScrollTop>150?($scrolltotop.stop(!0,!0).addClass("visible").addClass("animated"),scrollToTopAnimateClassOut&&$scrolltotop.removeClass(scrollToTopAnimateClassOut),scrollToTopAnimateClassIn&&$scrolltotop.addClass(scrollToTopAnimateClassIn)):($scrolltotop.stop(!0,!0).removeClass("visible"),scrollToTopAnimateClassIn&&$scrolltotop.removeClass(scrollToTopAnimateClassIn),scrollToTopAnimateClassOut&&$scrolltotop.addClass(scrollToTopAnimateClassOut));var e=23,t=$(window).scrollTop(),a=$(window).height(),n=$("footer").offset().top;t+a>n?$scrolltotop.css("bottom",e+t+a-n):parseInt($scrolltotop.css("bottom"))>e&&$scrolltotop.css("bottom",e)}},CoverPlayer=function(){var e=$(".video.cover");if(e.length){var t=$(".banners-big").height(),a=($(".banners-big").width(),$(window).width()),n=9*a/16;e.css({height:n+"px","margin-top":(t-n)/2+"px"})}},waitingExists=function(e,t,a){"undefined"!=typeof a&&e.length&&t>0&&(t=parseInt(t),t=0>t?0:t,$(e).length?a():setTimeout(function(){waitingExists(e,t,a)},t))},waitingNotExists=function(e,t,a,n){"undefined"!=typeof n&&e.length&&t.length&&a>0&&(a=parseInt(a),a=0>a?0:a,setTimeout(function(){e.length&&!$(t).length&&n()},a))};$.fn.equalizeHeights=function(e){for(var t=this.map(function(t,a){return $(a).css("height",""),1==e?$(a).actual("outerHeight"):$(a).actual("height")}).get(),a=0,n=t.length;n>a;++a)t[a]%2&&--t[a];return this.height(Math.max.apply(this,t))},$.fn.sliceHeight=function(e){function t(t){if(t.each(function(){$(this).css("line-height",""),$(this).css("height","")}),"undefined"==typeof e.autoslicecount||e.autoslicecount!==!1){var a=t.first().hasClass("item")?t.first().outerWidth():t.first().parents(".item").outerWidth(),n=t.first().parents(".items").outerWidth();n||(n=t.first().parents(".row").outerWidth()),n&&a&&(e.slice=Math.floor(n/a))}if(e.slice)for(var o=0;o<t.length;o+=e.slice)$(t.slice(o,o+e.slice)).equalizeHeights(e.outer);if(e.lineheight){var i=parseInt(e.lineheight);isNaN(i)&&(i=0),t.each(function(){$(this).css("line-height",$(this).actual("height")+i+"px")})}}var e=$.extend({slice:null,outer:!1,lineheight:!1,autoslicecount:!0},e),a=$(this);t(a),BX.addCustomEvent("onWindowResize",function(e){ignoreResize.push(!0),t(a),ignoreResize.pop()})},$.fn.jqmEx=function(){$(this).each(function(){var e=$(this),t=e.data("name");if(t.length){var a=arScorpOptions.SITE_DIR+"ajax/form.php",n="",o="",i={};$.each(e.get(0).attributes,function(t,a){var s=a.nodeName,r=e.attr(s);if(o+="["+s+'="'+r+'"]',i[s]=r,/^data\-param\-(.+)$/.test(s)){var l=s.match(/^data\-param\-(.+)$/)[1];n+=l+"="+r+"&"}});var s=JSON.stringify(i),r=encodeURIComponent(s);a+="?"+n+"data-trigger="+r,$("."+t+'_frame[data-trigger="'+r+'"]').length||"disabled"!=e.attr("disabled")&&($("body").find("."+t+'_frame[data-trigger="'+r+'"]').remove(),$("body").append('<div class="'+t+'_frame jqmWindow" style="width:500px" data-trigger="'+r+'"></div>'),$("."+t+'_frame[data-trigger="'+r+'"]').jqm({trigger:o,onLoad:function(e){onLoadjqm(e)},onHide:function(e){onHide(e)},ajax:a}))}})};var InitFlexSlider=function(){$(".flexslider:not(.thmb):not(.flexslider-init)").each(function(){var e,t=$(this),a={animationLoop:!1,controlNav:!1,directionNav:!0,animation:"slide"},n=$.extend({},a,e,t.data("plugin-options"));"undefined"!=typeof n.counts&&"vertical"!==n.direction&&(n.maxItems=getGridSize(n.counts),n.minItems=getGridSize(n.counts),n.move=getGridSize(n.counts),n.itemWidth=200),n.after=n.start=function(e){var t={slider:e};BX.onCustomEvent("onSlide",[t])},n.end=function(e){var t={slider:e};BX.onCustomEvent("onSlideEnd",[t])},t.flexslider(n).addClass("flexslider-init"),n.controlNav&&t.addClass("flexslider-control-nav"),n.directionNav&&t.addClass("flexslider-direction-nav")})},setBasketItemsClasses=function(){if("undefined"!=typeof arBasketItems&&Object.keys(arBasketItems).length)for(var e in arBasketItems)$("[data-item]").each(function(){$(this).data("item").ID==e&&$(this).find(".buy_block").addClass("in")})},Summ=function(e,t,a){0>=t&&(t=1);var n=number_format(t*a,0,"."," "),o=0;e.closest(".items").find(".item").each(function(){var e=$(this),t=parseFloat(e.find("input[name=PRICE]").val()),a=parseFloat(e.find("input.count").val());0>=a&&(a=1),isNaN(t)||isNaN(a)||(o+=a*t)}),o=number_format(parseFloat(o),0,"."," "),e.closest(".item").find(".summ .price_val").text(n),e.closest(".basket").find(".foot .total>span").text(o)},timerBasketUpdate=!1,BasketCounter=function(e){var t=e.hasClass("minus"),a=e.hasClass("plus"),n=e.hasClass("count"),o=e.closest(".buy_block"),i=e.closest(".counter").find("input.count"),s=parseFloat($.trim(i.val())),r=parseFloat(o.find("input[name=PRICE]").val()),l=e.closest(".basket").length?!0:!1;if(t){var d=s-1;0>=d&&(d=1),i.val(d),l&&(Summ(e,d,r),timerBasketUpdate&&(clearTimeout(timerBasketUpdate),timerBasketUpdate=!1),timerBasketUpdate=setTimeout(function(){BasketUpdate(e,d),timerBasketUpdate=!1},700))}else if(a){var d=s+1,c=Math.pow(10,parseInt(i.attr("maxlength")))-1;d>c&&(d=c),i.val(d),l&&(Summ(e,d,r),timerBasketUpdate&&(clearTimeout(timerBasketUpdate),timerBasketUpdate=!1),timerBasketUpdate=setTimeout(function(){BasketUpdate(e,d),timerBasketUpdate=!1},700))}else if(n){var d=s;(0>=d||isNaN(d))&&(d=1),e.val(d),l&&BasketUpdate(e,d)}var p=$.trim($("input[name=getPageUri]").val());p||e.closest(".basket.fly").length||o.find(".to_cart").data("quantity",d)},BasketUpdate=function(e,t){var a=e.closest("[data-item]").data("item"),a="object"==typeof arBasketItems&&"object"==typeof arBasketItems[a.ID]?arBasketItems[a.ID]:a,n=e.closest(".buy_block"),o=$(".basket.fly").length?$(".basket.fly .items_wrap").scrollTop():$(".basket_top:visible").length?$(".basket_top .items:visible").scrollTop():"";"undefined"!=typeof a&&!isNaN(a.ID)&&a.ID>0&&!n.hasClass("loading")&&$.ajax({url:arScorpOptions.SITE_DIR+"ajax/basket_items.php",data:{itemData:a,quantity:t},beforeSend:function(){n.addClass("loading")},complete:function(){n.removeClass("loading")},success:function(e){"object"==typeof e&&(arBasketItems=e);var t=$.trim($("input[name=getPageUri]").val());"undefined"!=typeof arScorpOptions.THEME.ORDER_BASKET_VIEW&&"HEADER"===arScorpOptions.THEME.ORDER_BASKET_VIEW&&$(".basket_top").length&&$.ajax({url:arScorpOptions.SITE_DIR+"ajax/basket_items.php",type:"POST",beforeSend:function(){n.addClass("loading")},complete:function(){n.removeClass("loading")},success:function(e){n.removeClass("in"),$(".ajax_basket").html(e),$(".basket_top .items").scrollTop(o),t||(setTimeout(function(){$(".basket_top .dropdown").addClass("expanded")},basketShowDelay),setTimeout(function(){$(".basket_top .dropdown").removeClass("expanded")},basketHideDelay))}}),"undefined"!=typeof arScorpOptions.THEME.ORDER_BASKET_VIEW&&"FLY"===arScorpOptions.THEME.ORDER_BASKET_VIEW&&$(".basket.fly").length&&$.ajax({url:arScorpOptions.SITE_DIR+"ajax/basket_items.php",type:"POST",beforeSend:function(){n.addClass("loading")},complete:function(){n.removeClass("loading")},success:function(e){$(".ajax_basket").html(e),$(".basket.fly .items_wrap").scrollTop(o)}}),t&&$.ajax({url:t,type:"POST",beforeSend:function(){n.addClass("loading")},complete:function(){n.removeClass("loading")},success:function(e){$(".basket.default").length&&$(".basket.default").html(e)}})}})},scrollToTopAnimateClassIn=!1,scrollToTopAnimateClassOut=!1,players={},isMobile=jQuery.browser.mobile;isMobile&&(document.documentElement.className+=" mobile");var $body={},$scrolltotop={};$(document).ready(function(){$body=$("body"),InitScrollToTop(),CheckStickyFooter(),jQuery.browser.safari?setTimeout(function(){$(window).resize(),setTimeout(function(){CheckHeaderFixed(),setTimeout(function(){$(window).scroll()},50)},50)},350):(CheckTopMenuDotted(),CheckHeaderFixed(),setTimeout(function(){$(window).resize()},350),$(window).scroll()),setBasketItemsClasses(),$(".blink img").blink(),waitingNotExists("#bx-composite-banner .bx-composite-btn","#footer .col-sm-3.hidden-md.hidden-lg #bx-composite-banner .bx-composite-btn",500,function(){$("#footer .col-sm-3.hidden-md.hidden-lg #bx-composite-banner").html($("#bx-composite-banner .bx-composite-btn").parent().html())}),"Y"===arScorpOptions.THEME.USE_DEBUG_GOALS?$.cookie("_ym_debug",1,{path:"/"}):$.cookie("_ym_debug",null,{path:"/"}),$.extend($.validator.messages,{required:BX.message("JS_REQUIRED"),email:BX.message("JS_FORMAT"),equalTo:BX.message("JS_PASSWORD_COPY"),minlength:BX.message("JS_PASSWORD_LENGTH"),remote:BX.message("JS_ERROR")}),$.validator.addMethod("regexp",function(e,t,a){var n=new RegExp(a);return this.optional(t)||n.test(e)},BX.message("JS_FORMAT")),$.validator.addMethod("filesize",function(e,t,a){return this.optional(t)||t.files[0].size<=a},BX.message("JS_FILE_SIZE")),$.validator.addMethod("date",function(e,t,a){var n=!1;if(!e||e.length<=0)n=!0;else{var o=new RegExp("^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4})$"),i=o.exec(e);if(i){var s=new Date(i[5],i[3]-1,i[1]);n=s.getMonth()==i[3]-1&&s.getDate()==i[1]&&s.getFullYear()==i[5]}}return n},BX.message("JS_DATE")),$.validator.addMethod("datetime",function(e,t,a){var n=!1;if(!e||e.length<=0)n=!0;else{var o=new RegExp("^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4}) ([0-9]{1,2}):([0-9]{1,2})$"),i=o.exec(e);if(i){var s=new Date(i[5],i[3]-1,i[1],i[6],i[7]);n=s.getMonth()==i[3]-1&&s.getDate()==i[1]&&s.getFullYear()==i[5]&&s.getHours()==i[6]&&s.getMinutes()==i[7]}}return n},BX.message("JS_DATETIME")),$.validator.addMethod("extension",function(e,t,a){return a="string"==typeof a?a.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(t)||e.match(new RegExp(".("+a+")$","i"))},BX.message("JS_FILE_EXT")),$.validator.addMethod("captcha",function(e,t,a){return $.validator.methods.remote.call(this,e,t,{url:arScorpOptions.SITE_DIR+"ajax/check-captcha.php",type:"post",data:{captcha_word:e,captcha_sid:function(){return $(t).closest("form").find('input[name="captcha_sid"]').val()}}})},BX.message("JS_ERROR")),$("body").on("click",".refresh",function(e){e.preventDefault(),$.ajax({url:arScorpOptions.SITE_DIR+"ajax/captcha.php"}).done(function(e){$(".captcha_sid").val(e),$(".captcha_img").attr("src","/bitrix/tools/captcha.php?captcha_sid="+e)})}),$.validator.addMethod("recaptcha",function(e,t,a){var n=$(t).closest("form").find(".g-recaptcha").attr("data-widgetid");return"undefined"!=typeof n?""!=grecaptcha.getResponse(n):!0},BX.message("JS_RECAPTCHA_ERROR")),$.validator.addMethod("processing_approval",function(e,t,a){return $(t).is(":checked")},BX.message("JS_PROCESSING_ERROR")),$.validator.addClassRules({phone:{regexp:arScorpOptions.THEME.VALIDATE_PHONE_MASK},confirm_password:{equalTo:'input[name="REGISTER[PASSWORD]"]',minlength:6},password:{minlength:6},inputfile:{extension:arScorpOptions.THEME.VALIDATE_FILE_EXT,filesize:5e6},datetime:{datetime:""},captcha:{captcha:""},recaptcha:{recaptcha:""},processing_approval:{processing_approval:""}}),InitFlexSlider(),waitingNotExists(".detail .galery #slider",".detail .galery #slider .flex-viewport",1e3,function(){InitFlexSlider(),setTimeout(function(){$(window).resize()},350)}),jQuery.browser.mobile?($(".style-switcher").addClass("hidden"),$(".hint span").remove(),$('*[data-event="jqm"]').live("click",function(e){e.preventDefault();var t=$(this),a=t.data("name");if(a.length){var n=arScorpOptions.SITE_DIR+"form/",o="",i={};$.each(t.get(0).attributes,function(e,a){var n=a.nodeName,s=t.attr(n);if(i[n]=s,/^data\-param\-(.+)$/.test(n)){var r=n.match(/^data\-param\-(.+)$/)[1];o+=r+"="+s+"&"}});var s=JSON.stringify(i),r=encodeURIComponent(s);n+="?name="+a+"&"+o+"data-trigger="+r,location.href=n}}),$(".fancybox").removeClass("fancybox")):$('*[data-event="jqm"]').live("click",function(e){e.preventDefault(),$(this).jqmEx(),$(this).trigger("click")}),$("a.fancybox:has(img)").fancybox();var e=!1;$("#mainMenu li.dropdown > a > i, #mainMenu li.dropdown-submenu > a > i").on("click",function(t){t.preventDefault(),$(window).width()>979||(e=$(this).closest("li").hasClass("resp-active"),e?$(this).closest("li").removeClass("resp-active"):$(this).closest("li").addClass("resp-active"))}),$(".styled-block .row > div.col-md-3").length&&BX.addCustomEvent("onWindowResize",function(e){try{ignoreResize.push(!0),$(".styled-block .row > div.col-md-3").each(function(){$(this).css({height:"","line-height":""});var e=parseInt($(".body_media").css("top"));if(e>0){var t=$(this).parents(".row").first().actual("outerHeight");$(this).css({height:t+"px","line-height":t+"px"})}})}catch(t){}finally{ignoreResize.pop()}}),$(".order-block").length&&BX.addCustomEvent("onWindowResize",function(e){try{ignoreResize.push(!0),$(".order-block").each(function(){var e=$(this).find(".row > div");if(e.length){var t=e.first(),a=e.last(),n=a.find(".text"),o=n.length,i=1===e.length&&o,s=t.find(".price").length,r=parseInt($(".body_media").css("top"));if(e.css({height:"","padding-top":"","padding-bottom":""}),n.css({height:"","padding-top":"","padding-bottom":""}),!s&&r>0||s&&r>1){var l=83;if(!i){var d=t.outerHeight();d=d>=l?d:l}if(o){var c=a.outerHeight();c=c>=l?c:l}var p=o?i?c:c>=d?c:d:d;if(!i){var u=22+(p-t.outerHeight())/2;t.css({"padding-top":u+"px","padding-bottom":u+"px",height:p+"px"})}if(o){a.css({height:p+"px"});var u=22+(p-n.outerHeight())/2;n.css({"padding-top":u+"px","padding-bottom":u+"px",height:p+"px"})}}}})}catch(t){}finally{ignoreResize.pop()}}),$(document).on("click",".mega-menu .dropdown-menu",function(e){e.stopPropagation()}),$(document).on("click",".mega-menu .dropdown-toggle.more-items",function(e){e.preventDefault()}),$(".table-menu .dropdown,.table-menu .dropdown-submenu,.table-menu .dropdown-toggle").live("mouseenter",function(){CheckTopVisibleMenu()}),$(".mega-menu .search-item .search-icon, .menu-row #title-search .fa-close").live("click",function(e){e.preventDefault(),$(".menu-row #title-search").toggleClass("hide")}),$(".mega-menu ul.nav .search input").live("keyup",function(e){var t=$(this).val();$(".menu-row > .search input").val(t),13==e.keyCode&&$(".menu-row > .search form").submit()}),$(".menu-row > .search input").live("keyup",function(e){var t=$(this).val();$(".mega-menu ul.nav .search input").val(t),13==e.keyCode&&$(".menu-row > .search form").submit()}),$(".mega-menu ul.nav .search button").live("click",function(e){e.preventDefault();var t=$(this).parents(".search").find("input").val();$(".menu-and-search .search input").val(t),$(".menu-row > .search form").submit()}),$(".filter .calendar").live("click",function(){var e=$(this).next();e.hasClass("calendar-icon")&&e.trigger("click")});var t=25;$("section.toggle > label").prepend($("<i />").addClass("fa fa-plus")),$("section.toggle > label").prepend($("<i />").addClass("fa fa-minus")),$("section.toggle.active > p").addClass("preview-active"),$("section.toggle.active > div.toggle-content").slideDown(350,function(){}),$("section.toggle > label").click(function(e){var a=$(this).parent(),n=$(this).parents("div.toogle"),o=!1,i=n.hasClass("toogle-accordion");if(i&&"undefined"!=typeof e.originalEvent&&n.find("section.toggle.active > label").trigger("click"),a.toggleClass("active"),a.find("> p").get(0)){o=a.find("> p");var s=o.css("height");o.css("height","auto");var r=o.css("height");o.css("height",s)}var l=a.find("> div.toggle-content");a.hasClass("active")?($(o).animate({height:r},350,function(){$(this).addClass("preview-active")}),l.slideDown(350,function(){})):($(o).animate({height:t},350,function(){$(this).removeClass("preview-active")}),l.slideUp(350,function(){}))}),$(".accordion-head").on("click",function(e){e.preventDefault(),$(this).next().hasClass("collapsing")||($(this).toggleClass("accordion-open"),$(this).toggleClass("accordion-close"))}),$("[data-appear-progress-animation]").each(function(){var e=$(this);e.appear(function(){var t=e.attr("data-appear-animation-delay")?e.attr("data-appear-animation-delay"):1;t>1&&e.css("animation-delay",t+"ms"),e.addClass(e.attr("data-appear-animation")),setTimeout(function(){e.animate({width:e.attr("data-appear-progress-animation")},1500,"easeOutQuad",function(){e.find(".progress-bar-tooltip").animate({opacity:1},500,"easeOutQuad")})},t)},{accX:0,accY:-50})}),$("a[rel=tooltip]").tooltip(),$("span[data-toggle=tooltip]").tooltip(),$("select.sort").live("change",function(){location.href=$(this).val()}),setTimeout(function(e){$(".catalog.group.list .item").each(function(){var e=$(this);(tmp=e.find(".image").outerHeight()-e.find(".text_info").outerHeight())>0&&e.find(".text_info .titles").height(e.find(".text_info .titles").outerHeight()+tmp)})},50),$(".thumbs .item a").live("click",function(e){e.preventDefault(),
$(".thumbs .item").removeClass("current"),$(this).closest(".item").toggleClass("current"),$(".slides li"+$(this).attr("href")).addClass("current").siblings().removeClass("current")}),$("header.fixed .btn-responsive-nav").live("click",function(){$("html, body").animate({scrollTop:0},400)}),$("body").on("click",".form .refresh-page",function(){var e=$(this).attr("data-url");"undefined"!=typeof e?location.href=e:location.href=location.href}),$(document).on("click",".print",function(){window.print()}),$(document).on("click","video.video",function(e){var t=e.target.id.replace("player_","");t&&(players[t].playing?e.target.pause():e.target.play())}),$(document).on("click",".banners-big .item .btn-video",function(){$(this).addClass("loading"),startMainBannerSlideVideo($(this).closest(".item"))}),$(document).on("click",function(){$(".basket.fly").length&&$(".ajax_basket").hasClass("opened")&&$(".ajax_basket").removeClass("opened")}),$(document).on("click",".basket.fly",function(e){e.stopPropagation()}),$(document).on("keydown",".count",function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||65===e.keyCode&&(e.ctrlKey===!0||e.metaKey===!0)||e.keyCode>=35&&e.keyCode<=40||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()}),$(document).on("keyup",".count",function(e){var t=$(this);Summ(t,t.val(),t.closest(".item").find("input[name=PRICE]").val())}),$(document).on("blur",".count",function(){BasketCounter($(this))}),$(document).on("click",".minus, .plus",function(e){e.stopPropagation(),BasketCounter($(this))});var a=100,n=1e3;$(document).on("click",".to_cart",function(e){e.stopPropagation();var t=$(this).closest("[data-item]"),o=t.find(".buy_block"),i=t.data("item"),s=parseFloat(o.find(".to_cart").data("quantity"));(isNaN(s)||0>=s)&&(s=1),!isNaN(i.ID)&&parseInt(i.ID)>0&&!o.hasClass("loading")&&$.ajax({url:arScorpOptions.SITE_DIR+"ajax/basket_items.php",type:"POST",data:{itemData:i,quantity:s},beforeSend:function(){o.addClass("loading")},complete:function(){o.removeClass("loading")},success:function(e){o.addClass("in");var t=$(".basket").length?parseInt($(".basket .count").text()):parseInt($(".basket_top:visible .count").text());if(++t,$(".basket_top .count, .basket .count").text(t).removeClass("empted"),$(".ajax_basket").html(e),"N"!==arScorpOptions.THEME.USE_SALE_GOALS){var r={goal:"goal_basket_add",params:{itemData:i,quantity:s}};BX.onCustomEvent("onCounterGoals",[r])}"undefined"!=typeof arScorpOptions.THEME.ORDER_BASKET_VIEW&&"HEADER"===$.trim(arScorpOptions.THEME.ORDER_BASKET_VIEW)&&$(".basket_top").length?$(".basket_top .dropdown").hasClass("expanded")||(setTimeout(function(){$(".basket_top .dropdown").addClass("expanded")},a),setTimeout(function(){$(".basket_top .dropdown").removeClass("expanded")},n)):"undefined"!=typeof arScorpOptions.THEME.ORDER_BASKET_VIEW&&"FLY"===$.trim(arScorpOptions.THEME.ORDER_BASKET_VIEW)&&$(".basket.fly").length&&setTimeout(function(){$(".ajax_basket").hasClass("opened")||$(".ajax_basket").addClass("opened")},a)}})}),$(document).on("click",".remove",function(){var e=$(this).closest("[data-item]"),t=e.find(".buy_block"),a=e.data("item"),n="Y",o="Y"===$.trim($(this).closest("[data-remove_all]").data("remove_all"))?"Y":!1;countItem=$(".basket").length?parseInt($(".basket .item").length):parseInt($(".basket_top:visible .item").length),bOneItem=countItem-1<=0,scrollTop=$(".basket.fly").length?$(".basket.fly .items_wrap").scrollTop():$(".basket_top:visible").length?$(".basket_top .items:visible").scrollTop():"";var i=function(){$.ajax({url:arScorpOptions.SITE_DIR+"ajax/basket_items.php",data:{itemData:a,remove:n,removeAll:o},beforeSend:function(){t.addClass("loading")},complete:function(){t.removeClass("loading")},success:function(e){if(o)$(".buy_block").removeClass("in"),$(".basket .count, .basket_top .count").text(0).addClass("empted");else{$("[data-item]").each(function(){$(this).data("item").ID==a.ID&&$(this).find(".buy_block").removeClass("in")});var i=$(".basket").length?parseInt($(".basket .count").text()):parseInt($(".basket_top:visible .count").text());--i,$(".basket .count, .basket_top .count").text(i),i||$(".basket .count, .basket_top .count").addClass("empted")}if($(".ajax_basket").html(e),"undefined"!=typeof arScorpOptions.THEME.ORDER_BASKET_VIEW&&"HEADER"===$.trim(arScorpOptions.THEME.ORDER_BASKET_VIEW)&&$(".basket_top").length&&$(".basket_top .items").scrollTop(scrollTop),"undefined"!=typeof arScorpOptions.THEME.ORDER_BASKET_VIEW&&"FLY"===$.trim(arScorpOptions.THEME.ORDER_BASKET_VIEW)&&$(".basket.fly").length&&($(".ajax_basket").addClass("opened"),$(".basket.fly .items_wrap").scrollTop(scrollTop)),"N"!==arScorpOptions.THEME.USE_SALE_GOALS){var s={goal:"goal_basket_remove",params:{itemData:a,remove:n,removeAll:o}};BX.onCustomEvent("onCounterGoals",[s])}var r=$.trim($("input[name=getPageUri]").val());r&&$.ajax({url:r,type:"POST",beforeSend:function(){t.addClass("loading")},complete:function(){t.removeClass("loading")},success:function(e){$(".basket.default").length&&$(".basket.default").html(e)}})}})};(o||"undefined"!=typeof a&&!isNaN(a.ID)&&a.ID>0&&!t.hasClass("loading"))&&(o?$(".basket_wrap").fadeOut(200,function(){$(".basket").find(".basket_empty").fadeIn(200,function(){i()})}):bOneItem?e.closest(".basket_top").length?e.closest(".dropdown").animate({opacity:0},200,function(){i()}):e.closest(".basket_wrap").fadeOut(200,function(){e.closest(".basket").find(".basket_empty").fadeIn(200,function(){i()})}):e.animate({opacity:0},200).slideUp(200,function(){i()}))})});var waitCounter=function(e,t,a){var n=window["yaCounter"+e];"object"==typeof n?"function"==typeof a&&a():setTimeout(function(){waitCounter(e,t,a)},t)},waitReCaptcha=function(e,t){"object"==typeof grecaptcha?"function"==typeof t&&t():setTimeout(function(){waitReCaptcha(e,t)},e)},reCaptchaRender=function(e){$(".g-recaptcha:not(.rendered)").length&&waitReCaptcha(50,function(){$(".g-recaptcha:not(.rendered)").each(function(){$this=$(this),$this.addClass("rendered");var e=grecaptcha.render($this[0],{sitekey:$this.attr("data-sitekey"),theme:$this.attr("data-theme"),size:$this.attr("data-size"),callback:$this.attr("data-callback")});$this.attr("data-widgetid",e)})})},reCaptchaVerify=function(e){$(".g-recaptcha.rendered").each(function(){var e=$(this).attr("data-widgetid");"undefined"!=typeof e&&""!=grecaptcha.getResponse(e)&&$(this).closest("form").find(".recaptcha").valid()})},timerScroll=!1,ignoreScroll=[],documentScrollTopLast=$(document).scrollTop();$(window).scroll(function(){documentScrollTop=$(document).scrollTop(),CheckPopupTop(),CheckScrollToTop(),ignoreScroll.length||(timerScroll&&(clearTimeout(timerScroll),timerScroll=!1),timerScroll=setTimeout(function(){BX.onCustomEvent("onWindowScroll",!1)},100)),documentScrollTopLast=documentScrollTop});var timerResize=!1,ignoreResize=[];$(window).resize(function(){documentScrollTop=$(document).scrollTop(),CheckPopupTop(),CheckScrollToTop(),ignoreResize.length||(timerResize&&(clearTimeout(timerResize),timerResize=!1),timerResize=setTimeout(function(){BX.onCustomEvent("onWindowResize",!1)},100)),documentScrollTopLast=$(document).scrollTop()}),BX.addCustomEvent("onWindowScroll",function(e){try{ignoreScroll.push(!0)}catch(t){}finally{ignoreScroll.pop()}}),BX.addCustomEvent("onWindowResize",function(e){try{ignoreResize.push(!0),CheckTopMenuDotted(),CheckTopVisibleMenu(),CheckFlexSlider(),CheckMainBannerSliderVText($(".banners-big .flexslider")),CheckObjectsSizes(),CoverPlayer()}catch(t){}finally{ignoreResize.pop()}}),BX.addCustomEvent("onSlide",function(e){try{if(ignoreResize.push(!0),e){var t=e.slider;if(t){t.find(".item").removeClass("current");var a=t.find(".item.flex-active-slide"),n=a.attr("data-slide_index");if(n.length){if(a.addClass("current"),t.find(".item[data-slide_index="+n+"]").addClass("shown"),t.resize(),CheckMainBannerSliderVText(t),"undefined"!=typeof players&&players)for(var o in players)players[o].playing&&!players[o].clone&&players[o].slideIndex!=n&&"object"==typeof window[players[o].id]&&("YOUTUBE"===players[o].videoPlayer?window[players[o].id].pauseVideo():"VIMEO"===players[o].videoPlayer?window[players[o].id].pause():"RUTUBE"===players[o].videoPlayer?document.getElementById(players[o].id).contentWindow.postMessage(JSON.stringify({type:"player:pause",data:{}}),"*"):"HTML5"===players[o].videoPlayer&&document.getElementById(players[o].id).pause());var i=1==a.attr("data-video_autoplay");i&&startMainBannerSlideVideo(a)}}}}catch(s){}finally{ignoreResize.pop()}}),BX.addCustomEvent("onSlideEnd",function(e){try{if(ignoreResize.push(!0),e){e.slider}}catch(t){}finally{ignoreResize.pop()}}),BX.addCustomEvent("onCounterGoals",function(e){if("Y"===arScorpOptions.THEME.USE_YA_COUNTER){var t=arScorpOptions.THEME.YA_COUNTER_ID;if(t=parseInt(t),"object"!=typeof e&&(e={goal:"undefined"}),"string"!=typeof e.goal&&(e.goal="undefined"),t)try{waitCounter(t,50,function(){var a=window["yaCounter"+t];"object"==typeof a&&a.reachGoal(e.goal)})}catch(a){console.error(a)}else console.info("Bad counter id!",t)}});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/aspro-scorp/js/custom.js?144741989241";s:6:"source";s:42:"/bitrix/templates/aspro-scorp/js/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* Add here all your JS customizations */
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/components/bitrix/search.title/script.min.js?15560170886443";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:52:"/bitrix/components/bitrix/search.title/script.min.js";s:3:"map";s:52:"/bitrix/components/bitrix/search.title/script.map.js";}"*/
function JCTitleSearch(t){var e=this;this.arParams={AJAX_PAGE:t.AJAX_PAGE,CONTAINER_ID:t.CONTAINER_ID,INPUT_ID:t.INPUT_ID,MIN_QUERY_LEN:parseInt(t.MIN_QUERY_LEN)};if(t.WAIT_IMAGE)this.arParams.WAIT_IMAGE=t.WAIT_IMAGE;if(t.MIN_QUERY_LEN<=0)t.MIN_QUERY_LEN=1;this.cache=[];this.cache_key=null;this.startText="";this.running=false;this.runningCall=false;this.currentRow=-1;this.RESULT=null;this.CONTAINER=null;this.INPUT=null;this.WAIT=null;this.ShowResult=function(t){if(BX.type.isString(t)){e.RESULT.innerHTML=t}e.RESULT.style.display=e.RESULT.innerHTML!==""?"block":"none";var s=e.adjustResultNode();var i;var n;var l=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(l){n=BX.findChild(l,{tag:"th"},true)}if(n){var r=BX.pos(l);r.width=r.right-r.left;var a=BX.pos(n);a.width=a.right-a.left;n.style.width=a.width+"px";e.RESULT.style.width=s.width+a.width+"px";e.RESULT.style.left=s.left-a.width-1+"px";if(r.width-a.width>s.width)e.RESULT.style.width=s.width+a.width-1+"px";r=BX.pos(l);i=BX.pos(e.RESULT);if(i.right>r.right){e.RESULT.style.width=r.right-r.left+"px"}}var o;if(l)o=BX.findChild(e.RESULT,{class:"title-search-fader"},true);if(o&&n){i=BX.pos(e.RESULT);o.style.left=i.right-i.left-18+"px";o.style.width=18+"px";o.style.top=0+"px";o.style.height=i.bottom-i.top+"px";o.style.display="block"}};this.onKeyPress=function(t){var s=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(!s)return false;var i;var n=s.rows.length;switch(t){case 27:e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll();return true;case 40:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var l=-1;for(i=0;i<n;i++){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){if(l==-1)l=i;if(e.currentRow<i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i==n&&e.currentRow!=i)e.currentRow=l;s.rows[e.currentRow].className="title-search-selected";return true;case 38:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var r=-1;for(i=n-1;i>=0;i--){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){if(r==-1)r=i;if(e.currentRow>i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i<0&&e.currentRow!=i)e.currentRow=r;s.rows[e.currentRow].className="title-search-selected";return true;case 13:if(e.RESULT.style.display=="block"){for(i=0;i<n;i++){if(e.currentRow==i){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){var a=BX.findChild(s.rows[i],{tag:"a"},true);if(a){window.location=a.href;return true}}}}}return false}return false};this.onTimeout=function(){e.onChange(function(){setTimeout(e.onTimeout,500)})};this.onChange=function(t){if(e.running){e.runningCall=true;return}e.running=true;if(e.INPUT.value!=e.oldValue&&e.INPUT.value!=e.startText){e.oldValue=e.INPUT.value;if(e.INPUT.value.length>=e.arParams.MIN_QUERY_LEN){e.cache_key=e.arParams.INPUT_ID+"|"+e.INPUT.value;if(e.cache[e.cache_key]==null){if(e.WAIT){var s=BX.pos(e.INPUT);var i=s.bottom-s.top-2;e.WAIT.style.top=s.top+1+"px";e.WAIT.style.height=i+"px";e.WAIT.style.width=i+"px";e.WAIT.style.left=s.right-i+2+"px";e.WAIT.style.display="block"}BX.ajax.post(e.arParams.AJAX_PAGE,{ajax_call:"y",INPUT_ID:e.arParams.INPUT_ID,q:e.INPUT.value,l:e.arParams.MIN_QUERY_LEN},function(s){e.cache[e.cache_key]=s;e.ShowResult(s);e.currentRow=-1;e.EnableMouseEvents();if(e.WAIT)e.WAIT.style.display="none";if(!!t)t();e.running=false;if(e.runningCall){e.runningCall=false;e.onChange()}});return}else{e.ShowResult(e.cache[e.cache_key]);e.currentRow=-1;e.EnableMouseEvents()}}else{e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll()}}if(!!t)t();e.running=false};this.onScroll=function(){if(BX.type.isElementNode(e.RESULT)&&e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.UnSelectAll=function(){var t=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)t.rows[i].className=""}};this.EnableMouseEvents=function(){var t=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)if(!BX.findChild(t.rows[i],{class:"title-search-separator"},true)){t.rows[i].id="row_"+i;t.rows[i].onmouseover=function(t){if(e.currentRow!=this.id.substr(4)){e.UnSelectAll();this.className="title-search-selected";e.currentRow=this.id.substr(4)}};t.rows[i].onmouseout=function(t){this.className="";e.currentRow=-1}}}};this.onFocusLost=function(t){setTimeout(function(){e.RESULT.style.display="none"},250)};this.onFocusGain=function(){if(e.RESULT.innerHTML.length)e.ShowResult()};this.onKeyDown=function(t){if(!t)t=window.event;if(e.RESULT.style.display=="block"){if(e.onKeyPress(t.keyCode))return BX.PreventDefault(t)}};this.adjustResultNode=function(){if(!(BX.type.isElementNode(e.RESULT)&&BX.type.isElementNode(e.CONTAINER))){return{top:0,right:0,bottom:0,left:0,width:0,height:0}}var t=BX.pos(e.CONTAINER);e.RESULT.style.position="absolute";e.RESULT.style.top=t.bottom+2+"px";e.RESULT.style.left=t.left+"px";e.RESULT.style.width=t.width+"px";return t};this._onContainerLayoutChange=function(){if(BX.type.isElementNode(e.RESULT)&&e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.Init=function(){this.CONTAINER=document.getElementById(this.arParams.CONTAINER_ID);BX.addCustomEvent(this.CONTAINER,"OnNodeLayoutChange",this._onContainerLayoutChange);this.RESULT=document.body.appendChild(document.createElement("DIV"));this.RESULT.className="title-search-result";this.INPUT=document.getElementById(this.arParams.INPUT_ID);this.startText=this.oldValue=this.INPUT.value;BX.bind(this.INPUT,"focus",function(){e.onFocusGain()});BX.bind(this.INPUT,"blur",function(){e.onFocusLost()});this.INPUT.onkeydown=this.onKeyDown;if(this.arParams.WAIT_IMAGE){this.WAIT=document.body.appendChild(document.createElement("DIV"));this.WAIT.style.backgroundImage="url('"+this.arParams.WAIT_IMAGE+"')";if(!BX.browser.IsIE())this.WAIT.style.backgroundRepeat="none";this.WAIT.style.display="none";this.WAIT.style.position="absolute";this.WAIT.style.zIndex="1100"}BX.bind(this.INPUT,"bxchange",function(){e.onChange()});var t=BX.findParent(this.CONTAINER,BX.is_fixed);if(BX.type.isElementNode(t)){BX.bind(window,"scroll",BX.throttle(this.onScroll,100,this))}};BX.ready(function(){e.Init(t)})}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/components/kuznica/banner.popup/fancybox/lib/jquery.mousewheel-3.0.6.pack.js?14474060821384";s:6:"source";s:84:"/bitrix/components/kuznica/banner.popup/fancybox/lib/jquery.mousewheel-3.0.6.pack.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/bitrix/components/kuznica/banner.popup/fancybox/source/jquery.fancybox.js?144740608248706";s:6:"source";s:74:"/bitrix/components/kuznica/banner.popup/fancybox/source/jquery.fancybox.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:105:"/bitrix/components/kuznica/banner.popup/fancybox/source/helpers/jquery.fancybox-buttons.js?14474060823041";s:6:"source";s:90:"/bitrix/components/kuznica/banner.popup/fancybox/source/helpers/jquery.fancybox-buttons.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
 /*!
 * Buttons helper for fancyBox
 * version: 1.0.5 (Mon, 15 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             buttons: {
 *                 position : 'top'
 *             }
 *         }
 *     });
 *
 */
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.buttons = {
		defaults : {
			skipSingle : false, // disables if gallery contains single image
			position   : 'top', // 'top' or 'bottom'
			tpl        : '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
		},

		list : null,
		buttons: null,

		beforeLoad: function (opts, obj) {
			//Remove self if gallery do not have at least two items

			if (opts.skipSingle && obj.group.length < 2) {
				obj.helpers.buttons = false;
				obj.closeBtn = true;

				return;
			}

			//Increase top margin to give space for buttons
			obj.margin[ opts.position === 'bottom' ? 2 : 0 ] += 30;
		},

		onPlayStart: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
			}
		},

		onPlayEnd: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
			}
		},

		afterShow: function (opts, obj) {
			var buttons = this.buttons;

			if (!buttons) {
				this.list = $(opts.tpl).addClass(opts.position).appendTo('body');

				buttons = {
					prev   : this.list.find('.btnPrev').click( F.prev ),
					next   : this.list.find('.btnNext').click( F.next ),
					play   : this.list.find('.btnPlay').click( F.play ),
					toggle : this.list.find('.btnToggle').click( F.toggle ),
					close  : this.list.find('.btnClose').click( F.close )
				}
			}

			//Prev
			if (obj.index > 0 || obj.loop) {
				buttons.prev.removeClass('btnDisabled');
			} else {
				buttons.prev.addClass('btnDisabled');
			}

			//Next / Play
			if (obj.loop || obj.index < obj.group.length - 1) {
				buttons.next.removeClass('btnDisabled');
				buttons.play.removeClass('btnDisabled');

			} else {
				buttons.next.addClass('btnDisabled');
				buttons.play.addClass('btnDisabled');
			}

			this.buttons = buttons;

			this.onUpdate(opts, obj);
		},

		onUpdate: function (opts, obj) {
			var toggle;

			if (!this.buttons) {
				return;
			}

			toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

			//Size toggle button
			if (obj.canShrink) {
				toggle.addClass('btnToggleOn');

			} else if (!obj.canExpand) {
				toggle.addClass('btnDisabled');
			}
		},

		beforeClose: function () {
			if (this.list) {
				this.list.remove();
			}

			this.list    = null;
			this.buttons = null;
		}
	};

}(jQuery));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:104:"/bitrix/components/kuznica/banner.popup/fancybox/source/helpers/jquery.fancybox-thumbs.js?14474060823836";s:6:"source";s:89:"/bitrix/components/kuznica/banner.popup/fancybox/source/helpers/jquery.fancybox-thumbs.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
 /*!
 * Thumbnail helper for fancyBox
 * version: 1.0.7 (Mon, 01 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             thumbs: {
 *                 width  : 50,
 *                 height : 50
 *             }
 *         }
 *     });
 *
 */
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.thumbs = {
		defaults : {
			width    : 50,       // thumbnail width
			height   : 50,       // thumbnail height
			position : 'bottom', // 'top' or 'bottom'
			source   : function ( item ) {  // function to obtain the URL of the thumbnail image
				var href;

				if (item.element) {
					href = $(item.element).find('img').attr('src');
				}

				if (!href && item.type === 'image' && item.href) {
					href = item.href;
				}

				return href;
			}
		},

		wrap  : null,
		list  : null,
		width : 0,

		init: function (opts, obj) {
			var that = this,
				list,
				thumbWidth  = opts.width,
				thumbHeight = opts.height,
				thumbSource = opts.source;

			//Build list structure
			list = '';

			for (var n = 0; n < obj.group.length; n++) {
				list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
			}

			this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
			this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);

			//Load each thumbnail
			$.each(obj.group, function (i) {
				var href = thumbSource( obj.group[ i ] );

				if (!href) {
					return;
				}

				$("<img />").load(function () {
					var width  = this.width,
						height = this.height,
						widthRatio, heightRatio, parent;

					if (!that.list || !width || !height) {
						return;
					}

					//Calculate thumbnail width/height and center it
					widthRatio  = width / thumbWidth;
					heightRatio = height / thumbHeight;

					parent = that.list.children().eq(i).find('a');

					if (widthRatio >= 1 && heightRatio >= 1) {
						if (widthRatio > heightRatio) {
							width  = Math.floor(width / heightRatio);
							height = thumbHeight;

						} else {
							width  = thumbWidth;
							height = Math.floor(height / widthRatio);
						}
					}

					$(this).css({
						width  : width,
						height : height,
						top    : Math.floor(thumbHeight / 2 - height / 2),
						left   : Math.floor(thumbWidth / 2 - width / 2)
					});

					parent.width(thumbWidth).height(thumbHeight);

					$(this).hide().appendTo(parent).fadeIn(300);

				}).attr('src', href);
			});

			//Set initial width
			this.width = this.list.children().eq(0).outerWidth(true);

			this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)));
		},

		beforeLoad: function (opts, obj) {
			//Remove self if gallery do not have at least two items
			if (obj.group.length < 2) {
				obj.helpers.thumbs = false;

				return;
			}

			//Increase bottom margin to give space for thumbs
			obj.margin[ opts.position === 'top' ? 0 : 2 ] += ((opts.height) + 15);
		},

		afterShow: function (opts, obj) {
			//Check if exists and create or update list
			if (this.list) {
				this.onUpdate(opts, obj);

			} else {
				this.init(opts, obj);
			}

			//Set active element
			this.list.children().removeClass('active').eq(obj.index).addClass('active');
		},

		//Center list
		onUpdate: function (opts, obj) {
			if (this.list) {
				this.list.stop(true).animate({
					'left': Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
				}, 150);
			}
		},

		beforeClose: function () {
			if (this.wrap) {
				this.wrap.remove();
			}

			this.wrap  = null;
			this.list  = null;
			this.width = 0;
		}
	}

}(jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:103:"/bitrix/components/kuznica/banner.popup/fancybox/source/helpers/jquery.fancybox-media.js?14474060825305";s:6:"source";s:88:"/bitrix/components/kuznica/banner.popup/fancybox/source/helpers/jquery.fancybox-media.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
	"use strict";

	//Shortcut for fancyBox object
	var F = $.fancybox,
		format = function( url, rez, params ) {
			params = params || '';

			if ( $.type( params ) === "object" ) {
				params = $.param(params, true);
			}

			$.each(rez, function(key, value) {
				url = url.replace( '$' + key, value || '' );
			});

			if (params.length) {
				url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
			}

			return url;
		};

	//Add helper object
	F.helpers.media = {
		defaults : {
			youtube : {
				matcher : /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params  : {
					autoplay    : 1,
					autohide    : 1,
					fs          : 1,
					rel         : 0,
					hd          : 1,
					wmode       : 'opaque',
					enablejsapi : 1
				},
				type : 'iframe',
				url  : '//www.youtube.com/embed/$3'
			},
			vimeo : {
				matcher : /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
				params  : {
					autoplay      : 1,
					hd            : 1,
					show_title    : 1,
					show_byline   : 1,
					show_portrait : 0,
					fullscreen    : 1
				},
				type : 'iframe',
				url  : '//player.vimeo.com/video/$1'
			},
			metacafe : {
				matcher : /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
				params  : {
					autoPlay : 'yes'
				},
				type : 'swf',
				url  : function( rez, params, obj ) {
					obj.swf.flashVars = 'playerVars=' + $.param( params, true );

					return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
				}
			},
			dailymotion : {
				matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
				params  : {
					additionalInfos : 0,
					autoStart : 1
				},
				type : 'swf',
				url  : '//www.dailymotion.com/swf/video/$1'
			},
			twitvid : {
				matcher : /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
				params  : {
					autoplay : 0
				},
				type : 'iframe',
				url  : '//www.twitvid.com/embed.php?guid=$1'
			},
			twitpic : {
				matcher : /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
				type : 'image',
				url  : '//twitpic.com/show/full/$1/'
			},
			instagram : {
				matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type : 'image',
				url  : '//$1/p/$2/media/?size=l'
			},
			google_maps : {
				matcher : /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
				type : 'iframe',
				url  : function( rez ) {
					return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
				}
			}
		},

		beforeLoad : function(opts, obj) {
			var url   = obj.href || '',
				type  = false,
				what,
				item,
				rez,
				params;

			for (what in opts) {
				if (opts.hasOwnProperty(what)) {
					item = opts[ what ];
					rez  = url.match( item.matcher );

					if (rez) {
						type   = item.type;
						params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

						url = $.type( item.url ) === "function" ? item.url.call( this, rez, params, obj ) : format( item.url, rez, params );

						break;
					}
				}
			}

			if (type) {
				obj.href = url;
				obj.type = type;

				obj.autoHeight = false;
			}
		}
	};

}(jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:79:"/bitrix/templates/aspro-scorp/js/jquery.inputmask.bundle.min.js?144741989263835";s:6:"source";s:63:"/bitrix/templates/aspro-scorp/js/jquery.inputmask.bundle.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
* jquery.inputmask.bundle
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2015 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.1.64-73
*/
!function(a){function b(b){this.el=void 0,this.opts=a.extend(!0,{},this.defaults,b),this.noMasksCache=b&&void 0!==b.definitions,this.userOptions=b||{},e(this.opts.alias,b,this.opts)}function c(a){var b=document.createElement("input"),c="on"+a,d=c in b;return d||(b.setAttribute(c,"return;"),d="function"==typeof b[c]),b=null,d}function d(a){var b="text"==a||"tel"==a||"password"==a;if(!b){var c=document.createElement("input");c.setAttribute("type",a),b="text"===c.type,c=null}return b}function e(b,c,d){var f=d.aliases[b];return f?(f.alias&&e(f.alias,void 0,d),a.extend(!0,d,f),a.extend(!0,d,c),!0):(void 0==d.mask&&(d.mask=b),!1)}function f(b,c,d){var f=a(b),g=f.data("inputmask");if(g&&""!=g)try{g=g.replace(new RegExp("'","g"),'"');var h=a.parseJSON("{"+g+"}");a.extend(!0,d,h)}catch(i){}for(var j in c){var k=f.data("inputmask-"+j.toLowerCase());void 0!=k&&(k="boolean"==typeof k?k:k.toString(),"mask"==j&&0==k.indexOf("[")?(d[j]=k.replace(/[\s[\]]/g,"").split("','"),d[j][0]=d[j][0].replace("'",""),d[j][d[j].length-1]=d[j][d[j].length-1].replace("'","")):d[j]=k)}return d.alias?e(d.alias,d,c):a.extend(!0,c,d),c}function g(c,d){function e(b){function d(a,b,c,d){this.matches=[],this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function e(b,d,e){var f=c.definitions[d],g=0==b.matches.length;if(e=void 0!=e?e:b.matches.length,f&&!m){f.placeholder=a.isFunction(f.placeholder)?f.placeholder.call(this,c):f.placeholder;for(var h=f.prevalidator,i=h?h.length:0,j=1;j<f.cardinality;j++){var k=i>=j?h[j-1]:[],l=k.validator,n=k.cardinality;b.matches.splice(e++,0,{fn:l?"string"==typeof l?new RegExp(l):new function(){this.test=l}:new RegExp("."),cardinality:n?n:1,optionality:b.isOptional,newBlockMarker:g,casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}b.matches.splice(e++,0,{fn:f.validator?"string"==typeof f.validator?new RegExp(f.validator):new function(){this.test=f.validator}:new RegExp("."),cardinality:f.cardinality,optionality:b.isOptional,newBlockMarker:g,casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}else b.matches.splice(e++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:g,casing:null,def:d,placeholder:void 0,mask:d}),m=!1}for(var f,g,h,i,j,k,l=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,m=!1,n=new d,o=[],p=[];f=l.exec(b);)switch(g=f[0],g.charAt(0)){case c.optionalmarker.end:case c.groupmarker.end:if(h=o.pop(),o.length>0){if(i=o[o.length-1],i.matches.push(h),i.isAlternator){j=o.pop();for(var q=0;q<j.matches.length;q++)j.matches[q].isGroup=!1;o.length>0?(i=o[o.length-1],i.matches.push(j)):n.matches.push(j)}}else n.matches.push(h);break;case c.optionalmarker.start:o.push(new d(!1,!0));break;case c.groupmarker.start:o.push(new d(!0));break;case c.quantifiermarker.start:var r=new d(!1,!1,!0);g=g.replace(/[{}]/g,"");var s=g.split(","),t=isNaN(s[0])?s[0]:parseInt(s[0]),u=1==s.length?t:isNaN(s[1])?s[1]:parseInt(s[1]);if(("*"==u||"+"==u)&&(t="*"==u?0:1),r.quantifier={min:t,max:u},o.length>0){var v=o[o.length-1].matches;if(f=v.pop(),!f.isGroup){var w=new d(!0);w.matches.push(f),f=w}v.push(f),v.push(r)}else{if(f=n.matches.pop(),!f.isGroup){var w=new d(!0);w.matches.push(f),f=w}n.matches.push(f),n.matches.push(r)}break;case c.escapeChar:m=!0;break;case c.alternatormarker:o.length>0?(i=o[o.length-1],k=i.matches.pop()):k=n.matches.pop(),k.isAlternator?o.push(k):(j=new d(!1,!1,!1,!0),j.matches.push(k),o.push(j));break;default:if(o.length>0){if(i=o[o.length-1],i.matches.length>0&&!i.isAlternator&&(k=i.matches[i.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,c.groupmarker.start,0),e(k,c.groupmarker.end))),e(i,g),i.isAlternator){j=o.pop();for(var q=0;q<j.matches.length;q++)j.matches[q].isGroup=!1;o.length>0?(i=o[o.length-1],i.matches.push(j)):n.matches.push(j)}}else n.matches.length>0&&(k=n.matches[n.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,c.groupmarker.start,0),e(k,c.groupmarker.end))),e(n,g)}return n.matches.length>0&&(k=n.matches[n.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,c.groupmarker.start,0),e(k,c.groupmarker.end)),p.push(n)),p}function f(f,g){if(void 0==f||""==f)return void 0;if(1==f.length&&0==c.greedy&&0!=c.repeat&&(c.placeholder=""),c.repeat>0||"*"==c.repeat||"+"==c.repeat){var h="*"==c.repeat?0:"+"==c.repeat?1:c.repeat;f=c.groupmarker.start+f+c.groupmarker.end+c.quantifiermarker.start+h+","+c.repeat+c.quantifiermarker.end}var i;return void 0==b.prototype.masksCache[f]||d===!0?(i={mask:f,maskToken:e(f),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:g},d!==!0&&(b.prototype.masksCache[f]=i)):i=a.extend(!0,{},b.prototype.masksCache[f]),i}function g(a){if(a=a.toString(),c.numericInput){a=a.split("").reverse();for(var b=0;b<a.length;b++)a[b]==c.optionalmarker.start?a[b]=c.optionalmarker.end:a[b]==c.optionalmarker.end?a[b]=c.optionalmarker.start:a[b]==c.groupmarker.start?a[b]=c.groupmarker.end:a[b]==c.groupmarker.end&&(a[b]=c.groupmarker.start);a=a.join("")}return a}var h=void 0;if(a.isFunction(c.mask)&&(c.mask=c.mask.call(this,c)),a.isArray(c.mask)){if(c.mask.length>1){c.keepStatic=void 0==c.keepStatic?!0:c.keepStatic;var i="(";return a.each(c.mask,function(b,c){i.length>1&&(i+=")|("),i+=g(void 0==c.mask||a.isFunction(c.mask)?c:c.mask)}),i+=")",f(i,c.mask)}c.mask=c.mask.pop()}return c.mask&&(h=void 0==c.mask.mask||a.isFunction(c.mask.mask)?f(g(c.mask),c.mask):f(g(c.mask.mask),c.mask)),h}function h(e,f,g){function h(a,b,c){b=b||0;var d,e,f,g=[],h=0;do{if(a===!0&&i().validPositions[h]){var j=i().validPositions[h];e=j.match,d=j.locator.slice(),g.push(c===!0?j.input:H(h,e))}else f=r(h,d,h-1),e=f.match,d=f.locator.slice(),g.push(H(h,e));h++}while((void 0==fa||fa>h-1)&&null!=e.fn||null==e.fn&&""!=e.def||b>=h);return g.pop(),g}function i(){return f}function n(a){var b=i();b.buffer=void 0,b.tests={},a!==!0&&(b._buffer=void 0,b.validPositions={},b.p=0)}function o(a,b){var c=i(),d=-1,e=c.validPositions;void 0==a&&(a=-1);var f=d,g=d;for(var h in e){var j=parseInt(h);e[j]&&(b||null!=e[j].match.fn)&&(a>=j&&(f=j),j>=a&&(g=j))}return d=-1!=f&&a-f>1||a>g?f:g}function p(b,c,d){if(g.insertMode&&void 0!=i().validPositions[b]&&void 0==d){var e,f=a.extend(!0,{},i().validPositions),h=o();for(e=b;h>=e;e++)delete i().validPositions[e];i().validPositions[b]=c;var j,k=!0,l=i().validPositions;for(e=j=b;h>=e;e++){var m=f[e];if(void 0!=m)for(var n=j,p=-1;n<C()&&(null==m.match.fn&&l[e]&&(l[e].match.optionalQuantifier===!0||l[e].match.optionality===!0)||null!=m.match.fn);){if(null==m.match.fn||!g.keepStatic&&l[e]&&(void 0!=l[e+1]&&u(e+1,l[e].locator.slice(),e).length>1||void 0!=l[e].alternation)?n++:n=D(j),t(n,m.match.def)){k=A(n,m.input,!0,!0)!==!1,j=n;break}if(k=null==m.match.fn,p==n)break;p=n}if(!k)break}if(!k)return i().validPositions=a.extend(!0,{},f),!1}else i().validPositions[b]=c;return!0}function q(a,b,c,d){var e,f=a;i().p=a;for(e=f;b>e;e++)void 0!=i().validPositions[e]&&(c===!0||0!=g.canClearPosition(i(),e,o(),d,g))&&delete i().validPositions[e];for(n(!0),e=f+1;e<=o();){for(;void 0!=i().validPositions[f];)f++;var h=i().validPositions[f];f>e&&(e=f+1);var j=i().validPositions[e];void 0!=j&&void 0==h?(t(f,j.match.def)&&A(f,j.input,!0)!==!1&&(delete i().validPositions[e],e++),f++):e++}var k=o(),l=C();for(c!==!0&&void 0!=i().validPositions[k]&&i().validPositions[k].input==g.radixPoint&&delete i().validPositions[k],e=k+1;l>=e;e++)i().validPositions[e]&&delete i().validPositions[e];n(!0)}function r(a,b,c){var d=i().validPositions[a];if(void 0==d)for(var e=u(a,b,c),f=o(),h=i().validPositions[f]||u(0)[0],j=void 0!=h.alternation?h.locator[h.alternation].toString().split(","):[],k=0;k<e.length&&(d=e[k],!(d.match&&(g.greedy&&d.match.optionalQuantifier!==!0||(d.match.optionality===!1||d.match.newBlockMarker===!1)&&d.match.optionalQuantifier!==!0)&&(void 0==h.alternation||h.alternation!=d.alternation||void 0!=d.locator[h.alternation]&&z(d.locator[h.alternation].toString().split(","),j))));k++);return d}function s(a){return i().validPositions[a]?i().validPositions[a].match:u(a)[0].match}function t(a,b){for(var c=!1,d=u(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def==b){c=!0;break}return c}function u(b,c,d,e){function f(c,d,e,g){function j(e,g,n){if(h>1e4)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+i().mask),!0;if(h==b&&void 0==e.matches)return k.push({match:e,locator:g.reverse()}),!0;if(void 0!=e.matches){if(e.isGroup&&n!==!0){if(e=j(c.matches[m+1],g))return!0}else if(e.isOptional){var o=e;if(e=f(e,d,g,n)){var p=k[k.length-1].match,q=0==a.inArray(p,o.matches);if(!q)return!0;l=!0,h=b}}else if(e.isAlternator){var r,s=e,t=[],u=k.slice(),v=g.length,w=d.length>0?d.shift():-1;if(-1==w||"string"==typeof w){var x=h,y=d.slice(),z=[];"string"==typeof w&&(z=w.split(","));for(var A=0;A<s.matches.length;A++){if(k=[],e=j(s.matches[A],[A].concat(g),n)||e,e!==!0&&void 0!=e&&z[z.length-1]<s.matches.length){var B=c.matches.indexOf(e)+1;c.matches.length>B&&(e=j(c.matches[B],[B].concat(g.slice(1,g.length)),n),e&&(z.push(B.toString()),a.each(k,function(a,b){b.alternation=g.length-1})))}r=k.slice(),h=x,k=[];for(var C=0;C<y.length;C++)d[C]=y[C];for(var D=0;D<r.length;D++){var E=r[D];E.alternation=E.alternation||v;for(var F=0;F<t.length;F++){var G=t[F];if(E.match.mask==G.match.mask&&("string"!=typeof w||-1!=a.inArray(E.locator[E.alternation].toString(),z))){r.splice(D,1),D--,G.locator[E.alternation]=G.locator[E.alternation]+","+E.locator[E.alternation],G.alternation=E.alternation;break}}}t=t.concat(r)}"string"==typeof w&&(t=a.map(t,function(b,c){if(isFinite(c)){var d,e=b.alternation,f=b.locator[e].toString().split(",");b.locator[e]=void 0,b.alternation=void 0;for(var g=0;g<f.length;g++)d=-1!=a.inArray(f[g],z),d&&(void 0!=b.locator[e]?(b.locator[e]+=",",b.locator[e]+=f[g]):b.locator[e]=parseInt(f[g]),b.alternation=e);if(void 0!=b.locator[e])return b}})),k=u.concat(t),h=b,l=k.length>0}else e=s.matches[w]?j(s.matches[w],[w].concat(g),n):!1;if(e)return!0}else if(e.isQuantifier&&n!==!0)for(var H=e,I=d.length>0&&n!==!0?d.shift():0;I<(isNaN(H.quantifier.max)?I+1:H.quantifier.max)&&b>=h;I++){var J=c.matches[a.inArray(H,c.matches)-1];if(e=j(J,[I].concat(g),!0)){var p=k[k.length-1].match;p.optionalQuantifier=I>H.quantifier.min-1;var q=0==a.inArray(p,J.matches);if(q){if(I>H.quantifier.min-1){l=!0,h=b;break}return!0}return!0}}else if(e=f(e,d,g,n))return!0}else h++}for(var m=d.length>0?d.shift():0;m<c.matches.length;m++)if(c.matches[m].isQuantifier!==!0){var n=j(c.matches[m],[m].concat(e),g);if(n&&h==b)return n;if(h>b)break}}var g=i().maskToken,h=c?d:0,j=c||[0],k=[],l=!1;if(e===!0&&i().tests[b])return i().tests[b];if(void 0==c){for(var m,n=b-1;void 0==(m=i().validPositions[n])&&n>-1&&(!i().tests[n]||void 0==(m=i().tests[n][0]));)n--;void 0!=m&&n>-1&&(h=n,j=m.locator.slice())}for(var o=j.shift();o<g.length;o++){var p=f(g[o],j,[o]);if(p&&h==b||h>b)break}return(0==k.length||l)&&k.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),i().tests[b]=a.extend(!0,[],k),i().tests[b]}function v(){return void 0==i()._buffer&&(i()._buffer=h(!1,1)),i()._buffer}function w(){return void 0==i().buffer&&(i().buffer=h(!0,o(),!0)),i().buffer}function x(a,b,c){if(c=c||w().slice(),a===!0)n(),a=0,b=c.length;else for(var d=a;b>d;d++)delete i().validPositions[d],delete i().tests[d];for(var d=a;b>d;d++)c[d]!=g.skipOptionalPartCharacter&&A(d,c[d],!0,!0)}function y(a,b){switch(b.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase()}return a}function z(b,c){for(var d=g.greedy?c:c.slice(0,1),e=!1,f=0;f<b.length;f++)if(-1!=a.inArray(b[f],d)){e=!0;break}return e}function A(b,c,d,e){function f(b,c,d,e){var f=!1;return a.each(u(b),function(h,j){for(var k=j.match,l=c?1:0,m="",r=(w(),k.cardinality);r>l;r--)m+=F(b-(r-1));if(c&&(m+=c),f=null!=k.fn?k.fn.test(m,i(),b,d,g):c!=k.def&&c!=g.skipOptionalPartCharacter||""==k.def?!1:{c:k.def,pos:b},f!==!1){var s=void 0!=f.c?f.c:c;s=s==g.skipOptionalPartCharacter&&null===k.fn?k.def:s;var t=b,u=w();if(void 0!=f.remove&&(a.isArray(f.remove)||(f.remove=[f.remove]),a.each(f.remove.sort(function(a,b){return b-a}),function(a,b){q(b,b+1,!0)})),void 0!=f.insert&&(a.isArray(f.insert)||(f.insert=[f.insert]),a.each(f.insert.sort(function(a,b){return a-b}),function(a,b){A(b.pos,b.c,!0)})),f.refreshFromBuffer){var v=f.refreshFromBuffer;if(d=!0,x(v===!0?v:v.start,v.end,u),void 0==f.pos&&void 0==f.c)return f.pos=o(),!1;if(t=void 0!=f.pos?f.pos:b,t!=b)return f=a.extend(f,A(t,s,!0)),!1}else if(f!==!0&&void 0!=f.pos&&f.pos!=b&&(t=f.pos,x(b,t),t!=b))return f=a.extend(f,A(t,s,!0)),!1;return 1!=f&&void 0==f.pos&&void 0==f.c?!1:(h>0&&n(!0),p(t,a.extend({},j,{input:y(s,k)}),e)||(f=!1),!1)}}),f}function h(b,c,d,e){for(var f,h,j,k,l=a.extend(!0,{},i().validPositions),m=o();m>=0&&(k=i().validPositions[m],!k||void 0==k.alternation||(f=m,h=i().validPositions[f].alternation,r(f).locator[k.alternation]==k.locator[k.alternation]));m--);if(void 0!=h){f=parseInt(f);for(var p in i().validPositions)if(p=parseInt(p),k=i().validPositions[p],p>=f&&void 0!=k.alternation){var q=i().validPositions[f].locator[h].toString().split(","),s=k.locator[h]||q[0];s.length>0&&(s=s.split(",")[0]);for(var t=0;t<q.length;t++)if(s<q[t]){for(var u,v,w=p;w>=0;w--)if(u=i().validPositions[w],void 0!=u){v=u.locator[h],u.locator[h]=parseInt(q[t]);break}if(s!=u.locator[h]){for(var x=[],y=0,z=p+1;z<o()+1;z++){var B=i().validPositions[z];B&&(null!=B.match.fn?x.push(B.input):b>z&&y++),delete i().validPositions[z],delete i().tests[z]}for(n(!0),g.keepStatic=!g.keepStatic,j=!0;x.length>0;){var C=x.shift();if(C!=g.skipOptionalPartCharacter&&!(j=A(o()+1,C,!1,!0)))break}if(u.alternation=h,u.locator[h]=v,j){for(var D=o(b)+1,E=0,z=p+1;z<o()+1;z++){var B=i().validPositions[z];B&&null==B.match.fn&&b>z&&E++}b+=E-y,j=A(b>D?D:b,c,d,e)}if(g.keepStatic=!g.keepStatic,j)return j;n(),i().validPositions=a.extend(!0,{},l)}}break}}return!1}function j(b,c){for(var d=i().validPositions[c],e=d.locator,f=e.length,g=b;c>g;g++)if(!B(g)){var h=u(g),j=h[0],k=-1;a.each(h,function(a,b){for(var c=0;f>c;c++)b.locator[c]&&z(b.locator[c].toString().split(","),e[c].toString().split(","))&&c>k&&(k=c,j=b)}),p(g,a.extend({},j,{input:j.match.def}),!0)}}d=d===!0;for(var k=w(),l=b-1;l>-1&&!i().validPositions[l];l--);for(l++;b>l;l++)void 0==i().validPositions[l]&&((!B(l)||k[l]!=H(l))&&u(l).length>1||k[l]==g.radixPoint||"0"==k[l]&&a.inArray(g.radixPoint,k)<l)&&f(l,k[l],!0);var m=b,s=!1,t=a.extend(!0,{},i().validPositions);if(m<C()&&(s=f(m,c,d,e),(!d||e)&&s===!1)){var v=i().validPositions[m];if(!v||null!=v.match.fn||v.match.def!=c&&c!=g.skipOptionalPartCharacter){if((g.insertMode||void 0==i().validPositions[D(m)])&&!B(m))for(var E=m+1,G=D(m);G>=E;E++)if(s=f(E,c,d,e),s!==!1){j(m,E),m=E;break}}else s={caret:D(m)}}if(s===!1&&g.keepStatic&&P(k)&&(s=h(b,c,d,e)),s===!0&&(s={pos:m}),a.isFunction(g.postValidation)&&0!=s&&!d){n(!0);var I=g.postValidation(w(),g);if(!I)return n(!0),i().validPositions=a.extend(!0,{},t),!1}return s}function B(a){var b=s(a);if(null!=b.fn)return b.fn;if(!g.keepStatic&&void 0==i().validPositions[a]){for(var c=u(a),d=!0,e=0;e<c.length;e++)if(""!=c[e].match.def&&(void 0==c[e].alternation||c[e].locator[c[e].alternation].length>1)){d=!1;break}return d}return!1}function C(){var a;fa=ea.prop("maxLength"),-1==fa&&(fa=void 0);var b,c=o(),d=i().validPositions[c],e=void 0!=d?d.locator.slice():void 0;for(b=c+1;void 0==d||null!=d.match.fn||null==d.match.fn&&""!=d.match.def;b++)d=r(b,e,b-1),e=d.locator.slice();var f=s(b-1);return a=""!=f.def?b:b-1,void 0==fa||fa>a?a:fa}function D(a){var b=C();if(a>=b)return b;for(var c=a;++c<b&&!B(c)&&(g.nojumps!==!0||g.nojumpsThreshold>c););return c}function E(a){var b=a;if(0>=b)return 0;for(;--b>0&&!B(b););return b}function F(a){return void 0==i().validPositions[a]?H(a):i().validPositions[a].input}function G(b,c,d,e,f){if(e&&a.isFunction(g.onBeforeWrite)){var h=g.onBeforeWrite.call(b,e,c,d,g);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;x(i===!0?i:i.start,i.end,h.buffer),n(!0),c=w()}d=h.caret||d}}b._valueSet(c.join("")),void 0!=d&&M(b,d),f===!0&&(ia=!0,a(b).trigger("input"))}function H(a,b){if(b=b||s(a),void 0!=b.placeholder)return b.placeholder;if(null==b.fn){if(!g.keepStatic&&void 0==i().validPositions[a]){for(var c,d=u(a),e=!1,f=0;f<d.length;f++){if(c&&""!=d[f].match.def&&d[f].match.def!=c.match.def&&(void 0==d[f].alternation||d[f].alternation==c.alternation)){e=!0;break}1!=d[f].match.optionality&&1!=d[f].match.optionalQuantifier&&(c=d[f])}if(e)return g.placeholder.charAt(a%g.placeholder.length)}return b.def}return g.placeholder.charAt(a%g.placeholder.length)}function I(b,c,d,e){function f(){var a=!1,b=v().slice(j,D(j)).join("").indexOf(h);if(-1!=b&&!B(j)){a=!0;for(var c=v().slice(j,j+b),d=0;d<c.length;d++)if(" "!=c[d]){a=!1;break}}return a}var g=void 0!=e?e.slice():b._valueGet().split(""),h="",j=0;if(n(),i().p=D(-1),c&&b._valueSet(""),!d){var k=v().slice(0,D(-1)).join(""),l=g.join("").match(new RegExp("^"+J(k),"g"));l&&l.length>0&&(g.splice(0,l.length*k.length),j=D(j))}a.each(g,function(c,e){var g=a.Event("keypress");g.which=e.charCodeAt(0),h+=e;var k=o(void 0,!0),l=i().validPositions[k],m=r(k+1,l?l.locator.slice():void 0,k);if(!f()||d){var n=d?c:null==m.match.fn&&m.match.optionality&&k+1<i().p?k+1:i().p;V.call(b,g,!0,!1,d,n),j=n+1,h=""}else V.call(b,g,!0,!1,!0,k+1)}),c&&G(b,w(),a(b).is(":focus")?D(o(0)):void 0,a.Event("checkval"))}function J(a){return b.escapeRegex(a)}function K(b){if(b[0].inputmask&&!b.hasClass("hasDatepicker")){var c=[],d=i().validPositions;for(var e in d)d[e].match&&null!=d[e].match.fn&&c.push(d[e].input);var f=(ga?c.reverse():c).join(""),h=(ga?w().slice().reverse():w()).join("");return a.isFunction(g.onUnMask)&&(f=g.onUnMask.call(b,h,f,g)||f),f}return b[0]._valueGet()}function L(a){if(ga&&"number"==typeof a&&(!g.greedy||""!=g.placeholder)){var b=w().length;a=b-a}return a}function M(b,c,d){var e,f=b.jquery&&b.length>0?b[0]:b;if("number"!=typeof c)return f.setSelectionRange?(c=f.selectionStart,d=f.selectionEnd):window.getSelection?(e=window.getSelection().getRangeAt(0),(e.commonAncestorContainer.parentNode==f||e.commonAncestorContainer==f)&&(c=e.startOffset,d=e.endOffset)):document.selection&&document.selection.createRange&&(e=document.selection.createRange(),c=0-e.duplicate().moveStart("character",-1e5),d=c+e.text.length),{begin:L(c),end:L(d)};if(c=L(c),d=L(d),d="number"==typeof d?d:c,a(f).is(":visible")){var h=a(f).css("font-size").replace("px","")*d;if(f.scrollLeft=h>f.scrollWidth?h:0,k||0!=g.insertMode||c!=d||d++,f.setSelectionRange)f.selectionStart=c,f.selectionEnd=d;else if(window.getSelection){if(e=document.createRange(),void 0==f.firstChild){var i=document.createTextNode("");f.appendChild(i)}e.setStart(f.firstChild,c<f._valueGet().length?c:f._valueGet().length),e.setEnd(f.firstChild,d<f._valueGet().length?d:f._valueGet().length),e.collapse(!0);var j=window.getSelection();j.removeAllRanges(),j.addRange(e)}else f.createTextRange&&(e=f.createTextRange(),e.collapse(!0),e.moveEnd("character",d),e.moveStart("character",c),e.select())}}function N(b){var c,d,e=w(),f=e.length,g=o(),h={},j=i().validPositions[g],k=void 0!=j?j.locator.slice():void 0;for(c=g+1;c<e.length;c++)d=r(c,k,c-1),k=d.locator.slice(),h[c]=a.extend(!0,{},d);var l=j&&void 0!=j.alternation?j.locator[j.alternation]:void 0;for(c=f-1;c>g&&(d=h[c],(d.match.optionality||d.match.optionalQuantifier||l&&(l!=h[c].locator[j.alternation]&&null!=d.match.fn||null==d.match.fn&&d.locator[j.alternation]&&z(d.locator[j.alternation].toString().split(","),l.split(","))&&""!=u(c)[0].def))&&e[c]==H(c,d.match));c--)f--;return b?{l:f,def:h[f]?h[f].match:void 0}:f}function O(a){for(var b=N(),c=a.length-1;c>b&&!B(c);c--);return a.splice(b,c+1-b),a}function P(b){if(a.isFunction(g.isComplete))return g.isComplete.call(ea,b,g);if("*"==g.repeat)return void 0;{var c=!1,d=N(!0),e=E(d.l);o()}if(void 0==d.def||d.def.newBlockMarker||d.def.optionality||d.def.optionalQuantifier){c=!0;for(var f=0;e>=f;f++){var h=r(f).match;if(null!=h.fn&&void 0==i().validPositions[f]&&h.optionality!==!0&&h.optionalQuantifier!==!0||null==h.fn&&b[f]!=H(f,h)){c=!1;break}}}return c}function Q(a,b){return ga?a-b>1||a-b==1&&g.insertMode:b-a>1||b-a==1&&g.insertMode}function R(c){var d=a._data(c).events,e=!1;a.each(d,function(c,d){a.each(d,function(a,c){if("inputmask"==c.namespace&&"setvalue"!=c.type){var d=c.handler;c.handler=function(a){if(!(this.disabled||this.readOnly&&!("keydown"==a.type&&a.ctrlKey&&67==a.keyCode||a.keyCode==b.keyCode.TAB))){switch(a.type){case"input":if(ia===!0||e===!0)return ia=!1,a.preventDefault();break;case"keydown":ha=!1,e=!1;break;case"keypress":if(ha===!0)return a.preventDefault();ha=!0;break;case"compositionstart":e=!0;break;case"compositionupdate":ia=!0;break;case"compositionend":e=!1}return d.apply(this,arguments)}a.preventDefault()}}})})}function S(b){function c(b){if(void 0==a.valHooks[b]||1!=a.valHooks[b].inputmaskpatch){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},d=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(b){a(b);if(b.inputmask){if(b.inputmask.opts.autoUnmask)return b.inputmask.unmaskedvalue();var d=c(b),e=b.inputmask.maskset,f=e._buffer;return f=f?f.join(""):"",d!=f?d:""}return c(b)},set:function(b,c){var e,f=a(b);return e=d(b,c),b.inputmask&&f.triggerHandler("setvalue.inputmask"),e},inputmaskpatch:!0}}}function d(){a(this);return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():g.call(this)!=v().join("")?g.call(this):"":g.call(this)}function e(b){h.call(this,b),this.inputmask&&a(this).triggerHandler("setvalue.inputmask")}function f(b){a(b).bind("mouseenter.inputmask",function(b){var c=a(this),d=this,e=d._valueGet();""!=e&&e!=w().join("")&&c.triggerHandler("setvalue.inputmask")});
//!! the bound handlers are executed in the order they where bound
var c=a._data(b).events,d=c.mouseover;if(d){for(var e=d[d.length-1],f=d.length-1;f>0;f--)d[f]=d[f-1];d[0]=e}}var g,h;if(!b._valueGet){var i;Object.getOwnPropertyDescriptor&&void 0==b.value?(g=function(){return this.textContent},h=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:d,set:e})):((i=Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(b,"value"))&&i.configurable,document.__lookupGetter__&&b.__lookupGetter__("value")?(g=b.__lookupGetter__("value"),h=b.__lookupSetter__("value"),b.__defineGetter__("value",d),b.__defineSetter__("value",e)):(g=function(){return b.value},h=function(a){b.value=a},c(b.type),f(b))),b._valueGet=function(a){return ga&&a!==!0?g.call(this).split("").reverse().join(""):g.call(this)},b._valueSet=function(a){h.call(this,ga?a.split("").reverse().join(""):a)}}}function T(c,d,e,f){function h(){if(g.keepStatic){n(!0);var b,d=[],e=a.extend(!0,{},i().validPositions);for(b=o();b>=0;b--){var f=i().validPositions[b];if(f&&(null!=f.match.fn&&d.push(f.input),delete i().validPositions[b],void 0!=f.alternation&&f.locator[f.alternation]==r(b).locator[f.alternation]))break}if(b>-1)for(;d.length>0;){i().p=D(o());var h=a.Event("keypress");h.which=d.pop().charCodeAt(0),V.call(c,h,!0,!1,!1,i().p)}else i().validPositions=a.extend(!0,{},e)}}if((g.numericInput||ga)&&(d==b.keyCode.BACKSPACE?d=b.keyCode.DELETE:d==b.keyCode.DELETE&&(d=b.keyCode.BACKSPACE),ga)){var j=e.end;e.end=e.begin,e.begin=j}if(d==b.keyCode.BACKSPACE&&(e.end-e.begin<1||0==g.insertMode)?(e.begin=E(e.begin),void 0==i().validPositions[e.begin]||i().validPositions[e.begin].input!=g.groupSeparator&&i().validPositions[e.begin].input!=g.radixPoint||e.begin--):d==b.keyCode.DELETE&&e.begin==e.end&&(e.end=B(e.end)?e.end+1:D(e.end)+1,void 0==i().validPositions[e.begin]||i().validPositions[e.begin].input!=g.groupSeparator&&i().validPositions[e.begin].input!=g.radixPoint||e.end++),q(e.begin,e.end,!1,f),f!==!0){h();var k=o(e.begin);k<e.begin?(-1==k&&n(),i().p=D(k)):i().p=e.begin}}function U(d){var e=this,f=a(e),h=d.keyCode,k=M(e);h==b.keyCode.BACKSPACE||h==b.keyCode.DELETE||j&&127==h||d.ctrlKey&&88==h&&!c("cut")?(d.preventDefault(),88==h&&(aa=w().join("")),T(e,h,k),G(e,w(),i().p,d,aa!=w().join("")),e._valueGet()==v().join("")?f.trigger("cleared"):P(w())===!0&&f.trigger("complete"),g.showTooltip&&f.prop("title",i().mask)):h==b.keyCode.END||h==b.keyCode.PAGE_DOWN?setTimeout(function(){var a=D(o());g.insertMode||a!=C()||d.shiftKey||a--,M(e,d.shiftKey?k.begin:a,a)},0):h==b.keyCode.HOME&&!d.shiftKey||h==b.keyCode.PAGE_UP?M(e,0,d.shiftKey?k.begin:0):(g.undoOnEscape&&h==b.keyCode.ESCAPE||90==h&&d.ctrlKey)&&d.altKey!==!0?(I(e,!0,!1,aa.split("")),f.click()):h!=b.keyCode.INSERT||d.shiftKey||d.ctrlKey?0!=g.insertMode||d.shiftKey||(h==b.keyCode.RIGHT?setTimeout(function(){var a=M(e);M(e,a.begin)},0):h==b.keyCode.LEFT&&setTimeout(function(){var a=M(e);M(e,ga?a.begin+1:a.begin-1)},0)):(g.insertMode=!g.insertMode,M(e,g.insertMode||k.begin!=C()?k.begin:k.begin-1)),g.onKeyDown.call(this,d,w(),M(e).begin,g),ja=-1!=a.inArray(h,g.ignorables)}function V(c,d,e,f,h){var j=this,k=a(j),l=c.which||c.charCode||c.keyCode;if(!(d===!0||c.ctrlKey&&c.altKey)&&(c.ctrlKey||c.metaKey||ja))return!0;if(l){46==l&&0==c.shiftKey&&","==g.radixPoint&&(l=44);var m,o=d?{begin:h,end:h}:M(j),q=String.fromCharCode(l),r=Q(o.begin,o.end);r&&(i().undoPositions=a.extend(!0,{},i().validPositions),T(j,b.keyCode.DELETE,o,!0),o.begin=i().p,g.insertMode||(g.insertMode=!g.insertMode,p(o.begin,f),g.insertMode=!g.insertMode),r=!g.multi),i().writeOutBuffer=!0;var s=ga&&!r?o.end:o.begin,t=A(s,q,f);if(t!==!1){if(t!==!0&&(s=void 0!=t.pos?t.pos:s,q=void 0!=t.c?t.c:q),n(!0),void 0!=t.caret)m=t.caret;else{var v=i().validPositions;m=!g.keepStatic&&(void 0!=v[s+1]&&u(s+1,v[s].locator.slice(),s).length>1||void 0!=v[s].alternation)?s+1:D(s)}i().p=m}if(e!==!1){var y=this;if(setTimeout(function(){g.onKeyValidation.call(y,t,g)},0),i().writeOutBuffer&&t!==!1){var z=w();G(j,z,d?void 0:g.numericInput?E(m):m,c,d!==!0),d!==!0&&setTimeout(function(){P(z)===!0&&k.trigger("complete")},0)}else r&&(i().buffer=void 0,i().validPositions=i().undoPositions)}else r&&(i().buffer=void 0,i().validPositions=i().undoPositions);if(g.showTooltip&&k.prop("title",i().mask),d&&a.isFunction(g.onBeforeWrite)){var B=g.onBeforeWrite.call(this,c,w(),m,g);if(B&&B.refreshFromBuffer){var C=B.refreshFromBuffer;x(C===!0?C:C.start,C.end,B.buffer),n(!0),B.caret&&(i().p=B.caret)}}c.preventDefault()}}function W(b){var c=this,d=a(c),e=c._valueGet(!0),f=M(c);if("propertychange"==b.type&&c._valueGet().length<=C())return!0;if("paste"==b.type){var h=e.substr(0,f.begin),i=e.substr(f.end,e.length);h==v().slice(0,f.begin).join("")&&(h=""),i==v().slice(f.end).join("")&&(i=""),window.clipboardData&&window.clipboardData.getData?e=h+window.clipboardData.getData("Text")+i:b.originalEvent&&b.originalEvent.clipboardData&&b.originalEvent.clipboardData.getData&&(e=h+b.originalEvent.clipboardData.getData("text/plain")+i)}var j=e;if(a.isFunction(g.onBeforePaste)){if(j=g.onBeforePaste.call(c,e,g),j===!1)return b.preventDefault(),!1;j||(j=e)}return I(c,!1,!1,ga?j.split("").reverse():j.split("")),G(c,w(),void 0,b,!0),d.click(),P(w())===!0&&d.trigger("complete"),!1}function X(b){var c=this;I(c,!0,!1),P(w())===!0&&a(c).trigger("complete"),b.preventDefault()}function Y(a){var b=this;aa=w().join(""),(""==ca||0!=a.originalEvent.data.indexOf(ca))&&(ba=M(b))}function Z(b){var c=this,d=M(c);0==b.originalEvent.data.indexOf(ca)&&(n(),d=ba);var e=b.originalEvent.data;M(c,d.begin,d.end);for(var f=0;f<e.length;f++){var h=a.Event("keypress");h.which=e.charCodeAt(f),ha=!1,ja=!1,V.call(c,h)}setTimeout(function(){var a=i().p;G(c,w(),g.numericInput?E(a):a)},0),ca=b.originalEvent.data}function $(a){}function _(c){ea=a(c),g.showTooltip&&ea.prop("title",i().mask),("rtl"==c.dir||g.rightAlign)&&ea.css("text-align","right"),("rtl"==c.dir||g.numericInput)&&(c.dir="ltr",ea.removeAttr("dir"),c.inputmask.isRTL=!0,ga=!0),ea.unbind(".inputmask"),(ea.is(":input")&&d(ea.attr("type"))||c.isContentEditable)&&(ea.closest("form").bind("submit",function(a){aa!=w().join("")&&ea.change(),g.clearMaskOnLostFocus&&ea[0]._valueGet&&ea[0]._valueGet()==v().join("")&&ea[0]._valueSet(""),g.removeMaskOnSubmit&&ea.inputmask("remove")}).bind("reset",function(){setTimeout(function(){ea.triggerHandler("setvalue.inputmask")},0)}),ea.bind("mouseenter.inputmask",function(){var b=a(this),c=this;la=!0,!b.is(":focus")&&g.showMaskOnHover&&c._valueGet()!=w().join("")&&G(c,w())}).bind("blur.inputmask",function(b){var c=a(this),d=this;if(d.inputmask){var e=d._valueGet(),f=w().slice();ka=!0,aa!=f.join("")&&setTimeout(function(){c.change(),aa=f.join("")},0),""!=e&&(g.clearMaskOnLostFocus&&(e==v().join("")?f=[]:O(f)),P(f)===!1&&(c.trigger("incomplete"),g.clearIncomplete&&(n(),f=g.clearMaskOnLostFocus?[]:v().slice())),G(d,f,void 0,b))}}).bind("focus.inputmask",function(b){var c=(a(this),this),d=c._valueGet();g.showMaskOnFocus&&(!g.showMaskOnHover||g.showMaskOnHover&&""==d)?c._valueGet()!=w().join("")&&G(c,w(),D(o())):la===!1&&M(c,D(o())),aa=w().join("")}).bind("mouseleave.inputmask",function(){var b=a(this),c=this;if(la=!1,g.clearMaskOnLostFocus){var d=w().slice(),e=c._valueGet();b.is(":focus")||e==b.attr("placeholder")||""==e||(e==v().join("")?d=[]:O(d),G(c,d))}}).bind("click.inputmask",function(){var b=a(this),c=this;if(b.is(":focus")){var d=M(c);if(d.begin==d.end)if(g.radixFocus&&""!=g.radixPoint&&-1!=a.inArray(g.radixPoint,w())&&(ka||w().join("")==v().join("")))M(c,a.inArray(g.radixPoint,w())),ka=!1;else{var e=L(d.begin),f=D(o(e));f>e?M(c,B(e)?e:D(e)):M(c,f)}}}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){M(a,0,D(o()))},0)}).bind(m+".inputmask dragdrop.inputmask drop.inputmask",W).bind("cut.inputmask",function(c){ia=!0;var d=this,e=a(d),f=M(d);T(d,b.keyCode.DELETE,f),G(d,w(),i().p,c,aa!=w().join("")),d._valueGet()==v().join("")&&e.trigger("cleared"),g.showTooltip&&e.prop("title",i().mask)}).bind("complete.inputmask",g.oncomplete).bind("incomplete.inputmask",g.onincomplete).bind("cleared.inputmask",g.oncleared),ea.bind("keydown.inputmask",U).bind("keypress.inputmask",V),l||ea.bind("compositionstart.inputmask",Y).bind("compositionupdate.inputmask",Z).bind("compositionend.inputmask",$),"paste"===m&&ea.bind("input.inputmask",X)),ea.bind("setvalue.inputmask",function(){var b=this,c=b._valueGet();b._valueSet(a.isFunction(g.onBeforeMask)?g.onBeforeMask.call(b,c,g)||c:c),I(b,!0,!1),aa=w().join(""),(g.clearMaskOnLostFocus||g.clearIncomplete)&&b._valueGet()==v().join("")&&b._valueSet("")}),S(c);var e=a.isFunction(g.onBeforeMask)?g.onBeforeMask.call(c,c._valueGet(),g)||c._valueGet():c._valueGet();I(c,!0,!1,e.split(""));var f=w().slice();aa=f.join("");var h;try{h=document.activeElement}catch(j){}P(f)===!1&&g.clearIncomplete&&n(),g.clearMaskOnLostFocus&&(f.join("")==v().join("")?f=[]:O(f)),G(c,f),h===c&&M(c,D(o())),R(c)}var aa,ba,ca,da,ea,fa,ga=!1,ha=!1,ia=!1,ja=!1,ka=!0,la=!0;if(void 0!=e)switch(e.action){case"isComplete":return da=e.el,ea=a(da),f=da.inputmask.maskset,g=da.inputmask.opts,P(e.buffer);case"unmaskedvalue":return da=e.el,ea=a(da),f=da.inputmask.maskset,g=da.inputmask.opts,ga=da.inputmask.isRTL,K(ea);case"mask":aa=w().join(""),_(e.el);break;case"format":ea=a({}),ea[0].inputmask=new b,ea[0].inputmask.opts=g,ea[0].inputmask.el=ea[0],ea[0].inputmask.maskset=f,ea[0].inputmask.isRTL=g.numericInput,g.numericInput&&(ga=!0);var ma=(a.isFunction(g.onBeforeMask)?g.onBeforeMask.call(ea,e.value,g)||e.value:e.value).split("");return I(ea,!1,!1,ga?ma.reverse():ma),a.isFunction(g.onBeforeWrite)&&g.onBeforeWrite.call(this,void 0,w(),0,g),e.metadata?{value:ga?w().slice().reverse().join(""):w().join(""),metadata:ea.inputmask("getmetadata")}:ga?w().slice().reverse().join(""):w().join("");case"isValid":ea=a({}),ea[0].inputmask=new b,ea[0].inputmask.opts=g,ea[0].inputmask.el=ea[0],ea[0].inputmask.maskset=f,ea[0].inputmask.isRTL=g.numericInput,g.numericInput&&(ga=!0);var ma=e.value.split("");I(ea,!1,!0,ga?ma.reverse():ma);for(var na=w(),oa=N(),pa=na.length-1;pa>oa&&!B(pa);pa--);return na.splice(oa,pa+1-oa),P(na)&&e.value==na.join("");case"getemptymask":return da=e.el,ea=a(da),f=da.inputmask.maskset,g=da.inputmask.opts,v();case"remove":da=e.el,ea=a(da),f=da.inputmask.maskset,g=da.inputmask.opts,da._valueSet(K(ea)),ea.unbind(".inputmask"),da.inputmask=void 0;var qa;Object.getOwnPropertyDescriptor&&(qa=Object.getOwnPropertyDescriptor(da,"value")),qa&&qa.get?da._valueGet&&Object.defineProperty(da,"value",{get:da._valueGet,set:da._valueSet}):document.__lookupGetter__&&da.__lookupGetter__("value")&&da._valueGet&&(da.__defineGetter__("value",da._valueGet),da.__defineSetter__("value",da._valueSet));try{delete da._valueGet,delete da._valueSet}catch(ra){da._valueGet=void 0,da._valueSet=void 0}break;case"getmetadata":if(da=e.el,ea=a(da),f=da.inputmask.maskset,g=da.inputmask.opts,a.isArray(f.metadata)){for(var sa,ta=o(),ua=ta;ua>=0;ua--)if(i().validPositions[ua]&&void 0!=i().validPositions[ua].alternation){sa=i().validPositions[ua].alternation;break}return void 0!=sa?f.metadata[i().validPositions[ta].locator[sa]]:f.metadata[0]}return f.metadata}}b.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:a.noop,onBeforeMask:void 0,onBeforePaste:void 0,onBeforeWrite:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",groupSeparator:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,canClearPosition:a.noop,postValidation:void 0},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},masksCache:{},mask:function(c){var d=c.jquery&&c.length>0?c[0]:c,e=a.extend(!0,{},this.opts);f(c,e,a.extend(!0,{},this.userOptions));var i=g(e,this.noMasksCache);return void 0!=i&&(d.inputmask=new b,d.inputmask.opts=e,d.inputmask.noMasksCache=this.noMasksCache,d.inputmask.el=d,d.inputmask.maskset=i,d.inputmask.isRTL=!1,h({action:"mask",el:d},i,d.inputmask.opts)),c},unmaskedvalue:function(){return this.el?h({action:"unmaskedvalue",el:this.el}):void 0},remove:function(){return this.el?(h({action:"remove",el:this.el}),this.el.inputmask=void 0,this.el):void 0},getemptymask:function(){return this.el?h({action:"getemptymask",el:this.el}):void 0},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.el?h({action:"isComplete",buffer:this.el._valueGet().split(""),el:this.el}):void 0},getmetadata:function(){return this.el?h({action:"getmetadata",el:this.el}):void 0}},b.extendDefaults=function(c){a.extend(b.prototype.defaults,c)},b.extendDefinitions=function(c){a.extend(b.prototype.defaults.definitions,c)},b.extendAliases=function(c){a.extend(b.prototype.defaults.aliases,c)},b.format=function(c,d,f){var i=a.extend(!0,{},b.prototype.defaults,d);return e(i.alias,d,i),h({action:"format",value:c,metadata:f},g(i,d&&void 0!==d.definitions),i)},b.isValid=function(c,d){var f=a.extend(!0,{},b.prototype.defaults,d);return e(f.alias,d,f),h({action:"isValid",value:c},g(f,d&&void 0!==d.definitions),f)},b.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},b.keyCode={ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91};var i=navigator.userAgent,j=null!==i.match(new RegExp("iphone","i")),k=(null!==i.match(new RegExp("android.*safari.*","i")),null!==i.match(new RegExp("android.*chrome.*","i"))),l=null!==i.match(new RegExp("android.*firefox.*","i")),m=(/Kindle/i.test(i)||/Silk/i.test(i)||/KFTT/i.test(i)||/KFOT/i.test(i)||/KFJWA/i.test(i)||/KFJWI/i.test(i)||/KFSOWI/i.test(i)||/KFTHWA/i.test(i)||/KFTHWI/i.test(i)||/KFAPWA/i.test(i)||/KFAPWI/i.test(i),c("paste")?"paste":c("input")?"input":"propertychange");return window.inputmask=b,b}(jQuery),function(a){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(b,c){var d;if(c=c||{},"string"==typeof b)switch(b){case"mask":return d=new inputmask(c),this.each(function(){d.mask(this)});case"unmaskedvalue":var e=this.jquery&&this.length>0?this[0]:this;return e.inputmask?e.inputmask.unmaskedvalue():a(e).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":var e=this.jquery&&this.length>0?this[0]:this;return e.inputmask?e.inputmask.getemptymask():"";case"hasMaskedValue":var e=this.jquery&&this.length>0?this[0]:this;return e.inputmask?e.inputmask.hasMaskedValue():!1;case"isComplete":var e=this.jquery&&this.length>0?this[0]:this;return e.inputmask?e.inputmask.isComplete():!0;case"getmetadata":var e=this.jquery&&this.length>0?this[0]:this;return e.inputmask?e.inputmask.getmetadata():void 0;default:return c.alias=b,d=new inputmask(c),this.each(function(){d.mask(this)})}else{if("object"==typeof b)return d=new inputmask(b),this.each(function(){d.mask(this)});if(void 0==b)return this.each(function(){d=new inputmask(c),d.mask(this)})}}),a.fn.inputmask}(jQuery),function(a){return inputmask.extendDefinitions({h:{validator:"[01][0-9]|2[0-3]",cardinality:2,prevalidator:[{validator:"[0-2]",cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:"[0-5]",cardinality:1}]},d:{validator:"0[1-9]|[12][0-9]|3[01]",cardinality:2,prevalidator:[{validator:"[0-3]",cardinality:1}]},m:{validator:"0[1-9]|1[012]",cardinality:2,prevalidator:[{validator:"[01]",cardinality:1}]},y:{validator:"(19|20)\\d{2}",cardinality:4,prevalidator:[{validator:"[12]",cardinality:1},{validator:"(19|20)",cardinality:2},{validator:"(19|20)\\d",cardinality:3}]}}),inputmask.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var b=inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+b+"[01])")},val2:function(a){var b=inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+b+"(0[1-9]|1[012]))|(30"+b+"(0[13-9]|1[012]))|(31"+b+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return(isNaN(d)?!1:d>=b&&c>=d)||(isNaN(e)?!1:e>=b&&c>=e)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(d>b){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);e+c>b;)e--;var g=e+f;return a>g?a:g}return d},onKeyDown:function(b,c,d,e){var f=a(this);if(b.ctrlKey&&b.keyCode==inputmask.keyCode.RIGHT){var g=new Date;f.val(g.getDate().toString()+(g.getMonth()+1).toString()+g.getFullYear().toString()),f.triggerHandler("setvalue.inputmask")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!=a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!=e.separator&&-1=="-./".indexOf(a.charAt(1))||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1==f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);-1!=f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);if(!d&&!g&&(a.charAt(1)==e.separator||-1!="-./".indexOf(a.charAt(1)))&&(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0))))return b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)};if(e.mask.indexOf("2")==e.mask.length-1&&g){var h=b.buffer.join("").substr(4,4)+a;if(h!=e.leapday)return!0;var i=parseInt(b.buffer.join("").substr(0,4),10);return i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}return g},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);-1!=f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=1==a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){if(e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)){var f=b.buffer.join("").substr(0,6);if(f!=e.leapday)return!0;var g=parseInt(a,10);return g%4===0?g%100===0?g%400===0?!0:!1:!0:!1}return!1},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear)){var h=b.buffer.join("").substr(0,6);if(h!=e.leapday)f=!0;else{var i=parseInt(a,10);f=i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}}else f=!1;if(f)return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var b=inputmask.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+b+"[0-3])|(02"+b+"[0-2])")},val2:function(a){var b=inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+b+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+b+"30)|((0[13578]|1[02])"+b+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(b,c,d,e){var f=a(this);if(b.ctrlKey&&b.keyCode==inputmask.keyCode.RIGHT){var g=new Date;f.val((g.getMonth()+1).toString()+g.getDate().toString()+g.getFullYear().toString()),f.triggerHandler("setvalue.inputmask")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(b,c,d,e){var f=a(this);if(b.ctrlKey&&b.keyCode==inputmask.keyCode.RIGHT){var g=new Date;f.val(g.getFullYear().toString()+(g.getMonth()+1).toString()+g.getDate().toString()),f.triggerHandler("setvalue.inputmask")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"==e.hourFormat&&24==parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)==e.timeseparator||-1!="-.:".indexOf(a.charAt(1)))&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24==g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,10>g?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"}}),inputmask}(jQuery),function(a){return inputmask.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"}}),inputmask.extendAliases({url:{mask:"ir",placeholder:"",separator:"",defaultPrefix:"http://",regex:{urlpre1:new RegExp("[fh]"),urlpre2:new RegExp("(ft|ht)"),urlpre3:new RegExp("(ftp|htt)"),urlpre4:new RegExp("(ftp:|http|ftps)"),urlpre5:new RegExp("(ftp:/|ftps:|http:|https)"),urlpre6:new RegExp("(ftp://|ftps:/|http:/|https:)"),urlpre7:new RegExp("(ftp://|ftps://|http://|https:/)"),urlpre8:new RegExp("(ftp://|ftps://|http://|https://)")},definitions:{i:{validator:function(a,b,c,d,e){return!0},cardinality:8,prevalidator:function(){for(var a=[],b=8,c=0;b>c;c++)a[c]=function(){var a=c;return{validator:function(b,c,d,e,f){if(f.regex["urlpre"+(a+1)]){var g,h=b;a+1-b.length>0&&(h=c.buffer.join("").substring(0,a+1-b.length)+""+h);var i=f.regex["urlpre"+(a+1)].test(h);if(!e&&!i){for(d-=a,g=0;g<f.defaultPrefix.length;g++)c.buffer[d]=f.defaultPrefix[g],d++;for(g=0;g<h.length-1;g++)c.buffer[d]=h[g],d++;return{pos:d}}return i}return!1},cardinality:a}}();return a}()},r:{validator:".",cardinality:50}},insertMode:!1,autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c,d,e){return c-1>-1&&"."!=b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!=b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}}},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,64}]@*{1,64}[.*{2,64}][.*{2,6}][.*{1,2}]",greedy:!1,onBeforePaste:function(a,b){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"}}}}),inputmask}(jQuery),function(a){return inputmask.extendAliases({numeric:{mask:function(a){function b(b){for(var c="",d=0;d<b.length;d++)c+=a.definitions[b[d]]?"\\"+b[d]:b[d];return c}if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator==a.radixPoint&&("."==a.radixPoint?a.groupSeparator=",":","==a.radixPoint?a.groupSeparator=".":a.groupSeparator="")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=void 0),a.autoGroup=a.autoGroup&&""!=a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var c=Math.floor(a.integerDigits/a.groupSize),d=a.integerDigits%a.groupSize;a.integerDigits=parseInt(a.integerDigits)+(0==d?c-1:c)}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),a.radixFocus=a.radixFocus&&"0"==a.placeholder,a.definitions[";"]=a.definitions["~"],a.definitions[";"].definitionSymbol="~";var e=b(a.prefix);return e+="[+]",e+="~{1,"+a.integerDigits+"}",void 0!=a.digits&&(isNaN(a.digits)||parseInt(a.digits)>0)&&(e+=a.digitsOptional?"["+(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}]":(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}"),""!=a.negationSymbol.back&&(e+="[-]"),e+=b(a.suffix),a.greedy=!1,e},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",radixFocus:!0,groupSize:3,autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:void 0,max:void 0,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,postFormat:function(b,c,d,e){var f=!1;b.length>=e.suffix.length&&b.join("").indexOf(e.suffix)==b.length-e.suffix.length&&(b.length=b.length-e.suffix.length,f=!0),c=c>=b.length?b.length-1:c<e.prefix.length?e.prefix.length:c;var g=!1,h=b[c];if(""==e.groupSeparator||-1!=a.inArray(e.radixPoint,b)&&c>a.inArray(e.radixPoint,b)||new RegExp("["+inputmask.escapeRegex(e.negationSymbol.front)+"+]").test(h)){if(f)for(var i=0,j=e.suffix.length;j>i;i++)b.push(e.suffix.charAt(i));return{pos:c}}var k=b.slice();h==e.groupSeparator&&(k.splice(c--,1),h=k[c]),d?h!=e.radixPoint&&(k[c]="?"):k.splice(c,0,"?");var l=k.join(""),m=l;if(l.length>0&&e.autoGroup||d&&-1!=l.indexOf(e.groupSeparator)){var n=inputmask.escapeRegex(e.groupSeparator);g=0==l.indexOf(e.groupSeparator),l=l.replace(new RegExp(n,"g"),"");var o=l.split(e.radixPoint);if(l=""==e.radixPoint?l:o[0],l!=e.prefix+"?0"&&l.length>=e.groupSize+e.prefix.length)for(var p=new RegExp("([-+]?[\\d?]+)([\\d?]{"+e.groupSize+"})");p.test(l);)l=l.replace(p,"$1"+e.groupSeparator+"$2"),l=l.replace(e.groupSeparator+e.groupSeparator,e.groupSeparator);""!=e.radixPoint&&o.length>1&&(l+=e.radixPoint+o[1])}g=m!=l,b.length=l.length;for(var i=0,j=l.length;j>i;i++)b[i]=l.charAt(i);var q=a.inArray("?",b);if(-1==q&&h==e.radixPoint&&(q=a.inArray(e.radixPoint,b)),d?b[q]=h:b.splice(q,1),!g&&f)for(var i=0,j=e.suffix.length;j>i;i++)b.push(e.suffix.charAt(i));return{pos:q,refreshFromBuffer:g,buffer:b}},onBeforeWrite:function(b,c,d,e){if(b&&"blur"==b.type){var f=c.join(""),g=f.replace(e.prefix,"");if(g=g.replace(e.suffix,""),g=g.replace(new RegExp(inputmask.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(g=g.replace(inputmask.escapeRegex(e.radixPoint),".")),isFinite(g)&&isFinite(e.min)&&parseFloat(g)<parseFloat(e.min))return a.extend(!0,{refreshFromBuffer:!0,buffer:(e.prefix+e.min).split("")},e.postFormat((e.prefix+e.min).split(""),0,!0,e));var h=""!=e.radixPoint?c.join("").split(e.radixPoint):[c.join("")],i=h[0].match(e.regex.integerPart(e)),j=2==h.length?h[1].match(e.regex.integerNPart(e)):void 0;!i||i[0]!=e.negationSymbol.front+"0"&&i[0]!=e.negationSymbol.front&&"+"!=i[0]||void 0!=j&&!j[0].match(/^0+$/)||c.splice(i.index,1);var k=a.inArray(e.radixPoint,c);if(-1!=k&&isFinite(e.digits)&&!e.digitsOptional){for(var l=1;l<=e.digits;l++)(void 0==c[k+l]||c[k+l]==e.placeholder.charAt(0))&&(c[k+l]="0");return{refreshFromBuffer:!0,buffer:c}}}if(e.autoGroup){var m=e.postFormat(c,d-1,!0,e);return m.caret=d<=e.prefix.length?m.pos:m.pos+1,m}},regex:{integerPart:function(a){return new RegExp("["+inputmask.escapeRegex(a.negationSymbol.front)+"+]?\\d+")},integerNPart:function(a){return new RegExp("[\\d"+inputmask.escapeRegex(a.groupSeparator)+"]+")}},signHandler:function(a,b,c,d,e){if(!d&&e.allowMinus&&"-"===a||e.allowPlus&&"+"===a){var f=b.buffer.join("").match(e.regex.integerPart(e));if(f&&f[0].length>0)return b.buffer[f.index]==("-"===a?"+":e.negationSymbol.front)?"-"==a?""!=e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c,insert:{pos:b.buffer.length-e.suffix.length-1,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c}:""!=e.negationSymbol.back?{pos:f.index,c:"+",remove:[f.index,b.buffer.length-e.suffix.length-1],
caret:c}:{pos:f.index,c:"+",remove:f.index,caret:c}:b.buffer[f.index]==("-"===a?e.negationSymbol.front:"+")?"-"==a&&""!=e.negationSymbol.back?{remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c-1}:{remove:f.index,caret:c-1}:"-"==a?""!=e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,caret:c+1,insert:{pos:b.buffer.length-e.suffix.length,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,caret:c+1}:{pos:f.index,c:a,caret:c+1}}return!1},radixHandler:function(b,c,d,e,f){if(!e&&b===f.radixPoint&&f.digits>0){var g=a.inArray(f.radixPoint,c.buffer),h=c.buffer.join("").match(f.regex.integerPart(f));if(-1!=g&&c.validPositions[g])return c.validPositions[g-1]?{caret:g+1}:{pos:h.index,c:h[0],caret:g+1};if(!h||"0"==h[0]&&h.index+1!=d)return c.buffer[h?h.index:d]="0",{pos:(h?h.index:d)+1}}return!1},leadingZeroHandler:function(b,c,d,e,f){var g=c.buffer.join("").match(f.regex.integerNPart(f)),h=a.inArray(f.radixPoint,c.buffer);if(g&&!e&&(-1==h||h>=d))if(0==g[0].indexOf("0")){d<f.prefix.length&&(d=g.index);var i=a.inArray(f.radixPoint,c._buffer),j=c._buffer&&c.buffer.slice(h).join("")==c._buffer.slice(i).join("")||0==parseInt(c.buffer.slice(h+1).join("")),k=c._buffer&&c.buffer.slice(g.index,h).join("")==c._buffer.slice(f.prefix.length,i).join("")||"0"==c.buffer.slice(g.index,h).join("");if(-1==h||j&&k)return c.buffer.splice(g.index,1),d=d>g.index?d-1:g.index,{pos:d,remove:g.index};if(g.index+1==d||"0"==b)return c.buffer.splice(g.index,1),d=g.index,{pos:d,remove:g.index}}else if("0"===b&&d<=g.index&&g[0]!=f.groupSeparator)return!1;return!0},postValidation:function(a,b){var c=!0,d=a.join(""),e=d.replace(b.prefix,"");return e=e.replace(b.suffix,""),e=e.replace(new RegExp(inputmask.escapeRegex(b.groupSeparator),"g"),""),","===b.radixPoint&&(e=e.replace(inputmask.escapeRegex(b.radixPoint),".")),e=e.replace(new RegExp("^"+inputmask.escapeRegex(b.negationSymbol.front)),"-"),e=e.replace(new RegExp(inputmask.escapeRegex(b.negationSymbol.back)+"$"),""),isFinite(e)&&isFinite(b.max)&&(c=parseFloat(e)<=parseFloat(b.max)),c},definitions:{"~":{validator:function(b,c,d,e,f){var g=f.signHandler(b,c,d,e,f);if(!g&&(g=f.radixHandler(b,c,d,e,f),!g&&(g=e?new RegExp("[0-9"+inputmask.escapeRegex(f.groupSeparator)+"]").test(b):new RegExp("[0-9]").test(b),g===!0&&(g=f.leadingZeroHandler(b,c,d,e,f),g===!0)))){var h=a.inArray(f.radixPoint,c.buffer);g=-1!=h&&f.digitsOptional===!1&&d>h&&!e?{pos:d,remove:d}:{pos:d}}return g},cardinality:1,prevalidator:null},"+":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&(d&&e.allowMinus&&a===e.negationSymbol.front||e.allowMinus&&"-"==a||e.allowPlus&&"+"==a)&&(f="-"==a?""!=e.negationSymbol.back?{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1,insert:{pos:b.buffer.length,c:e.negationSymbol.back}}:{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1}:!0),f},cardinality:1,prevalidator:null,placeholder:""},"-":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&d&&e.allowMinus&&a===e.negationSymbol.back&&(f=!0),f},cardinality:1,prevalidator:null,placeholder:""},":":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);if(!f){var g="["+inputmask.escapeRegex(e.radixPoint)+"]";f=new RegExp(g).test(a),f&&b.validPositions[c]&&b.validPositions[c].match.placeholder==e.radixPoint&&(f={caret:c+1})}return f},cardinality:1,prevalidator:null,placeholder:function(a){return a.radixPoint}}},onUnMask:function(a,b,c){var d=a.replace(c.prefix,"");return d=d.replace(c.suffix,""),d=d.replace(new RegExp(inputmask.escapeRegex(c.groupSeparator),"g"),""),c.unmaskAsNumber?(d=d.replace(inputmask.escapeRegex.call(this,c.radixPoint),"."),Number(d)):d},isComplete:function(a,b){var c=a.join(""),d=a.slice();if(b.postFormat(d,0,!0,b),d.join("")!=c)return!1;var e=c.replace(b.prefix,"");return e=e.replace(b.suffix,""),e=e.replace(new RegExp(inputmask.escapeRegex(b.groupSeparator),"g"),""),","===b.radixPoint&&(e=e.replace(inputmask.escapeRegex(b.radixPoint),".")),isFinite(e)},onBeforeMask:function(a,b){if(""!=b.radixPoint&&isFinite(a))a=a.toString().replace(".",b.radixPoint);else{var c=a.match(/,/g),d=a.match(/\./g);d&&c?d.length>c.length?(a=a.replace(/\./g,""),a=a.replace(",",b.radixPoint)):c.length>d.length?(a=a.replace(/,/g,""),a=a.replace(".",b.radixPoint)):a=a.indexOf(".")<a.indexOf(",")?a.replace(/\./g,""):a=a.replace(/,/g,""):a=a.replace(new RegExp(inputmask.escapeRegex(b.groupSeparator),"g"),"")}if(0==b.digits&&(-1!=a.indexOf(".")?a=a.substring(0,a.indexOf(".")):-1!=a.indexOf(",")&&(a=a.substring(0,a.indexOf(",")))),""!=b.radixPoint&&isFinite(b.digits)&&-1!=a.indexOf(b.radixPoint)){var e=a.split(b.radixPoint),f=e[1].match(new RegExp("\\d*"))[0];if(parseInt(b.digits)<f.toString().length){var g=Math.pow(10,parseInt(b.digits));a=Math.round(parseFloat(a)*g)/g}}return a.toString()},canClearPosition:function(b,c,d,e,f){var g=b.validPositions[c].input,h=g!=f.radixPoint&&isFinite(g)||c==d||g==f.groupSeparator||g==f.negationSymbol.front||g==f.negationSymbol.back;if(h&&isFinite(g)){var i;if(!e&&b.buffer){i=b.buffer.join("").substr(0,c).match(f.regex.integerNPart(f));var j=c+1,k=null==i||0==parseInt(i[0].replace(new RegExp(inputmask.escapeRegex(f.groupSeparator),"g"),""));if(k)for(;b.validPositions[j]&&(b.validPositions[j].input==f.groupSeparator||"0"==b.validPositions[j].input);)delete b.validPositions[j],j++}var l=[];for(var m in b.validPositions)l.push(b.validPositions[m].input);i=l.join("").match(f.regex.integerNPart(f));var n=a.inArray(f.radixPoint,b.buffer);if(i&&(-1==n||n>=c))if(0==i[0].indexOf("0"))h=i.index!=c||-1==n;else{var o=parseInt(i[0].replace(new RegExp(inputmask.escapeRegex(f.groupSeparator),"g"),""));-1!=n&&10>o&&(b.validPositions[c].input="0",b.p=f.prefix.length+1,h=!1)}}return h},onKeyDown:function(b,c,d,e){var f=a(this);if(b.ctrlKey)switch(b.keyCode){case inputmask.keyCode.UP:f.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(e.step)),f.triggerHandler("setvalue.inputmask");break;case inputmask.keyCode.DOWN:f.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(e.step)),f.triggerHandler("setvalue.inputmask")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1}}),inputmask}(jQuery),function(a){return inputmask.extendAliases({phone:{url:"phone-codes/phone-codes.js",countrycode:"",mask:function(b){b.definitions["#"]=b.definitions[9];var c=[];return a.ajax({url:b.url,async:!1,dataType:"json",success:function(a){c=a},error:function(a,c,d){alert(d+" - "+b.url)}}),c=c.sort(function(a,b){return(a.mask||a)<(b.mask||b)?-1:1})},keepStatic:!1,nojumps:!0,nojumpsThreshold:1,onBeforeMask:function(a,b){var c=a.replace(/^0/g,"");return(c.indexOf(b.countrycode)>1||-1==c.indexOf(b.countrycode))&&(c="+"+b.countrycode+c),c}},phonebe:{alias:"phone",url:"phone-codes/phone-be.js",countrycode:"32",nojumpsThreshold:4}}),inputmask}(jQuery),function(a){return inputmask.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(a,b){return new RegExp(b.regex).test(a.join(""))},definitions:{r:{validator:function(b,c,d,e,f){function g(a,b){this.matches=[],this.isGroup=a||!1,this.isQuantifier=b||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function h(){var a,b,c=new g,d=[];for(f.regexTokens=[];a=f.tokenizer.exec(f.regex);)switch(b=a[0],b.charAt(0)){case"(":d.push(new g(!0));break;case")":var e=d.pop();d.length>0?d[d.length-1].matches.push(e):c.matches.push(e);break;case"{":case"+":case"*":var h=new g(!1,!0);b=b.replace(/[{}]/g,"");var i=b.split(","),j=isNaN(i[0])?i[0]:parseInt(i[0]),k=1==i.length?j:isNaN(i[1])?i[1]:parseInt(i[1]);if(h.quantifier={min:j,max:k},d.length>0){var l=d[d.length-1].matches;if(a=l.pop(),!a.isGroup){var e=new g(!0);e.matches.push(a),a=e}l.push(a),l.push(h)}else{if(a=c.matches.pop(),!a.isGroup){var e=new g(!0);e.matches.push(a),a=e}c.matches.push(a),c.matches.push(h)}break;default:d.length>0?d[d.length-1].matches.push(b):c.matches.push(b)}c.matches.length>0&&f.regexTokens.push(c)}function i(b,c){var d=!1;c&&(k+="(",m++);for(var e=0;e<b.matches.length;e++){var f=b.matches[e];if(1==f.isGroup)d=i(f,!0);else if(1==f.isQuantifier){var g=a.inArray(f,b.matches),h=b.matches[g-1],j=k;if(isNaN(f.quantifier.max)){for(;f.repeaterPart&&f.repeaterPart!=k&&f.repeaterPart.length>k.length&&!(d=i(h,!0)););d=d||i(h,!0),d&&(f.repeaterPart=k),k=j+f.quantifier.max}else{for(var l=0,o=f.quantifier.max-1;o>l&&!(d=i(h,!0));l++);k=j+"{"+f.quantifier.min+","+f.quantifier.max+"}"}}else if(void 0!=f.matches)for(var p=0;p<f.length&&!(d=i(f[p],c));p++);else{var q;if("["==f.charAt(0)){q=k,q+=f;for(var r=0;m>r;r++)q+=")";var s=new RegExp("^("+q+")$");d=s.test(n)}else for(var t=0,u=f.length;u>t;t++)if("\\"!=f.charAt(t)){q=k,q+=f.substr(0,t+1),q=q.replace(/\|$/,"");for(var r=0;m>r;r++)q+=")";var s=new RegExp("^("+q+")$");if(d=s.test(n))break}k+=f}if(d)break}return c&&(k+=")",m--),d}null==f.regexTokens&&h();var j=c.buffer.slice(),k="",l=!1,m=0;j.splice(d,0,b);for(var n=j.join(""),o=0;o<f.regexTokens.length;o++){var g=f.regexTokens[o];if(l=i(g,g.isGroup))break}return l},cardinality:1}}}}),inputmask}(jQuery);
/* End */
;; /* /bitrix/templates/aspro-scorp/js/jquery.actual.min.js?14474198921101*/
; /* /bitrix/templates/aspro-scorp/js/jquery.fancybox.min.js?149485587221528*/
; /* /bitrix/templates/aspro-scorp/js/blink.min.js?1494855872228*/
; /* /bitrix/templates/aspro-scorp/vendor/jquery.easing.min.js?14948558723338*/
; /* /bitrix/templates/aspro-scorp/vendor/jquery.appear.min.js?14948558721281*/
; /* /bitrix/templates/aspro-scorp/vendor/jquery.cookie.min.js?14948558721084*/
; /* /bitrix/templates/aspro-scorp/vendor/bootstrap.min.js?149485587227492*/
; /* /bitrix/templates/aspro-scorp/vendor/flexslider/jquery.flexslider-min.js?147507573221828*/
; /* /bitrix/templates/aspro-scorp/vendor/jquery.validate.min.js?144741989222254*/
; /* /bitrix/templates/aspro-scorp/js/jquery.uniform.min.js?14474198928308*/
; /* /bitrix/templates/aspro-scorp/js/jqModal.min.js?14948558723389*/
; /* /bitrix/templates/aspro-scorp/js/detectmobilebrowser.min.js?14948558722056*/
; /* /bitrix/templates/aspro-scorp/js/general.min.js?150279864341061*/
; /* /bitrix/templates/aspro-scorp/js/custom.js?144741989241*/
; /* /bitrix/components/bitrix/search.title/script.min.js?15560170886443*/
; /* /bitrix/components/kuznica/banner.popup/fancybox/lib/jquery.mousewheel-3.0.6.pack.js?14474060821384*/
; /* /bitrix/components/kuznica/banner.popup/fancybox/source/jquery.fancybox.js?144740608248706*/
; /* /bitrix/components/kuznica/banner.popup/fancybox/source/helpers/jquery.fancybox-buttons.js?14474060823041*/
; /* /bitrix/components/kuznica/banner.popup/fancybox/source/helpers/jquery.fancybox-thumbs.js?14474060823836*/
; /* /bitrix/components/kuznica/banner.popup/fancybox/source/helpers/jquery.fancybox-media.js?14474060825305*/
; /* /bitrix/templates/aspro-scorp/js/jquery.inputmask.bundle.min.js?144741989263835*/

//# sourceMappingURL=template_e2f568d98d796e016921ddea5d4e472c.map.js
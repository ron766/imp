
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"415",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=document.body.className.indexOf(\"signed-in\")\u0026\u0026-1==document.body.className.indexOf(\"admin-user\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",1],8,16],".parentElement.querySelector(\"h3\").innerText}catch(a){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.replace(\/[\\?\u0026]i=......\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){localStorage.setItem(a,JSON.stringify(b))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,f,c,d){\"string\"===typeof a\u0026\u0026(a=[a]);c||(c=1E4);d||(d=100);c=Math.round(c\/d);var g=0,h=a.length,b,e,k=window.setInterval(function(){for(b=0;b\u003Ch\u0026\u0026!(e=0===a[b].indexOf(\"\/\/\")?document.evaluate(a[b],document,null,XPathResult.ANY_TYPE,null).iterateNext():document.querySelector(a[b]));b++);if(e||g++\u003Ec)window.clearInterval(k),e\u0026\u0026f()},d)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c,e){var a=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")};window.analytics\u0026\u0026\"string\"===typeof d\u0026\u0026-1\u003C[\"Success\",\"Viewed\"].indexOf(d)\u0026\u0026\"string\"===typeof b\u0026\u0026\"string\"===typeof c\u0026\u0026(\"object\"===typeof e?window.analytics.trackLink(e,\"Experiment \"+d,{experiment_id:a(b),experiment_name:b,variation_id:a(c),variation_name:a(c)}):window.analytics.track(\"Experiment \"+d,{experiment_id:a(b),\nexperiment_name:b,variation_id:a(c),variation_name:a(c)}))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=0,c=window.setInterval(function(){if(window.analytics||40\u003Cb++)window.clearInterval(c),window.analytics\u0026\u0026a()},50)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var a=document.createElement(\"script\");a.src=\"https:\/\/code.jquery.com\/jquery-3.2.1.slim.min.js\";document.body.appendChild(a);var c=0,d=window.setInterval(function(){if(window.jQuery||100\u003Cc++)window.clearInterval(d),window.jQuery\u0026\u0026b()},50)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){el=document.createElement(\"script\");el.src=\"https:\/\/assets.digitalocean.com\/bui\/1.0.0\/bui.js\";document.body.appendChild(el);a()}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){try{var d=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")},g=function(a){return\"function\"===typeof a?a():\"all\"===a?!0:\"non-customers\"===a?null===window.analytics.user().id():\"customers\"===a?null!==window.analytics.user().id():!1},h=function(a){var b=0;if(0==a.length)return b;for(i=0;i\u003Ca.length;i++)c=a.charCodeAt(i),b=(b\u003C\u003C5)-b+c,b\u0026=b;return Math.abs(b)},k=function(a){var b=\nwindow.analytics.user().anonymousId().replace(\/-\/g,\"\");return parseInt(b.substr(a%(b.length-1),2),16)\/255};\"audience\"in a||(a.audience=\"all\");\"pct\"in a||(a.pct=1);if(\"string\"===typeof a.name\u0026\u0026\"variants\"in a\u0026\u0026a.variants instanceof Array\u0026\u0026!document.querySelector('*[data-gtm_ab\\x3d\"'+d(a.name)+'\"]')){\"seed\"in a||(a.seed=h(a.name));var l=0,m=window.setInterval(function(){if(window.analytics||40\u003Cl++)window.clearInterval(m),window.analytics\u0026\u0026window.analytics.ready(function(){if(g(a.audience)){var f=k(a.seed);\nf\u003C=a.pct\u0026\u0026(variant=a.variants[Math.floor(f\/a.pct*a.variants.length)],variant.func(),window.analytics.track(\"Experiment Viewed\",{experiment_id:d(a.name),experiment_name:a.name,variation_id:d(variant.name),variation_name:d(variant.name)}),window.setTimeout(function(){var b=document.querySelectorAll('*[data-js\\x3d\"gtm_ab_success\"]'),e;for(e=0;e\u003Cb.length;e++)window.analytics.trackLink(b[e],\"Experiment Success\",{experiment_id:d(a.name),experiment_name:a.name,variation_id:d(variant.name),variation_name:d(variant.name),\nsuccess_details:b[e].getAttribute(\"href\")||\"\"})},100))}})},50)}}catch(f){console.log(\"runtest err\",f.message)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return(a=localStorage.getItem(a))\u0026\u0026JSON.parse(a)}})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"recentlySignedUp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"staging",
      "vtp_name":"marketoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"production",
      "vtp_name":"conversionEnvironment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"userDropletCount"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__r"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"userOrOrgHasCreatedDroplets"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__j",
      "vtp_name":"window.ub.page.variantId"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_anonymous_id"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",31],
      "vtp_defaultValue":"_",
      "vtp_map":["list",["map","key","survey","value","Thanks for filling out our survey! We genuinely appreciate customer feedback."],["map","key","swag","value","Use promo code DOswag10 on Billing page for $10 credit. Valid for new users only."]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"signed_in"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_user_id"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"refcode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"optimizelySegments"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"last_logged_in_at"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gtmab_ft"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pcode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pcode"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.droplet_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Registration",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",70,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":16
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",15],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"m4TPCP2NtQIQy5v24QM",
      "vtp_url":["macro",20],
      "vtp_enableReadGaCookie":false,
      "tag_id":18
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",71,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":24
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":44
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",72,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":45
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=cpljCNe412UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":78
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=RNOTEOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":82
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",73,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":83
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",74,0]],
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqsf\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":84
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",75,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":88
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/1010666955\/?guid=ON\u0026amp;script=0\u0026amp;data.userengaged=true",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Create",
      "vtp_eventLabel":"Droplet",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":125
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddPaymentInfo\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":135
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":136
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=EUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":137
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":138
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Purchase\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":141
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=i4IrCJHK53UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":142
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "tag_id":146
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":152
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2\u0026evt=custom\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":153
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":155
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=241522\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":156
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=Generic",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",15],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"PiHFCPrC130QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableReadGaCookie":false,
      "tag_id":167
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["template",["macro",21],"\u0026var=",["macro",28]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":171
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/alb.reddit.com\/snoo.gif?q=CAAHAAABAAoACQAAABHN6HlAAA==\u0026s=L9dW-RSPEAGmB8zBoGqMLMP4XUtZODdwovDmPJhIuLs=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":172
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdos",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":173
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdou",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":174
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochpu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":175
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochps",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":176
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digotrys",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":177
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digotryu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":178
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"trydoaps",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":180
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"trydoapc",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":181
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"GaeYCJzr8H4QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableReadGaCookie":false,
      "tag_id":182
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":183
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026conversionId=333506\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":184
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"A0tMCLK24n4QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableReadGaCookie":false,
      "tag_id":185
    },{
      "function":"__asp",
      "once_per_event":true,
      "vtp_pixelId":"4IDGVTPEAFC4TM2QKYNQ53",
      "vtp_customerId":"S4BPDI4QWNB57PEKEZSLIP",
      "vtp_conversionValueCurrency":"USD",
      "tag_id":194
    },{
      "function":"__cl",
      "tag_id":195
    },{
      "function":"__cl",
      "tag_id":196
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"300000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"758737_224",
      "tag_id":197
    },{
      "function":"__cl",
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",30],8,16],"\u0026\u002665\u003EparseInt(",["escape",["macro",30],8,16],".substr(4,2),16)\u0026\u0026(window._fs_debug=!1,window._fs_host=\"www.fullstory.com\",window._fs_org=\"1XYq\",window._fs_namespace=\"FS\",function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,\nh),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=function(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})}(window,document,window._fs_namespace,\"script\",\"user\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar $alertElement=document.querySelector(\"p[data-home-announcement-message]\"),$alertContent=\"",["escape",["macro",32],7],"\";$alertElement\u0026\u002620\u003C$alertContent.length\u0026\u0026($alertElement.innerHTML=$alertContent);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{analytics\u0026\u0026analytics.ready(function(){var c=analytics.user().traits(),a=c.recent||[],d=[$(\"body\").data(\"tutorial-id\")||\"\",Math.round(new Date\/864E5)],e=a.length,b;for(b=0;b\u003Ce;b++)if(a[b]instanceof Array\u0026\u0026a[b][0]===d[0]){a.splice(b,1);break}a.unshift(d);5\u003C=a.length\u0026\u0026a.pop();c.recent=a;analytics.user().traits(c)})}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1XYq\";window._fs_namespace=\"FS\";\n(function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,h),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=\nfunction(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{analytics\u0026\u0026(analytics.track(\"dwell\",{time:\"5 minute\"}),analytics.ready(function(){var c=analytics.user().traits(),a=c.dwell||[],d=[$(\"body\").data(\"tutorial-id\")||\"\",Math.round(new Date\/864E5)],e=a.length,b;for(b=0;b\u003Ce;b++)if(a[b]instanceof Array\u0026\u0026a[b][0]===d[0]){a.splice(b,1);break}a.unshift(d);5\u003C=a.length\u0026\u0026a.pop();c.dwell=a;analytics.user().traits(c)}))}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{document.addEventListener(\"copy\",function(a){window.getSelection\u0026\u0026$(window.getSelection().anchorNode).parents(\"pre\").length\u0026\u0026analytics.track(\"Web Interaction\",{action:\"Code Copy\",name:window.getSelection().toString().substring(0,64)+(64\u003Cwindow.getSelection().toString().length?\"\\u2026\":\"\")})})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{console\u0026\u0026(\/Safari\/.test(navigator.userAgent)\u0026\u0026\/Apple Computer\/.test(navigator.vendor)?console.log(\"Nice Job!\"):console.log(\"       __                       __________\\n       \\\\  \\\\                    \/           \\\\\\n (\\u00af\\\\    |  \\\\_\\u00b8--------_       |  Nice job! |\\n  \\\\ \\\\_-\\u00af     _-_       \\u00af\\\\   O  \\\\___________\/\\n  \/     ((( ( O )       \/  o\\n \/_\/\\\\_       \\u00af-\\u00af       \/  .\\n      \\\\     \\\\\\u00af\\u00af`------'\\n   (\\u00af\\u00af\\u00af      `^^^-_\\u00af\\x3e\\n    `----^`-________\/\"))}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c,d,e){a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.id=e;a.src=d;b.parentNode.insertBefore(a,b)})(window,document,\"script\",\"https:\/\/scripts.demandbase.com\/014ab3bd.min.js\",\"demandbase_js_lib\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(0\u003C=document.cookie.indexOf(\"signed_in\\x3dtrue\")||0\u003C=document.cookie.indexOf(\"last_logged_in_at\\x3d\")){var links=document.querySelectorAll('a[href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?onboarding_origin\\x3dspaces\"]'),linkslen=links.length,i;for(i=0;i\u003Clinkslen;i++)links[i].setAttribute(\"href\",\"https:\/\/cloud.digitalocean.com\/spaces\")};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(-1\u003Cwindow.location.search.indexOf(\"show_features\")){var f=document.querySelector('*[data-ab-test\\x3d\"featuresSection\"]');f\u0026\u0026(f.style.display=\"block\")}}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E.anchorlink { position:relative; opacity:0; top:-200px; }\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction slugify(b){return b.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")}\nif(window.location.hash){for(var headers=document.querySelectorAll(\".FAQ-question\"),i=0;i\u003Cheaders.length;i++){var a=document.createElement(\"a\");a.setAttribute(\"name\",slugify(headers[i].innerText));a.classList.add(\"anchorlink\");headers[i].insertBefore(a,headers[i].firstChild)}var target=document.querySelector('a[name\\x3d\"'+window.location.hash.substr(1)+'\"]');target\u0026\u0026window.scrollTo(0,target.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":158
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",10],8,16],"({name:\"Pricing FTO Link\",audience:\"non-customers\",variants:[{name:\"Control\",func:function(){}},{name:\"Test\",func:function(){var a=document.createElement(\"div\"),b=document.querySelector(\".UnifiedNav-button\"),c=document.querySelector(\".bui-Button.bui-Button--primary.bui-Button--space\"),d=document.querySelector(\".PricingHero .bui-Container\");a.innerHTML='\\x3cdiv class\\x3d\"bui-Banner bui-Banner--primary\" role\\x3d\"banner\"\\x3e\\x3cdiv class\\x3d\"bui-Banner-content\"\\x3e\\x3cdiv style\\x3d\"position:absolute; top:10px; left:28px; font-size:2em;\"\\x3e\\ud83d\\ude80\\x3c\/div\\x3e\\x3cp style\\x3d\"padding-left:64px; margin-top:0; color:#FFF;\"\\x3eBuild the internet on DigitalOcean with a \\x3cspan class\\x3d\"bui-u-textBold\"\\x3e$100, 60 day credit\\x3c\/span\\x3e to use across Droplets, Block Storage, Load Balancers and more!\\x3c\/p\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"bui-Banner-right\"\\x3e\\x3ca data-js\\x3d\"gtm_ab_success\" href\\x3d\"https:\/\/try.digitalocean.com\/performance\/?via\\x3dpricingftolink\\x26bt\\x3dbanner\" class\\x3d\"bui-Button bui-Button--mini\"\\x3eStart Free\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e';\na.classList.add(\"bui-Col-12\");d.insertBefore(a,d.firstChild);a.style.position=\"relative\";a.style.top=\"-64px\";b.innerText=\"Start Free\";b.setAttribute(\"href\",\"https:\/\/try.digitalocean.com\/performance\/?via\\x3dpricingftolink\\x26bt\\x3dt\");b.setAttribute(\"data-js\",\"gtm_ab_success\");c.innerText=\"Start Building with a $100 Credit\";c.setAttribute(\"href\",\"https:\/\/try.digitalocean.com\/performance\/?via\\x3dpricingftolink\\x26bt\\x3dbcta\");c.setAttribute(\"data-js\",\"gtm_ab_success\")}}]})}catch(a){};\u003C\/script\u003E\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":162
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-836091520\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-836091520\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cmeta name=\"google-site-verification\" content=\"VFLWra6znNQDhVczyhLehNxVWZX_uN0wG2fjEqMixMQ\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{(function(){",["escape",["macro",10],8,16],"({name:\"Community - Tutorial Tag Page Featured Link\",variants:[{name:\"Control\",func:function(){}},{name:\"Test\",func:function(){var a=document.createElement(\"div\"),b=document.querySelector(\".tag-header__right\");document.querySelector(\".tag-header__left\");a.classList.add(\"tutorial\");a.innerHTML='\\x3ch4 style\\x3d\"margin-bottom:10px;\"\\x3eFeatured Data Analysis Tutorial\\x3c\/h4\\x3e\\x3ca class\\x3d\"tutorial-image\" href\\x3d\"\/community\/tutorials\/an-introduction-to-machine-learning\" title\\x3d\"An Introduction to Machine Learning\"\\x3e \\x3cimg src\\x3d\"https:\/\/community-cdn-digitalocean-com.global.ssl.fastly.net\/assets\/tutorials\/images\/medium\/introduction-to-machine-learning_social.png?1510178550\" alt\\x3d\"\"\\x3e \\x3c\/a\\x3e \\x3cdiv class\\x3d\"feedable-details\"\\x3e \\x3ch3\\x3e \\x3ca href\\x3d\"\/community\/tutorials\/an-introduction-to-machine-learning\"\\x3eAn Introduction to Machine Learning\\x3c\/a\\x3e \\x3c\/h3\\x3e \\x3cdiv class\\x3d\"meta tutorial-author-name\"\\x3e \\x3cspan class\\x3d\"author\"\\x3eBy Lisa Tagliaferri \\x3c\/span\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3cdiv class\\x3d\"meta bottom-meta\"\\x3e \\x3cdiv class\\x3d\"points\"\\x3e \\x3cspan class\\x3d\"icon-upvote-heart--small\"\\x3e\\x3c\/span\\x3e 39 \\x3c\/div\\x3e \\x3cdiv class\\x3d\"response-count\"\\x3e \\x3cspan class\\x3d\"icon icon-new-comment\"\\x3e\\x3c\/span\\x3e 18 \\x3c\/div\\x3e \\x3cspan class\\x3d\"feedable-time timeago\" title\\x3d\"2017-09-28 17:53:44 UTC\"\\x3e\\x3c\/span\\x3e \\x3c\/div\\x3e';\nb.insertBefore(a,b.firstChild)}}]})})()}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{(function(){",["escape",["macro",10],8,16],"({name:\"Cloud - Dashboard Referral Panel\",audience:function(){return 5\u003C",["escape",["macro",18],8,16],"\u0026\u0026-5\u003CparseFloat(window.currentUser.balance,10)\u0026\u0026.5\u003CMath.random()||-1\u003Cwindow.location.search.indexOf(\"gtm_ab_reftest\")},variants:[{name:\"Give10-Get25\",func:function(){",["escape",["macro",5],8,16],"(\"div.dashboard-cta\",function(){if(!document.querySelector('*[data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"]')){var a=document.querySelector(\"div.dashboard-cta\");a.style.padding=\"2rem\";\na.innerHTML='\\x3cdiv class\\x3d\"columns small-12\" data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"\\x3e\\x3cdiv class\\x3d\"dashboard-team\"\\x3e\\x3ch3\\x3eGive a friend $10, Get $25\\x3c\/h3\\x3e \\x3cp class\\x3d\"u-mt-0 u-mb-2\"\\x3eThey\\x26apos;ll get $10 in credit. Once they\\u2019ve spent $25 with us, you\\x26apos;ll get $25\\x3c\/p\\x3e\\x3ca href\\x3d\"\/settings\/referrals?i\\x3d'+window.currentUser.uuid.substr(0,6)+'\" data-js\\x3d\"gtm_ab_success\"\\x3eRefer a friend\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e'}})}},\n{name:\"Refer-a-friend\",func:function(){",["escape",["macro",5],8,16],"(\"div.dashboard-cta\",function(){if(!document.querySelector('*[data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"]')){var a=document.querySelector(\"div.dashboard-cta\");a.style.padding=\"2rem\";a.innerHTML='\\x3cdiv class\\x3d\"columns small-12\" data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"\\x3e\\x3cdiv class\\x3d\"dashboard-team\"\\x3e\\x3ch3\\x3eRefer a friend to DigitalOcean\\x3c\/h3\\x3e \\x3cp class\\x3d\"u-mt-0 u-mb-2\"\\x3eThey\\x26apos;ll get $10 in credit. Once they\\u2019ve spent $25 with us, you\\x26apos;ll get $25\\x3c\/p\\x3e\\x3ca href\\x3d\"\/settings\/referrals?i\\x3d'+\nwindow.currentUser.uuid.substr(0,6)+'\" data-js\\x3d\"gtm_ab_success\"\\x3eRefer a friend\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e'}})}},{name:\"Referral-Program\",func:function(){",["escape",["macro",5],8,16],"(\"div.dashboard-cta\",function(){if(!document.querySelector('*[data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"]')){var a=document.querySelector(\"div.dashboard-cta\");a.style.padding=\"2rem\";a.innerHTML='\\x3cdiv class\\x3d\"columns small-12\" data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"\\x3e\\x3cdiv class\\x3d\"dashboard-team\"\\x3e\\x3ch3\\x3eDigitalOcean Referral Program\\x3c\/h3\\x3e \\x3cp class\\x3d\"u-mt-0 u-mb-2\"\\x3eGive a friend $10 in credit. Once they\\u2019ve spent $25 with us, you\\x26apos;ll get $25\\x3c\/p\\x3e\\x3ca href\\x3d\"\/settings\/referrals?i\\x3d'+\nwindow.currentUser.uuid.substr(0,6)+'\" data-js\\x3d\"gtm_ab_success\"\\x3eRefer a friend\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e'}})}}]})})()}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/9bda67db0731403c897cd55271410840.js.ubembed.com\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":187
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  #tab-droplets strike {color:#c0392b; opacity:0.75;}\n  #tab-droplets strike, #tab-droplets .comparison {display:none;}\n  #tab-droplets.compareView strike, #tab-droplets.compareView .comparison {display:block;}\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{var show_comparison=function(){for(var a=[[[],[\"512MB\",\"\",\"20GB\"],[\"1GB\",\"\",\"30GB\"],[\"2GB\",\"\",\"40GB\"],[\"4GB\",\"2vCPUs\",\"60GB\"],[\"8GB\",\"4vCPUs\",\"80GB\"],[\"16GB\",\"\",\"160GB\"],[\"\",\"\",\"\"],[\"32GB\",\"12vCPUs\",\"320GB\"],[\"48GB\",\"16vCPUs\",\"480GB\"],[\"64GB\",\"20vCPUs\",\"640GB\"]],[[],[\"3GB\",\"\",\"20GB\"],[\"6GB\",\"\",\"20GB\"],[\"12GB\",\"\",\"20GB\"],[\"24GB\",\"\",\"20GB\"],[\"48GB\",\"\",\"20GB\"]]],f=document.querySelectorAll(\"table.PricingTable\"),b=0;2\u003Eb;b++)for(var g=f[b].querySelectorAll(\"tr\"),d=1;d\u003Ca[b].length;d++)for(var e=g[d].querySelectorAll(\"td\"),\nc=0;3\u003Ec;c++)e[c].innerHTML=\"\\x3cstrike\\x3e\"+a[b][d][c]+\"\\x3c\/strike\\x3e\"+e[c].innerHTML;a=document.createElement(\"div\");a.innerHTML='\\x3cdiv class\\x3d\"bui-Banner bui-AnnouncementBanner\" style\\x3d\"position: relative; z-index: 4; border: none; border-radius: 3px; background: #0069ff; background-color: #031b4e; color: #fff; text-align: center; font-size: 14px;\"\\x3e \\x3cdiv class\\x3d\"bui-Banner-content\"\\x3e \\x3cspan class\\x3d\"bui-Pill bui-Pill--new bui-u-mr--small\"\\x3e2018-01-16\\x3c\/span\\x3e \\x3cp\\x3e Announcing \\x3cstrong\\x3enew Droplet plans\\x3c\/strong\\x3e with more CPUs, memory, and SSD storage. \\x3ca class\\x3d\"bui-Button bui-Button--primary bui-Button--mini bui-u-ml--large\" data-js\\x3d\"toggleChanges\" style\\x3d\"line-height:38px;\"\\x3eShow Plan Changes\\x3c\/a\\x3e \\x3c\/p\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e';\ndocument.querySelector(\"#tab-droplets .bui-GridContainer\").insertBefore(a,document.querySelector(\"#tab-droplets .bui-GridContainer\").firstChild);document.querySelector('*[data-js\\x3d\"toggleChanges\"]').onclick=function(){document.getElementById(\"tab-droplets\").classList.toggle(\"compareView\");this.innerText=\"Show Plan Changes\"===this.innerText?\"Hide Plan Changes\":\"Show Plan Changes\";window.analytics.track(\"Experiment Viewed\",{experiment_id:\"Pricing: Toggled Price Comparison\",experiment_name:\"Pricing: Toggled Price Comparison\",\nvariation_id:(window.analytics.user().id()?\"Customer\":\"Anonymous\")+\", Visible\",variation_name:(window.analytics.user().id()?\"Customer\":\"Anonymous\")+\", Visible\"})};document.querySelector('*[data-js\\x3d\"toggleChanges\"]').click();document.querySelector(\"#tab-droplets \\x3e div \\x3e div.bui-u-flex.bui-u-flexCenter \\x3e a\").innerText=\"Login\";document.querySelector(\"#tab-droplets \\x3e div \\x3e div.bui-u-flex.bui-u-flexCenter \\x3e a\").setAttribute(\"href\",\"https:\/\/cloud.digitalocean.com\/login\")},seg_check=\n0,seg_wait=window.setInterval(function(){if(window.analytics||20===seg_check)window.clearInterval(seg_wait),window.analytics\u0026\u0026show_comparison();seg_check++},100)}catch(a){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar wait_count=0,jQWait=window.setInterval(function(){window.jQuery\u0026\u0026function(){window.clearInterval(window.jQWait);var g=window.BelowTutorialPanel=function(b){$.extend(this,{activeTest:\"default\",panelBodyTarget:\"div.tutorial-ctas\",panelContentTarget:\"div.cta-description\",tagSelector:'a.tag:contains(\"$TAG\")',experimentName:\"Below Question Panel\",scrollCheckInterval:1E3},b||{},{event_fired:!1});this.initialize()};$.extend(g.prototype,{initialize:function(){this.userTraits={};this.analyticsActive()\u0026\u0026\n(this.userTraits=window.analytics.user().traits());this.audience=this.getAudience(Object.keys(this.panelData),this.parseCookies(document.cookie),this.userTraits);this.panel=this.getPanel(this.panelData[this.audience]);this.panelContent=this.panel.content[Math.floor(Math.random()*this.panel.content.length)];$(\"Footer\").css({\"margin-top\":0,\"border-top\":\"#444\",\"box-shadow\":\"0 0 20px rgba(0,0,0,0.1)\"}).before('\\x3cdiv class\\x3d\"tutorial-single\"\\x3e\\x3cdiv class\\x3d\"tutorial-footer\"\\x3e\\x3cdiv class\\x3d\"tutorial-ctas\"\\x3e \\x3cdiv class\\x3d\"section-content\"\\x3e\\x3cdiv class\\x3d\"cta-description\"\\x3e\\x3ch2\\x3e\\x3c\/h2\\x3e\\x3cp\\x3e\\x3c\/p\\x3e\\x3ca class\\x3d\"cloud-tutorial-cta\"\\x3e\\x3c\/a\\x3e\\x3c\/div\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e');\nthis.$panelBody=$(\".tutorial-ctas\");this.$panelBody.attr(\"style\",this.panel.style).css({\"border-bottom\":\"none\"}).find(\"h2\").text(this.panelContent.title||\"\").css({color:this.panel.darkBG?\"#FFF\":\"inherit\"}).end().find(\"p\").html(this.panelContent.desc||\"\").css({color:this.panel.darkBG?\"#FFF\":\"inherit\",padding:\"15px 0\",\"line-height\":\"1.3em\"}).end().find(\".cloud-tutorial-cta\").text(this.panelContent.cta||\"\").attr(\"style\",this.panel.darkBG?\"background:#FFF;color:#0069FF;\":\"\").attr(\"href\",this.panelContent.url+\n(0\u003Cthis.panelContent.url.indexOf(\"?\")?\"\\x26\":\"?\")+\"utm_source\\x3dcomm_exp\\x26utm_medium\\x3dbtq_\"+this.audience+\"_\"+this.panel.name);this.initTracking(this.$panelBody.offset().top,this.$panelBody.height(),this.audience+\" \\x3e \"+this.panel.name+\" \\x3e \"+this.panelContent.cta||\"\",this.$panelBody.find(\"a\"))},getPanel:function(b){var c=b.length,a,d,e=[],f=[];for(a=0;a\u003Cc;a++){if(\"tags\"in b[a])for(d=0;d\u003Cb[a].tags.length;d++)if(0\u003C$(this.tagSelector.replace(\"$TAG\",b[a].tags[d])).length)return b[a];\"priority\"in\nb[a]?0\u003Cb[a].priority\u0026\u0026(e.push({panel:a,priority:b[a].priority}),f.push(b[a])):f.push(b[a])}if(0\u003Ce.length)for(a=0;a\u003Ce.length;a++)if(Math.random()\u003Ce[a].priority)return b[e[a].panel];return f[Math.floor(Math.random()*f.length)]},getAudience:function(b,c,a){return-1\u003Cb.indexOf(\"customers\")\u0026\u0026(\"signed_in\"in c||\"ajs_user_id\"in c\u0026\u002610\u003Cc.ajs_user_id.length)?\"customers\":-1\u003Cb.indexOf(\"refcode\")\u0026\u0026\"refcode\"in c?\"refcode\":-1\u003Cb.indexOf(\"buildmode\")\u0026\u0026\"recent\"in a\u0026\u0026a.recent instanceof Array\u0026\u00264===a.recent.length\u0026\u00262===\na.recent[3].length\u0026\u00268\u003EMath.round(+new Date\/864E5)-a.recent[3][1]?\"buildmode\":-1\u003Cb.indexOf(\"regulars\")\u0026\u0026\"recent\"in a\u0026\u0026a.recent instanceof Array\u0026\u00264===a.recent.length\u0026\u00262===a.recent[3].length\u0026\u002630\u003EMath.round(+new Date\/864E5)-a.recent[3][1]?\"regulars\":\"everyone_else\"},analyticsActive:function(){return\"object\"===typeof window.analytics},parseCookies:function(b){b=b.split(\";\");var c={},a;for(a=0;a\u003Cb.length;a++){var d=b[a].split(\"\\x3d\");c[d[0].trim()]=d[1].trim()}return c},convertToId:function(b){return\"string\"===\ntypeof b?b.replace(\/\\W+\/g,\"_\").toLowerCase():\"\"},initTracking:function(b,c,a,d){if(this.analyticsActive()){var e,f=window.setInterval(function(){e=$(window).scrollTop();e+$(window).height()\u003Eb-c\u0026\u0026(window.clearInterval(f),analytics.track(\"Experiment Viewed\",{experimentId:this.convertToId(this.experimentName),experimentName:this.experimentName,variationId:this.convertToId(a),variationName:a}))}.bind(this),1E3);analytics.trackLink(d,\"Experiment Success\",{experimentId:this.convertToId(this.experimentName),\nexperimentName:this.experimentName,variationId:this.convertToId(a),variationName:a})}}});new g({panelData:{refcode:[{name:\"referrals\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/referrals.png); background-color:#1b78f8; background-position:bottom center;\",darkBG:!0,content:[{title:\"Your free credit awaits!\",desc:\"Sign up to redeem your credit, and start deploying your sites and apps within minutes.\",cta:\"Use Your Credit\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new\"},\n{title:\"Free credit active.\",desc:\"You came to digitalocean.com via someone\\x26apos;s referral link in the past month,\\x3cbr\\x3e making you eligible for $10 credit when you sign up for an account.\",cta:\"Redeem Credit\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new\"}]}],customers:[{name:\"repricing\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/droplets_v4.png), linear-gradient(to bottom, #201f7f, #180d56); background-position:bottom center; padding-top:-10px;\",darkBG:!0,\ncontent:[{title:\"New Droplets: More RAM, More SSD Storage, More Flexibility\",desc:\"New Droplets on DigitalOcean include 2x Memory for the same price, new High-CPU Optimized Plans, and a new class of Flexible $15 plans. The $5 Droplet now has 1GB RAM and 25GB SSD.\",cta:\"Read about new Droplets and prices\",url:\"https:\/\/blog.digitalocean.com\/new-droplet-plans\/\"}]},{name:\"write4donations\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/write4do.png); background-color:#1b78f8; background-position:bottom center; background-repeat-x:repeat;\",\ndarkBG:!0,content:[{title:\"Make a Positive Impact on the Tech Community\",desc:\"Partner with us to publish an article on open source tools and we\\u2019ll donate up to $300 to a charity of your choice.\",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"},{title:\"Write for DigitalOcean - We'll donate up to $300 to a Tech Nonprofit\",desc:\"Partner with us to publish an article on open source tools and we\\u2019ll donate $300 to a nonprofit or charity of your choice.\",cta:\"Write for DigitalOcean\",\nurl:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"}]},{name:\"objectstorage\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/objectstorage.png), linear-gradient(to right, #04338b, #040434);  background-position:bottom center; padding-top:-10px;\",darkBG:!0,tags:[\"Object Storage\"],content:[{title:\"Introducing Spaces: Object Storage on DigitalOcean\",desc:\"A simple and cost-effective way to store, serve, backup, and archive a virtually infinite amount of media, content, images, and static files for your apps.\",\ncta:\"Try free for 2 months\",url:\"https:\/\/cloud.digitalocean.com\/spaces\"}]}],buildmode:[{name:\"100ft_test\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/general.png); background-color:#1b78f8; background-position:bottom center; overflow:hidden;\",darkBG:!0,content:[{title:\"Build something great with a $100, 60 day credit\",desc:\"Build the internet on DigitalOcean with a $100, 60 day credit to use across Droplets, Block Storage, Load Balancers and more!\",cta:\"Redeem Credit\",url:\"https:\/\/try.digitalocean.com\/performance\/\"},\n{title:\"$100, 60 day credit to get started on DigitalOcean\",desc:\"Build the internet on DigitalOcean with a $100, 60 day credit to use across Droplets, Block Storage, Load Balancers and more!\",cta:\"Redeem Credit\",url:\"https:\/\/try.digitalocean.com\/performance\/\"}]}],regulars:[{name:\"100ft_test\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/general.png); background-color:#1b78f8; background-position:bottom center; overflow:hidden;\",darkBG:!0,content:[{title:\"Build something great with a $100, 60 day credit\",\ndesc:\"Build the internet on DigitalOcean with a $100, 60 day credit to use across Droplets, Block Storage, Load Balancers and more!\",cta:\"Redeem Credit\",url:\"https:\/\/try.digitalocean.com\/performance\/\"},{title:\"$100, 60 day credit to get started on DigitalOcean\",desc:\"Build the internet on DigitalOcean with a $100, 60 day credit to use across Droplets, Block Storage, Load Balancers and more!\",cta:\"Redeem Credit\",url:\"https:\/\/try.digitalocean.com\/performance\/\"}]},{name:\"repricing\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/droplets_v4.png), linear-gradient(to bottom, #201f7f, #180d56); background-position:bottom center; padding-top:-10px;\",\ndarkBG:!0,content:[{title:\"New Droplets: More RAM, More SSD Storage, More Flexibility\",desc:\"New Droplets on DigitalOcean include 2x Memory for the same price, new High-CPU Optimized Plans, and a new class of Flexible $15 plans. The $5 Droplet now has 1GB RAM and 25GB SSD.\",cta:\"Read about new Droplets and prices\",url:\"https:\/\/blog.digitalocean.com\/new-droplet-plans\/\"}]},{name:\"write4donations\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/write4do.png); background-color:#1b78f8; background-position:bottom center; background-repeat-x:repeat;\",\ndarkBG:!0,content:[{title:\"Make a Positive Impact on the Tech Community\",desc:\"Partner with us to publish an article on open source tools and we\\u2019ll donate up to $300 to a charity of your choice.\",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"},{title:\"Write for DigitalOcean - We'll donate up to $300 to a Tech Nonprofit\",desc:\"Partner with us to publish an article on open source tools and we\\u2019ll donate $300 to a nonprofit or charity of your choice.\",cta:\"Write for DigitalOcean\",\nurl:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"}]}],everyone_else:[{name:\"repricing\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/droplets_v4.png), linear-gradient(to bottom, #201f7f, #180d56); background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"New Droplets: More RAM, More SSD Storage, More Flexibility\",desc:\"New Droplets on DigitalOcean include 2x Memory for the same price, new High-CPU Optimized Plans, and a new class of Flexible $15 plans. The $5 Droplet now has 1GB RAM and 25GB SSD.\",\ncta:\"Read about new Droplets and prices\",url:\"https:\/\/blog.digitalocean.com\/new-droplet-plans\/\"}]},{name:\"100ft_test\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/general.png); background-color:#1b78f8; background-position:bottom center; overflow:hidden;\",darkBG:!0,content:[{title:\"Build something great with a $100, 60 day credit\",desc:\"Build the internet on DigitalOcean with a $100, 60 day credit to use across Droplets, Block Storage, Load Balancers and more!\",cta:\"Redeem Credit\",\nurl:\"https:\/\/try.digitalocean.com\/performance\/\"},{title:\"$100, 60 day credit to get started on DigitalOcean\",desc:\"Build the internet on DigitalOcean with a $100, 60 day credit to use across Droplets, Block Storage, Load Balancers and more!\",cta:\"Redeem Credit\",url:\"https:\/\/try.digitalocean.com\/performance\/\"}]},{name:\"d4d\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/d4d.png); background-color:#1b78f8; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Need free Droplets for a presentation? Let\\u2019s talk.\",\ndesc:\"Receive free infrastructure credits to power your next tech talk or live demo. \",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/droplets-for-demos\/\"},{title:\"Open Source Presentation Grants\",desc:\"Receive free infrastructure credits to power your next tech talk or live demo. \",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/droplets-for-demos\/\"}]},{name:\"objectstorage\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/objectstorage.png), linear-gradient(to right, #04338b, #040434);  background-position:bottom center; padding-top:-10px;\",\ndarkBG:!0,tags:[\"Object Storage\"],content:[{title:\"Introducing Spaces: Object Storage on DigitalOcean\",desc:\"A simple and cost-effective way to store, serve, backup, and archive a virtually infinite amount of media, content, images, and static files for your apps.\",cta:\"Try free for 2 months\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new?onboarding_origin\\x3dspaces\"}]}],unused:[{name:\"write4donations_ansible\",tags:[\"Ansible\"],priority:0,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/write4do.png); background-color:#1b78f8; background-position:bottom center; background-repeat-x:repeat;\",\ndarkBG:!0,content:[{title:\"Write about Ansible - We'll donate to a tech nonprofit\",desc:\"Partner with us to publish an article on Ansible and we\\u2019ll donate up to $300 to a charity of your choice.\",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"}]},{name:\"write4donations_cicd\",tags:[\"CI\/CD\"],priority:0,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/write4do.png); background-color:#1b78f8; background-position:bottom center; background-repeat-x:repeat;\",\ndarkBG:!0,content:[{title:\"Write about CI\/CD - We'll donate to a tech nonprofit\",desc:\"Partner with us to publish an article on CI\/CD and we\\u2019ll donate up to $300 to a charity of your choice.\",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"}]},{name:\"write4donations_docker\",tags:[\"Docker\"],priority:0,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/write4do.png); background-color:#1b78f8; background-position:bottom center; background-repeat-x:repeat;\",\ndarkBG:!0,content:[{title:\"Write about Docker - We'll donate to a tech nonprofit\",desc:\"Partner with us to publish an article on Docker and we\\u2019ll donate up to $300 to a charity of your choice.\",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"}]},{name:\"write4donations_chef\",tags:[\"Chef\"],priority:0,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/write4do.png); background-color:#1b78f8; background-position:bottom center; background-repeat-x:repeat;\",\ndarkBG:!0,content:[{title:\"Write about Chef - We'll donate to a tech nonprofit\",desc:\"Partner with us to publish an article on Chef and we\\u2019ll donate up to $300 to a charity of your choice.\",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"}]},{name:\"flexible_fifteens\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/droplets_v4.png), linear-gradient(to bottom, #201f7f, #180d56); background-position:bottom center; padding-top:-10px;\",darkBG:!0,\ncontent:[{title:\"Meet the Flexible Fifteens\",desc:\"Three new Droplet sizes on DigitalOcean designed to meet the needs of \",cta:\"Read about new Droplets and prices\",url:\"https:\/\/blog.digitalocean.com\/new-droplet-plans\/\"}]},{name:\"write4donations_cicd\",tags:[\"CI\/CD\"],priority:0,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/write4do.png); background-color:#1b78f8; background-position:bottom center; background-repeat-x:repeat;\",darkBG:!0,content:[{title:\"Write about CI\/CD - We'll donate to a tech nonprofit\",\ndesc:\"Partner with us to publish an article on CI\/CD and we\\u2019ll donate up to $300 to a charity of your choice.\",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"}]}]}})}();10\u003Cwait_count++\u0026\u0026window.clearInterval(window.jQWait)},100);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cstyle type=\"text\/css\"\u003E\n  .bui-Banner--primary { border: 1px solid #0069ff; background: #f5f9ff; color: #005fe6; display: flex; align-items: center; padding: 16px; border-radius: 3px; }\n  .bui-Banner--fixed { position:fixed; bottom:60px; width:711px; left:-355px; margin-left:50%; z-index:10000; box-shadow:2px 2px 8px rgba(0,0,0,0.1);}\n  .bui-Banner-content { margin-bottom: 0; flex: 0 1 100%; display: flex; align-items: center; }\n  .bui-Icon { position: relative; line-height:1; margin: 4px 16px 0 8px; font-size:1.5em; }\n  .bui-Button--mini { top: -7px; margin:0 3px; padding: 3px 16px; font-size: 14px; line-height: 34px; display: inline-block; border: 0; border-radius: 3px; vertical-align: middle; text-align: center; text-decoration: none; text-transform: none; white-space: nowrap; font: inherit; font-weight: 600; cursor: pointer; background: #fff; color:#005fe6; }\n  .bui-Button--primary { background: #0069ff; color: #fff; }\n  .bui-Button--secondary { background: #11a95e; color: #fff; }\n  .bui-Button--danger { background: #d91d1d; color: #fff;}\n  .bui-Banner { z-index:10000; display: flex; align-items: center; padding: 16px;}\n  .bui-Banner-content {flex: 0 1 100%;}\n  .bui-u-hidden {display:none;}\n  .dialog span {position:relative; font-weight:bold; top:8px; display:inline-block; overflow:hidden; color:#f5f9ff;}\n  .dialog a {opacity:0;}\n  .dialog a.vis {opacity:1;}\n  .dialog span.vis {color:inherit;}\n  .dialog i {display:inline-block; position:absolute; width:80%; top:0; bottom:-4px; z-index:2; background:#005fe6; height:32px; left:-80%; transition: left 220ms; transition-timing-function:steps(7,end);}\n  .fast .dialog i {transition: left 150ms;}\n  .dialog span:last-of-type i { transition: left 500ms;}\n  .fast .dialog span:last-of-type i { transition: left 300ms;}\n  .dialog i.go { left:100%; }\n  .dialog .cursor {position:relative; display:none; animation: blink 1.5s linear infinite; }\n  .dialog .cursor.vis { display:inline-block; }\n  @keyframes blink { 5%, 15% {opacity:1;} 20%, 30% {opacity:0;} 35%, 45% {opacity:1;} 50%, 100% {opacity:0;} }\n\u003C\/style\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{(.8\u003CMath.random()||-1\u003Cwindow.location.search.indexOf(\"gtm_ab_cbtest\"))\u0026\u0026window.setTimeout(function(){var d=window.StructuredComments=function(a){$.extend(this,{experiment_name:\"CTA Chatbot Test\",article_type:\"procedural\",scroll_check_timing:500},a||{},{selecting:!1,curr_hl:null,curr_text:\"_INCORRECT_PART_HERE_\",event_fired:!1,user_is_logged_in:null!==window.currentUser.getData(),dialog_html:'\\x3cdiv id\\x3d\"structuredComments\"\\x3e \\x3cdiv class\\x3d\"bui-Banner--primary\" role\\x3d\"banner\"\\x3e \\x3cdiv class\\x3d\"bui-Banner-content bui-Banner-decorativeIcon\"\\x3e \\x3cdiv class\\x3d\"bui-Icon\" data-js\\x3d\"emoji\"\\x3e\\ud83e\\udd14\\x3c\/div\\x3e \\x3cp class\\x3d\"dialog feedback\"\\x3e Was this helpful? \\x3ca data-js\\x3d\"helpful\" class\\x3d\"bui-Button bui-Button--mini bui-Button--secondary\"\\x3eYes\\x3c\/a\\x3e \\x3ca data-js\\x3d\"notHelpful\" class\\x3d\"bui-Button bui-Button--mini bui-Button--danger\"\\x3eNo\\x3c\/a\\x3e \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog notHelpful\" style\\x3d\"display:none;\"\\x3e Sorry to hear that. If it is something specific about the tutorial \\x3ca data-js\\x3d\"reportIssue\" class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\" title\\x3d\"Example: There is a typo, code is incorrect, or a command returned an error.\" data-tooltip\\x3d\"bottom\"\\x3eReport an Issue\\x3c\/a\\x3e or \\x3ca class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\" data-js\\x3d\"askRelatedQuestion\" target\\x3d\"_blank\" href\\x3d\"\/community\/questions\/new\" title\\x3d\"Example: How would you install the same thing using Docker?\" data-tooltip\\x3d\"bottom\"\\x3eAsk a Related Question \\u29c9\\x3c\/a\\x3e if this didn\\x26apos;t provide the answers you need. \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog helpful\" style\\x3d\"display:none;\"\\x3e Great! We would appreciate it if you \\x3ca data-js\\x3d\"share\" class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\"\\x3eshare on Twitter\\x3c\/a\\x3e {SECOND_CTA}\\x3c\/p\\x3e \\x3cp class\\x3d\"dialog reportIssue\" style\\x3d\"display:none; font-weight:bold;\"\\x3e Select the section or code block of the tutorial that caused the issue. \\x3ca data-js\\x3d\"buildComment\" class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\"\\x3eSkip\\x3c\/a\\x3e \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog issueType\" style\\x3d\"display:none; font-weight:bold;\"\\x3e Do you know how to solve the issue? \\x3ca data-js\\x3d\"reportSolution\" class\\x3d\"bui-Button bui-Button--mini bui-Button--secondary\"\\x3eYes\\x3c\/a\\x3e \\x3ca data-js\\x3d\"requestSolution\" class\\x3d\"bui-Button bui-Button--mini bui-Button--danger\"\\x3eNo\\x3c\/a\\x3e \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog reportSolution\" style\\x3d\"display:none;\"\\x3e Thanks, here\\x26apos;s a suggested comment template to use. Feel free to edit as needed. We appreciate your feedback. \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog requestSolution\" style\\x3d\"display:none;\"\\x3e Here\\x26apos;s a suggested comment template to use. If you include more information like your error, operating system and version, someone will be more likely to know a solution. \\x3c\/p\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3cdiv style\\x3d\"text-align:center; margin:16px;\"\\x3e\\x3cem\\x3e\\x3ca data-js\\x3d\"leaveUnstructuredComment\" href\\x3d\"javascript:void(0);\"\\x3eor leave a comment\\x3c\/a\\x3e\\x3c\/em\\x3e\\x3c\/div\\x3e \\x3c\/div\\x3e',\ntags_subscribe_html:'Also, did you know you can \\x3ca href\\x3d\"{TAGHREF}\" class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\"\\x3esubscribe to {TAG} tag\\x3c\/a\\x3e to get notified when we publish more {TAG} content?',newsletter_subscribe_html:'or \\x3ca href\\x3d\"\/community\/newsletter\" class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\"\\x3eSubscribe to our Newsletter\\x3c\/a\\x3e for great technical content from around the web every two weeks.',interesting_tags:\"Conceptual;Kubernetes;Javascript;Python;CI\/CD;Scaling;Go;Ruby;Docker;Big Data;Machine Learning\".split(\";\")});\nthis.initialize()};$.extend(d.prototype,{initialize:function(){var a=this;$(\".tutorial-ctas, .related-tutorials, #newsletter-signup-dialog, .response-form, .tutorial-series-container\").hide();$(\".tutorial-footer-details, .content-comments\").css({\"border-bottom\":\"none\",\"border-top\":\"none\"});$(\".comments-header\").before(this.dialog_html.replace(\"{SECOND_CTA}\",this.getSecondCTA()));$(\"#structuredComments\").find(\".dialog\").each(function(){$(this).contents().filter(function(){return 3===this.nodeType}).each(function(){$(this).replaceWith(\"\\x3cspan\\x3e\\x3ci\\x3e\\x3c\/i\\x3e\"+\nthis.data.split(\" \").join(\"\\x3c\/span\\x3e \\x3cspan\\x3e\\x3ci\\x3e\\x3c\/i\\x3e\")+\"\\x3c\/span\\x3e\")})});$(\"#structuredComments a, .stepFour a\").click(function(){a[this.dataset.js]();a.track(\"Success\",this.innerText+\"-\"+this.dataset.js)});this.hl_bg=$('\\x3cdiv data-js\\x3d\"structuredComments_hl\" style\\x3d\"display:none; background: rgba(242,80,65,0.2); position:absolute; z-index:1000; float:left;\"\\x3e\\x3c\/div\\x3e').prependTo(\"body\");this.hl_bg.click(this.selectIssueElement.bind(this));this.scroll_check_interval=\nwindow.setInterval(function(){this.isInView()\u0026\u0026(window.clearInterval(this.scroll_check_interval),this.showDialog(\".feedback\"),this.track(\"Viewed\",\"Step one prompt\"))}.bind(this),this.scroll_check_timing)},_slugify:function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")},track:function(a,b,c){",["escape",["macro",6],8,16],"(a,this.experiment_name,b||\"\",c)},getSecondCTA:function(){if(this.user_is_logged_in){var a=$(this.interesting_tags).filter(function(a,\nb){return-1!=$(\"h1\").text().indexOf(b)})[0];if(a)return this.tags_subscribe_html.replace(\/{TAG}\/g,a).replace(\"{TAGHREF}\",\"https:\/\/www.digitalocean.com\/community\/tags\/\"+this._slugify(a)+\"?type\\x3dtutorials\\x26subscribe\");a=$(\".meta-section.tags a\").map(function(a,b){return{text:$(b).text(),href:b.href}});for(var b=0;b\u003Ca.length;b++)if(0\u003C$.inArray(a[b].text,this.interesting_tags))return this.tags_subscribe_html.replace(\/{TAG}\/g,a[b].text).replace(\"{TAGHREF}\",a[b].href)}return this.newsletter_subscribe_html},\nisInView:function(){return $(window).scrollTop()+$(window).height()\u003E$(\"#structuredComments\").offset().top-$(\"#structuredComments\").height()},animate:function(a,b){var c=b?80:170,d=function(a,b){return function(){$(a).find(\"i\").addClass(\"go\");setTimeout(function(){$(a).addClass(\"vis\")},b)}},g=RegExp(\/[!\\.,\\?:;]\/),e=0;$(a).find(\"span, button, a\").map(function(a,b){var f=g.test($(b).text().slice(-1));setTimeout(d(b,f?c:c\/2),e);e+=f?2*c:c})},showDialog:function(a,b){b\u0026\u0026$(\"#structuredComments\").find('*[data-js\\x3d\"emoji\"]').text(b);\n$(\"#structuredComments\").find(\".dialog\").hide();$(\"#structuredComments\").find(a).show();this.animate($(\"#structuredComments\").find(a),$(\"#structuredComments\").hasClass(\"fast\"))},helpful:function(){$(\"#structuredComments\").addClass(\"fast\");this.showDialog(\".helpful\",\"\\ud83c\\udf89\");this.user_is_logged_in\u0026\u0026$(\".tutorial-header .new-upvote-button:not(.new-upvote-upvoted)\").click()},notHelpful:function(){$(\"#structuredComments\").addClass(\"fast\");this.showDialog(\".notHelpful\",\"\\ud83d\\ude1e\")},share:function(){$($(\"#sbTwitter \\x3e a.share-link.share-popup\")[0]).click()},\naskRelatedQuestion:function(){sessionStorage.setItem(\"askRelatedQuestion\",JSON.stringify({slug:window.location.pathname.replace(\"\/community\/tutorials\/\",\"\"),tags:$(\"a.tag\").map(function(){return this.innerText}).get()}))},leaveUnstructuredComment:function(){$(\".response-form\").show().find(\"#comment_content\").focus()},reportIssue:function(){$(\"html, body\").animate({scrollTop:300});$(\"#structuredComments .bui-Banner--primary\").addClass(\"bui-Banner--fixed\");this.showDialog(\".reportIssue\",\"\\ud83d\\ude42\");\nthis.highlighIssueElement()},highlighIssueElement:function(){var a=this;$(\"div.tutorial-content\").on(\"mousemove.StructuredComments\",function(b){b=$(b.target);b!==a.curr_hl\u0026\u0026\"DIV\"!==b.prop(\"tagName\")\u0026\u0026\"H2\"!==b.prop(\"tagName\")\u0026\u0026b.parents(\"div.tutorial-content\").length\u0026\u0026(a.curr_hl=b,a.curr_text=b.text(),a.hl_bg.css({display:\"block\",top:b.offset().top-3,left:b.offset().left-3,width:b.outerWidth()+6,height:b.outerHeight()+6}))})},selectIssueElement:function(a){$(\"div.tutorial-content\").unbind(\"mousemove.StructuredComments\");\n$(\"html, body\").animate({scrollTop:this.curr_hl.offset().top-$(window).height()\/2+this.curr_hl.height()\/2});this.showDialog(\".issueType\")},requestSolution:function(a){this.showDialog(\".requestSolution\");setTimeout(function(){$(\"#structuredComments\").hide()},1E4);this.buildComment(\"I had an issue here:\\n\\x3e\"+this.curr_text.replace(\/^\\s+|\\s+$\/g,\"\").replace(\/\\n\/g,\"\\n\\x3e\")+\"\\n\\nI got the error:\\n```\\n_YOUR_ERROR_HERE_\\n```\\nrunning on **_YOUR_OPERATING_SYSTEM_AND_VERSION_HERE_**\\nSome more context about my error:\\n_ANY_OTHER_INFO_THAT_MIGHT_HELP_HERE_\")},\nreportSolution:function(a){this.showDialog(\".reportSolution\",\"\\ud83d\\udc4d\");setTimeout(function(){$(\"#structuredComments\").hide()},1E4);this.buildComment(\"This part:\\n\\x3e\"+this.curr_text.replace(\/^\\s+|\\s+$\/g,\"\").replace(\/\\n\/g,\"\\n\\x3e\")+\"\\n\\nShould be updated to:\\n\\x3e _CORRECTED_CONTENT_HERE\\n\\nBecause:\\n _ANY_INFO_ON_WHY_THIS_NEEDS_TO_CHANGE_HERE_\")},buildComment:function(a){this.hl_bg.hide();$(\".response-form\").show().find(\"#comment_content\").val(a).prop(\"disabled\",!1).trigger(\"autosize.resize\").focus().end().find(\".submit-comment\").prop(\"disabled\",\n!0).end();$(\"html, body\").animate({scrollTop:$(\".response-form\").offset().top-200});$(\"#comment_content\").on(\"keyup\",this.enablePost).attr({tooltip:\"bottom\",title:\"Add your info in place of the _YOUR_DATA_HERE_ instances in the comment.\"})},enablePost:function(){-1===$(\"#comment_content\").val().indexOf(\"_HERE_\")?$(\".submit-comment\").prop(\"disabled\",!1):$(\".submit-comment\").prop(\"disabled\",!0)}});new d},3E3)}catch(d){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar sub=document.querySelector(\".subscribe\");0\u003Cwindow.location.search.indexOf(\"\\x26subscribe\")\u0026\u0026null!==sub.offsetParent\u0026\u0026sub.click();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.cookie=\"last_logged_in_at\\x3d\"+Math.round((new Date).getTime()\/1E3)+\";expires\\x3d\"+(new Date((new Date).getTime()+31536E6)).toUTCString()+\";path\\x3d\/;domain\\x3d.digitalocean.com;\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":193
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":118
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":121
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":119
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":122
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/t.co\/i\/adsct?p_id=Twitter\u0026p_user_id=0\u0026txn_id=nuqsf\u0026events=%5B%5B%22pageview%22%2Cnull%5D%5D\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":123
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":120
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"staging"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"cloud.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"pay-pal-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"credit-card-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"activated"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/cloud."
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Create"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Button Button--green Button--large Button--fullWidth"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/console"
    },{
      "function":"_gt",
      "arg0":["macro",18],
      "arg1":"50"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"ember_pageview"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Create a Space"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/community"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"confirmed"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"confirmed_state_pageview"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/products\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/community\/tutorial"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/community"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"_"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"null"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/community\/tutorials\/"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"(^$|((^|,)758737_224($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/community\/tutorials\/how-to-use-the-javascript-developer-console"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/products\/object-storage\/"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/lp\/hosting"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/help\/technical\/product\/"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/pricing\/"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/community\/tags\/data-analysis"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/dashboard"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium=rtg"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"community\/tutorials"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium=paid_social"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium=display"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium="
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"rtg"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"uuid="
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/community\/questions\/"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/community\/questions\/new"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/community\/tags\/"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",0,2,4],["unless",3],["add",1]],
    [["if",5],["add",2,3,4,16,24,26,27,28,30,38,41]],
    [["if",6],["add",2,3,4,16,24,26,27,28,30,38,41]],
    [["if",0,7,8],["add",4,24,26,27,28,30,38,41]],
    [["if",0],["unless",9],["add",5,6,23,25,40,43,60]],
    [["if",4,10,11,12],["add",7,8,14,17]],
    [["if",0,4,13],["unless",3,14],["add",9,10]],
    [["if",0,4,15],["unless",3,14],["add",11,19]],
    [["if",0,4,16],["unless",3,14],["add",12,13,18]],
    [["if",17,18],["add",15]],
    [["if",4,11,12,19],["add",20,21]],
    [["if",0,20],["unless",21],["add",22]],
    [["if",0,1],["add",29],["block",0]],
    [["if",0,22],["add",31,32]],
    [["if",0,20,23],["add",33,34,42,61]],
    [["if",24,25],["add",35,36]],
    [["if",0,7,26],["add",37]],
    [["if",27],["add",37]],
    [["if",0,28,29],["add",39]],
    [["if",25],["add",44,45,47]],
    [["if",25,30],["add",46]],
    [["if",0,4],["unless",3,14],["add",48,69]],
    [["if",0,20],["unless",31],["add",48]],
    [["if",20,23,33],["unless",32],["add",49]],
    [["if",33,36],["add",50,53]],
    [["if",0,37,38],["add",51]],
    [["if",39,40],["add",52]],
    [["if",0,41],["add",54]],
    [["if",0],["unless",4],["add",55]],
    [["if",33,42],["add",56]],
    [["if",25,43],["add",57]],
    [["if",0,44],["add",58]],
    [["if",0,45],["add",59]],
    [["if",33,46],["add",62]],
    [["if",0,4,47],["add",63]],
    [["if",18,47],["add",63]],
    [["if",25,48,49],["add",64]],
    [["if",25,49,50],["add",64]],
    [["if",25,49,51],["add",64]],
    [["if",0,22,52,53],["add",64]],
    [["if",0,45,54],["add",65]],
    [["if",0,55],["unless",56],["add",66]],
    [["if",0,36],["add",67]],
    [["if",0,57],["add",68]],
    [["if",0,34],["block",49]],
    [["if",0],["unless",35],["block",49]]]
},
"runtime":[
[],[]
]};

var ba=this,ea=function(){if(null===ca){var a;a:{var b=ba.document.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");if(c&&da.test(c)){a=c;break a}}a=null}ca=a||""}return ca},da=/^[\w+/_-]+[=]{0,2}$/,ca=null,fa=function(a,b){function c(){}c.prototype=b.prototype;a.ye=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ie=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var g=function(a,b){this.s=a;this.Qc=b};g.prototype.fd=function(){return this.s};g.prototype.getType=g.prototype.fd;g.prototype.getData=function(){return this.Qc};g.prototype.getData=g.prototype.getData;var ha=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ia=function(){this.da={};this.qa=!1};ia.prototype.get=function(a){return this.da["dust."+a]};ia.prototype.set=function(a,b){!this.qa&&(this.da["dust."+a]=b)};ia.prototype.has=function(a){return this.da.hasOwnProperty("dust."+a)};var ja=function(a){var b=[],c;for(c in a.da)a.da.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ia.prototype.remove=function(a){!this.qa&&delete this.da["dust."+a]};ia.prototype.D=function(){this.qa=!0};var u=function(a){this.fa=new ia;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ha(b)?this.h[Number(b)]=a[Number(b)]:this.fa.set(b,a[b]))};u.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};u.prototype.set=function(a,b){if("length"==a){if(!ha(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ha(a)?this.h[Number(a)]=b:this.fa.set(a,b)};
u.prototype.set=u.prototype.set;u.prototype.get=function(a){return"length"==a?this.length():ha(a)?this.h[Number(a)]:this.fa.get(a)};u.prototype.get=u.prototype.get;u.prototype.length=function(){return this.h.length};u.prototype.M=function(){for(var a=ja(this.fa),b=0;b<this.h.length;b++)a.push(b+"");return new u(a)};u.prototype.getKeys=u.prototype.M;u.prototype.remove=function(a){ha(a)?delete this.h[Number(a)]:this.fa.remove(a)};u.prototype.remove=u.prototype.remove;u.prototype.pop=function(){return this.h.pop()};
u.prototype.pop=u.prototype.pop;u.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};u.prototype.push=u.prototype.push;u.prototype.shift=function(){return this.h.shift()};u.prototype.shift=u.prototype.shift;u.prototype.splice=function(a,b,c){return new u(this.h.splice.apply(this.h,arguments))};u.prototype.splice=u.prototype.splice;u.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
u.prototype.unshift=u.prototype.unshift;u.prototype.has=function(a){return ha(a)&&this.h.hasOwnProperty(a)||this.fa.has(a)};var ka=function(){function a(a,b){c[a]=b}function b(){c={}}var c={},d={add:a,reset:b,create:function(d){var e={add:a,request:function(a,b){return c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};e.add=e.add;e.request=e.request;e.reset=e.reset;return e}};d.add=d.add;d.reset=d.reset;return d};var la=function(){function a(a,c){if(b[a]){if(b[a].Ea+c>b[a].max)throw Error("Quota exceeded");b[a].Ea+=c}}var b={},c=void 0,d=void 0,e={Bd:function(a){c=a},Eb:function(){c&&a(c,1)},Cd:function(a){d=a},O:function(b){d&&a(d,b)},Td:function(a,c){b[a]=b[a]||{Ea:0};b[a].max=c},ed:function(a){return b[a]&&b[a].Ea||0},reset:function(){b={}},Kc:a};e.onFnConsume=e.Bd;e.consumeFn=e.Eb;e.onStorageConsume=e.Cd;e.consumeStorage=e.O;e.setMax=e.Td;e.getConsumed=e.ed;e.reset=e.reset;e.consume=e.Kc;return e};var na=function(a,b,c){this.F=a;this.U=b;this.T=c;this.h=new ia};na.prototype.add=function(a,b){this.h.qa||(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};na.prototype.add=na.prototype.add;na.prototype.set=function(a,b){this.h.qa||(this.T&&this.T.has(a)?this.T.set(a,b):(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};na.prototype.set=na.prototype.set;
na.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.T?this.T.get(a):void 0};na.prototype.get=na.prototype.get;na.prototype.has=function(a){return!!this.h.has(a)||!(!this.T||!this.T.has(a))};na.prototype.has=na.prototype.has;na.prototype.C=function(){return this.F};na.prototype.D=function(){this.h.D()};var oa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},pa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var v=function(a,b){ia.call(this);this.Rb=a;this.cd=b};fa(v,ia);var ra=function(a,b){for(var c,d=0;d<b.length&&!(c=qa(a,b[d]),c instanceof g);d++);return c},qa=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof v))throw"Attempting to execute non-function "+b[0]+".";return c.i.apply(c,[a].concat(b.slice(1)))};v.prototype.toString=function(){return this.Rb};v.prototype.getName=function(){return this.Rb};v.prototype.getName=v.prototype.getName;v.prototype.M=function(){return new u(ja(this))};
v.prototype.getKeys=v.prototype.M;v.prototype.i=function(a,b){var c,d={A:function(){return a},evaluate:function(b){var c=a;return oa(b)?qa(c,b):b},ma:function(b){return ra(a,b)},C:function(){return a.C()},oe:function(){c||(c=a.U.create(d));return c}};a.C().Eb();return this.cd.apply(d,Array.prototype.slice.call(arguments,1))};v.prototype.invoke=v.prototype.i;var x=function(){ia.call(this)};fa(x,ia);x.prototype.M=function(){return new u(ja(this))};x.prototype.getKeys=x.prototype.M;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var sa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ta=function(a){if(null==a)return String(a);var b=sa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ua=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},va=function(a){if(!a||"object"!=ta(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ua(a,"constructor")&&!ua(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ua(a,b)},y=function(a,b){var c=b||("array"==ta(a)?[]:{}),d;for(d in a)if(ua(a,d)){var e=a[d];"array"==ta(e)?("array"!=ta(c[d])&&(c[d]=[]),c[d]=y(e,c[d])):va(e)?(va(c[d])||(c[d]={}),c[d]=y(e,c[d])):c[d]=e}return c};var wa=function(a){if(a instanceof u){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=wa(a.get(d)));return b}if(a instanceof x){for(var e={},f=a.M(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=wa(a.get(f.get(k)));return e}return a instanceof v?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=xa(b[c]);var d=new na(la(),ka());return wa(a.i.apply(a,[d].concat(b)))}:a},xa=function(a){if(oa(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=xa(a[c]));return new u(b)}if(va(a)){var d=
new x,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,xa(a[e]));return d}if("function"===typeof a)return new v("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=wa(this.evaluate(c[d]));return xa(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var ya={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.A(),e=this.evaluate(b);if(!(e instanceof u))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.C().O(a.length+f.length);return new v(a,function(){return function(a){for(var b=new na(d.F,d.U,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new u(c));var q=ra(b,f);if(q instanceof g)return"return"===q.s?q.getData():q}}())},list:function(a){var b=this.C();b.O(arguments.length);for(var c=new u,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.O(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.C(),c=new x,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.O(h);c.set(e,f)}return c},undefined:function(){}};var z=function(){this.F=la();this.U=ka();this.na=new na(this.F,this.U)};z.prototype.N=function(a,b){var c=new v(a,b);c.D();this.na.set(a,c)};z.prototype.addInstruction=z.prototype.N;z.prototype.Db=function(a,b){ya.hasOwnProperty(a)&&this.N(b||a,ya[a])};z.prototype.addNativeInstruction=z.prototype.Db;z.prototype.C=function(){return this.F};z.prototype.getQuota=z.prototype.C;z.prototype.Ka=function(){this.F=la();this.na.F=this.F};z.prototype.resetQuota=z.prototype.Ka;
z.prototype.Pd=function(){this.U=ka();this.na.U=this.U};z.prototype.resetPermissions=z.prototype.Pd;z.prototype.K=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.ib(c)};z.prototype.execute=z.prototype.K;z.prototype.ib=function(a){for(var b,c=0;c<arguments.length;c++){var d=qa(this.na,arguments[c]);b=d instanceof g||d instanceof v||d instanceof u||d instanceof x||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
z.prototype.run=z.prototype.ib;z.prototype.D=function(){this.na.D()};z.prototype.makeImmutable=z.prototype.D;var Aa=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Ba={Wd:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof u)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new u(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new u(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new u(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Aa(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new u(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Aa(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.i(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var B={Pb:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},Ca="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Da=new g("break"),Ea=new g("continue");B.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};B.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
B.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof u))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=pa(Ca,b))return xa(a[b].apply(a,Aa(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof u){if(a.has(b)){var d=
a.get(b);if(d instanceof v){var e=Aa(c);e.unshift(this.A());return d.i.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=pa(Ba.Wd,b))return e=Aa(c),e.unshift(this.A()),Ba[b].apply(a,e)}if(a instanceof v||a instanceof x){if(a.has(b)){d=a.get(b);if(d instanceof v)return e=Aa(c),e.unshift(this.A()),d.i.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof v?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Aa(c))}throw"TypeError: Object has no '"+
b+"' property.";};B.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.A();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};B["break"]=function(){return Da};B["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};B["continue"]=function(){return Ea};
B.Rc=function(a,b,c){var d=new u;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[B.Pb.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.A().set(a,this.evaluate(f))};B.Uc=function(a,b){return this.evaluate(a)/this.evaluate(b)};B.Xc=function(a,b){return this.evaluate(a)==this.evaluate(b)};B.Zc=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
B.dd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.A();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.ma(c);if(f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}else if(b instanceof x||b instanceof u||b instanceof v){var h=b.M(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.ma(c),f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}};B.get=function(a){return this.A().get(this.evaluate(a))};
B.Nb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof x||a instanceof u||a instanceof v?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ha(b)&&(c=a[b]));return c};B.gd=function(a,b){return this.evaluate(a)>this.evaluate(b)};B.hd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};B.md=function(a,b){return this.evaluate(a)===this.evaluate(b)};B.nd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
B["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.ma(d);if(e instanceof g)return e};B.ud=function(a,b){return this.evaluate(a)<this.evaluate(b)};B.vd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};B.wd=function(a,b){return this.evaluate(a)%this.evaluate(b)};B.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};B.xd=function(a){return-this.evaluate(a)};B.yd=function(a){return!this.evaluate(a)};
B.zd=function(a,b){return this.evaluate(a)!=this.evaluate(b)};B["null"]=function(){return null};B.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};B.Xb=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};B.Yb=function(a){return this.evaluate(a)};B.quote=function(a){return Array.prototype.slice.apply(arguments)};B["return"]=function(a){return new g("return",this.evaluate(a))};
B.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof v||a instanceof u||a instanceof x)&&a.set(b,c);return c};B.Vd=function(a,b){return this.evaluate(a)-this.evaluate(b)};
B["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!oa(b)||!oa(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.s;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.s||"continue"==d.s)))return d};
B.Xd=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};B["typeof"]=function(a){a=this.evaluate(a);return a instanceof v?"function":typeof a};B.undefined=function(){};B["var"]=function(a){for(var b=this.A(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
B["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.ma(f),e instanceof g)){if("break"==e.s)return;if("return"==e.s)return e}for(;this.evaluate(a);){e=this.ma(f);if(e instanceof g){if("break"==e.s)break;if("return"==e.s)return e}this.evaluate(b)}};var Ga=function(){this.Ob=!1;this.P=new z;Fa(this);this.Ob=!0};Ga.prototype.sd=function(){return this.Ob};Ga.prototype.isInitialized=Ga.prototype.sd;Ga.prototype.K=function(a){return this.P.ib(a)};Ga.prototype.execute=Ga.prototype.K;Ga.prototype.D=function(){this.P.D()};Ga.prototype.makeImmutable=Ga.prototype.D;
var Fa=function(a){function b(a,b){e.P.Db(a,String(b))}function c(a,b){e.P.N(String(d[a]),b)}var d=B.Pb,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",B.add);c("AND",B.and);c("APPLY",B.apply);c("ASSIGN",B.assign);c("BREAK",B["break"]);c("CASE",B["case"]);c("CONTINUE",B["continue"]);c("DEFAULT",B["case"]);c("DEFN",B.Rc);c("DIVIDE",B.Uc);c("EQUALS",B.Xc);c("EXPRESSION_LIST",B.Zc);c("FOR_IN",B.dd);c("GET",B.get);c("GET_INDEX",
B.Nb);c("GET_PROPERTY",B.Nb);c("GREATER_THAN",B.gd);c("GREATER_THAN_EQUALS",B.hd);c("IDENTITY_EQUALS",B.md);c("IDENTITY_NOT_EQUALS",B.nd);c("IF",B["if"]);c("LESS_THAN",B.ud);c("LESS_THAN_EQUALS",B.vd);c("MODULUS",B.wd);c("MULTIPLY",B.multiply);c("NEGATE",B.xd);c("NOT",B.yd);c("NOT_EQUALS",B.zd);c("NULL",B["null"]);c("OR",B.or);c("POST_DECREMENT",B.Xb);c("POST_INCREMENT",B.Xb);c("PRE_DECREMENT",B.Yb);c("PRE_INCREMENT",B.Yb);c("QUOTE",B.quote);c("RETURN",B["return"]);c("SET_PROPERTY",B.setProperty);
c("SUBTRACT",B.Vd);c("SWITCH",B["switch"]);c("TERNARY",B.Xd);c("TYPEOF",B["typeof"]);c("VAR",B["var"]);c("WHILE",B["while"])};Ga.prototype.N=function(a,b){this.P.N(a,b)};Ga.prototype.addInstruction=Ga.prototype.N;Ga.prototype.C=function(){return this.P.C()};Ga.prototype.getQuota=Ga.prototype.C;Ga.prototype.Ka=function(){this.P.Ka()};Ga.prototype.resetQuota=Ga.prototype.Ka;var Ha=function(){this.Ha={}};Ha.prototype.get=function(a){return this.Ha.hasOwnProperty(a)?this.Ha[a]:void 0};Ha.prototype.add=function(a,b){if(this.Ha.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new v(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.D();this.Ha[a]=c};Ha.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var C=window,F=document,Ia=navigator,Ja=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Ka=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},J=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ka(d,b);c&&(d.onerror=c);ea()&&d.setAttribute("nonce",ea());var e=F.getElementsByTagName("script")[0]||F.body||F.head;e.parentNode.insertBefore(d,e);return d},
La=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||F.body||F.head;d.parentNode.insertBefore(c,d);Ka(c,b);void 0!==a&&(c.src=a);return c},P=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Ma=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Na=function(a,b,
c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},Q=function(a){C.setTimeout(a,0)},Pa=function(a){var b=F.getElementById(a);if(b&&Oa(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Oa(document.all[a][c],"id")==a)return document.all[a][c];return b},Oa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Qa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g,
" "));return b},Ra=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c};var Sa=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},R=function(a,b,c,d,e){var f,h=a.protocol||C.location.protocol;h=h.replace(":","").toLowerCase();b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=h;break;case "host":f=(a.hostname||C.location.hostname).split(":")[0].toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;
case "port":f=String(1*(a.hostname?a.port:C.location.port)||("http"==h?80:"https"==h?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=pa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Sa(f,e));break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ta=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},S=function(a){var b=
F.createElement("a");a&&(b.href=a);return b};var Wa=function(){this.Wb=new Ga;var a=new Ha;a.addAll(Ua());Va(this,function(b){return a.get(b)})},Ua=function(){return{callInWindow:Xa,getCurrentUrl:Ya,getInWindow:Za,getReferrer:$a,getUrlComponent:bb,getUrlFragment:cb,isPlainObject:db,loadIframe:eb,loadJavaScript:fb,removeUrlFragment:gb,replaceAll:hb,sendTrackingBeacon:kb,setInWindow:lb}};Wa.prototype.K=function(a){return this.Wb.K(a)};Wa.prototype.execute=Wa.prototype.K;var Va=function(a,b){a.Wb.N("require",b)};
function Xa(a,b){for(var c=a.split("."),d=C,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==ta(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(wa(arguments[f]));e.apply(d,h)}}function Ya(){return C.location.href}function Za(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=wa(b));return xa(e[d[f]])}function $a(){return F.referrer}
function bb(a,b,c,d,e){var f;if(d&&d instanceof u){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return R(S(a),b,c,f,e)}function cb(a){return R(S(a),"fragment")}function db(a){return a instanceof x}function eb(a,b){var c=this.A();La(a,function(){b instanceof v&&b.i(c)})}var mb={};
function fb(a,b,c,d){var e=this.A(),f=function(){b instanceof v&&b.i(e)},h=function(){c instanceof v&&c.i(e)};d?mb[d]?(mb[d].onSuccess.push(f),mb[d].onFailure.push(h)):(mb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=mb[d].onSuccess,b=0;b<a.length;b++)Q(a[b]);a.push=function(a){Q(a);return 0}},h=function(){for(var a=mb[d].onFailure,b=0;b<a.length;b++)Q(a[b]);mb[d]=null},J(a,f,h)):J(a,f,h)}function gb(a){return Ta(S(a))}function hb(a,b,c){return a.replace(new RegExp(b,"g"),c)}
function kb(a,b,c){var d=this.A();P(a,function(){b instanceof v&&b.i(d)},function(){c instanceof v&&c.i(d)})}function lb(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=wa(b),!0):!1};
var nb=[],ob={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pb=function(a){return ob[a]},qb=/[\x00\x22\x26\x27\x3c\x3e]/g;var ub=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,wb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},xb=function(a){return wb[a]};nb[7]=function(a){return String(a).replace(ub,xb)};
nb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ub,xb)+"'"}};var Fb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Gb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Hb=function(a){return Gb[a]};nb[16]=function(a){return a};var Jb,Kb=[],Lb=[],Mb=[],Nb=[],Ob=[],Pb={},Ub,Vb,Wb,Xb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";if(Pb[b]){var c={},d;for(d in a)a.hasOwnProperty(d)&&0===d.indexOf("vtp_")&&(c[d]=a[d]);return Pb[b](c)}var e=new x,f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&e.set(f.substr(4),xa(a[f]));var h=Jb([b,e]);h instanceof g&&"return"===h.s&&(h=h.getData());return wa(h)},Zb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=
Yb(a[e],b,c));return d},Yb=function(a,b,c){if(oa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Yb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Kb[f];if(!h||b(h))return;c[f]=!0;try{var k=Zb(h,b,c);d=Xb(k);Wb&&(d=Wb.Mc(d,k))}catch(w){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Yb(a[l],b,c)]=Yb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Yb(a[n],b,c);Vb&&(m=m||p===
Vb.ya);d.push(p)}return Vb&&m?Vb.Nc(d):d.join("");case "escape":d=Yb(a[1],b,c);if(Vb&&oa(a[1])&&"macro"===a[1][0]&&Vb.td(a))return Vb.Gd(d);d=String(d);for(var q=2;q<a.length;q++)nb[a[q]]&&(d=nb[a[q]](d));return d;case "tag":var t=a[1];if(!Nb[t])throw Error("Unable to resolve tag reference "+t+".");return d={Kb:a[2],index:t};case "zb":var r=$b({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(r=!r);return r;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");
}}return a},$b=function(a,b,c){try{return Ub(Zb(a,b,c))}catch(d){JSON.stringify(a)}return null};var ac=null,dc=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];ac=bc(a);for(var e=0;e<Lb.length;e++){var f=Lb[e],h=cc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<Nb.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},cc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ac(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=ac(e[c]);if(null===d)return null;if(d)return!1}return!0};
var bc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=$b(Mb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var gc={},hc=null;gc.m="GTM-KHWBBT";var ic=null,jc="//www.googletagmanager.com/a?id="+gc.m+"&cv=415",kc={},lc={};var mc=function(){},nc=function(a){return"function"==typeof a},oc=function(a){return"string"==ta(a)},pc=function(a){return"number"==ta(a)&&!isNaN(a)},qc=function(a){return Math.round(Number(a))||0},rc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},sc=function(a){var b=[];if(oa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},tc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},uc=function(a,b){if(!pc(a)||!pc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},vc=function(){this.prefix="gtm.";this.values={}};vc.prototype.set=function(a,b){this.values[this.prefix+a]=b};vc.prototype.get=function(a){return this.values[this.prefix+a]};vc.prototype.contains=function(a){return void 0!==this.get(a)};var wc=function(){var a=hc.sequence||0;hc.sequence=a+1;return a},xc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},yc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var T=function(){var a=function(a){return{toString:function(){return a}}};return{sb:a("convert_case_to"),tb:a("convert_false_to"),ub:a("convert_null_to"),vb:a("convert_true_to"),wb:a("convert_undefined_to"),I:a("function"),ec:a("instance_name"),fc:a("live_only"),gc:a("malware_disabled"),hc:a("once_per_event"),yb:a("once_per_load"),zb:a("setup_tags"),ic:a("tag_id"),Ab:a("teardown_tags")}}();var zc=new vc,Ac={},Dc={set:function(a,b){y(Bc(a,b),Ac)},get:function(a){return Cc(a,2)},reset:function(){zc=new vc;Ac={}}},Cc=function(a,b){return 2!=b?zc.get(a):Ec(a)},Ec=function(a,b,c){var d=a.split(".");return Gc(d)},Gc=function(a){for(var b=Ac,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Kc=function(a,b){zc.set(a,b);y(Bc(a,b),Ac)},Bc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Lc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Mc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Nc={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Oc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Pc=function(a){var b=Cc("gtm.whitelist");
var c=b&&Oc(sc(b),Mc),d=Cc("gtm.blacklist")||Cc("tagTypeBlacklist")||[];Lc.test(C.location&&C.location.hostname)&&(d=sc(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Oc(sc(d),Nc),f={};return function(h){var k=h&&h[T.I];if(!k||"string"!=typeof k)return!0;k=k.replace(/_/g,"");if(void 0!==f[k])return f[k];var l=lc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>pa(c,
k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>pa(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var t;if(!(t=0<=pa(e,k)))a:{for(var r=l||[],w=new vc,E=0;E<e.length;E++)w.set(e[E],!0);for(E=0;E<r.length;E++)if(w.get(r[E])){t=!0;break a}t=!1}q=t}return f[k]=!m||q}};var Qc={Mc:function(a,b){b[T.sb]&&"string"===typeof a&&(a=1==b[T.sb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(T.ub)&&null===a&&(a=b[T.ub]);b.hasOwnProperty(T.wb)&&void 0===a&&(a=b[T.wb]);b.hasOwnProperty(T.vb)&&!0===a&&(a=b[T.vb]);b.hasOwnProperty(T.tb)&&!1===a&&(a=b[T.tb]);return a}};var Rc=function(a){var b=hc.zones;!b&&a&&(b=hc.zones=a());return b},Sc={active:!0,isWhitelisted:function(){return!0}};var Tc=!1,Uc=0,Vc=[];function Wc(a){if(!Tc){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Tc=!0;for(var e=0;e<Vc.length;e++)Q(Vc[e])}Vc.push=function(){for(var a=0;a<arguments.length;a++)Q(arguments[a]);return 0}}}function Xc(){if(!Tc&&140>Uc){Uc++;try{F.documentElement.doScroll("left"),Wc()}catch(a){C.setTimeout(Xc,50)}}}var Yc=function(a){Tc?a():Vc.push(a)};var Zc=!1,$c=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]};var ad=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(!C[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}return C[b]},bd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=$c();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var fd=function(){return"&tc="+Nb.filter(function(a){return a}).length},gd="0.005000">Math.random(),hd="",id=function(){hd=[jc,"&v=3&t=t","&pid="+uc(),"&rv=64"].join("")},jd={},kd="",ld=void 0,md={},nd={},od=void 0,pd=2,qd=1E3,rd=function(){pd=2},sd=function(){var a=ld;return void 0===a?"":[hd,jd[a]?"":"&es=1",md[a],fd(),kd,"&z=0"].join("")},td=function(){od&&(C.clearTimeout(od),od=void 0);void 0===ld||jd[ld]&&!kd||(nd[ld]||0>=pd--||0>=qd--?nd[ld]=!0:(P(sd()),jd[ld]=
!0,kd=""))},ud=function(a,b,c){if(gd&&!nd[a]&&b){a!==ld&&(td(),ld=a);var d=c+String(b[T.I]||"").replace(/_/g,"");kd=kd?kd+"."+d:"&tr="+d;od||(od=C.setTimeout(td,500));2022<=sd().length&&td()}};function vd(a,b,c,d,e,f){var h=Nb[a],k=wd(a,b,c,d,e,f);if(!k)return null;var l=Yb(h[T.zb],f.R,[]);if(l&&l.length){var m=l[0];k=vd(m.index,b,k,1===m.Kb?e:k,e,f)}return k}
function wd(a,b,c,d,e,f){function h(){var b=Zb(k,f.R);b.vtp_gtmOnSuccess=function(){ud(f.id,Nb[a],"5");c()};b.vtp_gtmOnFailure=function(){ud(f.id,Nb[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[T.gc])d();else{ud(f.id,k,"1");try{Xb(b)}catch(E){ud(f.id,
k,"7");e()}}}var k=Nb[a];if(f.R(k))return null;var l=Yb(k[T.Ab],f.R,[]);if(l&&l.length){var m=l[0],n=vd(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.Kb?e:n}if(k[T.yb]||k[T.hc]){var p=k[T.yb]?Ob:b,q=c,t=d;if(!p[a]){h=yc(h);var r=xd(a,p,h);c=r.H;d=r.S}return function(){p[a](q,t)}}return h}function xd(a,b,c){var d=[],e=[];b[a]=yd(d,e,c);return{H:function(){b[a]=zd;for(var c=0;c<d.length;c++)d[c]()},S:function(){b[a]=Ad;for(var c=0;c<e.length;c++)e[c]()}}}
function yd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function zd(a){a()}function Ad(a,b){b()};function Bd(a){var b=0,c=0,d=!1;return{add:function(){c++;return yc(function(){b++;d&&b>=c&&a()})},uc:function(){d=!0;b>=c&&a()}}}function Cd(a,b){if(!gd)return;var c=function(a){var d=b.R(Nb[a])?"3":"4",f=Yb(Nb[a][T.zb],b.R,[]);f&&f.length&&c(f[0].index);ud(b.id,Nb[a],d);var h=Yb(Nb[a][T.Ab],b.R,[]);h&&h.length&&c(h[0].index)};c(a);}var Dd=!1;var Ed=function(a,b){var c={};c[T.I]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Nb.push(c);return Nb.length-1};var Fd=/[A-Z]+/,Gd=/\s/,Hd=function(a){if(oc(a)&&(a=a.trim(),!Gd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Fd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ca:d}}}}};var Id=null,Jd={},Kd={},Ld;function Md(){Id=Id||!hc.gtagRegistered;hc.gtagRegistered=!0;return Id}var Nd=function(a,b){var c={event:a};b&&(c.eventModel=y(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function Od(a){if(void 0===Kd[a.id]){var b;if("UA"==a.prefix)b=Ed("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=Ed("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=Ed("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=Ed("gtaggf",{conversionId:a});else if("G"==a.prefix)b=Ed("get",{trackingId:a.id,isAutoTag:!0});else return;if(!Ld){var c={name:"send_to",dataLayerVersion:2},d={};d[T.I]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Kb.push(d);Ld=["macro",Kb.length-1]}var f={arg0:Ld,
arg1:a.id,ignore_case:!1};f[T.I]="_lc";Mb.push(f);var h={"if":[Mb.length-1],add:[b]};h["if"]&&(h.add||h.block)&&Lb.push(h);Kd[a.id]=b}}
var Qd={event:function(a){var b=a[1];if(oc(b)&&!(3<a.length)){var c;if(2<a.length){if(!va(a[2]))return;c=a[2]}var d=Nd(b,c);return d}},set:function(a){var b;2==a.length&&va(a[1])?
b=y(a[1],void 0):3==a.length&&oc(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=y(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},Pd=yc(function(){});var Yd=!1,Zd=[];function $d(){if(!Yd){Yd=!0;for(var a=0;a<Zd.length;a++)Q(Zd[a])}};var ae=[],be=!1,ce=function(a){var b=a.eventCallback,c=yc(function(){nc(b)&&Q(function(){b(gc.m)})}),d=a.eventTimeout;d&&C.setTimeout(c,Number(d));return c},de=function(){for(var a=!1;!be&&0<ae.length;){be=!0;delete Ac.eventModel;var b=ae.shift();if(nc(b))try{b.call(Dc)}catch(Rd){}else if(oa(b)){var c=b;if(oc(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Cc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(Rd){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&oc(l[0])){var m=Qd[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){be=!1;continue}}var n;var p=void 0,q=b,t=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(t&&Kc(p,void 0),Kc(p,q[p]));var r=q.event;if(r){var w=q["gtm.uniqueEventId"];w||(w=wc(),q["gtm.uniqueEventId"]=w,Kc("gtm.uniqueEventId",w));ic=r;var E;var K,A,N=q,D=N.event,O=N["gtm.uniqueEventId"],I=hc.zones;A=I?I.checkState(gc.m,O):Sc;if(A.active){var L=ce(N);c:{var H=
A.isWhitelisted;if("gtm.js"==D){if(Dd){K=!1;break c}Dd=!0}var M=O,G=D;if(gd&&!(0>=qd)&&ld!==M){td();ld=M;kd="";var V=md,aa=M,ma,za=G;ma=0===za.indexOf("gtm.")?encodeURIComponent(za):"*";V[aa]="&e="+ma+"&eid="+M;od||(od=C.setTimeout(td,500))}var ib=Pc(H),ab={id:O,name:D,Gc:L||mc,R:ib,La:dc(ib)};for(var Hc,Rb=ab,Ud=Bd(Rb.Gc),Hf=[],Sb=[],jb=0;jb<Nb.length;jb++)if(Rb.La[jb]){var If=Nb[jb];var vb=Ud.add();try{var Vd=vd(jb,Hf,vb,vb,vb,Rb);Vd?Sb.push(Vd):(Cd(jb,Rb),vb())}catch(Rd){vb()}}Ud.uc();for(var Ic=0;Ic<Sb.length;Ic++)Sb[Ic]();Hc=0<Sb.length;if("gtm.js"===D||"gtm.sync"===D)d:{}if(Hc){for(var Jf={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Tb=0;Tb<ab.La.length;Tb++)if(ab.La[Tb]){var Xd=Nb[Tb];if(Xd&&!Jf[Xd[T.I]]){K=!0;break c}}K=!1}else K=Hc}E=K?!0:!1}else E=!1;ic=null;n=E}else n=!1;a=n||a}be=!1}return!a},ee=function(){var a=de();try{var b=C["dataLayer"].hide;if(b&&void 0!==b[gc.m]&&b.end){b[gc.m]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},fe=function(){var a=Ja("dataLayer",[]),b=Ja("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Vc.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Zd.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(ae.push.apply(ae,b);300<this.length;)this.shift();return de()};ae.push.apply(ae,a.slice(0));
Q(ee)};var ge={};ge.ya=new String("undefined");ge.Pa={};var he=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ge.ya?b:a[d]);return c.join("")}};he.prototype.toString=function(){return this.resolve("undefined")};he.prototype.valueOf=he.prototype.toString;ge.Nc=function(a){return new he(a)};var ie={};ge.Nd=function(a,b){var c=wc();ie[c]=[a,b];return c};ge.Fb=function(a){var b=a?0:1;return function(a){var c=ie[a];if(c&&"function"===typeof c[b])c[b]();ie[a]=void 0}};
ge.td=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};ge.Gd=function(a){if(a===ge.ya)return a;var b=wc();ge.Pa[b]=a;return'google_tag_manager["'+gc.m+'"].macro('+b+")"};ge.jc=he;var je=new vc,ke=function(a,b){function c(a){var b=S(a),c=R(b,"protocol"),d=R(b,"host",!0),e=R(b,"port"),f=R(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function le(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(r){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=pa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,t=je.get(q);t||(t=new RegExp(c,p),je.set(q,t));n=t.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ke(b,c)}return!1};function me(a,b,c,d){return(d||"https:"==C.location.protocol?a:b)+c}function ne(a,b){for(var c=b||(a instanceof u?new u:new x),d=a.M(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof u?(c.get(f)instanceof u||c.set(f,new u),ne(h,c.get(f))):h instanceof x?(c.get(f)instanceof x||c.set(f,new x),ne(h,c.get(f))):c.set(f,h)}}return c}function oe(){return gc.m}function pe(){return(new Date).getTime()}function qe(a,b){return xa(Cc(a,b||2))}function re(){return ic}
function se(a){return Ra('<a href="'+a+'"></a>')[0].href}function te(a){return qc(wa(a))}function ue(a){return null===a?"null":void 0===a?"undefined":a.toString()}function ve(a,b){return uc(a,b)}function we(a,b,c){if(!(a instanceof u))return null;for(var d=new x,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof x&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var xe=function(){var a=new Ha;a.addAll(Ua());a.addAll({buildSafeUrl:me,decodeHtmlUrl:se,copy:ne,generateUniqueNumber:wc,getContainerId:oe,getCurrentTime:pe,getDataLayerValue:qe,getEventName:re,makeInteger:te,makeString:ue,randomInteger:ve,tableToMap:we});return function(b){return a.get(b)}};var ye=new Wa,ze=function(){var a=data.runtime||[];Jb=function(a){return ye.K(a)};Ub=le;Va(ye,xe());for(var b=0;b<a.length;b++){var c=a[b];if(!oa(c)||3>c.length){if(0==c.length)continue;break}ye.K(c)}};var Ae=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Be=function(a){return encodeURIComponent(a)},Ce=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=R(S(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var U=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},De=function(a,b){y(a,b)},Ee=function(a){return qc(a)},Fe=function(a,b){return pa(a,b)};var Ge=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Oa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},He=function(a){hc.hasOwnProperty("autoEventsSettings")||(hc.autoEventsSettings={});var b=hc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Ie=function(a,b,c,d){var e=He(a),f=xc(e,b,d);e[b]=
c(f)},Je=function(a,b,c){var d=He(a);return xc(d,b,c)};var Ke=/(^|\.)doubleclick\.net$/i,Le=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Me=function(a,b,c){for(var d=String(b||F.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=tc(h[0]);if(k&&k==a){var l=tc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Ne=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=R(C.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=F.cookie,t=0;t<k.length;t++){var r=h,w=k[t],E=c;if(Ke.test(C.location.hostname)||"/"==E&&Le.test(w))break;"none"!=k[t]&&(r+="domain="+k[t]+";");F.cookie=r;if(q!=F.cookie||0<=pa(Me(a),b))break}};var Oe=!1;if(F.querySelectorAll)try{var Pe=F.querySelectorAll(":root");Pe&&1==Pe.length&&Pe[0]==F.documentElement&&(Oe=!0)}catch(a){}var Qe=Oe;var Re=function(a){for(var b=[],c=document.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}return b},Ue=function(a,b,c){var d=Se(a);if(1===d.length)return d[0].id;if(0!==d.length){d=Te(d,function(a){return a.Vc},b);if(1===d.length)return d[0].id;d=Te(d,function(a){return a.Ed},c);return d[0]?d[0].id:void 0}},Xe=function(a,b,c,d,e){c=void 0===c?"/":c;var f=d=void 0===d?"auto":d,h=c;if(Ve.test(document.location.hostname)||"/"===h&&
We.test(f))return!1;var k=b;k&&1200<k.length&&(k=k.substring(0,1200));b=k;var l=a+"="+b+"; path="+c+"; ";void 0!==e&&(l+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");if("auto"===d){var m=!1,n;a:{var p=[],q=document.location.hostname.split(".");if(4===q.length){var t=q[q.length-1];if(parseInt(t,10).toString()===t){n=["none"];break a}}for(var r=q.length-2;0<=r;r--)p.push(q.slice(r).join("."));p.push("none");n=p}for(var w=n,E=0;E<w.length&&!m;E++)m=Xe(a,b,c,w[E],e);return m}d&&"none"!==
d&&(l+="domain="+d+";");var K=document.cookie;document.cookie=l;return K!=document.cookie||0<=Re(a).indexOf(b)};function Te(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Se(a){for(var b=Ye,c=[],d=Re(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Vc:1*k[0]||1,Ed:1*k[1]||1}))}}return c}
var We=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ve=/(^|\.)doubleclick\.net$/i;var Ze=window,$e=document;function af(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function bf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Ye=["1"],cf={},df=function(a){return cf[(void 0===a?"_gcl":a)+"_dcu"]},ff=function(a,b,c){b=void 0===b?"auto":b;c=void 0===c?"/":c;var d,e=void 0===a?"_gcl":a;d=(void 0===e?"_gcl":e)+"_dcu";if(!cf[d]&&!ef(d,b,c)){for(var f,h=Ze.navigator.userAgent+($e.cookie||"")+($e.referrer||""),k=h.length,l=Ze.history.length;0<l;)h+=l--^k++;var m=1,n,p,q;if(h)for(m=0,p=h.length-1;0<=p;p--)q=h.charCodeAt(p),m=(m<<6&268435455)+q+(q<<14),n=m&266338304,m=0!=n?m^n>>21:m;var t=[Math.round(2147483647*Math.random())^
m&2147483647,Math.round(Date.now()/1E3)].join("."),r=""+af(void 0),w=bf(void 0);1<w&&(r+="-"+w);f=["1",r,t].join(".");Xe(d,f,c,b,7776E6);ef(d,b,c)}};function ef(a,b,c){var d,e=af(b);(d=Ue(a,e,bf(c)))&&(cf[a]=d);return d};var gf=function(a){for(var b=[],c=F.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var hf=/^\w+$/,jf=/^[\w-]+$/,kf=/^\d+\.fls\.doubleclick\.net$/;function lf(a){return a&&"string"==typeof a&&a.match(hf)?a:"_gcl"}function mf(a){if(a){if("string"==typeof a){var b=lf(a);return{la:b,ka:b}}if(a&&"object"==typeof a)return{la:lf(a.dc),ka:lf(a.aw)}}return{la:"_gcl",ka:"_gcl"}}function nf(a){var b=S(C.location.href),c=R(b,"host",!1);if(c&&c.match(kf)){var d=R(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function of(a){return a.filter(function(a){return jf.test(a)})}var qf=function(a){var b=nf("gclaw");if(b)return b.split(".");var c=mf(a);if("_gcl"==c.ka){var d=pf();if(d&&(null==d.G||"aw.ds"==d.G))return[d.ba]}return of(gf(c.ka+"_aw"))},rf=function(a){var b=nf("gcldc");if(b)return b.split(".");var c=mf(a);if("_gcl"==c.la){var d=pf();if(d&&("ds"==d.G||"aw.ds"==d.G))return[d.ba]}return of(gf(c.la+"_dc"))};
function pf(){var a=S(C.location.href),b=R(a,"query",!1,void 0,"gclid"),c=R(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=R(a,"fragment");b=b||Sa(d,"gclid");c=c||Sa(d,"gclsrc")}return void 0!==b&&b.match(jf)?{ba:b,G:c}:null}
var sf=function(a,b,c){var d=mf(a);c=c||"auto";b=b||"/";var e=pf();if(null!=e){var f=(new Date).getTime(),h=new Date(f+7776E6),k=["GCL",Math.round(f/1E3),e.ba].join(".");e.G&&"aw.ds"!=e.G||Ne(d.ka+"_aw",k,b,c,h,!0);"aw.ds"!=e.G&&"ds"!=e.G||Ne(d.la+"_dc",k,b,c,h,!0)}},tf=function(){var a=nf("gac");if(a)return decodeURIComponent(a);for(var b=[],c=F.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({lb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=
0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].lb]||(h[b[k].lb]=[]),h[b[k].lb].push({timestamp:l[1],ba:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],t=0;t<q.length;t++)p.push(q[t].ba);p=of(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")},uf=function(a,b,c){};var vf;a:{vf="G"}var wf={"":"n",UA:"u",AW:"a",DC:"d",GTM:vf},xf=function(a){var b=gc.m.split("-"),c=b[0].toUpperCase();return(wf[c]||"i")+"64"+(a&&"GTM"===c?b[1]:"")};
var yf=function(a){return!(void 0===a||null===a||0===(a+"").length)},zf=function(a,b){var c;if(2===b.B)return a("ord",uc(1E11,1E13)),!0;if(3===b.B)return a("ord","1"),a("num",uc(1E11,1E13)),!0;if(4===b.B)return yf(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.B)c="1";else if(6===b.B)c=b.Zb;else return!1;yf(c)&&a("qty",c);yf(b.Ta)&&a("cost",b.Ta);yf(b.mb)&&a("ord",b.mb);return!0},Af=encodeURIComponent,Bf=function(a,b){function c(a,b,c){f.hasOwnProperty(a)||(b+="",e+=";"+a+"="+(c?b:Af(b)))}var d=a.Va,
e=a.protocol;e+=a.Ma?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Af(d)+(";type="+Af(a.Wa))+(";cat="+Af(a.ja));var f=a.Pc||{},h;for(h in f)f.hasOwnProperty(h)&&(e+=";"+Af(h)+"="+Af(f[h]+""));if(zf(c,a)){yf(a.ob)&&c("u",a.ob);yf(a.tran)&&c("tran",a.tran);c("gtm",xf());if(a.Sa){var k=rf(a.Z);k&&k.length&&c("gcldc",k.join("."));var l=qf(a.Z);l&&l.length&&c("gclaw",l.join("."));var m=tf();m&&c("gac",m);}yf(a.eb)&&c("prd",a.eb,!0);for(var p in a.va)a.va.hasOwnProperty(p)&&c(p,a.va[p]);e+=b||"";yf(a.Ia)&&c("~oref",a.Ia);a.Ma?La(e+"?",a.H):P(e+"?",a.H,a.S)}else Q(a.S)};var Df=!!C.MutationObserver,Ef=void 0,Ff=function(a){if(!Ef){var b=function(){var a=F.body;if(a)if(Df)(new MutationObserver(function(){for(var a=0;a<Ef.length;a++)Q(Ef[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Ma(a,"DOMNodeInserted",function(){b||(b=!0,Q(function(){b=!1;for(var a=0;a<Ef.length;a++)Q(Ef[a])}))})}};Ef=[];F.body?b():Q(b)}Ef.push(a)};var Tf="www.googletagmanager.com/gtm.js";
var Uf=Tf,Vf=function(a,b,c,d){Ma(a,b,c,d)},Wf=function(a,b){return C.setTimeout(a,b)},Xf=function(a,b,c){J(a,b,c)},Yf={},Zf=function(a,b,c){var d=Yf[a];if(void 0===d){var e=function(a,b){return function(){a.status=b;for(var c=2==b?a.bc:a.Jb,d=0;d<c.length;d++)C.setTimeout(c[d],0)}};d={status:1,bc:[],Jb:[],Rd:void 0};d.we=J(a,e(d,2),e(d,3));Yf[a]=d}0===d.status&&(d.Rd(),d.status=2);2===d.status?b&&b():3===d.status?c&&c():1===d.status&&(b&&d.bc.push(b),c&&d.Jb.push(c))},$f=function(){return C.location.href},
ag=function(a){return R(S(a),"fragment")},W=function(a,b){return Cc(a,b||2)},bg=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return C["dataLayer"].push(a)},cg=function(a,b){C[a]=b},X=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},dg=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},Y=function(a,b,c,d){var e=!d&&"http:"==
C.location.protocol;e&&(e=2!==eg());return(e?b:a)+c};
var fg=function(a){var b=0;return b},gg=function(a){},hg=function(a){var b=!1;return b},ig=function(a,b){var c;a:{if(a&&
oa(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},jg=function(a,b,c,d){Ie(a,b,c,d)},kg=function(a,b,c){return Je(a,b,c)},lg=function(a){return!!Je(a,"init",!1)},mg=function(a){He(a).init=!0};
var eg=function(){var a=Uf;a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=F.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};
var pg=function(a,b){var c=Uf+"?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var d in b)b[d]&&b.hasOwnProperty(d)&&(c+="&"+d+"="+encodeURIComponent(b[d]));var e=Y("https://","http://",c);J(e,void 0,void 0)};
var rg=function(a,b,c){a instanceof ge.jc&&(a=a.resolve(ge.Nd(b,c)),b=mc);return{Xa:a,H:b}};var sg=function(a,b){var c=(new Date).getTime();this.n=a;this.t=c;this.p=b},tg=function(){this.c=1;this.e=[];this.p=null};function ug(a){var b=hc,c=b.gss=b.gss||{};return c[a]=c[a]||new tg}var vg=function(a,b){ug(a).p=b},wg=function(a){};var Bg=function(a){if(1===ug(a).c){ug(a).c=2;var b=encodeURIComponent(a);J("www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c")}},Cg=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;Bf(a,c)}(function(a){Z.__flc=a;Z.__flc.b="flc";Z.__flc.g=!0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=U(b.vtp_customVariable||[],"key","value")||{},e={ja:b.vtp_activityTag,Sa:c,Z:b.vtp_conversionCookiePrefix||void 0,B:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Va:b.vtp_advertiserId,Wa:b.vtp_groupTag,S:b.vtp_gtmOnFailure,H:b.vtp_gtmOnSuccess,Ia:b.vtp_useImageTag?void 0:b.vtp_url,
protocol:"",Ma:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,tran:b.vtp_transactionVariable,ob:b.vtp_userVariable,va:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){Xf("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,X("google_attr").build([U(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return ic})}();Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=Ge(b);d.event="gtm.click";bg(d)}}(function(a){Z.__cl=a;Z.__cl.b="cl";Z.__cl.g=!0})(function(b){if(!lg("cl")){var c=X("document");Ma(c,"click",a,!0);mg("cl");var d=Je("cl","legacyTeardown",void 0);d&&d()}Q(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0})(function(a){var b=W("gtm.cookie",1);return Me(a.vtp_name,b,!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0})(function(a){return uc(a.vtp_min,a.vtp_max)})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:W("gtm.url",1))||$f();var d=b[a("vtp_component")],e;if(d&&"URL"!=d){var f=S(String(c));e=R(f,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0)}else e=Ta(S(String(c)));return e})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(a){return function(){if(a.$a&&a.ab>=a.$a)a.Ya&&X("self").clearInterval(a.Ya);else{a.ab++;var b=(new Date).getTime();bg({event:a.Ib,"gtm.timerId":a.Ya,"gtm.timerEventNumber":a.ab,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.$a,"gtm.timerStartTime":a.ac,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.ac,"gtm.triggers":a.Yd})}}}(function(a){Z.__tl=a;Z.__tl.b="tl";Z.__tl.g=!0})(function(b){Q(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={Ib:b.vtp_eventName,
ab:0,interval:Number(b.vtp_interval),$a:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Yd:String(b.vtp_uniqueTriggerId||"0"),ac:(new Date).getTime()};c.Ya=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.asp=["nonGoogleScripts"],function(){(function(a){Z.__asp=a;Z.__asp.b="asp";Z.__asp.g=!0})(function(a){C.adroll_adv_id=a.vtp_customerId;C.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(C.adroll_conversion_value=a.vtp_conversionValueInDollars,C.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=U(a.vtp_customData,"key","value");C.adroll_custom_data=b}a.vtp_segmentName&&(C.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&(C.adroll_email=
a.vtp_visitorEmail);C.__adroll_loaded=!0;var c=Y("https://s","http://a",".adroll.com/j/roundtrip.js");J(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();

Z.a.ua=["google"],function(){var a;(function(a){Z.__ua=a;Z.__ua.b="ua";Z.__ua.g=!0})(function(b){var c={},d={},e={},f={},h={};if(b.vtp_gaSettings){var k=b.vtp_gaSettings;De(U(k.vtp_fieldsToSet,"fieldName","value"),d);De(U(k.vtp_contentGroup,"index","group"),e);De(U(k.vtp_dimension,"index","dimension"),f);De(U(k.vtp_metric,"index","metric"),h);b.vtp_gaSettings=null;k.vtp_fieldsToSet=void 0;k.vtp_contentGroup=void 0;k.vtp_dimension=void 0;k.vtp_metric=void 0;var l=y(k,void 0);b=y(b,l)}De(U(b.vtp_fieldsToSet,
"fieldName","value"),d);De(U(b.vtp_contentGroup,"index","group"),e);De(U(b.vtp_dimension,"index","dimension"),f);De(U(b.vtp_metric,"index","metric"),h);var m=ad(b.vtp_functionName),n="",p="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(p=b.vtp_trackerName,n=p+"."):(p="gtm"+wc(),n=p+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,
cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},t={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},r=function(a){var b=[].slice.call(arguments,0);b[0]=n+b[0];m.apply(window,b)},w=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&
r("set",a+c,b[c])},K=function(){},A=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&q[e]||!c&&void 0===
q[e])){var f=t[e]?rc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},N={name:p};A(d,N,!0);m("create",b.vtp_trackingId||c.trackingId,N);r("set","&gtm",xf(!0));(function(a,c){void 0!==b[c]&&r("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",e);E("dimension",f);E("metric",h);var D={};A(d,D,!1)&&r("set",D);var O;
b.vtp_enableLinkId&&r("require","linkid","linkid.js");r("set","hitCallback",function(){var a=d&&d.hitCallback;nc(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(r("require","ec","ec.js"),K());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:w(String,b.vtp_eventLabel||c.label),eventValue:w(Ee,b.vtp_eventValue||
c.value)};A(O,I,!1);r("send",I);}else if("TRACK_SOCIAL"==b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==
b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==b.vtp_trackType){}else{b.vtp_enableEcommerce&&(r("require","ec","ec.js"),K());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");r("require","displayfeatures",void 0,{cookieName:ma})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&(ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),r("require","adfeatures",{cookieName:ma}));O?r("send","pageview",O):r("send","pageview");}if(!a){var za=
b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&(za="internal/"+za);a=!0;Zf(Y("https:","http:","//www.google-analytics.com/"+za,d&&d.forceSSL),function(){var a=$c();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}})}();
Z.a.gclidw=["google"],function(){(function(a){Z.__gclidw=a;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0})(function(a){Q(a.vtp_gtmOnSuccess);var b,c,d;a.vtp_enableCookieOverrides&&(d=a.vtp_cookiePrefix,b=a.vtp_path,c=a.vtp_domain);sf(d,b,c);uf(d,c,b)})}();
Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=W(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue};(function(a){Z.__aev=
a;Z.__aev.b="aev";Z.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TEXT":var h,l=W("gtm.element",1),m=W("event",1),n=Number(new Date);a===l&&b===m&&c>n-250?h=d:(d=h=l?Qa(l):"",a=l,b=m);c=n;return h||e.vtp_defaultValue;case "URL":var p=String(W("gtm.elementUrl",1)||e.vtp_defaultValue||""),q=S(p);return e.vtp_component&&"URL"!=e.vtp_component?R(q,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey):p;case "ATTRIBUTE":var t;if(void 0===e.vtp_attribute)t=f(e);else{var r=W("gtm.element",
1);t=Oa(r,e.vtp_attribute)||e.vtp_defaultValue||""}return t;default:return f(e)}})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=X("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(b){return function(){d();a=!1;var c=Yf[b];c&&3==c.status&&(Yf[b]=void 0)}},f=function(){return function(){d();b={push:c};}};(function(a){Z.__awct=a;Z.__awct.b="awct";Z.__awct.g=!0})(function(c){var d={google_conversion_domain:"",
google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:xf(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?
(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,Zf("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))})}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0})(function(a){var b=a.vtp_input,c=U(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Ka(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){Q(h)}}};var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=rg(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Xa,k=f.H;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,Ra(h),k,e)()}else Wf(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();

Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0})(function(a){var b=Ra('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}P(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();

var Dg={macro:function(a){if(ge.Pa.hasOwnProperty(a))return ge.Pa[a]}};Dg.dataLayer=Dc;Dg.onHtmlSuccess=ge.Fb(!0);Dg.onHtmlFailure=ge.Fb(!1);Dg.callback=function(a){kc.hasOwnProperty(a)&&nc(kc[a])&&kc[a]();delete kc[a]};Dg.zc=function(){hc[gc.m]=Dg;lc=Z.a;Vb=Vb||ge;Wb=Qc};
Dg.pd=function(){hc=C.google_tag_manager=C.google_tag_manager||{};if(hc[gc.m]){var a=hc.zones;a&&a.unregisterChild(gc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Kb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Nb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Mb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Lb.push(p)}Pb=Z;ze();Dg.zc();fe();Tc=!1;Uc=0;if("interactive"==
F.readyState&&!F.createEventObject||"complete"==F.readyState)Wc();else{Ma(F,"DOMContentLoaded",Wc);Ma(F,"readystatechange",Wc);if(F.createEventObject&&F.documentElement.doScroll){var t=!0;try{t=!C.frameElement}catch(w){}t&&Xc()}Ma(C,"load",Wc)}Yd=!1;"complete"===F.readyState?$d():Ma(C,"load",$d);a:{
if(!gd)break a;id();pd=2;ld=void 0;md={};jd={};od=void 0;nd={};kd="";C.setInterval(id,864E5);C.setInterval(rd,1E3);}}};Dg.pd();

})()

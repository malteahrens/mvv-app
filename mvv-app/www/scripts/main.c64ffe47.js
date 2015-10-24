"use strict";function gestureStart(){for(i=0;i<metas.length;i++)"viewport"==metas[i].name&&(metas[i].content="width=device-width, minimum-scale=0.25, maximum-scale=1.6")}angular.module("angularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngCordova","pascalprecht.translate","angular-vibrator","geolocation","ngCordova","nvd3","ui.bootstrap"]).config(["$routeProvider","$translateProvider","vibratorProvider",function(a,b,c){b.translations("de_DE",{APP_HEADLINE:"MVV München",SUB_HEADLINE:"",HEADING1:"Statistiken",PARA1:"",APP_TEXT:"Irgendein Text über eine großartige AngularJS App."}),b.translations("en_US",{APP_HEADLINE:"MVV Munich",SUB_HEADLINE:"",PARA2:"English Translation",HEADING1:"Statistics"}),b.preferredLanguage("de_DE"),b.fallbackLanguage(["de_DE"]),b.useCookieStorage();var d={"default":900,twice:[200,100,300],"long":2500};c.setSequences(d)}]);var metas=document.getElementsByTagName("meta"),i;if(navigator.userAgent.match(/iPhone/i)){for(i=0;i<metas.length;i++)"viewport"==metas[i].name&&(metas[i].content="width=device-width, minimum-scale=1.0, maximum-scale=1.0");document.addEventListener("gesturestart",gestureStart,!1)}angular.module("angularApp").controller("MainCtrl",["$scope",function(a){a.imgSrc="images/yeoman.png",a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.things=[{item:"one"},{item:"two"},{item:"three"}],a.mouseOverThing=function(a){}}]),angular.module("angularApp").controller("LangCtrl",["$scope","$translate",function(a,b){a.changeLang=function(a){b.use(a).then(function(a){console.log("Sprache zu "+a+" gewechselt.")},function(a){console.log("Could not find key."+a)})},a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularApp").directive("mouseover",function(){return{restrict:"EA",link:function(a,b,c){b.bind("mouseenter",function(b){a.$apply(function(){a.imgSrc=c.mouseover})})}}}),angular.module("angularApp").directive("fadeIn",["$animate",function(a){return{restrict:"A",scope:{ngSrc:"@"},link:function(b,c,d){c.on("load",function(){}).on("error",function(){console.log("error loading image")}),b.$watch("ngSrc",function(d){var e;void 0!=e&&(a.cancel(e),a.removeClass(c,"fadein")),e=a.addClass(c,"fadein"),e.then(function(){a.removeClass(c,"fadein"),b.$apply()})})}}}]);var cordovaModule=angular.module("cordova",[]);cordovaModule.factory("deviceReady",function(){return console.log("factory loaded"),function(a){console.log("inside factory");var b=-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://");a()}});var geolocationModule=angular.module("geolocation",["cordova"]);geolocationModule.factory("getCurrentPosition",["deviceReady","$document","$window","$rootScope",function(a,b,c,d){return console.log("device ready..."),function(b){console.log("function call"),a(function(){navigator.geolocation.getCurrentPosition(function(a){d.$apply(function(){})},function(a){d.$apply(function(){throw alert("got error during locating"),new Error("Unable to retreive position")})})})}}]),angular.module("angularApp").controller("VibrationsCtrl",["$scope","vibrator",function(a,b){a.vibrate=function(a){b.vibrate(a)}}]),angular.module("angularApp").controller("CordovaCtrl",["$scope","$cordovaDevice",function(a,b){console.log("controller loaded..."),console.log("device");var c=b.getDevice();console.log(c)}]),angular.module("angularApp").controller("ExampleCtrl",["$scope",function(a){nv.models.lineChart({margin:{left:100},useInteractiveGuideline:!0,transitionDuration:350,showLegend:!0,showYAxis:!0,showXAxis:!0});a.exampleData=[{key:"Series 1",values:[[10254096e5,0],[1028088e6,-6.3382185140371],[10307664e5,-5.9507873460847],[10333584e5,-11.569146943813],[10360404e5,-5.4767332317425],[10386324e5,.50794682203014],[10413108e5,-5.5310285460542],[10439892e5,-5.7838296963382],[10464084e5,-7.3249341615649],[10490868e5,-6.7078630712489],[10516752e5,.44227126150934],[10543536e5,7.2481659343222],[10569456e5,9.2512381306992],[1059624e6,11.341210982529],[10623024e5,14.73482040902],[10648944e5,12.387148007542],[10675764e5,18.436471461827],[10701684e5,19.830742266977],[10728468e5,22.643205829887],[10755252e5,26.743156781239],[10780308e5,29.597478802228],[10807092e5,30.831697585341],[10832976e5,28.054068024708],[1085976e6,29.294079423832],[1088568e6,30.269264061274],[10912464e5,24.934526898906],[10939248e5,24.265982759406],[10965168e5,27.217794897473],[10991952e5,30.802601992077],[11017908e5,36.331003758254],[11044692e5,43.14249870006],[11071476e5,40.558263931958],[11095668e5,42.5436223858],[11122452e5,41.683584710331],[11148336e5,36.375367302328],[1117512e6,40.71968898073],[1120104e6,43.897963036919],[11227824e5,49.797033975368],[11254608e5,47.085993935989],[11280528e5,46.601972859745],[11307348e5,41.567784572762],[11333268e5,47.296923737245],[11360052e5,47.64296961208],[11386836e5,50.781515820954],[11411028e5,52.600229204305],[11437812e5,55.599684490628],[11463696e5,57.920388436633],[1149048e6,53.503593218971],[115164e7,53.522973979964],[11543184e5,49.846822298548],[11569968e5,54.72134161465],[11595888e5,58.186236223191],[11622708e5,63.908065540997],[11648628e5,69.767285129367],[11675412e5,72.534013373592],[11702196e5,77.991819436573],[11726388e5,78.14358440499],[11753136e5,83.702398665233],[11779056e5,91.140859312418],[1180584e6,98.590960607028],[1183176e6,96.245634754228],[11858544e5,92.326364432615],[11885328e5,97.06876533223],[11911248e5,105.8102555626],[11938032e5,114.38348777791],[11963988e5,103.5960494981],[11990772e5,101.72488429307],[12017556e5,89.840147735028],[12042612e5,86.963597532664],[1206936e6,84.075505208491],[1209528e6,93.170105645831],[12122064e5,103.62838083121],[12147984e5,87.458241365091],[12174768e5,85.808374141319],[12201552e5,93.158054469193],[12227472e5,65.97325238236],[12254256e5,44.580686638224],[12280212e5,36.418977140128],[12306996e5,38.727678144761],[1233378e6,36.692674173387],[12357972e5,30.03302280948],[1238472e6,36.707532162718],[1241064e6,52.191457688389],[12437424e5,56.357883979735],[12463344e5,57.629002180305],[12490128e5,66.650985790166],[12516912e5,70.839243432186],[12542832e5,78.731998491499],[12569616e5,72.375528540349],[12595572e5,81.73838788163],[12622356e5,87.539792394232],[1264914e6,84.320762662273],[12673332e5,90.621278391889],[1270008e6,102.47144881651],[12726e8,102.79320353429],[12752784e5,90.529736050479],[12778704e5,76.580859994531],[12805488e5,86.548979376972],[12832272e5,81.879653334089],[12858192e5,101.72550015956],[12884976e5,107.9796485226],[12910932e5,106.16240630785],[12937716e5,114.84268599533],[129645e7,121.60793322282],[12988692e5,133.41437346605],[1301544e6,125.46646042904],[1304136e6,129.76784954301],[13068144e5,128.15798861044],[13094064e5,121.92388706072],[13120848e5,116.7003610087],[13147632e5,88.367701837033],[13173552e5,59.159665765725],[13200336e5,79.793568139753],[13226292e5,75.903834028417],[13253076e5,72.704218209157],[1327986e6,84.936990804097],[13304916e5,93.388148670744]]}],a.exampleData2=[{key:"One",y:5},{key:"Two",y:2},{key:"Three",y:9},{key:"Four",y:7},{key:"Five",y:4},{key:"Six",y:3},{key:"Seven",y:9}],a.xFunction=function(){return function(a){return a.key}},a.yFunction=function(){return function(a){return a.y}}}]),angular.module("angularApp").controller("KeenCtrl",["$scope","$http","$interval","StatSrvc","$filter","MvvSrvc","KeenSrvc","StatModel",function(a,b,c,d,e,f,g,h){a.interval="every_hour";var i="this_1_day";a.timeframeName="Heute",a.totalLiveDelay=0;var j={id:"reportQuery",operation:"count",event_collection:"notifications_start",timeframe:i,timezone:"UTC"},k={id:"delaysQuery",operation:"count",event_collection:"statistics",target_property:"totalNumberOfDelays",timeframe:i,timezone:"UTC"},l={id:"liveDelaysQuery",operation:"median",method:"set",event_collection:"statistics",target_property:"totalNumberOfDelays",timeframe:i,interval:"hourly",timezone:"UTC"},m={id:"liveTrainsQuery",operation:"median",event_collection:"statistics",target_property:"totalNumberOfTrains",timeframe:i,interval:"hourly",timezone:"UTC"};a.data=h.getData(),a.options={chart:{type:"lineChart",height:450,margin:{top:20,right:20,bottom:60,left:55},x:function(a){return a.label},y:function(a){return a.value},showValues:!0,valueFormat:function(a){return d3.format(",.4f")(a)},transitionDuration:500,useInteractiveGuideline:!0,xAxis:{axisLabelDistance:30,tickFormat:function(a){return d3.time.format("%H:%M")(new Date(a))}},yAxis:{axisLabel:"Y Axis",axisLabelDistance:30}}},a.countReports=h.countReports();var n={id:"keen.controller.js",notify:function(b,c){"totalNumberOfDelays"===c&&(a.totalNumberOfDelays=b),"countReports"===c&&(a.countReports=b),"dataSet"===c&&(console.log("got dataset"),a.data.length=0,Array.prototype.push.apply(a.data,h.getData())),"intervalChange"===c&&(console.log("got intervalChange in keen.controller.js"),console.log(b.timeframe),a.interval=b.interval,a.timeframeName=b.timeframeName,j.timeframe=b.timeframe,k.timeframe=b.timeframe,l.timeframe=b.timeframe,m.timeframe=b.timeframe,b.pollingInterval?f.startPolling(b.pollingInterval):(f.stopPolling(),a.countReports="~ ~ ~",a.totalNumberOfDelays="~ ~ ~",g.execute(j),g.execute(k),g.execute(l)))}};h.registerOberserver(n)}]),angular.module("angularApp").service("StatModel",function(){var a=[],b=function(b){console.log("register callback for "+b.id),a.push(b)},c=function(b,c){angular.forEach(a,function(a){console.log("notify observer "+a.id+" about change "+c),console.log(b),a.notify(b,c)})},d={monthly:{timeframe:"this_1_month",timeframeName:"Monat",interval:"every_day"},dayly:{timeframe:"this_1_day",timeframeName:"Heute",interval:"every_hour"},hourly:{timeframe:"this_1_hour",timeframeName:"Stunde",interval:"every_minute"},live:{pollingInterval:5e3,timeframe:"this_1_hour",timeframeName:"Stunde",interval:"every_minute"}},e=0,f=0,g=function(){return f},h=function(a){return e},i=function(a){f=a,c(f,"totalNumberOfDelays")},j=function(a){e=a,c(e,"countReports")},k=[],l=function(){return p(k)},m=function(a){k=a,c(k,"dataSet")},n=function(a){liveMode||(liveMode=!0,k[0].values=[]),k[0].values.push(a),c(a,"dataAdd")},o=function(a){console.log(a),c(d[a],"intervalChange")},p=function(a){var b=new Date;return b.setDate(b.getDate()-1),a};return{registerOberserver:b,getData:l,setData:m,addData:n,setInterval:o,countReports:h,TotalNumberOfDelays:g,setCountReports:j,setTotalNumberOfDelays:i}}),angular.module("angularApp").service("StatSrvc",["StatModel",function(a){var b=function(a){notifyObserver(a,"requestLive")};return{requestLive:b}}]),angular.module("angularApp").controller("StatCtrl",["$scope","$http","StatSrvc",function(a,b,c){}]),angular.module("angularApp").controller("MapCtrl",["$scope","MapModel",function(a,b){map=new L.Map("map");var c="pk.eyJ1IjoiZmxhbWVkIiwiYSI6ImFHcEx0TFUifQ.Z9j42rwRf12ZElzGiTsoFw",d=L.tileLayer("https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}@2x.png?access_token="+c,{attribution:'<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'});L.control.fullscreen().addTo(map),map.setView(new L.LatLng(48.135125,11.581981),11),map.addLayer(d),a.delayPoints=[];var e=L.heatLayer(a.delayPoints,{maxZoom:18,radius:20}).addTo(map),f={id:"map.service.js",notify:function(b,c){var d=parseInt(b.x)/1e6,f=parseInt(b.y)/1e6;a.delayPoints.push(new L.LatLng(f,d,b.delay)),a.delayPoints.length>500&&(console.log("shift"),a.delayPoints.shift()),e.redraw()}};b.registerOberserver(f)}]),angular.module("angularApp").service("MapSrvc",["StatSrvc",function(a){}]),angular.module("angularApp").service("MapModel",function(){var a=[],b=function(b){console.log("registered callback for "+b.id),a.push(b)},c=function(b,c){angular.forEach(a,function(a){console.log("notify observer "+a.id+" about change "+c),a.notify(b,c)})},d=[],e=function(){},f=function(a){d=a,c(d,"dataSet")},g=function(a){d.push(a),c(a,"dataAdd")};return{registerOberserver:b,getData:e,setData:f,addData:g}}),angular.module("angularApp").service("MvvSrvc",["$http","$interval","StatModel","MapModel",function(a,b,c,d){var e,f="https://cors-mvv.herokuapp.com/bin/540/query.exe/dny?look_minx=10744745&look_maxx=12440389&look_miny=47825027&look_maxy=48406811&tpl=trains2json&look_productclass=16&look_json=yes&performLocating=1&look_nv=zugposmode|3|get_ageofreport|yes|get_rtmsgstatus|yes|get_linenumber|no|interval|10000|intervalstep|10000|&unique=1444761619000&",g=function(){a({method:"GET",url:f}).then(function(a){var b=0;for(i=0;i<a.data.look.trains.length;i++){var e=parseInt(a.data.look.trains[i].delay);b+=e,e>2&&d.addData(a.data.look.trains[i])}var f=new Date;c.addData({label:+f,value:b})},function(a){console.log("error")})},h=function(a){angular.isDefined(e)||(e=b(g,a,100))},j=function(){angular.isDefined(e)&&(b.cancel(e),e=void 0)};return{startPolling:h,stopPolling:j}}]),angular.module("angularApp").service("KeenSrvc",["$http","$interval","StatModel",function(a,b,c){var d,e={projectId:"561925d196773d74b138cefd",readKey:"363fa49e3c02ebb483fb0dd2f219a9347243c32562720fd877abd34e206a545bb7923dc478beb1f18be28ab3459338b41946d3288768d6e33b8c883c8592cc3b439dc09330b6f7a1f27e1a9c152db2079ede12b53204e91e547350dcf02fdd7abcd671dc0291a68d94f2798639e40a89",protocol:"https",host:"api.keen.io/3.0"},f=function(b){var d={method:"POST",url:e.protocol+"://"+e.host+"/projects/"+e.projectId+"/queries/"+b.operation,headers:{Authorization:e.readKey},data:b};a(d).success(function(a,d){if("reportQuery"===b.id&&c.setCountReports(a.result),"delaysQuery"===b.id&&c.setTotalNumberOfDelays(a.result),"liveDelaysQuery"===b.id)for(var e=0,f=[];e<a.result.length;){if(null!=a.result[e].value){var g=(d3.time.format("%Y-%m-%d"),new Date(a.result[e].timeframe.start));f.push({label:+g,value:a.result[e].value})}e==a.result.length-1&&c.setData([{key:"∑ Verspätungen in Minuten",values:f}]),e++}})},g=function(a,c){angular.isDefined(d)||(d=b(f,c,100))},h=function(a){angular.isDefined(d)&&(b.cancel(d),d=void 0)};return{startPolling:g,stopPolling:h,execute:f}}]),angular.module("angularApp").controller("ButtonsCtrl",["$scope","StatModel",function(a,b){a.radioModel="monthly",a.$watch("radioModel",function(a,c){b.setInterval(a)})}]);
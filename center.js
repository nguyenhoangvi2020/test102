var fakeserver = "http://127.0.0.1:8080";

var scripts= document.getElementsByTagName('script');
var runtime_src="runtime.";
var runtime_id = "";

var main_src="main_chart.";
var main_id = "";

var vendor="vendors.";
var vendor_id = "";

for (i = 0; i < scripts.length; i++) {
	var src = scripts[i].src;
  if (src.indexOf(runtime_src)>0) {
	  runtime_id = src.substring(src.indexOf(runtime_src)+8,src.indexOf('.js'));
  }
  if (src.indexOf(main_src)>0) {
	  main_id = src.substring(src.indexOf(main_src)+11,src.indexOf('.js'));
  }
  if (src.indexOf(vendor)>0) {
	  vendor_id = src.substring(src.indexOf(vendor)+8,src.indexOf('.js'));
  }
}

var imported = document.createElement('script');
imported.src = 'https://www.tradingview.com/static/bundles/runtime.'+ runtime_id +'.js?okokok';
imported.defer = true;
imported.async = false;
document.head.appendChild(imported);

var imported2 = document.createElement('script');
imported2.src = fakeserver + '/temp.js';
imported2.defer = true;
imported2.async = false;
document.head.appendChild(imported2);

var imported3 = document.createElement('script');
imported3.src = 'https://www.tradingview.com/static/bundles/main_chart.'+main_id+'.js?okokok';
imported3.defer = true;
imported3.async = false;
document.head.appendChild(imported3);


var imported4 = document.createElement('script');
imported4.src = 'https://www.tradingview.com/static/bundles/vendors.'+vendor_id+'.js?okokok';
imported4.defer = true;
imported4.async = false;
document.head.appendChild(imported4);

function scan(){
	console.log("clicked");
 	cordova.plugins.barcodeScanner.scan(
      	function (result) {
          	load(result.text);
      	}, 
      	function (error) {
          	alert("Scanning failed: " + error);
      	}
   	);
}
function load(url){
    document.location.href=url;
}
        		
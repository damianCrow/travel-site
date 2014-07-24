var sydneyLl = new google.maps.LatLng(-33.8723, 151.1990);
var londonLl = new google.maps.LatLng(51.5072, 0.1275);
var cancunLl = new google.maps.LatLng(21.1606, -86.8475);
var ainSalah = new google.maps.LatLng(27.1950, 2.4833);
var contentString1 = document.getElementById ("sydneyWindow");
var contentString2 = document.getElementById ("londonWindow");
var contentString3 = document.getElementById ("cancunWindow");

function initialize() {
    
    var mapOptions = {
      center: ainSalah,
      zoom: 2
    };
    
/*function reset ()
{
    if (infowindow.open === true)
    {contentString = show}
    else if (infowindow.open === false)
    {initialize();}
}
    
function hideShowInfoWindow() {
    
    if (infowindow.open === false)
    {
        sydneyWindow.className = "hidden"
    }
    else if (infowindow.open === true)
    {
        sydneyWindow.className = "sydneyWindowStyle";
    }
};

    console.log (sydneyWindow)*/
    
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

var marker1 = new google.maps.Marker({
        position: sydneyLl,
        map: map,
        title:"Sydney"
    });
      
google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map,marker1);
  });

var infowindow1 = new google.maps.InfoWindow({
      content: contentString1,
  });

  var marker2 = new google.maps.Marker({
        position: londonLl,
        map: map,
        title:"London"
    });
      
var infowindow2 = new google.maps.InfoWindow({
      content: contentString2,
  });
  
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(map,marker2);
  });
    
    var marker3 = new google.maps.Marker({
        position: cancunLl,
        map: map,
        title:"Cancun"
    });
    
    var infowindow3 = new google.maps.InfoWindow({
      content: contentString3,
  });
  
  google.maps.event.addListener(marker3, 'click', function() {
    infowindow3.open(map,marker3);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

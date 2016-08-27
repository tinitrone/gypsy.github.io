// $(function() {
//
//
// function init_map() {
//     var myOptions = {
//         zoom: 2,
//         center: new google.maps.LatLng(6.1383318275962475, 10.067554200000014),
//         mapTypeId: google.maps.MapTypeId.TERRAIN
//     };
//     map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
//     marker = new google.maps.Marker({
//         map: map,
//         position: new google.maps.LatLng(6.1383318275962475, 10.067554200000014)
//     });
//     infowindow = new google.maps.InfoWindow({
//         content: '<strong>Title</strong><br>Los Angeles<br>'
//     });
//     google.maps.event.addListener(marker, 'click', function() {
//         infowindow.open(map, marker);
//     });
//     infowindow.open(map, marker);
// }
// google.maps.event.addDomListener(window, 'load', init_map);
//
// });

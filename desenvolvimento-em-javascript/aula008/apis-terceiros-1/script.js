// var map = new ol.Map({
//     target: 'mapa',
//     layers: [
//         new ol.layer.Tile({
//             source: new ol.source.OSM()
//         })
//     ],
//     view: new ol.View({
//         center: ol.proj.fromLonLat([-45, -20]), 
//         zoom: 4
//     })
// })

geo = navigator.geolocation

// //coleta a localização atual
// navigator.geolocation.getCurrentPosition(position => {
 
//     // coleta latitude e longitude
//     const { latitude, longitude } = position.coords;
 
//     // imprimindo valores
//     console.log("Latitude:", latitude)
//     console.log("Longitude:", longitude)
 
// });


// coleta a localização atual
navigator.geolocation.getCurrentPosition(position => {
 
    // coleta latitude e longitude
    const { latitude, longitude } = position.coords;
 
    // imprimindo mapa
    var map = new ol.Map({
        target: 'mapa',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([longitude, latitude]),
            zoom: 10  // aumente este número para aproximar
          })
    });
});

var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_pts_la_maison_0 = new ol.format.GeoJSON();
var features_pts_la_maison_0 = format_pts_la_maison_0.readFeatures(json_pts_la_maison_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pts_la_maison_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pts_la_maison_0.addFeatures(features_pts_la_maison_0);var lyr_pts_la_maison_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pts_la_maison_0, 
                style: style_pts_la_maison_0,
                title: '<img src="styles/legend/pts_la_maison_0.png" /> pts_la_maison'
            });

lyr_pts_la_maison_0.setVisible(true);
var layersList = [baseLayer,lyr_pts_la_maison_0];
lyr_pts_la_maison_0.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Elevation': 'Elevation', 'id': 'id', 'idu': 'identifiant', 'nom': 'nom', });
lyr_pts_la_maison_0.set('fieldImages', {'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Elevation': 'Hidden', 'id': 'Hidden', 'idu': 'TextEdit', 'nom': 'Hidden', });
lyr_pts_la_maison_0.set('fieldLabels', {'idu': 'no label', });
lyr_pts_la_maison_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var size = 0;
var placement = 'point';
function categories_Upwelling_Natuna_Januari_2020_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Upwelling Sangat Kuat':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,3,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Upwelling Kuat':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,192,69,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Upwelling Lemah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,243,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Upwelling Sangat Lemah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,255,1,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Upwelling_Natuna_Januari_2020_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Keterangan");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Upwelling_Natuna_Januari_2020_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

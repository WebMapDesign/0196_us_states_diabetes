// EPSG:5070 Contiguous US
const crs5070 = new L.Proj.CRS(
  "EPSG:5070",
  "+proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=23 +lon_0=-96 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  {
    origin: [0, 0],
    resolutions: [6500],
  }
);

// EPSG:3338 Alaska
const crs3338 = new L.Proj.CRS(
  "EPSG:3338",
  "+proj=aea +lat_1=55 +lat_2=65 +lat_0=50 +lon_0=-154 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  {
    origin: [0, 0],
    resolutions: [12000],
  }
);

// EPSG:102114 Hawaii
const crs102114 = new L.Proj.CRS(
  "EPSG:102114",
  "+proj=utm +zone=4 +ellps=clrk66 +units=m +no_defs",
  {
    origin: [0, 0],
    resolutions: [3500],
  }
);

const disabledMapControls = {
  attributionControl: false,
  boxZoom: false,
  doubleClickZoom: false,
  dragging: false,
  zoomControl: false,
};

let mapConus = L.map("map-conus", {
  ...disabledMapControls,
  crs: crs5070,
}).setView([35.5, -99], 0);

let mapAlaska = L.map("map-Alaska", {
  ...disabledMapControls,
  crs: crs3338,
}).setView([62.5, -153.0], 0);

let mapHawaii = L.map("map-Hawaii", {
  ...disabledMapControls,
  crs: crs102114,
}).setView([20.5, -157.3], 0);

let layerContiguousDiabetes;
let layerAlaskaDiabetes;
let layerHawaiiDiabetes;

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 1,
  });
}

function resetHighlightContiguousDiabetes(e) {
  layerContiguousDiabetes.resetStyle(e.target);
}

function resetHighlightAlaskaDiabetes(e) {
  layerAlaskaDiabetes.resetStyle(e.target);
}

function resetHighlightHawaiiDiabetes(e) {
  layerHawaiiDiabetes.resetStyle(e.target);
}

function resetHighlightContiguousHadVisit(e) {
  layerContiguousHadVisit.resetStyle(e.target);
}

function resetHighlightAlaskaHadVisit(e) {
  layerAlaskaHadVisit.resetStyle(e.target);
}

function resetHighlightHawaiiHadVisit(e) {
  layerHawaiiHadVisit.resetStyle(e.target);
}

function resetHighlightContiguousAllTeeth(e) {
  layerContiguousAllTeeth.resetStyle(e.target);
}

function resetHighlightAlaskaAllTeeth(e) {
  layerAlaskaAllTeeth.resetStyle(e.target);
}

function resetHighlightHawaiiAllTeeth(e) {
  layerHawaiiAllTeeth.resetStyle(e.target);
}

// --- 01 diabetes ---
layerContiguousDiabetes = L.Proj.geoJson(geojsonStatesConus, {
  style: styleDiabetes,
  onEachFeature: onEachFeatureContiguousDiabetes,
}).addTo(mapConus);

layerAlaskaDiabetes = L.Proj.geoJson(geojsonStateAlaska, {
  style: styleDiabetes,
  onEachFeature: onEachFeatureAlaskaDiabetes,
}).addTo(mapAlaska);

layerHawaiiDiabetes = L.Proj.geoJson(geojsonStateHawaii, {
  style: styleDiabetes,
  onEachFeature: onEachFeatureHawaiiDiabetes,
}).addTo(mapHawaii);

// --- 02 had visit ---
layerContiguousHadVisit = L.Proj.geoJson(geojsonStatesConus, {
  style: styleHadVisit,
  onEachFeature: onEachFeatureContiguousHadVisit,
});

layerAlaskaHadVisit = L.Proj.geoJson(geojsonStateAlaska, {
  style: styleHadVisit,
  onEachFeature: onEachFeatureAlaskaHadVisit,
});

layerHawaiiHadVisit = L.Proj.geoJson(geojsonStateHawaii, {
  style: styleHadVisit,
  onEachFeature: onEachFeatureHawaiiHadVisit,
});

// --- 03 all teeth ---
layerContiguousAllTeeth = L.Proj.geoJson(geojsonStatesConus, {
  style: styleAllTeeth,
  onEachFeature: onEachFeatureContiguousAllTeeth,
});

layerAlaskaAllTeeth = L.Proj.geoJson(geojsonStateAlaska, {
  style: styleAllTeeth,
  onEachFeature: onEachFeatureAlaskaAllTeeth,
});

layerHawaiiAllTeeth = L.Proj.geoJson(geojsonStateHawaii, {
  style: styleAllTeeth,
  onEachFeature: onEachFeatureHawaiiAllTeeth,
});

// --- on each feature ---

function onEachFeatureContiguousDiabetes(feature, layer) {
  let popupContent =
    '<p class="popup-title">' +
    feature.properties.NAME +
    "</p>" +
    '<p class="popup-text">Prevalence Diabetes: ' +
    feature.properties.diabetes +
    " %</p>" +
    '<p class="popup-text">Had Dental Visit Last Year: ' +
    feature.properties.had_visit +
    " %</p>" +
    '<p class="popup-text">Retained All Teeth: ' +
    feature.properties.all_teeth +
    " %</p>";

  layer.bindPopup(popupContent, popupStyle);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlightContiguousDiabetes,
  });
}

function onEachFeatureAlaskaDiabetes(feature, layer) {
  let popupContent =
    '<p class="popup-title">' +
    feature.properties.NAME +
    "</p>" +
    '<p class="popup-text">Prevalence Diabetes: ' +
    feature.properties.diabetes +
    " %</p>" +
    '<p class="popup-text">Had Dental Visit Last Year: ' +
    feature.properties.had_visit +
    " %</p>" +
    '<p class="popup-text">Retained All Teeth: ' +
    feature.properties.all_teeth +
    " %</p>";

  layer.bindPopup(popupContent, popupStyle);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlightAlaskaDiabetes,
  });
}

function onEachFeatureHawaiiDiabetes(feature, layer) {
  let popupContent =
    '<p class="popup-title">' +
    feature.properties.NAME +
    "</p>" +
    '<p class="popup-text">Prevalence Diabetes: ' +
    feature.properties.diabetes +
    " %</p>" +
    '<p class="popup-text">Had Dental Visit Last Year: ' +
    feature.properties.had_visit +
    " %</p>" +
    '<p class="popup-text">Retained All Teeth: ' +
    feature.properties.all_teeth +
    " %</p>";

  layer.bindPopup(popupContent, popupStyle);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlightHawaiiDiabetes,
  });
}

function onEachFeatureContiguousHadVisit(feature, layer) {
  let popupContent =
    '<p class="popup-title">' +
    feature.properties.NAME +
    "</p>" +
    '<p class="popup-text">Prevalence Diabetes: ' +
    feature.properties.diabetes +
    " %</p>" +
    '<p class="popup-text">Had Dental Visit Last Year: ' +
    feature.properties.had_visit +
    " %</p>" +
    '<p class="popup-text">Retained All Teeth: ' +
    feature.properties.all_teeth +
    " %</p>";

  layer.bindPopup(popupContent, popupStyle);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlightContiguousHadVisit,
  });
}

function onEachFeatureAlaskaHadVisit(feature, layer) {
  let popupContent =
    '<p class="popup-title">' +
    feature.properties.NAME +
    "</p>" +
    '<p class="popup-text">Prevalence Diabetes: ' +
    feature.properties.diabetes +
    " %</p>" +
    '<p class="popup-text">Had Dental Visit Last Year: ' +
    feature.properties.had_visit +
    " %</p>" +
    '<p class="popup-text">Retained All Teeth: ' +
    feature.properties.all_teeth +
    " %</p>";

  layer.bindPopup(popupContent, popupStyle);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlightAlaskaHadVisit,
  });
}

function onEachFeatureHawaiiHadVisit(feature, layer) {
  let popupContent =
    '<p class="popup-title">' +
    feature.properties.NAME +
    "</p>" +
    '<p class="popup-text">Prevalence Diabetes: ' +
    feature.properties.diabetes +
    " %</p>" +
    '<p class="popup-text">Had Dental Visit Last Year: ' +
    feature.properties.had_visit +
    " %</p>" +
    '<p class="popup-text">Retained All Teeth: ' +
    feature.properties.all_teeth +
    " %</p>";

  layer.bindPopup(popupContent, popupStyle);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlightHawaiiHadVisit,
  });
}

function onEachFeatureContiguousAllTeeth(feature, layer) {
  let popupContent =
    '<p class="popup-title">' +
    feature.properties.NAME +
    "</p>" +
    '<p class="popup-text">Prevalence Diabetes: ' +
    feature.properties.diabetes +
    " %</p>" +
    '<p class="popup-text">Had Dental Visit Last Year: ' +
    feature.properties.had_visit +
    " %</p>" +
    '<p class="popup-text">Retained All Teeth: ' +
    feature.properties.all_teeth +
    " %</p>";

  layer.bindPopup(popupContent, popupStyle);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlightContiguousAllTeeth,
  });
}

function onEachFeatureAlaskaAllTeeth(feature, layer) {
  let popupContent =
    '<p class="popup-title">' +
    feature.properties.NAME +
    "</p>" +
    '<p class="popup-text">Prevalence Diabetes: ' +
    feature.properties.diabetes +
    " %</p>" +
    '<p class="popup-text">Had Dental Visit Last Year: ' +
    feature.properties.had_visit +
    " %</p>" +
    '<p class="popup-text">Retained All Teeth: ' +
    feature.properties.all_teeth +
    " %</p>";

  layer.bindPopup(popupContent, popupStyle);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlightAlaskaAllTeeth,
  });
}

function onEachFeatureHawaiiAllTeeth(feature, layer) {
  let popupContent =
    '<p class="popup-title">' +
    feature.properties.NAME +
    "</p>" +
    '<p class="popup-text">Prevalence Diabetes: ' +
    feature.properties.diabetes +
    " %</p>" +
    '<p class="popup-text">Had Dental Visit Last Year: ' +
    feature.properties.had_visit +
    " %</p>" +
    '<p class="popup-text">Retained All Teeth: ' +
    feature.properties.all_teeth +
    " %</p>";

  layer.bindPopup(popupContent, popupStyle);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlightHawaiiAllTeeth,
  });
}

const mapTitle = document.getElementById("map-title-text");

let baseLayers = {
  "Prevalence Diabetes": layerContiguousDiabetes,
  "Had Dental Visit": layerContiguousHadVisit,
  "Retained All Teeth": layerContiguousAllTeeth,
};

let overlays = {};

let legendDiabetes = L.control({ position: "bottomright" });
legendDiabetes.onAdd = function (mapConus) {
  let div = L.DomUtil.create("div", "info legend legend-diabetes");

  div.innerHTML =
    '<p class="legend-title">Prevalence <br> Diabetes (%)</p>' +
    '<i style="background:' +
    "#ff0000" +
    '"></i> ' +
    "14.0 + " +
    "<br>" +
    '<i style="background:' +
    "#ff4040" +
    '"></i> ' +
    "12.0 - 13.9" +
    "<br>" +
    '<i style="background:' +
    "#ff8080" +
    '"></i> ' +
    "10.0 - 11.9" +
    "<br>" +
    '<i style="background:' +
    "#ffbfbf" +
    '"></i> ' +
    "8.0 - 9.9" +
    "<br>" +
    '<i style="background:' +
    "#ffffff" +
    '"></i> ' +
    "0.0 - 7.9";

  return div;
};

legendDiabetes.addTo(mapConus);

let legendHadVisit = L.control({ position: "bottomright" });
legendHadVisit.onAdd = function (mapConus) {
  let div = L.DomUtil.create("div", "info legend legend-hadvisit");

  div.innerHTML =
    '<p class="legend-title">Had Dental <br>Visit (%)</p>' +
    '<i style="background:' +
    "#2c5b9d" +
    '"></i> ' +
    "65.0 + " +
    "<br>" +
    '<i style="background:' +
    "#2879b9" +
    '"></i> ' +
    "60.0 - 64.9" +
    "<br>" +
    '<i style="background:' +
    "#73b3d8" +
    '"></i> ' +
    "55.0 - 59.9" +
    "<br>" +
    '<i style="background:' +
    "#c8ddf0" +
    '"></i> ' +
    "50.0 - 54.9" +
    "<br>" +
    '<i style="background:' +
    "#ffffff" +
    '"></i> ' +
    "0.0 - 49.9";

  return div;
};

let legendAllTeeth = L.control({ position: "bottomright" });
legendAllTeeth.onAdd = function (mapConus) {
  let div = L.DomUtil.create("div", "info legend legend-allteeth");

  div.innerHTML =
    '<p class="legend-title">Retained<br>All Teeth (%)</p>' +
    '<i style="background:' +
    "#467a5a" +
    '"></i> ' +
    "40.0 + " +
    "<br>" +
    '<i style="background:' +
    "#2a924a" +
    '"></i> ' +
    "35.0 - 39.9" +
    "<br>" +
    '<i style="background:' +
    "#7bc87c" +
    '"></i> ' +
    "30.0 - 34.9" +
    "<br>" +
    '<i style="background:' +
    "#caeac3" +
    '"></i> ' +
    "25.0 - 29.9" +
    "<br>" +
    '<i style="background:' +
    "#ffffff" +
    '"></i> ' +
    "0.0 - 24.9";

  return div;
};

const mapLayersLegends = {
  "Prevalence Diabetes": legendDiabetes,
  "Had Dental Visit": legendHadVisit,
  "Retained All Teeth": legendAllTeeth,
};

const mapLayersTitles = {
  "Prevalence Diabetes": "Prelavence of Diabetes",
  "Had Dental Visit":
    "Proportion of Diabetic Adults Who Had a Dental Visit Within a Year",
  "Retained All Teeth": "Proportion of Diabetic Adults Who Retained All Teeth",
};

let mapLegends = [legendDiabetes, legendHadVisit, legendAllTeeth];

mapConus.on("baselayerchange", function (eventLayer) {
  let eventLayerName = eventLayer.name;

  if (eventLayerName === "Prevalence Diabetes") {
    if (mapAlaska.hasLayer(layerAlaskaHadVisit)) {
      mapAlaska.removeLayer(layerAlaskaHadVisit);
    }
    if (mapAlaska.hasLayer(layerAlaskaAllTeeth)) {
      mapAlaska.removeLayer(layerAlaskaAllTeeth);
    }
    layerAlaskaDiabetes.addTo(mapAlaska);

    if (mapHawaii.hasLayer(layerHawaiiHadVisit)) {
      mapHawaii.removeLayer(layerHawaiiHadVisit);
    }
    if (mapHawaii.hasLayer(layerHawaiiAllTeeth)) {
      mapHawaii.removeLayer(layerHawaiiAllTeeth);
    }
    layerHawaiiDiabetes.addTo(mapHawaii);
  }

  if (eventLayerName === "Had Dental Visit") {
    if (mapAlaska.hasLayer(layerAlaskaDiabetes)) {
      mapAlaska.removeLayer(layerAlaskaDiabetes);
    }
    if (mapAlaska.hasLayer(layerAlaskaAllTeeth)) {
      mapAlaska.removeLayer(layerAlaskaAllTeeth);
    }
    layerAlaskaHadVisit.addTo(mapAlaska);

    if (mapHawaii.hasLayer(layerHawaiiDiabetes)) {
      mapHawaii.removeLayer(layerHawaiiDiabetes);
    }
    if (mapHawaii.hasLayer(layerHawaiiAllTeeth)) {
      mapHawaii.removeLayer(layerHawaiiAllTeeth);
    }
    layerHawaiiHadVisit.addTo(mapHawaii);
  }

  if (eventLayerName === "Retained All Teeth") {
    if (mapAlaska.hasLayer(layerAlaskaDiabetes)) {
      mapAlaska.removeLayer(layerAlaskaDiabetes);
    }
    if (mapAlaska.hasLayer(layerAlaskaHadVisit)) {
      mapAlaska.removeLayer(layerAlaskaHadVisit);
    }
    layerAlaskaAllTeeth.addTo(mapAlaska);

    if (mapHawaii.hasLayer(layerHawaiiDiabetes)) {
      mapHawaii.removeLayer(layerHawaiiDiabetes);
    }
    if (mapHawaii.hasLayer(layerHawaiiHadVisit)) {
      mapHawaii.removeLayer(layerHawaiiHadVisit);
    }
    layerHawaiiAllTeeth.addTo(mapHawaii);
  }

  mapTitle.innerText = mapLayersTitles[eventLayerName];
  let newLegend = mapLayersLegends[eventLayerName];

  mapLegends.forEach((item) => {
    this.removeControl(item);
  });
  if (newLegend) {
    newLegend.addTo(this);
  }
});

L.control
  .layers(baseLayers, overlays, { collapsed: false, position: "topleft" })
  .addTo(mapConus);

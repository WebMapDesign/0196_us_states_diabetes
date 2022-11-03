let popupStyle = {
  closeButton: true,
};

function colorRampDiabetes(a) {
  return a >= 14
    ? "#ff0000"
    : a >= 12
    ? "#ff4040"
    : a >= 10
    ? "#ff8080"
    : a >= 8
    ? "#ffbfbf"
    : "#ffffff";
}

function colorRampHadVisit(a) {
  return a >= 65
    ? "#2c5b9d"
    : a >= 60
    ? "#2879b9"
    : a >= 55
    ? "#73b3d8"
    : a >= 50
    ? "#c8ddf0"
    : "#ffffff";
}

function colorRampAllTeeth(a) {
  return a >= 40
    ? "#467a5a"
    : a >= 35
    ? "#2a924a"
    : a >= 30
    ? "#7bc87c"
    : a >= 25
    ? "#caeac3"
    : "#ffffff";
}

function styleDiabetes(feature) {
  return {
    color: "#000000",
    fillColor: colorRampDiabetes(feature.properties["diabetes"]),
    fillOpacity: 1,
    opacity: 1,
    weight: 0.3,
  };
}

function styleHadVisit(feature) {
  return {
    color: "#000000",
    fillColor: colorRampHadVisit(feature.properties["had_visit"]),
    fillOpacity: 1,
    opacity: 1,
    weight: 0.3,
  };
}

function styleAllTeeth(feature) {
  return {
    color: "#000000",
    fillColor: colorRampAllTeeth(feature.properties["all_teeth"]),
    fillOpacity: 1,
    opacity: 1,
    weight: 0.3,
  };
}

function styleSimple() {
  return {
    color: "#000000",
    fillColor: "#ffffff",
    fillOpacity: 1,
    opacity: 1,
    weight: 0.5,
  };
}

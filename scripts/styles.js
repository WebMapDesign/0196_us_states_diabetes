let popupStyle = {
  closeButton: true,
};

function colorRampDiabetes(a) {
  return a > 14
    ? "#ff0000"
    : a > 12
    ? "#ff4040"
    : a >= 10
    ? "#ff8080"
    : a > 8
    ? "#ffbfbf"
    : "#ffffff";
}

function colorRampHadVisit(a) {
  return a > 65
    ? "#ffffff"
    : a > 60
    ? "#ffbfbf"
    : a >= 55
    ? "#ff8080"
    : a > 50
    ? "#ff4040"
    : "#ff0000";
}

function colorRampAllTeeth(a) {
  return a > 40
    ? "#ffffff"
    : a > 35
    ? "#ffbfbf"
    : a >= 30
    ? "#ff8080"
    : a > 25
    ? "#ff4040"
    : "#ff0000";
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

function updateBodyStatCost() {
  //   // convert stat level to cost
  var bodyStatValue = parseInt(document.getElementById("bodyStatValue").value);
  var extra = ((bodyStatValue + 1) - 13) * 2;
  document.getElementById("bodyStatCost").value = (bodyStatValue * 2);

  if (bodyStatValue >= 13) {
    document.getElementById("bodyStatCost").value = bodyStatValue * 2 + extra;
  }
}

function updateMindStatCost(){
  var mindStatValue = parseInt(document.getElementById("mindStatValue").value);
  var extra = ((mindStatValue + 1) - 13) * 2;
  document.getElementById("mindStatCost").value = (mindStatValue * 2);

  if (mindStatValue >= 13) {
    document.getElementById("mindStatCost").value = mindStatValue * 2 + extra;
  }
}

function updateSoulStatCost(){
  var soulStatValue = parseInt(document.getElementById("soulStatValue").value);
  var extra = ((soulStatValue + 1) - 13) * 2;
  document.getElementById("soulStatCost").value = (soulStatValue * 2);

  if (soulStatValue >= 13) {
    document.getElementById("soulStatCost").value = soulStatValue * 2 + extra;
  }
}

function updateHealth(){
  var x = parseInt(document.getElementById("bodyStatValue").value);
  var y = parseInt(document.getElementById("soulStatValue").value);
  document.getElementById("health").value = (x + y) * 5;
}
function updateEnergy(){
  var x = parseInt(document.getElementById("mindStatValue").value);
  var y = parseInt(document.getElementById("soulStatValue").value);
  document.getElementById("energy").value = (x + y) * 5;
}
function updateShock(){
  var x = parseInt(document.getElementById("health").value);
  document.getElementById("shock").value = (x / 5);
}
function updateACV(){
  var x = parseInt(document.getElementById("bodyStatValue").value);
  var y = parseInt(document.getElementById("mindStatValue").value);
  var z = parseInt(document.getElementById("soulStatValue").value);
  document.getElementById("acv").value = Math.floor((x + y + z) / 3);
}
function updateDCV(){
  var x = parseInt(document.getElementById("bodyStatValue").value);
  var y = parseInt(document.getElementById("mindStatValue").value);
  var z = parseInt(document.getElementById("soulStatValue").value);
  document.getElementById("dcv").value = Math.floor((x + y + z) / 3);
}

//---Tâches à effectuer : Horloge---
const presentdate = document.getElementById("heure-display")

function showTime() {
  setInterval(function (){
    let d = new Date();
    presentdate.innerText = d.toLocaleTimeString();
  }, 1000)
};

showTime();

//---Tâches à effectuer : Tache du jour---
// Je récupère les éléments du DOM
const affichageTache = document.getElementById("tache-display");
const tacheInput = document.getElementById("tache-input");
const btnSauvegarder = document.getElementById("sauvegarder-btn");

affichageTache.



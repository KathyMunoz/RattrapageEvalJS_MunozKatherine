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






const affichageMeteo = document.getElementById("meteo-display");//Je récupère mon id dans une variable
function addMeteo(texte) {//Création d'une fonction pour insérer le texte json
    affichageMeteo.innerText = texte;
}

  fetch("https://prevision-meteo.ch/services/json/toulouse")//lance une requête HTTP GET vers l'URL fournie et renvoie une promesse qui sera résolue quand la réponse arrive.
      .then(response => {
          return response.json();
      })
      .then(json => {
          let texte = `
          Température : ${json.current_condition.tmp} °
          Vitesse du Vent : ${json.current_condition.wnd_spd}
          Description : ${json.current_condition.condition}
          `;
          addMeteo(texte);
      })
      .catch(error =>{
          addMeteo("Erreur l\' api ne répond pas");
      })

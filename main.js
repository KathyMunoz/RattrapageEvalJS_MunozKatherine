//---Tâches à effectuer : Horloge---
const presentdate = document.getElementById("heure-display")

function showTime() {
  setInterval(function (){
    let d = new Date();
    presentdate.innerText = d.toLocaleTimeString();
  }, 1000)
};

showTime();

// Je récupère les éléments du DOM
const affichageTache = document.getElementById("tache-display");
const tacheInput = document.getElementById("tache-input");
const btnSauvegarder = document.getElementById("sauvegarder-btn");
const affichageMeteo = document.getElementById("meteo-display");//Je récupère mon id dans une variable

//---Tâches à effectuer : Tache du jour---



if(localStorage.getItem("tacheDuJour") != null) {//si la clé est different de null = si la clé existe
  affichageTache.innerText = `${localStorage.getItem("tacheDuJour")}`;//je recupere la valeur avec getItem
} else ( 
  affichageTache.innerText = "La tache n'existe pas"
)
btnSauvegarder.addEventListener("click", ()=> {
    localStorage.setItem("tacheDuJour", tacheInput.value);//j'enregistre une valeur dans une clé avec setItem
});



//---Tâches à effectuer : Météo du jour---


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


  
 
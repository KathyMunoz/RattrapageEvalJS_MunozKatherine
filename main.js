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

// La clé pour le LocalStorage
const CLE_TACHE = "tacheDuJour";

// Fonction pour mettre à jour l'affichage des tâches
function miseAjourTache (tacheDuJour) {
  if (!tache || tache.trim() === "") {//trim verifie que la tâche n'a pas des espaces inutiles
    affichageTache.textContent = "Aucune tâche enregistrée pour aujourd'hui.";
  } else {
    affichageTache.textContent = tacheDuJour;
  }
}

// Lire tâche depuis le LocalStorage
function lireTacheDepuisStorage() {
  return localStorage.getItem(CLE_TACHE);
}

//Sauvegarde tâche dans le LocalStorage
function sauvegarderTacheDansStorage(tache) {
  localStorage.setItem(CLE_TACHE, tache);
}

// Chargement de la tâche au démarrage
const tacheSauvegardee = lireTacheDepuisStorage();
mettreAJourAffichageTache(tacheSauvegardee);

// Click sur le button Sauvegarder
btnSauvegarder.addEventListener("click", () => {
  const nouvelleTache = tacheInput.value.trim();
  if (nouvelleTache === "") {
    mettreAJourAffichageTache(""); // message par défaut
    localStorage.removeItem(CLE_TACHE); // efface clé
  } else {
    sauvegarderTacheDansStorage(nouvelleTache);
    mettreAJourAffichageTache(nouvelleTache);
    tacheInput.value = ""; //vider le champ après sauvegarde
  }
});



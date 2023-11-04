/* Récupération des éléments HTML */
let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");

/* Initialisation des variables */
let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let estArrete = true;

/* Fonction d'activation du chrono */
function demarrer() {
    if (estArrete) {
        estArrete = false;
        defilerTemps();
    }
};

/* Fonction d'arrêt du chrono */
function arreter() {
    if (!estArrete) {
        estArrete = true;
        clearTimeout(timeout);
    }
};

/* Fonction de défilement du chrono */
function defilerTemps() {
    if (estArrete) return;

    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);

    secondes++;

    if (secondes == 60) { // Conversion des secondes en minutes
    minutes++;
    secondes = 0;
    }
    if (minutes == 60) { // Conversion des minutes en heures
    heures++;
    minutes = 0;
    }

    /* Affichages en mode 00:00:00 */
    if (secondes < 10) { 
    secondes = "0" + secondes;
    }
    if (minutes < 10) {
    minutes = "0" + minutes;
    }
    if (heures < 10) {
    heures = "0" + heures;
    }

    // Affichage du chrono
    chrono.textContent = `${heures}:${minutes}:${secondes}`;

    // Appel de la fonction defilerTemps toutes les secondes
    timeout = setTimeout(defilerTemps, 1000);
};

/* Fonction de réinitialisation des valeurs */
function reset() {
    chrono.textContent = "00:00:00";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    clearTimeout(timeout);
};

/* Appels des fonctions */
startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);
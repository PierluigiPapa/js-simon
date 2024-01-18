//Costante per stabilire le ore
const hoursHtml = document.getElementById('hours');
//Costante per stabilire i minuti
const minutesHtml = document.getElementById('minutes');
//Costante per stabilire i secondi
const secondsHtml = document.getElementById('seconds');
//Costante per stabilire la data di oggi
const dateToday = new Date().getFullYear();
//Costnte per stabilire la data della lezione di domani
const lessionsTime = new Date("2024-01-19 09:30:00");

//Funzione per il countdown
function updateCountdownLessions (){
    const currentTime = new Date();
    //Calcolo per stabilire il tempo mancante per la lezione di domani
    const diff = lessionsTime - currentTime;

    const ore = Math.floor (diff / 1000 / 60 / 60) % 24;
    const minuti = Math.floor (diff / 1000 / 60) % 60;
    const secondi = Math.floor (diff / 1000) % 60;

    hoursHtml.innerHTML = ore;
    minutesHtml.innerHTML = minuti;
    secondsHtml.innerHTML = secondi;
    // console.log(secondi);
}

setInterval(updateCountdownLessions, 1000);
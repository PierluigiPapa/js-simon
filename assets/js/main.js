//Costante per stabiliare i giorni
const daysHtml = document.querySelectorAll('days');
//Costante per stabilire le ore
const hoursHtml = document.querySelectorAll('hours');
//Costante per stabilire i minuti
const minutesHtml = document.querySelectorAll('minutes');
//Costante per stabilire i secondi
const secondsHtml = document.querySelectorAll('seconds');
//Costante per stabilire la data di oggi
const dateToday = new Date().getFullYear();
//Costnte per stabilire la data della lezione di domani
const lessionsTime = new Date("2024-01-19 09:30:00");

//Funzione per il countdown
function updateCountdownLessions (){
    const currentTime = new Date();
    const diff = lessionsTime - currentTime;
    console.log(diff);
}

updateCountdownLessions();
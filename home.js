// Select elements from the html.
weeks =  document.getElementById('semanas');
days =  document.getElementById('dias');
load = document.getElementById("load");
head = document.getElementById('head');
div = document.getElementById('mainBlock');

load.addEventListener('click', calculate);

// Obtain the dates and time stamps. 
let future = new Date('2023-12-15');
let actual = new Date();

function calculate() {
    // Calculate de difference.
    let dayInMs = 86400000;
    let diff = future - actual;
    let difDays = Math.round(diff / dayInMs);
    let difWeeks = Math.round(difDays / 7) ;

    // Populate the html.
    load.style.visibility="hidden";
    head.innerHTML = 'Para el dia F';
    div.style.visibility='visible';
    weeks.innerHTML = difWeeks;
    days.innerHTML = difDays;
};
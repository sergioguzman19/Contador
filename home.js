// Select elements from the html.
weeks =  document.getElementById('semanas');
days =  document.getElementById('dias');
load = document.getElementById("load");
head = document.getElementById('head');
companing1 = document.getElementById('companing1');
companing2 = document.getElementById('companing2');
companingD1 = document.getElementById('companing-dias1');
companingD2 = document.getElementById('companing-dias2');

load.addEventListener('click', calculate);

// Obtain the dates and time stamps. 
let future = new Date('2023-06-01');
let actual = new Date();

function calculate() {
    // Calculate de difference.

    let dayInMs = 86400000;

    let diff = future - actual;

    let difDays = Math.round(diff / dayInMs);

    let difWeeks = Math.round(difDays / 7) ;

    // Populate the html.
    load.style.visibility="hidden";
    head.innerHTML = 'Para el dia F:';
    companing1.style.visibility='visible';
    companing2.style.visibility='visible';
    weeks.innerHTML = difWeeks;
    companingD1.style.visibility='visible';
    companingD2.style.visibility='visible';
    days.innerHTML = difDays;
};

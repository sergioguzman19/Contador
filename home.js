// Select elements from the html.
weeks =  document.getElementById('semanas');
days =  document.getElementById('dias');

// Obtain the dates and time stamps. 
let future = new Date('2023-06-01');
let actual = new Date();

// Calculate de difference.

let dayInMs = 86400000;

let diff = future - actual;

let difDays = Math.round(diff / dayInMs);

let difWeeks = Math.round(difDays / 7) ;


// Populate the html.

days.innerHTML = difDays;
weeks.innerHTML = difWeeks;
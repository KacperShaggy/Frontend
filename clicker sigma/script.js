let gigachad = 0;
let aura = 0;
let rizz = 0;
let robotnik = 1;
let fortnite_dance = 0;
let kobiety = 0;

let show_gigachad = document.getElementById("gigachad");
let show_aura = document.getElementById("aura");
let show_rizz = document.getElementById("rizz");
let show_robotnika = document.getElementById('robotnik')
let show_kobiety = document.getElementById("kobiety");
let show_fortnite_dance = document.getElementById("fortnite_dance");
let komunikat = document.getElementById("komunikat");


show_gigachad.innerHTML += gigachad;
show_aura.innerHTML += aura;
show_rizz.innerHTML += rizz;
show_robotnika.innerHTML += robotnik;
show_kobiety.innerHTML += kobiety;
show_fortnite_dance.innerHTML += fortnite_dance;



function addGigachad() {
    gigachad += robotnik * 1;
    show_gigachad.innerHTML = gigachad;
};


function addAura() {
    aura += robotnik * 5;
    show_aura.innerHTML = aura;
};


function addRizz() {
    rizz += robotnik * 10;
    show_rizz.innerHTML = rizz;
};

function addRobotnik() {
    robotnik ++;
    show_robotnika.innerHTML = robotnik;
};

function buyWomen() {
    if (rizz >= 10 && aura >= 200 && gigachad >= 20) {
        kobiety++;
        rizz -= 10;
        aura -= 200;
        gigachad -= 20;
        show_kobiety.innerHTML = kobiety; 
        komunikat.innerHTML = ""; 
    } else {
        komunikat.innerHTML = "Nie stać cię, biedaku! Idź coś wysigmuj."; 
    }
}


function buyFortnite_dance() {
    if (rizz >= 10000 && aura >= 200 && gigachad >= 20) {
        fortnite_dance++;
        rizz -= 10;
        aura -= 200;
        gigachad -= 20;
        show_fortnite_dance.innerHTML = fortnite_dance; 
        komunikat.innerHTML = ""; 
    } else {
        komunikat.innerHTML = "Nie stać cię, biedaku! Idź coś wyrizzuj."; 
    }
}

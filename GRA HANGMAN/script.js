const getRandomWord = () => {
    const selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    const password = selectedWord.password;
    const hint = selectedWord.hint;

    console.log(password);

    return { password, hint };
}

const wordInfo = getRandomWord();
let password = wordInfo.password.toUpperCase();
const length = password.length;
let mistakes = 0;
let password1 = "";
let hint = wordInfo.hint;

/* var SneakySnitch = new Audio("sources/SneakySnitch.mp3");
var Scheming = new Audio("sources/SchemingWeaselFaster.mp3");
var Monkeys = new Audio("sources/MonkeysSpinningMonkeys.mp3");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var BackgroundMusic = ['SneakySnitch', 'Scheming', 'audio3'];
var randomIndex = getRandomInt(0, BackgroundMusic.length - 1);
var randomAudioId = BackgroundMusic[randomIndex];

Audio.loop = true; */

 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  // Tablica z ścieżkami audio
  var audioPaths = ['sources/SchemingWeaselFaster.mp3', 'sources/MonkeysSpinningMonkeys.mp3', 'sources/SneakySnitch.mp3'];

  // Losowy indeks do wyboru ścieżki audio
  var randomIndex = getRandomInt(0, audioPaths.length - 1);

  // Stwórz element audio
  var audioElement = new Audio(audioPaths[randomIndex]);

  // Ustaw właściwość loop na true, aby audio odtwarzało się w pętli
  audioElement.loop = true;

  // Uruchom odtwarzanie audio
 

var win = new Audio("sources/WIN.mp3");
var lose = new Audio("sources/LOSE.mp3");
var yes = new Audio("sources/yes.wav");
var no = new Audio("sources/no.wav");


for(var i = 0; i < length; i++){
    if(password.charAt(i) == " ") password1 += " ";
    else password1 += "-";
}

function showPassword(){
    document.getElementById("word").innerHTML = password1;
}

function showHint(){
    if(mistakes >= 2){
    document.getElementById("hint").innerHTML = "Podpowiedź: "+hint;
    }
    else {
        document.getElementById("hint").innerHTML = "Popełnij chociaż dwa błędy zamin użyjesz podpowiedzi! ";

    }
}

window.onload = start;


function start(){

    audioElement.play();

    var plot_div = "";

    for(var i = 0; i < 35; i++)
    {
        var el = "lett" + i;

        plot_div += 
        '<div class="letters" onclick="check('+i+');" id="' 
        + el + '">' 
        + letters[i] + "</div>";
        if(i % 7 == 6) plot_div += '<div style="clear:both;"></div>';
    } 
        document.getElementById("letters").innerHTML = plot_div;

    showPassword();
}

String.prototype.setChar = function(place, char){
    if(place > this.length - 1) return this.toString();
    else return this.substr(0, place) + char + this.substr(place+1);
}

function check(nr){
    var check = false;

    for(var i = 0; i < length; i++)
    {
        if(password.charAt(i) == letters[nr]){
            password1 = password1.setChar(i, letters[nr]);
            check = true
        }
    }

    if(check == true)
    {
        yes.play();

        var el = "lett" + nr;
        document.getElementById(el).style.background = "#009900";
        document.getElementById(el).style.color = "white";
        document.getElementById(el).style.border = "3px solid #00C000";
        document.getElementById(el).style.transition = "2s";
        document.getElementById(el).style.cursor = "default"; }
    else {
        no.play();

        var el = "lett" + nr;
        document.getElementById(el).style.background = "#990000";
        document.getElementById(el).style.color = "black";
        document.getElementById(el).style.border = "3px solid #C00000";
        document.getElementById(el).style.transition = "2s";
        document.getElementById(el).style.cursor = "default"; 

        document.getElementById(el).setAttribute("onclick",";");

        mistakes++;
        var paint = "images/hangman-" + mistakes + ".svg";
        document.getElementById("hangman").innerHTML = '<img src="'+paint+'"alt="" />';
    }

    if(password == password1){
        win.play();
        audioElement.pause();

        document.getElementById("contariner").style.textAlign = "center";
        document.getElementById("contariner").innerHTML = " Tak jest! <br /> Podano prawidłowe hasło: " + password +
        '<br /> <br /> <span onclick="location.reload()"class="reset"> JESZCZE RAZ?</span.';
    }

    if(mistakes >= 6){
        lose.play();
        audioElement.pause();

        document.getElementById("contariner").style.textAlign = "center";
        document.getElementById("contariner").innerHTML = " Przegrałeś! <br />Prawidłowe hasło: " + password +
        '<br /> <br /> <span onclick="location.reload()"class="reset"> JESZCZE RAZ?</span.';
    }

        showPassword(); 
}

function guess(){
    var guess = prompt("Podaj hasło: ");
    if(guess == password.toUpperCase() || guess == password.toLowerCase()){
        win.play();
        audioElement.pause();

        document.getElementById("contariner").style.textAlign = "center";
        document.getElementById("contariner").innerHTML = " Tak jest! <br /> Podano prawidlowe hasło: " + password +
        '<br /> <br /> <span onclick="location.reload()"class="reset"> JESZCZE RAZ?</span.';
    }

    else {
        alert("TO NIE TO HASŁO!! LADUDIDU!");
        mistakes++;
        var paint = "images/hangman-" + mistakes + ".svg";
        document.getElementById("hangman").innerHTML = '<img src="'+paint+'"alt="" />';
            if(mistakes >= 6){
                    lose.play();
                    audioElement.pause();
            
                    document.getElementById("contariner").style.textAlign = "center";
                    document.getElementById("contariner").innerHTML = " Przegrałeś! <br />Prawidlowe hasło: " + password +
                    '<br /> <br /> <span onclick="location.reload()"class="reset"> JESZCZE RAZ?</span.';
            }
    }
}

function play(){
    audioElement.play();
}

function stop(){
    audioElement.pause();
}


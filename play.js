var players = [
{
	name: "Lewandowski",
	image: "img/lewandowski.jpg"
},
{
	name: "Kimmich",
	image: "img/kimmich.jpg"
},
{
	name: "Sane",
	image: "img/sane.jpg"
},
{
	name: "Neuer",
	image: "img/neuer.jpg"
},
{
	name: "Muller",
	image: "img/Muller.jpg"
},
{
	name: "Davies",
	image: "img/davies.jpg"
},
{
	name: "Pavard",
	image: "img/pavard.jpg"
},
{
	name: "Boateng",
	image: "img/boateng.jpg"
},
{
	name: "Gnabry",
	image: "img/gnabry.jpg"
},
{
	name: "Tolisso",
	image: "img/tolisso.jpg"
},
{
	name: "Sule",
	image: "img/sule.jpg"
}

];

// Timer
var timerTime = 120;
// alert(localStorage.getItem("GameTime"));
if(localStorage.getItem("GameTime") != null){
	timerTime = localStorage.getItem("GameTime");
}


var interval = 1000;
var width = 100;
var barAmount = Number(width/timerTime);
var timer = setTimeout(countDown, interval);
document.getElementById("timer").innerHTML = "Timer: "+timerTime+"s";


function countDown() {
	timerTime--;
    document.getElementById("timer").innerHTML = "Timer: "+timerTime+"s";
    width = width-barAmount;
    document.getElementById("timerBar").style.width = width + "%"; 
    timer = setTimeout(countDown, interval);

    if(timerTime== 0){
    	clearTimeout(timer);
    	document.getElementById("progress").classList.remove("d-inline-block");
		gameEnding();
		return;
    }
}


var gamePeople = 11;
if(localStorage.getItem("GamePeople") != null){
	gamePeople = localStorage.getItem("GamePeople");
}


var usedPlayers = [];


// Takes you to the Main Menu page
document.getElementById("mainmenu").onclick = function(){
	window.location.href="index.html";
}

// Picking random players from data
let randomPlayers = [];
while(players.length !== 0){
	let randomIndex = Math.floor(Math.random() * players.length);
	randomPlayers.push(players[randomIndex]);
	players.splice(randomIndex, 1);
}

players = randomPlayers;



// makes elements onclick
const buttons = document.querySelectorAll('.button');
buttons.forEach(element => {
	element.onclick = function() { selectIMG(element.id); };
});

const buttons2 = document.querySelectorAll('.button-2');
buttons2.forEach(element => {
	element.onclick = function() { selectNAME(element.id); };
});

// Creates an array with numbers
var numbers = [];
for(var i = 0; i < gamePeople; i++){
	numbers[i] = i;
}

// Creates an array with numbers
var numbersName = [];
for(var i = 0; i < gamePeople; i++){
	numbersName[i] = i;
}

// Puts images and names random on the site

for (var i = 0; i < gamePeople; i++) {
	var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
	var numberIndex = numbers.indexOf(randomNumber);
	numbers.splice(numberIndex,1);


	var randomNumberName = numbersName[Math.floor(Math.random() * numbersName.length)];
	var numberIndexName = numbersName.indexOf(randomNumberName);
	numbersName.splice(numberIndexName,1);

	document.getElementById("img-"+i).src = players[randomNumber].image;
	document.getElementById("btn-"+i).innerHTML = players[randomNumberName].name;

};

var score = 0;
var tries = 0;


// Puts Score and Tries in localStorage
function gameEnding(){
	localStorage.setItem("Score",score);
	localStorage.setItem("Tries",tries);
}











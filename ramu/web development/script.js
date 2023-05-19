let xp = 0;
let health = 1000;
let gold = 50000;
let currentwepon = 100;
let fighting ;
let monsterHealth;
let inventory = ["stick"};

const button1 = document . querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xptext = document.querySelector("#xptext");
const healthtext = document.querySelector("#healthtext");
const goldtext = document.querySelector("#goldtext");
const monsterstats = document.querySelector("#monsterstats");
const monsternametext = document.querySelector("#monstername");
const monsterHealthtext = document.querySelector("#monsterHealth");

// initialize buttons

button1 . onclick = goStore;
button2 .onclick = goCave;
button3 .onclick = fightDragon;

function goStore()
{console.log("going to store.")}

function goCave()
{console.log("going to cave.")}

function fightDragon()
{console.log("Fight dragon.")}


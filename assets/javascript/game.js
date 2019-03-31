

// Work Bank
var words = ["pasta", "pizza", "sushi", "donut", "burger", "cheese", "cookie", "cake", "fruit", "steak", "fish", "chicken", "taco"]
// The Answer
var TheWord = "";
// Array containing the asnwers letters
var WordLetters = [];
// How many blanks there should be
var blank = 0;
// Array of all Guesses
var WrongGuess = [];
// Mix of blanks and Correct letters
var mix = [];
// Place where
var y = document.getElementById("Game");

//Guess Tracker

var totalguesses;

//Start Function

function Start () {

 totalguesses = 10;

TheWord = words[Math.floor(Math.random() * words.length)];

WordLetters = TheWord.split("");

blank = WordLetters.length;

mix = [];

wrongGuesses = [];



for (var i = 0; i < blank; i++) {
   mix.push("_");
}


document.getElementById("Guess-left").innerHTML = totalguesses;

document.getElementById("Word").innerHTML = mix.join(" ");

document.getElementById("Used").innerHTML = WrongGuess.join(" ");

}

//Checks User Input against answer for answer match.

function letters(letter) {


    CorrectLetter = false;

   for ( var i = 0; i < blank; i++) {

   if (WordLetters  [i] === letter) {

     
      CorrectLetter = true;
      mix[i] = letter
      document.getElementById("Word").innerHTML = mix.join(" ");
      

    }}

    if (CorrectLetter = false) {

   
      WrongGuess.push(letter);
   
      
      
         }
}

//Endround function.

function endround() {


   document.getElementById("Guess-left").innerHTML = totalguesses;

  
  document.getElementById("Word").innerHTML = mix.join(" ");


  document.getElementById("Used").innerHTML = wrongGuesses.join(" ");



  if (WordLetters.toString() === mix.toString()) {

   

   alert("You win!");

   
   
   document.getElementById("Wins").innerHTML = wins
   
   
   Start();
 }

 
 else if (totalguesses === 0) {

   

   
   alert("You lose");

  
   document.getElementById("Loss").innerHTML = loss;

   Start();

 }

}


//Code executed to begin.

Start();

document.onkeypress = function(event) {

  
   guesses = String.fromCharCode(event.which).toLowerCase();
 
   letters(guesses);
   totalguesses--;
   document.getElementById("Guess-left").innerHTML = totalguesses;
  
   endround();
 };



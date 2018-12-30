

// Work Bank
var words = ["house", "school", "church", "buisness", "hotel"]
// The Answer
var TheWord = "";
// Array containing the asnwers letters
var WordLetters = [];
// How many blanks there should be
var blank = 0;
// Array of all Guesses
var guesses = [];
// wrong asnwers user has chosen
var WrongGuess = [];
// Mix of blanks and Correct letters
var mix = [];
// Place where
var y = document.getElementById("Game");


var wins = 0;
var loss = 0;
var totalguesses = 9;




function Start () {

totalguesses = 9;

TheWord = words[Math.floor(Math.random() * words.length)];

WordLetters = TheWord.split("");

blank = WordLetters.length;

mix = [];

wrongGuesses = [];



for (var i = 0; i < blank; i++) {
   mix.push("_");
}
console.log(TheWord)
console.log(WordLetters)


console.log(mix)










document.getElementById("Guess-left").innerHTML = totalguesses;


document.getElementById("Word").innerHTML = mix.join(" ");


document.getElementById("Used").innerHTML = WrongGuess.join(" ");

}



function letters(letter) {


   var CorrectLetter = false;

   for ( var i = 0; i < blank; i++) {

   if (TheWord[i] === letter) {

     
      CorrectLetter = true;
    }

 else {

   
   WrongGuess.push(letter);

   
   totalguesses--;
   
      }




}

}

function endround() {


   document.getElementById("Guess-left").innerHTML = totalguesses;

  
  document.getElementById("Word").innerHTML = mix.join(" ");


  document.getElementById("Used").innerHTML = wrongGuesses.join(" ");



  if (WordLetters.toString() === mix.toString()) {

   
   wins++;

   alert("You win!");

   
   document.getElementById("wins").innerHTML = wins;

   
   Start();
 }

 
 else if (totalguesses === 0) {

   
   loss++;

   
   alert("You lose");

  
   document.getElementById("Loss").innerHTML = loss;

   Start();

 }

}






Start();

document.onkeyup = function(event) {

   
   guesses = String.fromCharCode(event.which).toLowerCase();
 
   
   letters(guesses);
 
  
   endround();
 };



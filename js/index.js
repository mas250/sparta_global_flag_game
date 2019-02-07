$(document).ready(function() {


  var answer = "";
  var currentFlag = "";
  var score = "0";
  var timeLeft = 30;
  var wrongSound = new Audio("./sounds/wrong.mp3");
  var newGameSound = new Audio("./sounds/start.mp3");


  var gameTime = setInterval(function(){
    document.getElementById("progressBar").value = 30 - timeLeft;
    timeLeft -= 1;

    if (timeLeft <= 0) {
      clearInterval(gameTime);
    }
    if(timeLeft == 0){
      clearInterval(gameTime);
      alert("time up!");
      alert("Game Over!")
      alert("you scored: " + score + " points!");
      window.location= "intro.html"
    }

  }, 1000);

  var grid =  $(".answer_grid").on("click", function(event){ //create  anwser grid and listen for events

    answer = this.innerHTML;  //clicking on the table submits it as an anwser
    if (flagData[1] == this.innerHTML ){
      //logic for correct anwser

      newGameSound.play();
      score = eval(score + 1);
      $(".score").text("score = " + score);
      clearGrid();
      newGame();
    }

    else {
      //logic for incorrect anwser

      lives = lives - 1;
      $(".lives").text(lives);
      wrongSound.play();
      clearGrid();
      if( lives == 0){
        //all lives lost:
        alert("Game Over!");
        alert("you scored: " + score + " points!");
        window.location= "intro.html";
      }
      else{
      newGame();
      }
    }
  });
  var mast = $(".mast");
  var lives = 3;

function Flag (link, name){
  this.link = link,
  this.name = name,
  this.flagLink = function(){ return this.link}
  this.flagName = function(){ return this.name};
}

let france = new Flag('<img src="images/france.jpg">', "France");

let uk = new Flag('<img src="images/UK.jpg">', "UK");

let spain = new Flag('<img src="images/spain.jpg">', "Spain");

let japan = new Flag('<img src="images/japan.jpg">', "Japan");

let us = new Flag('<img src="images/us.jpg">',"US" );

let jamaica = new Flag('<img src="images/Jamaica.jpg">',"Jamaica" );

let nigeria = new Flag('<img src="images/nigeria.jpg">',"Nigeria" );

let afghanistan = new Flag('<img src="images/afghanistan.jpg">',"Afghanistan" );

let angola = new Flag('<img src="images/Angola.jpg">',"Angola" );

let antigua = new Flag('<img src="images/Antigua.jpg">',"Antigua" );

let argentina = new Flag('<img src="images/Argentina.jpg">',"Argentina" );

let armenia = new Flag('<img src="images/Armenia.jpg">',"Armenia" );

let australia = new Flag('<img src="images/Australia.jpg">',"Australia" );

let austria = new Flag('<img src="images/Austria.jpg">',"Austria" );

let azerbaijan = new Flag('<img src="images/Azerbaijan.jpg">',"Azerbaijan" );

let bahamas = new Flag('<img src="images/bahamas.jpg">',"Bahamas" );

let bahrain = new Flag('<img src="images/bahrain.jpg">',"Bahrain" );

let bangladesh = new Flag('<img src="images/bangladesh.jpg">',"Bangladesh" );

let barbados = new Flag('<img src="images/barbados.jpg">',"Barbados" );

let belarus = new Flag('<img src="images/belarus.jpg">',"Belarus" );

let belgium = new Flag('<img src="images/belgium.jpg">',"Belgium" );

let belize = new Flag('<img src="images/belize.jpg">',"Belize" );

let benin = new Flag('<img src="images/benin.jpg">',"Benin" );

let bhutan = new Flag('<img src="images/bhutan.jpg">',"Bhutan" );

let bolivia = new Flag('<img src="images/bolivia.jpg">',"Bolivia" );

let bosnia = new Flag('<img src="images/bosnia.jpg">',"Bosnia" );

let botswana = new Flag('<img src="images/botswana.jpg">',"Botswana" );

let brazil = new Flag('<img src="images/brazil.jpg">',"Brazil" );

let brunei = new Flag('<img src="images/brunei.jpg">',"Brunei" );

let bulgaria = new Flag('<img src="images/bulgaria.jpg">',"Bulgaria" );

let burkina_faso = new Flag('<img src="images/burkina_faso.jpg">',"Burkina Faso" );

let burma = new Flag('<img src="images/burma.jpg">',"Burma" );

let cambodia = new Flag('<img src="images/cambodia.jpg">',"Cambodia" );

let cameroon = new Flag('<img src="images/cameroon.jpg">',"Cameroon" );

let canada = new Flag('<img src="images/canada.jpg">',"Canada" );

let cape_verde = new Flag('<img src="images/cape_verde.jpg">',"Cape Verde" );

let central_african_republic = new Flag('<img src="images/central_african_republic.jpg">',"Central African Republic" );

let chad = new Flag('<img src="images/chad.jpg">',"Chad" );

let chile = new Flag('<img src="images/chile.jpg">',"Chile" );

let china = new Flag('<img src="images/china.jpg">',"China" );

let colombia = new Flag('<img src="images/colombia.jpg">',"colombia" );

let comoros = new Flag('<img src="images/comoros.jpg">',"Comoros" );

let congo = new Flag('<img src="images/congo.jpg">',"Congo" );

let cuba = new Flag('<img src="images/cuba.jpg">',"Cuba" );

let cyprus = new Flag('<img src="images/cyprus.jpg">',"Cyprus" );

let ivory_coast = new Flag('<img src="images/ivory_coast.jpg">',"Ivory Coast" );

// let  = new Flag('<img src="images/belize.jpg">',"Belize" );

var allFlags = [uk, spain, japan, france, us, jamaica, nigeria, afghanistan, angola, antigua, argentina, armenia, australia, austria, azerbaijan, bahamas, bahrain, bangladesh, barbados, belarus, belgium, belize, benin, bhutan, bolivia, bosnia, botswana, brazil, brunei, bulgaria, burkina_faso, burma, cambodia, cameroon, canada, cape_verde, central_african_republic, chad, chile, china, colombia, comoros, congo, cuba, cyprus, ivory_coast];


  function getFlag(allFlags){
    //choose and return random flag object
    var item = allFlags[Math.floor(Math.random()*allFlags.length)];
    flagData = [item.flagLink(), item.flagName()];
    return flagData;
  }

  function shuffle(a) {
    //return a shuffled array
    var random_element, x, count;
    for (count = a.length - 1; count > 0; count--) {
      random_element = Math.floor(Math.random() * (count + 1));
      x = a[count];
      a[count] = a[random_element];
      a[random_element] = x;
    }
    return a;
  }

  function clearGrid(){
    //clear anwser grid
    for (var i = 0; i < grid.length; i++) {
      grid[i].innerHTML = "";
    }
  }

  function newGame(){
    //this function is called whenever a new question or turn should take place
    $(".lives").text("lives:" + lives);
    $(".score").text("score = " + score);
    shuffle(allFlags);
    shuffle(grid);

    for (var count = 0; count < grid.length -1; count++) { //populate anwser grid
      grid[count].innerHTML = allFlags[count].name;
    }

    getFlag(allFlags);

    mast[0].innerHTML = flagData[0];

    for (var i = 0; i < grid.length; i++) { //go through anwser array

      if (grid[i].innerHTML == ""){
        grid[i].innerHTML = flagData[1];

      }
    }
  }

newGame()


});

$(document).ready(function() {
  var answer = "";
  var currentFlag = "";
  var grid =  $(".answer_grid").on("click", function(event){ //create  anwser grid and listen for events

    answer = this.innerHTML;  //clicking on the table submits it as an anwser
    if (flagData[1] == this.innerHTML ){
      //logic for correct anwser
      alert("correct!");
      clearGrid();
      newGame();
    }

    else {
      //logic for incorrect anwser
      lives = lives - 1;
      alert("wrong!");
      clearGrid();
      if( lives != 0){

        newGame();
      }
      //else condition
      //all lives lost: clear screen and display loosing message
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

let france = new Flag('<img src="images/france.jpg" >', "France");

let uk = new Flag('<img src="images/UK.jpg" >', "UK");

let spain = new Flag('<img src="images/spain.jpg" >', "Spain");

let japan = new Flag('<img src="images/japan.jpg" >', "Japan");

let us = new Flag('<img src="images/us.jpg" >',"US" );

let jamaica = new Flag('<img src="images/Jamaica.jpg" >',"Jamaica" );

let nigeria = new Flag('<img src="images/nigeria.jpg" >',"Nigeria" );

let afghanistan = new Flag('<img src="images/afghanistan.jpg" >',"Afghanistan" );

let angola = new Flag('<img src="images/Angola.jpg" >',"Angola" );

let antigua = new Flag('<img src="images/Antigua.jpg" >',"Antigua" );

let argentina = new Flag('<img src="images/Argentina.jpg" >',"Argentina" );

let armenia = new Flag('<img src="images/Armenia.jpg" >',"Armenia" );

let australia = new Flag('<img src="images/Australia.jpg" >',"Australia" );

let austria = new Flag('<img src="images/Austria.jpg" >',"Austria" );

let azerbaijan = new Flag('<img src="images/Azerbaijan.jpg" >',"Azerbaijan" );

var allFlags = [uk, spain, japan, france, us, jamaica, nigeria, afghanistan, angola, antigua, argentina, armenia, australia, austria, azerbaijan];


  function getFlag(allFlags){
    //choose and return random flag object
    var item = allFlags[Math.floor(Math.random()*allFlags.length)];
    // currentFlag = item.name;
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
    // console.log(lives);
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

  function hardGame(){
    //this function is called whenever a new question or turn should take place
    // console.log(lives);
    shuffle(allFlags);
    shuffle(grid);

    for (var count = 0; count < grid.length -1; count++) { //populate anwser grid
      grid[count].innerHTML = allFlags[count].flagLink();
    }

    getFlag(allFlags);

    mast[0].innerHTML = flagData[1];

    for (var i = 0; i < grid.length; i++) { //go through anwser array

      if (grid[i].innerHTML == ""){
        grid[i].innerHTML = flagData[0];

      }
    }
  }
newGame()
  // hardGame();


});

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
 // console.log(france);

let uk = new Flag('<img src="images/UK.jpg" >', "UK");

let spain = new Flag('<img src="images/spain.jpg" >', "Spain");

let japan = new Flag('<img src="images/japan.jpg" >', "Japan");

let us = new Flag('<img src="images/us.jpg" >',"US" )
var allFlags = [uk, spain, japan, france, us];

for (var i = 0; i < allFlags.length; i++) {
  // console.log(allFlags[i].flagName());
  // console.log(allFlags[i].shout());
}
  // var allFlags = [
  //
  // {link:'<img src="images/UK.jpg" >',         name: "UK"},
  // {link:'<img src="images/spain.jpg" >',       name: "Spain" },
  // {link:'<img src="images/japan.jpg" >',      name: "Japan"},
  // {link:'<img src="images/us.jpg" >',          name: "US"},
  // {link:'<img src="images/france.jpg" >',      name: "France"},
  // {link:'<img src="images/jamaica.jpg" >',     name: "Jamaica"},
  // {link:'<img src="images/nigeria.jpg" >',     name: "Nigeria"},
  // {link:'<img src="images/afghanistan.jpg" >', name: "Afghanistan"},
  // {link:'<img src="images/Angola.jpg" >',      name: "Angola"},
  // {link:'<img src="images/Antigua.jpg" >',     name: "Antigua"},
  // {link:'<img src="images/argentina.jpg" >',   name: "Argentina"},
  // {link:'<img src="images/Armenia.jpg" >',     name: "Armenia"},
  // {link:'<img src="images/Australia.jpg" >',   name: "Australia"},
  // {link:'<img src="images/Austria.jpg" >',     name: "Austria"},
  // {link:'<img src="images/Azerbaijan.jpg" >',  name: "Azerbaijan"},
  //
  //
  // ];

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
    console.log(lives);
    shuffle(allFlags);
    shuffle(grid);

    for (var count = 0; count < grid.length -1; count++) { //populate anwser grid
      grid[count].innerHTML = allFlags[count].name;
    }


    getFlag(allFlags);

    mast[0].innerHTML = flagData[0];
    // mast[0].innerHTML = flagData[0];

    for (var i = 0; i < grid.length; i++) { //go through anwser array

      if (grid[i].innerHTML == ""){
        grid[i].innerHTML = flagData[1];
        console.log(grid[i]);
        // grid[i].innerHTML = grid[i].flagName().innerHTML;
      }

    }
    // var myArray = [2,3,4,4];

console.log(grid.length);
    for(var i = 0; i <= grid.length; i++) {
          for(var j = i; j <= grid.length; j++) {

              if(i != j && grid[i] == grid[j]) {

                  // console.log(grid[i]);
              }
          }
      }

  }

  newGame();


});

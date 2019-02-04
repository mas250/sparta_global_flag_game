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

  var allFlags = [

  {link :'<img src="images/UK.jpg" >', name: "UK"},
  {link:'<img src="images/spain.jpg" >', name : "Spain" },
  {link: '<img src="images/japan.jpg" >' ,name: "Japan"},
  {link:'<img src="images/us.jpg" >', name: "US"},
  {link:'<img src="images/france.jpg" >', name : "France"},
  {link:'<img src="images/jamaica.jpg" >', name : "Jamaica"},
  {link:'<img src="images/nigeria.jpg" >', name : "Nigeria"}

  ];


  function getFlag(allFlags){
    //choose and return random flag object
    var item = allFlags[Math.floor(Math.random()*allFlags.length)];
    currentFlag = item.name;
    flagData = [item.link, currentFlag]
    return flagData;
  }

  function getName(allFlags){
    //choose and return just the name data from a flag object
    var item = allFlags[Math.floor(Math.random()*allFlags.length)];
    flagName = item.name;
    return flagName;
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


    for (var i = 0; i < grid.length; i++) { //go through anwser array
      if (grid[i].innerHTML == flagData[1]){
        grid[i].innerHTML = getName(allFlags);
      }

      if (grid[i].innerHTML == ""){
        grid[i].innerHTML = flagData[1];
      }
      // console.log(flagName);
    }
  }

  newGame();


});

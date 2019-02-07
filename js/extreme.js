
 $("td.map").on("click", function(){
  var xPosition = event.clientX;  //capture coordinates from the map
  var yPosition = event.clientY;

  console.log(xPosition + " " + yPosition);
  //check bounds of country and display corresponding map
  if (((xPosition > 84) && (xPosition < 121)) && ((yPosition > 59) && (yPosition < 159))  ) {
    mast[0].innerHTML = '<img src="images/UK.jpg">'
  }
  if (((xPosition > 34) && (xPosition < 64)) && ((yPosition > 94) && (yPosition < 131))  ) {
    mast[0].innerHTML = '<img src="images/ireland.jpg">'
  }
  if (((xPosition > 12) && (xPosition < 76)) && ((yPosition > 281) && (yPosition < 357))  ) {
    mast[0].innerHTML = '<img src="images/spain.jpg">'
  }
  if (((xPosition > 63) && (xPosition < 169)) && ((yPosition > 178) && (yPosition < 297))  ) {
    mast[0].innerHTML = '<img src="images/france.jpg">'
  }

});
var mast = $("td.flag")

function Flag (link, name){
  this.link = link,
  this.name = name,
  this.flagLink = function(){ return this.link}
  this.flagName = function(){ return this.name};
}
let uk = new Flag('<img src="images/UK.jpg">', "UK", );
let spain = new Flag('<img src="images/spain.jpg">', "Spain");
let ireland = new Flag('<img src="images/ireland.jpg">', "Ireland");
let france = new Flag('<img src="images/france.jpg">', "France");


$("button.back").on("click", function(){
  window.location = "intro.html";
})

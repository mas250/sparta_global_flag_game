$(document).ready(function() {
  console.log("linked");

var data = [ "UK", "Japan", "Spain", "US"];

  var grid =  $(".answer_grid").on("click", function(event){
      console.log(this.innerHTML);


    });
    for (var i = 0; i < grid.length; i++) {
      grid[i].innerHTML = data[i];
    }

});

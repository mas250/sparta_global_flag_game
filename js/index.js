$(document).ready(function() {
  console.log("linked");

var data = [ "UK", "Japan", "Spain", "US"];

  var grid =  $(".answer_grid").on("click", function(event){
      console.log(this.innerHTML);


    });


    function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
shuffle(grid);

for (var i = 0; i < grid.length; i++) {
  grid[i].innerHTML = data[i];
}
});

$(document).ready(function() {
  console.log("linked");

  var data = [ "UK", "Japan", "Spain", "US"];
var answer = "";
  var grid =  $(".answer_grid").on("click", function(event){

    console.log(this.innerHTML);
    answer = this.innerHTML;
    console.log("anwser:", answer);
    if (answer == "UK"){
      alert("progress");
    }
    return answer;
  });

  var mast = $(".mast");
  var allFlags = ['<img src="images/UK.jpg" >','<img src="images/spain.jpg" >','<img src="images/japan.jpg" >', '<img src="images/us.jpg" >'];

  var allFlags2 = [ ['<img src="images/UK.jpg" >', "UK"],
                    ['<img src="images/spain.jpg" >',"Spain" ],
                    ['<img src="images/japan.jpg" >' ,"Japan"],
                    ['<img src="images/us.jpg" >', "US"] ]


  function getFlag(allFlags2){
    var item = allFlags2[Math.floor(Math.random()*allFlags.length)];
    // var newFlag = item //'<img src="images/UK.jpg" >';
    // return newFlag;
    return item;
  }

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

  mast[0].innerHTML = getFlag(allFlags);


});

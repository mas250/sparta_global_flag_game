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


  var allFlags = [ {link :'<img src="images/UK.jpg" >',
                    name: "UK"},
                    { link:'<img src="images/spain.jpg" >',
                    name : "Spain" },
                    {link: '<img src="images/japan.jpg" >' ,
                    name: "Japan"},
                    {link:'<img src="images/us.jpg" >',
                    name: "US"} ];




  function getFlag(allFlags){
    var item = allFlags[Math.floor(Math.random()*allFlags.length)].link;
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
    grid[i].innerHTML = allFlags[i].name;
  }

  mast[0].innerHTML = getFlag(allFlags);


});

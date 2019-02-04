$(document).ready(function() {
  console.log("linked");


  // var data = [ "UK", "Japan", "Spain", "US"];
  var answer = "";
  var currentFlag = "";
  var grid =  $(".answer_grid").on("click", function(event){ //create  anwser grid

    // console.log(this.innerHTML);
    answer = this.innerHTML;
    if (flagData[1] == this.innerHTML ){
      alert("correct!");
    }


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
    var item = allFlags[Math.floor(Math.random()*allFlags.length)];
    currentFlag = item.name;
    flagData = [item.link, currentFlag]
    return flagData;
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

  for (var count = 0; count < grid.length -1; count++) { //populate anwser grid
    grid[count].innerHTML = allFlags[count].name;
    console.log(grid[count].innerHTML);
  }
//   if (grid[0].innerHTML == ""){
//  grid.append("yep");
// }

getFlag(allFlags);
// grid.append(flagData.name);
// $("#right").innerHTML = "yup";
  mast[0].innerHTML = flagData[0];


// console.log(grid[0,]);
  // console.log(flagData[1]);
  // for (var i = 0; i < grid.length; i++) {
  //   if (grid[i].innerHTML == "") {
  //     grid[i].innerHTML ==flagData[1];
  //   }
  // }
// grid[3].innerHTML = flagData[1];
// console.log(grid);
for (var i = 0; i < grid.length; i++) {
  if (grid[i].innerHTML == ""){
    grid[i].innerHTML = "woo";
  }
}

});

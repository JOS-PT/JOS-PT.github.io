function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

    var y = document.getElementById("wrapper");
    if(y.className === "master-content"){
      y.className += " wrap"
    }else{
      y.className = "master-content"
    }
  } 
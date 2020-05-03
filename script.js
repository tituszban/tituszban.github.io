// Side navigation
function open_navigation() {
  var x = document.getElementById("sidebar");
  x.style.width = "100%";
  x.style.fontSize = "40px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}
function close_navigation() {
  document.getElementById("sidebar").style.display = "none";
}

// Tabs
function openGame(evt, gameName) {
  var i;
  var x = document.getElementsByClassName("game");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(gameName).style.display = "block";
  if(evt !== null){
    evt.currentTarget.className += " w3-dark-grey";
  }
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

// Accordions
function myAccFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

$(document).ready(() => {
    console.log("Ready");
    $("a.slideshow-button").click(function() {
        var increment = $(this).hasClass('plus') ? 1 : -1;
        var $imgs = $(this).siblings("img");
        
        var enabled = 0;
        for(i = 0; i < $imgs.length; i++){
            if($imgs.eq(i).is(":visible")){
                enabled = i;
            }
        }
        console.log(enabled);

        var nextEnabled = (enabled + $imgs.length + increment) % $imgs.length;
        for(i = 0; i < $imgs.length; i++){
            if(i === nextEnabled) {
                $imgs.eq(i).show();
            }
            else{
                $imgs.eq(i).hide();
            }
        }
    });

    var $slideshows = $(".slideshow");
    for(i = 0; i < $slideshows.length; i++){
        console.log(i);
        var $slides = $slideshows.eq(i).find(".slide");
        for(j = 0; j < $slides.length; j++){
            console.log(j);
            if(j === 0){
                $slides.eq(j).show();
            }
            else{
                $slides.eq(j).hide();
            }
        }
    }

    $(".spoiler").click(function() {
      $(this).text($(this).attr("spoiler"));
      $(this).removeClass("spoiler");
    });
});

openGame(null, "Elevator");
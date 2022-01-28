document.addEventListener("DOMContentLoaded", function(event) { 
  console.log("Lock and loaded!")

let blackitem = document.getElementsByClassName("blacknav_item");
let blackul = document.getElementsByClassName("blacknav_ul");

for (let i = 0; i < blackitem.length; i++) {
  blackitem[i+1].addEventListener("click", function(){ 
    listopen(i)
    
  })  
};
function listopen(x) {
  for (let i = 0; i < blackul.length; i++) {
    if (x == i) {
      blackitem[x+1].classList.toggle("blacknav_active_title");
      blackul[x].classList.toggle("blacknav_active");
      console.log("I'm If");

    } else {
      blackul[i].classList.remove("blacknav_active");
      blackitem[i+1].classList.remove("blacknav_active_title");
      console.log("I'm else");
    }
  
  }
}
});

let blackmobile = document.getElementsByClassName("blacknav_mobile")
let blackbars = document.getElementById("blacknav_bars")

  blackbars.addEventListener("click", function(){ 
    menu()
    }) ;


function menu() {
  console.log("pp");
  blackmobile[0].classList.toggle("blacknav_active");
  console.log("poopoo");
  
};






// This is the function used for the faction logos changing images, currently not active on the website
/*
  let background = document.getElementById("main_faction_container");
  let factionlogo = document.getElementsByClassName("faction_image");
  let alllogo = document.querySelectorAll("faction_image");


  for (let i = 0; i < factionlogo.length; i++) {
    factionlogo[i].addEventListener("mouseover", function() {
      for(i2 = 0; i2 < factionlogo.length; i2++) {
        factionlogo[i2].classList.add("faction_opacity");
      }
      this.classList.remove("faction_opacity");
      if(i == 0) {
        background.style.backgroundImage = 'url("/img/uefbg.jpg")';
      } else if(i == 1) {
        background.style.backgroundImage = 'url("/img/cybranbg.jpg")';
      } else if(i == 2) {
        background.style.backgroundImage = 'url("/img/aeonbg.jpg")';
      } else if(i == 3) {  
        background.style.backgroundImage = 'url("/img/seraphimbg.jpg")';
      }
    });
    factionlogo[i].addEventListener("mouseleave", function() {
    revertbackground()
    });
  }


  function revertbackground() {
    background.style.backgroundImage = 'url("/img/faction.jpg")';
    for (i = 0; i < factionlogo.length; i++) {
      factionlogo[i].classList.remove("faction_opacity")
    }
    };
    */
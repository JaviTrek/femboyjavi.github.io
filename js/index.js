document.addEventListener("DOMContentLoaded", function(event) { 
  console.log("Lock and loaded!");

//JS for the navbar menus to open on hover and close when leaving
let navlist = document.getElementsByClassName("nav_list");
let navabsolute = document.getElementsByClassName("nav_absolute");

for (let i = 0; i < navlist.length; i++) {
  navlist[i].addEventListener("mouseover", function(){ 
    navabsolute[i].classList.add("blacknav_active");
  }); 

  navlist[i].addEventListener("mouseout", function(){ 
    for (x = 0; x < navabsolute.length; x++) {
      navabsolute[x].classList.remove("blacknav_active");  
    }    
  });
}

//JS for mobile navbar, when clicking on stuff like GAME and it opens the menu
let blackitem = document.getElementsByClassName("blacknav_item");
let blackul = document.getElementsByClassName("blacknav_ul");
let blackcaret = document.getElementsByClassName("blacknav_caret");

for (let i = 0; i < blackitem.length; i++) {
  blackitem[i].addEventListener("click", function(){ 
    listopen(i);
  });  
}
function listopen(x) {
  for (let i = 0; i < blackul.length; i++) {
    if (x == i) {
      blackul[x].classList.toggle("blacknav_active");
      blackitem[x].classList.toggle("blacknav_caret");

    } else {
      blackul[i].classList.remove("blacknav_active");
      blackitem[i].classList.remove("blacknav_caret");

    }
  
  }
}
});

//JS for the 3 white bars in the mobile nav bar that open said nav bar
let blackmobile = document.getElementsByClassName("blacknav_mobile");
let blackbars = document.getElementById("blacknav_bars");
let blackbg = document.getElementById("blacknav_bg");
  blackbars.addEventListener("click", function(){ 
    blackmobile[0].classList.toggle("blacknav_mobile_active");
    blackbars.classList.toggle("blacknav_change");
    blackbg.classList.toggle("blacknav_bg_active");
    
    }) ;








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
let background = document.getElementById("main_faction_container");
let factionlogo = document.getElementsByClassName("faction_image");
// let alllogo = document.querySelectorAll("faction_image");


for (let i = 0; i < factionlogo.length; i++) {
  factionlogo[i].addEventListener("mouseover", function() {
    //changebackground(i)
    console.log(i);
    for(let i2 = 0; i2 < factionlogo.length; i2++) {
      factionlogo[i2].classList.add("faction_opacity");
    }
    this.classList.remove("faction_opacity");
    if(i === 0) {
      background.style.backgroundImage = 'url("/img/uefbg.jpg")';
    } else if(i === 1) {
      background.style.backgroundImage = 'url("/img/cybranbg.jpg")';
    } else if(i === 2) {
      background.style.backgroundImage = 'url("/img/aeonbg.jpg")';
    } else if(i === 3) {
      background.style.backgroundImage = 'url("/img/seraphimbg.jpg")';
    }
  });
  factionlogo[i].addEventListener("mouseleave", function() {
  revertbackground()
  });
}


function revertbackground() {
  background.style.backgroundImage = 'url("/img/faction.jpg")';
  for (let i = 0; i < factionlogo.length; i++) {
    factionlogo[i].classList.remove("faction_opacity")
  }
  }


/*
  //Unit Database JS below

//Copied from W3, seems a bit bad considering they use var? Definitely can cleanup their mess

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("unit_filter");
  
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    } 
  }
  element.className = arr1.join(" ");
}


// Below is my button filter, took great inspiration from the W3 one.

let btn = document.getElementsByClassName("btn");
let act = document.getElementsByClassName("active");
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    act[0].classList.remove("active");
    this.classList.add("active");
  });

}

// Pop up when clicking images (Currently not working on it, but this was how I was going
// to make the unit statistics appear)


let unit = document.getElementsByClassName("unit_image");
for (i = 0; i <= unit.length; i++) {
  unit[i].addEventListener("click", myFunction); // Console logs an error here despite it working? "Uncaught TypeError: Cannot read properties of undefined (reading 'addEventListener') at app.js:58"

}

function myFunction() {
  console.log(unit);
  location.replace("/html/main/UEF.html");
}

*/
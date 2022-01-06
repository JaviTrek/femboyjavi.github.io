"use strict";

var background = document.getElementById("main_home_container");
var factionlogo = document.getElementsByClassName("home_image");
var alllogo = document.querySelectorAll("home_image");

var _loop = function _loop(_i) {
  factionlogo[_i].addEventListener("mouseenter", function () {
    //changebackground(i)
    console.log(_i);

    for (i2 = 0; i2 < factionlogo.length; i2++) {
      factionlogo[i2].classList.add("home_opacity");
    }

    this.classList.remove("home_opacity");

    if (_i == 0) {
      background.style.backgroundImage = 'url("/Img/uefbg.jpg")';
    } else if (_i == 1) {
      background.style.backgroundImage = 'url("/Img/cybranbg.jpg")';
    } else if (_i == 2) {
      background.style.backgroundImage = 'url("/Img/aeonbg.jpg")';
    } else if (_i == 3) {
      background.style.backgroundImage = 'url("/Img/seraphimbg.jpg")';
    }
  });

  factionlogo[_i].addEventListener("mouseleave", function () {
    revertbackground();
  });
};

for (var _i = 0; _i < factionlogo.length; _i++) {
  _loop(_i);
}
/*function changebackground(logo) {
  for (i = 0; i < logo; i++) {
    console.log(i);
    factionlogo[i].classList.add("home_opacity");
     
  }
  if(logo == 0) {
    background.style.backgroundImage = 'url("/Img/uefbg.png")';
  } else if(logo == 1) {
    background.style.backgroundImage = 'url("/Img/cybranbg.png")';
  } else if(logo == 2) {
    background.style.backgroundImage = 'url("/Img/aeonbg.png")';
  } else if(logo == 3) {  
    background.style.backgroundImage = 'url("/Img/seraphimbg.png")';
  }
}; */


function revertbackground() {
  background.style.backgroundImage = 'url("/Img/home.png")';

  for (i = 0; i < factionlogo.length; i++) {
    factionlogo[i].classList.remove("home_opacity");
  }
}

; //Unit Database JS below
//Copied from W3, seems a bit bad considering they use var? Definitely can cleanup their mess

filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("unit_filter");
  if (c == "all") c = ""; // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
} // Show filtered elements


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
} // Hide elements that are not selected


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
} // Below is my button filter, took great inspiration from the W3 one.


var btn = document.getElementsByClassName("btn");
var act = document.getElementsByClassName("active");

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    act[0].classList.remove("active");
    this.classList.add("active");
  });
} // Pop up when clicking images (Currently not working on it, but this was how I was going
// to make the unit statistics appear)


var unit = document.getElementsByClassName("unit_image");

for (i = 0; i <= unit.length; i++) {
  unit[i].addEventListener("click", myFunction); // Console logs an error here despite it working? "Uncaught TypeError: Cannot read properties of undefined (reading 'addEventListener') at app.js:58"
}

function myFunction() {
  console.log(unit);
  location.replace("/HTML/UEFMain/UEFMain.html");
}
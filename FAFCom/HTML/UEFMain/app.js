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

// Pop up when clicking images

let unit = document.getElementsByClassName("unit_image");
for (i = 0; i <= unit.length; i++) {
  unit[i].addEventListener("click", myFunction); // Console logs an error here despite it working? "Uncaught TypeError: Cannot read properties of undefined (reading 'addEventListener') at app.js:58"

}

function myFunction() {
  console.log(unit);
  location.replace("/HTML/UEFMain/UEFMain.html");
}

document.addEventListener("DOMContentLoaded", function(event) { 
  console.log("Lock and loaded!");

//JS for the navbar menus to open on hover and close when leaving
let navlist = document.getElementsByClassName("nav_list");
let navabsolute = document.getElementsByClassName("nav_absolute");

for (let i = 0; i < navlist.length; i++) {
  navlist[i].addEventListener("mouseover", function(){ 
    navabsolute[i].classList.add("mobilenav_active");
  }); 

  navlist[i].addEventListener("mouseout", function(){ 
    for (x = 0; x < navabsolute.length; x++) {
      navabsolute[x].classList.remove("mobilenav_active");  
    }    
  });
}

//JS for mobile navbar, when clicking on stuff like GAME and it opens the menu
let blackitem = document.getElementsByClassName("mobilenav_item");
let blackul = document.getElementsByClassName("mobilenav_ul");
let blackcaret = document.getElementsByClassName("mobilenav_caret");

for (let i = 0; i < blackitem.length; i++) {
  blackitem[i].addEventListener("click", function(){ 
    listopen(i);
  });  
}
function listopen(x) {
  for (let i = 0; i < blackul.length; i++) {
    if (x == i) {
      blackul[x].classList.toggle("mobilenav_active");
      blackitem[x].classList.toggle("mobilenav_caret");

    } else {
      blackul[i].classList.remove("mobilenav_active");
      blackitem[i].classList.remove("mobilenav_caret");

    }
  
  }
}


//JS for the 3 white bars in the mobile nav bar that open said nav bar
let blackmobile = document.getElementsByClassName("mobilenav_mobile");
let blackbars = document.getElementById("mobilenav_bars");
let blackbg = document.getElementById("mobilenav_bg");
  blackbars.addEventListener("click", function(){ 
    blackmobile[0].classList.toggle("mobilenav_mobile_active");
    blackbars.classList.toggle("mobilenav_change");
    blackbg.classList.toggle("mobilenav_bg_active");
    }) ;

  
    //onscroll!
    // https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671
const scrollElements = document.querySelectorAll(".scrollFade");


const elementInView = (el = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      el.classList.add("scrolled");
    } else {
      el.classList.remove("scrolled");
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
  console.log("You scrolled!");
});


// Function so SplitImages will become black when hovering over text

let splitAbsoluteText = document.getElementsByClassName("splitAbsoluteText");
let splitText = document.getElementsByClassName("splitText");
let splitImage = document.getElementsByClassName("splitImage");


for (let i = 0; i < splitAbsoluteText.length; i++) {
  splitAbsoluteText[i].addEventListener("mouseover", () => {
    splitImage[i].style.opacity = "0.5";
    splitText[i].style.opacity = "1";
    splitAbsoluteText[i].style.top = "50%";
  });
  splitImage[i].addEventListener("mouseover", () => {
    splitText[i].style.opacity = "1";
    splitImage[i].style.opacity = "0.5";
    splitAbsoluteText[i].style.top = "50%";
  });
  splitAbsoluteText[i].addEventListener("mouseout", () => {
    splitText[i].style.opacity = "0";
    splitImage[i].style.opacity = "1";
    splitAbsoluteText[i].style.top = "62%";
  });
  splitImage[i].addEventListener("mouseout", () => {
    splitText[i].style.opacity = "0";
    splitImage[i].style.opacity = "1";
    splitAbsoluteText[i].style.top = "62%";
  });
}


});



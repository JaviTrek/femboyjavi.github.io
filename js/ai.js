document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Lock and loaded!");

  //JS for the navbar menus to open on hover and close when leaving
  let navlist = document.getElementsByClassName("nav_list");
  let navabsolute = document.getElementsByClassName("nav_absolute");

  for (let i = 0; i < navlist.length; i++) {
    navlist[i].addEventListener("mouseover", function () {
      navabsolute[i].classList.add("mobilenav_active");
    });

    navlist[i].addEventListener("mouseout", function () {
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
    blackitem[i].addEventListener("click", function () {
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
  blackbars.addEventListener("click", function () {
    blackmobile[0].classList.toggle("mobilenav_mobile_active");
    blackbars.classList.toggle("mobilenav_change");
    blackbg.classList.toggle("mobilenav_bg_active");
  });

  // JS for stuff appearing on scroll, not sure exactly how it works, would love if someone
  // can explain it for me.

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





  //function to make highligthed text change colors/pulsate
  let highlightText = document.getElementsByClassName("highlightText");
  let x = 0;
  setInterval(highlightPulse, 2000);

  function highlightPulse() {

    if (x < 1) {
      x++;
      for (let i = 0; i < highlightText.length; i++) {

        highlightText[i].style.transition = "1s";
        highlightText[i].style.color = "var(--color-white";
      }
    } else {
      x--;
      for (let i = 0; i < highlightText.length; i++) {
        highlightText[i].style.color = "var(--color-gold)";
      }

    }
  }


  //Function so multipleContainers work well and change tabs
  let multipleItem = document.getElementsByClassName("multipleItem");
  let multipleImage = document.getElementsByClassName("multipleImage");
  let multipleAbsolute = document.getElementsByClassName("multipleAbsolute");
  let multipleImageActive = document.getElementsByClassName("multipleImageActive");


  for (let i = 0; i < multipleItem.length; i++) {
    multipleItem[i].addEventListener("click", function () {
      for (let o = 0; o < multipleImage.length; o++) {
        multipleImage[o].classList.remove("multipleImageActive");
        multipleAbsolute[o].classList.remove("multipleImageActive");
        multipleItem[o].classList.remove("multipleItemActive");
      }
      multipleImage[i].classList.add("multipleImageActive");
      multipleAbsolute[i].classList.add("multipleImageActive");
      multipleItem[i].classList.add("multipleItemActive");
      setTimeout(fadeout, 100);
      function fadeout() {

      }

    });
  }


});







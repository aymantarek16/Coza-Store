// Start Java Script

// Form validation
const activeReg = () => {
  if ( username.classList.contains("success") && email.classList.contains("success") && psw.classList.contains("success") && pswrepeat.classList.contains("success")) {
      regbtn.removeAttribute("disabled")
  } else {
      regbtn.setAttribute("disabled", "disabled")
  }
}

username.addEventListener("keyup", (eo) => {
  username.classList.add("error")
  usermessage.style.display = "block"


  if (username.value.length  > 3) {
      username.classList.add("success")
      usermessage.style.display = "none"
      username.nextElementSibling.style.opacity = "1"
  } else {
      username.classList.remove("success")
      usermessage.style.display = "block"
      username.nextElementSibling.style.opacity = "0"
  }

  activeReg()
})

email.addEventListener("keyup", (eo) => {
  email.classList.add("error")
  emailmessage.style.display = "block"
  const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  if (regEmail.test(email.value)) {
      email.classList.add("success")
      emailmessage.style.display = "none"
      email.nextElementSibling.style.opacity = "1"
  } else {
      email.classList.remove("success")
      emailmessage.style.display = "block"
      email.nextElementSibling.style.opacity = "0"
  }

  activeReg()
})

psw.addEventListener("keyup", (eo) => {
  psw.classList.add("error")
  pswmessage.style.display = "block"
  const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (regPassword.test(psw.value)) {
      psw.classList.add("success")
      pswmessage.style.display = "none"
      psw.nextElementSibling.style.opacity = "1"
  } else {
      psw.classList.remove("success")
      pswmessage.style.display = "block"
      psw.nextElementSibling.style.opacity = "0"
  }

  activeReg()
})

pswrepeat.addEventListener("keyup", (eo) => {
  pswrepeat.classList.add("error")
  repeatmessage.style.display = "block"

  if (pswrepeat.value    ===  psw.value ) {
      pswrepeat.classList.add("success")
      repeatmessage.style.display = "none"
      pswrepeat.nextElementSibling.style.opacity = "1"
  } else {
      pswrepeat.classList.remove("success")
      repeatmessage.style.display = "block"
      pswrepeat.nextElementSibling.style.opacity = "0"
  }

  activeReg()
})


// zoom effect
let parent_of_form = document.getElementById("parent_of_form")
let form = document.getElementsByTagName("form")[0]

SignUp.addEventListener("click", (eo) => {
  parent_of_form.style.display = "flex"


  setTimeout(() => {
      form.style.transform = "scale(1.1)"
  }, 100);
})

closeit.addEventListener("click", (eo) => {

  form.style.transform = "scale(0)"


  setTimeout(() => {
    parent_of_form.style.display = "none"

}, 400);

 
})


// Close Search Input by "esc" Button on Keyboard
let closeicon = document.getElementById("closeicon");
let secbox = document.getElementById("secbox");

closeicon.addEventListener("click", close());

function close() {
  secbox.style.display = "none";
}
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27 || e.keyCode == 36) {
    close();
  }
});


// End Java Script




// Start Jquery
  // Loading Page Befor Load Main Page
  $(window).on("load", function () {
    $(".loader").fadeOut("2000");
    $(".content").fadeIn("2000");
  });

$(document).ready(function () {
  // Change BG-NavBar On Scroll
  $(window).scroll(() => {
    let scroll_top = $(window).scrollTop();
    if (scroll_top > 10) {
      $(".navbar").addClass("navbar2");
    } else {
      $(".navbar").removeClass("navbar2").fadeIn("navbar");
    }
  });

  $(window).scroll(() => {
    let scroll_top = $(window).scrollTop();
    if (scroll_top > 10) {
      $(".navber_features").addClass("navbar2");
    } else {
      $(".navber_features").removeClass("navbar2").fadeIn("navber_features");
    }
  });

  // Change Scroll Up On Scroll
  $(window).scroll(function () {
    let scroll_top = $(window).scrollTop();
    if (scroll_top > 200) {
      $("#ScrollUp").fadeIn();
    } else {
      $("#ScrollUp").fadeOut();
    }
  });

  // move Scroll Up to scrollTop: 0
  $(".ScrollUp").click(function () {
    $("body , html").animate({ scrollTop: 0 }, 10);
  });

  // Open input of search
  $(".navbar .icons .fa-search").click(function () {
    $(".navbar .secbox").fadeIn(10);
    $(".navbar .secbox").animate({ top: 0 });
  });

  // Close input of search
  $(".navbar .secbox .boxsearch i").click(function () {
    $(".navbar .secbox").animate({ top: -800 });
    $(".navbar .secbox").fadeOut(10);
  });

  // Create limit number of Search input  When Type on it
  $(".navbar .secbox .boxsearch input").keyup(function (e) {
    if (e.target.value.length >= 10) {
      e.target.value = e.target.value.substr(0, 10);
    }
  });

  // Open Header Card
  $(".fa-shopping-cart").click(function () {
    $(".sec_headercard").animate({ right: "0" }, 10).show();
  });

  // Close Header Card
  $(".closeheadercard").click(function () {
    $(".sec_headercard").animate({ right: "-400" }, 10).fadeOut();
  });

  // Filter Image in Products List
  $(".product ol li").click(function () {
    let id = $(this).attr("id");
    if (id === "all") {
      $(".product .items").show("500");
    } else {
      $(".product .items").not("." + id).hide("400");
      $(".product .items").filter("." + id).show("500");
    }
  });

  // add active class on selected item in Products List
  $(".product ol li").on(" click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  // Put Limit For input word
  $(".footer .item .input1").keyup(function (e) {
    if (e.target.value.length >= 24) {
      e.target.value = e.target.value.substr(0, 24);
    }
  });

  // Change Text In the button on footer to Done !
  $(".footer .item .subscribe").click(function () {
    $(this).text("Done !");
    $(this).css("transform", " rotateX(360deg)");
  });
});
// End Jquery

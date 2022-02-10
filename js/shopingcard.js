// Start Java Script

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

// CountUp1
let plus = document.getElementById("plus");

plus.addEventListener("click", function () {
  let counter1 = document.getElementById("one").innerHTML;

  counter1++;

  document.getElementById("one").innerText = counter1;
  updateTotalPrice1();
  updatecardTotal();
});
// CountDown1
let minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  let counter1 = document.getElementById("one").innerHTML;
  if (counter1 > "0") {
    counter1--;

    document.getElementById("one").innerHTML = counter1;
    updateTotalPrice1();
    updatecardTotal();
  }
});

// // CountUp2
let pluss = document.getElementById("pluss");

pluss.addEventListener("click", function () {
  let counter2 = document.getElementById("onee").innerHTML;

  counter2++;

  document.getElementById("onee").innerHTML = counter2;
  updateTotalPrice2();
  updatecardTotal();
});

// // CountDown2
let minuss = document.getElementById("minuss");
minuss.addEventListener("click", () => {
  let counter2 = document.getElementById("onee").innerHTML;

  if (counter2 > "0") {
    counter2--;

    document.getElementById("onee").innerHTML = counter2;
    updateTotalPrice2();
    updatecardTotal();
  }
});

// Function of total price 1
const updateTotalPrice1 = () => {
  let AllProducts = document.querySelectorAll("tbody");
  let total = 0;

  AllProducts.forEach((item) => {
    let price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );
    let quantity = Number(item.getElementsByClassName("one")[0].innerText);

    total = total + price * quantity;
    let tot_price = document.getElementById("total1");
    tot_price.innerText = `$ ${total}.00`;
  });
};

// Function of total price 2
const updateTotalPrice2 = () => {
  let AllProducts = document.querySelectorAll("tbody");
  let total = 0;

  AllProducts.forEach((item) => {
    let price = Number(
      item.getElementsByClassName("price2")[0].innerText.replace("$", "")
    );
    let quantity = Number(item.getElementsByClassName("onee")[0].innerText);

    total = total + price * quantity;
    let tot_price = document.getElementById("total2");
    tot_price.innerText = `$ ${total}.00`;
  });
};

// Function of cardTotal
const updatecardTotal = () => {
  let AllProducts1 = document.querySelectorAll("tbody");
  let total1 = 0;

  AllProducts1.forEach((item) => {
    let price1 = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );
    let quantity1 = Number(item.getElementsByClassName("one")[0].innerText);

    total1 = total1 + price1 * quantity1;

    let AllProducts2 = document.querySelectorAll("tbody");
    let total2 = 0;
  
    AllProducts2.forEach((item) => {
      let price2 = Number(
        item.getElementsByClassName("price2")[0].innerText.replace("$", "")
      );
      let quantity2 = Number(item.getElementsByClassName("onee")[0].innerText);

      total2 = total2 + price2 * quantity2;
    });
    cardTotal = total1 + total2;
    let Subtotal = document.getElementById("Subtotal");
    Subtotal.innerText = `$ ${cardTotal}.00`;

    cardTotal1 = cardTotal + 4;

    let tot_price = document.getElementById("tot_price");
    tot_price.innerText = `$ ${cardTotal1}.00`;
    tot_price.style.fontWeight = "600"


  });
};

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
      $(".product .items")
        .not("." + id)
        .hide("400");
      $(".product .items")
        .filter("." + id)
        .show("500");
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

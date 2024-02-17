// Slick Slider js

$(document).ready(function () {

  $('.banner-image').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1100,
  });


  $('.testimonail-slider').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1300,   
  });

})

// About Us js

$(document).ready(function(){
  AOS.init();
}) 

// LightBox js  Our Gallery

$(document).ready(function() {
  $("#lightGallery").lightGallery();
});


// Counter js

window.onload = ()=>{
  // $(selector).countMe(delay,speed)
  $("#num1").countMe(40,65);
  $("#num2").countMe(30, 30);
  $("#num3").countMe(40, 50);
}


// Subscride Button Js

$(document).ready(function () {
    $("#form").submit(function (event) {
    event.preventDefault()
    let myemail  = $("#email").val();
    if (myemail === "") {
      $("#emailerror").text("*Email is required*").addClass("error");
    }
    else {
      $("#emailerror").text("");
      if(myemail !== "" ){
       $(this).text("Subscribed Successfuly").addClass("success")
      }
    }
    })
});

// Contact Us js

$(document).ready(function () {
  $("#myForm").submit(function (event) {
    event.preventDefault()

    let name = $("#Name").val();
    let email = $("#email").val();
    let phonenumber = $("#PhoneNumber").val();
    let message = $("#message").val();

    if (name === "") {
      $("#nameerror").text("*Name is required*").addClass("error");
    }
    else {
      $("#nameerror").text("");
    }
    if (email === "") {
      $("#emailerror").text("*Email is required*").addClass("error");
    }
    else {
      $("#emailerror").text("");

    }
    if (phonenumber === "") {
      $("#PhoneNumbererror").text("*Phone number is required*").addClass("error");
    }
    else if (phonenumber.length !== 11) {
      $("#PhoneNumbererror").text("*Phone number must have 11 digits*");

    } else {
      $("#PhoneNumbererror").text("");
    }

    if (message !== "") {
      $("#messageerror").text("").removeClass("error");
    }

    if (name !== "" && email !== "" && phonenumber.length === 11) {
      window.location.href = "thankyou.html";

    }

  })
})

  // FAQs js

  $( function() {
    $( ".accordion-container" ).accordion();
  } );
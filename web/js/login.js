$(document).ready(function() {
  $(".contactUs").click(function() {
    $('.iti-ftitle').html("Contact Us");
    $('.iti-fdoc').html("ITI JOBS<br>Bhopal<br>Office Hours: 9AM-5PM Monday-Friday<br>Tel: 9753750955<br>Email: ambujdubey89@gmail.com");
  })
  $(".home").click(function() {
    $('.iti-ftitle').html("");
    $('.iti-fdoc').html("");
    ss('displayNone');
  });
  $(".aboutIti").click(function() {
    $('.iti-ftitle').html("About ITI Jobs");
    $('.iti-fdoc').html("ITI Jobs is a portal. We will provide contact between student and comapany who have passed ITI trade and registered with the ITI Jobs Portal. On this portal registerd company find the cadidate in our database according to the trade and select a valid candidate. we are not a typical job provider we are only provide the way to candidate and companies. ITI Jobs Portal initiative is provide the skills candidate to company and company grab skills candidate.");
  });
  $(".nav-item").click(function() {
    $('.nav-item').removeClass("active")
    $(this).addClass("active");
    var s = $(this).attr('name');
    if (s == 1) {
      $('.carouselImage').addClass('opacityP1');
      $('.carouselImage').css("border", "solid 2px red");
    } else {
      $('.carouselImage').removeClass('opacityP1');
      $('.carouselImage').css("borderStyle", "none");
    }
  });

  /* Password Image settings*/
  $('.img').addClass('hide');
  $('#password').hover(function() {
    // alert("TEST");
    $('.img').removeClass('hide');
  }, function() {
    $('.img').addClass('hide');
  });
  $('.img').hover(function() {
    $('.img').removeClass('hide');
  }, function() {
    $('.img').removeClass('hide');
  });

  // Validation

  $.validator.addMethod("pwcheckspechars", function(value) {
    return /[!@#$%^&*()_=\[\]{};':"\\|,.<>\/?+-]/.test(value)
  });
  $.validator.addMethod("pwchecknumber", function(value) {
    return /\d/.test(value) // has a digit
  });
  $("#signupForm").validate({

    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5,
        maxlength: 12,
        pwcheckspechars: true,
        pwchecknumber: true
      },

    },
    messages: {
      email: "Please enter a valid email address",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
        maxlength: "Your password must be at most 12 characters long",
        pwchecknumber: "The password must contain at least one number",
        pwcheckspechars: "at 1 Special Character required"
      },

    },
    errorElement: "em",
    errorPlacement: function(error, element) {
      // Add the `help-block` class to the error element
      error.addClass("help-block");

      if (element.prop("type") === "checkbox") {
        error.insertAfter(element.parent("label"));
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
    }
  });
});

function mDown() {
  password.type = 'text';
}

function mUp() {
  password.type = 'password';
}

function myFunction() {
  var em1 = document.getElementById("email").value;
  var pas1 = document.getElementById("password").value;
  var encodePass = btoa(pas1).toString();
  var decodedString = atob(encodePass);
  // console.log(decodedString);
  // console.log(encodePass);
  var obj = {
    "username": em1,
    "password": decodedString
  };
  console.log(obj);
  // $.ajax({
  //   url: "/login",
  //   type: "POST",
  //   data: JSON.stringify(obj),
  //
  //   dataType: "json",
  //   contentType: "application/json; charset=utf-8",
  //   success: function(res) {
  //     // console.log(res.resCode);
  //     if (res.resCode == 'OK') {
  //       console.log(res.msg);
  //       var tok = res.token;
  //       var role = res.role_id;
  //       var name = res.emp_name;
  //       login = {
  //         "Tokan": tok,
  //         "Role": role,
  //         "Name": name
  //       };
  //       storagesetItem("login", login);
  //       window.location.replace("dashboard.html");
  //     } else {
  //       console.log(res.msg);
  //       swal("Error!", res.msg, "error");
  //     }
  //
  //   },
  //   error: function(XMLHttpRequest, textStatus, errorThrown) {
  //     swal("Error!", "sorry unable to login. please check your internet connection", "error");
  //     // console.log("fail login");
  //   }
  //
  // });
  window.location.replace("dashboard.html");
}

$.validator.setDefaults({
  submitHandler: function() {
    myFunction();
  }
});

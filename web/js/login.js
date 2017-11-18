$(document).ready(function() {
  $(".contactUs").click(function() {
    $('.iti-ftitle').html("Chat With Us");
    $('.carousel').carousel('pause');
    $('.iti-fdoc').html(x);
  })
  $(".home").click(function() {
    $('.iti-ftitle').html("");
    $('.iti-fdoc').html("");
    $('.carousel').carousel({
  interval: 10
});
    // ss('displayNone');
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
      mobi: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10
      },
      password: {
        required: true,
        minlength: 5,
        maxlength: 12,
        // pwcheckspechars: true,
        // pwchecknumber: true
      },

    },
    messages: {
      mobi: {
        required:"Please enter Your Mobile Number",
        digits: "Please enter a valid Mobile Number",
        minlength: "Please put 10  digit mobile number",
        maxlength: "Please put 10  digit mobile number"
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
        maxlength: "Your password must be at most 12 characters long",
        // pwchecknumber: "The password must contain at least one number",
        // pwcheckspechars: "at 1 Special Character required"
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
  var em1 = document.getElementById("mobi").value;
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
  $.ajax({
    url: "/login",
    type: "POST",
    data: JSON.stringify(obj),

    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function(res) {
      console.log(res.resCode);
      if (res.resCode == 'OK') {
        console.log(res.msg);
        alert(res.msg);
        var tok = res.token;
        var role = res.role_id;
        var name = res.emp_name;
        login = {
          "Tokan": tok,
          "Role": role,
          "Name": name
        };
        // storagesetItem("login", login);
        window.location.replace("dashboard.html");
      } else if (res.resCode == 'Error'){
        console.log(res.msg);
        swal("Error!", res.msg, "error");
      }

    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      swal("Error!", "sorry unable to login. please check your internet connection", "error");
      // console.log("fail login");
    }

  });
  // window.location.replace("dashboard.html");
}

$.validator.setDefaults({
  submitHandler: function() {
    myFunction();
  }
});

var x= '<div class="formTitle border iti-Padding5"><div class="row no-margin headerDiv2"><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 no-padding"><label for="validation1">Name<i class="red"> &#42</i></label><input type="text" class="form-control" id="validation1" placeholder="Your Name" value="" required=""></div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 no-padding"><label for="validation2">Mobile<i class="red"> &#42</i></label><input type="text" class="form-control" id="validation2" placeholder="Your Number" value="" required=""></div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 no-padding"><label for="validation2">Email<i class="red"> &#42</i></label><input type="text" class="form-control" id="validation2" placeholder="Your Email" value="" required=""></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 no-padding"><label for="validation2">Message<i class="red"> &#42</i></label><textarea class="form-control" rows="2" id="comment" placeholder="Enter Your Message"></textarea></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 no-padding"><button type="submit" class="btn btn-primary btn-sm" name="signup" value="Sign up">Submit</button></div></div></div>';

$.validator.setDefaults({
  submitHandler: function() {
    var em1 = document.getElementById("email").value;
    // console.log(em1);
    adminlogin = {
      "Email": em1
    };
    // console.log(adminlogin);
    storagesetItem("adminlogin", adminlogin);
    var objemail = {
      "email": em1
    };
    // console.log(objemail);
    // $.post({
    //   url: "/forgot_password",
    //   type: "POST",
    //   data: objemail,
    //   success: function(res) {
    //     console.log(res.resCode);
    //     if (res.resCode == 'OK') {
    //       console.log(res.msg);
    //       if (res.msg != "user not found create new user") {
    //         passwordValidationScript();
    //         window.location.replace("forgot-Password.html");
    //       }
    //     } else {
    //       console.log(res.msg);
    //     }
    //   },
    //   error: function() {
    //     console.log("fail login");
    //   }
    // });
    $('#divEmailNum').addClass('hide');
    $('.divPass').removeClass('hide');
    $("#emailvalid").attr("id", "passwordchange");
    passwordValidationScript();
  }
});

$(document).ready(function() {
  //Start---  for change password script
  var my_param = window.location.href;
  // console.log(my_param);
  key = my_param.split('?').pop();
  if (key === "key") {
    $('#otpdiv').addClass('hide');
  }
  //end---  for change password script
  $('.img').addClass('hide');
  $('.img1').addClass('hide');
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
  $('#Confirm_Password').hover(function() {
    // alert("TEST");
    $('.img1').removeClass('hide');
  }, function() {
    $('.img1').addClass('hide');
  });
  $('.img1').hover(function() {
    $('.img1').removeClass('hide');
  }, function() {
    $('.img1').removeClass('hide');
  });
  $("#emailvalid").validate({
    rules: {
      email: {
        required: true,
        email: true
      },

    },
    messages: {
      email: "Please enter a valid email address",

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

function mDown1() {
  Confirm_Password.type = 'text';
}

function mUp1() {
  Confirm_Password.type = 'password';
}

function passwordValidationScript() {
  // alert("passwordValidationScript();");
  $.validator.addMethod("pwcheckspechars", function(value) {
    return /[!@#$%^&*()_=\[\]{};':"\\|,.<>\/?+-]/.test(value)
  });
  $.validator.addMethod("pwchecknumber", function(value) {
    return /\d/.test(value) // has a digit
  });

  var confirm = document.getElementById("Confirm_Password").value;
  $("#passwordchange").validate({
    rules: {
      password: {
        required: true,
        minlength: 5,
        maxlength: 12,
        pwcheckspechars: true,
        pwchecknumber: true
      },
      Confirm_Password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },

    },
    messages: {
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
        manlength: "Your password must be at most 12 characters long",
        pwchecknumber: "The password must contain at least one number",
        pwcheckspechars: "at 1 Special Character required"
      },
      Confirm_Password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
        equalTo: "Please enter the same password as above"
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
};

var login = storagegetItem("login");
console.log(login);
if ((login == null) || (login == "") || (login == undefined)) {
  $('.adminRedioDiv').addClass('hide');
} else {
  $('.bodyloading').addClass('hide');
  $('#formAdmin').removeClass('hide');
}
$.validator.addMethod("onlyLatters", function(value) {
  return /^[a-zA-Z\s]+$/i.test(value)
});
$.validator.addMethod("emailformat", function(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value)
});
$(document).ready(function() {
  var validator = $("#adminForm").validate({
    rules: {
      adminName: {
        required: true,
        onlyLatters: true,
      },
      adminEmail: {
        required: true,
        emailformat: true,
      },
      adminMobile: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
      adminAddress: {
        required: true,
      },
      adminCity: {
        required: true,
        onlyLatters: true,
      },
      adminPincode: {
        required: true,
        digits: true,
        minlength: 6,
        maxlength: 6,
      },
    },
    messages: {
      adminName: {
        required: "Please enter Your Name",
        onlyLatters: "Name should be text only",
      },
      adminEmail: {
        required: "Please provide Your Email Address",
        emailformat: "Please Provide Valid Email Address",
      },
      adminMobile: {
        required: "Please enter Your Mobile Number",
        digits: "Please enter a valid Mobile Number",
        minlength: "Please put 10  digit mobile number",
        maxlength: "Please put 10  digit mobile number",
      },
      adminAddress: {
        required: "Please provide Your Address",
      },
      adminCity: {
        required: "Please provide Your City",
        onlyLatters: "City Name should be text only",
      },
      adminPincode: {
        required: "Please provide Your PinCode",
        digits: "Please enter a valid Pin Code Number",
        minlength: "Please put 6 digit Pin number",
        maxlength: "Please put 6 digit pin number"
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

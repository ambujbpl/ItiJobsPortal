var login = storagegetItem("login");
console.log(login);
if ((login == null) || (login == "") || (login == undefined)) {
  $('.adminRedioDiv').addClass('hide');
  $('.bodyloading').addClass('hide');
  $('#formITI').removeClass('hide');
} else {
  $('.bodyloading').addClass('hide');
  $('#formITI').removeClass('hide');
}
$.validator.addMethod("onlyLatters", function(value) {
  return /^[a-zA-Z\s]+$/i.test(value)
});
$.validator.addMethod("emailformat", function(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value)
});
$(document).ready(function() {
$('#itiName').focus().select();
$("#itiForm").validate({
  rules: {
    itiName: {
      required: true,
      onlyLatters: true,
    },
    itiReg: {
      required: true,
    },
    itiLand: {
      required: true,
      digits: true,
    },
    itiEmail: {
      required: true,
      emailformat: true,
    },
    itiMobile: {
      required: true,
      digits: true,
      minlength: 10,
      maxlength: 10,
    },
    itiType: {
      required: true,
    },
    itiAddress: {
      required: true,
    },
    itiCity: {
      required: true,
      onlyLatters: true,
    },
    itiState: {
      required: true,
      onlyLatters: true,
    },
    itiPincode: {
      required: true,
      digits: true,
      minlength: 6,
      maxlength: 6,
    },
    itiDistrict: {
      required: true,
      onlyLatters: true,
    },
    itiTPOName: {
      required: true,
      onlyLatters: true,
    },
    itiTPOEmail: {
      required: true,
      emailformat: true,
    },
    itiTPOMobile: {
      required: true,
      digits: true,
      minlength: 10,
      maxlength: 10,
    },
    itiLogo: {
      required: true,
    },
  },
  messages: {
    itiName: {
      required: "Please enter College Name",
      onlyLatters: "Name should be text only",
    },
    itiReg: {
      required: "Please provide College Registration Number",
    },
    itiLand: {
      required: "Please provide college office Number",
      digits: "office Number should be digits only",
    },
    itiEmail: {
      required: "Please provide college Email Address",
      emailformat: "Please Provide Valid Email Address",
    },
    itiMobile: {
      required: "Please provide College office Mobile Number",
      digits: "Please enter a valid Mobile Number",
      minlength: "Please put 10  digit mobile number",
      maxlength: "Please put 10  digit mobile number",
    },
    itiType: {
      required: "This field it mandatory",
    },
    itiAddress: {
      required: "Please provide College Address",
    },
    itiCity: {
      required: "Please provide College City Name",
      onlyLatters: "City Name should be text only",
    },
    itiState: {
      required: "Please provide College State Name",
      onlyLatters: "State Name should be text only",
    },
    itiPincode: {
      required: "Please provide college PinCode",
      digits: "Please enter a valid Pin Code Number",
      minlength: "Please put 6 digit Pin number",
      maxlength: "Please put 6 digit pin number"
    },
    itiDistrict: {
      required: "Please provide College District Name",
      onlyLatters: "District Name Name should be text only",
    },
    itiTPOName: {
      required: "Please enter College TPO Name",
      onlyLatters: "Name should be text only",
    },
    itiTPOEmail: {
      required: "Please provide TPO Email Address",
      emailformat: "Please Provide Valid Email Address",
    },
    itiTPOMobile: {
      required: "Please provide College TPO Mobile number",
      digits: "Please enter a valid Mobile Number",
      minlength: "Please put 10  digit mobile number",
      maxlength: "Please put 10  digit mobile number",
    },
    itiLogo: {
      required: "This field it mandatory",
    },
  },
  errorElement: "em",
  errorPlacement: function(error, element) {
    // Add the `help-block` class to the error element
    error.addClass("help-block");

    if (element.prop("type") === "checkbox") {
      error.insertAfter(element.parent("label"));
    } else if (element.is(":radio")) {
      error.insertAfter(element.parent("div"));
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

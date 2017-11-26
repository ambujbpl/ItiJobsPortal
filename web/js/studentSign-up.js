var login = storagegetItem("login");
console.log(login);
if ((login == null) || (login == "") || (login == undefined)) {
  $('.adminRedioDiv').addClass('hide');
  $('.bodyloading').addClass('hide');
  $('#formStudent').removeClass('hide');
} else {
  $('.bodyloading').addClass('hide');
  $('#formStudent').removeClass('hide');
}
$.validator.addMethod("onlyLatters", function(value) {
  return /^[a-zA-Z\s]+$/i.test(value)
});
$.validator.addMethod("emailformat", function(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value)
});
var number = /^[0-9]+$/;
var letters = /^[a-zA-Z\s]+$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

$(document).ready(function() {
  $('#studentName').focus().select();
  $("#studentForm").validate({
    rules: {
      studentName: {
        required: true,
        onlyLatters: true,
      },
      studentFather: {
        required: true,
        onlyLatters: true,
      },
      studentMother: {
        required: true,
        onlyLatters: true,
      },
      studentEmail: {
        required: true,
        emailformat: true,
      },
      date: {
        required: true,
      },
      sex: {
        required: true,
      },
      studentAddress: {
        required: true,
      },
      studentCity: {
        required: true,
        onlyLatters: true,
      },
      studentState: {
        required: true,
        onlyLatters: true,
      },
      studentPin: {
        required: true,
        digits: true,
        minlength: 6,
        maxlength: 6,
      },
      studentMobile: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
      studentCollege: {
        required: true,
        onlyLatters: true,
      },
      trade: {
        required: true,
        onlyLatters: true,
      },
      studentPassY: {
        required: true,
        digits: true,
        minlength: 4,
        maxlength: 4,
      },
      studentPer: {
        required: true,
        digits: true,
      },
      studentHSPer: {
        required: true,
        digits: true,
      },
      jobs: {
        required: true,
      },
    },
    messages: {
      studentName: {
        required: "Please enter Your Name",
        onlyLatters: "Name should be text only",
      },
      studentFather: {
        required: "Please provide Your Father's Name",
        onlyLatters: "Name should be text only",
      },
      studentMother: {
        required: "Please provide Your Mother's Name",
        onlyLatters: "Name should be text only",
      },
      studentEmail: {
        required: "Please provide Your Email Address",
        emailformat: "Please Provide Valid Email Address",
      },
      date: {
        required: "Please provide Your Date of Birth",
      },
      sex: {
        required: "This field it mandatory",
      },
      studentAddress: {
        required: "Please provide Your Address",
      },
      studentCity: {
        required: "Please provide Your City",
        onlyLatters: "City Name should be text only",
      },
      studentState: {
        required: "Please provide Your State",
        onlyLatters: "State Name should be text only",
      },
      studentPin: {
        required: "Please provide Your PinCode",
        digits: "Please enter a valid Pin Code Number",
        minlength: "Please put 6 digit Pin number",
        maxlength: "Please put 6 digit pin number"
      },
      studentMobile: {
        required: "Please provide Your Mobile number",
        digits: "Please enter a valid Mobile Number",
        minlength: "Please put 10  digit mobile number",
        maxlength: "Please put 10  digit mobile number",
      },
      studentCollege: {
        required: "Please provide Your College Name",
        onlyLatters: "College Name should be text only",
      },
      trade: {
        required: "Please Select Your Trade",
      },
      studentPassY: {
        required: "Please provide Year of Passing",
        digits: "Please enter a valid Year Code Number",
        minlength: "year should not be less then 4 digits",
        maxlength: "year should not be more then 4 digits",
      },
      studentPer: {
        required: "Please provide Your Percentage",
        digits: "Please enter a valid Percentage",
      },
      studentHSPer: {
        required: "Please provide Your High School Percentage",
        digits: "Please enter a valid Percentage",
      },
      jobs: {
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
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  var options = {
    format: 'dd/mm/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);

  // redio button for Experience
  $('input:radio[name="jobs"]').change(function() {
    if ($(this).val() == 'Yes') {
      $('.showExperienceCheckbox').removeClass('hide');

    } else {
      $('.showExperienceCheckbox').addClass('hide');
    }
  });
  var $subscribeInput = $('input[name="checkedEx"]');
  $subscribeInput.on('click', function(){
      if ( $(this).is(':checked') ){
         $('.showExperienceDiv').removeClass('hide');
      }else{
         $('.showExperienceDiv').addClass('hide');
       }
  });
});

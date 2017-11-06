// A $( document ).ready() block.
$(document).ready(function() {
  $('input:radio[name=inlineRadioOptions][value=s]').click();
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  var options = {
    format: 'dd/mm/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);
});
$('input:radio[name="inlineRadioOptions"]').change(function() {
  if ($(this).val() == 's') {
    $('.containerCssForm').addClass('hide');
    $('#formStudent').removeClass('hide');
    //  alert("You Picked as a Student in Signup Form");
    $('#studentName').focus().select();
    $('.headerSpan1').html('Student Registration Form');
    $('.registrationSpan').html("For Student Registration amount is 100 Rupees. Please check for fee submission.");
  } else if ($(this).val() == 'i') {
    $('.containerCssForm').addClass('hide');
    $('#formITI').removeClass('hide');
    // alert("You Picked as a ITI Institute in Signup Form");
    $('#itiName').focus().select();
    $('.headerSpan1').html('ITI Institute Registration Form');
    $('.registrationSpan').html("For Institute Registration amount is 500 Rupees. Please check for fee submission.");
  } else if ($(this).val() == 'c') {
    $('.containerCssForm').addClass('hide');
    $('#formCompany').removeClass('hide');
    // alert("You Picked as a Company in Signup Form");
    $('#companyName').focus().select();
    $('.headerSpan1').html('Company Registration Form');
    $('.registrationSpan').html("For Company Registration amount is 1000 Rupees. Please check for fee submission.");

  } else if ($(this).val() == 'a') {
    $('.containerCssForm').addClass('hide');
    $('#formAdmin').removeClass('hide');
    // alert("You Picked as a Admin in Signup Form");
    $('#adminName').focus().select();
    $('.headerSpan1').html('Admin Registration Form');
    $('.registrationSpan').html("Please check for final submission.");

  }
});

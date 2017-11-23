$(document).ready(function() {
  // $("#containerload").load("studentSign-up.html");
});
$('input:radio[name="inlineRadioOptions"]').change(function() {
  if ($(this).val() == 's') {
    $("#containerload").load("studentSign-up.html");
    //  alert("You Picked as a Student in Signup Form");
    $('#studentName').focus().select();
    $('.headerSpan1').html('Student Registration Form');
    // $('.registrationSpan').html("For Student Registration amount is 100 Rupees. Please check for fee submission.");
    } else if ($(this).val() == 'i') {
    $("#containerload").load("itiSign-up.html");
    $('.containerCssForm').addClass('hide');
    $('#formITI').removeClass('hide');
    // alert("You Picked as a ITI Institute in Signup Form");
    $('#itiName').focus().select();
    $('.headerSpan1').html('ITI Institute Registration Form');
    $('.registrationSpan').html("For Institute Registration amount is 500 Rupees. Please check for fee submission.");
  } else if ($(this).val() == 'c') {
    $("#containerload").load("companySign-up.html");
    $('.containerCssForm').addClass('hide');
    $('#formCompany').removeClass('hide');
    // alert("You Picked as a Company in Signup Form");
    $('#companyName').focus().select();
    $('.headerSpan1').html('Company Registration Form');
    $('.registrationSpan').html("For Company Registration amount is 1000 Rupees. Please check for fee submission.");

  } else if ($(this).val() == 'a') {
    $("#containerload").load("adminSign-up.html");
    $('.containerCssForm').addClass('hide');
    $('#formAdmin').removeClass('hide');
    // alert("You Picked as a Admin in Signup Form");
    $('#adminName').focus().select();
    $('.headerSpan1').html('Admin Registration Form');
  }
});
var login = storagegetItem("login");
console.log(login);
if((login == null)||(login == "")||(login == undefined)){
  $('.adminRedioDiv').addClass('hide');
}

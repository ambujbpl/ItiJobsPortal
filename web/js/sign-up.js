// A $( document ).ready() block.
$( document ).ready(function() {
  // alert("Ready");
    // $('input:radio[name="inlineRadioOptions"]').filter('[value="s"]').attr('checked', true);
    $('input:radio[name=inlineRadioOptions][value=s]').click();
});
$('input:radio[name="inlineRadioOptions"]').change(function(){
    if($(this).val() == 's'){
       $('.containerCssForm').addClass('hide');
       $('#formStudent').removeClass('hide');
       alert("You Picked as a Student in Signup Form");
       $('#studentName').focus().select();
       $('.headerSpan1').html('Student Registration Form');
       $('.registrationDiv').html("For Student Registration amount is 100 Rupees. Please check for fee submission.");
    }else if ($(this).val() == 'i') {
      $('.containerCssForm').addClass('hide');
      $('#formITI').removeClass('hide');
      alert("You Picked as a ITI Institute in Signup Form");
      $('#itiName').focus().select();
      $('.headerSpan1').html('ITI Institute Registration Form');
      $('.registrationDiv').html("For Institute Registration amount is 500 Rupees. Please check for fee submission.");
    }else if ($(this).val() == 'c'){
      $('.containerCssForm').addClass('hide');
      $('#formCompany').removeClass('hide');
      alert("You Picked as a Company in Signup Form");
      $('#companyName').focus().select();
      $('.headerSpan1').html('Company Registration Form');
      $('.registrationDiv').html("For Company Registration amount is 1000 Rupees. Please check for fee submission.");

    }else if ($(this).val() == 'a'){
      $('.containerCssForm').addClass('hide');
      $('#formAdmin').removeClass('hide');
      alert("You Picked as a Admin in Signup Form");
      $('#adminName').focus().select();
      $('.headerSpan1').html('Admin Registration Form');
      $('.registrationDiv').html("Please check for final submission.");

    }
});

      //  var input = document.getElementById('studentName');
      //  alert(input);
      // input.focus();
      // input.select();

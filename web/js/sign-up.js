// alert("test");
$('input:radio[name="inlineRadioOptions"]').change(function(){
    if($(this).val() == 's'){
       alert("test-Student");
    }else if ($(this).val() == 'i') {
      alert("test-ITI");
    }else{
      alert("test-Company");
    }
});

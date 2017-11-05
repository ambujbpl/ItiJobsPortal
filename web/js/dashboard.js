$(document).ready(function() {
  // for dashboard click function
  $('#dashboard').click(function(){
$('.page-header').html("Dashboard");
// alert("test");
  });
// for help click function
  $('#help').click(function(){
// alert("help");
$('.page-header').html("Help");
  });
// for profile click function
  $('#profile').click(function(){
// alert("profile");
$('.page-header').html("Profile");
  });
// for dashboard click function
  $('#logout').click(function(){
alert("logout");
// $('.page-header').html("profile");

  });
// for add activeA class in comman list component on-click function
  $('.listCom').click(function(){
    $('.listCom').removeClass('activeA');
    $(this).addClass('activeA');
  });
});




// js  code for sidebar
/*Menu-toggle*/
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("active");
  });

  /*Scroll Spy*/
  $('body').scrollspy({ target: '#spy', offset:80});

  /*Smooth link animation*/
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });

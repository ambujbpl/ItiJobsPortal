$(document).ready(function() {
  // for dashboard click function
  $('#dashboard').click(function() {
    $('.page-header').html("Dashboard");
    // $('.listComDetailsDiv').addClass('hide');
  });
  // for help click function open modal
  $('.help').click(function() {
    $('#exampleModalLongTitle').html("Help");
    // $('.listComDetailsDiv').removeClass('hide');
    $('.modal-body').html("ITI JOBS<br>Bhopal<br>Office Hours: 9AM-5PM Monday-Friday<br>Tel: 9753750955<br>Email: ambujdubey89@gmail.com");

  });
  // for profile click function open modal
  $('.profile').click(function() {
    $('#exampleModalLongTitle').html("Profile");
    // $('.listComDetailsDiv').removeClass('hide');
    $('.modal-body').html("<div style='text-align: center';><img src='img/ambujImage.jpg' alt='Profile Image' height='82' width='82'><br><br><table class='myTable table-striped table-bordered'><tr><td>Name</td><td>Ambuj Dubey</td></tr><tr><td>Mobile Number</td><td>9753750955</td></tr><tr><td>Role</td><td>Admin</td></tr><tr><td>Email ID</td><td>ambujdubey89@gmail.com</td></tr><table></div>");

  });
  // for dashboard click function
  $('.logout').click(function() {
    $('.listComDetailsDiv').addClass('hide');
    window.location.replace("login.html");
  });
  // for add activeA class in comman list component in Navbar on-click function
  $('.listCom').click(function() {
    $('.listCom').removeClass('activeA');
    $(this).addClass('activeA');
  });
  // for add activeA class in comman list component in Sidebar on-click function
  $('.listComA').click(function() {
    $('.viewDetailsDiv').removeClass('hide');
    $('.listComA').removeClass('activeA');
    // alert(this.className.split(" ")[0]);
    $(this).addClass('activeA');
  });
  // for Sidebar anch1 click function
  $('.anch1').click(function() {
    $('.anchLegend').html("Total Companies");
    $('.anchPara').html("We have registered more then 30 company.<br>The industries are benefitted with the ready to employ skilled candidates thereby reducing transition time on training the manpower on specific skilling requirements.<br>Thus, the project optimizes the cost incurred by industries on training activities and benefits the ITI students with secured jobs.<br>Some of them are below.");
$('.headerId').html("company ID");
$('.headerName').html("company Name");
$('.headerArea').html("company Location");
$('.headerDetails').html("Year of Establishment");
    $('#tableBody').html("<tr><td>1,001</td><td>Aakash India Pvt Ltd</td><td>Bhopal</td><td>2011</td></tr><tr><td>1,002</td><td>Raj industries</td><td>Bhopal</td><td>1989</td></tr><tr><td>1,003</td><td>Vijay construction</td><td>Vidish</td><td>2007</td></tr><tr><td>1,004</td><td>Malvin India</td><td>Jabalpur</td><td>2017</td></tr><tr><td>1,005</td><td>Shiva industries</td><td>Indore</td><td>2015</td></tr>");
  });
  // for Sidebar anch2 click function
  $('.anch2').click(function() {
    $('.anchLegend').html("Total ITI Listed");
    $('.anchPara').html("We have registered more then 100 ITI.<br>The industries are benefitted with the ready to employ skilled candidates thereby reducing transition time on training the manpower on specific skilling requirements.<br>Thus, the project optimizes the cost incurred by industries on training activities and benefits the ITI students with secured jobs.<br>Some of them are below.");
    $('.headerId').html("Collage ID");
    $('.headerName').html("Collage Name");
    $('.headerArea').html("Collage Location");
    $('.headerDetails').html("Course");
    $('#tableBody').html("<tr><td>2,001</td><td>SGS collage</td><td>Bhopal</td><td>1 year cource</td></tr><tr><td>2,002</td><td>Raah collage</td><td>Itarsi</td><td>6 Month course</td></tr><tr><td>2,003</td><td>Gov ITI collage</td><td>Vidish</td><td>2 year PG-Diploma coure</td></tr><tr><td>2,004</td><td>Laxmipati institute</td><td>Jabalpur</td><td>! year ITI course</td></tr><tr><td>2,005</td><td>Ashoka collage</td><td>Indore</td><td>1 year course</td></tr>");

  });
  // for Sidebar anch3 click function
  $('.anch3').click(function() {
    $('.anchLegend').html("Total Students");
    $('.anchPara').html("We have register more then 500 students.<br>The industries are benefitted with the ready to employ skilled candidates thereby reducing transition time on training the manpower on specific skilling requirements.<br>Thus, the project optimizes the cost incurred by industries on training activities and benefits the ITI students with secured jobs.<br>Some of them are below.");
    $('.headerId').html("Student ID");
    $('.headerName').html("Student Name");
    $('.headerArea').html("Student Address");
    $('.headerDetails').html("Student Qualification");
    $('#tableBody').html("<tr><td>3,001</td><td>Aakash</td><td>Bhopal</td><td>Diploma</td></tr><tr><td>3,002</td><td>Rahul</td><td>Bhopal</td><td>Diploma</td></tr><tr><td>3,003</td><td>Ajay</td><td>Vidish</td><td>PG-Diploma</td></tr><tr><td>3,004</td><td>Ravi</td><td>Jabalpur</td><td>ITI</td></tr><tr><td>3,005</td><td>Shiva</td><td>Indore</td><td>12th</td></tr>");

  });
  // for Sidebar anch4 click function
  $('.anch4').click(function() {
    $('.anchLegend').html("Total Placements");
    $('.anchPara').html("20 Student got placed by ITI Jobs Portal.<br>The industries are benefitted with the ready to employ skilled candidates thereby reducing transition time on training the manpower on specific skilling requirements.<br>Thus, the project optimizes the cost incurred by industries on training activities and benefits the ITI students with secured jobs.<br>Some of them are below.");
    $('#tableBody').html("<tr><td>4,001</td><td>Anita</td><td>Bhopal</td><td>Diploma</td></tr><tr><td>4,002</td><td>Rishabh</td><td>Indore</td><td>PG-Diploma</td></tr><tr><td>4,003</td><td>Ajay</td><td>Vidish</td><td>PG-Diploma</td></tr><tr><td>4,004</td><td>Ravi</td><td>Jabalpur</td><td>ITI</td></tr><tr><td>4,005</td><td>Shivendra</td><td>Indore</td><td>12th</td></tr>");

  });
  // for Sidebar Home click function
  $('.home').click(function() {
    $('.viewDetailsDiv').addClass('hide');
    $('.listComDetailsDiv').addClass('hide');
  });
});




// js  code for sidebar
/*Menu-toggle*/
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("active");
});
//
// /*Scroll Spy*/
// $('body').scrollspy({
//   target: '#spy',
//   offset: 80
// });

/*Smooth link animation*/
// $('a[href*=#]:not([href=#])').click(function() {
//   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
//
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     if (target.length) {
//       $('html,body').animate({
//         scrollTop: target.offset().top
//       }, 1000);
//       return false;
//     }
//   }
// });

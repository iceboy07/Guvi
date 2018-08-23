$(document).ready(function(){
      var date_input=$('input[name="dateofbirth"]'); 
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'yyyy/mm/dd',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
    });

$(function (){
	$("#fname_message").hide();
	$("#lname_message").hide();
	$("#email_message").hide();
	$("#dob_message").hide();
	$("#dept_message").hide();
	$("#gender_message").hide();
	$("#city_message").hide();
	$("#zip_message").hide();
	$("#phn_message").hide();

	var err_fname = false;
	var err_lname = false;
	var err_email = false;
	var err_dob = false;
	var err_dept = false;
	var err_gender = false;
	var err_city = false;
	var err_zip = false;
	var err_phn = false;
	
	$("#first_name").focusout(function(){
	 		check_fname();
	 	});

	$("#last_name").focusout(function(){
	 	check_lname();
	 	});

	$("#email_id").focusout(function(){
	 	check_email();
	 	});

	
	$("#dateofbirth").focusout(function(){
	 	check_dob();
	 	});

	$("#department").focusout(function(){
	 	check_dept();
	 	});

	$("#gender").focusout(function(){
	 	check_gender();
	 	});

	$("#city").focusout(function(){
	 	check_city();
	 	});
	$("#zipcode").focusout(function(){
	 	check_zip();
	 	});

	$("#phone_no").focusout(function(){
	 	check_phn();
	 	});


	function check_fname() {

		var user_length = $ ("#first_name").val().length;
		
		if(user_length < 5 || user_length >20) {
			$("#fname_message").html("First name Should be between 5-20 characters");
			$("#fname_message").show();
		}
		else if(($(user).val().length=''))
		{
			$("#fname_message").html("Shouldn't be empty");
			$("#fname_message").show();
		}
		else{
			$("#fname_message").hide();
		}
		}
	
	function check_lname() {

		var username_length = $ ("#last_name").val().length;
	
		if(username_length < 5 || username_length >20) {
			$("#lname_message").html("Should be between 5-20 characters");
			$("#lname_message").show();
		}
		
		else{
			$("#lname_message").hide();
		}
		}

	function check_email() {

	 		var pattern = new RegExp(/^[+a-zA-z0-9._-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/i);
	 		var empty = " ";
	 		if(pattern.test($("#email_id").val())) {
	 			$("#email_message").hide();
	 		}
	 		else
	 		{
	 			$("#email_message").html("Invalid email address");
	 			$("#email_message").show();
	 			err_email = true;
	 		}
	 }

	


	 function check_dob()
	 {	
	
	 	if(($("#dateofbirth").val().length ==''))
		{
			$("#dob_message").html("Invalid Entry");
	 			$("#dob_message").show();
	 			err_dob = true;
		}
		else
		{
	 			$("#dob_message").hide();
		}
	 }
	
	 function check_dept() {

		
	 	if(($("#department").val().length ==''))
		{
			$("#dept_message").html("Invalid Entry");
	 			$("#dept_message").show();
	 			err_dept = true;
			
		}
		else
		{
			$("#dept_message").hide();
			
		}
		}

	 	function check_gender()
	 	{
	 		if(($("gender").is(":checked")))
	 		{
	 			$("#gender_message").hide();
	 		}
	 		else{
	 			$("#gender_message").html("Please select anyone");
	 			$("#gender_message").show();
	 			err_gender = true;
	 		}
	 	}
	 function check_city()
	 {
	 	if(($("#city").val().length ==''))
		{
			$("#city_message").html("Invalid Entry");
	 			$("#city_message").show();
	 			err_city = true;
			
		}
		else
		{
			$("#city_message").hide();
			
		}
	 }

	 function check_zip()
	 {
	 	if(($("#zipcode").val().length ==''))
		{
			$("#zip_message").html("Invalid Entry");
	 			$("#zip_message").show();
	 			err_zip = true;
			
		}
		else
		{
			$("#zip_message").hide();
			
		}
	 }

	 function check_phn()
	 {
	 	var pattern = new RegExp(/[0-9]{10}$/);
	 	if(pattern.test($("#phone_no").val())) {
	 			$("#phn_message").hide();
	 		}

	 	else 
		{
			$("#phn_message").html("Invalid Entry");
	 			$("#phn_message").show();
	 			err_phn = true;
			
		}
		
	 }


$("#myform2").submit(function()
	 {
	 	err_fname = false;
	 	err_lname = false;
	 	err_email = false;
	 	err_dob = false;
	 	err_dept = false;
	 	err_gender = false;
	 	err_city = false;
	 	err_zip = false;
	 	err_phn = false;
	 	
		check_fname();
	 	check_lname();
	 	check_email();
	 	check_dob();
	 	check_dept();
	 	check_gender();
	 	check_city();
	 	check_zip();
	 	check_phn();




	 	if(err_fname == false && err_lname == false && err_email == false &&  err_dob == false && err_dept == false && err_gender == false && err_city == false && err_zip == false && err_phn == false )
	 	{
	 		return true;
	 	}
	 	else
	 	{
	 		return false;
	 	}
	 });
 });




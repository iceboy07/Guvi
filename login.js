$(function (){
	$("#email_message").hide();
	

	var err_email = false;
	

	 $("#email_id").focusout(function(){
	 	check_email();
	 });
	 

	function check_email() {

	 		var pattern = new RegExp(/^[+a-zA-z0-9._-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/i);
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
	

	 $("#myform").submit(function()
	 {
	 	err_email = false;
	 	
	 	check_email();
	 	
	 	if(err_email == false && err_pass == false)
	 	{
	 		return true;
	 	}
	 	else
	 	{
	 		return false;
	 	}
	 });
});
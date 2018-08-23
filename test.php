<?php
$connec =  mysqli_connect('localhost','root','');
$db = mysqli_select_db($connec, "entry");
if(isset($_POST['email_id']))
{
	$email_id= $_POST['email_id'];

	$query= mysqli_query($connec,"SELECT * FROM userstab WHERE email_id='$email_id' ");
	if(mysqli_num_rows($query) == 0)
	{
		
		header('location: register.html');
	}
	else 
		{
		
				header('location: detail_view.html');
			
			
		}
}
else
{
	echo " error file";
}

?>
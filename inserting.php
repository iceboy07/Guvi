<?php

$connec =  mysqli_connect('localhost','root','');
$db = mysqli_select_db($connec, "entry");
 if(isset($_POST["reg_sub"]))
{
 	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$email_id = $_POST['email_id'];
	$dateofbirth = $_POST['dateofbirth'];
	$department = $_POST['department'];
	$gender = $_POST['gender'];
	$curr_city = $_POST['curr_city'];
	$zipcode = $_POST['zipcode'];
	$phone_no = $_POST['phone_no'];	
$stmt = $connec->prepare("INSERT INTO userstab (first_name,last_name,email_id,dateofbirth,department,gender,curr_city,zipcode,phone_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ");
	$stmt->bind_param("sssssssss",$first_name,$last_name,$email_id,$dateofbirth,$department,$gender,$curr_city,$zipcode,$phone_no);
	$stmt->execute();

	 $file_name = "detail.json";

if(file_put_contents($file_name, jsonfun()))
{
	include("detail_view.html");
}
else
{
	echo"creation failed";
}
	
}
else
{
	echo "error";
}


function jsonfun(){
	$connec = mysqli_connect('localhost','root','','entry');
	$query = "SELECT * FROM userstab";
	$result = mysqli_query($connec, $query);
	$detai_data = array();
	while ($row = mysqli_fetch_array($result)) {

		 $detai_data[] = array(
          'first_name' => $row["first_name"],
          'last_name' => $row["last_name"],
          'email_id' => $row["email_id"],
          'dateofbirth' => $row["dateofbirth"],
          'department' => $row["department"],
          'gender' => $row["gender"],
          'curr_city' => $row["curr_city"],
          'zipcode' => $row["zipcode"],
          'phone_no' => $row["phone_no"]
		 );
		
	}

	return json_encode($detai_data);
	
}



 
?> 
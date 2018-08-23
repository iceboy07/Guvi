$(document).ready(function () {

	$.getJSON("detail.json",function(data){

		var detai_data =' ';
		$.each(data, function(key,value){
			detai_data += '<tr>';
			detai_data += '<td>'+value.first_name+'</td>';
			detai_data += '<td>'+value.last_name+'</td>';
			detai_data += '<td>'+value.dateofbirth+'</td>';
			detai_data += '<td>'+value.department+'</td>';
			detai_data += '<td>'+value.gender+'</td>';
			detai_data += '<td>'+value.curr_city+'</td>';
			detai_data += '<td>'+value.zipcode+'</td>';
			detai_data += '<td>'+value.phone_no+'</td>';
			detai_data += '</tr>';
		});
		$('#table_details').append(detai_data); 

	});
	$("#log_sub").click(function()
	{
		window.location.replace('http://localhost/proj/login.html');
	});
});
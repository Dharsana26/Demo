$(document).ready(function(){
	// $("#username").blur(function(){
	// 	if($(this).val()==""){
	// 		$(this).css("border","1px solid red");
	// 		$("#username").focus();
	// 		return false;
	// 	}
	// 	else{
	// 		$(this).css("border","1px solid green");
	// 	}
	// })

	
	$("#save").click(function(){
		if($("#Username").val()==""){
			$("#Username").css("border","1px solid red");
			$("#Username").focus();
			return false;
		}
		else{
			$("#Username").css("border","1px solid green");
		}
		if($("#Email").val()==""){
			$("#Email").css("border","1px solid red");
			$("Email").focus();
			return false;
		}
		else{
			$("#Email").css("border","1px solid green");
		}
		if($("#Password").val()==""){
			$("#Password").css("border","1px solid red");
			$("#Password").focus();
			return false;
		}
		else{
			$("#Password").css("border","1px solid green");
		}
		if($("#Confirm Password").val()==""){
			$("#Confirm Password").css("border","1px solid red");
			$("#Confirm Password").focus();
			return false;
		}
		else{
			$("#Confirm Password").css("border","1px solid green");
		}
		$.ajax({
			type:"POST",
			url:"php/register.php",
			dataType:"json",
			//data:{"uname":username,"pass":password},
			data:$("#loginForm").serialize(),
			success:function(res){
				if(res.status=="Done"){
					window.location="login.html";
				}
			}

		})
	})
})
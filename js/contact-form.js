$(function(){
	$("#ContactForm").submit(function(){
		$("#submit").value='Please wait...';
		
		$.post("process.php?send=comment", $("#ContactForm").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$("#message_post").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$("#message_post").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$('.form-control').val("");
				$("#submit").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});
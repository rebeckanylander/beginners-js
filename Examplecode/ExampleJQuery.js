// Uses JQuery
$(document).ready(
	function(){ // Add any functionality here
		$("#btn").click(
			function(){
				var textBoxText = $("#textBox").val();
				$("#contentDiv").html(textBoxText);
			}
		);
	}
);
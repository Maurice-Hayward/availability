$(document).ready(function(){
			$("#topNavContent").load("/assets/templates/partial/home_top_nav.html"); 
    		$("#bottomNavContent").load("/assets/templates/partial/home_bottom_nav.html"); 
			

            $('[data-toggle="datepicker"]').datepicker();

            $('.timepicker').wickedpicker({twentyFour: true});
	});
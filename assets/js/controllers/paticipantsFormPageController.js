$(document).ready(function() {
    $("#topNavContent").load("/assets/templates/partial/home_top_nav.html");
    $("#bottomNavContent").load("/assets/templates/partial/home_bottom_nav.html");

    $('[data-toggle="datepicker"]').datepicker();
    $('.timepicker').wickedpicker({twentyFour: true, now:'00:00'});

    var $template       = $("#dateTemplate");  // form Date Field template
    

    var numDateFields = 1;
    
     $(".addButton").click(function(e){ //on add input button click
        e.preventDefault();

        var $newFormLine = $template
                                .clone(true)
                                .removeClass('hide')
                                .removeAttr('id')
                                .insertBefore($template)


        $('[data-toggle="datepicker"]').datepicker();
        $('.timepicker').wickedpicker({twentyFour: true,now:'00:00'});
       
        numDateFields++; 
        
    });

    $(".removeButton").click(function(e){
         e.preventDefault();
         $(this).parent().parent().remove();
         numDateFields--;
    })

    
    $("form").submit(function(event) {
        console.log($(this).serializeArray());
        event.preventDefault();
    });
});
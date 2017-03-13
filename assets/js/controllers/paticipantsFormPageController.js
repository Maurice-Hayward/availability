$(document).ready(function() {
    $("#topNavContent").load("/assets/templates/partial/home_top_nav.html");
    $("#bottomNavContent").load("/assets/templates/partial/home_bottom_nav.html");

    $('[data-toggle="datepicker"]').datepicker();
    $('.timepicker').wickedpicker({twentyFour: true});

    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID 
    var $template       = $("#dateTemplate");
    

    var numDateFields = 1;
    
     $(".addButton").click(function(e){ //on add input button click
        e.preventDefault();
        console.log("c")
        var removeButton = $('<div class="col-xs-2">'
            + '<button type="button" class="btn btn-danger remove">'
            + '<i class="fa fa-minus">Remove This</i></button></div>');
        removeButton.click(function() {
            $(this).parent().remove();
        });
        
        var $clone          = $template
                                .clone()
                                .removeClass('hide')
                                .removeAttr('id')
                                .append(removeButton)
                                .insertBefore($template);
       
        numDateFields++; //text box increment
        //$(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        
    });

    
    $("form").submit(function(event) {
        console.log($(this).serializeArray());
        event.preventDefault();
    });
});
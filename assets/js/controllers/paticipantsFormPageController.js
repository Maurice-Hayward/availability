$(document).ready(function() {
    $("#topNavContent").load("/assets/templates/partial/home_top_nav.html");
    $("#bottomNavContent").load("/assets/templates/partial/home_bottom_nav.html");

    $('[data-toggle="datepicker"]').datepicker();
    $('.timepicker').wickedpicker({twentyFour: true, now:'00:00'});

    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID 
    var $template       = $("#dateTemplate");
    

    var numDateFields = 1;
    
     $(".addButton").click(function(e){ //on add input button click
        e.preventDefault();
        var temp = $('<div class="form-group well" id="dateTemplate"> <label class="col-xs-1 control-label">Date</label> <div class="col-xs-2"> <input type="text" data-toggle="datepicker" class="form-control" name="date" placeholder="Enter Date"> </div> <label class="col-xs-1 control-label">From:</label> <div class="col-xs-2"> <input type="text" name="timeFrom" class="form-control timepicker" placeholder="24 Hour Clock"/> </div> <label class="col-xs-1 control-label">To:</label> <div class="col-xs-2"> <input type="text" name="timeTo" class="form-control timepicker" placeholder="24 Hour Clock"/> </div> </div>');
        var removeButton = $('<div class="col-xs-2">'
            + '<button type="button" class="btn btn-danger remove">'
            + '<i class="fa fa-trash"></i></button></div>');
        removeButton.click(function() {
            $(this).parent().remove();
        });
        

        $(wrapper).append(temp.append(removeButton));

        $('[data-toggle="datepicker"]').datepicker();
        $('.timepicker').wickedpicker({twentyFour: true,now:'00:00'});
       
        numDateFields++; //text box increment
        //$(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        
    });

    
    $("form").submit(function(event) {
        console.log($(this).serializeArray());
        event.preventDefault();
    });
});
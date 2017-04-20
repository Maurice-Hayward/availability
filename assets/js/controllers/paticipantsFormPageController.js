$(document).ready(function() {
   


    const timepickerOptions = {
        twentyFour: true,
        now: '00:00',
        minutesInterval: 5
    };


  

    var $template = $("#dateTemplate"); // form Date Field template


    var numDateFields = 1;

    $(".addButton").on("click", function(e) { //on add input button click
        e.preventDefault();

        //clones template then adds clone to the form
        var $newFormLine = $template
            .clone()
            .removeClass('hide')
            .removeAttr('id')
            .insertBefore($template);


        //add "required" property to date feild
        $newFormLine.find("input[name=date]").prop('required', true);


        numDateFields++;

    });

    //Use event delegation to remove form line when trash button is clicked
    $("form").on("click", ".removeButton", function(e) {
        e.preventDefault();
        $(this).parent().parent().remove();
        numDateFields--;
    });

    //Use event delegation to intialized datepicker
    $("form").on("mouseover", '[data-toggle="datepicker"]', function(e) {
        e.preventDefault();

        //make sure input feild hasn't already been intialized 
        if (!$(this).data('intialized')) {
            $(this).datepicker();
            $(this).data('intialized', true);
        }
    });

    //make sure input feild hasn't already been intialized 
    $("form").on("mouseover", '.timepicker', function(e) {
        e.preventDefault();
        if (!$(this).data('intialized')) {
            $(this).wickedpicker(timepickerOptions);
            $(this).data('intialized', true);
        }
    });


    $("form").on("submit", function(e) {
        console.log($(this).serialize());
        e.preventDefault();
    });
});
$(document).ready(function() {

    toastr.options.extendedTimeOut = 0; //makes toastr sticky
    toastr.options.timeOut = 0; //makes toastr sticky

    //change to Signup Form
    $("#signupform").hide();
    $("#signup").on("click", function() {
        $(this).prop("disabled", true);
        $("#login").prop("disabled", false);
        $("#loginform").hide();
        $("#signupform").show();
    });

    //change to Login Form
    $("#login").on("click", function(e) {
        $(this).prop("disabled", true);
        $("#signup").prop("disabled", false);
        $("#signupform").hide();
        $("#loginform").show();
    });

    //submit signup form
    $("#signupform").on('submit', function(e) {
        e.preventDefault();

        var formData = {

            firstname: $('#signupform input[name=firstname]').val(),
            lastname: $(' #signupform input[name=lastname]').val(),
            email: $(' #signupform input[name=email]').val(),
            password: $(' #signupform input[name=pwd]').val(),

        };

        console.log(formData);

        $.ajax({
            type: "POST",
            url: '/signup',
            data: formData,
            success: function(res) {
                toastr.clear()
                toastr.success('You successfully signed up!');

            },
            error: function(res) {
                toastr.clear()
                toastr.error(res.responseText, res.status);
            }


        });


    })


});
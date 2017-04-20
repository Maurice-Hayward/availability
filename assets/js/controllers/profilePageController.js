$(document).ready(function() {
    $("#topNavContent").load("/assets/templates/partial/home_top_nav.html");
    
    const USER_ID = window.location.href.split('/')[4];

    $.ajax({
            type: "GET",
            url: '/profile/' + USER_ID,
            success: function(resData) {
                $("#profileinfo").find('h2').html(`Hello, ${resData.firstname} (${resData.email})`)

            },
            error: function(res) {
                toastr.clear()
                toastr.error(res.responseText, res.status);
            }


        });


   
});
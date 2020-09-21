$(document).ready(function(){
    $(".navbar-toggler").on('click', function () {
        $(".mobileMenu, .overlay").toggleClass("open");
    });

    $('.navbar-toggler').click(function () {
        if($('.fa-bars').attr('src') === "./images/icon-hamburger.svg"){
            $('.fa-bars').attr('src', "./images/icon-close.svg" );
        }else {
            $('.fa-bars').attr('src', "./images/icon-hamburger.svg");
        }
    });

    $('.navbar-toggler').click(function () {
        var x = document.querySelector('.profile-img');
        // $('.profile-img').toggle('slow');
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
    });
});
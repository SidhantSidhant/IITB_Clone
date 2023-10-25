$(document).ready(function(){
   const $owl = $('#owl-carousel');
   const $infra_owl = $("#infrastructure-carousel")
   $owl.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        // navText : false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })

    $infra_owl.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        // navText : false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})
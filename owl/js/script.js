var owl = $('.owl-carousel');

owl.owlCarousel({
    loop:true,
    margin:10,
    autoWidth:false,
    autoHeight:false,
    nav:true,
    animateOut: 'fadeOut',
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:4000,
    utoplayHoverPause:true,
    responsive:{
        0:{
            items:1   
        }
    }
});




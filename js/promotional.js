$(document).ready(function() {
    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
          direction: 'horizontal',
          loopTop: true,
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6', 'page7', 'page8'],
        sectionsColor: ['#000', '#000', '#000', '#000', '#000','#000','#000','#000'],
        navigation:false,
        //navigation: {
            //'position': 'right',
              // 'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
         //  },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });


    $.fn.pagepiling.setAllowScrolling(false);


    $(window).on("load", function() {
            
        $(".hero-bg").addClass("hero-bg-show");
        
    });	
    
    // 8. swiper slider
    var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: true,
        speed: 1200,
        grabCursor: false,
        mousewheel: true,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        }
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.pause();
        });
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.play();
        });
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper.autoplay.start();
    }
    playButton.on("click", function() {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
    
    var $window = $(window);
    var ww = $window.width();
    var $icon4 = $("#hamburger-menu");
    $socialHamburger = $('#social-hamburger');
    $buttonCollapse = $(".button-collapse");
    /*----- Close SideNav when on resize width-----*/

    $window.on('resize', function(){
    if( ww != $window.width() ){
        ww = $window.width();
        $buttonCollapse.sideNav("hide");
    }
});

//Toggle Social Hamburger Icon on click
$socialHamburger.on('click', function () {
    $(this).toggleClass('open')
});

/*----- Materialize JS Setup-----*/

// SideNav Initialize
$buttonCollapse.sideNav({
    draggable: true,
    closeOnClick: true,
    //Toggle the hamburger icon
    onOpen: function () {
        $icon4.addClass("open");
    },
    onClose: function () {
        $icon4.removeClass("open");
    }
});

// SideNav DropDown Initialize
$(".dropdown-button").dropdown({
    belowOrigin: true,
    constrainWidth: false
});

    






 
$('#menu a').click(function () {
    $('#menu.active').removeClass('active');
    $('#menu a.active').removeClass('active');

    $(this).addClass('active');
    $(this).closest('ul').addClass('active');
});


$('ul.tabs li a').click(function () {
  
    var tabId = $(this).attr('href');
    
   
    $('.tabs_content2').removeClass('active');
    $('.tab a.active').removeClass('active');
    $('.tabs_content2.active').removeClass('active');
    $('.tabs_content.active').removeClass('active').css('display', 'none');;
    

    // If there is a corresponding active tabs_content element, add the 'active' class to the tabs_content2 element
    $('.tabs_content2' + tabId).addClass('active');

});

 

    
  
        // function updateActiveTabA() {
        //     $('._side-nav a').click(function (e) {
               
                
        //         
        //         var tab = $(this).attr('tab');
                
        //         // Remove the 'active' class from the currently active "tab a" element
        //         $('.tab a.active').removeClass('active');
        //         $('.tabs_content2.active').removeClass('active');
        //         $('.tabs_content.active').removeClass('active').css('display', 'none');;
                
        //         // Add the 'active' class to the corresponding "tab a" element with the same href
        //         $('.tab a[tab="' + tab + '"]').addClass('active');
        //         $('.tabs_content2[tab="' + tab + '"]').addClass('active');
        //         $('.tabs_content[tab="' + tab + '"]').addClass('active').css('display', 'block');
               
        //       });
        //  }
                    
          
        // $('._side-nav a').click(function (e) {
        //     function checkAndAddActiveClass() {
        //         if ($('body').hasClass('pp-viewing-page2')) {
        //           // The class "pp-viewing-page2" exists in the body
        //           updateActiveTabA();
        //         }
        //       }
            
        //       // Execute the initial check
        //       checkAndAddActiveClass();
                
              
        // });



        $('._side-nav a').click(function (e) {
               
                
            
            var tab = $(this).attr('tab');
            
            // Remove the 'active' class from the currently active "tab a" element
            $('.tab a.active').removeClass('active');
            $('.tabs_content2.active').removeClass('active');
            $('.tabs_content.active').removeClass('active').css('display', 'none');;
            
            // Add the 'active' class to the corresponding "tab a" element with the same href
            $('.tab a[tab="' + tab + '"]').addClass('active');
            $('.tabs_content2[tab="' + tab + '"]').addClass('active');
            $('.tabs_content[tab="' + tab + '"]').addClass('active').css('display', 'block');



var $activeItem = $('.your-list li .active');
var $indicator = $('.indicator');
// Move the indicator element to the active item
$indicator.css({
    'left': $activeItem.position().left + 'px',
    'right': 'auto', 
});
$indicator.width($activeItem.width());

           
 });

    
          
    
       
            $('.jump_page a').click(function (btn) {
               
                
                
                var tab = $(this).attr('tab');
                
                // Remove the 'active' class from the currently active "tab a" element
                $('.tab a.active').removeClass('active');
                $('.tabs_content2.active').removeClass('active');
                $('.tabs_content.active').removeClass('active').css('display', 'none');;
                
                // Add the 'active' class to the corresponding "tab a" element with the same href
                $('.tab a[tab="' + tab + '"]').addClass('active');
                $('.tabs_content2[tab="' + tab + '"]').addClass('active');
                $('.tabs_content[tab="' + tab + '"]').addClass('active').css('display', 'block');

                var $activeItem = $('.your-list li .active');
var $indicator = $('.indicator');
// Move the indicator element to the active item
$indicator.css({
    'left': $activeItem.position().left + 'px',
    'right': 'auto', 
});
$indicator.width($activeItem.width());

               
              });
              


              $('.footer-links a').click(function (footer_link) {
               
                
                
                var tab = $(this).attr('tab');
               
                // Remove the 'active' class from the currently active "tab a" element
                $('.tab a.active').removeClass('active');
                $('.tabs_content2.active').removeClass('active');
                $('.tabs_content.active').removeClass('active').css('display', 'none');;
                
                // Add the 'active' class to the corresponding "tab a" element with the same href
                $('.tab a[tab="' + tab + '"]').addClass('active');
                $('.tabs_content2[tab="' + tab + '"]').addClass('active');
                $('.tabs_content[tab="' + tab + '"]').addClass('active').css('display', 'block');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
                
              });
              
       


});


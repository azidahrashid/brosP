$(document).ready(function() {
    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
          direction: 'horizontal',
          loopTop: true,
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6', 'page7', 'page8' , 'page9' , 'page10' , 'page11'],
        sectionsColor: ['#241440', '#241440', '#241440', '#241440', '#241440','#241440','#241440','#241440' , '#241440' , '#241440' , '#241440'],
        navigation:false,
        //navigation: {
            //'position': 'right',
              // 'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
         //  },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
            $('.home_a').click(function () {
                var targetData = $(this).data('target'); // Get the target from data-target attribute
            
                if (targetData) {
                    // Find the section with the matching data-section attribute
                    var targetSection = $(`[data-section="${targetData}"]`)[0];
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        console.error('Section not found for target:', targetData);
                    }
                } else {
                    console.error('data-target attribute is missing');
                }
            });
            
            $('.about_a').click(function () {
                var targetData = $(this).data('target'); // Get the target from data-target attribute
            
                if (targetData) {
                    // Find the section with the matching data-section attribute
                    var targetSection = $(`[data-section="${targetData}"]`)[0];
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        console.error('Section not found for target:', targetData);
                    }
                } else {
                    console.error('data-target attribute is missing');
                }
            });
            
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
        effect: "fade",
          direction: "vertical",
          fadeEffect: {
            crossFade: true  // Enables the crossfade effect between slides
        },
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



// document.addEventListener("DOMContentLoaded", function () {
//     // Reusable function to set up bullets and scroll interactions
//     function setupBulletNavigation(parentSelector, bulletContainerSelector, navigationPrefix) {
//         var parent = document.querySelector(parentSelector);
//         var bulletContainer = document.querySelector(bulletContainerSelector);
//         if (!parent || !bulletContainer) {
//             console.error('Parent or bullet container not found:', parentSelector, bulletContainerSelector);
//             return;
//         }

//         var sections = parent.querySelectorAll('.section__');
//         bulletContainer.innerHTML = ''; // Clear existing bullets if any

//         // Assign unique data attributes to sections and generate bullets dynamically
//         sections.forEach((section, index) => {
//             var sectionData = `${navigationPrefix}_section${index + 1}`;
//             section.setAttribute('data-section', sectionData);

//             var bullet = document.createElement('div');
//             bullet.classList.add('bullet');
//             bullet.setAttribute('data-target', sectionData);
//             bullet.setAttribute('aria-label', `Navigate to ${sectionData}`);
//             bullet.setAttribute('role', 'button');
//             bullet.setAttribute('tabindex', '0');
//             bulletContainer.appendChild(bullet);
//         });

//         var bullets = bulletContainer.querySelectorAll('.bullet');
//         var controller = new ScrollMagic.Controller();

//         // Create ScrollMagic scenes
//         sections.forEach((section, index) => {
//             new ScrollMagic.Scene({
//                 triggerElement: section,
//                 triggerHook: 0.7,
//                 duration: '80%',
//             })
//                 .on('enter', function () {
//                     bullets.forEach(bullet => bullet.classList.remove('active'));
//                     bullets[index].classList.add('active');

//                     gsap.to(section, {
//                         opacity: 1,
//                         scale: 1,
//                         duration: 1,
//                     });
//                 })
//                 .on('leave', function () {
//                     gsap.to(section, {
//                         opacity: 0,
//                         scale: 0.8,
//                         duration: 1,
//                     });
//                 })
//                 .addTo(controller);
//         });

//         // Single click event listener for bulletContainer
//         bulletContainer.addEventListener('click', function (event) {
//             if (event.target.classList.contains('bullet')) {
//                 var targetData = event.target.getAttribute('data-target');
//                 var targetSection = parent.querySelector(`[data-section="${targetData}"]`);

//                 if (targetSection) {
//                     // Scroll to the section with smooth behavior
//                     targetSection.scrollIntoView({ behavior: 'smooth' });
//                 } else {
//                     console.error('Section not found:', targetData);
//                 }
//             }
//         });
//     }

//     // Setup navigation for multiple parents and containers
//     setupBulletNavigation('#section1', '.bullet-navigation1', 'nav1');
//     setupBulletNavigation('#section3', '.bullet-navigation2', 'nav2');
//     setupBulletNavigation('#section4', '.bullet-navigation3', 'nav3');
// });





// document.addEventListener("DOMContentLoaded", function () {
//     function setupHorizontalToVerticalScroll(parentSelector, wrapSelector, groupSelector, nextSectionSelector) {
//         const parent = document.querySelector(parentSelector);
//         const wrap = document.querySelector(wrapSelector);
//         const group = document.querySelector(groupSelector);
//         const nextSection = document.querySelector(nextSectionSelector);

//         if (!parent || !wrap || !group || !nextSection) {
//             console.error(
//                 "Parent, wrap, group, or next section not found:",
//                 parentSelector,
//                 wrapSelector,
//                 groupSelector,
//                 nextSectionSelector
//             );
//             return;
//         }

//         const controller = new ScrollMagic.Controller();
//         const groupWidth = group.offsetWidth - window.innerWidth; // Total scrollable horizontal width

//         // Create GSAP timeline for horizontal scrolling
//         const horizontalScroll = gsap.timeline();
//         horizontalScroll.to(group, {
//             x: -groupWidth, // Scroll horizontally to the end of the group
//             ease: "power2.inOut",
//         });

//         // Horizontal scrolling Scene
//         new ScrollMagic.Scene({
//             triggerElement: parent,
//             triggerHook: 0,
//             duration: groupWidth, // Horizontal scrolling duration
//         })
//             .setTween(horizontalScroll)
//             .setPin(parent)
//             .on("end", () => {
//                 // Ensure the parent is pinned until horizontal scrolling completes
//                 gsap.set(parent, { clearProps: "all" }); // Unpin parent
//             })
//             .addTo(controller);

//         // Pin the next section for smooth continuation of vertical scrolling
//         new ScrollMagic.Scene({
//             triggerElement: nextSection,
//             triggerHook: 0,
//             offset: -groupWidth, // Start vertical scroll when horizontal scroll ends
//         })
//             .setPin(nextSection)
//             .addTo(controller);
//     }

//     // Initialize horizontal-to-vertical scrolling
//     setupHorizontalToVerticalScroll(
//         ".section7_horizontal", // Parent selector
//         ".av-section-7__wrap", // Wrap selector
//         ".av-section-7__group", // Group selector
//         ".section_horizontalStop" // Next section selector
//     );
// });




document.addEventListener("DOMContentLoaded", function () {
    // Reusable function to set up bullets and scroll interactions
    function setupBulletNavigation(parentSelector, bulletContainerSelector, navigationPrefix) {
        const parent = document.querySelector(parentSelector);
        const bulletContainer = document.querySelector(bulletContainerSelector);

        if (!parent || !bulletContainer) {
            console.error('Parent or bullet container not found:', parentSelector, bulletContainerSelector);
            return;
        }

        const sections = parent.querySelectorAll('.section__');
        if (sections.length === 0) {
            console.error('No sections found within parent:', parentSelector);
            return;
        }

        bulletContainer.innerHTML = ''; // Clear existing bullets if any

        sections.forEach((section, index) => {
            const sectionData = `${navigationPrefix}_section${index + 1}`;
            section.setAttribute('data-section', sectionData);

            const bullet = document.createElement('div');
            bullet.classList.add('bullet');
            bullet.setAttribute('data-target', sectionData);
            bullet.setAttribute('aria-label', `Navigate to ${sectionData}`);
            bullet.setAttribute('role', 'button');
            bullet.setAttribute('tabindex', '0');
            bulletContainer.appendChild(bullet);
        });

        const bullets = bulletContainer.querySelectorAll('.bullet');
        const controller = new ScrollMagic.Controller();

        sections.forEach((section, index) => {
            new ScrollMagic.Scene({
                triggerElement: section,
                triggerHook: 0.7,
                duration: '80%',
            })
                .on('enter', function () {
                    bullets.forEach(bullet => bullet.classList.remove('active'));
                    bullets[index].classList.add('active');

                    gsap.to(section, {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                    });
                })
                .on('leave', function () {
                    gsap.to(section, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 1,
                    });
                })
                .addTo(controller);
        });

        bulletContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('bullet')) {
                const targetData = event.target.getAttribute('data-target');
                const targetSection = parent.querySelector(`[data-section="${targetData}"]`);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('Section not found for data-target:', targetData);
                }
            }
        });
    }

    // Initialize bullet navigation for sections
    setupBulletNavigation('#section1', '.bullet-navigation1', 'nav1');
    setupBulletNavigation('#section3', '.bullet-navigation2', 'nav2');
    setupBulletNavigation('#section4', '.bullet-navigation3', 'nav3');


        // Function to set up horizontal to vertical scroll with mouse wheel support

    
});

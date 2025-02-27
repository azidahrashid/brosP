$(document).ready(function() {
    /*
        * Plugin intialization
    */
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        loopTop: true,
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6', 'page7', 'page8' , 'page9' , 'page10' , 'page11' , 'page12' , 'page13' , 'page14' , 'page15'],
        sectionsColor: ['#241440', '#241440', '#241440', '#241440', '#241440','#241440','#241440','#241440' , '#241440' , '#241440' , '#241440' , '#241440' , '#241440' , '#241440' , '#241440'],
        navigation:false,
        keyboardScrolling: false,
        //navigation: {
        //'position': 'right',
        // 'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
        //  },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
            $('.home_a').click(function () {
                var targetData = $(this).data('target'); // Get the target from data-target attribute
                
                if (targetData) {
                    
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
                var targetData = $(this).data('target'); 
                if (targetData) {
                    
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
        afterLoad: function (anchorLink, index) {
            if (index > 1) {
                $('#pp-nav').removeClass('custom');
            } else {
                $('#pp-nav').addClass('custom');
            }
    
            // Find all sections
            var $sections = $('.pp-section');

            // Loop through all sections
            $sections.each(function (sectionIndex) {
                var $section = $(this);

                if (sectionIndex === index - 1) {
                    // Current section: add animation class
                    $section.find('.animated.thisani').each(function () {
                        var $element = $(this);
                        $element.addClass('zoomInDown'); // Add animation class
                    });
                } else {
                    // Other sections: remove animation class
                    $section.find('.animated.thisani').each(function () {
                        var $element = $(this);
                        $element.removeClass('zoomInDown'); // Remove animation class
                    });
                }


                if (sectionIndex === index - 1) {
                    // Current section: add animation class
                    $section.find('.animated.coin').each(function () {
                        var $element = $(this);
                        $element.addClass('rollIn'); // Add animation class
                    });
                } else {
                    // Other sections: remove animation class
                    $section.find('.animated.coin').each(function () {
                        var $element = $(this);
                        $element.removeClass('rollIn'); // Remove animation class
                    });
                }

                if (sectionIndex === index - 1) {
                    $section.find('.animted.av-section-1__big-image').each(function(){
                        var $element = $(this);
                        $element.addClass('rollIn');
                    });
                } else {
                    $section.find('.animated.av-section-1__big-image').each(function(){
                        var $element = $(this);
                        $element.removeClass('rollIn');
                    });
                }


                if (sectionIndex === index - 1) {
                    // Current section: add animation class
                    $section.find('.animated.av-section-1__big-logo').each(function () {
                        var $element = $(this);
                        $element.addClass('slideInDown'); // Add animation class
                    });
                } else {
                    // Other sections: remove animation class
                    $section.find('.animated.av-section-1__big-logo').each(function () {
                        var $element = $(this);
                        $element.removeClass('slideInDown'); // Remove animation class
                    });
                }


                if (sectionIndex === index - 1) {
                    // Current section: add animation class
                    $section.find('.animated.about--av-section-1__big-logo').each(function () {
                        var $element = $(this);
                        $element.addClass('slideInDown'); // Add animation class
                    });
                } else {
                    // Other sections: remove animation class
                    $section.find('.animated.about--av-section-1__big-logo').each(function () {
                        var $element = $(this);
                        $element.removeClass('slideInDown'); // Remove animation class
                    });
                }
                
                


            });
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
        keyboard: false,
        simulateTouch: true,
        parallax: true,
        effect: "fade",
        direction: "vertical",
        fadeEffect: {
            crossFade: true  // Enables the crossfade effect between slides
        },
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: false
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
//Toggle Hamburger menu
(function($){
    "use strict";
     let NAY = {};
     NAY.MenuTogglerClose = function(){
        $(".hamburger-menu").on('click', function(){
            $('.header-left').stop().toggleClass('menu-open');
        });
        
        $('.header-left a').on('click', function(){
            const toggle = $('.hamburger-menu');
        });
    }
    
    $(document).on("ready", function(){
        NAY.MenuTogglerClose()
    });
})(jQuery);  


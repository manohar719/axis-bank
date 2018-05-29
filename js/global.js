//object lateral pattern

var winW = $(window).width();

var carousel = {
    config: {
        wrapper: '.owlCarousel',
        items: 1,
        loop: false,
        nav: true,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        margin: 10,
        navText: ["<img src='images/back.png'>","<img src='images/next.png'>"],
        responsive: false

    },

    init: function(config) {
        $.extend(carousel.config, config);
        this.cacheDom();
        this.render();
    },
    cacheDom: function() {
        var wrapper = carousel.config.wrapper;
    },
    render: function() {
        $(carousel.config.wrapper).owlCarousel({
            loop: carousel.config.loop,
            nav: carousel.config.nav,
            items: carousel.config.items,
            autoplay: carousel.config.autoplay,
            autoplayTimeout: carousel.config.autoplayTimeout,
            autoplayHoverPause: carousel.config.autoplayHoverPause,
            margin: carousel.config.margin,
            navText: carousel.config.navText,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items : carousel.config.mobile
                },
                // breakpoint from 768 up
                768 : {
                    items : carousel.config.tab
                },
                992:{
                    items: carousel.config.desktop
                }
            }
        });
    },
    setHeight: function() {
        console.log('setHeight');
    },
    destroy: function() {
        this.$wrapper.owlCarousel('destroy');
        this.$wrapper.find('.owl-stage').detach();
    }

};

var tabs = {
     config: {
        wrapper: '.tab-wrapper',
        tab: '.js-tabs li',
        content: '.tab-content .content'

    },
    init: function(config) {
        $.extend(tabs.config, config);
        this.click();
    },
    click: function(){
         $(tabs.config.tab).on('click',function(){
           var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $(tabs.config.content).hide();
            $(this).parents(tabs.config.wrapper).find(tabs.config.content).eq(index).fadeIn('slow');
        })
    }       
}



$(document).ready(function() {

    if ($('.owl-carousel').length) {
        carousel.init({
             wrapper: '.frauds-carousel',
            items: 2,
            margin: 10,
            navText: ["<img src='images/right-arrow.png'>","<img src='images/right-arrow.png'>"],
            autoplay: false,
            responsive: true,
            desktop:2,
            mobile:1
        })
    }
    if($('.js-tabs').length){
        tabs.init();
    }
    if($('.humburger').length){
        $('.humburger').on('click',function(){
            $(this).toggleClass('open');
            $('.megaMenu').slideToggle();
        })
    }

});





$(window).load(function() {

});

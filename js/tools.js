$(document).ready(function() {

    $('.land-dishwasher-welcome-btn a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            var curOffset = 0;
            if ($('header').length == 1) {
                curOffset = $('header').outerHeight();
            }
            $('html, body').animate({'scrollTop': curBlock.offset().top - curOffset});
        }
        e.preventDefault();
    });

    $('.land-dishwasher-catalogue-menu a').click(function(e) {
        var curLink = $(this);
        if (!curLink.hasClass('active')) {
            $('.land-dishwasher-catalogue-menu a.active').removeClass('active');
            curLink.addClass('active');
            var curIndex = $('.land-dishwasher-catalogue-menu a').index(curLink);
            $('.land-dishwasher-catalogue-content.active').removeClass('active');
            $('.land-dishwasher-catalogue-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

});

var landdishwasherTechSwiper = null;

$(window).on('load resize', function() {

    $('.land-dishwasher-techs-list').each(function() {
        var curSlider = $(this);
        if (curSlider.find('.swiper').hasClass('swiper-initialized')) {
            landdishwasherTechSwiper.destroy();
        }
        if ($(window).width() < 1168) {
            landdishwasherTechSwiper = new Swiper(curSlider.find('.swiper')[0], {
                slidesPerView: 1,
                autoHeight: true,
                navigation: {
                    nextEl: curSlider.find('.swiper-button-next')[0],
                    prevEl: curSlider.find('.swiper-button-prev')[0],
                },
                pagination: {
                    el: curSlider.find('.swiper-pagination')[0],
                    clickable: true
                }
            });
        }
    });

});
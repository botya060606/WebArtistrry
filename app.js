jQuery(document).ready(function($){
    $('.portfolio-wrapper').css('height', $('.portfolio--list.active').height() + 'px')
    $('.portfolio').css('top', '-' + ($('.portfolio').outerHeight(true) - window.innerHeight - 10) + 'px')
    $('.portfolio--tab').click(function(){
        $('.portfolio--tab').removeClass('active')
        $('.portfolio--list').removeClass('active')
        let val = $(this).attr('id')
        $(this).addClass('active')
        $('.portfolio--list[data-type="' + val + '"]').addClass('active')

        $('.portfolio-wrapper').css('height', $('.portfolio--list.active').height()  + 'px')
        $('.portfolio').css('top', '-' + ($('.portfolio').outerHeight(true) - window.innerHeight - 10) + 'px')
    })

    var $stickySection = $('.portfolio');

    function checkPosition() {
        var sectionPosition = $stickySection.offset().top - $(window).scrollTop() - 100;
        if (sectionPosition > 0) {
            $('html, body').animate({scrollTop: $(window).scrollTop() + sectionPosition}, 1000, function() {
                if ($stickySection.css('position') === 'sticky') {
                    return; 
                }
                checkPosition();
            });
        }
    }

    $('.menu-item').click(checkPosition)

    
})
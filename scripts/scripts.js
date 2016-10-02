$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');
      $("#videoframe").attr('src', $(this).data('src')); //load according video
      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    });
    $(".text-menu > a").on('click', function () {
      $(".menu-button").removeClass("open");
      $(".text-menu").hide();
    })
    $(".menu-button").on('click', function () {
      $(this).toggleClass('open');

      $( ".text-menu" ).toggle( "slow", function() {

      });

    });


  });
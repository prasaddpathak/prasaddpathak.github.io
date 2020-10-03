// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

    // Contact Form
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyIDSBuC3gV7oQF9L9QoteR2j4JTPTHVk1yaYMBjJoT2vfhxIc/exec'
    const form = document.forms['contact-me']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          alert("Your message was sent successfully! I will be in touch as soon as I can.");
          //location.reload(true);
          location.assign("https://prasaddpathak.github.io/");
        })
        .catch(error => console.error('Error!', error.message))
    })

    // function validateName() {
    //     var name = document.getElementById('name').value;
    //     if(name.length == 0) {
    //       alert("Name can't be blank") ;
    //       return false;

    //     }
    //     if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    //       alert("Please enter your correct name") ;//Validation Message
    //       return false;
    //     }
    //     return true;
    //   }

    //   function validatePhone() {
    //     var phone = document.getElementById('phone').value;
    //     if(phone.length == 0) {
    //       alert("Phone number can't be blank") ;//Validation Message
    //       return false;
    //     }

    //     if(!phone.match(/^[0]?[789]\d{9}$/)) {
    //      alert("Please enter a correct phone number") ;//Validation Message
    //      return false;
    //    }

    //    return true;

    //  }

    //  function validateEmail () {

    //   var email = document.getElementById('email').value;
    //   if(email.length == 0) {
    //     alert("Email can't be blank") ;//Validation Message
    //     return false;

    //   }

    //   if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    //     alert("Please enter a correct email address") ;//Validation Message
    //     return false;

    //   }

    //   return true;

    // }


    // function validateForm() {
    //   if (!validateName() || !validatePhone() || !validateEmail()) {

    //     alert("Form not submitted");//Validation Message
    //     return false;
    //   }
    //   else {
    //     submitted=true;
    //     return true;
    //   }
    // }

    // old
    // validate contact form
    // $(function () {
    //     $('#contact-form').validate({
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             email: {
    //                 required: true
    //             },
    //             phone: {
    //                 required: false
    //             },
    //             message: {
    //                 required: true
    //             }

    //         },
    //         messages: {
    //             name: {
    //                 required: "This field is required",
    //                 minlength: "your name must consist of at least 2 characters"
    //             },
    //             email: {
    //                 required: "This field is required"
    //             },
    //             message: {
    //                 required: "This field is required"
    //             }
    //         },
    //         submitHandler: function (form) {
    //             $(form).ajaxSubmit({
    //                 type: "POST",
    //                 data: $(form).serialize(),
    //                 url: "process.php",
    //                 success: function () {
    //                     $('#contact :input').attr('disabled', 'disabled');
    //                     $('#contact').fadeTo("slow", 1, function () {
    //                         $(this).find(':input').attr('disabled', 'disabled');
    //                         $(this).find('label').css('cursor', 'default');
    //                         $('#success').fadeIn();
    //                     });
    //                 },
    //                 error: function () {
    //                     $('#contact').fadeTo("slow", 1, function () {
    //                         $('#error').fadeIn();
    //                     });
    //                 }
    //             });
    //         }
    //     });

    // });
});
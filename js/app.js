(function () {
    var words = ["Web Developer","Front-End Developer","Software Developer","UI/UX Designer"],
    i = 0;
    setInterval(function(){ $('#word').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    }); }, 2000)
})();

(function () {
    var words = ["이준수","Joon"],
    i = 0;
    setInterval(function(){ $('#name').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    }); }, 2000)
})();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

$('#close').on('click', function(){
    $('.alert-box').addClass("hide");
})

$('#email').on( {
    mouseenter: function() {
        $('#email').html('Click to Copy!');
    },
    mouseleave: function(){
        $('#email').html('joonsoolee18@augustana.edu');
    }
})
$('#contact').on( {
    mouseenter: function() {
        $('#contact').html('Go to Contact Page');
    },
    mouseleave: function(){
        $('#contact').html('More');
    }
})

$('#email').on('click', function(){
    var mail = $("#email");
    console.log(mail.attr('name'));
    navigator.clipboard.writeText(mail.attr('name'));
    alert("Email Copied to Clipboard!")
})

// $(window).resize(function() {
//     if ($(window).width() > 650) {
//         $('#email').on( {
//             mouseenter: function() {
//                 $('#email').html('joonsoolee18@augustana.edu - Click to Copy');
//             },
//             mouseleave: function(){
//                 $('#email').html('Email');
//             }
//         })
//         $('#contact').on( {
//             mouseenter: function() {
//                 $('#contact').html('Go to Contact Page');
//             },
//             mouseleave: function(){
//                 $('#contact').html('More');
//             }
//         })
//     }
//     else {
//         console.log("less than 650");
//         $('#email').html('joonsoolee18@augustana.edu');
//         $('#contact').html('Contact Page');
//     }
// })

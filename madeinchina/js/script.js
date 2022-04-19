// 初始化
var b3_into = 1;
var p1_chioce = 1;
var cart_open = false;
// $(".ar-2").hide();
// $(".ar-3").hide();

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoHeight: true,
    smartSpeed: 500
});

function wait(feedback) {
    window.setTimeout(function() {
        console.log(feedback);
        feedback()
    }, 6000);
}
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})
$(".index .b-3 .item").click(function() {
    function rmb3aa() {
        $(".index .b-3").find(".item").removeClass('aa');
        $(".index .b-3").find(".ar").removeClass('aa');
        $(".index .b-3").find(".img").removeClass('aa');
    }
    switch (b3_into) {
        case 1:
            rmb3aa();
            $(this).addClass('aa');
            $(".index .b-3").find(".ar-1").addClass('aa');
            $(".index .b-3").find(".b3-1").addClass('aa');

            break;
        case 2:
            rmb3aa();
            $(this).addClass('aa');
            $(".index .b-3").find(".ar-2").addClass('aa');
            $(".index .b-3").find(".b3-2").addClass('aa');

            break;
        case 3:
            rmb3aa();
            $(this).addClass('aa');
            $(".index .b-3").find(".ar-3").addClass('aa');
            $(".index .b-3").find(".b3-3").addClass('aa');

            break;
    }
});
$(".tag").mouseover(
    function() {
        $(".product .p-1").find(".io").addClass('ioh').removeClass('io');
    }
).mouseout(
    function() {
        $(".product .p-1").find(".ioh").addClass('io').removeClass('ioh');
        // $(".product .p-1").find(".ioa").removeClass('ioa');
    }
);

function p1_tag(chioce) {
    $(".product .p-1").find(".move").removeClass('p0');
    $(".product .p-1").find(".move").removeClass('p25');
    $(".product .p-1").find(".move").removeClass('p50');
    $(".product .p-1").find(".move").removeClass('p75');
    $(".product .p-1").find(".tag").removeClass('ioh');
    $(".product .p-1").find(".tag").removeClass('io');


    switch (chioce) {
        case 1:
            var p1_chioce = 1;
            console.log(p1_chioce);
            $(".product .p-1").find(".move").addClass('p0');
            $(".product .p-1").find(".tag:nth-child(1)").addClass('io');
            break;
        case 2:
            var p1_chioce = 2;
            console.log(p1_chioce);
            $(".product .p-1").find(".move").addClass('p25');
            $(".product .p-1").find(".tag:nth-child(2)").addClass('io');
            break;
        case 3:
            var p1_chioce = 3;
            console.log(p1_chioce);
            $(".product .p-1").find(".move").addClass('p50');
            $(".product .p-1").find(".tag:nth-child(3)").addClass('io');
            break;
        case 4:
            var p1_chioce = 4;
            console.log(p1_chioce);
            $(".product .p-1").find(".move").addClass('p75');
            $(".product .p-1").find(".tag:nth-child(4)").addClass('io');
            break;
    }
}

// function cart_open_close(cart) {
//     if (cart = true) {

//         console.log(cart);
//     } else {
//         console.log(cart);
//         $(".product").find(".cart").addClass('close');
//     }
// }
$(".product .p-1 .btn").click(function() {
    cart_open = true;
    $(".product").find(".cart").removeClass('close');
});
$(".cart .bg").click(function() {
    cart_open = false;
    $(".product").find(".cart").addClass('close');
});
$(".cart .icon").click(function() {
    cart_open = false;
    $(".product").find(".cart").addClass('close');
});
$(".cart-icon").click(function() {
    cart_open = true;
    $(".product").find(".cart").removeClass('close');
});

$(".support .item.dr-close").click(function() {
    console.log(this);
    $(this).removeClass('dr-close');
    $(this).addClass('dr-open');

});
$(".support .dr-open").click(function() {
    console.log(this);
    $(this).addClass('dr-close');
    $(this).removeClass('dr-open');

});

// function p3(e) {

// $(window).scroll(function() {
//     if ($(window).scrollTop() > 50) {
//         $(".nav").find(".nav").addClass("top");
//     } else {
//         $(".nav").find(".top").removeClass("top");
//     }
// });
$('.runload').focus(function() {
    $('load').find(".none").removeClass('none');
})
setTimeout(function() {


    $('.load').addClass('none');



}, 1000);

$(".open").click(function() {
    console.log(3745681);
    $(".nav").find(".m-none").removeClass('m-none');
});
$(".m-close").click(function() {
    console.log(3745681);
    $(".nav").find(".menu").addClass('m-none');
});
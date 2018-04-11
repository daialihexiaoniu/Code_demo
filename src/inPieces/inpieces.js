import $ from "jquery";

$(() => {
    const arr = [
        'start-wrap', 
        'pieces-wrap-1',
        'pieces-wrap-2',
        'pieces-wrap-3',
        'pieces-wrap-4'
    ];

    $('.J-button').on('click', () => {
        $('.J-wrap').removeClass('start-wrap').addClass('pieces-wrap-1');
    })

    $('.J-button-1').on('click', () => {
        $('.J-wrap').removeClass('pieces-wrap-1').addClass('pieces-wrap-2');
    })

    $('.J-button-2').on('click', () => {
        $('.J-wrap').removeClass('pieces-wrap-2').addClass('pieces-wrap-3');
    })

    $('.J-button-3').on('click', () => {
        $('.J-wrap').removeClass('pieces-wrap-3').addClass('pieces-wrap-4');
    })

    $('.J-button-4').on('click', () => {
        $('.J-wrap').removeClass('pieces-wrap-4').addClass('pieces-wrap-5');
    })
})
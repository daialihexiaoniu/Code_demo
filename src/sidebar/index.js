import $ from "jquery";

$(() => {
    $('.J-question').on('click', () => {
        $('.J-sidebar').addClass('active');
        $('.J-mask').addClass('active');
    });
    $('.J-mask').on('click', () => {
        $('.J-sidebar').removeClass('active');
        $('.J-mask').removeClass('active');
    })
});
import $ from "jquery";

$(() => {
    const arr = [
        'pieces-wrap-0', 
        'pieces-wrap-1',
        'pieces-wrap-2',
        'pieces-wrap-3',
        'pieces-wrap-4',
        'pieces-wrap-5',
        'pieces-wrap-6',
    ];

    for(let i = 0, len = arr.length ; i < len; i++) {
        $(`.J-button-${i - 1}`).on('click', () => {
            $('.J-wrap').removeClass(arr[i - 1]).addClass(arr[i]);
        })
    }
})
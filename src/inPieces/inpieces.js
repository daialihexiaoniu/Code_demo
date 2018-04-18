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
        'pieces-wrap-7',
        'pieces-wrap-8',
        'pieces-wrap-9',
        'pieces-wrap-10',
        'pieces-wrap-11',
        'pieces-wrap-12',
        'pieces-wrap-13',
        'pieces-wrap-14',
        'pieces-wrap-15',
        'pieces-wrap-16',
        'pieces-wrap-17',
        'pieces-wrap-18',
        'pieces-wrap-19',
        'pieces-wrap-20',
        'pieces-wrap-21',
        'pieces-wrap-22',
        'pieces-wrap-23',
        'pieces-wrap-24',
        'pieces-wrap-25',
        'pieces-wrap-26',
        'pieces-wrap-27',
        'pieces-wrap-28',
        'pieces-wrap-29',
        'pieces-wrap-30',
    ];

    for(let i = 0, len = arr.length ; i < len; i++) {
        $(`.J-button-${i - 1}`).on('click', () => {
            $('.J-wrap').removeClass(arr[i - 1]).addClass(arr[i]);
        })
    }
})
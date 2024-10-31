document.addEventListener('DOMContentLoaded', () => {
    const changeText = () => {
        document.getElementById('line9b').textContent = 'PSYCHO';
    };
    setTimeout(changeText, 13000); // 13秒後改變文字
});


jQuery(document).ready(function ($) {
    $("li.content").hide();
    $("ul.toggle-menu").delegate("li.toggle", "click", function () {
        $(this).next().toggle("fast").siblings(".content").hide("fast");
    });
});
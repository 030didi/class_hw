document.addEventListener('DOMContentLoaded', () => {
    const changeText = () => {
        document.getElementById('line9b').textContent = 'Fish'; // Change the text for line 9b

    };

    // Change the text after 15 seconds
    setTimeout(changeText, 13000);
});


jQuery(document).ready(function ($) {
    $("li.content").hide();
    $("ul.toggle-menu").delegate("li.toggle", "click", function () {
        $(this).next().toggle("fast").siblings(".content").hide("fast");
    });
});
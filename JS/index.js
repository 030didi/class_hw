// 開始畫面動畫
document.addEventListener('DOMContentLoaded', () => {
    const changeText = () => {
        document.getElementById('line9b').textContent = 'Soy Lu Pin yu'; // Change the text for line 9b

    };

    // Change the text after 15 seconds
    setTimeout(changeText, 13000);
});

// navbar
jQuery(document).ready(function ($) {
    $("li.content").hide();
    $("ul.toggle-menu").delegate("li.toggle", "click", function () {
        $(this).next().toggle("fast").siblings(".content").hide("fast");
    });
});

// base圓餅進度條
document.addEventListener("DOMContentLoaded", function () {
    function animateProgress(endVal, progressId, circleClass) {
        let currentVal = 0;
        const progressCountEl = document.getElementById(progressId); // 單獨的進度條%
        const circleEl = document.querySelector(`.${circleClass} circle`); // 單獨的圓圈

        const circumference = 295.3;
        circleEl.style.setProperty('--offset', circumference - (circumference * endVal / 100));
        circleEl.classList.add('is-animating');

        const interval = 3000 / (endVal - currentVal + 10);

        function increaseValue() {
            if (currentVal < endVal) {
                currentVal += 1;
                progressCountEl.textContent = currentVal;
                setTimeout(increaseValue, interval);
            }
        }

        setTimeout(increaseValue, interval);
    }

    // 各自調用函式來控制三個不同的進度條
    animateProgress(87, 'progress1', 'circle1');
    animateProgress(90, 'progress2', 'circle2');
    animateProgress(100, 'progress3', 'circle3');
});
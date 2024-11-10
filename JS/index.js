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


// 為三個不同的幻燈片設置控制器
let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;

// 第一個幻燈片控制器
function showSlides1(props) {
    let i;
    let slides = document.getElementsByClassName("singleSlide1");

    if (props > slides.length) {
        slideIndex1 = 1;
    }

    if (props < 1) {
        slideIndex1 = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slides[slideIndex1 - 1]) {
        slides[slideIndex1 - 1].style.display = "flex";
    }
}

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

// 第二個幻燈片控制器
function showSlides2(props) {
    let i;
    let slides = document.getElementsByClassName("singleSlide2");

    if (props > slides.length) {
        slideIndex2 = 1;
    }

    if (props < 1) {
        slideIndex2 = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slides[slideIndex2 - 1]) {
        slides[slideIndex2 - 1].style.display = "flex";
    }
}

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// 第三個幻燈片控制器
function showSlides3(props) {
    let i;
    let slides = document.getElementsByClassName("singleSlide3");

    if (props > slides.length) {
        slideIndex3 = 1;
    }

    if (props < 1) {
        slideIndex3 = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slides[slideIndex3 - 1]) {
        slides[slideIndex3 - 1].style.display = "flex";
    }
}

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

// 初始化所有幻燈片
document.addEventListener("DOMContentLoaded", function () {
    showSlides1(slideIndex1);
    showSlides2(slideIndex2);
    showSlides3(slideIndex3);
});
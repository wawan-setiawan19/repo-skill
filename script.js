const skillHTML = document.querySelector(".html").style;
const skillCSS = document.querySelector(".css").style;
const skillJS = document.querySelector(".js").style;
const skillPHP = document.querySelector(".php").style;

const animasi = "animation:animasi 2s ease";

window.onscroll = () => {
    let nilaiScroll = document.documentElement.scrollTop;
    if (nilaiScroll < 200) {
        skillHTML.cssText = `animation:none`;
        skillCSS.cssText = `animation:none`;
        skillJS.cssText = `animation:none`;
        skillPHP.cssText = `animation:none`;
    }else{
        skillHTML.cssText = `${animasi}`;
        skillCSS.cssText = `${animasi}`;
        skillJS.cssText = `${animasi}`;
        skillPHP.cssText = `${animasi}`;
    }
}

// call default element
// const skillHTML = document.querySelector(".html");
// const skillCSS = document.querySelector(".css");
// const skillJS = document.querySelector(".js");
// const skillPHP = document.querySelector(".php");

// // create variable to styling
// const skillHTMLStyle = skillHTML.style;
// const skillCSSStyle = skillCSS.style;
// const skillJSStyle = skillJS.style;
// const skillPHPStyle = skillPHP.style;


    // if (nilaiScroll > 200) {
    //     skillHTMLStyle.cssText = `${animasi}`;
    // }

    // if (nilaiScroll > 250) {
    //     skillCSSStyle.cssText = `${animasi}`;
    // }

    // if (nilaiScroll > 350) {
    //     skillJSStyle.cssText = `${animasi}`;
    // }

    // if (nilaiScroll > 400) {
    //     skillPHPStyle.cssText = `${animasi}`;
    // }
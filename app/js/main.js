!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var r=document.querySelector(".our-services"),n=document.querySelector(".small-team"),o=r.querySelectorAll(".card"),i=n.querySelectorAll(".card");o.forEach((function(e,t){e.style.backgroundImage="url(".concat("./img/service-bg-"+ ++t,".png)");var r=e.querySelector(".open"),n=e.querySelector(".close"),o=e.querySelector(".card_description");r.addEventListener("click",(function(){o.classList.add("visible")})),n.addEventListener("click",(function(){o.classList.remove("visible")}))})),i.forEach((function(e){var t=e.querySelector(".discription");e.addEventListener("click",(function(e){t.classList.contains("active")?t.classList.remove("active"):(n.querySelector(".active")&&n.querySelector(".active").classList.remove("active"),t.classList.add("active"))}))})),new Swiper(".swiper-about-us",{effect:"flip",loop:!0,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:"true"}}),new Swiper(".swiper-avatars",{effect:"flip",loop:!0,allowTouchMove:!1,pagination:{el:".they-pagination",clickable:"true"},navigation:{nextEl:".they-button-next",prevEl:".they-button-prev"}}),new Swiper(".swiper-about-temmate",{effect:"fade",slidesPerView:1,loop:!0,allowTouchMove:!1,pagination:{el:".they-pagination",clickable:"true"},navigation:{nextEl:".they-button-next",prevEl:".they-button-prev"}})}]);
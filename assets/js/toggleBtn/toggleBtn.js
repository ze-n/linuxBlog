const nav = document.querySelector(".header__nav");
const toggleBtn = document.querySelector(".toggleBtn");
const bar1 = document.querySelector(".toggleBtn__bar1");
const bar2 = document.querySelector(".toggleBtn__bar2");
const bar3 = document.querySelector(".toggleBtn__bar3");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("toggleNav");
    bar1.classList.toggle("bar1");
    bar2.classList.toggle("bar2");
    bar3.classList.toggle("bar3");

})
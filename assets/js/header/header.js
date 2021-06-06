const header = document.querySelector(".header");
const navList = document.querySelector(".header__nav-list");

console.log(window.pageYOffset);
if (window.innerWidth > 960) {
    navList.style.background = "var(--green-color--800)";

} else {
    navList.style.background = "var(--green-color--400)";

};

document.addEventListener("scroll", () => {
    if (window.pageYOffset >= 580) {
        header.style.background = "var(--black-color)";
        navList.style.background = "var(--black-color)";
    } else {
        header.style.background = "var(--green-color--400)";
        if (window.innerWidth > 960) {
            navList.style.background = "var(--green-color--800)";

        } else {
            navList.style.background = "var(--green-color--400)";

        }
    }
});

let previousScroll = window.pageYOffset;

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 150) {
        let currentScroll = window.pageYOffset;
        if (currentScroll > previousScroll) {
            header.style.transform = "scaleY(0)";
        } else {
            header.style.transform = "scaleY(1)";
        }
        previousScroll = currentScroll;
    }
})
let screenHeight = window.screen.height;

let content1 = document.getElementById("content-1");
let content2 = document.getElementById("content-2");
let content3 = document.getElementById("content-3");
let content4 = document.getElementById("content-4");
let content5 = document.getElementById("content-5");

let content1Height = content1.getBoundingClientRect().top;
let content2Height = content2.getBoundingClientRect().top;
let content3Height = content3.getBoundingClientRect().top;
let content4Height = content4.getBoundingClientRect().top;
let content5Height = content5.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
    var scrollY = window.pageYOffset + screenHeight * 0.6;
    if(scrollY > content1Height){
        content1.style.opacity = 1;
    }
    if(scrollY > content2Height){
        content2.style.opacity = 1;
    }
    if(scrollY > content3Height){
        content3.style.opacity = 1;
    }
    if(scrollY > content4Height){
        content4.style.opacity = 1;
    }
    if(scrollY > content5Height){
        content5.style.opacity = 1;
    }
});

let buttton = document.getElementById("button");
buttton.addEventListener("click", () => {
    document.getElementById("firstview__image").setAttribute("src", "https://thumb.photo-ac.com/d2/d2204e3c5e0e2ff78efea3dc0e43faff_t.jpeg");
    document.getElementById("firstview__title").style.color = "rgb(255, 0, 0)";
    document.getElementById("firstview__title").style.transform = "translateX(0)";
});
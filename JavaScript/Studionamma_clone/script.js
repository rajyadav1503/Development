let floatingVideo = document.getElementById("floating-video");
let hero = document.querySelector(".hero");
let menu = document.querySelector(".menu");
let letstalk = document.querySelector(".letstalk");
let mode = document.querySelector(".darkmode");

let overlay = document.querySelector(".overlay-menu");

hero.addEventListener("mousemove", (e) => {

    floatingVideo.style.left = `${e.clientX}px`;
    floatingVideo.style.top = `${e.clientY}px`;

    floatingVideo.style.opacity = '1';

});
// hero.addEventListener("mouseleave", () => {

//     floatingVideo.style.opacity = "0";

// });

menu.addEventListener("mouseenter" , () => {
    menu.textContent = "OPEN";
});
menu.addEventListener("mouseleave" , () => {
    menu.textContent = "MENU";
});

letstalk.addEventListener("mouseenter" , () => {
    letstalk.textContent = "CONTACT US";
});
letstalk.addEventListener("mouseleave" , () => {
    letstalk.textContent = "LET'S TALK";
});

let letsTalkPage = document.querySelector(".lets-talk-page");

let isContactOverlayOpen = false;

letstalk.addEventListener("click", () => {

    isContactOverlayOpen = !isContactOverlayOpen;

    if (isContactOverlayOpen) {
        letsTalkPage.style.top = "0";
        floatingVideo.style.display = 'none';
    } else {
        letsTalkPage.style.top = "-120%";
        floatingVideo.style.display = 'block';
    }

});

let isOpen = false;

menu.addEventListener("click" , () => {

    isOpen = !isOpen;

    if(isOpen){
        menu.textContent = "CLOSE";
        overlay.style.top = "0";
        floatingVideo.style.display="none";
    }else{
        menu.textContent = "MENU";
        overlay.style.top = "-100%";
        floatingVideo.style.display="block";  
    }
});

console.log(floatingVideo);

let menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {

    let img = item.querySelector("img");
    let text = item.querySelector("h1");

    item.addEventListener("mouseenter", () => {
        img.style.opacity = "1";
        img.style.transform = "translateX(0)";
        text.style.transform = "translateX(150px)";
        img.style.paddingRight = "1rem";
    });

    item.addEventListener("mouseleave", () => {
        img.style.opacity = "0";
        img.style.transform = "translateX(-50px)";
        text.style.transform = "translateX(0)";
    });

});


const scrollVideo = document.getElementById("scrollVideo");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                scrollVideo.classList.add("show");
                scrollVideo.play();
            } else {
                scrollVideo.pause();
            }
        });
    },
    {
        threshold: 0.4
    }
);

observer.observe(scrollVideo);

const highlights = document.querySelectorAll(".highlight");

highlights.forEach((highlight) => {

  const images = highlight.querySelectorAll(".image-highlight");

  highlight.addEventListener("mouseenter", () => {

    images.forEach((image, index) => {

      image.style.opacity = "1";

      image.style.left = `${(index - 2) * 100}px`;
      image.style.top = `${(index % 2) * 80 - 150}px`;

      image.style.transform =
        `rotate(${(index - 2) * 5}deg) scale(1)`;
    });

  });

  highlight.addEventListener("mouseleave", () => {

    images.forEach((image) => {
      image.style.opacity = "0";
      image.style.transform = "scale(0.7)";
    });

  });

});













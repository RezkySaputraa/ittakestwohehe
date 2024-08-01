const hamburger = document.getElementById("hamburger");
const span1 = document.getElementById("span-1");
const span2 = document.getElementById("span-2");
const span3 = document.getElementById("span-3");

const navbar = document.getElementById("header-nav");

const video = document.querySelector(".video-real");
const play = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
  span1.classList.toggle("ham-click-1");
  span2.classList.toggle("ham-click-2");
  span3.classList.toggle("ham-click-3");

  navbar.classList.toggle("active");
});

document.addEventListener("click", (evt) => {
  if (!hamburger.contains(evt.target) && !navbar.contains(evt.target)) {
    navbar.classList.remove("active");
    span1.classList.remove("ham-click-1");
    span2.classList.remove("ham-click-2");
    span3.classList.remove("ham-click-3");
  }
});

video.addEventListener("click", () => {
  if (window.innerWidth >= 0) {
    window.open(
      "https://www.youtube.com/embed/rgTKtQ6WYb8?si=sj9HX7r2Nn_9VCyY"
    );
  }
});

play.addEventListener("click", () => {
  if (window.innerWidth >= 0) {
    window.open(
      "https://www.youtube.com/embed/rgTKtQ6WYb8?si=sj9HX7r2Nn_9VCyY"
    );
  }
});

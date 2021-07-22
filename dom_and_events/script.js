"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Lecture notes
const message = document.createElement("div");
message.classList.add("cookie-message");
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
message.innerHTML =
  'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';
header.append(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// const logo = document.querySelector(".nav__logo");
// logo.alt = "Beautiful minimalist logo.";

btnScrollTo.addEventListener("click", function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // modern way
  section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");
const alertH1 = function (e) {
  alert("addEventListener: Great! You're reading the heading");
};
h1.addEventListener("mouseenter", alertH1);
// h1.onmouseenter = function (e) {
//   alert("addEventListener: Great! You're reading the heading");
// };

// remove event listener
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// event propagation
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);

// Stop propagation
// e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true // different phase! Capturing phase!
// );

///////////////////////////////////////
// DOM Traversing

// Going downwards: child
const child = h1.querySelectorAll(".highlight");
const directChild1 = h1.childNodes;
const directChild2 = h1.children;
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
const parent = h1.parentNode;
const parent2 = h1.parentElement;
// not a direct parent
h1.closest(".header").style.background = "var(--gradient-secondary)";

// Sideways: siblings
const siblingElLeft = h1.previousElementSibling;
const siblingElRight = h1.nextElementSibling;
const siblingLeft = h1.previousSibling;
const siblingRight = h1.nextSibling;
// all siblings
const allSiblings = h1.parentElement.children;

///////////////////////////////////////
// Sticky navigation

// not an efficient way
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// Intersection Observer API
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

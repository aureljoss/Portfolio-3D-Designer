// ----- Scroll Indicator ----- //

// Set initial width to 0%
document.getElementById("myBar").style.width = "0%";

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// ---- //

// var text = document.querySelector("h1");
// document.addEventListener("scroll", () => {
//   text.style.left = window.scrollY * 5 + "px";
// });

//gsap.to(".hello", { duration: 2.5, ease: "bounce.out", x: -600 });

// ------ Cursor ------//
if (document.querySelector("body")) {
  new kursor({
    type: 1,
    removeDefaultCursor: true,
  });
}

// ------ Menu ----- //

const menuText = document.getElementById("menuText");
const menuOptions = document.getElementById("menuOptions");
const menuLines = document.getElementById("lines");

if (menuText && menuOptions && menuLines) {
  menuText.addEventListener("click", () => {
    menuText.style.display = "none";
    menuLines.style.display = "none";
    menuOptions.style.display = "flex";
    menuOptions.style.alignItems = "center";
  });

  menuLines.addEventListener("click", () => {
    menuText.style.display = "none";
    menuLines.style.display = "none";
    menuOptions.style.display = "flex";
    menuOptions.style.alignItems = "center";
  });
}

// Navigation links
const aboutLink = document.getElementById("aboutLink");
const resumeLink = document.getElementById("resumeLink");
const workLink = document.getElementById("workLink");

if (aboutLink) {
  aboutLink.addEventListener("click", () => {
    menuOptions.style.display = "none";
    menuText.style.display = "flex";
    menuLines.style.display = "block";
  });
}

if (resumeLink) {
  resumeLink.addEventListener("click", () => {
    menuOptions.style.display = "none";
    menuText.style.display = "flex";
    menuLines.style.display = "block";
  });
}

if (workLink) {
  workLink.addEventListener("click", () => {
    menuOptions.style.display = "none";
    menuText.style.display = "flex";
    menuLines.style.display = "block";
  });
}

menuOptions.addEventListener("click", () => {
  menuOptions.style.display = "none";
  menuText.style.display = "flex";
  menuLines.style.display = "block";
});

// Up and down arrow scroll trigger //

if (document.querySelector("#portfolio-projects-section")) {
  gsap.to("#menu", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#portfolio-projects-section",
      start: "top bottom",
      end: "#canvas top", // This makes it disappear at the canvas
      toggleActions: "play none none reverse", // Changed to reverse on the last action
    },
    duration: 1,
  });
}

if (document.querySelector("#up-arrow-portfolio")) {
  gsap.to("#up-arrow-portfolio", {
    opacity: 1,
    scrollTrigger: {
      trigger: "body",
      start: "top top+=100vh", // Start when scrolled 100vh (one viewport height)
      toggleActions: "play none none reverse", // Play when entering, reverse when leaving
    },
    duration: 1,
  });
}

if (document.querySelector("#portfolio-projects-section")) {
  gsap.to("#up-arrow", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#portfolio-projects-section",
      start: "top bottom",
      end: "#canvas top", // This makes it disappear at the canvas
      toggleActions: "play none none reverse", // Changed to reverse on the last action
    },
    duration: 1,
  });
}

// -- Hippo Hover Animation -- //

const mouthOpen = gsap.timeline({ paused: true });
const easeType = Power2.easeOut;
const mouthSpeed = 0.5;
if (document.querySelector(".mouth-back")) {
  mouthOpen.to(
    ".mouth-back",
    { duration: mouthSpeed, ease: easeType, y: -70 },
    0
  );
}
if (document.querySelector(".tongue")) {
  mouthOpen.to(
    ".tongue",
    { duration: mouthSpeed * 1.5, ease: easeType, y: -70 },
    0
  );
}
if (document.querySelector(".teeth")) {
  mouthOpen.to(
    ".teeth",
    { duration: mouthSpeed, ease: easeType, y: -70, scaleY: 1.2 },
    0
  );
}
if (document.querySelector(".freckles")) {
  mouthOpen.to(".freckles", { duration: mouthSpeed, ease: easeType, y: -8 }, 0);
}
if (document.querySelector(".ears")) {
  mouthOpen.to(".ears", { duration: mouthSpeed, ease: easeType, y: 10 }, 0);
}
if (document.querySelector(".eye-right")) {
  mouthOpen.to(
    ".eye-right",
    { duration: mouthSpeed, ease: easeType, x: -2 },
    0
  );
}
if (document.querySelector(".eye-left")) {
  mouthOpen.to(".eye-left", { duration: mouthSpeed, ease: easeType, x: 2 }, 0);
}
if (document.querySelector(".eyes")) {
  mouthOpen.to(".eyes", { duration: mouthSpeed, ease: easeType, y: 2 }, 0);
}
if (document.querySelector(".nostrils")) {
  mouthOpen.to(".nostrils", { duration: mouthSpeed, ease: easeType, y: -2 }, 0);
}

// ---- Mouse Hover --//

const button = document.getElementById("hippo");

if (document.querySelector(".hippo")) {
  button.addEventListener("mouseenter", enterButton);
  button.addEventListener("mouseleave", leaveButton);
}

function enterButton() {
  mouthOpen.play();
}
function leaveButton() {
  mouthOpen.reverse();
}

// -- Ear Wiggle --//
  const earWiggle = gsap.timeline({ paused: true, repeat: 2 });
  if (document.querySelector(".ear-right")) {
  earWiggle.set(".ear-right", { transformOrigin: "center center" });
  earWiggle.to(".ear-right", { duration: 0.1, rotation: 75 });
  earWiggle.to(".ear-right", { duration: 0.1, rotation: 0 });
}

if (document.querySelector(".ear-right")) {
  window.setInterval(() => earWiggle.play(0), 1500);
}

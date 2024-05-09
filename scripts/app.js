
// ----- Scroll Indicator ----- //

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight -document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// ---- //

var text = document.querySelector("h1");
document.addEventListener("scroll", () => {
  text.style.left = window.scrollY * 5 + "px";
});

//gsap.to(".hello", { duration: 2.5, ease: "bounce.out", x: -600 });

// ------ Cursor ------//
new kursor({
  type: 1,
  removeDefaultCursor: true,
});

// ------ Menu ----- //

const menuText = document.getElementById("menuText");
const menuOptions = document.getElementById("menuOptions");
const menuLines = document.getElementById("lines");
const cross = document.getElementById("cross");
const aboutLink = document.getElementById("aboutLink");

menuText.addEventListener("click", () => {
  menuText.style.display = "none";
  menuLines.style.display = "none";
  cross.style.display = "block";
  menuOptions.style.display = "flex";
  menuOptions.style.alignItems = "center";
});

menuLines.addEventListener("click", () => {
  menuText.style.display = "none";
  menuLines.style.display = "none";
  cross.style.display = "block";
  menuOptions.style.display = "flex";
  menuOptions.style.alignItems = "center";
});

aboutLink.addEventListener("click", () => {
  menuOptions.style.display = "none";
  menuText.style.display = "flex";
  menuLines.style.display = "block";
  cross.style.display = "none";
});

const resumeLink = document.getElementById("resumeLink");
resumeLink.addEventListener("click", () => {
  menuOptions.style.display = "none";
  menuText.style.display = "flex";
  menuLines.style.display = "block";
  cross.style.display = "none";
});

const workLink = document.getElementById("workLink");
  workLink.addEventListener("click", () => {
  menuOptions.style.display = "none";
  menuText.style.display = "flex";
  menuLines.style.display = "block";
  cross.style.display = "none";
});

menuOptions.addEventListener("click",()=>{
  menuOptions.style.display="none";
  cross.style.display="none";
  menuText.style.display="flex";
  menuLines.style.display="block";
});

cross.addEventListener("click", () => {
  menuOptions.style.display = "none";
  menuText.style.removeProperty("display");
  cross.style.display = "none";
  menuLines.style.removeProperty("display");
});

// // ------ About me button ----- //

// const btn = document.getElementById("collapsible");

// btn.addEventListener("click", () => {
//   btn.style.display = "none";

//   const box = document.getElementById("hidden-text");
//   box.style.display = "block";
// });

// ------ Intro with GSAP Scroll Trigger ------//
gsap.from(".introduction", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".introduction",
    toggleActions: "restart pause reverse pause",
    start: "top center",
    once: true,
  },
  x: -150,
});
gsap.to(".introduction", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".introduction",
    toggleActions: "restart pause reverse pause",
    start: "top bottom",
    once: true,
  },
  x: 0,
  duration: 2,
  ease: "bounce.out",
});

// ------ HippoProject ----- //

// -- GSAP scroll trigger -- //
gsap.registerPlugin(ScrollTrigger);

/*gsap.from("#hippo", {
  scrollTrigger: {
    trigger: "#hippo",
    toggleActions: "restart pause reverse pause",
    start: "top center",
    once: true,
  },
  x: 200,
});
gsap.to("#hippo", {
  scrollTrigger: {
    trigger: "#hippo",
    toggleActions: "restart pause reverse pause",
    start: "top center",
    once: true,
  },
  x: 0,
  duration: 2,
  ease: "bounce.out",
});*/

// -- Hippo Hover Animation -- //

const mouthOpen = gsap.timeline({ paused: true });
const easeType = Power2.easeOut;
const mouthSpeed = 0.5;
mouthOpen.to(
  ".mouth-back",
  { duration: mouthSpeed, ease: easeType, y: -70 },
  0
);
mouthOpen.to(
  ".tongue",
  { duration: mouthSpeed * 1.5, ease: easeType, y: -70 },
  0
);
mouthOpen.to(
  ".teeth",
  { duration: mouthSpeed, ease: easeType, y: -70, scaleY: 1.2 },
  0
);
mouthOpen.to(".freckles", { duration: mouthSpeed, ease: easeType, y: -8 }, 0);
mouthOpen.to(".ears", { duration: mouthSpeed, ease: easeType, y: 10 }, 0);
mouthOpen.to(".eye-right", { duration: mouthSpeed, ease: easeType, x: -2 }, 0);
mouthOpen.to(".eye-left", { duration: mouthSpeed, ease: easeType, x: 2 }, 0);
mouthOpen.to(".eyes", { duration: mouthSpeed, ease: easeType, y: 2 }, 0);
mouthOpen.to(".nostrils", { duration: mouthSpeed, ease: easeType, y: -2 }, 0);

// ---- Mouse Hover --//

const button = document.getElementById("hippo");

button.addEventListener("mouseenter", enterButton);
button.addEventListener("mouseleave", leaveButton);

function enterButton() {
  mouthOpen.play();
}
function leaveButton() {
  mouthOpen.reverse();
}

// -- Ear Wiggle --//
const earWiggle = gsap.timeline({ paused: true, repeat: 2 });
earWiggle.set(".ear-right", { transformOrigin: "center center" });
earWiggle.to(".ear-right", { duration: 0.1, rotation: 75 });
earWiggle.to(".ear-right", { duration: 0.1, rotation: 0 });
window.setInterval(() => earWiggle.play(0), 1500);

// ------ LapiProject ----- //

// -- GSAP scroll trigger -- //

/*gsap.from("#lapi", {
  scrollTrigger: {
    trigger: "#lapi",
    toggleActions: "restart pause reverse pause",
    start: "top center",
    once: true,
  },
  x: 200,
  autoAlpha: 0,
});
gsap.to("#lapi", {
  scrollTrigger: {
    trigger: "#lapi",
    toggleActions: "restart pause reverse pause",
    start: "top center",
    once: true,
  },
  x: 0,
  duration: 2,
  ease: "bounce.out",
});*/

// -- Starfish Walking Lapi Project--//
const SFwalking = gsap.timeline({ paused: true });
const SFSpeed = 2;

SFwalking.to(".Starfish", { duration: SFSpeed, ease: easeType, y: 60, x:50 }, 0);

// ---- Mouse Hover Lapi Project--//

const Starfish = document.getElementById("lapi");

Starfish.addEventListener("mouseenter", enterLapi);
Starfish.addEventListener("mouseleave", leaveLapi);

function enterLapi() {
  SFwalking .play();
}
function leaveLapi() {
  SFwalking .reverse();
}

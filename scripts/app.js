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

// ------ Cursor ------//
if (document.querySelector("body")) {
  new kursor({
    type: 1,
    removeDefaultCursor: true,
  });
}

// ------ Image Comparison Slider ------ //
if (document.querySelector(".img-comp-container")) {
  function initComparisons() {
    var x, i;
    /* Find all elements with an "overlay" class: */
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider,
        clicked = 0,
        w,
        h;
      /* Get the width and height of the img element */
      w = img.offsetWidth;
      h = img.offsetHeight;

      /* Create slider: */
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      /* Insert slider */
      img.parentElement.insertBefore(slider, img);

      /* Position the slider in the middle: */
      slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
      slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";

      /* Set initial clip-path to 50% */
      img.style.clipPath = "inset(0 " + w / 2 + "px 0 0)";

      /* Execute a function when the mouse button is pressed: */
      slider.addEventListener("mousedown", slideReady);
      /* And another function when the mouse button is released: */
      window.addEventListener("mouseup", slideFinish);
      /* Or touched (for touch screens: */
      slider.addEventListener("touchstart", slideReady);
      /* And released (for touch screens: */
      window.addEventListener("touchend", slideFinish);

      function slideReady(e) {
        /* Prevent any other actions that may occur when moving over the image: */
        e.preventDefault();
        /* The slider is now clicked and ready to move: */
        clicked = 1;
        /* Execute a function when the slider is moved: */
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /* The slider is no longer clicked: */
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /* If the slider is no longer clicked, exit this function: */
        if (clicked == 0) return false;
        /* Get the cursor's x position: */
        pos = getCursorPos(e);
        /* Prevent the slider from being positioned outside the image: */
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /* Execute a function that will clip the overlay image according to the cursor: */
        slide(pos);
      }
      function getCursorPos(e) {
        var a,
          x = 0;
        e = e.changedTouches ? e.changedTouches[0] : e;
        /* Get the x positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x coordinate, relative to the image: */
        x = e.pageX - a.left;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /* Use clip-path to reveal/hide the overlay image: */
        var clipRight = w - x;
        img.style.clipPath = "inset(0 " + clipRight + "px 0 0)";
        /* Position the slider at the cursor position, centered: */
        slider.style.left = x - slider.offsetWidth / 2 + "px";
      }
    }
  }
  initComparisons();
}

// ---- GSAP //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin);

ScrollSmoother.create({
  smooth: 1.5,
  speed: 2,
  effects: true,
  // When smooth scrolling stops, nudge R3F to repaint (WebGL + ScrollSmoother
  // transform often leaves a blank canvas until the next interaction).
  onStop: () => {
    window.dispatchEvent(new CustomEvent("r3f-invalidate"));
  },
});

// ------ Menu ----- //

// const menuText = document.getElementById("menuText");
// const menuOptions = document.getElementById("menuOptions");
// const menuLines = document.getElementById("lines");

// if (menuText && menuOptions && menuLines) {
//   menuText.addEventListener("click", () => {
//     menuText.style.display = "none";
//     menuLines.style.display = "none";
//     menuOptions.style.display = "flex";
//     menuOptions.style.alignItems = "center";
//   });

//   menuLines.addEventListener("click", () => {
//     menuText.style.display = "none";
//     menuLines.style.display = "none";
//     menuOptions.style.display = "flex";
//     menuOptions.style.alignItems = "center";
//   });
// }

// // Navigation links
// const aboutLink = document.getElementById("aboutLink");
// const resumeLink = document.getElementById("resumeLink");
// const workLink = document.getElementById("workLink");

// if (aboutLink) {
//   aboutLink.addEventListener("click", () => {
//     menuOptions.style.display = "none";
//     menuText.style.display = "flex";
//     menuLines.style.display = "block";
//   });
// }

// if (resumeLink) {
//   resumeLink.addEventListener("click", () => {
//     menuOptions.style.display = "none";
//     menuText.style.display = "flex";
//     menuLines.style.display = "block";
//   });
// }

// if (workLink) {
//   workLink.addEventListener("click", () => {
//     menuOptions.style.display = "none";
//     menuText.style.display = "flex";
//     menuLines.style.display = "block";
//   });
// }

// menuOptions.addEventListener("click", () => {
//   menuOptions.style.display = "none";
//   menuText.style.display = "flex";
//   menuLines.style.display = "block";
// });

// scroll trigger //

// if (document.querySelector("#portfolio-projects-section")) {
//   gsap.to("#menu", {
//     opacity: 1,
//     scrollTrigger: {
//       trigger: "#portfolio-projects-section",
//       start: "top bottom",
//       end: "#canvas top", // This makes it disappear at the canvas
//       toggleActions: "play none none reverse", // Changed to reverse on the last action
//     },
//     duration: 1,
//   });
// }

if (document.querySelector("#up-arrow-portfolio")) {
  gsap.to("#up-arrow-portfolio", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".scroll-trigger-up-arrow",
      start: "top top+=100vh", // Start when scrolled 100vh (one viewport height)
      toggleActions: "play none none reverse", // Play when entering, reverse when leaving
    },
    duration: 1,
  });
}

if (document.querySelector("#up-arrow")) {
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

if (document.querySelector("#introduction")) {
  gsap.to("#introduction", {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: "#introduction",
      start: "top bottom",
    },
  });
}

if (document.querySelector("#designer-svg")) {
  gsap.to("#designer-svg", {
    duration: 2,
    x: 0,
    y: 0,
    rotation: 720,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: "#introduction",
      start: "top bottom",
      end: "#portfolio-projects-section top", // This makes it disappear at the canvas
      toggleActions: "play none none reverse", // Changed to reverse on the last action
    },
  });
  gsap.to("#arch-svg", {
    duration: 2,
    rotation: 360,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: "#introduction",
      start: "top bottom",
    },
  });
  gsap.to("#tech-svg", {
    duration: 2,
    x: 0,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: "#introduction",
      start: "top bottom",
    },
  });
}

// Individual portfolio project animations
if (document.querySelector(".portfolio-projects")) {
  // Select all portfolio projects
  const portfolioProjects = document.querySelectorAll(".portfolio-projects");

  // Create individual animations for each project
  portfolioProjects.forEach((project, index) => {
    const vignette = project.querySelector(".portfolio-vignettes");
    const title = project.querySelector(".project-title");
    const projectInfo = project.querySelector(".project-info");

    // Set initial state
    gsap.set([vignette, title, projectInfo], {
      opacity: 0,
      y: 50,
    });

    // Create timeline for each project
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: "top bottom-=100",
        end: "bottom top+=100",
        toggleActions: "play none none reverse",
      },
    });

    // Animate elements with staggered delay
    tl.to(vignette, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
    })
      .to(
        title,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.8",
      )
      .to(
        projectInfo,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6",
      );
  });
}

// Fallback helper: reveal portfolio projects immediately (used when user jumps
// to the projects section before scroll triggers initialize). Exposed on
// window so other modules (React overlay) can call it after scrolling.
window.revealPortfolioProjects = function revealPortfolioProjects() {
  try {
    const projects = document.querySelectorAll(".portfolio-projects");
    if (!projects || projects.length === 0) return;

    projects.forEach((project) => {
      const vignette = project.querySelector(".portfolio-vignettes");
      const title = project.querySelector(".project-title");
      const projectInfo = project.querySelector(".project-info");

      // Immediately set final visible state (match the GSAP animation end)
      [vignette, title, projectInfo].forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0px)";
        }
      });
    });
  } catch (e) {
    // swallow errors; this is a best-effort fallback
    console.warn("revealPortfolioProjects fallback failed", e);
  }
};

// If the page loads with a hash linking directly to the portfolio projects
// section, run the fallback reveal shortly after load so items are visible.
if (typeof window !== "undefined") {
  window.addEventListener("load", function () {
    try {
      if (
        window.location &&
        window.location.hash === "#portfolio-projects-section"
      ) {
        // short delay to allow layout and any other scripts to initialize
        setTimeout(() => {
          if (window.revealPortfolioProjects) window.revealPortfolioProjects();
        }, 350);
      }
    } catch (e) {
      // ignore
    }
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
    0,
  );
}
if (document.querySelector(".tongue")) {
  mouthOpen.to(
    ".tongue",
    { duration: mouthSpeed * 1.5, ease: easeType, y: -70 },
    0,
  );
}
if (document.querySelector(".teeth")) {
  mouthOpen.to(
    ".teeth",
    { duration: mouthSpeed, ease: easeType, y: -70, scaleY: 1.2 },
    0,
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
    0,
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

if (document.querySelector("#hippo")) {
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

// Nav bar color: start blue, turn white after scrolling 100vh (only on index.html)
if (document.querySelector("#canvas") && document.querySelector("#main-nav-background")) {
  const navBg = document.querySelector("#main-nav-background");
  const viewportHeight = window.innerHeight;

  // Set initial blue background
  navBg.style.backgroundColor = "#d7e5fe";
  navBg.style.opacity = "1";

  // Track scroll and change color at 100vh
  window.addEventListener("scroll", () => {
    const scrolled = (window.scrollY)*2;
    if (scrolled >= viewportHeight) {
      navBg.style.backgroundColor = "#fbf9f1";
    } else {
      navBg.style.backgroundColor = "#d7e5fe";
    }
  });
}

// Smooth-scroll to top when clicking up arrow or #start anchors
(function setupTopAnchorScrolling() {
  document.addEventListener("click", function (e) {
    const target = e.target.closest('a[href="#start"], a[href="#top"]');
    if (!target) return;

    e.preventDefault();

    // Use GSAP scrollTo for smooth, compatible scrolling with ScrollSmoother
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });
})();

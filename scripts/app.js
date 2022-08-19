var text = document.querySelector("h1");
document.addEventListener("scroll", () => {
  text.style.left = window.scrollY * 5 + "px";
});


//gsap.to(".hello", { duration: 2.5, ease: "bounce.out", x: -600 });

// ------ HippoProject ----- //

// -- GSAP scroll trigger -- //
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hippoProject', {
  scrollTrigger: {
      trigger: '.hippoProject',
      toggleActions: 'restart pause reverse pause',
      start: 'top center',
      once: true,
  },
  x: 400,
}); 
    gsap.to('.hippoProject', {
        scrollTrigger: {
            trigger: '.hippoProject',
            toggleActions: 'restart pause reverse pause',
            start: 'top center',
            once: true,
        },
        x: 0,
        duration: 2,
        ease: "bounce.out",
    }); 



// -- Hippo Hover Animation -- //

const mouthOpen= gsap.timeline ({paused:true});
const easeType= Power2.easeOut;
const mouthSpeed= 0.5;
mouthOpen.to('.mouth-back',{duration:mouthSpeed, ease: easeType, y:-70},0);
mouthOpen.to('.tongue',{duration:mouthSpeed * 1.5, ease: easeType, y:-70,},0);
mouthOpen.to('.teeth',{duration:mouthSpeed, ease: easeType, y:-70, scaleY: 1.2},0);
mouthOpen.to('.freckles', {duration: mouthSpeed, ease: easeType, y: -8},0);
mouthOpen.to('.ears', {duration: mouthSpeed, ease: easeType, y:10},0);
mouthOpen.to('.eye-right', {duration: mouthSpeed, ease: easeType, x:-2},0);
mouthOpen.to('.eye-left', {duration: mouthSpeed, ease: easeType, x:2},0);
mouthOpen.to('.eyes', {duration: mouthSpeed, ease: easeType, y:2},0);
mouthOpen.to('.nostrils', {duration: mouthSpeed, ease: easeType, y: -2},0);

// ---- Mouse Hover --//

const button = document.querySelector('button');

button.addEventListener('mouseenter', enterButton);
button.addEventListener('mouseleave', leaveButton);

function enterButton(){mouthOpen.play();}
function leaveButton (){mouthOpen.reverse();}


// -- Ear Wiggle --//
const earWiggle=gsap.timeline({paused:true, repeat:2});
earWiggle.set('.ear-right',{transformOrigin:"center center"});
earWiggle.to('.ear-right', {duration: 0.1, rotation: 75});
earWiggle.to('.ear-right', {duration: 0.1, rotation: 0});
window.setInterval(() => earWiggle.play(0), 1500);


// ------ Banner scroll ----- //

// -- GSAP scroll trigger -- //
gsap.registerPlugin(ScrollTrigger);


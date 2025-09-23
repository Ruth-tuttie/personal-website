// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);


const techstack= document.querySelector('.techstack-section')
const about = document.querySelector('.about-section')
const projects = document.querySelector('.projects-section')
const h4= document.querySelectorAll('h4')
let images = document.querySelectorAll('.js-image')

//trigger for images
images.forEach(image  =>{
/*gsap.set(image,{
  xPercent: 100,
  opacity: 0
})
gsap.to(image,{
  scrollTrigger:{
    trigger : image,
    start: 'top bottom',
    end: 'bottom 90%',
    markers: true,
    scrub: true
  },
  xPercent: 0,
  opacity: 1,
})*/
let timeLine = gsap.timeline({
  scrollTrigger:{
    trigger: image,
    start: 'top bottom',
    end: 'bottom 90%',
    scrub: true
  }
})
timeLine.fromTo(image,{xPercent: 100, opacity:0},{xPercent:0, opacity:1})

 
})

//scroll trigger for h4
h4.forEach(h4 =>{
let timeLine = gsap.timeline({
  scrollTrigger:{
    trigger: h4,
    start: 'top bottom',
    end: 'bottom 90%',
    scrub: true
  }
})

 timeLine.fromTo(h4,{xPercent: -100, opacity:0},{xPercent: 0, opacity:1})
  })





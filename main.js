const loader = document.querySelector('.container-loader')
const techs = document.querySelectorAll('.techstack-section-img')
const about = document.querySelector('.about-section')
const projects = document.querySelector('.projects-section')

//loading event
window.addEventListener('load', () => {
  loader.classList.add('hidden')
})

//animating about-section
gsap.fromTo(about, {
  opacity: 0,
  y: 20
}, {
  scrollTrigger: {
    trigger: about,
    start: 'top 80%',
    end: 'bottom 30%',
    scrub: true
  
  },
  opacity: 1,
  y: 0,
  ease: 'power1.inOut',
  delay: 1,
  stagger: 0.1

})

const words = ['UI/UX Designer', 'Web Designer', 'Web Developer']

//main timeline

let mainTimeline = gsap.timeline({
  repeat: -1

})

//timeline for each word append to main timeline
words.forEach(word => {
  let textTimeline = gsap.timeline({
    repeat: 1,
    yoyo: true,
    repeatDelay: 2

  })

  textTimeline.to('.js-typewritter', {
    text: word,
    duration: 1,
    onUpdate:() =>{
      cursorTimeline.restart()
      cursorTimeline.pause()
    },
    onComplete:() =>{
      cursorTimeline.play()
    }
  })
  //append to main timeline
  mainTimeline.add(textTimeline)
})

//cursor timeline
let cursorTimeline = gsap.timeline({
  repeat: 1,
  repeatDelay: .4
})
cursorTimeline.to('.cursor',{
  opacity: 1,
  duration:0
}).to('.cursor',{
  opacity: 0,
  duration: 0,
  delay: .4
})
export default class WindowScroll {
  constructor () {
    this.$btnContact = document.getElementsByClassName('btn-contact')
    this.$contact = document.getElementById('contact')
    this.$contactX = this.$contact.offsetTop
    this.scrollW(this.$btnContact, this.$contactX)
  }
  scrollW (el, posY) {
    console.log('posY', posY)
    window.requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              function (callback) {
                window.setTimeout(callback, 1000 / 60)
              }
    })()

    // main function
    function scrollToY (scrollTargetY, speed, easing) {
      console.log('scrollTargetY', scrollTargetY)
      let scrollY = window.scrollY || document.documentElement.scrollTop
      scrollTargetY = scrollTargetY || 0
      speed = speed || 2000
      easing = easing || 'easeOutSine'
      let currentTime = 0

        // min time .1, max time .8 seconds
      let time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8))

        // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
      let easingEquations = {
        easeOutSine: function (pos) {
          return Math.sin(pos * (Math.PI / 2))
        },
        easeInOutSine: function (pos) {
          return (-0.5 * (Math.cos(Math.PI * pos) - 1))
        },
        easeInOutQuint: function (pos) {
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5)
          }
          return 0.5 * (Math.pow((pos - 2), 5) + 2)
        }
      }

        // add animation loop
      function tick () {
        currentTime += 1 / 60

        var p = currentTime / time
        var t = easingEquations[easing](p)

        if (p < 1) {
          requestAnimFrame(tick)

          window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t))
        } else {
          // console.log('scroll done')
          window.scrollTo(0, scrollTargetY)
        }
      }

        // call it once to get started
      tick()
    }
    el[0].addEventListener('click', (e) => {
      e.preventDefault()
      scrollToY(posY + 80, 800, 'easeInOutQuint')
    })
  }
}

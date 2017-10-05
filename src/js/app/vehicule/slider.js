export default class slider {
  constructor () {
    this.$slider = document.getElementById('image-slider')
    this.$sliderEl = this.$slider.querySelectorAll('li')
    this.$stage = document.getElementsByClassName('stage')[0]
    this.stageWidth = this.$stage.offsetWidth
    this.stageHeight = null
    this.$btnList = document.getElementsByClassName('stage-controller')
    this.$btn = this.$btnList[0].querySelectorAll('a')
    this.pos = 0
    this.hammertime = new Hammer(this.$slider)
    this.initViewer()
    this.onChange()
  }
  /* SLIDER */
  onChange () {
    this.hammertime.on('swipeleft', (ev) => {
      this.goRight(ev)
    })
    this.hammertime.on('swiperight', (ev) => {
      this.goLeft(ev)
    })
  }
  initViewer () {
    this.$slider.style.width = (this.stageWidth * this.$sliderEl.length) + 'px'
    for (var i = 0; i < this.$sliderEl.length; i++) {
      this.$sliderEl[i].style.width = (this.stageWidth) + 'px'
      let $sliderImg = this.$sliderEl[i].querySelector('img')
      this.stageHeight = $sliderImg.offsetHeight
      if (this.$sliderEl[i].classList.contains('actif')) {
        this.pos = i
        this.$slider.style.left = '-' + (this.stageWidth * i) + 'px'
      }
    }
    this.$slider.style.height = this.stageHeight + 'px'
    this.$stage.style.height = this.stageHeight + 'px'
    this.eventListener()
  }
  eventListener () {
    Array.prototype.forEach.call(this.$btn, (el, i) => {
      this.$btn[i].addEventListener('click', (e) => {
        e.preventDefault()
        this.pos = i
        for (var y = 0; y < this.$btn.length; y++) {
          this.removeClassActif(y)
        }
        this.$btn[i].classList.add('actif')
        this.$sliderEl[i].classList.add('actif')
        this.$slider.style.left = '-' + (this.stageWidth * i) + 'px'
        return false
      })
    })
  }
  goRight (ev) {
    this.mooveStage('right')
  }
  goLeft (ev) {
    this.mooveStage('left')
  }
  mooveStage (event) {
    if (event === 'right') {
      for (var i = 0; i < this.$sliderEl.length; i++) {
        if (this.$sliderEl[i].classList.contains('actif') && this.pos !== (this.$sliderEl.length - 1)) {
          this.pos = this.pos + 1
          this.removeClassActif(i)
        }
      }
    } else {
      for (var y = 0; y < this.$sliderEl.length; y++) {
        if (this.$sliderEl[y].classList.contains('actif') && this.pos > 0) {
          this.pos = this.pos - 1
          this.removeClassActif(y)
        }
      }
    }
    if (this.pos >= 0 && this.pos < this.$sliderEl.length) {
      this.$btn[this.pos].classList.add('actif')
      this.$sliderEl[this.pos].classList.add('actif')
      this.$slider.style.left = '-' + (this.stageWidth * this.pos) + 'px'
    } else {
      return false
    }
  }
  removeClassActif (i) {
    this.$btn[i].classList.remove('actif')
    this.$sliderEl[i].classList.remove('actif')
  }
}

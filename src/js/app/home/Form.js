import FakeJson from './fakeJson'
import {isLocal, checkForm, postList, clearCell, buildCell, wsGetVehicles} from '../utils'
export default class Form {
  constructor () {
    let url = null
    this.service = () => {
      if (isLocal()) {
        url = './dist/service/filter.json'
      } else {
        url = wsGetVehicles
      }
      return url
    }
    this.$jsSearch = document.querySelectorAll('.js-search')
    this.$inputReference = document.getElementById('reference')
    this.$desktopClose = document.getElementById('open-search')
    this.$mobilClose = document.querySelector('.close-mobil')

    this.pageNumber = sessionStorage.getItem('smartVoPageNumber')

    if (!sessionStorage.getItem('smartVoReturnToHome')) {
      this.returnToHome = false
    } else {
      this.returnToHome = sessionStorage.getItem('smartVoReturnToHome')
    }

    this.fakejson = new FakeJson()
    this.initialize(this.service())
  }
  initialize (url) {
    this.addEventListener(url)
  }
  addEventListener (url) {
    this.$jsSearch[1].addEventListener('click', (e) => {
      e.preventDefault()
      this.sendForm(url)
      this.closeForm()
    })
    /* SEARCH MOBIL */
    this.$jsSearch[0].addEventListener('click', (e) => {
      e.preventDefault()
      this.sendForm(url)
      this.closeForm()
    })
  }
  closeForm () {
    let event = document.createEvent('HTMLEvents')
    event.initEvent('click', true, false)
    if (document.body.classList.contains('mobil')) {
      this.$mobilClose.dispatchEvent(event)
    } else {
      this.$desktopClose.dispatchEvent(event)
    }
  }
  sendForm (url) {
    clearCell()

    sessionStorage.setItem('smartVoPageNumber', 1)
    this.pageNumber = sessionStorage.getItem('smartVoPageNumber')
    checkForm(url, this.pageNumber, this.returnToHome)
  }
}

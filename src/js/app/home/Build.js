import {isLocal, isLoading, docHeight, buildCell, checkForm, getPage, getList, postList, wsGetVehicles} from '../utils'
export default class Build {
  constructor () {
    this.wHeight = screen.height

    let url = null
    this.pageNumber = sessionStorage.getItem('smartVoPageNumber')
    this.returnHome = sessionStorage.getItem('smartVoReturnToHome')
    this.numLoad = null

    this.service = () => {
      if (isLocal()) {
        //url = 'http://beta.json-generator.com/api/json/get/VkyhbVLWQ'
        url = './assets/service/test-list-vehicule.json'
      } else {
        url = wsGetVehicles
      }
      return url
    }

    this.initpage()
  }
  initpage () {
    this.startPage(this.service())
  }
  startPage (url) {
    this.buildPage(url).then((obj) => {
      docHeight()
      this.addEventListener(url)
    })
  }
  addEventListener (url) {
    window.addEventListener('scroll', () => {
      let bodyScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      this.numLoad = sessionStorage.getItem('smartVoPageCount')
      let newHeight = docHeight()

      if ((bodyScrollTop >= (newHeight - this.wHeight)) && !isLoading) {
        if (this.numLoad >= (getPage() + 1)) {
          checkForm(url, (getPage() + 1), this.returnHome)
        }
      }
    })
  }
  buildPage (url) {
    return new Promise((resolve, reject) => {
      if (isLocal()) {
        getList(url).then((data) => {
          sessionStorage.setItem('smartVoPageCount', data.PageCount)
          sessionStorage.setItem('smartVoPageNumber', data.PageNumber)
          buildCell(data.ResultData)
          resolve({numStart: data.PageNumber})
        })
      } else {
        checkForm(url, this.pageNumber, this.returnHome)
        resolve()
      }
    })
  }
}

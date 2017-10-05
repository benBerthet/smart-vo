import {isLocal, getList, checkForm, clearCell, wsGetVehicles, buildFromStorage} from '../utils'
export default class SelectCustom {
  constructor () {
    let url = null
    this.data = null
    this.service = () => {
      if (isLocal()) {
        url = '../assets/service/filter.json'
      } else {
        url = '../assets/json/Filter.json'
      }
      return url
    }
    this.arrKey = []
    this.arrEl = []
    this.$gearbox = document.querySelector('.list-gearbox')
    this.$pointOfSale = document.querySelector('.list-pointOfSale ul')
    this.$engine = document.querySelector('.list-engine')
    this.$model = document.querySelector('.list-model')
    // -
    // BE CAREFUL ! this array order must be the same as the WS
    // -
    this.arrEl.push(this.$engine, this.$gearbox, this.$model, this.$pointOfSale)

    this.selectCustom(this.service())
  }
  buildSelect (url) {
    return new Promise((resolve, reject) => {
      getList(url).then((data) => {
        if (sessionStorage.getItem('smartVoReturnToHome')) {
          buildFromStorage(data)
        }
        for (let key in data) {
          this.arrKey.push(key)
        }
        for (let i = 0; this.arrKey.length > i; i++) {
          this.selectconstructor(data, this.arrKey[i], this.arrEl[i])
        }
        resolve()
      })
    })
  }
  selectconstructor (data, key, list) {
    // console.log(data, key, list)
    let firstLi = document.createElement('li')
    firstLi.setAttribute('data-value', null)
    switch (key) {
      case 'Engine' :
        firstLi.innerHTML = 'Tous les carburants'
        firstLi.setAttribute('data-name', 'Tous les carburants')
        break
      case 'Model' :
        firstLi.innerHTML = 'Tous les modèles'
        firstLi.setAttribute('data-name', 'Tous les modèles')
        break
      case 'Gearbox' :
        firstLi.innerHTML = 'Toutes les boîtes'
        firstLi.setAttribute('data-name', 'Toutes les boîtes')
        break
      default :
        firstLi.innerHTML = 'Tous les distributeurs'
        firstLi.setAttribute('data-name', 'Tous les distributeurs')
    }
    list.appendChild(firstLi)
    for (let i = 0; data[key].length > i; i++) {
      let info = data[key][i]
      let name = Object.keys(info)[0]
      let value = Object.keys(info)[1]
      let li = document.createElement('li')
      li.setAttribute('data-value', info[value])
      li.setAttribute('data-name', info[name])
      if (key === 'Model') {
        li.innerHTML = '- ' + info[name]
      } else {
        li.innerHTML = info[name]
      }

      list.appendChild(li)
    }
  }
  selectCustom (url) {
    this.buildSelect(url).then((data) => {
      const select = document.getElementsByClassName('block-select')
      for (var i = 0; i < select.length; i++) {
        let thisSelect = select[i]
        let findUl = thisSelect.querySelector('ul')
        let findLi = thisSelect.querySelectorAll('li')
        let findInput = thisSelect.querySelectorAll('input')
        let findSpan = thisSelect.querySelectorAll('span')
        let selectHeight = findUl.offsetHeight
        let thisValue = null
        let thisName = null
        // set data-height
        findUl.setAttribute('data-height', selectHeight)
        // set height to 0
        findUl.style.height = '0'
        // click event to open list
        findSpan[0].addEventListener('click', () => {
          // let h = findSpan[0].nextElementSibling.getAttribute('data-height')
          let h = findUl.getAttribute('data-height')
          // console.log(h)
          findUl.style.height = h + 'px'
          thisSelect.classList.add('open')
        })
        thisSelect.addEventListener('mouseleave', () => {
          // console.log('out')
          findUl.style.height = '0'
          // attend fin de l'anim css
          window.setTimeout(function () {
            thisSelect.classList.remove('open')
          }, 300)
        })
        for (var y = 0; y < findLi.length; y++) {
          let pos = y
          findLi[y].addEventListener('click', () => {
            thisValue = findLi[pos].getAttribute('data-value')
            thisName = findLi[pos].getAttribute('data-name')
            findInput[0].setAttribute('value', thisValue)
            findSpan[0].textContent = thisName
            findUl.style.height = '0'
            window.setTimeout(function () {
              thisSelect.classList.remove('open')
              if (findUl.classList.contains('list-model') && document.getElementById('search').classList.contains('hide') && document.getElementById('modele').getAttribute('value').length > 0) {
                clearCell()
                checkForm(wsGetVehicles, 1, false)
              }
            }, 300)
          })
        }
      }
    })
  }
}

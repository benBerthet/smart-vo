import {isLocal, postList} from '../utils'
export default class Form {
  constructor () {
    this.nbError = 0
    this.$formContact = document.querySelector('#formContact')
    this.$input = document.querySelectorAll('input')
    this.$formEl = document.querySelectorAll('.js-form-el')
    this.$btn = document.querySelector('.btn-submit')
    this.$msgError = document.querySelector('.msgError')
    this.$msgSend = document.querySelector('.msgSend')
    this.service = () => {
      if (isLocal()) {
        url = './assets/service/test-vehicule.json'
      } else {
        url = '../service/saveuser/'
      }
      return url
    }
    this.obj = {}
    this.initForm()
  }
  initForm () {
    this.addEventListener()
  }
  addEventListener () {
    this.$btn.addEventListener('click', (e, i) => {
      this.checkForm()
      return false
    })
  }
  checkForm () {
    this.$msgError.classList.remove('showMsg')
    this.nbError = 0
    Array.prototype.forEach.call(this.$input, (el, i) => {
      if (el.getAttribute('required')) {
        el.classList.remove('error')
        let type = el.getAttribute('type')
        let value = el.value
        if (type === 'email') {
          this.checkEmail(el, value)
        } else if (type === 'number') {
          this.checkPhone(el, value)
        } else {
          this.checkText(el, value)
        }
      }
    })
    if (this.nbError > 0) {
      this.$msgError.classList.add('showMsg')
    } else {
      this.getInfo().then(() => {
        let ref = document.getElementById('ref')
        let name = document.getElementById('UserFirstName')
        let lastName = document.getElementById('UserLastName')
        let phone = document.getElementById('UserPhoneNumber')
        let email = document.getElementById('UserEmail')
        let sujet = document.getElementById('Subject')
        let message = document.getElementById('Message')
        let optin = document.getElementById('optin')
        let optinVal = false

        if (optin.checked) {
          optinVal = true
        }

        let messageArray = {
          'VehicleReference': ref.textContent,
          'UserFirstName': name.value,
          'UserLastName': lastName.value,
          'UserPhoneNumber': phone.value,
          'UserEmail': email.value,
          'Subject': sujet.value,
          'Message': message.value,
          'optin': optinVal
        }
        this.messageSend(messageArray)
      })
    }
  }
  getInfo () {
    return new Promise((resolve, reject) => {
      this.$formEl.forEach((item, i) => {
        let itemId = item.id
        let itemValue = item.value
        if (item.type === 'checkbox') {
          let ischecked = item.checked
          this.obj[itemId] = ischecked
        } else {
          this.obj[itemId] = itemValue
        }
        resolve()
      })
    })
  }
  checkText (el, value) {
    let regex = /\d/g
    if (value.length === 0 || regex.test(value)) {
      el.classList.add('error')
      this.nbError ++
    }
  }
  checkPhone (el, value) {
    value = value.trim()
    let regex = /\b\d{2}[ ]?\d{2}[ ]?\d{2}[ ]?\d{2}[ ]?\d{2}\b/g
    if (!value.length === 10 || !regex.test(value)) {
      el.classList.add('error')
      this.nbError ++
    }
  }
  checkEmail (el, value) {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (value.length === 0 || !regex.test(value)) {
      el.classList.add('error')
      this.nbError ++
    }
  }
  sendForm (messageArray) {
    const request = new XMLHttpRequest()
    const url = window.location.origin + '/service/saveuser/'
    return new Promise((resolve, reject) => {
      request.open('POST', url, true)
      request.setRequestHeader('Content-type', 'application/json')

      request.onreadystatechange = function () { // Call a function when the state changes.
        if (request.responseText.length > 0) {
          let data = JSON.parse(request.responseText)
          resolve(data)
        }
        /* if (request.status === 200) {
          if (request.readyState === 4) {
            let data = JSON.parse(request.responseText)
            resolve(data)
          }
        } else {
          reject('Post Message ERREUR 2')
        } */
      }

      request.send(JSON.stringify(messageArray))
    })
  }
  messageSend (messageArray) {
    this.sendForm(messageArray).then((data) => {
      this.$msgSend.style.display = 'block'
      this.$formContact.style.display = 'none'
    })
  }
}

import slider from './slider'
import WindowScroll from '../WindowScroll'
import {isLocal} from '../utils'
export default class Builder {
  constructor () {
    this.data = null
    let url = null
    this.service = () => {
      if (isLocal()) {
        url = './assets/service/test-vehicule.json'
      } else {
        url = '../vehicle/getvehicledetails/'
      }
      return url
    }
    this.$Title = document.getElementById('modele')
    this.$price = document.querySelector('.price-vehicule')
    this.$finance = document.querySelector('.finance-vehicule')
    this.$spec = document.querySelector('.spec-vehicule')
    this.$specList = this.$spec.querySelector('ul')
    this.$specVersion = this.$spec.querySelector('strong')
    this.$energy = document.getElementById('energy')
    this.$vitesse = document.getElementById('vitesse')
    this.$mec = document.getElementById('mec')
    this.$place = document.getElementById('place')
    this.$door = document.getElementById('door')
    this.$version = document.getElementById('version')
    this.$din = document.getElementById('din')
    this.$cylindre = document.getElementById('cylindre')
    this.$ref = document.getElementById('ref')
    this.$option = document.getElementById('option')
    this.$financeText = document.getElementById('finance')
    this.$societe = document.getElementById('societe')
    this.$map = document.getElementById('map')
    this.$slider = document.getElementById('image-slider')
    this.$commercialInfo = document.getElementById('commercial-info')
    this.$atelierInfo = document.getElementById('atelier-info')
    this.$commercialContact = document.getElementById('commercial-contact')
    this.$controller = document.querySelector('.stage-controller')
    this.$subject = document.getElementById('VehicleReference')

    this.initPage()
  }
  initPage () {
    this.buildSlider()
  }
  buildSlider () {
    this.buildPage(this.service()).then(() => {
      let newSlider = new slider()
      window.onresize = function () {
        newSlider = new slider()
      }
      const newWindowScroll = new WindowScroll()
    }).catch(() => {
    })
  }
  buildPage (url) {
    return new Promise((resolve, reject) => {
      let href = window.location.href.split('-')
      let hrefL = href.length
      let ref = href[hrefL - 1]
      let obj = {'VehicleReference': ref}
      // console.log(href, hrefL, ref, obj)
      this.postRef(obj, url).then((data) => {
        // console.info(data)
        let info = data.ResultData
        this.$Title.textContent = info.Brand + ' ' + info.Model
        this.$price.textContent = info.Price + ' € TTC'

        if (info.FinancementPrice) {
          this.$finance.textContent = info.FinancementPrice + ' €./ mois sans apport'
        } else {
          this.$finance.style.display = 'none'
        }

        let liAnnee = document.createElement('li')
        this.$specList.appendChild(liAnnee).textContent = info.VehicleYear + ' - ' + info.Mileage + ' km'
        let liEnergie = document.createElement('li')
        this.$specList.appendChild(liEnergie).textContent = info.Engine
        let liTransmission = document.createElement('li')
        this.$specList.appendChild(liTransmission).textContent = 'Boîte ' + info.GearBoxType
        let liCouleur = document.createElement('li')
        this.$specList.appendChild(liCouleur).textContent = info.Colour
        let span = document.createElement('span')
        this.$specVersion.appendChild(span).textContent = info.Version

        this.$energy.textContent = info.Engine
        if (info.GearBoxType === info.GearboxDesc) {
          this.$vitesse.textContent = info.GearboxDesc + ' ' + info.GearBoxSpeed + ' rapports'
        } else {
          this.$vitesse.textContent = info.GearBoxType + ' ' + info.GearboxDesc + ' ' + info.GearBoxSpeed + ' rapports'
        }
        this.$mec.textContent = info.RegistrationDate
        this.$place.textContent = info.SeatCount
        this.$door.textContent = info.DoorCount
        this.$version.textContent = info.Version
        this.$din.textContent = info.EngineFiscalPower + ' cv'
        this.$cylindre.innerHTML = info.EngineHorsePower + ' cm<sup>3</sup>'
        this.$ref.textContent = info.VehicleReference
        this.$option.textContent = info.Option

        this.$subject.setAttribute('value', 'n ' + info.VehicleReference + ' - ' + info.Brand + ' ' + info.Model)

        if (info.FinancementBlock) {
          this.$financeText.innerHTML = info.FinancementBlock
        } else {
          document.querySelector('.content-financial').style.display = 'none'
        }

        this.$societe.innerHTML = info.PointOfSaleName + '<span>' + info.PointOfSaleAddress + '</span>'

        this.$commercialInfo.innerHTML = info.CommercialHours + '</br> Tel : ' + info.CommercialTel + ' - Fax : ' + info.CommercialFax
        this.$atelierInfo.innerHTML = info.AtelierHours + '</br> Tel : ' + info.AtelierTel + ' - Fax : ' + info.AtelierFax

        let mapLat = info.PointOfSaleLattitude
        let mapLng = info.PointOfSaleLongitude

        mapLat = Number(mapLat)
        mapLng = Number(mapLng)
        let latLng = {lat: mapLat, lng: mapLng}

        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: latLng
        })
        let marker = new google.maps.Marker({
          position: latLng,
          icon: 'assets/img/icon_maps.png',
          map: map
        })

        for (var a = 0; info.PointOfSaleContacts.length > a; a++) {
          let cc = null
          if (info.PointOfSaleContacts[a].Name === null) {
            cc = {
              name: 'Tel',
              tel: info.PointOfSaleContacts[a].Telephone1
            }
          } else {
            cc = {
              name: info.PointOfSaleContacts[a].Name,
              tel: info.PointOfSaleContacts[a].Telephone1
            }
          }
          let liContact = document.createElement('li')
          this.$commercialContact.appendChild(liContact).innerHTML = `
            <strong>${cc.name} :</strong>
            <a href="tel:${cc.tel}">${cc.tel}</a>
          `
          this.$commercialContact.querySelectorAll('li')[a].classList.add('cell')
        }

        for (var i = 0; info.ImageUrl.length > i; i++) {
          let liSlider = document.createElement('li')
          let aController = document.createElement('a')
          let img = info.ImageUrl[i]
          this.$slider.appendChild(liSlider).innerHTML = '<img src="' + img + '"/>'
          this.$controller.appendChild(aController).innerHTML = '<img src="' + img + '" class="minus"/>'
        }

        this.$slider.querySelectorAll('li')[0].classList.add('actif')
        this.$controller.querySelectorAll('a')[0].classList.add('actif')

        let arrImgHeight = []
        for (var y = 0; this.$slider.querySelectorAll('img').length > y; y++) {
          let img = this.$slider.querySelectorAll('img')[y]
          this.$slider.querySelectorAll('img')[y].onerror = () => {
            reject()
          }
          this.$slider.querySelectorAll('img')[y].onload = () => {
            arrImgHeight.push(img.height)
            if (arrImgHeight.length === this.$slider.querySelectorAll('img').length) {
              resolve()
            }
          }
        }
      })
    })
  }
  postRef (ref, url) {
    const request = new XMLHttpRequest()
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
          reject('Post ERREUR 2')
        } */
      }

      request.send(JSON.stringify(ref))
    })
  }
}

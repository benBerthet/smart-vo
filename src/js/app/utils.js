let isLoading = false
let wsGetVehicles = '../vehicle/getvehicles/'

function docHeight () {
  let pageHeight = document.body.offsetHeight
  return pageHeight
}
function getPage () {
  let pageNum = sessionStorage.getItem('smartVoPageNumber')
  return parseInt(pageNum)
}
function isLocal () {
  const hostName = window.location.hostname
  if (hostName === 'localhost' || hostName === 'demo.proximity.fr') {
    return true
  } else {
    return false
  }
}
function getList (url) {
  let request = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    request.open('GET', url, true)

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        const data = JSON.parse(request.responseText)
        resolve(data)
      } else {
        const data2 = JSON.parse(JSON.stringify(request.responseText))
        if (isLocal()) {
          resolve(data2)
        } else {
          reject('GET ERREUR 2')
        }
      }
    }

    request.onerror = function () {
      // There was a connection error of some sort
      reject('GET ERREUR')
    }

    request.send()
  })
}
function postList (valArray, url) {
  const request = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    request.open('POST', url, true)
    request.setRequestHeader('Content-type', 'application/json')

    request.onreadystatechange = function () { // Call a function when the state changes.
      // console.log(request.response.length)
      if (request.responseText.length > 0) {
        let data = JSON.parse(request.responseText)
        resolve(data)
      } /* else {
        reject('Post ERREUR 2')
      } */
      /* if (request.status === 200) {
        if (request.readyState === 4) {
          let data = JSON.parse(request.responseText)
          resolve(data)
        } else {
          // console.log(request, request.status, request.readyState)
          reject('Post ERREUR 2')
        }
      } */
    }

    request.send(JSON.stringify(valArray))
  })
}
/* CONSTRUCTION DU LA LISTE VEHICULE */
function checkForm (url, pageNumber, returnToHome) {
  let valArray = {}
  let $inputModel = document.getElementById('modele')
  let $inputLowerPrice = document.getElementById('lower-price-value')
  let $inputUpperPrice = document.getElementById('upper-price-value')
  let $inputCarburant = document.getElementById('carburant')
  let $inputLowerKm = document.getElementById('lower-km-value')
  let $inputUpperKm = document.getElementById('upper-km-value')
  let $inputDistributeur = document.getElementById('distributeur')
  let $inputBoite = document.getElementById('boite')
  let $inputReference = document.getElementById('reference')
  let modelVal = $inputModel.getAttribute('value')
  let lowerPriceVal = $inputLowerPrice.getAttribute('value').replace('€', '').replace(/ /g, '')
  let upperPriceVal = $inputUpperPrice.getAttribute('value').replace('€', '').replace(/ /g, '')
  let carburantVal = $inputCarburant.getAttribute('value')
  let lowerKmVal = $inputLowerKm.getAttribute('value').replace('km', '').replace(/ /g, '')
  let upperKmVal = $inputUpperKm.getAttribute('value').replace('km', '').replace(/ /g, '')
  let distributeurVal = $inputDistributeur.getAttribute('value')
  let boiteVal = $inputBoite.getAttribute('value')
  let referenceVal = $inputReference.value
  // console.log(modelVal)
  if (referenceVal.length === 0) {
    // console.log('A')
    valArray = {
      'ModelId': modelVal,
      'PriceMin': parseInt(lowerPriceVal),
      'PriceMax': parseInt(upperPriceVal),
      'EngineId': carburantVal,
      'GearboxId': boiteVal,
      'PointOfSaleId': distributeurVal,
      'VehicleReference': '',
      'MileageMin': parseInt(lowerKmVal),
      'MileageMax': parseInt(upperKmVal),
      'PageNumber': parseInt(pageNumber),
      'ReturnToHome': returnToHome
    }
    sendValue(valArray, url)
  } else {
    // console.log('B')
    valArray = {
      'ModelId': '',
      'PriceMin': '',
      'PriceMax': '',
      'EngineId': '',
      'GearboxId': '',
      'PointOfSaleId': '',
      'VehicleReference': referenceVal,
      'MileageMin': '',
      'MileageMax': '',
      'PageNumber': parseInt(pageNumber),
      'ReturnToHome': returnToHome
    }
    checkRef(referenceVal, valArray, url)
  }
  if (!sessionStorage.getItem('smartVoReturnToHome')) {
    sessionStorage.setItem('smartVoSearch', JSON.stringify(valArray))
  }
}
function buildFromStorage (list) {
  getValueStorage().then((data) => {
    for (let key in list) {
      let inputId, list, dataValue
      switch (key) {
        case 'Engine' :
          inputId = document.getElementById('carburant')
          list = document.querySelector('.list-engine')
          dataValue = data.EngineId
          customSelect(inputId, list, dataValue)
          break
        case 'Gearbox' :
          inputId = document.getElementById('boite')
          list = document.querySelector('.list-gearbox')
          dataValue = data.GearboxId
          customSelect(inputId, list, dataValue)
          break
        case 'Model' :
          inputId = document.getElementById('modele')
          list = document.querySelector('.list-model')
          dataValue = data.ModelId
          customSelect(inputId, list, dataValue)
          break
        case 'PointOfSale' :
          inputId = document.getElementById('distributeur')
          list = document.querySelector('.list-pointOfSale')
          dataValue = data.PointOfSaleId
          customSelect(inputId, list, dataValue)
          break
      }
    }
  })
}
function customSelect (input, list, dataValue) {
  let parent = input.parentNode
  let block = parent.querySelectorAll('li')
  let span = parent.querySelector('span')
  for (let i = 0; block.length > i; i++) {
    let val = block[i].getAttribute('data-value')
    let name = block[i].getAttribute('data-name')
    if (val === dataValue) {
      span.innerHTML = name
    }
  }
}
function getValueStorage () {
  return new Promise((resolve, reject) => {
    let search = JSON.parse(sessionStorage.smartVoSearch)
    let storageModel = search.ModelId
    let storageEngine = search.EngineId
    let storageGear = search.GearboxId
    let storageSaler = search.PointOfSaleId
    let storageRef = search.VehicleReference
    let $inputModel = document.getElementById('modele')
    let $inputCarburant = document.getElementById('carburant')
    let $inputDistributeur = document.getElementById('distributeur')
    let $inputBoite = document.getElementById('boite')
    let $inputReference = document.getElementById('reference')

    $inputModel.setAttribute('value', storageModel)
    $inputCarburant.setAttribute('value', storageEngine)
    $inputDistributeur.setAttribute('value', storageSaler)
    $inputBoite.setAttribute('value', storageGear)
    $inputReference.setAttribute('value', storageRef)
    sessionStorage.removeItem('smartVoReturnToHome')
    resolve(search)
  })
}
function sendValue (valArray, url) {
  if (isLoading) {
    return
  }
  isLoading = true
  postList(valArray, url).then((data) => {
    sessionStorage.setItem('smartVoPageNumber', data.PageNumber)
    sessionStorage.setItem('smartVoPageCount', data.PageCount)
    // console.log(data.Result)
    if (data.Result === 'OK') {
      document.getElementById('reference').classList.remove('error')
      document.getElementById('reference').setAttribute('placeholder', 'Ex : 722033')
      // clearCell()
      buildCell(data.ResultData)
      // console.log(data)
    } else if (data.Result === 'INVALID_REFERENCE ') {
      errorRef()
    } else {
      noResult()
    }
  }).catch((data) => {
    // console.log(data)
  })
}
function errorRef () {
  document.getElementById('reference').value = ''
  document.getElementById('reference').classList.add('error')
  document.getElementById('reference').setAttribute('placeholder', 'Référence inexistante')
  noResult()
}
function checkRef (ref, valArray, url) {
  /* const regex = /([0-9])+/g
  if (ref.length < 6 || !regex.test(ref)) { */
  if (ref.length < 6) {
    // console.log('ref<6')
    isLoading = true
    errorRef()
  } else {
    // console.log('ref>6')
    isLoading = false
    sendValue(valArray, url)
  }
}

function noResult () {
  sessionStorage.removeItem('smartVoPageNumber')
  sessionStorage.removeItem('smartVoPageCount')
  const $container = document.querySelector('.list-vehicule')
  clearCell()
  $container.innerHTML = 'Aucun résultats pour cette recherche'
  isLoading = false
}
function clearCell () {
  const $container = document.querySelector('.list-vehicule')
  $container.innerHTML = ''
}
function buildCell (data) {
  const $container = document.querySelector('.list-vehicule')
  for (let i = 0; data.length > i; i++) {
    const vehicle = {
      vehicleId: data[i].VehicleId,
      imgSrc: data[i].ImageUrl,
      marque: data[i].Brand,
      modele: data[i].Model,
      price: data[i].Price,
      year: data[i].VehicleYear,
      km: data[i].Mileage,
      energie: data[i].Engine,
      transmission: data[i].Gearbox,
      societe: data[i].PointOfSaleName,
      city: data[i].PointOfSaleCity,
      url: data[i].VehicleUrl,
      ref: data[i].VehicleReference
    }
    const urlAnnonce = () => {
      let urlIs = null
      let transformUrl = vehicle.url.replace('#', '-')

      if (isLocal()) {
        urlIs = `vehicule.html?=${vehicle.url}`
      } else {
        urlIs = `${vehicle.url}`
      }
      return urlIs
    }
    const htmlCell = `
      <img src="${vehicle.imgSrc}" alt="">
      <div class="info-vehicule cell">
          <strong class="title-vehicule">${vehicle.marque} ${vehicle.modele}</strong>
          <strong class="price-vehicule">${vehicle.price} €</strong>
          <div class="spec-vehicule cell">
              <ul>
                  <li>${vehicle.year} - ${vehicle.km} km</li>
                  <li>${vehicle.energie}</li>
                  <li>Boîte ${vehicle.transmission}</li>
              </ul>
              <div class="localisation-vehicule">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 21"><path d="M7 0C3.1 0 0 3.1 0 7s4.2 14 7 14c2.7 0 7-10.1 7-14 0-3.9-3.1-7-7-7zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/></svg>
                  <span>${vehicle.societe}</span>
              </div>
          </div>
          <div class="last-line">
              <div class="ref-vehicule">
                  <strong>ref : ${vehicle.ref}</strong>                                
              </div>
              <a href="` + urlAnnonce() + `" class="btn"><span>En savoir plus</span></a>
          </div>
      </div>
    `
    const d = document.createElement('div')
    d.classList.add('cell')
    d.classList.add('block')
    d.innerHTML = htmlCell
    $container.appendChild(d)
    window.setTimeout(function () {
      d.style.opacity = 1
    }, 0)
  }
  isLoading = false
  docHeight()
}
export {
  isLocal,
  docHeight,
  isLoading,
  checkForm,
  getList,
  postList,
  clearCell,
  buildCell,
  getPage,
  wsGetVehicles,
  buildFromStorage,
  getValueStorage
}

import {checkForm, clearCell, wsGetVehicles} from '../utils'
export default class Range {
  constructor () {
    this.rangeSliderInit()
  }

  rangeSliderInit () {
    /* --------SET RANGE PRICE--------- */
    let rangePriceSlider = document.getElementById('rangePrice')
    let priceMin = null
    let priceMax = null
    let kmMin = null
    let kmMax = null
    if (sessionStorage.getItem('smartVoReturnToHome')) {
      let searchJson = JSON.parse(sessionStorage.smartVoSearch)
      priceMin = searchJson.PriceMin
      priceMax = searchJson.PriceMax
      kmMin = searchJson.MileageMin
      kmMax = searchJson.MileageMax
    } else {
      priceMin = 1000
      priceMax = 40000
      kmMin = 0
      kmMax = 400000
    }

    noUiSlider.create(rangePriceSlider, {
      connect: true,
      start: [ priceMin, priceMax ],
      range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
        'min': [1000, 2000],
        'max': [40000]
      },
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        postfix: ' €'
      })
    })

    let inputNumberLowerPrice = document.getElementById('lower-price-value')
    let inputNumberUpperPrice = document.getElementById('upper-price-value')

    rangePriceSlider.noUiSlider.on('end', function () {
      if (document.getElementById('search').classList.contains('hide')) {
        clearCell()
        checkForm(wsGetVehicles, 1, false)
      }
    })
    rangePriceSlider.noUiSlider.on('update', function (values, handle) {
      let value = values[handle]
      // console.log(handle)

      if (handle) {
        inputNumberUpperPrice.setAttribute('value', value)
        // console.log(value)
      } else {
        inputNumberLowerPrice.setAttribute('value', value)
        // console.log(value)
      }
    })

    inputNumberUpperPrice.addEventListener('change', function () {
      rangePriceSlider.noUiSlider.set([null, this.value])
    })

    inputNumberLowerPrice.addEventListener('change', function () {
      rangePriceSlider.noUiSlider.set([null, this.value])
    })

    /* --------SET RANGE KM--------- */
    let rangeSliderKm = document.getElementById('rangeKm')

    noUiSlider.create(rangeSliderKm, {
      connect: true,
      start: [ kmMin, kmMax ],
      range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
        'min': [0, 10000],
        'max': [400000]
      },
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        postfix: ' km'
      })
    })

    let inputNumberLowerKm = document.getElementById('lower-km-value')
    let inputNumberUpperKm = document.getElementById('upper-km-value')

    rangeSliderKm.noUiSlider.on('update', function (values, handle) {
      let value = values[handle]

      if (handle) {
        inputNumberUpperKm.setAttribute('value', value)
      } else {
        inputNumberLowerKm.setAttribute('value', value)
      }
    })

    inputNumberUpperKm.addEventListener('change', function () {
      rangeSliderKm.noUiSlider.set([null, this.value])
    })

    inputNumberLowerKm.addEventListener('change', function () {
      rangeSliderKm.noUiSlider.set([null, this.value])
    })
  }
}

// import App from './app/App'
import Home from './app/Home'
import Vehicule from './app/Vehicule'

require('es6-promise').polyfill()

window.addEventListener('load', () => {
  const getDevice = () => {
    document.body.classList.remove('mobil')
    if (document.body.clientWidth <= 960) {
      document.body.classList.add('mobil')
    }
  }
  const getCookie = () => {
    return new Promise((resolve, reject) => {
      if (!sessionStorage.getItem('smartVoPageNumber')) {
        createCookie()
      }
      resolve()
    })
  }
  const createCookie = () => {
    let sp1 = document.createElement('div')
      // lui donne un attribut id appelé 'nouveauSpan'
    sp1.setAttribute('id', 'layer')
      // crée un peu de contenu pour cet élément.
    const htmlCell = `
        <div class="popin">
          <span id="js-close-popin" class="close">X</span>
          <div>
            <strong>Utilisation de cookies.</strong>
            <p>Daimler utilise des cookies afin d'optimiser la conception de son site Internet et de l'améliorer en continu. En continuant de consulter ce site Internet, vous acceptez l'utilisation de cookies.</p>
            <a href="#">Vous trouverez de plus amples informations dans les mentions sur les cookies.</a>
          </div>
        </div>
      `

    let header = document.getElementsByTagName('header')[0]

      // ajoute ce contenu au nouvel élément
    sp1.innerHTML = htmlCell
    document.body.insertBefore(sp1, header)
  }
  const closeCookie = () => {
    // closeCookie()
    getCookie().then(() => {
      let closer = document.getElementById('js-close-popin')
      closer.addEventListener('click', () => {
        document.body.removeChild(document.getElementById('layer'))
      })
    }).catch(() => {
    })
  }

  getDevice()
  closeCookie()

  let supportsOrientationChange = 'onorientationchange' in window
  let orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize'
  window.addEventListener(orientationEvent, () => {
    setTimeout(() => {
      getDevice()
    }, 300)
  }, false)
  if (document.querySelector('body').id === 'home') {
    const a = new Home()
  }
  if (document.querySelector('body').id === 'vehicule') {
    const b = new Vehicule()
  }
})

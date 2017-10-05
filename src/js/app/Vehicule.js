import Builder from './vehicule/Builder'
import Form from './vehicule/Form'
export default class Vehicule {
  constructor () {
    /* GOTO CONTACT */
    this.$btnBack = document.querySelector('.back')

    const newBuilder = new Builder()
    const newForm = new Form()
    this.initpage()
  }
  initpage () {
    this.$btnBack.addEventListener('click', (e) => {
      sessionStorage.setItem('smartVoReturnToHome', true)
    })
  }
}

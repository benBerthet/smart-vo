import SearchBar from './home/SearchBar'
import SelectCustom from './home/SelectCustom'
import Range from './home/Range'
import Build from './home/Build'
import Form from './home/Form'
export default class Home {
  constructor () {
    this.initpage()
    const newSelectCustom = new SelectCustom()
    const newSearchBar = new SearchBar()
    const newRange = new Range()
    const newBuild = new Build()
    const newForm = new Form()
  }
  initpage () {
    if (!sessionStorage.getItem('smartVoReturnToHome')) {
      sessionStorage.setItem('smartVoPageNumber', 1)
    }
  }
}

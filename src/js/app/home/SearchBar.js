export default class SearchBar {
  constructor () {
    this.$searchBar = document.getElementById('search-bar')
    this.searchBarPos = this.$searchBar.offsetTop
    this.$search = document.getElementById('search')
    this.searchBarHeight = this.$search.offsetHeight + 'px'
    this.$openSearchBar = document.getElementById('open-search')
    this.$openSearchBarMobil = document.querySelector('.open-search-mobil')
    this.$overlay = document.querySelector('.overlay')
    this.$closeMobil = document.querySelector('.close-mobil')
    this.$mainSearch = document.querySelector('.container-search')
    this.$searchMobil = document.querySelector('.content-mobil')
    this.calcHeightSearchMobil = this.$search.offsetHeight + this.$mainSearch.offsetHeight
    this.searchBarHeightMobil = this.calcHeightSearchMobil + 'px'
    this.$search.style.height = '0'
    this.$search.classList.add('hide')

    this.checkStateSearchBar = this.checkStateSearchBar.bind(this)
    this.checkStateSearchBarOpen = this.checkStateSearchBarOpen.bind(this)
    this.checkStateSearchBarpos = this.checkStateSearchBarpos.bind(this)

    this.openSearchBarMobil = this.openSearchBarMobil.bind(this)
    this.closeSearchBarMobil = this.closeSearchBarMobil.bind(this)

    this.init()
  }
  init () {
    this.initSearchBar()
    this.onWindowResize()
  }
  resetSearchBar () {
    this.$search.classList.remove('hide')
    this.$search.style.height = ''
    this.$search.style.display = 'block'
    this.$searchBar.classList.remove('fixe')
    this.$searchBar.style.height = ''
    this.$searchBar.style.display = 'block'
    this.searchBarPos = this.$searchBar.offsetTop
    this.searchBarHeight = this.$search.offsetHeight + 'px'
    this.calcHeightSearchMobil = this.$search.offsetHeight + this.$mainSearch.offsetHeight
    this.searchBarHeightMobil = this.calcHeightSearchMobil + 'px'
  }
  initSearchBar () {
    if (document.body.classList.contains('mobil')) {
      this.$searchBar.style.height = 0
      this.closeSearchBarMobil()
      this.addEventListenerMobil()
    } else {
      this.$searchBar.style.display = 'block'
      this.closeSearchBar()
      this.addEventListenerDeskTop()
    }
  }
  onWindowResize () {
    let supportsOrientationChange = 'onorientationchange' in window
    let orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize'
    window.addEventListener(orientationEvent, () => {
      setTimeout(() => {
        this.resetSearchBar()
        if (document.body.classList.contains('mobil')) {
          this.removeEventListenerMobil()
          this.$searchBar.style.visibility = 'hidden'
          this.$searchBar.style.overflow = 'hidden'
        } else {
          this.removeEventListenerDeskTop()
          this.$searchBar.style.visibility = 'visible'
          this.$searchBar.style.overflow = 'visible'
        }
        this.initSearchBar()
      }, 300)
    })
  }
  addEventListenerMobil () {
    this.$openSearchBarMobil.addEventListener('click', this.openSearchBarMobil)
    this.$overlay.addEventListener('click', this.closeSearchBarMobil)
    this.$closeMobil.addEventListener('click', this.closeSearchBarMobil)
  }
  removeEventListenerMobil () {
    this.$openSearchBarMobil.removeEventListener('click', this.openSearchBarMobil)
    this.$overlay.removeEventListener('click', this.closeSearchBarMobil)
    this.$closeMobil.removeEventListener('click', this.closeSearchBarMobil)
    // this.$searchBar.removeEventListener('mouseleave', this.checkStateSearchBarOpen)
    window.removeEventListener('scroll', this.checkStateSearchBarpos)
  }
  addEventListenerDeskTop () {
    this.$openSearchBar.addEventListener('click', this.checkStateSearchBar)
    // this.$searchBar.addEventListener('mouseleave', this.checkStateSearchBarOpen)
    window.addEventListener('scroll', this.checkStateSearchBarpos)
  }
  removeEventListenerDeskTop () {
    this.$openSearchBar.removeEventListener('click', this.checkStateSearchBar)
    // this.$searchBar.removeEventListener('mouseleave', this.checkStateSearchBarOpen)
    window.removeEventListener('scroll', this.checkStateSearchBarpos)
  }
  checkStateSearchBar () {
    if (this.$search.classList.contains('hide')) {
      this.openSearchBar()
    } else {
      this.closeSearchBar()
    }
  }
  checkStateSearchBarOpen () {
    if (!this.$search.classList.contains('hide')) {
      this.closeSearchBar()
    }
  }
  checkStateSearchBarpos () {
    let posT = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    if (posT >= this.searchBarPos) {
      this.$searchBar.classList.add('fixe')
    } else {
      this.$searchBar.classList.remove('fixe')
    }
  }
  openSearchBar () {
    this.$search.style.height = this.searchBarHeight
    this.$openSearchBar.children[0].textContent = '-'
    setTimeout(() => {
      this.$search.classList.remove('hide')
    }, 300)
  }
  closeSearchBar () {
    this.$search.classList.add('hide')
    this.$search.style.height = '0'
    this.$openSearchBar.children[0].textContent = '+'
  }
  openSearchBarMobil (e) {
    e.preventDefault()
    this.$search.style.height = ''
    this.$searchBar.style.visibility = 'visible'
    this.$searchBar.style.overflow = 'visible'
    if (this.calcHeightSearchMobil > window.innerHeight) {
      this.$searchMobil.style.height = window.innerHeight + 'px'
      this.$searchBar.style.height = window.innerHeight + 'px'
    } else {
      this.$searchBar.style.height = this.searchBarHeightMobil
    }
    this.$openSearchBar.children[0].textContent = '-'
    this.$search.classList.remove('hide')
  }
  closeSearchBarMobil () {
    this.$searchBar.style.visibility = 'hidden'
    this.$searchBar.style.overflow = 'hidden'
    this.$searchBar.style.height = 0
    this.closeSearchBar()
  }
}

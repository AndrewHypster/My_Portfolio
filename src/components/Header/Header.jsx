import ColorT from "../some/ColorText"
import '../../sass/Header.sass'

const Header = () => {

  let scroll = 20
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if(window.pageYOffset > scroll)
      header.style.transform = 'translateY(-100%)'
    else
      header.style.transform = 'translateY(0%)'
    scroll = window.pageYOffset
  })

  const sideBar = () => {
    const SideBar = document.querySelector('#SideBar')
    SideBar.style.transform = 'translateX(0%)'
    setTimeout(() => {
      const exitF = document.querySelector('.exit').querySelector('.first')
      const exitS = document.querySelector('.exit').querySelector('.second')
    }, 1500)
  }

  return(
    <header>
      <a href="#Main">
        <h4>
          <ColorT text='MyPortfolio' indexes={[0, 4, 6, 10]} color='blue' />
        </h4>
      </a>
      
      <div>
        <ul>
          <a href="#MyWorks" ><li>my works</li></a>
          <a href="#resume"><li>about me</li></a>
          <a href="#hobbies"><li>hobbies</li></a>
        </ul>

        <a onClick={sideBar}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="20" height="20" x="0" y="0" viewBox="0 0 24 24" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
            <g>
              <path d="M21 7H8a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2zm1 5a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 1-1zm0 6a1 1 0 0 0-1-1h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 1-1z" fill="#000000" data-original="#000000"></path>
            </g>
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header
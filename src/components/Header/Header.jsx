import ColorT from "../some/ColorText"
import '../../sass/Header.sass'

const Header = () => {

  let scroll = 0
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if(window.pageYOffset > scroll)
      header.style.transform = 'translateY(-100%)'
    else
      header.style.transform = 'translateY(0%)'
    scroll = window.pageYOffset
  });
  return(
    <header>
      <a href=".Main">
        <h4>
          <ColorT text='MyPortfolio' indexes={[0, 4, 6, 10]} color='blue' />
        </h4>
      </a>
    </header>
  )
}

export default Header
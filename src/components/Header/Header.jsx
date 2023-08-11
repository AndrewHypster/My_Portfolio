import ColorT from "../some/ColorText"
import '../../sass/Header.sass'

const Header = () => {
  return(
    <header>
      <h4>
        <ColorT text='MyPortfolio' indexes={[0, 4, 6, 10]} color='blue' />
      </h4>
    </header>
  )
}

export default Header
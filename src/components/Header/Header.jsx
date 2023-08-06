import ColorT from "../ColorText"
import { SHeader } from "./style"

const Header = () => {
  return(
    <SHeader>
      <h4>
        <ColorT text='MyPortfolio' indexes={[0, 4, 6, 10]} color='blue' />
      </h4>
    </SHeader>
  )
}

export default Header
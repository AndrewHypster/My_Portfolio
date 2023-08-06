import ColorT from "../ColorText"
import { AboutMe, H2, H3, Line, Slide, Text } from "./style"

const FirstSlide = () => {
  return(
    <Slide className="FirstSlide slide">
      <h1>
        <ColorT text='Front End' indexes={[1, 4, 8]} color='orange' />
      </h1>
      <AboutMe>
        <Line />
        <Text>
          <p style={{display: 'flex', alignItems: 'end'}}>
            <H3>Hi, my name is </H3><pre> </pre><H2>Andrii Hrechukh</H2>
          </p>
        </Text>
      </AboutMe>
    </Slide>
  )
}

export default FirstSlide
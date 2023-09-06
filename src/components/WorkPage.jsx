import { useParams } from 'react-router-dom'
import Works from '../jsons/MyWorks.json'
import '../sass/WorkPage.sass'
import ColorT from './some/ColorText'

const WorkPage = () => {
  const {id} = useParams()
  console.log(id);

  return(
    <div className="WorkPage">
      <div className="content">
        <h1>
          <ColorT text={Works[id].title} indexes={Works[id].colorText[1]} color={Works[id].colorText[0]} />
        </h1>
        <div className="info">
          <div>
            <div className="slider-img">
              <h3>SLIDER</h3>
            </div>
            <div className="data">

            </div>
          </div>
          <div>
            <div className="slider-info">
              <h2>
                <ColorT text='Description' indexes={[0, 3, 6, 10]} color='blue' />
                <div className='hr'></div>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </p>

            </div>
            <div className="buttons">
              <h3 className='Watch'>Watch</h3>
              <h3 className='Code'>Code</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkPage
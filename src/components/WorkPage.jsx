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

          <section>
            <div className="slider-img">
              {Works[id].imgs.map(img => 
                <div src={{backgroundImg: `url(${img})`}}></div>
              )}
            </div>
            <div className="data"></div>
          </section>

          <section>
            <div className="slider-info">
              <h2>
                <ColorT text='Description' indexes={[0, 3, 6, 10]} color='blue' />
                <div className='hr'></div>
              </h2>
              <p>
                {Works[id].description.map(text => <p>{text}</p>)}
              </p>
            </div>

            <div className="buttons">
              <a href={Works[id].links.watch} target='_blank'><h3 className='Watch'>Watch</h3></a>
              <a href={Works[id].links.code} target='_blank'><h3 className='Code'>Code</h3></a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default WorkPage
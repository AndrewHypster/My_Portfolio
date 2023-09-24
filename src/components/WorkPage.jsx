import { useParams } from 'react-router-dom'
import Works from '../jsons/MyWorks.json'
import '../sass/WorkPage.sass'
import ColorT from './some/ColorText'

const WorkPage = () => {
  const {id} = useParams()
  
  const scrollInfo = (event) => {
    const slider = document.querySelector('.slider-info')
    console.log(slider.scrollLeft);
    if (event.deltaY > 0) { // гортаєм вверх, йде в ліво
        const inter = setInterval(()=>{
          if (slider.scrollLeft < slider.clientWidth)
            slider.scrollLeft += 4
          else clearInterval(inter)
        }, 1)
    } else {                // гортаєм вниз, йде в право
      const inter = setInterval(()=>{
        if (slider.scrollLeft > 0)
          slider.scrollLeft -= 4
        else clearInterval(inter)
      }, 1)
    }
  }

  return(
    <div className="WorkPage" onWheel={scrollInfo}>
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
              <div className="scrollDown">
                <div className="hr"></div>
                <p>Scroll Down</p>
                <div className="hr"></div>
                <div className="right">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="12" height="12" x="0" y="0" viewBox="0 0 490.8 490.8" style={{enableBackground: 'white'}} xmlSpace="preserve"><g><path d="M135.685 3.128c-4.237-4.093-10.99-3.975-15.083.262-3.992 4.134-3.992 10.687 0 14.82l227.115 227.136-227.136 227.115c-4.237 4.093-4.354 10.845-.262 15.083 4.093 4.237 10.845 4.354 15.083.262.089-.086.176-.173.262-.262l234.667-234.667c4.164-4.165 4.164-10.917 0-15.083L135.685 3.128z" fill="#f44336"></path><path d="M128.133 490.68a10.667 10.667 0 0 1-7.552-18.219l227.136-227.115L120.581 18.232c-4.171-4.171-4.171-10.933 0-15.104 4.171-4.171 10.933-4.171 15.104 0l234.667 234.667c4.164 4.165 4.164 10.917 0 15.083L135.685 487.544a10.663 10.663 0 0 1-7.552 3.136z" fill="#010101" opacity="1"></path></g></svg>
                </div>
              </div>

              <div className="infoSlide">
                <h2>
                  <ColorT text='Description' indexes={[0, 3, 6, 10]} color='blue' />
                  <div className='hr'></div>
                </h2>
                <p>
                  {Works[id].description.map(text => <p>{text}</p>)}
                </p>
              </div>

              <div className="infoSlide">
                <h2>
                  <ColorT text='Technologies' indexes={[0, 3, 6, 10]} color='blue' />
                  <div className='hr'></div>
                </h2>
                <p>
                  {Works[id].technologies.join(', ')}
                </p>
              </div>
              
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
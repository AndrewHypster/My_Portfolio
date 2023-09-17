import { Link } from 'react-router-dom'
import Cards from '../../jsons/MyWorks.json'

const SliderCards = () => {
  const scrollUp = () => window.scroll(0, 0)

  return (
    <div className="slider">
      {Cards.map((card, i) =>
        <Link to={`MyWorks/${i}`} onClick={scrollUp}>
          <div className="card" style={{backgroundImage: `url('${card.imgs[0]}')`}} key={i}>
            <div className="text">
              <h1>{card.title}</h1>
              <p>{card.technologies}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}

export default SliderCards
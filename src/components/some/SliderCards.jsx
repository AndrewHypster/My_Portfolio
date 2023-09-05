import { Link } from 'react-router-dom'
import Cards from '../../jsons/MyWorks.json'

const SliderCards = () => {

  return (
    <div className="slider">
      {Cards.map((card, i) =>
        <Link to='frrff'>
          <div className="card" style={{backgroundImage: `url('${card.img}')`}} key={i}>
            <div className="text">
              <h1>{card.title}</h1>
              <p>{card['short-description']}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}

export default SliderCards
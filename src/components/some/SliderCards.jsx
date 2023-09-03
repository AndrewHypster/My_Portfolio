import Cards from '../../jsons/MyWorks.json'

const SliderCards = () => {
    
  window.onload = () => {
    const img = document.querySelector('.slider').querySelector('.card')
    const start = img.parentElement.clientWidth
    const cards = document.querySelectorAll('.card')
    let position = start
    let goto = 'left'
    
    setInterval(() => {
      cards.forEach(card => card.style.transform = `translateX(${position}px)`)
      if (position >= start) goto = 'right'
      if (position <= -img.clientWidth * Cards.length) goto = 'left'
    
      if (goto === 'left') position++
      else if (goto === 'right') position--
    }, 22)
  }

  return (
    <div className="slider">
      {Cards.map((card, i) =>
        <div className="card" style={{backgroundImage: `url('${card.img}')`}} key={i}>
          <div className="text">
            <h1>{card.title}</h1>
            <p>{card['short-description']}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SliderCards
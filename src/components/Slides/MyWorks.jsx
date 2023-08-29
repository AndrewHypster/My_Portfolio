import "../../sass/Slides/MyWorks.sass";
import ColorT from "../some/ColorText";

const MyWorks = () => {

  const positionSlider = img => {
    const start = (img.target.parentElement.clientWidth+(5/2*16))*7
    const cards = document.querySelectorAll('.card')
    let position = start/7*3
    let goto = 'up'
    
    setInterval(() => {
      cards.forEach(card => card.style.transform = `translateX(${position}px)`)
      if (position >= start/7*3) goto = 'down'
      if (position === -start/7*4) goto = 'up'
    
      if (goto === 'up') position++
      else if (goto === 'down') position--
    }, 25)
  }

  return (
    <div id="MyWorks">
      <h1>
        <ColorT text="My Works" indexes={[0, 4, 7]} color="blue" />
      </h1>
      <div className="circle-box">
        <div className="circle"></div>
      </div>
      <div className="slider" onLoad={positionSlider}>
        <div className="card">
          <img src="https://bipbap.ru/wp-content/uploads/2021/11/1619541010_52-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-57-730x856.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://bipbap.ru/wp-content/uploads/2021/11/1619541010_52-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-57-730x856.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://bipbap.ru/wp-content/uploads/2021/11/1619541010_52-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-57-730x856.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://bipbap.ru/wp-content/uploads/2021/11/1619541010_52-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-57-730x856.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://bipbap.ru/wp-content/uploads/2021/11/1619541010_52-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-57-730x856.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://bipbap.ru/wp-content/uploads/2021/11/1619541010_52-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-57-730x856.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://bipbap.ru/wp-content/uploads/2021/11/1619541010_52-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-57-730x856.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyWorks;

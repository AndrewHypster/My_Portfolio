const ColorT = (props) => { // props = text, indexes, first-color

  const res = []
  let color = props.color
  let colors = {
    'blue': '#0059AB',
    'orange': '#DC6F2E'
  }

  props.text.split('').forEach((e, i) => {
    if (props.indexes.some(e => e === i)) { // якщо маєм помалювати букву
      res.push(<div style={{color: `${colors[`${color}`]}` }} key={i}>{e}</div>)
      color = color === 'blue'? 'orange' : 'blue' // чергуєм колір
    }
    else if (e === ' ') res.push(<pre key={i}> </pre>) // в реченні попався пробіл
    else res.push(e) // проста чорна буква
  })

  return(
    <div style={{display: 'flex'}}>
      {res}
    </div>
  )
}

export default ColorT
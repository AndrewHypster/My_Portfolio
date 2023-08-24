import '../sass/AnotherSlide.sass'

const AnotherSlide = props => {
  return(
    <div className="another-slide" id={props.id}>{props.text}</div>
  )
}

export default AnotherSlide
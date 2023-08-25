import '../../sass/Slides/SideBar.sass'

const SideBar = () => {

  const exit = () => {
    const SideBar = document.querySelector('#SideBar')
    SideBar.style.transform = 'translateX(100%)'
  }

  return(
    <div id="SideBar">
      <div className='exit' onClick={exit}>
        <div className="first"></div>
        <div className="second"></div>
      </div>
    </div>
  )
}

export default SideBar
import Main from "./Slides/Main"
import MyWorks from "./Slides/MyWorks"
import SideBar from "./Slides/SideBar"
import Cursor from "./some/Cursor"

const MainPage = () => {
  return (
    <>
      <Cursor />
      <SideBar />
      <Main />
      <MyWorks />
    </>
    
  )
}

export default MainPage
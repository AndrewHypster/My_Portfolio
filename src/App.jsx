import AnotherSlide from "./components/AnotherSlide";
import Header from "./components/Header/Header";
import Main from "./components/Slides/Main";
import MyWorks from "./components/Slides/MyWorks";
import SideBar from "./components/Slides/SideBar";
import Cursor from "./components/some/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <SideBar />
      <Main />
      <MyWorks />
      
      <AnotherSlide text='Типу резюме' id='resume'/>
      <AnotherSlide text='Хоббі' id='hobbies'/>
    </div>
  );
}

export default App;

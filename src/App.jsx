import AnotherSlide from "./components/AnotherSlide";
import Header from "./components/Header/Header";
import Main from "./components/Slides/Main";
import SideBar from "./components/Slides/SideBar";
import Cursor from "./components/some/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <SideBar />
      <Main />
      
      <AnotherSlide text='Мої роботи' id='works'/>
      <AnotherSlide text='Типу резюме' id='resume'/>
      <AnotherSlide text='Хоббі' id='hobbies'/>
    </div>
  );
}

export default App;

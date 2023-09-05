import { Route, Router, Routes } from "react-router-dom";
import Cursor from "./components/some/Cursor";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const mainPath = 'My_Portfolio/build/index.html'
  return (
    <div className="App">
      <Cursor />
      <Header />

      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path={mainPath} element={<MainPage />} />
      </Routes>
      {/* <MainPage /> */}

      {/* <AnotherSlide text='Сертифікати' id='sertyficate'/>
      <AnotherSlide text='Типу резюме' id='resume'/>
      <AnotherSlide text='Хоббі' id='hobbies'/> */}
    </div>
  );
}

export default App;

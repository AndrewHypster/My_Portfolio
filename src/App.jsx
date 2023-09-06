import { Route, Router, Routes } from "react-router-dom";
import Cursor from "./components/some/Cursor";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage";
import ErrorPage from "./components/ErrorPage";
import WorkPage from "./components/WorkPage";

function App() {
  const mainPath = 'My_Portfolio/build/index.html'
  return (
    <div className="App">
      <Cursor />
      <Header />

      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path={mainPath} element={<MainPage />} />
        <Route path={`${mainPath}/MyWorks/:id`} element={<WorkPage />} />
      </Routes>
      {/* <MainPage /> */}

      {/* <AnotherSlide text='Сертифікати' id='sertyficate'/>
      <AnotherSlide text='Типу резюме' id='resume'/>
      <AnotherSlide text='Хоббі' id='hobbies'/> */}
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import AnotherSlide from "./components/AnotherSlide";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Routes>
        <Route index element={<MainPage />} />
      </Routes> */}
      <MainPage />

      {/* <AnotherSlide text='Сертифікати' id='sertyficate'/>
      <AnotherSlide text='Типу резюме' id='resume'/>
      <AnotherSlide text='Хоббі' id='hobbies'/> */}
    </div>
  );
}

export default App;

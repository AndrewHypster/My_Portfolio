import Fotter from "./components/Fotter";
import Header from "./components/Header/Header";
import Main from "./components/Slides/Main";
import Cursor from "./components/some/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <Main />
      
      <Fotter />
    </div>
  );
}

export default App;

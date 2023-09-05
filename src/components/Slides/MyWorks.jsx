import "../../sass/Slides/MyWorks.sass";
import ColorT from "../some/ColorText";
import SliderCards from "../some/SliderCards";

const MyWorks = () => {

  return (
    <div id="MyWorks">
      <h1>
        <ColorT text="My Works" indexes={[0, 4, 7]} color="blue" />
      </h1>
      <div className="circle-box">
        <div className="circle"></div>
      </div>
      <div className="sliders">
        <SliderCards />
        <SliderCards />
      </div>
      
    </div>
  );
};

export default MyWorks;

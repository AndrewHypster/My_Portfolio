import ColorT from "../some/ColorText";
import "../../sass/Slides/Main.sass";

const Main = () => {
  return (
    <div className="Main">
      <div className="content">
        <div>
          <h1>
            <ColorT text="Front End" indexes={[1, 4, 8]} color="orange" />
          </h1>
          <div className="about-me">
            <div className="line" />
            <div className="text-conteiner">
              <h3 className="text">
                Hi, my name is
                &nbsp;
                <h2>Andrii Hrechukh</h2>
              </h3>
              <h4 className="text">
                And &nbsp; <h4 className="orange">I'm looking</h4> &nbsp; for &nbsp; <h4 className="orange">my first job</h4>
              </h4>
              <h4 className="text">
                in a constantly developing company
              </h4>
              <h5 className="small-text">
                <p>I am 19 years old, I live in Ukraine, the city of Borshchiv, Ternopil region</p>
                <p>interested in everything new and can still actively study</p>
              </h5>
            </div>
          </div>
        </div>
        <div className="me">
          <img src="imgs/me.png" alt="It's me" />
          <div />
        </div>
      </div>
      <div className="circles">
        <div className="blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="297" height="297" viewBox="0 0 300 300" fill="none">
            <g filter="url(#filter0_f_71_2)">
              <circle cx="150" cy="150" r="50" fill="#0059AB" fill-opacity="0.59" />
            </g>
            <defs>
              <filter id="filter0_f_71_2" x="0" y="0" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_71_2" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="orange">
          <svg xmlns="http://www.w3.org/2000/svg" width="297" height="297" viewBox="0 0 300 300" fill="none">
            <g filter="url(#filter0_f_72_3)">
              <path d="M200 150C200 177.614 177.614 200 150 200C122.386 200 100 177.614 100 150C100 122.386 122.386 100 150 100C177.614 100 200 122.386 200 150Z" fill="#DC6F2E"/>
            </g>
            <defs>
              <filter id="filter0_f_72_3" x="0" y="0" width="300" height="300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_72_3"/>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Main;

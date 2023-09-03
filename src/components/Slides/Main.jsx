import ColorT from "../some/ColorText";
import "../../sass/Slides/Main.sass";

const Main = () => {
  return (
    <div className="Main" id="Main">
      <div className="content">
        <h1>
          <ColorT text="Front End" indexes={[1, 4, 8]} color="orange" />
        </h1>
        <div className="left">
          <div className="me">
            <img src="imgs/me.png" alt="It's me" />
            <div />
          </div>
          <div className="about-me">
            <div className="line" />
            <div className="text-conteiner">
              <h3 className="text">
                Hi, my name is &nbsp;
                <h2>Andrii Hrechukh</h2>
              </h3>
              <h4 className="text">
                And &nbsp; <h4 className="orange">I'm looking</h4> &nbsp; for
                &nbsp; <h4 className="orange">my first job</h4>
              </h4>
              <h4 className="text">in a constantly developing company</h4>
              <h5 className="small-text">
                <p>
                  I am 19 years old, I live in Ukraine, the city of Borshchiv,
                  Ternopil region
                </p>
                <p>interested in everything new and can still actively study</p>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

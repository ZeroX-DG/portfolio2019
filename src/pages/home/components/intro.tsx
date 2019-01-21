import React from "react";
import Tilt from "vanilla-tilt";
import anime from "animejs";
import "./intro.scss";

interface IState {
  animating: boolean;
}

class Intro extends React.PureComponent<{}, IState> {
  state = {
    animating: true
  };

  componentDidMount() {
    anime({
      targets: ".char",
      opacity: 1,
      duration: 800,
      delay: () => {
        return anime.random(100, 300);
      },
      top: "0",
      easing: "linear",
      complete: () => this.setState({ animating: false })
    });
    Tilt.init(document.getElementsByClassName("floating")[0], {
      perspective: 3000,
      reset: false,
      reverse: true,
      speed: 5000
    });
  }

  renderNameParts() {
    return (
      <div className="name">
        <span className="char">H</span>
        <span className="char">u</span>
        <span className="char">n</span>
        <span className="char">g</span>
        <span> </span>
        <span className="char">N</span>
        <span className="char">g</span>
        <span className="char">u</span>
        <span className="char">y</span>
        <span className="char">e</span>
        <span className="char">n</span>
      </div>
    );
  }

  render() {
    const { animating } = this.state;
    return (
      <div className="intro full-page" id="intro">
        <div className="floating">
          <div className="intro-text">
            {animating ? (
              this.renderNameParts()
            ) : (
              <div className="name">Hung Nguyen</div>
            )}
            <p className="message">
              Hi! I'm a <span id="role">web developer</span> from Vietnam and I
              love what I do.
            </p>
          </div>
          <div
            className="shape circle"
            style={{
              width: "50px",
              height: "50px",
              top: "30px",
              right: "500px",
              transform: "translateZ(50px)",
              backgroundImage:
                "linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)"
            }}
          />
          <div
            className="shape circle"
            style={{
              width: "100px",
              height: "100px",
              top: "30px",
              left: "50px",
              transform: "translateZ(120px)",
              backgroundImage:
                "linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)"
            }}
          />
          <div
            className="shape circle"
            style={{
              width: "30px",
              height: "30px",
              bottom: "100px",
              left: "100px",
              transform: "translateZ(30px)",
              backgroundImage:
                "linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)"
            }}
          />
          <div
            className="shape octagon"
            style={{
              width: "50px",
              height: "50px",
              bottom: "-10px",
              left: "320px",
              transform: "translateZ(50px)",
              backgroundImage:
                "linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%)"
            }}
          />
          <div
            className="shape triangle"
            style={{
              width: "50px",
              height: "50px",
              top: "20px",
              right: "100px",
              transform: "translateZ(50px)",
              backgroundImage:
                "linear-gradient( 135deg, #FEC163 10%, #DE4313 100%)"
            }}
          />
          <div
            className="shape circle"
            style={{
              width: "80px",
              height: "80px",
              bottom: "250px",
              right: "20px",
              transform: "translateZ(90px)",
              backgroundImage:
                "linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)"
            }}
          />
          <div
            className="shape octagon"
            style={{
              width: "100px",
              height: "100px",
              bottom: "20px",
              right: "200px",
              transform: "translateZ(100px)",
              backgroundImage:
                "linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%)"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Intro;

import React from "react";
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
  }

  renderNameParts() {
    return (
      <div className="name">
        <span className="char">V</span>
        <span className="char">i</span>
        <span className="char">e</span>
        <span className="char">t</span>
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
              <div className="name">VietHung Nguyen</div>
            )}
            <p className="message">
              Hi! I'm a <span id="role">web developer</span> from Vietnam.
            </p>
            <div className="scroll-down-btn"></div>
            <p className="scroll-text">All good things come to those who scroll</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;

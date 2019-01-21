import React from "react";
import anime from "animejs";
import "./home.scss";

import Intro from "./components/intro";
import About from "./components/about";
import RightNav from "./components/right-nav";

enum Parts {
  INTRO = "intro",
  ABOUT = "about"
}

interface IState {
  currentPart: Parts;
}

class Home extends React.Component<{}, IState> {
  state = {
    currentPart: Parts.INTRO
  };

  componentDidMount() {
    document.getElementById("home").onwheel = (e: WheelEvent) => {
      const direction = e.deltaY < 0 ? "up" : "down";
      if (direction === "down") {
        this.handleRenderAbout();
      }
    };
  }

  handleRenderAbout() {
    if (this.state.currentPart !== Parts.INTRO) {
      return;
    }
    document.getElementById("intro").style.userSelect = "none";
    anime({
      targets: ".intro .shape",
      top: "-100px",
      opacity: 0,
      delay: () => anime.random(100, 500),
      duration: 1000,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
    anime({
      targets: ".intro .name, .intro .message",
      top: "-100px",
      opacity: 0,
      delay: 500,
      duration: 1000,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
      complete: () => {
        const intro = document.getElementById("intro");
        if (intro) {
          intro.style.display = "none";
        }
        this.setState({ currentPart: Parts.ABOUT });
      }
    });
    anime({
      targets: ".right-nav",
      left: "50px",
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
      delay: 1000
    });
    anime({
      targets: ".home",
      background: "#FFF",
      duration: 2000,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
  }

  render() {
    const { currentPart } = this.state;
    return (
      <div className="home" id="home">
        <RightNav active={currentPart} />
        {currentPart === Parts.INTRO && <Intro />}
        {currentPart === Parts.ABOUT && <About />}
      </div>
    );
  }
}

export default Home;

import React from "react";
import anime from "animejs";
import "./home.scss";

import Intro from "./components/intro";
import About from "./components/about";
import Work from "./components/work";
import RightNav from "./components/right-nav";
import { Parts } from "./common";
import Scenes from "./animations";

interface IState {
  currentPart: Parts;
}

function updateBackground(background: string, color: string) {
  anime({
    targets: ".home",
    background: background,
    duration: 2000,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
  });
  anime({
    targets: ".right-nav .active-bar",
    background: color,
    duration: 1000,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
  });
  anime({
    targets: ".right-nav .active",
    color: "#b2b2b2",
    duration: 500,
    easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
    complete: () => {
      setTimeout(() => {
        const activeItem: HTMLElement = document.querySelector(
          ".right-nav .active"
        );
        if (activeItem) {
          activeItem.style.color = "";
        }
      }, 2000);
    }
  });
}

const backgroundList = {
  [Parts.ABOUT]: () => updateBackground("#FFF", "#000"),
  [Parts.WORK]: () => updateBackground("#17181A", "#FFF")
};

class Home extends React.Component<{}, IState> {
  state = {
    currentPart: Parts.INTRO
  };

  componentDidMount() {
    document.getElementById("home").onwheel = (e: WheelEvent) => {
      const direction = e.deltaY < 0 ? "up" : "down";
      if (direction === "down" && this.state.currentPart === Parts.INTRO) {
        backgroundList[Parts.ABOUT]();
        Scenes.getScene(this.state.currentPart).next(() =>
          this.setState({ currentPart: Parts.ABOUT })
        );
      }
    };
    window.onscroll = () => {
      const scrollEl = document.documentElement;
      const hasScrollBar = scrollEl.scrollHeight > scrollEl.clientHeight;
      const isScrollEnd =
        scrollEl.clientHeight + scrollEl.scrollTop === scrollEl.scrollHeight;
      const isScrollBegin = scrollEl.scrollTop === 0;
      // scroll down
      if (hasScrollBar && isScrollEnd) {
        const nextScene = Scenes.getNextSceneOf(this.state.currentPart);
        Scenes.getScene(this.state.currentPart).next(() => {
          backgroundList[nextScene]();
          this.setState({
            currentPart: nextScene
          });
        });
      }

      // scroll up
      if (hasScrollBar && isScrollBegin) {
        Scenes.getScene(this.state.currentPart).previous(() => {
          const previousScene = Scenes.getPreviousSceneOf(
            this.state.currentPart
          );
          backgroundList[previousScene]();
          this.setState({
            currentPart: previousScene
          });
        });
      }
    };
  }

  render() {
    const { currentPart } = this.state;
    return (
      <div className="home" id="home">
        <RightNav active={currentPart} />
        {currentPart === Parts.INTRO && <Intro />}
        {currentPart === Parts.ABOUT && <About />}
        {currentPart === Parts.WORK && <Work />}
      </div>
    );
  }
}

export default Home;

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

class Home extends React.Component<{}, IState> {
  state = {
    currentPart: Parts.INTRO
  };

  componentDidMount() {
    document.getElementById("home").onwheel = (e: WheelEvent) => {
      const direction = e.deltaY < 0 ? "up" : "down";
      if (direction === "down" && this.state.currentPart === Parts.INTRO) {
        Scenes.getScene(this.state.currentPart).next();
        this.handleRenderAbout();
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
        Scenes.getScene(this.state.currentPart).next();
      }

      // scroll up
      if (hasScrollBar && isScrollBegin) {
        Scenes.getScene(this.state.currentPart).previous();
      }
    };
  }

  updateBackground(background: string, color: string, cb: () => void) {
    anime({
      targets: ".home",
      background: background,
      duration: 2000,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
      complete: cb
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

  handleRenderWork() {
    this.updateBackground("#17181A", "#FFF", () => {
      this.setState({ currentPart: Parts.WORK });
    });
  }

  handleRenderAbout() {
    this.updateBackground("#FFF", "#000", () => {
      this.setState({ currentPart: Parts.ABOUT });
    });
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

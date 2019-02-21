import React from "react";
import anime from "animejs";
import "./home.scss";

import { Parts } from "./common";
import Scenes from "./animations";

import Intro from "./components/intro";
import About from "./components/about";
import Work from "./components/work";
import Articles from "./components/articles";
import RightNav from "./components/right-nav";
import Achievement from "./components/achievement";
import Contact from "./components/contact";

interface IState {
  currentPart: Parts;
  isChangingPart: boolean;
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
      const activeItem: HTMLElement = document.querySelector(
        ".right-nav .active"
      );
      if (activeItem) {
        activeItem.style.color = "";
      }
    }
  });
}

const backgroundList = {
  [Parts.ABOUT]: () => updateBackground("#FFF", "#000"),
  [Parts.WORK]: () => updateBackground("#17181A", "#FFF"),
  [Parts.ACHIEVEMENT]: () => updateBackground("#FFF", "#000"),
  [Parts.ARTICLES]: () => updateBackground("#17181A", "#FFF"),
  [Parts.CONTACT]: () => updateBackground("#FFF", "#000")
};

class Home extends React.Component<{}, IState> {
  state = {
    currentPart: Parts.INTRO,
    isChangingPart: false
  };

  componentDidMount() {
    document.getElementById("home").onwheel = this.navigateFromIntro.bind(this);
    window.onscroll = () => this.handleScroll();
  }

  navigateFromIntro(e: WheelEvent) {
    const direction = e.deltaY < 0 ? "up" : "down";
    if (direction === "down" && this.state.currentPart === Parts.INTRO) {
      backgroundList[Parts.ABOUT]();
      Scenes.getScene(this.state.currentPart).next(() =>
        this.setState({ currentPart: Parts.ABOUT }, () => {
          document
            .getElementById("home")
            .removeEventListener("wheel", this.navigateFromIntro.bind(this));
        })
      );
    }
  }

  handleScroll() {
    const scrollEl = document.documentElement;
    const hasScrollBar = scrollEl.scrollHeight > scrollEl.clientHeight;
    const isScrollEnd =
      scrollEl.clientHeight + scrollEl.scrollTop === scrollEl.scrollHeight;
    const isScrollBegin = scrollEl.scrollTop === 0;
    // scroll down
    if (hasScrollBar && isScrollEnd) {
      this.goToNextPart();
    }

    // scroll up
    if (hasScrollBar && isScrollBegin) {
      this.goToPreviousPart();
    }
  }

  goToNextPart() {
    if (this.state.isChangingPart) {
      return;
    }
    this.setState({ isChangingPart: true }, () => {
      Scenes.getScene(this.state.currentPart).next(() => {
        const nextScene = Scenes.getNextSceneOf(this.state.currentPart);
        const backgroundTransition = backgroundList[nextScene];
        if (backgroundTransition) {
          backgroundTransition();
          this.setState({
            currentPart: nextScene,
            isChangingPart: false
          });
          return;
        }
        this.setState({
          isChangingPart: false
        });
      });
    });
  }

  goToPreviousPart() {
    if (this.state.isChangingPart || this.state.currentPart === Parts.ABOUT) {
      return;
    }
    this.setState({ isChangingPart: true }, () => {
      Scenes.getScene(this.state.currentPart).previous(() => {
        const previousScene = Scenes.getPreviousSceneOf(this.state.currentPart);
        const backgroundTransition = backgroundList[previousScene];
        if (backgroundTransition) {
          backgroundTransition();
          this.setState({
            currentPart: previousScene,
            isChangingPart: false
          });
          return;
        }
        this.setState({
          isChangingPart: false
        });
      });
    });
  }

  render() {
    const { currentPart } = this.state;
    return (
      <div className="home" id="home">
        <RightNav active={currentPart} />
        {currentPart === Parts.INTRO && <Intro />}
        {currentPart === Parts.ABOUT && <About />}
        {currentPart === Parts.WORK && (
          <Work
            onGoToPreviousPart={this.goToPreviousPart.bind(this)}
            onGoToNextPart={this.goToNextPart.bind(this)}
          />
        )}
        {currentPart === Parts.ACHIEVEMENT && <Achievement />}
        {currentPart === Parts.ARTICLES && <Articles />}
        {currentPart === Parts.CONTACT && (
          <Contact onGoToPreviousPart={this.goToPreviousPart.bind(this)} />
        )}
      </div>
    );
  }
}

export default Home;

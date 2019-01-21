import * as React from "react";
import anime from "animejs";
//@ts-ignore
import Avatar from "../../../../public/img/avatar.jpg";
import "./about.scss";

class About extends React.Component {
  componentDidMount() {
    anime({
      targets: ".about",
      opacity: [0, 1],
      duration: 1500,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
  }

  showAvatar() {
    anime({
      targets: ".overflow-image",
      width: `${document.getElementById("avatar").clientWidth}px`,
      delay: 1000,
      duration: 1500,
      easing: "cubicBezier(0.23, 1, 0.32, 1)"
    });
  }

  render() {
    return (
      <div className="about full-page" id="about">
        <span className="name">Hung Nguyen</span>
        <div className="overflow-image">
          <img
            className="avatar"
            id="avatar"
            src={Avatar}
            onLoad={this.showAvatar}
          />
        </div>
        <div className="about-text">
          Hi! I'm Hung. I'm a developer who loves web technology.
          <br />
          <br />
          I was born on October 5, 2001 in Saigon, Vietnam.
          <br />
          <br />
          My life story is a bit different from everyone else. Although my dad
          dream was to become an entrepreneur, my grandparents encourage me to
          become a doctor, I ended up being a programmer, making magic happen
          with a keyboard.
          <h2 className="title">How did that happen?</h2>
          At the age of 13, while every kid in my school obsessing with the new
          game called League of Legends, I find myself spending all my time
          learning about programming.
        </div>
      </div>
    );
  }
}

export default About;

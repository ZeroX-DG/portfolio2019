import * as React from "react";
import anime from "animejs";
import "./right-nav.scss";

interface IProps {
  active: string;
}

class RightNav extends React.Component<IProps> {
  private activeBar: React.RefObject<HTMLDivElement> = React.createRef();
  componentWillUpdate(props: any) {
    if (props.active !== this.props.active) {
      anime({
        targets: ".right-nav .active-bar",
        width: "0px",
        duration: 400,
        easing: "linear",
        complete: () => {
          const activeEl = document.querySelector(".right-nav .active");
          const activeY = activeEl.getBoundingClientRect().top + 11;
          this.activeBar.current.style.top = `${activeY}px`;
          anime({
            targets: ".right-nav .active-bar",
            width: "40px",
            duration: 400,
            easing: "linear"
          });
        }
      });
    }
  }
  render() {
    const { active } = this.props;
    return (
      <div className={`right-nav ${active}-section`}>
        <ul>
          <li className={active === "about" ? "active" : ""}>About me</li>
          <li className={active === "work" ? "active" : ""}>Selected works</li>
          <li className={active === "awards" ? "active" : ""}>Awards</li>
          <li className={active === "articles" ? "active" : ""}>Articles</li>
          <li className={active === "contact" ? "active" : ""}>Contact me</li>
        </ul>
        <div className="active-bar" ref={this.activeBar} />
      </div>
    );
  }
}

export default RightNav;

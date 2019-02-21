import * as React from "react";
import "./contact.scss";

interface Props {
  onGoToPreviousPart: () => void;
}

class Contact extends React.PureComponent<Props> {
  componentDidMount() {
    const { onGoToPreviousPart } = this.props;
    document.documentElement.scrollTop = 1;
    document.getElementById("contact").onwheel = (e: WheelEvent) => {
      const direction = e.deltaY < 0 ? "up" : "down";
      if (direction === "up") {
        onGoToPreviousPart();
      }
    };
  }
  render() {
    return (
      <div className="contact" id="contact">
        <h1 className="title">Contact me</h1>
        <p className="contact-detail">
          <i className="mdi mdi-email" />
          viethungax@gmail.com
        </p>
        <p className="contact-detail">
          <i className="mdi mdi-github-circle" />
          <a href="https://github.com/ZeroX-DG/">
            https://github.com/ZeroX-DG/
          </a>
        </p>
        <p className="contact-detail">
          <i className="mdi mdi-twitter" />
          <a href="https://twitter.com/ZeroX_Hung">
            https://twitter.com/ZeroX_Hung
          </a>
        </p>
        <p className="contact-detail">
          <i className="mdi mdi-facebook-box" />
          <a href="https://www.facebook.com/ZeroXCEH">
            https://www.facebook.com/ZeroXCEH
          </a>
        </p>
      </div>
    );
  }
}

export default Contact;

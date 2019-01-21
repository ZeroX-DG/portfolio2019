import * as React from "react";
import "./right-nav.scss";

interface IProps {
  active: string;
}

class RightNav extends React.Component<IProps> {
  render() {
    const { active } = this.props;
    return (
      <div className="right-nav">
        <ul>
          <li className={active === "about" ? "active" : ""}>About me</li>
          <li className={active === "work" ? "active" : ""}>Selected works</li>
          <li className={active === "recognition" ? "active" : ""}>
            Recognition
          </li>
          <li className={active === "articles" ? "active" : ""}>Articles</li>
          <li className={active === "contact" ? "active" : ""}>Contact me</li>
        </ul>
      </div>
    );
  }
}

export default RightNav;

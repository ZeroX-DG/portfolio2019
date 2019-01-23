import * as React from "react";
import anime from "animejs";
import "./work.scss";
//@ts-ignore
import SnippetStoreIMG from "../../../../static/snippetstore.png";

class Work extends React.Component {
  componentDidMount() {
    anime({
      targets: ".work .project-name",
      lineHeight: ["160px", "50px"],
      duration: 1500,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
    anime({
      targets: ".work .project-description",
      opacity: [0, 1],
      delay: 1000,
      duration: 1500,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
      begin: () => {
        setTimeout(() => {
          anime({
            targets: ".work .project-info",
            opacity: [0, 1],
            //@ts-ignore
            delay: anime.stagger(500),
            duration: 1500,
            easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
          });
        }, 1500);
      }
    });
    anime({
      targets: ".work .project-image",
      opacity: [0, 1],
      delay: 1000,
      duration: 1500,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
  }

  render() {
    return (
      <div className="work full-page" id="work">
        <div className="project-display">
          <div className="left-info">
            <h1 className="project-name">Snippet Store</h1>
            <p className="project-description">
              An application for managing code snippets that I created mainly
              for practicing React.js and try to combine React.js with Electron.
            </p>
            <div className="project-basic-info">
              <ul>
                <li>
                  <div className="project-info">
                    <span className="label">Context</span>
                    <span className="value">Side-project</span>
                  </div>
                </li>
                <li>
                  <div className="project-info">
                    <span className="label">Role</span>
                    <span className="value">Front end</span>
                  </div>
                </li>
                <li>
                  <div className="project-info">
                    <span className="label">Year</span>
                    <span className="value">2018</span>
                  </div>
                </li>
              </ul>
            </div>
            <button className="view-project">View project</button>
          </div>
          <div className="project-image">
            <img src={SnippetStoreIMG} />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;

import * as React from "react";
import anime from "animejs";
import "./work.scss";
//@ts-ignore
import SnippetStoreIMG from "../../../../static/snippetstore.png";
//@ts-ignore
import NoteConnectIMG from "../../../../static/noteconnect.png";

class Project {
  name: string;
  description: string;
  info: [{ label: string; value: string }];
  image: string;
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.info = data.info;
    this.image = data.image;
  }
}

const Projects: Project[] = [
  new Project({
    name: "Snippet Store",
    description:
      "An application for managing code snippets that I created mainly for practicing React.js and try to combine React.js with Electron.",
    info: [
      { label: "Context", value: "Side-project" },
      { label: "Role", value: "Front end" },
      { label: "Year", value: "2018" }
    ],
    image: SnippetStoreIMG
  }),
  new Project({
    name: "NoteConnect",
    description:
      "My first commercial product. This is a note-taking app that allows visualizing relationships between notes with links.",
    info: [
      { label: "Context", value: "Startup" },
      { label: "Role", value: "Full stack" },
      { label: "Year", value: "2018" }
    ],
    image: NoteConnectIMG
  })
];

interface IState {
  index: number;
  currentProject: Project;
  isAnimating: boolean;
}

interface IProps {
  onGoToPreviousPart: () => void;
}

class Work extends React.Component<IProps, IState> {
  state = {
    index: 0,
    currentProject: Projects[0],
    isAnimating: false
  };

  componentDidMount() {
    this.displayProjectInfo();
    document.getElementById("work").onwheel = (e: WheelEvent) => {
      const { index, isAnimating } = this.state;
      const { onGoToPreviousPart } = this.props;
      const direction = e.deltaY < 0 ? "up" : "down";
      if (direction === "down" && !isAnimating) {
        const newIndex = index + 1;
        const isEnd = newIndex === Projects.length;
        if (!isEnd) {
          this.setState({ isAnimating: true }, () => {
            this.hideProjectInfo(() =>
              this.setState(
                {
                  index: newIndex,
                  currentProject: Projects[newIndex],
                  isAnimating: false
                },
                this.displayProjectInfo
              )
            );
          });
        }
      } else if (direction === "up" && !isAnimating) {
        const newIndex = index - 1;
        const isEnd = newIndex === -1;
        if (!isEnd) {
          this.setState({ isAnimating: true }, () => {
            this.hideProjectInfo(() =>
              this.setState(
                {
                  index: newIndex,
                  currentProject: Projects[newIndex],
                  isAnimating: false
                },
                this.displayProjectInfo
              )
            );
          });
        } else {
          onGoToPreviousPart();
        }
      }
    };
  }

  hideProjectInfo(cb: () => void) {
    anime({
      targets: ".work .project-name",
      lineHeight: ["50px", "160px"],
      duration: 1000,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
    anime({
      targets: ".work .project-description",
      opacity: [1, 0],
      delay: 200,
      duration: 700,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
      complete: cb
    });
    anime({
      targets: ".work .project-info",
      opacity: [1, 0],
      //@ts-ignore
      delay: anime.stagger(200),
      duration: 600,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
    anime({
      targets: ".work .project-image",
      opacity: [1, 0],
      duration: 1000,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
    anime({
      targets: ".work .view-project",
      opacity: [1, 0],
      duration: 1000,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
  }

  displayProjectInfo() {
    anime({
      targets: ".work .project-name",
      lineHeight: ["160px", "50px"],
      duration: 1000,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
    anime({
      targets: ".work .project-description",
      opacity: [0, 1],
      delay: 700,
      duration: 700,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)",
      begin: () => {
        setTimeout(() => {
          anime({
            targets: ".work .project-info",
            opacity: [0, 1],
            //@ts-ignore
            delay: anime.stagger(300),
            duration: 900,
            easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
          });
        }, 1500);
      }
    });
    anime({
      targets: ".work .project-image",
      opacity: [0, 1],
      delay: 700,
      duration: 1000,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
    anime({
      targets: ".work .view-project",
      opacity: [0, 1],
      duration: 1000,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
  }

  render() {
    const { currentProject } = this.state;
    return (
      <div className="work full-page" id="work">
        <div className="project-display">
          <div className="left-info">
            <h1 className="project-name">{currentProject.name}</h1>
            <p className="project-description">{currentProject.description}</p>
            <div className="project-basic-info">
              <ul>
                {currentProject.info.map(info => (
                  <li key={info.label}>
                    <div className="project-info">
                      <span className="label">{info.label}</span>
                      <span className="value">{info.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button className="view-project hvr-sweep-to-right">
              View project
            </button>
          </div>
          <div className="project-image">
            <img src={currentProject.image} />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;

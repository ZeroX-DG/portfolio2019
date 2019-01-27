import * as React from "react";
import anime from "animejs";
import "./achievement.scss";

// @ts-ignore
import GraduationIMG from "../../../../static/graduation.jpg";
// @ts-ignore
import highestscoreIMG from "../../../../static/highestscore.jpg";

class Achievement extends React.PureComponent {
  componentDidMount() {
    anime({
      targets: ".achievement",
      opacity: [0, 1],
      duration: 1500,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });

    const achievement = document.getElementById("achievement");
    const higlights = achievement.getElementsByClassName("highlighted");
    for (let i = 0; i < higlights.length; i++) {
      const el = higlights[i] as HTMLElement;
      const target = el.dataset.image;
      el.addEventListener(
        "mouseover",
        this.showImage.bind(this, achievement, target)
      );
      el.addEventListener(
        "mouseleave",
        this.hideImage.bind(this, achievement, target)
      );
    }
  }

  componentWillUnmount() {
    const achievement = document.getElementById("achievement");
    const higlights = achievement.getElementsByClassName("highlighted");
    for (let i = 0; i < higlights.length; i++) {
      const el = higlights[i] as HTMLElement;
      const target = el.dataset.image;
      el.removeEventListener(
        "mouseover",
        this.showImage.bind(this, achievement, target)
      );
      el.removeEventListener(
        "mouseleave",
        this.hideImage.bind(this, achievement, target)
      );
    }
  }

  showImage(achievement: HTMLElement, selector: string, e: MouseEvent) {
    achievement
      .querySelectorAll(".achievements")
      .forEach(el => el.classList.add("on-hover"));
    const image = achievement.querySelector(selector) as HTMLElement;
    image.style.maxHeight = "1000px";
    const x =
      e.pageX + image.clientWidth > window.innerWidth
        ? window.innerWidth - image.clientWidth - 50
        : e.pageX;
    image.style.left = `${x}px`;
    image.style.top = `${e.pageY + 30}px`;
  }

  hideImage(achievement: HTMLElement, selector: string) {
    achievement
      .querySelectorAll(".achievements")
      .forEach(el => el.classList.remove("on-hover"));
    const image = achievement.querySelector(selector) as HTMLElement;
    image.style.maxHeight = "0px";
  }

  render() {
    return (
      <div className="achievement" id="achievement">
        <h1 className="title">Achievements</h1>
        <div className="year-achievement">
          <p className="year">2018</p>
          <ul className="achievements">
            <li>
              <span>
                Team leader for semester 4 school project (
                <a href="https://github.com/ZeroX-DG/ASStore">final project</a>)
              </span>
            </li>
            <li>
              <span className="highlighted" data-image="#graduation">
                Graduated from FPT Aptech (with distinction)
              </span>
            </li>
            <li>
              My first contribution to a popular Github repo (
              <a href="https://github.com/BoostIO/Boostnote">Boostnote</a>)
            </li>
            <li>
              Become a part-time issue hunter on{" "}
              <a href="https://issuehunt.io/">IssueHunt</a>
            </li>
            <li>
              Got my first part-time job as a maintainer of the same open source
              project that I contributed to (
              <a href="https://github.com/BoostIO/Boostnote">Boostnote</a>)
            </li>
            <li>
              Launched my first open source Electron app on ProductHunt and
              become the #5 product of the day (
              <a href="https://www.producthunt.com/posts/snippet-store">
                SnippetStore
              </a>
              )
            </li>
          </ul>
        </div>
        <div className="year-achievement">
          <p className="year">2017</p>
          <ul className="achievements">
            <li>
              My first contribution to an open source project on Github (
              <a href="https://github.com/CodingTrain/CommunityClouds/pull/15">
                #15
              </a>
              )
            </li>
            <li>Team leader for semester 2 school project</li>
            <li>
              Write a blog about{" "}
              <a href="https://medium.com/the-z/how-i-taught-myself-programming-c690a85700ac">
                How I taught myself programming
              </a>
            </li>
          </ul>
        </div>
        <div className="year-achievement">
          <p className="year">2016</p>
          <ul className="achievements">
            <li>Graduated from junior high school</li>
            <li>Drop out of senior high school</li>
            <li>Applied for Software Engineering course at FPT Aptech</li>
            <li className="highlighted" data-image="#highestscore">
              Achieved highest score in courses:
              <ul>
                <li>SQL Server</li>
                <li>Designing and publishing websites</li>
                <li>Elementary Programming in C</li>
              </ul>
            </li>
            <li>Team leader for semester 1 school project</li>
          </ul>
        </div>
        <div className="year-achievement">
          <p className="year">2015</p>
          <ul className="achievements">
            <li>Got into English specialized class in grade 9</li>
            <li>
              Became the youngest moderator of the Vietnam cyber security forum
              (ceh.vn)
            </li>
            <li>Learn Python & little bit of NodeJS</li>
          </ul>
        </div>
        <div className="year-achievement">
          <p className="year">2014</p>
          <ul className="achievements">
            <li>Taught myself c# console and window form application</li>
            <li>Learn back-end development with PHP</li>
            <li>Making ton of side projects with HTML, CSS, JavaScript</li>
          </ul>
        </div>
        <div className="year-achievement">
          <p className="year">2013</p>
          <ul className="achievements">
            <li>Started to learn about web hacking and programming</li>
          </ul>
        </div>
        <div className="hover-image" id="graduation">
          <img src={GraduationIMG} />
        </div>
        <div className="hover-image" id="highestscore">
          <img src={highestscoreIMG} />
        </div>
      </div>
    );
  }
}

export default Achievement;

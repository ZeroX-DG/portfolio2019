import * as React from "react";
import "./articles.scss";
import anime from "animejs";

// @ts-ignore
import ArticleResizableDiv from "../../../../static/article-resizable-div.gif";
// @ts-ignore
import ArticlePuppeteer from "../../../../static/article-puppeteer.png";
// @ts-ignore
import ArticleObfuscator from "../../../../static/article-obfuscator.png";
// @ts-ignore
import ArticleListening from "../../../../static/article-listening.jpeg";
// @ts-ignore
import ArticleElectron from "../../../../static/article-electron.jpeg";

class Articles extends React.PureComponent {
  componentDidMount() {
    // prevent browser from keeping the scroll position
    document.documentElement.scrollTop = 1;
    anime({
      targets: "#articles",
      opacity: [0, 1],
      duration: 1500,
      easing: "cubicBezier(0.785, 0.135, 0.15, 0.86)"
    });
  }
  render() {
    return (
      <div className="articles" id="articles">
        <h1 className="title">Articles</h1>
        <span className="sub-text">Everything that I write about</span>
        <div className="articles-list">
          <div className="featured article">
            <img
              src={ArticleResizableDiv}
              alt="Making a resizable div in JS is not easy as you think"
              className="article-image"
            />
            <div className="article-info">
              <p className="article-title">
                Making a resizable div in JS is not easy as you think
              </p>
              <p className="article-description">
                An article showing the process of me finding a way to make a
                resizable div with JavaScript. This is the first article that I
                tried to write using story-telling method.
              </p>
              <p className="read-more">
                <a
                  href="https://medium.com/the-z/making-a-resizable-div-in-js-is-not-easy-as-you-think-bda19a1bc53d"
                  target="_blank"
                >
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="article">
            <img
              src={ArticlePuppeteer}
              alt="Having fun with puppeteer JS"
              className="article-image"
            />
            <div className="article-info">
              <p className="article-title">Having fun with puppeteer JS</p>
              <p className="article-description">
                This article is about an experiment that I conducted with
                puppeteer JS. The main purpose of this experiment is using
                puppeteer to crawl data.
              </p>
              <p className="read-more">
                <a
                  href="https://medium.com/the-z/having-fun-with-puppeteer-js-5a744babaf0a"
                  target="_blank"
                >
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="article">
            <img
              src={ArticleObfuscator}
              alt="Breaking down one of the coolest JavaScript obfuscators"
              className="article-image"
            />
            <div className="article-info">
              <p className="article-title">
                Breaking down one of the coolest JavaScript obfuscators
              </p>
              <p className="article-description">
                This is an article that I wrote to demonstrate how aaencode
                obfuscator works and the way that I analyze a obfuscated
                JavaSCript code.
              </p>
              <p className="read-more">
                <a
                  href="https://medium.com/the-z/breaking-down-one-of-the-coolest-javascript-obfuscators-15b234f768c"
                  target="_blank"
                >
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="article">
            <img
              src={ArticleListening}
              alt="How I made a web app to help improve English listening skill"
              className="article-image"
            />
            <div className="article-info">
              <p className="article-title">
                How I made a web app to help improve English listening skill
              </p>
              <p className="article-description">
                I wrote this article when I tried to create a tool to help me
                study for the IELTS listening test.
              </p>
              <p className="read-more">
                <a
                  href="https://medium.com/the-z/how-i-made-a-web-app-to-help-improve-english-listening-skill-f21ad81beef3"
                  target="_blank"
                >
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="article">
            <img
              src={ArticleElectron}
              alt="The making of a wallpaper-changing app with electron and vue.js"
              className="article-image"
            />
            <div className="article-info">
              <p className="article-title">
                The making of a wallpaper-changing app with electron and vue.js
              </p>
              <p className="article-description">
                A simple write-up about the process of making a simple electron
                app. I wrote this article not long after I learn about electron
                apps and how to develop one.
              </p>
              <p className="read-more">
                <a
                  href="https://medium.com/the-z/the-making-of-a-wallpaper-changing-app-with-electron-and-vue-js-606e66b2a929"
                  target="_blank"
                >
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;

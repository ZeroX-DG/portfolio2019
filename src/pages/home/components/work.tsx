import * as React from "react";
//@ts-ignore
import SnippetStoreIMG from "../../../../static/snippetstore.png";

class Work extends React.Component {
  render() {
    return (
      <div className="work full-page">
        <div className="project-display">
          <img src={SnippetStoreIMG} className="project-image" />
        </div>
      </div>
    );
  }
}

export default Work;

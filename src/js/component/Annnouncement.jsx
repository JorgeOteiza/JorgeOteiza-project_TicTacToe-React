import React from "react";
import "../../styles/App.css";
import "../../styles/Annnouncement.css";

export default class Annnouncement extends Component {
  render() {
    return (
      <div className={this.props.winner ? "visible" : "hidden"}>
        <h2>Game Over</h2>
      </div>
    );
  }
}

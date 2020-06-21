import React from "react";

export default class MovieDetailsScreen extends React.Component {
  displayDetails = () => {
    let str = "\n\n";
    Object.entries(this.state.movie)
      .slice(0, -2)
      .forEach((obj) => (str += obj[0] + " - " + obj[1] + "\n\n"));
    return str;
  };

  render() {
    return (
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 30,
        }}
      >
        <img
          style={{ width: 300, height: 350 }}
          src={Object.entries(this.state.movie).slice(-2, -1)[0][1]}
        />
        <div style={{ textAlign: "center" }}>{this.displayDetails()}</div>
      </div>
    );
  }
}

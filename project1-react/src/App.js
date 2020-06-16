import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 25 * 60,
      go: true,
      work: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.dec, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  dec = () => {
    if (this.state.go) {
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));
    }

    if (this.state.time <= 0) {
      if (this.state.work) {
        this.setState((prevState) => ({
          time: 5 * 60,
          work: !prevState.work,
        }));
      } else {
        this.setState((prevState) => ({
          time: 25 * 60,
          work: !prevState.work,
        }));
      }
    }
  };

  startTimer = () =>
    this.setState({
      go: true,
    });

  stopTimer = () =>
    this.setState({
      go: false,
    });

  reset = () => {
    if (this.state.work) {
      this.setState({
        time: 25 * 60,
      });
    } else {
      this.setState({
        time: 5 * 60,
      });
    }
  };

  render() {
    return (
      <div
        className="App"
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          height: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {this.state.time % 60 < 10 ? (
          <div style={{ fontSize: 40 }}>
            {Math.floor(this.state.time / 60)}:0{this.state.time % 60}
          </div>
        ) : (
          <div style={{ fontSize: 40 }}>
            {Math.floor(this.state.time / 60)}:{this.state.time % 60}
          </div>
        )}

        <div style={{ flexDirection: "row", alignItems: "center" }}>
          <Button variant="primary" onClick={this.startTimer} style={{margin: 5}}>
            Start
          </Button>
          <Button variant="primary" onClick={this.stopTimer} style={{margin: 5}}>
            Stop
          </Button>
          <Button variant="secondary" onClick={this.reset} style={{margin: 5}}>
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { vibrate } from "./utils";

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
      vibrate();
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
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.time % 60 < 10 ? (
          <Text style={{ fontSize: 40 }}>
            {Math.floor(this.state.time / 60)}:0{this.state.time % 60}
          </Text>
        ) : (
          <Text style={{ fontSize: 40 }}>
            {Math.floor(this.state.time / 60)}:{this.state.time % 60}
          </Text>
        )}

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Button
            title="START"
            style={styles.button}
            onPress={this.startTimer}
          />
          <Button title="STOP" style={styles.button} onPress={this.stopTimer} />
          <Button title="RESET" style={styles.button} onPress={this.reset} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

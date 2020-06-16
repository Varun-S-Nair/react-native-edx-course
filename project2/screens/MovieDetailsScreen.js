import React from "react";
import { Text, ScrollView, Image, View } from "react-native";


export default class App extends React.Component {

  displayDetails = () => {
      let str = "\n\n";
      Object.entries(this.props.route.params).slice(0,-2).forEach(obj => str += obj[0] + " - " + obj[1] + "\n\n")
      return str
  }

  render() {
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30}}>
      <ScrollView>
        <Image style = {{ width: 300, height: 350 }} source={{uri: Object.entries(this.props.route.params).slice(-2,-1)[0][1]}} />
        <Text style={{textAlign: 'center'}}>{this.displayDetails()}</Text>
      </ScrollView>
      </View>
    );  
  }
}
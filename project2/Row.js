import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Row = props => (
  <TouchableOpacity
    style={{padding: 20}}
    onPress={() => props.onSelectMovie(props)}>
    <Text>{props.Title}</Text>
    <Text>{props.Year}</Text>
  </TouchableOpacity>
);

export default Row;
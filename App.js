import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './Board.js'
import Rack from './Rack.js';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rack1: [{letter: 'a', value: 1},{letter: 'b', value: 1},{letter: 'c', value: 1},{letter: 'd', value: 1},{letter: 'e', value: 1},{letter: 'f', value: 1},{letter: 'g', value: 1}],
      rack2: [{letter: 'h', value: 1},{letter: 'i', value: 1},{letter: 'j', value: 1},{letter: 'k', value: 1},{letter: 'l', value: 1},{letter: 'm', value: 1},{letter: 'n', value: 1}] };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Skrab!</Text>
        <Board />
        <Rack rack={this.state.rack1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Rack from './Rack.js';
import Row from './Row.js';
import buildBoard from './guts.js';

export default class Board extends React.Component {
  constructor (props) {
    super(props);
    const board = buildBoard();
    this.state = {
      board,
      rack1: [{letter: 'a', value: 1},{letter: 'b', value: 1},{letter: 'c', value: 1},{letter: 'd', value: 1},{letter: 'e', value: 1},{letter: 'f', value: 1},{letter: 'g', value: 1}],
      rack2: [{letter: 'h', value: 1},{letter: 'i', value: 1},{letter: 'j', value: 1},{letter: 'k', value: 1},{letter: 'l', value: 1},{letter: 'm', value: 1},{letter: 'n', value: 1}] };
  }
  render() {
    const Rows = this.state.board.map(r => 
      <Row row={r} key={r[0].row} />);

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.board}>{Rows}</View>
        <Rack rack={this.state.rack1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 525,
  }
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './Board.js'
import Rack from './Rack.js';
import { buildBoard, Tile } from './guts.js';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    const rack1 = 'abcdEfg'.split('').map(t => new Tile(t));
    const rack2 = 'hijklmn'.split('').map(t => new Tile(t));

    const board = buildBoard();
    this.state = { board, rack1, rack2 };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Skrab!</Text>
        <Board board={this.state.board} />
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

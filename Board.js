import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Row from './Row.js';
import buildBoard from './guts.js';

export default class Board extends React.Component {
  constructor (props) {
    super(props);
    const board = buildBoard();
    this.state = { board, rack1: 'abcdefg', rack2: 'hijklmn' };
  }
  render() {
    const Rows = this.state.board.map(r => 
      <Row row={r} key={r[0].row} />);

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        {Rows}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 538,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

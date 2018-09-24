import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Row from './Row.js';
import buildBoard from './guts.js';

export default class Board extends React.Component {
  constructor (props) {
    super(props);
    const board = buildBoard();
    this.state = { board };
  }

  render() {
    const Rows = this.state.board.map(r => 
      <Row row={r} key={r[0].row} />);

    return (
      <View style={styles.board}>
        <View style={styles.board}>{Rows}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 525,
  }
});

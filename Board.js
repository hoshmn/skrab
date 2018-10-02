import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Row from './Row.js';

export default class Board extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const Rows = this.props.board.map(r => 
      <Row row={r} key={r[0].row}
        positionSelectHandler={this.props.positionSelectHandler}
      />);

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

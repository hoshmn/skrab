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

    this.state = { board, rack1, rack2, 
      boarded: [], selectedIndex: null };

    this.handleRackSelect = this.handleRackSelect.bind(this);
    this.handlePositionSelect = this.handlePositionSelect.bind(this);
  }

  handleRackSelect(i) {
    console.log('handleRackSelect', i);
    this.setState({ selectedIndex: i });
  }

  // TODO: extend tile with location info, check where placing, remove from rack
  handlePositionSelect({ row, col }) {
    console.log('handlePositionSelect', row, col);
    const { rack1, selectedIndex } = this.state;
    if (!selectedIndex) return;

    const tile = rack1[selectedIndex];
    this.setState(({ board, boarded }, props) => {
      const position = board[row][col];
      position.tile = tile;
      console.log('...placing', tile);
      return { 
        board, 
        boarded: [...boarded, tile],
        selectedIndex: null 
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Skrab!</Text>
        <Board
          board={this.state.board}
          positionSelectHandler={this.handlePositionSelect}
        />
        <Rack 
          rack={this.state.rack1}
          selectedIndex={this.state.selectedIndex}
          pressHandler={this.handleRackSelect} 
        />
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

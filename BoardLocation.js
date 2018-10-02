import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Tile from './Tile.js';

export default class BoardLocation extends React.Component {
  constructor (props) {
    super(props);

    this.positionSelectHandler = this.positionSelectHandler.bind(this);
  }

  positionSelectHandler() {
    const { row, col } = this.props.boardLocation;
    this.props.positionSelectHandler({ row, col });
  }

  render() {
    const { boardLocation } = this.props;
    const backgroundColor = backgroundColorMap[boardLocation.multiplier];

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <TouchableOpacity onPress={this.positionSelectHandler}>
          <Tile tile={boardLocation.tile} />
        </TouchableOpacity>
      </View>
    );
  }
}

const backgroundColorMap = {
  '-3': 'mediumaquamarine',
  '-2': 'aquamarine',
  '1': 'white',
  '2': 'lightsalmon',
  '3': 'salmon',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    borderWidth: 1,
    height: 35,
    borderColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

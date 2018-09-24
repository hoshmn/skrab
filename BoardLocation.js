import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tile from './Tile.js';

export default class BoardLocation extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    const { boardLocation } = this.props;
    const backgroundColor = backgroundColorMap[boardLocation.multiplier];
    
    const { tile } = boardLocation;
    const containedTile = tile ? <Tile tile={tile} /> : <Text />;

    return (
      <View style={[styles.container, { backgroundColor }]}>
        {containedTile}
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

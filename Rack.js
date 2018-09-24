import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tile from './Tile.js';

export default class Rack extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    const Tiles = this.props.rack.map((t, i) => 
      <Tile tile={t} key={i} />);

    return (
      <View style={styles.container}>
        {Tiles}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    width: 255,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

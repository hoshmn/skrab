import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tile from './Tile.js';

export default class Row extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    // console.log('row:', this.props.row);
    const Tiles = this.props.row.map(t => 
      <Tile tile={t} key={t.col} />);
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

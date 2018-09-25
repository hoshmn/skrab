import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Tile from './Tile.js';

export default class RackTile extends React.Component {
  constructor (props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const index = this.props.selected ? null : this.props.index;
    this.props.pressHandler(index);
  }

  render() {
    const { tile, selected } = this.props;
    const backgroundColor = selected ? 'yellow' : 'white';

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <TouchableOpacity onPress={this.handlePress}>
          <Tile tile={tile} />
        </TouchableOpacity>
      </View>
    );
  }
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Tile extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    const { tile } = this.props;

    return (
      <View style={styles.container}>
        <Text>{tile.letter}</Text>
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
    width: 35,
    borderColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

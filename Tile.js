import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Tile extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    console.log('row:', this.props.tile);
    return (
      <View style={styles.container}>
        <Text>tile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    borderWidth: 1,
    // width: 8,
    height: 35,
    borderColor: 'brown',
    backgroundColor: '#adf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

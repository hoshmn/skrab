import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import buildBoard from './guts.js';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    const board = buildBoard();
    this.state = { board };
  }
  render() {
    console.log(this.state.board);
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>this.state.board</Text>
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

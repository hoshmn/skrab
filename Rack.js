import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import RackTile from './RackTile.js';

export default class Rack extends React.Component {
  constructor (props) {
    super(props);

    this.state = { selectedIndex: null };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(i) {
    console.log('handlePress', i);
    this.setState({ selectedIndex: i });
  }

  render() {
    const RackTiles = this.props.rack.map((t, i) => 
      <RackTile
        pressHandler={this.handlePress}
        selected={this.state.selectedIndex === i}
        tile={t}
        index={i}
        key={i}
      />);

    return (
      <View style={styles.container}>
        {RackTiles}
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

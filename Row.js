import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoardLocation from './BoardLocation.js';

export default class Row extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    const BoardLocations = this.props.row.map(t => 
      <BoardLocation boardLocation={t} key={t.col}
        positionSelectHandler={this.props.positionSelectHandler}
      />);

    return (
      <View style={styles.container}>
        {BoardLocations}
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

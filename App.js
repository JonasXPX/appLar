import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class appLar extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
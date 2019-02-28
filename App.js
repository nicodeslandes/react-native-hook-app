/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component, useState} from 'react';
import {TouchableHighlight, Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Current count: {count}</Text>
      <TouchableHighlight style={styles.button}
              onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}
              onPress={() => setCount(count - 1)}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'darkcyan'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

// AnotherScreen.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

export default function AnotherScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Another Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

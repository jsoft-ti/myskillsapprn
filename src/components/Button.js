import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Button({onPress}) {
  return (
    <TouchableOpacity style={styles.buttons} onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: '#f75782',
    padding: 10,
    margin: 15,
    alignItems: 'center',
    borderRadius: 15,
  },

  buttonText: {
    color: '#fff',
  },
});

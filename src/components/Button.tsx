import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function Button({...rest}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttons} {...rest}>
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

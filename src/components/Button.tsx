import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

//type ButtonProps = TouchableOpacityProps;

interface ButtonProps extends TouchableOpacityProps{
  title:String
}
export function Button({title,...rest}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttons} {...rest}>
      <Text style={styles.buttonText}>{ title }</Text>
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

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.skillButton}>
      <Text style={styles.skillText}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillButton: {
    borderRadius: 20,
    opacity: 0.8,
    backgroundColor: '#ff0000',
    padding: 20,
    margin: 10,
  },
  skillText: {
    fontSize: 15,
  },
});

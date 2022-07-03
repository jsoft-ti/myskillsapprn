import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

export function SkillCard({ skill, ...rest} : SkillCardProps) {
  return (
    <TouchableOpacity style={styles.skillButton} {...rest}>
      <Text style={styles.skillText}>{skill}</Text>
    </TouchableOpacity>
  );
}

interface SkillCardProps extends TouchableOpacityProps {
  skill:String;
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

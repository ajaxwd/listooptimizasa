import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './style';

export function Input({
  placeholder,
  placeholderTextColor,
  selectionColor,
  onChangeText 
}) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      selectionColor={selectionColor} 
      style={styles.input}
    />
  )
}
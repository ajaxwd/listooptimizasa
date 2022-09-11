import React from 'react'
import { Button } from 'react-native'
import { styles } from './style';

export function Btn({ 
  textButton, 
  color, 
  addItem 
}) {
  return (
    <Button style={styles.button}
        title={textButton}
        onPress={addItem} 
        color={color}  
    />
  )
}
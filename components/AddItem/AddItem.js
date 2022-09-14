import { View } from 'react-native'
import React from 'react'
import { 
  Btn, 
  Input, 
} from '../Common'
import { styles } from './style';
import { screen } from '../../utils'

export function AddItem({ 
  addItem, 
  onChangeText 
}) {
  return (
    <View style={styles.inputContainer}>
      <Btn
        textButton={screen.home.btnAddItem}
        addItem={addItem}  
        color='#EFBC9B'    
      />
      <Input 
        placeholder='new task'
        placeholderTextColor='#4A306D'
        selectionColor='#4A306D'
        onChangeText={onChangeText} 
      />
    </View>
  )
}
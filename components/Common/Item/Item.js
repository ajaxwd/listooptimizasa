import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style';

export function Item({ 
  item, 
  onHandleModal,
  onHandleComplete,
  complete, 
}) {
  return (
    <View>
      {!complete &&
        <View style={styles.itemContainer}>
          <Text style={styles.item}>{item.value}</Text>
          <TouchableOpacity style={styles.button} onPress={() => onHandleModal(item.id)}>
          <Text style={styles.delete}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onHandleComplete(item.id)}>
          <Text style={styles.delete}>Pendiente</Text>
          </TouchableOpacity>  
        </View>
      }
      {complete &&
      <View style={styles.itemContainerComplete}>
          <Text style={styles.item}>{item.value}</Text>
          <TouchableOpacity style={styles.button} onPress={() => onHandleModal(item.id)}>
          <Text style={styles.delete}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onHandleComplete(item.complete)}>
          <Text style={styles.delete}>Completado</Text>
          </TouchableOpacity>
      </View>  
      }
    </View>
  )
}
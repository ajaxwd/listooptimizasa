import React from 'react'
import { 
  View, 
  Text, 
  Modal, 
  Button
} from 'react-native';
import { styles } from './style';

export function CustomModal({
  onHandleDeleteItem,
  selectedTask,
  modalVisible,
  setModalVisible,
  animationType,
  visible,
  onRequestClose,
}) {
  return (
    <Modal
      animationType={animationType}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Detalle de la lista</Text>
      </View>
      <View style={styles.modalMessageContainer}> 
      <Text style={styles.modalMessage}>¿Estas seguro de que quieres eliminar?</Text>
      </View>
      <View style={styles.modalMessageContainer}> 
      <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <Button 
        title='Eliminar'
        onPress={() => onHandleDeleteItem(selectedTask?.id)}
        color='#4A306D'
        />
      <Button 
        title='Cancelar'
        onPress={() => setModalVisible(!modalVisible)}
        color='#cccccc'
        />
      </View>
    </Modal>
  )
}
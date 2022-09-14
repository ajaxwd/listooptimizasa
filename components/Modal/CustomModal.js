import React from 'react'
import { 
  View, 
  Text, 
  Modal, 
  Button
} from 'react-native';
import { styles } from './style';
import { screen } from '../../utils'

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
        <Text style={styles.modalTitle}>{screen.modal.title}</Text>
      </View>
      <View style={styles.modalMessageContainer}> 
        <Text style={styles.modalMessage}>{screen.modal.message}</Text>
      </View>
      <View style={styles.modalMessageContainer}> 
        <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title={screen.modal.btnDelete}
          onPress={() => onHandleDeleteItem(selectedTask?.id)}
          color='#4A306D'
          />
        <Button 
          title={screen.modal.btnCancel}
          onPress={() => setModalVisible(!modalVisible)}
          color='#cccccc'
          />
      </View>
    </Modal>
  )
}
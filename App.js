import React, { useState } from 'react';
import {
  Text, 
  View 
} from 'react-native';
import { 
  AddItem,
  Lista,
  CustomModal,
  Item 
} from './components';
import { styles } from './style';
import { screen } from './utils';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [complete, setComplete] = useState([]);

  const addItem = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), value: task, complete: false },
    ]);
    setTask('');
  }

  const onHandleChangeText = (text) => { setTask(text); }

  const renderItem = ({ item }) => (
    <Item 
      item={ item } 
      onHandleModal={onHandleModal}
      onHandleComplete={onHandleComplete}
      complete={complete}
    />
  )

  const onHandleModal = (id) => {
    setModalVisible(!modalVisible);
    setSelectedTask(tasks.find((item) => item.id === id))
  }

  const onHandleComplete = (id) => {
    setComplete(tasks.find((item) => item.id === id));
  }

  const onHandleDeleteItem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    setSelectedTask(null);
    setModalVisible(!modalVisible);
    setComplete(!complete);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{screen.home.title}</Text>
      <AddItem 
        addItem={addItem} 
        onChangeText={onHandleChangeText}
      />
      <Lista 
        tasks={tasks}
        renderItem={renderItem}
      />
      <CustomModal 
        animationType='slide' 
        visible={modalVisible}
        onHandleDeleteItem={onHandleDeleteItem}
        selectedTask={selectedTask}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
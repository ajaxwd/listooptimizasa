import React from 'react';
import { FlatList } from 'react-native';
import { styles } from './style';

export function Lista({
  tasks,
  renderItem,
}) {
  return (
    <FlatList
      style={styles.itemList}
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  )
}
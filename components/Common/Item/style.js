import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      marginVertical: 5,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      backgroundColor: '#9F84BD',
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    itemContainerComplete: {
      flex: 1,
      marginVertical: 5,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      backgroundColor: '#EC368D',
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    item: {
      fontSize: 16,
      color: '#000000',
    },
    delete: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff'
    },
    button: {
      backgroundColor: '#4A306D',
      padding: 10,
      borderRadius: 10,
    }
  });
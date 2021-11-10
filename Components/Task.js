import React, { useState} from 'react';
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { ceil } from 'react-native-reanimated';

export default function Task({ item, pressHandler}) {
  
  return (
    <View style = {styles.container}>
      <View style={styles.items}>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>  
          <View style={styles.iconbg}>
          <MaterialIcons name="delete-outline" size={27} color="white" style={styles.icon} />
          </View>
          </TouchableOpacity>
          <Text style={styles.notes}>{item.name}</Text>
          </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   alignItems: 'center',
   padding: 10,
   
},
  
  items: {
    marginTop: 10,
    backgroundColor: 'rgba(225, 225, 225, 0.2)',
    borderColor: 'white',
    borderStyle: 'dashed',
    borderRadius: 12,
    width: 160,
    height: 160,
    flex:1,
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'relative',
    paddingRight: 10,
  },

  icon:{
      padding: 13,
      
      flexDirection: 'column',
      justifyContent: 'center',
      
    },

  iconbg:{
      backgroundColor: '#000',
      flexDirection: 'row',
      alignSelf: 'center',
      borderBottomRightRadius: 20,
  },
  notes: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
      flex:1,
      flexWrap: 'wrap',
      alignSelf: 'center',
      
      
      
  },

});
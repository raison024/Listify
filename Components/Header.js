import React, { useState} from 'react';
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function Header() {
  return (
    <View style = {styles.container}>
        <TouchableOpacity style={styles.items}>
      <Ionicons style= {styles.items} name="reorder-three" size={35} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>Listify</Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#295ee9',
    height: 60,
    paddingTop: 10,
    flexDirection: 'row',
    paddingRight:33,
  },
  
  items:{
      flexDirection: 'column',
      alignSelf: 'center',
  },

  text: {
    color: '#f9f8f9',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },


});

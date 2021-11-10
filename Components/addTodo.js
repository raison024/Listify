import React, { useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');
    
    const changeHandler = (val) => {
        setText(val)
    }

  return (
    <View style={styles.container}>
      
      <TextInput
        style = {styles.input}
        placeholder='Add New Note'
        placeholderTextColor='#fff'
        onChangeText={changeHandler}
        />
    
      <View style={styles.addbutton}>
          <TouchableOpacity>
          <Ionicons name="add-sharp" size={50} color="white" onPress={() => submitHandler(text)}/>
          </TouchableOpacity>        
          
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
    justifyContent: 'center',
    
    marginTop: 110,
    marginBottom: 30,
  },

  input: {
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'rgba(242,242,242,0.2)',
    borderRadius: 5,
    borderWidth: 0,
    color: '#fff',
    fontSize: 17,
    flex:0.9,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
  },

  addbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
  },
  
  text: {
    color: '#f9f8f9',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },


});
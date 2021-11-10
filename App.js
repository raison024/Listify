import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Button, ImageBackground, Dimensions, TouchableOpacity, Alert} from 'react-native'
import AddTodo from './Components/addTodo'
import Task from './Components/Task'
import AboutPage from './Components/AboutPage'
import bg2 from './assets/bg01.png'
import { DrawerActions, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage';

function App({ navigation }) {
  
  const [task, newtask] = useState([
    
  ]);

  useEffect(() => {
    restoreTodosFromAsync();
  }, []);

  const pressHandler = key => {
    console.log('Todos BEFORE delete');
    console.log(task);

    const setTodos = task.filter(todo => todo.key !== key);

    console.log('Todos AFTER delete');
    console.log(task);

    newtask(setTodos);
    storeTodosInAsync(setTodos);
  };

  const submitHandler = name => {
    if (name.length > 3) {

    const key = Math.random().toString();

    console.log('Todos BEFORE submit');
    console.log(task);

    const setTodos = [{ name, key }, ...task];

    console.log('Todos AFTER submit');
    console.log(task);

    newtask(setTodos);
    storeTodosInAsync(setTodos);
    }
    else 
    { Alert.alert('Oops!', 'Text must be longer than 3 characters.', [
      {text: 'OK', onPress: () => console.log('alert closed')}
    ]);
  }
  };

  const asyncStorageKey = '@task';

  const storeTodosInAsync = setTodos => {
    const stringifiedTodos = JSON.stringify(setTodos);

    AsyncStorage.setItem(asyncStorageKey, stringifiedTodos).catch(err => {
      console.warn('Error storing todos in Async');
      console.warn(err);
    });
  };

  const restoreTodosFromAsync = () => {
    AsyncStorage.getItem(asyncStorageKey)
      .then(stringifiedTodos => {
        console.log('Restored Todos:');
        console.log(stringifiedTodos);

        const parsedTodos = JSON.parse(stringifiedTodos);

        if (!parsedTodos || typeof parsedTodos !== 'object') return;

        newtask(parsedTodos);
      })
      .catch(err => {
        console.warn('Error restoring todos from async');
        console.warn(err);
      });
  };



  return (

      
    <View style = {styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={bg2} style={styles.container, styles.bg}> 
          <AddTodo submitHandler={submitHandler}/>
          
          <FlatList 
            data={task}
            numColumns={2}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Task item={item} pressHandler={pressHandler}/>
            )}
          />

        <View style={styles.raenos}>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.raenostext}>About</Text>
          </TouchableOpacity>
          
        </View>
        </ImageBackground>
     </View>
       
  );
}

function AboutScreen({ navigation}) {
  return (
    <AboutPage navigation={navigation}/>
  );
}

const Stack = createStackNavigator();

function Nav() {
  return(
    
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={App} 
          options={{
            title: 'Listify',
            headerTransparent: {
              position: 'absolute',
              backgroundColor: 'transparent',
              zIndex: 100,
              top: 0,
              left: 0,
              right: 0
            },

            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 23,
            },
          }}/>
          <Stack.Screen name="About" component={AboutScreen} 
          options={{
            title: 'About',
            headerTransparent: {
              position: 'absolute',
              backgroundColor: 'transparent',
              zIndex: 100,
              top: 0,
              left: 0,
              right: 0
            },
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#fff',
            
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Nav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',

    width: Dimensions.get("screen").width, //for full screen
    height: Dimensions.get("window").height
    
  },
  bg:{
    flex:1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  
  raenos: {
    bottom: 10,
    marginTop: 5,
    flexDirection: 'column',
    alignSelf: 'center',
    borderWidth: 0,
    borderColor: 'blue',
  },
  raenostext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 17,
    paddingHorizontal: 40,
  },

  mc: {
    padding: 100,
    backgroundColor: 'coral',
  },

  
});


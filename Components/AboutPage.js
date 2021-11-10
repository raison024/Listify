import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Dimensions, ScrollView, TouchableOpacity, Linking, Image} from 'react-native'
import ab01 from '../assets/ab01.png'
import ab02 from '../assets/ab02.png'
import ab03 from '../assets/ab04.png'
import { Ionicons } from '@expo/vector-icons';

export default function AboutPage({ navigation }) {
    return (  
      <ScrollView
      pagingEnabled={true}
      style={styles.container}>
      <ImageBackground source={ab01} style={styles.backgroundImage, styles.container}>
      
      </ImageBackground>
      
      <ImageBackground source={ab02} style={styles.backgroundImage, styles.container}>
      
      
      </ImageBackground>
      
      <ImageBackground source={ab03} style={styles.backgroundImage, styles.container}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
          position: 'relative', top: 300}} >
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/raison024/')} >
          <Ionicons name="logo-instagram" size={45} color="white" style={styles.instaicon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/raison024')}>
          <Ionicons name="logo-github" size={45} color="white" style={styles.instaicon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/raison-sabu-57b90421b/')}>
          <Ionicons name="logo-linkedin" size={45} color="white" style={styles.instaicon} />
          </TouchableOpacity>
          </View>
      </ImageBackground>
      

      </ScrollView>          
    );
} 

const styles = StyleSheet.create({
  container:{
  width:  Dimensions.get("screen").width, //for full screen
  height: Dimensions.get("screen").height,
  },

  backgroundImage: {
    flex:1,
    resizeMode: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  instaicon:{
    
    alignSelf: 'center',
    top: 50,
    padding: 10,
  },
  
});
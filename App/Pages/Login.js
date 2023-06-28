import { View, Text,Image,StyleSheet } from 'react-native'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

export default function Login() {
  return (
    <View>
      <Image  style={styles.image}source={require('../assets/Image/login.jpeg')} />
      <View style={styles.container}>
        <Text style = {styles.welcomeText}> Login  to our App</Text>
        <Text style={{textAlign: 'center', marginTop: 80, fontSize: 20}}>Login / Signup</Text>
        <View style= {styles.button}>
          <Ionicons name="logo-google" 
          size={24} color="white"
          style={{marginRight: 10}}
          />
          <Text style={{color: Colors.white}}>Sign in with Google</Text>
        </View>
      </View>
      

    </View>
  )
}

// rnf
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: -25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

  },
  welcomeText:{
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  button:{
    // marginTop: 40,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,

  },
  image: {
    width: 500,
    height: 250,
  },
})


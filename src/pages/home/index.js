import React from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'; 
import Slider from '@react-native-community/slider';
import  ModalPassword  from '../../../src/components/modal'

let chaveAleatoria = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home(){

  const [size, setSize] = useState(0);
  const [senhaGerada, setSenhaGerada] = useState("");
  const [modelVisivel, setModelVisivel] = useState(false);



  function gerarSenha(){
    let password = "";

    for(let i = 0, n = chaveAleatoria.length; i < size; i++){
      password += chaveAleatoria.charAt(Math.floor(Math.random() * n))
    }

    setSenhaGerada(password)
    setModelVisivel(true);
  }

  return(
    <View style={styles.container}>
      <Image
        source = { require("../../assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>
        {size} Caracteres
      </Text>

      <View style={styles.area}>
        <Slider
        style={{height:50}}
        minimumValue={0}
        maximumValue={20}
        minimumTrackTintColor='#00FF00'
        thumbTintColor='#392de9'
        value={size}
        onValueChange={(values) => setSize(parseInt(values.toFixed(), 10))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modelVisivel} animationType="fade" transparent={true}>
        <ModalPassword password ={senhaGerada} handleClose={() => setModelVisivel(false)}/>
      </Modal>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 34,
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo:{
    marginBottom:60,
  },

  title:{
    fontSize: 34,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 2, 
    elevation: 3 
  },

  area:{
    marginTop:18,
    marginBottom:14,
    width:"80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },

  button:{
    backgroundColor: '#392de9',
    width: "80%",
    alignItems: 'center',
    height:45,
    justifyContent: 'center',
    borderRadius: 9,
    marginBottom: 18
  },

  buttonText:{
    color: "#FFF",
    fontSize: 20
  }
});
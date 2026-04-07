import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function App(){

  return (
    <View style = {styles.container}>
      <Image
        style = {styles.login}
        source = {require('./assets/Nova_Senha.png')}
      />

      <View style = {styles.cadastroContainer}>

      <Text style = {{
          color: '#FFFFFF',
          fontFamily: "Arial",
          fontSize: 16,
          alignSelf: 'flex-start',
          marginHorizontal: '12%',
          marginTop: 20,
      }}>
          Digite aqui:
      </Text>

        <TextInput style = {styles.novaSenhaInput}
          placeholder = "Senha"
          /* INSERIR CÓDIGO DE SENHA AQUI*/
        />

        <Text style = {{
          color: '#FFFFFF',
          fontFamily: "Arial",
          fontSize: 16,
          alignSelf: 'flex-start',
          marginHorizontal: '12%',
          marginTop: 20,
      }}>
          Digite aqui:
      </Text>

        <TextInput style = {styles.novaSenhaInput}
          placeholder = "Confirmar senha"
          /* INSERIR CÓDIGO DE CONFIRMAR SENHA AQUI*/
        />

        {/* BOTÃO PARA ENTRAR */}
        <TouchableOpacity style = {styles.botaoEntrar}>
          <Text style = {{
              fontSize: 20, color: '#FFFFFF', fontFamily: "Arial", marginTop: 2, fontWeight: 'bold'}}>
            CRIAR
          </Text>
          {/* CÓDIGO AQUI */}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center'
    },

  cadastroContainer: {
    flex: 1,
    backgroundColor: '#303030',
    width: '85%',
    borderRadius: 20,
    marginBottom: 35,
    alignItems: 'center',
  },

  novaSenhaInput: {
    height: 40,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 1,
  },

  botaoEntrar: {
    backgroundColor: '#181818',
    marginTop: 210,
    alignItems: 'center',
    width: '65%',
    paddingVertical: '5%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#0A4C98'
  },

  login: {
    marginTop: 30,
    width: 200,
    height: 50,
    resizeMode: 'center'
  }
})
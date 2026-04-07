import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function App(){

  return (
    <View style = {styles.container}>
      <Image
        style = {styles.login}
        source = {require('./assets/FacaSeuCadastro.png')}
      />

      <View style = {styles.cadastroContainer}>
        <TextInput style = {styles.nomeInput}
          placeholder = "Nome completo"
          /* INSERIR CÓDIGO DE EMAIL OU CPF AQUI */
        />

        <View style = {styles.dataCpfContainer}>
          <TextInput style = {styles.dataInput}
            placeholder = "DD/MM/AA"
            keyboardType = "numeric"
          /* INSERIR CÓDIGO DE SENHA */
         />

         <TextInput style = {styles.cpfInput}
            placeholder = "CPF"
            keyboardType = "numeric"
            /* INSERIR CÓDIGO DO CPF */
         />
        </View>

        <TextInput style = {styles.email_SenhaInput}
          placeholder = "Seu e-mail"
          /* INSERIR CÓDIGO DE EMAIL AQUI*/
        />

        <TextInput style = {styles.email_SenhaInput}
          placeholder = "Senha"
          /* INSERIR CÓDIGO DE SENHA AQUI*/
        />

        <TextInput style = {styles.email_SenhaInput}
          placeholder = "Confirmar senha"
          /* INSERIR CÓDIGO DE CONFIRMAR SENHA AQUI*/
        />

        {/* BOTÃO PARA ENTRAR */}
        <TouchableOpacity style = {styles.botaoEntrar}>
          <Text style = {{
              fontSize: 20, color: '#FFFFFF', fontFamily: "Arial", marginTop: 2, fontWeight: 'bold'}}>
            CADASTRAR
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

  dataCpfContainer: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
  },

  nomeInput: {
    height: 40,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 40,
  },

  dataInput: {
    height: 40,
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
  },

  cpfInput: {
    height: 40,
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
  },

  email_SenhaInput: {
    height: 40,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  botaoEntrar: {
    backgroundColor: '#181818',
    marginTop: 70,
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
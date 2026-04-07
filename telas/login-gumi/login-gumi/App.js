import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function App(){

  return (
    <View style = {styles.container}>
      <Image
        style = {styles.login}
        source = {require('./assets/FacaSeuLogin.png')}
      />

      <View style = {styles.loginContainer}>
        <TextInput style = {styles.emailInput}
          placeholder = "Email ou CPF"
          /* INSERIR CÓDIGO DE EMAIL OU CPF AQUI */
        />

        <TextInput style = {styles.senhaInput}
          placeholder = "Senha"
          /* INSERIR CÓDIGO DE SENHA AQUI */
        />

        <TouchableOpacity style = {styles.botaoSenha}>
          <Text style = {{fontSize: 12, color: '#61A9FA', fontFamily: "Arial", marginTop: 5}}>
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>

        <Text style = {{fontSize: 15, color: '#FFFFFF', fontFamily: "Arial", marginTop: 70}}>
          Não tem uma conta?
        </Text>

        <TouchableOpacity style = {styles.botaoCadastrar}>
          <Text style = {{fontSize: 15, color: '#61A9FA', fontFamily: "Arial", marginTop: 2}}>
            Cadastre-se!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.botaoEntrar}>
          <Text style = {{fontSize: 30, color: '#FFFFFF', fontFamily: "Arial", marginTop: 2}}>
            ENTRAR
          </Text>
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

  loginContainer: {
    flex: 1,
    backgroundColor: '#303030',
    width: '85%',
    borderRadius: 20,
    marginBottom: 35,
    alignItems: 'center',
  },

  emailInput: {
    height: 45,
    fontFamily: "Arial",
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#FFFFFF',
    marginTop: 60,
    width: '90%',
    borderRadius: 20,
  },

  senhaInput: {
    height: 45,
    fontFamily: "Arial",
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#FFFFFF',
    marginTop: 25,
    width: '90%',
    borderRadius: 20,
  },

  botaoSenha: {
    backgroundColor: '#303030',
    alignSelf: 'flex-start',
    marginLeft: '7%',
    marginTop: 3
  },

  botaoCadastrar: {
    backgroundColor: '#303030',
    alignSelf: 'center',
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
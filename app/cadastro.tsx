import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.login}
        source={require('@/assets/images/FacaSeuCadastro.png')}
      />

      <View style={styles.cadastroContainer}>
        <TextInput
          style={styles.nomeInput}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#999"
        />

        <View style={styles.dataCpfContainer}>
          <TextInput
            style={styles.dataInput}
            placeholder="DD/MM/AA"
            keyboardType="numeric"
            value={data}
            onChangeText={setData}
            placeholderTextColor="#999"
          />

          <TextInput
            style={styles.cpfInput}
            placeholder="CPF"
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
            placeholderTextColor="#999"
          />
        </View>

        <TextInput
          style={styles.email_SenhaInput}
          placeholder="Seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.email_SenhaInput}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.email_SenhaInput}
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={() => {
            // Adicionar lógica de cadastro aqui
            console.log('Cadastro com:', { nome, data, cpf, email, senha });
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: '#FFFFFF',
              fontFamily: 'Arial',
              marginTop: 2,
              fontWeight: 'bold',
            }}
          >
            CADASTRAR
          </Text>
        </TouchableOpacity>

        <Link href="/login" asChild>
          <TouchableOpacity style={styles.linkVoltarLogin}>
            <Text style={{ fontSize: 12, color: '#61A9FA', fontFamily: 'Arial' }}>
              Já tem uma conta? Entre aqui
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },

  login: {
    marginTop: 30,
    width: 200,
    height: 50,
    resizeMode: 'center',
  },

  cadastroContainer: {
    flex: 1,
    backgroundColor: '#303030',
    width: '85%',
    borderRadius: 20,
    marginBottom: 35,
    alignItems: 'center',
    paddingVertical: 20,
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
    fontFamily: 'Arial',
  },

  dataInput: {
    height: 40,
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    fontFamily: 'Arial',
  },

  cpfInput: {
    height: 40,
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    fontFamily: 'Arial',
  },

  email_SenhaInput: {
    height: 40,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontFamily: 'Arial',
  },

  botaoEntrar: {
    backgroundColor: '#181818',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '65%',
    paddingVertical: '5%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#0A4C98',
  },

  linkVoltarLogin: {
    marginTop: 20,
  },
});

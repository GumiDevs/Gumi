import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function NovaSenhaScreen() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.login}
        source={require('@/assets/images/Nova_Senha.png')}
      />

      <View style={styles.cadastroContainer}>
        <Text
          style={{
            color: '#FFFFFF',
            fontFamily: 'Arial',
            fontSize: 16,
            alignSelf: 'flex-start',
            marginHorizontal: '12%',
            marginTop: 20,
          }}
        >
          Digite aqui:
        </Text>

        <TextInput
          style={styles.novaSenhaInput}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <Text
          style={{
            color: '#FFFFFF',
            fontFamily: 'Arial',
            fontSize: 16,
            alignSelf: 'flex-start',
            marginHorizontal: '12%',
            marginTop: 20,
          }}
        >
          Confirme aqui:
        </Text>

        <TextInput
          style={styles.novaSenhaInput}
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={() => {
            // Adicionar lógica de criar nova senha aqui
            console.log('Nova senha criada:', { senha, confirmarSenha });
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
            CRIAR
          </Text>
        </TouchableOpacity>

        <Link href="/login" asChild>
          <TouchableOpacity style={styles.linkVoltarLogin}>
            <Text style={{ fontSize: 12, color: '#61A9FA', fontFamily: 'Arial' }}>
              Voltar ao login
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

  novaSenhaInput: {
    height: 40,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 15,
    fontFamily: 'Arial',
  },

  botaoEntrar: {
    backgroundColor: '#181818',
    marginTop: 210,
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

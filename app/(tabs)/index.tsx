import { Image } from 'expo-image';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({ Oswald_400Regular });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/Logo - GUMI 1.png')}
        style={styles.image}
      />
      <Text style={styles.titulo}>Olá, Bem-Vindo!</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Clicou')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  image: {
    width: 250,
    height: 110,
  },
  titulo: {
    color: '#FFFFFF',
    fontFamily: 'Oswald_400Regular',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#0a4c98',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Oswald_400Regular',
    letterSpacing: 0.5,
  },
});

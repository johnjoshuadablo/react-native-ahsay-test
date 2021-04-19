import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {login} from '../api/RestApi';

const Login = (props) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  let {navigation} = props;

  const submitLogin = async () => {
    setLoading(true);
    const response = await login(username, password);
    setLoading(false);
    if (response) {
      navigation.navigate('ListProductPage');
    } else {
      // eslint-disable-next-line no-alert
      alert('Incorrect password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex1}>
        <Image
          resizeMode={'contain'}
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <View style={styles.instructionContainer}>
          <Text style={styles.header}>Login</Text>
          <Text style={styles.subtitle}>Please login to your account</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            keyboardType="email-address"
            placeholder={'Email Address'}
            placeholderTextColor={'#808080'}
            onChangeText={(text) => setUserName(text)}
          />
          <TextInput
            secureTextEntry
            autoCapitalize={false}
            style={styles.input}
            placeholder={'Password'}
            placeholderTextColor={'#808080'}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <ActivityIndicator animating={loading} size={50} />
      <View style={styles.loginContainer}>
        <Pressable style={styles.login} onPress={submitLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  flex1: {
    flex: 1,
  },
  logo: {
    marginTop: 30,
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  instructionContainer: {
    marginTop: 30,
    marginHorizontal: 40,
  },
  header: {
    fontWeight: '600',
    fontSize: 40,
  },
  subtitle: {
    color: '#808080',
    fontSize: 18,
    marginTop: 10,
  },
  form: {
    marginTop: 30,
    marginHorizontal: 40,
  },
  loginContainer: {
    marginHorizontal: 40,
  },
  login: {
    height: 52,
    backgroundColor: '#0087E0',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  loginText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 1.5,
  },
  input: {
    marginTop: 20,
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    fontSize: 14,
  },
});

export default Login;

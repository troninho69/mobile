import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-web'
import { useState } from 'react'

export default function FormSignUp() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = () => {
    console.log({nome, vemail, senha})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.inputs} 
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Senha" 
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
        />
        <Button title="Cadastrar" onPress={handleSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center'
  },
  form:{
    width: "90%",
    gap: 10
  },
  inputs:{
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderStyle: "solid",
    borderRadius: 6,
    padding: 8
  },
    title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20
  }
})
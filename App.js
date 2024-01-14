import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  function calculate(){


    const lower = (220- (age.replace(',','.'))) * 0.65
    const upper = (220- (age.replace(',','.'))) * 0.85
    setLower(lower)
    setUpper(upper)

  }

  const [lower, setLower] = useState('');
  const [upper, setUpper] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}> 
      {"\n"}Age</Text>
      <TextInput keyboardType='decimal-pad' style={styles.field} value={age} onChangeText={text => setAge(text)}/>
      <Text style={styles.text}>Hr limits</Text>
      <Text style={styles.text}>{(Number(lower)).toFixed(0)} - {(Number(upper)).toFixed(0)}</Text>
      <Button title="Calculate" onPress={calculate}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  field: {
    backgroundColor: '#fff', 
    fontSize: 18 
  }, 
  text:{
    fontSize: 18 
  }
});

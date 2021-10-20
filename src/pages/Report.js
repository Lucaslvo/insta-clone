import React, { useState } from "react";
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';





function Report() {
  const [categoria, setCategoria] = useState('')
  const [titulo, setTitulo] = useState('')
  const [endereco, setEndereco] = useState('')
  const [descricao, setDescricao] = useState('')
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);




  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    console.log(date)
  };
  return (
    <View style={styles.container}>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      {/* React Fragment e data em formato MM/DD/YY */}
      <>
        <Ionicons name='alert' size={40} />
        <Text>{date.toLocaleDateString()}</Text>
        {show && (
          <DateTimePicker
            value={date}
            onChange={onChange}
          />
        )}
        <TouchableOpacity
          style={{
            marginTop: 30,
            padding: 10,
            backgroundColor: '#4286e4'
          }}
          onPress={save}>
          <Text>Salvar dados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 30,
            padding: 10,
            backgroundColor: '#4286e4'
          }}
          onPress={openCamera}>
          <Text>Abrir camera</Text>
        </TouchableOpacity>
      </>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    fontWeight: 'bold',

  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  containerInput: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  },
  input: {
    width: 100,
    height: 25,
    borderWidth: 1,
    borderColor: '#334257',
    backgroundColor: '#EEE'
  },
  button: {
    width: 100,
    height: 25,
  },
  dateComponent: {
    width: 350
  }
})

export default Report
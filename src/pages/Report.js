import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';



export default function Report() {
  const [categoria, setCategoria] = useState('')
  const [titulo, setTitulo] = useState('')
  const [endereco, setEndereco] = useState('')
  const [descricao, setDescricao] = useState('')
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const pressionado = () => {
    Alert.alert('Fui clicado', date.toLocaleDateString())
  }

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
      <>
        <View style={styles.containerInput}>
          {/* Categoria */}
          <View style={styles.label}>
            <MaterialIcons name='category' size={20} color='#334257' />
            <Text> Selecione uma categoria</Text>
          </View>
          <RNPickerSelect
            style={{
              borderWidth: 1,
              borderColor: '#334257'
            }}
            
            onValueChange={(value) => setCategoria(value)}
            value={categoria}
            placeho
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
          />

          {/* Titulo */}
          <View style={styles.label}>
            <MaterialIcons name='subtitles' size={20} color='#334257' />
            <Text> Insira um título</Text>
          </View>
          <TextInput style={styles.input}
            value={titulo}
            onChangeText={textValue => setTitulo(textValue)}
          />
          <Text>{titulo}</Text>

          {/* Endereço */}
          <View style={styles.label}>
            <MaterialIcons name='add-location-alt' size={20} color='#334257' />
            <Text> Insira um endereço</Text>
          </View>
          <TextInput style={styles.input}
            value={endereco}
            onChangeText={textValue => setEndereco(textValue)}
          />
        </View>


        {/* Data */}
        <View style={styles.containerInputI}>
          <View style={styles.labeldata}>
            <Text>Insira a data</Text>
            <Text>Anexar Imagem</Text>
          </View>
          <View style={styles.labelimagem}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 50,
              alignItems: 'center',
            }}>
              <TouchableOpacity onPress={showDatepicker} ><MaterialIcons name='calendar-today' size={28} color='#334257' /></TouchableOpacity>
              <Text>{date.toLocaleDateString()}</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 50,
              alignItems: 'center',
            }}>
              <MaterialIcons name='camera-alt' size={28} color='#334257' />
              <MaterialIcons name='picture-in-picture' size={28} color='#334257' />
            </View>
          </View>
          {show && (
            <DateTimePicker
              value={date}
              onChange={onChange}
            />
          )}
        </View>

        {/* Descrição */}
        <View style={styles.containerInput}>
          <View style={styles.label}>
            <MaterialIcons name='description' size={20} color='#334257' />
            <Text> Descrição</Text>
          </View>
          <TextInput style={styles.descricao}
            value={descricao}
            multiline={true}
            onChangeText={textValue => setDescricao(textValue)}
          />
        </View>
        {/* Botões */}
        <TouchableOpacity
          style={{
            marginTop: 30,
            padding: 10,
            width: 250,
            backgroundColor: '#548CA8'
          }}
          onPress={pressionado}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <MaterialIcons name='check' size={20} color='#ffffff' />
            <Text style={{ color: '#ffffff' }}> Reportar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 30,
            padding: 10,
            width: 250,
            backgroundColor: '#FFFFFF',

          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <MaterialIcons name='clear' size={20} color='#334257' />
            <Text style={{ color: '#334257' }}> Cancelar</Text>
          </View>
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
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#334257',
    backgroundColor: '#EEE',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#334257',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,

  },
  descricao: {
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: '#334257',
    backgroundColor: '#EEE',
    borderRadius: 10,
    textAlignVertical: "top",
    padding: 5,

    shadowColor: '#334247',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  label: {
    flexDirection: 'row',
    paddingVertical: 5,

  },
  containerInputI: {
    flex: 1,
    width: 300,
    maxHeight: 100,
    backgroundColor: 'red'
  },
  labeldata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  labelimagem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
})
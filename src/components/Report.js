import React from 'react'
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
export default function Report(props) {

  return (
    <View style={styles.container}>
      <View style={styles.headerPost}>
        <View style={styles.separacao}>
          <Text style={styles.titulo}>{props.titulo}</Text>
          <Text style={styles.endereco}>{props.endereco}</Text>
        
          <MaterialIcons name='report' size={50} color='#fff' />
        </View>
      </View>
      <View style={styles.espacamento}>
        <Text style={styles.descricao}>{props.descricao}</Text>
        {/* <Image source={props.image} style={styles.image} /> */}
        <Text>IMAGEM AQUI</Text>
        <View style={styles.footPost}>
          <Text style={styles.categoria}>{props.categoria}</Text>
          <View style={{
              flexDirection:'row', 
              justifyContent:'space-between',
              width: 70,
              alignItems:'center',
              paddingHorizontal: -10,
         }}>
            <MaterialIcons name='calendar-today' size={20} color='#2b2b2d' />
            <Text style={styles.data}>26/06/2019</Text>
          </View>
        </View>
        {console.log(props)}
      </View>
      
      


    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor:'#ffffff'
    
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'contain',
    paddingVertical: 10,
  },
  headerPost: {
    flex:1,
    width: 300,
    maxHeight: 100,
    backgroundColor: '#548CA8',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,

    shadowColor:'#334247',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,

  },
  titulo: {
    fontSize: 15,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    color:'#FFF',
    paddingHorizontal: 10,
    fontWeight: 'bold',

  },
  separacao: {
    flexDirection:'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  endereco: {
    fontSize: 13,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    color:'#FFF',
    paddingHorizontal: 10,
  },
  descricao: {
    fontSize: 13,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    color:'#666',
    paddingVertical: 10,
  },
  categoria: {
    fontWeight: 'bold',
  },
  data:{ 
    fontSize: 13,
  },
  footPost: {
    flexDirection:'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    paddingVertical: 10,

  },
  espacamento: {
    paddingHorizontal: 40,
    backgroundColor: '#F3F5F6',
    width: 300,
    maxHeight: 100,
    paddingVertical: 10,

    shadowColor:'#334247',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  }
})
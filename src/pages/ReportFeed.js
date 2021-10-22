import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Report from '../components/Report'

function ReportFeed({ reports }) {

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={reports}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => {
          console.log(item)
          return (
            <Report key={item.id} {...item} />

          )
        }}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
})

const mapStateToProps = ({ reports }) => {
  return {
    reports: reports.reports
  }
}

export default connect(mapStateToProps)(ReportFeed)
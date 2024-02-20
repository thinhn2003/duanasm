import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const data = [
  {
    id: 1,
    name: 'Gà Rán',
    image: 'https://www.thatlangon.com/wp-content/uploads/2020/07/ga-ran1.jpg'
  },
  {
    id: 2,
    name: 'Khoai tây chiên',
    image: 'https://www.thatlangon.com/wp-content/uploads/2020/07/ga-ran1.jpg'
  },
  {
    id: 3,
    name: 'Bò bít tết',
    image: 'https://www.thatlangon.com/wp-content/uploads/2020/07/ga-ran1.jpg'
  },
  {
    id: 4,
    name: 'Lẩu đuôi bò',
    image: 'https://www.thatlangon.com/wp-content/uploads/2020/07/ga-ran1.jpg'
  }
]

const Pk = () => {
  return (
    <Text style={{ backgroundColor: 'orange', padding: 10, textAlign: 'center' }}>
      {/* <SafeAreaView style={{ backgroundColor: 'orange', padding: 10, textAlign: 'center' }}> */}
        <FlatList
        scrollEnabled = {false}
          data={data}
          renderItem={({ item }) =>
            <View style={{ margin: 15 }}>
              <Text>{item.name}</Text>
              <Image source={{uri: item.image}} style={{ width: 200, height: 200 }} />
            </View>
          } />
      {/* </SafeAreaView> */}
    </Text>
  )
}

export default Pk

const styles = StyleSheet.create({})
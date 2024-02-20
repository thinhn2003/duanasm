import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, BouncyCheckbox, Image } from 'react-native'
import React, { Component, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ navigation }) => {

  return (
    // <View style = {styles.container}>
    //   <Text style={{ color: 'orange', textAlign: 'center', fontSize: 50, top: 25, fontWeight: 'bold' }}>POLY FOOD</Text>
    //   <View style={{ paddingTop: 100 }}>
    //             <View style={{ marginBottom: 20 }}>
    //                 <TextInput style={{ borderColor: 'orange', borderWidth: 1, marginLeft: 40, marginRight: 40, borderRadius: 5, padding: 20 }} />
    //                 <View style={{ position: 'absolute', top: -12, left: 50, backgroundColor: '#FFF', paddingHorizontal: 5, borderRadius: 5 }}>
    //                     <Text style={{ color: '#00BA25' }}>Tài khoản</Text>
    //                 </View>
    //             </View>

    //             <View style={{ marginBottom: 20 }}>
    //                 <TextInput style={{ borderColor: 'orange', borderWidth: 1, marginLeft: 40, marginRight: 40, borderRadius: 5, padding: 20 }} secureTextEntry={true} placeholder="Mật khẩu" />
    //             </View>
    //             <View style = {{width: '100%', height: '40%', marginTop: 10, justifyContent:'center' , alignItems: 'center'}}>
    //               <TouchableOpacity style = {{width: '60%', height: '30%', borderColor: 'orange', borderWidth: 1 , borderRadius: 100,justifyContent: 'center' , alignItems: 'center'}}  onPress={() => {
    //                 navigation.navigate('Mytabs');
    //               }}>
    //                     <Text style = {{color: '#00BA25', fontWeight: 'bold', fontSize: 25}}>Đăng nhập</Text>
    //               </TouchableOpacity>
    //               <TouchableOpacity style = {{ marginTop:20 ,width: '60%', height: '30%', borderColor: 'orange', borderWidth: 1, borderRadius: 100,justifyContent: 'center' , alignItems: 'center'}}  onPress={() => {
    //                 navigation.navigate('Dangky');
    //               }}>
    //               <Text style = {{color: '#00BA25', fontWeight: 'bold', fontSize: 25}}>Đăng ký</Text>
    //               </TouchableOpacity>
    //             </View>

    //         </View>
    // </View>
    <View style={styles.container}>
      <View style={styles.i}>

      </View>
      <View style={{ backgroundColor: 'white', height: 700, width: 415, borderTopLeftRadius: 40, borderTopRightRadius: 40, top: 40 }}>
        <Image source={{ uri: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/16/logo-truong-fpt_043152255.png' }} style={{ width: 200, height: 100, top: 20, marginLeft: 110 }} />
        <Text style={{ fontSize: 25, textAlign: 'center', top: 40, color: 'red', fontWeight: 'bold' }}>Chào Mừng Trở Lại!</Text>
        <View style={{ backgroundColor: '#FFFFFF', height: 700, width: 415, borderTopLeftRadius: 40, borderTopRightRadius: 40, top: 50 }}>
          <View style={{ paddingTop: 10 }}>
            <View style={{ marginBottom: 20 }}>
              <TextInput style={{ borderColor: 'black', borderWidth: 1, marginLeft: 40, marginRight: 40, borderRadius: 5, padding: 20 }} ></TextInput>
              <View style={{ position: 'absolute', top: -12, left: 50, backgroundColor: '#FFF', paddingHorizontal: 5, borderRadius: 5 }}>
                <Text style={{ color: 'green' }}>Email</Text>
              </View>
            </View>

            <View style={{ marginBottom: 20 }}>
              <TextInput style={{ borderColor: 'black', borderWidth: 1, marginLeft: 40, marginRight: 40, borderRadius: 5, padding: 20 }} secureTextEntry={true} placeholder="Password" />
            </View>

          </View>

          <View style={{ flexDirection: 'row', marginBottom: 10 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            </View>
            <View>
              <Text style={{ color: 'green', paddingLeft: 250, }}>Quên Mật Khẩu ?</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'red', borderWidth: 2, borderRadius: 100, marginLeft: 40, marginRight: 40, backgroundColor: 'red' }} onPress={()=> {
              navigation.navigate('Mytabs')
            }}>
              <Text style={{ color: 'white', fontSize: 20, flexDirection: 'row', fontWeight: 'bold' }}>Đăng nhập</Text>
            </TouchableOpacity>
            <View><Text style={{ textAlign: 'center', fontSize: 20, paddingTop: 20 }}>Hoặc đăng nhập với</Text></View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 25 }}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/145/145802.png' }} style={{ width: 40, height: 40, marginRight: 20 }} />
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2504/2504947.png' }} style={{ width: 40, height: 40, marginRight: 20 }} />
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2504/2504794.png' }} style={{ width: 40, height: 40 }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black', paddingTop: 20 }}>Khách hàng mới?</Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 100,
                backgroundColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('Dangky')}
            >
              <Text style={{ color: 'green', paddingTop: 20 }}>Tạo Một Tài Khoản</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  title: {

  },
  container: {
    backgroundColor: 'red'
  }
})
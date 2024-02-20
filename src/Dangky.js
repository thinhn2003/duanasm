import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const Dangky = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    

    const handleRegister = () => {
        const userData = {
            fullName: fullName,
            email: email,
            username: username,
            password: password,
            phoneNumber: phoneNumber,
            address: address
        };

        fetch('http://192.168.53.101:3000/Rigi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Registration successful:', data);
                // Perform any necessary actions after successful registration
                alert('Đăng ký thành công')
                navigation.navigate('Login')
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle any errors that occur during registration
            });
            
    };
    
    return (
        <View style={{ backgroundColor: 'red' }}>
            <View>
                {/* <Text style={{ color: 'white', textAlign: 'center', fontSize: 35, top: 10, fontWeight: 'bold', justifyContent: 'center' }}>Bắt Đầu Cuộc Hành Trình Của Bạn</Text> */}
            </View>

            <View style={{ backgroundColor: 'white', height: 700, width: 415, borderTopLeftRadius: 40, borderTopRightRadius: 40, top: 20 }}>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        style={{ borderColor: 'black', borderWidth: 2, marginLeft: 40, marginRight: 40, borderRadius: 20, padding: 10 }}
                        placeholder="Họ Tên"
                        onChangeText={text => setFullName(text)}
                    /></View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{ borderColor: 'black', borderWidth: 2, marginLeft: 40, marginRight: 40, borderRadius: 20, padding: 10 }} placeholder="Email" onChangeText={text => setEmail(text)} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{ borderColor: 'black', borderWidth: 2, marginLeft: 40, marginRight: 40, borderRadius: 20, padding: 10 }} placeholder="Tên Đăng Nhập" onChangeText={text => setUsername(text)}/>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{ borderColor: 'black', borderWidth: 2, marginLeft: 40, marginRight: 40, borderRadius: 20, padding: 10 }} secureTextEntry={true} placeholder="Mật Khẩu" onChangeText={text => setPassword(text)}/>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{ borderColor: 'black', borderWidth: 2, marginLeft: 40, marginRight: 40, borderRadius: 20, padding: 10 }} placeholder="Số Điện Thoại" onChangeText={text => setPhoneNumber(text)}/>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{ borderColor: 'black', borderWidth: 2, marginLeft: 40, marginRight: 40, borderRadius: 20, padding: 10 }} placeholder="Địa Chỉ" onChangeText={text => setAddress(text)}/>
                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity style={{ color: 'white', fontSize: 20, flexDirection: 'row', fontWeight: 'bold', backgroundColor: 'red', borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginRight: 20 }} onPress={handleRegister}>
                        <Text style={{ color: 'white', fontSize: 25 }}>Đăng Ký</Text>
                    </TouchableOpacity>
                </View>
                <View><Text style={{ textAlign: 'center', fontSize: 20, paddingTop: 20 }}>Hoặc Đăng Ký Với</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 25 }}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/145/145802.png' }} style={{ width: 40, height: 40, marginRight: 20 }} />
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2504/2504947.png' }} style={{ width: 40, height: 40, marginRight: 20 }} />
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2504/2504794.png' }} style={{ width: 40, height: 40 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                    <Text style={{ color: 'black', paddingTop: 20 }}>Đã Có Tài Khoản?</Text>
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
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ color: 'green', paddingTop: 20 }}>Đăng Nhập</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View >
    )
}

export default Dangky

const styles = StyleSheet.create({})
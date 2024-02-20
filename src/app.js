import React, { Component } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Dangky from './Dangky';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pk from './Pk';
import demo from './Demo';
import demo1 from './demo1';
import Demo from './Demo';
import Lienhe from './Lienhe';
import Manhinh from './Manhinh';
import Chitietsanpham from './Chitietsanpham';
import Danhsachyeuthich from './Danhsachyeuthich';
import Giohang from './Giohang';
import Themsanpham from './Themsanpham';
import SuaSanPham from './SuaSanPham';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Mytabs() {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Manhinh} options={{
                title: 'Home', tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image style={{ width: size, height: size }} source={{ uri: 'https://www.nicepng.com/png/full/17-178841_home-png-home-icon-free.png' }}></Image>
                    )
                }
            }} />
            <Tab.Screen name="Danhsachyeuthich" component={Danhsachyeuthich} options={{
                title: 'Danh sách yêu thích', tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image style={{ width: size, height: size }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10263/10263030.png' }}></Image>
                    )
                }
            }} />
            <Tab.Screen name="Giohang" component={Giohang} options={{
                title: 'Giỏ hàng', tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image style={{ width: size, height: size }} source={{ uri: 'http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG42.png' }}></Image>
                    )
                }
            }} />
            <Tab.Screen name="Lienhe" component={Lienhe} options={{
                title: 'Liên hệ', tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image style={{ width: size, height: size }} source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_401526.png' }}></Image>
                    )
                }
            }} />
        </Tab.Navigator>
    );
}

export default Rootcomponent = function () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Dangky" component={Dangky} />
                <Stack.Screen name="Mytabs" component={Mytabs} />
                <Stack.Screen name="Themsanpham" component={Themsanpham} />
                <Stack.Screen name="SuaSanPham" component={SuaSanPham} />
                <Stack.Screen
                    name="Home"
                    component={Manhinh}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Chitietsanpham" component={Chitietsanpham} />
                <Stack.Screen name="Giohang" component={Giohang} />
                

                
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

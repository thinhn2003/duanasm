import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'



const View_View_ViewInput = () => {
    return (
        <View style={styles.container}>
            <View style={styles.i}>
                <Image source={require('./img/icons8-back-50.png')} style={{ width: 40, height: 40, left: 10, top: 10 }} />
            </View>
            <View style={{ backgroundColor: '#EBF2F2', height: 700, width: 415, borderTopLeftRadius: 40, borderTopRightRadius: 40, top: 100 }}>
                <Text style={{ fontSize: 25, textAlign: 'center', top: 20 }}>Login to your acount</Text>
                <View style={{ backgroundColor: '#FFFFFF', height: 700, width: 415, borderTopLeftRadius: 40, borderTopRightRadius: 40, top: 50 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 25 }}>
                        <Image source={require('./img/face.png')} style={{ width: 40, height: 40, marginRight: 20 }} />
                        <Image source={require('./img/twitter-icone.png')} style={{ width: 40, height: 40, marginRight: 20 }} />
                        <Image source={require('./img/google.png')} style={{ width: 40, height: 40 }} />
                    </View>
                    <View><Text style={{ textAlign: 'center', fontSize: 20, paddingTop: 20 }}>or use your email acount</Text></View>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ marginBottom: 20 }}>
                            <TextInput style={{ borderColor: '#00BA25', borderWidth: 1, marginLeft: 40, marginRight: 40, borderRadius: 5, padding: 20 }} />
                            <View style={{ position: 'absolute', top: -12, left: 50, backgroundColor: '#FFF', paddingHorizontal: 5, borderRadius: 5 }}>
                                <Text style={{ color: '#00BA25' }}>Email</Text>
                            </View>
                        </View>

                        <View style={{ marginBottom: 20 }}>
                            <TextInput style={{ borderColor: '#888888', borderWidth: 1, marginLeft: 40, marginRight: 40, borderRadius: 5, padding: 20 }} secureTextEntry={true} placeholder="Password" />
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('./img/icons8-toggle-32.png')} style={{ width: 20, height: 20, marginLeft: 40, marginRight: 5 }} />
                            <Text style={{ paddingLeft: 10 }}>Remember Me</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#008000', paddingLeft: 100, }}>Forgot Pasword?</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderColor: '#00BA25', borderWidth: 2, borderRadius: 100, marginLeft: 40, marginRight: 40, backgroundColor: '#00BA25' }}>
                            <Text style={{ color: 'white', fontSize: 25 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', paddingTop: 20 }}>Don't have an account? <Text style={{ color: 'green' }}>Register Here</Text></Text>
                    </View>
                </View>
            </View>
        </View>



    )
}

export default View_View_ViewInput

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#00CC00',
        flex: 1
    }
})
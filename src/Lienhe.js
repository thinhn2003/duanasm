import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Lienhe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liên hệ</Text>
      <Text style={styles.tieude}>
        Chúng tôi mong muốn lắng nghe ý kiến của quý khách. Vui lòng gửi mọi yêu cầu, thắc mắc theo thông tin ở bên dưới. Chúng tôi sẽ liên lạc với bạn sớm nhất.
      </Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Họ và Tên</Text>
        <TextInput style={styles.input} placeholder="Họ và Tên" />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <Text style={styles.label}>Số Điện Thoại</Text>
        <TextInput style={styles.input} placeholder="Số điện thoại" />
        <Text style={styles.label}>Nội Dung</Text>
        <TextInput style={styles.input} placeholder="Nội dung liên hệ" numberOfLines={4} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Gửi Tin Nhắn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lienhe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: 'white'
  },
  tieude: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderColor: '#B22222',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
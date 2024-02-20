import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Themsanpham = ({ navigation }) => {
  const [tenSanPham, setTenSanPham] = useState('');
  const [hinhAnh, setHinhAnh] = useState('');
  const [giaSanPham, setGiaSanPham] = useState('');
  const [moTaSanPham, setMoTaSanPham] = useState('');

  const addProduct = () => {
    if (tenSanPham.trim() === '' || hinhAnh.trim() === '' || giaSanPham.trim() === '' || moTaSanPham.trim() === '') {
      alert('Vui lòng nhập đầy đủ thông tin sản phẩm');
      return;
    }

    const newProduct = {
      name: tenSanPham,
      image: hinhAnh,
      price: giaSanPham,
      description: moTaSanPham,
    };

    fetch('http://192.168.53.101:3000/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product added successfully:', data);
        // Thực hiện các hành động khác sau khi thêm sản phẩm thành công
        alert('Thêm sản phẩm thành công');
        navigation.navigate('Mytabs');
      })
      .catch(error => {
        console.log('Error adding product:', error);
        // Xử lý lỗi nếu có
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5700/5700554.png' }} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
      <Text style={styles.label}>Tên sản phẩm:</Text>
      <TextInput
        style={styles.textInput}
        value={tenSanPham}
        onChangeText={text => setTenSanPham(text)}
      />

      <Text style={styles.label}>Đường link hình ảnh:</Text>
      <TextInput
        style={styles.textInput}
        value={hinhAnh}
        onChangeText={text => setHinhAnh(text)}
      />

      {hinhAnh ? (
        <Image source={{ uri: hinhAnh }} style={styles.previewImage} />
      ) : (
        <Text style={styles.noImageText}>Không có hình ảnh</Text>
      )}
      <Text style={styles.label}>Giá sản phẩm:</Text>
      <TextInput
        style={styles.textInput}
        value={giaSanPham}
        onChangeText={text => setGiaSanPham(text)}
      />

      <Text style={styles.label}>Mô tả sản phẩm:</Text>
      <TextInput
        style={styles.textInput}
        value={moTaSanPham}
        onChangeText={text => setMoTaSanPham(text)}
      />

      <TouchableOpacity style={styles.addButton} onPress={addProduct}>
        <Text style={styles.addButtonText}>Thêm sản phẩm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Themsanpham;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 5,
  },
  previewImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  noImageText: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
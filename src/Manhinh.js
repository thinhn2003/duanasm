import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const Manhinh = () => {
  const navigation = useNavigation();
  const [sanphamo, setSphamo] = useState([]);
  const [tenSanPham, setTenSanPham] = useState('');
  const [hinhAnh, setHinhAnh] = useState('');
  

  const getAPI = () => {
    fetch('http://192.168.53.101:3000/product')
      .then(response => response.json())
      .then(data => setSphamo(data))
      .catch(error => console.log('Error fetching data:', error));
  };

  useEffect(() => {
    const interval = setInterval(getAPI, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);


  const handleImagePress = (productId) => {
    navigation.navigate('Chitietsanpham', { productId });
  };
  

  const sanpham = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.id)}>
      <View style={styles.Item}>
        <Text style={styles.Name}>{item.name}</Text>
        <Image source={{ uri: item.image }} style={styles.Image} />
        {/* <TouchableOpacity onPress={() => deleteProduct(item.id)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Xóa</Text>
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );

  const sanpham4 = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.id)}>
      <View style={styles.Item}>
        <Text style={styles.Name}>{item.name}</Text>
        <Image source={{ uri: item.image }} style={styles.Image4} />
        {/* <TouchableOpacity onPress={() => deleteProduct(item.id)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Xóa</Text>
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );

  const addProduct = () => {
    navigation.navigate('Themsanpham', {
      onAddProduct: (newProduct) => {
        setSphamo([...sanphamo, newProduct]);
      },
    });
  };

//   const deleteProduct = (productId) => {
//     Alert.alert(
//       'Xác nhận xóa',
//       'Bạn có chắc muốn xóa sản phẩm này?',
//       [
//         {
//           text: 'Hủy',
//           style: 'cancel',
//         },
//         {
//           text: 'Xóa',
//           onPress: () => {
//             fetch(`http://192.168.53.101:3000/product/${productId}`, {
//               method: 'DELETE',
//             })
//               .then(response => response.json())
//               .then(data => {
//                 console.log('Product deleted successfully:', data);
//                 // Xóa sản phẩm khỏi danh sách
//                 const updatedProducts = sanphamo.filter(item => item.id !== productId);
//                 setSphamo(updatedProducts);
//                 // Thực hiện các hành động khác sau khi xóa sản phẩm thành công
//               })
//               .catch(error => {
//                 console.log('Error deleting product:', error);
//                 // Xử lý lỗi nếu có
//               });
//           },
//         },
//       ],
//     );
//   };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10479/10479877.png' }} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
      <SafeAreaView>
        <Text style={styles.TitleSp}>Sản phẩm mới</Text>
        <FlatList
          horizontal
          data={sanphamo}
          renderItem={sanpham4}
          keyExtractor={item => item.id.toString()}
        />

        <Text style={styles.TitleSp}>Sản phẩm bán chạy</Text>
        <FlatList
          horizontal
          data={sanphamo}
          renderItem={sanpham4}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
      <Text style={styles.TitleSp}>Tất cả sản phẩm</Text>

      <FlatList
        numColumns={2}
        data={sanphamo}
        renderItem={sanpham}
        keyExtractor={item => item.id.toString()}
      />

      <TouchableOpacity style={styles.addButton} onPress={addProduct}>
        <Text style={styles.addButtonText}>Thêm sản phẩm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Manhinh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  TitleSp: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 20,
    paddingLeft: 20,
  },
  Item: {
    margin: 10,
    alignItems: 'center',
  },
  Name: {
    fontWeight: 'bold',
    marginBottom: 1,
  },
  Image: {
    width: 170,
    height: 200,
    borderRadius: 20,
  },
  Image4: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  addButton: {
    backgroundColor: 'green',
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 5,
    marginTop: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
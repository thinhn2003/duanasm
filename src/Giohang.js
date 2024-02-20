import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity ,Alert} from 'react-native';

const Giohang = ({ navigation }) => {
  const [Hinhthuc, thanhtoan] = useState(null);
  const [giohangsp, dathang] = useState([
    // {
    //   id: 1,
    //   name: 'Gà Rán',
    //   image: 'https://www.thatlangon.com/wp-content/uploads/2020/07/ga-ran1.jpg',
    //   description: 'Gà rán rất ngon',
    //   quantity: 2,
    //   price: '200.000',
    // },
    // {
    //   id: 3,
    //   name: 'Bò bít tết',
    //   image: 'https://barona.vn/storage/meo-vat/50/bo-bit-tet-kieu-viet-nam.jpg',
    //   description: 'Bò bít tết ngon',
    //   quantity: 1,
    //   price: '1.000.000',
    // },
  ]);
  // const themVaoGioHang = (item) => {
  //   const existingItem = giohangsp.find((sp) => sp.id === item.id);
  //   if (existingItem) {
  //     const updatedCartItems = giohangsp.map((sp) => {
  //       if (sp.id === item.id) {
  //         return { ...sp, quantity: sp.quantity + 1 };
  //       }
  //       return sp;
  //     });
  //     dathang(updatedCartItems);
  //   } else {
  //     const updatedCartItems = [...giohangsp, { ...item, quantity: 1 }];
  //     dathang(updatedCartItems);
  //   }
  // };
  const getAPI = () => {
    fetch('http://192.168.53.101:3000/Giohang')
      .then(response => response.json())
      .then(data => dathang(data))
      .catch(error => console.log('Error fetching data:', error));
  };

  useEffect(() => {
    getAPI();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.Tieude}>
      <Image source={{ uri: item.image }} style={styles.ImgaePay} />
      <View style={styles.listgiohang}>
        <Text style={styles.tensp}>{item.name}</Text>
        <Text style={styles.motasp}>{item.description}</Text>
        <Text style={styles.soluongsp}>Số lượng: {item.quantity}</Text>
        <Text style={styles.giasp}>Giá: {item.price}</Text>
        <TouchableOpacity
          style={styles.removeItemButton}
          onPress={() => xoaitem(item.id)}
        >
          <Text style={styles.buttonsp}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const Selectpay = (method) => {
    thanhtoan(method);
  };

  // const handleQuantityChange = (itemId, newQuantity) => {
  //   const updatedCartItems = cartItems.map((item) => {
  //     if (item.id === itemId) {
  //       return { ...item, quantity: newQuantity };
  //     }
  //     return item;
  //   });
  //   setCartItems(updatedCartItems);
  // };

  const reloadAPI = () => {
    fetch('http://192.168.53.101:3000/Giohang')
      .then(response => response.json())
      .then(data => {
        // Tải lại dữ liệu thành công từ server
        // Cập nhật lại giỏ hàng với dữ liệu mới
        dathang(data);
      })
      .catch(error => console.log('Error fetching data:', error));
  };

  const xoaitem = (itemId) => {
    fetch(`http://192.168.53.101:3000/Giohang/${itemId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        // Xóa thành công từ server
        // Tải lại dữ liệu từ API
        reloadAPI();
      })
      .catch(error => console.log('Error deleting data:', error));
  };

  const Sumitdonhang = () => {
    console.log('Đơn hàng đã được gửi');
    console.log('Phương thức thanh toán:', Hinhthuc);
    Alert.alert('Thành công', 'Đơn hàng đã được gửi thành công!');
    navigation.navigate('Mytabs')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Giỏ hàng</Text>
      {giohangsp.length > 0 ? (
        <FlatList
          data={giohangsp}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.Text4}>Giỏ hàng trống</Text>
      )}

      <View style={styles.giaohangsp}>
        <Text style={styles.Tieudettsp}>Chọn phương thức thanh toán:</Text>
        <TouchableOpacity
          style={[styles.Buttonpay, Hinhthuc === 'Tienmat' && styles.Buttoncolor]}
          onPress={() => Selectpay('Tienmat')}
        >
          <Text style={styles.Tieudepay}>Thanh toán khi nhận hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.Buttonpay, Hinhthuc === 'Online' && styles.Buttoncolor]}
          onPress={() => Selectpay('Online')}
        >
          <Text style={styles.Tieudepay}>Thanh toán trực tuyến</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={Sumitdonhang} >
        <Text style={styles.submitButtonText}>Gửi đơn hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Giohang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  Title: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginTop: 10,
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
  },
  Text4: {
    fontSize: 100,
    textAlign: 'center',
    marginTop: 20,
  },
  Tieude: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ImgaePay: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  listgiohang: {
    flex: 1,
  },
  tensp: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  motasp: {
    marginBottom: 5,
  },
  soluongsp: {
    marginBottom: 5,
  },
  giasp: {
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 12,
  },
  quantityText: {
    fontSize: 14,
  },
  removeItemButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonsp: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  giaohangsp: {
    marginTop: 20,
  },
  Tieudettsp: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  Buttonpay: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  Buttoncolor: {
    backgroundColor: 'orange',
  },
  Tieudepay: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  addItemButton: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
});
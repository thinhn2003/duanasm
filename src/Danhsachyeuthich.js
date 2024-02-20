// import React from 'react';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

// const data = [
//   {
//     id: 1,
//     name: 'Gà Rán',
//     price: '100.000',
//     image: 'https://www.thatlangon.com/wp-content/uploads/2020/07/ga-ran1.jpg',
//     description: 'Khi nhìn vào món gà rán, bạn sẽ thấy một lớp vỏ ngoài màu vàng hấp dẫn và giòn rụm. Lớp vỏ này được tạo ra bằng cách lăn thịt gà qua một hỗn hợp bột ăn, bao gồm bột mì, bột nở, muối, tiêu và các loại gia vị khác. Quá trình chiên giòn tạo ra một bề mặt ngoài hấp dẫn, đồng thời giữ cho thịt gà bên trong mềm mại và thơm ngon.',
//     isFavorite: false
//   },
//   {
//     id: 2,
//     name: 'Khoai tây chiên',
//     price: '55.000',
//     image: 'https://tse1.mm.bing.net/th?id=OIP.ckV4XIpcAJ6MbcTr_RGHsQHaEo&pid=Api&P=0&h=220',
//     description: 'Khoai tây chiên thường được chuẩn bị bằng cách lựa chọn khoai tây có vỏ màu vàng hoặc nâu, có chất lượng tốt và chứa ít nước. Sau đó, vỏ khoai tây được gọt sạch và rửa lại để loại bỏ bụi bẩn',
//     isFavorite: false
//   },
//   {
//     id: 3,
//     name: 'Bò bít tết',
//     price: '500.000',
//     image: 'https://barona.vn/storage/meo-vat/50/bo-bit-tet-kieu-viet-nam.jpg',
//     description: 'Nó bao gồm một miếng thịt bò tươi ngon được nướng chín tới mức độ ưa thích, thường là medium rare (nửa chín) hoặc medium (chín vừa). Thịt bò thường được cắt thành miếng dày khoảng 2-3 cm và được nướng trên một bếp nhiệt đới để tạo ra một lớp vỏ ngoài giòn vàng',
//     isFavorite: false
//   },
//   {
//     id: 4,
//     name: 'Salad',
//     price: '250.000',
//     image: 'https://tse3.mm.bing.net/th?id=OIP.o3F-kWCC4S72puQvBLf3gwHaE8&pid=Api&P=0&h=220',
//     description: 'Để tạo sự hòa quyện và hương vị đa dạng, các loại gia vị và nước sốt cũng được thêm vào salad. Đây có thể là một nước sốt truyền thống như nước sốt dầu ô liu và chanh, nước sốt mù tạt, nước sốt ranch, hay nước sốt dựa trên sữa chua và dưa chuột. Gia vị khác như muối, tiêu, tỏi băm nhuyễn, hạt tiêu, dầu ô liu cũng có thể được sử dụng để tăng thêm hương vị',
//     isFavorite: false
//   },
//   {
//     id: 5,
//     name: 'Bánh mì & chả',
//     price: '40.000',
//     image: 'https://tubideli.com/wp-content/uploads/2023/01/banh-mi-cha-ca-040.jpg',
//     description: 'Khi chuẩn bị món bánh mì & chả, một miếng bánh mì được cắt ngang và mở ra. Chả được đặt lên bánh mì, thường là một hoặc hai miếng tùy theo sở thích. Bánh mì & chả thường được kèm theo các loại gia vị và món ăn phụ như hành tây mỡ, rau sống như rau xà lách, rau mùi, ngò tây, và sốt mắm pha chua ngọt',
//     isFavorite: true
//   },
//   {
//     id: 6,
//     name: 'Chả Giò Hải Sản',
//     price: '100.000',
//     image: 'https://tse1.mm.bing.net/th?id=OIP.MNfH9JHB-8h2YeVadWTdpgAAAA&pid=Api&P=0&h=220',
//     description: 'Sau khi nhân hải sản đã được chuẩn bị, nó sẽ được gói trong lớp vỏ bánh tráng hoặc vỏ bánh mì mỏng. Vỏ bánh tráng thường được ướt qua nước để mềm và dễ dàng gói nhân. Một lượng nhân hải sản được đặt giữa vỏ bánh tráng và được gập lại thành hình cuộn chặt chẽ',
//     isFavorite: true
//   },
//   {
//     id: 7,
//     name: 'Cá Phile Sốt Cam Úc',
//     price: '800.000',
//     image: 'https://tse3.mm.bing.net/th?id=OIP.x_oFP1xTBPuYqZsLbIUuhwHaEK&pid=Api&P=0&h=220',
//     description: 'Khi chuẩn bị món cá phile sốt cam Úc, miếng cá phile thường được nướng hoặc chiên giòn. Cá phile được chế biến để có một lớp vỏ ngoài giòn vàng và giữ được độ mềm mịn bên trong. Miếng cá phile sau đó được chế biến với sốt cam Úc, thường là một hỗn hợp của nước cam Úc, đường, nước mắm, tỏi, ớt và các gia vị khác. Sốt cam Úc giúp tăng thêm hương vị tươi mát và độ đậm đà cho món cá',
//     isFavorite: true
//   },
//   {
//     id: 8,
//     name: 'Sườn Hầm Tỏi – Bánh Mì',
//     price: '800.000',
//     image: 'https://tse1.mm.bing.net/th?id=OIP.m22CyRInymAs1mEBNw190wHaEo&pid=Api&P=0&h=220',
//     description: 'Sườn hầm tỏi là miếng thịt sườn heo tươi ngon, được ướp gia vị và hầm chín mềm trong một nồi nước dùng hương thảo và tỏi. Sườn heo thường được cắt thành từng miếng nhỏ hoặc miếng to tùy theo sở thích, và sau đó được ướp muối, tiêu, tỏi băm nhuyễn và các gia vị khác để thấm đều hương vị',
//     isFavorite: true
//   }
// ]



const Danhsachyeuthich = ({ navigation }) => {
  const ImagePress = (productId) => {
    navigation.navigate('Chitietsanpham', { productId });
  };

  const [sanphamYeuthich, setSanphamYeuthich] = useState([]);

  const getAPI = () => {
    fetch('http://192.168.53.101:3000/Danhsachyeuthich')
      .then(response => response.json())
      .then(data => setSanphamYeuthich(data))
      .catch(error => console.log('Error fetching data:', error));
  };

  useEffect(() => {
    getAPI(); // Fetch data when the component mounts

    // Automatically reload data every 5 seconds
    const interval = setInterval(() => {
      getAPI();
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const Remove = (productId) => {
    fetch(`http://192.168.53.101:3000/Danhsachyeuthich/${productId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          const updatedData = sanphamYeuthich.filter(item => item.id !== productId);
          setSanphamYeuthich(updatedData);
        } else {
          console.log('Error deleting product:', response.status);
        }
      })
      .catch(error => console.log('Error deleting product:', error));
  };

  const reloadAPI = () => {
    getAPI();
  };

  const renderSanPham = ({ item }) => (
    <TouchableOpacity onPress={() => ImagePress(item.id)}>
      <View style={styles.productItem}>
        <Text style={styles.productName}>{item.name}</Text>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <TouchableOpacity style={{ width: 50, marginTop: 10 }} onPress={() => Remove(item.id)}>
          <Text style={styles.removeButton}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const danhsachyeuthich = sanphamYeuthich.filter(item => item.isFavorite);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Danh sách yêu thích</Text>
      <TouchableOpacity style={{ marginBottom: 10 }} onPress={reloadAPI}>
        {/* <Text style={styles.reloadButton}>Reload</Text> */}
      </TouchableOpacity>
      {danhsachyeuthich.length > 0 ? (
        <FlatList
          data={danhsachyeuthich}
          renderItem={renderSanPham}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>Không có sản phẩm yêu thích nào.</Text>
      )}
    </View>
  );
};
export default Danhsachyeuthich;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginTop: 10,
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
  },
  productItem: {
    margin: 10,
  },
  productName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productImage: {
    width: 400,
    height: 200,
    borderRadius: 20,
  },
  removeButton: {
    fontWeight: 'bold',
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',

  }
});
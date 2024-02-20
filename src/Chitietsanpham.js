import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ChiTietSanPham = ({ route, navigation }) => {
  const { productId, onAddProductId } = route.params;
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [loading, setLoading] = useState(false);


  const fetchProductDetails = () => {
    setLoading(true);
    fetch(`http://192.168.53.101:3000/product/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setIsFavorite(data.isFavorite || false);
      })
      .catch(error => console.log('Error fetching product details:', error))
      .finally(() => setLoading(false));
  };

  const handleEditProduct = () => {
    navigation.navigate('SuaSanPham', { product });
  };


  const handleSendProductData = () => {
    fetch('http://192.168.53.101:3000/Giohang', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => response.json())
      .then(data => {
        // Xử lý phản hồi từ API nếu cần
        navigation.navigate('Giohang')
        console.log('Success:', data);
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetch(`http://192.168.53.101:3000/product/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log('Error fetching product details:', error));
    //   const interval = setInterval(fetchProductDetails, 5000); // Refresh every 5 seconds

    // // Cleanup function to clear the interval on unmount
    // return () => clearInterval(interval);
  }, [productId]);

  const handleToggleFavorite = () => {
    const updatedProduct = { ...product, isFavorite: !isFavorite };
  
    fetch(`http://192.168.53.101:3000/Danhsachyeuthich`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setIsFavorite(!isFavorite);
        // Refresh the favorite list after adding the product
        getAPI();
      })
      .catch(error => console.log('Error adding product:', error));
  };

  const handleDeleteProduct = () => {
    fetch(`http://192.168.53.101:3000/product/${productId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Xóa thành công, tải lại dữ liệu
          setIsDataLoaded(false);
          navigation.goBack();
        } else {
          console.log('Error deleting product');
        }
      })
      .catch(error => console.log('Error deleting product:', error));
  };

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5700/5700554.png' }} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
      <View>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      <View style={{ flexDirection: 'row', top: 20 }}>
        <Text style={styles.title}>{product.name}</Text>
        {!isFavorite && (
          <TouchableOpacity style={{}} onPress={handleToggleFavorite}>
            <Image source={{ uri: 'https://img.icons8.com/?size=80&id=gaSJyCUUJ3jV&format=png' }} style={styles.favoriteIconI} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.price}>{product.price} VND</Text>
      <TouchableOpacity style={styles.editButton} onPress={handleEditProduct}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <Text style={{ color: 'black' }}>Mô tả</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          top: 170
        }}
      >

        <TouchableOpacity style={[styles.deleteButton, { marginRight: 290 }]} onPress={handleDeleteProduct}>
          <Image source={{ uri: 'https://img.icons8.com/?size=24&id=99961&format=png' }} style={styles.favoriteIconW} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ marginLeft: 80, marginRight: 10, backgroundColor: 'red', top: 140, borderRadius: 20 }}
        onPress={handleSendProductData}
      >
        {/* <Image source={{ uri: '' }} style={{ width: 70, height: 70 }} /> */}
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Thêm Vào Giỏ Hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white'
  },
  image: {
    width: 400,
    height: 200,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
  },
  price: {
    fontSize: 20,
    marginBottom: 8,
    color: 'red',
    top: 10
  },
  description: {
    fontSize: 20,
  },
  favoriteIconI: {
    width: 40,
    height: 40,
    // marginLeft: 290
    left: 50
  },
  favoriteIconW: {
    width: 40,
    height: 40,
    marginLeft: 20,
    backgroundColor: 'white',
    borderColor: 'red',
    borderRadius: 20
  },
});

export default ChiTietSanPham;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SuaSanPham = ({ route, navigation }) => {
  const { product } = route.params;
  const [editedName, setEditedName] = useState(product.name);
  const [editedPrice, setEditedPrice] = useState(product.price.toString());

  const handleSaveChanges = () => {
    // Prepare the updated product object with only name and price changed
    const updatedProduct = {
      ...product,
      name: editedName,
      price: parseFloat(editedPrice)
    };

    // Send updated product data to the server
    fetch(`http://192.168.53.101:3000/product/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => response.json())
      .then(data => {
        // Handle successful update if needed
        console.log('Updated product:', data);
        // Navigate back to product details screen
        navigation.goBack();
      })
      .catch(error => {
        // Handle error if any
        console.error('Error updating product:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={editedName}
        onChangeText={text => setEditedName(text)}
      />
      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={editedPrice}
        onChangeText={text => setEditedPrice(text)}
        keyboardType="numeric"
      />
      {/* Additional fields for other properties if needed */}
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
});

export default SuaSanPham;
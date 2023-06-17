import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ProductDetailsScreenStyles';

const ProductDetailsScreen = ({ navigation, route }) => {
  const { itemName, itemPrice, itemDesc, itemStock, itemImg } = route.params ?? {};

  const [quantity, setQuantity] = useState(itemStock > 0 ? 1 : 0);

  useEffect(() => {
    if (itemStock === 0) {
      setQuantity(0);
    }
  }, [itemStock]);

  console.log(itemImg);

  const handleAddToCart = () => {
    // Handle adding the product to the cart
    //console.log(`Added ${quantity} ${product.name} to cart`);
    // You can implement the cart functionality here, such as storing the product in a cart state or sending it to a server
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < itemStock) {
      setQuantity(quantity + 1);
    }
  };
  const navigationBack = () => {
    setQuantity(itemStock > 0 ? 1 : 0);
    navigation.navigate('Stickers');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigationBack} style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.productContainer}>
        <Image style={styles.image} source={{ uri: itemImg }} />
        <Text style={styles.productName}>{itemName}</Text>
        <Text style={styles.productPrice}>Price: ${itemPrice}</Text>
        <Text style={styles.productDescription}>{itemDesc}</Text>
        <Text style={styles.productDescription}>Stock: {itemStock} </Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={decrementQuantity}
            disabled={quantity <= 1 || quantity > itemStock}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={incrementQuantity}
            disabled={quantity >= itemStock}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
          disabled={quantity > itemStock || itemStock === 0}
        >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

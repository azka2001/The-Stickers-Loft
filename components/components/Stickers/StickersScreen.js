import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import { stickersStyles } from './StickersScreenStyles';
import { FlatList } from 'react-native-gesture-handler';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const StickersScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'thestickersloft'), snapshot => {
      const products = [];
      snapshot.forEach(doc => {
        const { Description, ItemsInStock, Name, Price, image } = doc.data();
        products.push({
          id: doc.id,
          Description,
          ItemsInStock,
          Name,
          Price,
          image,
        });
      });
      setProducts(products);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={stickersStyles.container}>

      <View style={stickersStyles.headerContainer}>
      <Image source={require('../../assets/LOGO.png')} style={stickersStyles.logo} /> 
        <Text style={stickersStyles.headerText}>The Stickers Loft</Text>
      </View>

      <View style={stickersStyles.saleContainer}>
        <Text style={stickersStyles.saleText}>Eid Sale!</Text>
        
      </View>
      <Text style={stickersStyles.previewTitle}>Stickers</Text>
      <ScrollView style={stickersStyles.previewContainer}>
        

        <FlatList
        numColumns={2}
          data={products}
          renderItem={({ item }) => (
            <Pressable style={{borderColor: 'white', margin: 10,}} onPress={() => navigation.navigate('Product', { 
              itemName : item.Name, 
              itemPrice : item.Price,
              itemDesc : item.Description,
              itemStock: item.ItemsInStock,
              itemImg : item.image
              })}>
              <View style={{justifyContent : 'center', alignItems: 'center'}}>
                <Image style={stickersStyles.image} source={{ uri: item.image }} />
                <Text style={stickersStyles.detailsTextTitle}>{item.Name}</Text>
                <Text style={stickersStyles.detailsText}>Price: ${item.Price}</Text>
                {item.ItemsInStock > 0 ? (
                  <Text style={stickersStyles.stockText}>In Stock!</Text>
                  ) : (
                  <Text style={stickersStyles.stockOutText}>Out of Stock.</Text>
                 )}
              </View>
            </Pressable>
          )}
        />

      </ScrollView>
    </View>
  );
};

export default StickersScreen;

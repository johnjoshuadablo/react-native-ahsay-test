import {map} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {getProducts} from '../api/RestApi';

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  const onMount = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  useEffect(() => {
    onMount();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <ActivityIndicator animating={products.length === 0} size={50} />
          {/**
           * Note:
           *  I did not use Flatlist because of the time limit an the items are only 5.
           */}
          {map(products, (item, i) => (
            <View key={i} style={styles.item}>
              <View>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View style={styles.detailContainer}>
                <View style={styles.originalContainer}>
                  <Text style={styles.originalSellingtxt}>
                    Original Selling
                  </Text>
                  <Text style={styles.time}>5 days ago</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.ogPrice}>{item.originalPrice}</Text>
                  <Text style={styles.sPrice}>{item.sellingPrice}</Text>
                </View>
                <View style={styles.specsContainer}>
                  <Text>{item.brand}</Text>
                  <Text>{item.type}</Text>
                  <Text>{item.category}</Text>
                </View>
              </View>
              <Text style={styles.arrow}>{'>'}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Pardon my inline hex colors.
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  item: {
    height: 130,
    width: '100%',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  name: {
    alignSelf: 'center',
  },
  originalContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 10,
    color: '#808080',
  },
  originalSellingtxt: {
    backgroundColor: '#0087E0',
    padding: 10,
    color: 'white',
  },
  detailContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
  },
  priceContainer: {
    flex: 1,
    color: 'green',
    justifyContent: 'center',
  },
  ogPrice: {
    fontSize: 20,
  },
  sPrice: {
    fontSize: 20,
    color: 'green',
  },
  arrowImage: {
    width: 100,
    height: '100%',
    backgroundColor: 'pink',
  },
  specsContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  arrow: {
    fontSize: 30,
  },
});

export default ListProduct;

import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Text , Image, SafeAreaView} from 'react-native';
import { Header, Card, ListItem, Button, Icon } from 'react-native-elements'

export class SplashScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Header
        backgroundColor= '#fff'
        // leftComponent={color: '#000'}}
        //TODO: create VERTO icon to add here
        centerComponent={{text: 'VERTO', style: {color: '#000'} }}
        // rightComponent={{icon: 'favorite', color:'#000'}}
      />
      {/* Products componet contains cards for each item listing */}
      <Welcome />
      <Products />
    </View>
  );
}
}

function Welcome() {
  return <Text style={styles.welcome}>Welcome back, Jennie!</Text>;
}

{/* Placeholder items */}
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    itemName: 'Iphone 11 Used',
    photoSrc: '../../assets/images/iphone11.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    itemName: 'Mens Coat',
    photoSrc: '../../assets/images/mens_coat.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    itemName: 'Minifridge Used',
    photoSrc: '../../assets/images/mens_coat.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
];

function Item({ name, photoSrc }) {
  return (
    <View style={styles.item}>
      {/* <Text style={styles.itemName}>{name}</Text>
      <Image></Image> */}
      <Card 
        title={name}
        image={require('../../assets/images/iphone11.jpg')}>
      <Text style={{marginBottom: 10}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
      </Card>
    </View>
  );
}

function Products() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item name={item.itemName} photoSrc={item.photoSrc} description={item.description} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
  welcome: {
    fontSize:20,
    padding:20,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemName: {
    fontSize: 15,
  },
});

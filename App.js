import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
const data = require("./data.json")

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default class App extends React.Component {
  renderRow({item}) {
    return(
    <View style={styles.item}>

      <View style={styles.iconContainer}>
        <Image source={require("./assets/chicago.png")} style={styles.itemPicture}></Image>
      </View>
      
  
      <View style={styles.info}>
        <Text style={styles.itemTitle}> {item.title} </Text>  
        <Text style={styles.address}> {item.address} </Text>
        <Text style={styles.website}> {item.website} </Text>
      </View>
  
      
    </View>
  );
    }

  render (){
    return(
    <View style={styles.container}>
      <StatusBar style='backgroundColor: "#1c7da5"'></StatusBar>
      <Text style={styles.title}>City Guide</Text>
      
      <FlatList data={data.data} renderItem={this.renderRow} />
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede2e0',
    
    
  },

  title: {
    backgroundColor: "#1c7da5",
    color: "#ede2e0",
    width: "100%",
    height: "10%",
    top: "0%",
    textAlign: "center",
    paddingTop: "10%",
    fontSize: 20
  },

  item: {
    width: "95%",
    alignSelf: "center",
    margin: "10%",
    padding: "5%",
    borderBottomColor: "#7b7983",
    borderBottomWidth: 1,
    margin: 0,
    left: 0,
    flexDirection: 'row',
  },

  itemPicture:{
    
    height: 45,
    width: 45,
    borderRadius: 100,
  },

  itemTitle:{
    fontWeight: 'bold',
    color: "#122737",
    fontSize: 18,
  },

  info:{
    marginLeft: 15,
    justifyContent: "center",
    flex: 1,
  },

  address: {
    color: "#3c4f62",
    fontSize: 16
  },

  website: {
    color: "#3c4f62",
    fontSize: 16,
    fontStyle: "italic"
  },

  iconContainer:{
    width: 70,
    height: 70,
    backgroundColor: "#1f3243",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  }
});

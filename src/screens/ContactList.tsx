import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Button
} from 'react-native';
import Database from '../database/db';

export default class Craigslist extends Component {

  constructor(props:any) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      cdata: []
    };
    this.getContactList = this.getContactList.bind(this);

    this.getContactList();
  }


  getContactList(){
    const db = new Database();
    db.listContact().then((data) => {
      this.setState({
        cdata: data,
      });
      }).catch((err) => {
        console.log(err);
     
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.getContactList} title="Reload Data"></Button>
        <FlatList 
          style={styles.contentList}
          data={this.state.cdata}
          extraData={this.state}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Image style={styles.image} source={{uri: 'data:image/jpeg;base64,'+item.imageName}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>{item.email}</Text>
                <Text style={styles.count}>{item.country}</Text>                
              </View>
              </View>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
});  
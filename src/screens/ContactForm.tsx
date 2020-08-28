import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Image, Alert, FlatList } from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import credentials from "../../credentials.json";
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Navigation } from '../navigationconfig';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import Database from '../database/db';
import Select2 from "react-native-select-two";

type Props = {
  navigation: Navigation;
};
interface countryList {
  countryName: string;
}
interface contactInfo {
  name: string | undefined,
  country: string | undefined,
  email: string | undefined,
  imageName: string | undefined,
  isLoading: Boolean | undefined,
  text: string | undefined,
  arrayholder: object | undefined
}


class ContactForm extends React.Component<any, contactInfo>  {

  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      country: '',
      email: '',
      imageName: '',
      isLoading: true,
      text: '',
      arrayholder: []
    }


    this.fetchcountry();
    this.chooseImage = this.chooseImage.bind(this);

  }
  _onLoginPressed() {
    if (this.state.name != '' && this.state.email != '' && this.state.country != '' && this.state.imageName != '') {
      const db = new Database();
      let dataelem = {
        name: this.state.name,
        email: this.state.email,
        country: this.state.country[0],
        imageName: this.state.imageName
      }

      db.addContact(dataelem).then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
        this.setState({
          isLoading: false,
        });
      })
      this.setState({
        name: '',
        country: '',
        email: '',
        imageName: '',
      });
      this.props.navigation.navigate("List");
    } else {
      Alert.alert("All Fields are Manadatory");
    }
  }
  chooseImage() {
    let options = {
      title: 'Select Image',
      customButtons: [
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.1, base64: true,
    };
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // alert(response.customButton);
      } else {
        // console.log(response.fileName);
        this.setState({
          imageName: response.data,
        });
      }
    });
  }

  async fetchcountry() {
    const dataarray: any = [];
    return fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);

        responseJson.forEach(element => {

          let obj = {
            id: element.name,
            name: element.name,
          }
          dataarray.push(obj);

        });
        this.setState({ arrayholder: dataarray });

      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {

    return (
      <Background>
        <Header>Contact Form</Header>

        <Input
          placeholder="Name"
          onChangeText={(value) => this.setState({ name: value })}
          value={this.state.name}
        />
        <Input
          placeholder="Email"
          onChangeText={(value) => this.setState({ email: value })}
          value={this.state.email}

        />

        <Select2
          style={styles.selectstyle}
          isSelectSingle
          colorTheme={"#E9446A"}
          popupTitle="Select Country"
          title="Select Country"
          data={this.state.arrayholder}
          onSelect={data => {
            this.setState({ country: data });
          }}
          onRemoveItem={data => {
            this.setState({ country: data });
          }}
          selectButtonText="Choose"
          cancelButtonText="Cancel"
          searchPlaceHolderText="Search.."
          listEmptyTitle="No items Found!"
          showSearchBox={true}
        />
        <View style={styles.btnParentSection}>
          <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}>
            <Text style={styles.btnText}>Select Image </Text>
            <Icon name='camera' size={22} color="#fff" />
          </TouchableOpacity>
        </View>


        <Button title="Save" onPress={this._onLoginPressed.bind(this)} icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
          iconRight />


      </Background>
    );
  }
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: "#000",
  },
  link: {
    fontWeight: 'bold',
    color: "blue",
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#61d4b3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
    flexDirection: "row",
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  selectstyle: {
    borderRadius: 5,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingHorizontal: 10,
    borderColor: 'black',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
  },
});

export default memo(ContactForm);
import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
// import Button from '../components/Button';
import { Navigation } from '../navigationconfig';
import Geolocation from '@react-native-community/geolocation';

type Props = {
  navigation: Navigation;
};
interface weatherInfo {
  city: string | undefined,
  country: string | undefined,
  population: string | undefined,
  description: string | undefined,
  error: string | undefined,
  latitude: number | undefined,
  longitude: number | undefined,
}
class Weather extends React.Component<{}, weatherInfo> {

  constructor(props: any) {
    super(props);
    this.state = {
      country: undefined,
      city: undefined,
      population: undefined,
      description: undefined,
      error: undefined,
      latitude: undefined,
      longitude: undefined,
    }
    this.findCoordinated();
  }
  findCoordinated(){
    Geolocation.getCurrentPosition(info => console.log(info.coords.latitude));
    Geolocation.getCurrentPosition(info =>
      this.getWeather(info.coords.latitude,info.coords.longitude)
      );
      console.log(this.state);

  }
  getWeather(latitude:any,longititude:any) {
    const lat = latitude;
    const long = longititude;
    console.log(this.state);
    let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&units=metric&appid=fda417febe1a7a5f29f83449ef6985b6';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Today Weather
        if (lat && long) {
          this.setState({
            country: data.city.country,
            city: data.city.name,
            population: data.city.population,
            description: data.list[0].weather[0].description,
            error: ""
          });
        } else {
          this.setState({
            city: undefined,
            country: undefined,
            population: undefined,
            description: undefined,
            error: "Not Found"
          });
        }
      });



  }

  render() {
    const data = this.state;
    return (
      <Background>

        <Header>Today Weather: {data.description}</Header>
        <Paragraph>
          City : {data.city}

        </Paragraph>
        <Paragraph>

          Country : {data.country}
        </Paragraph>
        <Paragraph>

          Population : {data.population}
        </Paragraph>
      </Background>
    );
  }
}

export default Weather;
import React,{Component} from 'react';
import { 
  ActivityIndicator,
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Alert, 
  StatusBar, 
  ScrollView 
} from 'react-native';
import Header from './src/component/Header';
import RestaurantList from './src/component/RestaurantList';
import axios from "axios";

interface State {
  isLoading: boolean;
  restaurants: any[];
}

export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      restaurants: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = ()=> {
    axios.get("https://developers.zomato.com/api/v2.1/search?count=10", {
      headers: {
        "user-key": "7ec306ccd6ea82ae3d996aa9e152b9df"
      }
    })
    .then(response => {
      console.log(response.data.restaurants)
      const restaurants = response.data.restaurants.map((item: any)=>{
        const restaurant = item.restaurant;

        return {
          id: restaurant.id,
          name: restaurant.name,
          address: restaurant.location.address
        }
      })

      this.setState({
        restaurants,
        isLoading: false
      })
    })
    .catch(error => {
      console.log(error)
    });
  };

  render() {
    return (
      <View>
        <Header/>
        {this.state.isLoading && <ActivityIndicator size="large" />}

        <RestaurantList restaurants={this.state.restaurants} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
});

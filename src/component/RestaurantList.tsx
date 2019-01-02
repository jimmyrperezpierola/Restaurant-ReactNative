import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import RestaurantItem from './RestaurantItem';


interface State {
    
}
interface Restaurant {
    id: number
    name: string
}
interface Props{
    restaurants: Restaurant[]
}

export default class RestaurantList extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <ScrollView style={style.container}>
                {this.props.restaurants.map(restaurant => {
                    return <RestaurantItem key={restaurant.id} name={restaurant.name} />;
                })}
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    container : {
        paddingLeft:8,
        paddingRight:8
    }
});
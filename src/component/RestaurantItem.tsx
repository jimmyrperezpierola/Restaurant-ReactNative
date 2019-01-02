import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// deklarasikan tipe data restaurant
interface Props {
	name: string;
}

interface State {
	isFavorite: boolean;
}

export default class RestaurantItem extends Component<Props, State> {
	state = {
		isFavorite: false,
	};

	setFavoriteTrue = () => {
		this.setState({
			isFavorite: !this.state.isFavorite,
		});
	};

	render() {

		return (
			<TouchableOpacity onPress={this.setFavoriteTrue}>
				<View style={style.container}>
					{/* membuat props */}
					<Text>{this.props.name}</Text>
					{this.state.isFavorite == true && <Text>Favorite</Text>}
				</View>
			</TouchableOpacity>
		);
	}
}

const style = StyleSheet.create({
	container: {
		height: 70,
    borderWidth: 1,
    marginTop:10,
    padding: 8
	},
});

import React from "react";
import {
	StyleSheet,
	View,
	Text
} from 'react-native'

class DashBoard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false
		}
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>Dashboard</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default DashBoard;
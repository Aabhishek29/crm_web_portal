import React from "react";
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import { COLOR } from "../utils/colors";


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			theme: "dark"
		}
	}

	render(){
		const {
			theme
		} = this.state;
		return(
			<View style={styles.container}>
				<View style={styles.subContainer}>
					<Text style={styles.heading}>Login</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR.PRIMARY_DARK_COLOR,
		justifyContent: 'center',
		alignItems: 'center'

	},
	subContainer: {
		width: '40%',
		backgroundColor: COLOR.WHITE,
		justifyContent: 'center',
		alignItems: 'center'
	},
	heading: {
		color: COLOR.HEADING_COLOR,
		fontSize: 32,
		fontWeight: '700'
	}
})

export default Login;
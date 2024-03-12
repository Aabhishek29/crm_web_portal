import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput
} from 'react-native';
import { COLOR } from "../utils/colors";


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		}
	}

	render() {
		const {
			username,
			password
		} = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.subContainer}>
					<Text style={styles.heading}>Login to sabkamistry</Text>
					<View style={{width: "60%", marginTop: 20}}>
						<Text style={{color: "#ccc", fontWeight: "500"}}>USERNAME</Text>
						<TextInput
							style={styles.input}
							onChangeText={(val)=>this.setState({username: val})}
							value={username}
							placeholder="USERNAME"
							placeholderTextColor={"#cccccc"}
						/>
					</View>
					<View style={{width: "60%", marginTop: 20}}>
						<Text style={{color: "#ccc", fontWeight: "500"}}>PASSWORD</Text>
						<TextInput
							style={styles.input}
							onChangeText={(val)=>this.setState({password: val})}
							value={password}
							placeholder="USERNAME"
							placeholderTextColor={"#cccccc"}
						/>
					</View>
					<TouchableOpacity style={styles.loginBtn}>
						<Text style={{ color: "#fff", fontWeight: '500' }}>Log In</Text>
					</TouchableOpacity>
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
		alignItems: 'center',
		padding: 30
	},
	heading: {
		color: COLOR.HEADING_COLOR,
		fontSize: 32,
		fontWeight: '700'
	},
	input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
		borderColor: "#cccccc",
    padding: 10,
  },
	loginBtn: {
		backgroundColor: COLOR.COLOR_PRIMARY,
		width: 150,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default Login;
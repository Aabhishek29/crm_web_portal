import React from "react";
import {
	View,
	Text
} from 'react-native';


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		}
	}

	render(){
		return(
			<View>
				<Text>Login</Text>
			</View>
		)
	}
}

export default Login;
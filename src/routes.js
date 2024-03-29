import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./screen/login";
import DashBoard from "./screen/dashboard";

const prefix = Linking.createURL('/');

const Stack = createStackNavigator();

const linking = {
	prefixes: [
		"http://localhost:8081",
	],
	screens: {
		App: {
			path: "/",
			Screen: {
				Login: '/',
				DashBoard: '/dashboard'
			}
		}
	}
};


const Routes = (props) => {
	return (
		<NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
				<Stack.Screen name="Dashboard" component={DashBoard} options={{ headerShown: false }}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}


export default Routes;
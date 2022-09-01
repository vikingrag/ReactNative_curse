import * as React from 'react';
import Main from './components/Main';
import FullInfo from './components/FullInfo';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Navigate () {
	return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
			name='Main'
			component={Main}
			options={
				{
					title:'Главная',
					headerStyle:{ backgroundColor:'#eb5d3d', height: 100 },
					headerTitleStyle: { fontWeight: 'normal', fontSize: 30, }

			}
		}
			/>			
			<Stack.Screen
			name='FullInfo'
			component={FullInfo}
			options={{title:'Что пишут'}}
			/>
			
		</Stack.Navigator>
	</NavigationContainer>
	)
}
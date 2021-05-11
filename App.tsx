import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { ComponentsScreen, FlatListScreen, HomeScreen, ImageScreen } from './src/screens';

// createStackNavigator adds props to all screens automatically
// https://reactnavigation.org/docs/typescript/
type RootStackParamList = {
    Home: { menu: typeof AppNavMenuKeysArr };
    Components: { menu: typeof AppNavMenuKeysArr };
    FlatList: { menu: typeof AppNavMenuKeysArr };
    Image: { menu: typeof AppNavMenuKeysArr };
};

export const AppNavMenu = new Map<any, { screen: React.ComponentType<any> }>([
    ['Home', { screen: HomeScreen }],
    ['Components', { screen: ComponentsScreen }],
    ['FlatList', { screen: FlatListScreen }],
    ['Image', { screen: ImageScreen }],
]);

export const AppNavMenuKeysArr = [...AppNavMenu.keys()];

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                {[...AppNavMenu.entries()].map(([key, value]) => {
                    return (
                        <Stack.Screen
                            initialParams={{ menu: AppNavMenuKeysArr }}
                            key={key}
                            name={key}
                            component={value.screen}
                        />
                    );
                })}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

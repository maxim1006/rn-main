import React, { memo } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import NavMenu from '../components/nav-menu/nav-menu.component';

type ComponentsScreenProps = {
    navigation?: StackNavigationProp<any, any>;
};

const ComponentsScreen = memo<ComponentsScreenProps>(({ navigation }) => {
    const name = 'Max';

    return (
        <View>
            <NavMenu />
            <Text style={styles.text}>Components screen2</Text>
            <Text style={styles.title}>Simple Component</Text>
            <Text style={styles.text1}>{name}</Text>
            <Text style={styles.title}>Buttons</Text>
            <Button title='Go to components Demo' onPress={() => console.log('Button clicked')} />
            <TouchableOpacity
                onPress={() => {
                    console.log('TouchableOpacity clicked');
                    navigation?.navigate('Components');
                }}
            >
                <Text style={styles.touchableOpacity}>Whole block</Text>
                <Text style={styles.touchableOpacity}>will be</Text>
                <Text style={styles.touchableOpacity}>Pressed</Text>
                <Text style={styles.touchableOpacity}>Go to components Screen</Text>
            </TouchableOpacity>
        </View>
    );
});

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    touchableOpacity: {
        fontSize: 18,
        color: '#007AFF',
    },
    text: {
        fontSize: 30,
    },
    text1: {
        fontSize: 14,
    },
});

export default ComponentsScreen;

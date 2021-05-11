import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import NavMenu from '../components/nav-menu/nav-menu.component';
import { useRoute } from '@react-navigation/native';

type HomeScreenProps = {
    navigation?: StackNavigationProp<any, any>;
};

const HomeScreen = memo<HomeScreenProps>(() => {
    const route = useRoute();

    return (
        <View>
            <NavMenu />
            <Text style={styles.text}>HomeScreen</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;

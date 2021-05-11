import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import NavMenu from '../components/nav-menu/nav-menu.component';
import ImageDetail from '../components/image-detail/image-detail.component';

type ImageScreenProps = {
    navigation?: StackNavigationProp<any, any>;
};

const ImageScreen = memo<ImageScreenProps>(({}) => {
    return (
        <View>
            <NavMenu />
            <ImageDetail score={1} imageSource={require('../../assets/forest.jpg')} title='Forest' />
            <ImageDetail score={5} imageSource={require('../../assets/beach.jpg')} title='Beach' />
            <ImageDetail score={10} imageSource={require('../../assets/mountain.jpg')} title='Mountain' />
        </View>
    );
});

const styles = StyleSheet.create({});

export default ImageScreen;

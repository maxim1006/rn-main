import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type ImageDetailProps = {
    title: string;
    imageSource: number;
    score?: number;
};

const ImageDetail = memo<ImageDetailProps>(({ title, imageSource, score }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Score {score}</Text>
        </View>
    );
});

const styles = StyleSheet.create({});

export default ImageDetail;

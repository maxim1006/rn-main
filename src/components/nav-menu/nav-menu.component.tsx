import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';

type NavMenuProps = {
    menu?: string[];
    navigation?: StackNavigationProp<any, any>;
};

const NavMenu = memo<NavMenuProps>(({ menu }) => {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const currentMenu = menu || (route?.params as { menu: string[] })?.menu;

    return (
        <View style={styles.view}>
            {currentMenu?.map((i: string) => (
                <TouchableOpacity
                    key={i}
                    onPress={() => {
                        navigation?.navigate(i);
                    }}
                >
                    <Text style={route.name === i ? styles.touchableOpacityTextCurrent : styles.touchableOpacityText}>
                        {i}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
});

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    text: {
        fontSize: 30,
    },
    touchableOpacityText: {
        fontSize: 18,
        marginRight: 20,
        color: '#007AFF',
    },
    touchableOpacityTextCurrent: {
        fontSize: 18,
        marginRight: 20,
    },
});

export default NavMenu;

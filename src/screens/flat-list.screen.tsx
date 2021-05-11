import React, { memo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import NavMenu from '../components/nav-menu/nav-menu.component';

type FlatListScreenProps = {};

const FlatListScreen = memo<FlatListScreenProps>(() => {
    const [data, setData] = useState(() => [
        {
            name: 'Max',
            age: 33,
        },
        {
            name: 'Aliya',
            age: 34,
        },
        {
            name: 'Lili',
            age: 5,
        },
        {
            name: 'Alice',
            age: 2,
        },
    ]);

    return (
        <View>
            <NavMenu />
            <FlatList
                // 2 варианта прокидывания key
                // horizontal // сделать лист горизонтальным
                // showsHorizontalScrollIndicator={false} // когда большой лист снизу не показывать полосу прокрутки
                // это первый, а второй - просто добавить key prop к объекту data и это свойство подхватиться автоматом
                keyExtractor={item => item.name}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.textStyle}>
                            {item.name}: {item.age}
                        </Text>
                    );
                }}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    text1: {
        fontSize: 25,
    },
    textStyle: {
        marginVertical: 50,
    },
});

export default FlatListScreen;

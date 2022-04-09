import { View, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const User = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Hi user</Text>
            <TouchableOpacity onPress={() => navigation.push('UserAccount')}>
                <Image style={styles.img} source={require('../assets/icon.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#f4f0ec',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#f8f4f4",
        paddingBottom: 10,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginVertical: 10,
        marginHorizontal: 15,
        marginLeft: 'auto'
    },
    txt: {
        marginLeft: 'auto',
        marginVertical: 10,
        marginHorizontal: 15,
        fontWeight: 'bold'
    }
})

export default User
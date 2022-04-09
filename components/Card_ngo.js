import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Card_ngo = () => {
    return (
        <View style={styles.card}>
            <View style={styles.img_container}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../assets/icon.png')} />
            </View>
            <View style={styles.txt_container}>
                <View>
                    <Text>Header</Text>
                    <Text style={{
                        fontWeight: 'bold'
                    }}>sub-header</Text>
                </View>
                <View >
                    <Text>
                        19/02/21
                    </Text>
                    <Text
                        style={{
                            color: 'tomato',
                            paddingTop: 1,
                            fontWeight: '900'
                        }}
                    >
                        See Details
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        height: 200,
        borderWidth: 0.5,
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    img_container: {
        marginVertical: 10,
        width: '45%',
        height: '90%',
    },
    txt_container: {
        marginVertical: 15,
        width: '100%',
        flexShrink: 1,
        paddingLeft: 15,
        justifyContent: 'space-evenly'
    }
})

export default Card_ngo
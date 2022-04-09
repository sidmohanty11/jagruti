import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Platform,
    StatusBar,
    ScrollView
} from 'react-native'
import React from 'react'
import Card_ngo from '../components/Card_ngo'

const Events = () => {
    return (
        <>
            
            <View style={{
                flex: 1
            }}>
                <ScrollView style={{
                    flex: 1
                }}
                showsVerticalScrollIndicator={false}>
                    <View style={styles.slide_container}>
                        <Text style={styles.txt}>Events near you...</Text>
                        <Card_ngo />
                        <Card_ngo />
                        <Card_ngo />
                        <Card_ngo />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    slide_container: {
        alignItems: 'center',
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#535353',
        marginBottom: 40
    }
})
export default Events
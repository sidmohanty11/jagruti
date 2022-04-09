import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const UserAccount = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.info_container}>
                <View>
                    <Image style={styles.img} source={require('../assets/icon.png')} />
                </View>
                <View style={styles.info}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Username</Text>
                    <Text>Usergmailaddress@gmail.com</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.box} onPress={() => navigation.push("MyDonations")}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>My Donations</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box, { borderBottomWidth: 0 }]}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>My Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box, { marginTop: 20, borderBottomWidth: 0 }]}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    info_container: {
        marginTop: 20,
        marginBottom: 60,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    info: {
        paddingLeft: 20
    },
    box: {
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        padding: 20,
    }

})

export default UserAccount
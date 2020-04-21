import React from 'react'
import { StyleSheet, Text, View, ScrollView,Image, ImageBackground } from 'react-native'
import { DrawerNavigatorItems} from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons'
const SideBar = (props) => {
    return (
        <ScrollView>
            <ImageBackground source={require('../assets/background8.png')} style={styles.backgroundImg} >
                <Image source={require('../assets/profile.png')} style={styles.profileImg} />
                <Text style={styles.name}>Ashiqur Rahman</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.followers}>950 Followers </Text>
                    <Ionicons name="md-people" size={16} color="rgba(255,255,255, 0.8)" />
                </View>
            </ImageBackground>
            <View style={styles.container}>
                <DrawerNavigatorItems {...props}/>
            </View>
        </ScrollView>
    )
}

export default SideBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImg: {
        width: undefined,
        padding: 16,
        paddingTop: 48,
    },
    profileImg: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8,
    },
    followers: {
        color: "rgba(255,255,255, 0.8)",
        fontSize: 13,
        marginRight: 4,
    }

})

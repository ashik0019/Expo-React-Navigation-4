import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'


class Screen extends Component {
    constructor(props) {
        super(props)
    
    }
    
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.touchAble} onPress={this.props.navigation.openDrawer}>
                    <FontAwesome5 name="bars" size={24} color="#161924" />
                    </TouchableOpacity>
                </SafeAreaView>
                <View style={styles.contentView}>
                    <Text style={styles.text}>{this.props.name} Screen</Text>
                    <Text style={styles.textContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
            </View>
        )
    }
}

export default Screen

const styles = StyleSheet.create({
    container: {
         flex: 1,
        backgroundColor: '#FFF',
        marginTop:16
    },
    touchAble: {
        alignItems: 'flex-end',
        margin: 16,
    },
    text: {
        color: '#161924',
        fontSize: 24,
        fontWeight: '800',
    },
    contentView: {
        flex:2,
        marginTop: 100,
        //justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textContent: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding:10,
        margin: 10,
        marginRight: 23,
    
        
    }
})

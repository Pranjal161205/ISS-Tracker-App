import React, { Component } from 'react';
import { Text, View,StyleSheet, SafeAreaView,Platform,TouchableOpacity,ImageBackground } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView style={styles.safearea}></SafeAreaView>
                    <ImageBackground source={require('assets/bg.png')} style={styles.Imageback}></ImageBackground>
                    <View style={styles.titlebar}>
                <Text style={styles.titleText}>ISS tracker App</Text>
                </View>

                <TouchableOpacity style = {styles.routeCard}>
                    <Text style = {styles.routeText}>ISS Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.routeCard}>
                    <Text style = {styles.routeText}>Meteors</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    titleText: {
        fontSize: 40,
        color: 'green',
        fontWeight: 'bold'
    },
    safearea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
    },
    titlebar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'blue'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    Imageback: {
        flex: 1,
        resizeMode: 'cover'
    }
  });
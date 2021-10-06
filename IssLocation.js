import React, { Component } from 'react';
import { Alert, Text, View, ImageBackground } from 'react-native';
import MapView, {Marker} from 'react-native-maps'; 

export default class IssLocationScreen extends Component {
    constructor(){
        super()
        this.state = {
            location: {},
        }
    }
componentDidMount(){
    this.getISSLocation()
}


getISSLocation = () =>{
    axios.get("https://api.wheretheiss.at/v1/satellites/25544")
    .then(response => {
        this.setState({Location: response.data})
    })
    .catch(error =>{
        Alert.alert(error.message)
    })
}

    render() {
        if(Object.keys(this.state.location.length === 0)){
            return(
                <View style={styles.container}>
                     <Text style = {styles.titleText}>Loading..</Text>
                </View>    
            )
        }
        else{
            
        
        return (
            <View
            style={styles.container}>
                <SafeAreaView style={styles.safearea}></SafeAreaView>
                <ImageBackground source={require('assets/bg.png')} style={styles.Imageback}></ImageBackground>
                <View style={styles.titlebar}>
            <Text style={styles.titleText}>ISS Location App</Text>
            </View>
            <View style = {styles.mapContainer}>
            <MapView style = {styles.map}
    Region={{
      latitude: this.state.location.latitude,
      longitude: this.state.location.longitude,
      latitudeDelta: 100,
      longitudeDelta: 100,
    }}>
        <Marker coordinate = {{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude  
        }}> 
        <Image source={require('assest/iss_icon.png')} style = {styles.Imageback}></Image>
        </Marker>
    </MapView>
            </View>
            </View>
        )
    }
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
    },
    mapContainer: {
        flex: 0.7,

    },
    map: {
        width: '100%',
        height: '100%'
    },
  });

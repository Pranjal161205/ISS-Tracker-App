import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import axios from "axios";
import { object } from 'prop-types';

export default class MeteorScreen extends Component {

    constructor(){
        super()
        this.state = {
            meteors: {}
        }
    }
    componentDidMount(){
        this.getMeteors()
    }

    getMeteors = ()=>{
        axios
        .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY")
        .then(response => {
            this.setState({meteors: response.data.near_earth_objects})
        })
        .catch(error =>{
            Alert.alert(error.message)
        })
    }
    keyExtractor = (item,index)=> index.toString()
    render() {
        if(Object.keys(this.state.meteors.length === 0)){
           return(
               <View style = {styles.container}>
                   <Text style = {styles.titleText}> Loading.. </Text>
               </View>
           ) 
        }
        else{
            let meteor_array = object.keys(this.state.meteors).map(meteor_date=>{
                return this.state.meteors [meteor_date]
            })
            let meteors = [].concat.apply([],meteor_array)
            meteors.forEach(function(element){
                let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max)/2
                let threatScore = (diameter/element.close_approach_data[0].miss_distance.kilometers) * 1000000000
                element.threat_Score = threatScore
            })
            meteors.sort(function(a,b){
                return b.threat_Score - a.threat_Score
            })
            meteors = meteors.slice(0,5)
        return (
            <View
            style = {styles.container}>
                <SafeAreaView style = {styles.safearea}></SafeAreaView>
                <FlatList 
                keyExtractor = {this.keyExtractor}
                data = {meteors}
                renderItem = {this.renderItem}
                horizontal = {true}
                >
                </FlatList>
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
})
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';



const FetchLocation = props => {


        return (
            <TouchableOpacity style={styles.button} onPress={props.onGetLocation} >
                <Text style={styles.Text}>Current Location</Text>
            </TouchableOpacity>
        );

};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: "lightgray",
        borderColor: "black",
        margin: 10,
        marginTop: 10,
    },
    Text:{
        textAlign: "center"
    }
});

export default FetchLocation


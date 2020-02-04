import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';



export default class SiamParagon extends React.Component {


    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={() =>
                this.props.moveMaptoLocation(this.props.marker.latlng)}>
                <Text style={styles.Text}>{this.props.marker.title}</Text>
            </TouchableOpacity>
        );
    };

}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: "lightgray",
        borderColor: "black",
        margin: 10,
    },
    Text:{
        textAlign: "center"
    }
});




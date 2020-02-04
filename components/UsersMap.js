import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import SiamParagon from './SiamParagon';
import FetchLocation from './FetchLocation';
import Geolocation from '@react-native-community/geolocation';

export default class UsersMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLocation: [],
            region: {
                latitude: 14.9951,
                longitude: 103.1116,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers: [
                { latlng: { latitude: 13.747125, longitude: 100.535332 }, title: "Siam Paragon", description: "สยามพารากอน" }
            ]
        };
        this.onRegionChange = this.onRegionChange.bind(this);
        this.moveMaptoLocation = this.moveMaptoLocation.bind(this);
    }
    getUserLocationHandler = () => {
        this.setState({ togle: true })
        Geolocation.getCurrentPosition(position => {
            console.log(position)
            this.setState({
                userLocation: {
                    latitude: position.coords.latitude,
                    longtitude: position.coords.longitude,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0421
                }
            });
        }, err => console.log(err),
        );
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    moveMaptoLocation(latlng) {
        this.setState({
            region: {
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                latitude: latlng.latitude,
                longitude: latlng.longitude
            }
        });
    }

    render() {
        return (
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}

                >
                    {this.state.markers.map((marker, i) => (
                        <MapView.Marker key={i}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
                {this.state.markers.map((marker, i) => (
                    <SiamParagon key={i}
                        moveMaptoLocation={this.moveMaptoLocation}
                        marker={marker}
                    />
                ))}
                <FetchLocation onGetLocation={this.getUserLocationHandler}>
                </FetchLocation>
                



            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 500,
        marginBottom: 20
    },
    map: {
        width: '100%',
        height: '100%',
    }
});






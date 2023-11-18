import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { useRouter } from "expo-router";

interface Props {
  listings: any;
}

const ListingsMap = ({ listings }: Props) => {
  const { push } = useRouter();

  // THIS IS THE INITIAL REGION AS PER THE STATIC DATA
  const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 9,
    longitudeDelta: 9,
  };
  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill}>
        {listings.features.map((item: any) => (
          <Marker
            coordinate={{
              latitude: +item.properties.latitude!,
              longitude: +item.properties.longitude!,
            }}
            tappable={true}
            key={item.properties.id}
          >
            <Callout onPress={() => push(`/listing/${item.properties.id}`)}>
              <TouchableOpacity style={styles.marker}>
                <Text style={styles.markerText}>€ {item.properties.price}</Text>
              </TouchableOpacity>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default ListingsMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "100%",
    width: "100%",
  },
  marker: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
  },
});

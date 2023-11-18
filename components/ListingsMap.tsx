import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// import MapView from "react-native-map-clustering";

interface Props {
  listings: any;
}

const ListingsMap = ({ listings }: Props) => {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsMyLocationButton={true}
        provider={PROVIDER_GOOGLE}
      />
      {/* {listings.features.map((item: any) => (
          <Marker
            coordinate={{
              latitude: +item.properties.latitude!,
              longitude: +item.properties.longitude!,
            }}
            key={item.properties.id}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>€ {item.properties.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView> */}
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

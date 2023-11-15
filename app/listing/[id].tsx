import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Animated, { SlideInDown } from "react-native-reanimated";
import listingsData from "../../assets/data/airbnb-listings.json";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const { width, height } = Dimensions.get("window");
const IMG_HEIGHT = height / 3;
const FOOTER_HEIGHT = height / 10;

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing = (listingsData as any[]).find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <Animated.ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Animated.Image
          source={{ uri: listing.xl_picture_url }}
          style={{ height: IMG_HEIGHT, width }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{listing.name}</Text>
          <Text style={styles.location}>
            {listing.room_type} in {listing.smart_location}
          </Text>
          <Text style={styles.rooms}>
            {listing.guests_included} guests · {listing.bedrooms} bedrooms ·{" "}
            {listing.beds} bed · {listing.bathrooms} bathrooms
          </Text>
          <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            <Ionicons name="star" size={16} color={"gold"} />
            <Text style={styles.ratings}>
              {listing.review_scores_rating / 20} · {listing.number_of_reviews}{" "}
              reviews
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.hostView}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <Image
                source={{ uri: listing.host_picture_url }}
                style={styles.host}
              />

              <View>
                <Text style={{ fontWeight: "500", fontSize: 16 }}>
                  Hosted by {listing.host_name}
                </Text>
                <Text>Host since {listing.host_since}</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
              <TouchableOpacity style={styles.btn}>
                <Ionicons name="call-outline" size={22} color={"white"} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Ionicons name="mail-outline" size={22} color={"white"} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.description}>{listing.description}</Text>
        </View>
      </Animated.ScrollView>
      <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <View>
              <Text style={{ fontWeight: "600", color: Colors.grey }}>
                Price
              </Text>
              <Text style={{ fontWeight: "900", fontSize: 18 }}>
                € {listing.price} night
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reserveBtn}>
            <Text style={{ color: "#fff", fontWeight: "800", fontSize: 14 }}>
              RESERVE
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FAF9F6",
  },
  infoContainer: {
    padding: 24,
    // backgroundColor: "#fff",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  location: {
    fontSize: 18,
    marginTop: 10,
  },
  rooms: {
    fontSize: 15,
    color: Colors.grey,
    marginVertical: 8,
    fontWeight: "800",
  },
  ratings: {
    fontSize: 15,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.grey,
    marginVertical: 16,
  },
  host: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  hostView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#66b2b2",
    padding: 5,
    borderRadius: 10,
  },
  footerText: {
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  footerPrice: {
    fontSize: 18,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.primary,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  // header: {
  //   backgroundColor: "#fff",
  //   height: 100,
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  //   borderColor: Colors.grey,
  // },

  description: {
    fontSize: 15,
    marginTop: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: FOOTER_HEIGHT,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  reserveBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
  },
});

export default Page;

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface ItemProps {
  item: any;
}

const ListingItem = ({ item }: ItemProps) => {
  const router = useRouter();
  return (
    <Animated.View style={styles.listing} entering={FadeIn} exiting={FadeOut}>
      <TouchableOpacity onPress={() => router.push(`/listing/${item.id}`)}>
        <Image source={{ uri: item.thumbnail_url }} style={styles.image} />
        <TouchableOpacity style={styles.favouriteBtn}>
          <Ionicons name="heart-outline" size={22} color="#000" />
        </TouchableOpacity>
        <View style={styles.titleHeader}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Ionicons name="star" size={16} color={"gold"} />
            <Text style={{ fontWeight: "600" }}>
              {item.review_scores_rating / 20}
            </Text>
          </View>
        </View>
        <View style={styles.location}>
          <Ionicons name="location-outline" size={15} color={"gray"} />
          <Text style={styles.locationText}>
            {item.city}, {item.country}
          </Text>
        </View>
        <View style={styles.roomDetails}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.roomInfo}>
              <Ionicons name="bed-outline" size={18} color={Colors.grey} />
              <Text style={{ fontWeight: "800" }}>{item.beds}</Text>
            </View>
            <Text style={styles.divider}>|</Text>
            <View style={styles.roomInfo}>
              <MaterialCommunityIcons
                name="shower"
                size={18}
                color={Colors.grey}
              />
              <Text style={{ fontWeight: "800" }}>{item.bathrooms}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              € {item.price} night
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ListingItem;

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  image: { height: 250, width: "100%", borderRadius: 20, objectFit: "cover" },
  favouriteBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 5,
  },
  titleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: "900",
    color: Colors.grey,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 1,
  },
  locationText: { fontWeight: "600", color: "gray", fontSize: 13 },
  roomDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  roomInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  divider: {
    fontSize: 18,
    color: "gray",
    fontWeight: "800",
    marginHorizontal: 10,
  },
});

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        renderItem={({ item, index }) => (
          <Link href={`/listing/${item.id}`} asChild={true}>
            <View style={styles.listing}>
              <TouchableOpacity>
                <Image source={{ uri: item.medium_url }} style={styles.image} />
                <TouchableOpacity
                  style={{ position: "absolute", right: 20, top: 20 }}
                >
                  <Ionicons name="heart-outline" size={24} color="#000" />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "900",
                      color: Colors.grey,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Ionicons name="star" size={16} color={"gold"} />
                    <Text style={{ fontWeight: "600" }}>
                      {item.review_scores_rating / 20}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 1,
                  }}
                >
                  <Ionicons name="location-outline" size={15} color={"gray"} />
                  <Text
                    style={{ fontWeight: "600", color: "gray", fontSize: 13 }}
                  >
                    {item.city}, {item.country}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Ionicons
                        name="bed-outline"
                        size={18}
                        color={Colors.grey}
                      />
                      <Text style={{ fontWeight: "800" }}>{item.beds}</Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        color: "gray",
                        fontWeight: "800",
                        marginHorizontal: 10,
                      }}
                    >
                      |
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <MaterialCommunityIcons
                        name="shower"
                        size={18}
                        color={Colors.grey}
                      />
                      <Text style={{ fontWeight: "800" }}>
                        {item.bathrooms}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      € {item.price} night
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </Link>
        )}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  image: { height: 250, width: "100%", borderRadius: 20 },
});

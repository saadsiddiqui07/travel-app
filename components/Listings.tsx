import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { FlashList, FlashListProps } from "@shopify/flash-list";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import ListingItem from "./ListingItem";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  const router = useRouter();
  const listRef = useRef<FlatList<any>>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [category]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        ref={listRef}
        showsVerticalScrollIndicator={false}
        data={loading ? [] : listings}
        // estimatedItemSize={160}
        renderItem={({ item, index }) => (
          // <Link href={`/listing/${item.id}`} asChild={true}>
          <ListingItem key={index} item={item} />
          // </Link>
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

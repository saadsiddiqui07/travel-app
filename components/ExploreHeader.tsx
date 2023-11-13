import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useRouter } from "expo-router";

const categories = [
  {
    name: "Tiny homes",
    icon: "home",
  },
  {
    name: "Cabins",
    icon: "house-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
];

const ExploreHeader = () => {
  const router = useRouter();

  const [selected, setSelected] = useState<any>();

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.mainHeader}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/(modals)/booking")}
            style={styles.searchBtn}
          >
            <View style={styles.search}>
              <Ionicons name="search" size={20} />
              <View style={{ marginLeft: 15 }}>
                <Text style={{ fontWeight: "600", fontSize: 14 }}>
                  Where to?
                </Text>
                <Text style={{ color: Colors.grey, fontSize: 12 }}>
                  Anywhere · Any week
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={22} />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            gap: 25,
            paddingHorizontal: 16,
            marginTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={styles.category}>
              <MaterialIcons
                name={item.icon as any}
                size={24}
                color={Colors.grey}
              />
              <Text style={{ color: "black", fontSize: 12, fontWeight: "700" }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 10,
    borderBottomColor: Colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // gap: 10,
  },
  searchBtn: {
    backgroundColor: "#fff",
    width: "80%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#c2c2c2",
    borderRadius: 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  filterBtn: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#A2A0A2",
    borderRadius: 24,
  },
  category: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
});

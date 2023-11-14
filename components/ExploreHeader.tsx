import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useRouter } from "expo-router";

interface Category {
  id: number;
  name: string;
  icon: string;
}

const categories = [
  {
    id: 1,
    name: "Tiny homes",
    icon: "home",
  },
  {
    id: 2,
    name: "Cabins",
    icon: "house-siding",
  },
  {
    id: 3,
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    id: 4,
    name: "Play",
    icon: "videogame-asset",
  },
  {
    id: 5,
    name: "City",
    icon: "apartment",
  },
  {
    id: 6,
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    id: 7,
    name: "Countryside",
    icon: "nature-people",
  },
];

interface Props {
  onCategoryChange: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChange }: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState<Category>(categories[0]);

  const handleSelectCategory = (category: Category) => {
    setSelected(category);
    onCategoryChange(category.name);
  };

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
          {categories.map((item, index) => {
            const isActive = selected?.name === item.name;
            return (
              <TouchableOpacity
                key={index}
                style={isActive ? styles.categoriesBtnActive : styles.category}
                onPress={() => handleSelectCategory(item)}
              >
                <MaterialIcons
                  name={item.icon as any}
                  size={24}
                  color={isActive ? "#000" : Colors.grey}
                />
                <Text style={isActive ? styles.textActive : styles.text}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
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
  categoriesBtnActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderBottomColor: "#000",
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
  text: { color: "black", fontSize: 12, fontWeight: "700" },
  textActive: { color: "#000", fontSize: 12, fontWeight: "700" },
});

import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import ListingItem from "./ListingItem";

interface Props {
  listings: any[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);
  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      index={1}
      style={styles.sheetContainer}
    >
      <BottomSheetScrollView>
        <View style={styles.header}>
          <Ionicons name="home" size={18} />
          <Text style={styles.title}>{listings.length} homes</Text>
        </View>
        <View style={{ flex: 1, paddingTop: 10 }}>
          {listings.slice(300).map((item, index) => (
            <ListingItem key={index} item={item} />
          ))}
          <Text>Hello bottomsheet</Text>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default ListingsBottomSheet;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontWeight: "700",
    color: Colors.grey,
    textAlign: "center",
  },
  sheetContainer: {
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

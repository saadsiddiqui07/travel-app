import { View, Text, Button } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import ExploreHeader from "../../components/ExploreHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import listingsData from "../../assets/data/airbnb-listings.json";
import listingsDataGeo from "../../assets/data/airbnb-listings.geo.json";
import { StatusBar } from "expo-status-bar";
import ListingsMap from "../../components/ListingsMap";
import ListingsBottomSheet from "../../components/ListingsBottomSheet";
import Listings from "../../components/Listings";

const Page = () => {
  const [category, setCategory] = useState<any>();

  const items = useMemo(() => listingsData as any, []);
  const getoItems = useMemo(() => listingsDataGeo as any, []);

  const onCategoryChange = (selected: string) => {
    setCategory(selected);
  };

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
      }}
    >
      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={getoItems} />
      {/* <ListingsBottomSheet category={category} listings={items} /> */}
    </SafeAreaView>
  );
};

export default Page;

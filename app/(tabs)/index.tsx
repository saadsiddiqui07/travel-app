import { View, Text, Button } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import ExploreHeader from "../../components/ExploreHeader";
import Listings from "../../components/Listings";
import { SafeAreaView } from "react-native-safe-area-context";
import listingsData from "../../assets/data/airbnb-listings.json";
import listingsDataGeo from "../../assets/data/neighbourhoods.geo.json";
import { StatusBar } from "expo-status-bar";
import ListingsMap from "../../components/ListingsMap";

const Page = () => {
  const [category, setCategory] = useState<any>();
  const items = useMemo(() => listingsData as any, []);
  const getoItems = useMemo(() => listingsDataGeo, []);

  const onCategoryChange = (selected: string) => {
    setCategory(selected);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="dark" />
      <ExploreHeader onCategoryChange={onCategoryChange} />
      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={getoItems} />
    </SafeAreaView>
  );
};

export default Page;

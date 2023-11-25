import { View, Text, Button, StatusBar } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import ExploreHeader from "../../components/ExploreHeader";
import listingsData from "../../assets/data/airbnb-listings.json";
import listingsDataGeo from "../../assets/data/airbnb-listings.geo.json";
import ListingsMap from "../../components/ListingsMap";
import ListingsBottomSheet from "../../components/ListingsBottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const [category, setCategory] = useState<any>();

  const items = useMemo(() => listingsData as any, []);
  const getoItems = useMemo(() => listingsDataGeo as any, []);

  const onCategoryChange = (selected: string) => {
    setCategory(selected);
  };

  return (
    <SafeAreaView
    edges={['top']}
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={getoItems} />
      {/* <ListingsBottomSheet category={category} listings={items} /> */}
    </SafeAreaView>
  );
};

export default Page;

import { View, Text, Button } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import ExploreHeader from "../../components/ExploreHeader";
import Listings from "../../components/Listings";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../../assets/data/index";

const Page = () => {
  const [category, setCategory] = useState<any>();
  const items = useMemo(() => data as any, []);

  const onCategoryChange = (selected: string) => {
    setCategory(selected);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ExploreHeader onCategoryChange={onCategoryChange} />
      <Listings listings={items} category={category} />
    </SafeAreaView>
  );
};

export default Page;

import { View, Text, Button } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ExploreHeader from "../../components/ExploreHeader";
import Listings from "../../components/Listings";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ExploreHeader />
      <Listings />
    </SafeAreaView>
  );
};

export default Page;

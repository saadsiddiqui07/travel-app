import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Listings from "./Listings";

interface Props {
  listings: any[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);
  return (
    <BottomSheet ref={ref} snapPoints={snapPoints} index={1}>
      {/* <BottomSheetScrollView>
        <Listings category={category} listings={listings} />
      </BottomSheetScrollView> */}
    </BottomSheet>
  );
};

export default ListingsBottomSheet;

const styles = StyleSheet.create({});

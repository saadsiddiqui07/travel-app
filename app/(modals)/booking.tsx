import { Text } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const Booking = () => {
  return (
    <BlurView intensity={70} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text>Booking page!</Text>
    </BlurView>
  );
};

export default Booking;

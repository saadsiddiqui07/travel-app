import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Profile = () => {
  const { isSignedIn, signOut } = useAuth();
  const { user } = useUser();

  return (
    <View>
      {isSignedIn ? (
        <>
          <TouchableOpacity onPress={() => signOut()}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Link href={"/(modals)/login"}>
          <Text>Login</Text>
        </Link>
      )}
    </View>
  );
};

export default Profile;

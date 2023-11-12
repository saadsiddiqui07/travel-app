import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

enum AuthStrategy {
  Google = "google",
  Facebook = "facebook",
  Apple = "apple",
}

const Login = () => {
  useWarmUpBrowser();
  const router = useRouter();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });

  const handleAuth = async (strategy: AuthStrategy) => {
    const selectedAuth = {
      [AuthStrategy.Google]: googleAuth,
      [AuthStrategy.Apple]: appleAuth,
      [AuthStrategy.Facebook]: facebookAuth,
    }[strategy];
    try {
      const { createdSessionId, setActive } = await selectedAuth();
      if (createdSessionId) {
        console.log("The created user is 🚀 ", createdSessionId);
        setActive!({ session: createdSessionId });
        router.push("/(tabs)/");
      }
    } catch (error) {
      console.log("Auth error", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome to Travel App ✈️</Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={styles.input}
      />
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginVertical: 30,
        }}
      >
        <View
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: Colors.dark,
            flex: 1,
          }}
        />
        <Text style={{ color: Colors.grey, fontWeight: "700" }}>or</Text>
        <View
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: Colors.dark,
            flex: 1,
          }}
        />
      </View>
      <View style={{ gap: 30 }}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => handleAuth(AuthStrategy.Google)}
        >
          <Ionicons name="md-logo-google" size={24} style={styles.icon} />
          <Text style={styles.loginBtnText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => handleAuth(AuthStrategy.Facebook)}
        >
          <Ionicons name="md-logo-facebook" size={24} style={styles.icon} />
          <Text style={styles.loginBtnText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => handleAuth(AuthStrategy.Apple)}
        >
          <Ionicons name="md-logo-apple" size={24} style={styles.icon} />
          <Text style={styles.loginBtnText}>Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "white",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "600",
    color: "gray",
    marginBottom: 15,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  btnContainer: {
    backgroundColor: Colors.primary,
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
  },
  loginBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    // height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
  loginBtnText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },
  icon: {
    position: "absolute",
    left: 10,
  },
});

export default Login;

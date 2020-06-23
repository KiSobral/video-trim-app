import React from "react";
import { StyleSheet, View } from "react-native";
import VideoPlayer from "./src/components/VideoPlayer";
import PhoneCamera from "./src/components/PhoneCamera";

export default function App() {
  return <PhoneCamera />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0cab",
    alignItems: "center",
    justifyContent: "center",
  },
});

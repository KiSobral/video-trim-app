import React from "react";
import { StyleSheet, View } from "react-native";
import Routes from "./src/routes";

import VideoPlayer from "./src/components/VideoPlayer";
import PhoneCamera from "./src/components/PhoneCamera";

export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0cab",
    alignItems: "center",
    justifyContent: "center",
  },
});

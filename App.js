import React from "react";
import { StyleSheet, View } from "react-native";
import VideoPlayer from "./src/components/VideoPlayer";

export default function App() {
  return (
    <View style={styles.container}>
      <VideoPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

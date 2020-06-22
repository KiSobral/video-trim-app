import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Video } from "expo-av";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Eu to aqui</Text>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
      />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  video: {
    width: width,
    height: height / 3,
  },
});

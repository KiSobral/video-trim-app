import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  video: {
    width: width,
    height: height / 3,
  },
});

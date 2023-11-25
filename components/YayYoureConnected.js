import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const YayYoureConnected = () => {
  return <Text style={styles.yayYoureConnected}>Yay, you're connected!</Text>;
};

const styles = StyleSheet.create({
  yayYoureConnected: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.preto,
    textAlign: "left",
  },
});

export default YayYoureConnected;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Participantes = () => {
  return (
    <View style={styles.participantes}>
      <Image
        style={styles.homemadePhoneWallpaper1}
        contentFit="cover"
        source={require("../assets/homemade-phone-wallpaper-11.png")}
      />
      <View style={styles.iconssystemstatusBarbatterParent}>
        <Image
          style={styles.iconssystemstatusBarbatter}
          contentFit="cover"
          source={require("../assets/iconssystemstatus-barbattery1.png")}
        />
        <Image
          style={[
            styles.iconssystemstatusBarscreen,
            styles.iconssystemstatusPosition1,
          ]}
          contentFit="cover"
          source={require("../assets/iconssystemstatus-barscreen-lock.png")}
        />
        <Image
          style={[
            styles.iconssystemstatusBarsignal,
            styles.iconssystemstatusPosition1,
          ]}
          contentFit="cover"
          source={require("../assets/iconssystemstatus-barsignal1.png")}
        />
        <View
          style={[
            styles.iconssystemstatusBarlocati,
            styles.iconssystemstatusPosition,
          ]}
        />
        <Image
          style={[
            styles.iconssystemstatusBarwifi,
            styles.iconssystemstatusPosition,
          ]}
          contentFit="cover"
          source={require("../assets/iconssystemstatus-barwifi.png")}
        />
        <Text style={[styles.participantes1, styles.participantes1Typo]}>
          Participantes
        </Text>
        <Text
          style={[styles.altieresLimaCapim, styles.participantes1Typo]}
        >{`Altieres Lima Capim 
Gustavo Enrico Santos de souza
Mariana de Oliveira Muniz 
Sabrina dos Santos Ribas `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconssystemstatusPosition1: {
    height: 14,
    top: 3,
    position: "absolute",
  },
  iconssystemstatusPosition: {
    marginTop: -365.5,
    height: 14,
    top: "50%",
    position: "absolute",
  },
  participantes1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.kanitRegular,
    position: "absolute",
  },
  homemadePhoneWallpaper1: {
    top: 0,
    left: 0,
    width: 430,
    position: "absolute",
    height: 932,
  },
  iconssystemstatusBarbatter: {
    marginTop: -222.5,
    right: 0,
    top: "50%",
    height: 445,
    width: 377,
    position: "absolute",
  },
  iconssystemstatusBarscreen: {
    left: 180,
    display: "none",
    width: 14,
  },
  iconssystemstatusBarsignal: {
    left: 4,
    width: 21,
  },
  iconssystemstatusBarlocati: {
    right: 97,
    width: 14,
  },
  iconssystemstatusBarwifi: {
    left: 32,
    width: 15,
  },
  participantes1: {
    top: 10,
    left: 100,
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    color: Color.colorDarkslateblue,
    width: 163,
    height: 30,
  },
  altieresLimaCapim: {
    top: 77,
    left: 33,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    color: Color.preto,
    width: 322,
    height: 307,
  },
  iconssystemstatusBarbatterParent: {
    marginLeft: -188,
    top: 215,
    left: "50%",
    overflow: "hidden",
    height: 445,
    width: 377,
    position: "absolute",
  },
  participantes: {
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default Participantes;

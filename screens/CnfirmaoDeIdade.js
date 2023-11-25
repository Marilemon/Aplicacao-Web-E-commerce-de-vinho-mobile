import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const CnfirmaoDeIdade = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.cnfirmaoDeIdade}
      onPress={() => navigation.navigate("Login")}
    >
      <Image
        style={styles.homemadePhoneWallpaper1}
        contentFit="cover"
        source={require("../assets/homemade-phone-wallpaper-1.png")}
      />
      <Text style={[styles.time, styles.timeTypo]}>14:04 PM</Text>
      <Text style={[styles.text, styles.timeTypo]}>100%</Text>
      <Image
        style={styles.fullBarsIcon}
        contentFit="cover"
        source={require("../assets/full-bars.png")}
      />
      <Image
        style={styles.cnfirmaoDeIdadeChild}
        contentFit="cover"
        source={require("../assets/frame-434.png")}
      />
      <Text style={styles.bemVindoa}>{`Bem vindo(a)! `}</Text>
      <Text
        style={[styles.vocTemMais, styles.vocTemMaisTypo]}
      >{`Você tem mais de 18 anos?
`}</Text>
      <Text style={[styles.obrigatrio, styles.vocTemMaisTypo]}>{`(obrigatório)
`}</Text>
      <Image
        style={styles.component1Icon}
        contentFit="cover"
        source={require("../assets/component-1.png")}
      />
      <View style={[styles.acessar, styles.acessarFlexBox]}>
        <Text style={[styles.button, styles.buttonTypo]}>Não</Text>
      </View>
      <View style={[styles.acessar1, styles.acessarFlexBox]}>
        <Text style={[styles.button1, styles.buttonTypo]}>Sim</Text>
      </View>
      <Image
        style={styles.cnfirmaoDeIdadeItem}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeTypo: {
    fontFamily: FontFamily.pluto,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    height: "1.59%",
    color: Color.branco,
    position: "absolute",
  },
  vocTemMaisTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  acessarFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    width: 126,
    borderRadius: Border.br_9xs,
    top: 536,
    position: "absolute",
  },
  buttonTypo: {
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  homemadePhoneWallpaper1: {
    top: 0,
    left: 0,
    width: 517,
    position: "absolute",
    height: 932,
  },
  time: {
    marginLeft: -43,
    top: "2.04%",
    left: "50%",
    textAlign: "center",
    width: 68,
    color: Color.branco,
  },
  text: {
    top: "2.58%",
    right: 25,
    textAlign: "right",
    width: 30,
    color: Color.branco,
  },
  fullBarsIcon: {
    width: 12,
    height: 8,
  },
  cnfirmaoDeIdadeChild: {
    top: 215,
    left: 32,
    width: 365,
    height: 445,
    position: "absolute",
    overflow: "hidden",
  },
  bemVindoa: {
    left: 129,
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    color: Color.colorDarkslateblue,
    width: 163,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.kanitRegular,
    top: 301,
    position: "absolute",
  },
  vocTemMais: {
    top: 450,
    left: 80,
    width: 261,
    height: 33,
    color: Color.principalCor,
    fontFamily: FontFamily.kanitRegular,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  obrigatrio: {
    top: 483,
    left: 152,
    fontWeight: "200",
    fontFamily: FontFamily.kanitExtraLight,
    color: Color.d9D9D9,
    width: 117,
    height: 26,
  },
  component1Icon: {
    top: 344,
    left: 164,
    width: 93,
    height: 93,
    position: "absolute",
  },
  button: {
    color: Color.principalCor,
  },
  acessar: {
    left: 64,
    backgroundColor: Color.branco,
  },
  button1: {
    color: Color.branco,
  },
  acessar1: {
    left: 230,
    backgroundColor: Color.principalCor,
  },
  cnfirmaoDeIdadeItem: {
    top: 903,
    left: 124,
    width: 173,
    height: 10,
    position: "absolute",
  },
  icon: {
    left: 324,
    width: 32,
    height: 32,
    top: 301,
    position: "absolute",
    overflow: "hidden",
  },
  cnfirmaoDeIdade: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorDarkslategray_100,
    borderStyle: "solid",
    borderColor: Color.colorGray,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
  },
});

export default CnfirmaoDeIdade;

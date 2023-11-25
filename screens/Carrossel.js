import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Carrossel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carrossel}>
      <Image
        style={styles.bodyIcon}
        contentFit="cover"
        source={require("../assets/body.png")}
      />
      <Image
        style={[styles.terminalIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/terminal.png")}
      />
      <Image
        style={[styles.reserveIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/reserve.png")}
      />
      <Image
        style={[styles.carrosselChild, styles.carrosselPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.carrosselItem, styles.carrosselPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textLayout]}>100%</Text>
        <Text style={[styles.time, styles.textTypo]}>14:04 PM</Text>
        <Image
          style={[styles.emptyBarIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/empty-bar.png")}
        />
        <Image
          style={styles.fullBarsIcon}
          contentFit="cover"
          source={require("../assets/full-bars2.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
      </View>
      <Image
        style={styles.carrosselInner}
        contentFit="cover"
        source={require("../assets/line-11.png")}
      />
      <View style={[styles.uva1, styles.iconLayout1]} />
      <Image
        style={[styles.lineIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.carrosselChild1, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("MenuVertical")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.carrinhoDeCompras1Icon, styles.textLayout]}
        contentFit="cover"
        source={require("../assets/carrinhodecompras-1.png")}
      />
      <Pressable
        style={[styles.icon1, styles.iconLayout1]}
        onPress={() => navigation.navigate("Carrinho")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon3.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.vinhoArgentinoEmPromocaoReIcon,
          styles.carrosselPosition,
        ]}
        contentFit="cover"
        source={require("../assets/vinho-argentino-em-promocao-reserva-del-camino-blend-tinto-e-blend-branco-2020-743-1-646a1e4415a893fbf45b98b51d3edd99-1.png")}
      />
      <Text style={[styles.osMelhoresVinhos, styles.button1FlexBox]}>
        Os melhores vinhos argentinos estão aqui!
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.carrosselChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.carrosselChild2, styles.carrosselChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.carrosselChild3, styles.carrosselChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-42.png")}
      />
      <Text style={[styles.trsMelrosTinto, styles.r15999Layout]}>
        Três Melros Tinto 2018
      </Text>
      <Text style={[styles.quintaDoVallado, styles.rTypo]}>
        Quinta do Vallado
      </Text>
      <Text style={[styles.douroPortugal, styles.rTypo]}>Douro, Portugal</Text>
      <Text style={[styles.avaliaes, styles.rTypo]}>Avaliações</Text>
      <Text style={[styles.r15999, styles.r15999Layout]}>
        <Text style={styles.rTypo}>R$</Text>
        <Text style={styles.text1}> 159,99</Text>
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Carrinho")}
      >
        <Text style={[styles.button1, styles.button1FlexBox]}>Adicionar</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.b05cb992A4cb428e80abD122e9Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/b05cb992a4cb428e80abd122e9d9ea48removebgpreview-6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  carrosselPosition: {
    left: 0,
    position: "absolute",
  },
  textLayout: {
    width: 30,
    position: "absolute",
  },
  textTypo: {
    color: Color.branco,
    fontFamily: FontFamily.pluto,
    fontSize: FontSize.size_xs,
    height: "97.93%",
    lineHeight: 16,
  },
  iconLayout1: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  wrapperLayout: {
    height: 2,
    width: 27,
    left: 23,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  button1FlexBox: {
    textAlign: "left",
    color: Color.branco,
  },
  carrosselChildLayout: {
    width: 10,
    top: 461,
    height: 10,
    position: "absolute",
  },
  iconPosition: {
    top: 517,
    position: "absolute",
  },
  r15999Layout: {
    color: Color.preto,
    textAlign: "left",
    height: 24,
    lineHeight: 16,
    position: "absolute",
  },
  rTypo: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_xs,
  },
  vectorIconLayout: {
    bottom: "26.95%",
    top: "71.57%",
    width: "2.37%",
    height: "1.48%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bodyIcon: {
    width: 21,
    height: 14,
    opacity: 0.35,
  },
  terminalIcon: {
    height: "0.62%",
    width: "0.3%",
    top: "2.26%",
    right: "23.12%",
    bottom: "97.11%",
    left: "76.58%",
    opacity: 0.4,
  },
  reserveIcon: {
    height: "0.95%",
    width: "4.07%",
    top: "2.09%",
    right: "24.05%",
    bottom: "96.95%",
    left: "71.88%",
  },
  carrosselChild: {
    top: 17,
    width: 430,
    height: 932,
  },
  carrosselItem: {
    top: 5,
    width: 432,
    height: 77,
  },
  text: {
    top: "2.07%",
    right: 0,
    textAlign: "right",
    color: Color.branco,
    fontFamily: FontFamily.pluto,
    fontSize: FontSize.size_xs,
    height: "97.93%",
    lineHeight: 16,
  },
  time: {
    marginLeft: -19,
    top: "0%",
    textAlign: "center",
    width: 68,
    left: "50%",
    position: "absolute",
  },
  emptyBarIcon: {
    height: "61.14%",
    width: "0.98%",
    top: "12.44%",
    right: "94.59%",
    bottom: "26.42%",
    left: "4.44%",
    opacity: 0.25,
  },
  fullBarsIcon: {
    width: 11,
    height: 10,
  },
  wifiIcon: {
    width: 13,
    height: 12,
  },
  parent: {
    height: "2.07%",
    top: "1.65%",
    right: 143,
    bottom: "96.28%",
    width: 266,
    position: "absolute",
  },
  carrosselInner: {
    top: 889,
    left: 120,
    width: 173,
    height: 10,
    position: "absolute",
  },
  uva1: {
    top: 763,
    left: 467,
    height: 24,
    overflow: "hidden",
  },
  lineIcon: {
    top: 52,
  },
  carrosselChild1: {
    top: 57,
  },
  wrapper: {
    top: 62,
  },
  vectorIcon: {
    top: 46,
    left: 309,
    height: 24,
  },
  carrinhoDeCompras1Icon: {
    top: 43,
    left: 351,
    height: 30,
    overflow: "hidden",
  },
  icon2: {
    overflow: "hidden",
  },
  icon1: {
    left: 367,
    top: 34,
    height: 24,
  },
  vinhoArgentinoEmPromocaoReIcon: {
    top: 76,
    width: 496,
    height: 371,
  },
  osMelhoresVinhos: {
    top: 153,
    left: 21,
    fontSize: FontSize.size_5xl,
    lineHeight: 25,
    fontFamily: FontFamily.jsMathCmbx10,
    width: 135,
    position: "absolute",
  },
  ellipseIcon: {
    left: 171,
  },
  carrosselChild2: {
    left: 206,
  },
  carrosselChild3: {
    left: 239,
  },
  rectangleIcon: {
    marginLeft: -194,
    borderRadius: Border.br_3xs,
    width: 298,
    height: 266,
    left: "50%",
  },
  trsMelrosTinto: {
    top: 562,
    left: 184,
    fontSize: FontSize.size_3xs,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 153,
  },
  quintaDoVallado: {
    top: 587,
    width: 130,
    left: 185,
    fontWeight: "200",
    color: Color.preto,
    textAlign: "left",
    position: "absolute",
    height: 24,
    lineHeight: 16,
  },
  douroPortugal: {
    top: 612,
    left: 183,
    width: 111,
    color: Color.preto,
    textAlign: "left",
    height: 24,
    lineHeight: 16,
    position: "absolute",
  },
  avaliaes: {
    top: 636,
    width: 63,
    height: 15,
    left: 185,
    fontWeight: "200",
    color: Color.preto,
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  r15999: {
    top: 695,
    left: 198,
    width: 104,
  },
  button1: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
  },
  button: {
    top: 722,
    left: 196,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorIndianred_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 103,
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_5xs,
    position: "absolute",
  },
  vectorIcon1: {
    right: "54.6%",
    left: "43.02%",
  },
  vectorIcon2: {
    right: "50.42%",
    left: "47.21%",
  },
  vectorIcon3: {
    top: "71.46%",
    right: "46.47%",
    bottom: "27.06%",
    left: "51.16%",
    width: "2.37%",
    height: "1.48%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    right: "42.51%",
    left: "55.12%",
  },
  vectorIcon5: {
    right: "38.33%",
    left: "59.3%",
  },
  b05cb992A4cb428e80abD122e9Icon: {
    left: 29,
    width: 167,
    height: 228,
  },
  carrossel: {
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default Carrossel;

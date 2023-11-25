import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Catalogo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.catalogo}>
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
        style={[styles.catalogoChild, styles.catalogoPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.catalogoItem, styles.catalogoPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textLayout]}>100%</Text>
        <Text style={styles.time}>14:04 PM</Text>
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
        style={styles.catalogoInner}
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
        style={[styles.catalogoChild1, styles.wrapperLayout]}
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
      <Pressable
        style={[styles.carrinhoDeCompras1, styles.textLayout]}
        onPress={() => navigation.navigate("Carrinho")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/carrinhodecompras-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon2, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon3.png")}
      />
      <Image
        style={styles.circulo111}
        contentFit="cover"
        source={require("../assets/circulo1-1-1.png")}
      />
      <View style={styles.uva11} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Text style={[styles.cabernetSauvignon2021, styles.douroPortugalLayout]}>
        Cabernet Sauvignon 2021
      </Text>
      <Text style={[styles.valleDeViejos, styles.valleDeViejosLayout]}>
        Valle de Viejos Viñedos
      </Text>
      <Text style={[styles.centralValleyChile, styles.rTypo]}>
        Central Valley, Chile
      </Text>
      <Text style={[styles.avaliaes, styles.avaliaesPosition]}>Avaliações</Text>
      <Text style={[styles.r25000, styles.r25000FlexBox]}>
        <Text style={styles.rTypo}>R$</Text>
        <Text style={styles.text1}>250,00</Text>
      </Text>
      <Pressable
        style={[styles.button, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("MenuVertical")}
      >
        <Text style={[styles.button1, styles.button1Typo]}>Adicionar</Text>
      </Pressable>
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("Filtros")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <View style={styles.rectangleView} />
      <Text
        style={[styles.encontreSeuVinho, styles.vectorPosition]}
      >{`Encontre seu vinho `}</Text>
      <Image
        style={[styles.procurar1Icon, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/procurar-11.png")}
      />
      <Image
        style={styles.c47f29d1920e96ec7c87c16d38RemIcon}
        contentFit="cover"
        source={require("../assets/534723c47f29d1920e96ec7c87c16d38removebgpreview-1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.catalogoChild3, styles.catalogoChild3Position]}
        contentFit="cover"
        source={require("../assets/rectangle-39.png")}
      />
      <Text style={[styles.trsMelrosTinto, styles.avaliaesPosition]}>
        Três Melros Tinto 2018
      </Text>
      <Text style={[styles.quintaDoVallado, styles.avaliaes1Typo]}>
        Quinta do Vallado
      </Text>
      <Text style={[styles.douroPortugal, styles.rTypo]}>Douro, Portugal</Text>
      <Text style={[styles.avaliaes1, styles.avaliaes1Typo]}>Avaliações</Text>
      <Text style={[styles.r15999, styles.r25000FlexBox]}>
        <Text style={styles.rTypo}>R$</Text>
        <Text style={styles.text1}> 159,99</Text>
      </Text>
      <Pressable
        style={[styles.button2, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("MenuVertical")}
      >
        <Text style={[styles.button1, styles.button1Typo]}>Adicionar</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[
          styles.b05cb992A4cb428e80abD122e9Icon,
          styles.catalogoChild3Position,
        ]}
        contentFit="cover"
        source={require("../assets/b05cb992a4cb428e80abd122e9d9ea48removebgpreview-1.png")}
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
  catalogoPosition: {
    left: 0,
    position: "absolute",
  },
  textLayout: {
    width: 30,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  wrapperLayout: {
    height: 2,
    left: 23,
    width: 27,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  rectangleIconLayout: {
    height: 323,
    borderRadius: Border.br_3xs,
    left: "50%",
  },
  douroPortugalLayout: {
    height: 29,
    textAlign: "left",
    color: Color.preto,
    lineHeight: 16,
    position: "absolute",
  },
  valleDeViejosLayout: {
    width: 148,
    height: 29,
    lineHeight: 16,
  },
  rTypo: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_xs,
  },
  avaliaesPosition: {
    left: 204,
    textAlign: "left",
    color: Color.preto,
    position: "absolute",
  },
  r25000FlexBox: {
    textAlign: "left",
    color: Color.preto,
    position: "absolute",
  },
  buttonShadowBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 39,
    width: 117,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorIndianred_100,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  button1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  vectorPosition: {
    top: 123,
    position: "absolute",
  },
  vectorIconPosition1: {
    bottom: "59.98%",
    top: "38.41%",
    height: "1.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  catalogoChild3Position: {
    top: 513,
    position: "absolute",
  },
  avaliaes1Typo: {
    left: 205,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    textAlign: "left",
    color: Color.preto,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "24.89%",
    top: "73.5%",
    height: "1.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bodyIcon: {
    width: 21,
    opacity: 0.35,
    height: 14,
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
  catalogoChild: {
    top: 17,
    width: 430,
    height: 932,
  },
  catalogoItem: {
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
    width: 30,
    lineHeight: 16,
  },
  time: {
    marginLeft: -19,
    top: "0%",
    textAlign: "center",
    width: 68,
    left: "50%",
    color: Color.branco,
    fontFamily: FontFamily.pluto,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    height: "97.93%",
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
  catalogoInner: {
    top: 889,
    left: 120,
    width: 173,
    height: 10,
    position: "absolute",
  },
  uva1: {
    top: 763,
    left: 467,
    overflow: "hidden",
  },
  lineIcon: {
    top: 52,
  },
  catalogoChild1: {
    top: 57,
  },
  wrapper: {
    top: 62,
  },
  vectorIcon: {
    top: 46,
    left: 309,
  },
  icon1: {
    overflow: "hidden",
  },
  carrinhoDeCompras1: {
    left: 351,
    top: 43,
    height: 30,
  },
  icon2: {
    top: 34,
    left: 367,
    overflow: "hidden",
  },
  circulo111: {
    top: 444,
    left: 377,
    width: 14,
    position: "absolute",
    height: 14,
    overflow: "hidden",
  },
  uva11: {
    top: 785,
    left: 21,
    height: 30,
    width: 27,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    marginLeft: -162,
    top: 180,
    width: 307,
    position: "absolute",
  },
  cabernetSauvignon2021: {
    top: 229,
    fontSize: FontSize.size_smi,
    width: 147,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 202,
  },
  valleDeViejos: {
    top: 273,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.preto,
    position: "absolute",
    left: 202,
  },
  centralValleyChile: {
    top: 302,
    width: 126,
    textAlign: "left",
    color: Color.preto,
    position: "absolute",
    left: 202,
    height: 30,
    lineHeight: 16,
  },
  avaliaes: {
    top: 332,
    height: 18,
    width: 72,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_xs,
  },
  text1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  r25000: {
    top: 397,
    left: 219,
    width: 118,
    height: 30,
    lineHeight: 16,
  },
  button1: {
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
    color: Color.branco,
  },
  button: {
    top: 430,
    left: 217,
  },
  rectangleView: {
    top: 117,
    left: 52,
    borderRadius: Border.br_xl,
    backgroundColor: Color.branco,
    borderStyle: "solid",
    borderColor: Color.principalCor,
    borderWidth: 1,
    width: 238,
    height: 33,
    position: "absolute",
  },
  vector: {
    left: 29,
    width: 15,
    height: 18,
  },
  encontreSeuVinho: {
    left: 69,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    width: 150,
    height: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.preto,
    top: 123,
    lineHeight: 16,
  },
  procurar1Icon: {
    left: 263,
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  c47f29d1920e96ec7c87c16d38RemIcon: {
    top: 199,
    left: 64,
    width: 124,
    height: 270,
    position: "absolute",
  },
  vectorIcon1: {
    right: "49.3%",
    left: "47.44%",
    width: "3.26%",
  },
  vectorIcon2: {
    right: "45.35%",
    left: "51.63%",
    width: "3.02%",
  },
  vectorIcon3: {
    right: "41.4%",
    left: "55.58%",
    width: "3.02%",
  },
  vectorIcon4: {
    right: "37.44%",
    left: "59.53%",
    width: "3.02%",
  },
  vectorIcon5: {
    right: "33.72%",
    left: "63.26%",
    width: "3.02%",
  },
  catalogoChild3: {
    marginLeft: -160,
    width: 306,
    height: 323,
    borderRadius: Border.br_3xs,
    left: "50%",
  },
  trsMelrosTinto: {
    top: 568,
    fontSize: FontSize.size_3xs,
    width: 174,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    height: 30,
    lineHeight: 16,
  },
  quintaDoVallado: {
    top: 593,
    width: 148,
    height: 29,
    lineHeight: 16,
  },
  douroPortugal: {
    top: 623,
    left: 203,
    width: 127,
    height: 29,
    textAlign: "left",
    color: Color.preto,
    lineHeight: 16,
    position: "absolute",
  },
  avaliaes1: {
    top: 652,
    height: 19,
    width: 72,
  },
  r15999: {
    top: 724,
    left: 220,
    width: 119,
    height: 30,
    lineHeight: 16,
  },
  button2: {
    top: 757,
    left: 218,
  },
  vectorIcon6: {
    right: "49.07%",
    left: "47.67%",
    width: "3.26%",
  },
  vectorIcon7: {
    right: "45.12%",
    left: "51.86%",
    width: "3.02%",
  },
  vectorIcon8: {
    right: "41.16%",
    left: "55.81%",
    width: "3.02%",
  },
  vectorIcon9: {
    right: "37.21%",
    left: "59.77%",
    width: "3.02%",
  },
  vectorIcon10: {
    right: "33.49%",
    left: "63.49%",
    width: "3.02%",
  },
  b05cb992A4cb428e80abD122e9Icon: {
    left: 28,
    width: 190,
    height: 278,
  },
  catalogo: {
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default Catalogo;

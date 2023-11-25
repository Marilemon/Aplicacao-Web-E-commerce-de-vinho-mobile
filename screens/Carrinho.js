import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Carrinho = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carrinho}>
      <Image
        style={styles.bodyIcon}
        contentFit="cover"
        source={require("../assets/body.png")}
      />
      <Image
        style={[styles.terminalIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/terminal.png")}
      />
      <Image
        style={[styles.reserveIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/reserve.png")}
      />
      <Image
        style={[styles.carrinhoChild, styles.carrinhoPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.carrinhoItem, styles.carrinhoPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo1]}>100%</Text>
        <Text style={[styles.time, styles.textTypo1]}>14:04 PM</Text>
        <Image
          style={[styles.emptyBarIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/empty-bar.png")}
        />
        <Image
          style={styles.fullBarsIcon}
          contentFit="cover"
          source={require("../assets/full-bars1.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
      </View>
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("MenuVertical")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("MenuVertical")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("MenuVertical")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.carrinhoDeCompras1Icon, styles.uva1Layout]}
        contentFit="cover"
        source={require("../assets/carrinhodecompras-1.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon3.png")}
      />
      <View style={[styles.uva1, styles.uva1Layout]} />
      <Image
        style={styles.carrinhoInner}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <View style={styles.button}>
        <Text style={styles.button1}>Ir a pagamento</Text>
      </View>
      <Text style={[styles.valorEntrega, styles.valorEntregaTypo]}>
        Valor entrega
      </Text>
      <Text style={[styles.totalAPagar, styles.totalAPagarTypo]}>
        Total a pagar
      </Text>
      <Text style={styles.r3000}>
        <Text style={styles.rTypo}>R$</Text>
        <Text style={styles.text1}>30,00</Text>
      </Text>
      <Text style={styles.r45000}>
        <Text style={styles.r1}>R$</Text>
        <Text style={styles.text2}>450,00</Text>
      </Text>
      <View style={styles.lineView} />
      <Text style={[styles.carrinhoDeCompras, styles.totalAPagarTypo]}>
        Carrinho de compras (2)
      </Text>
      <Text style={[styles.cabernetSauvignon2021, styles.valorEntregaTypo]}>
        Cabernet Sauvignon 2021
      </Text>
      <Text style={[styles.trsMelrosTinto, styles.valorEntregaTypo]}>
        Três Melros Tinto 2018
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.carrinhoChild1, styles.carrinhoChildLayout]} />
      <View style={[styles.carrinhoChild2, styles.carrinhoChildPosition1]} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-14.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>1</Text>
      <Text style={[styles.r25000, styles.r25000Layout]}>
        <Text style={[styles.r2, styles.rTypo]}>R$</Text>
        <Text style={styles.text4}>250,00</Text>
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={[styles.remover, styles.removerTypo]}>Remover</Text>
      <Text style={[styles.adicionarAosFavoritos, styles.adicionarTypo]}>
        Adicionar aos favoritos
      </Text>
      <Image
        style={[styles.icon4, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon4.png")}
      />
      <View style={[styles.carrinhoChild3, styles.carrinhoChildPosition]} />
      <View style={[styles.carrinhoChild4, styles.carrinhoChildBorder]} />
      <View style={[styles.carrinhoChild5, styles.carrinhoChildBorder]} />
      <View style={[styles.carrinhoChild6, styles.carrinhoChildBorder]} />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.carrinhoChild7, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-14.png")}
      />
      <Text style={[styles.text5, styles.textTypo]}>1</Text>
      <Text style={[styles.r15999, styles.r25000Layout]}>
        <Text style={[styles.r2, styles.rTypo]}>R$</Text>
        <Text style={styles.text4}>159,99</Text>
      </Text>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={[styles.remover1, styles.removerTypo]}>Remover</Text>
      <Text style={[styles.adicionarAosFavoritos1, styles.adicionarTypo]}>
        Adicionar aos favoritos
      </Text>
      <Image
        style={[styles.icon5, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon5.png")}
      />
      <View style={[styles.carrinhoChild8, styles.carrinhoChildPosition]} />
      <Image
        style={styles.c47f29d1920e96ec7c87c16d38RemIcon}
        contentFit="cover"
        source={require("../assets/534723c47f29d1920e96ec7c87c16d38removebgpreview-6.png")}
      />
      <Image
        style={styles.b05cb992A4cb428e80abD122e9Icon}
        contentFit="cover"
        source={require("../assets/b05cb992a4cb428e80abd122e9d9ea48removebgpreview-2.png")}
      />
      <Image
        style={styles.carrinhoChild9}
        contentFit="cover"
        source={require("../assets/line-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  carrinhoPosition: {
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    color: Color.branco,
    fontFamily: FontFamily.pluto,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    height: "97.93%",
    position: "absolute",
  },
  frameLayout: {
    height: 2,
    left: 23,
    width: 27,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  uva1Layout: {
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  valorEntregaTypo: {
    height: 29,
    color: Color.principalCor,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  totalAPagarTypo: {
    color: Color.principalCor,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  rectangleViewLayout: {
    width: 96,
    left: 24,
  },
  carrinhoChildLayout: {
    width: 32,
    backgroundColor: Color.colorWhitesmoke,
    left: 24,
  },
  carrinhoChildPosition1: {
    left: 88,
    width: 32,
    backgroundColor: Color.colorWhitesmoke,
  },
  vectorIconPosition: {
    left: "22.33%",
    right: "73.95%",
    width: "3.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineIconLayout: {
    width: 17,
    left: 32,
    height: 1,
    position: "absolute",
  },
  textTypo: {
    height: 16,
    width: 26,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 65,
    color: Color.preto,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  r25000Layout: {
    width: 130,
    height: 34,
    color: Color.preto,
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  rTypo: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
  },
  vectorIconLayout: {
    left: "6.74%",
    right: "87.67%",
    width: "5.58%",
    height: "2.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  removerTypo: {
    width: 125,
    color: Color.cinza,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  adicionarTypo: {
    width: 257,
    color: Color.cinza,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  iconPosition: {
    width: 29,
    left: 29,
    position: "absolute",
  },
  carrinhoChildPosition: {
    left: 29,
    height: 1,
    width: 398,
    borderTopWidth: 1,
    borderColor: Color.cinza,
    borderStyle: "solid",
    position: "absolute",
  },
  carrinhoChildBorder: {
    top: 451,
    height: 27,
    borderWidth: 0.5,
    borderColor: Color.principalCor,
    borderStyle: "solid",
    position: "absolute",
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
  carrinhoChild: {
    top: 17,
    width: 430,
    height: 932,
  },
  carrinhoItem: {
    top: 5,
    width: 432,
    height: 77,
  },
  text: {
    top: "2.07%",
    right: 0,
    textAlign: "right",
    width: 30,
  },
  time: {
    marginLeft: -19,
    top: "0%",
    left: "50%",
    textAlign: "center",
    width: 68,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 52,
  },
  container: {
    top: 57,
  },
  frame: {
    top: 62,
  },
  vectorIcon: {
    top: 46,
    left: 309,
  },
  carrinhoDeCompras1Icon: {
    top: 43,
    left: 351,
    width: 30,
  },
  icon3: {
    top: 34,
    left: 367,
    overflow: "hidden",
  },
  uva1: {
    top: 785,
    left: 21,
    width: 27,
    height: 30,
  },
  carrinhoInner: {
    top: 90,
    left: 1,
    borderRadius: Border.br_9xs,
    width: 429,
    height: 850,
    position: "absolute",
  },
  button1: {
    fontSize: 17,
    fontFamily: FontFamily.nunitoSans12ptRegular,
    textAlign: "left",
    color: Color.branco,
  },
  button: {
    top: 835,
    borderRadius: Border.br_mini,
    backgroundColor: "rgba(218, 91, 116, 0.86)",
    width: 283,
    height: 39,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_5xs,
    left: 66,
    position: "absolute",
  },
  valorEntrega: {
    top: 595,
    width: 186,
    left: 24,
    height: 29,
  },
  totalAPagar: {
    top: 628,
    width: 187,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.principalCor,
    left: 24,
    height: 30,
  },
  text1: {
    fontFamily: FontFamily.interRegular,
  },
  r3000: {
    top: 602,
    height: 34,
    width: 128,
    color: Color.preto,
    left: 285,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  r1: {
    fontSize: 7,
  },
  text2: {
    fontSize: FontSize.size_mini,
  },
  r45000: {
    top: 629,
    height: 33,
    width: 128,
    color: Color.preto,
    left: 285,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  lineView: {
    top: 577,
    left: 17,
    height: 1,
    width: 398,
    borderTopWidth: 1,
    borderColor: Color.cinza,
    borderStyle: "solid",
    position: "absolute",
  },
  carrinhoDeCompras: {
    top: 171,
    left: 12,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 464,
    height: 60,
  },
  cabernetSauvignon2021: {
    top: 225,
    width: 305,
    left: 24,
    height: 29,
  },
  trsMelrosTinto: {
    top: 411,
    left: 19,
    width: 344,
  },
  rectangleView: {
    height: 27,
    borderWidth: 0.5,
    borderColor: Color.principalCor,
    top: 269,
    borderStyle: "solid",
    position: "absolute",
  },
  carrinhoChild1: {
    height: 27,
    borderWidth: 0.5,
    borderColor: Color.principalCor,
    top: 269,
    borderStyle: "solid",
    position: "absolute",
  },
  carrinhoChild2: {
    height: 27,
    borderWidth: 0.5,
    borderColor: Color.principalCor,
    top: 269,
    borderStyle: "solid",
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.72%",
    top: "29.61%",
    bottom: "68.67%",
  },
  lineIcon: {
    top: 283,
  },
  text3: {
    top: 276,
  },
  r2: {
    fontSize: FontSize.size_4xs,
  },
  text4: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  r25000: {
    top: 279,
    left: 145,
  },
  vectorIcon2: {
    top: "34.23%",
    bottom: "62.88%",
  },
  remover: {
    top: 327,
    left: 58,
    height: 19,
  },
  adicionarAosFavoritos: {
    top: 360,
    left: 62,
    height: 21,
  },
  icon4: {
    top: 354,
    height: 27,
  },
  carrinhoChild3: {
    top: 398,
  },
  carrinhoChild4: {
    width: 96,
    left: 24,
  },
  carrinhoChild5: {
    width: 32,
    backgroundColor: Color.colorWhitesmoke,
    left: 24,
  },
  carrinhoChild6: {
    left: 88,
    width: 32,
    backgroundColor: Color.colorWhitesmoke,
  },
  vectorIcon3: {
    height: "1.82%",
    top: "49.03%",
    bottom: "49.14%",
  },
  carrinhoChild7: {
    top: 464,
  },
  text5: {
    top: 456,
  },
  r15999: {
    top: 446,
    left: 142,
  },
  vectorIcon4: {
    top: "53.76%",
    bottom: "43.35%",
  },
  remover1: {
    top: 507,
    height: 20,
    left: 66,
  },
  adicionarAosFavoritos1: {
    top: 533,
    height: 19,
    left: 65,
    width: 257,
  },
  icon5: {
    top: 536,
    height: 26,
  },
  carrinhoChild8: {
    top: 579,
  },
  c47f29d1920e96ec7c87c16d38RemIcon: {
    top: 408,
    left: 302,
    width: 76,
    height: 144,
    position: "absolute",
  },
  b05cb992A4cb428e80abD122e9Icon: {
    top: 213,
    left: 272,
    width: 136,
    height: 168,
    position: "absolute",
  },
  carrinhoChild9: {
    top: 910,
    left: 107,
    width: 173,
    height: 10,
    position: "absolute",
  },
  carrinho: {
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
  },
});

export default Carrinho;

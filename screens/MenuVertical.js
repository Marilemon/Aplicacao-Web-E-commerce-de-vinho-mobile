import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MenuVertical = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuVertical}>
      <View style={[styles.menuVerticalAberto, styles.timePosition]}>
        <Image
          style={styles.bodyIcon}
          contentFit="cover"
          source={require("../assets/body1.png")}
        />
        <Image
          style={[styles.terminalIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/terminal1.png")}
        />
        <Image
          style={[styles.reserveIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/reserve1.png")}
        />
        <Image
          style={[styles.menuVerticalAbertoChild, styles.menuPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Image
          style={[styles.menuVerticalAbertoItem, styles.menuPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-171.png")}
        />
        <View style={[styles.menuVerticalAbertoInner, styles.menuPosition]} />
        <View style={[styles.menuVerticalAbertoInner, styles.menuPosition]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector10.png")}
        />
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textLayout]}>100%</Text>
          <Text style={[styles.time, styles.textTypo]}>14:04 PM</Text>
          <Image
            style={[styles.emptyBarIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/empty-bar1.png")}
          />
          <Image
            style={styles.fullBarsIcon}
            contentFit="cover"
            source={require("../assets/full-bars3.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
        </View>
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-12.png")}
        />
        <View style={[styles.uva1, styles.iconLayout]} />
        <Image
          style={[styles.menuVerticalAbertoChild1, styles.menuChildLayout]}
          contentFit="cover"
          source={require("../assets/line-21.png")}
        />
        <Image
          style={[styles.menuVerticalAbertoChild2, styles.menuChildLayout]}
          contentFit="cover"
          source={require("../assets/line-31.png")}
        />
        <Image
          style={[styles.menuVerticalAbertoChild3, styles.menuChildLayout]}
          contentFit="cover"
          source={require("../assets/line-41.png")}
        />
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.uva1Icon, styles.casa11Position]}
          contentFit="cover"
          source={require("../assets/uva-1.png")}
        />
        <Image
          style={[styles.queijo1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/queijo-1.png")}
        />
        <Text style={[styles.vinhos, styles.homeLayout]}>Vinhos</Text>
        <Text style={[styles.home, styles.homeLayout]}>Home</Text>
        <Text style={styles.uvas}>Uvas</Text>
        <Text style={[styles.harmonizaes, styles.harmonizaesLayout]}>
          Harmonizações
        </Text>
        <Pressable
          style={styles.participantes}
          onPress={() => navigation.navigate("Participantes")}
        >
          <Text style={styles.harmonizaesLayout}>Participantes</Text>
        </Pressable>
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={[styles.carrinhoDeCompras1Icon, styles.textLayout]}
          contentFit="cover"
          source={require("../assets/carrinhodecompras-11.png")}
        />
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon6.png")}
        />
        <Pressable
          style={styles.circulo111}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            contentFit="cover"
            source={require("../assets/circulo1-1-11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.casa11, styles.casa11Position]}
          onPress={() => navigation.navigate("Catalogo")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            contentFit="cover"
            source={require("../assets/casa-1-1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "0%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  menuPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 31,
    position: "absolute",
  },
  textLayout: {
    width: 33,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.pluto,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    height: "98.12%",
  },
  menuChildLayout: {
    height: 2,
    width: 30,
    left: 21,
    position: "absolute",
  },
  casa11Position: {
    left: 15,
    height: 31,
    width: 26,
    position: "absolute",
  },
  homeLayout: {
    height: 28,
    width: 62,
    textAlign: "left",
    color: Color.branco,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: 52,
    lineHeight: 16,
    position: "absolute",
  },
  harmonizaesLayout: {
    width: 136,
    height: 28,
    textAlign: "left",
    color: Color.branco,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    lineHeight: 16,
  },
  icon1Layout: {
    height: "100%",
    width: "100%",
  },
  bodyIcon: {
    height: 15,
    opacity: 0.35,
    width: 26,
  },
  terminalIcon: {
    height: "0.69%",
    width: "0.37%",
    top: "2.5%",
    right: "4.49%",
    bottom: "96.81%",
    left: "95.14%",
    opacity: 0.4,
  },
  reserveIcon: {
    height: "1.05%",
    width: "5.12%",
    top: "2.32%",
    right: "5.63%",
    bottom: "96.63%",
    left: "89.26%",
  },
  menuVerticalAbertoChild: {
    top: 0,
    left: 0,
    height: 932,
  },
  menuVerticalAbertoItem: {
    height: 101,
    top: 0,
    left: 0,
  },
  menuVerticalAbertoInner: {
    top: 93,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.principalCor,
    height: 839,
  },
  vectorIcon: {
    top: 348,
    left: 11,
    width: 31,
  },
  text: {
    top: "1.88%",
    right: 0,
    textAlign: "right",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.pluto,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    height: "98.12%",
  },
  time: {
    marginLeft: -21.95,
    left: "50%",
    textAlign: "center",
    width: 75,
    top: "0%",
    position: "absolute",
  },
  emptyBarIcon: {
    height: "61.5%",
    width: "0.93%",
    top: "12.21%",
    right: "94.92%",
    bottom: "26.29%",
    left: "4.15%",
    opacity: 0.25,
  },
  fullBarsIcon: {
    height: 11,
    width: 13,
  },
  wifiIcon: {
    width: 16,
    height: 13,
  },
  parent: {
    height: "2.29%",
    top: "1.82%",
    right: 52,
    bottom: "95.89%",
    width: 356,
    position: "absolute",
  },
  lineIcon: {
    top: 907,
    left: 118,
    width: 189,
    height: 10,
    position: "absolute",
  },
  uva1: {
    top: 846,
    left: 29,
    overflow: "hidden",
    width: 26,
  },
  menuVerticalAbertoChild1: {
    top: 68,
  },
  menuVerticalAbertoChild2: {
    top: 75,
  },
  menuVerticalAbertoChild3: {
    top: 81,
  },
  vectorIcon1: {
    top: 179,
    left: 20,
    width: 21,
    height: 35,
    position: "absolute",
  },
  uva1Icon: {
    top: 238,
    overflow: "hidden",
  },
  queijo1Icon: {
    top: 293,
    left: 14,
    overflow: "hidden",
    width: 26,
  },
  vinhos: {
    top: 183,
  },
  home: {
    top: 120,
  },
  uvas: {
    top: 247,
    left: 55,
    height: 37,
    width: 62,
    textAlign: "left",
    color: Color.branco,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    lineHeight: 16,
    position: "absolute",
  },
  harmonizaes: {
    top: 302,
    left: 50,
    position: "absolute",
  },
  participantes: {
    top: 357,
    left: 52,
    position: "absolute",
  },
  vectorIcon2: {
    top: 60,
    left: 335,
    width: 26,
  },
  carrinhoDeCompras1Icon: {
    top: 56,
    left: 382,
    height: 39,
    overflow: "hidden",
  },
  icon: {
    top: 44,
    left: 399,
    overflow: "hidden",
    width: 26,
  },
  icon1: {
    overflow: "hidden",
  },
  circulo111: {
    left: 406,
    top: 48,
    height: 16,
    width: 13,
    position: "absolute",
  },
  casa11: {
    top: 115,
  },
  menuVerticalAberto: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
  },
  menuVertical: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default MenuVertical;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Filtros = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.filtros}>
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
        style={[styles.filtrosChild, styles.filtrosPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.filtrosItem, styles.filtrosPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textClr]}>100%</Text>
        <Text style={styles.time}>14:04 PM</Text>
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
      <View style={[styles.uva1, styles.iconLayout]} />
      <Image
        style={[styles.filtrosInner, styles.filtrosLayout]}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.lineIcon, styles.filtrosLayout]}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.filtrosChild1, styles.filtrosLayout]}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={[styles.carrinhoDeCompras1, styles.uva11Layout]}
        onPress={() => navigation.navigate("Carrinho")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/carrinhodecompras-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon3.png")}
      />
      <View style={[styles.uva11, styles.uva11Layout]} />
      <View style={[styles.rectangleView, styles.button2Border]} />
      <Image
        style={[styles.vectorIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.rectangleView, styles.button2Border]} />
      <Text style={styles.encontreSeuVinho}>{`Encontre seu vinho `}</Text>
      <Image
        style={[styles.procurar1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/procurar-1.png")}
      />
      <Text style={[styles.portugal, styles.itliaTypo]}>Portugal</Text>
      <Text style={[styles.argentina, styles.paisLayout]}>Argentina</Text>
      <Text style={[styles.itlia, styles.itliaLayout]}>Itália</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressBarChild, styles.progressPosition]} />
        <View style={[styles.progressBarItem, styles.progressFlexBox]} />
        <View style={[styles.progressBarInner, styles.progressPosition]}>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.frameItem, styles.frameItemLayout]} />
          </View>
        </View>
        <View style={[styles.progressBarChild1, styles.progressFlexBox]} />
        <View style={[styles.progressBarChild2, styles.frameItemLayout]} />
      </View>
      <Text style={[styles.r50000, styles.r1000Typo]}>+R$ 500,00</Text>
      <View style={[styles.checkbox, styles.checkboxPosition1]}>
        <View style={[styles.checkboxChild, styles.checkboxPosition]} />
      </View>
      <Text style={[styles.vinhoBranco, styles.vinhoTypo]}>Vinho branco</Text>
      <View style={[styles.checkbox1, styles.portugalPosition]}>
        <View style={[styles.checkboxItem, styles.checkboxPosition]} />
        <Image
          style={[styles.checkIcon, styles.checkIconPosition]}
          contentFit="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <View style={[styles.checkbox2, styles.checkbox2Position]}>
        <View style={[styles.checkboxItem, styles.checkboxPosition]} />
        <Image
          style={[styles.checkIcon1, styles.checkIconPosition]}
          contentFit="cover"
          source={require("../assets/check2.png")}
        />
      </View>
      <View style={[styles.checkbox3, styles.argentinaPosition]}>
        <View style={[styles.checkboxChild, styles.checkboxPosition]} />
      </View>
      <View style={[styles.checkbox4, styles.checkbox4Position]}>
        <View style={[styles.checkboxChild, styles.checkboxPosition]} />
      </View>
      <View style={[styles.checkbox5, styles.itliaLayout]}>
        <View style={[styles.checkboxChild, styles.checkboxPosition]} />
      </View>
      <Text style={[styles.filtrarPor, styles.tipoTypo]}>Filtrar por:</Text>
      <Text style={[styles.pais, styles.paisTypo]}>Pais</Text>
      <Text style={[styles.valor, styles.tipoTypo]}>Valor</Text>
      <Text style={[styles.tipo, styles.tipoTypo]}>Tipo</Text>
      <Text style={[styles.vinhoSeco, styles.checkbox4Position]}>
        Vinho seco
      </Text>
      <Text style={[styles.vinhoTinto, styles.vinhoTypo]}>Vinho tinto</Text>
      <Text style={[styles.verMais, styles.verTypo]}>Ver mais</Text>
      <Text style={[styles.verMais1, styles.verTypo]}>Ver mais</Text>
      <Text style={[styles.r1000, styles.r1000Typo]}>R$ 10,00</Text>
      <Pressable
        style={[styles.button, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("Catalogo")}
      >
        <Text
          style={[styles.button1, styles.buttonTypo]}
        >{`Aplicar filtros `}</Text>
      </Pressable>
      <View style={[styles.button2, styles.buttonShadowBox]}>
        <Text style={[styles.button3, styles.buttonTypo]}>Cancelar</Text>
      </View>
      <Image
        style={styles.filtrosChild3}
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
  filtrosPosition: {
    left: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.branco,
    fontSize: FontSize.size_xs,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  filtrosLayout: {
    height: 2,
    left: 23,
    width: 27,
    position: "absolute",
  },
  uva11Layout: {
    height: 30,
    position: "absolute",
  },
  button2Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconPosition: {
    height: 18,
    top: 123,
    position: "absolute",
  },
  itliaTypo: {
    width: 172,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    lineHeight: 13,
    left: 54,
    textAlign: "left",
    color: Color.preto,
    fontSize: FontSize.size_xs,
  },
  paisLayout: {
    width: 193,
    textAlign: "left",
    color: Color.preto,
    position: "absolute",
  },
  itliaLayout: {
    height: 17,
    position: "absolute",
  },
  progressPosition: {
    borderBottomLeftRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    flex: 1,
  },
  progressFlexBox: {
    flex: 1,
    height: 8,
  },
  frameItemLayout: {
    borderBottomRightRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 8,
    flex: 1,
  },
  r1000Typo: {
    height: 15,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.preto,
    lineHeight: 16,
    position: "absolute",
  },
  checkboxPosition1: {
    top: 648,
    height: 17,
    position: "absolute",
  },
  checkboxPosition: {
    borderRadius: Border.br_9xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  vinhoTypo: {
    left: 49,
    width: 172,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    lineHeight: 13,
    textAlign: "left",
    color: Color.preto,
    fontSize: FontSize.size_xs,
  },
  portugalPosition: {
    top: 276,
    height: 18,
    position: "absolute",
  },
  checkIconPosition: {
    left: "11.43%",
    right: "10.71%",
    width: "77.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  checkbox2Position: {
    top: 587,
    height: 17,
    position: "absolute",
  },
  argentinaPosition: {
    top: 302,
    height: 18,
  },
  checkbox4Position: {
    top: 617,
    height: 18,
    position: "absolute",
  },
  tipoTypo: {
    fontSize: FontSize.size_base,
    width: 193,
    textAlign: "left",
    color: Color.preto,
    lineHeight: 16,
    position: "absolute",
  },
  paisTypo: {
    fontFamily: FontFamily.interRegular,
    left: 25,
  },
  verTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 9,
    color: Color.principalCor,
    height: 17,
    width: 193,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  buttonShadowBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "center",
    height: 41,
    width: 153,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_mini,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  buttonTypo: {
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
    fontWeight: "600",
    textAlign: "left",
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
  filtrosChild: {
    top: 17,
    width: 430,
    height: 932,
  },
  filtrosItem: {
    top: 5,
    width: 432,
    height: 77,
  },
  text: {
    top: "2.07%",
    right: 0,
    textAlign: "right",
    width: 30,
    fontFamily: FontFamily.pluto,
    lineHeight: 16,
    height: "97.93%",
    color: Color.branco,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  time: {
    marginLeft: -19,
    left: "50%",
    textAlign: "center",
    width: 68,
    top: "0%",
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
  uva1: {
    top: 763,
    left: 467,
    overflow: "hidden",
  },
  filtrosInner: {
    top: 52,
  },
  lineIcon: {
    top: 57,
  },
  filtrosChild1: {
    top: 62,
  },
  vectorIcon: {
    top: 46,
    left: 309,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  carrinhoDeCompras1: {
    left: 351,
    top: 43,
    width: 30,
  },
  icon1: {
    top: 34,
    left: 367,
    overflow: "hidden",
  },
  uva11: {
    top: 785,
    left: 21,
    width: 27,
    height: 30,
    overflow: "hidden",
  },
  rectangleView: {
    top: 117,
    left: 52,
    borderRadius: Border.br_xl,
    backgroundColor: Color.branco,
    width: 238,
    height: 33,
    borderColor: Color.principalCor,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  vectorIcon1: {
    width: 15,
    left: 29,
    height: 18,
    top: 123,
  },
  encontreSeuVinho: {
    left: 69,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    width: 150,
    height: 20,
    textAlign: "left",
    color: Color.preto,
    fontSize: FontSize.size_sm,
    top: 123,
    lineHeight: 16,
    position: "absolute",
  },
  procurar1Icon: {
    left: 263,
    width: 18,
    height: 18,
    top: 123,
    overflow: "hidden",
  },
  portugal: {
    top: 276,
    height: 18,
    position: "absolute",
  },
  argentina: {
    top: 302,
    height: 18,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    lineHeight: 13,
    left: 54,
    width: 193,
    fontSize: FontSize.size_xs,
  },
  itlia: {
    top: 328,
    width: 172,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    lineHeight: 13,
    left: 54,
    textAlign: "left",
    color: Color.preto,
    fontSize: FontSize.size_xs,
  },
  progressBarChild: {
    height: 8,
    backgroundColor: Color.principalCor,
  },
  progressBarItem: {
    height: 8,
    backgroundColor: Color.principalCor,
  },
  frameChild: {
    width: 50,
    backgroundColor: Color.neutralBlue200,
    height: 8,
  },
  frameItem: {
    marginLeft: -56,
    backgroundColor: Color.principalCor,
  },
  rectangleParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  progressBarInner: {
    backgroundColor: Color.neutralBlue200,
  },
  progressBarChild1: {
    backgroundColor: Color.neutralBlue200,
    height: 8,
  },
  progressBarChild2: {
    backgroundColor: Color.neutralBlue200,
  },
  progressBar: {
    top: 475,
    width: 346,
    flexDirection: "row",
    left: 29,
    height: 10,
    position: "absolute",
  },
  r50000: {
    top: 476,
    left: 316,
    width: 64,
  },
  checkboxChild: {
    borderColor: Color.cinza,
    backgroundColor: Color.neutralBlue200,
    borderWidth: 1,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
  },
  checkbox: {
    width: 14,
    left: 25,
  },
  vinhoBranco: {
    top: 587,
    height: 17,
    position: "absolute",
  },
  checkboxItem: {
    backgroundColor: Color.principalCor,
  },
  checkIcon: {
    height: "77.78%",
    top: "11.11%",
    bottom: "11.11%",
  },
  checkbox1: {
    left: 27,
    width: 14,
  },
  checkIcon1: {
    height: "77.65%",
    top: "11.18%",
    bottom: "11.18%",
  },
  checkbox2: {
    width: 14,
    left: 25,
  },
  checkbox3: {
    left: 27,
    width: 14,
    position: "absolute",
  },
  checkbox4: {
    width: 14,
    left: 25,
  },
  checkbox5: {
    top: 327,
    left: 27,
    width: 14,
  },
  filtrarPor: {
    top: 194,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    left: 27,
    height: 33,
  },
  pais: {
    top: 241,
    height: 19,
    left: 25,
    width: 193,
    textAlign: "left",
    color: Color.preto,
    position: "absolute",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
  },
  valor: {
    top: 414,
    left: 25,
    fontFamily: FontFamily.interRegular,
    height: 20,
  },
  tipo: {
    top: 548,
    left: 25,
    fontFamily: FontFamily.interRegular,
    height: 20,
  },
  vinhoSeco: {
    left: 49,
    width: 172,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    lineHeight: 13,
    textAlign: "left",
    color: Color.preto,
    fontSize: FontSize.size_xs,
  },
  vinhoTinto: {
    top: 648,
    height: 17,
    position: "absolute",
  },
  verMais: {
    top: 358,
    color: Color.principalCor,
    left: 27,
  },
  verMais1: {
    top: 685,
    left: 24,
    color: Color.principalCor,
  },
  r1000: {
    top: 483,
    width: 47,
    left: 25,
  },
  button1: {
    color: Color.branco,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
    fontWeight: "600",
  },
  button: {
    top: 809,
    left: 27,
    backgroundColor: Color.principalCor,
  },
  button3: {
    fontSize: 11,
    color: Color.principalCor,
  },
  button2: {
    top: 804,
    left: 218,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.principalCor,
  },
  filtrosChild3: {
    top: 902,
    left: 126,
    width: 173,
    height: 10,
    position: "absolute",
  },
  filtros: {
    overflow: "hidden",
    height: 932,
    width: "100%",
    flex: 1,
  },
});

export default Filtros;

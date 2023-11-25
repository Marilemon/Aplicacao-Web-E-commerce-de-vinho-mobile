import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={styles.homemadePhoneWallpaper1}
        contentFit="cover"
        source={require("../assets/homemade-phone-wallpaper-1.png")}
      />
      <Image
        style={styles.loginChild}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.loginItem}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={styles.statusBarsIphone8statusB}>
        <Image
          style={[
            styles.iconssystemstatusBarbatter,
            styles.iconssystemstatusLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/iconssystemstatus-barbattery.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>100%</Text>
        <Text style={[styles.time, styles.textTypo]}>14:04 PM</Text>
        <Image
          style={[
            styles.iconssystemstatusBarscreen,
            styles.iconssystemstatusLayout,
          ]}
          contentFit="cover"
          source={require("../assets/iconssystemstatus-barscreen-lock.png")}
        />
        <Image
          style={[
            styles.iconssystemstatusBarsignal,
            styles.iconssystemstatusLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/iconssystemstatus-barsignal.png")}
        />
        <View
          style={[
            styles.iconssystemstatusBarlocati,
            styles.iconssystemstatusLayout,
          ]}
        />
        <Image
          style={[
            styles.iconssystemstatusBarwifi,
            styles.iconssystemstatusLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/iconssystemstatus-barwifi.png")}
        />
      </View>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <View style={[styles.loginInner, styles.loginInnerLayout]} />
      <View style={[styles.rectangleParent, styles.componentChildLayout]}>
        <View style={[styles.componentChild, styles.componentChildLayout]} />
        <Image
          style={styles.google1Icon}
          contentFit="cover"
          source={require("../assets/google-1.png")}
        />
        <Text style={styles.continueComO}>Continue com o Google</Text>
      </View>
      <Text style={[styles.continueComO1, styles.continueTypo]}>
        Continue com o Instagram
      </Text>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.loginInnerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <View style={[styles.vectorParent, styles.ouLayout]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        <Text style={[styles.ou, styles.ouClr]}>OU</Text>
      </View>
      <View style={[styles.rectangleView, styles.loginChild1Layout]} />
      <View style={[styles.loginChild1, styles.loginChild1Position]} />
      <Text style={[styles.noTemUmaContainer, styles.loginChild1Position]}>
        <Text style={styles.noTemUma}>Não tem uma conta?</Text>
        <Text style={styles.ouTypo}>{` 
Cadastre-se`}</Text>
      </Text>
      <Text style={[styles.esqueceuSuaSenha, styles.ouClr]}>
        Esqueceu sua senha?
      </Text>
      <Text style={[styles.login1, styles.icon2Layout]}>Login</Text>
      <Image
        style={[styles.icon2, styles.icon2Layout]}
        contentFit="cover"
        source={require("../assets/icon2.png")}
      />
      <Text style={[styles.continueComO2, styles.continueTypo]}>
        Continue com o Facebook
      </Text>
      <Text style={[styles.seuemailgmailcom, styles.text1Typo]}>
        Seuemail@gmail.com
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>********</Text>
      <View style={[styles.button, styles.iconLayout]}>
        <Pressable onPress={() => navigation.navigate("Carrossel")}>
          <Text style={styles.entrar}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconssystemstatusLayout1: {
    height: 14,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.pluto,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    height: "80%",
    color: Color.branco,
    position: "absolute",
  },
  iconssystemstatusLayout: {
    width: 14,
    height: 14,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    position: "absolute",
  },
  loginInnerLayout: {
    width: 290,
    borderRadius: Border.br_mini,
    left: 61,
    position: "absolute",
  },
  componentChildLayout: {
    width: 299,
    position: "absolute",
  },
  continueTypo: {
    height: 35,
    width: 222,
    textAlign: "left",
    color: Color.cinza,
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  ouLayout: {
    height: 34,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    width: 101,
    position: "absolute",
  },
  ouClr: {
    color: Color.principalCor,
    textAlign: "left",
  },
  loginChild1Layout: {
    height: 31,
    width: 288,
    backgroundColor: Color.branco,
    borderRadius: Border.br_6xs,
  },
  loginChild1Position: {
    left: 72,
    position: "absolute",
  },
  icon2Layout: {
    height: 30,
    position: "absolute",
  },
  text1Typo: {
    color: Color.d9D9D9,
    left: 80,
    width: 222,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    fontSize: FontSize.size_mini,
    height: 24,
    position: "absolute",
  },
  homemadePhoneWallpaper1: {
    left: 0,
    width: 517,
    top: 0,
    position: "absolute",
    height: 932,
  },
  loginChild: {
    top: 169,
    left: 52,
    width: 325,
    height: 558,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  loginItem: {
    top: 903,
    left: 124,
    width: 173,
    height: 10,
    position: "absolute",
  },
  iconssystemstatusBarbatter: {
    right: 3,
    width: 32,
    top: "50%",
    marginTop: -7,
  },
  text: {
    top: "16.36%",
    right: 35,
    textAlign: "right",
    width: 30,
    color: Color.branco,
  },
  time: {
    marginLeft: -34.5,
    top: "15%",
    textAlign: "center",
    width: 68,
    left: "50%",
    color: Color.branco,
  },
  iconssystemstatusBarscreen: {
    display: "none",
    left: 180,
    top: 3,
  },
  iconssystemstatusBarsignal: {
    left: 4,
    width: 21,
    top: 3,
  },
  iconssystemstatusBarlocati: {
    right: 97,
    top: "50%",
    marginTop: -7,
  },
  iconssystemstatusBarwifi: {
    left: 29,
    width: 18,
    top: "50%",
    marginTop: -7,
  },
  statusBarsIphone8statusB: {
    height: "2.36%",
    width: "96.51%",
    right: "3.49%",
    bottom: "97.64%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  icon: {
    top: 258,
    left: 326,
    width: 32,
    overflow: "hidden",
  },
  loginInner: {
    top: 307,
    height: 57,
    backgroundColor: Color.branco,
  },
  componentChild: {
    height: "100%",
    marginLeft: -149.5,
    bottom: "0%",
    backgroundColor: Color.branco,
    borderRadius: Border.br_mini,
    left: "50%",
    top: "0%",
  },
  google1Icon: {
    left: 19,
    height: 24,
    width: 24,
    top: 18,
    position: "absolute",
    overflow: "hidden",
  },
  continueComO: {
    width: 222,
    color: Color.cinza,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    height: 24,
    top: 18,
    left: 61,
    position: "absolute",
  },
  rectangleParent: {
    top: 385,
    height: 60,
    left: 61,
    width: 299,
  },
  continueComO1: {
    left: 120,
    top: 324,
    height: 35,
  },
  icon1: {
    left: 80,
    top: 324,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 234,
    height: 49,
  },
  frameChild: {
    top: 10,
    left: 12,
  },
  frameItem: {
    top: 11,
    left: 180,
  },
  ou: {
    left: 131,
    fontSize: FontSize.size_xl,
    width: 38,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 34,
    position: "absolute",
    fontStyle: "italic",
    color: Color.principalCor,
    top: 0,
  },
  vectorParent: {
    top: 474,
    left: 66,
    width: 286,
  },
  rectangleView: {
    top: 511,
    left: 71,
    position: "absolute",
  },
  loginChild1: {
    top: 559,
    height: 31,
    width: 288,
    backgroundColor: Color.branco,
    borderRadius: Border.br_6xs,
  },
  noTemUma: {
    fontFamily: FontFamily.interRegular,
  },
  ouTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  noTemUmaContainer: {
    top: 619,
    fontSize: FontSize.size_smi,
    width: 204,
    height: 25,
    color: Color.principalCor,
    textAlign: "left",
  },
  esqueceuSuaSenha: {
    top: 593,
    left: 250,
    fontSize: FontSize.size_3xs,
    textDecoration: "underline",
    width: 104,
    fontFamily: FontFamily.interLight,
    color: Color.principalCor,
    fontStyle: "italic",
    height: 32,
    position: "absolute",
  },
  login1: {
    top: 184,
    left: 70,
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    fontFamily: FontFamily.kanitRegular,
    color: Color.colorDarkslateblue,
    width: 163,
    textAlign: "left",
  },
  icon2: {
    top: 245,
    left: 74,
    width: 30,
    overflow: "hidden",
  },
  continueComO2: {
    top: 251,
    left: 115,
  },
  seuemailgmailcom: {
    top: 519,
  },
  text1: {
    top: 566,
  },
  entrar: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
    textAlign: "left",
    color: Color.branco,
  },
  button: {
    top: 667,
    left: 174,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_mini,
  },
  login: {
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

export default Login;

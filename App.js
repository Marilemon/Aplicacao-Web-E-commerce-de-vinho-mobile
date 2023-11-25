const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import YayYoureConnected from "./components/YayYoureConnected";
import Login from "./screens/Login";
import CnfirmaoDeIdade from "./screens/CnfirmaoDeIdade";
import Filtros from "./screens/Filtros";
import Carrinho from "./screens/Carrinho";
import Catalogo from "./screens/Catalogo";
import Carrossel from "./screens/Carrossel";
import Participantes from "./screens/Participantes";
import MenuVertical from "./screens/MenuVertical";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "NunitoSans12pt-Regular": require("./assets/fonts/NunitoSans12pt-Regular.ttf"),
    "NunitoSans12pt-SemiBold": require("./assets/fonts/NunitoSans12pt-SemiBold.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Kanit-ExtraLight": require("./assets/fonts/Kanit-ExtraLight.ttf"),
    "Kanit-Regular": require("./assets/fonts/Kanit-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CnfirmaoDeIdade"
              component={CnfirmaoDeIdade}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Filtros"
              component={Filtros}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carrinho"
              component={Carrinho}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Catalogo"
              component={Catalogo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carrossel"
              component={Carrossel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Participantes"
              component={Participantes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuVertical"
              component={MenuVertical}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

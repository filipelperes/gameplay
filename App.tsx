import "expo-dev-client";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  return fontsLoaded && (
    <Background>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
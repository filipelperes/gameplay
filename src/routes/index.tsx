import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
   const theme = {
      ...DefaultTheme,
      colors: {
         ...DefaultTheme.colors,
         background: "transparent"
      }
   };

   return (
      <NavigationContainer theme={theme}>
         <AuthRoutes />
      </NavigationContainer>
   );
}
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { theme } from "../global/styles/theme";

export function Routes() {
   const custom = {
      ...DefaultTheme,
      colors: {
         ...DefaultTheme.colors,
         background: theme.colors.secondary100
      }
   };

   return (
      <NavigationContainer theme={custom}>
         <AuthRoutes />
      </NavigationContainer>
   );
}
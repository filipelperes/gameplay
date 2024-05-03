import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { theme } from "../global/styles/theme";
import { useAuth } from "../hooks/auth";
import { SignIn } from "../screens/SignIn";

export function Routes() {
   const { user } = useAuth();
   const custom = {
      ...DefaultTheme,
      colors: {
         ...DefaultTheme.colors,
         background: theme.colors.secondary100
      }
   };

   return (
      <NavigationContainer theme={custom}>
         {user.id ? <AuthRoutes /> : <SignIn />}
      </NavigationContainer>
   );
}
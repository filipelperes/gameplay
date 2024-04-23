import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SignIn } from '../screens/SignIn';
import { RootStackParamList } from "../utils/types/RootStackParamList";

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {
   return (
      <Navigator
         screenOptions={{
            headerShown: false
         }}
      >
         <Screen
            name="SignIn"
            component={SignIn}
         />
         <Screen
            name="Home"
            component={Home}
         />
      </Navigator>
   );

}
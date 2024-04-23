import {
   View,
   Text,
   Image
} from "react-native";

import illustration from "../../assets/illustration.png";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../utils/types/RootStackParamList";

export function SignIn() {
   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

   const handleSignIn = () => {
      navigation.navigate("Home");
   };

   return (
      <View style={styles.container}>
         <Image
            source={illustration}
            style={styles.image}
            resizeMode="stretch"
         />

         <View style={styles.content}>
            <Text style={styles.title}>
               Conecte-se {"\n"}
               e organize suas {"\n"}
               jogatinas
            </Text>

            <Text style={styles.subtitle}>
               Crie grupos para jogar seus games {"\n"}
               favoritos com seus amigos
            </Text>

            <ButtonIcon
               title="Entrar com Discord"
               onPress={handleSignIn}
            />
         </View>
      </View>
   );
}
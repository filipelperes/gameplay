import {
   View,
   Text,
   Image
} from "react-native";

import illustration from "../../assets/illustration.png";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../utils/types/RootStackParamList";
import { Background } from "../../components/Background";

export function SignIn() {
   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

   const handleSignIn = () => {
      navigation.navigate("Home");
   };

   return (
      <Background>
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

               <Button
                  title="Entrar com Discord"
                  onPress={handleSignIn}
                  showIcon
               />
            </View>
         </View>
      </Background>
   );
}
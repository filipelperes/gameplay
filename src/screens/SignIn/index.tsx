import {
   View,
   Text,
   Image,
   Alert,
   ActivityIndicator
} from "react-native";

import illustration from "../../assets/illustration.png";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

export function SignIn() {
   const { loading, signIn } = useAuth();

   const handleSignIn = () => signIn()
      .catch(error => Alert.alert(`${error}`));

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

               {
                  loading
                     ? <ActivityIndicator color={theme.colors.primary} />
                     : <Button
                        title="Entrar com Discord"
                        onPress={handleSignIn}
                        showIcon
                     />
               }
            </View>
         </View>
      </Background>
   );
}
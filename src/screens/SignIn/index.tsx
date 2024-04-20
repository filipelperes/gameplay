import { View,
         Text,
         Image
} from "react-native";

import illustration from "../../assets/illustration.png";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
   return (
      <View style={styles.container}>
         <StatusBar
            style="light"
            backgroundColor="transparent"
            translucent
         />

         <Image
            source={illustration}
            style={styles.image}
            resizeMode="stretch"
         />

         <View style={styles.content}>
            <Text style={styles.title}>
               Organize {`\n`}
               suas jogatinas {`\n`}
               facilmente
            </Text>

            <Text style={styles.subtitle}>
               Crie grupos para jogar seus games {`\n`}
               favoritos com seus amigos
            </Text>

            <ButtonIcon
               title="Entrar com Discord"
               activeOpacity={.7}
            />
         </View>
      </View>
   );
}
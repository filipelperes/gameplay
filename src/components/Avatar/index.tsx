import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = {
   urlImage: string;
}

export const Avatar = ({ urlImage }: Props) => {
   const { secondary50, secondary70 } = theme.colors;

   return (
      <LinearGradient colors={[secondary50, secondary70]} style={styles.container}>
         <Image source={{ uri: urlImage }} style={styles.avatar} />
      </LinearGradient>
   )
}
import { Image } from "react-native";
import { styles } from "./styles";

export const GuildIcon = () => {
   const uri = "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0.png";

   return (
      <Image
         source={{ uri }}
         style={styles.image}
         resizeMode="cover"
      />
   );
};
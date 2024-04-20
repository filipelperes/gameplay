import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import discord from "../../assets/discord.png";
import { styles } from "./style";

type Props = TouchableOpacityProps & {
   title: String;
}

export function ButtonIcon({ title, ...rest }: Props) {
   return (
      <TouchableOpacity
         style={styles.container}
         { ...rest }
      >
         <View style={styles.iconWrapper}>
            <Image
               source={discord}
               style={styles.icon}
            />
         </View>
         <Text style={styles.title}>
            { title }
         </Text>
      </TouchableOpacity>
   )
}
import { Image, Text, View } from "react-native";
import discord from "../../assets/discord.png";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = RectButtonProps & {
   title: string;
};

export const ButtonIcon = ({ title, ...rest }: Props) => {
   return (
      <RectButton
         style={styles.container}
         {...rest}
      >
         <View style={styles.iconWrapper}>
            <Image
               source={discord}
               style={styles.icon}
            />
         </View>
         <Text style={styles.title}>
            {title}
         </Text>
      </RectButton>
   );
};
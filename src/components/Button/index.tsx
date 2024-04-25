import { Image, Text, View } from "react-native";
import discord from "../../assets/discord.png";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = RectButtonProps & {
   title: string;
   showIcon?: boolean;
};

export const Button = ({ title, showIcon = false, ...rest }: Props) => (
   <RectButton
      style={styles.container}
      {...rest}
   >
      {showIcon &&
         <View style={styles.iconWrapper}>
            <Image
               source={discord}
               style={styles.icon}
            />
         </View>
      }
      <Text style={styles.title}>
         {title}
      </Text>
   </RectButton>
);
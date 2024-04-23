import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { View, Text } from "react-native";

type Props = RectButtonProps & {
   title: string;
   icon: React.FC<SvgProps>;
   checked?: boolean;
};

export const Category = ({
   title,
   icon: Icon,
   checked = false,
   ...rest
}: Props) => {
   const { secondary50, secondary70 } = theme.colors;

   return (
      <RectButton {...rest}>
         <LinearGradient colors={[secondary50, secondary70]} style={styles.container}>
            <View style={[styles.content, { opacity: checked ? 1 : .4 }]}>
               <View style={checked ? styles.checked : styles.check} />
               <Icon width={48} height={48} />
               <Text style={styles.title}>{title}</Text>
            </View>
         </LinearGradient>
      </RectButton>
   );
};
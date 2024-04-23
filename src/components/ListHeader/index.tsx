import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
   title: string;
   subtitle: string;

};

export const ListHeader = ({ title, subtitle }: Props) => (
   <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
   </View>
);
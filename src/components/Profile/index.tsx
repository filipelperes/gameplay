import { Text, View } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";

export const Profile = () => {
   return (
      <View style={styles.container}>
         <Avatar urlImage="https://github.com/filipelperes.png" />
         <View>
            <View style={styles.user}>
               <Text style={styles.greeting}>Olá,</Text>
               <Text style={styles.username}>Filipe</Text>
            </View>
            <Text style={styles.message}>Hoje é dia de vitória</Text>
         </View>
      </View>
   );

};
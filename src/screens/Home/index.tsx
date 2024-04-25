import { FlatList, View, Text } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { CategorySelect } from "../../components/CategorySelect";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../utils/types/RootStackParamList";

export function Home() {
   const [category, setCategory] = useState('');

   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

   const appointments = [
      {
         id: '1',
         guilds: {
            id: "1",
            name: "Lendários",
            icon: null,
            owner: true
         },
         category: "1",
         date: "22/06 ás 20:40h",
         description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
      },
      {
         id: '2',
         guilds: {
            id: "1",
            name: "Lendários",
            icon: null,
            owner: true
         },
         category: "1",
         date: "22/06 ás 20:40h",
         description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
      }
   ];

   const handleCategorySelect = (id: string) => {
      id === category ? setCategory("") : setCategory(id);
   };

   const handleAppointmentDetails = () => {
      navigation.navigate("AppointmentDetails");
   };

   const handleAppointmentCreate = () => {
      navigation.navigate("AppointmentCreate");
   };

   return (
      <Background>
         <View style={styles.header}>
            <Profile />
            <ButtonAdd onPress={handleAppointmentCreate} />
         </View>

         <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
         />

         <View style={styles.content}>
            <ListHeader
               title="Partidas agendadas"
               subtitle="Total 6"
            />
            <FlatList
               data={appointments}
               keyExtractor={({ id }) => id}
               renderItem={({ item }) => (
                  <Appointment
                     onPress={handleAppointmentDetails}
                     data={item}
                  />
               )}
               ItemSeparatorComponent={() => <ListDivider />}
               style={styles.matches}
               showsVerticalScrollIndicator={false}
            />
         </View>
      </Background>
   );
}
import { FlatList, View, Text } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

export function Home() {
   const [category, setCategory] = useState('');

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

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Profile />
            <ButtonAdd />
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
                  <Appointment data={item} />
               )}
               ItemSeparatorComponent={() => <ListDivider />}
               style={styles.matches}
               showsVerticalScrollIndicator={false}
            />
         </View>
      </View>
   );
}

// 41:42
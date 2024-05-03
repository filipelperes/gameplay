import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { GuildProps } from '../../utils/types/GuildProps';

type Props = {
   handleGuild: (guild: GuildProps) => void;
};

export function Guilds({ handleGuild }: Props) {
   const guilds = [
      {
         id: "1",
         name: "Lendários",
         icon: null,
         owner: true,
      }
   ];

   return (
      <View style={styles.container}>
         <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               <Guild data={item} onPress={() => handleGuild(item)} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            ListHeaderComponent={() => <ListDivider isCentered />}
            contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
            showsVerticalScrollIndicator={false}
            style={styles.guilds}
         />
      </View>
   );
}
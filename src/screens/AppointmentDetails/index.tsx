import { FlatList, ImageBackground, Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { Fontisto } from '@expo/vector-icons';
import { AppointmentHeader } from '../../components/AppointmentHeader';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import banner from '../../assets/banner.png';
import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { Button } from '../../components/Button';

export function AppointmentDetails() {
   const members = [
      {
         id: "1",
         username: "Filipe",
         avatar_url: "https://github.com/filipelperes.png",
         status: "online",
      },
      {
         id: "2",
         username: "Filipe",
         avatar_url: "https://github.com/filipelperes.png",
         status: "offline",
      },
      {
         id: "3",
         username: "Filipe",
         avatar_url: "https://github.com/filipelperes.png",
         status: "online",
      },
   ];

   return (
      <Background>
         <AppointmentHeader
            title="Detalhes"
            action={
               <BorderlessButton>
                  <Fontisto
                     name="share"
                     size={24}
                     color={theme.colors.primary}
                  />
               </BorderlessButton>
            }
         />

         <ImageBackground source={banner} style={styles.banner}>
            <View style={styles.bannerContent}>
               <Text style={styles.title}>Lendários</Text>
               <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
            </View>
         </ImageBackground>

         <ListHeader
            title="Jogadores"
            subtitle="Total 3"
         />

         <FlatList
            data={members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               <Member data={item} />
            )}
            ItemSeparatorComponent={() => (<ListDivider />)}
            style={styles.members}
         />

         <View style={styles.footer}>
            <Button title="Entrar na partida" showIcon />
         </View>
      </Background>
   );
}

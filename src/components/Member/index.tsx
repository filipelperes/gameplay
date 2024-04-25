import { View, Text } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { MemberProps } from '../../utils/types/MemberProps';
import { theme } from '../../global/styles/theme';

type Props = {
   data: MemberProps;
};

export const Member = ({ data }: Props) => {
   const { avatar_url, username, status } = data;

   const isOnline = status === "online";

   const { on, primary } = theme.colors;

   return (
      <View style={styles.container}>
         <Avatar urlImage={avatar_url} />
         <View>
            <Text style={styles.title}>{username}</Text>

            <View style={styles.status}>
               <View style={[
                  styles.bulletStatus,
                  {
                     backgroundColor: isOnline ? on : primary,
                  }
               ]}
               />
               <Text style={styles.nameStatus}>{isOnline ? "Disponível" : "Ocupado"}</Text>
            </View>
         </View>
      </View>
   );
};
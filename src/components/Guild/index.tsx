import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { GuildProps } from '../../utils/types/GuildProps';
import { GuildIcon } from '../GuildIcon';
import { theme } from '../../global/styles/theme';

type Props = TouchableOpacityProps & {
   data: GuildProps;
};

export const Guild = ({ data, ...rest }: Props) => {
   const { name, icon, id, owner } = data;

   return (
      <TouchableOpacity
         {...rest}
         style={styles.container}
         activeOpacity={.7}
      >
         <GuildIcon />

         <View style={styles.content}>
            <View>
               <Text style={styles.title}>{name}</Text>
               <Text style={styles.type}>{owner ? "Administrador" : "Convidado"}</Text>
            </View>
         </View>

         <Feather
            name="chevron-right"
            color={theme.colors.heading}
            size={24}
         />
      </TouchableOpacity>
   );
};
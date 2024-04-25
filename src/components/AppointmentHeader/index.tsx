import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/RootStackParamList';

type Props = {
   title: string;
   action?: ReactNode;
};

export const AppointmentHeader = ({ title, action }: Props) => {
   const { secondary100, secondary40, heading } = theme.colors;

   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

   const handleGoBack = () => navigation.goBack();

   return (
      <LinearGradient
         style={styles.container}
         colors={[secondary100, secondary40]}
      >
         <BorderlessButton onPress={handleGoBack}>
            <Feather
               name="arrow-left"
               size={24}
               color={heading}
            />
         </BorderlessButton>

         <Text style={styles.title}>{title}</Text>

         {action && <View>{action}</View>}
      </LinearGradient>
   );
};

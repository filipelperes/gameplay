import { View } from 'react-native';

import { styles } from './styles';

type Props = {
   isCentered?: boolean;
};

export const ListDivider = ({ isCentered = false }: Props) => (
   <View style={[
      styles.container,
      isCentered && {
         marginVertical: 12
      }
   ]} />
);
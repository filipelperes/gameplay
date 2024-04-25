import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

export const SmallInput = (props: TextInputProps) => (
   <TextInput
      style={styles.container}
      keyboardType="numeric"
      {...props}
   />
);
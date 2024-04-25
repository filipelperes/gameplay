import { ReactNode } from 'react';
import { styles } from './styles';
import { Modal, ModalProps, View } from 'react-native';
import { Background } from '../Background';


type Props = ModalProps & {
   children: ReactNode;
};

export const ModalView = ({ children, ...rest }: Props) => (
   <Modal
      transparent
      animationType="slide"
      {...rest}
   >
      <View style={styles.overlay}>
         <View style={styles.container}>
            <Background>
               <View style={styles.bar} />
               {children}
            </Background>
         </View>

      </View>

   </Modal>
);
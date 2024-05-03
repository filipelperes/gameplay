import { ReactNode } from 'react';
import { styles } from './styles';
import { Modal, ModalProps, TouchableWithoutFeedback, View } from 'react-native';
import { Background } from '../Background';


type Props = ModalProps & {
   children: ReactNode;
   handleModal: () => void;
};

export const ModalView = ({ children, handleModal, ...rest }: Props) => (
   <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
   >
      <TouchableWithoutFeedback onPress={handleModal}>
         <View style={styles.overlay}>
            <View style={styles.container}>
               <Background>
                  <View style={styles.bar} />
                  {children}
               </Background>
            </View>

         </View>
      </TouchableWithoutFeedback>
   </Modal>
);
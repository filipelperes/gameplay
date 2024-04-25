import { KeyboardAvoidingView, Platform, Text, View, ScrollView, Modal } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { AppointmentHeader } from '../../components/AppointmentHeader';
import { CategorySelect } from '../../components/CategorySelect';
import { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../utils/types/GuildProps';
import { GuildIcon } from '../../components/GuildIcon';

export function AppointmentCreate() {
   const [category, setCategory] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

   const handleModal = () => setOpenModal(!openModal);
   const handleGuild = (guild: GuildProps) => {
      setGuild(guild);
      handleModal();
   };

   return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} >
         <ScrollView>
            <AppointmentHeader
               title="Agendar Partida"
            />

            <Text style={[
               styles.label,
               {
                  marginLeft: 24,
                  marginTop: 36,
                  marginBottom: 18
               }
            ]}>Categoria</Text>

            <CategorySelect
               hasCheckBox
               setCategory={setCategory}
               categorySelected={category}
            />

            <View style={styles.form}>
               <RectButton onPress={handleModal}>
                  <View style={styles.select}>
                     {
                        guild.icon ? <GuildIcon /> : <View style={styles.image} />
                     }

                     <View style={styles.selectBody}>
                        <Text style={styles.label}>{guild.name ? guild.name : "Selecione um servidor"}</Text>
                     </View>

                     <Feather
                        name="chevron-right"
                        color={theme.colors.heading}
                        size={18}
                     />
                  </View>
               </RectButton>

               <View style={styles.field}>
                  <View>
                     <Text style={styles.label}>Dia e mês</Text>
                     <View style={styles.column}>
                        <SmallInput maxLength={2} />
                        <Text style={styles.divider}>/</Text>
                        <SmallInput maxLength={2} />
                     </View>
                  </View>

                  <View>
                     <Text style={styles.label}>Horário</Text>
                     <View style={styles.column}>
                        <SmallInput maxLength={2} />
                        <Text style={styles.divider}>:</Text>
                        <SmallInput maxLength={2} />
                     </View>
                  </View>
               </View>

               <View style={[styles.field, { marginBottom: 12 }]}>
                  <Text style={styles.label}>Descrição</Text>
                  <Text style={styles.charLimit}>Max 100 caracteres</Text>
               </View>

               <TextArea
                  multiline
                  autoCorrect={false}
                  maxLength={100}
                  numberOfLines={5}
               />

               <View style={styles.footer}>
                  <Button title="Agendar" />
               </View>
            </View>
         </ScrollView>
         <ModalView visible={openModal}>
            <Guilds handleGuild={handleGuild} />
         </ModalView>
      </KeyboardAvoidingView>
   );
}

import { Text, View } from "react-native";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { AppointmentProps } from "../../utils/types/AppointmentProps";
import { GuildIcon } from "../GuildIcon";
import { categories } from "../../utils/categories";
import PlayerSVG from "../../assets/player.svg";
import CalendarSVG from "../../assets/calendar.svg";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

type Props = RectButtonProps & {
   data: AppointmentProps;
};

export const Appointment = ({ data, ...rest }: Props) => {
   const { id, guilds, description, category, date } = data;
   const { owner } = guilds;
   const [cat] = categories.filter((item) => item.id === category);
   const { primary, on, secondary50, secondary70 } = theme.colors;
   return (
      <RectButton {...rest}>
         <View style={styles.container}>

            <LinearGradient
               style={styles.guildIconContainer}
               colors={[secondary50, secondary70]}
            >
               <GuildIcon />
            </LinearGradient>

            <View style={styles.content}>
               <View style={styles.header}>
                  <Text style={styles.title}>{guilds.name}</Text>
                  <Text style={styles.category}>{cat.title}</Text>
               </View>

               <View style={styles.footer}>
                  <View style={styles.dateInfo}>
                     <CalendarSVG />
                     <Text style={styles.date}>{date}</Text>
                  </View>

                  <View style={styles.playersInfo}>
                     <PlayerSVG fill={owner ? primary : on} />
                     <Text style={[styles.player, { color: owner ? primary : on }]}> {owner ? "Anfitrião" : "Visitante"} </Text>
                  </View>
               </View>

            </View>

         </View>
      </RectButton>
   );
};
import { GuildProps } from "./GuildProps";

export type AppointmentProps = {
   id: string;
   guilds: GuildProps;
   category: string;
   date: string;
   description: string;
};
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
   categorySelected: string;
   setCategory: (id: string) => void;
};

export const CategorySelect = ({ categorySelected, setCategory }: Props) => (
   <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
   >
      {
         categories.map(({ id, title, icon }) => (
            <Category
               key={id}
               title={title}
               icon={icon}
               checked={id === categorySelected}
               onPress={() => setCategory(id)}
            />
         ))
      }
   </ScrollView>
);
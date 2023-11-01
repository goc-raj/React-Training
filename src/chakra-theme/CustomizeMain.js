import { extendTheme } from "@chakra-ui/react"
import { color } from './CustomizeToken';
// import { components } from "./CustomizeComponent";
import { styles } from "./CustomizeStyle";
import { Button } from "../chakra-compo-styld/CustomButton";
import { Card } from "../chakra-compo-styld/CustomCard";
import { Menu } from "../chakra-compo-styld/CustomMenu";

export const theme = extendTheme({
  color,
  // components,
  components: {
    Button,
    Card,
    Menu
  },
  styles
})
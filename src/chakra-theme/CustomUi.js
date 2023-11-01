import { Box, Button } from "@chakra-ui/react";
import CardUsage from "../chakra-compo-styld/CardUsage";
import MenuUsage from "../chakra-compo-styld/MenuUsage";

export default function CustUi() {
    return (
        <>
            <Box bg="brand.500">Welcome</Box>
            <Button size='xl' variant='with-shadow'>
                Welcome
            </Button>
            <CardUsage />
            <MenuUsage />
        </>
    );
}

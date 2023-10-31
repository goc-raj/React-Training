import { Box, Grid, Button } from '@chakra-ui/react'

export default function SecondStyldEx() {
    return (
        <>
            <Box display='none' bg='tomato'>1Tomato</Box> {/* Not Shown because desplay : 'none' */}
            <br />
            <Box display={{ base: "none", md: "block" }} bg='tomato'>2Tomato</Box> {/* Shown */}
            <br />
            <Box hideFrom='md' bg='tomato'>3Tomato</Box> {/* Not Shown */}
            <br />
            <Box display={{ base: "block", md: "none" }} bg='tomato'>4Tomato</Box>
            <br />                               {/* Not Shown because use hideFrom in above element */}
            <Box hideBelow='md' bg='tomato'>5Tomato</Box>
            <br />                               {/* Shown */}
            <Box display={{ base: "block", md: "none" }} bg='tomato'>6Tomato</Box>
            <br />                               {/* Not Shown because use hideBelow in above element */}
            {/* The key Difference between hideFrom and hideBelow is :
            hideFrom hide itself and all elements that below it,
            while hideBelow doesn't hide itself it only hides below elemwnts. */}

            {/* Grid Layout */}
            <Box display="grid" gridColumnGap={10} gridAutoFlow="row dense" bg='green'>
                Grid
            </Box>
            <br />
            <Grid gap={50} autoFlow="row dense" bg='green'>
                Grid
            </Grid>

            {/* Background */}
            <Box
                bgImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbTZY7TqOie2PME33SS0X0uYm2FSU7igxZlL6U9J8-g&s')"
                bgPosition="center"
                bgRepeat="no-repeat"
            >ABC</Box>

            {/* Border & BorderRadius */}
            <Box border='1px' borderColor='gray.200'>Card</Box>
            <Button borderRightRadius="0">Button 1</Button>
        </>
    );
}

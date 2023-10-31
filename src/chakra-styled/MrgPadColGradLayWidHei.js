import { Box, Text } from "@chakra-ui/react"

export default function FirstStyldEx() {
    return (
        <>
            {/* Margin & Padding */}
            <Box m={2} bg='tomato'>Tomato</Box>
            <Box maxW="960px" mx="auto" bg='tomato'>Tomato</Box>
            <Box m={[2, 3]} bg='tomato'>Tomato</Box>

            {/* Color & BackgroundColor */}
            <Box color='gray.50' bg='tomato'>Tomato</Box>
            <br />
            <Box bg='tomato'>Tomato</Box>

            {/* Gradients */}
            <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />
            <Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" />
            <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
                >
                Welcome to Chakra UI
            </Text>

            {/* Layout, Width & Height */}
            <Box width="100%" height={32} bg='tomato'>Tomato</Box> {/* height=32px */}
            <br />
            <Box w="100%" h="32px" bg='tomato'>Tomato</Box>
            <br />
            <Box boxSize="sm" bg='tomato'>Tomato</Box>
            <br />
        </>
    );
}
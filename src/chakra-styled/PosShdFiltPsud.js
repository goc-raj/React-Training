import { Box, SimpleGrid, Text, Flex, Button } from "@chakra-ui/react"

export default function ThirdStyldEx() {

    const basicBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: '250px',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background:
          'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat',
    };

    const outerBoxStyles = {
        boxSize: '250px',
        p: '10',
        background:
          'url(https://picsum.photos/id/1068/200/300) center/cover no-repeat',
    };

    const innerBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: 'full',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
    };

    return (
        <>
            {/* Position */}
            <Box pos="absolute">Cover</Box>
            <Box pos="absolute" top="0" left="0">
                Absolute with top and left
            </Box>
            <Box pos="fixed" w="100%" zIndex={2}>
                Fixed with zIndex
            </Box>
            <br />

            {/* Shadow */}
            {/* Box Shadow */}
            <SimpleGrid
                bg='gray.50'
                columns={{ sm: 2, md: 4 }}
                spacing='8'
                p='10'
                textAlign='center'
                rounded='lg'
                color='gray.400'
                >
                <Box boxShadow='2xl' p='6' rounded='md' bg='white'>
                    2xl
                </Box>
                <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
                    Dark lg
                </Box>
                <Box boxShadow='outline' p='6' rounded='md' bg='white'>
                    Outline
                </Box>
                <Box boxShadow='inner' p='6' rounded='md' bg='white'>
                    Inner
                </Box>
            </SimpleGrid>
            {/* Text Shadow */}
            <Text textShadow='1px 1px #ff0000' m='6'>
                Text with shadows
            </Text>
            <br />

            {/* Filter */}
            <Flex flexWrap='wrap' gap='24px' justifyContent='space-evenly'>
                {/* adding filter property to the element */}
                <Box sx={basicBoxStyles} filter='grayscale(80%)'>
                    Box with Filter
                </Box>
                {/* adding blur property to the element */}
                <Box sx={basicBoxStyles} filter='auto' blur='2px'>
                    Box with Blur
                </Box>
                {/* adding brightness property to the element */}
                <Box sx={basicBoxStyles} filter='auto' brightness='40%'>
                    Box with Brightness
                </Box>
            </Flex>
            {/* Note: To apply blur, brightness, contrast, hueRotate, invert, saturate props on the element,
            set filter prop value to "auto". */}
            <br />
            <Flex flexWrap='wrap' gap='24px' justifyContent='space-evenly'>
                {/* adding backdrop-filter property to the element */}
                <Box sx={outerBoxStyles}>
                    <Box sx={innerBoxStyles} backdropFilter='invert(100%)'>
                    Box with Backdrop Filter
                    </Box>
                </Box>
                {/* adding backdrop-blur property to the element */}
                <Box sx={outerBoxStyles}>
                    <Box sx={innerBoxStyles} backdropFilter='auto' backdropBlur='8px'>
                    Box with Backdrop Blur
                    </Box>
                </Box>
                {/* adding backdrop-contrast property to the element */}
                <Box sx={outerBoxStyles}>
                    <Box sx={innerBoxStyles} backdropFilter='auto' backdropContrast='30%'>
                    Box with Backdrop Contrast
                    </Box>
                </Box>
            </Flex>
            {/* Note: To apply backdropBlur, backdropBrightness, backdropContrast, backdropHueRotate, backdropInvert, backdropSaturate props on the element,
            set backdropFilter prop value to "auto". */}
            <br />

            {/* Pseudo */}
            <Button
                colorScheme="teal"
                _hover={{
                    background: "white",
                    color: "teal.500",
                }}
                >
                Hover me
            </Button>
            {/* In this example if you hover 'Pseudo Parent' then 'Pseudo' color will change to tomato,
            but if you hover 'Pseudo' then 'Pseudo' color will change to tomato and text become semi bold. */}
            <Box
                role="group"
                >
                Pseudo Parent
                <Box
                    _hover={{ fontWeight: 'semibold' }}
                    _groupHover={{ color: 'tomato' }}
                >
                Pseudo
                </Box>
            </Box>
            {/* Add Emoji before Content */}
            <Box
                _before={{ content: '"🙂"', display: 'inline-block', mr: '5px' }}
                >
                A pseudo element
            </Box>
        </>
    );
}

import { Stack, HStack, VStack, Heading, Text, Box, StackDivider } from '@chakra-ui/react'

export default function StackCompo() {
    return (
        <>
            <Stack spacing={15} direction='row'>
                <Box p={5} shadow='md' borderWidth='1px'>
                    <Heading fontSize='xl'>Plan Money</Heading>
                    <Text mt={4}>The future can be even brighter but a goal without a plan is just a wish</Text>
                </Box>
                <Box p={5} shadow='md' borderWidth='1px'>
                    <Heading fontSize='xl'>Save Money</Heading>
                    <Text mt={4}>You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process</Text>
                </Box>
            </Stack>

            <HStack spacing={25}>
                <Box p={5} shadow='md' borderWidth='1px'>
                    <Heading fontSize='xl'>Plan Money</Heading>
                    <Text mt={4}>The future can be even brighter but a goal without a plan is just a wish</Text>
                </Box>
                <Box p={5} shadow='md' borderWidth='1px'>
                    <Heading fontSize='xl'>Save Money</Heading>
                    <Text mt={4}>You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process</Text>
                </Box>
            </HStack>

            {/* In some scenarios, you may want to add dividers between stacked elements.
            Pass the divider prop and set its value to the StackDivider */}
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                >
                <Box h='40px' bg='yellow.200'>
                    1
                </Box>
                <Box h='40px' bg='tomato'>
                    2
                </Box>
                <Box h='40px' bg='pink.100'>
                    3
                </Box>
            </VStack>
        </>
    );
}
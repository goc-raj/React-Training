import { Heading, Stack } from "@chakra-ui/react";

export default function HeadingCompo() {
    return (
        <>
            <Stack spacing={6}>
                <Heading as='h1' size='4xl' noOfLines={1}>
                    (4xl) In love with React & Next
                </Heading>
                <Heading as='h2' size='3xl' noOfLines={1}>
                    (3xl) In love with React & Next
                </Heading>
                <Heading as='h6' size='xs'>
                    (xs) In love with React & Next
                </Heading>
            </Stack>
        </>
    );
}

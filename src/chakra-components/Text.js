import { Text, Stack } from "@chakra-ui/react";

export default function TextCompo() {
    return (
        <>
            {/* Changing the font size */}
            <Stack spacing={3}>
                <Text fontSize='6xl'>(6xl) In love with React & Next</Text>
                <Text fontSize='xl'>(xl) In love with React & Next</Text>
                <Text fontSize='lg'>(lg) In love with React & Next</Text>
                <Text fontSize='md'>(md) In love with React & Next</Text>
                <Text fontSize='sm'>(sm) In love with React & Next</Text>
                <Text fontSize='xs'>(xs) In love with React & Next</Text>
            </Stack>

            {/* Truncate text : Reduce browser size to see effect */}
            {/* Basic Version */}
            <Text noOfLines={1}>
                "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                sentence that contains all of the letters of the English alphabet. Owing to
                its existence, Chakra was created.
            </Text>
            {/* Responsive Version */}
            <Text noOfLines={[1, 2, 3]}>
                "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                sentence that contains all of the letters of the English alphabet. Owing to
                its existence, Chakra was created.
            </Text>

            {/* Override the element */}
            <Text as='b'>Bold</Text>
            <br />
            <Text as='i'>Italic</Text>
            <br />
            <Text as='u'>Underline</Text>
        </>
    );
}

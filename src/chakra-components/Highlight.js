import { Highlight, Heading, Box, Text, Mark } from "@chakra-ui/react";
import { useHighlight } from "@chakra-ui/react";

export default function HighlightCompo() {

    const chunks = useHighlight({
        text: 'With the Highlight component, you can spotlight, emphasize and accentuate words instantly',
        query: ['spotlight', 'emphasize', 'accentuate', 'instantly']
    });

    return (
        <>
            {/* Usage with Heading and rounded highlight */}
            <Heading lineHeight='tall'>
                <Highlight
                    query='spotlight'
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                >
                    With the Highlight component, you can spotlight words.
                </Highlight>
            </Heading>

            {/* Highlight with multiple words */}
            <Highlight
                query={['spotlight', 'emphasize', 'Accentuate']}
                styles={{ px: '2', py: '1', bg: 'teal.100' }}
            >
                With the Highlight component, you can spotlight, emphasize and accentuate
                words.
            </Highlight>

            <Box>
                <Text>Search result for: "spot"</Text>
                <Text mt='6' fontWeight='normal'>
                    <Highlight query='spot' styles={{ py: '1', fontWeight: 'bold' }}>
                    Spotlight bulb
                    </Highlight>
                </Text>
            </Box>

            {/* Customizing rendered elements */}
            {/* In cases where you want to customize multiple rendered elements and their styles,
            use the useHighlight hook. */}
            <Heading lineHeight="tall">
                {chunks.map(({ match, text }) => {
                    if (!match) return text
                    return text === 'instantly' ? (
                    <Box as='u' fontFamily='NewYork'>
                        {text}
                    </Box>
                    ) : (
                    <Mark bg='black' color="white"  fontFamily='NewYork' px='2' py='1'>
                        {text}
                    </Mark>
                    )
                })}
            </Heading>
        </>
    );
}

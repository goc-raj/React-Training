import { Text } from "@chakra-ui/react";

// Default breakpoints :
// const breakpoints = {
//     base: "0em", // 0px
//     sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
//     md: "48em", // ~768px
//     lg: "62em", // ~992px
//     xl: "80em", // ~1280px
//     "2xl": "96em", // ~1536px
//   };

export default function ObjectSyntax() {
    return (
        <>
            <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
                This is responsive text
            </Text>
            {/* Here's how to interpret this syntax fontSize={{ base: '24px', md: '40px', lg: '56px' }}:
                24px: From 0em upwards
                40px: From 48em upwards
                56px: From 62em upwards
            */}
        </>
    );
}

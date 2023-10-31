import { Box } from "@chakra-ui/react";

// Default breakpoints :
// const breakpoints = {
//     base: "0em", // 0px
//     sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
//     md: "48em", // ~768px
//     lg: "62em", // ~992px
//     xl: "80em", // ~1280px
//     "2xl": "96em", // ~1536px
//   };

export default function ArraySyntax() {
    return (
        <>
            <Box bg="red.200" w={[300, 400, 500]}>
                This is a Responsive Box.
            </Box>
            {/* Here's how to interpret this syntax w={[300, 400, 500]} :
                300px: From 0em upwards
                400px: From 30em upwards
                500px: From 48em upwards
            */}
            {/* To skip certain breakpoints,
                you can pass null to any position in the array to avoid generating unnecessary CSS.
            */}
        </>
    );
}

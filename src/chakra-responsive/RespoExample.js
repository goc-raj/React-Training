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

export default function RespExmpl() {
    return (
        <>
            {/* Example */}
            <Box
                height={{
                base: "100%", // 0-48em
                md: "50%", // 48em-80em,
                xl: "25%", // 80em+
                }}
                bg="teal.400"
                width={[
                "100%", // 0-30em
                "50%", // 30em-48em
                "25%", // 48em-62em
                "15%", // 62em+
                ]}
            >Responsive Box</Box>
            {/* responsive font size */}
            <Box fontSize={["sm", "md", "lg", "xl"]}>Responsive Font Size</Box>
            {/* responsive margin */}
            <Box mt={[2, 4, 6, 8]} width="full" height="24px" bg="tomato">Responsive Margin</Box>
            {/* responsive padding */}
            <Box bg="papayawhip" p={[2, 4, 6, 8]}>Responsive Padding</Box>

            {/* Using Shorthand */}
            <Box bg="teal.500" width={[1, 1 / 2, 1 / 4]}>Responsive Box Using Shorthand</Box>
            <br />
            {/* It'll generate a CSS that looks like this:
            .Box {
                width: 100%;
                }

                @media screen and (min-width: 30em) {
                .Box {
                    width: 50%;
                }
                }

                @media screen and (min-width: 48em) {
                .Box {
                    width: 25%;
                }
            } */}
        </>
    );
}

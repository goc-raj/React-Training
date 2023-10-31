import { Box } from "@chakra-ui/react";

// 1. Import the utilities
import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

// 3. Extend the theme
extendTheme({ breakpoints });

export default function CustomBP() {
    return (
        <>
            {/* 4. Now you can use the custom breakpoints */}
            <Box bg="papayawhip" width={{ base: "100%", sm: "50%", md: "25%" }}>
                Responsive Box Using Custom Breakpoints.
            </Box>
            <br />
        </>
    );
}

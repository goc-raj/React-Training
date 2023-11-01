import React from "react";
import { Flex } from '@chakra-ui/react'
import DetailsSection from "./DetailsSection";

export default function MainPage() {
    return (
        <Flex bg='rgba(223, 56, 206, 0.46)' borderRadius='10px' h={575} w={1325} alignItems='center'>
            <DetailsSection />
        </Flex>
    );
}

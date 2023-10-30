import React from "react";

import BoxCompo from '../chakra-components/Box';
import FlecCompo from '../chakra-components/Flex';
import StackCompo from '../chakra-components/Stack';
import TextCompo from '../chakra-components/Text';
import HeadingCompo from '../chakra-components/Heading';
import HighlightCompo from '../chakra-components/Highlight';
import FirstStyldEx from '../chakra-styled/MrgPadColGradLayWidHei';
import SecondStyldEx from '../chakra-styled/DisGridBgBor';
import ThirdStyldEx from '../chakra-styled/PosShdFiltPsud';
import ArraySyntax from '../chakra-responsive/ArraySyntax';
import ObjectSyntax from '../chakra-responsive/ObjectSyntax';
import RespExmpl from '../chakra-responsive/RespoExample';
import CustomBP from '../chakra-responsive/CustomBreakPoints';

export default function ChakraPractice() {
    return (
        <>
            <BoxCompo />
            <FlecCompo />
            <StackCompo />
            <TextCompo />
            <HeadingCompo />
            <HighlightCompo />
            <FirstStyldEx />
            <SecondStyldEx />
            <ThirdStyldEx />
            <ArraySyntax />
            <ObjectSyntax />
            <RespExmpl />
            <CustomBP />
        </>
    );
}

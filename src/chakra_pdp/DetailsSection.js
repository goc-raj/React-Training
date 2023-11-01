import React, { useState } from "react";
import { Box, HStack, Center, Image, VStack, Text, useRadio, useRadioGroup, IconButton, ButtonGroup, Button } from "@chakra-ui/react";
import { StarIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import productImage from '../Images/joy_dior.jpeg';

export default function DetailsSection() {

    const [count, setCount] = useState(1);

    const property = {
        rating: 4,
    }

    function RadioCard(props) {
        const { getInputProps, getRadioProps } = useRadio(props)

        const input = getInputProps()
        const checkbox = getRadioProps()

        return (
          <Box as='label'>
            <input {...input} />
            <Box
              {...checkbox}
              cursor='pointer'
              border='none'
              bgColor='#FFFFFF'
              color='#000000'
              _checked={{
                bg: '#141414',
                color: '#FFFFFF',
              }}
              _focus={{
                boxShadow: 'outline',
              }}
              px={8}
              py={3}
            >
              {props.children}
            </Box>
          </Box>
        )
    }
    function Example() {
        const options = ['30ml', '50ml', '60ml']

        const { getRootProps, getRadioProps } = useRadioGroup({
          name: 'size',
          defaultValue: '30ml',
          onChange: console.log,
        })

        const group = getRootProps()

        return (
          <HStack {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value })
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              )
            })}
          </HStack>
        )
    }

    function Counter() {
        return (
            <ButtonGroup variant='outline' isAttached>
                <IconButton
                    w={20}
                    color='#141414'
                    borderColor='#000000'
                    borderRight='none'
                    borderRadius='none'
                    aria-label='Add Item'
                    icon={<AddIcon  />}
                    _hover={{ bgColor: '#141414', color: '#FFFFFF' }}
                    onClick={ () => setCount(count => count + 1) }
                />
                <Button
                    color='#141414'
                    borderColor='#000000'
                    borderLeft='none'
                    borderRight='none'
                    borderRadius='none'
                    _hover={{ cursor: 'default' }}
                    _active={{}}
                >
                    {count}
                </Button>
                <IconButton
                    w={20}
                    isDisabled={count <= 1}
                    color='#141414'
                    borderColor='#000000'
                    borderLeft='none'
                    borderRadius='none'
                    aria-label='Remove Item'
                    icon={<MinusIcon  />}
                    _hover={{ bgColor: '#141414', color: '#FFFFFF' }}
                    onClick={ () => setCount(count => count - 1) }
                />
            </ButtonGroup>
        )
    }

    return (
        <>
        <Box bg='#FFFFFF' w={1100} h={500} m='auto' as='section'>
            <HStack spacing='0' align='start'>
                <Center bg='#FFFFFF' w={555} h={500}>
                    <Image src={productImage} alt='Dan Abramov' h={350} w={250} />
                </Center>
                <Box bg='#FFDCF5' w={545} h={500}>
                    <VStack
                        pt={6}
                        align='stretch'
                    >
                        <Center h={8}>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < property.rating ? '#141414' : '#FCF9F9'}
                                    w={8} h={5}
                                />
                            ))}
                        </Center>
                        <Text as='b' fontSize='25px' color='#000000' pt={3}>
                            DIOR JOY by Dior Eau de <br />
                            Parfum Spray 30ml
                        </Text>
                        <Text as='inter' fontSize='20px' color='#000000'>
                            $54.00
                        </Text>
                        <Text as='inriasans' fontSize='13px' color='#000000' pt={3}>
                            SELECT SIZE
                        </Text>
                        <Center>
                            <Example />
                        </Center>
                        <Text as='inriasans' fontSize='13px' color='#000000' pt={3}>
                            QUANTITY
                        </Text>
                        <Center>
                            <Counter />
                        </Center>
                        <Center pt={4}>
                            <Button
                                w={300}
                                h={50}
                                variant='outline'
                                color='#FFFFFF'
                                borderRadius='none'
                                bgColor='#141414'
                                _hover={{ bgColor: '#FFFFFF', color: '#141414', borderColor: '#000000' }}
                            >
                                ADD TO CART
                            </Button>
                        </Center>
                    </VStack>
                </Box>
            </HStack>
        </Box>
        </>
    );
}

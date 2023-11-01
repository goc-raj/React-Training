import { Box, Image, Heading, Text, useStyleConfig } from '@chakra-ui/react'
import fingerPrint from '../Images/fingerprint.jpeg';

function Card(props) {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Card', { variant })

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />
}

export default function CardUsage() {
    return (
      <Card>
        <Image
          src='https://chakra-ui.com/eric.jpg'
          rounded='full'
          w={32}
          h={32}
          boxShadow='md'
        />
        <Heading mt={6} maxW={60} size='lg' textAlign='center' color='gray.700'>
          Welcome back, Eric
        </Heading>
        <Text mt={6} mb={6} size='sm' color='blackAlpha.500'>
          Use your fingerprint to continue.
        </Text>
        <Image src={fingerPrint} w={32} h={32} />
      </Card>
    )
}

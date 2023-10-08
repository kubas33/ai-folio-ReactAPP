
import { Box, Heading, Text } from '@chakra-ui/react';

type Props = {
    imageUrl: string;
    text: string;
}

export default function CategoryCard({ imageUrl, text }: Props) {
    return (
        <>
            <Heading>Browse categories</Heading>
            <Box position="relative">
                <Box
                    backgroundImage={`url(${imageUrl})`}
                    backgroundSize="cover"
                    width="400px"
                    aspectRatio="1"
                >
                    <Text
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        textAlign="center"
                        color="white"
                        fontSize="24px" // Dostosować wielkość tekstu według potrzeb
                    >
                        {text}
                    </Text>
                </Box>
            </Box></>
    )
}
import { Box, Text } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  imageUrl_2: string;
  text: string;
};

export default function CategoryCard({ imageUrl, imageUrl_2, text }: Props) {
  const onHover = {
    backgroundImage: `url(${imageUrl_2})`,
    cursor: "pointer",
    transition: "background-image 0.2s ease-in-out 0.1s",
  };
  return (
    <Box position="relative" aspectRatio="1" width="100%" maxWidth={"400px"}>
      <Box
        backgroundImage={`url(${imageUrl})`}
        backgroundSize="cover"
        width={"100%"}
        aspectRatio="1"
        filter="brightness(80%)"
        borderRadius={"lg"}
        _hover={onHover}
      ></Box>
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        fontSize="24px" // Dostosować wielkość tekstu według potrzeb
        fontWeight="600"
      >
        {text}
      </Text>
    </Box>
  );
}

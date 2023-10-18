import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  Button,
  Wrap,
  WrapItem,
  Tag,
  StackDivider,
} from "@chakra-ui/react";
import ImageCard from "../components/ImageCard";

const ImageDetail = () => {
  return (
    <div className="image-details my-auto">
      <ImageCard fileName="image.jpeg" />
      <VStack
        minW="96"
        align="stretch"
        divider={<StackDivider borderColor="gray.200" />}
      >
        <HeaderBar />
        <TagsList />
      </VStack>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <Box width="100%">
      <Flex justifyContent={"space-between"} p="4">
        <HStack>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <VStack>
            <Text as="span">Ryan Florence</Text>
            <Text as="span">2 months ago</Text>
          </VStack>
        </HStack>
        <Button size="xs" colorScheme="green" borderRadius="full">
          Follow
        </Button>
      </Flex>
    </Box>
  );
};

const TagsList = () => {
  return (
    <Wrap spacing="2" py="2" px="4">
      <WrapItem>
        <Tag size="sm" borderRadius="full" colorScheme="blue">
          Tag 1
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="sm" borderRadius="full" colorScheme="blue">
          Tag 2
        </Tag>
      </WrapItem>
    </Wrap>
  );
};

export default ImageDetail;

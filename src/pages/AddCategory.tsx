import {
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Image,
  Center,
  FormLabel,
  Input,
  FormControl,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "JPG", "PNG"];

export default function AddCategory() {
  const [selectedFiles, setSelectedFiles] = useState<{
    [key: string]: File | null;
  }>({
    image_1: null,
    image_2: null,
  });

  const handleUpload = (selectedFile: File | null, name: string) => {
    setSelectedFiles({
      ...selectedFiles,
      [name]: selectedFile,
    });
  };

  const bgColor = useColorModeValue("red.100", "red.900");

  return (
    <>
      <Heading as="h1" textAlign={"center"} p={6}>
        Add new category
      </Heading>
      <Box as="form" className="add-category-form">
        <FormControl
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          py={10}
        >
          <FormLabel>Name: </FormLabel>
          <Input type="text" htmlSize={40} width="auto" />
        </FormControl>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} marginBottom={4}>
          {Object.keys(selectedFiles).map((name) => (
            <Fragment key={name}>
              <Center flexDirection={"column"} my={"auto"}>
                <FileUploader
                  multiple={false}
                  handleChange={(file: File | null) => handleUpload(file, name)}
                  name={name}
                  types={fileTypes}
                />
                <Text className="mt-3 px-4">
                  {selectedFiles[name]
                    ? `File name: ${selectedFiles[name]?.name}`
                    : "no file uploaded yet"}
                </Text>
                <Center
                  bg={bgColor}
                  p={4}
                  borderRadius={"md"} // Dodajemy zaokrąglenie do kontenera
                >
                  {selectedFiles[name] ? (
                    <Image
                      src={URL.createObjectURL(selectedFiles[name])} // Poprawna ścieżka do pliku
                      borderRadius={"md"}
                      fit={"contain"}
                      maxH={"300px"} // Ustawiamy maksymalną wysokość podglądu
                    />
                  ) : (
                    <Image
                      src="https://placehold.co/600x400?text=File+preview"
                      borderRadius={"md"}
                      fit={"contain"}
                      maxH={"300px"} // Ustawiamy maksymalną wysokość podglądu
                    />
                  )}
                </Center>
              </Center>
            </Fragment>
          ))}
        </SimpleGrid>
        <hr />
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: 4, sm: 12 }}
          align="center"
          justifyContent={"space-between"}
          maxWidth="500px"
          mx={"auto"}
          marginTop={6}
        >
          <Button colorScheme={"green"} px={12}>
            Save
          </Button>
          <Button colorScheme={"red"}>Cancel</Button>
        </Flex>
      </Box>
    </>
  );
}

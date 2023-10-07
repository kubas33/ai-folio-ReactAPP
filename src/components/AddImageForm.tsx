import {
  Box,
  Center,
  Container,
  FormControl,
  Grid,
  GridItem,
  Image,
  Select,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormLabel } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG"];

interface SliderThumbWithTooltipProps {
  minValue: number;
  maxValue: number;
  id: string;
}

function SliderThumbWithTooltip({ minValue, maxValue, id }: SliderThumbWithTooltipProps) {
  const [sliderValue, setSliderValue] = useState(5)
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <Slider
      id = {id}
      defaultValue={10}
      min={minValue}
      max={maxValue}
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
        {maxValue/4}
      </SliderMark>
      <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
        {maxValue/2}
      </SliderMark>
      <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
        {maxValue * 0.75}
      </SliderMark> */}
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  )
}

export default function AddImageForm() {
  const [file, setFile] = useState<File | null>(null);
  const handleChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    console.log(selectedFile);
  };
  return (
    <Box as={"form"} className="add-image-form" p={10}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} marginBottom={4}>
        <Center>
          <FormControl>
            <FileUploader
              multiple={false}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p className="mt-3 px-4">
              {file ? `File name: ${file.name}` : "no file uploaded yet"}
            </p>
          </FormControl>
        </Center>
        <Center bg={useColorModeValue("gray.100", "gray.900")} p={4}>
          {file ? (
            <Image
              src={URL.createObjectURL(file)}
              borderRadius={"md"}
              fit={"contain"}
            />
          ) : (
            <Image
              src="https://placehold.co/600x400?text=File+preview"
              borderRadius={"md"}
              fit={"contain"}
            />
          )}
        </Center>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} marginBottom={4}>
        <Select
          isRequired
          placeholder="Select AI Model"
          aria-label="Select AI Model"
        >
          <option value="dalle_2">DALLE-2</option>
          <option value="midjourney">Midjourney</option>
          <option value="stable_diffusion">Stable Diffusion</option>
        </Select>
        <Select
          isRequired
          placeholder="Select sampler"
          aria-label="Select sampler"
        >
          <option value="sampler_1">sampler 1</option>
          <option value="sampler_2">sampler 2</option>
          <option value="sampler_3">sampler 3</option>
        </Select>
      </SimpleGrid>
      <Grid templateColumns={{base: '1fr', sm:'repeat(2, 1fr)', md:'repeat(3, 1fr)'}}
      templateRows={{base: 'repeat(3, 1fr)', sm:'repeat(2, 1fr)', md:'1fr'}} gap={4}>
        <GridItem>
          <FormControl>
            <FormLabel>CGF Scale</FormLabel>
            <SliderThumbWithTooltip minValue={1} maxValue={20} id="cgf_scale"/>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>Steps</FormLabel>
          </FormControl>
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </Box>
  );
}

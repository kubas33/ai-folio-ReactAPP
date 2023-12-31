import {
  Box,
  Center,
  Heading,
  ListItem,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import { Fragment } from "react";
import CategoryCard from "../components/CategoryCard";

interface CategoriesProps {
  imageUrl: string;
  imageUrl_2: string;
  text: string;
}

const categories: string[] = [
  "Animals",
  "Beauty",
  "Business",
  "Cars and motorcycles",
  "Celebrations and holidays",
  "Cities",
  "Education",
  "Family",
  "Fashion",
  "Finance",
  "Food and drink",
  "Health and wellness",
  "Holidays",
  "Home",
  "Industry",
  "Music",
  "Nature",
  "People",
  "Places",
  "Science",
  "Shopping",
  "Sports and recreation",
  "Technology",
  "The arts",
  "Transportation",
  "Vintage",
];

export default function Categories() {
  return (
    <Center>
      <Box textAlign="center" width={"100%"}>
        <Heading py={10}>Browse categories</Heading>
        <UnorderedList
          listStyleType={"none"}
          px="0"
          mx="auto" // Użyj mx="auto", aby centrować listę
          maxW="1250px" // Ustaw maksymalną szerokość
          className="categories-list"
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {categories.map((category) => {
              const index: number = Math.floor(Math.random() * 100);
              return (
                <ListItem key={category} maxWidth="400px" width="100%">
                  <CategoryCard
                    text={category}
                    imageUrl={`https://picsum.photos/600/600?random=${index}`}
                    imageUrl_2={`https://picsum.photos/600/600?random=${
                      index + 1
                    }`}
                  />
                </ListItem>
              );
            })}
          </SimpleGrid>
        </UnorderedList>
      </Box>
    </Center>
  );
}

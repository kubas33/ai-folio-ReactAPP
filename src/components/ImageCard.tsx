import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, ButtonGroup, Center, IconButton, Image } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { PropsWithChildren } from "react";

interface ImageCardProps extends PropsWithChildren {
  fileName: string;
}

export default function ImageCard(props: ImageCardProps) {
  const index: number = Math.floor(Math.random() * 100);
  return (
    <Center>
      <Box className="image-card" verticalAlign={"midle"}>
        <Image
          src={`https://picsum.photos/800/600?random=${index}`}
          alt=""
          rounded={"md"}
        />

        <Box className="context-menu-top">
          <IconButton
            icon={<FiMoreVertical />}
            aria-label={"more actions"}
            colorScheme={"gray"}
            variant={"solid"}
            size={"xs"}
          />
        </Box>
        <Box className="context-menu-bottom">
          <ButtonGroup
            isAttached
            size={"xs"}
            colorScheme={"gray"}
            variant={"solid"}
          >
            <IconButton icon={<EditIcon />} aria-label={"edit"} />
            <IconButton icon={<ViewIcon />} aria-label={"view"} />
            <IconButton icon={<DeleteIcon />} aria-label={"delete"} />
          </ButtonGroup>
        </Box>
      </Box>
    </Center>
  );
}

import {Flex, Grid, Text, Button} from "@chakra-ui/react"
import * as React from "react"

interface Props {
  selectCategory: (cat: string) => void
}

const SelectCategory: React.FC<Props> = ({selectCategory}) => {
  return (
    <Flex
      _hover={{bg: "brand.600"}}
      bg="brand.500"
      direction="column"
      h="700px"
      justify="center"
      m="auto"
      transition="1s cubic-bezier(.08,.5,.5,1)"
      w="480px"
    >
      <Text color="white" fontSize="4xl" fontWeight="bold" p={8}>
        Select category
      </Text>
      <Grid gap={4} ml="auto" mr="auto" templateColumns="repeat(2,1fr)" w="60%">
        <Button
          _hover={{
            bg: "whiteAlpha.400",
            boxShadow: "md",
            color: "white",
          }}
          bg="white"
          color="brand.500"
          m="auto"
          onClick={() => selectCategory("sports")}
        >
          Sports
        </Button>
        <Button
          _hover={{
            bg: "whiteAlpha.400",
            boxShadow: "md",
            color: "white",
          }}
          bg="white"
          color="brand.500"
          m="auto"
          onClick={() => selectCategory("geography")}
        >
          Geography
        </Button>
        <Button
          _hover={{
            bg: "whiteAlpha.400",
            boxShadow: "md",
            color: "white",
          }}
          bg="white"
          color="brand.500"
          m="auto"
          onClick={() => selectCategory("history")}
        >
          History
        </Button>
        <Button
          _hover={{
            bg: "whiteAlpha.400",
            boxShadow: "md",
            color: "white",
          }}
          bg="white"
          color="brand.500"
          m="auto"
          onClick={() => selectCategory("animals")}
        >
          Animals
        </Button>
        <Button
          _hover={{
            bg: "whiteAlpha.400",
            boxShadow: "md",
            color: "white",
          }}
          bg="white"
          color="brand.500"
          m="auto"
          onClick={() => selectCategory("music")}
        >
          Music
        </Button>
        <Button
          _hover={{
            bg: "whiteAlpha.400",
            boxShadow: "md",
            color: "white",
          }}
          bg="white"
          color="brand.500"
          m="auto"
          onClick={() => selectCategory("general")}
        >
          General
        </Button>
      </Grid>
    </Flex>
  )
}

export default SelectCategory

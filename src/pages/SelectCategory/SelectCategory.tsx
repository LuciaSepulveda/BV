import {Flex, Grid, Text, Button} from "@chakra-ui/react"
import * as React from "react"

import {Category} from "../../types/types"

interface Props {
  selectCategory: (cat: number) => void
  categories: Category[]
}

const SelectCategory: React.FC<Props> = ({selectCategory, categories}) => {
  return (
    <Flex
      _hover={{bg: "brand.600"}}
      bg="brand.500"
      direction="column"
      h="700px"
      justify="center"
      m="auto"
      maxWidth="480px"
      transition="1s cubic-bezier(.08,.5,.5,1)"
      w="90%"
    >
      <Text color="white" fontSize="4xl" fontWeight="bold" p={8}>
        Select category
      </Text>
      <Grid gap={4} ml="auto" mr="auto" templateColumns="repeat(2,1fr)" w="60%">
        {categories.map((elem) => {
          return (
            <Button
              key={elem.index}
              _hover={{
                bg: "whiteAlpha.400",
                boxShadow: "md",
                color: "white",
              }}
              bg="white"
              color="brand.500"
              m="auto"
              onClick={() => selectCategory(elem.index)}
            >
              {elem.name}
            </Button>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default SelectCategory

import {Box, Center, Flex, Grid, Text, Button} from "@chakra-ui/react"
import * as React from "react"

interface Props {
  selectCategory: (cat: string) => void
}

const SelectCategory: React.FC<Props> = ({selectCategory, children}) => {
  const [category, setCategory] = React.useState<string>("hola")

  /*
    return(
        <div className={styles.container}>
            <h2>Select Category</h2>
            <div className={styles.grid_container}>
              <Button onClick={()=> {start(); setCategory('sports')}}>Sports</Button>
              <Button onClick={()=> {start(); setCategory('geography')}}>Geography</Button>
              <Button onClick={()=> {start(); setCategory('history')}}>History</Button>
              <Button onClick={()=> {start(); setCategory('animals')}}>Animals</Button>
              <Button onClick={()=> {start(); setCategory('music')}}>Music</Button>
              <Button onClick={()=> {start(); setCategory('general')}}>General</Button>
            </div>
        </div>
    )
    */
  return (
    /*
    <div className={styles.container}>
      <h2>Select category</h2>
      <div className={styles.grid_container}>{children}</div>
    </div>*/
    <Flex
      bg="brand.500"
      direction="column"
      h="700px"
      justify="center"
      m="auto"
      w="480px"
      _hover={{bg: "brand.600"}}
      transition="1s cubic-bezier(.08,.5,.5,1)"
    >
      <Text color="white" fontSize="4xl" p={8} fontWeight="bold">
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

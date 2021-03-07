import {Button, Center, Text} from "@chakra-ui/react"
import * as React from "react"

interface startPage {
  startGame: () => void
}

const StartPage: React.FC<startPage> = ({startGame}) => {
  return (
    <Center
      _hover={{bg: "brand.600"}}
      alignItems="center"
      bg="brand.500"
      boxShadow="md"
      h="700px"
      m="auto"
      transition="1s cubic-bezier(.08,.5,.5,1)"
      width="480px"
    >
      <Button
        _hover={{
          bg: "black",
          boxShadow: "md",
          color: "white",
        }}
        bg="white"
        color="var(--secondary)"
        m="auto"
        p={10}
        onClick={() => startGame()}
      >
        <Text fontSize="5xl">Start</Text>
      </Button>
    </Center>
  )
}

export default StartPage

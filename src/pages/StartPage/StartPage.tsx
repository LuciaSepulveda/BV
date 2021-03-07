import {Button, Center, Text} from "@chakra-ui/react"
import * as React from "react"

interface startPage {
  startGame: () => void
}

const StartPage: React.FC<startPage> = ({startGame}) => {
  return (
    <Center
      alignItems="center"
      bg="brand.500"
      boxShadow="md"
      h="700px"
      m="auto"
      width="480px"
      transition="1s cubic-bezier(.08,.5,.5,1)"
      _hover={{bg: "brand.600"}}
    >
      <Button
        m="auto"
        bg="white"
        color="var(--secondary)"
        onClick={() => startGame()}
        _hover={{
          bg: "black",
          boxShadow: "md",
          color: "white",
        }}
        p={10}
      >
        <Text fontSize="5xl">Start</Text>
      </Button>
    </Center>
  )
}

export default StartPage

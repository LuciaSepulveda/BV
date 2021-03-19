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
      boxShadow="xl"
      h="700px"
      m="auto"
      maxWidth="480px"
      transition="1s cubic-bezier(.08,.5,.5,1)"
      w="90%"
    >
      <Button
        _hover={{
          bg: "black",
          boxShadow: "md",
          color: "white",
        }}
        bg="white"
        color="var(--secondary)"
        m={{sm: "10%"}}
        p={10}
        transition="1s cubic-bezier(.08,.5,.5,1)"
        onClick={() => startGame()}
      >
        <Text fontSize="5xl">Start</Text>
      </Button>
    </Center>
  )
}

export default StartPage

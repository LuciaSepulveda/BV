import {Stack, Button, Text} from "@chakra-ui/react"
import * as React from "react"

interface endPage {
  playAgain: () => void
  points: number
  totalPoints: number
}

const EndPage: React.FC<endPage> = ({playAgain, points, totalPoints}) => {
  return (
    <Stack
      _hover={{bg: "brand.600"}}
      alignItems="center"
      bg="brand.500"
      boxShadow="xl"
      h="700px"
      justify="center"
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
        p={10}
        transition="1s cubic-bezier(.08,.5,.5,1)"
        onClick={() => playAgain()}
      >
        <Text fontSize="4xl">Play again</Text>
      </Button>
      <Text color="white" fontSize="3xl" padding={6}>
        Points: {points} / {totalPoints}
      </Text>
    </Stack>
  )
}

export default EndPage

import * as React from "react"
import {Center, Spinner} from "@chakra-ui/react"

const Loading: React.FC = () => {
  return (
    <Center bg="brand.500" h="700px" m="auto" width="480px">
      <Spinner size="xl" speed="0.6s" color="pink" thickness="4px" />
    </Center>
  )
}

export default Loading

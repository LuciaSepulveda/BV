import * as React from "react"
import {Center, Spinner} from "@chakra-ui/react"

const Loading: React.FC = () => {
  return (
    <Center bg="brand.500" boxShadow="xl" h="700px" m="auto" maxWidth="480px" w="90%">
      <Spinner color="pink" size="xl" speed="0.6s" thickness="4px" />
    </Center>
  )
}

export default Loading

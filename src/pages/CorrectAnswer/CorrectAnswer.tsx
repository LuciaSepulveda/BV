import {Grid, Img, Text} from "@chakra-ui/react"
import * as React from "react"

interface Props {
  src: string
}

const CorrectAnswer: React.FC<Props> = ({src}) => {
  return (
    <Grid
      bg="brand.500"
      boxShadow="xl"
      h="700px"
      m="auto"
      maxWidth="480px"
      templateColumns="repeat(1,1fr)"
      w="90%"
    >
      <Img alt={"correct answer"} m="auto" mb="0px" src={src} w="20%" />
      <Text color="white" fontSize="4xl">
        The answer was correct!
      </Text>
    </Grid>
  )
}

export default CorrectAnswer

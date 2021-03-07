import {Grid, Img, Text} from "@chakra-ui/react"
import * as React from "react"

interface Props {
  src: string
}

const CorrectAnswer: React.FC<Props> = ({src}) => {
  return (
    <Grid
      bg="brand.500"
      boxShadow="md"
      h="700px"
      m="auto"
      templateColumns="repeat(1,1fr)"
      width="480px"
    >
      <Img alt={"correct answer"} m="auto" src={src} w="30%" />
      <Text color="white" fontSize="4xl">
        The answer was correct!
      </Text>
    </Grid>
  )
}

export default CorrectAnswer

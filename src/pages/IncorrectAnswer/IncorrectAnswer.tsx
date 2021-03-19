import {Grid, Img, Text} from "@chakra-ui/react"
import * as React from "react"

interface Props {
  src: string
  correct_answer: string
}

const IncorrectAnswer: React.FC<Props> = ({src, correct_answer}) => {
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
      <Img alt={"incorrect answer"} m="auto" mb="0px" src={src} w="20%" />
      <Text color="white" fontSize="4xl">
        The answer was incorrect.
      </Text>
      <Text color="white" fontSize="xl">
        The right answer was: {correct_answer}
      </Text>
    </Grid>
  )
}

export default IncorrectAnswer

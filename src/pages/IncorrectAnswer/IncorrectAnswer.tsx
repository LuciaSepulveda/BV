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
      boxShadow="md"
      h="700px"
      m="auto"
      templateColumns="repeat(1,1fr)"
      width="480px"
    >
      <Img alt={"incorrect answer"} m="auto" src={src} w="30%" />
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

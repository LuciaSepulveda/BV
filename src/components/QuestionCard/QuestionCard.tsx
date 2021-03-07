import {Box, Center, Grid, Text} from "@chakra-ui/react"
import * as React from "react"

interface Props {
  header: string
  footer: string
}

const QuestionCard: React.FC<Props> = ({header, footer, children}) => {
  return (
    <Grid gap="2" h="200px" m="auto" p={2} templateColumns="repeat(1,1fr)" width="100%">
      <Box bg="white" borderRadius={2} boxShadow="lg" m="auto" mt="-200px" p={2}>
        {header}
      </Box>
      <Center
        bg="whiteAlpha.600"
        borderRadius={10}
        color="black"
        h="250px"
        m="auto"
        mt="-70px"
        width="80%"
      >
        <Text fontSize="2xl">{children}</Text>
      </Center>
      <Box bg="blackAlpha.800" borderRadius={10} color="white" m="auto" mt="0px" p={2}>
        {footer}
      </Box>
    </Grid>
  )
}

export default QuestionCard

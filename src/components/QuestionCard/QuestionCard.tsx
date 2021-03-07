import {Box, Center, Flex, Grid, Text} from "@chakra-ui/react"
import * as React from "react"

interface Props {
  header: string
  footer: string
}

const QuestionCard: React.FC<Props> = ({header, footer, children}) => {
  return (
    <Grid gap="2" h="200px" m="auto" p={2} templateColumns="repeat(1,1fr)" width="100%">
      <Box borderRadius={2} bg="white" m="auto" mt="-200px" p={2} boxShadow="lg">
        {header}
      </Box>
      <Center
        color="black"
        bg="whiteAlpha.600"
        h="250px"
        width="80%"
        m="auto"
        mt="-70px"
        borderRadius={10}
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

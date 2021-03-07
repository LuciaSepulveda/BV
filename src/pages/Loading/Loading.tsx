import * as React from "react"
import {motion} from "framer-motion"
import {Center} from "@chakra-ui/react"

const Loading: React.FC = () => {
  return (
    <Center h="700px" m="auto" width="480px" bg="brand.500">
      <motion.div
        style={{backgroundColor: "white", width: "50px", height: "50px"}}
        animate={{
          scale: [0.5, 2, 1],
          rotate: [0, 270, 0],
          borderRadius: ["20%", "50%", "20%"],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      />
    </Center>
  )
}

export default Loading

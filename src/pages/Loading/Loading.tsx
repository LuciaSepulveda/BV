import * as React from "react"
import {motion} from "framer-motion"

const Loading: React.FC = () => {
  return (
    <motion.div
      style={{backgroundColor: "blue", width: "50px", height: "50px"}}
      animate={{
        scale: [0.5, 2, 1],
        rotate: [0, 270, 0],
        borderRadius: ["20%", "50%", "20%"],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        loop: Infinity,
        repeatDelay: 1,
      }}
    />
  )
}

export default Loading

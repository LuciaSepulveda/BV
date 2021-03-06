import * as React from "react"
import styles from "./CorrectAnswer.module.scss"

const CorrectAnswer: React.FC = ({children}) => {
  return <div className={styles.container}>{children}</div>
}

export default CorrectAnswer

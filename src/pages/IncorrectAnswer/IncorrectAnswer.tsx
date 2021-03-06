import * as React from "react"
import styles from "./IncorrectAnswer.module.scss"

const IncorrectAnswer: React.FC = ({children}) => {
  return <div className={styles.container}>{children}</div>
}

export default IncorrectAnswer

import * as React from "react"
import styles from "./QuestionCard.module.scss"

interface Props {
  header: string
  footer: string
}

const QuestionCard: React.FC<Props> = ({header, footer, children}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>{header}</header>
      <div className={styles.div}>{children}</div>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  )
}

export default QuestionCard

import * as React from "react"
import styles from "./EndPage.module.scss"

interface endPage {
  playAgain: () => void
  points: number
}

const EndPage: React.FC<endPage> = ({playAgain, points}) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => playAgain()}>
        Play again
      </button>
      <div className={styles.points}>Puntos: {points}</div>
    </div>
  )
}

export default EndPage

import * as React from "react"
import styles from "./StartPage.module.scss"

interface startPage {
  startGame: () => void
}

const StartPage: React.FC<startPage> = ({startGame}) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => startGame()}>
        Comenzar
      </button>
    </div>
  )
}

export default StartPage

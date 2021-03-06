import * as React from "react"
import styles from "./Button.module.scss"

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  )
}

export default Button
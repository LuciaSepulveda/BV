import * as React from "react"
import Button from "../../ui/Button/Button"
import styles from "./SelectCategory.module.scss"
/*
const SelectCategory: React.FC = () =>
{
    return(
        <div className={styles.container}>
            <h2>Select Category</h2>
            <div className={styles.grid_container}>
              <button className={styles.category} id="sports">Sports</button>
              <button className={styles.category} id="geography">Geography</button>
              <button className={styles.category} id="history">History</button>
              <button className={styles.category} id="animals">Animals</button>
              <button className={styles.category} id="music">Music</button>
              <button className={styles.category} id="general">General</button>
            </div>
        </div>
    )
}
*/

/*

interface Props {
    start: () => void,
}
*/

const SelectCategory: React.FC = ({children}) => {
  const [category, setCategory] = React.useState<string>("hola")

  function returnCategory() {
    return category
  }

  /*
    return(
        <div className={styles.container}>
            <h2>Select Category</h2>
            <div className={styles.grid_container}>
              <Button onClick={()=> {start(); setCategory('sports')}}>Sports</Button>
              <Button onClick={()=> {start(); setCategory('geography')}}>Geography</Button>
              <Button onClick={()=> {start(); setCategory('history')}}>History</Button>
              <Button onClick={()=> {start(); setCategory('animals')}}>Animals</Button>
              <Button onClick={()=> {start(); setCategory('music')}}>Music</Button>
              <Button onClick={()=> {start(); setCategory('general')}}>General</Button>
            </div>
        </div>
    )
    */
  return (
    <div className={styles.container}>
      <h2>Select category</h2>
      <div className={styles.grid_container}>{children}</div>
    </div>
  )
}

export default SelectCategory

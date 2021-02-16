import * as React from 'react'

import styles from './Canvas.module.scss'

interface Props{
    texto:number
}


const Canvas: React.FC<Props> = ({texto,children}) => {
    return(
        <div className={styles.container}>
            <svg viewBox="-500 -500 1000 1000" width="1000px" height="1000px">
                <g>
                    <text x="0" y="150">{texto}</text>
                </g>    
            </svg>
     </div>
    )
}



export default Canvas



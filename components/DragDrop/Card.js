/*===== Components =====*/
import React from "react"


/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function Card({ 
  //Props
  text, link, cardID, color
}) {

  return (
  <div className={componentStyles.cardWrapper}>
    <div 
      id={cardID} 
      className={'draggable ' + componentStyles.dragDropCard} 
      data-draggable
      data-link={link}
    >
      <div className={componentStyles.inner + " inner"}>

        <div className={componentStyles.content}>
          {text}
        </div>
        <div className={componentStyles.accent} data-color={color}></div>

      </div>
    </div>
    
  </div>
  )
}
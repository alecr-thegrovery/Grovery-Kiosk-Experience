/*===== Components =====*/
import React from "react"


/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function Card({ 
  //Props
  text, link
}) {

  return (
  <div className={componentStyles.cardWrapper}>
    <div 
      id="DnD-1" 
      className={'draggable ' + componentStyles.dragDropCard} 
      data-draggable
      data-link={link}
    >
      <div className={componentStyles.inner + " inner"}>
        {text}
      </div>
    </div>
    
  </div>
  )
}
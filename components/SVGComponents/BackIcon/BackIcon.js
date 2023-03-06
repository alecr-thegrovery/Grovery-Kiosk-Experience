/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function BackIcon({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);

  return (
    <div className={componentStyles.BackIcon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="27.666" height="27.666" viewBox="0 0 27.666 27.666">
        <path id="Icon_ionic-md-arrow-back" data-name="Icon ionic-md-arrow-back" d="M3803.874,4867.076h-21.011l9.683-9.682-2.508-2.419-13.83,13.83,13.83,13.836,2.42-2.42-9.595-9.687h21.011Z" transform="translate(-3776.208 -4854.975)" fill="#fff"/>
      </svg>

    </div>
      
  )
}

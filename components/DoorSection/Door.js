/*===== Components =====*/
import React from "react"


/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function Door({ 
  //Props
  children, title, sign
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Door + ' Door'} data-active="inactive">
      <div className={componentStyles.doorFrame}>
        <div className={componentStyles.doorPanel}>
        <div className={componentStyles.title}>[DOOR TITLE]</div>
          <div className={componentStyles.cta}>Tap Here</div>
        </div>
        <div className={componentStyles.content}>
          CONTENT GOES HERE
        </div>
      </div>
    </div>
  )
}

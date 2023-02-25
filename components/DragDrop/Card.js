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
  
    <div 
      id={cardID} 
      className={'draggable ' + componentStyles.dragDropCard} 
      data-draggable
      data-link={link}
    >
      <div className={componentStyles.inner + " inner"}>

        <div className={componentStyles.content}>
          {color == "mutedRed" &&
            <img src="/images/icons/cardIconEnrollment.svg" alt=""/>
          }
          {color == "mutedYellow" &&
            <img src="/images/icons/cardIconSupport.svg" alt=""/>
          }
          {color == "mutedBlue" &&
            <img src="/images/icons/cardIconFinancial.svg" alt=""/>
          }
          {color == "mutedGreen" &&
            <img src="/images/icons/cardIconResources.svg" alt=""/>
          }

          {text}
        </div>
        <div 
          className={componentStyles.accent} 
          data-color={color}>

          {color == "mutedRed" &&
            <img src="/images/icons/wirelessRed.svg" alt=""/>
          }
          {color == "mutedYellow" &&
            <img src="/images/icons/wirelessYellow.svg" alt=""/>
          }
          {color == "mutedBlue" &&
            <img src="/images/icons/wirelessBlue.svg" alt=""/>
          }
          {color == "mutedGreen" &&
            <img src="/images/icons/wirelessGreen.svg" alt=""/>
          }
   
          <img src="/images/BMSLogoSmall.svg" alt=""/>    
        </div>

      </div>
    </div>
    
  
  )
}
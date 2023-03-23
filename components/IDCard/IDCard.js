/*===== Components =====*/
import React from "react"
import Tooltip from '@components/Tooltip'
import EnrollmentCard from './EnrollmentCard'
import AccessCard from './AccessCard'
import FinancialCard from './FinancialCard'
import ResourcesCard from './ResourcesCard'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function IDCard({ 
  //Props
  text, link, cardID, 
  color, animation, animationDelay, tooltipText
}) {

  //console.log(author);

  return (
    <div 
      id={cardID} 
      className={'draggable ' + componentStyles.IDCard} 
      data-draggable
      data-link={link}
      data-animation={animation}
      data-animation-delay={animationDelay}
    >
      {tooltipText &&
        <Tooltip
          placement="up"
          text={tooltipText}
        />
      }
      <div className={componentStyles.inner+ " inner"}>
          {cardID == "enrollment" &&
            <EnrollmentCard/>
          }
          {cardID == "access" &&
            <AccessCard/>
          }
          {cardID == "financial" &&
            <FinancialCard/>
          }
          {cardID == "resources" &&
            <ResourcesCard/>
          }

        </div>
    </div>
  )
}

/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'
import EnrollmentCard from './EnrollmentCard'
import AccessCard from './AccessCard'
import FinancialCard from './FinancialCard'
import ResourcesCard from './ResourcesCard'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function IDCard({ 
  //Props
  text, link, cardID, 
  color, animation, animationDelay
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

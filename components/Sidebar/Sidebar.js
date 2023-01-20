/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Card from '@components/DragDrop/Card.js'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function Sidebar({ 
  //Props
  scanner, card, access, enrollment, financial, resources
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Sidebar}>
      <div className={componentStyles.inner}>
        
        <div className={componentStyles.questionsButton}>
          <a href="#">QUESTIONS</a>
        </div>

        <div id="DropZone" className={componentStyles.scanner + ' droppable'}>

          {/*{card &&
            <div className={componentStyles.cardOutter}>
              <Card
                cardID="Enrollment"
                text="Enrollment"
                link="/enrollment-1/"
                color="brown"
              />
            </div>
          }*/}
          {access && 
            <div className={componentStyles.cardOutter}>
              <Card
                cardID="Access"
                text="Access and Reimbursement Report"
                link="/access-1/"
                color="orange"
              />
            </div>
          }
          {enrollment && 
            <div className={componentStyles.cardOutter}>
              <Card
                cardID="Enrollment"
                text="Enrollment"
                link="/enrollment-1/"
                color="brown"
              />
            </div>
          }
          {financial && 
            <div className={componentStyles.cardOutter}>
              <Card
                cardID="Copay"
                text="Co-Pay &amp; Finacial Assistance Services"
                link="/financial-1/"
                color="teal"
              />
            </div>
          }
          {resources && 
            <div className={componentStyles.cardOutter}>
              <Card
                cardID="Resources"
                text="Patient Resources"
                link="/resources-1/"
                color="purple"
              />
            </div>
          }
          

          <div className={componentStyles.scannerBorder}>
            
            <div className={componentStyles.light}></div>
            <div className={componentStyles.icon}>icon</div>
            <div className={componentStyles.text}>
              <p>
                Place your access card here
              </p>
            </div>



          </div>
        </div>

        <div className={componentStyles.controls}>
          <div>Back</div>
          <div>Home</div>
        </div>

      </div>
    </div>
  )
}

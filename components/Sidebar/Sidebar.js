/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Card from '@components/DragDrop/Card.js'
import { BsUpcScan } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function Sidebar({ 
  //Props
  scanner, card, home, 
  access, enrollment, financial, resources
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Sidebar}>
      <div className={componentStyles.inner}>
        
        <div className={componentStyles.controls}>
          <a href="#">QUESTIONS</a>
        </div>

        <div className={componentStyles.scannerWrapper}>
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
              
              <div className={componentStyles.light}>
                <div className={componentStyles.lightInner}></div>
              </div>
              <div className={componentStyles.icon}>
                <BsUpcScan
                  color="#fafafa" 
                  size={65}
                />
              </div>
              <div className={componentStyles.text}>
                <p>
                  Place your access card here
                </p>
              </div>



            </div>
          </div>
        </div>

        {!home && 
          <div className={componentStyles.controls}>
            <a className={componentStyles.alt}>
              <MdArrowBackIosNew/> Back
            </a>
            <a href="/">
              Home
            </a>
          </div>
        }

      </div>
    </div>
  )
}

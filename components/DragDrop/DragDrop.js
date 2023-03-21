/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import interact from 'interactjs'
import Card from './Card.js'
//import IDCard from '@components/SVGComponents/IDCard'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function DragDrop({ 
  //Props
  id, image, title, 
  previewText, author, date,
  animation
}) {

 

  /*===== Component Content =====*/
  return (
    <div className={'draggableBounds '+componentStyles.DragDrop}>
      
      {/*===== Draggable Cards =====*/}
      <div className={componentStyles.cardsOuter}>

        <div className={"cardsFilter "+ componentStyles.cardsFilter}></div>

        <Card 
          cardID="Enrollment"
          text="Enrollment"
          link="/enrollment/"
          color="mutedRed"
          animation="fadeInUp"
          animationDelay="1"
        />
      
        <Card 
          cardID="Access"
          text="Access and Reimbursement Report"
          link="/access/"
          color="mutedYellow"
          animation="fadeInUp"
          animationDelay="2"
        />

        <Card 
          cardID="Copay"
          text="Co-Pay &amp; Finacial Assistance Services"
          link="/financial/"
          color="mutedBlue"
          animation="fadeInUp"
          animationDelay="3"
        />
      
        <Card 
          cardID="Resources"
          text="Patient Resources"
          link="/resources/"
          color="mutedGreen"
          animation="fadeInUp"
          animationDelay="4"
        />
        
      </div>

      {/*===== Dropzone =====*/}
      {/*<div className={componentStyles.dropZoneWrapper}>
        <div id="DropZone" className={componentStyles.dropZone + ' droppable'}>
          <span className={componentStyles.message}>Drag n' Drop Dropzone</span>
        </div>
      </div>*/}
      
    </div>
  )
}
